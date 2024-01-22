import { useNavigate } from "react-router-dom";

export default function CandidateListHeader() {
  const navigate = useNavigate();

  function handleAddNewCandidate() {
    navigate("/add_candidate");
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="flex text-white font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Candidate List
      </div>
      <button
        type="button"
        className="flex text-grey-900 bg-white hover:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mb-2"
        onClick={handleAddNewCandidate}
      >
        Add
      </button>
    </div>
  );
}
