import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ToolTonic</h3>
            <p className="mb-4">AI Powered file first aid for all your digital needs.</p>
            <div className="flex space-x-4">
              {/* Social media icons here */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/tools/image-resize" className="hover:text-accent transition">Image Resize</Link></li>
              <li><Link href="/tools/compress-files" className="hover:text-accent transition">Compress Files</Link></li>
              <li><Link href="/tools/convert-files" className="hover:text-accent transition">Convert File</Link></li>
              <li><Link href="/tools/generate-qr" className="hover:text-accent transition">Generate QR Code</Link></li>
              <li><Link href="/tools/photo-collage" className="hover:text-accent transition">Photo Collage</Link></li>
              <li><Link href="/tools/scan-qr" className="hover:text-accent transition">Scan QR Code</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition">Blog</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/contact-us" className="hover:text-accent transition">Contact Us</Link></li>
              <li><Link href="/FAQ" className="hover:text-accent transition">FAQ</Link></li>
              <li><Link href="/Feedback" className="hover:text-accent transition">Feedback</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} ToolTonic.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
