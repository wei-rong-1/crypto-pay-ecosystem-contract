// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./CryptoPayCollectable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoPayCollectableFactory is Ownable {
    CryptoPayCollectable[] private _collectables;

    event CryptoPayCollectableCreated(address tokenAddress);

    function createCollectable(string memory name, string memory symbol)
        public
        onlyOwner
        returns (address)
    {
        CryptoPayCollectable collectable = new CryptoPayCollectable(
            name,
            symbol
        );
        _collectables.push(collectable);

        emit CryptoPayCollectableCreated(address(collectable));

        return address(collectable);
    }

    function getCollectableByIndex(uint256 index)
        public
        view
        returns (address)
    {
        return address(_collectables[index]);
    }
}
