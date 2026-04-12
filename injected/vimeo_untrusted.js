var F = new BroadcastChannel("worker_service");
var r = {
  FromInjectedToService: 0,
  FromContentToService: 1,
  FromServiceToWorker: 2,
  FromWorkerToService: 3,
  FromUntrustedInjectedToTrusted: 4,
  FromTrustedInjectedToUntrusted: 5,
  FromServiceToContent: 6,
  FromServiceToInjected: 7,
  FromServiceToService: 8,
};
function i(o, e = 0) {
  let t = 3735928559 ^ e,
    n = 1103547991 ^ e;
  for (let a = 0, s; a < o.length; a++)
    ((s = o.charCodeAt(a)), (t = Math.imul(t ^ s, 2654435761)), (n = Math.imul(n ^ s, 1597334677)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t ^= Math.imul(n ^ (n >>> 13), 3266489909)),
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & n) + (t >>> 0)
  );
}
var d = new BroadcastChannel(`injected-${i(window.location.href)}`);
function m(o) {
  let e = r.FromUntrustedInjectedToTrusted;
  d.postMessage({ msg: o, channel: e });
}
function l(o) {
  let e = (t) => {
    let n = t.data.msg;
    t.data.channel == r.FromTrustedInjectedToUntrusted && o(n);
  };
  return (
    d.addEventListener("message", e),
    () => {
      d.removeEventListener("message", e);
    }
  );
}
var T = /(?<![a-z0-9])(\d{5,})/i;
function c(o) {
  let e = o.match(T);
  if (e && e.length > 0) return e[0];
}
var g = c(window.location.href);
async function u() {
  if (g) {
    let o = 1;
    for (;;) {
      let e = window.playerConfig;
      if (e) {
        m({ name: "vimeo_on_config", data: { config: e } });
        break;
      } else await new Promise((t) => setTimeout(t, 1e3 * o++));
    }
  }
}
l((o) => {
  o.name == "vimeo_request_config" && u();
});
u();
