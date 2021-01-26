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
        <p className="my-8">
          This generates og:image social preview images for{" "}
          <Link href="https://me.micahrl.com">
            <a className="underline text-blue-600">me</a>
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
        <p className="my-8">There is more nothing to see here. Move along.</p>
      </main>
    </div>
  );
}
