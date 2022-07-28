import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: null };
const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setQuery(state, { payload }) {
			state.query = payload;
		},
	},
});

export default searchSlice;
