import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const siteVisitFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  interestedIn: z.string().min(1, { message: 'Please select what you are interested in.' }),
  message: z.string().optional(),
});

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);
  const [policyDialog, setPolicyDialog] = useState<'privacy' | 'terms' | null>(null);
  const navigate = useNavigate();

  const siteVisitForm = useForm<z.infer<typeof siteVisitFormSchema>>({
    resolver: zodResolver(siteVisitFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interestedIn: '',
      message: '',
    },
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

  const closePolicyDialog = () => {
    setPolicyDialog(null);
  };

  const openPrivacyPolicy = () => {
    setPolicyDialog('privacy');
  };

  const openTermsConditions = () => {
    setPolicyDialog('terms');
  };

  function onSiteVisitSubmit(values: z.infer<typeof siteVisitFormSchema>) {
    // TODO: Replace these with your actual EmailJS service/template/user IDs
    const SERVICE_ID = 'service_o8ie5b8';
    const TEMPLATE_ID = 'template_qqstjy8';
    const USER_ID = '3IVAlrKZOv50cSeDr';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: values.name,
      email: values.email,
      phone: values.phone,
      interestedIn: values.interestedIn,
      message: values.message || '',
      formType: 'Site Visit Booking',
    }, USER_ID)
      .then(() => {
        navigate('/thank-you');
      })
      .catch(() => {
        alert('There was an error sending your request. Please try again.');
      });
  }

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
      <Header isSticky={isSticky} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Apartments onEnquire={scrollToContact} />
        <Gallery />
        <Location />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
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