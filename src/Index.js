import '../assets/styles/global.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import App from './App';


const root = document.querySelector('.root');
root.insertAdjacentHTML('afterbegin', App());

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
    type: 'fade',
    heightRatio: 0.5,
    pagination: true,
    arrows: false,
    cover: true,
  }).mount();
});