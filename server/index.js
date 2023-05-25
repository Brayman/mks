const Koa = require('koa');
const Router = require('@koa/router');
const mongoose = require('mongoose');

require('dotenv').config();

const project = require('./routes/project');
const app = new Koa();
const router = new Router()

app.use(router.routes());

router.get('/projects', project.getProjects)
router.get('/project/:id', project.getProject)
router.post('/project', project.addProject)

const uri = process.env.MONGO_URI

mongoose.connect(uri)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))

app.listen(3001, () => {
    console.log('Server start on port 3001');
})