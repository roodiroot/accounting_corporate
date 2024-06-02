import Link from "next/link";

import { cn } from "@/lib/utils";

interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isActive: boolean;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  isActive,
  href,
  children,
  className,
  ...props
}) => {
  return (
    <li
      {...props}
      className={cn(
        "relative before:h-[1px] before:w-0 before:bg-secondary/30 before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full",
        className,
        isActive && "before:w-full before:bg-accent font-medium"
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
