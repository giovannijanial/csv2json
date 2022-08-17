import fs from "fs";
import jszip from "jszip";

class GetFileUseCase {
	async execute() {
		const zip = jszip();
		const directoryContents = fs.readdirSync("./json/userid", {
			withFileTypes: true,
		});

		directoryContents.forEach(({ name }) => {
			const path = `./json/userid/${name}`;
			if (fs.statSync(path).isFile()) {
				zip.file(path, fs.readFileSync(path, "utf-8"));
			}
		});

		const zipAsBase64 = await zip.generateAsync({ type: "base64" });

		return zipAsBase64;
	}
}

export { GetFileUseCase };
