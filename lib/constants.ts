export interface Tool { 
  id: number; 
  title: string; 
  description: string; 
  icon: string; 
  slug: string; 
  color: string; 
} 
 
export const toolsData: Tool[] = [ 
  { 
    id: 1, 
    title: "Image Resize", 
    description: "Resize your images to any dimension without losing quality.", 
    icon: "🖼️", 
    slug: "image-resize", 
    color: "from-blue-500 to-indigo-600" 
  }, 
  { 
    id: 2, 
    title: "Compress Files", 
    description: "Reduce file size of images, PDFs and more while maintaining quality.", 
    icon: "🗜️", 
    slug: "compress-files", 
    color: "from-green-500 to-teal-600" 
  }, 
  { 
    id: 3, 
    title: "Convert File", 
    description: "Convert between different file formats easily and quickly.", 
    icon: "🔄", 
    slug: "convert-files", 
    color: "from-purple-500 to-pink-600" 
  }, 
  { 
    id: 4, 
    title: "Generate QR Code", 
    description: "Create custom QR codes for URLs, text, contact info and more.", 
    icon: "📲", 
    slug: "generate-qr", 
    color: "from-yellow-500 to-orange-600" 
  }, 
  { 
    id: 6, 
    title: "Photo Collage", 
    description: "Combine multiple photos into beautiful collages with custom layouts.", 
    icon: "🖼️🖼️", 
    slug: "photo-collage", 
    color: "from-indigo-500 to-blue-600" 
  }, 
  { 
    id: 7, 
    title: "Scan QR Code", 
    description: "Scan QR codes from your device's camera or uploaded images.", 
    icon: "📷", 
    slug: "scan-qr", 
    color: "from-teal-500 to-green-600" 
  }
]; 
