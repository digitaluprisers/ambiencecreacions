import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QuoteIcon } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    name: "Rajiv Sharma",
    position: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "Moving to Ambience Creacions was one of the best decisions we made for our family. The quality of construction, attention to detail, and the community feel is unparalleled in Gurugram."
  },
  {
    id: 2,
    name: "Priya Mehta",
    position: "Corporate Executive",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "As someone who travels frequently for work, the location and security at Ambience Creacions give me peace of mind. The amenities and responsive maintenance team make everyday living a luxury experience."
  },
  {
    id: 3,
    name: "Amit and Neha Kapoor",
    position: "Resident Since 2019",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    testimonial: "We've lived in several premium properties across Delhi NCR, but Ambience Creacions stands out for its thoughtful design and excellent facilities. Our children love the open spaces and community activities."
  },
  {
    id: 4,
    name: "Shalini Gupta",
    position: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    testimonial: "As an interior designer, I appreciate the spacious layouts and natural lighting in Ambience Creacions apartments. They provide the perfect canvas for creating beautiful living spaces."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Happy <span className="text-gold">Residents</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our residents have to say about living in Ambience Creacions.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="testimonial-card border-0">
            <CardContent className="p-8 relative">
              <QuoteIcon className="absolute top-6 left-6 h-12 w-12 text-gold opacity-20" />
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold shadow-xl">
                  <img 
                    src={testimonialData[activeIndex].image} 
                    alt={testimonialData[activeIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-lg md:text-xl font-playfair italic text-gray-700 mb-6">
                    "{testimonialData[activeIndex].testimonial}"
                  </p>
                  
                  <div>
                    <h3 className="font-bold text-lg">{testimonialData[activeIndex].name}</h3>
                    <p className="text-gold">{testimonialData[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialData.map((_, index) => (
              <Button 
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 p-0 rounded-full ${
                  index === activeIndex 
                  ? 'bg-gold hover:bg-gold' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;