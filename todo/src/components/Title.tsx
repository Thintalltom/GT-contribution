import darkModeIcon from "../assets/svg/icon-moon.svg";

const Title = () => {
  return (
    <div className="w-full max-w-lg flex justify-between items-center mb-6 mt-[22rem]">
      <h1 className="text-xl font-bold">TODO</h1>
      <button>
        <img src={darkModeIcon} alt="" />
      </button>
    </div>
  );
};

export default Title;
