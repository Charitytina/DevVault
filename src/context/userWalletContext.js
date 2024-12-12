import { createContext } from "react";

export const userWalletContext = createContext({
  walletData: null,
  accountId: null,
  userProfile: null,
  connectWallet: () => {},
  // disconnectWallet: () => {},
});