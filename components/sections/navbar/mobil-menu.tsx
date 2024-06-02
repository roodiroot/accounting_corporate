"use client";

import { X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icons } from "@/components/icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobilMenuBody from "./mobil-menu-body";

const menuList = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "О нас", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

const MobilMenu = () => {
  const isDesctop = useMediaQuery("(min-width: 1023px)");
  return isDesctop ? (
    <span className="sr-only">Menu</span>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger className="h-12 w-12 min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#f6f6f6] hover:bg-[#f6f6f6]/70 lg:hidden">
        <Icons.burger />
      </DrawerTrigger>
      <DrawerContent>
        <svg
          width="864"
          height="989"
          viewBox="0 0 864 989"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-48 left-0 -z-10"
        >
          <path
            d="M593.658 5.67956C410.642 28.2577 54.435 268.287 56.6849 548.23C59.4837 896.476 886.351 924.556 857.747 541.792C833.49 217.208 2.85596 670.199 5.37576 983.723"
            stroke="#F6F6F6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <DrawerClose className="absolute right-4 top-4 h-12 w-12 min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#f6f6f6] p-2 text-[#333] hover:bg-[#f6f6f6]/70 lg:hidden">
          <X />
        </DrawerClose>
        <MobilMenuBody linkList={menuList} />
      </DrawerContent>
    </Drawer>
  );
};

export default MobilMenu;
