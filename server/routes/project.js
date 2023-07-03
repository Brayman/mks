const projectService = require("../services/project")

class projects {
    addProject = async (ctx) => {
        try {
            await projectService.addProject(ctx.request.body)
            ctx.status = 201
            ctx.body = { message: 'success!' }
        } catch (error) {
            ctx.status = 500
            ctx.body = { message: 'something went wrong' }
        }
    }
    editProject = async (ctx) => {
        try {
            const updatedProject = await projectService.editProject(ctx.params.id, ctx.body)
            ctx.status = 200
            ctx.body = updatedProject
        } catch (error) {
            ctx.status = 500
            ctx.body = { message: 'something went wrong' }
        }
    }
    deleteProject = async (ctx) => {
        try {
            await projectService.deleteProject(ctx.params.id)
        } catch (error) {
            ctx.status = 500
            ctx.body = { message: 'something went wrong' }
        }
    }
    getProject = async (ctx) => {
        try {
            const project = await projectService.getProject(ctx.params.id)
            ctx.status = 200
            ctx.body = project
        } catch (error) {
            ctx.status = 404
        }
    }
    getProjects = async (ctx) => {
        try {
            const projects = await projectService.getProjects(ctx.query.filter)
            ctx.status = 200
            ctx.body = projects
        } catch (error) {
            ctx.status = 500
        }
    }
}

module.exports = new projects()