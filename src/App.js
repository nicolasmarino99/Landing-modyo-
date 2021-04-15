import Features from './components/Features/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Create from './components/Create';
import Testimonials from './components/Testimonials';
import GetInTouch from './components/GetInTouch';
import Copyright from './components/Copyright';

const App = () => (
  `<div class="App">
        ${Navbar()}
        ${Home()}
        ${Features()}
        ${Create()}
        ${AboutUs()}
        ${Testimonials()}
        ${GetInTouch()}
        ${Copyright()}
    </div>`
);

export default App;
