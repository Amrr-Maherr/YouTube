import { configureStore } from "@reduxjs/toolkit";
import MostPopularVideosSlice from "../Store/MostPopularVideosSlice"
import RelatedVideosSlice from "../Store/RelatedVideosSlice";
import SearchVideosSlice from "../Store/SearchVideosSlice";
const store = configureStore({
  reducer: {
    MostPopularVideos: MostPopularVideosSlice,
    RelatedVideos: RelatedVideosSlice,
    SearchVideos: SearchVideosSlice,
  },
});

export default store;
