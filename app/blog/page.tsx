'use client'; 

import ToolCard from '../../components/ToolCard';
import AdSpace from '../../components/AdSpace';
import { toolsData } from '../../lib/constants';
 
 
export default function Home() { 
  return ( 
    <main className="container mx-auto px-4 py-8"> 
      <AdSpace type="horizontal" /> 
       
      <section className="hero text-center py-12"> 
        <h1 className="text-4xl font-bold mb-4">All Your File Tools in One Place</h1> 
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"> 
          Free online tools for image editing, file conversion, QR codes and more.  
          AI-powered solutions for all your file needs. 
        </p> 
         
        <div className="search-box max-w-lg mx-auto relative"> 
          <input  
            type="text"  
            placeholder="Search for tools..."  
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" 
          /> 
          <button className="absolute right-2 top-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
            </svg> 
          </button> 
        </div> 
      </section> 
 
      <AdSpace type="horizontal" /> 
 
      <section id="tools" className="py-8"> 
        <h2 className="text-3xl font-bold mb-8 text-center">Our Powerful Tools</h2> 
        <div className="tools-grid grid grid-cols-1 sm:grid-cols-2 lg:gridcols-4 gap-6"> 
          {toolsData.map((tool, index) => ( 
            <ToolCard  
              key={tool.id} 
              tool={tool} 
              animationDelay={index * 0.1} 
            /> 
          ))} 
        </div> 
      </section> 
 
      <AdSpace type="horizontal" /> 
 
      <section id="about" className="py-12"> 
        <h2 className="text-3xl font-bold mb-6 text-center">About ToolTonic</h2> 
        <div className="max-w-3xl mx-auto text-center"> 
          <p className="mb-4 text-gray-700"> 
            ToolTonic is a collection of free online tools designed to help you with all your file editing and conversion needs. Our mission is to provide simple, powerful tools that work right in your browser without requiring any software installation. 
          </p> 
          <p className="text-gray-700"> 
            All our tools are powered by modern web technologies and AI to ensure fast processing and high-quality results.  
            We respect your privacy - your files are processed in your browser and never uploaded to our servers unless you choose to save them. 
          </p> 
        </div> 
      </section> 
    </main> 
  ); 
}
