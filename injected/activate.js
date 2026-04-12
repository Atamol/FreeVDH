var V = Object.create;
var j = Object.defineProperty;
var U = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var z = Object.getPrototypeOf,
  H = Object.prototype.hasOwnProperty;
var K = (t, a) => () => (a || t((a = { exports: {} }).exports, a), a.exports);
var Z = (t, a, g, u) => {
  if ((a && typeof a == "object") || typeof a == "function")
    for (let x of q(a))
      !H.call(t, x) &&
        x !== g &&
        j(t, x, { get: () => a[x], enumerable: !(u = U(a, x)) || u.enumerable });
  return t;
};
var J = (t, a, g) => (
  (g = t != null ? V(z(t)) : {}),
  Z(a || !t || !t.__esModule ? j(g, "default", { value: t, enumerable: !0 }) : g, t)
);
var W = K((F, E) => {
  (function (t, a) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], a);
    else if (typeof F < "u") a(E);
    else {
      var g = { exports: {} };
      (a(g), (t.browser = g.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F, function (t) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      t.exports = globalThis.browser;
    else {
      let a = "The message port closed before a response was received.",
        g = (u) => {
          let x = {
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
          if (Object.keys(x).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class k extends WeakMap {
            constructor(r, n = void 0) {
              (super(n), (this.createItem = r));
            }
            get(r) {
              return (this.has(r) || this.set(r, this.createItem(r)), super.get(r));
            }
          }
          let D = (e) => e && typeof e == "object" && typeof e.then == "function",
            C =
              (e, r) =>
              (...n) => {
                u.runtime.lastError
                  ? e.reject(new Error(u.runtime.lastError.message))
                  : r.singleCallbackArg || (n.length <= 1 && r.singleCallbackArg !== !1)
                    ? e.resolve(n[0])
                    : e.resolve(n);
              },
            h = (e) => (e == 1 ? "argument" : "arguments"),
            N = (e, r) =>
              function (o, ...m) {
                if (m.length < r.minArgs)
                  throw new Error(
                    `Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${m.length}`,
                  );
                if (m.length > r.maxArgs)
                  throw new Error(
                    `Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${m.length}`,
                  );
                return new Promise((l, c) => {
                  if (r.fallbackToNoCallback)
                    try {
                      o[e](...m, C({ resolve: l, reject: c }, r));
                    } catch (s) {
                      (console.warn(
                        `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        s,
                      ),
                        o[e](...m),
                        (r.fallbackToNoCallback = !1),
                        (r.noCallback = !0),
                        l());
                    }
                  else
                    r.noCallback ? (o[e](...m), l()) : o[e](...m, C({ resolve: l, reject: c }, r));
                });
              },
            M = (e, r, n) =>
              new Proxy(r, {
                apply(o, m, l) {
                  return n.call(m, e, ...l);
                },
              }),
            b = Function.call.bind(Object.prototype.hasOwnProperty),
            T = (e, r = {}, n = {}) => {
              let o = Object.create(null),
                m = {
                  has(c, s) {
                    return s in e || s in o;
                  },
                  get(c, s, d) {
                    if (s in o) return o[s];
                    if (!(s in e)) return;
                    let i = e[s];
                    if (typeof i == "function")
                      if (typeof r[s] == "function") i = M(e, e[s], r[s]);
                      else if (b(n, s)) {
                        let f = N(s, n[s]);
                        i = M(e, e[s], f);
                      } else i = i.bind(e);
                    else if (typeof i == "object" && i !== null && (b(r, s) || b(n, s)))
                      i = T(i, r[s], n[s]);
                    else if (b(n, "*")) i = T(i, r[s], n["*"]);
                    else
                      return (
                        Object.defineProperty(o, s, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return e[s];
                          },
                          set(f) {
                            e[s] = f;
                          },
                        }),
                        i
                      );
                    return ((o[s] = i), i);
                  },
                  set(c, s, d, i) {
                    return (s in o ? (o[s] = d) : (e[s] = d), !0);
                  },
                  defineProperty(c, s, d) {
                    return Reflect.defineProperty(o, s, d);
                  },
                  deleteProperty(c, s) {
                    return Reflect.deleteProperty(o, s);
                  },
                },
                l = Object.create(e);
              return new Proxy(l, m);
            },
            _ = (e) => ({
              addListener(r, n, ...o) {
                r.addListener(e.get(n), ...o);
              },
              hasListener(r, n) {
                return r.hasListener(e.get(n));
              },
              removeListener(r, n) {
                r.removeListener(e.get(n));
              },
            }),
            O = new k((e) =>
              typeof e != "function"
                ? e
                : function (n) {
                    let o = T(n, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    e(o);
                  },
            ),
            I = new k((e) =>
              typeof e != "function"
                ? e
                : function (n, o, m) {
                    let l = !1,
                      c,
                      s = new Promise((v) => {
                        c = function (A) {
                          ((l = !0), v(A));
                        };
                      }),
                      d;
                    try {
                      d = e(n, o, c);
                    } catch (v) {
                      d = Promise.reject(v);
                    }
                    let i = d !== !0 && D(d);
                    if (d !== !0 && !i && !l) return !1;
                    let f = (v) => {
                      v.then(
                        (A) => {
                          m(A);
                        },
                        (A) => {
                          let y;
                          (A && (A instanceof Error || typeof A.message == "string")
                            ? (y = A.message)
                            : (y = "An unexpected error occurred"),
                            m({ __mozWebExtensionPolyfillReject__: !0, message: y }));
                        },
                      ).catch((A) => {
                        console.error("Failed to send onMessage rejected reply", A);
                      });
                    };
                    return (f(i ? d : s), !0);
                  },
            ),
            $ = ({ reject: e, resolve: r }, n) => {
              u.runtime.lastError
                ? u.runtime.lastError.message === a
                  ? r()
                  : e(new Error(u.runtime.lastError.message))
                : n && n.__mozWebExtensionPolyfillReject__
                  ? e(new Error(n.message))
                  : r(n);
            },
            P = (e, r, n, ...o) => {
              if (o.length < r.minArgs)
                throw new Error(
                  `Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${o.length}`,
                );
              if (o.length > r.maxArgs)
                throw new Error(
                  `Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${o.length}`,
                );
              return new Promise((m, l) => {
                let c = $.bind(null, { resolve: m, reject: l });
                (o.push(c), n.sendMessage(...o));
              });
            },
            B = {
              devtools: { network: { onRequestFinished: _(O) } },
              runtime: {
                onMessage: _(I),
                onMessageExternal: _(I),
                sendMessage: P.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: P.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            w = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (x.privacy = { network: { "*": w }, services: { "*": w }, websites: { "*": w } }),
            T(u, B, x)
          );
        };
      t.exports = g(chrome);
    }
  });
});
var p = J(W(), 1);
var ae = new BroadcastChannel("worker_service");
var S = {
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
async function G(t, a) {
  await p.default.runtime.sendMessage({ msg: t, channel: a });
}
function L(t) {
  let a = S.FromInjectedToService;
  G(t, a);
}
function R(t) {
  let a = (g) => {
    g.channel == S.FromServiceToInjected && t(g.msg);
  };
  return (
    p.default.runtime.onMessage.addListener(a),
    () => {
      p.default.runtime.onMessage.removeListener(a);
    }
  );
}
function Q(t) {
  L({ name: "on_activate_addon", data: { key: t.detail.message } });
}
document.addEventListener("activate", Q);
document.addEventListener("ping", () => {
  document.dispatchEvent(new CustomEvent("pong"));
});
var X = R((t) => {
  (document.dispatchEvent(new CustomEvent(t.name, { detail: t.data })), X());
});
