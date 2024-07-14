import Task21Card from "./Task21Card";

const Task21 = () => {
  const titles = ["marvel", "dc", "avangers"];
  const content = ["about marverl", "about dc", "about avangers"];

  const customize =
    "flex flex-col items-center gap-2 rounded-lg my-12 text-black justify-center gap-2 rounded-lg my-12 text-black justify-center my-5 mx-2 px-2 py-1 rounded hover:bg-red-600";
    const customize2 = "bg-black text-white rounded-lg m-2 p-2 h-[200px] w-[90vw] border border-red-200";
  return (
    <div>
      <Task21Card titles={titles} content={content} customize={customize} customize2={customize2} />
    </div>
  );
};

export default Task21;
