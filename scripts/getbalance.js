const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/jharkhand.sol/jharkhand.json");

const tokenAddress = "0xCC1DdC137278fbD4c8735EcBf9Ee0268576BB73b"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x05865dCbFa4C8Bbb6351f4c5663bDF334DA7CeC7"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
