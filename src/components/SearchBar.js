import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/features/CandidateListSlice";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const candidateList = useSelector((state) => state.candidateList.value);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (inputValue) {
      e.preventDefault();
      console.log(candidateList);
      const newList = candidateList.filter((candidate) => {
        const firstName = candidate.name.split(" ")[0];
        return firstName === inputValue;
      });
      dispatch(setList(newList));
    }
    setInputValue("");
  };

  return (
    <>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-grey-100"
            placeholder="Search..."
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#00a1ff] hover:ring-2 font-medium rounded-lg text-sm px-4 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
