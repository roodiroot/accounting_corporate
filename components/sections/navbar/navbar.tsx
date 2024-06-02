import { phone } from "@/lib/phone";
import { Icons } from "@/components/icons";
import Logo from "@/components/sections/navbar/logo";
import MenuList from "@/components/sections/navbar/menu-list";
import { Button, ButtonCastom } from "@/components/ui/button";
import MobilMenu from "@/components/sections/navbar/mobil-menu";
import ButtonOpenModal from "@/components/sections/absolute/modal/button-open-modal";
import { Phone } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="absolute z-10 top-0 left-0 w-full">
      <div className="w-full mx-auto max-w-screen-2xl px-4 pt-4 lg:pt-8 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className="flex gap-8 items-center">
            <Logo />
            <MenuList />
          </nav>
          <div className="flex gap-1 ">
            <Button
              asChild
              size="icon"
              variant="icon"
              className="bg-[#3D3C3A] hover:bg-[#3D3C3A] sm:hidden"
            >
              <a
                className="inline-flex sm:hidden"
                href={`tel:${process.env.PHOME_1}`}
              >
                <Phone className=" stroke-white" />
              </a>
            </Button>
            <Button
              asChild
              size="icon"
              variant="icon"
              className="hidden sm:inline-flex"
            >
              <a target="_blank" href={process.env.WHATSAPP}>
                <Icons.whatsapp className="fill-[#8A8A8A]" />
              </a>
            </Button>
            <ButtonOpenModal
              title="Обратная связь"
              description={`Заполните форму обратной связи или позвоните по телефону ${phone(
                process.env.PHONE_1
              )}`}
            >
              <ButtonCastom className="hidden md:inline-flex">
                Связаться
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <Icons.link className=" stroke-primary" />
                </div>
              </ButtonCastom>
            </ButtonOpenModal>
            <MobilMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
