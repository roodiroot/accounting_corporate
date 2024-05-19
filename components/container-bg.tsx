import { cn } from '@/lib/utils';

interface ContainerBGProps extends React.HTMLAttributes<HTMLDivElement> {}

const ContainerBG: React.FC<ContainerBGProps> = ({ className, ...props }) => {
  return <div {...props} className={cn("bg-secondary-bg rounded-6xl py-8 mt-12 sm:mt-10 mx-auto max-w-screen-2xl -px-4 overflow-hidden", className)} />
};

export default ContainerBG;
