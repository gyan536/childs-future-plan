import { Plus, Upload, FileText, Clock, CheckCircle, XCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";

const Claims = () => {
  const recentClaims = [
    {
      id: "CLM2025001",
      type: "Health",
      childName: "Aarav Sharma",
      amount: "₹25,000",
      status: "Approved",
      submittedDate: "Dec 15, 2025",
      processedDate: "Dec 18, 2025",
      description: "Emergency hospitalization for fever"
    },
    {
      id: "CLM2025002", 
      type: "Education",
      childName: "Priya Sharma",
      amount: "₹15,000",
      status: "Processing",
      submittedDate: "Dec 10, 2025",
      processedDate: "-",
      description: "School admission fees"
    },
    {
      id: "CLM2025003",
      type: "Accident",
      childName: "Aarav Sharma", 
      amount: "₹8,500",
      status: "Under Review",
      submittedDate: "Nov 28, 2025",
      processedDate: "-",
      description: "Minor injury treatment"
    },
    {
      id: "CLM2025004",
      type: "Health",
      childName: "Priya Sharma",
      amount: "₹12,000",
      status: "Rejected",
      submittedDate: "Nov 15, 2025",
      processedDate: "Nov 20, 2025",
      description: "Dental treatment (not covered)"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-gradient-success text-accent-foreground"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case "Processing":
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Processing</Badge>;
      case "Under Review":
        return <Badge variant="outline"><Eye className="w-3 h-3 mr-1" />Under Review</Badge>;
      case "Rejected":
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-professional-navy mb-2">
              Claims Management
            </h1>
            <p className="text-muted-foreground">
              Submit new claims and track existing ones
            </p>
          </div>
          <Button variant="hero" size="lg">
            <Plus className="w-5 h-5 mr-2" />
            New Claim
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* New Claim Form */}
          <Card className="lg:col-span-1 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-professional-navy flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Submit New Claim
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="claimType">Claim Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select claim type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="accident">Accident</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="childName">Child Name</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select child" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aarav">Aarav Sharma</SelectItem>
                    <SelectItem value="priya">Priya Sharma</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount">Claim Amount</Label>
                <Input id="amount" placeholder="₹ Enter amount" />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the claim details..."
                  rows={3}
                />
              </div>

              <div>
                <Label>Upload Documents</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload bills, reports, and receipts
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </div>
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Submit Claim
              </Button>
            </CardContent>
          </Card>

          {/* Claims List */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-professional-navy">Recent Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClaims.map((claim, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 bg-gradient-card hover:shadow-card transition-all duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="font-semibold text-professional-navy">{claim.id}</h3>
                          {getStatusBadge(claim.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.type} Claim • {claim.childName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{claim.amount}</p>
                      </div>
                    </div>

                    <p className="text-sm text-foreground mb-3">{claim.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
                      <div>
                        <span className="font-medium">Submitted:</span> {claim.submittedDate}
                      </div>
                      <div>
                        <span className="font-medium">Processed:</span> {claim.processedDate}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        Documents
                      </Button>
                      {claim.status === "Processing" && (
                        <Button variant="outline" size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Add Docs
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Claims Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-success p-3 rounded-full inline-block mb-4">
                <CheckCircle className="h-6 w-6 text-accent-foreground" />
              </div>
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Claims Approved</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="bg-secondary/20 p-3 rounded-full inline-block mb-4">
                <Clock className="h-6 w-6 text-secondary-foreground" />
              </div>
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground">Under Process</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/20 p-3 rounded-full inline-block mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">₹48,500</p>
              <p className="text-sm text-muted-foreground">Total Claimed</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-hero p-3 rounded-full inline-block mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-primary">95%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-professional-navy">Need Help with Claims?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Required Documents</h3>
                <p className="text-sm text-muted-foreground">
                  Medical bills, prescriptions, discharge summary
                </p>
              </div>
              <div className="text-center p-4">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Processing Time</h3>
                <p className="text-sm text-muted-foreground">
                  Most claims processed within 3-5 business days
                </p>
              </div>
              <div className="text-center p-4">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Call 1800-123-4567 for immediate assistance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Claims;