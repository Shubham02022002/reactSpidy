const Task29Child = ({ isOpen, children, setIsOpen }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg">{isOpen && children()}</div>
      <div className="flex justify-center">
        <button
          className="border-[1px] border-white p-1 text-white bg-black rounded-lg m-2 w-fit"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Show Content
        </button>
      </div>
    </div>
  );
};

export default Task29Child;
