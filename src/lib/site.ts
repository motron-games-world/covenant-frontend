const network = process.env.NEXT_PUBLIC_STELLAR_NETWORK || 'testnet';
const defaultRpcUrl = network === 'mainnet' ? 'https://soroban.stellar.org' : 'https://soroban-testnet.stellar.org';

export const site = {
  name: 'Covenant',
  tagline: 'Milestone escrow for freelancers, secured on Stellar.',
  // Placeholder — the Covenant backend has not been deployed yet.
  apiUrl: (process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com').replace(/\/$/, ''),
  contractId: process.env.NEXT_PUBLIC_CONTRACT_ID || 'CCEEQECMQXMWPZYIT4QOKB2LM72IGXR3B4NE4H2NRRI4U3GRMO2I7KHA',
  network,
  rpcUrl: (process.env.NEXT_PUBLIC_STELLAR_RPC_URL || defaultRpcUrl).replace(/\/$/, ''),
  github: 'https://github.com/motron-games-world/covenant-frontend',
};

export const explorerUrl = `https://stellar.expert/explorer/${site.network}/contract/${site.contractId}`;
export const apiDocsUrl = `${site.apiUrl}/docs`;
