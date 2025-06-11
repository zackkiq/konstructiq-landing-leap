
import React from 'react';

const SocialProof = () => {
  const companies = [
    "BuildTech Corp", "Premier Construction", "Urban Builders", 
    "Skyline Contractors", "Foundation Pro", "Elite Construction"
  ];

  return (
    <section className="bg-white py-16 border-b">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-8">
            Trusted by leading construction companies nationwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 font-medium text-sm lg:text-base">
                {company}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.5B+</div>
            <div className="text-gray-600">Projects Estimated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
            <div className="text-gray-600">Time Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
