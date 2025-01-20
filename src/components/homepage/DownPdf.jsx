import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logolink from '../../assets/link.webp'
import resume from '../../assets/resume.pdf'
const DownPdf = () => {
	
	return (
		<div className='resume inline'>
            <a className='text-[#fd1056] hover:text-red-600' href={resume} download='resume.pdf' target='_blank'>
            <div style={{ fontFamily:'iori'}}> Resume</div>
            </a>
		</div>
	);
};

export default DownPdf;
