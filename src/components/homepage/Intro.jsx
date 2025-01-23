import React from "react";
import Images from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Divider from "../layout/Divider";
import About from "./About";
import { motion } from "framer-motion";

const SlideText = ({ children, delay = 0 }) => {
  return (
    <div className="relative inline-block">
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

  const [firstName, lastName] = info.name.split(" ");
  const lastNameFirstTwo = lastName.substring(0, 2);
  const lastNameRest = lastName.substring(2);

  return (
    <div className="h-100">
      <Images images={info.images}></Images>

      <div className="h-100">
        <div className="sticky">
          <div className="intro" style={{ fontFamily: "iori" }}>
            <h1 className="mb-2">
              <SlideText delay={0}>Hi,</SlideText>
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2">
              <h1 className="mb-2 flex items-center">
                <SlideText delay={0.1}>I'm{" "}</SlideText>{" "}
                <span style={{ color: "#FD1056" }} className="ml-2">
                  <SlideText delay={0.2}>
                    {firstName}
                  </SlideText>
                </span>
              </h1>
              <h1 className="mb-2">
                <SlideText delay={0.3}>
                {/* <span style={{ color: "#FD1056" }}>{lastNameFirstTwo}</span> */}

                  <span>{lastNameFirstTwo}</span>
                  {lastNameRest},
                </SlideText>
              </h1>
            </div>
            <h1>
              <SlideText delay={0.5}>{info.jobTitle}</SlideText>
            </h1>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="description !mt-8"
              style={{ fontFamily: "iori", marginTop: "20px" }}
            >
              <div className="text-2xl mb-1 flex items-center gap-1.5" style={{ color: "#FD1056" }}>
                <img
                  src="https://img.icons8.com/sf-black/64/phone.png"
                  alt="Phone Icon"
                  style={{ width: "30px", height: "30px" }}
                />
                {contact.mobile}
              </div>
              <div className="text-2xl ml-1  flex items-center gap-1.5">
                <img
                  src="https://img.icons8.com/ios-filled/100/mail.png"
                  alt="Phone Icon"
                  style={{ width: "28px", height: "28px" }}
                />
                {contact.email}</div>
              <br></br>
              <a
                className="link"
                href={"http://github.com/" + contact.github}
                style={{ marginRight: "8px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="link"
                href={"http://linkedin.com/" + contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
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