export default function Articles() {
  const articles = [
    {
      title: 'Getting Started with Slack API Integration',
      excerpt: 'Learn the fundamentals of integrating Slack API into your applications with this comprehensive guide.',
      date: '10 DEC',
      author: 'Admin',
      category: 'Tutorial',
      readTime: '5 min read'
    },
    {
      title: 'Advanced Message Formatting in Slack',
      excerpt: 'Discover how to create rich, interactive messages using Slack\'s Block Kit framework.',
      date: '08 DEC', 
      author: 'Admin',
      category: 'Guide',
      readTime: '8 min read'
    },
    {
      title: 'Building Slack Bots with TypeScript',
      excerpt: 'A complete tutorial on creating powerful Slack bots using TypeScript and the Bolt framework.',
      date: '05 DEC',
      author: 'Admin', 
      category: 'Development',
      readTime: '12 min read'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Articles & Resources
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest Slack API tutorials and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-6xl">📝</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 px-2 py-1 rounded">{article.date}</span>
                  <span>By {article.author}</span>
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">{article.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}