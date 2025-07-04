'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Compressor from 'compressorjs';
import styles from '../../../styles/Home.module.css';

export default function ImageResizerPage() {
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

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

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
          success: (res) => {
            const fileName = file.name.replace(/\.[^/.]+$/, '');
            const finalFile = new File([res], `${fileName}_resized.${options.format}`, {
              type: res.type,
              lastModified: Date.now(),
            });
            resolve(finalFile);
          },
          error: reject,
        });
      });

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
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      {/* Upload Box */}
      <div
        className={styles.dropzone}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className={styles.dropzoneContent}>
          <svg style={{ width: '100px', height: '100px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          <p className="font-medium">Drag & drop your image here</p>
          <p>or</p>
          <label className={styles.browseButton}>
            Browse files
            <input
              type="file"
              onChange={handleFileInput}
              className={styles.fileInput}
              accept="image/*"
            />
          </label>
        </div>
      </div>

      {/* Image Preview & Controls */}
      {preview && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium">Original Image</h3>
            <Image
              src={preview}
              alt="Original"
              width={options.width}
              height={options.height}
              className="w-full rounded-lg border"
              unoptimized
            />
            <p className="text-sm text-gray-500">Size: {(file?.size / 1024).toFixed(2)} KB</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Resize Options</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Width (px)</label>
                <input
                  type="number"
                  value={options.width}
                  onChange={(e) => setOptions({ ...options, width: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Height (px)</label>
                <input
                  type="number"
                  value={options.height}
                  onChange={(e) => setOptions({ ...options, height: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="maintainAspect"
                checked={options.maintainAspect}
                onChange={(e) => setOptions({ ...options, maintainAspect: e.target.checked })}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor="maintainAspect" className="text-sm">
                Maintain aspect ratio
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Output Format</label>
              <select
                value={options.format}
                onChange={(e) => setOptions({ ...options, format: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
                <option value="webp">WebP</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quality: {options.quality}%</label>
              <input
                type="range"
                min="1"
                max="100"
                value={options.quality}
                onChange={(e) => setOptions({ ...options, quality: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <button
              onClick={handleResize}
              disabled={loading}
              className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition ${
                loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {loading ? 'Processing...' : 'Download Resized Image'}
            </button>
          </div>
        </div>
      )}

      {/* User Manual */}
      <div className="mt-6 text-center md:col-span-2">
        <a
          href="/manuals/User Manual for Image Resizer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition cursor-pointer"
        >
          📘 Download User Manual (PDF)
        </a>
      </div>
    </div>
  );
}
