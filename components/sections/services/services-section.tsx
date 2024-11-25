import { cn } from "@/lib/utils";
import ServiceItem from "./service-item";
import { Service } from "@/lib/wp-api";

interface ServiceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  list?: Service[];
  bgCard?: string;
}

const ServicesSection: React.FC<ServiceItemProps> = ({
  list,
  bgCard,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "relative grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {list?.map((item) => (
        <ServiceItem
          key={item.title}
          title={item.title}
          price={item.price}
          description={item.description || ""}
          className="md:odd:ml-auto md:odd:mr-0 md:even:mr-auto md:even:ml-0 lg:even:mx-auto lg:odd:mx-auto"
          bgCard={bgCard}
        />
      ))}
      {props.children && props.children}
    </div>
  );
};

export default ServicesSection;
