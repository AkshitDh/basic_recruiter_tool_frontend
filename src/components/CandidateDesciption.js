import { useSelector } from "react-redux";

export default function CandidateDesciption() {
  const candidateDescription = useSelector(
    (state) => state.candidateDescription.value
  );
  return (
    <div className="col-span-3 px-7 ">
      <div className="flex font-medium pt-2 pb-2 lg:text-8xl md:text:lg">
        {candidateDescription.name}{" "}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        {Array.from({ length: candidateDescription.score }, (_, index) => (
          <span key={index} role="img" aria-label="star">
            ⭐
          </span>
        ))}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Status: {candidateDescription.current_status}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Email:{" "}
        {candidateDescription.email ? candidateDescription.email : "NULL"}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Phone:{" "}
        {candidateDescription.phone ? candidateDescription.phone : "NULL"}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Experience with Node:
        {Array.from(
          { length: candidateDescription.experience_with_node },
          (_, index) => (
            <span key={index} role="img" aria-label="star">
              ⭐
            </span>
          )
        )}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Experience with React:
        {Array.from(
          { length: candidateDescription.experience_with_react },
          (_, index) => (
            <span key={index} role="img" aria-label="star">
              ⭐
            </span>
          )
        )}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Additional Skills:{" "}
        {candidateDescription.additional_skills
          ? candidateDescription.additional_skills
          : "NULL"}
      </div>
      <div className="flex font-medium pt-2 pb-2 lg:text-2xl md:text:lg">
        Expected Salary:{" "}
        {candidateDescription.expected_salary
          ? candidateDescription.expected_salary
          : "NULL"}
      </div>
    </div>
  );
}
