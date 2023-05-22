import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [
        {
            name: 'Hamburg',
            images: [
                '/img/storage1.jpg',
                '/img/storage2.jpg'
            ]
        },
        {
            name: 'Berlin',
            images: [
                '/img/lamp_roof.jpg',
            ]
        },
        {
            name: 'München'
        },
        {
            name: 'Köln'
        },
        {
            name: 'Essen'
        },
        {
            name: 'Stuttgart'
        },
        {
            name: 'Duisburg'
        },
        {
            name: 'Dortmund'
        }
    ]
}




export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload)
        }
    }
})