
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    "Real-time material pricing",
    "Labor cost calculations",
    "Risk assessment & contingencies",
    "Integration with project management tools",
    "Custom reporting & analytics",
    "Multi-trade coordination",
    "Historical data analysis",
    "Change order management"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6">
              Everything You Need for Accurate Estimates
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive platform handles every aspect of construction estimating, 
              from initial calculations to final bid submission.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-brand-primary to-brand-primary/80 text-white p-6 rounded-t-lg">
                  <h3 className="text-xl font-semibold mb-2">Project Dashboard</h3>
                  <p className="text-brand-light">Real-time estimate tracking</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Office Building - Phase 1</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Completed</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Residential Complex</span>
                    <span className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded text-sm">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Warehouse Expansion</span>
                    <span className="bg-brand-secondary/20 text-brand-dark px-2 py-1 rounded text-sm">Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
