import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const siteVisitFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  interestedIn: z.string().min(1, { message: 'Please select what you are interested in.' }),
  message: z.string().optional(),
});

const Hero = () => {
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

  function onSiteVisitSubmit(values: z.infer<typeof siteVisitFormSchema>) {
    const SERVICE_ID = 'service_o8ie5b8';
    const TEMPLATE_ID = 'template_qqstjy8';
    const USER_ID = '3IVAlrKZOv50cSeDr';
    import('emailjs-com').then(emailjs => {
      emailjs.default.send(SERVICE_ID, TEMPLATE_ID, {
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
    });
  }

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left mt-24 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-6">
              Experience Luxury Living at <span className="text-gold">Ambience Creacions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Premium Residential Apartments in Sector 22, Gurugram
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
              Where Comfort Meets Luxury - Discover Your Dream Home
            </p>
          </div>
          <div className="flex-1 w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-center text-gold">Book a Site Visit</h2>
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
                <Button type="submit" className="luxury-button w-full mt-2">
                  Book Visit
                </Button>
              </form>
            </Form>
          </div>
        </div>
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