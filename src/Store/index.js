import { configureStore } from "@reduxjs/toolkit";
import MostPopularVideosSlice from "../Store/MostPopularVideosSlice"
import RelatedVideosSlice from "../Store/RelatedVideosSlice";
import SearchVideosSlice from "../Store/SearchVideosSlice";
import I18nSlice from "../Store/I18nSlice";
import VideoCommentsSlice from "../Store/VideoCommentsSlice";
import VideoDetailsSlice from "../Store/VideoDetailsSlice";
const store = configureStore({
  reducer: {
    MostPopularVideos: MostPopularVideosSlice,
    RelatedVideos: RelatedVideosSlice,
    SearchVideos: SearchVideosSlice,
    I18n: I18nSlice,
    VideoComments: VideoCommentsSlice,
    VideoDetails: VideoDetailsSlice,
  },
});

export default store;
