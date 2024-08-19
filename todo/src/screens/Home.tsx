import bgDesktopLight from "../assets/jpg/bg-desktop-light.jpg";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import ToDoCard from "../components/ToDoCard";



export default function Home () {

   
    return (
        <div className="h-screen flex flex-col relative">
            <div className="flex-1">
                <img
                    src={bgDesktopLight}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-auto  bg-veryLightGray">
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-50 mt-56">
                <Title />
                <SearchBar />
                <ToDoCard />
            </div>
        </div>

    );
}
