export default async function generateCollage(files, settings) {
  if (!files || files.length === 0) return null;

  const {
    layout,
    rows,
    columns,
    spacing,
    borderRadius,
    backgroundColor,
    outputFormat,
    quality,
  } = settings;

  const maxImages = rows * columns;
  const imagesToUse = files.slice(0, maxImages);

  // Load images safely with error handling and URL cleanup
  const imageElements = await Promise.all(
    imagesToUse.map(file => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);

        img.onload = () => {
          URL.revokeObjectURL(objectUrl); // cleanup
          resolve(img);
        };
        img.onerror = (e) => {
          console.error("Image failed to load", e);
          URL.revokeObjectURL(objectUrl);
          reject(e);
        };

        img.src = objectUrl;
      });
    })
  );

  // Cell dimensions
  const cellWidth = 200;
  const cellHeight = 200;

  const safeSpacing = Math.max(spacing, 0);
  const safeRadius = Math.max(borderRadius, 0);

  const canvasWidth = columns * cellWidth + (columns - 1) * safeSpacing;
  const canvasHeight = rows * cellHeight + (rows - 1) * safeSpacing;

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = backgroundColor || '#ffffff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw each image with spacing and rounded corners
  imageElements.forEach((img, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);

    const x = col * (cellWidth + safeSpacing);
    const y = row * (cellHeight + safeSpacing);

    if (safeRadius > 0) {
      ctx.save();
      roundRect(ctx, x, y, cellWidth, cellHeight, safeRadius);
      ctx.clip();
    }

    ctx.drawImage(img, x, y, cellWidth, cellHeight);

    if (safeRadius > 0) {
      ctx.restore();
    }
  });

  // Export canvas as blob
  const mimeType =
    outputFormat === 'png' ? 'image/png' :
    outputFormat === 'webp' ? 'image/webp' :
    'image/jpeg';

  const blob = await new Promise(resolve =>
    canvas.toBlob(resolve, mimeType, quality / 100)
  );

  return blob;
}

// Helper for rounded rectangle path
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
