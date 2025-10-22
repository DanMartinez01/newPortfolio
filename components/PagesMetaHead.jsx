import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:site_name"
        content="Daniela Martinez - Full-Stack Developer"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Author */}
      <meta name="author" content="Daniela Martinez" />

      {/* Theme color */}
      <meta name="theme-color" content="#1a1a1a" />

      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Daniela Martinez | Full-Stack Developer",
  keywords:
    "Daniela Martinez, Full-Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development, Frontend, Backend, Portfolio, ESL Teacher turned Developer",
  description:
    "Full-Stack Developer & former ESL teacher passionate about creating beautiful, functional web applications. Specialized in React, Next.js, and modern web technologies.",
};

export default PagesMetaHead;
