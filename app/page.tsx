import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Search from "@/components/search";

export default function Home() {
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
}
