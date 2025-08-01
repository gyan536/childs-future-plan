import { ArrowRight, Shield, Heart, GraduationCap, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PolicyCard from "@/components/PolicyCard";

const Policies = () => {
  const policyPlans = [
    {
      title: "Basic Plan",
      price: "2,999",
      originalPrice: "3,999",
      variant: "basic" as const,
      features: [
        "Health coverage up to ₹2 Lakhs",
        "Accident protection ₹1 Lakh",
        "Education fund ₹50,000",
        "24/7 Customer support",
        "Annual health checkup",
        "Cashless hospital network",
      ]
    },
    {
      title: "Silver Plan",
      price: "4,999",
      originalPrice: "6,999",
      variant: "silver" as const,
      isPopular: true,
      features: [
        "Health coverage up to ₹5 Lakhs",
        "Accident protection ₹3 Lakhs",
        "Education fund ₹2 Lakhs",
        "Mental health coverage",
        "Dental & vision care",
        "Premium waiver benefit",
        "No-claim bonus rewards",
        "International emergency coverage",
      ]
    },
    {
      title: "Gold Plan",
      price: "7,999",
      originalPrice: "9,999",
      variant: "gold" as const,
      features: [
        "Health coverage up to ₹10 Lakhs",
        "Accident protection ₹5 Lakhs",
        "Education fund ₹5 Lakhs",
        "Complete maturity benefit",
        "Career guidance support",
        "Study abroad coverage",
        "Family health coverage",
        "Investment component",
        "Tax benefits under 80C",
        "Guaranteed returns",
      ]
    }
  ];

  const coverageDetails = [
    {
      icon: Heart,
      title: "Health Protection",
      description: "Comprehensive medical coverage from birth to 25 years",
      features: ["Hospitalization", "OPD Coverage", "Preventive Care", "Mental Health"]
    },
    {
      icon: GraduationCap,
      title: "Education Security",
      description: "Secure your child's educational future with guaranteed funds",
      features: ["School Fees", "Higher Education", "Study Abroad", "Skill Development"]
    },
    {
      icon: Car,
      title: "Accident Coverage",
      description: "24/7 protection against accidents and emergencies",
      features: ["Emergency Transport", "Disability Benefits", "Recovery Support", "Family Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Child's Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Comprehensive insurance plans for children born from 2025 onwards, covering health, education, and accident protection until 2047
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Choose Your Plan <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
              Complete Protection Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 2050 Child+Future policy provides comprehensive coverage across three essential areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageDetails.map((coverage, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="bg-gradient-hero p-3 rounded-lg inline-block mb-6">
                  <coverage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-professional-navy mb-4">
                  {coverage.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {coverage.description}
                </p>
                <ul className="space-y-2">
                  {coverage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
              Choose Your Protection Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect coverage level for your child's needs and secure their future today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {policyPlans.map((plan, index) => (
              <PolicyCard key={index} {...plan} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Need help choosing the right plan? Our experts are here to help.
            </p>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-6">
                Why Choose 2050 Child+Future?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-success p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-professional-navy mb-2">
                      Long-term Security
                    </h3>
                    <p className="text-muted-foreground">
                      Coverage from birth until 2047, ensuring your child's protection throughout their formative years.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-professional-navy mb-2">
                      Education Investment
                    </h3>
                    <p className="text-muted-foreground">
                      Built-in education fund that grows over time to support your child's academic aspirations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-professional-navy mb-2">
                      Comprehensive Health
                    </h3>
                    <p className="text-muted-foreground">
                      Complete health coverage including preventive care, mental health, and emergency services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <p className="mb-6 opacity-90">
                Join thousands of parents who have already secured their children's future with our comprehensive insurance plans.
              </p>
              <div className="space-y-4">
                <Button variant="secondary" size="lg" className="w-full">
                  Register Your Child
                </Button>
                <Button variant="outline" size="lg" className="w-full text-white border-white hover:bg-white hover:text-primary">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;