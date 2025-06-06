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
    description: "Resize your images to any dimension without losing qualit
 y.", 
    icon: "🖼️", 
    slug: "image-resize", 
    color: "from-blue-500 to-indigo-600" 
  }, 
  { 
    id: 2, 
    title: "Compress Files", 
    description: "Reduce file size of images, PDFs and more while maintaini
 ng quality.", 
    icon: "🗜️", 
    slug: "compress-files", 
    color: "from-green-500 to-teal-600" 
  }, 
  { 
    id: 3, 
    title: "Convert File", 
    description: "Convert between different file formats easily and quickly
 .", 
    icon: "🔄", 
    slug: "convert-files", 
    color: "from-purple-500 to-pink-600" 
  }, 
  { 
    id: 4, 
    title: "Generate QR Code", 
    description: "Create custom QR codes for URLs, text, contact info and m
 ore.", 
    icon: "📲", 
    slug: "generate-qr", 
    color: "from-yellow-500 to-orange-600" 
  }, 
  { 
    id: 5, 
    title: "MP3 Cutter", 
    description: "Cut and trim your audio files online without quality loss
 .", 
    icon: "🎵", 
    slug: "mp3-cutter", 
    color: "from-red-500 to-pink-600" 
  }, 
  { 
    id: 6, 
    title: "Photo Collage", 
    description: "Combine multiple photos into beautiful collages with cust
 om layouts.", 
    icon: "🖼️🖼️", 
    slug: "photo-collage", 
    color: "from-indigo-500 to-blue-600" 
  }, 
  { 
    id: 7, 
    title: "Scan QR Code", 
    description: "Scan QR codes from your device's camera or uploaded image
 s.", 
    icon: "📷", 
    slug: "scan-qr", 
    color: "from-teal-500 to-green-600" 
  }, 
  { 
    id: 8, 
    title: "Erase Background", 
    description: "Remove backgrounds from images automatically with AI tech
 nology.", 
    icon: "✂️", 
    slug: "erase-background", 
    color: "from-orange-500 to-red-600" 
  } 
]; 