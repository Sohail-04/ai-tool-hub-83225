import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { navItems } from "@/nav-items";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with AI Tools: A Beginner's Guide",
    excerpt: "Learn how to integrate AI tools into your workflow and boost productivity. This comprehensive guide covers the basics of AI tools and how to choose the right ones for your needs.",
    author: "Ulhas Nashine",
    date: "2024-01-15",
    category: "Tutorial",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Future of Conversational AI in 2024",
    excerpt: "Explore the latest developments in conversational AI and how they're transforming customer service, content creation, and human-computer interaction.",
    author: "Ulhas Nashine",
    date: "2024-01-12",
    category: "Analysis",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Image Generation: Tips and Best Practices",
    excerpt: "Master the art of AI image generation with these proven techniques. Learn how to craft effective prompts and achieve stunning results every time.",
    author: "Ulhas Nashine",
    date: "2024-01-10",
    category: "Tutorial",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Building a Content Strategy with AI",
    excerpt: "Discover how AI tools can revolutionize your content creation process. From ideation to publication, learn how to leverage AI effectively.",
    author: "Ulhas Nashine",
    date: "2024-01-08",
    category: "Strategy",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "AI Code Assistants: Boosting Developer Productivity",
    excerpt: "See how AI-powered coding tools are changing software development. Real-world examples and productivity metrics from leading tech companies.",
    author: "Ulhas Nashine",
    date: "2024-01-05",
    category: "Development",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Ethical Considerations in AI Tool Usage",
    excerpt: "Understanding the ethical implications of AI tools is crucial. This post explores best practices for responsible AI usage in business and personal projects.",
    author: "Ulhas Nashine",
    date: "2024-01-03",
    category: "Ethics",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">AI Tools Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav navItems={navItems} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">AI Blog</h1>
          </div>
          <p className="text-base md:text-xl text-muted-foreground">
            Insights, tutorials, and strategies for mastering AI tools
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base line-clamp-3 mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span className="text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full min-h-[44px] group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AI Tools Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
