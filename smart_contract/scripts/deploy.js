const main = async () => {
<<<<<<< HEAD
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
=======
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions address: ", transactions.address);
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

<<<<<<< HEAD
runMain();

// after deploying go and attach wallet in hardhat.config.js
=======
runMain();
>>>>>>> 38597e892e81a05992854396d8a370b3b6175fbc
