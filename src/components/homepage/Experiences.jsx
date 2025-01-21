import React, { Fragment } from "react";
import ExperienceItem from "./ExperienceItem";
import Divider from "../layout/Divider";

const Experience = (props) => {
  const experiences = props.experiences;

  return (
    <div className="row experience" style={{ marginTop: "60px" }}>
      <div className="col-12 title" style={{ fontFamily:'iori', margin: "0px" }}>
        Experiences
      </div>
      <Divider size="medium"></Divider>
      {experiences.map((experience) => (
        <Fragment key={experience.id}>
          <ExperienceItem experience={experience}></ExperienceItem>
          <Divider size="medium"></Divider>
        </Fragment>
      ))}
    </div>
  );
};

export default Experience;
