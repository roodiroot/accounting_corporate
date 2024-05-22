import Container from "@/components/container";
import ServicesSection from "@/components/sections/services/services-section";
import { ButtonCastom } from "@/components/ui/button";

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
  {
    id: 8,
    title: "Бухгалтерский, налоговый и кадровый учёт",
    price: "от 11 300 ₽",
    description: "в месяц (ООО на ОСНО)",
  },
];

export default function ServicesPage() {
  return (
    <Container className="pb-32 pt-32 lg:pt-40">
      <div className="overflow-hidden flex justify-between items-start">
        <h1 className="text-3xl max-w-2xl lg:text-4xl">
          Актуальные <span className="text-accent">цены</span> на наши услуги.
        </h1>
        <ButtonCastom className="hidden lg:block pr-6">
          Посмотреть прайс
        </ButtonCastom>
      </div>
      <ServicesSection
        list={priceList}
        className="mt-12 sm:mt-10"
        bgCard="bg-secondary-bg"
      />
      <ButtonCastom className="mt-12 sm:mt-10 block pr-6 lg:hidden">
        Посмотреть прайс
      </ButtonCastom>
    </Container>
  );
}
