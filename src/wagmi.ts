import { configureChains, createClient } from "wagmi";
import { arbitrum, arbitrumGoerli, foundry, optimism, optimismGoerli } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

/**
 * Tell wagmi which chains you want to support
 * To add a new chain simply import it and add it here
 * @see https://wagmi.sh/react/providers/configuring-chains
 */
const { chains, provider, webSocketProvider } = configureChains(
  [optimism, optimismGoerli, foundry, arbitrum, arbitrumGoerli],
  [
     alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY! }),
 
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === foundry.id) {
          return { http: "http://localhost:8545" };
        }
        return { http: chain.rpcUrls.default.http[0] };
      },
    }),
  ],
);


export { chains };

/**
 * Configures wagmi connectors for rainbowkit
 * @see https://www.rainbowkit.com/docs/custom-wallet-list
 * @see https://wagmi.sh/react/connectors
 */
const { connectors } = getDefaultWallets({
  appName:
    "Optimism attestation station + Forge + Wagmi + RainbowKit + Vite App",
  chains,
});

/**
 * Creates a singleton wagmi client for the app
 * @see https://wagmi.sh/react/client
 */
export const client = createClient({
  autoConnect: true,
  connectors: connectors,
  provider,
  webSocketProvider,
});
