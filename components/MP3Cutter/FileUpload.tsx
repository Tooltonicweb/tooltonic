import React, { useCallback, useState } from 'react'

const FileUpload = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = React.createRef()

  const handleDragEnter = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length) {
      onFileUpload(files[0])
    }
  }, [onFileUpload])

  const handleFileSelect = (e) => {
    const files = e.target.files
    if (files.length) {
      onFileUpload(files[0])
    }
  }

  const triggerFileSelect = () => {
    fileInputRef.current.click()
  }

  return (
    <div
      className={`upload-container ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerFileSelect}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="audio/*"
        style={{ display: 'none' }}
      />
      <div className="upload-content">
        <div className="upload-icon">📁</div>
        <h3>Drag & Drop your audio file here</h3>
        <p>or click to browse files</p>
        <p className="supported-formats">Supported formats: MP3, WAV, OGG, AAC</p>
      </div>
    </div>
  )
}

export default FileUpload