import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const MenuList: React.FC<MenuListProps> = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        "hidden lg:flex gap-8 text-xl text-secondary pt-2",
        className
      )}
    >
      <li>
        <Link href="/services">Услуги</Link>
      </li>
      <li>
        <Link href="/about">О нас</Link>
      </li>
      <li>
        <Link href="/contacts">Контакты</Link>
      </li>
    </ul>
  );
};

export default MenuList;
