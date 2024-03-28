import BigBtn from "@/src/shared/UI/BigBtn";
const Title = (props) => {
  return (
    <div className="flex flex-col justify-center items-start gap-6 ">
      <h4 className="text-5xl flex flex-col gap-6">
        <span>{props.title}</span>
        <span className="text-semigreen-300 underline">{props.titlegreen}</span>
      </h4>
      <p className="text-sm">{props.desc}</p>
      <BigBtn title={props.btn} />
    </div>
  );
};

export default Title;
