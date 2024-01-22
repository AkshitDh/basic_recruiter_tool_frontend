import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/features/CandidateListSlice";

export default function FilterButton() {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const candidateList = useSelector((state) => state.candidateList.value);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    min_score: 1,
    max_score: 6,
    current_status: null,
  });

  function toggleFilterMenu() {
    if (showFilterMenu) setShowFilterMenu(false);
    else setShowFilterMenu(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFilters((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleApplyFilter(e) {
    e.preventDefault();

    var newList = candidateList.filter((candidate) => {
      return candidate.score >= filters.min_score;
    });

    console.log(newList);

    newList = newList.filter((candidate) => {
      return candidate.score <= filters.max_score;
    });

    if (filters.current_status) {
      newList = newList.filter((candidate) => {
        return candidate.current_status === filters.current_status;
      });
    }
    dispatch(setList(newList));
  }

  return (
    <>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="multi-dropdown"
        className="bg-none rounded-lg inline-flex items-center w-7"
        type="button"
        onClick={toggleFilterMenu}
      >
        <img
          src={require("../images/filter_button.png")}
          alt="filter"
          className="object-cover"
        />
      </button>
      <div className={showFilterMenu ? "" : "hidden"}>
        <form>
          <div>
            <label>
              <span className="text-white">Min Score</span>
              <input
                type="integer"
                name="min_score"
                value={filters.min_score}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label>
              <span className="text-white">Max Score</span>
              <input
                type="integer"
                name="max_score"
                value={filters.max_score}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label>
              <span className="text-white">Current Status</span>
              <select
                name="current_status"
                value={filters.current_status}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">None</option>
                <option value="Contacted">Contacted</option>
                <option value="Interview Schduled">Interview Schduled</option>
                <option value="Offer Extended">Offer Extended</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="flex text-grey-900 bg-white hover:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mb-2 mt-3"
            onClick={handleApplyFilter}
          >
            Apply
          </button>
        </form>
      </div>
    </>
  );
}
