import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return <div className={cn('mx-auto max-w-screen-2xl px-4 lg:px-8', className)} {...props} />;
};

export default Container;
