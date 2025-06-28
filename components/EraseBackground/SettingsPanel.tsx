import { useState, useEffect } from 'react';
import styles from '../../styles/SettingsPanel.module.css';

const SettingsPanel = ({ settings, onSettingsChange, onReset, processedImage }) => {
  const [currentSettings, setCurrentSettings] = useState(settings);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setCurrentSettings(settings);
  }, [settings]);

  const handleSettingChange = (key, value) => {
    const newSettings = { ...currentSettings, [key]: value };
    setCurrentSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const handleDownload = () => {
    if (!processedImage) return;

    setIsDownloading(true);
    fetch(processedImage)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `background-removed.${currentSettings.format}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Download error:', error);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  };

  const shareOnSocialMedia = (platform) => {
    if (!processedImage) return;

    const text = 'I just removed the background from my image using ToolTonic!';
    const url = encodeURIComponent(window.location.href);
    const media = encodeURIComponent(processedImage);
    const encodedText = encodeURIComponent(text);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${url}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${encodedText}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.settingsPanel}>
      <div className={styles.settingsGroup}>
        <h4 className={styles.settingsTitle}>Output Settings</h4>

        <div className={styles.setting}>
          <label>Format:</label>
          <select
            value={currentSettings.format}
            onChange={(e) => handleSettingChange('format', e.target.value)}
          >
            <option value="png">PNG (Transparent)</option>
            <option value="jpg">JPG</option>
            <option value="webp">WebP</option>
          </select>
        </div>

        {currentSettings.format !== 'png' && (
          <div className={styles.setting}>
            <label>Quality: {currentSettings.quality}%</label>
            <input
              type="range"
              min="10"
              max="100"
              value={currentSettings.quality}
              onChange={(e) => handleSettingChange('quality', parseInt(e.target.value))}
            />
          </div>
        )}

        <div className={styles.setting}>
          <label>Size:</label>
          <select
            value={currentSettings.size}
            onChange={(e) => handleSettingChange('size', e.target.value)}
          >
            <option value="original">Original Size</option>
            <option value="preview">Preview (Small)</option>
            <option value="medium">Medium</option>
            <option value="hd">HD</option>
            <option value="4k">4K</option>
          </select>
        </div>

        <div className={styles.setting}>
          <label>Brightness: {currentSettings.brightness}%</label>
          <input
            type="range"
            min="0"
            max="200"
            value={currentSettings.brightness}
            onChange={(e) => handleSettingChange('brightness', parseInt(e.target.value))}
          />
        </div>

        <div className={styles.setting}>
          <label>Purpose:</label>
          <select
            value={currentSettings.purpose}
            onChange={(e) => handleSettingChange('purpose', e.target.value)}
          >
            <option value="general">General Use</option>
            <option value="ecommerce">E-commerce Product</option>
            <option value="portrait">Portrait</option>
            <option value="social">Social Media</option>
          </select>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.button} ${styles.downloadButton}`}
          onClick={handleDownload}
          disabled={!processedImage || isDownloading}
        >
          {isDownloading ? 'Downloading...' : 'Download'}
        </button>
        <button className={`${styles.button} ${styles.resetButton}`} onClick={onReset}>
          Start Over
        </button>
      </div>

      {processedImage && (
        <div className={styles.shareSection}>
          <h4 className={styles.settingsTitle}>Share</h4>
          <div className={styles.socialButtons}>
            <button
              className={`${styles.socialButton} ${styles.facebook}`}
              onClick={() => shareOnSocialMedia('facebook')}
            >
              Facebook
            </button>
            <button
              className={`${styles.socialButton} ${styles.twitter}`}
              onClick={() => shareOnSocialMedia('twitter')}
            >
              Twitter
            </button>
            <button
              className={`${styles.socialButton} ${styles.pinterest}`}
              onClick={() => shareOnSocialMedia('pinterest')}
            >
              Pinterest
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
