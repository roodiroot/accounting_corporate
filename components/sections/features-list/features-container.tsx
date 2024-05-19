import { cn } from "@/lib/utils";

interface FeaturesContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const FeaturesContainer: React.FC<FeaturesContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative z-10 aspect-[1/1] overflow-hidden w-full max-w-[360px] mx-auto md:mx-0 md:odd:mr-auto md:even:ml-auto lg:mx-auto",
        className
      )}
      {...props}
    />
  );
};

export default FeaturesContainer;
