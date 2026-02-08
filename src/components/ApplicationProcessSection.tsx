import { Card } from "./ui/card";
import { FileText, CheckCircle2, Edit3 } from "lucide-react";

export function ApplicationProcessSection() {
  return (
    <section id="application" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-gray-900">Application Process</h2>
          <p className="text-gray-600 leading-relaxed">
            We use a comprehensive template-based application to ensure every idea is presented clearly and professionally
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-50 border-emerald-200 border-2 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 mb-3">Structured Template</h3>
            <p className="text-gray-600 leading-relaxed">
              All submissions follow our comprehensive application template to ensure consistency and clarity.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-50 border-emerald-200 border-2 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 mb-3">Fair Evaluation</h3>
            <p className="text-gray-600 leading-relaxed">
              Standardized format helps supporters compare projects and ensures every idea gets equal consideration.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-50 border-emerald-200 border-2 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
              <Edit3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 mb-3">Additional Information</h3>
            <p className="text-gray-600 leading-relaxed">
              Dedicated space available for unique details that make your project special and stand out.
            </p>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 border-gray-200">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-600 px-8 py-6">
              <h3 className="text-white">Application Template Sections</h3>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <TemplateSection 
                  number="01"
                  title="Project Overview"
                  items={["Project name and tagline", "Problem statement", "Target audience"]}
                  color="emerald"
                />
                <TemplateSection 
                  number="02"
                  title="Your Solution"
                  items={["Detailed solution description", "Innovation and uniqueness", "Implementation plan"]}
                  color="lime"
                />
                <TemplateSection 
                  number="03"
                  title="Impact & Feasibility"
                  items={["Expected outcomes", "Measurable impact", "Timeline and milestones"]}
                  color="teal"
                />
                <TemplateSection 
                  number="04"
                  title="Resources Needed"
                  items={["Budget breakdown", "Skills and mentorship needs", "Partnerships required"]}
                  color="green"
                />
                <TemplateSection 
                  number="05"
                  title="About You"
                  items={["Your background", "Team members (if applicable)", "Previous experience"]}
                  color="cyan"
                />
                <TemplateSection 
                  number="06"
                  title="Additional Information"
                  items={["Unique aspects of your project", "Personal story", "Special circumstances"]}
                  color="emerald"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TemplateSection({ number, title, items, color }: { number: string; title: string; items: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    lime: "bg-emerald-100 text-emerald-700",
    teal: "bg-emerald-100 text-emerald-700",
    green: "bg-emerald-100 text-emerald-700",
    cyan: "bg-emerald-100 text-emerald-700"
  };
  
  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex gap-4 mb-4">
        <div className={`w-12 h-12 ${colorMap[color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
          {number}
        </div>
        <h4 className="text-gray-900 flex items-center">{title}</h4>
      </div>
      <ul className="space-y-2 ml-16">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-center gap-3 leading-relaxed">
            <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}