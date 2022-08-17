import { Request, Response } from "express";
import { GetFileUseCase } from "./GetFileUseCase";

class GetFileController {
	async hanlde(req: Request, res: Response) {
		const getFileUseCase = new GetFileUseCase();
		const result = await getFileUseCase.execute();
		res.send(result); // Set disposition and send it
		return res.status(201).json(result);
	}
}

export { GetFileController };
