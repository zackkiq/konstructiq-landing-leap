
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

    // Load RevenueHero scheduler script
    const revenueHeroScript = document.createElement('script');
    revenueHeroScript.src = 'https://assets.revenuehero.io/scheduler.min.js';
    revenueHeroScript.type = 'text/javascript';
    revenueHeroScript.onload = () => {
      // Initialize RevenueHero after script loads
      const initScript = document.createElement('script');
      initScript.type = 'text/javascript';
      initScript.text = `
        window.hero = new RevenueHero({ routerId: '4285' })
        hero.schedule('hsform_7bf0420c-f2c2-44c8-8d88-cc53008873f7')
      `;
      document.body.appendChild(initScript);
    };
    document.head.appendChild(revenueHeroScript);
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
          data-form-id="7bf0420c-f2c2-44c8-8d88-cc53008873f7" 
          data-portal-id="44954242"
        ></div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
