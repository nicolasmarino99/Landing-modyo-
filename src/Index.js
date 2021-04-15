import '../assets/styles/global.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import App from './App';


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

const root = document.querySelector('.root');
root.insertAdjacentHTML('afterbegin', App());
