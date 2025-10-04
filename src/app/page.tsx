import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialStats from '@/components/SocialStats'
import VideoReels from '@/components/VideoReels'
import Services from '@/components/Services'
import About from '@/components/About'
import UpcomingLives from '@/components/UpcomingLives'
import PremiumVideos from '@/components/PremiumVideos'
import Contact from '@/components/Contact'
import Articles from '@/components/Articles'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HEADER SECTION */}
      <Header />
      
      {/* BANNER/HERO SECTION */}
      <Hero />
      
      {/* SOCIAL LINKS SECTION */}
      <SocialStats />
      
      {/* REELS SECTION */}
      <VideoReels />
      
      {/* SERVICES SECTION */}
      <Services />
      
      {/* INTRO & LIVES WRAPPER */}
      <div className="jo-intro-lives-wrapper">
        {/* INTRO SECTION (About) */}
        <About />
        
        {/* UPCOMING LIVES SECTION */}
        <UpcomingLives />
      </div>
      
      {/* PREMIUM VIDEOS SECTION */}
      <PremiumVideos />
      
      {/* CONTACT SECTION */}
      <Contact />
      
      {/* ARTICLES SECTION */}
      <Articles />
      
      {/* FOOTER SECTION */}
      <Footer />
    </main>
  )
}