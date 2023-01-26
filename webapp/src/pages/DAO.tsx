import React from "react";
import { ethers, Contract } from 'ethers';
import KUBIABI from "../ABI/KUBI.json";


const KUBIXadress = "0x1D8630A8A34ae414c925ebF87FD27af66f3A52e8"




interface State {
  account: string;
  balance: string;
  Network: string;
  DAO: string;
  KUBIX: string;
}

class DAO extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      account: "",
      balance: "",
      Network: "",
      DAO: "",
      KUBIX: "",
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

          const address = res[0];
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
          
        
          

          const contract = new Contract(KUBIXadress,KUBIABI, provider);
          const KUBIbalance = await contract.balanceOf(this.state.account);
          this.setState({ KUBIX: KUBIbalance });

       


            
  
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
    <div>
        KUBIX Balance: {this.state.KUBIX}
    </div>
    </>
  ) 
};
}

export default DAO;