const Task24Child = ({ options,selectedOption, onChange }) => {
  return (
    <div>
      <select className="bg-black" value={selectedOption} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Task24Child;
