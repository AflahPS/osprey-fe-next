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
import { theme } from '@/utils/theme';
import AppLayout from '@/wrappers/Layout';
import MetaHeader from '@/wrappers/Meta';
import { ThemeProvider } from '@mui/styles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
