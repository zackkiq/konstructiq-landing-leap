
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  useEffect(() => {
    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/44954242.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/44954242.js';
      script.defer = true;
      document.head.appendChild(script);
      console.log('HubSpot script added to head');
    }
  }, []);

  return (
    <Card className="shadow-2xl border-0 bg-white">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">
            Get Your Free AI Estimate Demo
          </h3>
          <p className="text-gray-600">
            See how our AI can transform your estimating process in minutes
          </p>
        </div>
        
        <div 
          className="hs-form-frame" 
          data-region="na1" 
          data-form-id="5aad3dc6-fff6-4ade-b5ae-ca04ae0a04c1" 
          data-portal-id="44954242"
        ></div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
