"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MenuItem from "./menu-item";

const menuList = [
  { name: "Услуги", href: "/services" },
  { name: "О нас", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

interface MenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const MenuList: React.FC<MenuListProps> = ({ className, ...props }) => {
  const pathname = usePathname();
  return (
    <ul
      {...props}
      className={cn(
        "hidden lg:flex gap-8 text-xl text-secondary pt-2",
        className
      )}
    >
      {menuList.map(({ name, href }) => (
        <MenuItem key={name} href={href} isActive={pathname === href}>
          {name}
        </MenuItem>
      ))}
    </ul>
  );
};

export default MenuList;
