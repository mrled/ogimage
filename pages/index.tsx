import React from "react";
import { OgImage } from "components/logo";
import SiteHead from "components/siteHead";
import { ExternalLink, InternalLink } from "components/blueLinks";
import { InlineCode } from "components/code";

export default function Home() {
  return (
    <>
      <SiteHead />
      <main className="py-8 px-12 md:px-20 max-w-3xl text-sm md:text-base">
        <h1 className="text-4xl my-8">
          <OgImage />
        </h1>
        <div className="border p-2">
          <img
            src="/api/ogImage/og/production/preview/logo"
            alt="The O.G. image logo"
          />
          <figcaption className="py-2 mx-auto">
            The <OgImage /> logo, rendered from a special page at{" "}
            <InternalLink href="/preview/logo" /> by <OgImage /> itself
          </figcaption>
        </div>
        <h2 className="text-2xl my-8">What is this?</h2>
        <p className="my-4">
          <OgImage /> generates{" "}
          <ExternalLink href="https://ogp.me/">Open Graph</ExternalLink>{" "}
          <InlineCode>og:image</InlineCode> social preview images from a web
          page. The source can be anything a web page renders, including
          handwritten HTML/CSS, React components, etc, and can include anything
          Chrome supports including pages rendered via client-site JavaScript
          and webfonts.
        </p>
        <p className="my-4">
          Read <InternalLink href="/howto">a howto</InternalLink> to set up your
          own fork running for free on Vercel.
        </p>
        <p className="my-4">
          You can see{" "}
          <ExternalLink href="https://github.com/mrled/ogimage">
            its source code on GitHub
          </ExternalLink>
          .
        </p>
        <p className="my-4">
          <OgImage /> is written by{" "}
          <ExternalLink href="https://me.micahrl.com">me</ExternalLink>.
        </p>
      </main>
    </>
  );
}
