import b64ToBlob from "b64-to-blob";
import fileSaver from "file-saver";
import { useCallback, useState } from "react";
import { FileService } from "../services/fileService";

export const useFile = () => {

  const [image, setImage] = useState("");
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const transformFiles = useCallback(async (files: FormData) => {
    setLoading(true);
    try {
      const { data } = await FileService.uploadFiles(files)

      const blob = b64ToBlob(data, "application/zip");
      fileSaver.saveAs(blob, `example.zip`);

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])


  return {
    error,
    loading,
    transformFiles,
    image,
    success,
  }

}
