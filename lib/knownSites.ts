/* Sites we know about
 */

type SiteType = {
  baseUri: string;
  scaleFactor: number;
  cacheControl: string;
};
type KnownSitesType = {
  [key: string]: SiteType;
};

// All values in seconds
const cacheDuration = {
  oneYear: 31536000, // Max allowed for s-maxage on Vercel
  oneWeek: 60 * 60 * 24 * 7,
  thirtyDays: 60 * 60 * 24 * 30,
};

const defaultCacheControl = `s-maxage=${cacheDuration.oneWeek}, immutable, public`;

const KnownSites: KnownSitesType = {
  cistercian: {
    baseUri: "https://cistercian.micahrl.com",
    scaleFactor: 3,
    cacheControl: defaultCacheControl,
  },
  "biblemunger-local": {
    baseUri: "http://localhost:3000",
    scaleFactor: 1.5,
    cacheControl: defaultCacheControl,
  },
  biblemunger: {
    baseUri: "https://biblemunger.micahrl.com",
    scaleFactor: 1.5,
    cacheControl: defaultCacheControl,
  },
};

export default KnownSites;
