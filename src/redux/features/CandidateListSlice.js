import { createSlice } from "@reduxjs/toolkit";

export const candidateListSlice = createSlice({
  name: "candidateDescription",
  initialState: {
    value: {},
  },
  reducers: {
    setList: (state, newState) => {
      state.value = newState.payload;
    },
  },
});

export const { setList } = candidateListSlice.actions;

export default candidateListSlice.reducer;
