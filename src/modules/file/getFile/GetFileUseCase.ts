import fs from "fs";
import AdmZip from "adm-zip";

class GetFileUseCase {
	async execute() {
		const zip = new AdmZip();
		zip.addLocalFolder("./json/userid");

		content = await fs.readFile("./file4.txt");
		zip.addFile("file4.txt", content);
		zip.writeZip(filepath);
	}
}

export { GetFileUseCase };
