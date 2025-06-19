import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Search from "@/components/search";
import Hero from "@/components/hero";
import LatestReleases from "@/components/latest-releases";
import LatestBlogsSection from "@/components/latest-blogs-section";
import { SearchProvider } from "@/contexts/SearchContext";
import { blogs } from "@/data/blogs";
import { podcasts } from "@/data/podcasts";

export default function Home() {
  return (
    <SearchProvider blogs={blogs} podcasts={podcasts}>
      <div>
        <Header />
        <Search />
        <Hero />
        <LatestReleases />
        <LatestBlogsSection />
        <Footer />
      </div>
    </SearchProvider>
  );
}
