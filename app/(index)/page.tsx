import { Drawer, Footer, Main } from "@/components/navigations/Navigations";

export default function Home() {
  return (
    <div className="font-sans flex flex-col  items-center justify-items-center min-h-screen ">
      <Drawer ui={<Main />} />
      <Footer />
    </div>
  );
}
