import { cn } from "@/lib/utils";

interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  title: string;
  description: string;
}

const StepItem: React.FC<StepItemProps> = ({
  step,
  title,
  description,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full max-w-[380px] mx-auto aspect-[1/1.18] bg-secondary-bg rounded-5xl p-8 flex flex-col md:mx-0 md:odd:ml-auto md:even:mr-auto",
        className
      )}
    >
      <div className="flex-1">
        <div className="text-[80px] text-accent font-bold">{step}</div>
      </div>
      <h4 className="text-3xl">{title}</h4>
      <p className="text-secondary mt-3 pt-4 border-t border-[#D5D5D5]">
        {description}
      </p>
    </div>
  );
};

export default StepItem;
