import { Router } from "express";
import multer from "multer";
import { HandleFileController } from "../modules/file/handleFile/HandleFileController";

const multerConfig = multer();
const fileRoutes = Router();

const postFileController = new HandleFileController();

fileRoutes.post("/", multerConfig.array("file"), postFileController.handle);

export { fileRoutes };
