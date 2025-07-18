import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isSticky: boolean;
  onBookSiteVisit?: () => void;
}

const Header = ({ isSticky, onBookSiteVisit }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Apartments', href: '#apartments' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`w-full transition-all duration-300 z-50 ${
        isSticky ? 'sticky-header scrolled' : 'absolute bg-transparent text-white py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              <img 
                src="https://www.ambiencecreacions.com/images/ambience.png" 
                alt="Ambience Creacions Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-gold'
                    : isSticky
                    ? 'text-gray-800 hover:text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button 
              onClick={onBookSiteVisit}
              className="luxury-button"
            >
              Book a Site Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                isSticky ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="pt-2 pb-4 space-y-1 px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gray-100 text-gold'
                    : 'text-gray-800 hover:bg-gray-50 hover:text-gold'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={() => {
                if (onBookSiteVisit) onBookSiteVisit();
                setIsMenuOpen(false);
              }}
              className="luxury-button w-full mt-4"
            >
              Book a Site Visit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;