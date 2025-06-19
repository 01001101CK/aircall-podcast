import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Search from "@/components/search";
import Hero from "@/components/hero";
import LatestReleases from "@/components/latest-releases";

export default function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Hero />
      <LatestReleases />
    </div>
  );
}
