import { Sprout } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">Youth Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering young minds to create meaningful change in the world.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Browse Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">View Challenges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Submit Idea</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">For Organizations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-400">© 2025 Youth Solutions. All rights reserved.</p>
            <p className="text-emerald-400 italic text-sm">
              Created by youth, with a passion for bridging opportunities to the underrepresented.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}