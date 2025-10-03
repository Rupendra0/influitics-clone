export default function Services() {
  const services = [
    {
      title: 'Slack OAuth Integration',
      description: 'Secure authentication flow for your Slack applications with OAuth 2.0 implementation.',
      features: ['OAuth 2.0 Setup', 'Token Management', 'Scope Configuration', 'User Authorization'],
      icon: '🔐'
    },
    {
      title: 'Message Management',
      description: 'Complete message lifecycle management with send, schedule, edit, and delete capabilities.',
      features: ['Send Messages', 'Schedule Messages', 'Edit Messages', 'Delete Messages'],
      icon: '💬'
    },
    {
      title: 'Real-time Integration',
      description: 'Live messaging integration with webhook support and real-time event handling.',
      features: ['Webhook Setup', 'Event Listening', 'Real-time Updates', 'Error Handling'],
      icon: '⚡'
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Will I Give You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Slack API integration services to streamline your team communication and workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}