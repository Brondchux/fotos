import { configureStore } from "@reduxjs/toolkit";
import controlsSlice from "./modules/controls";

export const actions = { controls: controlsSlice.actions };

export default configureStore({ reducer: { controls: controlsSlice.reducer } });
