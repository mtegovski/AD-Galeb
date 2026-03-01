import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = path.resolve("dist/ad-galeb/browser");
const port = 3000;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf"
};

function sendFile(res, filePath) {
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return false;
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
  return true;
}

http.createServer((req, res) => {
  const parsed = url.parse(req.url || "/");
  const pathname = decodeURIComponent(parsed.pathname || "/");

  // Default locale for root
  if (pathname === "/") {
    res.writeHead(302, { Location: "/mk/" });
    res.end();
    return;
  }

  // Serve exact files if present (js/css/assets)
  const direct = path.join(root, pathname);
  if (sendFile(res, direct)) return;

  // SPA fallbacks per locale folder
  if (pathname.startsWith("/mk/")) {
    if (sendFile(res, path.join(root, "mk", "index.html"))) return;
  }
  if (pathname.startsWith("/en/")) {
    if (sendFile(res, path.join(root, "en", "index.html"))) return;
  }

  res.writeHead(404);
  res.end("Not found");
}).listen(port, () => {
  console.log(`Serving: ${root}`);
  console.log(`Default: http://localhost:${port}/  (redirects to /mk/)`);
  console.log(`Locales: http://localhost:${port}/mk/ and /en/`);
});
