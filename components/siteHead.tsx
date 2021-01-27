import Head from "next/head";

export default function SiteHead() {
  const title = "O.G. image";
  const description = "Imag(in)e an O.G.";
  const ogUrl = "https://ogimage.micahrl.com";
  const ogImage =
    "https://ogimage.micahrl.com/api/ogImage/og/production/preview/logo";

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
}
