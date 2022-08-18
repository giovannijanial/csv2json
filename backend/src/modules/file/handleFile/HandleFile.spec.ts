import { HandleFileUseCase } from "./HandleFileUseCase";
import { Readable } from "stream";

describe("HandleFile", () => {
	it("Should be able to handle file", async () => {
		const postFileTestUseCase = new HandleFileUseCase();

		const files: Express.Multer.File[] = [];
		const readableFile = new Readable();
		const buffer = new Buffer(232);
		files.push({
			fieldname: "test",
			originalname: "test",
			encoding: "test",
			size: 10,
			stream: readableFile,
			destination: "test",
			filename: "test",
			path: "test",
			buffer: buffer,
			mimetype: "test",
		});

		const result = await postFileTestUseCase.execute(files);

		expect(typeof result).toBe("string");
	});
});
