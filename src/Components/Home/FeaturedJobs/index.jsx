import Button from "../../ReusableComponents/Button"
import "./FeaturedJobs.css"

const jobs=[
    {
        jobField:"Experienced Electrician",
        companyName:"Tata Projects",
        location:"Mumbai, Maharashtra",
        salary:"₹25,000 - ₹30,000/month",
    },
    {
        jobField:"Plumber",
        companyName:"L&T Construction",
        location:"Delhi NCR",
        salary:"₹20,000 - ₹25,000/month",
    },
    {
        jobField:"Factory Worker",
        companyName:"Maruti Suzuki",
        location:"Gurugram, Haryana",
        salary:"₹18,000 - ₹22,000/month",
    },
]

const FeaturedJobs=()=>{

    return <div className="featured-jobs-container">
        <div className="featured-header">
            <span className="featured-title">Featured Jobs</span>
            <span className="featured-all-jobs">View All Jobs</span>
        </div>
        <div className="featured-jobs">
        <>{
            jobs.map((data,index)=>{
                return <div className="job" key={index}>
                        <span className="job-field">{data.jobField}</span>
                        <span className="job-company">{data.companyName}</span>
                        <span className="job-location">{data.location}</span>
                        <span className="job-salary">{data.salary}</span>
                        <Button buttonName="Apply Now" className="primary"/>
                </div>
            })
        }</>

        </div>

    </div>
}

export default FeaturedJobs