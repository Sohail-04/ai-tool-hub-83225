import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Target, Users, Shield, Zap, TrendingUp, GitBranch, MessageSquare, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MobileNav from '@/components/MobileNav';

const About = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We provide honest, unbiased information about every AI tool, helping you make informed decisions."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "From beginners to professionals, our platform is designed to be intuitive and useful for everyone."
    },
    {
      icon: Star,
      title: "Curated Excellence",
      description: "Every tool is carefully vetted and categorized to ensure quality and relevance."
    },
    {
      icon: Zap,
      title: "Always Updated",
      description: "We continuously track new releases and updates in the AI ecosystem to keep you informed."
    }
  ];

  const roadmap = [
    {
      status: "completed",
      title: "AI Tools Directory",
      description: "Comprehensive database of 100+ AI tools with categorization and search"
    },
    {
      status: "completed",
      title: "Category Filtering",
      description: "Smart filtering system to help users find tools by specific use cases"
    },
    {
      status: "in-progress",
      title: "User Reviews & Ratings",
      description: "Community-driven feedback system for authentic insights"
    },
    {
      status: "planned",
      title: "AI-Powered Recommendations",
      description: "Intelligent suggestions based on your needs and preferences"
    },
    {
      status: "planned",
      title: "Tool Comparison",
      description: "Side-by-side comparison of similar tools to help you choose"
    },
    {
      status: "planned",
      title: "Personal Toolbox",
      description: "Save and organize your favorite tools in custom collections"
    },
    {
      status: "planned",
      title: "Community Contributions",
      description: "Allow users to submit and suggest new AI tools"
    },
    {
      status: "planned",
      title: "Integration Guides",
      description: "Step-by-step tutorials on how to use and integrate tools"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MobileNav navItems={navItems} />
              <Link to="/" className="text-xl md:text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                AI Tool Hub
              </Link>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className={`text-gray-300 hover:text-green-400 transition-colors ${
                        item.path === '/about' ? 'text-green-400 font-semibold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 mb-6">
            <Sparkles className="text-green-400" size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About AI Tool Hub</h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            Simplifying AI tool discovery in a rapidly evolving digital landscape
          </p>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                The <span className="text-green-400 font-semibold">AI Tools Hub</span> is a centralized platform designed to simplify AI tool discovery. In a rapidly evolving digital world, countless AI tools are released every day—making it hard for users to track, evaluate, and choose the right solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This platform <span className="text-green-400 font-semibold">organizes and categorizes</span> these tools with intuitive filters, detailed descriptions, and a clean UI, enabling users—from beginners to professionals—to explore, compare, and save tools effortlessly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Designed for clarity and powered by the community, this hub <span className="text-green-400 font-semibold">bridges the gap</span> between innovative AI technologies and users eager to leverage them in their work and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                    <Sparkles className="text-green-400" size={24} />
                  </div>
                  <CardTitle className="text-white">AI Tools Explorer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    Browse through a comprehensive collection of 100+ carefully curated AI tools across 40+ categories.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-blue-400/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <Target className="text-blue-400" size={24} />
                  </div>
                  <CardTitle className="text-white">Problem Solver</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    We tackle the challenge of scattered AI tools by bringing everything together in one organized hub.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-purple-400/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                    <Users className="text-purple-400" size={24} />
                  </div>
                  <CardTitle className="text-white">User Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    Easy discovery, smart filtering, detailed insights, and community-driven recommendations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:scale-105 transition-transform">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-green-400" size={20} />
                        </div>
                        <CardTitle className="text-base md:text-lg text-white">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm md:text-base text-gray-400">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <GitBranch className="text-green-400" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold">Future Roadmap</h2>
            </div>
            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 hover:border-green-400/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      {item.status === 'completed' && (
                        <CheckCircle className="text-green-400" size={24} />
                      )}
                      {item.status === 'in-progress' && (
                        <TrendingUp className="text-blue-400" size={24} />
                      )}
                      {item.status === 'planned' && (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <Badge 
                          variant="outline" 
                          className={
                            item.status === 'completed' 
                              ? 'border-green-400 text-green-400' 
                              : item.status === 'in-progress'
                              ? 'border-blue-400 text-blue-400'
                              : 'border-gray-600 text-gray-400'
                          }
                        >
                          {item.status === 'completed' && 'Completed'}
                          {item.status === 'in-progress' && 'In Progress'}
                          {item.status === 'planned' && 'Planned'}
                        </Badge>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold">Built by the Community</h2>
            </div>
            <p className="text-lg text-gray-400 mb-8">
              This platform is a passion project created to help people navigate the ever-expanding world of AI tools. We believe in open collaboration and welcome contributions from developers, designers, and AI enthusiasts worldwide.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover the perfect AI tools for your needs
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
            <Link to="/tools">Browse All Tools</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 AI Tool Hub. Empowering users with AI discovery.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
