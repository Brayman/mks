const Project = require("../models/projects");

class projectServices {
    addProject = async (project) => {
        const newProject = new Project(project);

        return await newProject.save()
    }
    editProject = async () => {

    }
    deleteProject = async () => {

    }
    getProject = async (id) => {
        return await Project.findById(id);

    }
    getProjects = async () => {
        return await Project.find();

    }
}

module.exports = new projectServices()