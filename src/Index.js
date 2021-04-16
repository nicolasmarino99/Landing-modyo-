import AOS from 'aos';
import '../assets/fonts/flaticon/font/_flaticon.scss';
import '../assets/fonts/icomoon/icomoon.css';
import '../assets/styles/global.scss';
import App from './App';

const root = document.querySelector('.root');
AOS.init({
  duration: 1200,
});
root.insertAdjacentHTML('afterbegin', App());
