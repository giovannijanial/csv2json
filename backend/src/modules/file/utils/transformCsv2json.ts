import { Readable } from "stream";
import readLine from "readline";

class TransformCsv2Json {
	private async readLineToArray(data: readLine.Interface) {
		let lines: string[] = [];
		for await (let line of data) {
			lines.push(line);
		}
		return lines;
	}

	private getHeader(data: string[]) {
		const header = data[0].split(",");
		data.shift();
		return header;
	}

	private arrayToObject(header: string[], content: string[][]) {
		let arrObjects = [];
		for (let i = 0; i < content.length; i++) {
			arrObjects.push(
				Object.fromEntries(header.map((h, index) => [h, content[i][index]]))
			);
		}
		return arrObjects;
	}

	async converter(file: Express.Multer.File) {
		const { buffer } = file;
		const readableFile = new Readable();
		readableFile.push(buffer);
		readableFile.push(null);

		const fileLine = readLine.createInterface({
			input: readableFile,
		});

		const lines = await this.readLineToArray(fileLine);
		const header = this.getHeader(lines);
		const content = lines.map((line) => line.split(","));
		const arrObject = this.arrayToObject(header, content);

		return JSON.stringify(arrObject);
	}
}

export { TransformCsv2Json };
