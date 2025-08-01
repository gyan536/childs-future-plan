import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PolicyCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  variant: "basic" | "silver" | "gold";
}

const PolicyCard = ({ title, price, originalPrice, features, isPopular, variant }: PolicyCardProps) => {
  const getCardStyles = () => {
    switch (variant) {
      case "gold":
        return "border-secondary/50 shadow-elegant bg-gradient-card";
      case "silver":
        return "border-accent/50 shadow-card";
      default:
        return "border-border shadow-card";
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case "gold":
        return "gold";
      case "silver":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Card className={`relative ${getCardStyles()} transition-all duration-300 hover:scale-105`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-hero text-white px-4 py-1">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-professional-navy">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-3xl font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through ml-2">₹{originalPrice}</span>
          )}
          <p className="text-sm text-muted-foreground mt-1">per year</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-gradient-success p-1 rounded-full mt-0.5">
              <Check className="w-3 h-3 text-accent-foreground" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="pt-6">
        <Button variant={getButtonVariant()} className="w-full" size="lg">
          Choose {title}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PolicyCard;