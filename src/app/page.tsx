import SocialMediaBar from "../components/SocialMediaBar";
import Header from "../components/Header";
import Projects from "@/components/project/Projects";
import Experience from "@/components/experience/Experience";

export default function Home() {
  return (
    <div className="flex justify-center mx-auto px-12 py-12 min-h-screen">
      <div className="w-full max-w-2xl p-4 space-y-24">
        <Header />
        <Experience />
        <Projects />
        <SocialMediaBar />
      </div>
    </div>
  );
}
