import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "section",
  initialState: {
    sections:[],
  },
  reducers: {
     addSection: (state) =>{
      state.sections.push(true)
     },
    removeSection: (state, action) =>{
      state.sections[action.payload] = false
    }
  },
});

export const { addSection,removeSection } = sectionSlice.actions;

export const selectSection = (state) => state.section.sections;

export default sectionSlice.reducer;