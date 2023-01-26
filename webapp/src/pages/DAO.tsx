import React from "react";
import { ethers } from 'ethers';




interface State {
  account: string;
  balance: string;
  Network: string;
  DAO: string;
}

class DAO extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      account: "",
      balance: "",
      Network: "",
      DAO: "",
    };
  }

  async componentDidMount() {
    if (window.ethereum) {
      let provider = new ethers.providers.Web3Provider(
        window.ethereum
      );
      window.ethereum
        .request({method:'eth_requestAccounts'})
        .then(async (res: any) => {
          console.log(res);

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
          
          const network = await provider.getNetwork();
          const networkName = network.name;
          this.setState({ Network: networkName });

          const DAOBalance = await provider.getBalance("0xf191fe5a4332d27ea504b298b5db8595c830f4c6");
          const DAObalanceInEth = ethers.utils.formatEther(DAOBalance);
          this.setState({ DAO: DAObalanceInEth });
            
  
        }
     else {
      alert("Web3 provider not found. Refresh with Metamask");
    }
  }

render(){
  return(
  <>
    <div>
      DAO test
    </div>
    <div>
        Account: {this.state.account}
    </div>
    <div>
        Balance: {this.state.balance ||0}
    </div>
    <div>
        Network: {this.state.Network}
    </div>
    <div>
        DAO Balance: {this.state.DAO}
    </div>
    </>
  ) 
};
}

export default DAO;