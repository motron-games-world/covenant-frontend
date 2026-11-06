# Covenant Frontend

[![CI](https://github.com/motron-games-world/covenant-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/motron-games-world/covenant-frontend/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Web app for **Covenant**, a milestone-based escrow protocol for freelance work on Stellar.
Clients and freelancers create engagements, fund escrow, release milestones, raise disputes
and build reputation — all driven by a Soroban smart contract, through the same REST API the
frontend consumes. Built with Next.js (App Router), React and plain CSS with automatic
light/dark themes.

Covenant is split across three repositories:

| Repo | Role |
| --- | --- |
| [covenant-contracts](https://github.com/motron-games-world/covenant-contracts) | Soroban smart contract — the source of truth for escrow state |
| [covenant-backend](https://github.com/motron-games-world/covenant-backend) | REST API mirroring the contract's state machine |
| **covenant-frontend** (this repo) | Web app for clients and freelancers |

## Contents

- [Pages](#pages)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Live

Live deployment: pending under new branding.

- Contract (Stellar testnet): [`CCZMIVUBMG5SBC47SDTC32RWLBJ2HW2DCFVWJEOKCH2IFJBZGBKTXK5W`](https://stellar.expert/explorer/testnet/contract/CCZMIVUBMG5SBC47SDTC32RWLBJ2HW2DCFVWJEOKCH2IFJBZGBKTXK5W)

## Pages

| Route | Description |
| --- | --- |
| `/` | Product landing page: how it works, features, live deployment details |
| `/contracts` | Escrow dashboard: create, fund, release, dispute, cancel and rate against the live API |
| `/reputation` | Freelancer reputation lookup |
| `/docs` | Product overview, architecture, lifecycle, usage, API and contract reference |

## Tech stack

- **Framework**: Next.js (App Router) + React, TypeScript throughout
- **Styling**: plain CSS with automatic light/dark themes (no CSS framework)
- **Wallet**: [Freighter](https://www.freighter.app/) via `@stellar/freighter-api`, transaction building/signing via `@stellar/stellar-sdk`
- **Testing**: Vitest + Testing Library, plus an internal-link checker (`scripts/check-links.mjs`) run as part of `npm test`
- **Offline**: a service worker (`public/sw.js`) caches static assets and provides a fallback `/offline` page

## Project structure

```
src/
├── app/            # Next.js routes (/, /contracts, /docs, /reputation, /status, /offline)
├── components/      # UI components, grouped by domain (escrow, milestones, disputes, wallet, ...)
├── contexts/        # React context providers (e.g. wallet session)
├── hooks/           # Shared hooks
└── lib/             # API client, Stellar helpers, formatting/export utilities
```

## Prerequisites

- Node.js >= 20
- A running instance of [covenant-backend](https://github.com/motron-games-world/covenant-backend) (or point `NEXT_PUBLIC_API_URL` at one)
- [Freighter](https://www.freighter.app/) browser extension, for wallet-signed actions

## Configuration

All optional, see `.env.example` (API URL default is a placeholder pending the new backend deployment):

| Variable | Default |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | `https://api.example.com` |
| `NEXT_PUBLIC_CONTRACT_ID` | `CCZMIVUBMG5SBC47SDTC32RWLBJ2HW2DCFVWJEOKCH2IFJBZGBKTXK5W` |
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` |

## Development

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint    # type check
npm test        # verifies internal links and runs the Vitest unit tests
npm run build
```

## Deployment

Deployed on Vercel (`vercel deploy --prod`).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow (fork, branch, `npm run lint && npm test && npm run build`, pull request).

## License

MIT — see [LICENSE](LICENSE).
