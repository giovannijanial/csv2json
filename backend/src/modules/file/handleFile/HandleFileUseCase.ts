import { SendFiles } from "../utils/sendFiles";
import { TransformCsv2Json } from "../utils/transformCsv2json";

class HandleFileUseCase {
	async execute(files: Express.Multer.File[]) {
		const transformCsv2json = new TransformCsv2Json();
		const sendFiles = new SendFiles();
		const data: string[] = [];
		for await (let file of files) {
			const json = await transformCsv2json.converter(file);
			data.push(json);
		}
		const result = sendFiles.execute(data);
		return result;
	}
}

export { HandleFileUseCase };
