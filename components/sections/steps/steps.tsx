import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Button, ButtonCastom } from "@/components/ui/button";
import Image from "next/image";
import StepItem from "./step";

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
        <h2 className="text-3xl max-w-2xl lg:text-4xl">
          Всего <span className="text-accent">несколько шагов</span> что бы
          перевести бухгалтерию на аутсорс.
        </h2>
        <ButtonCastom className="hidden lg:block pr-6">
          Узнать подробнее
        </ButtonCastom>
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
        <div className="relative w-full max-w-[380px] mx-auto aspect-[1/1.18] rounded-5xl p-8 flex flex-col overflow-hidden group cursor-pointer shadow-lg md:mx-0">
          <Image
            alt="bg-step_4"
            width={400}
            height={400}
            src="/images/steps/bg.png"
            className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
          />
          <div className="flex-1 flex justify-between">
            <div className="text-[80px] text-white font-bold">4</div>
            <Button
              className="bg-white group-hover:bg-white/70"
              size="icon"
              variant="icon"
            >
              <Icons.link className="stroke-accent" />
            </Button>
          </div>
          <h4 className="text-4xl text-white">
            Начинаем работать
            <Icons.link className="ml-4 stroke-white inline" />
          </h4>
        </div>
      </div>
    </Container>
  );
};

export default Steps;
