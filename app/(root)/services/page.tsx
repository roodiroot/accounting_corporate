import Container from "@/components/container";
import { getServices } from "@/actions/get-service";
import { ButtonCastom } from "@/components/ui/button";
import ServicesSection from "@/components/sections/services/services-section";
import ButtonOpenModal from "@/components/sections/absolute/modal/button-open-modal";

export const metadata = {
  title: "Цены на бухгалтерские услуги",
  description:
    "Узнайте цены на профессиональные бухгалтерские услуги от компании Партнер. Прозрачные и конкурентоспособные тарифы на все виды бухгалтерского аутсорсинга.",
};

export default async function ServicesPage() {
  const servicesList = await getServices({});
  return (
    <Container className="pb-32 pt-32 lg:pt-40">
      <div className="overflow-hidden flex justify-between items-start">
        <h1 className="text-3xl max-w-2xl lg:text-4xl  py-2">
          Актуальные <span className="text-accent">цены</span> на наши услуги.
        </h1>
        <ButtonOpenModal className="hidden lg:block">
          <ButtonCastom className="pr-6">Получить прайс</ButtonCastom>
        </ButtonOpenModal>
      </div>
      <ServicesSection
        list={servicesList}
        className="mt-6 sm:mt-7"
        bgCard="bg-secondary-bg"
      />
      <ButtonOpenModal className="lg:hidden block mt-8">
        <ButtonCastom className="pr-6">Получить прайс</ButtonCastom>
      </ButtonOpenModal>
    </Container>
  );
}
