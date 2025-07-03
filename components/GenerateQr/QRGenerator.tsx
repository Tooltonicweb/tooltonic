'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { toCanvas } from 'qrcode'
import { Toaster, toast } from 'react-hot-toast'

export default function QRGenerator() {
  const [text, setText] = useState('https://tooltonic.io')
  const [size, setSize] = useState(200)
  const [bgColor, setBgColor] = useState('#ffffff')
  const [fgColor, setFgColor] = useState('#000000')
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('png')
  const [qrImage, setQrImage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null)

  const generateQR = useCallback(async () => {
    if (!text.trim()) {
      toast.error('Please enter text or URL')
      return
    }

    setIsGenerating(true)

    try {
      const options = {
        width: size,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor
        }
      }

      if (canvasRef.current) {
        await toCanvas(canvasRef.current, text, options)
        const dataUrl = canvasRef.current.toDataURL(`image/${format}`)
        setQrImage(dataUrl)

        if (downloadLinkRef.current) {
          downloadLinkRef.current.href = dataUrl
          downloadLinkRef.current.download = `tooltonic-qr-code.${format}`
        }
      }
    } catch (err) {
      console.error(err)
      toast.error('Failed to generate QR code')
    } finally {
      setIsGenerating(false)
    }
  }, [text, size, bgColor, fgColor, format])

  useEffect(() => {
    generateQR()
  }, [generateQR])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateQR()
  }

  const copyToClipboard = () => {
    if (!qrImage || !canvasRef.current) return

    canvasRef.current.toBlob((blob) => {
      if (!blob) return
      const item = new ClipboardItem({ [`image/${format}`]: blob })
      navigator.clipboard.write([item])
        .then(() => toast.success('Copied to clipboard!'))
        .catch(() => toast.error('Failed to copy'))
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                Text or URL to encode
              </label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text, URL, WiFi config, etc."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                  Size (px)
                </label>
                <input
                  id="size"
                  type="range"
                  min="100"
                  max="1000"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center mt-1">{size}px</div>
              </div>

              <div>
                <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-1">
                  Format
                </label>
                <select
                  id="format"
                  value={format}
                  onChange={(e) => setFormat(e.target.value as 'png' | 'jpeg' | 'webp')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="png">PNG</option>
                  <option value="jpeg">JPEG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fgColor" className="block text-sm font-medium text-gray-700 mb-1">
                  Foreground Color
                </label>
                <div className="flex items-center">
                  <input
                    id="fgColor"
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-8 h-8 mr-2"
                  />
                  
                </div>
              </div>

              <div>
                <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-1">
                  Background Color
                </label>
                <div className="flex items-center">
                  <input
                    id="bgColor"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-8 h-8 mr-2"
                  />
                 
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${isGenerating ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isGenerating ? 'Generating...' : 'Generate QR Code'}
            </button>
          </form>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Quick Presets</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setSize(200)
                  setFgColor('#000000')
                  setBgColor('#ffffff')
                  generateQR()
                }}
                className="py-1 px-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
              >
                Default
              </button>
              <button
                onClick={() => {
                  setSize(300)
                  setFgColor('#3b82f6')
                  setBgColor('#ffffff')
                  generateQR()
                }}
                className="py-1 px-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
              >
                Blue
              </button>
              <button
                onClick={() => {
                  setSize(250)
                  setFgColor('#000000')
                  setBgColor('#f3f4f6')
                  generateQR()
                }}
                className="py-1 px-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
              >
                Light Gray BG
              </button>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="border border-gray-200 p-4 rounded-lg">
            <canvas
              ref={canvasRef}
              width={size}
              height={size}
              className="max-w-full h-auto"
              style={{ display: qrImage ? 'block' : 'none' }}
            />
            {!qrImage && (
              <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-500">
                QR Code Preview
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <a
              ref={downloadLinkRef}
              className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={(e) => !qrImage && e.preventDefault()}
            >
              Download QR Code
            </a>
            <button
              onClick={copyToClipboard}
              disabled={!qrImage}
              className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">How to use this QR Code Generator</h3>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
          <li>Enter the text or URL you want to encode</li>
          <li>Customize the size, colors, and format</li>
          <li>Click &quot;Generate QR Code&quot;</li>
          <li>Download or share your QR code</li>
        </ol>
      </div>
    </div>
  )
}
