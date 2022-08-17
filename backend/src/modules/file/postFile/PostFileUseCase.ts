import { TransformCsv2Json } from "../utils/transformCsv2json";
import { WriteJsonFile } from "../utils/writeJsonFile";

class PostFileUseCase {
	async execute(files: Express.Multer.File[]) {
		const transformCsv2json = new TransformCsv2Json();
		const writeJsonFile = new WriteJsonFile();
		const data: string[] = [];
		for await (let file of files) {
			const json = await transformCsv2json.converter(file);
			data.push(json);
		}
		writeJsonFile.writer(data);
	}
}

export { PostFileUseCase };
