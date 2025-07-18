import { Button } from '@/components/ui/button';

interface HeroProps {
  onBookSiteVisit?: () => void;
}

const Hero = ({ onBookSiteVisit }: HeroProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.ambiencecreacions.com/images/homebanner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-6">
          Experience Luxury Living at <span className="text-gold">Ambience Creacions</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4">
          Premium Residential Apartments in Sector 22, Gurugram
        </p>
        
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Where Comfort Meets Luxury - Discover Your Dream Home
        </p>
        
        <Button 
          onClick={onBookSiteVisit || scrollToContact}
          className="luxury-button text-lg"
        >
          Book a Site Visit
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }} 
          className="text-white hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;