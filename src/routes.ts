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
			for await (let line of fileLine) {
				console.log(line);
			}
		}

		return res.send();
	}
);

export { router };
