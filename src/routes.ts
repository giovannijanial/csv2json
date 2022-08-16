import { Router, Request, Response } from "express";
import { Readable } from "stream";
import readLine from "readline";
import multer from "multer";

const router = Router();
const multerConfig = multer();

router.post(
	"/file",
	multerConfig.array("file"),
	async (req: Request, res: Response) => {
		const files = req.files as Express.Multer.File[];
		for (let file of files) {
			const { buffer } = file;

			const readableFile = new Readable();
			readableFile.push(buffer);
			readableFile.push(null); //

			const fileLine = readLine.createInterface({
				input: readableFile,
			}); //cria interface dividindo o arquivo linha por linha

			let lines: string[] = [];

			for await (let line of fileLine) {
				lines.push(line);
			}

			const [...fields] = lines[0].split(",");
			lines.shift();

			const content = lines.map((line) => line.split(","));

			for (let i = 0; i < content.length; i++) {
				console.log(fields[0], content[i][0]);
				console.log(fields[1], content[i][1]);
			}
		}

		return res.send();
	}
);

export { router };
