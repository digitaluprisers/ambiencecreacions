import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check } from 'lucide-react';

const Apartments = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);

  const apartmentTypes = [
    {
      id: 1,
      type: "2 BHK",
      size: "1380 sq.ft.",
      image: "/assets/images/2bhk.jpeg",
      price: "₹3.6 Cr onwards",
      features: [
        "Spacious Master Bedroom", 
        "Attached Balcony", 
        "Modular Kitchen", 
        "Guest Bedroom",
        "Premium Flooring"
      ],
      specifications: {
        livingRoom: "16' x 14'",
        masterBedroom: "14' x 12'",
        secondBedroom: "12' x 10'",
        kitchen: "10' x 8'",
        bathrooms: 2
      },
      floorPlan: "https://www.ambiencecreacions.com/images/floorplan-2bhk.jpg",
      interiorImages: [
        {
          src: "https://www.ambiencecreacions.com/images/2bhk-living.jpg",
          alt: "2 BHK Living Room"
        }
      ]
    },
    {
      id: 2,
      type: "3 BHK",
      size: "2781 - 3223 sq.ft.",
      image: "/assets/images/3bhk.jpeg",
      price: "₹5.95 Cr onwards",
      features: [
        "Spacious Master Bedroom", 
        "Two Attached Balconies", 
        "Modular Kitchen", 
        "Two Guest Bedrooms",
        "Premium Flooring",
        "Servant Quarter"
      ],
      specifications: {
        livingRoom: "18' x 16'",
        masterBedroom: "16' x 14'",
        secondBedroom: "14' x 12'",
        thirdBedroom: "12' x 10'",
        kitchen: "12' x 10'",
        bathrooms: 3
      },
      floorPlan: "https://www.ambiencecreacions.com/images/floorplan-3bhk.jpg",
      interiorImages: [
        {
          src: "https://www.ambiencecreacions.com/images/3bhk-bedroom.jpg",
          alt: "3 BHK Bedroom"
        }
      ]
    },
    {
      id: 3,
      type: "4 BHK",
      size: "3976 sq.ft.",
      image: "/assets/images/4bhk.jpeg",
      price: "₹8.5 Cr onwards",
      features: [
        "Luxurious Master Bedroom", 
        "Three Attached Balconies", 
        "Large Modular Kitchen", 
        "Three Guest Bedrooms",
        "Premium Italian Marble Flooring",
        "Servant Quarter",
        "Study Room"
      ],
      specifications: {
        livingRoom: "22' x 18'",
        masterBedroom: "18' x 16'",
        secondBedroom: "16' x 14'",
        thirdBedroom: "14' x 12'",
        fourthBedroom: "12' x 10'",
        kitchen: "14' x 12'",
        bathrooms: 4
      },
      floorPlan: "https://www.ambiencecreacions.com/images/floorplan-4bhk.jpg"
    }
  ];

  const openDetailDialog = (apartment) => {
    setSelectedApartment(apartment);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apartments" className="py-20 bg-luxury-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our <span className="text-gold">Apartments</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Designed for those who appreciate luxury, space, and comfort. Choose from our range of meticulously designed floor plans.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <Tabs defaultValue="2bhk" className="w-full">
          <TabsList className="w-full flex justify-center space-x-2 mb-8">
            <TabsTrigger value="2bhk" className="px-6">2 BHK</TabsTrigger>
            <TabsTrigger value="3bhk" className="px-6">3 BHK</TabsTrigger>
            <TabsTrigger value="4bhk" className="px-6">4 BHK</TabsTrigger>
          </TabsList>
          
          {apartmentTypes.map((apartment, index) => (
            <TabsContent key={index} value={`${apartment.type.split(" ")[0].toLowerCase()}bhk`}>
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <img 
                        src={apartment.image} 
                        alt="" 
                        className="rounded-lg shadow-lg w-full h-auto mb-2 border-2 border-red-500" // debug border
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Render additional interior images if available */}
                      {apartment.interiorImages && (
                        <div className="grid grid-cols-1 gap-2 mt-2">
                          {apartment.interiorImages.map((img, idx) => (
                            <img key={idx} src={img.src} alt="" className="rounded shadow w-full h-auto border-2 border-blue-500" // debug border
                              onError={e => { e.currentTarget.style.display = 'none'; }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-playfair font-semibold">{apartment.type} Apartment</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <p className="text-sm text-gray-600">Size</p>
                          <p className="font-semibold">{apartment.size}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow">
                          <p className="text-sm text-gray-600">Price</p>
                          <p className="font-semibold">{apartment.price}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-playfair mb-3">Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {apartment.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <Check className="h-4 w-4 text-gold mr-2" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-x-4 pt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                              View Floor Plan
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{apartment.type} Floor Plan</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <img 
                                src={apartment.floorPlan} 
                                alt={`${apartment.type} Floor Plan`} 
                                className="w-full h-auto"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Button 
                          onClick={scrollToContact}
                          className="luxury-button"
                        >
                          Enquire Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Apartments;