import fs from "fs";
class WriteJsonFile {
	async writer(data: string[]) {
		fs.mkdir("./data/userid", (err) => {
			if (err) console.log(err);
			let counter = 0;
			for (let item of data) {
				fs.writeFileSync(
					`./data/userid/transform${Date.now()}${counter}.json`,
					item
				);
				counter++;
			}
		});
	}
}

export { WriteJsonFile };
