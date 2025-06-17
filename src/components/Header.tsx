
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wrench } from "lucide-react";
import { AuthModal } from "./AuthModal";

export const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'worker' | 'employer'>('worker');

  const handleAuthClick = (type: 'login' | 'register', user: 'worker' | 'employer') => {
    setAuthType(type);
    setUserType(user);
    setIsAuthOpen(true);
  };

  return (
    <>
      <header className="bg-white/90 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                SkillConnect
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Find Workers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Post Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  onClick={() => handleAuthClick('login', 'worker')}
                  className="hover:bg-blue-50"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => handleAuthClick('register', 'worker')}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  Join as Worker
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleAuthClick('register', 'employer')}
                  className="border-blue-200 hover:bg-blue-50"
                >
                  Hire Workers
                </Button>
              </div>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">Find Workers</a>
                  <a href="#" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">Post Jobs</a>
                  <a href="#" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button 
                      variant="ghost" 
                      onClick={() => handleAuthClick('login', 'worker')}
                      className="justify-start"
                    >
                      Sign In
                    </Button>
                    <Button 
                      onClick={() => handleAuthClick('register', 'worker')}
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      Join as Worker
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleAuthClick('register', 'employer')}
                    >
                      Hire Workers
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        type={authType}
        userType={userType}
      />
    </>
  );
};
