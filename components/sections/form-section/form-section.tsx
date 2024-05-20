import Container from "@/components/container";
import FormClient from "./form-client";
import Image from "next/image";

const FormSection = () => {
  return (
    <Container className="relative pt-48 pb-16 flex flex-col gap-y-14 max-w-xl lg:max-w-screen-2xl lg:flex-row lg:gap-4 lg:pt-24 lg:pb-24 ">
      <Image
        width={1200}
        height={1200}
        src="/images/form/stone.png"
        className="absolute -z-10 top-[-6rem]  left-[-3rem] sm:top-[-13rem]  lg:top-[6rem] lg:left-[-20rem] bottom-0 lg:w-[60rem]"
        alt="man"
      />
      <div className="lg:flex-[50%]">
        <p className="text-secondary max-w-xl">
          Всё, что от вас требуется —{" "}
          <span className="text-accent">ставить задачи</span> бизнес-ассистенту
          и присылать фотографии документов. Об остальном позаботимся мы.
        </p>
      </div>
      <div className="flex flex-col lg:flex-[50%] ">
        <h6 className="text-3xl max-w-xl md:text-4xl">
          Остались вопросы к нам?
        </h6>
        <p className="mt-3 max-w-xl">
          Заполните форму обратной связи. И наши менеджеры свяжутся с вами в
          ближайшее время. И ответят на все интересующие вопросы. Спасибо за
          обращение.
        </p>
        <FormClient className="mt-8 max-w-xl" />
      </div>
    </Container>
  );
};

export default FormSection;
