import { NextApiRequest, NextApiResponse } from "next";

import KnownSites from "lib/knownSites";
import { takeScreenshot } from "lib/preview";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  console.log(`Loading handler at ${JSON.stringify(req.query)}`);

  const siteName = req.query.site as string;
  const environment = req.query.site as string;
  const urlPath = (req.query.urlPath as string[]).join("/");

  // Only allow known sites to use this app
  if (!Object.keys(KnownSites).includes(siteName)) {
    res.statusCode = 400;
    res.json({ error: `Unknown site ${siteName}` });
    return;
  }

  const site = KnownSites[siteName][environment];
  const uri = `${site.baseUri}/${urlPath}`;

  // Good defaults for og:image ?
  // Can make this adjustable later by adding them to the route
  const width = 1200;
  const height = 675;

  console.log(
    `Will take ${width}x${height}@${site.scaleFactor} screenshot of ${uri}`
  );
  const screenshot = await takeScreenshot(uri, width, height, site.scaleFactor);

  res.statusCode = 200;
  res.setHeader("Content-Type", "image/png");
  res.setHeader("CacheControl", site.cacheControl);
  res.end(screenshot);
}
