import { createSlice } from "@reduxjs/toolkit";

export const candidateDescriptionSlice = createSlice({
  name: "candidateDescription",
  initialState: {
    value: null,
  },
  reducers: {
    setDescription: (state, newState) => {
      state.value = newState.payload;
    },
  },
});

export const { setDescription } = candidateDescriptionSlice.actions;

export default candidateDescriptionSlice.reducer;
