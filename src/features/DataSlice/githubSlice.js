import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "portfolioList",
  initialState: {
    portfolioList: [],
    ifLoading: "",
  },
  reducers: {
    fetchGithubData: (state) => {
      state.ifLoading = "loading";
      console.log(state.ifLoading);
    },
    setPortfolioList: (state, { payload: data}) => {
      state.portfolioList = data;
      state.ifLoading = "success";
      console.log(state.portfolioList);
    },
    setError: (state) => {
      state.ifLoading = "error";
   },
  },
});

export const {
fetchGithubData,
setPortfolioList,
setError
} = githubSlice.actions;

export const selectPortfolioList = (state) => state.portfolioList;
export const selectLoadingState = (state) => state.ifLoading;
// export const getMovieById = (state, movieId) =>
//   selectMoviesDetails(state).movieDetails.find(({ id }) => id === movieId);

export default githubSlice.reducer;
