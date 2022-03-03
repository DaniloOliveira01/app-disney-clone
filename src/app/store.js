import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../features/User/userSlice";
import movieReducer from "../features/Movie/movieSlice"

export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});