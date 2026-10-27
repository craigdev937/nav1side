import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ThemeReducer } from "./ThemeSlice";
import { DUM } from "./DUM";

export const RED = configureStore({
    reducer: {
        theme: ThemeReducer,
        [DUM.reducerPath]: DUM.reducer,
    },      //  gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(DUM.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


