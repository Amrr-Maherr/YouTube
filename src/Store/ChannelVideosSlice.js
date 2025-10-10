import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchChannelVideos = createAsyncThunk(
  "channelVideos/fetchChannelVideos",
  async (uploadsPlaylistId) => {
    try {
      const videosRes = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet,contentDetails",
            playlistId: uploadsPlaylistId,
            maxResults: 20,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return videosRes.data.items;
    } catch (error) {
      return error.response?.data.error.message;
    }
  }
);

const ChannelVideosSlice = createSlice({
  name: "channelVideos",
  initialState: {
    data: null,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchChannelVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchChannelVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchChannelVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ChannelVideosSlice.reducer;
