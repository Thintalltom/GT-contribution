const SearchBar = () => {
    return (
        <div className="flex items-center bg-white w-full max-w-lg p-4 rounded-md shadow-md mb-6">
            <input
                type="text"
                placeholder="Create a new todo..."
                className="flex-1 text-veryDarkGrayishBlue placeholder-gray-400 focus:outline-none"
            />
            <button className="ml-4 bg-veryDarkGrayishBlueDarker text-white p-2 rounded-md hover:bg-veryDarkGrayishBlueDark">
                Add
            </button>
        </div>
    );
}

export default SearchBar;
