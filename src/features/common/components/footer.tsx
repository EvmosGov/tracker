import config from "config";

const BETTER_LINKS = [
  {
    label: "Evmos App",
    link: config.site.url,
  },
  {
    label: "Documentation",
    link: config.site.externalLinks.docs,
  },

];

const EXTERNAL_LINKS = [
  {
    label: "Proposal Guidelines",
    link: config.site.url,
  },
  {
    label: "Governance",
    link: `https://github.com/${config.github.repoOwner}/${config.github.repoName}/issues/new/choose`,
  },
];

const SOCIAL_LINKS = [
  {
    label: "Discord",
    link: `https://discord.com/invite/${config.site.externalLinks.discord}`,
  },
  {
    label: "Twitter",
    link: `https://twitter.com/${config.site.externalLinks.twitter}`,
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto">
        <div className="border-gray-700 border-opacity-20 dark:border-zinc-800 border-b-2" />
        <div className="grid grid-cols-4 p-4 text-gray-500 dark:text-zinc-500">
          <div>
            Powered by{" "}
            <a href="https://betterhq.org/" target="_blank" rel="noreferrer">
              Evmos Vision
            </a>{" "}
            
          </div>
          <div>
            <div className="mb-2 font-medium uppercase">
              {config.site.projectName}
            </div>
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
          <div>
            <div className="mb-2 font-medium uppercase">EVMOS LINKS</div>
            <ul className="space-y-1">
              {BETTER_LINKS.map(({ label, link }) => (
                <li key={label}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>          
          <div>
            <div className="mb-2 font-medium uppercase">EVMOS SOCIAL</div>
            <ul className="space-y-1">
              {SOCIAL_LINKS.map(({ label, link }) => (
                <li key={label}>
                  <a href={link} target="_blank" rel="noreferrer">
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
