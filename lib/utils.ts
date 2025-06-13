/**
* Utility functions for ToolTonic.io
*/

// File size formatter
export const formatFileSize = (bytes: number): string => {
if (bytes === 0) return '0 Bytes';
const k = 1024;
const sizes = ['Bytes', 'KB', 'MB', 'GB'];
const i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// File type checker
export const checkFileType = (file: File, allowedTypes: string[]): boolean => {
const fileType = file.type.split('/')[0];
return allowedTypes.includes(fileType) || allowedTypes.includes(file.type);
};

// Image processor (resize)
export const resizeImage = async (
file: File,
options: { width?: number; height?: number; quality?: number; format?: string }
): Promise<Blob> => {
return new Promise((resolve, reject) => {
const img = new Image();
const reader = new FileReader();

reader.onload = (e) => {
img.src = e.target?.result as string;
};

img.onload = () => {
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

if (!ctx) {
reject(new Error('Canvas context not available'));
return;
}

// Calculate new dimensions maintaining aspect ratio
let width = options.width || img.width;
let height = options.height || img.height;

if (options.width && !options.height) {
height = Math.round((img.height / img.width) * width);
} else if (options.height && !options.width) {
width = Math.round((img.width / img.height) * height);
}

canvas.width = width;
canvas.height = height;

ctx.drawImage(img, 0, 0, width, height);

canvas.toBlob(
(blob) => {
if (blob) {
resolve(blob);
} else {
reject(new Error('Failed to create blob'));

}
},
options.format ? `image/${options.format}` : file.type,
options.quality ? options.quality / 100 : 0.9
);
};

reader.onerror = () => {
reject(new Error('Failed to read file'));
};

reader.readAsDataURL(file);
});
};

// File downloader
export const downloadFile = (blob: Blob, fileName: string): void => {
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = fileName;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
};

// Error handler
export const handleError = (error: unknown, fallbackMessage = 'An error occurred'): string => {
if (error instanceof Error) {
return error.message;

} else if (typeof error === 'string') {
return error;
}
return fallbackMessage;
};

// Debounce function for performance optimization
export const debounce = <F extends (...args: any[]) => any>(
func: F,
wait: number
): ((...args: Parameters<F>) => void) => {
let timeout: ReturnType<typeof setTimeout>;
return (...args: Parameters<F>) => {
clearTimeout(timeout);
timeout = setTimeout(() => func(...args), wait);
};
};

// SEO Helper - Generate meta tags
export const generateMetaTags = (meta: {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image?: string;
}): string => {
  const imageUrl = meta.image || 'https://tooltonic.io/logo.png';

  return `
<title>${meta.title} | ToolTonic</title>
<meta name="description" content="${meta.description}" />
<meta name="keywords" content="${meta.keywords.join(', ')}" />
<link rel="canonical" href="${meta.url}" />

<!-- Open Graph / Facebook -->
<meta property="og:title" content="${meta.title}" />
<meta property="og:description" content="${meta.description}" />
<meta property="og:url" content="${meta.url}" />
<meta property="og:image" content="${imageUrl}" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="500" />
<meta property="og:image:height" content="500" />
<meta property="og:image:alt" content="ToolTonic Logo" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="ToolTonic" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${meta.title}" />
<meta name="twitter:description" content="${meta.description}" />
<meta name="twitter:image" content="${imageUrl}" />

<!-- Icons -->
<link rel="icon" href="/logo.png" type="image/png" />
<link rel="apple-touch-icon" href="/logo.png" />
<meta name="msapplication-TileImage" content="/logo.png" />

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ToolTonic",
  "url": "https://tooltonic.io",
  "logo": "https://tooltonic.io/logo.png"
}
</script>
`;
};


// AdSense loader
export const loadAdSense = (clientId: string, adSlotId: string): void => {
  if (typeof window !== 'undefined') {
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({
      google_ad_client: clientId,
      enable_page_level_ads: true,
    });
  }
};


// Mobile detection
export const isMobile = (): boolean => {
return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
};

// LocalStorage helper
export const storage = {
get: (key: string) => {
if (typeof window !== 'undefined') {
const item = localStorage.getItem(key);
return item ? JSON.parse(item) : null;

}
return null;
},
set: (key: string, value: any) => {
if (typeof window !== 'undefined') {
localStorage.setItem(key, JSON.stringify(value));
}
},
remove: (key: string) => {
if (typeof window !== 'undefined') {
localStorage.removeItem(key);
}
}
};
