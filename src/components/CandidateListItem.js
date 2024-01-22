import { useDispatch } from "react-redux";
import { setDescription } from "../redux/features/CandidateDescriptionSlice";
import axios from "./Axios";

export default function CandidateListItem(candidateListItem) {
  const dispatch = useDispatch();

  function handleCandidateListItemClick() {
    axios({
      method: "post",
      url: "/candidate_description/",
      data: {
        id: `${candidateListItem.CandidateListItem.id}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(setDescription(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <button
      className="flex items-center w-full p-2 bg-white mb-2 pb-3 pt-3 rounded-lg"
      onClick={handleCandidateListItemClick}
    >
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={require("../images/avatar.png")}
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-md w-full">
        <div className="flex flex-row justify-between">
          <p className="text-grey-800">
            {candidateListItem.CandidateListItem.name}
          </p>
          <p className="text-grey-800">
            {candidateListItem.CandidateListItem.score}⭐
          </p>
        </div>
        <p className="text-start text-gray-600">
          {candidateListItem.CandidateListItem.current_status}
        </p>
      </div>
    </button>
  );
}
