import { Shield, FileText, Users, TrendingUp, Calendar, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const mockChildren = [
    {
      name: "Aarav Sharma",
      age: "2 years",
      policyNumber: "CFP2025001",
      status: "Active",
      coverage: "Gold Plan",
      nextPremium: "March 15, 2026"
    },
    {
      name: "Priya Sharma",
      age: "6 months",
      policyNumber: "CFP2025002", 
      status: "Active",
      coverage: "Silver Plan",
      nextPremium: "April 22, 2026"
    }
  ];

  const recentClaims = [
    { id: "CLM001", type: "Health", amount: "₹25,000", status: "Approved", date: "Dec 15, 2025" },
    { id: "CLM002", type: "Education", amount: "₹15,000", status: "Processing", date: "Dec 10, 2025" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-professional-navy mb-2">
            Welcome back, Rajesh Sharma
          </h1>
          <p className="text-muted-foreground">
            Manage your children's insurance policies and track claims
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Policies</p>
                  <p className="text-2xl font-bold text-primary">2</p>
                </div>
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Coverage</p>
                  <p className="text-2xl font-bold text-primary">₹15L</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Claims Filed</p>
                  <p className="text-2xl font-bold text-primary">2</p>
                </div>
                <FileText className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Children Covered</p>
                  <p className="text-2xl font-bold text-primary">2</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Children Policies */}
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-professional-navy">Children Policies</CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Child
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockChildren.map((child, index) => (
                <div key={index} className="border border-border rounded-lg p-4 bg-gradient-card">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-professional-navy">{child.name}</h3>
                      <p className="text-sm text-muted-foreground">{child.age} • {child.policyNumber}</p>
                    </div>
                    <Badge variant="secondary" className="bg-gradient-success text-accent-foreground">
                      {child.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coverage:</span>
                      <span className="font-medium">{child.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Premium:</span>
                      <span className="font-medium">{child.nextPremium}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileText className="w-4 h-4 mr-2" />
                      View Policy
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Claims */}
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-professional-navy">Recent Claims</CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Claim
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentClaims.map((claim, index) => (
                <div key={index} className="border border-border rounded-lg p-4 bg-gradient-card">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-professional-navy">{claim.id}</h3>
                      <p className="text-sm text-muted-foreground">{claim.type} Claim</p>
                    </div>
                    <Badge 
                      variant={claim.status === "Approved" ? "secondary" : "default"}
                      className={claim.status === "Approved" ? "bg-gradient-success text-accent-foreground" : ""}
                    >
                      {claim.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium text-primary">{claim.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{claim.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-professional-navy">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="hero" className="h-16 text-left justify-start">
                <Calendar className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Schedule Premium Payment</div>
                  <div className="text-sm opacity-90">Set up auto-pay</div>
                </div>
              </Button>
              <Button variant="gold" className="h-16 text-left justify-start">
                <FileText className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">File New Claim</div>
                  <div className="text-sm opacity-90">Submit claim documents</div>
                </div>
              </Button>
              <Button variant="success" className="h-16 text-left justify-start">
                <Users className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Add New Child</div>
                  <div className="text-sm opacity-90">Register another child</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;