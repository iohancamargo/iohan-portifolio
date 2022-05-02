import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBars, faRemove} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useCallback, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNav = useCallback(() => {
    setIsNavExpanded(false);
  },[]);

  return (
    <header>
      <div className='container-header'>
        {/* Web Menu */}
        <div className='big-size'>
          <div className='nav-links-big'>
            <NavLink exact="true" activeclassname='active' className='home-link' to="/">
              <FontAwesomeIcon icon={faHome} color="#a3a3a3" />
            </NavLink>

            <NavLink activeclassname="active" to="/about">
              <FontAwesomeIcon icon={faUser} color="#a3a3a3" />
            </NavLink>

            <NavLink
              activeclassname="active"
              className="contact-link"
              to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#a3a3a3" />
            </NavLink>
          </div>

          <div className='menu-and-informations'>
            <div className='infos-text'>
              <p>Iohan Camargo</p>
              <small>Full Stack Developer / Mobile Developer</small>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='small-size'>
          <div className='nav-links'>
            <NavLink exact="true" activeclassname='active' className='home-link' to={location.pathname} onClick={() => handleNav()}>
              <div className='icon-effect'>
                {location.pathname === '/' && <FontAwesomeIcon icon={faHome} color="#a3a3a3" />}
                {location.pathname === '/about' && <FontAwesomeIcon icon={faUser} color="#a3a3a3" />}
                {location.pathname === '/contact' && <FontAwesomeIcon icon={faEnvelope} color="#a3a3a3" />}
              </div>
              <span className="description-link">
                {location.pathname === '/' && 'Home'}
                {location.pathname === '/about' && 'About'}
                {location.pathname === '/contact' && 'Contact'}
              </span>
            </NavLink>
          </div>
          <div className='menu-and-informations'>
            <button className="btn-menu" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
              <FontAwesomeIcon icon={faBars} color="#a3a3a3" className={`${!isNavExpanded ? 'showing-icon' : ''} `} />
              <FontAwesomeIcon icon={faRemove} color="#a3a3a3" className={`${isNavExpanded ? 'showing-icon' : ''} `} />
            </button>            
          </div>
        </div>

        <div className={`other-links ${isNavExpanded ? 'showing' : ''} `}>
            {
              location.pathname !== '/' && 
              <NavLink activeclassname="active" to="/" onClick={() => handleNav()}>
                <div className='icon-effect'>
                  <FontAwesomeIcon icon={faHome} color="#a3a3a3" />
                </div>
                <span className="description-link">Home</span>
              </NavLink>
            }
            {
              location.pathname !== '/about' && 
              <NavLink activeclassname="active" to="/about" onClick={() => handleNav()}>
                <div className='icon-effect'>
                  <FontAwesomeIcon icon={faUser} color="#a3a3a3" />
                </div>
                <span className="description-link">About</span>
              </NavLink>
            }
            {
              location.pathname !== '/contact' && 
              <NavLink onClick={() => handleNav()} activeclassname="active" className="contact-link" to="/contact">
                <div className='icon-effect'>
                  <FontAwesomeIcon icon={faEnvelope} color="#a3a3a3" />
                </div>
                <span className="description-link">Contact</span>
              </NavLink>
            }
        </div>
      </div>
    </header>
  )
}

export default Header;
