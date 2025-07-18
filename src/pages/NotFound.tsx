import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 px-4">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-luxury-dark">
          <span className="text-gold">404</span> - Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild className="luxury-button mt-8">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}