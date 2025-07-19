import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-luxury-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-800">
            <div className="space-y-4">
              <img 
                src="https://www.ambiencecreacions.com/images/ambience.png" 
                alt="Ambience Creacions Logo" 
                className="h-12 w-auto"
              />
              <p className="text-black text-sm mt-4">
                Luxury Living Redefined
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/ambiencegroup/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/AmbienceGroupIn?lang=en" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://www.instagram.com/ambiencegroup_in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/ambiencegroup/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.youtube.com/watch?v=G1_iQY-bctY" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-black hover:text-gold transition-colors">Home</a></li>
                <li><a href="#about" className="text-black hover:text-gold transition-colors">About</a></li>
                <li><a href="#features" className="text-black hover:text-gold transition-colors">Features</a></li>
                <li><a href="#apartments" className="text-black hover:text-gold transition-colors">Apartments</a></li>
                <li><a href="#gallery" className="text-black hover:text-gold transition-colors">Gallery</a></li>
                <li><a href="#location" className="text-black hover:text-gold transition-colors">Location</a></li>
                <li><a href="#contact" className="text-black hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Contact Us</h3>
              <p className="text-black">
                <strong className="block text-black">Email:</strong>
                <a href="mailto:sales@ambiencecreacions.com" className="text-black hover:text-gold transition-colors">sales@ambiencecreacions.com</a>
              </p>
              <p className="text-black">
                <strong className="block text-black">Phone:</strong>
                <a href="tel:+919717003006" className="text-black hover:text-gold transition-colors">+91-9717003006</a>
              </p>
              <p className="text-black">
                <strong className="block text-black">Address:</strong>
                Ambience Creacions, Sector 22, Gurugram, Haryana, India
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-black text-sm">© 2023 Ambience Creacions. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link 
                to="/privacy-policy"
                className="text-black text-sm hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-conditions"
                className="text-black text-sm hover:text-gold transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-luxury-dark text-xs text-gray-400 text-center px-4 pb-4">
        Disclaimer : This website is only for the purpose of providing information About the project. Any information which is being provided on this website is not an advertisement or a solicitation. The company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA* registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. Please note that you should make yourself aware about the RERA* registration Privacy Policy status of the project.
      </div>
    </>
  );
};

export default Footer;