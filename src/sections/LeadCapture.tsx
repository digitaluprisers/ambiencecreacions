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
import { Check, PhoneCall, Mail, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  apartmentType: z.string().min(1, { message: 'Please select an apartment type.' }),
  message: z.string().optional(),
});

const LeadCapture = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      apartmentType: '',
      message: '',
    },
  });
  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Replace these with your actual EmailJS service/template/user IDs
    const SERVICE_ID = 'service_o8ie5b8';
    const TEMPLATE_ID = 'template_qqstjy8';
    const USER_ID = '3IVAlrKZOv50cSeDr';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: values.name,
      email: values.email,
      phone: values.phone,
      apartmentType: values.apartmentType,
      message: values.message || '',
    }, USER_ID)
      .then(() => {
        navigate('/thank-you');
      })
      .catch(() => {
        alert('There was an error sending your enquiry. Please try again.');
      });
  }

  return (
    <section id="contact" className="py-20 bg-luxury-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Contact <span className="text-gold">Us</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in experiencing luxury living at Ambience Creacions? Get in touch with our sales team for more information or to schedule a site visit.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <div className="lead-form-container p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6">
                Request Information
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
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
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
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
                      control={form.control}
                      name="apartmentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interested In</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
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
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific requirements or questions?" 
                            className="resize-none" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="luxury-button w-full md:w-auto">
                    Submit Enquiry
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" />
                  <span>Your information is secure and will not be shared with third parties.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <PhoneCall className="h-5 w-5 text-gold mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919717003006" className="text-gray-700 hover:text-gold transition-colors">+91-9717003006</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gold mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:sales@ambiencecreacions.com" className="text-gray-700 hover:text-gold transition-colors">sales@ambiencecreacions.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gold mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Sales Office Hours</p>
                      <p className="text-gray-700">Monday - Sunday: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-semibold mb-4">Why Choose Us?</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold mr-2 font-bold">•</span>
                    <span className="text-gray-700">Premium location in Sector 22, Gurugram</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 font-bold">•</span>
                    <span className="text-gray-700">World-class amenities and facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 font-bold">•</span>
                    <span className="text-gray-700">Spacious and well-designed apartments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 font-bold">•</span>
                    <span className="text-gray-700">Excellent connectivity to major locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 font-bold">•</span>
                    <span className="text-gray-700">30+ years of trusted legacy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;