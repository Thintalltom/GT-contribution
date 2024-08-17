import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import Tabs from "./Tabs";
const ToDoCard = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="bg-white text-veryDarkGrayishBlue w-full max-w-lg p-6 rounded-md shadow-md">
        <ul>
          <li className="flex items-center mb-5 border-b-[1px] p-[10px]">
            <span className="text-blue-500 mr-5">
              {" "}
              <FaCircleCheck />
            </span>
            Complete online JavaScript course
          </li>
          <li className="flex items-center mb-5 border-b-[1px] p-[10px]">
            <span className="text-blue-500 mr-5">
              {" "}
              <FaCircleCheck />
            </span>
            Complete online JavaScript course
          </li>
          <li className="flex items-center mb-5 border-b-[1px] p-[10px] ">
            <span className="text-lightGrayishBlueDark mr-5">
              {" "}
              <MdOutlineRadioButtonUnchecked />
            </span>
            Complete online JavaScript course
          </li>
          <li className="flex items-center mb-5 border-b-[1px] p-[10px]">
            <span className="text-lightGrayishBlueDark mr-5">
              {" "}
              <MdOutlineRadioButtonUnchecked />
            </span>
            Complete online JavaScript course
          </li>
          <li className="flex items-center mb-5 p-[10px]">
            <span className="text-lightGrayishBlueDark mr-5">
              <MdOutlineRadioButtonUnchecked />
            </span>
            Complete online JavaScript course
          </li>
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
