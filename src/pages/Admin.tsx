import { Users, FileText, Shield, TrendingUp, Eye, CheckCircle, XCircle, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";

const Admin = () => {
  const adminStats = [
    { label: "Total Users", value: "1,247", icon: Users, change: "+12%" },
    { label: "Active Policies", value: "892", icon: Shield, change: "+8%" },
    { label: "Pending Claims", value: "34", icon: Clock, change: "-5%" },
    { label: "Monthly Revenue", value: "₹45.2L", icon: TrendingUp, change: "+15%" }
  ];

  const pendingClaims = [
    {
      id: "CLM2025015",
      userName: "Rajesh Sharma",
      childName: "Aarav Sharma",
      type: "Health",
      amount: "₹35,000",
      submittedDate: "Dec 20, 2025",
      description: "Emergency surgery expenses"
    },
    {
      id: "CLM2025016", 
      userName: "Priya Gupta",
      childName: "Ananya Gupta",
      type: "Education",
      amount: "₹25,000",
      submittedDate: "Dec 19, 2025",
      description: "School admission fees for grade 5"
    },
    {
      id: "CLM2025017",
      userName: "Amit Kumar",
      childName: "Rohit Kumar",
      type: "Accident",
      amount: "₹12,000",
      submittedDate: "Dec 18, 2025",
      description: "Fracture treatment and physiotherapy"
    },
    {
      id: "CLM2025018",
      userName: "Sunita Patel",
      childName: "Kavya Patel",
      type: "Health",
      amount: "₹18,500",
      submittedDate: "Dec 17, 2025",
      description: "Dental treatment and medication"
    }
  ];

  const recentUsers = [
    {
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      children: "2",
      policies: "Gold Plan",
      joinDate: "Dec 20, 2025",
      status: "Active"
    },
    {
      name: "Meera Joshi",
      email: "meera.joshi@email.com", 
      children: "1",
      policies: "Silver Plan",
      joinDate: "Dec 19, 2025",
      status: "Pending"
    },
    {
      name: "Arjun Reddy",
      email: "arjun.reddy@email.com",
      children: "3",
      policies: "Basic Plan",
      joinDate: "Dec 18, 2025",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-professional-navy mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage users, policies, and claims for 2050 Child+Future insurance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <Badge variant={stat.change.startsWith('+') ? 'secondary' : 'destructive'} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold text-professional-navy">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pending Claims */}
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-professional-navy">Pending Claims</CardTitle>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search claims..." className="w-48" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingClaims.map((claim, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 bg-gradient-card">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-professional-navy">{claim.id}</h3>
                        <p className="text-sm text-muted-foreground">{claim.userName} • {claim.childName}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{claim.amount}</p>
                        <Badge variant="outline" className="text-xs">
                          {claim.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground mb-3">{claim.description}</p>
                    <p className="text-xs text-muted-foreground mb-4">Submitted: {claim.submittedDate}</p>
                    
                    <div className="flex gap-2">
                      <Button variant="success" size="sm" className="flex-1">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm" className="flex-1">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Users */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-professional-navy">Recent User Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 bg-gradient-card">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-professional-navy">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <Badge 
                        variant={user.status === "Active" ? "secondary" : "outline"}
                        className={user.status === "Active" ? "bg-gradient-success text-accent-foreground" : ""}
                      >
                        {user.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-muted-foreground">Children:</span>
                        <span className="font-medium ml-2">{user.children}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Plan:</span>
                        <span className="font-medium ml-2">{user.policies}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-4">Joined: {user.joinDate}</p>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Shield className="w-4 h-4 mr-2" />
                        Policies
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Claims Management Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl text-professional-navy">All Claims Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by claim ID, user, or child..." className="w-80" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Export Data</Button>
                <Button variant="hero" size="sm">Generate Report</Button>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Claim ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingClaims.map((claim, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{claim.id}</TableCell>
                    <TableCell>{claim.userName}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{claim.type}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-primary">{claim.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell>{claim.submittedDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="success" size="sm">
                          <CheckCircle className="w-3 h-3" />
                        </Button>
                        <Button variant="destructive" size="sm">
                          <XCircle className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;