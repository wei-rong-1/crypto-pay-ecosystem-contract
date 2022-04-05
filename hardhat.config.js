require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const getHDWallet = () => {
  const { MNEMONIC, PRIVATE_KEY } = process.env;
  if (PRIVATE_KEY && PRIVATE_KEY !== "") {
    return [PRIVATE_KEY]
  }
  if (MNEMONIC && MNEMONIC !== "") {
    return {
      mnemonic: MNEMONIC,
    }
  }
  throw Error("Private Key Not Set! Please set up .env");
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    local: {
      url: "http://localhost:7545",
      accounts: getHDWallet(),
    },
    cronos: {
      url: "https://cronos-testnet-3.crypto.org:8545/",
      chainId: 338,
      accounts: getHDWallet(),
    },
  },
  solidity: "0.8.4",
};
