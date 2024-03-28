import GreenArt from "@/src/shared/GreenArt";
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
            <button className="border-semigreen-300 text-semigreen-300 rounded-full w-44 h-14 font-semibold">
              Discover
            </button>
            <button className="underline font-semibold flex gap-4 items-center">
              <div className="bg-green-900 w-10 h-10 rounded-full" />
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
