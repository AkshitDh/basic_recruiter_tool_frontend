import CandidateListPanel from "./CandidateListPanel";
import CandidateDesciption from "./CandidateDesciption";
import { useSelector } from "react-redux";

export default function Main() {
  const candidateDescription = useSelector(
    (state) => state.candidateDescription.value
  );

  return (
    <div className="grid grid-cols-4 h-screen w-screen max-h-screen max-w-full">
      <CandidateListPanel />
      {candidateDescription ? <CandidateDesciption /> : null}
    </div>
  );
}
