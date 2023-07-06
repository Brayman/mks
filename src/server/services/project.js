import ProjectModel from "../models/projects";

class projectServices {
    addProject = async (project) => {
        const newProject = new ProjectModel(project);

        return await newProject.save()
    }
    editProject = async (_id, newProject) => {
        const updatedProject = await ProjectModel.updateOne({ _id }, newProject)
        console.log(updatedProject);
        return updatedProject
    }
    deleteProject = async (id) => {
        return await ProjectModel.findByIdAndDelete(id)
    }
    getProject = async (id) => {
        return await ProjectModel.findById(id);
    }
    getProjects = async (filter) => {
        const findOptions = {}
        if (filter) {
            findOptions.tags = filter
        }
        return await ProjectModel.find(findOptions);
    }
}

module.exports = new projectServices()