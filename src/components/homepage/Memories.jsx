import React from 'react';
import { Link } from 'react-router-dom';

const Memories = (props) => {
	const memories = props.memories;

	return (
		<div className='skills'>
			<div className='title'>Hobbies</div>
			<div className='row skills'>
				<div
					className='col-12'
					style={{ marginTop: '35px', marginBottom: '15px' }}
				>
					{memories.map((memory) => (
						<Link
							to={import.meta.env.VITE_KEY_KEY + '/memory/' + memory.title}
							className='link'
						>
							<span
								className='badge badge-light'
								style={{
									fontFamily: 'Open Sans' ,
									fontWeight: 'bolder',
									marginRight: '7px',
									marginBottom: '7px',
									letterSpacing:'0.1rem',
									fontSize: '1.0rem',
								}}
							>
								{memory.title}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Memories;
