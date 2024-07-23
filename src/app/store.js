import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { promptApi } from "../serivce/prompt";

export const store = configureStore({
  reducer: {
    auth: promptApi,
    [promptApi.reducerPath]: promptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(promptApi.middleware),
});

setupListeners(store.dispatch);

export default store;
