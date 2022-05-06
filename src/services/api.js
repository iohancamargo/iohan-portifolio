import axios from 'axios';

export const apiReCaptcha = axios.create({
  baseURL: 'https://www.google.com/recaptcha/api',
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});