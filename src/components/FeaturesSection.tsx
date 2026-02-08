import { Card } from "./ui/card";
import { Lightbulb, Building2, Search, Users, Rocket, HeartHandshake } from "lucide-react";
import youthImage from "figma:asset/224b0847b3509f51af149cfa1d0470357e374b05.png";
import orgImage from "figma:asset/2512e07e12b091fda5439c2a900e73bbb797ba2c.png";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-gray-900">How We're Making It Happen</h2>
          <p className="text-gray-600 leading-relaxed">
            Two powerful pathways connecting youth innovation with real-world opportunities
          </p>
        </div>

        {/* Youth-Submitted Solutions */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-emerald-100 rounded-2xl opacity-40" />
              <img
                src={youthImage}
                alt="Youth innovation and technology"
                className="relative rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg">
              <Lightbulb className="w-4 h-4" />
              <span>Youth-Submitted Solutions</span>
            </div>
            
            <h3 className="text-gray-900">Your Ideas, Amplified</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Young individuals can submit their own projects or ideas addressing global or local challenges. 
              All submissions are stored in a searchable database where supporters can discover and nurture promising initiatives.
            </p>
            
            <div className="space-y-4 pt-4">
              <FeatureItem 
                icon={<Lightbulb className="w-5 h-5" />}
                title="Submit Your Project"
                description="Complete our comprehensive application template with your innovative solution"
                color="emerald"
              />
              <FeatureItem 
                icon={<Search className="w-5 h-5" />}
                title="Searchable Database"
                description="Projects are indexed and easily discoverable by interested parties"
                color="emerald"
              />
              <FeatureItem 
                icon={<HeartHandshake className="w-5 h-5" />}
                title="Get Support"
                description="Connect with sponsors, universities, and mentors for resources and funding"
                color="emerald"
              />
            </div>
          </div>
        </div>

        {/* Organization-Led Challenges */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg">
              <Building2 className="w-4 h-4" />
              <span>Organization-Led Challenges</span>
            </div>
            
            <h3 className="text-gray-900">Real Problems, Fresh Solutions</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Companies and organizations post their challenges, and young innovators browse and submit proposed solutions. 
              Organizations then choose which ideas to support, sponsor, incorporate, or fund.
            </p>
            
            <div className="space-y-4 pt-4">
              <FeatureItem 
                icon={<Building2 className="w-5 h-5" />}
                title="Company Challenges"
                description="Organizations post real-world problems needing innovative solutions"
                color="forest"
              />
              <FeatureItem 
                icon={<Users className="w-5 h-5" />}
                title="Youth Response"
                description="Young innovators browse challenges and submit their proposals"
                color="forest"
              />
              <FeatureItem 
                icon={<Rocket className="w-5 h-5" />}
                title="Selection & Support"
                description="Organizations review and support promising solutions"
                color="forest"
              />
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-emerald-100 rounded-2xl opacity-40" />
              <img
                src={orgImage}
                alt="Business partnership collaboration"
                className="relative rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  const bgColor = "bg-emerald-50";
  const textColor = "text-emerald-600";
  
  return (
    <div className="flex gap-4">
      <div className={`flex-shrink-0 w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center ${textColor}`}>
        {icon}
      </div>
      <div>
        <div className="text-gray-900 mb-1">{title}</div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}