import { Router } from "express";
import { fileRoutes } from "./file.route";

const routes = Router();
routes.use("/file", fileRoutes);

export { routes };
