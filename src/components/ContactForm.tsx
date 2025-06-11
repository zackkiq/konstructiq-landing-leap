
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const formId = useRef(`hs-form-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const initializeForm = () => {
      if (window.hbspt && window.hbspt.forms && formRef.current) {
        console.log('Initializing HubSpot form with ID:', formId.current);
        window.hbspt.forms.create({
          region: "na1",
          portalId: "44954242",
          formId: "5aad3dc6-fff6-4ade-b5ae-ca04ae0a04c1",
          target: `#${formId.current}`
        });
      }
    };

    // Check if HubSpot script is already loaded
    if (window.hbspt && window.hbspt.forms) {
      initializeForm();
    } else {
      // Load HubSpot script if not already loaded
      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/embed/44954242.js';
        script.defer = true;
        script.onload = () => {
          console.log('HubSpot script loaded');
          // Wait a bit for HubSpot to initialize
          setTimeout(initializeForm, 100);
        };
        document.body.appendChild(script);
      } else {
        // Script exists but might still be loading
        const checkHubSpot = () => {
          if (window.hbspt && window.hbspt.forms) {
            initializeForm();
          } else {
            setTimeout(checkHubSpot, 100);
          }
        };
        checkHubSpot();
      }
    }

    return () => {
      // Cleanup is handled by HubSpot
    };
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
        
        <div ref={formRef} id={formId.current}></div>
      </CardContent>
    </Card>
  );
};

// Declare HubSpot global
declare global {
  interface Window {
    hbspt: any;
  }
}

export default ContactForm;
