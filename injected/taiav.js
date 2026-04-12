var l,
  n = [...document.querySelectorAll("head script[type='application/ld+json']")];
for (let t of n) {
  let i = t.textContent;
  if (!i) continue;
  let e = i.match(/["']thumbnail(?:url|_url)["']\s*:\s*["']([^"'\\\n\r]+)["']/i);
  e && e[1] && (l = e[1]);
}
if (l) {
  let t = document.createElement("meta");
  (t.setAttribute("property", "og:image"),
    document.head.appendChild(t),
    t.setAttribute("content", l));
}
