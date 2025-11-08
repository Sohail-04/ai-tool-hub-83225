import React, { useState, useMemo } from 'react';
import { Search, Grid3x3, List, Sparkles, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { getAllTools, getCategories, filterTools } from '@/utils/toolsUtils';
import ToolCard from '@/components/ToolCard';
import CategoryFilter from '@/components/CategoryFilter';

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const allTools = useMemo(() => getAllTools(), []);
  const categories = useMemo(() => getCategories(), []);
  
  const filteredTools = useMemo(() => {
    return filterTools(selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const toolCounts = useMemo(() => {
    const counts = { 'All': allTools.length };
    categories.forEach(category => {
      counts[category] = allTools.filter(tool => tool.category === category).length;
    });
    return counts;
  }, [allTools, categories]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">AI Tools Directory</h1>
              <p className="text-gray-400">Discover and explore {allTools.length} cutting-edge AI tools</p>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-green-500 hover:bg-green-600' : ''}
              >
                <Grid3x3 size={20} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-green-500 hover:bg-green-600' : ''}
              >
                <List size={20} />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search tools by name, category, or description..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-400"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden border-gray-700">
                  <Filter size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gray-900 text-white border-gray-800">
                <SheetHeader>
                  <SheetTitle className="text-white">Filter by Category</SheetTitle>
                  <SheetDescription className="text-gray-400">
                    Choose a category to filter the tools
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategorySelect}
                    toolCounts={toolCounts}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-48 lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
                toolCounts={toolCounts}
              />
            </div>
          </aside>

          {/* Tools Grid */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="text-green-400" size={24} />
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'All' ? 'All Tools' : selectedCategory}
                </h2>
                <span className="text-gray-400">({filteredTools.length})</span>
              </div>
            </div>

            {/* Tools Grid/List */}
            {filteredTools.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
                  : 'flex flex-col gap-4'
              }>
                {filteredTools.map((tool, index) => (
                  <ToolCard key={`${tool.name}-${index}`} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">No tools found</h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Explore the latest AI tools and stay ahead of the curve</p>
        </div>
      </footer>
    </div>
  );
};

export default Tools;
