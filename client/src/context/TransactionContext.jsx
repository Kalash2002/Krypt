// in this file we are creating a context to call blockchain an to interact with webpage

import React,{useEffect,useState} from "react";
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);


    console.log({
        provider,
        signer,
        transactionContract
    })
}
 // need to wrap main.jsx with TransactionProvider s0 that what value we are going
 // to pass in this it can be access by the whole react components
export const TransactionProvider = ({children})=>{

    const [connectedAccount,setConnectedAccount] = useState('');

    const  checkIfWalletIsConnected = async ()=>{
        if(!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({method:'eth_accounts'});
        console.log(accounts);
    }

    // function to connect wallet
    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
          // using this we can all the accounts available
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
          // we are choosing recent account
          setCurrentAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);

          throw new Error("No ethereum object");
        }
      };

    useEffect(()=>{
        checkIfWalletIsConnected();
    },[]);

    return(
        <TransactionContext.Provider value={{value:'test'}}>
            {children}
        </TransactionContext.Provider>
    )
}