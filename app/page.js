import Image from "next/image";
import Header from "@/components/Header";
import TimeLine from "@/components/Timeline";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <TimeLine></TimeLine>
      <References></References>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
