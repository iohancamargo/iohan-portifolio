import axios from 'axios';

export const apiReCaptcha = axios.create({
  baseURL: 'https://www.google.com/recaptcha/api',
});
