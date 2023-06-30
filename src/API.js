import axios from 'axios'

class API {
    async getProjects() {
        console.log('work');
        const res = await axios.get('http://localhost:3001/projects')
        return res
    }
}
const Api = new API()

export default Api