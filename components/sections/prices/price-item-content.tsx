import Image from "next/image";
import FeaturesContainer from "../features-list/features-container";
import { Button, ButtonCastom } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface PriceItemContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const PriceItemContent: React.FC<PriceItemContentProps> = ({
  title,
  description,
  className,
  ...props
}) => {
  return (
    <FeaturesContainer
      {...props}
      className={cn("shadow-lg rounded-5xl", className)}
    >
      <div className="relative bg-gradient-to-br from-accent to-[#2EC97F] rounded-5xl overflow-hidden p-8 w-full h-full flex flex-col">
        <Image
          width={560}
          height={560}
          src="/images/benefits/man.png"
          className="absolute top-4 -right-20 w-[90%] bottom-0 object-cover"
          alt="man"
        />
        <h3 className="relative z-10 text-4xl text-white">{title}</h3>
        <div className="flex-1 relative z-10 flex flex-col ">
          <p className="text-2xl text-white flex-1 flex items-end">
            Для заключивших договор до конца Мая*
          </p>
          <div className="">
            <ButtonCastom className="bg-white mt-5 text-accent">
              Узнать больше
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                <Icons.link className="stroke-white" />
              </div>
            </ButtonCastom>
          </div>
        </div>
      </div>
    </FeaturesContainer>
  );
};

export default PriceItemContent;
