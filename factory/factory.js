var q = Object.create;
var N = Object.defineProperty;
var G = Object.getOwnPropertyDescriptor;
var Y = Object.getOwnPropertyNames;
var X = Object.getPrototypeOf,
  Z = Object.prototype.hasOwnProperty;
var J = (g, o) => () => (o || g((o = { exports: {} }).exports, o), o.exports);
var Q = (g, o, i, m) => {
  if ((o && typeof o == "object") || typeof o == "function")
    for (let l of Y(o))
      !Z.call(g, l) &&
        l !== i &&
        N(g, l, { get: () => o[l], enumerable: !(m = G(o, l)) || m.enumerable });
  return g;
};
var ee = (g, o, i) => (
  (i = g != null ? q(X(g)) : {}),
  Q(o || !g || !g.__esModule ? N(i, "default", { value: g, enumerable: !0 }) : i, g)
);
var B = J((P, $) => {
  (function (g, o) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], o);
    else if (typeof P < "u") o($);
    else {
      var i = { exports: {} };
      (o(i), (g.browser = i.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : P, function (g) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      g.exports = globalThis.browser;
    else {
      let o = "The message port closed before a response was received.",
        i = (m) => {
          let l = {
            alarms: {
              clear: { minArgs: 0, maxArgs: 1 },
              clearAll: { minArgs: 0, maxArgs: 0 },
              get: { minArgs: 0, maxArgs: 1 },
              getAll: { minArgs: 0, maxArgs: 0 },
            },
            bookmarks: {
              create: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              getChildren: { minArgs: 1, maxArgs: 1 },
              getRecent: { minArgs: 1, maxArgs: 1 },
              getSubTree: { minArgs: 1, maxArgs: 1 },
              getTree: { minArgs: 0, maxArgs: 0 },
              move: { minArgs: 2, maxArgs: 2 },
              remove: { minArgs: 1, maxArgs: 1 },
              removeTree: { minArgs: 1, maxArgs: 1 },
              search: { minArgs: 1, maxArgs: 1 },
              update: { minArgs: 2, maxArgs: 2 },
            },
            browserAction: {
              disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
              enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
              getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
              getBadgeText: { minArgs: 1, maxArgs: 1 },
              getPopup: { minArgs: 1, maxArgs: 1 },
              getTitle: { minArgs: 1, maxArgs: 1 },
              openPopup: { minArgs: 0, maxArgs: 0 },
              setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              setIcon: { minArgs: 1, maxArgs: 1 },
              setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
            },
            browsingData: {
              remove: { minArgs: 2, maxArgs: 2 },
              removeCache: { minArgs: 1, maxArgs: 1 },
              removeCookies: { minArgs: 1, maxArgs: 1 },
              removeDownloads: { minArgs: 1, maxArgs: 1 },
              removeFormData: { minArgs: 1, maxArgs: 1 },
              removeHistory: { minArgs: 1, maxArgs: 1 },
              removeLocalStorage: { minArgs: 1, maxArgs: 1 },
              removePasswords: { minArgs: 1, maxArgs: 1 },
              removePluginData: { minArgs: 1, maxArgs: 1 },
              settings: { minArgs: 0, maxArgs: 0 },
            },
            commands: { getAll: { minArgs: 0, maxArgs: 0 } },
            contextMenus: {
              remove: { minArgs: 1, maxArgs: 1 },
              removeAll: { minArgs: 0, maxArgs: 0 },
              update: { minArgs: 2, maxArgs: 2 },
            },
            cookies: {
              get: { minArgs: 1, maxArgs: 1 },
              getAll: { minArgs: 1, maxArgs: 1 },
              getAllCookieStores: { minArgs: 0, maxArgs: 0 },
              remove: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            },
            devtools: {
              inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
              panels: {
                create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
              },
            },
            downloads: {
              cancel: { minArgs: 1, maxArgs: 1 },
              download: { minArgs: 1, maxArgs: 1 },
              erase: { minArgs: 1, maxArgs: 1 },
              getFileIcon: { minArgs: 1, maxArgs: 2 },
              open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              pause: { minArgs: 1, maxArgs: 1 },
              removeFile: { minArgs: 1, maxArgs: 1 },
              resume: { minArgs: 1, maxArgs: 1 },
              search: { minArgs: 1, maxArgs: 1 },
              show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
            },
            extension: {
              isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
              isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
            },
            history: {
              addUrl: { minArgs: 1, maxArgs: 1 },
              deleteAll: { minArgs: 0, maxArgs: 0 },
              deleteRange: { minArgs: 1, maxArgs: 1 },
              deleteUrl: { minArgs: 1, maxArgs: 1 },
              getVisits: { minArgs: 1, maxArgs: 1 },
              search: { minArgs: 1, maxArgs: 1 },
            },
            i18n: {
              detectLanguage: { minArgs: 1, maxArgs: 1 },
              getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
            },
            identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
            idle: { queryState: { minArgs: 1, maxArgs: 1 } },
            management: {
              get: { minArgs: 1, maxArgs: 1 },
              getAll: { minArgs: 0, maxArgs: 0 },
              getSelf: { minArgs: 0, maxArgs: 0 },
              setEnabled: { minArgs: 2, maxArgs: 2 },
              uninstallSelf: { minArgs: 0, maxArgs: 1 },
            },
            notifications: {
              clear: { minArgs: 1, maxArgs: 1 },
              create: { minArgs: 1, maxArgs: 2 },
              getAll: { minArgs: 0, maxArgs: 0 },
              getPermissionLevel: { minArgs: 0, maxArgs: 0 },
              update: { minArgs: 2, maxArgs: 2 },
            },
            pageAction: {
              getPopup: { minArgs: 1, maxArgs: 1 },
              getTitle: { minArgs: 1, maxArgs: 1 },
              hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              setIcon: { minArgs: 1, maxArgs: 1 },
              setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
            },
            permissions: {
              contains: { minArgs: 1, maxArgs: 1 },
              getAll: { minArgs: 0, maxArgs: 0 },
              remove: { minArgs: 1, maxArgs: 1 },
              request: { minArgs: 1, maxArgs: 1 },
            },
            runtime: {
              getBackgroundPage: { minArgs: 0, maxArgs: 0 },
              getPlatformInfo: { minArgs: 0, maxArgs: 0 },
              openOptionsPage: { minArgs: 0, maxArgs: 0 },
              requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
              sendMessage: { minArgs: 1, maxArgs: 3 },
              sendNativeMessage: { minArgs: 2, maxArgs: 2 },
              setUninstallURL: { minArgs: 1, maxArgs: 1 },
            },
            sessions: {
              getDevices: { minArgs: 0, maxArgs: 1 },
              getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
              restore: { minArgs: 0, maxArgs: 1 },
            },
            storage: {
              local: {
                clear: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getBytesInUse: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              managed: {
                get: { minArgs: 0, maxArgs: 1 },
                getBytesInUse: { minArgs: 0, maxArgs: 1 },
              },
              sync: {
                clear: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getBytesInUse: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
            },
            tabs: {
              captureVisibleTab: { minArgs: 0, maxArgs: 2 },
              create: { minArgs: 1, maxArgs: 1 },
              detectLanguage: { minArgs: 0, maxArgs: 1 },
              discard: { minArgs: 0, maxArgs: 1 },
              duplicate: { minArgs: 1, maxArgs: 1 },
              executeScript: { minArgs: 1, maxArgs: 2 },
              get: { minArgs: 1, maxArgs: 1 },
              getCurrent: { minArgs: 0, maxArgs: 0 },
              getZoom: { minArgs: 0, maxArgs: 1 },
              getZoomSettings: { minArgs: 0, maxArgs: 1 },
              goBack: { minArgs: 0, maxArgs: 1 },
              goForward: { minArgs: 0, maxArgs: 1 },
              highlight: { minArgs: 1, maxArgs: 1 },
              insertCSS: { minArgs: 1, maxArgs: 2 },
              move: { minArgs: 2, maxArgs: 2 },
              query: { minArgs: 1, maxArgs: 1 },
              reload: { minArgs: 0, maxArgs: 2 },
              remove: { minArgs: 1, maxArgs: 1 },
              removeCSS: { minArgs: 1, maxArgs: 2 },
              sendMessage: { minArgs: 2, maxArgs: 3 },
              setZoom: { minArgs: 1, maxArgs: 2 },
              setZoomSettings: { minArgs: 1, maxArgs: 2 },
              update: { minArgs: 1, maxArgs: 2 },
            },
            topSites: { get: { minArgs: 0, maxArgs: 0 } },
            webNavigation: {
              getAllFrames: { minArgs: 1, maxArgs: 1 },
              getFrame: { minArgs: 1, maxArgs: 1 },
            },
            webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
            windows: {
              create: { minArgs: 0, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 2 },
              getAll: { minArgs: 0, maxArgs: 1 },
              getCurrent: { minArgs: 0, maxArgs: 1 },
              getLastFocused: { minArgs: 0, maxArgs: 1 },
              remove: { minArgs: 1, maxArgs: 1 },
              update: { minArgs: 2, maxArgs: 2 },
            },
          };
          if (Object.keys(l).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class h extends WeakMap {
            constructor(r, n = void 0) {
              (super(n), (this.createItem = r));
            }
            get(r) {
              return (this.has(r) || this.set(r, this.createItem(r)), super.get(r));
            }
          }
          let j = (e) => e && typeof e == "object" && typeof e.then == "function",
            k =
              (e, r) =>
              (...n) => {
                m.runtime.lastError
                  ? e.reject(new Error(m.runtime.lastError.message))
                  : r.singleCallbackArg || (n.length <= 1 && r.singleCallbackArg !== !1)
                    ? e.resolve(n[0])
                    : e.resolve(n);
              },
            E = (e) => (e == 1 ? "argument" : "arguments"),
            H = (e, r) =>
              function (t, ...A) {
                if (A.length < r.minArgs)
                  throw new Error(
                    `Expected at least ${r.minArgs} ${E(r.minArgs)} for ${e}(), got ${A.length}`,
                  );
                if (A.length > r.maxArgs)
                  throw new Error(
                    `Expected at most ${r.maxArgs} ${E(r.maxArgs)} for ${e}(), got ${A.length}`,
                  );
                return new Promise((c, x) => {
                  if (r.fallbackToNoCallback)
                    try {
                      t[e](...A, k({ resolve: c, reject: x }, r));
                    } catch (s) {
                      (console.warn(
                        `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        s,
                      ),
                        t[e](...A),
                        (r.fallbackToNoCallback = !1),
                        (r.noCallback = !0),
                        c());
                    }
                  else
                    r.noCallback ? (t[e](...A), c()) : t[e](...A, k({ resolve: c, reject: x }, r));
                });
              },
            L = (e, r, n) =>
              new Proxy(r, {
                apply(t, A, c) {
                  return n.call(A, e, ...c);
                },
              }),
            T = Function.call.bind(Object.prototype.hasOwnProperty),
            C = (e, r = {}, n = {}) => {
              let t = Object.create(null),
                A = {
                  has(x, s) {
                    return s in e || s in t;
                  },
                  get(x, s, d) {
                    if (s in t) return t[s];
                    if (!(s in e)) return;
                    let a = e[s];
                    if (typeof a == "function")
                      if (typeof r[s] == "function") a = L(e, e[s], r[s]);
                      else if (T(n, s)) {
                        let _ = H(s, n[s]);
                        a = L(e, e[s], _);
                      } else a = a.bind(e);
                    else if (typeof a == "object" && a !== null && (T(r, s) || T(n, s)))
                      a = C(a, r[s], n[s]);
                    else if (T(n, "*")) a = C(a, r[s], n["*"]);
                    else
                      return (
                        Object.defineProperty(t, s, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return e[s];
                          },
                          set(_) {
                            e[s] = _;
                          },
                        }),
                        a
                      );
                    return ((t[s] = a), a);
                  },
                  set(x, s, d, a) {
                    return (s in t ? (t[s] = d) : (e[s] = d), !0);
                  },
                  defineProperty(x, s, d) {
                    return Reflect.defineProperty(t, s, d);
                  },
                  deleteProperty(x, s) {
                    return Reflect.deleteProperty(t, s);
                  },
                },
                c = Object.create(e);
              return new Proxy(c, A);
            },
            w = (e) => ({
              addListener(r, n, ...t) {
                r.addListener(e.get(n), ...t);
              },
              hasListener(r, n) {
                return r.hasListener(e.get(n));
              },
              removeListener(r, n) {
                r.removeListener(e.get(n));
              },
            }),
            W = new h((e) =>
              typeof e != "function"
                ? e
                : function (n) {
                    let t = C(n, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    e(t);
                  },
            ),
            y = new h((e) =>
              typeof e != "function"
                ? e
                : function (n, t, A) {
                    let c = !1,
                      x,
                      s = new Promise((b) => {
                        x = function (u) {
                          ((c = !0), b(u));
                        };
                      }),
                      d;
                    try {
                      d = e(n, t, x);
                    } catch (b) {
                      d = Promise.reject(b);
                    }
                    let a = d !== !0 && j(d);
                    if (d !== !0 && !a && !c) return !1;
                    let _ = (b) => {
                      b.then(
                        (u) => {
                          A(u);
                        },
                        (u) => {
                          let S;
                          (u && (u instanceof Error || typeof u.message == "string")
                            ? (S = u.message)
                            : (S = "An unexpected error occurred"),
                            A({ __mozWebExtensionPolyfillReject__: !0, message: S }));
                        },
                      ).catch((u) => {
                        console.error("Failed to send onMessage rejected reply", u);
                      });
                    };
                    return (_(a ? d : s), !0);
                  },
            ),
            V = ({ reject: e, resolve: r }, n) => {
              m.runtime.lastError
                ? m.runtime.lastError.message === o
                  ? r()
                  : e(new Error(m.runtime.lastError.message))
                : n && n.__mozWebExtensionPolyfillReject__
                  ? e(new Error(n.message))
                  : r(n);
            },
            O = (e, r, n, ...t) => {
              if (t.length < r.minArgs)
                throw new Error(
                  `Expected at least ${r.minArgs} ${E(r.minArgs)} for ${e}(), got ${t.length}`,
                );
              if (t.length > r.maxArgs)
                throw new Error(
                  `Expected at most ${r.maxArgs} ${E(r.maxArgs)} for ${e}(), got ${t.length}`,
                );
              return new Promise((A, c) => {
                let x = V.bind(null, { resolve: A, reject: c });
                (t.push(x), n.sendMessage(...t));
              });
            },
            z = {
              devtools: { network: { onRequestFinished: w(W) } },
              runtime: {
                onMessage: w(y),
                onMessageExternal: w(y),
                sendMessage: O.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: O.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            R = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (l.privacy = { network: { "*": R }, services: { "*": R }, websites: { "*": R } }),
            C(m, z, l)
          );
        };
      g.exports = i(chrome);
    }
  });
});
var p = "google";
var v = p != "mozilla",
  se = p == "mozilla";
var U = !1;
var ne = atob(
  "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
);
var f = "https://github.com/Atamol/FreeVDH",
  te = `${f}/v2/entitlements/validate`,
  ge = `${f}/v2/entitlements/activate`,
  oe = `${f}/v2/entitlements/migrate`,
  ie = `${f}/v2/reports`,
  me = `${f}/issue`,
  ae = `${f}/premium`,
  Ae = `${f}/manage-subscription`,
  le = `${f}/welcome/${p}`,
  ce = `${f}/changelog/${p}`,
  xe = `${f}/goodbye/${p}`;
function M(g, o = 0) {
  let i = 3735928559 ^ o,
    m = 1103547991 ^ o;
  for (let l = 0, h; l < g.length; l++)
    ((h = g.charCodeAt(l)), (i = Math.imul(i ^ h, 2654435761)), (m = Math.imul(m ^ h, 1597334677)));
  return (
    (i = Math.imul(i ^ (i >>> 16), 2246822507)),
    (i ^= Math.imul(m ^ (m >>> 13), 3266489909)),
    (m = Math.imul(m ^ (m >>> 16), 2246822507)),
    (m ^= Math.imul(i ^ (i >>> 13), 3266489909)),
    4294967296 * (2097151 & m) + (i >>> 0)
  );
}
var K = ee(B(), 1);
function F() {
  return !0;
}
var D = "/download_worker/main.js",
  I;
F() &&
  (v ? (I = chrome.runtime.getURL(D)) : (I = browser.runtime.getURL(D)),
  new Worker(I, { type: "module" }));
