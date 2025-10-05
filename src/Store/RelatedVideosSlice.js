import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch related videos
export const FetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async (query) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            type: "video",
            q: query,
            maxResults: 10,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return response.data.items;
    } catch (error) {
      return error.response?.data?.error?.message;
    }
  }
);

const RelatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchRelatedVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default RelatedVideosSlice.reducer;
