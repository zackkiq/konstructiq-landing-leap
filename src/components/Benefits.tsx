
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Users, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "80% Faster Estimates",
      description: "Generate detailed estimates in minutes instead of days. Our AI processes blueprints and specifications instantly.",
      stat: "3 minutes avg"
    },
    {
      icon: DollarSign,
      title: "95% Accuracy Rate",
      description: "Machine learning algorithms trained on millions of projects ensure precision you can trust for bidding.",
      stat: "±2% variance"
    },
    {
      icon: Users,
      title: "Win More Projects",
      description: "Respond to RFPs faster and with more competitive bids. Our users report 40% higher win rates.",
      stat: "40% more wins"
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Built-in risk analysis and contingency planning help you avoid costly overruns and project delays.",
      stat: "15% less overruns"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AI-Powered Estimating?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional estimating is slow, prone to errors, and costs you projects. 
            Our AI solution transforms how construction companies bid and win work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
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
