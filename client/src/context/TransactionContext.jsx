  import React , {useEffect,UseState} from 'react';
  import {ethers} from 'ethers';
   import {contractABI, contractAddress} from '../utils/constants.js';

   export const TransactionContext = React.createContext();

   const {ethereum} = window;

// funstion to fetch ethereum contract
const getEthereumContract = ()=>{
  const provider  = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
    provider,signer,transactionContract
  });
}