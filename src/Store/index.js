import { configureStore } from "@reduxjs/toolkit";
import MostPopularVideosSlice from "../Store/MostPopularVideosSlice"
import RelatedVideosSlice from "../Store/RelatedVideosSlice";
const store = configureStore({
  reducer: {
    MostPopularVideos: MostPopularVideosSlice,
    RelatedVideos: RelatedVideosSlice,
  },
});

export default store;
