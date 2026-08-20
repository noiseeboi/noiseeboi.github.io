const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const siteDir = path.resolve(__dirname, "..", "_site");
const homepage = fs.readFileSync(path.join(siteDir, "index.html"), "utf8");
const robots = fs.readFileSync(path.join(siteDir, "robots.txt"), "utf8");
const sitemap = fs.readFileSync(path.join(siteDir, "sitemap.xml"), "utf8");

function homepageSchema() {
  const match = homepage.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  );
  assert.ok(match, "homepage must include JSON-LD");
  return JSON.parse(match[1]);
}

test("homepage emits valid JSON-LD", () => {
  assert.doesNotThrow(homepageSchema);
});

test("homepage sameAs contains only external identity profiles", () => {
  const { sameAs } = homepageSchema();

  assert.deepEqual(sameAs, [
    "https://scholar.google.com/citations?user=U3SYJIEAAAAJ",
    "https://github.com/noiseeboi",
    "https://www.linkedin.com/in/qingchuan-yang",
    "https://twitter.com/qcyang20xx",
  ]);
});

test("homepage is indexable at its canonical URL", () => {
  assert.match(
    homepage,
    /<link rel="canonical" href="https:\/\/noiseeboi\.github\.io\/">/,
  );
  assert.doesNotMatch(homepage, /<meta[^>]+(?:robots|googlebot)[^>]+noindex/i);
});

test("homepage exposes the Search Console verification token", () => {
  assert.match(
    homepage,
    /<meta name="google-site-verification" content="bjpnUHodZvr7-BxMHyalW4Q9QrTQPCyhdcOsr4ke86w">/,
  );
});

test("robots and sitemap advertise the canonical site", () => {
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Disallow:\s*$/m);
  assert.match(
    robots,
    /^Sitemap: https:\/\/noiseeboi\.github\.io\/sitemap\.xml$/m,
  );
  assert.match(sitemap, /<loc>https:\/\/noiseeboi\.github\.io\/<\/loc>/);
});

test("SEO test sources are not published", () => {
  assert.equal(
    fs.existsSync(path.join(siteDir, "test", "seo_contract.test.js")),
    false,
  );
});
