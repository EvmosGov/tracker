import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Mobile } from "../components/mobile"
import ConnectWalletButton from "./connect-wallet-button";
import config from "config";
import Script from "next/script"
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
 
 <div
        id="sidebar"
        className={`flex flex-col bg-[#0b0a09] absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 p-4 transition-all duration-200 ease-in-out`}>
     {/* Sidebar header */}
     <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
      
          <span className="block">
           
            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 98.4" width="52px" height="32px" className="inline p-1"><g id="Layer_1-2"><path fill="#fcfaf7" className="cls-1" d="M61.46,3.28C34.15,13.81,31.65,40.76,23.82,53.35,15.9,66.09-2.25,73.12,.23,79.61c2.48,6.49,20.65-.48,35.03,3.66,14.21,4.09,34.03,22.45,61.34,11.92,13.91-5.36,23.98-16.4,28.62-29.47,.5-1.4-.43-2.9-1.91-3.04-.92-.09-1.8,.4-2.21,1.22-4.19,8.38-11.38,15.28-20.78,18.91-15.53,5.99-32.52,1.29-42.95-10.5-2.37-2.68-4.4-5.72-6-9.09-.44-.93-.86-1.87-1.23-2.84-.37-.97-.69-1.96-.98-2.94,8.21-3.84,17.68-7.91,28.42-12.05,10.53-4.06,20.11-7.35,28.64-9.98,5.77-1.78,11.06-3.26,15.84-4.47,.35-.09,.69-.17,1.03-.26,.72-.18,1.46,.21,1.73,.91h0c.16,.43,.29,.84,.44,1.26,.94,2.68,1.65,5.39,2.12,8.11,.21,1.19,1.5,1.84,2.56,1.26,3.92-2.11,7.51-4.17,10.71-6.16,11.94-7.38,18.56-13.65,17.2-17.19-1.36-3.55-10.45-3.75-24.24-1.22-4.38,.81-9.24,1.89-14.48,3.23-.91,.23-1.82,.47-2.75,.72-4.41,1.17-9.06,2.52-13.9,4.02-9,2.8-18.66,6.15-28.63,10-9.33,3.6-18.17,7.33-26.28,11.04-.1-15.77,9.4-30.68,24.92-36.66,9.4-3.62,19.35-3.33,28.04,.09,.86,.34,1.84,.1,2.46-.58,1-1.09,.7-2.83-.61-3.54C90.21-.65,75.37-2.08,61.46,3.28Z"/></g></svg>
            <span className="inline text-white font-medium text-xl align-middle tracking-wide">InterchainDAO</span>
          </span>
        </div>

        </div>

      
    
    
    </>

  );
}
