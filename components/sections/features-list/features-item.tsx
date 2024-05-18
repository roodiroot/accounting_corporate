import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import FeaturesContainer from './features-container';

interface FeaturesItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const FeaturesItem: React.FC<FeaturesItemProps> = ({ title, description, ...props }) => {
  return (
    <FeaturesContainer>
      <div className="bg-secondary-bg rounded-5xl overflow-hidden p-8 w-full h-full flex flex-col">
        <Button className="bg-accent text-white" size="icon" variant="icon">
          <Icons.link className="stroke-white" />
        </Button>
        <div className="flex-1 flex items-end">
          <h3 className="text-3xl">{title}</h3>
        </div>
        <p className="text-secondary line-clamp-4">{description}</p>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesItem;
