import axios from 'axios';

export const apiReCaptcha = axios.create({
  baseURL: 'https://www.google.com/recaptcha/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});