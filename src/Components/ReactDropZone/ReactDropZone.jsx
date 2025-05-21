import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function DropFiles({ accept, setFileData ,setWorkerDetail}) {
  const [fileName, setFileName] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setFileName(file.name); 

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      // setFileData(base64String); 
      setFileData(p=>({...p,certificate:base64String}))
    };
    reader.readAsDataURL(file);
  }, [setFileData,setWorkerDetail]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept
  });

  return (

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div
        {...getRootProps()}
        style={{
          border: '1px solid var(--lighter-gray)',
          borderRadius: '5px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: isDragActive ? '#f0f8ff' : '#fafafa',
          cursor: 'pointer',
          transition: '0.2s ease-in-out'
        }}
      >
        <input {...getInputProps()} />
        <p>{isDragActive ? 'Drop the file here…' : 'Drag & drop a file here or click to browse'}</p>
      </div>
      {fileName && <p><strong>Selected file:</strong> {fileName}</p>}
    </div>

  );
}

export default DropFiles;
