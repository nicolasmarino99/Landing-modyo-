/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Splide from '@splidejs/splide';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide').mount();
});


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
const Users = getUsers();
const Posts = getPosts();

console.log(getUsers(), 888);
export default { Users, Posts };