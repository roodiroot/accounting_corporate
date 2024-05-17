import Container from '@/components/container';
import { ButtonCastom } from '@/components/ui/button';

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
    </Container>
  );
};

export default FeaturesList;
