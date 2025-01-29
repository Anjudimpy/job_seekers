import JobModel from "../models/job.model.js";

export default class JobController {
    hero(req,res) {
        return res.render('hero');
    }

    getJob(req,res){
        let jobs = JobModel.get();
        console.log(jobs);
        return res.render('jobs',{jobs});
    }

    getLogin(req,res) {
        return res.render('login');
    }

    getNewJob(req,res) {
        return res.render('new-job');
    }
}