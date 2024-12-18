# Dev Vault

DeVault is a decentralized knowledge-sharing platform designed for developers to share insights, ask questions, and showcase best practices while earning rewards. Built on Hedera, DeVault combines transparency, security, and cost-efficiency to foster collaboration and incentivize contributions within the developer community

# Pre-requisites:

- Have a GitHub account: https://github.com/
- Install the HashPack wallet (browser extension): https://www.hashpack.app/
- Create a Hedera testnet account: https://portal.hedera.com/register

# Slides:

- [Vid Chat - vidchat.pdf](./slides/devault.pdf)

# Setup

- clone this repo: `https://github.com/Charitytina/DevVault.git`
- move to the directory: `cd DevVault`
- install packages: `npm install`
- add environment variables: see [Environment Variables](#environment-variables)
- Start application: `npm run dev`
- Open the server at: `http://localhost:5173/`

## Environment Variables

- Create a `.env` in the root directory of your project.
- Paste the following in the `.env` file:

```
VITE_MY_ACCOUNT_ID=<Your Hedera Account Id>
VITE_TOPIC_ID=0.0.5237924 # Leave as it is
VITE_COMMENTS_TOPIC_ID=0.0.5257265 # Leave as it is
VITE_ANSWERS_TOPIC_ID=0.0.5257270 # Leave as it is
VITE_TOKEN_ID=0.0.5259190 # Leave as it is
VITE_MY_PRIVATE_KEY=<Hedera Private key>
```

# Live Url

You can view this project live at: [Live url](https://dev-vault-seven.vercel.app/)
