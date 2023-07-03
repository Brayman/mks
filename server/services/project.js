const Project = require("../models/projects");

class projectServices {
    addProject = async (project) => {
        const newProject = new Project(project);

        return await newProject.save()
    }
    editProject = async (_id, newProject) => {
        const updatedProject = await Project.updateOne({ _id }, newProject)
        console.log(updatedProject);
        return updatedProject
    }
    deleteProject = async (id) => {
        return await Project.findByIdAndDelete(id)
    }
    getProject = async (id) => {
        console.log(id);
        return await Project.findById(id);
    }
    getProjects = async (filter) => {
        const findOptions = {}
        if (filter) {
            findOptions.tags = filter
        }
        return await Project.find(findOptions);
    }
}

module.exports = new projectServices()