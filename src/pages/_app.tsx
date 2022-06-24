import "../styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { wallet, connectorsForWallets, RainbowKitProvider, Chain } from '@rainbow-me/rainbowkit';
import { chain, ChainProvider, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import React from "react";
import type { AppProps } from "next/app";
const infuraId  = process.env.ALCHEMY_ID;

const evmos: Chain = {
  id: 9001,
  name: 'Evmos',
  network: 'evmos',
  iconUrl: 'https://bafybeideiyj2cmucngncpasud7acdwug2b3uetck4qpkk7nveqqlvzs66a.ipfs.dweb.link/1_s5JqmQ9XsAJmb9sZkOKUFg.png',
  iconBackground: '#000',
  nativeCurrency: {
    decimals: 18,
    name: 'Evmos',
    symbol: 'EVMOS',
  },
  rpcUrls: {
    default: 'https://evmos-mainnet.gateway.pokt.network/v1/lb/62a98f3b123e6f00396a2714',
  },
  testnet: false,
}

const { chains, provider } = configureChains(
  [chain.mainnet, evmos],
  [
    jsonRpcProvider({ rpc: () => ({ http: 'https://evmos-mainnet.gateway.pokt.network/v1/lb/62a98f3b123e6f00396a2714' }) }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'EvmosWallets',
    wallets: [
      // wallet.injected({ chains }),
      wallet.walletConnect({ chains })
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>

    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
      </RainbowKitProvider>
    </WagmiConfig>
    </QueryClientProvider>

  );
}
