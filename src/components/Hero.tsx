
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              🚀 Trusted by 500+ Construction Companies
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Get Accurate <span className="text-blue-600">Construction Estimates</span> in Minutes, Not Days
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your bidding process with AI-powered estimating that delivers 95% accuracy. 
              Win more projects while reducing estimate time by 80%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
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
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">Project Estimate</h3>
                  <Badge className="bg-green-100 text-green-800">95% Accurate</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Foundation Work</span>
                    <span className="font-semibold text-green-600">$45,230</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Framing & Structure</span>
                    <span className="font-semibold text-green-600">$78,590</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Electrical & Plumbing</span>
                    <span className="font-semibold text-green-600">$32,450</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-blue-50 px-4 rounded-lg">
                    <span className="font-semibold text-gray-900">Total Estimate</span>
                    <span className="text-2xl font-bold text-blue-600">$156,270</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">Generated in 3.2 seconds</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              80% Faster
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
