import { createSlice } from "@reduxjs/toolkit";

const initialState = { photos: null };
const gallerySlice = createSlice({
	name: "gallery",
	initialState,
	reducers: {
		setPhotos(state, { payload }) {
			state.photos = payload;
		},
	},
});

export default gallerySlice;
