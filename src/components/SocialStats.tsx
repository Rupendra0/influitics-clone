export default function SocialStats() {
  const stats = [
    { 
      platform: 'Facebook', 
      count: '20.5K', 
      followers: 'followers', 
      icon: '/facebook_icon.png',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      buttonText: 'Follow Me'
    },
    { 
      platform: 'Instagram', 
      count: '30.9K', 
      followers: 'followers', 
      icon: '/instagram_icon.png',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
      buttonText: 'Follow Me'
    },
    { 
      platform: 'Tiktok', 
      count: '2.5M', 
      followers: 'followers', 
      icon: '/tiktok_icon.png',
      buttonColor: 'bg-black hover:bg-gray-800',
      buttonText: 'Follow Me'
    },
    { 
      platform: 'YouTube', 
      count: '1.69M', 
      followers: 'Sbscribers', 
      icon: '/youtube_icon.png',
      buttonColor: 'bg-red-600 hover:bg-red-700',
      buttonText: 'Subscribe'
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center justify-between">
                {/* Icon and Platform Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img src={stat.icon} alt={stat.platform} className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
                    <div className="text-gray-600 font-medium">{stat.platform}</div>
                    <div className="text-sm text-gray-500">{stat.followers}</div>
                  </div>
                </div>
                
                {/* Follow Button */}
                <button className={`px-6 py-2 text-white rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${stat.buttonColor}`}>
                  {stat.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}