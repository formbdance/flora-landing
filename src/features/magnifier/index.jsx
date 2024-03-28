import Image from "next/image";

const Magnifier = () => {
  return (
    <button className="flex items-center justify-center">
      <Image src={require("./img/magnifier.png")} />
    </button>
  );
};

export default Magnifier;
