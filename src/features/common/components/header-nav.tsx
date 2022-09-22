import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectWalletButton from "./connect-wallet-button";
import { Mobile } from "../components/mobile"
import { useAccount, useNetwork } from 'wagmi'
import { useEffect } from "react";
import {
  useWalletChainQuery,
  useWalletSignedInAccountQuery,
  useWalletSignInMutation,
  useWalletSignOutMutation,
} from "../hooks/useWalletQueries";
import router from 'next/router';


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


export default function HeaderNav() {
  const { chain, chains } = useNetwork()
  const { isDisconnected } = useAccount()
  const walletChainQuery = useWalletChainQuery();
  const signedInAccountQuery = useWalletSignedInAccountQuery();
  const signInMutation = useWalletSignInMutation();
  const signOutMutation = useWalletSignOutMutation();
  const { data: walletChain = chain?.network } = useWalletChainQuery();

  // Removing the wallet from local storage when the user disconnects it (Polygon only)
  useEffect(() => {
    const localStorageWallet = localStorage.getItem("wallet-chain")

    if (isDisconnected && localStorageWallet === "evmostestnet") {
      localStorage.removeItem('wallet-chain')
    }
  }, [isDisconnected])




  
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
  

  return (
    <>
    <header className="shadow-md bg-gray-800 ">
      <nav className="relative container mx-auto">
        <div className="p-6 flex items-center bg-gray-800">
          <a className="flex-shrink-0 mr-12 text-2xl text-white font-semibold" href="/" data-config-id="brand">
            <img className="h-6" src="/logo.png" alt="" width="auto" />
          </a>
          <ul className="hidden xl:flex xl:flex-auto xl:justify-start">
            <li>
              <a className="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm" href="#">
                <svg className="text-gray-500 w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9066 3.12886C14.9005 3.12235 14.8987 3.1137 14.8923 3.10734C14.8859 3.10098 14.8771 3.09905 14.8706 3.0929C13.3119 1.53919 11.2008 0.666748 8.99996 0.666748C6.79914 0.666748 4.68807 1.53919 3.12935 3.0929C3.12279 3.09905 3.11404 3.10093 3.10763 3.10734C3.10122 3.11375 3.09944 3.12234 3.09334 3.12886C1.93189 4.29587 1.14217 5.7808 0.823851 7.39621C0.505534 9.01163 0.672885 10.6851 1.30478 12.2055C1.93668 13.7259 3.00481 15.0251 4.37435 15.939C5.7439 16.8529 7.35348 17.3406 8.99996 17.3406C10.6464 17.3406 12.256 16.8529 13.6256 15.939C14.9951 15.0251 16.0632 13.7259 16.6951 12.2055C17.327 10.6851 17.4944 9.01163 17.1761 7.39621C16.8578 5.7808 16.068 4.29587 14.9066 3.12886ZM8.99992 15.6667C8.00181 15.6664 7.01656 15.4415 6.11714 15.0088C5.21773 14.576 4.42719 13.9465 3.80409 13.1667H7.15015C7.38188 13.4287 7.66662 13.6385 7.98551 13.7821C8.3044 13.9258 8.65017 14.0001 8.99992 14.0001C9.34968 14.0001 9.69544 13.9258 10.0143 13.7821C10.3332 13.6385 10.618 13.4287 10.8497 13.1667H14.1958C13.5727 13.9465 12.7821 14.576 11.8827 15.0088C10.9833 15.4416 9.99804 15.6664 8.99992 15.6667ZM8.16659 11.5001C8.16659 11.3353 8.21546 11.1741 8.30703 11.0371C8.3986 10.9001 8.52875 10.7933 8.68102 10.7302C8.83329 10.6671 9.00085 10.6506 9.1625 10.6828C9.32415 10.7149 9.47263 10.7943 9.58918 10.9108C9.70572 11.0274 9.78509 11.1759 9.81724 11.3375C9.8494 11.4992 9.83289 11.6667 9.76982 11.819C9.70675 11.9713 9.59994 12.1014 9.4629 12.193C9.32586 12.2845 9.16474 12.3334 8.99992 12.3334C8.77898 12.3332 8.56714 12.2453 8.41091 12.0891C8.25468 11.9329 8.16681 11.721 8.16659 11.5001ZM15.1751 11.5018L15.1665 11.5001H11.4999C11.4983 10.9848 11.3373 10.4826 11.0389 10.0624C10.7405 9.64231 10.3193 9.32485 9.83325 9.15364V6.50008C9.83325 6.27907 9.74546 6.06711 9.58918 5.91083C9.4329 5.75455 9.22093 5.66675 8.99992 5.66675C8.77891 5.66675 8.56695 5.75455 8.41067 5.91083C8.25439 6.06711 8.16659 6.27907 8.16659 6.50008V9.15364C7.68054 9.32485 7.25939 9.64231 6.96098 10.0624C6.66256 10.4826 6.50151 10.9848 6.49992 11.5001H2.83334L2.82474 11.5018C2.60799 10.967 2.46221 10.4061 2.39114 9.83341H3.16659C3.3876 9.83341 3.59956 9.74562 3.75584 9.58934C3.91212 9.43306 3.99992 9.2211 3.99992 9.00008C3.99992 8.77907 3.91212 8.56711 3.75584 8.41083C3.59956 8.25455 3.3876 8.16675 3.16659 8.16675H2.39114C2.54005 6.98222 3.00621 5.85993 3.74037 4.91851L4.28597 5.46411C4.36335 5.54149 4.4552 5.60286 4.5563 5.64474C4.65739 5.68661 4.76574 5.70816 4.87517 5.70816C4.98459 5.70816 5.09294 5.68661 5.19404 5.64474C5.29513 5.60286 5.38699 5.54148 5.46436 5.46411C5.54173 5.38674 5.60311 5.29488 5.64498 5.19379C5.68686 5.09269 5.70841 4.98434 5.70841 4.87492C5.70841 4.76549 5.68686 4.65714 5.64498 4.55605C5.60311 4.45495 5.54173 4.3631 5.46435 4.28572L4.91881 3.74017C5.86016 3.00626 6.98227 2.54022 8.16659 2.3913V3.16675C8.16659 3.38776 8.25439 3.59972 8.41067 3.756C8.56695 3.91228 8.77891 4.00008 8.99992 4.00008C9.22093 4.00008 9.4329 3.91228 9.58918 3.756C9.74546 3.59972 9.83325 3.38776 9.83325 3.16675V2.3913C11.0176 2.54022 12.1397 3.00626 13.081 3.74017L12.5355 4.28572C12.3792 4.44199 12.2914 4.65393 12.2914 4.87492C12.2914 5.09591 12.3792 5.30785 12.5355 5.46411C12.6917 5.62037 12.9037 5.70816 13.1247 5.70816C13.3457 5.70816 13.5576 5.62038 13.7139 5.46411L14.2595 4.91851C14.9936 5.85993 15.4598 6.98222 15.6087 8.16675H14.8333C14.6122 8.16675 14.4003 8.25455 14.244 8.41083C14.0877 8.56711 13.9999 8.77907 13.9999 9.00008C13.9999 9.2211 14.0877 9.43306 14.244 9.58934C14.4003 9.74562 14.6122 9.83341 14.8333 9.83341H15.6087C15.5376 10.4061 15.3919 10.967 15.1751 11.5018Z" fill="currentColor"></path>
                </svg>
                <span data-config-id="link1">Dashboard</span>
              </a>
            </li>
            <li>
              <a className="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm" href="https://docs.evmos.community">
                <svg className="text-gray-500 w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00017 0.666748C4.41684 0.666748 0.66684 4.41675 0.66684 9.00008C0.66684 13.5834 4.41684 17.3334 9.00017 17.3334C13.5835 17.3334 17.3335 13.5834 17.3335 9.00008C17.3335 4.41675 13.5835 0.666748 9.00017 0.666748ZM2.58351 10.6667C2.41684 10.0834 2.33351 9.58342 2.33351 9.00008C2.33351 8.41675 2.41684 7.91675 2.58351 7.33342H4.16684C4.00017 8.41675 4.00017 9.58342 4.16684 10.6667H2.58351ZM3.25017 12.3334H4.41684C4.58351 13.0834 4.83351 13.8334 5.25017 14.5001C4.41684 13.9167 3.75017 13.1667 3.25017 12.3334ZM4.41684 5.66675H3.25017C3.75017 4.83342 4.41684 4.08342 5.25017 3.50008C4.83351 4.16675 4.58351 4.91675 4.41684 5.66675ZM8.16684 15.4167C7.16684 14.6667 6.41684 13.5834 6.16684 12.3334H8.16684V15.4167ZM8.16684 10.6667H5.75017C5.66684 10.0834 5.66684 9.58342 5.66684 9.00008C5.66684 8.41675 5.66684 7.91675 5.75017 7.33342H8.16684V10.6667ZM8.16684 5.66675H6.16684C6.41684 4.41675 7.16684 3.33342 8.16684 2.58341V5.66675ZM14.7502 5.66675H13.5835C13.4168 4.91675 13.1668 4.16675 12.7502 3.50008C13.5835 4.08342 14.2502 4.83342 14.7502 5.66675ZM9.83351 2.58341C10.8335 3.33342 11.5835 4.41675 11.8335 5.66675H9.83351V2.58341ZM9.83351 15.4167V12.3334H11.8335C11.5835 13.5834 10.8335 14.6667 9.83351 15.4167ZM12.2502 10.6667H9.83351V7.33342H12.2502C12.3335 8.41675 12.3335 9.58342 12.2502 10.6667ZM12.8335 14.5001C13.1668 13.8334 13.4168 13.0834 13.6668 12.3334H14.8335C14.2502 13.1667 13.5835 13.9167 12.8335 14.5001ZM13.9168 10.6667C14.0835 9.58342 14.0835 8.41675 13.9168 7.33342H15.5002C15.8335 8.41675 15.8335 9.58342 15.5002 10.6667H13.9168Z" fill="currentColor"></path>
                </svg>
                <span data-config-id="link2">Governance Docs</span>
              </a>
            </li>

            <li>
              <a className="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm" href="#">
                <svg className="text-gray-500 w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33335 9.83342H1.50002C1.27901 9.83342 1.06704 9.92121 0.910765 10.0775C0.754484 10.2338 0.666687 10.4457 0.666687 10.6667V16.5001C0.666687 16.7211 0.754484 16.9331 0.910765 17.0893C1.06704 17.2456 1.27901 17.3334 1.50002 17.3334H7.33335C7.55437 17.3334 7.76633 17.2456 7.92261 17.0893C8.07889 16.9331 8.16669 16.7211 8.16669 16.5001V10.6667C8.16669 10.4457 8.07889 10.2338 7.92261 10.0775C7.76633 9.92121 7.55437 9.83342 7.33335 9.83342ZM6.50002 15.6667H2.33335V11.5001H6.50002V15.6667ZM16.5 0.666748H10.6667C10.4457 0.666748 10.2337 0.754545 10.0774 0.910826C9.92115 1.06711 9.83335 1.27907 9.83335 1.50008V7.33342C9.83335 7.55443 9.92115 7.76639 10.0774 7.92267C10.2337 8.07895 10.4457 8.16675 10.6667 8.16675H16.5C16.721 8.16675 16.933 8.07895 17.0893 7.92267C17.2456 7.76639 17.3334 7.55443 17.3334 7.33342V1.50008C17.3334 1.27907 17.2456 1.06711 17.0893 0.910826C16.933 0.754545 16.721 0.666748 16.5 0.666748ZM15.6667 6.50008H11.5V2.33341H15.6667V6.50008ZM16.5 9.83342H10.6667C10.4457 9.83342 10.2337 9.92121 10.0774 10.0775C9.92115 10.2338 9.83335 10.4457 9.83335 10.6667V16.5001C9.83335 16.7211 9.92115 16.9331 10.0774 17.0893C10.2337 17.2456 10.4457 17.3334 10.6667 17.3334H16.5C16.721 17.3334 16.933 17.2456 17.0893 17.0893C17.2456 16.9331 17.3334 16.7211 17.3334 16.5001V10.6667C17.3334 10.4457 17.2456 10.2338 17.0893 10.0775C16.933 9.92121 16.721 9.83342 16.5 9.83342ZM15.6667 15.6667H11.5V11.5001H15.6667V15.6667ZM7.33335 0.666748H1.50002C1.27901 0.666748 1.06704 0.754545 0.910765 0.910826C0.754484 1.06711 0.666687 1.27907 0.666687 1.50008V7.33342C0.666687 7.55443 0.754484 7.76639 0.910765 7.92267C1.06704 8.07895 1.27901 8.16675 1.50002 8.16675H7.33335C7.55437 8.16675 7.76633 8.07895 7.92261 7.92267C8.07889 7.76639 8.16669 7.55443 8.16669 7.33342V1.50008C8.16669 1.27907 8.07889 1.06711 7.92261 0.910826C7.76633 0.754545 7.55437 0.666748 7.33335 0.666748ZM6.50002 6.50008H2.33335V2.33341H6.50002V6.50008Z" fill="currentColor"></path>
                </svg>
                <span data-config-id="link5">Analytics</span>
              </a>
            </li>
          </ul>

          <div className="hidden xl:flex lg:justify-end lg:items-center lg:space-x-6 mr-6 ml-auto">
            <div className="flex items-center">
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
                  <button onClick={openConnectModal} type="button">
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
            </div>
          </div>
          <div className="ml-auto flex xl:hidden">
            <button className="navbar-burger flex items-center rounded focus:outline-none">
              <svg className="text-gray-500 bg-neutral-content hover:bg-neutral block h-8 w-8 p-2 rounded" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    <Mobile />

    </>

  );
}
