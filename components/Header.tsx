'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const [darkMode, setDarkMode] = useState(false);
const router = useRouter();

// Handle scroll effect for header
useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 10);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Check for user's preferred color scheme
useEffect(() => {
if (typeof window !== 'undefined') {
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setDarkMode(prefersDark);
}
}, []);

// Toggle dark mode
const toggleDarkMode = () => {
setDarkMode(!darkMode);
document.documentElement.classList.toggle('dark', !darkMode);

};

// Close mobile menu when route changes
useEffect(() => {
const handleRouteChange = () => {
setIsMenuOpen(false);
};
router.events.on('routeChangeComplete', handleRouteChange);
return () => {
router.events.off('routeChangeComplete', handleRouteChange);
};
}, [router.events]);

return (
<header
  className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm' : 'bg-white dark:bg-gray-900'
  } ${darkMode ? 'dark' : ''}`}
>

{/* Ad Space - Top */}

<div className="bg-gray-100 dark:bg-gray-800 text-center py-1 text-xs text-gray-500 dark:text-
gray-400">

Advertisement Space
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600
to-transparent my-1"></div>
</div>

<div className="container mx-auto px-4 py-3">
<div className="flex items-center justify-between">
{/* Logo and Brand */}
<div className="flex items-center space-x-2">
<Link href="/" className="flex items-center space-x-2">
<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex
items-center justify-center text-white font-bold text-xl">
TT

</div>
<div>
<h1 className="text-xl font-bold text-gray-800 dark:text-white">ToolTonic</h1>
<p className="text-xs text-gray-500 dark:text-gray-400">AI Powered file first aid</p>
</div>
</Link>
</div>

{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-6">
<Link href="/tools" className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 font-medium transition-colors">
All Tools
</Link>
<Link href="/features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 font-medium transition-colors">
Features
</Link>
<Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 font-medium transition-colors">
Blog
</Link>
<Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 font-medium transition-colors">
Pricing
</Link>
</nav>

{/* Right Side Controls */}
<div className="flex items-center space-x-4">
<button
onClick={toggleDarkMode}

className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
aria-label="Toggle dark mode"
>
{darkMode ? (
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400"
viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0
11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414
1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414
0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05
6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0
01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
clipRule="evenodd" />
</svg>
) : (
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0
0 20 20" fill="currentColor">
<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>
)}
</button>

<Link href="/login" className="hidden md:inline-block px-4 py-2 text-sm font-medium text-
gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">

Sign In
</Link>

<Link href="/register" className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-
blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-
opacity shadow-md">

Get Started
</Link>

{/* Mobile Menu Button */}
<button

className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100
dark:hover:bg-gray-700 focus:outline-none"
onClick={() => setIsMenuOpen(!isMenuOpen)}
aria-label="Toggle menu"
>
{isMenuOpen ? (
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0
24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6
6l12 12" />
</svg>
) : (
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0
24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4
12h16M4 18h16" />
</svg>
)}
</button>
</div>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
<div className="md:hidden mt-4 pb-4">
<nav className="flex flex-col space-y-3">
<Link href="/tools" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300
hover:bg-gray-100 dark:hover:bg-gray-700 font-medium">
All Tools
</Link>
<Link href="/features" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300
hover:bg-gray-100 dark:hover:bg-gray-700 font-medium">
Features

</Link>
<Link href="/blog" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300
hover:bg-gray-100 dark:hover:bg-gray-700 font-medium">
Blog
</Link>
<Link href="/pricing" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300
hover:bg-gray-100 dark:hover:bg-gray-700 font-medium">
Pricing
</Link>
<div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-2">

<Link href="/login" className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-
300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium">

Sign In
</Link>

<Link href="/register" className="block mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-
purple-600 text-white rounded-md text-center font-medium hover:opacity-90">

Get Started
</Link>
</div>
</nav>
</div>
)}
</div>
</header>
);
};

export default Header;
