import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-luxury-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">About <span className="text-gold">Ambience Creacions</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Main About Image */}
            <img 
              src="https://www.ambiencecreacions.com/images/about-ambience.jpg" 
              alt="" 
              className="rounded-lg shadow-xl w-full h-auto mb-4"
            />
            {/* Additional Images Grid */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <img src="https://www.ambiencecreacions.com/images/building1.jpg" alt="" className="rounded shadow w-full h-auto" />
              <img src="https://www.ambiencecreacions.com/images/homebanner.png" alt="" className="rounded shadow w-full h-auto" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold">A Legacy of Excellence in Real Estate</h3>
            
            <p className="text-gray-700">
              Ambience Group has been at the forefront of real estate development in India for over three decades, consistently delivering exceptional projects that redefine luxury living standards.
            </p>
            
            <p className="text-gray-700">
              Ambience Creacions is our premium residential project located in Sector 22, Gurugram, offering a perfect blend of comfort, convenience, and luxury. With meticulous attention to detail and world-class amenities, we've created homes that elevate your lifestyle.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-playfair font-semibold text-gold mb-2">30+</h4>
                  <p className="text-gray-700">Years of Excellence</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-playfair font-semibold text-gold mb-2">100+</h4>
                  <p className="text-gray-700">Happy Families</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-playfair font-semibold text-gold mb-2">Premium</h4>
                  <p className="text-gray-700">Location</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-playfair font-semibold text-gold mb-2">World-class</h4>
                  <p className="text-gray-700">Amenities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;