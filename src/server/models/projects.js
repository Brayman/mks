import mongoose from "mongoose";


const projects = new mongoose.Schema({
    name: String,
    summary: String,
    customer: String,
    contractor: String,
    location: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
})

export default mongoose.models.projects || mongoose.model('projects', projects)