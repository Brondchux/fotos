import { configureStore } from "@reduxjs/toolkit";
import controlsSlice from "./modules/controls";
import gallerySlice from "./modules/gallery";
import searchSlice from "./modules/search";
import loaderSlice from "./modules/loader";

export const actions = {
	controls: controlsSlice.actions,
	gallery: gallerySlice.actions,
	search: searchSlice.actions,
	loader: loaderSlice.actions,
};

export default configureStore({
	reducer: {
		controls: controlsSlice.reducer,
		gallery: gallerySlice.reducer,
		search: searchSlice.reducer,
		loader: loaderSlice.reducer,
	},
});
