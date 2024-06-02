import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { ButtonCastom } from "@/components/ui/button";
import FeaturesItem from "../features-list/features-item";
import FeaturesContainer from "../features-list/features-container";
import FeaturesContentThree from "../features-list/features-content-three";
import ButtonOpenModal from "../absolute/modal/button-open-modal";

const Benefits = () => {
  return (
    <Container className="pt-24 lg:pt-36">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl max-w-2xl mx-auto lg:mx-0 lg:text-4xl">
          Можем <span className="text-accent">всё</span>, что может для Вас
          потребоваться
        </h2>
        <ButtonOpenModal>
          <ButtonCastom className="hidden lg:block pr-6">
            Узнать подробнее
          </ButtonCastom>
        </ButtonOpenModal>
      </div>
      <div className="relative mt-12 grid grid-cols-1 gap-2 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <svg
          width="420"
          height="314"
          viewBox="0 0 420 314"
          fill="none"
          className="absolute z-0 -right-16 top-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M414.42 105.521C367.459 47.4703 220.158 -29.3336 140.85 23.0859C42.1911 88.2954 217.275 374.573 320.06 294.222C407.222 226.084 94.1598 27.2921 5.33779 85.9999"
            stroke="#E0E0E0"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <Icons.logo className="absolute z-0 bottom-1/2 left-1/2 -translate-x-1/2 w-[688px] fill-[#E0E0E0] md:bottom-20  xl:left-[22rem]" />
        <FeaturesItem
          className="md:mx-0 md:ml-auto md:odd:mr-0 lg:col-span-2 lg:aspect-auto lg:max-w-none *:bg-white"
          title="Персональная команда"
          description="Наши эксперты - бухгалтеры, юристы, налоговые и кадровые специалисты, а также бизнес-ассистенты - владеют отраслевой спецификой и общаются на вашем языке, гарантируя четкость и профессионализм в каждом аспекте обслуживания."
        />
        <FeaturesItem
          title="Поддержка 24/7"
          className="*:bg-white md:mx-0 md:mr-auto md:even:ml-0"
          description="Оказываем круглосуточную поддержку в сложных ситуациях. Не оставим вас один на один с проблемой."
        />
        <FeaturesContainer className="hidden xl:inline-flex" />
        <FeaturesContainer className="hidden xl:inline-flex" />
        <FeaturesContainer className="hidden xl:inline-flex" />
        <FeaturesItem
          className="md:mx-0 md:ml-auto md:odd:mr-0 *:bg-white"
          title="Автоматизация"
          description="80% функций бухгалтера автоматизированы в сервисе. И и вы получаете результат ещё быстрее."
        />
        <FeaturesContainer className="hidden lg:inline-flex xl:hidden" />
        <FeaturesContentThree
          className="*:bg-white md:mx-0 md:mr-auto md:even:ml-0"
          title="Берём на себя рутину и рабочие процессы"
        />
      </div>
    </Container>
  );
};

export default Benefits;
