import fs from "fs";
import jszip from "jszip";

class SendFiles {
	async execute(data: string[]) {
		const zip = jszip();

		data.forEach((file, index) => {
			console.log(file);
			zip.file(`transform${Date.now()}${index}.json`, file);
		});

		const zipAsBase64 = await zip.generateAsync({ type: "base64" });

		return zipAsBase64;
	}
}

export { SendFiles };