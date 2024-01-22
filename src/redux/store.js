import { configureStore } from "@reduxjs/toolkit";
import candidateListReducer from "./features/CandidateListSlice";
import candidateDescriptionReducer from "./features/CandidateDescriptionSlice";

export default configureStore({
  reducer: {
    candidateList: candidateListReducer,
    candidateDescription: candidateDescriptionReducer,
  },
});
