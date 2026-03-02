import {
  HeroSection,
  PainPointsSection,
  HowItWorksSection,
  FeaturesSection,
  TimelineSection,
  BuilderSection,
  WaitlistSection,
  Footer
} from './components'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TimelineSection />
      <BuilderSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
