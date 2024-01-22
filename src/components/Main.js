import CandidateListPanel from "./CandidateListPanel";
import CandidateDesciption from "./CandidateDesciption";

export default function Main() {
  return (
    <div className="grid grid-cols-4 h-screen w-screen max-h-screen max-w-full">
      <CandidateListPanel />
      <CandidateDesciption />
    </div>
  );
}
