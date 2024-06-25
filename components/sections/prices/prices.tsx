import Container from "@/components/container";
import { ButtonCastom } from "@/components/ui/button";
import ServicesSection from "../services/services-section";
import PriceItemContent from "./price-item-content";
import ButtonOpenModal from "../absolute/modal/button-open-modal";
import { phone } from "@/lib/phone";
import { getServices } from "@/actions/get-service";

const Prices = async () => {
  const servicesList = await getServices({ limit: 7 });

  return (
    <Container>
      <div className="overflow-hidden flex justify-between items-start">
        <h2 className="text-3xl py-2 max-w-2xl mx-auto lg:mx-0 lg:text-4xl">
          Вам не потребуется оплачивать новые программы.{" "}
          <span className="text-accent">У нас все есть.</span>
        </h2>
        <ButtonOpenModal>
          <ButtonCastom className="hidden lg:block pr-6">
            Получить прайс
          </ButtonCastom>
        </ButtonOpenModal>
      </div>
      <ServicesSection list={servicesList} className="mt-10 sm:mt-8">
        <ButtonOpenModal>
          <PriceItemContent
            title="Бесплатно"
            description="Для заключивших договор до конца лета*"
            className="md:odd:ml-auto md:odd:mr-0 md:even:mr-auto md:even:ml-0 lg:even:mx-auto lg:odd:mx-auto"
          />
        </ButtonOpenModal>
      </ServicesSection>
      <div className="mt-4 text-base max-w-xl text-secondary">
        *Акция действует на <span className="text-accent">первые 2 месяца</span>{" "}
        обслуживания, для компаний заключивших договор до 30.08.2025.
        Подробности акции уточняйте{" "}
        <span className="text-accent">
          {" "}
          по телефону{" "}
          <a href={`tel:${process.env.PHONE_1}`}>
            {phone(process.env.PHONE_1)}
          </a>
        </span>
      </div>
    </Container>
  );
};

export default Prices;
