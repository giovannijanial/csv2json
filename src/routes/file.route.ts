import { Router } from "express";
import multer from "multer";
import { GetFileController } from "../modules/file/getFile/GetFileController";
import { PostFileController } from "../modules/file/postFile/PostFileController";

const multerConfig = multer();
const fileRoutes = Router();

const postFileController = new PostFileController();
const getFileController = new GetFileController();

fileRoutes.post("/", multerConfig.array("file"), postFileController.hanlde);
fileRoutes.get("/download", getFileController.hanlde);

export { fileRoutes };
