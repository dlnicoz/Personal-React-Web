import React, { Fragment, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/mainprofile.webp";
import profile1 from "../../assets/profile1.webp";
import profile2 from "../../assets/profile2.webp";
import profile3 from "../../assets/profile3.webp";
const Images = () => {
  const gallery = [profile, profile1, profile2, profile3];
  const [currentImage, setCurrentImage] = useState(gallery[3]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * gallery.length);
    setCurrentImage(gallery[randomIndex]);
  };
  const MypicDiv = styled.div`
    background-image: url("${currentImage}");
    background-color: #0d1117;
    background-size: cover;
    background-position: center;
    width: 450px;
    height: 450px;
    margin-bottom: 50px;
    margin-top: 60px;
    border-radius: 15px;
  `;
  return (
    <Fragment>
      <MypicDiv
        className="d-none d-lg-block left-big-image"
        id="mypicDiv"
        onClick={handleClick}
      >
        <div id="overlay"></div>
      </MypicDiv>
    </Fragment>
  );
};

export default Images;
