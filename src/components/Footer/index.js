import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <p>© Develop by Iohan Camargo</p>
      <div className='social-medias'>
        <a href="https://www.linkedin.com/in/iohan-camargo-027b2817a/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#878787" /> <span>LinkedIn</span>
        </a>
        <a href="https://github.com/iohancamargo"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#878787" /> <span>Github</span>
        </a>
      </div>
    </div>
  )
}

export default Footer;
