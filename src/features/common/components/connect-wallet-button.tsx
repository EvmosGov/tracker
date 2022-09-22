import React from "react";
import { useRouter } from "next/router";
import Button from "./button";
import SelectChainModal from "./select-chain-modal";
import ChainIcon from "./chain-icon";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import {
  useWalletChainQuery,
  useWalletSignedInAccountQuery,
  useWalletSignInMutation,
  useWalletSignOutMutation,
} from "../hooks/useWalletQueries";
import config from "config";

export default function ConnectWalletButton() {
  const router = useRouter();

  const [isSelectChainModalOpen, setIsSelectChainModalOpen] =
    React.useState(false);

  const walletChainQuery = useWalletChainQuery();
  const signedInAccountQuery = useWalletSignedInAccountQuery();
  const signInMutation = useWalletSignInMutation();
  const signOutMutation = useWalletSignOutMutation();

  async function handleSelectChain(chain: string) {
    signInMutation.mutate(chain);
  }

  async function handleDisconnectWallet() {
    let path = window.location.pathname;
    if (path.includes("add-bounty")) {
      router.replace(`/issues/${path.split("/")[2]}`);
    }

    setTimeout(() => {
      signOutMutation.mutate();
    }, 1000);
  }

  if (walletChainQuery.data && signedInAccountQuery.data) {
    return (
      <div className="flex flex-row items-center">
        <div className="mr-4 flex flex-row items-center">
          <ChainIcon
            size={20}
            chainName={walletChainQuery.data}
            className="dark:fill-current dark:text-white fill-zinc-900"
          />
          <div className="ml-2">{signedInAccountQuery.data}</div>
        </div>
        <Button type="secondary" onClick={handleDisconnectWallet}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <>
<ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={() => setIsSelectChainModalOpen(true)} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                    
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                            
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
          <SelectChainModal
        isOpen={isSelectChainModalOpen}
        onClose={() => setIsSelectChainModalOpen(false)}
        onSelectChain={handleSelectChain}
        enabledChains={config.site.enabledChains}
      />
    </>
  );
}
