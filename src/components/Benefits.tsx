
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "80% Faster Estimates",
      description: "Generate detailed estimates in minutes instead of days. Our AI processes specifications instantly.",
      stat: "3 minutes avg"
    },
    {
      icon: Users,
      title: "Win More Projects",
      description: "Respond to RFPs faster and with more competitive bids.",
      stat: "More wins"
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Why Choose AI-Powered Estimating?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional estimating is slow, prone to errors, and costs you projects. 
            Our AI solution transforms how construction companies bid and win work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <div className="text-2xl font-bold text-brand-secondary mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
