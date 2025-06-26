
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-3xl font-bold text-center mb-2 text-job-primary">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Have questions or need our recruitment services? Get in touch with our team and we'll be happy to assist you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry"
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto bg-job-primary hover:bg-opacity-90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  Reach out to us directly or fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* UAE Branch */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-job-primary">UAE Branch</h3>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-job-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+971 54 759 3444</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-job-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">ceo@nmhruae.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-job-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">Abu Dhabi, United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Indian Branch */}
              <div className="pt-6 space-y-2">
                <h3 className="text-lg font-semibold text-job-primary">Indian Branch</h3>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-job-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+91 86880 53307</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-job-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">hr.vizag@nmhruae.com </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-job-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      Bhupathi Surya Central Mall,<br />
                      Dondaparthy, Railway New Colony,<br />
                      Visakhapatnam, Andhra Pradesh 530016, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-job-primary">
                    {/* Facebook Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-job-primary">
                    {/* Twitter Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-job-primary">
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Locations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UAE Branch Map */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center md:text-left">UAE Branch</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="NM HR Consultancy - UAE Branch"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929475.2981322214!2d53.14989207812499!3d24.493671300000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8076d1a634b0e363%3A0x6d625b25c99e27c2!2sNM%20HUMAN%20RESOURCES%20CONSULTANCY!5e0!3m2!1sen!2sin!4v1750922667847!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Indian Branch Map */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Indian Branch</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="NM HR Consultancy - Indian Branch"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.040345542795!2d83.29680695296967!3d17.726704719253117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943240631685d%3A0x67c4871ce095afb1!2sBhupathi%20Surya%20Central%20Mall!5e0!3m2!1sen!2sin!4v1750922847479!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ContactUs;
