const path = require('path');
const fs = require('fs');

const cmd = process.argv[2];
const srcDir = process.argv[3];
const outDir = process.argv[4];
const DIST_DIR = "dist";

if (cmd == "build" && srcDir && outDir) {
  const out = path.resolve(outDir);
  const distDir = srcDir + "/" + DIST_DIR
  fs.symlinkSync(out, distDir);
}

const config = {
  distDir: DIST_DIR,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: '../tsconfig.json',
  },
  async rewrites() {
    return [{
    source: '/:path*',
      destination: `http://api.default.svc.cluster.local:8080/:path*`
  }]
  },
  webpack: (config) => {
    config.resolve.symlinks = true;
    config.watchOptions.poll = 500;
    return config;
  }
}

module.exports = config;
