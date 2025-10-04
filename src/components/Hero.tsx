'use client'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                I&apos;m a <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Social Media influencer & digital content creator</span>
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 animate-fade-in-up animation-delay-200">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. 
              Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris 
              bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum 
              libero, ac aliquet lectus.
            </p>
            
            <div className="mb-8 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Non mattis nulla, in ultrices diam</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Web design done Delightful Visualization</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Alienum phaedrum torquatos nec eu, vis detraxit periculis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Software Makes Your Profit Double if You Scale Properly.</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <a href="#contact" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 text-center shadow-lg">
                Contact Me
              </a>
              <a href="#about" className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg border border-gray-300 transform hover:scale-105 transition-all duration-300 text-center shadow-lg">
                Watch Video
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 max-w-lg mx-auto">
              <img 
                src="/mainpage_image.png" 
                alt="Content Creator" 
                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float"
              />
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}