import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>O.G. IMAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-8">
        <h1 className="text-4xl my-8">O.G. IMAGE</h1>
        <p className="my-8">There is more nothing to see here. Move along.</p>
        <h2 className="text-2xl my-8">No really, wtf is this?</h2>
        <p className="my-8">
          This generates og:image social preview images for{" "}
          <Link href="https://me.micahrl.com">
            <a className="underline text-blue-600">me</a>
          </Link>
          .
        </p>
        <p>
          I wrote{" "}
          <Link href="https://twitter.com/mrled/status/1353942139772821504">
            <a className="underline text-blue-600">
              a thread on Twitter about it
            </a>
          </Link>
          .
        </p>
        <p className="my-8">
          You can see{" "}
          <Link href="https://github.com/mrled/ogimage">
            <a className="underline text-blue-600">its source code on GitHub</a>
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
