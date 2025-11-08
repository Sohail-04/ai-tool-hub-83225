import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToolbox } from '@/hooks/useToolbox';
import ToolCard from '@/components/ToolCard';
import { toast } from 'sonner';

const Toolbox = () => {
  const { savedTools, clearToolbox } = useToolbox();

  const handleClearAll = () => {
    if (savedTools.length === 0) return;
    
    if (window.confirm('Are you sure you want to remove all tools from your toolbox?')) {
      clearToolbox();
      toast.success('Your toolbox has been cleared!');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-green-400 mb-2">Your Personal Toolbox</h1>
              <p className="text-gray-400">
                Save and organize your favorite tools in custom collections
              </p>
            </div>
            {savedTools.length > 0 && (
              <Button
                variant="destructive"
                onClick={handleClearAll}
                className="flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {savedTools.length} {savedTools.length === 1 ? 'tool' : 'tools'} saved
          </div>
        </div>

        {savedTools.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Package className="h-24 w-24 text-gray-700 mb-6" />
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Your toolbox is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Start adding your favorite AI tools from the Tools page to keep them organized and easily accessible.
            </p>
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link to="/tools">Browse Tools</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbox;
