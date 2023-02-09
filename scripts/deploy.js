// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const VetmeToken = await hre.ethers.getContractFactory("VetmeToken");
  const vetmeToken = await VetmeToken.deploy(100000000, 50);

  await vetmeToken.deployed();

  console.log("Vetme Token deployed: ", vetmeToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
