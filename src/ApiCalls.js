/* eslint-disable no-console */
import axios from 'axios';
import Copyright from './components/Copyright';
import cleanData from './components/DataCleaning';
import GetInTouch from './components/GetInTouch';
import Testimonials from './components/Testimonials/Testimonials';


const getData = async () => {
  try {
    const root = document.querySelector('.App');
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

    const testimonials = cleanData(users.data, posts.data);

    root.insertAdjacentHTML('beforeend', Testimonials(testimonials));
    root.insertAdjacentHTML('beforeend', GetInTouch());
    root.insertAdjacentHTML('beforeend', Copyright());
  } catch (error) {
    console.error(error);
  }
};
getData();