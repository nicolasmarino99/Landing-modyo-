/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Splide from '@splidejs/splide';
import axios from 'axios';


const getUsers = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
  } catch (error) {
    console.error(error);
  }
};


const getPosts = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(resp);
  } catch (error) {
    console.error(error);
  }
};
