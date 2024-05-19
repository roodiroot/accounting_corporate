import Container from "@/components/container";
import Benefits from "@/components/sections/benefits/benefits";
import FeaturesList from "@/components/sections/features-list/features-list";
import Features from "@/components/sections/features/features";
import Footer from "@/components/sections/footer/foote";
import HeroSection from "@/components/sections/hero/hero-section";
import { ButtonCastom } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesList />
      <Container>
        <div className="pt-24 lg:pt-36 overflow-hidden flex justify-between items-start">
          <h2 className="text-3xl max-w-2xl lg:text-4xl">
            Примим ваши дела <span className="text-accent">быстро</span>, даже
            если <span className="text-accent">бухгалтер пропал</span>, а
            документы сгорели.
          </h2>
          <ButtonCastom className="hidden lg:block pr-6">
            Узнать подробнее
          </ButtonCastom>
        </div>
      </Container>
      <div className="bg-secondary-bg rounded-6xl py-8 mt-12 sm:mt-10 mx-auto max-w-screen-2xl -px-4 overflow-hidden">
        <Features />
        <Benefits />
      </div>
      <Footer />
    </main>
  );
}
