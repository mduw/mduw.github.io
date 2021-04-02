import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = ({ data }) => {
  const projectItem = data.map((item) => {
    const { id, date, title, subTitle, description, category, url } = item;
    return (
      <VerticalTimelineElement
        className={
          Number(id) % 2
            ? "vertical-timeline-element--left"
            : "vertical-timeline-element--right"
        }
        date={date}
        iconStyle={{
          background: "#502a73",
          borderRadius: "100%",
          boxShadow: "none",
        }}
      >
        {url ? (
          <a href={url} target="blank" className="vertical-timeline-element-title ">
            <h3 className="hover-title">{title}</h3>
          </a>
        ) : (
          <h3 className="vertical-timeline-element-title">{title}</h3>
        )}
        <h5 className="project-subtitle">{subTitle}</h5>
        <p className="project-descript">{description}</p>
        <h5>{category}</h5>
      </VerticalTimelineElement>
    );
  });
  return (
    <section container id="projects">
      <div className="title">Projects</div>
      <VerticalTimeline className="vertical-timeline-custom-line">
        {projectItem}
      </VerticalTimeline>
    </section>
  );
};

export default Projects;
