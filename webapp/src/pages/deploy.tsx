import React from "react";
import {ethers} from "ethers";


import lock  from "../artifacts/contracts/Lockf/Lock.json"



interface State{
  test: string;
}
class deploy extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      test: "",
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
      
      

        const LockT = new ethers.ContractFactory(lock.abi,lock.bytecode, signer );
        const Testcontract = await LockT.deploy(unlockTime, { value: lockedAmount })
      
        await Testcontract.deployed();

      
        console.log(`Lock with .001 MATIC and unlock timestamp ${unlockTime} deployed to ${Testcontract.address}`);
    
      });
  }else{
    alert("Web3 provider not found. Refresh with Metamask");
  }
}



render(){
  return (
    <>
      <div>
        Deploy
      </div> 
    </>
  );
};
}

export default deploy;
