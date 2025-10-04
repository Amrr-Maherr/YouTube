import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch most popular videos
export const FetchMostPopularVideos = createAsyncThunk(
  "videos/fetchMostPopularVideos",
  async ({ Country = "EG", pageToken = "" } = {}) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: Country,
            maxResults: 10,
            pageToken,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data.error.message;
    }
  }
);

const mostPopularVideosSlice = createSlice({
  name: "mostPopularVideos",
  initialState: {
    data: [],
    loading: true,
    error: null,
    nextPageToken: null,
  },
  reducers: {
    clearVideos: (state) => {
      state.data = [];
      state.nextPageToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchMostPopularVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchMostPopularVideos.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.meta.arg.pageToken) {
          state.data = action.payload.items;
        } else {
          state.data = [...state.data, ...action.payload.items];
        }
        state.nextPageToken = action.payload.nextPageToken || null;
      })
      .addCase(FetchMostPopularVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearVideos } = mostPopularVideosSlice.actions;
export default mostPopularVideosSlice.reducer;
