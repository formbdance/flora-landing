import Image from "next/image";

const GreenArt = () => {
  return (
    <div className="relative h-full">
      <div className="flex justify-end items-end pt-20 ">
        <Image
          src={require("./img/leaf_2.png")}
          className="lg:translate-x-12 lg:-ltranslate-y-6 z-20"
        />
        <Image
          src={require("./img/leaf_1.png")}
          className="lg:translate-x-20 z-20"
        />
        <Image
          src={require("./img/graphs.png")}
          className="absolute right-0 top-0  lg:translate-y-16 z-10"
        />
        <Image
          src={require("./img/ellipse_2.png")}
          className="absolute right-0 -translate-x-6"
        />
        <Image
          src={require("./img/ellipse_3.png")}
          className="absolute left-0 -translate-x-4 -translate-y-20"
        />
        <Image
          src={require("./img/shadow.png")}
          className="absolute bottom-0 left-0 translate-x-10 translate-y-20 z-10"
        />
      </div>
    </div>
  );
};

export default GreenArt;
