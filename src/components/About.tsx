export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              I&apos;m a Slack API Integration Specialist & Developer
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Passionate about creating seamless communication workflows through powerful Slack API integrations. 
              I help teams automate their messaging, streamline notifications, and build custom Slack applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Expert in Slack Web API and Bolt Framework</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">OAuth 2.0 Authentication Implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Real-time Messaging & Webhook Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Custom Bot Development & Automation</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Contact Me
              </button>
              <button className="btn-secondary">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Slack Workspace</div>
                    <div className="text-gray-500">Development Team</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="text-sm text-gray-500">Recent API Activity</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span>Messages Sent Today</span>
                      <span className="font-bold text-green-600">1,247</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>API Calls</span>
                      <span className="font-bold text-blue-600">5,832</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Response Time</span>
                      <span className="font-bold text-purple-600">45ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}