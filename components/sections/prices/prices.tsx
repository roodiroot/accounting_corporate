import Container from "@/components/container";
import { ButtonCastom } from "@/components/ui/button";
import ServicesSection from "../services/services-section";
import PriceItemContent from "./price-item-content";
import ButtonOpenModal from "../absolute/modal/button-open-modal";
import { phone } from "@/lib/phone";
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

const Prices = async () => {
  const data = await fetch(
    "http://s9xaqu8t.beget.tech/wp-json/wp/v2/service?acf_format=standard&_fields=id,title,acf",
    { cache: "no-store" }
  );
  const priceList = await data.json();

  return (
    <Container>
      <div className="overflow-hidden flex justify-between items-start">
        <h2 className="text-3xl py-2 max-w-2xl mx-auto lg:mx-0 lg:text-4xl">
          Вам не потребуется оплачивать новые программы.{" "}
          <span className="text-accent">У нас все есть.</span>
        </h2>
        <ButtonOpenModal>
          <ButtonCastom className="hidden lg:block pr-6">
            Получить прайс
          </ButtonCastom>
        </ButtonOpenModal>
      </div>
      <ServicesSection list={priceList} className="mt-10 sm:mt-8">
        <ButtonOpenModal>
          <PriceItemContent
            title="Бесплатно"
            description="Для заключивших договор до конца Мая*"
            className="md:odd:ml-auto md:odd:mr-0 md:even:mr-auto md:even:ml-0 lg:even:mx-auto lg:odd:mx-auto"
          />
        </ButtonOpenModal>
      </ServicesSection>
      <div className="mt-4 text-base max-w-xl text-secondary">
        *Акция действует на <span className="text-accent">первые 2 месяца</span>{" "}
        обслуживания, для компаний заключивших договор до 30.05.2025.
        Подробности акции уточняйте{" "}
        <span className="text-accent">
          {" "}
          по телефону{" "}
          <a href={`tel:${process.env.PHONE_1}`}>
            {phone(process.env.PHONE_1)}
          </a>
        </span>
      </div>
    </Container>
  );
};

export default Prices;
