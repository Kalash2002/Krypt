<<<<<<< HEAD
require("@nomicfoundation/hardhat-toolbox");
=======

require('@nomiclabs/hardhat-waffle');
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
<<<<<<< HEAD
    goerli:{
      // this is http link from alchemy
      url:'https://eth-goerli.g.alchemy.com/v2/6WKJJ_jzkW3HWGXhfXRobZN1Y5jbF1CA',
      // this is private address of wallet
=======
    //
    goerli:{
      //http url from alchemy
      url:'https://eth-goerli.g.alchemy.com/v2/6WKJJ_jzkW3HWGXhfXRobZN1Y5jbF1CA',
      //private key from metamask
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc
      accounts:['69f4c78b052e3bc253c299026d8d8e169176a2c957266a6d57d6a48c26741674']
    }
  }
};
