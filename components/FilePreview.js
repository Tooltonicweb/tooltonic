export default function FilePreview({ originalFile, compressedFile }) {
  const getPreview = (file) => {
    if (file.type.startsWith('image/')) {
      return <img src={URL.createObjectURL(file)} alt="preview" style={{ maxWidth: '100%', maxHeight: 300 }} />;
    } else {
      return <p>{file.name}</p>;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
      <div>
        <h4>Original File</h4>
        {getPreview(originalFile)}
      </div>
      <div>
        <h4>Compressed File</h4>
        {getPreview(compressedFile)}
      </div>
    </div>
  );
}
