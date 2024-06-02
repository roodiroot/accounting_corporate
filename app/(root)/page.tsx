import { phone } from "@/lib/phone";
import Container from "@/components/container";
import ContainerBG from "@/components/container-bg";
import Steps from "@/components/sections/steps/steps";
import { ButtonCastom } from "@/components/ui/button";
import CTASection from "@/components/sections/cta/cta";
import Prices from "@/components/sections/prices/prices";
import Benefit from "@/components/sections/benefit/benefit";
import Benefits from "@/components/sections/benefits/benefits";
import Features from "@/components/sections/features/features";
import HeroSection from "@/components/sections/hero/hero-section";
import FormSection from "@/components/sections/form-section/form-section";
import FeaturesList from "@/components/sections/features-list/features-list";
import ButtonOpenModal from "@/components/sections/absolute/modal/button-open-modal";

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
          <ButtonOpenModal
            title="Вопрос по услугам?"
            description={`Заполните форму обратной связи или позвоните по телефону ${phone(
              process.env.PHONE_1
            )}, мы с радостью ответим на все вопросы.`}
          >
            <ButtonCastom className="hidden lg:block pr-6">
              Узнать подробнее
            </ButtonCastom>
          </ButtonOpenModal>
        </div>
      </Container>
      <ContainerBG>
        <Features />
        <Benefits />
      </ContainerBG>
      <Benefit className="py-24" />
      <CTASection />
      <Steps />
      <ContainerBG>
        <Prices />
      </ContainerBG>
      <FormSection />
    </main>
  );
}
