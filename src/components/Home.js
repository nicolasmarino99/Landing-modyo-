import homeImg from '../../assets/images/landing_1.png';
import '../../assets/styles/Home.scss';


const Home = () => (
  `<div class="Home" id="section1">
            <h2 class="drop" style="--order: 1">Landerz<span class="color-main">.</span></h2>
            <div class="container drop style="--order: 1"">
                <div class="get-started">
                    <h1>Grow Your Business Faster</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti fugit quae. Magnam architecto corporis nobis dolorem</p>
                    <button>Get Started</button>
                </div>
                <img class="drop" style="--order: 1" src="${homeImg}" alt="girl with computer">
            </div>
        </div>`
);

export default Home;
