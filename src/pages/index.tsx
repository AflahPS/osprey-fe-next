import {
  ClientsCarousal,
  RightImagedHero,
  LeftImagedHero,
  FinalHero,
  QualityHero,
  QuiltedImagesHero,
  StatsHero,
  TestimonialsHero,
} from '@/components/Heros';
import AppLayout from '@/wrappers/Layout';
import MetaHeader from '@/wrappers/Meta';

export default function Home() {
  return (
    <AppLayout>
      <MetaHeader />
      <RightImagedHero />
      <ClientsCarousal />
      <LeftImagedHero />
      <QualityHero />
      <StatsHero />
      <QuiltedImagesHero />
      <TestimonialsHero />
      <FinalHero />
    </AppLayout>
  );
}
