'use client'; 
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
<a href="#" className="text-light hover:text-accent transition">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657
9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343
21.128 22 16.991 22 12z" clipRule="evenodd" />
</svg>
</a>
<a href="#" className="text-light hover:text-accent transition">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348
8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996
4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072
0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834
2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
</svg>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-semibold mb-4">Tools</h4>

<ul className="space-y-2">
<li><a href="/image-resize" className="hover:text-accent transition">Image Resize</a></li>
<li><a href="/compress-files" className="hover:text-accent transition">Compress
Files</a></li>
<li><a href="/convert-file" className="hover:text-accent transition">Convert File</a></li>
<li><a href="/generate-qr" className="hover:text-accent transition">Generate QR
Code</a></li>
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
