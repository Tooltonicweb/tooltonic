'use client'; 
 
import { useState, useCallback } from 'react'; 
import { useDropzone } from 'react-dropzone'; 
import { Compressor } from 'compressorjs'; 
 
export default function FileUploader() { 
  const [file, setFile] = useState<File | null>(null); 
  const [preview, setPreview] = useState<string | null>(null); 
  const [loading, setLoading] = useState(false); 
  const [options, setOptions] = useState({ 
    width: 800, 
    height: 600, 
    maintainAspect: true, 
    format: 'jpeg', 
    quality: 80, 
  }); 
 
  const onDrop = useCallback((acceptedFiles: File[]) => { 
    const file = acceptedFiles[0]; 
    if (!file) return; 
 
    setFile(file); 
    setPreview(URL.createObjectURL(file)); 
  }, []); 
 
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: { 
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'] 
    }, 
    maxFiles: 1 
  }); 
 
  const handleResize = async () => { 
    if (!file) return; 
    setLoading(true); 
 
    try { 
      const result = await new Promise<File>((resolve, reject) => { 
        new Compressor(file, { 
          width: options.width, 
          height: options.height, 
          quality: options.quality / 100, 
          mimeType: `image/${options.format}`, 
          success: resolve, 
          error: reject, 
        }); 
      }); 
 
      // Create download link 
      const url = URL.createObjectURL(result); 
      const a = document.createElement('a'); 
      a.href = url; 
      a.download = `resized-image.${options.format}`; 
      document.body.appendChild(a); 
      a.click(); 
      document.body.removeChild(a); 
      URL.revokeObjectURL(url); 
    } catch (error) { 
      console.error('Error resizing image:', error); 
    } finally { 
      setLoading(false); 
    } 
  }; 
 
  return ( 
    <div className="space-y-6"> 
      <div  
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-xl p-12 text-center curs
 or-pointer transition-colors 
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 
hover:border-blue-400'}`} 
      > 
        <input {...getInputProps()} /> 
        <div className="flex flex-col items-center justify-center space-y-3
 "> 
          <svg className="w-12 h-12 text-blue-500" fill="none" stroke="curr
 entColor" viewBox="0 0 24 24"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=
 "2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3
3m0 0l-3 3m3-3v12" /> 
          </svg> 
          <p className="text-lg font-medium"> 
            {isDragActive ? 'Drop the file here' : 'Drag & drop an image, o
 r click to select'} 
          </p> 
          <p className="text-sm text-gray-500">Supports: JPEG, PNG, WEBP</p
 > 
        </div> 
      </div> 
 
      {preview && ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          <div className="space-y-2"> 
            <h3 className="font-medium">Original Image</h3> 
            <img src={preview} alt="Original" className="w-full rounded-lg 
border" /> 
            <p className="text-sm text-gray-500"> 
              Size: {(file?.size / 1024).toFixed(2)} KB 
            </p> 
          </div> 
 
          <div className="space-y-4"> 
            <h3 className="font-medium">Resize Options</h3> 
             
            <div className="grid grid-cols-2 gap-4"> 
              <div> 
                <label className="block text-sm font-medium mb-1">Width (px
 )</label> 
                <input 
                  type="number" 
                  value={options.width} 
                  onChange={(e) => setOptions({...options, width: parseInt(
 e.target.value) || 0})} 
                  className="w-full px-3 py-2 border rounded-md" 
                /> 
              </div> 
              <div> 
                <label className="block text-sm font-medium mb-1">Height (p
 x)</label> 
                <input 
                  type="number" 
                  value={options.height} 
                  onChange={(e) => setOptions({...options, height: parseInt
 (e.target.value) || 0})} 
                  className="w-full px-3 py-2 border rounded-md" 
                /> 
              </div> 
            </div> 
 
            <div className="flex items-center space-x-2"> 
              <input 
                type="checkbox" 
                id="maintainAspect" 
                checked={options.maintainAspect} 
                onChange={(e) => setOptions({...options, maintainAspect: e.
 target.checked})} 
                className="h-4 w-4 text-blue-600 rounded" 
              /> 
              <label htmlFor="maintainAspect" className="text-sm"> 
                Maintain aspect ratio 
              </label> 
            </div> 
 
            <div> 
              <label className="block text-sm font-medium mb-1">Output Form
 at</label> 
              <select 
                value={options.format} 
                onChange={(e) => setOptions({...options, format: e.target.v
 alue})} 
                className="w-full px-3 py-2 border rounded-md" 
              > 
                <option value="jpeg">JPEG</option> 
                <option value="png">PNG</option> 
                <option value="webp">WebP</option> 
              </select> 
            </div> 
 
            <div> 
              <label className="block text-sm font-medium mb-1"> 
                Quality: {options.quality}% 
              </label> 
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={options.quality} 
                onChange={(e) => setOptions({...options, quality: parseInt(
 e.target.value)})} 
                className="w-full" 
              /> 
            </div> 
 
            <button 
              onClick={handleResize} 
              disabled={loading} 
              className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 te
 xt-white font-medium rounded-md transition ${loading ? 'opacity-70 cursor-n
 ot-allowed' : ''}`} 
            > 
              {loading ? 'Processing...' : 'Download Resized Image'} 
            </button> 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
} 