import Image from "next/image";

const Corsine = () => {
  return (
    <button className="flex items-center justify-center">
      <Image src={require("./img/corsine.png")} />
    </button>
  );
};

export default Corsine;
