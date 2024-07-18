import Head from "next/head";

const MetaData = ({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url?: string;
  image: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={url} /> */}
      {/* <meta property="og:image" content={image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Head>
  );
};

MetaData.defaultProps = {
  title: "3thos.xyz",
  description: " 0-to-1 for web 3 teams",
  // url: "https://projectsolo.xyz/",
  image: "/img/cover.jpg",
};

export default MetaData;
