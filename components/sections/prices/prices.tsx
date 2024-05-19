import Container from "@/components/container";
import { ButtonCastom } from "@/components/ui/button";

const Prices = () => {
  return (
    <Container>
      <div className="overflow-hidden flex justify-between items-start">
        <h2 className="text-3xl max-w-2xl lg:text-4xl">
          Вам не потребуется оплачивать новые программы.{" "}
          <span className="text-accent">У нас все есть.</span>
        </h2>
        <ButtonCastom className="hidden lg:block pr-6">
          Посмотреть прайс
        </ButtonCastom>
      </div>
      <div className="relative mt-12 grid grid-cols-1 gap-2 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        Prices List
      </div>
    </Container>
  );
};

export default Prices;
