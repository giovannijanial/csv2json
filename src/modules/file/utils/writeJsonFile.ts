import fs from "fs";
class WriteJsonFile {
	async writer(data: string[]) {
		fs.mkdir("./json/userid", (err) => {
			if (err) console.log(err);
			for (let item of data) {
				fs.writeFileSync(`./json/userid/transform${Date.now()}.json`, item);
			}
		});
	}
}

export { WriteJsonFile };
