'use client';

import Link from 'next/link';
import { Tool } from '../lib/constants';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: Tool;
  animationDelay: number;
}

export default function ToolCard({ tool, animationDelay }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="tool-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/tools/${tool.slug}`}>
        <div className={`tool-card-icon h-20 flex items-center justify-center bg-gradient-to-r ${tool.color}`}>
          <div className="text-white text-3xl">
            {tool.icon}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{tool.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
          <div className="text-right">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-md text-sm transition">
              Use Tool →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}