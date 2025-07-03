import styles from '../../styles/SettingsPanel.module.css';

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

type SettingsPanelProps = {
  settings: SettingsType;
  onSettingsChange: (updated: SettingsType) => void;
  selectedCount: number;
  totalCount: number;
  onGenerate: () => void;
  isProcessing: boolean;
};

export default function SettingsPanel({
  settings,
  onSettingsChange,
  selectedCount,
  totalCount,
  onGenerate,
  isProcessing,
}: SettingsPanelProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue =
      type === 'number' || name === 'rows' || name === 'columns'
        ? parseInt(value)
        : value;

    onSettingsChange({
      ...settings,
      [name]: newValue,
    });
  };

  return (
    <div className={styles.settingsPanel}>
      <h3 className={styles.settingsTitle}>Collage Settings</h3>

      {/* Layout Selection */}
      <div className={styles.settingGroup}>
        <label className={styles.settingLabel}>Layout</label>
        <select
          name="layout"
          value={settings.layout}
          onChange={handleChange}
          className={styles.settingInput}
        >
          <option value="grid">Grid</option>
          <option value="mosaic">Mosaic</option>
          <option value="freeform">Freeform</option>
          <option value="polaroid">Polaroid</option>
        </select>
      </div>

      {/* Grid Layout Specific */}
      {settings.layout === 'grid' && (
        <>
          <div className={styles.settingGroup}>
            <label className={styles.settingLabel}>Rows</label>
            <input
              type="number"
              name="rows"
              min="1"
              max="10"
              value={settings.rows}
              onChange={handleChange}
              className={styles.settingInput}
            />
          </div>

          <div className={styles.settingGroup}>
            <label className={styles.settingLabel}>Columns</label>
            <input
              type="number"
              name="columns"
              min="1"
              max="10"
              value={settings.columns}
              onChange={handleChange}
              className={styles.settingInput}
            />
          </div>
        </>
      )}

      {/* Spacing */}
      <div className={styles.settingGroup}>
        <label className={styles.settingLabel}>Spacing (px)</label>
        <input
          type="range"
          name="spacing"
          min="0"
          max="30"
          value={settings.spacing}
          onChange={handleChange}
          className={styles.settingInput}
        />
        <span className={styles.rangeValue}>{settings.spacing}px</span>
      </div>

      {/* Corner Radius */}
      <div className={styles.settingGroup}>
        <label className={styles.settingLabel}>Corner Radius (px)</label>
        <input
          type="range"
          name="borderRadius"
          min="0"
          max="20"
          value={settings.borderRadius}
          onChange={handleChange}
          className={styles.settingInput}
        />
        <span className={styles.rangeValue}>{settings.borderRadius}px</span>
      </div>

      {/* Background Color */}
      <div className={styles.settingGroup}>
        <label className={styles.settingLabel}>Background Color</label>
        <div className={styles.colorInputContainer}>
          <input
            type="color"
            name="backgroundColor"
            value={settings.backgroundColor}
            onChange={handleChange}
            className={styles.colorInput}
          />
          <span className={styles.colorValue}>{settings.backgroundColor}</span>
        </div>
      </div>

      {/* Output Format */}
      <div className={styles.settingGroup}>
        <label className={styles.settingLabel}>Output Format</label>
        <select
          name="outputFormat"
          value={settings.outputFormat}
          onChange={handleChange}
          className={styles.settingInput}
        >
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
        </select>
      </div>

      {/* Quality for JPEG or WebP */}
      {(settings.outputFormat === 'jpeg' || settings.outputFormat === 'webp') && (
        <div className={styles.settingGroup}>
          <label className={styles.settingLabel}>Quality ({settings.quality}%)</label>
          <input
            type="range"
            name="quality"
            min="10"
            max="100"
            value={settings.quality}
            onChange={handleChange}
            className={styles.settingInput}
          />
        </div>
      )}

      {/* Image Count */}
      <div className={styles.imageCount}>
        Selected: {selectedCount} of {totalCount} images
      </div>

      {/* Generate Button */}
      <button
        onClick={onGenerate}
        disabled={selectedCount === 0 || isProcessing}
        className={styles.generateButton}
      >
        {isProcessing ? 'Generating...' : 'Generate Collage'}
      </button>
    </div>
  );
}
