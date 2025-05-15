import { useRef } from "react";
import "./WhatOurUsersSays.css"
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const usersFeedback = [ 
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Electrician",
    company: "Tata Projects",
    content: "Thanks to LocalBlueForce, I found a great job as an electrician with Tata Projects. The application process was simple and quick.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Manufacturing Supervisor",
    company: "Maruti Suzuki",
    content: "As someone with limited computer knowledge, I was impressed by how easy it was to apply for jobs on this platform. Got hired within a week!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mohammed Irfan",
    role: "Heavy Machinery Operator",
    company: "L&T Construction",
    content: "The process was straightforward. I uploaded my details once and could apply to multiple jobs with a single click. Very convenient!",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 4,
    name: "Anita Desai",
    role: "HR Manager",
    company: "Godrej Industries",
    content: "LocalBlueForce helped us find qualified blue-collar workers quickly. The quality of candidates has been consistently high.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];


const WhatOurUserSays = () => {

  const scrollRef=useRef(null)

  const scroll=(direction)=>{

    if(scrollRef.current){
      const scrollLength=350;
      scrollRef.current.scrollBy({
        left:direction==="left" ? -scrollLength : scrollLength,
      })
    }
  }


  return (
    <div className="feedback-container">
      <span className="feedback-title">What Our Users Say</span>
      <span className="feedback-subtitle">
        Success stories from workers and employers
      </span>
      <div className="users-feedback-container">
       <ArrowBack onClick={() => scroll("left")}/>

        <div className="users-feedback" ref={scrollRef}>
          <>
            {usersFeedback.map((data) => (
              <div className="feedback" key={data.id}>
                <span className="feedback-content"><em>"{data.content}"</em></span>
                <div className="user-details">
                  <img src={data.image} alt={data.name} />
                  <div className="user-job-details">
                    <span className="user-name">{data.name}</span>
                    <span className="user-role">{data.role}, {data.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>

       <ArrowForward onClick={() => scroll("right")}/>
      </div>
    </div>
  );
};

export default WhatOurUserSays;
