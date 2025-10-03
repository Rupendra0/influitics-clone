export default function VideoReels() {
  const reels = [
    { title: 'Slack API Authentication Setup', views: '16M', platform: 'YouTube', thumbnail: '🎥' },
    { title: 'Message Scheduling Tutorial', views: '8.2M', platform: 'YouTube', thumbnail: '📅' },
    { title: 'Real-time Messaging Demo', views: '12M', platform: 'YouTube', thumbnail: '⚡' },
    { title: 'Bot Integration Walkthrough', views: '5.5M', platform: 'YouTube', thumbnail: '🤖' },
    { title: 'Webhook Configuration Guide', views: '9.1M', platform: 'YouTube', thumbnail: '🔗' },
    { title: 'Advanced API Features', views: '7.8M', platform: 'YouTube', thumbnail: '🚀' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Tutorial Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to integrate Slack API into your applications with our comprehensive video tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <div className="text-6xl">{reel.thumbnail}</div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-colors">
                    <span className="text-2xl">▶️</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                    {reel.platform}
                  </span>
                  <span className="text-gray-500 text-sm">{reel.views} views</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
                  {reel.title}
                </h3>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Watch Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Tutorials
          </button>
        </div>
      </div>
    </section>
  )
}