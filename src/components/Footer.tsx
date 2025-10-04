export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            {/* Logo and Brand */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Influtics</span>
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input 
                type="email" 
                placeholder="Email Address"
                className="px-6 py-3 rounded-full border-none outline-none w-80 text-gray-700"
              />
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
                Get Newsletter
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300">
                <img src="/facebook_icon.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300">
                <img src="/tiktok_icon.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300">
                <img src="/instagram_icon.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300">
                <img src="/youtube_icon.png" alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Instagram Feed Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Follow Me on Instagram</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img src="/Instagram feed_footer1.png" alt="Instagram Feed 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img src="/Instagram feed_footer2.png" alt="Instagram Feed 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img src="/Instagram feed_footer3.png" alt="Instagram Feed 3" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img src="/Instagram feed_footer4.png" alt="Instagram Feed 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/navbar_logo.png" alt="Linda Susan Logo" className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Linda Susan</span>
            </div>
            <p className="text-gray-400 mb-6">
              Beauty & Lifestyle Influencer sharing inspiration, tips, and authentic moments with my amazing community.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/facebook_icon.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/instagram_icon.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/tiktok_icon.png" alt="TikTok" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/youtube_icon.png" alt="YouTube" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Content</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Video Reels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Beauty Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Lifestyle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Tutorials</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Connect</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">linda@influencer.com</span></li>
              <li><span className="text-gray-400">@lindasusan</span></li>
              <li><span className="text-gray-400">Collaborations</span></li>
              <li><span className="text-gray-400">Brand Partnerships</span></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Linda Susan. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
}