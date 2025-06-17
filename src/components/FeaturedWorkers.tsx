
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Phone } from "lucide-react";

export const FeaturedWorkers = () => {
  const workers = [
    {
      id: 1,
      name: "Mike Rodriguez",
      trade: "Master Plumber",
      rating: 4.9,
      reviews: 124,
      location: "Downtown Area",
      experience: "8 years",
      hourlyRate: "$45-65",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Emergency Repairs", "Kitchen Plumbing", "Bathroom Renovation"],
      available: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      trade: "Licensed Electrician",
      rating: 4.8,
      reviews: 89,
      location: "Westside",
      experience: "6 years",
      hourlyRate: "$50-70",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b417?w=150&h=150&fit=crop&crop=face",
      specialties: ["Home Wiring", "Solar Installation", "Smart Home Setup"],
      available: true
    },
    {
      id: 3,
      name: "David Thompson",
      trade: "Carpenter",
      rating: 4.9,
      reviews: 156,
      location: "Northside",
      experience: "12 years",
      hourlyRate: "$40-60",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      specialties: ["Custom Furniture", "Home Repairs", "Deck Building"],
      available: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Workers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet some of our top-rated skilled workers who consistently deliver excellent results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workers.map((worker, index) => (
            <Card 
              key={worker.id} 
              className="group hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-20 h-20 ring-4 ring-white shadow-lg">
                    <AvatarImage src={worker.avatar} alt={worker.name} />
                    <AvatarFallback>{worker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${worker.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{worker.name}</h3>
                <p className="text-blue-600 font-semibold">{worker.trade}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(worker.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{worker.rating}</span>
                  <span className="text-gray-600">({worker.reviews} reviews)</span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {worker.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {worker.experience} experience
                  </div>
                  <div className="font-semibold text-green-600">
                    {worker.hourlyRate}/hour
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {worker.specialties.slice(0, 2).map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {worker.specialties.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{worker.specialties.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    size="sm"
                  >
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            View All Workers
          </Button>
        </div>
      </div>
    </section>
  );
};
