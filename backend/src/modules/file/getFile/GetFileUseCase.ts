import fs from "fs";
import jszip from "jszip";

class GetFileUseCase {
	private addFilesFromDirectoryToZip(directoryPath = "", zip: jszip) {
		const directoryContents = fs.readdirSync(directoryPath, {
			withFileTypes: true,
		});

		directoryContents.forEach(({ name }) => {
			const path = `${directoryPath}/${name}`;
			if (fs.statSync(path).isFile()) {
				zip.file(name, fs.readFileSync(path, "utf-8"));
			}
		});
	}

	async execute() {
		const zip = jszip();

		this.addFilesFromDirectoryToZip("./data/userid", zip);

		const zipAsBase64 = await zip.generateAsync({ type: "base64" });

		return zipAsBase64;
	}
}

export { GetFileUseCase };
