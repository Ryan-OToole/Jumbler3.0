//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.13;

// import "hardhat/console.sol";

contract Jumbler {

    string public poem;
    string[] public poems;
    address public user;
    mapping(address => string[]) userToPoemsMap;

    function showPoem() public view returns (string memory) {
        return poem;
    }

    function setPoem(string memory _poem) public {
        user = msg.sender;
        poem = _poem;
        userToPoemsMap[user].push(poem);
        poems.push(poem);
    }


    function getAllPoems() public view returns (string[] memory) {
        return poems;
    }

    function getUsersPoems() public view returns(string[] memory) {
        return userToPoemsMap[msg.sender];
    }
}