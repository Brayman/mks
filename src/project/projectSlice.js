import { createSlice } from "@reduxjs/toolkit";
import Api from "../API";

const initialState = {
    project: null,
    isLoaded: false
}


export const project = state => state.project.project

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        getProject: (state, action) => {
            state.project = action.payload
        }
    }
})

export const { getProject } = projectSlice.actions

export const fetchProject = (id) => async dispatch => {
    console.log(id);
    const project = await Api.getProject(id)
    dispatch(getProject(project.data))
}

export default projectSlice.reducer