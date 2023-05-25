const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
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
        required: true,
    },
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;