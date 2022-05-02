import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
  faAws,
  faDocker,
  faPhp,
  faNodeJs,
  faSass,
  faLaravel,
  faAndroid,
  faApple
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iconIonic from '../../assets/images/icon-ionic.svg';
import iconIonicGray from '../../assets/images/icon-ionic-gray.svg';
import iconSqlServer from '../../assets/images/icon-microsoft-sql-server.svg';
import iconSqlServerGray from '../../assets/images/icon-microsoft-sql-server-gray.svg';
import iconTypescript from '../../assets/images/icon-typescript.svg';
import iconTypescriptGray from '../../assets/images/icon-typescript-gray.svg';
import iconJQuery from '../../assets/images/icon-jquery.svg';
import iconJQueryGray from '../../assets/images/icon-jquery-gray.svg';
import iconMySQL from '../../assets/images/icon-mysql.svg';
import iconMySQLGray from '../../assets/images/icon-mysql-gray.svg';
import iconPostgreSQL from '../../assets/images/icon-postgresql.svg';
import iconPostgreSQLGray from '../../assets/images/icon-postgresql-gray.svg';
import iconOracle from '../../assets/images/icon-oracle.svg';
import iconOracleGray from '../../assets/images/icon-oracle-gray.svg';
import iconLinux from '../../assets/images/icon-linux.svg';
import iconLinuxGray from '../../assets/images/icon-linux-gray.svg';
import iconRxjs from '../../assets/images/icon-rxjs.svg';
import iconRxjsGray from '../../assets/images/icon-rxjs-gray.svg';
import iconMedidation from '../../assets/images/icon-medidation.svg';
import iconSelfKnowlege from '../../assets/images/icon-self-knowlege.svg';
import iconRun from '../../assets/images/icon-run.svg';
import iconGame from '../../assets/images/icon-game.svg';
import iconCycling from '../../assets/images/icon-cycling.svg';
import iconTravel from '../../assets/images/icon-travel.svg';

import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const qualities = [
    {name:'Communicative'},
    {name:'Determined'},
    {name:'Empathetic'},
    {name:'Flexible'},
    {name:'Focused'},
    {name:'Humorous'},
    {name:'Kind'},
    {name:'Proactive'},
    {name:'Organized'},
    {name:'Ownership'},
    {name:'Self-managing'},
    {name:'Self-taught'},
  ].sort(function(a,b) {
    let keyA = a.name, keyB = b.name;
    if (keyA.toLocaleLowerCase() < keyB.toLocaleLowerCase()) return -1;
    if (keyA.toLocaleLowerCase() > keyB.toLocaleLowerCase()) return 1;
    return 0;
  });

  const hobbies = [
    {name: 'Cycling', alt: 'Cycling', icon:iconCycling},
    {name: 'Eletronic Games', alt: 'Eletronic Games', icon:iconGame},
    {name: 'Meditation', alt: 'Meditation', icon:iconMedidation},
    {name: 'Self-knowlege', alt: 'Self-knowlege', icon:iconSelfKnowlege},
    {name: 'Street running', alt: 'Street running', icon:iconRun},
    {name: 'Travel', alt: 'Travel', icon:iconTravel}
  ].sort(function(a,b) {
    let keyA = a.name, keyB = b.name;
    if (keyA.toLocaleLowerCase() < keyB.toLocaleLowerCase()) return -1;
    if (keyA.toLocaleLowerCase() > keyB.toLocaleLowerCase()) return 1;
    return 0;
  });

  const skills = [
    {name: 'Angular', type: 'icon', icon: faAngular, alt: `The modern web developer's platform`, classIcon:'angular', url: process.env.REACT_APP_URL_ANGULAR},
    {name: 'Aws', type: 'icon', icon: faAws, alt: 'Amazon Web Services', classIcon:'amazon', url: process.env.REACT_APP_URL_AWS},
    {name: 'CSS', type: 'icon', icon: faCss3, alt: 'Cascading Style Sheets', classIcon: 'css3', url: process.env.REACT_APP_URL_CSS},
    {name: 'Android', type: 'icon', icon: faAndroid, alt: 'Android: Makes more possible', classIcon: 'android',url: process.env.REACT_APP_URL_ANDROID},
    {name: 'Docker', type: 'icon', icon: faDocker, alt: 'Docker: Developers love docker, businesses trust it.', classIcon: 'docker', url: process.env.REACT_APP_URL_DOCKER},
    {name: 'Git', type: 'icon', icon: faGitAlt, alt: 'GitHub: Where the world builds software', classIcon: 'github', url: process.env.REACT_APP_URL_GITHUB},
    {name: 'HTML', type: 'icon', icon: faHtml5, alt: 'HTML: HyperText Markup Language', classIcon: 'htmlClass', url: process.env.REACT_APP_URL_HTML},
    {name: 'Ionic', type: 'image', icon: iconIonic, iconGray: iconIonicGray, classIcon: 'changeImage', alt: 'Ionic Framework: Cross-Platform Mobile App Development', url: process.env.REACT_APP_URL_IONIC},
    {name: 'iOS', type: 'icon', icon: faApple, alt: 'Apple: Infinite Possibilities', classIcon: 'apple', url: process.env.REACT_APP_URL_IOS},
    {name: 'Javascript', type: 'icon', icon: faJs, alt: 'Javascript - Scripting language', classIcon: 'javascript', url: process.env.REACT_APP_URL_JAVASCRIPT},
    {name: 'JQuery', type: 'image', icon: iconJQuery, iconGray: iconJQueryGray, alt: 'JQuery: Write less, do more', classIcon: 'changeImage', url: process.env.REACT_APP_URL_JQUERY},
    {name: 'Laravel', type: 'icon', icon: faLaravel, alt: 'Laravel - The PHP framework for web artisans', classIcon: 'laravel', url: process.env.REACT_APP_URL_LARAVEL},
    {name: 'Linux', type: 'image', icon: iconLinux, iconGray: iconLinuxGray, classIcon: 'changeImage', alt: 'Linux', url: process.env.REACT_APP_URL_LINUX},
    {name: 'MySQL', type: 'image', icon: iconMySQL, iconGray: iconMySQLGray, classIcon: 'changeImage', alt: `MySQL: The world's most popular open source database`, url: process.env.REACT_APP_URL_MYSQL},
    {name: 'Node.js', type: 'icon', icon: faNodeJs, alt: `NodeJS: Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.`, classIcon: 'nodeJS', url: process.env.REACT_APP_URL_NODE},
    {name: 'Oracle', type: 'image', icon: iconOracle, iconGray: iconOracleGray, classIcon: 'changeImage', alt: `Oracle database world`, url: process.env.REACT_APP_URL_ORACLE},
    {name: 'PHP', type: 'icon', icon: faPhp, alt: 'PHP: Hypertext preprocessor', classIcon: 'php', url: process.env.REACT_APP_URL_PHP},
    {name: 'PostgreSQL', type: 'image', icon: iconPostgreSQL, iconGray: iconPostgreSQLGray, classIcon: 'changeImage', alt: `PostgreSQL: The world's most advanced open source database`, url: process.env.REACT_APP_URL_POSTGRESQL},
    {name: 'React', type: 'icon', icon: faReact, alt: 'React: A JavaScript library for building user interfaces', classIcon: 'react', url: process.env.REACT_APP_URL_REACT},
    {name: 'RxJS', type: 'image', icon: iconRxjs,iconGray: iconRxjsGray, classIcon: 'changeImage', alt: `RxJS: Reactive extensions library for javaScript`, url: process.env.REACT_APP_URL_RXJS},
    {name: 'Sass', type: 'icon', icon: faSass, alt: 'Sass: Syntactically Awesome Style Sheets', classIcon: 'sass', url: process.env.REACT_APP_URL_SASS},
    {name: 'SQLServer', type: 'image', icon: iconSqlServer, iconGray:iconSqlServerGray, classIcon: 'changeImage', alt: `Microsoft SQL Server`, url: process.env.REACT_APP_URL_SQLSERVER},
    {name: 'Typescript', type: 'image', icon: iconTypescript, iconGray: iconTypescriptGray, classIcon: 'changeImage', alt: `TypeScript: JavaScript With Syntax For Types`, url: process.env.REACT_APP_URL_TYPESCRIPT}
  ].sort(function(a,b) {
      let keyA = a.name, keyB = b.name;
      if (keyA.toLocaleLowerCase() < keyB.toLocaleLowerCase()) return -1;
      if (keyA.toLocaleLowerCase() > keyB.toLocaleLowerCase()) return 1;
      return 0;
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='about-page'>
        <div className='about-me'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['About', ' ', 'me']}
              idx={15}
            />
          </h1>

          <div className='text-section'>
            <p>
              I have seven years of experience with software development. I perform analysis, planning, system development, database modeling, creation of APIs, creation of interfaces, creation and maintenance of mobile application through hybrid programming languages. I'm communicative, proactive and work well in a tem and always attentive to all the details.
            </p>
          </div>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Qualities']}
              idx={16}
            />
          </h1>

          <div className='qualities'>
            <div className='qualities-info'>
            {qualities.map((quality,idx) => (
              <div className='hobbies-info' key={`${idx}_quality`}>
                <div className='subgroup'>
                    <p>- {quality.name}</p>
                </div>
              </div>
              ))}
            </div>
          </div>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Hobbies']}
              idx={17}
            />
          </h1>
          <div className='hobbies'>
            {hobbies.map((hobbie,idx) => (
              <div className='hobbies-info' key={`${idx}_hobbie`}>
                <div className='subgroup'>
                    <img src={hobbie.icon} alt={`${hobbie.alt}`} />
                    <span>{hobbie.name}</span>
                </div>
              </div>
              ))}
          </div>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['My', ' ', 'skills']}
              idx={18}
            />
          </h1>
          <div className='skill-icons'>
            {skills.map((skill,idx) => (
              <div className={`icon-info ${skill.classIcon}`} key={`${idx}_skill`}>
                <a className={`subgroup`} target="_blank" href={`${skill.url}`} rel="noreferrer">
                  {skill.type === 'icon'  && <FontAwesomeIcon icon={skill.icon} color='#c9c9c9' />}
                  {skill.type === 'image'  && 
                    <>
                      <img src={skill.iconGray} alt={`${skill.alt}`} className='icon-gray'/> 
                      <img src={skill.icon} alt={`${skill.alt}`} className='icon-color'/>
                    </>
                  }
                  <span>{skill.name}</span>
                </a>
              </div>
              ))}
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default About
