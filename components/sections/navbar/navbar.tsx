import { Icons } from '@/components/icons';
import Logo from '@/components/sections/navbar/logo';
import { Button, ButtonCastom } from '@/components/ui/button';
import MenuList from '@/components/sections/navbar/menu-list';

export const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="w-full mx-auto max-w-screen-2xl px-4 pt-4 lg:pt-8 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className="flex gap-8 items-center">
            <Logo />
            <MenuList />
          </nav>
          <div className="flex gap-1 ">
            <Button size="icon" variant="icon">
              <Icons.whatsapp />
            </Button>
            <ButtonCastom className="hidden md:inline-flex">Связаться</ButtonCastom>
            <Button className="inline-flex lg:hidden" size="icon" variant="icon">
              <Icons.burger />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
