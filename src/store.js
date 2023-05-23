import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects/projektsSlice";

export const store = configureStore({
    reducer: {
        projects: projectsReducer
    }
})