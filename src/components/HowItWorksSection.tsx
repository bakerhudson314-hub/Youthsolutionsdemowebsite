import { Card } from "./ui/card";
import { Upload, Search, HandshakeIcon, TrendingUp, Award, Filter, Eye, FileText, Users, Briefcase } from "lucide-react";

export function HowItWorksSection() {
  const studentSteps = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Submit Your Solution",
      description: "Post publicly or apply to specific organization challenges (kept confidential)",
      color: "bg-emerald-600"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Browse Public Projects",
      description: "Filter and explore public solutions across different categories",
      color: "bg-emerald-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "View Success Stories",
      description: "Discover spotlighted winners and funded projects for inspiration",
      color: "bg-emerald-600"
    },
    {
      icon: <HandshakeIcon className="w-6 h-6" />,
      title: "Get Connected",
      description: "Receive mentorship, resources, or funding from interested organizations",
      color: "bg-emerald-600"
    }
  ];

  const organizationSteps = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Post a Challenge",
      description: "Submit problems or issues open for youth innovators to solve",
      color: "bg-emerald-600"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Review Submissions",
      description: "Access all solutions submitted to your challenges in a dedicated dashboard",
      color: "bg-emerald-600"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Browse Public Projects",
      description: "Explore general projects posted by students across all categories",
      color: "bg-emerald-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Support & Sponsor",
      description: "Connect with innovators and provide funding, mentorship, or resources",
      color: "bg-emerald-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-gray-900">How It Works</h2>
          <p className="text-gray-600 leading-relaxed">
            Two pathways to innovation — one platform connecting youth solutions with organizational support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Student Pathway */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8" />
                <h3>For Students</h3>
              </div>
              <p className="text-emerald-50">
                Share your innovative solutions and connect with sponsors
              </p>
            </div>

            <div className="space-y-4">
              {studentSteps.map((step, index) => (
                <Card key={index} className="p-6 bg-white border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-gray-900">{step.title}</h4>
                        <div className="text-gray-300 text-xl">{String(index + 1).padStart(2, '0')}</div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Organization Pathway */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-8 h-8" />
                <h3>For Organizations</h3>
              </div>
              <p className="text-emerald-50">
                Post challenges and discover innovative solutions from youth
              </p>
            </div>

            <div className="space-y-4">
              {organizationSteps.map((step, index) => (
                <Card key={index} className="p-6 bg-white border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-gray-900">{step.title}</h4>
                        <div className="text-gray-300 text-xl">{String(index + 1).padStart(2, '0')}</div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}