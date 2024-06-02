import Container from '@/components/container';
import { Icons } from '@/components/icons';
import ContactsForm from '@/components/sections/contacts-form/contacts-form';

export default function ContactsPage() {
  return (
    <Container className="pb-32 pt-32 lg:pt-40">
      <div className="relative flex flex-col gap-y-14 lg:gap-x-4 lg:flex-row overflow-hidden">
        <svg
          width="864"
          height="989"
          viewBox="0 0 864 989"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-48 left-0 -z-10">
          <path
            d="M593.658 5.67956C410.642 28.2577 54.435 268.287 56.6849 548.23C59.4837 896.476 886.351 924.556 857.747 541.792C833.49 217.208 2.85596 670.199 5.37576 983.723"
            stroke="#F6F6F6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-[50%]">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-5xl py-2 md:text-6xl">
              Контакты
              <Icons.link className="stroke-primary inline ml-4 h-8 w-8 rotate-90" />
            </h1>
            <div className="space-y-9 mt-7 text-secondary">
              <address className="text-2xl leading-8 not-italic">
                <div className="">г.Рузаевка, ул Ленина, д.45</div>
                <div className="">
                  <a className="" href="mailto:hello@partnerbuh13.ru">
                    hello@partnerbuh13.ru
                  </a>
                </div>
                <div>
                  <a className="" href="tel:79176957962">
                    +7 (917) 695-79-62
                  </a>
                </div>
              </address>
              <address className="text-2xl leading-8 not-italic">
                <div className="">Екатерина Киселева </div>
                <div className="font-semibold">Директор</div>
                <div>
                  <a className="" href="mailto:ooopartner13@yandex.ru">
                    ooopartner13@yandex.ru
                  </a>
                </div>
                <div>
                  <a className="" href="tel:79176957962">
                    +7 (917) 695-79-62
                  </a>
                </div>
              </address>
              <address className="text-2xl leading-8 not-italic">
                <div>Даша Барулёва</div>
                <div className="font-semibold">Бухгалтер</div>
                <div>
                  <a className="" href="mailto:hello@partnerbuh13.ru">
                    ooopartner13@yandex.ru
                  </a>
                </div>
                <div className="">
                  <a className="" href="tel:+79879997681">
                    +7 (987) 999-76-81
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
        <div className="flex-[50%]">
          <div className="max-w-xl mx-auto lg:mx-0">
            <ContactsForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
