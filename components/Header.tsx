'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm' : 'bg-white dark:bg-gray-900'} ${darkMode ? 'dark' : ''}`}>
      {/* Top bar (ads) */}
      <div className="bg-gray-100 dark:bg-gray-800 text-center py-1 text-xs text-gray-500 dark:text-gray-400">
        Advertisement Space
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-1"></div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
             <div className="flex items-center space-x-4">
  <Image
    src="/logo.png" // ✅ Public folder path
    alt="ToolTonic Logo"
    width={190}
    height={100}
    className="rounded-lg"
  />

  <Image
    src="/og-image.png" // ✅ Replace with your second image file
    alt="Second Logo"
    width={190}
    height={100}
    className="rounded-lg"
  />
</div>

              
            </Link>
          </div>

          {/* Desktop nav */}
         <nav className="hidden md:flex items-center space-x-6">
  <Link
    href="/tools"
    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    🧰 All Tools
  </Link>

  <Link
    href="/manuals/User Manual for ToolTonic.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    📘 User Manual
  </Link>
</nav>



          {/* Right controls */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            

            {/* Mobile menu toggle */}
            
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/tools" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium">All Tools</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
