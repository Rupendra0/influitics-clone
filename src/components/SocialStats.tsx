export default function SocialStats() {
  const stats = [
    { platform: 'Slack Workspaces', count: '74K', followers: 'Connected', icon: '💬' },
    { platform: 'Messages Sent', count: '20.5M', followers: 'via API', icon: '📤' },
    { platform: 'Integration Uptime', count: '99.9%', followers: 'Reliability', icon: '⚡' },
    { platform: 'Developer Tools', count: '15+', followers: 'Available', icon: '🛠️' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</div>
                <div className="text-gray-600 font-medium">{stat.platform}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.followers}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}