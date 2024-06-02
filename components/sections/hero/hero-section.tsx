import Image from "next/image";

import { ButtonCastom } from "@/components/ui/button";
import Benefits from "@/components/sections/hero/benefits";
import { Icons } from "@/components/icons";
import ButtonOpenModal from "../absolute/modal/button-open-modal";

const HeroSection = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4  pt-10 sm:pt-32 lg:flex lg:px-8 lg:pt-40 overflow-hidden">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-0">
            <h1 className="mt-10 text-4xl font-bold sm:text-6xl">
              Надежный <span className="text-accent">эксперт</span> в
              бухгалтерском учете
            </h1>
            <p className="mt-6 text-xl leading-8 text-secondary">
              Мы готовы стать частью вашей команды, обеспечивая надежный
              бухгалтерский учет и стратегическое планирование вашего успеха.
            </p>
            <ButtonOpenModal>
              <ButtonCastom className="bg-accent mt-10">
                Консультация
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <Icons.link className="stroke-primary" />
                </div>
              </ButtonCastom>
            </ButtonOpenModal>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl -ml-8 sm:ml-0 sm:mt-24 lg:ml-10 lg:mr-0 lg:-mt-14 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative pb-4 max-w-3xl flex-none sm:max-w-5xl xl:max-w-none">
            <Image
              alt="main_img"
              width={750}
              height={850}
              src="/images/main_img.png"
              className="h-auto max-w-full w-[32rem] sm:w-[48rem]"
            />
          </div>
        </div>
      </div>
      <Benefits />
    </>
  );
};

export default HeroSection;
