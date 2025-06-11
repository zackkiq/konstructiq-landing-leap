
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "MCM Electric",
      role: "Construction Company",
      company: "Google Review",
      content: "KonstructIQ is a great resource for our business and has helped streamline our estimating, change orders, daily log and invoicing process and has also helped us get paid quicker from our clients!! The support team have been incredibly helpful whenever I have questions on a particular feature!",
      rating: 5
    },
    {
      name: "Dustin Leach",
      role: "Construction Professional", 
      company: "Google Review",
      content: "My companies experience with Konstruct IQ has been nothing short of amazing. The new AI technology will be a game changer to my team of estimators. We have worked closely with Joy and Justin and they have taken our feedback and worked in our suggestions. Glad we are using this in our day to day operations!",
      rating: 5
    },
    {
      name: "Matt Komo",
      role: "Builder & Business Owner",
      company: "Google Review",
      content: "KonstructIQ brings all of my financial management needs to one place for my projects. I can enter data one time and manage it throughout the site while paying subcontractors and vendors more efficiently. It simplifies everything on the financial side of my business. My experience with them has been fantastic. The team focuses on real solutions for the construction industry and is not trying to sell me their product. They are creating a product that makes being a builder and business owner easier. They listen and then deliver.",
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
