import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Button, ButtonCastom } from "@/components/ui/button";
import Image from "next/image";
import StepItem from "./step";
import ButtonOpenModal from "../absolute/modal/button-open-modal";
import StapAction from "./stap-action";

const steps = [
  {
    id: 1,
    title: "Вы оставляете заявку",
    description:
      "Мы рассчитываем индивидуальную стоимость обслуживания с учетом особенностей вашего бизнеса.",
  },
  {
    id: 2,
    title: "Мы принимаем дела",
    description:
      "Принимаем дела от старого бухгалтера, приводим бухгалтерию в порядок, проводим сверку с налоговой.",
  },
  {
    id: 3,
    title: "Изучаем ваш бизнес",
    description:
      "Выявляем и усиливаем слабые стороны. Предоставляем для  Вас полный план действий.",
  },
];

const Steps = () => {
  return (
    <Container className="pt-24 pb-24 lg:pb-32 lg:pt-36 relative overflow-hidden">
      <svg
        width="574"
        height="813"
        viewBox="0 0 574 813"
        fill="none"
        className="absolute -z-10 left-1/2 -top-2"
      >
        <path
          d="M550.18 746.462C596.856 595.731 558.424 246.781 373.104 169.207C142.568 72.7057 -154.077 716.837 107.897 802.771C330.05 875.644 310.797 92.1847 103.247 5.30496"
          stroke="#EDEDED"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex justify-between items-start">
        <h2 className="text-3xl max-w-2xl mx-auto lg:mx-0 lg:text-4xl">
          Всего <span className="text-accent">несколько шагов</span> что бы
          перевести бухгалтерию на аутсорс.
        </h2>
        <ButtonOpenModal>
          <ButtonCastom className="hidden lg:block pr-6">
            Узнать подробнее
          </ButtonCastom>
        </ButtonOpenModal>
      </div>
      <div className="relative mt-12 grid grid-cols-1 gap-2 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((item) => (
          <StepItem
            key={item.id}
            step={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
        <ButtonOpenModal
          title="Готовы к сотрудничеству?"
          description="Заполните форму ниже и мы свяжемся с вами в ближайшее время. Спасибо за обращение!"
        >
          <StapAction />
        </ButtonOpenModal>
      </div>
    </Container>
  );
};

export default Steps;
