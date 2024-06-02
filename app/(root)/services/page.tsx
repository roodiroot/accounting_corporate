import Container from '@/components/container';
import ButtonOpenModal from '@/components/sections/absolute/modal/button-open-modal';
import ServicesSection from '@/components/sections/services/services-section';
import { ButtonCastom } from '@/components/ui/button';

const priceList = [
  {
    id: 1,
    title: 'Разовая сдача отчётности',
    price: 'от 960 ₽',
  },
  {
    id: 2,
    title: 'Первичные документы',
    price: 'от 190 ₽',
    description: 'за документ',
  },
  {
    id: 3,
    title: 'Восстановление бухгалтерского учёта',
    price: 'от 190 ₽',
    description: 'за операцию',
  },
  {
    id: 4,
    title: 'Возврат по 3-НДФЛ',
    price: 'от 4 370 ₽',
  },
  {
    id: 5,
    title: 'Бухгалтерский, налоговый и кадровый учёт',
    price: 'от 4 005 ₽',
    description: 'в месяц (ИП Патент)',
  },
  {
    id: 6,
    title: 'Бухгалтерский, налоговый и кадровый учёт',
    price: 'от 5 721 ₽',
    description: 'в месяц (ИП на УСН)',
  },
  {
    id: 7,
    title: 'Бухгалтерский, налоговый и кадровый учёт',
    price: 'от 11 300 ₽',
    description: 'в месяц (ООО на ОСНО)',
  },
  {
    id: 8,
    title: 'Бухгалтерский, налоговый и кадровый учёт',
    price: 'от 11 300 ₽',
    description: 'в месяц (ООО на ОСНО)',
  },
];

export default function ServicesPage() {
  return (
    <Container className="pb-32 pt-32 lg:pt-40">
      <div className="overflow-hidden flex justify-between items-start">
        <h1 className="text-3xl max-w-2xl lg:text-4xl  py-2">
          Актуальные <span className="text-accent">цены</span> на наши услуги.
        </h1>
        <ButtonOpenModal className="hidden lg:block ">
          <ButtonCastom className="pr-6">Получить прайс</ButtonCastom>
        </ButtonOpenModal>
      </div>
      <ServicesSection list={priceList} className="mt-6 sm:mt-7" bgCard="bg-secondary-bg" />
      <ButtonOpenModal className="lg:hidden block mt-8">
        <ButtonCastom className="pr-6">Получить прайс</ButtonCastom>
      </ButtonOpenModal>
    </Container>
  );
}
