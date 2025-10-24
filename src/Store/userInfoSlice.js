import { createSlice } from "@reduxjs/toolkit";
const userInfoSlice = createSlice({
  name: "userData",
  initialState: {
    data: null,
  },
  reducers: {
    logOut: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
    setUserData: (state, action) => {
      state.data = action.payload;
      try {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export const { setUserData, logOut } = userInfoSlice.actions;
export default userInfoSlice.reducer;
