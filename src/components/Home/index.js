import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import svgIohan from '../../assets/images/iohan.svg';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['I','o', 'h', 'a', 'n',' ', 'C','a','m','a','r','g','o.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <h2>Full Stack Developer / Mobile Developer</h2>
          <div className='check-me'>
            <Link to="/about" className="flat-button">
              Know me better
            </Link>
          </div>
        </div>
        <div className='img-container'>
          <img src={svgIohan} className='img-presentantion' alt="Iohan Camargo" />
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Home
