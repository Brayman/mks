import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projects/projektsSlice";
import projectSlice from "./project/projectSlice";

export const store = configureStore({
    reducer: {
        projects: projectsSlice,
        project: projectSlice
    }
})