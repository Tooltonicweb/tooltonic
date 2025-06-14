'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Compressor from 'compressorjs';

export default function FileCompressorPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [compressedLinks, setCompressedLinks] = useState<string[]>([]);

  const onDrop = useCallback((accepted: File[]) => {
    setFiles(accepted);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
      'application/pdf': ['.pdf'],
    },
    multiple: true,
  });

  const handleCompress = async () => {
    setLoading(true);
    setCompressedLinks([]);

    const newLinks: string[] = [];

    for (const file of files) {
      if (file.type.includes('image/')) {
        // Image compression using CompressorJS
        await new Promise<void>((resolve, reject) => {
          new Compressor(file, {
            quality: 0.6, // 60% quality
            success(result) {
              const compressed = new File([result], file.name, {
                type: result.type,
                lastModified: Date.now(),
              });
              const url = URL.createObjectURL(compressed);
              newLinks.push(url);
              resolve();
            },
            error(err) {
              console.error(err);
              resolve(); // skip this file
            },
          });
        });
      } else if (file.type === 'application/pdf') {
        // PDFs can't be compressed on client side efficiently
        alert(`PDF compression requires server or external tool. Skipping ${file.name}`);
      }
    }

    setCompressedLinks(newLinks);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Compress Files</h1>
      <p className="text-gray-600">
        Reduce file size of images, PDFs and more while maintaining quality.
      </p>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-lg font-medium">
          {isDragActive ? 'Drop files here' : 'Drag & drop or click to select files'}
        </p>
        <p className="text-sm text-gray-500">Supports: JPG, PNG, WebP, PDF</p>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-semibold">Files to compress:</h2>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            {files.map((file, i) => (
              <li key={i}>
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </li>
            ))}
          </ul>

          <button
            onClick={handleCompress}
            disabled={loading}
            className={`px-6 py-2 rounded-md text-white font-semibold ${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Compressing...' : 'Start Compression'}
          </button>
        </div>
      )}

      {compressedLinks.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-semibold">Download Compressed Files:</h2>
          <ul className="list-disc pl-6 text-sm text-green-700">
            {compressedLinks.map((url, i) => (
              <li key={i}>
                <a href={url} download className="underline text-blue-500">
                  Download File {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
