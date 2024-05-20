import { Button } from "@/components/ui/button";
import FeaturesContainer from "../features-list/features-container";
import { Icons } from "@/components/icons";

interface PriceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price?: string;
  description?: string;
}

const PriceItem: React.FC<PriceItemProps> = ({
  title,
  price,
  description,
  className,
  ...props
}) => {
  return (
    <FeaturesContainer {...props} className={className}>
      <div className="bg-white rounded-5xl overflow-hidden p-8 w-full h-full flex flex-col">
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

export default PriceItem;
