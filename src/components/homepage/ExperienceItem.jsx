import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faDotCircle,
  faCircleNotch,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  // Import motion from framer-motion

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
      <motion.div
        className="row"
        id={experience.title}
        style={{ margin: "0px", padding: "0px" }}
        initial={{ opacity: 0, y: 20 }}  // Initial state for animation
        whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
        transition={{ duration: 0.6, delay: 0.2 }}  // Transition properties
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
          <motion.h5
            className="text-xl mb-2"
            style={{ fontFamily: "iori" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {experience.title}
          </motion.h5>
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
              <FontAwesomeIcon icon={faImages} /> {experience.images.length}{" "}
            </Fragment>
          ) : null}
        </div>
      </motion.div>
    </Link>
  );
};

export default ExperienceItem;
