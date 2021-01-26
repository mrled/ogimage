/* Functionality for generating preview images like og:image and twitter:image
 */
import puppeteer from "puppeteer-core";
import chromium from "chrome-aws-lambda";

async function launchBrowser(
  puppeteerLaunchArgs: any
): Promise<puppeteer.Browser> {
  if (process.env.VERCEL_ENV) {
    console.log("Running on Vercel, will use chrome-aws-lambda");
    const browser = await chromium.puppeteer.launch({
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
      ...puppeteerLaunchArgs,
    });
    return browser;
  } else {
    console.log("Not running on Vercel, will use default Chrome");
    const browser = await chromium.puppeteer.launch();
    return browser;
  }
}

/* Take a screenshot of a web page at a URI
 *
 * uri: The URI to load
 * width: The viewport width
 * height: The viewport height
 * scaleFactor: Magnify the page by this constant
 */
export async function takeScreenshot(
  uri: string,
  width: number,
  height: number,
  scaleFactor?: number
): Promise<Buffer> {
  const browser = await launchBrowser({});
  const page = await browser.newPage();

  const scaleDivisor = scaleFactor ? scaleFactor : 1;
  page.setViewport({
    width: Math.floor(width / scaleDivisor),
    height: Math.floor(height / scaleDivisor),
    deviceScaleFactor: scaleFactor,
  });

  await page.goto(uri);
  const screenshot: Buffer = await page.screenshot({ encoding: "binary" });

  return screenshot;
}
