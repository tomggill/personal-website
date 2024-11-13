import Image from "next/image";
import SocialMediaBar from "../components/SocialMediaBar";
import Header from "../components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex mx-auto px-12 py-12 min-h-screen">
      <div className="w-1/2 p-4">
        <Header />
      </div>
      <div className="w-px bg-gray-300 mx-4"></div>

      <div className="w-1/2 p-4">
        <About />
        <Projects />
      </div>
      {/* <SocialMediaBar /> */}
    </div>
  );
}
