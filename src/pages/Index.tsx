import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Features from '../sections/Features';
import Apartments from '../sections/Apartments';
import Gallery from '../sections/Gallery';
import Location from '../sections/Location';
import Testimonials from '../sections/Testimonials';
import LeadCapture from '../sections/LeadCapture';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import PrivacyPolicy from '../sections/PrivacyPolicy';
import TermsConditions from '../sections/TermsConditions';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);
  const [policyDialog, setPolicyDialog] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize on page load
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closePolicyDialog = () => {
    setPolicyDialog(null);
  };

  const openPrivacyPolicy = () => {
    setPolicyDialog('privacy');
  };

  const openTermsConditions = () => {
    setPolicyDialog('terms');
  };

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
    <div className="min-h-screen flex flex-col bg-white">
      <Header isSticky={isSticky} onBookSiteVisit={scrollToContact} />
      
      <main className="flex-grow">
        <Hero onBookSiteVisit={scrollToContact} />
        <About />
        <Features />
        <Apartments onEnquire={scrollToContact} />
        <Gallery />
        <Location />
        <Testimonials />
        <LeadCapture />
      </main>

      <Footer 
        onPrivacyClick={openPrivacyPolicy} 
        onTermsClick={openTermsConditions} 
      />

      {/* Policy Dialogs */}
      <Dialog open={policyDialog !== null} onOpenChange={closePolicyDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {policyDialog === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </DialogTitle>
          </DialogHeader>
          
          {policyDialog === 'privacy' ? (
            <PrivacyPolicy />
          ) : (
            <TermsConditions />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}