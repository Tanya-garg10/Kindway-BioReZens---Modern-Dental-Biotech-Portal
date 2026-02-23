import HeroSlider from '@/components/HeroSlider'
import ServiceCards from '@/components/ServiceCards'
import MissionVision from '@/components/MissionVision'
import WhyChooseUs from '@/components/WhyChooseUs'
import Statistics from '@/components/Statistics'
import RecentActivities from '@/components/RecentActivities'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServiceCards />
      <MissionVision />
      <WhyChooseUs />
      <Statistics />
      <RecentActivities />
      <CTASection />
    </>
  )
}
