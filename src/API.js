import axios from 'axios'
const URL = process.env.REACT_APP_URL
class API {
    async getProjects() {
        console.log('work');
        const res = await axios.get(URL + 'projects')
        return res
    }
    async addProject(project) {
        const res = await axios.post(`${URL}project`, project)
        return res
    }
    async getProject(id) {
        const res = await axios.get(`${URL}project/${id}`)
        return res
    }
}

const Api = new API()

export default Api