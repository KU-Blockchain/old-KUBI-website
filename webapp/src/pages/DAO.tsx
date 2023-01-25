import React from "react";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';


var ethBalance = "5"



var test = "metmask is installed"





let provider;

if (window.ethereum) {
  window.ethereum.request({method:'eth_requestAccounts'}).then((res: any) => {
    console.log(res);
    provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getNetwork().then(network => {
      console.log(`Connected to network: ${network.name}`);
    });
    provider.listAccounts().then((accounts) => {
      console.log(`Connected accounts: ${accounts}`);
    });
  }).catch((err: any) => console.log(err))
} else {
  console.log("Web3 provider not found. Refresh Metamask");
}






interface State {
  account: string;
  balance: string;
}

class DAO extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      account: "",
      balance: "",
    };
  }

  componentDidMount() {
    if (window.ethereum) {
      window.ethereum
        .request({method:'eth_requestAccounts'})
        .then(async (res: any) => {
          console.log(res);
          let provider = new ethers.providers.Web3Provider(
            window.ethereum
          );
          let address = res[0];
          this.setState({ account: address });
          console.log(address)
            
          const balance = await provider.getBalance(address);
          const balanceInEth = ethers.utils.formatEther(balance);
          
          console.log(balanceInEth);
              this.setState(prevState => ({
                ...prevState,
                balance: balanceInEth
              }));
            })
            .catch((err: any) => console.log(err));
        }
     else {
      console.log("Web3 provider not found");
    }
  }

render(){
  return(
  <>
    <div>
      DAO test
    </div>
    <div>
    {test}
    </div>
    <div>
        Account: {this.state.account}
    </div>
    <div>
        Balance: {this.state.balance ||0}
    </div>
    </>
  ) 
};
}

export default DAO;