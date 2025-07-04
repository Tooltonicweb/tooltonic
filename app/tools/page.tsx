import Link from 'next/link';
import { toolsData } from '../../lib/constants';
import ToolCard from '../../components/ToolCard';

export default function ToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      

       <section id="tools" className="py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">All Tools</h1>
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
    </main>
  );
}
