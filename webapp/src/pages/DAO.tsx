import React from "react";
import { ethers} from 'ethers';

//imports ABI and sets contract adress for KUBIX coin
const KUBIXAbi = require('../ABI/KUBI');
const KUBIXadress = "0x1D8630A8A34ae414c925ebF87FD27af66f3A52e8"



//interface for helping with making variables display on webpage. i think this can be done an easier way
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
    //checks if metamask is availibke
    if (window.ethereum) {

      //initalizes metamask provider
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      window.ethereum.request({method:'eth_requestAccounts'}).then(async (res: any) => {
          
          //gets account addrss
          const address = res[0];
          this.setState({ account: address });

          //gets balance of current network token
          const balance = await provider.getBalance(address);
          const balanceInEth = ethers.utils.formatEther(balance);
          this.setState(prevState => ({
                ...prevState,
                balance: balanceInEth
              }));
            })
            .catch((err: any) => console.log(err));
          
          // gets network account is on 
          const network = await provider.getNetwork();
          const networkName = network.name;
          this.setState({ Network: networkName });

          // gets balance of matic from DAO treasury contract
          const DAOBalance = await provider.getBalance("0xf191fe5a4332d27ea504b298b5db8595c830f4c6");
          const DAObalanceInEth = ethers.utils.formatEther(DAOBalance);
          this.setState({ DAO: DAObalanceInEth });
          
        
          // gets balance of KUBIX in current account
          const contract = new ethers.Contract(KUBIXadress, KUBIXAbi, provider);
          let balanceX = ((await contract.balanceOf((this.state.account)))/10**18).toString();
          this.setState({KUBIX: balanceX})
          
  
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
        Network coin Balance: {this.state.balance ||0}
    </div>
    <div>
        KUBIX Balance: {this.state.KUBIX || " switch to polygon network"}
    </div>
    <div>
        Network: {this.state.Network}
    </div>
    <div>
        Balance of the DAO: {this.state.DAO|| " switch to polygon network"}
    </div>

  </>
  ) 
};
}

export default DAO;