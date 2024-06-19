import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { ButtonCastom } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ButtonOpenModal from "../absolute/modal/button-open-modal";
import { phone } from "@/lib/phone";

interface BenefitProps extends React.HTMLAttributes<HTMLDivElement> {}

const Benefit: React.FC<BenefitProps> = ({ className, ...props }) => {
  return (
    <Container {...props} className={cn("overflow-hidden", className)}>
      <div className="relative flex flex-col gap-y-14 lg:gap-x-4 lg:flex-row">
        <svg
          width="655"
          height="630"
          viewBox="0 0 655 630"
          fill="none"
          className="absolute top-[-226px] left-0 sm:left-[168px] -z-10"
        >
          <path
            d="M450.124 5.82336C312.013 20.2635 43.0099 172.207 44.4308 349.003C46.1985 568.936 670.059 585.852 648.855 344.145C630.874 139.177 3.69528 426.086 5.28665 624.09"
            stroke="#F6F6F6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-[50%]">
          <p className="text-secondary max-w-xl mx-auto lg:mx-0">
            Мы не уйдем на больничный и нам не нужен отпуск.{" "}
            <span className="text-accent">Все вопросы решаются удаленно</span>{" "}
            по телефону и электронной почте, Вам не нужно регулярно приезжать в
            офис
          </p>
        </div>
        <div className="flex-[50%]">
          <div className="max-w-xl flex flex-col items-start  mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-4xl">Единоразовая помощь</h2>
            <p className="text-secondary mt-3">
              Привлекайте команду по отдельным задачам: сдача отчетности
              вовремя, подготовка к проверке, юридическая помощь, подготовка
              документов
            </p>
            <ButtonOpenModal
              title="Нужна помощь только сейчас?"
              description={`Заполните форму обратной связи или позвоните по телефону ${phone(
                process.env.PHONE_1
              )}, мы с радостью Вам поможем.`}
            >
              <ButtonCastom className="bg-gradient-to-br from-accent to-[#2EC97F] mt-10 ">
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
};

export default Benefit;
