import { Router } from "express";
import multer from "multer";
import { PostFileController } from "../modules/csv/postFile/PostFileController";

const multerConfig = multer();
const fileRoutes = Router();

const postFileController = new PostFileController();

fileRoutes.post("/", multerConfig.array("file"), postFileController.hanlde);

export { fileRoutes };
