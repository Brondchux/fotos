import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: 1, limit: 10 };
const controlsSlice = createSlice({
	name: "controls",
	initialState,
	reducers: {
		increment(state) {
			state.page++;
		},
		decrement(state) {
			state.page--;
		},
		setPage(state, { payload }) {
			state.page = payload;
		},
	},
});

export default controlsSlice;
