import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ToolTonic</h3>
            <p className="mb-4">AI Powered file first aid for all your digital needs.</p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://facebook.com/yourpage" target="_blank" className="text-light hover:text-accent transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657
                  9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89
                  1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
                  1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/yourhandle" target="_blank" className="text-light hover:text-accent transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675
                  0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19
                  8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27
                  8.224 8.224 0 01-2.605.996 4.107 4.107 0
                  00-6.993 3.743 11.65 11.65 0 01-8.457-4.287
                  4.106 4.106 0 001.27 5.477A4.072 4.072 0
                  012.8 9.713v.052a4.105 4.105 0 003.292 4.022
                  4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834
                  2.85A8.233 8.233 0 012 18.407a11.616 11.616 0
                  006.29 1.84" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/yourprofile" target="_blank" className="text-light hover:text-accent transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C5.126 2 3 4.126 3 6.75v10.5C3 19.874 5.126 22 7.75
                  22h8.5C18.874 22 21 19.874 21 17.25V6.75C21 4.126
                  18.874 2 16.25 2h-8.5zM12 8.75a3.25 3.25 0 110
                  6.5 3.25 3.25 0 010-6.5zM6.5 6a1 1 0 112 0 1 1 0 01-2
                  0zm5.5 3.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/yourcompany" target="_blank" className="text-light hover:text-accent transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.238 0 1 1.238 1 3v18c0 1.762
                  1.238 3 3 3h14c1.762 0 3-1.238 3-3V3c0-1.762-1.238-3-3-3zM8
                  20H5v-9h3v9zm-1.5-10.3c-.966 0-1.75-.784-1.75-1.75s.784-1.75
                  1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM20
                  20h-3v-4.7c0-1.2-.027-2.75-1.675-2.75-1.675 0-1.925 1.309-1.925
                  2.664V20h-3v-9h2.887v1.233h.041c.402-.76 1.384-1.562
                  2.85-1.562 3.05 0 3.616 2.008 3.616 4.617V20z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@yourchannel" target="_blank" className="text-light hover:text-accent transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.966 2.966 0 00-2.086-2.096C19.69 3.5
                  12 3.5 12 3.5s-7.69 0-9.412.59a2.966 2.966 0 00-2.086
                  2.096A30.211 30.211 0 000 12a30.21 30.21 0 00.502
                  5.814 2.966 2.966 0 002.086 2.096C4.31 20.5 12
                  20.5 12 20.5s7.69 0 9.412-.59a2.966 2.966 0
                  002.086-2.096A30.21 30.21 0 0024 12a30.211
                  30.211 0 00-.502-5.814zM9.75 15.023V8.977L15.5
                  12l-5.75 3.023z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/yourrepo" target="_blank" className="text-light hover:text-accent transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438
                  9.8 8.205 11.387.6.113.82-.26.82-.577
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729
                  1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809
                  1.304 3.495.997.108-.776.418-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.931
                  0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176
                  0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404
                  c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23
                  3.296-1.23.653 1.653.242 2.873.119 3.176.77.84
                  1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475
                  5.921.43.371.823 1.103.823 2.222 0 1.606-.015
                  2.898-.015 3.293 0 .319.216.694.825.576C20.565
                  21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><a href="/image-resize" className="hover:text-accent transition">Image Resize</a></li>
              <li><a href="/compress-files" className="hover:text-accent transition">Compress Files</a></li>
              <li><a href="/convert-file" className="hover:text-accent transition">Convert File</a></li>
              <li><a href="/generate-qr" className="hover:text-accent transition">Generate QR Code</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-accent transition">About Us</a></li>
              <li><a href="/blog" className="hover:text-accent transition">Blog</a></li>
              <li><a href="/privacy" className="hover:text-accent transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-accent transition">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-accent transition">FAQ</a></li>
              <li><a href="/feedback" className="hover:text-accent transition">Feedback</a></li>
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
