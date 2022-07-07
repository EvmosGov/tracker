import config from "config";

const EVMOS_LINKS = [
  {
    label: "Evmos App",
    link: "https://app.evmos.org/",
  },
  {
    label: "Documentation",
    link: "https://docs.evmos.org/",
  },
  {
    label: "Evmos Grants",
    link: "https://medium.com/evmos/announcing-evmos-grants-78aa28562db6",
  },

];

const EXTERNAL_LINKS = [
  {
    label: "Governance Overview",
    link: "https://docs.evmos.org/validators/governance/overview.html",
  },
  {
    label: "Commonwealth Discussions",
    link: "https://commonwealth.im/evmos/",
  },
  {
    label: "Evmos Governance Paradigm",
    link: "https://evmos.vision/articles/evmos-governance-problem-space",
  },
];

const SOCIAL_LINKS = [
  {
    label: "Discord",
    link: "https://discord.gg/evmos",
    icon: "fa-brands fa-discord"
  },
  {
    label: "Twitter",
    link: "https://twitter.com/EvmosOrg",
    icon: "fa-brands fa-twitter"
  },
  {
    label: "Telegram",
    link: "https://t.me/EvmosOrg",
    icon: "fa-brands fa-telegram"
  },
];

export function Footer() {
  return (
    <footer className="p-4 bg-gray-800 md:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 p-4 text-gray-500 dark:text-zinc-500 space-y-6">
          <div className="font-semibold text-gray-300 self-center md:font-medium md:text-gray-500">
            Powered by{" "}
            <a href="https://evmos.vision" target="_blank" rel="noreferrer">
              Evmos Vision
            </a>{" "}
            <hr className="hidden md:block w-1/3 my-4 opacity-10"/>
            <span className="hidden md:block md:text-xs">
            Shoutout to{" "}
            <a href="https://github.com/better-feedback" target="_blank" rel="noreferrer">
              BetterHQ ❤
            </a>{" "}
            </span>
          </div>
          <div className="self-start">
            <div className="mb-2 font-medium capitalize text-gray-400
md:text-gray-500">
              Governance Links
            </div>
            <hr className="w-2/3 my-4 opacity-25"/>
            <ul className="space-y-1">
              {EXTERNAL_LINKS.map(({ label, link }) => (
                <li key={label}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start">
            <div className="mb-2 font-medium capitalize text-gray-400
md:text-gray-500">Important Links</div>
            <hr className="w-2/3 my-4 opacity-25"/>
            <ul className="space-y-1">
              {EVMOS_LINKS.map(({ label, link }) => (
                <li key={label}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start">
            <div className="mb-2 font-medium capitalize text-gray-400
md:text-gray-500">Evmos Community</div>
            <hr className="w-2/3 my-4 opacity-25"/>
            <ul className="space-y-1">
              {SOCIAL_LINKS.map(({ label, link, icon }) => (
                <li key={label}>
                  <a href={link} target="_blank" rel="noreferrer">
                  <i className={`${icon} inline w-5 h-5 mr-2`}></i>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
