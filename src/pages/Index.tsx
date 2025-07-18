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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from 'emailjs-com';

const exitFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  apartmentType: z.string().min(1, { message: 'Please select an apartment type.' }),
});

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);
  const [policyDialog, setPolicyDialog] = useState<'privacy' | 'terms' | null>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);

  // Function to trigger the popup from anywhere
  const triggerExitPopup = () => {
    setShowExitPopup(true);
    sessionStorage.setItem('exitPopupShown', 'true');
  };

  const exitForm = useForm<z.infer<typeof exitFormSchema>>({
    resolver: zodResolver(exitFormSchema),
    defaultValues: { name: '', email: '', phone: '', apartmentType: '' },
  });

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

  useEffect(() => {
    if (!sessionStorage.getItem('exitPopupShown')) {
      const timer = setTimeout(() => {
        setShowExitPopup(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
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

  const handleExitSubmit = async (values: z.infer<typeof exitFormSchema>) => {
    const SERVICE_ID = 'service_o8ie5b8';
    const TEMPLATE_ID = 'template_qqstjy8';
    const USER_ID = '3IVAlrKZOv50cSeDr';
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        apartmentType: values.apartmentType,
        message: 'Exit-Intent Popup Lead (Free Coffee Offer)',
      }, USER_ID);
      alert('Thank you! Your free coffee coupon will be sent to your email.');
      setShowExitPopup(false);
      exitForm.reset();
    } catch {
      alert('There was an error sending your enquiry. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isSticky={isSticky} onBookSiteVisit={triggerExitPopup} />
      
      <main className="flex-grow">
        <Hero onBookSiteVisit={triggerExitPopup} />
        <About />
        <Features />
        <Apartments />
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
      {/* Exit-Intent Lead Capture Popup */}
      <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Wait! Get a Free Coffee on Your Visit ☕</DialogTitle>
          </DialogHeader>
          <p className="mb-4 text-gray-700 text-center">Leave your details and get a free coffee coupon when you visit Ambience Creacions. Don’t miss out on this exclusive offer!</p>
          <form onSubmit={exitForm.handleSubmit(handleExitSubmit)} className="space-y-4">
            <Input placeholder="Full Name" {...exitForm.register('name')} />
            <Input placeholder="Email" type="email" {...exitForm.register('email')} />
            <Input placeholder="Phone Number" {...exitForm.register('phone')} />
            <Select onValueChange={val => exitForm.setValue('apartmentType', val)} defaultValue={exitForm.getValues('apartmentType')}>
              <SelectTrigger>
                <SelectValue placeholder="Interested In" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
                <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
                <SelectItem value="4bhk">4 BHK Apartment</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="luxury-button w-full">Claim My Free Coffee</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}