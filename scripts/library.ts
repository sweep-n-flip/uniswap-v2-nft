import hardhat from 'hardhat';
import { Contract, Signer } from 'ethers';

export async function initialize(): Promise<{ chainId: number, FROM: string, signer: Signer }> {
  const { chainId } = await hardhat.ethers.provider.getNetwork();
  console.log('chainId ' + chainId);

  const signers = await hardhat.ethers.getSigners();
  if (signers.length !== 1) throw new Error('panic');
  const [signer] = signers;
  if (signer === undefined) throw new Error('panic');
  const FROM = await signer.getAddress();
  console.log('FROM=' + FROM);

  return { chainId, FROM, signer };
}

export async function getGasPrice(): Promise<bigint> {
  return BigInt(String(await hardhat.ethers.provider.getGasPrice()));
}

export async function getBalance(address: string): Promise<bigint> {
  return BigInt(String(await hardhat.ethers.provider.getBalance(address)));
}

export async function getContractAt(name: string, address: string): Promise<Contract> {
  return await hardhat.ethers.getContractAt(name, address);
}

export async function deployContract(name: string, ...args: unknown[]): Promise<string> {
  const factory = await hardhat.ethers.getContractFactory(name);
  const contract = await factory.deploy(...args);
  await contract.deployed();
  return contract.address;
}

export async function verifyContract(address: string, contract: string, ...constructorArguments: unknown[]): Promise<boolean> {
  try {
    await hardhat.run('verify:verify', { address, contract, constructorArguments });
  } catch (e) {
    if (String(e).toLowerCase().indexOf('already verified') >= 0) return false;
    throw e;
  }
  return true;
}
