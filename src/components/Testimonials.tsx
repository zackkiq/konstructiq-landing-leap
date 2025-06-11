
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Project Manager",
      company: "BuildTech Solutions",
      content: "This AI estimating tool has revolutionized our bidding process. We're now 40% faster and winning more projects than ever before.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Construction Director",
      company: "Premier Contractors",
      content: "The accuracy is incredible. We've reduced our estimate variance from 15% to just 3%. It's paid for itself in the first month.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      role: "Estimating Manager",
      company: "Urban Development Corp",
      content: "Finally, a tool that understands construction. The AI picks up details that even experienced estimators sometimes miss.",
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
            Join hundreds of construction professionals who trust our AI estimating platform
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
