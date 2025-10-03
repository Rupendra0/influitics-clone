import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SlackIntegration from '@/components/SlackIntegration'
import Services from '@/components/Services'
import About from '@/components/About'
import SocialStats from '@/components/SocialStats'
import UpcomingLives from '@/components/UpcomingLives'
import VideoReels from '@/components/VideoReels'
import Articles from '@/components/Articles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SlackIntegration />
      <Services />
      <About />
      <SocialStats />
      <UpcomingLives />
      <VideoReels />
      <Articles />
      <Contact />
      <Footer />
    </main>
  )
}