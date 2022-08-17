import { Request, Response } from "express";
import { PostFileUseCase } from "./PostFileUseCase";

class PostFileController {
	async hanlde(req: Request, res: Response) {
		const files = req.files as Express.Multer.File[];

		const postFileUseCase = new PostFileUseCase();

		const result = await postFileUseCase.execute(files);

		return res.status(201).json(result);
	}
}

export { PostFileController };
