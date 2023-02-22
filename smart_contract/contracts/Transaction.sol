// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

<<<<<<< HEAD
contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
=======
//import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp,  string account, string keyword);
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
<<<<<<< HEAD
=======
        string account;
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc
        string keyword;
    }

    TransferStruct[] transactions;

<<<<<<< HEAD
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
=======
    function transfer(address payable receiver, uint amount, string memory message, string memory account, string memory keyword) public {
        transactionCount += 1;
        // adding transaction to array
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, account, keyword));
        // to transfer the amount we need to emit this event
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, account, keyword);

        receiver.transfer(amount);
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
<<<<<<< HEAD
}

//after making contract dploy it, in deploy.js
=======
}
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc
