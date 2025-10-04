'use client'

import { useState } from 'react'

export default function PremiumVideos() {
  const [isPaused1, setIsPaused1] = useState(false)
  const [isPaused2, setIsPaused2] = useState(false)

  const premiumVideos = [
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/1.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/2.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/3.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    // Duplicate for infinite scroll effect
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/1.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/2.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/3.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    }
  ]

  const freeVideos = [
    {
      title: 'Smiley woman pop party studio medium shot',
      price: 'Free',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/4.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: false
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/5.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/6.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    // Duplicate for infinite scroll effect
    {
      title: 'Smiley woman pop party studio medium shot',
      price: 'Free',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/4.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: false
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/5.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      views: '16M views',
      timeAgo: '49 minutes ago',
      thumbnail: '/6.png',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg',
      isPremium: true
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">My Latest Premium Videos</span>
          </h2>
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            View All Videos
          </button>
        </div>
      </div>

      {/* Premium Videos Row */}
      <div className="mb-8 overflow-hidden">
        <div 
          className={`flex gap-6 ${isPaused1 ? '' : 'animate-marquee'}`}
          onMouseEnter={() => setIsPaused1(true)}
          onMouseLeave={() => setIsPaused1(false)}
        >
          {premiumVideos.map((video, index) => (
            <div 
              key={index}
              className="min-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {video.isPremium && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Premium
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-relaxed group-hover:text-pink-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-pink-500">{video.price}</span>
                  <span className="text-xs text-gray-500">{video.timeAgo}</span>
                </div>
                <p className="text-xs text-gray-600">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Videos Row */}
      <div className="overflow-hidden">
        <div 
          className={`flex gap-6 ${isPaused2 ? '' : 'animate-marquee-reverse'}`}
          onMouseEnter={() => setIsPaused2(true)}
          onMouseLeave={() => setIsPaused2(false)}
        >
          {freeVideos.map((video, index) => (
            <div 
              key={index}
              className="min-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {video.isPremium ? (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Premium
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Free
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-relaxed group-hover:text-pink-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-lg font-bold ${video.isPremium ? 'text-pink-500' : 'text-green-500'}`}>
                    {video.price}
                  </span>
                  <span className="text-xs text-gray-500">{video.timeAgo}</span>
                </div>
                <p className="text-xs text-gray-600">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}