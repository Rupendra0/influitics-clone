export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              I&apos;m a Social Media influencer & digital content creator
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur
              nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc
              pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Non mattis nulla, in ultrices diam</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Web design done Delightful Visualization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Alienum phaedrum torquatos nec eu, vis detraxit periculis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Software Makes Your Profit Double if You Scale Properly.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Contact Me
              </a>
              <a href="https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg" className="btn-secondary text-center">
                Watch Video
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/image.png" 
              alt="Linda Susan - Social Media Influencer" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}