require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      // this is http link from alchemy
      url:'https://eth-goerli.g.alchemy.com/v2/6WKJJ_jzkW3HWGXhfXRobZN1Y5jbF1CA',
      // this is private address of wallet
      accounts:['69f4c78b052e3bc253c299026d8d8e169176a2c957266a6d57d6a48c26741674']
    }
  }
};
