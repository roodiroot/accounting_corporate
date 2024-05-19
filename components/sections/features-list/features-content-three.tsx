import Image from "next/image";
import FeaturesContainer from "./features-container";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FeaturesContentThreeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const FeaturesContentThree: React.FC<FeaturesContentThreeProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <FeaturesContainer
      {...props}
      className={cn("shadow-lg rounded-5xl", className)}
    >
      <div className="relative bg-secondary-bg rounded-5xl overflow-hidden p-8 w-full h-full flex flex-col">
        <Image
          width={560}
          height={560}
          src="/images/benefits/man.png"
          className="absolute top-4 -right-20 w-[90%] bottom-0 object-cover"
          alt="man"
        />
        <Button className="bg-accent text-white" size="icon" variant="icon">
          <Icons.link className="stroke-white" />
        </Button>

        <div className="relative z-10 flex-1 flex items-end">
          <h3 className="text-3xl">{title}</h3>
        </div>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesContentThree;
