import { Api } from "../api";

const getFiles = () => Api.get(`/file/download`);
const uploadFiles = (files: FormData) =>
	Api.post(`/file`, files, {
		headers: { "Content-Type": "multipart/form-data" },
	});

export const FileService = {
	getFiles,
	uploadFiles,
};
