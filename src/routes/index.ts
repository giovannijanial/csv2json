import { Router } from "express";
import { fileRoutes } from "./postFile.route";

const routes = Router();
routes.use("/file", fileRoutes);

export { routes };
