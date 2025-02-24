import Image from "next/image";
import Header from "@/components/Header";
import TimeLine from "@/components/Timeline";
import References from "@/components/References";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <TimeLine></TimeLine>
      <References></References>
    </div>
  );
}
