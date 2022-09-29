import { configureStore } from '@reduxjs/toolkit';
import githubSliceReducer from '../DataSlice/githubSlice';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    portfolioList: githubSliceReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
