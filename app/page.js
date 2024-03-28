import Image from "next/image";
import TopContent from "@/src/widgets/TopContent";
import CardBlock from "@/src/widgets/CardBlock";
import PrePrice from "@/src/widgets/PrePrice";
import Footer from "@/src/widgets/Footer";

export default function Home() {
  return (
    <main className="">
      <TopContent />
      <CardBlock revers={true} />
      <CardBlock revers={false} />
      <PrePrice />
      <CardBlock revers={false} />
      <Footer />
    </main>
  );
}
