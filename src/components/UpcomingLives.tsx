export default function UpcomingLives() {
  const lives = [
    {
      title: 'Smiley woman pop party studio medium shot',
      date: '25 Jun, 2024',
      platform: 'Facebook Live',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      image: '/upcoming_live_stream_1.png'
    },
    {
      title: 'Smiley woman pop party studio medium shot',
      date: '25 Jun, 2024', 
      platform: 'YouTube Live',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.',
      image: '/upcoming_live_stream_2.png'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">My Upcoming Lives</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {lives.map((live, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative overflow-hidden">
                <img src={live.image} alt={live.title} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xs font-medium shadow-lg">
                    {live.platform}
                  </span>
                  <span className="text-gray-500 text-sm">📅 {live.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {live.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                  {live.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a href="#contact" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-2.5 px-6 rounded-full transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg inline-block">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}