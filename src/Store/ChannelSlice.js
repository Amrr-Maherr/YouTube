import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch channel details + videos
export const FetchChannelDetails = createAsyncThunk(
  "channel/fetchChannelDetails",
  async (channelId) => {
    try {
      const channelRes = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
          params: {
            part: "snippet,statistics,brandingSettings,contentDetails",
            id: channelId,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );

      return channelRes.data.items;
    } catch (error) {
      return error.response?.data.error.message;
    }
  }
);

const ChannelSlice = createSlice({
  name: "channel",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchChannelDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchChannelDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchChannelDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ChannelSlice.reducer;
