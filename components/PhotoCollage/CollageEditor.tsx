import { useState, useEffect, useRef } from 'react';
import PreviewPanel from './PreviewPanel';
import SettingsPanel from './SettingsPanel';
import SocialShare from './SocialShare';
import styles from '../../styles/CollageEditor.module.css';

export default function CollageEditor({
  files,
  settings,
  onSettingsChange,
  onGenerate,
  isProcessing,
  collage
}) {
  const [selectedImages, setSelectedImages] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize with all images selected
    setSelectedImages(files.map(file => file));
  }, [files]);

  const handleImageSelect = (file, isSelected) => {
    if (isSelected) {
      setSelectedImages(prev => [...prev, file]);
    } else {
      setSelectedImages(prev => prev.filter(f => f !== file));
    }
  };

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
            selectedCount={selectedImages.length}
            totalCount={files.length}
            onGenerate={onGenerate}
            isProcessing={isProcessing}
          />
        </div>

        <div className={styles.previewColumn}>
          <PreviewPanel
            files={files}
            selectedImages={selectedImages}
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
