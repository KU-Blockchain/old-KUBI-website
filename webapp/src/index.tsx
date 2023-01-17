import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./pages/App"
import "./index.css"

var Web3 = require('web3');
var provider = 'https://mainnet.infura.io/v3/065b20ab12ce427c8c9e0ac4f69731cb';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

web3.eth.getBlockNumber().then((result: any) => {
  console.log("Latest Ethereum Block is ",result);
});

if (typeof (window as any).ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
