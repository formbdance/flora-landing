import Corsine from "@/src/features/corsine";
import Magnifier from "@/src/features/magnifier";

const HeadContent = () => {
  return (
    <header className="py-10 semigray-300 px-8 xl:px-0">
      <nav className="flex justify-between container">
        <div className="flex items-center gap-2">
          <p className="bg-gray-400 rounded-full text-white w-12 h-12 flex items-center justify-center">
            IMG
          </p>
          <h1 className="text-2xl font-semibold">Salatri.</h1>
        </div>
        <ul className="flex items-center justify-between w-1/2 pr-16  ">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Collection</button>
          </li>
          <li>
            <button>Shop</button>
          </li>
          <li>
            <button>Product</button>
          </li>
        </ul>
        <ul className="flex items-center gap-12">
          <li>
            <Corsine />
          </li>
          <li>
            <Magnifier />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeadContent;
