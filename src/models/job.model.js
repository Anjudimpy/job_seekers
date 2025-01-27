export default class JobModel{
    constructor(id, companyName, jobRole, location, salaryRange, skills){
        this.id = id;
        this.companyName = companyName;
        this.jobRole = jobRole;
        this.location = location;
        this.salaryRange = salaryRange;
        this.skills = skills;
    }
    static get(){
        return jobs;
    }
}

var jobs = [
    new JobModel(
       1,
       "Company1",
       "Full stack Developer",
       "Delhi",
       "10 - 20lpa",
       "Html"
    ),
    new JobModel(
        2,
        "Company2",
        "Full stack Developer",
        "Delhi",
        "10 - 20lpa",
        "Html"
     ),
     new JobModel(
        3,
        "Company3",
        "Full stack Developer",
        "Delhi",
        "10 - 20lpa",
        "Html"
     )
]