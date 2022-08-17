import { Readable } from "stream";
import readLine from "readline";

class Csv2Json {
	async converter(file: Express.Multer.File) {
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

		let arr = [];
		for (let i = 0; i < content.length; i++) {
			arr.push(
				Object.fromEntries([
					[fields[0], content[i][0]],
					[fields[1], content[i][1]],
				])
			);
		}
		return JSON.stringify(arr);
	}
}

export { Csv2Json };
