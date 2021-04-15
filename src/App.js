import Features from './components/Features/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Create from './components/Create';

const App = () => (
  `<div class="App">
        ${Navbar()}
        ${Home()}
        ${Features()}
        ${Create()}
        ${AboutUs()}
    </div>`
);

export default App;
