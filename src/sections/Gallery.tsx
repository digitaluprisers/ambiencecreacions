import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [loadedImages, setLoadedImages] = useState(Array(15).fill(true));

  const images = [
    { src: "https://www.ambiencecreacions.com/images/amenities-1.jpg", alt: "Swimming Pool", category: "Amenities" },
    { src: "https://www.ambiencecreacions.com/images/building-exterior.jpg", alt: "Building Exterior", category: "Exterior" },
    { src: "https://www.ambiencecreacions.com/images/lobby.jpg", alt: "Lobby Area", category: "Interior" },
    { src: "https://www.ambiencecreacions.com/images/garden.jpg", alt: "Landscaped Garden", category: "Amenities" },
    { src: "https://www.ambiencecreacions.com/images/gym.jpg", alt: "Fitness Center", category: "Amenities" },
    { src: "https://www.ambiencecreacions.com/images/2bhk-living.jpg", alt: "2 BHK Living Room", category: "Interior" },
    { src: "https://www.ambiencecreacions.com/images/3bhk-bedroom.jpg", alt: "3 BHK Bedroom", category: "Interior" },
    { src: "https://www.ambiencecreacions.com/images/facade-night.jpg", alt: "Building Facade at Night", category: "Exterior" },
    { src: "https://www.ambiencecreacions.com/images/new-banner-1.jpg", alt: "Banner", category: "Banner" },
    { src: "https://www.ambiencecreacions.com/images/creations3601.jpg", alt: "360 Walkthrough", category: "360 Tour" },
    { src: "https://www.ambiencecreacions.com/images/creations3602.jpg", alt: "360 Walkthrough", category: "360 Tour" },
    { src: "https://www.ambiencecreacions.com/images/creations3603.jpg", alt: "360 Walkthrough", category: "360 Tour" },
    { src: "https://www.ambiencecreacions.com/images/creations3604.jpg", alt: "360 Walkthrough", category: "360 Tour" },
    { src: "https://www.ambiencecreacions.com/images/building1.jpg", alt: "Ambience Creacions Building", category: "Exterior" },
    { src: "https://www.ambiencecreacions.com/images/homebanner.png", alt: "Ambience Creacions Banner", category: "Banner" }
  ];

  const openImageDialog = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const handleImageError = (idx) => {
    setLoadedImages(prev => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  const handleImageLoad = (idx) => {
    setLoadedImages(prev => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4"><span className="text-gold">Gallery</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our luxurious apartments, amenities, and surroundings.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            loadedImages[index] && image.src ? (
              <div 
                key={index} 
                className="gallery-image cursor-pointer overflow-hidden"
                onClick={() => openImageDialog(image.src)}
              >
                <div className="relative h-64 w-full">
                  <img 
                    src={image.src} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-screen p-0 bg-transparent border-0">
          <img 
            src={selectedImage} 
            alt="Gallery Image" 
            className="w-full h-auto"
            onClick={() => setIsOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;