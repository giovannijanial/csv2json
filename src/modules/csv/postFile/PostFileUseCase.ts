import { Csv2Json } from "../utils/csv2json";

class PostFileUseCase {
	async execute(files: Express.Multer.File[]) {
		const csv2json = new Csv2Json();
		for await (let file of files) {
			const json = await csv2json.converter(file);
			console.log(json);
		}
	}
}

export { PostFileUseCase };
