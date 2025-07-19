import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, Shield, Bike, Users, Wifi, Coffee, 
  Wind, Dumbbell, Trees, ShoppingCart 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Home className="h-8 w-8 text-gold" />,
      title: "Spacious Apartments",
      description: "Meticulously designed spacious apartments with premium finishes and natural lighting."
    },
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance and trained personnel."
    },
    {
      icon: <Bike className="h-8 w-8 text-gold" />,
      title: "Jogging Track",
      description: "Dedicated jogging track for health enthusiasts and morning walkers."
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: "Community Hall",
      description: "Elegant community hall for social gatherings and celebrations."
    },
    {
      icon: <Wifi className="h-8 w-8 text-gold" />,
      title: "Smart Homes",
      description: "Modern apartments with smart home features for convenient living."
    },
    {
      icon: <Coffee className="h-8 w-8 text-gold" />,
      title: "Lounge Areas",
      description: "Beautifully designed lounge areas for relaxation and socializing."
    },
    {
      icon: <Wind className="h-8 w-8 text-gold" />,
      title: "Fresh Air Ventilation",
      description: "Cross ventilation design ensuring fresh air circulation throughout the apartments."
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-gold" />,
      title: "Fitness Center",
      description: "State-of-the-art fitness center with modern equipment and trained instructors."
    },
    {
      icon: <Trees className="h-8 w-8 text-gold" />,
      title: "Landscaped Gardens",
      description: "Beautifully landscaped gardens and green spaces for relaxation."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-gold" />,
      title: "Shopping Complex",
      description: "Convenience shopping complex within the premises for daily needs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Lifestyle <span className="text-gold">Features</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ambience Creacions offers an array of world-class amenities designed to enhance your living experience and provide comfort, convenience, and luxury.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card hover:border-gold hover:border">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;