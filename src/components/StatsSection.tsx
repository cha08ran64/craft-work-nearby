
import { Users, Briefcase, Star, Shield } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Skilled Workers",
      description: "Verified professionals ready to help"
    },
    {
      icon: Briefcase,
      number: "10,000+",
      label: "Jobs Completed",
      description: "Successfully finished projects"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Average Rating",
      description: "Customer satisfaction guaranteed"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Verified",
      description: "Background checked professionals"
    }
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
