import { HandleFileUseCase } from "./HandleFileUseCase";
import { Readable } from "stream";
import { Buffer } from "buffer";

describe("HandleFile", () => {
	it("Should be able to handle file", async () => {
		const postFileTestUseCase = new HandleFileUseCase();

		const files: Express.Multer.File[] = [];
		const readableFile = new Readable();
		const buffer = Buffer.alloc(10);

		files.push({
			fieldname: "file",
			originalname: "test.csv",
			encoding: "7bit",
			size: 108,
			stream: readableFile,
			destination: "test",
			filename: "test",
			path: "test",
			buffer: buffer,
			mimetype: "text/csv",
		});

		const result = await postFileTestUseCase.execute(files);

		expect(typeof result).toBe("string");
	});
});
