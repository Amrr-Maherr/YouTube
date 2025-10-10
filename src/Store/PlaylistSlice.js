import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchPlaylistItems = createAsyncThunk(
  "playlist/fetchPlaylistItems",
  async (playlistId) => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet,contentDetails",
            playlistId: playlistId,
            maxResults: 20,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return res.data.items;
    } catch (error) {
      return error.response?.data.error.message;
    }
  }
);

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState: {
    data: null,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchPlaylistItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchPlaylistItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchPlaylistItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default PlaylistSlice.reducer;
