import Container from '@/components/container';
import Logo from '../navbar/logo';
import MenuList from '../navbar/menu-list';
import { Button, ButtonCastom } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Phone } from 'lucide-react';
import FormFooter from './form-footer';
import Link from 'next/link';
import ButtonOpenModal from '../absolute/modal/button-open-modal';

const Footer = () => {
  return (
    <div className="relative z-10 bg-[#181715]">
      <Container>
        <div className="pt-4 lg:pt-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-8 items-center">
              <Logo className="fill-white" />
            </div>
            <nav className="flex gap-20 ">
              <MenuList className="text-white/80" />
              <ButtonOpenModal>
                <ButtonCastom className="hidden sm:inline-flex bg-white text-primary">
                  Обратная связь
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    <Icons.link className=" stroke-white" />
                  </div>
                </ButtonCastom>
              </ButtonOpenModal>
              <Button asChild size="icon" variant="icon" className=" bg-white">
                <a className="inline-flex sm:hidden" href={`tel:${process.env.PHONE_1}`}>
                  <Phone className=" stroke-primary" />
                </a>
              </Button>
            </nav>
          </div>
        </div>
        <div className="pt-32 pb-8 flex flex-col gap-y-20 border-b border-white/20 md:flex-row md:items-end md:gap-x-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
              Надежный эксперт в бухгалтерском учете
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="flex gap-1 md:ml-auto">
              <Button
                asChild
                size="icon"
                variant="icon"
                className="bg-[#3D3C3A] hover:bg-[#3D3C3A]/90 group">
                <a target="_blank" href={process.env.TELEGRAM}>
                  <Icons.telegram className="fill-white group-hover:scale-110" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="icon"
                className="bg-[#3D3C3A] hover:bg-[#3D3C3A]/90 group">
                <a target="_blank" href={process.env.WHATSAPP}>
                  <Icons.whatsapp className="fill-white group-hover:scale-110" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="icon"
                className="bg-[#3D3C3A] hover:bg-[#3D3C3A]/90 group">
                <a target="_blank" href={process.env.VKONTAKTE}>
                  <Icons.vk className="fill-white group-hover:scale-110" />
                </a>
              </Button>
            </div>
            <div className="flex md:justify-end">
              <FormFooter className="md:ml-auto max-w-sm" />
            </div>
          </div>
        </div>
        <div className="pt-8 pb-8 md:pb-16 flex flex-col-reverse gap-10 md:gap-4 md:flex-row text-white/50 text-base">
          <p className="text-base">© ООО Партнер 2024. All right reserved</p>
          <div className=" flex flex-col md:flex-row md:gap-x-8 md:ml-auto">
            <a href="https://matryoshka-studio.ru/">Разработка сайта</a>
            <Link href="/doc/privacy-policy">
              <p>Политика конфиденциальности</p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
