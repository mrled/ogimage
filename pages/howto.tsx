import React from "react";
import { OgImage } from "components/logo";
import SiteHead from "components/siteHead";
import { ExternalLink, InternalLink } from "components/blueLinks";
import { CodeBlock, InlineCode } from "components/code";
import { OgImageUrlTable } from "components/ogImageUrlTable";

const exampleKnownHostsObj = `
const oneWeekInSecs = 60 * 60 * 24 * 7;
const KnownSites: KnownSitesType = {
  exampleSite: {
    production: {
      baseUri: "https://www.example.com",
      scaleFactor: 1,
      cacheControl: "s-maxage=\${oneWeekInSecs}, immutable, public",
    },
    staging: {
      baseUri: "https://staging.example.com",
      scaleFactor: 1,
      cacheControl: "s-maxage=\${oneWeekInSecs}, immutable, public",
    },
  },
}
`;

const exampleOgImageBaseUri = "https://ogimageexample.youraccount.vercel.app";

export default function Home() {
  const liClasses = "my-5";
  return (
    <>
      <SiteHead />
      <main className="py-8 px-12 md:px-20 md:max-w-3xl text-sm md:text-base">
        <h1 className="text-2xl my-8">
          How do I use{" "}
          <InternalLink href="/">
            <OgImage />
          </InternalLink>
          ?
        </h1>
        <p className="my-4">
          <ol className="list-decimal m-4">
            <li className={liClasses}>
              For the app you want to generate <InlineCode>og:image</InlineCode>{" "}
              previews for, make a page that contains the preview data. For
              instance, <OgImage /> itself has an example preview of its own{" "}
              <InlineCode>og:image</InlineCode> at{" "}
              <InternalLink href="/preview/logo">
                <InlineCode>/preview/logo</InlineCode>
              </InternalLink>
              . It should contain only what you want to appear in the{" "}
              <InlineCode>og:image</InlineCode>, in a roughly 1200x675 pixel
              window. <OgImage /> will open this page in a headless browser and
              screenshot it.
            </li>
            <li className={liClasses}>
              {" "}
              Fork <OgImage /> and modify{" "}
              <ExternalLink href="https://github.com/mrled/ogimage/blob/master/lib/knownSites.ts">
                <InlineCode>knownSites.ts</InlineCode>
              </ExternalLink>{" "}
              to include your site. The <InlineCode>KnownSites</InlineCode>{" "}
              object in that file contains a list of sites by name, then by
              environment. You should set the scaleFactor to 1 at first, and
              read{" "}
              <ExternalLink href="https://vercel.com/docs/edge-network/headers#cache-control-header">
                the Vercel documentation on the Cache-Control header
              </ExternalLink>{" "}
              to set the value of cacheControl. Here's an example{" "}
              <InlineCode>KnownSites</InlineCode> object:
              <CodeBlock>{exampleKnownHostsObj}</CodeBlock>
            </li>
            <li className={liClasses}>
              Deploy your <OgImage /> fork to Vercel. Make note of the URL that
              it is deployed to, e.g.{" "}
              <span className="break-all">
                <InlineCode>{exampleOgImageBaseUri}</InlineCode>
              </span>
              . You can also deploy to a custom domain.
            </li>
            <li className={liClasses}>
              On the app you want to generate <InlineCode>og:image</InlineCode>{" "}
              preview for, set its <InlineCode>og:image</InlineCode> to
              something like this:{" "}
              <span className="break-all">
                <InlineCode>
                  {exampleOgImageBaseUri}
                  /api/ogImage/exampleSite/production/path/to/your/preview/endpoint
                </InlineCode>
              </span>
              <OgImageUrlTable
                ogImageUri={exampleOgImageBaseUri}
                siteName="exampleSite"
                environment="production"
                urlSubPath="path/to/your/preview/endpoint"
              />
            </li>
          </ol>

          <h2 className="text-2xl my-8">Examples</h2>
          <ul>
            <li className={liClasses}>
              For example, as mentioned above, <OgImage /> itself has a page for
              its own preview at{" "}
              <InternalLink href="/preview/logo">
                <InlineCode>/preview/logo</InlineCode>
              </InternalLink>
              . That link is a page containing a regular React component. It
              also knows about itself in <InlineCode>KnownSites</InlineCode>,
              with a site name of <InlineCode>og</InlineCode> and an environment
              called <InlineCode>production</InlineCode>. Thus, it can generate
              an <InlineCode>og:image</InlineCode> for itself by going to{" "}
              <span className="break-all">
                <ExternalLink href="https://ogimage.micahrl.com/api/ogImage/og/production/preview/logo" />
              </span>
              .
              <OgImageUrlTable
                ogImageUri="https://ogimage.micahrl.com"
                siteName="og"
                environment="production"
                urlSubPath="preview/logo"
              />
            </li>
            <li className={liClasses}>
              For a more complicated example, see my app{" "}
              <ExternalLink href="https://biblemunger.micahrl.com">
                biblemunger
              </ExternalLink>
              . It has a page with a dynamic route that renders a single munged
              verse (meaning, a single verse with a text replacement applied).
              For example,{" "}
              <ExternalLink href="https://biblemunger.micahrl.com/munge/wine/whiteclaws/49-5-18">
                here is one of my favorites
              </ExternalLink>
              . That URL is intended for users, and has buttons, a page header,
              etc. Biblemunger also has a preview page with a dynamic route that
              renders just the munged verse, without buttons or page header; the
              preview page for the above example is{" "}
              <ExternalLink href="https://biblemunger.micahrl.com/preview/munge/wine/whiteclaws/49-5-18">
                here
              </ExternalLink>
              . Since biblemunger is known to <OgImage />, it can set an{" "}
              <InlineCode>og:image</InlineCode> tag to{" "}
              <span className="break-all">
                <ExternalLink href="https://ogimage.micahrl.com/api/ogImage/biblemunger/production/preview/munge/wine/whiteclaws/49-5-18" />
              </span>
              , which looks like this in tabular form:
              <OgImageUrlTable
                ogImageUri="https://ogimage.micahrl.com"
                siteName="biblemunger"
                environment="production"
                urlSubPath="preview/munge/wine/whiteclaws/49-5-18"
              />{" "}
            </li>
          </ul>

          <h2 className="text-2xl my-8">Beware</h2>
          <p className="my-4">
            Do note that Vercel{" "}
            <ExternalLink href="https://twitter.com/vercel_support/status/1354414827939106821?s=20">
              doesn't recommend using <InlineCode>puppeteer</InlineCode>
            </ExternalLink>{" "}
            on its serverless Functions platform, and <OgImage /> uses{" "}
            <InlineCode>puppeteer</InlineCode> to start a Chromium process to
            take the screenshot.
          </p>
          <p className="my-4">
            (That said, they do have{" "}
            <ExternalLink href="https://github.com/vercel/og-image/">
              an example
            </ExternalLink>{" "}
            that uses <InlineCode>puppeteer</InlineCode> to generate{" "}
            <InlineCode>og:image</InlineCode> previews from text.)
          </p>
          <p className="my-4">
            One reason for this is that AWS Lambda functions, on which Vercel
            Functions are built, have a 50MB maximum code size. If{" "}
            <InlineCode>puppeteer</InlineCode> +{" "}
            <ExternalLink href="https://www.npmjs.com/package/chrome-aws-lambda">
              chrome-aws-lambda
            </ExternalLink>{" "}
            + my <OgImage /> code exceed that maximum, deploying to Vercel will
            fail with an error like{" "}
            <InlineCode>
              Error: Required lambda files exceed max lambda size of 50000000
              bytes
            </InlineCode>
            . If this happens to you, Vercel will likely just tell you not to do
            this.
          </p>
        </p>
      </main>
    </>
  );
}
