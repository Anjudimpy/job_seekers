import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import JobController from './src/controllers/job.controller.js';
const app = express();

// app.use('/', (req,res) =>{
//     res.sendFile(path.join(path.resolve(),'src', 'views','layout.html'))
// })
app.use(express.static('src/views'));
app.use(ejsLayouts);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(),'src','views'));

// app.get('/',(req,res) =>{
//     res.render('layout');
// })

const jobController = new JobController();

app.get('/', jobController.hero);
app.get('/jobs', jobController.getJob);
app.get('/login', jobController.getLogin);
app.get('/new', jobController.getNewJob);

app.listen('3000',(req,res) =>{
    console.log('server is listening on 3000')
});