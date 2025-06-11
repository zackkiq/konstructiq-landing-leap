
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Estimating Process?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Start your free 14-day trial today. No credit card required, 
          and you can be up and running in just 5 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
          >
            Schedule Demo
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-100">
          <span className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            14-day free trial
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            No setup fees
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
