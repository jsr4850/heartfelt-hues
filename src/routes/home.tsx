import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Landing Page ....."
        content=" Building go to destination for personalised gifts"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
