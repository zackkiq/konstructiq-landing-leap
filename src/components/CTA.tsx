
import React from 'react';
import { CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-primary/90">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Estimating Process?
            </h2>
            <p className="text-xl text-brand-light mb-8">
              Start your demo today and see how our AI can revolutionize your construction estimates in just minutes.
            </p>
            
            <div className="flex flex-col gap-4 text-brand-light">
              <span className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5" />
                30-day money back guarantee
              </span>
              <span className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5" />
                Unlimited users & projects
              </span>
              <span className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5" />
                One flat fee pricing
              </span>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
