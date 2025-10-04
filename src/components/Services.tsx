'use client'

import { useState } from 'react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: 'Brand Collaborations',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      features: ['Unlimited influencer search', 'Unlimited direct messages with freelancer', 'Unlimited requests for with celebrities', 'Unlimited project tracking', 'Unlimited Campaign monitoring', 'Goal Setting Begin by clearly defining'],
      image: '/image copy.png'
    },
    {
      title: 'Empowering Creators',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      features: ['Unlimited influencer search', 'Unlimited direct messages with freelancer', 'Unlimited requests for with celebrities', 'Unlimited project tracking', 'Unlimited Campaign monitoring', 'Goal Setting Begin by clearly defining'],
      image: '/image copy.png'
    },
    {
      title: 'Content Planner',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      features: ['Unlimited influencer search', 'Unlimited direct messages with freelancer', 'Unlimited requests for with celebrities', 'Unlimited project tracking', 'Unlimited Campaign monitoring', 'Goal Setting Begin by clearly defining'],
      image: '/image copy.png'
    },
    {
      title: 'Relevant Content',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      features: ['Unlimited influencer search', 'Unlimited direct messages with freelancer', 'Unlimited requests for with celebrities', 'Unlimited project tracking', 'Unlimited Campaign monitoring', 'Goal Setting Begin by clearly defining'],
      image: '/image copy.png'
    },
    {
      title: 'Social Media Management',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      features: ['Unlimited influencer search', 'Unlimited direct messages with freelancer', 'Unlimited requests for with celebrities', 'Unlimited project tracking', 'Unlimited Campaign monitoring', 'Goal Setting Begin by clearly defining'],
      image: '/image copy.png'
    }
  ]

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100">
      <div className="container mx-auto px-4">
        {/* Services Wrapper - matches reference HTML structure */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-0">
              What Will I Give You?
            </h2>
            
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg">
              View All Services
            </button>
          </div>

          {/* Services Tabs Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Tab Navigation */}
            <div className="lg:col-span-4">
              <div className="space-y-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-105 border ${
                      activeService === index
                        ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg border-pink-500'
                        : 'bg-white hover:bg-pink-50 text-gray-700 shadow-sm hover:shadow-md border-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-base">{service.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {/* Service Tab Content - Horizontal Layout */}
                <div className="flex h-full">
                  {/* Image Section */}
                  <div className="w-2/5 bg-gray-100">
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].title} 
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="w-3/5 p-6">
                    <h5 className="text-2xl font-bold text-gray-900 mb-3">
                      {services[activeService].title}
                    </h5>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {services[activeService].description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {services[activeService].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}