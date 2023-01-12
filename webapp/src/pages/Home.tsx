import React from "react"
import jayhawk from '../assets/jayhawk-4.png'

const Home = () => {
  return <div>
    <header className="App-header">
        
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
}

export default Home