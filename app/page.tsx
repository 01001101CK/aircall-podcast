import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Search from "@/components/search";
import Hero from "@/components/hero";
import LatestReleases from "@/components/latest-releases";
import LatestBlogsSection from "@/components/latest-blogs-section";

export default function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Hero />
      <LatestReleases />
      <LatestBlogsSection />
    </div>
  );
}
