export default function UpcomingLives() {
  const lives = [
    {
      title: 'Building Your First Slack Bot',
      date: '25 Dec, 2024',
      time: '3:00 PM EST',
      platform: 'YouTube Live',
      description: 'Learn how to create a Slack bot from scratch using the Bolt framework and deploy it to your workspace.',
    },
    {
      title: 'Advanced Slack API Features',
      date: '28 Dec, 2024', 
      time: '2:00 PM EST',
      platform: 'Twitch Live',
      description: 'Explore advanced features like interactive components, modals, and slash commands in Slack API.',
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Upcoming Live Sessions
          </h2>
          <p className="text-xl text-gray-600">
            Join me for live coding sessions and Slack API tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lives.map((live, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                    {live.platform}
                  </span>
                  <span className="text-gray-500 text-sm">{live.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {live.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {live.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    🕐 {live.time}
                  </div>
                  <button className="btn-primary">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}