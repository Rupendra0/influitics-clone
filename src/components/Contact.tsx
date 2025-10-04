'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 animate-slide-up order-2 lg:order-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👋</span>
                <span className="text-lg font-semibold text-gray-700">HELLO</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s Work Together on your next Project</h3>
              <p className="text-gray-600">
                consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur 
                nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Write Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50 resize-none"
                  placeholder="Write Message..."
                  required
                />
              </div>
              
              <button type="submit" className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto">
              <img 
                src="/y.png" 
                alt="Let's Work Together" 
                className="w-full h-auto max-h-[600px] object-contain rounded-2xl"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}