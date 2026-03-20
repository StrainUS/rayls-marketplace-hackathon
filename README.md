# Rayls Marketplace Hackathon

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org/)
[![Rayls](https://img.shields.io/badge/Rayls-Testnet-purple)](https://testnet-explorer.rayls.com/)
[![WalletConnect](https://img.shields.io/badge/WalletConnect-v2-blue)](https://walletconnect.com/)

> **React frontend for the Rayls RWA NFT Marketplace**

Built by [StrainUS (Dr Strain)](https://github.com/StrainUS) — All Rights Reserved 2026

---

## What Is This?

This is the React frontend for the Rayls NFT marketplace. It connects to the FactureNFTQuantum smart contracts deployed on Rayls Testnet and allows users to mint, view, and trade invoice NFTs with quantum-resistant cryptographic proofs.

---

## Features

- Connect MetaMask or WalletConnect wallet
- View invoice NFTs with quantum proof verification
- Mint new invoice NFTs (owner only)
- Verify `quantumProof` on-chain for any token
- Real-time Rayls Testnet connection (Chain ID: 7295799)

---

## Quick Start
```bash
npm install
npm start
```

**Access:** http://localhost:3000

**Network configuration for MetaMask:**
- Network Name: Rayls Testnet
- RPC URL: https://testnet-rpc.rayls.com
- Chain ID: 7295799
- Symbol: USDr
- Explorer: https://testnet-explorer.rayls.com

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5 | Type safety |
| WalletConnect | v2 | Wallet connection |
| ethers.js | 6 | Blockchain interaction |
| Rayls Testnet | 7295799 | Target network |

---

## Ecosystem

| Component | Description | Link |
|---|---|---|
| RWA Protocol | Full Privacy Node + AI compliance | [rayls-hackathon-rwa-privacy](https://github.com/StrainUS/rayls-hackathon-rwa-privacy) |
| NFT Contracts | FactureNFTQuantum smart contracts | [FactureNFTQuantum](https://github.com/StrainUS/FactureNFTQuantum) |
| RLS Token | Deflationary ERC-20 on Rayls | [rayls-facture-hackathon-v2](https://github.com/StrainUS/rayls-facture-hackathon-v2) |
| MVP Foundry | Original invoice NFT MVP | [rayls-facture-hackathon](https://github.com/StrainUS/rayls-facture-hackathon) |

---

Copyright 2026 StrainUS (Dr Strain) — All Rights Reserved
