import { Api } from "../api";

const getAll = () => Api.get(`/file/download`);

export const FileService = {
	getAll,
};
