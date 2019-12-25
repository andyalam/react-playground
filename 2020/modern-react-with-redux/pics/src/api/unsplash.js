import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 2d226f550d9245f77d8b64cdde73e1855598f475cc8f97b8319c1de25e785ac7'
  }
});
