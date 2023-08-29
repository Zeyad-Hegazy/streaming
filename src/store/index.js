import { VIDEOS } from "../data/videos";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = VIDEOS;

const videoSlice = createSlice({
	name: "video",
	initialState,
	reducers: {
		likeHandler(state, action) {
			state.find((v) => v.id === action.payload).VIDEO.likes += 1;
		},
		disLikeHandler(state, action) {
			state.find((v) => v.id === action.payload).VIDEO.dislikes += 1;
		},
		commentHandler(state, action) {
			state.VIDEO.comments.push(action.payload);
		},
		addVideoHandler() {},
	},
});

const store = configureStore({
	reducer: videoSlice.reducer,
});

export const videoActions = videoSlice.actions;
export default store;
