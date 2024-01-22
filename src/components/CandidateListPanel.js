import CandidateListHeader from "./CandidateListHeader";
import SearchBar from "./SearchBar";
import CandidateList from "./CandidateList";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";

export default function CandidateListPanel() {
  return (
    <div className="flex flex-col max-h-screen bg-[#00a1ff] p-2 col-span-4 md:col-span-1 ps-3 pe-3">
      <CandidateListHeader />
      <SearchBar />
      <div className="w-full mt-2">
        <FilterButton />
        <SortButton />
      </div>
      <CandidateList />
    </div>
  );
}
