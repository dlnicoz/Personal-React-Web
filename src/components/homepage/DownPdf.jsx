import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logolink from '../../assets/link.png'
import resume from '../../assets/resume.pdf'
const DownPdf = () => {
	
	return (
		<div className='resume'>
            <a className='logolink' href={resume} download='resume.pdf' target='_blank'>
            <div> Resume
            <img className='logoRImg' src={logolink} alt="not found"  />
             </div>
            
            </a>
			 
			
		</div>
	);
};

export default DownPdf;
