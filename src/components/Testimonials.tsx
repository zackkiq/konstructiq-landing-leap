
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Customer Review",
      role: "Google Review",
      company: "Verified Google Customer",
      content: "Please replace this with actual Google review content from your Google Business listing.",
      rating: 5
    },
    {
      name: "Customer Review",
      role: "Google Review", 
      company: "Verified Google Customer",
      content: "Please replace this with actual Google review content from your Google Business listing.",
      rating: 5
    },
    {
      name: "Customer Review",
      role: "Google Review",
      company: "Verified Google Customer", 
      content: "Please replace this with actual Google review content from your Google Business listing.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from verified Google customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-brand-primary text-sm font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
