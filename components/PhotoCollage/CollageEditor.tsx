'use client';

import { useEffect, useRef } from 'react';
import PreviewPanel from './PreviewPanel';
import SettingsPanel from './SettingsPanel';
import SocialShare from './SocialShare';
import styles from '../../styles/CollageEditor.module.css';

type SettingsType = {
  layout: string;
  rows: number;
  columns: number;
  spacing: number;
  borderRadius: number;
  backgroundColor: string;
  outputFormat: string;
  quality: number;
};

type CollageEditorProps = {
  files: File[];
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  settings: SettingsType;
  onSettingsChange: (settings: SettingsType) => void;
  onGenerate: () => void;
  isProcessing: boolean;
  collage: string | null;
};

export default function CollageEditor({
  files,
  selectedFiles,
  setSelectedFiles,
  settings,
  onSettingsChange,
  onGenerate,
  isProcessing,
  collage,
}: CollageEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Automatically select all files when they change
  useEffect(() => {
    setSelectedFiles(files);
  }, [files, setSelectedFiles]);

  // Select/deselect single image
  const handleImageSelect = (file: File, isSelected: boolean) => {
    if (isSelected) {
      setSelectedFiles(prev => [...prev, file]);
    } else {
      setSelectedFiles(prev => prev.filter(f => f !== file));
    }
  };

  // Download collage
  const handleDownload = () => {
    if (!collage) return;
    const link = document.createElement('a');
    link.href = collage;
    link.download = `tooltonic-collage-${Date.now()}.${settings.outputFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorGrid}>
        <div className={styles.settingsColumn}>
          <SettingsPanel
            settings={settings}
            onSettingsChange={onSettingsChange}
            selectedCount={selectedFiles.length}
            totalCount={files.length}
            onGenerate={onGenerate}
            isProcessing={isProcessing}
          />
        </div>

        <div className={styles.previewColumn}>
          <PreviewPanel
            files={files}
            selectedImages={selectedFiles}
            onImageSelect={handleImageSelect}
            previewUrl={collage}
            settings={settings}
          />

          {collage && (
            <div className={styles.outputActions}>
              <button
                onClick={handleDownload}
                className={styles.downloadButton}
                disabled={!collage}
              >
                Download Collage
              </button>

              <SocialShare
                fileUrl={collage}
                toolName="Photo Collage Maker"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
