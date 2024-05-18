import Container from '@/components/container';
import { Icons } from '@/components/icons';
import { Button, ButtonCastom } from '@/components/ui/button';
import FeaturesItem from './features-item';
import FeaturesContainer from './features-container';

const FeaturesList = () => {
  return (
    <Container className="pt-24 lg:pt-36">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl max-w-2xl lg:text-4xl">
          Нам <span className="text-accent">доверяют</span> представители крупного, среднего и
          малого бизнесов из любых сфер
        </h2>
        <ButtonCastom className="hidden lg:block">Узнать подробнее</ButtonCastom>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-2 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesContainer />
        <FeaturesItem />
      </div>
    </Container>
  );
};

export default FeaturesList;
