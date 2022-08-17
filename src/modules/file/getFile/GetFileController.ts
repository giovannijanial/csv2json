import { Request, Response } from "express";
import { GetFileUseCase } from "./GetFileUseCase";

class GetFileController {
	async hanlde(req: Request, res: Response) {
		const getFileUseCase = new GetFileUseCase();
		const result = await getFileUseCase.execute();
		return res.status(201).send(result);
	}
}

export { GetFileController };
