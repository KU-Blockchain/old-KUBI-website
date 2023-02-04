import React from "react";
import {ethers} from "ethers";


import myNFT  from "../../ABI/NFT.json"



interface State{
  deployAddress: string;
  unlockTime: Date;
}
class NFT extends React.Component<{}, State> {
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

        const MyNFT = new ethers.ContractFactory(myNFT.abi,myNFT.bytecode, signer)
        const deployedNFT = await MyNFT.deploy()
        await deployedNFT.deployed()
        console.log("Contract deployed to address:", deployedNFT.address)
        this.setState({deployAddress: deployedNFT.address})




    
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
       URI 
      </div>
    </>
  );
};
}
export default NFT;