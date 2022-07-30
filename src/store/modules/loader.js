import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false };
const loaderSlice = createSlice({
	name: "loader",
	initialState,
	reducers: {
		setLoading(state, { payload }) {
			state.loading = payload;
		},
	},
});

export default loaderSlice;
