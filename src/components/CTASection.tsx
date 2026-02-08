import { Button } from "./ui/button";
import { ArrowRight, Users, Building } from "lucide-react";
import { Card } from "./ui/card";

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-white">Ready to Make an Impact?</h2>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join our community of innovators and supporters shaping the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-10 bg-white hover:shadow-2xl transition-shadow flex flex-col">
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-3 mt-6">For Young Innovators</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit your ideas, browse challenges, and get the support you need to bring your vision to life.
              </p>
            </div>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 mt-6">
              Get Started as Youth
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          <Card className="p-10 bg-white hover:shadow-2xl transition-shadow flex flex-col">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
              <Building className="w-8 h-8 text-green-800" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-3 mt-6">For Organizations</h3>
              <p className="text-gray-600 leading-relaxed">
                Post challenges, discover innovative solutions, and invest in the next generation of problem-solvers.
              </p>
            </div>
            <Button className="w-full bg-green-800 hover:bg-green-900 text-white shadow-lg shadow-green-800/30 mt-6">
              Join as Organization
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}