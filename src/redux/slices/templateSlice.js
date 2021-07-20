import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
	name: "template",
	initialState: {
		template: [],
	},
	reducers: {
		initializeTemplate: (state, action) => {
			state.template = action.payload;
		},
		removeLabelItem: (state, action) => {
			const item = state.template[action.payload.section].labels[action.payload.label].items[action.payload.item];
			item.status = false;
			item.value = action.payload.value;
		},
		removeLabel: (state, action) => {
			const label = state.template[action.payload.section].labels[action.payload.label];
			label.status = false;
		},
		removeSection: (state, action) => {
			state.template[action.payload.section].status = false;
		},
		createNewLabel: (state, action) => {
			state.template[action.payload.section].labels.splice(action.payload.label, 0, {
				status: true,
				items: [
					{
						type: "text",
						status: true,
						value: "",
					},
				],
			});
		},
	},
});

export const { initializeTemplate, removeLabelItem, removeLabel, removeSection, createNewLabel } = templateSlice.actions;

export const selectTemplate = (state) => state.template.template;
export default templateSlice.reducer;
