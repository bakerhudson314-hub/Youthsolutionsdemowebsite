import { Button } from "./ui/button";
import { Sprout } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900">Youth Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#mission" className="text-gray-700 hover:text-emerald-600 transition-colors">Mission</a>
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">Features</a>
            <a href="#application" className="text-gray-700 hover:text-emerald-600 transition-colors">Application</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">How It Works</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex text-gray-700">Sign In</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}