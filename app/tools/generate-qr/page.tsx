'use client';

import { useState, useRef, useEffect } from 'react'
import QRGenerator from '../../../components/GenerateQr/QRGenerator'
import AdSpace from '../../../components/GenerateQr/AdSpace'
import SeoHead from '../../../components/GenerateQr/SeoHead'

export default function QRGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead
        title="Free QR Code Generator | ToolTonic - AI Powered File First Aid"
        description="Generate customizable QR codes for free with ToolTonic. AI-powered QR code generator with download options, size customization, and more."
        canonical="https://tooltonic.io/qr-generator"
      />

      <AdSpace position="top" />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdSpace position="left" />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
              QR Code Generator
            </h1>
            <p className="text-center mb-8 text-gray-600">
              Create customizable QR codes for websites, contact info, WiFi credentials, and more.
            </p>
            <QRGenerator />
          </div>

          <AdSpace position="right" />
        </div>
      </main>

      <AdSpace position="bottom" />
    </div>
  )
}
