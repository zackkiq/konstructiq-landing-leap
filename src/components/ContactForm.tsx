
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const formId = useRef(`hs-form-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    // Load HubSpot forms script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/44954242.js';
      script.defer = true;
      script.onload = () => {
        createForm();
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, create the form directly
      createForm();
    }

    function createForm() {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "44954242",
          formId: "5aad3dc6-fff6-4ade-b5ae-ca04ae0a04c1",
          target: `#${formId.current}`
        });
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
