const PrePrice = () => {
  return (
    <section className="semigray-300">
      <div className="py-24 container ">
        <h4 className="text-5xl flex flex-col gap-6 pb-16">
          <span>More Value from</span>
          <span className="text-semigreen-300 underline">this Flowers</span>
        </h4>
        <div className="flex justify-between items-center">
          <ul className="flex gap-16 text-gray-400 font-semibold">
            <li>Special Deals</li>
            <li>Populer</li>
            <li>Recommendation</li>
            <li>Best Price</li>
          </ul>
          <div className="flex items-center gap-8 ">
            <button className="w-10 h-10 border border-green-700 rounded-xl">
              q
            </button>
            <button className="w-10 h-10 border border-green-700 rounded-xl">
              e
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 py-8">
          <div className="h-80">
            <div className="bg-gray-400 h-full rounded-xl"></div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="font-semibold">Jasmine Flowers</p>
              <p className="text-semigreen-300 font-semibold">238 $</p>
            </div>
          </div>
          <div className="h-80">
            <div className="bg-gray-400 h-full rounded-xl"></div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="font-semibold">Lily Flowers</p>
              <p className="text-semigreen-300 font-semibold">310 $</p>
            </div>
          </div>
          <div className="h-80">
            <div className="bg-gray-400 h-full rounded-xl"></div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="font-semibold">Rose Flowers</p>
              <p className="text-semigreen-300 font-semibold">114 $</p>
            </div>
          </div>
          <div className="h-80">
            <div className="bg-gray-400 h-full rounded-xl"></div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="font-semibold">Amaris Flowers</p>
              <p className="text-semigreen-300 font-semibold">410 $</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrePrice;
