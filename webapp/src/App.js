import logo from './kubi logo.png';
import jayhawk from './jayhawk-4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width ="600" height = "400" />
        <p>
          KU Blockcain Institute
        </p>
        <a
          className="App-link"
          href="https://kublockchain.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KUBI Website
        </a>
        <img src={jayhawk} width ="600" height = "600" />
      </header>
    </div>
  );
}

export default App;
