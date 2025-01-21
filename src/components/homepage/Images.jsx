import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import profile from "../../assets/mainprofile.webp";
import profile1 from "../../assets/profile1.webp";
import profile2 from "../../assets/profile2.webp";
import profile3 from "../../assets/profile3.webp";

const Images = () => {
  const gallery = [profile, profile1, profile2, profile3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic image change every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [gallery.length]);

  // Handle image change on click
  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  // Styled Component for smooth image transitions
  const MypicDiv = styled.div`
    background-image: url("${gallery[currentImageIndex]}");
    background-color: #0d1117;
    background-size: cover;
    background-position: center;
    width: 450px;
    height: 450px;
    margin-bottom: 50px;
    margin-top: 60px;
    border-radius: 15px;
    opacity: 0;
    animation: fadeIn 0.5s forwards; // Fade in effect
    transition: opacity 0.5s ease-in-out; // Smooth transition for opacity

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <Fragment>
      <MypicDiv
        className="d-none d-lg-block left-big-image"
        id="mypicDiv"
        onClick={handleClick} // Change image on click
      >
        <div id="overlay"></div>
      </MypicDiv>
    </Fragment>
  );
};

export default Images;
