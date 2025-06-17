
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Zap, Hammer, Paintbrush, Wind, Home, Car, Drill } from "lucide-react";

export const TradeCategoriesSection = () => {
  const categories = [
    { icon: Wrench, name: "Plumbing", jobs: "120+ jobs", color: "from-blue-500 to-blue-600" },
    { icon: Zap, name: "Electrical", jobs: "89+ jobs", color: "from-yellow-500 to-orange-500" },
    { icon: Hammer, name: "Carpentry", jobs: "156+ jobs", color: "from-amber-600 to-orange-600" },
    { icon: Paintbrush, name: "Painting", jobs: "78+ jobs", color: "from-purple-500 to-pink-500" },
    { icon: Wind, name: "HVAC", jobs: "92+ jobs", color: "from-cyan-500 to-blue-500" },
    { icon: Home, name: "Roofing", jobs: "67+ jobs", color: "from-gray-600 to-gray-700" },
    { icon: Car, name: "Auto Repair", jobs: "134+ jobs", color: "from-red-500 to-red-600" },
    { icon: Drill, name: "Construction", jobs: "203+ jobs", color: "from-green-600 to-green-700" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Trade Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse skilled workers by their specializations. Find the right professional for your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.jobs}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
