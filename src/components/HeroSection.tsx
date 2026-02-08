import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "figma:asset/cef1bbe5cbf3203b0a73a1bd419c681a124d8a96.png";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full">
                Empowering Youth Innovation
              </div>
            </div>
            
            <h1 className="text-gray-900 leading-tight">
              Where Every Young Idea Matters
            </h1>
            
            <p className="text-gray-600 leading-relaxed max-w-xl">
              A platform connecting youth innovators with organizations and mentors. 
              Submit your solutions to global challenges, or explore challenges from leading companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30">
                Submit Your Idea
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-600">
                Browse Challenges
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="border-l-4 border-emerald-600 pl-4">
                <div className="text-gray-900">500+</div>
                <div className="text-gray-600">Youth Projects</div>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <div className="text-gray-900">100+</div>
                <div className="text-gray-600">Organizations</div>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <div className="text-gray-900">$2M+</div>
                <div className="text-gray-600">In Funding</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-emerald-100 rounded-3xl opacity-50" />
            <img
              src={heroImage}
              alt="Students working together on projects"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}