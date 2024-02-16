import React, { forwardRef } from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobListings from "./job_listings.json";

const Experience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="Experience-Container" ref={ref}>
      <h1>Experience</h1>
      <VerticalTimeline className="Vertical-Timeline">
        {jobListings.map((job, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#E1EFF6", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C9C0FF" }}
            date={job.date}
            iconStyle={{ background: "#C9C0FF", color: "#fff" }}
            icon={
              <img
                src={job.imgPath}
                className="Experience-Icon"
                alt="Company Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              {job.position}, {job.company}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {job.location}
            </h4>
            <p>{job.description}</p>
            <div className="Skills-Container">
              {job.skills.map((skill, skillIndex) => (
                <div className="Skill-Element" key={skillIndex}>
                  {skill}
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
});

export default Experience;
