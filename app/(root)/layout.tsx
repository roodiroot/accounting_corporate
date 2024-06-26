import AllAbsolute from "@/components/sections/absolute/all-absolute";
import Footer from "@/components/sections/footer/footer";
import NavBar from "@/components/sections/navbar/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
