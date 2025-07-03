
'use client';

import { useRouter } from 'next/navigation'; // Sirf agar use ho raha ho tab
import ToolCard from '../components/ToolCard';
import { toolsData } from '../lib/constants';
import AdSpace from '../components/AdSpace';

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
         
           
        </div> 
      </section> 
 
 
      <section id="tools" className="py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Powerful Tools</h2>
        <div className="tools-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            ToolTonic is a collection of free online tools designed to help you with all your file editing and conversion needs.  
            Our mission is to provide simple, powerful tools that work right in your browser without requiring any software installation. 
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
