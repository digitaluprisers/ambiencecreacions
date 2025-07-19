import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Car, Building, Briefcase, ShoppingBag, Hospital } from 'lucide-react';

const Location = () => {
  const locationCategories = [
    {
      id: "connectivity",
      title: "Connectivity",
      icon: <Car className="h-5 w-5 text-gold mr-2" />,
      points: [
        "5 mins from NH-8 Highway",
        "10 mins from Rapid Metro Station",
        "15 mins from IGI Airport",
        "Connected to Delhi via NH-8",
        "Close to IFFCO Chowk Metro Station"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Hubs",
      icon: <Building className="h-5 w-5 text-gold mr-2" />,
      points: [
        "5 mins from Ambience Mall",
        "10 mins from Cyber City",
        "15 mins from Udyog Vihar",
        "20 mins from MG Road",
        "Close to DLF Cyber Hub"
      ]
    },
    {
      id: "workplaces",
      title: "Workplaces",
      icon: <Briefcase className="h-5 w-5 text-gold mr-2" />,
      points: [
        "10 mins from DLF Cyber City",
        "15 mins from Udyog Vihar",
        "20 mins from Sohna Road IT Park",
        "25 mins from Golf Course Road Offices",
        "Easy access to Delhi NCR corporate hubs"
      ]
    },
    {
      id: "shopping",
      title: "Shopping",
      icon: <ShoppingBag className="h-5 w-5 text-gold mr-2" />,
      points: [
        "5 mins from Ambience Mall",
        "10 mins from DLF Mega Mall",
        "15 mins from Galleria Market",
        "20 mins from Sector 29 Market",
        "Close to local convenience stores"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: <Hospital className="h-5 w-5 text-gold mr-2" />,
      points: [
        "5 mins from Medanta Hospital",
        "10 mins from Fortis Hospital",
        "15 mins from Artemis Hospital",
        "20 mins from Max Hospital",
        "Multiple clinics in vicinity"
      ]
    }
  ];

  return (
    <section id="location" className="py-20 bg-luxury-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Strategic <span className="text-gold">Location</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in Sector 22, Gurugram, Ambience Creacions offers excellent connectivity and access to all essential amenities.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.329911274524!2d77.07565231507906!3d28.474334582481835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19758bc94e9d%3A0x4d8e63bdcf6e6c24!2sAmbience%20Creacions!5e0!3m2!1sen!2sin!4v1627567412690!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ambience Creacions Location Map"
              ></iframe>
            </div>
            
            <div className="mt-6 flex items-center">
              <MapPin className="h-5 w-5 text-gold mr-2" />
              <p className="text-gray-700">
                <strong>Ambience Creacions:</strong> Sector 22, Gurugram, Haryana, India
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-0">
                <Tabs defaultValue="connectivity" className="w-full">
                  <TabsList className="w-full grid grid-cols-5 h-auto">
                    {locationCategories.map((category) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="text-xs py-2 px-1 data-[state=active]:text-gold"
                      >
                        {category.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {locationCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          {category.icon}
                          <h3 className="text-lg font-semibold font-playfair">{category.title}</h3>
                        </div>
                        
                        <ul className="space-y-3">
                          {category.points.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-gold mr-2">•</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;