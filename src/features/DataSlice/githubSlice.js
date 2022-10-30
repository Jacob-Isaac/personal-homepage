import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "portfolioList",
  initialState: {
    portfolioList: [],
    ifLoading: "",
    lightMode: true,
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
   changeTheme: (state) => {
    state.lightMode = !state.lightMode;
    console.log(state.lightMode);
   },
  
  },
});

export const {
fetchGithubData,
setPortfolioList,
setError,
changeTheme
} = githubSlice.actions;

export const selectPortfolioList = (state) => state.portfolioList.portfolioList;
export const selectLoadingState = (state) => state.portfolioList.ifLoading;
export const selectIsLightMode = (state) => state.portfolioList.lightMode;
// export const getMovieById = (state, movieId) =>
//   selectMoviesDetails(state).movieDetails.find(({ id }) => id === movieId);

export default githubSlice.reducer;
