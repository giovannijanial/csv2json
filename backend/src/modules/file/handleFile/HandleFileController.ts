import { Request, Response } from "express";
import { HandleFileUseCase } from "./HandleFileUseCase";

class HandleFileController {
	async handle(req: Request, res: Response) {
		const files = req.files as Express.Multer.File[];

		const postFileUseCase = new HandleFileUseCase();

		const result = await postFileUseCase.execute(files);

		return res.status(201).send(result);
	}
}

export { HandleFileController };
