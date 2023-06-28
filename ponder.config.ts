import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "mainnet", chainId: 1, rpcUrl: process.env.PONDER_RPC_URL_1 },
  ],
  contracts: [
    {
      name: "DydxGovernor",
      network: "mainnet",
      abi: "./abis/DydxGovernor.json",
      address: "0x7e9b1672616ff6d6629ef2879419aae79a9018d2",
      startBlock: 12816310,
    },
  ],
};
