import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from '../layout/Divider';
import Intro from './Intro';
import Experiences from './Experiences';
import Projects from './Projects';
import Educations from './Educations';
import Hobbies from './Hobbies';
import DownPdf from './DownPdf';


const Info = (props) => {
	const {
		info,
		skills,
		educations,
		experiences,
		projects,
		contact,
		settings,
		hobbies,
	} = props.data;

	const Container = styled.div`
		height: 100vh;
		overflow-y: scroll;
		background-color: ${settings.backgroundColor};
		position: relative;
		color: ${settings.textColor};
		padding: ${settings.padding}px;
	`;

	return (
		<Container className='col-lg-12 col-sm-12 info-div'>
			<div className='row display-flex'>
				<div className='col-lg-6'>
					<div id="leftDiv">
						<Intro info={info} contact={contact} />
					</div>
				</div>
				<div className='col-lg-6'>
					<Experiences experiences={experiences} />
					<Divider size='medium' />
					<Projects projects={projects} />
					<Divider size='medium' />
					<Hobbies hobbies={hobbies} />
					<Divider size='medium' />
					<Skills skills={skills} />
					<Divider size='medium' />
					<Educations educations={educations} />
					<Divider size='medium' />
					<Divider size='medium' />
					<DownPdf  />

				</div>
			</div>
		</Container>
	);
};

export default Info;
