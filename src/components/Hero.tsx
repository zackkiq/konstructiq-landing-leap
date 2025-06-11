
import React from 'react';
import { Badge } from '@/components/ui/badge';
import ContactForm from './ContactForm';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-light to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-brand-secondary/20 text-brand-dark border-brand-secondary/30">
              🚀 Trusted by 500+ Construction Companies
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-brand-dark">
              Get Accurate <span className="text-brand-primary">Construction Estimates</span> in Minutes, Not Days
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your bidding process with AI-powered estimating that delivers 95% accuracy. 
              Win more projects while reducing estimate time by 80%.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                ✅ No credit card required
              </span>
              <span className="flex items-center gap-1">
                ✅ 14-day free trial
              </span>
              <span className="flex items-center gap-1">
                ✅ Setup in 5 minutes
              </span>
            </div>
          </div>
          
          <div className="relative">
            <ContactForm />
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 bg-brand-secondary text-brand-dark px-4 py-2 rounded-full text-sm font-medium">
              80% Faster
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
