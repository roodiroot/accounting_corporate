import Container from "@/components/container";
import { ButtonCTA } from "@/components/ui/button";
import Image from "next/image";
import ButtonOpenModal from "../absolute/modal/button-open-modal";
import { phone } from "@/lib/phone";

const CTASection = () => {
  return (
    <Container>
      <div className="relative  bg-secondary-bg rounded-6xl  p-4 -mx-4 max-w-xl sm:p-8 flex flex-col sm:mx-auto lg:max-w-none lg:flex-row overflow-hidden">
        <div className="flex-[50%]">
          <h3 className="text-3xl md:text-4xl">
            Хотите бухгалтерию, которая уже{" "}
            <span className="text-accent">решила каждую из проблем</span> с
            которой Вы могли столкнуться?
          </h3>
          <ButtonOpenModal
            title="Спасибо за доверие!"
            description="Оставьте ваши данные. Мы свяжемся с Вами в ближайшее время"
          >
            <ButtonCTA className="mt-10 lg:mt-48 ">
              Начать сотрудничество
            </ButtonCTA>
          </ButtonOpenModal>
        </div>
        <div className="flex-[50%] pt-[250px] sm:pt-[400px] lg:pt-0">
          <Image
            alt="girl_cta"
            width={1000}
            height={1000}
            src="/images/cta/girl2.png"
            className="absolute pointer-events-none -bottom-[2rem]  -right-20 w-[600px] object-cover lg:-top-10 lg:-right-10"
          />
        </div>
      </div>
    </Container>
  );
};

export default CTASection;
