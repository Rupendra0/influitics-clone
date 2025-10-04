export default function Articles() {
  const articles = [
    {
      title: 'Many of those Products Offer the Potential',
      date: '10 JUNE',
      author: 'Admin',
      category: 'Lifestyle',
      image: '/Latest Articles & News1.png'
    },
    {
      title: 'Many of those Products Offer the Potential',
      date: '10 JUNE', 
      author: 'Admin',
      category: 'Beauty',
      image: '/Latest Articles & News2.png'
    },
    {
      title: 'Many of those Products Offer the Potential',
      date: '10 JUNE',
      author: 'Admin', 
      category: 'Fashion',
      image: '/Latest Articles & News3.png'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Latest Articles & News</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-lift animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{article.date}</span>
                  <span>By {article.author}</span>
                  <span className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 px-3 py-1 rounded-full font-medium">{article.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-pink-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <a href="#" className="text-pink-500 hover:text-rose-500 font-medium transform hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 group">
                    Read More 
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 px-8 rounded-full transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}