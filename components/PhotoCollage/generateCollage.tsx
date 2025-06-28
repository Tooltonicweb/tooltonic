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
    quality
  } = settings;

  // Limit max images to fit in the grid
  const maxImages = rows * columns;
  const imagesToUse = files.slice(0, maxImages);

  // Load image elements
  const imageElements = await Promise.all(
    imagesToUse.map(file => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });
    })
  );

  // Define cell size (for simplicity, fix width/height)
  const cellWidth = 200;
  const cellHeight = 200;

  const canvasWidth = columns * cellWidth + (columns - 1) * spacing;
  const canvasHeight = rows * cellHeight + (rows - 1) * spacing;

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw images
  imageElements.forEach((img, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);

    const x = col * (cellWidth + spacing);
    const y = row * (cellHeight + spacing);

    if (borderRadius > 0) {
      // Apply rounded corner clipping
      ctx.save();
      roundRect(ctx, x, y, cellWidth, cellHeight, borderRadius);
      ctx.clip();
    }

    ctx.drawImage(img, x, y, cellWidth, cellHeight);

    if (borderRadius > 0) {
      ctx.restore();
    }
  });

  // Export the canvas to blob
  const mimeType = outputFormat === 'png' ? 'image/png' :
                   outputFormat === 'webp' ? 'image/webp' :
                   'image/jpeg';

  const blob = await new Promise(resolve => {
    canvas.toBlob(resolve, mimeType, quality / 100);
  });

  return blob;
}

// Helper to draw rounded rectangles
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
