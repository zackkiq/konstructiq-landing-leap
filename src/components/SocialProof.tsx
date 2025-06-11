
import React from 'react';

const SocialProof = () => {
  return (
    <section className="bg-white py-16 border-b">
      <div className="container mx-auto max-w-7xl px-4">        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">$2.5B+</div>
            <div className="text-gray-600">Projects Estimated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">95%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">80%</div>
            <div className="text-gray-600">Time Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
