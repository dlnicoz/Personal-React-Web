import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import profile from '../../assets/mainprofile.jpg'
import profile1 from '../../assets/pr11.png'
import profile2 from '../../assets/placeholder.png'
import profile3 from '../../assets/link.png'
import profile4 from '../../assets/diploma.png'
const Images = () => {
	const gallery = [profile, profile1, profile2, profile3, profile4];
	const [currentImage, setCurrentImage] = useState(gallery[0]);

	const handleClick = () => {
		const randomIndex = Math.floor(Math.random() * gallery.length);
		setCurrentImage(gallery[randomIndex]);
	};
	const MypicDiv = styled.div`
	background-image: url('${currentImage}');
	background-color: #0D1117;
	background-size: cover;
	background-position: center;
	width:450px;
	height:450px;
	margin-bottom:50px;
	margin-top:60px;
	border-radius:15px;
	`;
	return (
		<Fragment>

			<MypicDiv
				className='d-none d-lg-block left-big-image'
				id='mypicDiv'
				onClick={handleClick}
			>
				<div id='overlay'></div>
			</MypicDiv>
		</Fragment>
	);

};


export default Images;
