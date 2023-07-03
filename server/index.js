const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');


const mongoose = require('mongoose');

require('dotenv').config();

const project = require('./routes/project');
const app = new Koa();
const router = new Router()

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

router.get('/projects', project.getProjects)
router.post('/project', project.addProject)
router.get('/project/:id', project.getProject)
router.delete('/project/:id', project.deleteProject)
router.put('/project/:id', project.editProject)

const uri = process.env.MONGO_URI

app.use(async (ctx) => {
    console.log(ctx.URL);
});

mongoose.connect(uri)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))

app.listen(3001, () => {
    console.log('Server start on port 3001');
})