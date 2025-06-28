'use client';

interface CompressionControlsProps {
  settings: { quality: number };
  onSettingsChange: (settings: { quality: number }) => void;
  onCompress: () => void;
  isProcessing: boolean;
}

export default function CompressionControls({
  settings,
  onSettingsChange,
  onCompress,
  isProcessing,
}: CompressionControlsProps) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Compression Settings</h3>
      <label>
        Quality: {settings.quality}
        <input
          type="range"
          min="10"
          max="100"
          value={settings.quality}
          onChange={(e) => onSettingsChange({ quality: Number(e.target.value) })}
          disabled={isProcessing}
        />
      </label>
      <br />
      <button onClick={onCompress} disabled={isProcessing} style={{ marginTop: 10 }}>
        {isProcessing ? 'Compressing...' : 'Compress Now'}
      </button>
    </div>
  );
}
