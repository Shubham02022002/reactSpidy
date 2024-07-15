
const Task26Child = ({ tabs, selectedTags, setSelectedTags }) => {
  return (
    <div>
      <ul>
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              className={selectedTags.includes(tab) ? "bg-red-400" : ""}
              onClick={() => {
                if (selectedTags.includes(tab)) {
                  setSelectedTags(selectedTags.filter((tag) => tag !== tab));
                } else {
                  setSelectedTags([...selectedTags, tab]);
                }
              }}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task26Child;
