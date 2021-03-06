import { useCallback, useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCircleExclamation, faMessage, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import loading from '../../assets/images/loading.svg';
import { emailValidator } from '../../utils/validations';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
// import { apiReCaptcha } from '../../services/api';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [validToken, setValidToken] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "Name must have at less 6 characters")
      .required("Name must be informed"),
    message: Yup.string()
      .min(14, "Message must have at less 14 characters")
      .required("Message must be informed"),
  });
  const recaptchaOnChange = useCallback(async () => {
    const token = recaptchaRef.current.getValue();
    if (token !== undefined && token !== null && token !== '') {
      setTimeout(() => {
        setValidToken(true);
      }, 600);
    } else {
      toast.warning("Unable to verify reCaptcha...", {position: toast.POSITION.TOP_RIGHT,theme: 'dark'});
    }
  },[],);
  // const recaptchaOnChange = useCallback(async () => {
  //     const token = recaptchaRef.current.getValue();
  //     if (token) {
  //       const params = {
  //         secret: process.env.REACT_APP_RECAPTCHA_SECRET,
  //         token: token
  //       };
        
  //       const dataResponse = Object.keys(params)
  //         .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  //         .join('&');

  //       try {
  //         // const { success, challenge_ts, hostname } = await apiReCaptcha.post('/siteverify', dataResponseToSend);
  //         const response = await apiReCaptcha.post(`/siteverify`, dataResponse);
  //         console.log('response recaptcha', response);
  //         if (response.success) {
  //           setValidToken(true);
  //         }
  //         /* Expiration recaptcha token */
  //         setTimeout(() => {
  //           setValidToken(false);
  //         }, 120000);
  //       } catch (err) {
  //         toast.warning("Unable to verify reCaptcha...", {
  //           position: toast.POSITION.TOP_RIGHT,
  //           theme: 'dark'
  //         });
  //         return false;
  //       }
  //     }
  //   },
  //   [],
  // );

  // const recaptchaOnError = useCallback(async () => {
  //   toast.warning("Unable to verify reCaptcha...", {
  //     position: toast.POSITION.TOP_RIGHT,
  //     theme: 'dark'
  //   });
  // },[],);

  const handleFormSubmit = async (setSubmitting, resetForm) => {
    emailjs
      .sendForm(
        'default_service',
        process.env.REACT_APP_MAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_MAIL_PUBLIC_KEY
      )
      .then((response) => {
        resetForm();
        toast.success("E-mail successfully sent!", {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark'
        });
        setSentEmail(true);
      })
      .catch((err) => {
        toast.warning("Unable to send e-mail...", {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark'
        });
      }).finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
    <div className='contact-page'>
        <div className='contact'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Contact me']}
              idx={15}
            />
          </h1>

          <div className='contact-mail'>
            {/* Have two validation schemes below the form in case it is a custom validation. */}
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema= {ContactSchema}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'E-mail must be informed';
                } else if (!emailValidator(values.email)) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  handleFormSubmit(setSubmitting, resetForm);
                }, 400);
              }}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form ref={form} data-netlify="true" data-netlify-recaptcha="true" name="contact">
                  <div className='first-infos'>
                    <div className='name'>
                      <label htmlFor="name">
                        <FontAwesomeIcon icon={faUser} color="#a3a3a3" /> Full name
                      </label>
                      <Field type="text" name="name" placeholder="Type your full name here..." maxLength={150} minLength={6}/>
                      {touched.name && errors.name && (
                          <span>
                          <FontAwesomeIcon icon={faCircleExclamation} color="#c74251" />
                          {errors.name}
                          </span>
                      )}
                    </div>
                    <div className='email'>
                      <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} color="#a3a3a3" /> E-mail
                      </label>
                      <Field type="email" name="email" placeholder="Type your e-mail here..." maxLength={150} minLength={6} />
                      {touched.email && errors.email && (
                          <span>
                          <FontAwesomeIcon icon={faCircleExclamation} color="#c74251" />
                          {errors.email}
                          </span>
                      )}
                    </div>
                  </div>
                  <div className="message-section">
                    <label id="contect" htmlFor="message">
                      <FontAwesomeIcon icon={faMessage} color="#a3a3a3" /> Message
                    </label>
                    <Field type="text" component="textarea" name="message" cols="24" rows="4" placeholder="Type your message here..." maxLength={255} minLength={14}/>
                    {touched.message && errors.message && (
                    <span>
                      <FontAwesomeIcon icon={faCircleExclamation} color="#c74251" />
                      {errors.message}
                    </span>
                    )}
                  </div>
                  {!sentEmail && !isSubmitting && validToken &&
                    <div className='btn-group'>
                      <input type="submit" className="btn-section" disabled={isSubmitting} value="Send e-mail" />
                    </div>
                  }

                  {!sentEmail && !isSubmitting && !validToken &&
                    <div className='btn-group'>
                      <ReCAPTCHA
                        id="recaptcha-google"
                        name="g-recaptcha"
                        ref={recaptchaRef}
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        theme='dark'
                        size='normal'
                        onChange={recaptchaOnChange}
                      />
                    </div>
                  }
                  {isSubmitting && 
                    <div className='btn-group'>
                      <img src={loading} alt={`Sending email...`} className='loading'/> 
                    </div>
                  }

                  {sentEmail && 
                    <div className='sent-message'>
                      <h1>
                        <AnimatedLetters
                          letterClass={letterClass}
                          strArray={[<FontAwesomeIcon icon={faEnvelopeCircleCheck} color="#a3a3a3" /> , 'Email received.']}
                          idx={15}
                        />
                      </h1>
                    </div>
                  }
                </Form>
              )}
            </Formik>
          </div>
          
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[`Let's have a coffee together`]}
              idx={15}
            />
          </h1>
          <div className="map-section">
            <MapContainer center={[40.832449, -74.136937]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[40.832449, -74.136937]}>
                <Popup>We can go to Starbucks.<br/> 360 NJ-3, Clifton, NJ 07014</Popup>
              </Marker>
            </MapContainer>
          </div>
          
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Contact;
