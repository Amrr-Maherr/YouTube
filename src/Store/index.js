import { configureStore } from "@reduxjs/toolkit";
import MostPopularVideosSlice from "../Store/MostPopularVideosSlice"
const store = configureStore({
  reducer: {
    MostPopularVideos: MostPopularVideosSlice,
  },
});

export default store;
