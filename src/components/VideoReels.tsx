'use client'

import { useRef, useState, useEffect } from 'react'

export default function VideoReels() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const baseReels = [
    { title: 'Can Robot Solve This ...?', views: '16M', platform: 'Facebook Reel', thumbnail: '/Latest_Video_Reels_thumbnail_1.png', video: '/reelvideo.mp4' },
    { title: 'Can Robot Solve This ...?', views: '16M', platform: 'Facebook Reel', thumbnail: '/Latest_Video_Reels_thumbnail_2.png', video: '/reelvideo.mp4' },
    { title: 'Can Robot Solve This ...?', views: '16M', platform: 'Facebook Reel', thumbnail: '/Latest_Video_Reels_thumbnail_3.png', video: '/reelvideo.mp4' },
    { title: 'Can Robot Solve This ...?', views: '16M', platform: 'Facebook Reel', thumbnail: '/Latest_Video_Reels_thumbnail_4.png', video: '/reelvideo.mp4' },
  ]

  // Create infinite array by repeating base reels
  const infiniteReels = [...baseReels, ...baseReels, ...baseReels, ...baseReels, ...baseReels]

  const playVideo = (index: number) => {
    setPlayingVideo(playingVideo === index ? null : index)
  }

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        
        // If scrolled near the end, add more items
        if (scrollLeft + clientWidth >= scrollWidth - 100) {
          // Reset scroll position to create infinite effect
          scrollRef.current.scrollLeft = scrollLeft - (baseReels.length * 350)
        }
        
        // If scrolled to the beginning, jump to middle
        if (scrollLeft <= 100) {
          scrollRef.current.scrollLeft = scrollLeft + (baseReels.length * 350)
        }
      }
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      // Set initial scroll position to middle
      scrollContainer.scrollLeft = baseReels.length * 350
      
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Latest Video Reels</span>
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteReels.map((reel, index) => (
              <div key={`reel-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${(index % 4) * 0.1}s`}}>
                {/* Video container with in-place playback */}
                <div className="relative h-96 bg-gray-100 rounded-t-2xl overflow-hidden">
                  {playingVideo === index ? (
                    // Video player
                    <div className="relative w-full h-full">
                      <video 
                        autoPlay 
                        controls 
                        loop
                        muted
                        className="w-full h-full object-cover"
                        poster={reel.thumbnail}
                      >
                        <source src={reel.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Close video button */}
                      <button 
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    // Thumbnail with play overlay
                    <>
                      <img src={reel.thumbnail} alt={reel.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                      
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => playVideo(index)}
                          className="bg-red-600 text-white rounded-full p-6 hover:bg-red-700 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse-slow"
                        >
                          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Platform badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          {reel.platform}
                        </span>
                      </div>
                      
                      {/* Video duration badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-2 py-1 bg-black/70 text-white rounded text-xs font-medium">
                          0:30
                        </span>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Content section */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
                    {reel.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{reel.views} views</span>
                    <button 
                      onClick={() => playVideo(index)}
                      className="text-pink-500 hover:text-rose-500 font-medium text-sm transform hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      {playingVideo === index ? 'Stop' : 'Play'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}