import Link from 'next/link';

import { Icons } from '@/components/icons';

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Link {...props} href="/">
      <Icons.logo className="w-32 sm:w-40" />
    </Link>
  );
};

export default Logo;
