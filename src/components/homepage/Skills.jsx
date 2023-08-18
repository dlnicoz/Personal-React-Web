import React, { Fragment } from 'react';
import SkillItem from './SkillItem';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../App.css';

const Skills = (props) => {
	const skills = props.skills;

	return (
		<div className='skills'>
			<div className='title'>Skills</div>
			{skills.map((skill) => (
				
					<div className='row skills' key={skill.id}>
						<div

							className='col-12'
							style={{ marginTop: '35px', marginBottom: '35px' }}
						>
							<div
								className='skillName'
								style={{
									color: skill.header.color,
								}}
							>
								{skill.header.name.toUpperCase()}
							</div>
							<div
								className='progress'
								style={{
									marginTop: '10px',
								}}
							>
								<div
									className='progress-bar'
									style={{
										width: skill.header.percent + '%',
										backgroundColor: skill.header.color,
									}}
								></div>
							</div>
						</div>
						{skill.skills.map((skill) => (
							<Fragment key={skill.id}>
							<SkillItem skill={skill}></SkillItem>
							</Fragment>
						))}
					</div>
				
			))}
		</div>
	);
};

export default Skills;
