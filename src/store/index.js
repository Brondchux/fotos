import { configureStore } from "@reduxjs/toolkit";
import controlsSlice from "./modules/controls";
import gallerySlice from "./modules/gallery";

export const actions = {
	controls: controlsSlice.actions,
	gallery: gallerySlice.actions,
};

export default configureStore({
	reducer: { controls: controlsSlice.reducer, gallery: gallerySlice.reducer },
});
