import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const PageNotFound = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className='not-found-page'>
        <div className='content-not-found'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[`You're`,' ', `lost...`]}
              idx={17}
            />
          </h1>

          <div className='text-info'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[`The page you are looking for does not exist.`]}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[`How you got here is a mystery...`]}
              idx={17}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[`But you can click the button below to go back to the homepage`]}
              idx={17}
            />
            <div className='btn-group'>
              <Link to="/" className="btn-section">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default PageNotFound;
