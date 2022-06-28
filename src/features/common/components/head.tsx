import Head from "next/head";
import config from "config";

type Props = {
  title?: string;
  metaDescription?: string;
};

export function CustomHead(props: Props) {
  return (
    <Head>

      {/* Primary Meta Tags */}
      <title>
        {props.title ? `${props.title} | ` : ""}
        {config.site.title}
      </title>
      <meta name="title" content={config.site.title}/>
      <meta name="description" content={config.site.metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="image" content="/card.png" />
      <meta itemProp="image" content="/card.png" />
      <meta name="twitter:image" content="/card.png" />
      <meta property="og:image" content="/card.png" />

      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}

export default CustomHead;
