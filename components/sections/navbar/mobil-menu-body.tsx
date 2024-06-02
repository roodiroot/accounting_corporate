import Link from 'next/link';

import { DrawerClose } from '@/components/ui/drawer';

interface MobilMenuBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  linkList: { name: string; href: string }[];
}

const MobilMenuBody: React.FC<MobilMenuBodyProps> = ({ linkList, className, ...props }) => {
  return (
    <div className="p-8 text-center" {...props}>
      <ul className="mt-10 space-y-4">
        {linkList.map((item) => (
          <li key={item.name} className="py-2">
            <Link href={item.href} className=" font-gropled text-4xl">
              <DrawerClose>{item.name}</DrawerClose>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobilMenuBody;
