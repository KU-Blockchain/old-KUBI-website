import logo from './assets/KUBI-1200-logo.png';
import jayhawk from './assets/jayhawk-4.png';
import  NavbarComponent  from './components/navigation/navbar';
import './App.css';
import ButtonComponent from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" width ="600" height = "400" />
        <p>
          KU Blockchain Institute
        </p>
        <a
          className="App-link"
          href="https://kublockchain.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KUBI Website
        </a>
        <img src={jayhawk} alt="" width ="600" height = "600" />
      </header>
    </div>
  );
}

export default App;
