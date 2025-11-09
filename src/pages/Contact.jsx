import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MobileNav from "@/components/MobileNav";
import { navItems } from "@/nav-items";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-green-400">AI Tool Tester</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
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
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">Get In Touch</h1>
          <p className="text-base md:text-xl text-gray-300">
            Have questions about AI tools? We're here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4 md:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="min-h-[44px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="min-h-[44px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="min-h-[44px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button type="submit" className="w-full min-h-[44px] bg-green-500 hover:bg-green-600 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-white">Contact Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a 
                        href="tel:+917767009994" 
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        +91 77670 09994
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Mail className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a 
                        href="mailto:contact@aitoolshub.com" 
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        contact@aitoolshub.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <MapPin className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-gray-400">
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-white">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-medium text-white">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-medium text-white">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-medium text-white">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="pt-6">
                  <p className="text-center font-medium mb-2 text-gray-300">Managed by</p>
                  <p className="text-center text-xl font-bold text-white">Ulhas Nashine</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 AI Tool Tester. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
