import React from "react";
import Images from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Divider from "../layout/Divider";
import About from "./About";
import { motion } from "framer-motion"

const Intro = (props) => {
  const info = props.info;
  const contact = props.contact;

  return (
    <div className="h-100">
      <Images images={info.images}></Images>

      <div className="h-100">
        <div className="sticky">
          <motion.div className="intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 , delay:0.1 }}
            style={{ fontFamily: "iori" }}>
            <h1 className="mb-2">Hi,</h1>
            <h1 className="mb-2">
              I'm{" "}
              <span style={{ color: "#FD1056" }}>
                {info.name.split(" ")[0]}{" "}
                {info.name.split(" ")[1].substring(0, 2)}
              </span>
              {info.name.substring(
                info.name.split(" ")[0].length + 3,
                info.name.length
              )}
              ,
            </h1>
            <h1>{info.jobTitle}</h1>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="description"
              style={{ fontFamily: "iori", marginTop: "20px" }}
            >
              {contact.mobile}
              <br></br>
              {contact.email}
              <br></br>
              <a
                className="link"
                href={"http://github.com/" + contact.github}
                style={{ marginRight: "8px" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="link"
                href={"http://linkedin.com/" + contact.linkedin}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </motion.div>
          </div>
          <Divider size="large" />
          <About about={info.about} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
