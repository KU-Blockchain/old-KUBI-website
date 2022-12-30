import logo from './kubi logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
