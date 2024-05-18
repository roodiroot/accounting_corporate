import Image from 'next/image';
import FeaturesContainer from './features-container';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';

const FeaturesContent = () => {
  return (
    <FeaturesContainer className=" shadow-lg rounded-5xl">
      <div className="relative overflow-hidden rounded-5xl w-full h-full p-8 flex flex-col">
        <Image
          alt="girl_bg"
          width={500}
          height={500}
          src="/images/features/girl.png"
          className="absolute -z-10 top-0 left-0 w-full h-full object-cover object-center"
        />
        <Button className="ml-auto bg-white text-white" size="icon" variant="icon">
          <Icons.link className="stroke-primary" />
        </Button>
        <div className="flex gap-1 flex-1 items-end">
          <Button className="text-white border-white" size="badge" variant="badge">
            Налоги
          </Button>
          <Button className="text-white border-white" size="badge" variant="badge">
            Учет
          </Button>
        </div>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesContent;
