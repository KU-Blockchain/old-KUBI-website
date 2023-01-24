import React from "react";
import { ethers } from 'ethers';

var ethBalance = "5"



var test = "metmask is installed"


if(window.ethereum){
  window.ethereum.request({method:'eth_requestAccounts'}).then((res: any)=>{console.log(res) })
}else{
  test = "install metamask extension or refresh with metamask launched"
}



const DAO = () => {
  return(
  <>
    <div>
      DAO test
    </div>
    <div>
    {test}
    </div>
  </>

  ) 
};

export default DAO;
