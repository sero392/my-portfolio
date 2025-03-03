import Image from "next/image";
import Header from "@/components/Header";
import JobHistory from "@/components/JobHistory";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <JobHistory></JobHistory>
      <References></References>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
