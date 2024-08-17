import bgDesktopLight from "../assets/jpg/bg-desktop-light.jpg";
import bgDesktopDark from "../assets/jpg/bg-desktop-dark.jpg";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import ToDoCard from "../components/ToDoCard";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex-1">
        {theme === "dark" ? (
          <img
            src={bgDesktopDark}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={bgDesktopLight}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div
        className={`flex-auto ${
          theme === "light" ? "bg-veryLightGray" : "bg-veryDarkBlue"
        }`}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 mt-56">
        <Title />
        <SearchBar />
        <ToDoCard />
      </div>
    </div>
  );
}
