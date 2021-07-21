import React, { Component, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ResumePDF from "../assets/images/MitchellDang_resume.pdf";

const Resume = ({ data }) => {
  const [resumePreview, setResumePreview] = useState(false);

  const education = data.education.map((edu) => {
    return (
      <Grid container key={edu.school} style={{ marginTop: "3rem" }}>
        <Grid item xs={12}>
          <Grid item container xs={12}>
            <Grid item xs={12} md={9}>
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree}</p>
              <p className="info-details">{edu.description}</p>
            </Grid>
            <Grid item xs={12} md={3} className="resume-year">
              <h4>{edu.graduated}</h4>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  const work = data.work.map((job) => {
    return (
      <Grid container key={job.company}>
        <Grid item xs={12}>
          <Grid item container>
            <Grid item xs={12} md={9}>
              <h3>{job.title}</h3>
            </Grid>
            <Grid item xs={12} md={3} className="resume-year">
              <h4>{job.years}</h4>
            </Grid>
          </Grid>
          <p className="info">{job.company}</p>

          <p>{job.description}</p>
        </Grid>
      </Grid>
    );
  });

  const skills = data.skills.map(function (skill) {
    const className = "bar-expand " + skill.name.toLowerCase();
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <em>{skill.name}</em>
        </Grid>
        <Grid item xs={12} sm={9}>
          <li key={skill.name}>
            <div className="progress-bar">
              <div style={{ width: `${skill.level}` }}></div>
            </div>
          </li>
        </Grid>
      </Grid>
    );
  });

  const PreviewResumeButton = () => {
    return resumePreview ? (
      <button
        hidden={resumePreview}
        id="btn-resume-preview"
        onClick={handleResumePreview}
        className="btn-resume"
      >
        Hide full resume{" "}
        <VisibilityOffIcon
          style={{ fontSize: "3rem", marginBottom: "-5%", marginLeft: "1rem" }}
        />
      </button>
    ) : (
      <button
        hidden={resumePreview}
        id="btn-resume-preview"
        className="btn-resume"
        onClick={handleResumePreview}
      >
        View full resume{" "}
        <VisibilityIcon
          style={{ fontSize: "3rem", marginBottom: "-6%", marginLeft: "1rem" }}
        />
      </button>
    );
  };
  const handleResumePreview = () => {
    const previewButton = document.getElementById("btn-resume-preview");
    if (!resumePreview) previewButton.innerHTML = "Hide resume";
    else previewButton.innerText = "View full resume";
    setResumePreview(!resumePreview);
  };
  return (
    <section id="resume">
      <div className="title divider">Resume</div>
      <Container>
        <Grid item xs={12} className="btn-group">
          <PreviewResumeButton />
          <a href={ResumePDF} download>
            <button className="btn-resume">Download resume</button>
          </a>
        </Grid>

        {resumePreview && (
          <Grid container className="resume-preview">
            <Grid item xs={12}>
              <iframe src={`${ResumePDF}`} loading="eager" />
            </Grid>
          </Grid>
        )}
        <Grid item xs={12} className="hashtag center">
          <a href="#resume-edu">#EDUCATION</a>
          <a href="#resume-work">#WORK</a>
          <a href="#resume-skills">#SKILLS</a>
        </Grid>

        <Grid container className="work" id="resume-work">
          <Grid item xs={12}>
            <h1>
              <span>Work</span>
            </h1>
          </Grid>
          <Grid item container className="section-body">
            <Grid item xs={12}>
              {work}
            </Grid>
          </Grid>
        </Grid>

        <Grid container className="education" id="resume-edu">
          <Grid item xs={12}>
            <h1>Education</h1>
          </Grid>
          <Grid item xs={12} md={12} container className="section-body">
            {education}
          </Grid>
        </Grid>

        <Grid container className="skill" id="resume-skills">
          <Grid item xs={12}>
            <h1>
              <span>Skills</span><br/>
              <small>**NOTE: frequently used skills below are displayed in no particular order</small>
            </h1>
          </Grid>

          <Grid item container className="section-body">
            <Grid className="bars">
              <Grid className="skills">{skills}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Resume;
