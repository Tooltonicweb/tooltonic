import Link from 'next/link';
import { toolsData } from '../../lib/constants';

export default function ToolsPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">All Tools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {toolsData.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block p-4 border rounded hover:bg-gray-50 transition"
          >
            <h2 className="text-2xl font-semibold">{tool.title}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
