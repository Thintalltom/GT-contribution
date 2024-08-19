import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToDoProps } from "../types/apiTypes/toDoProps";

const ToDoCard = (): JSX.Element => {
  const [toDos, setToDos] = useState<ToDoProps[]>([]);

  useEffect(() => {
    const getToDos = async () => {
      try {
        const response = await axios.get(
          "https://gt-todo-api.onrender.com/todos"
        );
        setToDos(response.data);
      } catch (error) {
        alert(
          "Something went wrong, please check your network connection and try again"
        );
      }
    };
    getToDos();
  }, [toDos]);

 
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="bg-white text-veryDarkGrayishBlue w-full max-w-lg p-6 rounded-md shadow-md">
        <ul>
          {toDos.map((toDo: ToDoProps, id: number) => {
            return (
              <li
                key={id}
                className="flex items-center mb-5 border-b-[1px] p-[10px]"
              >
                <span className="text-blue-500 mr-5">
                  {toDo.completed ? (
                    <FaCircleCheck />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}
                </span>
                {toDo.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-[50px] w-full flex justify-center pb-[50px]  ">
        <div className="gap-[20px]">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
