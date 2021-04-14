import axios from 'axios';

export const tokenAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://localhost:5000/api',
    headers: {
      Authorization: token
    }
  })
}