'use client';

import React from 'react';
import styles from '../styles/compress.module.css';

type Props = {
  settings: {
    format: string;
    quality: number;
    width: number | null;
    height: number | null;
    maintainRatio: boolean;
    brightness: number;
    contrast: number;
  };
  onSettingsChange: (changes: Partial<Props['settings']>) => void;
  onCompress: () => void;
  isProcessing: boolean;
};

const CompressionControls: React.FC<Props> = ({ settings, onSettingsChange, onCompress, isProcessing }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    onSettingsChange({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === '' ? null : parseInt(value, 10);
    onSettingsChange({ [name]: numValue });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onSettingsChange({ [name]: parseInt(value, 10) });
  };

  return (
    <div className={styles.controlsContainer}>
      <h3>Compression Settings</h3>

      <div className={styles.controlGroup}>
        <label>Output Format:</label>
        <select
          name="format"
          value={settings.format}
          onChange={handleChange}
          className={styles.selectControl}
        >
          <option value="original">Keep Original</option>
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
          <option value="pdf">PDF (for images)</option>
        </select>
      </div>

      {(settings.format === 'jpeg' || settings.format === 'webp') && (
        <div className={styles.controlGroup}>
          <label>Quality: {settings.quality}%</label>
          <input
            type="range"
            name="quality"
            min="10"
            max="100"
            step="5"
            value={settings.quality}
            onChange={handleSliderChange}
            className={styles.sliderControl}
          />
        </div>
      )}

      <div className={styles.dimensionControls}>
        <div className={styles.controlGroup}>
          <label>Width (px):</label>
          <input
            type="number"
            name="width"
            value={settings.width ?? ''}
            onChange={handleNumberChange}
            placeholder="Original"
            min="1"
            className={styles.numberControl}
          />
        </div>

        <div className={styles.controlGroup}>
          <label>Height (px):</label>
          <input
            type="number"
            name="height"
            value={settings.height ?? ''}
            onChange={handleNumberChange}
            placeholder="Original"
            min="1"
            className={styles.numberControl}
          />
        </div>

        <div className={styles.controlGroup}>
          <label>
            <input
              type="checkbox"
              name="maintainRatio"
              checked={settings.maintainRatio}
              onChange={handleChange}
              className={styles.checkboxControl}
            />
            Maintain Aspect Ratio
          </label>
        </div>
      </div>

      <div className={styles.controlGroup}>
        <label>Brightness: {settings.brightness}%</label>
        <input
          type="range"
          name="brightness"
          min="0"
          max="200"
          step="5"
          value={settings.brightness}
          onChange={handleSliderChange}
          className={styles.sliderControl}
        />
      </div>

      <div className={styles.controlGroup}>
        <label>Contrast: {settings.contrast}%</label>
        <input
          type="range"
          name="contrast"
          min="0"
          max="200"
          step="5"
          value={settings.contrast}
          onChange={handleSliderChange}
          className={styles.sliderControl}
        />
      </div>

      <button
        onClick={onCompress}
        disabled={isProcessing}
        className={styles.compressButton}
      >
        {isProcessing ? 'Processing...' : 'Compress File'}
      </button>
    </div>
  );
};

export default CompressionControls;
