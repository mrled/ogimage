/* Sites we know about
 */

type KnownSitesType = {
  [key: string]: {
    [key: string]: {
      baseUri: string;
      scaleFactor: number;
      cacheControl: string;
    };
  };
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
    production: {
      baseUri: "https://cistercian.micahrl.com",
      scaleFactor: 2,
      cacheControl: defaultCacheControl,
    },
    local: {
      baseUri: "http://localhost:3000",
      scaleFactor: 2.5,
      cacheControl: defaultCacheControl,
    },
  },
  og: {
    production: {
      baseUri: "https://ogimage.micahrl.com",
      scaleFactor: 2,
      cacheControl: defaultCacheControl,
    },
    local: {
      baseUri: "http://localhost:2929",
      scaleFactor: 2,
      cacheControl: defaultCacheControl,
    },
  },
  biblemunger: {
    production: {
      baseUri: "https://biblemunger.micahrl.com",
      scaleFactor: 1.5,
      cacheControl: defaultCacheControl,
    },
    preview: {
      baseUri: "https://biblemungerjs-wip.mrled.vercel.app",
      scaleFactor: 1.5,
      cacheControl: defaultCacheControl,
    },
    local: {
      baseUri: "http://localhost:3000",
      scaleFactor: 1.5,
      cacheControl: defaultCacheControl,
    },
  },
};

export default KnownSites;
