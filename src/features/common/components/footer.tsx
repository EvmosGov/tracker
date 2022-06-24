import config from "config";

const BETTER_LINKS = [
  {
    label: "Proposal Lifecycle",
    link: config.site.url,
  },
  {
    label: "Proposal Templates",
    link: config.site.externalLinks.docs,
  }
];

const EXTERNAL_LINKS = [
  {
    label: "Evmos Documentation",
    link: config.site.url,
  },
  {
    label: "Discussions",
    link: `https://github.com/${config.github.repoOwner}/${config.github.repoName}/issues/new/choose`,
  },
];

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="border-gray-100 dark:border-zinc-800 border-b-2" />
        <div className="grid grid-cols-3 p-4 text-gray-500 dark:text-zinc-500">
          <div>
            Powered by{" "}
            <a href="https://evmos.vision" target="_blank" rel="noreferrer">
              Evmos Vision
            </a>{" "}
            © 2022
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
            <div className="mb-2 font-medium uppercase">Docs</div>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
