import React from "react";
import { Link } from "react-router-dom";

const Hobbies = (props) => {
  const hobbies = props.hobbies;

  return (
    <div className="skills">
      <div className="title" style={{ fontFamily:'iori'}}>Hobbies</div>
      <div className="row skills">
        <div
          className="col-12"
          style={{ marginTop: "35px", marginBottom: "15px" }}
        >
          {hobbies.map((hobby ,index) => (
            <span
            key={index}
              className="badge badge-light font-josefin"
              style={{
                // fontFamily: "Open Sans",
                // fontWeight: "bolder",
                marginRight: "7px",
                marginBottom: "7px",
                // letterSpacing:'0.1rem',
                fontSize: "1.0rem",
              }}
            >
              {hobby.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
