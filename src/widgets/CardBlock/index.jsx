import Card from "./ui/Card";
import Title from "./ui/Title";

const CardBlock = (props) => {
  return (
    <section className="py-24">
      <div className="container grid grid-cols-2">
        <div
          className={`${
            props.revers ? "" : "order-1"
          } flex items-center justify-center`}
        >
          <Card />
        </div>
        <div className="flex items-center">
          <Title
            title="Think`s important "
            titlegreen="Flowers in your area"
            desc="description text lorem ippsum"
            btn="Read more"
          />
        </div>
      </div>
    </section>
  );
};

export default CardBlock;
