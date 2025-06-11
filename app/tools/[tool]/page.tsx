import { notFound } from 'next/navigation';
import { toolsData } from '../../../lib/constants';

export default function ToolPage({ params }: { params: { tool: string } }) {
  const tool = toolsData.find(t => t.slug === params.tool);

  if (!tool) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
      <p>{tool.description}</p>
      {/* Add your tool functionality here */}
    </div>
  );
}
