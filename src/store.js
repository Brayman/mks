import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projects/projektsSlice";
import projectSlice from "./project/projectSlice";
import thunk from 'redux-thunk'
export const store = configureStore({
    reducer: {
        projects: projectsSlice,
        project: projectSlice
    },
    middleware: [thunk]
})