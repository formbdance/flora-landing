import GreenArt from "@/src/shared/GreenArt";
import BigBtn from "@/src/shared/UI/BigBtn";
import Image from "next/image";
const TopContent = () => {
  return (
    <section className="semigray-300">
      <div className="container py-28 grid grid-cols-1 xl:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-8">
          <p className="uppercase font-light text-sm">decorate your home</p>
          <h2 className="text-5xl flex flex-col gap-7 font-semibold">
            <span className="underline text-semigreen-300 ">
              Feel your home
            </span>
            <span>with a modern design</span>
            <span>space</span>
          </h2>
          <div className="flex gap-6 mt-3">
            <BigBtn title="Discover" />
            <button className="underline font-semibold flex gap-3 items-center">
              <div className="bg-green-900 w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={require("./img/play.png")} />
              </div>
              Watch video
            </button>
          </div>
        </div>
        <div className="">
          <GreenArt />
        </div>
      </div>
    </section>
  );
};

export default TopContent;
