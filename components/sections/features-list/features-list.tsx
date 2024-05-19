import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Button, ButtonCastom } from "@/components/ui/button";
import FeaturesItem from "./features-item";
import FeaturesContainer from "./features-container";
import FeaturesContent from "./features-content";
import FeaturesContentTwo from "./features-content-two";

const featuresList = [
  {
    title: "Бухгалтерия",
    description:
      "Ведем учет, консультируем, сопровождаем при проверках, взаимодействуем с госорганами",
  },
  {
    title: "Налоги",
    description:
      "Планируем, оптимизируем, консультируем. Проведем экспресс-оценку налоговых рисков",
  },
  {
    title: "Зарплата",
    description:
      "Считаем зарплату, НДФЛ и страховые взносы, отвечаем на вопросы сотрудников по начислениям",
  },
  {
    title: "Проведем экспресс-оценку налоговых рисков",
  },
  {
    title: "Консультации",
    description:
      "Отвечаем на вопросы ваших сотрудников по начислениям заработной платы",
  },
];

const FeaturesList = () => {
  return (
    <Container className="pt-24 lg:pt-36 overflow-hidden">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl max-w-2xl lg:text-4xl">
          Нам <span className="text-accent">доверяют</span> представители
          крупного, среднего и малого бизнесов из любых сфер
        </h2>
        <ButtonCastom className="hidden lg:block pr-6">
          Узнать подробнее
        </ButtonCastom>
      </div>
      <div className="relative mt-12 grid grid-cols-1 gap-2 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Icons.logo className="absolute -z-10 bottom-1/2 md:bottom-20 left-1/2 -translate-x-1/2 w-[688px] fill-[#EDEDED]" />
        {featuresList.slice(0, 1).map((item) => (
          <FeaturesItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
        <FeaturesContent />
        {featuresList.slice(1).map((item) => (
          <FeaturesItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
        <FeaturesContainer className="hidden md:inline-flex" />
        <FeaturesContentTwo />
      </div>
    </Container>
  );
};

export default FeaturesList;
