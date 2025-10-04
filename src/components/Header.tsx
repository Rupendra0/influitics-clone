'use client'

import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Influtics</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              About Me
            </a>
            <a href="#streaming" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Streaming Videos
            </a>
            <a href="#pages" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Pages
            </a>
            <a href="#blog" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 9l4.5 2.5L16.5 9l-4.5 3L7.5 9z"/>
              </svg>
              + Follow Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                About Me
              </a>
              <a href="#streaming" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Streaming Videos
              </a>
              <a href="#pages" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Pages
              </a>
              <a href="#blog" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Blog
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Contact
              </a>
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium w-full mt-4 inline-flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 9l4.5 2.5L16.5 9l-4.5 3L7.5 9z"/>
                </svg>
                + Follow Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}