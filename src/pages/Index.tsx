import { ArrowRight, Shield, Users, Calendar, FileText, Star, Heart, GraduationCap, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-family.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Health Protection",
      description: "Comprehensive medical coverage for your child from birth to 25 years"
    },
    {
      icon: GraduationCap,
      title: "Education Security",
      description: "Guaranteed education fund to support your child's academic dreams"
    },
    {
      icon: Shield,
      title: "Accident Coverage",
      description: "24/7 protection against accidents and emergencies"
    },
    {
      icon: Zap,
      title: "Quick Claims",
      description: "Fast and hassle-free claim processing with digital documentation"
    }
  ];

  const stats = [
    { label: "Children Protected", value: "50,000+", icon: Users },
    { label: "Claims Settled", value: "₹25 Crores", icon: FileText },
    { label: "Years of Coverage", value: "25 Years", icon: Calendar },
    { label: "Customer Rating", value: "4.9/5", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Secure Your Child's Future with 
                <span className="text-secondary"> 2050 Child+Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Comprehensive insurance for children born from 2025 onwards. Health, education, and accident protection until 2047.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Registration</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-sm opacity-90 mb-1">Starting Premium</p>
                  <p className="text-2xl font-bold">₹2,999/year</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-sm opacity-90 mb-1">Coverage Period</p>
                  <p className="text-lg font-semibold">Birth to 25 Years</p>
                </div>
                <Button variant="secondary" className="w-full" size="lg">
                  Register Child Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full inline-block mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
              Why Choose 2050 Child+Future?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection designed specifically for the next generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-hero p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-professional-navy">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-6">
            Ready to Secure Your Child's Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of parents who trust SBI Insurance for their children's protection. 
            Start your journey today with our comprehensive 2050 Child+Future policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Register Your Child <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-professional-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">2050 Child+Future</span>
                  <p className="text-sm opacity-75">SBI Insurance</p>
                </div>
              </div>
              <p className="text-sm opacity-75">
                Securing tomorrow's leaders with comprehensive insurance protection.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Policies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Claims</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dashboard</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm opacity-75">
                <p>📞 1800-123-4567</p>
                <p>✉️ support@sbiinsurance.com</p>
                <p>🕒 24/7 Customer Support</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 SBI Insurance. All rights reserved. | 2050 Child+Future Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
