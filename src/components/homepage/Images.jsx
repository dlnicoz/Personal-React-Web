import React, { Fragment } from 'react';
import styled from 'styled-components';
import profile from '../../assets/mainprofile.jpg'

const MypicDiv = styled.div`
	background-image: url('${profile}');
	background-color: #0D1117;
	background-size: cover;
	background-position: center;
	width:450px;
	height:450px;
	margin-bottom:50px;
	margin-top:60px;
	border-radius:15px;
	`;

const Images = () => {
	return (
		<Fragment>
			
			<MypicDiv
				className='d-none d-lg-block left-big-image'
				id='mypicDiv'
			>
				<div id='overlay'></div> 
			</MypicDiv>
		</Fragment>
	);
};

export default Images;
