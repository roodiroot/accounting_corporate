import Link from "next/link";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Link {...props} href="/">
      <Icons.logo className={cn("w-32 sm:w-40 fill-accent", className)} />
    </Link>
  );
};

export default Logo;
