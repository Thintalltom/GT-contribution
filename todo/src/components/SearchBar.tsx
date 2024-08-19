import { useState } from "react";
import axios from "axios";
import { ToDoProps } from "../types/apiTypes/toDoProps";

const SearchBar = (): JSX.Element => {
  // const [newToDo] = useToDo()
  const [toDo, setToDo] = useState<ToDoProps>({
    title: "",
    completed: false,
  });

  const createToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setToDo((prevToDo) => ({
      ...prevToDo,
      [name]: value,
    }));
  };

  const postToDo = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!toDo.title) {
      return alert("Can't add an empty field");
    }
    try {
      await axios.post("https://gt-todo-api.onrender.com/todos", {
        title: toDo.title,
        completed: toDo.completed,
      });

      setToDo({
        title: "",
        completed: toDo.completed,
      });
    } catch (error) {
      alert("Failed to add To Do");
    }
  };

  //  const completedData = () => {

  //  }

  return (
    <div className="flex items-center bg-white w-full max-w-lg border-[2px]  p-4 rounded-md shadow-md mb-6">
      <input
        name="title"
        value={toDo.title}
        onChange={createToDo}
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 text-veryDarkGrayishBlue placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={postToDo}
        className="ml-4 bg-veryDarkGrayishBlueDarker text-white p-2 rounded-md hover:bg-veryDarkGrayishBlueDark"
      >
        Add
      </button>
    </div>
  );
};

export default SearchBar;
