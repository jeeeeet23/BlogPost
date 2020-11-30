import axios from 'axios';

export default axios.create({
   baseURL: 'http://74d6e58449a4.ngrok.io', // keep updating it every 8 hours.
});
