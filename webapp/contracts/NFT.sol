//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//ignore these errors it compiles fine
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract KUBIX{
    function balanceOf(address) public view virtual override returns (uint256){}
}

contract MyNFT is ERC721URIStorage, Ownable {
    
    KUBIX kubix;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNFT", "NFT") {}

    function Existing(address _t) public {
        
    }

    function checkUpkeep( bytes calldata) external view returns(bool upkeepNeeded, bytes memory){
       kubix = Deployed('0x1D8630A8A34ae414c925ebF87FD27af66f3A52e8');
       if(kubix.balanceOf(owner) == )

    }

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
