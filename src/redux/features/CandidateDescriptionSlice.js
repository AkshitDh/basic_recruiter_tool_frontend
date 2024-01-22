import { createSlice } from "@reduxjs/toolkit";

export const candidateDescriptionSlice = createSlice({
  name: "candidateDescription",
  initialState: {
    value: {
      name: "NULL",
      score: 0,
      current_status: "NULL",
      experience_with_node: 0,
      experience_with_react: 0,
    },
  },
  reducers: {
    setDescription: (state, newState) => {
      state.value = newState.payload;
    },
  },
});

export const { setDescription } = candidateDescriptionSlice.actions;

export default candidateDescriptionSlice.reducer;
