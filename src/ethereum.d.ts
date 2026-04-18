/// <reference types="react-scripts" />

/** Minimal EIP-1193 provider for demos (MetaMask, etc.) */
interface EthereumProvider {
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
}

interface Window {
  ethereum?: EthereumProvider;
}
