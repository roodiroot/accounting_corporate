import NavBar from '@/components/sections/navbar/navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavBar />
      {children}
    </div>
  );
}
