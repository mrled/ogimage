import React from "react";
import { OgImage } from "components/logo";
import SiteHead from "components/siteHead";
import { ExternalLink, InternalLink } from "components/blueLinks";
import { InlineCode } from "components/code";
import { OgImageUrlTable } from "components/ogImageUrlTable";

export default function Home() {
  const liClasses = "my-5";
  return (
    <>
      <SiteHead />
      <main className="my-8 mx-12 md:mx-20">
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
              to set the value of cacheControl.
            </li>
            <li className={liClasses}>
              Deploy your <OgImage /> fork to Vercel. Make note of the URL that
              it is deployed to, e.g.{" "}
              <InlineCode>https://ogimage-example.vercel.app</InlineCode>. You
              can also deploy to a custom domain.
            </li>
            <li className={liClasses}>
              On the app you want to generate <InlineCode>og:image</InlineCode>{" "}
              preview for, set its <InlineCode>og:image</InlineCode> to your{" "}
              <OgImage /> deployment URI +{" "}
              <InlineCode>/api/ogImage/</InlineCode> + the name of your site in{" "}
              <InlineCode>KnownSites</InlineCode> + the name of your environment
              in <InlineCode>KnownSites</InlineCode> + the path to your app's
              preview URL.
            </li>
            <li className={liClasses}>
              For example, as mentioned above, <OgImage /> itself has a page for
              its own preview at{" "}
              <InternalLink href="/preview/logo">
                <InlineCode>/preview/logo</InlineCode>
              </InternalLink>
              . It also knows about itself in{" "}
              <InlineCode>KnownSites</InlineCode>, with a site name of{" "}
              <InlineCode>og</InlineCode> and an environment called{" "}
              <InlineCode>production</InlineCode>. Thus, it can generate an{" "}
              <InlineCode>og:image</InlineCode> for itself by going to{" "}
              <ExternalLink href="https://ogimage.micahrl.com/api/ogImage/og/preview/logo">
                https://ogimage.micahrl.com/api/ogImage/og/preview/logo
              </ExternalLink>
              . Note that the first link is a regular React component with
              selectable text, while the second link is an image with{" "}
              <InlineCode>Content-Type: image/png</InlineCode>. Here's a table
              of that second link so you can see how it breaks down:
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
              <ExternalLink href="https://ogimage.micahrl.com/api/ogImage/biblemunger/production/preview/munge/wine/whiteclaws/49-5-18">
                https://ogimage.micahrl.com/api/ogImage/biblemunger/production/preview/munge/wine/whiteclaws/49-5-18
              </ExternalLink>
              , which looks like this in tabular form:
              <OgImageUrlTable
                ogImageUri="https://ogimage.micahrl.com"
                siteName="biblemunger"
                environment="production"
                urlSubPath="preview/munge/wine/whiteclaws/49-5-18"
              />{" "}
            </li>
          </ol>
        </p>
      </main>
    </>
  );
}
