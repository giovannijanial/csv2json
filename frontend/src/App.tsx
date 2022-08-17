import { useState } from 'react'
import { useFile } from './hooks/useFile';

function App() {
  const { getFile, error, loading, success } = useFile();

  return (
    <div>
      <h4>Zip Downloader</h4>
      <button
        className="btn btn-primary"
        disabled={loading}
        onClick={getFile}
      >
        {loading ? "Downloading..." : "Download Zip"}
      </button>
    </div>
  )
}

export default App
