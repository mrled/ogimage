import React from "react";
import { LogoPreview, OgImage } from "components/logo";
import SiteHead from "components/siteHead";
import { ExternalLink, InternalLink } from "components/blueLinks";
import { InlineCode } from "components/code";

export default function Home() {
  return (
    <>
      <SiteHead />
      <main className="my-8 mx-12 md:mx-20">
        <h1 className="text-4xl my-8">O.G. image</h1>
        <LogoPreview />
        <p className="my-4">There is more nothing to see here. Move along.</p>
        <h2 className="text-2xl my-8">No really, wtf is this?</h2>
        <p className="my-4">
          <OgImage /> generates{" "}
          <ExternalLink href="https://ogp.me/">Open Graph</ExternalLink>{" "}
          <InlineCode>og:image</InlineCode> social preview images for{" "}
          <ExternalLink href="https://me.micahrl.com">me</ExternalLink>.
        </p>
        <p className="my-4">
          I wrote <InternalLink href="/howto">a quick howto</InternalLink> for
          getting it up and running yourself, and also{" "}
          <ExternalLink href="https://twitter.com/mrled/status/1353942139772821504">
            a thread on Twitter
          </ExternalLink>{" "}
          about it.
        </p>
        <p className="my-4">
          You can see{" "}
          <ExternalLink href="https://github.com/mrled/ogimage">
            its source code on GitHub
          </ExternalLink>
          .
        </p>
      </main>
    </>
  );
}
