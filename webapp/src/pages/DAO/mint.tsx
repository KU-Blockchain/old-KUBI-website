import React from "react";
import {ethers} from "ethers";


import Mint from "./NFTmetadata/testNFT.json"
import myNFT from "./ABI/NFT.json"



interface State{
  deployAddress: string;
  unlockTime: Date;
}
class mint extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      deployAddress: "",
      unlockTime: new Date(0)
    };
  }

async componentDidMount(){
if (window.ethereum) {

    const tokenURI = "ipfs://QmbcpTwZynEbtaBWWyEgfZ89hQpgEe3cvAQJgNg1Daj9LW"
    
    window.ethereum.request({method:'eth_requestAccounts'}).then(async (res: any) => {

        const address = res[0];
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const NFTaddress = "0x2B55E639d3191441651543D3A6b31e3FF0304b96"
        const NFTcontract = new ethers.Contract(NFTaddress,myNFT.abi , signer);
        console.log("check")

        let nftTxn = await NFTcontract.mintNFT(address, tokenURI)
        await nftTxn.wait()
        console.log(`NFT Minted! Check it out at: https://polygonscan.com/tx/${nftTxn.hash}`)



    
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
      </div>
    </>
  );
};
}

export default mint;