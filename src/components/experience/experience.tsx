import React, { forwardRef } from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobListings from "./jobs.json";

const Experience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="Experience-Container" ref={ref}>
      <h1>Experience</h1>
      <VerticalTimeline className="Vertical-Timeline">
        {jobListings.map((job, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date={job.date}
            style={{ boxShadow: `0px 4px 6px ${job.color}` }}
            iconStyle={{ background: job.color, color: "#ffff" }}
            icon={
              <img
                src={process.env.PUBLIC_URL + job.logo}
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
            <p className="vertical-timeline-element-paragraph">
              {job.description}
            </p>
            <div className="Skills-Container">
              {job.skills.map((skill, skillIndex) => (
                <div
                  className="Skill-Element"
                  key={skillIndex}
                  style={{ background: job.color }}
                >
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
