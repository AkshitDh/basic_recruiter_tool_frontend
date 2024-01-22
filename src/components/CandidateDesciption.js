import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "./Axios";

export default function CandidateDesciption() {
  const candidateDescription = useSelector(
    (state) => state.candidateDescription.value
  );
  const [currentStatus, setCurrentStatus] = useState("Contacted");
  const [showUpdateStatusButton, setShowUpdateStatusButton] = useState(false);

  useEffect(() => {
    setCurrentStatus(candidateDescription.current_status);
  }, [candidateDescription]);

  function handleChange(e) {
    e.preventDefault();

    var newStatus = e.target.value;
    setCurrentStatus(newStatus);
    if (candidateDescription.current_status !== newStatus) {
      setShowUpdateStatusButton(true);
    } else {
      setShowUpdateStatusButton(false);
    }
  }

  function handleUpdateStatus() {
    axios({
      method: "put",
      url: "/candidate_description/update_status/",
      data: {
        id: candidateDescription.id,
        new_status: currentStatus,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
        Status:{" "}
        <select
          name="current_status"
          value={currentStatus}
          onChange={handleChange}
          className="border border-gray-900 focus:ring-opacity-50 border-indigo-300 ms-2 rounded-md shadow-sm"
          required
        >
          <option value="Contacted">Contacted</option>
          <option value="Interview Schduled">Interview Schduled</option>
          <option value="Offer Extended">Offer Extended</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </select>
        <span className={showUpdateStatusButton ? "" : "hidden"}>
          <button
            className="text-white ms-10 bg-[#00a1ff] hover:ring-2 font-medium rounded-lg text-sm px-4 py-2"
            onClick={handleUpdateStatus}
          >
            Update Current Status
          </button>
        </span>
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
          ? "₹" + candidateDescription.expected_salary
          : "NULL"}
      </div>
    </div>
  );
}
