import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducer: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.playload;
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
