var w = new BroadcastChannel("worker_service");
var n = {
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
function l(o, e = 0) {
  let t = 3735928559 ^ e,
    a = 1103547991 ^ e;
  for (let r = 0, s; r < o.length; r++)
    ((s = o.charCodeAt(r)), (t = Math.imul(t ^ s, 2654435761)), (a = Math.imul(a ^ s, 1597334677)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t ^= Math.imul(a ^ (a >>> 13), 3266489909)),
    (a = Math.imul(a ^ (a >>> 16), 2246822507)),
    (a ^= Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & a) + (t >>> 0)
  );
}
var i = new BroadcastChannel(`injected-${l(window.location.href)}`);
function d(o) {
  let e = n.FromUntrustedInjectedToTrusted;
  i.postMessage({ msg: o, channel: e });
}
function m(o) {
  let e = (t) => {
    let a = t.data.msg;
    t.data.channel == n.FromTrustedInjectedToUntrusted && o(a);
  };
  return (
    i.addEventListener("message", e),
    () => {
      i.removeEventListener("message", e);
    }
  );
}
var v = /\.tv\/.+\/(?:play|video)\//,
  g = /\.com\/video\//;
async function c() {
  let o = 1;
  for (;;) {
    let e = window.__initialState;
    if (e && (e.ogv.epId._value || e.ugc.aid._value)) {
      d({
        name: "bilibili_tv_on_config",
        data: { ep_id: e.ogv.epId._value, ai_id: e.ugc.aid._value },
      });
      break;
    } else await new Promise((t) => setTimeout(t, 1e3 * o++));
  }
}
async function u() {
  let o = 1;
  for (;;) {
    let e = window.__INITIAL_STATE__;
    if (e && e.cid && e.videoData.bvid) {
      d({ name: "bilibili_com_on_id", data: { cid: e.cid, bvid: e.videoData.bvid } });
      break;
    } else await new Promise((t) => setTimeout(t, 1e3 * o++));
  }
}
m((o) => {
  o.name == "bilibili_com_request_id" && u();
});
m((o) => {
  o.name == "bilibili_tv_request_config" && c();
});
var _ = window.location.href;
g.test(_) && u();
v.test(_) && c();
