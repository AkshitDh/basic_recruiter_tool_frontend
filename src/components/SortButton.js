import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/features/CandidateListSlice";

export default function SortButton() {
  const [sortType, setSortType] = useState("1");
  const candidateList = useSelector((state) => state.candidateList.value);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    e.preventDefault();

    console.log(sortType);
    console.log(parseInt(sortType, 10) % 2 === 1);
    if (parseInt(sortType, 10) % 2 === 1) {
      const newList = candidateList.slice().sort((a, b) => a.score - b.score);
      dispatch(setList(newList));
    } else {
      const newList = candidateList.slice().sort((a, b) => b.score - a.score);
      dispatch(setList(newList));
    }
    setSortType(parseInt(sortType, 10) + 1);
  };

  return (
    <>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="multi-dropdown"
        className="bg-none rounded-lg inline-flex items-center w-7 ml-2"
        type="button"
        onClick={handleSort}
      >
        <img
          src={require("../images/sort_button.png")}
          alt="sort"
          className="object-cover"
        />
      </button>
    </>
  );
}
