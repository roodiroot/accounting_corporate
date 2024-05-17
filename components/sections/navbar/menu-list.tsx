import Link from 'next/link';

const MenuList = () => {
  return (
    <ul className="hidden lg:flex gap-8 text-xl text-secondary pt-2">
      <li>
        <Link href="/service">Услуги</Link>
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
