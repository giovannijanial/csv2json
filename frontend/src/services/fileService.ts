import { Api } from "../api";

const uploadFiles = (files: FormData) =>
	Api.post(`/file`, files, {
		headers: { "Content-Type": "multipart/form-data" },
	});

export const FileService = {
	uploadFiles,
};
