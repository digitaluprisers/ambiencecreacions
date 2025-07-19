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
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4

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
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const [showSiteVisitForm, setShowSiteVisitForm] = useState(false);
>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4

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

<<<<<<< HEAD
=======
  const openSiteVisitForm = () => {
    setShowSiteVisitForm(true);
  };

  const closeSiteVisitForm = () => {
    setShowSiteVisitForm(false);
    siteVisitForm.reset();
  };

>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4
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
<<<<<<< HEAD
        navigate('/thank-you');
=======
        alert('Thank you! We have received your site visit request. Our team will contact you shortly.');
        closeSiteVisitForm();
>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4
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
<<<<<<< HEAD
      <Header isSticky={isSticky} />
      
      <main className="flex-grow">
        <Hero />
=======
      <Header isSticky={isSticky} onBookSiteVisit={openSiteVisitForm} />
      
      <main className="flex-grow">
        <Hero onBookSiteVisit={openSiteVisitForm} />
>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4
        <About />
        <Features />
        <Apartments onEnquire={scrollToContact} />
        <Gallery />
        <Location />
        <Testimonials />
        <LeadCapture />
      </main>

<<<<<<< HEAD
      <Footer />
=======
      <Footer 
        onPrivacyClick={openPrivacyPolicy} 
        onTermsClick={openTermsConditions} 
      />
>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4

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
<<<<<<< HEAD
=======

      {/* Site Visit Booking Form */}
      <Dialog open={showSiteVisitForm} onOpenChange={closeSiteVisitForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair text-center">Book a Site Visit</DialogTitle>
          </DialogHeader>
          
          <Form {...siteVisitForm}>
            <form onSubmit={siteVisitForm.handleSubmit(onSiteVisitSubmit)} className="space-y-4">
              <FormField
                control={siteVisitForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={siteVisitForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={siteVisitForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 9XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={siteVisitForm.control}
                name="interestedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interested In</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select apartment type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
                        <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
                        <SelectItem value="4bhk">4 BHK Apartment</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="general">General Information</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={siteVisitForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any specific requirements or preferred visit time?" 
                        className="resize-none" 
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={closeSiteVisitForm} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="luxury-button flex-1">
                  Book Visit
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
>>>>>>> 92038dcce275492eec33835472d3ff77df0584b4
    </div>
  );
}