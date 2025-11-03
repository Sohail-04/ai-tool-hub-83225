import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sparkles } from 'lucide-react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory, toolCounts }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-green-400" size={20} />
        <h3 className="text-lg font-bold text-white">Categories</h3>
      </div>
      
      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-2">
          <Button
            variant={selectedCategory === 'All' ? 'default' : 'ghost'}
            className={`w-full justify-between ${
              selectedCategory === 'All' 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
            onClick={() => onSelectCategory('All')}
          >
            <span>All Tools</span>
            <Badge variant="secondary" className="ml-2">
              {toolCounts['All'] || 0}
            </Badge>
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              className={`w-full justify-between text-left ${
                selectedCategory === category 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              <span className="truncate">{category}</span>
              <Badge variant="secondary" className="ml-2 flex-shrink-0">
                {toolCounts[category] || 0}
              </Badge>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
