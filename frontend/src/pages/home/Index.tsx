import React, { ChangeEvent, useState } from "react";
import { useFile } from "../../hooks/useFile";
import './style.css'


const HomePage = () => {
  const [files, setFiles] = useState<FileList>();
  const { transformFiles, error, loading, success } = useFile();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFiles(event.currentTarget.files)
    }
  }

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append("actioon", "ADD");
    if (files) {
      for (let file of files) {
        formData.append("file", file as Blob)
      }
    }
    transformFiles(formData);

  }

  return (
    <div className="main">
      <h2>CSV to JSON</h2>
      <input type="file" onChange={onFileChange} multiple />
      <button
        className="btn-primary"
        onClick={onFileUpload}
        disabled={loading}>
        {loading ? "Wait..." : "Transform Files"}
      </button>

    </div>
  )
}

export default HomePage