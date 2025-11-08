import React, { useState } from 'react';
import { ExternalLink, Plus, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategoryColor } from '@/utils/toolsUtils';
import { useToolbox } from '@/hooks/useToolbox';
import { toast } from 'sonner';

const ToolCard = ({ tool }) => {
  const [imageError, setImageError] = useState(false);
  const categoryColor = getCategoryColor(tool.category);
  const { addToToolbox, removeFromToolbox, isInToolbox } = useToolbox();
  const inToolbox = isInToolbox(tool.name);

  const handleToggleToolbox = () => {
    if (inToolbox) {
      removeFromToolbox(tool.name);
      toast.error(`✗ ${tool.name} removed from your toolbox!`);
    } else {
      addToToolbox(tool);
      toast.success(`✓ ${tool.name} added to your toolbox!`);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-900 flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img 
                src={tool.logo_url} 
                alt={`${tool.name} logo`}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <Sparkles className="text-green-400" size={24} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-2 text-white">{tool.name}</CardTitle>
            <Badge variant="outline" className={`${categoryColor} border-current`}>
              {tool.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <CardDescription className="text-gray-400 line-clamp-3">
          {tool.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          variant="default" 
          size="sm"
          className="flex-1 bg-green-500 hover:bg-green-600"
          asChild
        >
          <a href={tool.official_link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Tool
          </a>
        </Button>
        <Button 
          variant={inToolbox ? "default" : "outline"}
          size="sm"
          className={inToolbox ? "bg-green-500 hover:bg-green-600" : "text-green-400 border-green-400 hover:bg-green-400 hover:text-white"}
          onClick={handleToggleToolbox}
        >
          {inToolbox ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
          {inToolbox ? "Added" : "Add"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
