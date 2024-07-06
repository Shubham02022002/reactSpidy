import { useState } from "react";

const Task5 = () => {
  const initialTodos = [
    {
      id: 1,
      title: "Take class at 6 am",
      completed: false,
    },
    {
      id: 2,
      title: "Go to gym at 7 am",
      completed: false,
    },
    {
      id: 3,
      title: "Eat",
      completed: false,
    },
    {
      id: 4,
      title: "Code",
      completed: false,
    },
    {
      id: 5,
      title: "Sleep",
      completed: false,
    },
  ];
  const [state, setState] = useState(initialTodos);
  const [updateText, setUpdateText] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [completedTask, setCompletedTask] = useState([]);

  const handleCheckboxChange = (id) => {
    const updatedState = state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setState(updatedState);
  };

  const handleUpdateButton = (id) => {
    const updatedState = state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: updateText };
      }
      return todo;
    });
    setState(updatedState);
    setUpdateText("");
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: state.length + 1,
        title: newTodo,
        completed: false,
      };
      setState([...state, newTask]);
      setNewTodo("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 py-10 px-5">
      <div className="max-w-2xl mx-auto bg-black rounded-lg shadow-md p-5">
        <h1 className="text-2xl font-bold mb-5">Todo List</h1>
        <div className="mb-5">
          <input
            type="text"
            placeholder="New task"
            className="p-2 border text-black border-gray-300 rounded w-full mb-3"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 focus:outline-none"
          >
            Add Todo
          </button>
        </div>
        {state.map((val) => (
          <div
            className="flex flex-col md:flex-row items-center gap-4 mb-4 p-4 border-b border-gray-200"
            key={val.id}
          >
            <div className="flex-grow">
              <h1 className="text-xl font-semibold">Task: {val.title}</h1>
              <p className="text-gray-600">
                Status: {val.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
            <input
              type="checkbox"
              checked={val.completed}
              onChange={() => handleCheckboxChange(val.id)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Update task"
              className="p-2 border border-gray-300 rounded w-full md:w-auto flex-grow"
              value={updateText}
              onChange={(e) => {
                e.preventDefault();
                setUpdateText(e.target.value);
              }}
            />
            <button
              onClick={() => handleUpdateButton(val.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 focus:outline-none"
            >
              Update
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto bg-black rounded-lg shadow-md p-5 mt-10">
        <h2 className="text-xl font-bold mb-3">Completed Tasks</h2>
        <button
          onClick={() => setCompletedTask(state.filter((val) => val.completed))}
          className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 focus:outline-none mb-5"
        >
          Filter
        </button>
        {completedTask.length > 0 ? (
          completedTask.map((val) => (
            <p key={val.id} className="p-2 border-b border-gray-200">
              {val.title}
            </p>
          ))
        ) : (
          <p className="text-gray-600">No completed tasks</p>
        )}
      </div>
    </div>
  );
};

export default Task5;
