import { useState, useEffect } from 'react';

const TOOLBOX_KEY = 'ai_tools_toolbox';

export const useToolbox = () => {
  const [savedTools, setSavedTools] = useState([]);

  // Load saved tools from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(TOOLBOX_KEY);
    if (stored) {
      try {
        setSavedTools(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing toolbox data:', error);
        setSavedTools([]);
      }
    }
  }, []);

  // Save tools to localStorage whenever savedTools changes
  const saveToStorage = (tools) => {
    localStorage.setItem(TOOLBOX_KEY, JSON.stringify(tools));
    setSavedTools(tools);
  };

  const addToToolbox = (tool) => {
    const exists = savedTools.some(t => t.name === tool.name);
    if (!exists) {
      const updatedTools = [...savedTools, tool];
      saveToStorage(updatedTools);
    }
  };

  const removeFromToolbox = (toolName) => {
    const updatedTools = savedTools.filter(t => t.name !== toolName);
    saveToStorage(updatedTools);
  };

  const isInToolbox = (toolName) => {
    return savedTools.some(t => t.name === toolName);
  };

  const getSavedTools = () => {
    return savedTools;
  };

  const clearToolbox = () => {
    saveToStorage([]);
  };

  return {
    savedTools,
    addToToolbox,
    removeFromToolbox,
    isInToolbox,
    getSavedTools,
    clearToolbox
  };
};
