import logo from '../assets/images/svg_1.svg';

const App = () => (
  `<div class="App">
        <h1>Welcome to a Nico App</h1>
        <img class="App-logo" src="${logo}" alt="Svg image"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://www.nicolasmarinoparra.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my website
        </a>
    </div>`
);

export default App;
