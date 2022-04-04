// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // const CryptoPayCollectable = await hre.ethers.getContractFactory("CryptoPayCollectable");
  // const cryptoPayCollectable = await CryptoPayCollectable.deploy("Crypto Pay Collectable", "CPC");

  // await cryptoPayCollectable.deployed();

  // console.log("CryptoPayCollectable deployed to:", cryptoPayCollectable.address);

  const CryptoPayCollectableFactory = await hre.ethers.getContractFactory("CryptoPayCollectableFactory");
  const factory = await CryptoPayCollectableFactory.deploy();

  await factory.deployed();

  console.log("CryptoPayCollectableFactory deployed to:", factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
