import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faDotCircle,
  faCircleNotch,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function renderSwitch(status) {
  switch (status) {
    case "online":
      return (
        <div style={{ marginRight: "15px", display: "inline" }}>
          <FontAwesomeIcon icon={faCircle} /> Online
        </div>
      );

    case "away":
      return (
        <div style={{ marginRight: "15px", display: "inline" }}>
          <FontAwesomeIcon icon={faDotCircle} /> Code + Memories
        </div>
      );

    case "offline":
      return (
        <div style={{ marginRight: "15px", display: "inline" }}>
          <FontAwesomeIcon icon={faCircleNotch} /> Just Memories
        </div>
      );

    case "hidden":
    default:
      return "";
  }
}

const ExperienceItem = (props) => {
  const experience = props.experience;

  return (
    <Link to={`/experience/${experience.title}`} className="link" target="_blank">
      <div
        className="row"
        id={experience.title}
        style={{ margin: "0px", padding: "0px" }}
      >
        <div className="col-lg-1 d-none d-lg-block">
          <img
            src={experience.logo}
            className="img-fluid company-logo align-middle inline"
            alt={experience.title}
            style={{ borderRadius: "5px", width: "100%" }}
          ></img>
        </div>
        <div className="col-1g-11 col-sm-11" style={{ width: "100%" }}>
          <h5 className="text-xl mb-2" style={{ fontFamily: "iori" }}>{experience.title}</h5>
        </div>

        <div className="col-sm-11 offset-sm-1">
          <h6 style={{ fontFamily: "iori" }} className="showTime mb-2">
            <span className="d-none d-lg-inline">{experience.location} / </span>
            {experience.time}{" "}
            <span className="d-none d-lg-inline">, {experience.info}</span>
          </h6>
        </div>
        <div
          className="col-lg-11 offset-lg-1"
          style={{
            marginTop: "5px",
            fontSize: "0.7rem",
            opacity: 0.4,
          }}
        >
          {renderSwitch(experience.status)}{" "}
          {experience.images !== undefined ? (
						<Fragment>
							<FontAwesomeIcon icon={faImages} /> {experience.images.length}{' '}
						</Fragment>
					) : null}
        </div>
      </div>
    </Link>
  );
};

export default ExperienceItem;
