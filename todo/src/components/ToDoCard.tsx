import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const ToDoCard = () => {
    return (
        <div className="bg-white text-veryDarkGrayishBlue w-full max-w-lg p-6 rounded-md shadow-md">
            <ul>
                <li className="flex items-center mb-5">
                    <span className="text-blue-500 mr-5"> <FaCircleCheck /></span>
                    Complete online JavaScript course
                </li>
                <li className="flex items-center mb-5">
                    <span className="text-blue-500 mr-5"> <FaCircleCheck /></span>
                    Complete online JavaScript course
                </li>
                <li className="flex items-center mb-5">
                    <span className="text-lightGrayishBlueDark mr-5"> <MdOutlineRadioButtonUnchecked /></span>
                    Complete online JavaScript course
                </li>
                <li className="flex items-center mb-5">
                    <span className="text-lightGrayishBlueDark mr-5"> <MdOutlineRadioButtonUnchecked /></span>
                    Complete online JavaScript course
                </li>
                <li className="flex items-center mb-5">
                    <span className="text-lightGrayishBlueDark mr-5"><MdOutlineRadioButtonUnchecked /></span>
                    Complete online JavaScript course
                </li>
            </ul >
        </div >
    )
}

export default ToDoCard;
