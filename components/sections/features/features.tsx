import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Button, ButtonCastom } from "@/components/ui/button";
import Image from "next/image";
import ButtonOpenModal from "../absolute/modal/button-open-modal";
import { phone } from "@/lib/phone";

const Features = () => {
  return (
    <Container>
      <div className="relative max-w-xl mx-auto grid grid-cols-1  gap-2 lg:max-w-none  lg:grid-cols-3">
        <div className="relative row-span-2 aspect-square w-full bg-gradient-to-br from-accent to-[#2EC97F] rounded-5xl overflow-hidden">
          <Image
            width={600}
            height={600}
            src="/images/features/man.png"
            className="absolute w-full h-full bottom-0 object-cover"
            alt="man"
          />
        </div>
        <div className="relative col-span-2 bg-slate-200  rounded-5xl overflow-hidden p-4 sm:p-8">
          <Image
            width={1200}
            height={1200}
            src="/images/features/bg2.png"
            className="absolute top-0 left-0 w-full h-full bottom-0 object-cover"
            alt="man"
          />
          <div className="relative z-10 w-full h-full flex flex-col gap-4 items-start max-w-md">
            <div className="bg-white rounded-4xl p-4">
              <h3 className="text-2xl sm:text-3xl">
                Наша ответственность застрахована СПАО «ИНГОССТРАХ»
              </h3>
            </div>
            <div className="flex-1 flex items-end">
              <ButtonOpenModal
                title="Нужны гарантии?"
                description="Задайте этот вопрос нашим экспертам, и мы поможем вам выбрать лучший вариант страхования и пропишем его в договоре."
              >
                <Button
                  className="bg-primary text-white"
                  size="icon"
                  variant="icon"
                >
                  <Icons.link className="stroke-white" />
                </Button>
              </ButtonOpenModal>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 bg-gradient-to-t from-accent to-[#2EC97F]  rounded-5xl overflow-hidden p-2 flex flex-col lg:flex-row lg:gap-8">
          <svg
            width="413"
            height="179"
            viewBox="0 0 413 179"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-4 -bottom-14 z-0"
          >
            <path
              d="M407.97 45.4657C388.859 16.3201 277.908 -14.8777 172.745 21.9628C41.9224 67.7922 79.3404 216.408 221.648 161.561C342.326 115.051 123.745 28.4053 5.96678 69.6652"
              stroke="#5DD7C8"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative z-10 aspect-[2/1]  flex-shrink-0 rounded-4xl bg-slate-200 overflow-hidden lg:aspect-square lg:h-full">
            <Image
              width={560}
              height={560}
              src="/images/features/stone.png"
              className="absolute top-0 left-0 w-full h-full bottom-0 object-cover"
              alt="man"
            />
          </div>
          <div className="relative z-10 py-2 pr-2 pl-2 w-full h-full flex items-center sm:py-6 sm:pr-6 sm:pl-6 lg:pl-0">
            <h4 className="text-2xl sm:text-3xl text-white">
              Входим в ТОП-50 федерального рейтинга в направлениях: учёт, аудит
              и консалтинг. В числе лучших с 2016 по 2022 год.
            </h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
