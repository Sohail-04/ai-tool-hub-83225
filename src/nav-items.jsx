import { Home, Info, Wrench, Star, TrendingUp, BookOpen, Mail, Package } from "lucide-react";
import Index from "./pages/Index.jsx";
import Tools from "./pages/Tools.jsx";
import About from "./pages/About.jsx";
import Toolbox from "./pages/Toolbox.jsx";
import Reviews from "./pages/Reviews.jsx";
import Trends from "./pages/Trends.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    component: Index,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    component: About,
  },
  {
    title: "Tools",
    to: "/tools",
    icon: <Wrench className="h-4 w-4" />,
    component: Tools,
  },
  {
    title: "Toolbox",
    to: "/toolbox",
    icon: <Package className="h-4 w-4" />,
    component: Toolbox,
  },
  {
    title: "Reviews",
    to: "/reviews",
    icon: <Star className="h-4 w-4" />,
    component: Reviews,
  },
  {
    title: "Trends",
    to: "/trends",
    icon: <TrendingUp className="h-4 w-4" />,
    component: Trends,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    component: Blog,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    component: Contact,
  },
];
