import jszip from "jszip";

class SendFiles {
	async execute(data: string[]): Promise<string> {
		const zip = jszip();

		data.forEach((file, index) => {
			zip.file(`transform${Date.now()}${index}.json`, file);
		});

		return zip.generateAsync({ type: "base64" });
	}
}

export { SendFiles };
