import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://my-json-server.typicode.com/AlexLasagna/chat-server',
});

export const dialogsFetch = () => {
  return ax.get('/db');
};
