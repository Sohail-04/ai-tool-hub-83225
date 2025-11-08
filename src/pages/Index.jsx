import React from 'react';
import { Search, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAllTools } from '@/utils/toolsUtils';
import ToolCard from '@/components/ToolCard';
import MobileNav from '@/components/MobileNav';

const getFeaturedTools = () => {
  const allTools = getAllTools();
  const featuredNames = ['ChatGPT', 'Midjourney', 'GitHub Copilot', 'Anthropic Claude', 'DALL·E', 'ElevenLabs'];
  return allTools.filter(tool => featuredNames.includes(tool.name)).slice(0, 6);
};

const Index = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tools', path: '/tools' },
    { name: 'Toolbox', path: '/toolbox' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Trends', path: '/trends' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MobileNav navItems={navItems} />
            <Link to="/" className="text-xl sm:text-2xl font-bold text-green-400">AI Tool Tester</Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-green-400">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative hidden md:block">
            <Input type="text" placeholder="Search AI Tools" className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Ultimate AI Tools Resource</h1>
          <p className="text-base md:text-xl mb-8">Testing, Reviewing, and Trending AI Innovations</p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
            <Link to="/tools">Explore Tools</Link>
          </Button>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {getFeaturedTools().map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Expert Reviews</h2>
          <div className="flex space-x-4 md:space-x-8 overflow-x-auto pb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-700 rounded-lg p-4 md:p-6 min-w-[280px] md:min-w-[300px]">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-bold">4.5/5</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">AI Tool Review {item}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">Snippet of the review highlighting key points...</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 text-sm md:text-base">
                  Read Full Review
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-4 md:p-6">
                <TrendingUp className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg md:text-xl font-bold mb-2">AI Trend Article {item}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">Brief snippet of the trending AI topic or news...</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 text-sm md:text-base">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-green-400">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the Latest AI News</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email" className="rounded-full sm:rounded-l-full sm:rounded-r-none flex-1" />
              <Button className="bg-green-500 hover:bg-green-600 rounded-full sm:rounded-l-none sm:rounded-r-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
