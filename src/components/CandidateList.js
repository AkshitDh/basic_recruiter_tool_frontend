import { useEffect } from "react";
import CandidateListItem from "./CandidateListItem";
import axios from "./Axios";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/features/CandidateListSlice";

export default function CandidateList() {
  const candidateList = useSelector((state) => state.candidateList.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchCandidateList() {
      axios({
        method: "get",
        url: "/candidate_list/",
      })
        .then((res) => {
          dispatch(setList(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchCandidateList();
  }, []);

  return (
    <div className="overflow-auto h-full no-scrollbar">
      {Object.keys(candidateList).map((key) => {
        return (
          <CandidateListItem key={key} CandidateListItem={candidateList[key]} />
        );
      })}
    </div>
  );
}
