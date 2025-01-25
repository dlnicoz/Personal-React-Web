import React, { useState } from "react";
import Images from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Copy, CheckCheck, Phone, Mail } from "lucide-react";
import Divider from "../layout/Divider";
import About from "./About";
import { motion, AnimatePresence } from "framer-motion";

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

const ContactItem = ({ value, label, icon: Icon, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior when clicking copy
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getHref = () => {
    if (type === 'phone') return `tel:${value}`;
    if (type === 'email') return `mailto:${value}`;
    return '#';
  };

  return (
    <div className="relative inline-block">
      <motion.a
        href={getHref()}
        className="flex items-center gap-3 cursor-pointer group text-xl"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Icon size={24} className="text-gray-600 group-hover:text-[#FD1056] transition-colors duration-200" />
        <span className="group-hover:text-[#FD1056] transition-colors duration-200">
          {value}
        </span>
        <div onClick={handleCopy}>
          {isCopied ? (
            <CheckCheck size={20} className="text-green-500" />
          ) : (
            <Copy size={20} className="text-[#2284EC] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </div>
      </motion.a>
      
      <AnimatePresence>
        {isHovered && !isCopied && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 8, 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
                mass: 0.8
              }
            }}
            exit={{ 
              opacity: 0,
              y: -10,
              scale: 0.9,
              transition: {
                duration: 0.2
              }
            }}
            className="absolute left-0 top-full bg-black text-white text-xs py-1.5 px-3 rounded whitespace-nowrap z-10"
          >
            Click to {type === 'phone' ? 'call' : 'send email'} or copy {label}
            <div className="absolute -top-1 left-6 w-2 h-2 bg-black transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
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
              className="description mt-8"
              style={{ fontFamily: "iori" }}
            >
              <div className="flex flex-col gap-2">
                <ContactItem 
                  value={contact.mobile} 
                  label="phone number" 
                  icon={Phone} 
                  type="phone"
                />
                <ContactItem 
                  value={contact.email} 
                  label="email address" 
                  icon={Mail} 
                  type="email"
                />
                <div className="flex gap-2 mt-4">
                  <motion.a
                    className="link"
                    href={"http://github.com/" + contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </motion.a>
                  <motion.a
                    className="link"
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </motion.a>
                </div>
              </div>
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