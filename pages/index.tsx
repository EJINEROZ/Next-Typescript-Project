import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <Navbar items={[]}/>
     <SearchBar />
    </main>
  );
}
