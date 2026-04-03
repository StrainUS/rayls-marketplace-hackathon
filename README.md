# 🛡️ Dr Strain — Rayls RWA Marketplace

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](./LICENSE)
[![Network: Rayls Testnet](https://img.shields.io/badge/Network-Rayls_Testnet-purple)](https://rayls.com/)
[![Compliance: MiCA · Basel III](https://img.shields.io/badge/Compliance-MiCA_%C2%B7_Basel_III-blueviolet)](https://www.esma.europa.eu/regulation/crypto-assets)
[![AI: Claude Sonnet](https://img.shields.io/badge/AI-Claude_Sonnet-orange)](https://anthropic.com/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Stage: Hackathon](https://img.shields.io/badge/Stage-Hackathon-yellow)](https://github.com/StrainUS)

> **EthCC Cannes 2026 · Rayls & LimeChain Hackathon #2**  
> Built by [StrainUS (Dr Strain)](https://github.com/StrainUS)

---

## What Is This?

A **real-time RWA (Real World Asset) marketplace** built on the Rayls private blockchain ecosystem. Trade fractional ownership of institutional assets — corporate bonds, real estate tokens, invoice NFTs — with full MiCA and Basel III compliance enforced on-chain by an adversarial AI system.

## Key Features

- **🪙 Fractional RWA Trading** — Buy ERC-1155 fractions of tokenized real-world assets starting at €10
- **🤖 APoR Compliance** — Adversarial Proof-of-Reasoning: two AI agents debate every deal on-chain
- **🛡️ Contagion Monitor** — Real-time Basel III 25% sector concentration monitor blocks unsafe transactions
- **✅ MiCA Article 45** — Compliance certificates expire automatically, trading halts when expired
- **📊 Analytics Dashboard** — Live sector concentration charts and APoR activity feed

## Architecture

```
React Frontend (this repo)
    ↕ Wallet (MetaMask / WalletConnect)
Rayls Testnet (Chain 7295799)
    ├── PrivacyNodeRWA.sol    — Asset creation + ZK commitments
    ├── RWABridge.sol         — Cross-chain bridge with ZK verification
    └── L1RWAMarketplace.sol  — Public marketplace + AI provenance
```

## Quick Start

```bash
git clone https://github.com/StrainUS/rayls-marketplace-hackathon
cd rayls-marketplace-hackathon
cp .env.example .env        # Fill in your values
npm install
npm start                   # http://localhost:3000
```

## Related Repos

| Repo | Description |
|------|-------------|
| [rayls-hackathon-rwa-privacy](https://github.com/StrainUS/rayls-hackathon-rwa-privacy) | Smart contracts + AI backend (flagship) |
| [FactureNFTQuantum](https://github.com/StrainUS/FactureNFTQuantum) | Invoice NFT minting with quantum proofs |
| [rayls-facture-hackathon](https://github.com/StrainUS/rayls-facture-hackathon) | Foundry MVP contracts |

---

Built with ❤️ by StrainUS — All Rights Reserved 2026
