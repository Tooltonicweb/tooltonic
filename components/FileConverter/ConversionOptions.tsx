// File: components/FileConverter/ConversionOptions.tsx
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

type ConversionOptionsProps = {
  file: File;
  options: {
    format: string;
    quality: number;
    width: number | null;
    height: number | null;
    maintainAspect: boolean;
    brightness: number;
    contrast: number;
    purpose: string;
  };
  onOptionChange: (updatedOptions: Partial<ConversionOptionsProps['options']>) => void;
  onConvert: () => void;
  onDownload: () => void;
  onReset: () => void;
  isProcessing: boolean;
  convertedFile: File | null;
};

const ConversionOptions: React.FC<ConversionOptionsProps> = ({
  file,
  options,
  onOptionChange,
  onConvert,
  onDownload,
  onReset,
  isProcessing,
  convertedFile,
}) => {
  const [preset, setPreset] = useState('custom');

  const formatOptions = [
    { value: 'original', label: 'Keep original' },
    { value: 'jpeg', label: 'JPEG' },
    { value: 'png', label: 'PNG' },
    { value: 'webp', label: 'WebP' },
    { value: 'pdf', label: 'PDF' },
  ];

  const purposeOptions = [
    { value: 'web', label: 'Web' },
    { value: 'print', label: 'Print' },
    { value: 'social', label: 'Social Media' },
    { value: 'document', label: 'Document' },
  ];

  const presets = [
    { id: 'instagram', label: 'Instagram Post', width: 1080, height: 1080 },
    { id: 'facebook', label: 'Facebook Post', width: 1200, height: 630 },
    { id: 'twitter', label: 'Twitter Post', width: 1024, height: 512 },
    { id: 'linkedin', label: 'LinkedIn Post', width: 1200, height: 627 },
    { id: 'a4', label: 'A4 Document', width: 2480, height: 3508 },
    { id: 'custom', label: 'Custom', width: null, height: null },
  ];

  const handlePresetChange = (presetId: string) => {
    const selected = presets.find((p) => p.id === presetId);
    if (!selected) return;

    setPreset(presetId);

    if (presetId !== 'custom') {
      onOptionChange({
        width: selected.width,
        height: selected.height,
        maintainAspect: false,
      });
    }
  };

  const handleDimensionChange = (e: React.ChangeEvent<HTMLInputElement>, key: 'width' | 'height') => {
    const value = e.target.value ? parseInt(e.target.value) : null;
    onOptionChange({ [key]: value });
  };

  return (
    <div className={styles.optionsContainer}>
      <h3>Conversion Options</h3>

      {/* Preset Buttons */}
      <div className={styles.optionGroup}>
        <label>Preset Sizes:</label>
        <div className={styles.presetButtons}>
          {presets.map((presetOption) => (
            <button
              key={presetOption.id}
              className={`${styles.presetButton} ${preset === presetOption.id ? styles.activePreset : ''}`}
              onClick={() => handlePresetChange(presetOption.id)}
              type="button"
            >
              {presetOption.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dimensions */}
      <div className={styles.optionGroup}>
        <label>Dimensions (px):</label>
        <div className={styles.dimensionInputs}>
          <div>
            <input
              type="number"
              placeholder="Width"
              min="1"
              value={options.width || ''}
              onChange={(e) => handleDimensionChange(e, 'width')}
            />
            <span>px</span>
          </div>
          <span className={styles.dimensionX}>×</span>
          <div>
            <input
              type="number"
              placeholder="Height"
              min="1"
              value={options.height || ''}
              onChange={(e) => handleDimensionChange(e, 'height')}
            />
            <span>px</span>
          </div>
        </div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={options.maintainAspect}
            onChange={() => onOptionChange({ maintainAspect: !options.maintainAspect })}
          />
          Maintain aspect ratio
        </label>
      </div>

      {/* Format */}
      <div className={styles.optionGroup}>
        <label>Output Format:</label>
        <select
          value={options.format}
          onChange={(e) => onOptionChange({ format: e.target.value })}
          className={styles.formatSelect}
        >
          {formatOptions.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>

      {/* Quality */}
      <div className={styles.optionGroup}>
        <label>Quality: {options.quality}%</label>
        <input
          type="range"
          min="1"
          max="100"
          value={options.quality}
          onChange={(e) => onOptionChange({ quality: parseInt(e.target.value) })}
          className={styles.slider}
        />
      </div>

      {/* Brightness */}
      <div className={styles.optionGroup}>
        <label>Brightness: {options.brightness}%</label>
        <input
          type="range"
          min="0"
          max="200"
          value={options.brightness}
          onChange={(e) => onOptionChange({ brightness: parseInt(e.target.value) })}
          className={styles.slider}
        />
      </div>

      {/* Contrast */}
      <div className={styles.optionGroup}>
        <label>Contrast: {options.contrast}%</label>
        <input
          type="range"
          min="0"
          max="200"
          value={options.contrast}
          onChange={(e) => onOptionChange({ contrast: parseInt(e.target.value) })}
          className={styles.slider}
        />
      </div>

      {/* Purpose */}
      <div className={styles.optionGroup}>
        <label>Purpose:</label>
        <select
          value={options.purpose}
          onChange={(e) => onOptionChange({ purpose: e.target.value })}
          className={styles.formatSelect}
        >
          {purposeOptions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        {!convertedFile ? (
          <button
            onClick={onConvert}
            disabled={isProcessing}
            className={styles.convertButton}
            type="button"
          >
            {isProcessing ? 'Processing...' : 'Convert File'}
          </button>
        ) : (
          <button
            onClick={onDownload}
            className={styles.downloadButton}
            type="button"
          >
            Download Converted File
          </button>
        )}

        <button
          onClick={onReset}
          className={styles.resetButton}
          type="button"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default ConversionOptions;
