var Ce = Object.create;
var pe = Object.defineProperty;
var ke = Object.getOwnPropertyDescriptor;
var Ue = Object.getOwnPropertyNames;
var Le = Object.getPrototypeOf,
  Xe = Object.prototype.hasOwnProperty;
var he = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var Ve = (i, r, t, e) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let n of Ue(r))
      !Xe.call(i, n) &&
        n !== t &&
        pe(i, n, { get: () => r[n], enumerable: !(e = ke(r, n)) || e.enumerable });
  return i;
};
var ye = (i, r, t) => (
  (t = i != null ? Ce(Le(i)) : {}),
  Ve(r || !i || !i.__esModule ? pe(t, "default", { value: i, enumerable: !0 }) : t, i)
);
var Ae = he((re, _e) => {
  (function (i, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof re < "u") r(_e);
    else {
      var t = { exports: {} };
      (r(t), (i.browser = t.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : re, function (i) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      i.exports = globalThis.browser;
    else {
      let r = "The message port closed before a response was received.",
        t = (e) => {
          let n = {
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
          if (Object.keys(n).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class a extends WeakMap {
            constructor(f, g = void 0) {
              (super(g), (this.createItem = f));
            }
            get(f) {
              return (this.has(f) || this.set(f, this.createItem(f)), super.get(f));
            }
          }
          let u = (m) => m && typeof m == "object" && typeof m.then == "function",
            l =
              (m, f) =>
              (...g) => {
                e.runtime.lastError
                  ? m.reject(new Error(e.runtime.lastError.message))
                  : f.singleCallbackArg || (g.length <= 1 && f.singleCallbackArg !== !1)
                    ? m.resolve(g[0])
                    : m.resolve(g);
              },
            d = (m) => (m == 1 ? "argument" : "arguments"),
            o = (m, f) =>
              function (A, ...I) {
                if (I.length < f.minArgs)
                  throw new Error(
                    `Expected at least ${f.minArgs} ${d(f.minArgs)} for ${m}(), got ${I.length}`,
                  );
                if (I.length > f.maxArgs)
                  throw new Error(
                    `Expected at most ${f.maxArgs} ${d(f.maxArgs)} for ${m}(), got ${I.length}`,
                  );
                return new Promise((M, N) => {
                  if (f.fallbackToNoCallback)
                    try {
                      A[m](...I, l({ resolve: M, reject: N }, f));
                    } catch (_) {
                      (console.warn(
                        `${m} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        _,
                      ),
                        A[m](...I),
                        (f.fallbackToNoCallback = !1),
                        (f.noCallback = !0),
                        M());
                    }
                  else
                    f.noCallback ? (A[m](...I), M()) : A[m](...I, l({ resolve: M, reject: N }, f));
                });
              },
            h = (m, f, g) =>
              new Proxy(f, {
                apply(A, I, M) {
                  return g.call(I, m, ...M);
                },
              }),
            y = Function.call.bind(Object.prototype.hasOwnProperty),
            T = (m, f = {}, g = {}) => {
              let A = Object.create(null),
                I = {
                  has(N, _) {
                    return _ in m || _ in A;
                  },
                  get(N, _, F) {
                    if (_ in A) return A[_];
                    if (!(_ in m)) return;
                    let R = m[_];
                    if (typeof R == "function")
                      if (typeof f[_] == "function") R = h(m, m[_], f[_]);
                      else if (y(g, _)) {
                        let B = o(_, g[_]);
                        R = h(m, m[_], B);
                      } else R = R.bind(m);
                    else if (typeof R == "object" && R !== null && (y(f, _) || y(g, _)))
                      R = T(R, f[_], g[_]);
                    else if (y(g, "*")) R = T(R, f[_], g["*"]);
                    else
                      return (
                        Object.defineProperty(A, _, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return m[_];
                          },
                          set(B) {
                            m[_] = B;
                          },
                        }),
                        R
                      );
                    return ((A[_] = R), R);
                  },
                  set(N, _, F, R) {
                    return (_ in A ? (A[_] = F) : (m[_] = F), !0);
                  },
                  defineProperty(N, _, F) {
                    return Reflect.defineProperty(A, _, F);
                  },
                  deleteProperty(N, _) {
                    return Reflect.deleteProperty(A, _);
                  },
                },
                M = Object.create(m);
              return new Proxy(M, I);
            },
            w = (m) => ({
              addListener(f, g, ...A) {
                f.addListener(m.get(g), ...A);
              },
              hasListener(f, g) {
                return f.hasListener(m.get(g));
              },
              removeListener(f, g) {
                f.removeListener(m.get(g));
              },
            }),
            S = new a((m) =>
              typeof m != "function"
                ? m
                : function (g) {
                    let A = T(g, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    m(A);
                  },
            ),
            s = new a((m) =>
              typeof m != "function"
                ? m
                : function (g, A, I) {
                    let M = !1,
                      N,
                      _ = new Promise((H) => {
                        N = function (k) {
                          ((M = !0), H(k));
                        };
                      }),
                      F;
                    try {
                      F = m(g, A, N);
                    } catch (H) {
                      F = Promise.reject(H);
                    }
                    let R = F !== !0 && u(F);
                    if (F !== !0 && !R && !M) return !1;
                    let B = (H) => {
                      H.then(
                        (k) => {
                          I(k);
                        },
                        (k) => {
                          let te;
                          (k && (k instanceof Error || typeof k.message == "string")
                            ? (te = k.message)
                            : (te = "An unexpected error occurred"),
                            I({ __mozWebExtensionPolyfillReject__: !0, message: te }));
                        },
                      ).catch((k) => {
                        console.error("Failed to send onMessage rejected reply", k);
                      });
                    };
                    return (B(R ? F : _), !0);
                  },
            ),
            C = ({ reject: m, resolve: f }, g) => {
              e.runtime.lastError
                ? e.runtime.lastError.message === r
                  ? f()
                  : m(new Error(e.runtime.lastError.message))
                : g && g.__mozWebExtensionPolyfillReject__
                  ? m(new Error(g.message))
                  : f(g);
            },
            E = (m, f, g, ...A) => {
              if (A.length < f.minArgs)
                throw new Error(
                  `Expected at least ${f.minArgs} ${d(f.minArgs)} for ${m}(), got ${A.length}`,
                );
              if (A.length > f.maxArgs)
                throw new Error(
                  `Expected at most ${f.maxArgs} ${d(f.maxArgs)} for ${m}(), got ${A.length}`,
                );
              return new Promise((I, M) => {
                let N = C.bind(null, { resolve: I, reject: M });
                (A.push(N), g.sendMessage(...A));
              });
            },
            p = {
              devtools: { network: { onRequestFinished: w(S) } },
              runtime: {
                onMessage: w(s),
                onMessageExternal: w(s),
                sendMessage: E.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: E.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            c = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (n.privacy = { network: { "*": c }, services: { "*": c }, websites: { "*": c } }),
            T(e, p, n)
          );
        };
      i.exports = t(chrome);
    }
  });
});
var xe = he((fr, Ee) => {
  var q;
  typeof window < "u"
    ? (q = window)
    : typeof global < "u"
      ? (q = global)
      : typeof self < "u"
        ? (q = self)
        : (q = {});
  Ee.exports = q;
});
var K = ye(Ae(), 1);
var vt = new BroadcastChannel("worker_service");
var Y = {
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
async function Be(i, r) {
  await K.default.runtime.sendMessage({ msg: i, channel: r });
}
function ie(i) {
  let r = Y.FromInjectedToService;
  Be(i, r);
}
function ne(i) {
  let r = (t) => {
    t.channel == Y.FromServiceToInjected && i(t.msg);
  };
  return (
    K.default.runtime.onMessage.addListener(r),
    () => {
      K.default.runtime.onMessage.removeListener(r);
    }
  );
}
function L(i) {
  var r = String(i);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(i);
    } catch {}
  return r;
}
var He = (function () {
    function i() {}
    return (
      (i.prototype.isSome = function () {
        return !1;
      }),
      (i.prototype.isNone = function () {
        return !0;
      }),
      (i.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (i.prototype.unwrapOr = function (r) {
        return r;
      }),
      (i.prototype.expect = function (r) {
        throw new Error("".concat(r));
      }),
      (i.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (i.prototype.map = function (r) {
        return this;
      }),
      (i.prototype.mapOr = function (r, t) {
        return r;
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return r();
      }),
      (i.prototype.or = function (r) {
        return r;
      }),
      (i.prototype.orElse = function (r) {
        return r();
      }),
      (i.prototype.andThen = function (r) {
        return this;
      }),
      (i.prototype.toResult = function (r) {
        return v(r);
      }),
      (i.prototype.toString = function () {
        return "None";
      }),
      (i.prototype.toAsyncOption = function () {
        return new z(b);
      }),
      i
    );
  })(),
  b = new He();
Object.freeze(b);
var ze = (function () {
    function i(r) {
      if (!(this instanceof i)) return new i(r);
      this.value = r;
    }
    return (
      (i.prototype.isSome = function () {
        return !0;
      }),
      (i.prototype.isNone = function () {
        return !1;
      }),
      (i.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (i.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (i.prototype.expect = function (r) {
        return this.value;
      }),
      (i.prototype.unwrap = function () {
        return this.value;
      }),
      (i.prototype.map = function (r) {
        return x(r(this.value));
      }),
      (i.prototype.mapOr = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.or = function (r) {
        return this;
      }),
      (i.prototype.orElse = function (r) {
        return this;
      }),
      (i.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (i.prototype.toResult = function (r) {
        return O(this.value);
      }),
      (i.prototype.toAsyncOption = function () {
        return new z(this);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Some(".concat(L(this.value), ")");
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })(),
  x = ze,
  j;
(function (i) {
  function r() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    for (var u = [], l = 0, d = n; l < d.length; l++) {
      var o = d[l];
      if (o.isSome()) u.push(o.value);
      else return o;
    }
    return x(u);
  }
  i.all = r;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    for (var u = 0, l = n; u < l.length; u++) {
      var d = l[u];
      if (d.isSome()) return d;
    }
    return b;
  }
  i.any = t;
  function e(n) {
    return n instanceof x || n === b;
  }
  i.isOption = e;
})(j || (j = {}));
var $ = function (i, r, t) {
    if (t || arguments.length === 2)
      for (var e = 0, n = r.length, a; e < n; e++)
        (a || !(e in r)) && (a || (a = Array.prototype.slice.call(r, 0, e)), (a[e] = r[e]));
    return i.concat(a || Array.prototype.slice.call(r));
  },
  Ge = (function () {
    function i(r) {
      if (!(this instanceof i)) return new i(r);
      this.error = r;
      var t = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (t && t.length > 0 && t[0].includes("ErrImpl") && t.shift(),
        (this._stack = t.join(`
`)));
    }
    return (
      (i.prototype.isOk = function () {
        return !1;
      }),
      (i.prototype.isErr = function () {
        return !0;
      }),
      (i.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (i.prototype.else = function (r) {
        return r;
      }),
      (i.prototype.unwrapOr = function (r) {
        return r;
      }),
      (i.prototype.expect = function (r) {
        throw new Error(
          ""
            .concat(r, " - Error: ")
            .concat(
              L(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (i.prototype.expectErr = function (r) {
        return this.error;
      }),
      (i.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              L(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (i.prototype.unwrapErr = function () {
        return this.error;
      }),
      (i.prototype.map = function (r) {
        return this;
      }),
      (i.prototype.andThen = function (r) {
        return this;
      }),
      (i.prototype.mapErr = function (r) {
        return new v(r(this.error));
      }),
      (i.prototype.mapOr = function (r, t) {
        return r;
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return r(this.error);
      }),
      (i.prototype.or = function (r) {
        return r;
      }),
      (i.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (i.prototype.toOption = function () {
        return b;
      }),
      (i.prototype.toString = function () {
        return "Err(".concat(L(this.error), ")");
      }),
      Object.defineProperty(i.prototype, "stack", {
        get: function () {
          return ""
            .concat(
              this,
              `
`,
            )
            .concat(this._stack);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.toAsyncResult = function () {
        return new G(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var v = Ge,
  qe = (function () {
    function i(r) {
      if (!(this instanceof i)) return new i(r);
      this.value = r;
    }
    return (
      (i.prototype.isOk = function () {
        return !0;
      }),
      (i.prototype.isErr = function () {
        return !1;
      }),
      (i.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (i.prototype.else = function (r) {
        return this.value;
      }),
      (i.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (i.prototype.expect = function (r) {
        return this.value;
      }),
      (i.prototype.expectErr = function (r) {
        throw new Error(r);
      }),
      (i.prototype.unwrap = function () {
        return this.value;
      }),
      (i.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(L(this.value)), { cause: this.value });
      }),
      (i.prototype.map = function (r) {
        return new O(r(this.value));
      }),
      (i.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (i.prototype.mapErr = function (r) {
        return this;
      }),
      (i.prototype.mapOr = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.or = function (r) {
        return this;
      }),
      (i.prototype.orElse = function (r) {
        return this;
      }),
      (i.prototype.toOption = function () {
        return x(this.value);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Ok(".concat(L(this.value), ")");
      }),
      (i.prototype.toAsyncResult = function () {
        return new G(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var O = qe,
  Q;
(function (i) {
  function r(l) {
    for (var d = [], o = 1; o < arguments.length; o++) d[o - 1] = arguments[o];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : $([l], d, !0), y = [], T = 0, w = h;
      T < w.length;
      T++
    ) {
      var S = w[T];
      if (S.isOk()) y.push(S.value);
      else return S;
    }
    return new O(y);
  }
  i.all = r;
  function t(l) {
    for (var d = [], o = 1; o < arguments.length; o++) d[o - 1] = arguments[o];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : $([l], d, !0), y = [], T = 0, w = h;
      T < w.length;
      T++
    ) {
      var S = w[T];
      if (S.isOk()) return S;
      y.push(S.error);
    }
    return new v(y);
  }
  i.any = t;
  function e(l) {
    try {
      return new O(l());
    } catch (d) {
      return new v(d);
    }
  }
  i.wrap = e;
  function n(l) {
    try {
      return l()
        .then(function (d) {
          return new O(d);
        })
        .catch(function (d) {
          return new v(d);
        });
    } catch (d) {
      return Promise.resolve(new v(d));
    }
  }
  i.wrapAsync = n;
  function a(l) {
    return l.reduce(
      function (d, o) {
        var h = d[0],
          y = d[1];
        return o.isOk() ? [$($([], h, !0), [o.value], !1), y] : [h, $($([], y, !0), [o.error], !1)];
      },
      [[], []],
    );
  }
  i.partition = a;
  function u(l) {
    return l instanceof v || l instanceof O;
  }
  i.isResult = u;
})(Q || (Q = {}));
var J = function (i, r, t, e) {
    function n(a) {
      return a instanceof t
        ? a
        : new t(function (u) {
            u(a);
          });
    }
    return new (t || (t = Promise))(function (a, u) {
      function l(h) {
        try {
          o(e.next(h));
        } catch (y) {
          u(y);
        }
      }
      function d(h) {
        try {
          o(e.throw(h));
        } catch (y) {
          u(y);
        }
      }
      function o(h) {
        h.done ? a(h.value) : n(h.value).then(l, d);
      }
      o((e = e.apply(i, r || [])).next());
    });
  },
  Z = function (i, r) {
    var t = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      e,
      n,
      a,
      u;
    return (
      (u = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (u[Symbol.iterator] = function () {
          return this;
        }),
      u
    );
    function l(o) {
      return function (h) {
        return d([o, h]);
      };
    }
    function d(o) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; u && ((u = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            n &&
              (a =
                o[0] & 2
                  ? n.return
                  : o[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, o[1])).done)
          )
            return a;
          switch (((n = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (n = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((a = t.trys), !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < a[1]) {
                ((t.label = a[1]), (a = o));
                break;
              }
              if (a && t.label < a[2]) {
                ((t.label = a[2]), t.ops.push(o));
                break;
              }
              (a[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(i, t);
        } catch (h) {
          ((o = [6, h]), (n = 0));
        } finally {
          e = a = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  G = (function () {
    function i(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (i.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return J(t, void 0, void 0, function () {
            var n;
            return Z(this, function (a) {
              return e.isErr() ? [2, e] : ((n = r(e.value)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return J(t, void 0, void 0, function () {
            var n;
            return Z(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isErr() ? [2, e] : ((n = O), [4, r(e.value)]);
                case 1:
                  return [2, n.apply(void 0, [a.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.mapErr = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return J(t, void 0, void 0, function () {
            var n;
            return Z(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isOk() ? [2, e] : ((n = v), [4, r(e.error)]);
                case 1:
                  return [2, n.apply(void 0, [a.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (i.prototype.orElse = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return J(t, void 0, void 0, function () {
            var n;
            return Z(this, function (a) {
              return e.isOk() ? [2, e] : ((n = r(e.error)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.toOption = function () {
        return new z(
          this.promise.then(function (r) {
            return r.toOption();
          }),
        );
      }),
      (i.prototype.thenInternal = function (r) {
        return new i(this.promise.then(r));
      }),
      i
    );
  })();
var ae = function (i, r, t, e) {
    function n(a) {
      return a instanceof t
        ? a
        : new t(function (u) {
            u(a);
          });
    }
    return new (t || (t = Promise))(function (a, u) {
      function l(h) {
        try {
          o(e.next(h));
        } catch (y) {
          u(y);
        }
      }
      function d(h) {
        try {
          o(e.throw(h));
        } catch (y) {
          u(y);
        }
      }
      function o(h) {
        h.done ? a(h.value) : n(h.value).then(l, d);
      }
      o((e = e.apply(i, r || [])).next());
    });
  },
  se = function (i, r) {
    var t = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      e,
      n,
      a,
      u;
    return (
      (u = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (u[Symbol.iterator] = function () {
          return this;
        }),
      u
    );
    function l(o) {
      return function (h) {
        return d([o, h]);
      };
    }
    function d(o) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; u && ((u = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            n &&
              (a =
                o[0] & 2
                  ? n.return
                  : o[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, o[1])).done)
          )
            return a;
          switch (((n = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (n = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((a = t.trys), !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < a[1]) {
                ((t.label = a[1]), (a = o));
                break;
              }
              if (a && t.label < a[2]) {
                ((t.label = a[2]), t.ops.push(o));
                break;
              }
              (a[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(i, t);
        } catch (h) {
          ((o = [6, h]), (n = 0));
        } finally {
          e = a = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  z = (function () {
    function i(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (i.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ae(t, void 0, void 0, function () {
            var n;
            return se(this, function (a) {
              return e.isNone() ? [2, e] : ((n = r(e.value)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ae(t, void 0, void 0, function () {
            var n;
            return se(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isNone() ? [2, e] : ((n = x), [4, r(e.value)]);
                case 1:
                  return [2, n.apply(void 0, [a.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (i.prototype.orElse = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ae(t, void 0, void 0, function () {
            var n;
            return se(this, function (a) {
              return e.isSome() ? [2, e] : ((n = r()), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.toResult = function (r) {
        return new G(
          this.promise.then(function (t) {
            return t.toResult(r);
          }),
        );
      }),
      (i.prototype.thenInternal = function (r) {
        return new i(this.promise.then(r));
      }),
      i
    );
  })();
function U(i) {
  if (typeof i == "string") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "number") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "boolean") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i > "u") return { __serde_tag: "primitive", __serde_val: i };
  if (i == null) return { __serde_tag: "primitive", __serde_val: i };
  if (Array.isArray(i)) return { __serde_tag: "array", __serde_val: i.map((r) => U(r)) };
  if (i instanceof URL) return { __serde_tag: "url", __serde_val: i.href };
  if (i instanceof Headers) {
    let r = [];
    return (
      i.forEach((t, e) => {
        r.push([e, t]);
      }),
      { __serde_tag: "headers", __serde_val: r }
    );
  } else {
    if (i instanceof Set) return { __serde_tag: "set", __serde_val: [...i.values()].map(U) };
    if (i instanceof Map)
      return { __serde_tag: "map", __serde_val: [...i.entries()].map(([r, t]) => [U(r), U(t)]) };
    if (i instanceof RegExp) return { __serde_tag: "regex", __serde_val: [i.source, i.flags] };
    if (j.isOption(i))
      return i.isSome()
        ? { __serde_tag: "some", __serde_val: U(i.value) }
        : { __serde_tag: "none" };
    if (Q.isResult(i))
      return i.isOk()
        ? { __serde_tag: "ok", __serde_val: U(i.value) }
        : { __serde_tag: "err", __serde_val: U(i.error) };
    if (typeof i == "object") {
      let r = {};
      for (let [t, e] of Object.entries(i)) r[t] = U(e);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
function oe(i, r = 0) {
  let t = 3735928559 ^ r,
    e = 1103547991 ^ r;
  for (let n = 0, a; n < i.length; n++)
    ((a = i.charCodeAt(n)), (t = Math.imul(t ^ a, 2654435761)), (e = Math.imul(e ^ a, 1597334677)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t ^= Math.imul(e ^ (e >>> 13), 3266489909)),
    (e = Math.imul(e ^ (e >>> 16), 2246822507)),
    (e ^= Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & e) + (t >>> 0)
  );
}
function ue(i, r) {
  let t = new URLSearchParams();
  for (let [e, n] of i) t.set(e, n);
  for (let [e, n] of r) t.set(e, n);
  return t.toString();
}
function P(i, r) {
  try {
    if (i) return x(new URL(i, r));
  } catch {}
  return b;
}
var We = ["mp4", "webm", "mkv"],
  Ye = ["mp3", "m4a", "ogg"],
  Ke = [...We, ...Ye];
var je = [
  { mime_reg: /(avc1|avc3).*/i, demuxer: "mp4", codec: "H264" },
  { mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i, demuxer: "mp4", codec: "H265" },
  { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
  { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
  { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
  { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
];
function be(i) {
  for (let r of je) if (r.mime_reg.test(i)) return x(r.demuxer);
  return b;
}
function Je(i, r) {
  let a = i.size.map((o) => o.height).unwrapOr(0),
    u = r.size.map((o) => o.height).unwrapOr(0),
    l = i.bitrate.unwrapOr(0),
    d = r.bitrate.unwrapOr(0);
  return a > u ? -1 : a < u ? 1 : l > d ? -1 : l < d ? 1 : 0;
}
function Te(i) {
  return [...i.values()].sort((r, t) => Je(r.quality, t.quality));
}
function ve(i) {
  return i.length > 0;
}
var ee = (function () {
  function i() {
    this.listeners = {};
  }
  var r = i.prototype;
  return (
    (r.on = function (e, n) {
      (this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(n));
    }),
    (r.off = function (e, n) {
      if (!this.listeners[e]) return !1;
      var a = this.listeners[e].indexOf(n);
      return (
        (this.listeners[e] = this.listeners[e].slice(0)),
        this.listeners[e].splice(a, 1),
        a > -1
      );
    }),
    (r.trigger = function (e) {
      var n = this.listeners[e];
      if (n)
        if (arguments.length === 2)
          for (var a = n.length, u = 0; u < a; ++u) n[u].call(this, arguments[1]);
        else
          for (var l = Array.prototype.slice.call(arguments, 1), d = n.length, o = 0; o < d; ++o)
            n[o].apply(this, l);
    }),
    (r.dispose = function () {
      this.listeners = {};
    }),
    (r.pipe = function (e) {
      this.on("data", function (n) {
        e.push(n);
      });
    }),
    i
  );
})();
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var e in t) ({}).hasOwnProperty.call(t, e) && (i[e] = t[e]);
          }
          return i;
        }),
    V.apply(null, arguments)
  );
}
var le = ye(xe()),
  et = function (r) {
    return le.default.atob ? le.default.atob(r) : Buffer.from(r, "base64").toString("binary");
  };
function me(i) {
  for (var r = et(i), t = new Uint8Array(r.length), e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return t;
}
var fe = class extends ee {
    constructor() {
      (super(), (this.buffer = ""));
    }
    push(r) {
      let t;
      for (
        this.buffer += r,
          t = this.buffer.indexOf(`
`);
        t > -1;
        t = this.buffer.indexOf(`
`)
      )
        (this.trigger("data", this.buffer.substring(0, t)),
          (this.buffer = this.buffer.substring(t + 1)));
    }
  },
  tt = "	",
  de = function (i) {
    let r = /([0-9.]*)?@?([0-9.]*)?/.exec(i || ""),
      t = {};
    return (r[1] && (t.length = parseInt(r[1], 10)), r[2] && (t.offset = parseInt(r[2], 10)), t);
  },
  rt = function () {
    let t = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + t + ")");
  },
  D = function (i) {
    let r = {};
    if (!i) return r;
    let t = i.split(rt()),
      e = t.length,
      n;
    for (; e--; )
      t[e] !== "" &&
        ((n = /([^=]*)=(.*)/.exec(t[e]).slice(1)),
        (n[0] = n[0].replace(/^\s+|\s+$/g, "")),
        (n[1] = n[1].replace(/^\s+|\s+$/g, "")),
        (n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1")),
        (r[n[0]] = n[1]));
    return r;
  },
  Se = (i) => {
    let r = i.split("x"),
      t = {};
    return (r[0] && (t.width = parseInt(r[0], 10)), r[1] && (t.height = parseInt(r[1], 10)), t);
  },
  ge = class extends ee {
    constructor() {
      (super(), (this.customParsers = []), (this.tagMappers = []));
    }
    push(r) {
      let t, e;
      if (((r = r.trim()), r.length === 0)) return;
      if (r[0] !== "#") {
        this.trigger("data", { type: "uri", uri: r });
        return;
      }
      this.tagMappers
        .reduce(
          (a, u) => {
            let l = u(r);
            return l === r ? a : a.concat([l]);
          },
          [r],
        )
        .forEach((a) => {
          for (let u = 0; u < this.customParsers.length; u++)
            if (this.customParsers[u].call(this, a)) return;
          if (a.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: a.slice(1) });
            return;
          }
          if (((a = a.replace("\r", "")), (t = /^#EXTM3U/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((t = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "inf" }),
              t[1] && (e.duration = parseFloat(t[1])),
              t[2] && (e.title = t[2]),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "targetduration" }),
              t[1] && (e.duration = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-VERSION:([0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "version" }),
              t[1] && (e.version = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "media-sequence" }),
              t[1] && (e.number = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "discontinuity-sequence" }),
              t[1] && (e.number = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "playlist-type" }),
              t[1] && (e.playlistType = t[1]),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-BYTERANGE:(.*)?$/.exec(a)), t)) {
            ((e = V(de(t[1]), { type: "tag", tagType: "byterange" })), this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "allow-cache" }),
              t[1] && (e.allowed = !/NO/.test(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MAP:(.*)$/.exec(a)), t)) {
            if (((e = { type: "tag", tagType: "map" }), t[1])) {
              let u = D(t[1]);
              (u.URI && (e.uri = u.URI), u.BYTERANGE && (e.byterange = de(u.BYTERANGE)));
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-STREAM-INF:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "stream-inf" }),
              t[1] &&
                ((e.attributes = D(t[1])),
                e.attributes.RESOLUTION && (e.attributes.RESOLUTION = Se(e.attributes.RESOLUTION)),
                e.attributes.BANDWIDTH &&
                  (e.attributes.BANDWIDTH = parseInt(e.attributes.BANDWIDTH, 10)),
                e.attributes["FRAME-RATE"] &&
                  (e.attributes["FRAME-RATE"] = parseFloat(e.attributes["FRAME-RATE"])),
                e.attributes["PROGRAM-ID"] &&
                  (e.attributes["PROGRAM-ID"] = parseInt(e.attributes["PROGRAM-ID"], 10))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MEDIA:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "media" }),
              t[1] && (e.attributes = D(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-ENDLIST/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((t = /^#EXT-X-DISCONTINUITY/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((t = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "program-date-time" }),
              t[1] && ((e.dateTimeString = t[1]), (e.dateTimeObject = new Date(t[1]))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-KEY:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "key" }),
              t[1] &&
                ((e.attributes = D(t[1])),
                e.attributes.IV &&
                  (e.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                    (e.attributes.IV = e.attributes.IV.substring(2)),
                  (e.attributes.IV = e.attributes.IV.match(/.{8}/g)),
                  (e.attributes.IV[0] = parseInt(e.attributes.IV[0], 16)),
                  (e.attributes.IV[1] = parseInt(e.attributes.IV[1], 16)),
                  (e.attributes.IV[2] = parseInt(e.attributes.IV[2], 16)),
                  (e.attributes.IV[3] = parseInt(e.attributes.IV[3], 16)),
                  (e.attributes.IV = new Uint32Array(e.attributes.IV)))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-START:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "start" }),
              t[1] &&
                ((e.attributes = D(t[1])),
                (e.attributes["TIME-OFFSET"] = parseFloat(e.attributes["TIME-OFFSET"])),
                (e.attributes.PRECISE = /YES/.test(e.attributes.PRECISE))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "cue-out-cont" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-OUT:(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "cue-out" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "cue-in" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SKIP:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "skip" }),
              (e.attributes = D(t[1])),
              e.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (e.attributes["SKIPPED-SEGMENTS"] = parseInt(e.attributes["SKIPPED-SEGMENTS"], 10)),
              e.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (e.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  e.attributes["RECENTLY-REMOVED-DATERANGES"].split(tt)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "part" }),
              (e.attributes = D(t[1])),
              ["DURATION"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = /YES/.test(e.attributes[u]));
              }),
              e.attributes.hasOwnProperty("BYTERANGE") &&
                (e.attributes.byterange = de(e.attributes.BYTERANGE)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "server-control" }),
              (e.attributes = D(t[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = /YES/.test(e.attributes[u]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART-INF:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "part-inf" }),
              (e.attributes = D(t[1])),
              ["PART-TARGET"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "preload-hint" }),
              (e.attributes = D(t[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (u) {
                if (e.attributes.hasOwnProperty(u)) {
                  e.attributes[u] = parseInt(e.attributes[u], 10);
                  let l = u === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((e.attributes.byterange = e.attributes.byterange || {}),
                    (e.attributes.byterange[l] = e.attributes[u]),
                    delete e.attributes[u]);
                }
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "rendition-report" }),
              (e.attributes = D(t[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseInt(e.attributes[u], 10));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DATERANGE:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "daterange" }),
              (e.attributes = D(t[1])),
              ["ID", "CLASS"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) && (e.attributes[l] = String(e.attributes[l]));
              }),
              ["START-DATE", "END-DATE"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) && (e.attributes[l] = new Date(e.attributes[l]));
              }),
              ["DURATION", "PLANNED-DURATION"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) && (e.attributes[l] = parseFloat(e.attributes[l]));
              }),
              ["END-ON-NEXT"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) && (e.attributes[l] = /YES/i.test(e.attributes[l]));
              }),
              ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) && (e.attributes[l] = e.attributes[l].toString(16));
              }));
            let u = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let l in e.attributes) {
              if (!u.test(l)) continue;
              let d = /[0-9A-Fa-f]{6}/g.test(e.attributes[l]),
                o = /^\d+(\.\d+)?$/.test(e.attributes[l]);
              e.attributes[l] = d
                ? e.attributes[l].toString(16)
                : o
                  ? parseFloat(e.attributes[l])
                  : String(e.attributes[l]);
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "independent-segments" });
            return;
          }
          if (((t = /^#EXT-X-I-FRAMES-ONLY/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((t = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "content-steering" }),
              (e.attributes = D(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "i-frame-playlist" }),
              (e.attributes = D(t[1])),
              e.attributes.URI && (e.uri = e.attributes.URI),
              e.attributes.BANDWIDTH &&
                (e.attributes.BANDWIDTH = parseInt(e.attributes.BANDWIDTH, 10)),
              e.attributes.RESOLUTION && (e.attributes.RESOLUTION = Se(e.attributes.RESOLUTION)),
              e.attributes["AVERAGE-BANDWIDTH"] &&
                (e.attributes["AVERAGE-BANDWIDTH"] = parseInt(
                  e.attributes["AVERAGE-BANDWIDTH"],
                  10,
                )),
              e.attributes["FRAME-RATE"] &&
                (e.attributes["FRAME-RATE"] = parseFloat(e.attributes["FRAME-RATE"])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DEFINE:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "define" }),
              (e.attributes = D(t[1])),
              this.trigger("data", e));
            return;
          }
          this.trigger("data", { type: "tag", data: a.slice(4) });
        });
    }
    addParser({ expression: r, customType: t, dataParser: e, segment: n }) {
      (typeof e != "function" && (e = (a) => a),
        this.customParsers.push((a) => {
          if (r.exec(a))
            return (
              this.trigger("data", { type: "custom", data: e(a), customType: t, segment: n }),
              !0
            );
        }));
    }
    addTagMapper({ expression: r, map: t }) {
      let e = (n) => (r.test(n) ? t(n) : n);
      this.tagMappers.push(e);
    }
  },
  it = (i) => i.toLowerCase().replace(/-(\w)/g, (r) => r[1].toUpperCase()),
  X = function (i) {
    let r = {};
    return (
      Object.keys(i).forEach(function (t) {
        r[it(t)] = i[t];
      }),
      r
    );
  },
  ce = function (i) {
    let { serverControl: r, targetDuration: t, partTargetDuration: e } = i;
    if (!r) return;
    let n = "#EXT-X-SERVER-CONTROL",
      a = "holdBack",
      u = "partHoldBack",
      l = t && t * 3,
      d = e && e * 2;
    (t &&
      !r.hasOwnProperty(a) &&
      ((r[a] = l),
      this.trigger("info", { message: `${n} defaulting HOLD-BACK to targetDuration * 3 (${l}).` })),
      l &&
        r[a] < l &&
        (this.trigger("warn", {
          message: `${n} clamping HOLD-BACK (${r[a]}) to targetDuration * 3 (${l})`,
        }),
        (r[a] = l)),
      e &&
        !r.hasOwnProperty(u) &&
        ((r[u] = e * 3),
        this.trigger("info", {
          message: `${n} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${r[u]}).`,
        })),
      e &&
        r[u] < d &&
        (this.trigger("warn", {
          message: `${n} clamping PART-HOLD-BACK (${r[u]}) to partTargetDuration * 2 (${d}).`,
        }),
        (r[u] = d)));
  },
  W = class extends ee {
    constructor(r = {}) {
      (super(),
        (this.lineStream = new fe()),
        (this.parseStream = new ge()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = r.mainDefinitions || {}),
        (this.params = new URL(r.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let t = this,
        e = [],
        n = {},
        a,
        u,
        l = !1,
        d = function () {},
        o = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        h = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        y = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let T = 0,
        w = 0,
        S = {};
      (this.on("end", () => {
        n.uri ||
          (!n.parts && !n.preloadHints) ||
          (!n.map && a && (n.map = a),
          !n.key && u && (n.key = u),
          !n.timeline && typeof y == "number" && (n.timeline = y),
          (this.manifest.preloadSegment = n));
      }),
        this.parseStream.on("data", function (s) {
          let C, E;
          if (t.manifest.definitions) {
            for (let p in t.manifest.definitions)
              if (
                (s.uri && (s.uri = s.uri.replace(`{$${p}}`, t.manifest.definitions[p])),
                s.attributes)
              )
                for (let c in s.attributes)
                  typeof s.attributes[c] == "string" &&
                    (s.attributes[c] = s.attributes[c].replace(
                      `{$${p}}`,
                      t.manifest.definitions[p],
                    ));
          }
          ({
            tag() {
              (
                ({
                  version() {
                    s.version && (this.manifest.version = s.version);
                  },
                  "allow-cache"() {
                    ((this.manifest.allowCache = s.allowed),
                      "allowed" in s ||
                        (this.trigger("info", { message: "defaulting allowCache to YES" }),
                        (this.manifest.allowCache = !0)));
                  },
                  byterange() {
                    let p = {};
                    ("length" in s &&
                      ((n.byterange = p), (p.length = s.length), "offset" in s || (s.offset = T)),
                      "offset" in s && ((n.byterange = p), (p.offset = s.offset)),
                      (T = p.offset + p.length));
                  },
                  endlist() {
                    this.manifest.endList = !0;
                  },
                  inf() {
                    ("mediaSequence" in this.manifest ||
                      ((this.manifest.mediaSequence = 0),
                      this.trigger("info", { message: "defaulting media sequence to zero" })),
                      "discontinuitySequence" in this.manifest ||
                        ((this.manifest.discontinuitySequence = 0),
                        this.trigger("info", {
                          message: "defaulting discontinuity sequence to zero",
                        })),
                      s.title && (n.title = s.title),
                      s.duration > 0 && (n.duration = s.duration),
                      s.duration === 0 &&
                        ((n.duration = 0.01),
                        this.trigger("info", {
                          message: "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = e));
                  },
                  key() {
                    if (!s.attributes) {
                      this.trigger("warn", {
                        message: "ignoring key declaration without attribute list",
                      });
                      return;
                    }
                    if (s.attributes.METHOD === "NONE") {
                      u = null;
                      return;
                    }
                    if (!s.attributes.URI) {
                      this.trigger("warn", { message: "ignoring key declaration without URI" });
                      return;
                    }
                    if (s.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.apple.fps.1_0"] = {
                          attributes: s.attributes,
                        }));
                      return;
                    }
                    if (s.attributes.KEYFORMAT === "com.microsoft.playready") {
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.microsoft.playready"] = {
                          uri: s.attributes.URI,
                        }));
                      return;
                    }
                    if (s.attributes.KEYFORMAT === h) {
                      if (
                        ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(
                          s.attributes.METHOD,
                        ) === -1
                      ) {
                        this.trigger("warn", {
                          message: "invalid key method provided for Widevine",
                        });
                        return;
                      }
                      if (
                        (s.attributes.METHOD === "SAMPLE-AES-CENC" &&
                          this.trigger("warn", {
                            message:
                              "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                          }),
                        s.attributes.URI.substring(0, 23) !== "data:text/plain;base64,")
                      ) {
                        this.trigger("warn", { message: "invalid key URI provided for Widevine" });
                        return;
                      }
                      if (!(s.attributes.KEYID && s.attributes.KEYID.substring(0, 2) === "0x")) {
                        this.trigger("warn", { message: "invalid key ID provided for Widevine" });
                        return;
                      }
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.widevine.alpha"] = {
                          attributes: {
                            schemeIdUri: s.attributes.KEYFORMAT,
                            keyId: s.attributes.KEYID.substring(2),
                          },
                          pssh: me(s.attributes.URI.split(",")[1]),
                        }));
                      return;
                    }
                    (s.attributes.METHOD ||
                      this.trigger("warn", { message: "defaulting key method to AES-128" }),
                      (u = { method: s.attributes.METHOD || "AES-128", uri: s.attributes.URI }),
                      typeof s.attributes.IV < "u" && (u.iv = s.attributes.IV));
                  },
                  "media-sequence"() {
                    if (!isFinite(s.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid media sequence: " + s.number,
                      });
                      return;
                    }
                    this.manifest.mediaSequence = s.number;
                  },
                  "discontinuity-sequence"() {
                    if (!isFinite(s.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid discontinuity sequence: " + s.number,
                      });
                      return;
                    }
                    ((this.manifest.discontinuitySequence = s.number), (y = s.number));
                  },
                  "playlist-type"() {
                    if (!/VOD|EVENT/.test(s.playlistType)) {
                      this.trigger("warn", {
                        message: "ignoring unknown playlist type: " + s.playlist,
                      });
                      return;
                    }
                    this.manifest.playlistType = s.playlistType;
                  },
                  map() {
                    ((a = {}),
                      s.uri && (a.uri = s.uri),
                      s.byterange && (a.byterange = s.byterange),
                      u && (a.key = u));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = e),
                      (this.manifest.mediaGroups = this.manifest.mediaGroups || o),
                      !s.attributes)
                    ) {
                      this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
                      return;
                    }
                    (n.attributes || (n.attributes = {}), V(n.attributes, s.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups = this.manifest.mediaGroups || o),
                      !(
                        s.attributes &&
                        s.attributes.TYPE &&
                        s.attributes["GROUP-ID"] &&
                        s.attributes.NAME
                      ))
                    ) {
                      this.trigger("warn", {
                        message: "ignoring incomplete or missing media group",
                      });
                      return;
                    }
                    let p = this.manifest.mediaGroups[s.attributes.TYPE];
                    ((p[s.attributes["GROUP-ID"]] = p[s.attributes["GROUP-ID"]] || {}),
                      (C = p[s.attributes["GROUP-ID"]]),
                      (E = { default: /yes/i.test(s.attributes.DEFAULT) }),
                      E.default
                        ? (E.autoselect = !0)
                        : (E.autoselect = /yes/i.test(s.attributes.AUTOSELECT)),
                      s.attributes.LANGUAGE && (E.language = s.attributes.LANGUAGE),
                      s.attributes.URI && (E.uri = s.attributes.URI),
                      s.attributes["INSTREAM-ID"] && (E.instreamId = s.attributes["INSTREAM-ID"]),
                      s.attributes.CHARACTERISTICS &&
                        (E.characteristics = s.attributes.CHARACTERISTICS),
                      s.attributes.FORCED && (E.forced = /yes/i.test(s.attributes.FORCED)),
                      (C[s.attributes.NAME] = E));
                  },
                  discontinuity() {
                    ((y += 1),
                      (n.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(e.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = s.dateTimeString),
                      (this.manifest.dateTimeObject = s.dateTimeObject)),
                      (n.dateTimeString = s.dateTimeString),
                      (n.dateTimeObject = s.dateTimeObject));
                    let { lastProgramDateTime: p } = this;
                    ((this.lastProgramDateTime = new Date(s.dateTimeString).getTime()),
                      p === null &&
                        this.manifest.segments.reduceRight(
                          (c, m) => ((m.programDateTime = c - m.duration * 1e3), m.programDateTime),
                          this.lastProgramDateTime,
                        ));
                  },
                  targetduration() {
                    if (!isFinite(s.duration) || s.duration < 0) {
                      this.trigger("warn", {
                        message: "ignoring invalid target duration: " + s.duration,
                      });
                      return;
                    }
                    ((this.manifest.targetDuration = s.duration), ce.call(this, this.manifest));
                  },
                  start() {
                    if (!s.attributes || isNaN(s.attributes["TIME-OFFSET"])) {
                      this.trigger("warn", {
                        message: "ignoring start declaration without appropriate attribute list",
                      });
                      return;
                    }
                    this.manifest.start = {
                      timeOffset: s.attributes["TIME-OFFSET"],
                      precise: s.attributes.PRECISE,
                    };
                  },
                  "cue-out"() {
                    n.cueOut = s.data;
                  },
                  "cue-out-cont"() {
                    n.cueOutCont = s.data;
                  },
                  "cue-in"() {
                    n.cueIn = s.data;
                  },
                  skip() {
                    ((this.manifest.skip = X(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-SKIP", s.attributes, [
                        "SKIPPED-SEGMENTS",
                      ]));
                  },
                  part() {
                    l = !0;
                    let p = this.manifest.segments.length,
                      c = X(s.attributes);
                    ((n.parts = n.parts || []),
                      n.parts.push(c),
                      c.byterange &&
                        (c.byterange.hasOwnProperty("offset") || (c.byterange.offset = w),
                        (w = c.byterange.offset + c.byterange.length)));
                    let m = n.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${m} for segment #${p}`,
                      s.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((f, g) => {
                          f.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${g} lacks required attribute(s): LAST-PART`,
                            });
                        }));
                  },
                  "server-control"() {
                    let p = (this.manifest.serverControl = X(s.attributes));
                    (p.hasOwnProperty("canBlockReload") ||
                      ((p.canBlockReload = !1),
                      this.trigger("info", {
                        message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      ce.call(this, this.manifest),
                      p.canSkipDateranges &&
                        !p.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let p = this.manifest.segments.length,
                      c = X(s.attributes),
                      m = c.type && c.type === "PART";
                    ((n.preloadHints = n.preloadHints || []),
                      n.preloadHints.push(c),
                      c.byterange &&
                        (c.byterange.hasOwnProperty("offset") ||
                          ((c.byterange.offset = m ? w : 0),
                          m && (w = c.byterange.offset + c.byterange.length))));
                    let f = n.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${f} for segment #${p}`,
                        s.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!c.type)
                    )
                      for (let g = 0; g < n.preloadHints.length - 1; g++) {
                        let A = n.preloadHints[g];
                        A.type &&
                          A.type === c.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${f} for segment #${p} has the same TYPE ${c.type} as preload hint #${g}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let p = X(s.attributes);
                    ((this.manifest.renditionReports = this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(p));
                    let c = this.manifest.renditionReports.length - 1,
                      m = ["LAST-MSN", "URI"];
                    (l && m.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${c}`,
                        s.attributes,
                        m,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = X(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-PART-INF", s.attributes, [
                        "PART-TARGET",
                      ]),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                      ce.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(X(s.attributes));
                    let p = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${p}`, s.attributes, [
                      "ID",
                      "START-DATE",
                    ]);
                    let c = this.manifest.dateRanges[p];
                    (c.endDate &&
                      c.startDate &&
                      new Date(c.endDate) < new Date(c.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      c.duration &&
                        c.duration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      c.plannedDuration &&
                        c.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let m = !!c.endOnNext;
                    if (
                      (m &&
                        !c.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      m &&
                        (c.duration || c.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      c.duration && c.endDate)
                    ) {
                      let g = c.startDate.getTime() + c.duration * 1e3;
                      this.manifest.dateRanges[p].endDate = new Date(g);
                    }
                    if (!S[c.id]) S[c.id] = c;
                    else {
                      for (let g in S[c.id])
                        if (c[g] && JSON.stringify(S[c.id][g]) !== JSON.stringify(c[g])) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let f = this.manifest.dateRanges.findIndex((g) => g.id === c.id);
                      ((this.manifest.dateRanges[f] = V(this.manifest.dateRanges[f], c)),
                        (S[c.id] = V(S[c.id], c)),
                        this.manifest.dateRanges.pop());
                    }
                  },
                  "independent-segments"() {
                    this.manifest.independentSegments = !0;
                  },
                  "i-frames-only"() {
                    ((this.manifest.iFramesOnly = !0),
                      this.requiredCompatibilityversion(this.manifest.version, 4));
                  },
                  "content-steering"() {
                    ((this.manifest.contentSteering = X(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", s.attributes, [
                        "SERVER-URI",
                      ]));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let p = (c, m) => {
                      if (c in this.manifest.definitions) {
                        this.trigger("error", { message: `EXT-X-DEFINE: Duplicate name ${c}` });
                        return;
                      }
                      this.manifest.definitions[c] = m;
                    };
                    if ("QUERYPARAM" in s.attributes) {
                      if ("NAME" in s.attributes || "IMPORT" in s.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      let c = this.params.get(s.attributes.QUERYPARAM);
                      if (!c) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${s.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      p(s.attributes.QUERYPARAM, decodeURIComponent(c));
                      return;
                    }
                    if ("NAME" in s.attributes) {
                      if ("IMPORT" in s.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      if (!("VALUE" in s.attributes) || typeof s.attributes.VALUE != "string") {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value for ${s.attributes.NAME}`,
                        });
                        return;
                      }
                      p(s.attributes.NAME, s.attributes.VALUE);
                      return;
                    }
                    if ("IMPORT" in s.attributes) {
                      if (!this.mainDefinitions[s.attributes.IMPORT]) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value ${s.attributes.IMPORT} to import, or IMPORT used on main playlist`,
                        });
                        return;
                      }
                      p(s.attributes.IMPORT, this.mainDefinitions[s.attributes.IMPORT]);
                      return;
                    }
                    this.trigger("error", { message: "EXT-X-DEFINE: No attribute" });
                  },
                  "i-frame-playlist"() {
                    (this.manifest.iFramePlaylists.push({
                      attributes: s.attributes,
                      uri: s.uri,
                      timeline: y,
                    }),
                      this.warnOnMissingAttributes_("#EXT-X-I-FRAME-STREAM-INF", s.attributes, [
                        "BANDWIDTH",
                        "URI",
                      ]));
                  },
                })[s.tagType] || d
              ).call(t);
            },
            uri() {
              ((n.uri = s.uri),
                e.push(n),
                this.manifest.targetDuration &&
                  !("duration" in n) &&
                  (this.trigger("warn", {
                    message: "defaulting segment duration to the target duration",
                  }),
                  (n.duration = this.manifest.targetDuration)),
                u && (n.key = u),
                (n.timeline = y),
                a && (n.map = a),
                (w = 0),
                this.lastProgramDateTime !== null &&
                  ((n.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += n.duration * 1e3)),
                (n = {}));
            },
            comment() {},
            custom() {
              s.segment
                ? ((n.custom = n.custom || {}), (n.custom[s.customType] = s.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[s.customType] = s.data));
            },
          })[s.type].call(t);
        }));
    }
    requiredCompatibilityversion(r, t) {
      (r < t || !r) && this.trigger("warn", { message: `manifest must be at least version ${t}` });
    }
    warnOnMissingAttributes_(r, t, e) {
      let n = [];
      (e.forEach(function (a) {
        t.hasOwnProperty(a) || n.push(a);
      }),
        n.length &&
          this.trigger("warn", { message: `${r} lacks required attribute(s): ${n.join(", ")}` }));
    }
    push(r) {
      this.lineStream.push(r);
    }
    end() {
      (this.lineStream.push(`
`),
        this.manifest.dateRanges.length &&
          this.lastProgramDateTime === null &&
          this.trigger("warn", {
            message:
              "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag",
          }),
        (this.lastProgramDateTime = null),
        this.trigger("end"));
    }
    addParser(r) {
      this.parseStream.addParser(r);
    }
    addTagMapper(r) {
      this.parseStream.addTagMapper(r);
    }
  };
var nt = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);
function we(i) {
  return Object.keys(i).some((r) => nt.has(r));
}
function at(i) {
  let r;
  try {
    let n = new W();
    (n.push(i), n.end(), (r = n.manifest));
  } catch {}
  if (!r) return v("parse error");
  let t = r.segments;
  return !Array.isArray(t) || t.length == 0
    ? v("not a valid m3u8")
    : t.every((n) => {
          let u = n.uri.split(/[?#]/)[0];
          return u
            ? u
                .substring(u.lastIndexOf(".") + 1)
                .toLowerCase()
                .match(/vtt|srt|webvtt|ttml/)
            : !1;
        })
      ? v("subtitle playlist")
      : O(r);
}
function st(i) {
  let r = new Date(new Date().getTime() - 6e5);
  return !i.dateTimeObject && !i.programDateTime
    ? !1
    : typeof i.dateTimeObject == "object"
      ? i.dateTimeObject > r
      : typeof i.programDateTime == "number"
        ? i.programDateTime > r.getTime()
        : !1;
}
function ot(i) {
  if (!Array.isArray(i.segments) || i.segments.some((e) => typeof e.duration != "number"))
    return "unknown";
  let r = i.segments[i.segments.length - 1];
  return r && st(r)
    ? "live"
    : i.segments.reduce((e, n) => (typeof n.duration == "number" && (e += n.duration), e), 0);
}
function Re(i, r, t, e = !1, n = !1) {
  let a;
  try {
    let o = new W();
    (o.push(i), o.end(), (a = o.manifest));
  } catch {}
  if (!a) return v("parse error");
  if (!a.playlists) return v("Not a master M3U8");
  let u = a.playlists,
    l = a.mediaGroups.AUDIO ?? {},
    d = [];
  for (let o of u) {
    if (typeof o.uri != "string") continue;
    let h = "mp4";
    if (o.attributes.CODECS) {
      let E = be(o.attributes.CODECS);
      if (E.isNone()) continue;
      h = E.value;
    }
    if (
      (!("FRAME-RATE" in o.attributes) && "RESOLUTION" in o.attributes,
      o.attributes["VIDEO-RANGE"] && o.attributes["VIDEO-RANGE"] == "PQ")
    )
      continue;
    let y = P(o.uri, r.href);
    if (y.isNone()) continue;
    let T = b;
    if (o.attributes.AUDIO) {
      let E = l[o.attributes.AUDIO];
      if (E) {
        for (let p of Object.values(E))
          if (
            (p.uri && (T = P(p.uri, r.href)),
            (t.isSome() && p.language && t.value.includes(p.language)) || p.default)
          )
            break;
      }
    }
    let w = b,
      S = b;
    (o.attributes.RESOLUTION &&
      (w = x({ height: o.attributes.RESOLUTION.height, width: o.attributes.RESOLUTION.width })),
      o.attributes.BANDWIDTH && (S = x(o.attributes.BANDWIDTH)));
    let s = { size: w, bitrate: S },
      C = y.value;
    if ((e ? (C.search = ue(C.searchParams, r.searchParams)) : n && (C.search = ""), T.isSome())) {
      let E = T.value;
      (e ? (E.search = ue(C.searchParams, r.searchParams)) : n && (E.search = ""),
        d.push({ demuxer: h, quality: s, av: { video: C, audio: E } }));
    } else d.push({ demuxer: h, quality: s, av: { video: C, audio: !1 } });
  }
  return ((d = Te(d)), ve(d) ? O(d) : v("Empty playlist"));
}
async function Ie(i) {
  let r = i[0].av.video || i[0].av.audio;
  try {
    let e = await (await fetch(r, { signal: AbortSignal.timeout(5e3) })).text(),
      n = at(e);
    if (n.isOk()) {
      let a = ot(n.value),
        u = ut(n.value);
      return { duration: a, has_drm: u };
    }
  } catch {
    console.warn("request timeout while calculating duration & checking for DRM");
  }
  return { duration: "unknown", has_drm: !1 };
}
function ut(i) {
  return i.contentProtection ? we(i.contentProtection) : !1;
}
var Oe =
  /(?:^|\/\/)(?:m\.)?(?:vk\.com|vk\.ru|vkvideo\.ru)\/(?:clip|video|playlist\/[^/]+\/video)(-?\d+_\d+)/;
function Me(i) {
  ie({ name: "on_media", data: { media: U(i) } });
}
function lt(i) {
  let r = P(i);
  if (r.isSome()) {
    let t = r.value.searchParams.get("list");
    if (t) return x(t);
  }
  return b;
}
async function Pe(i, r) {
  let t = crypto.randomUUID(),
    e = { act: "show", al: "1", video: i };
  return (
    r.isSome() && (e = { ...e, list: r.value }),
    await new Promise((n) => {
      let a = () => {
          (u(), l());
        },
        u = ne((d) => {
          d.name == "on_fetch_from_service" && d.data.uid == t && (n(O(d.data.json)), a());
        }),
        l = ne((d) => {
          d.name == "on_fetch_from_service_failed" &&
            d.data.uid == t &&
            (n(v(`Failed to retrieve data for uid ${t}`)), a());
        });
      ie({
        name: "do_fetch_from_service",
        data: {
          uid: t,
          url: "https://vk.com/al_video.php",
          method: "POST",
          fetch_headers: {
            Origin: "https://vk.com",
            Referer: "https://vk.com/al_video.php",
            "X-Requested-With": "XMLHttpRequest",
          },
          body_params: e,
        },
      });
    })
  );
}
function mt(i, r) {
  return Pe(i, x(r));
}
async function Ne(i) {
  if (i.isSome())
    try {
      let r = await fetch(i.value);
      if (r.ok) {
        let t = await r.text(),
          e = Re(t, i.value, b);
        if (e.isOk()) {
          let n = e.value;
          return O(n);
        }
      }
    } catch (r) {
      return v(`Error Fetching manifest for URL ${i.unwrapOr(void 0)} : ${r}`);
    }
  return v("Error during manifest fetch");
}
async function dt(i, r) {
  let t = i.payload?.[1][4];
  if (t) {
    let e = P(t.mvData.info[2]),
      n = t.player.params;
    if (n) {
      let a = P(n[0]?.hls ?? n[0]?.hls_ondemand),
        u = n[0]?.duration,
        l = await Ne(a);
      return a.isNone()
        ? v(`No HLS URL found for video ID ${r}`)
        : l.isErr()
          ? v(`Error fetching M3U8 master ${l.error}`)
          : O({
              type: "m3u8_playlist",
              discovery_timestamp_ms: Date.now(),
              duration: u,
              hash: `media_hash_${oe(r)}`,
              initiator: P(window.location.href),
              is_youtube: !1,
              playlist: l.value,
              filename: b,
              title: b,
              thumbnail_url: e,
              master_url: a.value,
              sent_headers: new Headers(),
              prefered_entry: b,
            });
    }
  }
  return v(`Invalid data in payload for video ID ${r}`);
}
async function ct(i) {
  let r = new URL(`https://api.live.vkvideo.ru/v1/channel/${i}/stream/slot/default`),
    t = await fetch(r);
  if (t.ok) {
    let e = await t.json();
    return x(e);
  }
  return b;
}
async function ft(i, r) {
  let t = new URL(`https://api.live.vkvideo.ru/v1/blog/${i}/public_video_stream/record/${r}`),
    e = await fetch(t);
  if (e.ok) {
    let n = await e.json();
    return x(n);
  }
  return b;
}
async function gt() {
  let i = /^https:\/\/live\.vkvideo\.ru\/([^\/]+)(?:\/record\/([^\/\?]+))?/,
    r = window.location.href.match(i),
    [t, e, n] = r,
    a = b,
    u = b,
    l = b;
  if (e && n) {
    let o = await ft(e, n),
      y = (o.value.data.record.data[0]?.playerUrls).find(
        (T) => T.type == "ondemand_hls" || T.type == "hls",
      );
    (y && (a = P(y.url)),
      o.value.data.record.title && (u = x(o.value.data.record.title)),
      o.value.data.record.previewUrl && (l = P(o.value.data.record.previewUrl)));
  } else if (e) {
    let o = await ct(e),
      y = (o.value.data.stream.data[0]?.playerUrls).find((T) => T.type == "live_ondemand_hls");
    (y && (a = P(y.url)),
      o.value.data.stream.title && (u = x(o.value.data.stream.title)),
      o.value.data.stream.previewUrl && (l = P(o.value.data.stream.previewUrl)));
  }
  let d = await Ne(a);
  if (d.isOk()) {
    let o = d.value,
      { duration: h, has_drm: y } = await Ie(o),
      T = {
        discovery_timestamp_ms: Date.now(),
        has_drm: y,
        duration: h,
        master_url: a.unwrapOr(new URL(window.location.href)),
        initiator: P(window.location.href),
        hash: `media_hash_${oe(window.location.href)}`,
        sent_headers: new Headers(),
        filename: b,
        type: "m3u8_playlist",
        is_youtube: !1,
        prefered_entry: b,
        playlist: o,
        title: u,
        thumbnail_url: l,
        cache: "default",
      };
    Me(T);
  } else console.warn(`Error fetching HLS ${d.error}`);
}
async function Fe() {
  if (window.location.href.includes("live.vkvideo.ru")) gt();
  else if (Oe.test(window.location.href)) {
    let i = window.location.href.match(Oe)?.[1];
    if (!i) {
      console.error("No ID matched");
      return;
    }
    let r = lt(window.location.href),
      t;
    if ((r.isSome() ? (t = await mt(i, r.value)) : (t = await Pe(i, b)), t.isErr())) {
      console.error(`Fatal : Couldn't get video data ${t.error}`);
      return;
    }
    let e = await dt(t.value, i);
    e.isOk() && Me(e.value);
  }
}
Fe();
var De = document.location.href,
  pt = new MutationObserver((i) => {
    De !== document.location.href && ((De = document.location.href), Fe());
  });
pt.observe(document.body, { childList: !0, subtree: !0 });
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)
*/
