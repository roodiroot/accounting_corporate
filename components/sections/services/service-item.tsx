import { Button } from "@/components/ui/button";
import FeaturesContainer from "../features-list/features-container";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ServiceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price?: string;
  description?: string;
  bgCard?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  price,
  description,
  bgCard,
  className,
  ...props
}) => {
  return (
    <FeaturesContainer {...props} className={className}>
      <div
        className={cn(
          "bg-white rounded-5xl overflow-hidden p-8 w-full h-full flex flex-col",
          bgCard
        )}
      >
        <Button className="bg-accent text-white" size="icon" variant="icon">
          <Icons.link className="stroke-white" />
        </Button>
        <div className="flex-1 flex items-end mb-5">
          <h5 className="text-2xl">{title}</h5>
        </div>
        <div className=" line-clamp-1 text-5xl font-bold">{price}</div>
        <div className="text-secondary line-clamp-3">{description}</div>
      </div>
    </FeaturesContainer>
  );
};

export default ServiceItem;
