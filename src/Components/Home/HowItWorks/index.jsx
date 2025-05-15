import "./HowItWorks.css"

 const steps=[
    {
        no:"1",
        whatToDo:"Create Your Profile",
        details:"Register and upload your resume to showcase your skills to employers."
    },
    {
        no:"2",
        whatToDo:"Find Relevant Jobs",
        details:"Search for jobs that match your skills and preferences."
    },
    {
        no:"1",
        whatToDo:"Apply & Get Hired",
        details:"Apply with one click and get hired for your dream job."
    },
 ]

 const HowItWorks=()=>{


    return <div className="hit-container">
        <span className="hit-title">How It Works</span>
        <div className="hit-steps-container">
            <>
            {
                steps.map((data,index)=>{
                    return <div className="hit-step" key={index}>
                        <div className="hit-no-container"><span className="hit-no">{data.no}</span></div>
                        <span className="hit-what-to-do">{data.whatToDo}</span>
                        <span className="hit-details">{data.details}</span>
                    </div>
                })
            }
            </>
        </div>

    </div>
 }

 export default HowItWorks