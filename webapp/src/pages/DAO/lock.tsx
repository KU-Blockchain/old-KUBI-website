import React from "react";
import {ethers} from "ethers";


import lockT  from "../../ABI/Lock.json"



interface State{
  deployAddress: string;
  unlockTime: Date;
}
class lock extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      deployAddress: "",
      unlockTime: new Date(0)
    };
  }

async componentDidMount(){
if (window.ethereum) {
    window.ethereum.request({method:'eth_requestAccounts'}).then(async (res: any) => {

        let provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();


        const currentTimestampInSeconds = Math.round(Date.now() / 1000);
        const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
      
        const lockedAmount = ethers.utils.parseEther(".001");
      
      

        const LockT = new ethers.ContractFactory(lockT.abi,lockT.bytecode, signer );
        const Testcontract = await LockT.deploy(unlockTime, { value: lockedAmount })
      
        await Testcontract.deployed();

      
        console.log(`Lock with .001 MATIC and unlock timestamp ${unlockTime} deployed to ${Testcontract.address}`);
        this.setState({deployAddress: Testcontract.address});

        var date = new Date(0);
        date.setUTCSeconds(unlockTime)
        this.setState({unlockTime: date})
    
      });
  }else{
    alert("Web3 provider not found. Refresh with Metamask");
  }
}



render(){
  return (
    <>
      <div>
        Deployed at address: {this.state.deployAddress|| " loading..."} 
      </div>
      <div>
        Can unlock at: {(this.state.unlockTime).toDateString()|| " loading..."}
      </div>
    </>
  );
};
}

export default lock;