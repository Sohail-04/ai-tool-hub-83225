import toolsData from '@/data/aitools.json';

/**
 * Get all AI tools from the JSON data
 */
export const getAllTools = () => {
  return toolsData.ai_tools || [];
};

/**
 * Get unique categories from all tools
 */
export const getCategories = () => {
  const tools = getAllTools();
  const categories = [...new Set(tools.map(tool => tool.category))];
  return categories.sort();
};

/**
 * Get tools by category
 */
export const getToolsByCategory = (category) => {
  const tools = getAllTools();
  if (!category || category === 'All') return tools;
  return tools.filter(tool => tool.category === category);
};

/**
 * Search tools by name or description
 */
export const searchTools = (query) => {
  if (!query) return getAllTools();
  
  const tools = getAllTools();
  const lowerQuery = query.toLowerCase();
  
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Filter and search tools
 */
export const filterTools = (category, searchQuery) => {
  let tools = getAllTools();
  
  // Apply category filter
  if (category && category !== 'All') {
    tools = tools.filter(tool => tool.category === category);
  }
  
  // Apply search filter
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    tools = tools.filter(tool => 
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.category.toLowerCase().includes(lowerQuery)
    );
  }
  
  return tools;
};

/**
 * Get category color class
 */
export const getCategoryColor = (category) => {
  const colorMap = {
    'Conversational AI': 'text-green-400',
    'Large Language Model': 'text-green-400',
    'Productivity / Coding Assistant': 'text-blue-400',
    'Coding Assistant': 'text-blue-400',
    'Search / Knowledge': 'text-purple-400',
    'Models & APIs': 'text-cyan-400',
    'APIs / Models': 'text-cyan-400',
    'Image Generation': 'text-purple-400',
    'Video & Media': 'text-pink-400',
    'Video AI': 'text-pink-400',
    'Video Avatar': 'text-pink-400',
    'Video Creator': 'text-pink-400',
    'Video Editing': 'text-pink-400',
    'Design / Productivity': 'text-purple-400',
    'Content Writing': 'text-orange-400',
    'Writing Assistant': 'text-orange-400',
    'Productivity': 'text-teal-400',
    'Presentation AI': 'text-indigo-400',
    'Audio & Video Editing': 'text-yellow-400',
    'Transcription / Meeting': 'text-yellow-400',
    'Meeting Assistant': 'text-yellow-400',
    'Process Documentation': 'text-teal-400',
    'Voice & Audio': 'text-yellow-400',
    'Voice Cloning': 'text-yellow-400',
    'Podcasting': 'text-yellow-400',
    'Music / Audio': 'text-yellow-400',
    'Model Sharing': 'text-cyan-400',
    'Prompt Marketplace': 'text-green-400',
    'Prompt Engineering': 'text-green-400',
    'Prompt Management': 'text-green-400',
    'Deployment / Demos': 'text-cyan-400',
    'Automation / Agents': 'text-blue-400',
    'Browser Automation': 'text-blue-400',
    'Automation': 'text-blue-400',
    'Infrastructure': 'text-gray-400',
    'Speech / Audio APIs': 'text-yellow-400',
    'Translation': 'text-red-400',
    'Image Editing': 'text-purple-400',
    'Image Enhancement': 'text-purple-400',
  };
  
  return colorMap[category] || 'text-blue-400';
};
