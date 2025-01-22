import React from "react";
import Images from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Divider from "../layout/Divider";
import About from "./About";
import { motion } from "framer-motion";

const SlideText = ({ children, delay = 0 }) => {
  return (
    <div className="relative  inline-block">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: "0%" }}
        whileInView={{ y: "-100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="absolute inset-0 z-0"
      />
    </div>
  );
};

const Intro = (props) => {
  const info = props.info;
  const contact = props.contact;

  return (
    <div className="h-100">
      <Images images={info.images}></Images>

      <div className="h-100">
        <div className="sticky">
          <div className="intro" style={{ fontFamily: "iori" }}>
            <h1 className="mb-2">
              <SlideText delay={0}>Hi,</SlideText>
            </h1>
            <h1 className="mb-2">
              <SlideText delay={0.1}>I'm{" "}</SlideText>{" "}
              <span style={{ color: "#FD1056" }}>
                <SlideText delay={0.2}>
                  {info.name.split(" ")[0]}{" "}
                  {info.name.split(" ")[1].substring(0, 2)}
                </SlideText>
              </span>
              <SlideText delay={0.3}>
                {info.name.substring(
                  info.name.split(" ")[0].length + 3,
                  info.name.length
                )}
                ,
              </SlideText>
            </h1>
            <h1>
              <SlideText delay={0.4}>{info.jobTitle}</SlideText>
            </h1>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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