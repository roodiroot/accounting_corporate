import Image from "next/image";

import { Icons } from "@/components/icons";
import Container from "@/components/container";
import { ButtonCastom } from "@/components/ui/button";
import ButtonOpenModal from "@/components/sections/absolute/modal/button-open-modal";

export const metadata = {
  title: "О компании Партнер",
  description:
    "Узнайте больше о компании Партнер. Мы специализируемся на аутсорсинге бухгалтерских услуг, помогая компаниям сосредоточиться на их основном бизнесе.",
};

export default function AboutPage() {
  return (
    <Container className="pb-32 pt-32 lg:pt-40 relative">
      <Image
        alt="girl_cta"
        width={1000}
        height={1000}
        src="/images/contacts/png.png"
        className="absolute -bottom-[5rem] opacity-70  -left-20 w-[920px] object-cover"
      />
      <div className="relative flex flex-col gap-y-4 lg:gap-x-4 lg:flex-row overflow-hidden">
        <svg
          width="864"
          height="989"
          viewBox="0 0 864 989"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-48 left-0 -z-10"
        >
          <path
            d="M593.658 5.67956C410.642 28.2577 54.435 268.287 56.6849 548.23C59.4837 896.476 886.351 924.556 857.747 541.792C833.49 217.208 2.85596 670.199 5.37576 983.723"
            stroke="#F6F6F6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex-[50%]">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl py-4">
              Наша история
              <Icons.link className="stroke-primary ml-4 h-8 w-8 rotate-90 hidden md:inline" />
            </h1>
          </div>
        </div>
        <div className="flex-[50%]">
          <div className="max-w-xl mx-auto space-y-8 md:space-y-10 lg:mx-0">
            <p className="text-secondary">
              Компания <span className="text-accent">&quot;Партнер&ldquo;</span>{" "}
              уже более 6 лет успешно работает на рынке бухгалтерского
              аутсорсинга. С момента основания в 2018 году, мы стремимся
              предоставлять нашим клиентам высококачественные бухгалтерские
              услуги, которые помогают бизнесу процветать и достигать новых
              высот.
            </p>
            <p className="text-xl">
              Мы работаем с полной отдачей, чтобы наши клиенты могли
              сосредоточиться на развитии своего бизнеса, а не на решении
              бухгалтерских задач.
            </p>
            <p className="text-secondary">
              <span className="text-accent">Наша миссия</span> — облегчить жизнь
              нашим клиентам, взяв на себя все сложности, связанные с
              бухгалтерским учетом и налоговым планированием. Мы верим, что
              каждая компания, независимо от ее размера, заслуживает
              профессиональную и надежную бухгалтерскую поддержку.
            </p>
            <p className="text-secondary">
              Мы рады предложить вам наши услуги и стать вашим надежным
              партнером в мире бухгалтерского учета. Свяжитесь с нами сегодня,
              чтобы узнать больше о том, как мы можем помочь вашему бизнесу
              процветать!
            </p>
            <ButtonOpenModal className="block">
              <ButtonCastom className="bg-accent">
                Консультация
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <Icons.link className="stroke-primary" />
                </div>
              </ButtonCastom>
            </ButtonOpenModal>
          </div>
        </div>
      </div>
    </Container>
  );
}
