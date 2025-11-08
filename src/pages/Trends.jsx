import { TrendingUp, ArrowUpRight, Eye, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { navItems } from "@/nav-items";

const trends = [
  {
    id: 1,
    title: "Multimodal AI Models Taking Center Stage",
    category: "AI Innovation",
    description: "The rise of models that can process text, images, audio, and video simultaneously is transforming how we interact with AI.",
    trend: "up",
    growth: "+245%",
    views: "12.5K",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "AI Coding Assistants Reach 50% Developer Adoption",
    category: "Development",
    description: "More than half of professional developers now use AI-powered coding tools daily, dramatically increasing productivity.",
    trend: "up",
    growth: "+180%",
    views: "9.8K",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Open-Source LLMs Challenge Proprietary Models",
    category: "Open Source",
    description: "Llama 3 and other open-source models are closing the performance gap with proprietary alternatives like GPT-4.",
    trend: "up",
    growth: "+320%",
    views: "15.2K",
    date: "2024-01-13",
  },
  {
    id: 4,
    title: "AI Video Generation Goes Mainstream",
    category: "Video AI",
    description: "Tools like Sora and Runway are making high-quality AI video generation accessible to creators worldwide.",
    trend: "up",
    growth: "+420%",
    views: "18.9K",
    date: "2024-01-12",
  },
  {
    id: 5,
    title: "Enterprise AI Adoption Accelerates",
    category: "Business",
    description: "Fortune 500 companies are rapidly integrating AI into core business processes, with 85% planning major AI investments.",
    trend: "up",
    growth: "+165%",
    views: "7.6K",
    date: "2024-01-11",
  },
  {
    id: 6,
    title: "AI Ethics and Regulation in Focus",
    category: "Policy",
    description: "Governments worldwide are introducing new frameworks to regulate AI development and deployment responsibly.",
    trend: "up",
    growth: "+95%",
    views: "6.3K",
    date: "2024-01-10",
  },
  {
    id: 7,
    title: "Personalized AI Agents Emerge",
    category: "AI Agents",
    description: "Custom AI agents that learn from individual user preferences are becoming the next frontier in AI personalization.",
    trend: "up",
    growth: "+280%",
    views: "11.4K",
    date: "2024-01-09",
  },
  {
    id: 8,
    title: "AI in Healthcare Reaches New Milestones",
    category: "Healthcare",
    description: "AI diagnostics tools are now matching or exceeding human expert performance in several medical specialties.",
    trend: "up",
    growth: "+210%",
    views: "8.7K",
    date: "2024-01-08",
  },
];

const Trends = () => {
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
                  <a href={item.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </a>
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
            <TrendingUp className="h-8 w-8 md:h-12 md:w-12 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">AI Trends</h1>
          </div>
          <p className="text-base md:text-xl text-muted-foreground">
            Stay ahead with the latest trends and developments in artificial intelligence
          </p>
        </div>
      </section>

      {/* Trends Grid */}
      <section className="pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {trends.map((trend) => (
              <Card key={trend.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{trend.category}</Badge>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-sm font-semibold">{trend.growth}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg">{trend.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base mt-2">
                    {trend.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(trend.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{trend.views} views</span>
                    </div>
                  </div>
                </CardContent>
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

export default Trends;
