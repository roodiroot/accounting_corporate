import Image from 'next/image';
import FeaturesContainer from './features-container';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';

const FeaturesContentTwo = () => {
  return (
    <FeaturesContainer className=" shadow-lg rounded-5xl">
      <div className="relative overflow-hidden rounded-5xl w-full h-full p-2 bg-accent flex flex-col">
        <div className="w-full h-1/2 rounded-4xl relative p-6 overflow-hidden">
          <Image
            alt="girl_bg"
            width={500}
            height={500}
            src="/images/features/bg.png"
            className="absolute  top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="w-full h-full flex gap-1 items-end relative z-10">
            <Button size="badge" variant="badge">
              Налоги
            </Button>
            <Button size="badge" variant="badge">
              Учет
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full p-6 flex items-end">
          <h4 className="text-2xl text-white">Готовим и сдаем всю необходимую отчетность</h4>
          <Button className="ml-auto bg-white text-white" size="icon" variant="icon">
            <Icons.link className="stroke-primary" />
          </Button>
        </div>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesContentTwo;
