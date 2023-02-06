import React from "react";





function deploy() {
  return (
    <>
    <div> 
        <a href= "deploy/lock">
          <button>
            Lock Contract
          </button>
        </a>
    </div>
    <div> 
      ONLY USE THIS if deploying new contract. use mint to get NFT 
        <a href= "deploy/NFT">
          <button>
            NFT Contract
          </button>
        </a>
    </div>
    <div> 
        <a href= "deploy/mint">
          <button>
            NFT Mint
          </button>
        </a>
    </div>
    </>
  );
};


export default deploy;
