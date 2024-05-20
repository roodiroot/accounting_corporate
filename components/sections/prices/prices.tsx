import Container from "@/components/container";
import { ButtonCastom } from "@/components/ui/button";
import PriceItem from "./price-item";
import PriceItemContent from "./price-item-content";

const priceList = [
  {
    id: 1,
    title: "Разовая сдача отчётности",
    price: "от 960 ₽",
  },
  {
    id: 2,
    title: "Первичные документы",
    price: "от 190 ₽",
    description: "за документ",
  },
  {
    id: 3,
    title: "Восстановление бухгалтерского учёта",
    price: "от 190 ₽",
    description: "за операцию",
  },
  {
    id: 4,
    title: "Возврат по 3-НДФЛ",
    price: "от 4 370 ₽",
  },
  {
    id: 5,
    title: "Бухгалтерский, налоговый и кадровый учёт",
    price: "от 4 005 ₽",
    description: "в месяц (ИП Патент)",
  },
  {
    id: 6,
    title: "Бухгалтерский, налоговый и кадровый учёт",
    price: "от 5 721 ₽",
    description: "в месяц (ИП на УСН)",
  },
  {
    id: 7,
    title: "Бухгалтерский, налоговый и кадровый учёт",
    price: "от 11 300 ₽",
    description: "в месяц (ООО на ОСНО)",
  },
];

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
        {priceList.map((item) => (
          <PriceItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            className="md:odd:ml-auto md:odd:mr-0 md:even:mr-auto md:even:ml-0 lg:even:mx-auto lg:odd:mx-auto"
          />
        ))}
        <PriceItemContent
          title="Бесплатно"
          description="Для заключивших договор до конца Мая*"
          className="md:odd:ml-auto md:odd:mr-0 md:even:mr-auto md:even:ml-0 lg:even:mx-auto lg:odd:mx-auto"
        />
      </div>
      <div className="mt-4 text-base max-w-xl text-secondary">
        *Акция действует на <span className="text-accent">первые 2 месяца</span>{" "}
        обслуживания, для компаний заключивших договор до 30.05.2024.
        Подробности акции уточняйте{" "}
        <span className="text-accent">
          {" "}
          по телефону <a href="tel:79999999999">+7 999 999 99 99</a>
        </span>
      </div>
    </Container>
  );
};

export default Prices;
