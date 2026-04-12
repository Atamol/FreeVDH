var Re = Object.create;
var de = Object.defineProperty;
var Ie = Object.getOwnPropertyDescriptor;
var De = Object.getOwnPropertyNames;
var Oe = Object.getPrototypeOf,
  Me = Object.prototype.hasOwnProperty;
var fe = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var Pe = (i, r, t, e) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let n of De(r))
      !Me.call(i, n) &&
        n !== t &&
        de(i, n, { get: () => r[n], enumerable: !(e = Ie(r, n)) || e.enumerable });
  return i;
};
var ce = (i, r, t) => (
  (t = i != null ? Re(Oe(i)) : {}),
  Pe(r || !i || !i.__esModule ? de(t, "default", { value: i, enumerable: !0 }) : t, i)
);
var _e = fe((re, ye) => {
  (function (i, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof re < "u") r(ye);
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
          let o = (m) => m && typeof m == "object" && typeof m.then == "function",
            l =
              (m, f) =>
              (...g) => {
                e.runtime.lastError
                  ? m.reject(new Error(e.runtime.lastError.message))
                  : f.singleCallbackArg || (g.length <= 1 && f.singleCallbackArg !== !1)
                    ? m.resolve(g[0])
                    : m.resolve(g);
              },
            c = (m) => (m == 1 ? "argument" : "arguments"),
            u = (m, f) =>
              function (_, ...x) {
                if (x.length < f.minArgs)
                  throw new Error(
                    `Expected at least ${f.minArgs} ${c(f.minArgs)} for ${m}(), got ${x.length}`,
                  );
                if (x.length > f.maxArgs)
                  throw new Error(
                    `Expected at most ${f.maxArgs} ${c(f.maxArgs)} for ${m}(), got ${x.length}`,
                  );
                return new Promise((M, P) => {
                  if (f.fallbackToNoCallback)
                    try {
                      _[m](...x, l({ resolve: M, reject: P }, f));
                    } catch (y) {
                      (console.warn(
                        `${m} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        y,
                      ),
                        _[m](...x),
                        (f.fallbackToNoCallback = !1),
                        (f.noCallback = !0),
                        M());
                    }
                  else
                    f.noCallback ? (_[m](...x), M()) : _[m](...x, l({ resolve: M, reject: P }, f));
                });
              },
            h = (m, f, g) =>
              new Proxy(f, {
                apply(_, x, M) {
                  return g.call(x, m, ...M);
                },
              }),
            A = Function.call.bind(Object.prototype.hasOwnProperty),
            S = (m, f = {}, g = {}) => {
              let _ = Object.create(null),
                x = {
                  has(P, y) {
                    return y in m || y in _;
                  },
                  get(P, y, N) {
                    if (y in _) return _[y];
                    if (!(y in m)) return;
                    let E = m[y];
                    if (typeof E == "function")
                      if (typeof f[y] == "function") E = h(m, m[y], f[y]);
                      else if (A(g, y)) {
                        let V = u(y, g[y]);
                        E = h(m, m[y], V);
                      } else E = E.bind(m);
                    else if (typeof E == "object" && E !== null && (A(f, y) || A(g, y)))
                      E = S(E, f[y], g[y]);
                    else if (A(g, "*")) E = S(E, f[y], g["*"]);
                    else
                      return (
                        Object.defineProperty(_, y, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return m[y];
                          },
                          set(V) {
                            m[y] = V;
                          },
                        }),
                        E
                      );
                    return ((_[y] = E), E);
                  },
                  set(P, y, N, E) {
                    return (y in _ ? (_[y] = N) : (m[y] = N), !0);
                  },
                  defineProperty(P, y, N) {
                    return Reflect.defineProperty(_, y, N);
                  },
                  deleteProperty(P, y) {
                    return Reflect.deleteProperty(_, y);
                  },
                },
                M = Object.create(m);
              return new Proxy(M, x);
            },
            w = (m) => ({
              addListener(f, g, ..._) {
                f.addListener(m.get(g), ..._);
              },
              hasListener(f, g) {
                return f.hasListener(m.get(g));
              },
              removeListener(f, g) {
                f.removeListener(m.get(g));
              },
            }),
            v = new a((m) =>
              typeof m != "function"
                ? m
                : function (g) {
                    let _ = S(g, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    m(_);
                  },
            ),
            s = new a((m) =>
              typeof m != "function"
                ? m
                : function (g, _, x) {
                    let M = !1,
                      P,
                      y = new Promise((L) => {
                        P = function (C) {
                          ((M = !0), L(C));
                        };
                      }),
                      N;
                    try {
                      N = m(g, _, P);
                    } catch (L) {
                      N = Promise.reject(L);
                    }
                    let E = N !== !0 && o(N);
                    if (N !== !0 && !E && !M) return !1;
                    let V = (L) => {
                      L.then(
                        (C) => {
                          x(C);
                        },
                        (C) => {
                          let Z;
                          (C && (C instanceof Error || typeof C.message == "string")
                            ? (Z = C.message)
                            : (Z = "An unexpected error occurred"),
                            x({ __mozWebExtensionPolyfillReject__: !0, message: Z }));
                        },
                      ).catch((C) => {
                        console.error("Failed to send onMessage rejected reply", C);
                      });
                    };
                    return (V(E ? N : y), !0);
                  },
            ),
            G = ({ reject: m, resolve: f }, g) => {
              e.runtime.lastError
                ? e.runtime.lastError.message === r
                  ? f()
                  : m(new Error(e.runtime.lastError.message))
                : g && g.__mozWebExtensionPolyfillReject__
                  ? m(new Error(g.message))
                  : f(g);
            },
            O = (m, f, g, ..._) => {
              if (_.length < f.minArgs)
                throw new Error(
                  `Expected at least ${f.minArgs} ${c(f.minArgs)} for ${m}(), got ${_.length}`,
                );
              if (_.length > f.maxArgs)
                throw new Error(
                  `Expected at most ${f.maxArgs} ${c(f.maxArgs)} for ${m}(), got ${_.length}`,
                );
              return new Promise((x, M) => {
                let P = G.bind(null, { resolve: x, reject: M });
                (_.push(P), g.sendMessage(..._));
              });
            },
            p = {
              devtools: { network: { onRequestFinished: w(v) } },
              runtime: {
                onMessage: w(s),
                onMessageExternal: w(s),
                sendMessage: O.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: O.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            d = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (n.privacy = { network: { "*": d }, services: { "*": d }, websites: { "*": d } }),
            S(e, p, n)
          );
        };
      i.exports = t(chrome);
    }
  });
});
var Ee = fe((tr, Te) => {
  var z;
  typeof window < "u"
    ? (z = window)
    : typeof global < "u"
      ? (z = global)
      : typeof self < "u"
        ? (z = self)
        : (z = {});
  Te.exports = z;
});
function k(i) {
  var r = String(i);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(i);
    } catch {}
  return r;
}
var Ne = (function () {
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
        return b(r);
      }),
      (i.prototype.toString = function () {
        return "None";
      }),
      (i.prototype.toAsyncOption = function () {
        return new $(T);
      }),
      i
    );
  })(),
  T = new Ne();
Object.freeze(T);
var Ce = (function () {
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
        return R(r(this.value));
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
        return D(this.value);
      }),
      (i.prototype.toAsyncOption = function () {
        return new $(this);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Some(".concat(k(this.value), ")");
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })(),
  R = Ce,
  q;
(function (i) {
  function r() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    for (var o = [], l = 0, c = n; l < c.length; l++) {
      var u = c[l];
      if (u.isSome()) o.push(u.value);
      else return u;
    }
    return R(o);
  }
  i.all = r;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    for (var o = 0, l = n; o < l.length; o++) {
      var c = l[o];
      if (c.isSome()) return c;
    }
    return T;
  }
  i.any = t;
  function e(n) {
    return n instanceof R || n === T;
  }
  i.isOption = e;
})(q || (q = {}));
var B = function (i, r, t) {
    if (t || arguments.length === 2)
      for (var e = 0, n = r.length, a; e < n; e++)
        (a || !(e in r)) && (a || (a = Array.prototype.slice.call(r, 0, e)), (a[e] = r[e]));
    return i.concat(a || Array.prototype.slice.call(r));
  },
  Fe = (function () {
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
              k(this.error),
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
              k(this.error),
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
        return new b(r(this.error));
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
        return T;
      }),
      (i.prototype.toString = function () {
        return "Err(".concat(k(this.error), ")");
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
        return new H(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var b = Fe,
  ke = (function () {
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
        throw new Error("Tried to unwrap Ok: ".concat(k(this.value)), { cause: this.value });
      }),
      (i.prototype.map = function (r) {
        return new D(r(this.value));
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
        return R(this.value);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Ok(".concat(k(this.value), ")");
      }),
      (i.prototype.toAsyncResult = function () {
        return new H(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var D = ke,
  W;
(function (i) {
  function r(l) {
    for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : B([l], c, !0), A = [], S = 0, w = h;
      S < w.length;
      S++
    ) {
      var v = w[S];
      if (v.isOk()) A.push(v.value);
      else return v;
    }
    return new D(A);
  }
  i.all = r;
  function t(l) {
    for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : B([l], c, !0), A = [], S = 0, w = h;
      S < w.length;
      S++
    ) {
      var v = w[S];
      if (v.isOk()) return v;
      A.push(v.error);
    }
    return new b(A);
  }
  i.any = t;
  function e(l) {
    try {
      return new D(l());
    } catch (c) {
      return new b(c);
    }
  }
  i.wrap = e;
  function n(l) {
    try {
      return l()
        .then(function (c) {
          return new D(c);
        })
        .catch(function (c) {
          return new b(c);
        });
    } catch (c) {
      return Promise.resolve(new b(c));
    }
  }
  i.wrapAsync = n;
  function a(l) {
    return l.reduce(
      function (c, u) {
        var h = c[0],
          A = c[1];
        return u.isOk() ? [B(B([], h, !0), [u.value], !1), A] : [h, B(B([], A, !0), [u.error], !1)];
      },
      [[], []],
    );
  }
  i.partition = a;
  function o(l) {
    return l instanceof b || l instanceof D;
  }
  i.isResult = o;
})(W || (W = {}));
var Y = function (i, r, t, e) {
    function n(a) {
      return a instanceof t
        ? a
        : new t(function (o) {
            o(a);
          });
    }
    return new (t || (t = Promise))(function (a, o) {
      function l(h) {
        try {
          u(e.next(h));
        } catch (A) {
          o(A);
        }
      }
      function c(h) {
        try {
          u(e.throw(h));
        } catch (A) {
          o(A);
        }
      }
      function u(h) {
        h.done ? a(h.value) : n(h.value).then(l, c);
      }
      u((e = e.apply(i, r || [])).next());
    });
  },
  K = function (i, r) {
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
      o;
    return (
      (o = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function l(u) {
      return function (h) {
        return c([u, h]);
      };
    }
    function c(u) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; o && ((o = 0), u[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            n &&
              (a =
                u[0] & 2
                  ? n.return
                  : u[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, u[1])).done)
          )
            return a;
          switch (((n = 0), a && (u = [u[0] & 2, a.value]), u[0])) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return (t.label++, { value: u[1], done: !1 });
            case 5:
              (t.label++, (n = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((a = t.trys), !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (u[0] === 3 && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                t.label = u[1];
                break;
              }
              if (u[0] === 6 && t.label < a[1]) {
                ((t.label = a[1]), (a = u));
                break;
              }
              if (a && t.label < a[2]) {
                ((t.label = a[2]), t.ops.push(u));
                break;
              }
              (a[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          u = r.call(i, t);
        } catch (h) {
          ((u = [6, h]), (n = 0));
        } finally {
          e = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  H = (function () {
    function i(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (i.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return Y(t, void 0, void 0, function () {
            var n;
            return K(this, function (a) {
              return e.isErr() ? [2, e] : ((n = r(e.value)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return Y(t, void 0, void 0, function () {
            var n;
            return K(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isErr() ? [2, e] : ((n = D), [4, r(e.value)]);
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
          return Y(t, void 0, void 0, function () {
            var n;
            return K(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isOk() ? [2, e] : ((n = b), [4, r(e.error)]);
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
          return Y(t, void 0, void 0, function () {
            var n;
            return K(this, function (a) {
              return e.isOk() ? [2, e] : ((n = r(e.error)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.toOption = function () {
        return new $(
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
var ee = function (i, r, t, e) {
    function n(a) {
      return a instanceof t
        ? a
        : new t(function (o) {
            o(a);
          });
    }
    return new (t || (t = Promise))(function (a, o) {
      function l(h) {
        try {
          u(e.next(h));
        } catch (A) {
          o(A);
        }
      }
      function c(h) {
        try {
          u(e.throw(h));
        } catch (A) {
          o(A);
        }
      }
      function u(h) {
        h.done ? a(h.value) : n(h.value).then(l, c);
      }
      u((e = e.apply(i, r || [])).next());
    });
  },
  te = function (i, r) {
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
      o;
    return (
      (o = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function l(u) {
      return function (h) {
        return c([u, h]);
      };
    }
    function c(u) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; o && ((o = 0), u[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            n &&
              (a =
                u[0] & 2
                  ? n.return
                  : u[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, u[1])).done)
          )
            return a;
          switch (((n = 0), a && (u = [u[0] & 2, a.value]), u[0])) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return (t.label++, { value: u[1], done: !1 });
            case 5:
              (t.label++, (n = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((a = t.trys), !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (u[0] === 3 && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                t.label = u[1];
                break;
              }
              if (u[0] === 6 && t.label < a[1]) {
                ((t.label = a[1]), (a = u));
                break;
              }
              if (a && t.label < a[2]) {
                ((t.label = a[2]), t.ops.push(u));
                break;
              }
              (a[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          u = r.call(i, t);
        } catch (h) {
          ((u = [6, h]), (n = 0));
        } finally {
          e = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  $ = (function () {
    function i(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (i.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ee(t, void 0, void 0, function () {
            var n;
            return te(this, function (a) {
              return e.isNone() ? [2, e] : ((n = r(e.value)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ee(t, void 0, void 0, function () {
            var n;
            return te(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isNone() ? [2, e] : ((n = R), [4, r(e.value)]);
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
          return ee(t, void 0, void 0, function () {
            var n;
            return te(this, function (a) {
              return e.isSome() ? [2, e] : ((n = r()), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.toResult = function (r) {
        return new H(
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
function ge() {
  return { user_abort: !0, e4XX_5XX_failure: !1, other_failure: !1, percentage_incomplete: !1 };
}
function j(i) {
  return {
    user_abort: !1,
    e4XX_5XX_failure: !1,
    percentage_incomplete: !1,
    other_failure: !0,
    message: i,
  };
}
function pe(i) {
  return {
    user_abort: !1,
    e4XX_5XX_failure: !0,
    percentage_incomplete: !1,
    other_failure: !1,
    status: i,
  };
}
async function he(...i) {
  let r;
  try {
    r = await fetch(...i);
  } catch (t) {
    return t instanceof DOMException && t.name == "AbortError" ? b(ge()) : b(j(t.toString()));
  }
  return r.status >= 400 && r.status <= 599
    ? b(pe(r.status))
    : r.ok
      ? r.body != null
        ? D(r)
        : b(j("No body"))
      : b(j(`Unkown failure - status ${r.status}`));
}
var Ae = ce(_e(), 1);
var Mt = new BroadcastChannel("worker_service");
var ie = {
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
async function Ue(i, r) {
  await Ae.default.runtime.sendMessage({ msg: i, channel: r });
}
function be(i) {
  let r = ie.FromInjectedToService;
  Ue(i, r);
}
function F(i) {
  if (typeof i == "string") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "number") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "boolean") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i > "u") return { __serde_tag: "primitive", __serde_val: i };
  if (i == null) return { __serde_tag: "primitive", __serde_val: i };
  if (Array.isArray(i)) return { __serde_tag: "array", __serde_val: i.map((r) => F(r)) };
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
    if (i instanceof Set) return { __serde_tag: "set", __serde_val: [...i.values()].map(F) };
    if (i instanceof Map)
      return { __serde_tag: "map", __serde_val: [...i.entries()].map(([r, t]) => [F(r), F(t)]) };
    if (i instanceof RegExp) return { __serde_tag: "regex", __serde_val: [i.source, i.flags] };
    if (q.isOption(i))
      return i.isSome()
        ? { __serde_tag: "some", __serde_val: F(i.value) }
        : { __serde_tag: "none" };
    if (W.isResult(i))
      return i.isOk()
        ? { __serde_tag: "ok", __serde_val: F(i.value) }
        : { __serde_tag: "err", __serde_val: F(i.error) };
    if (typeof i == "object") {
      let r = {};
      for (let [t, e] of Object.entries(i)) r[t] = F(e);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
function ne(i, r) {
  try {
    if (i) return R(new URL(i, r));
  } catch {}
  return T;
}
var Ve = ["mp4", "webm", "mkv"],
  Be = ["mp3", "m4a", "ogg"],
  Le = [...Ve, ...Be];
var Q = (function () {
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
          for (var a = n.length, o = 0; o < a; ++o) n[o].call(this, arguments[1]);
        else
          for (var l = Array.prototype.slice.call(arguments, 1), c = n.length, u = 0; u < c; ++u)
            n[u].apply(this, l);
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
function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var e in t) ({}).hasOwnProperty.call(t, e) && (i[e] = t[e]);
          }
          return i;
        }),
    X.apply(null, arguments)
  );
}
var ae = ce(Ee()),
  ze = function (r) {
    return ae.default.atob ? ae.default.atob(r) : Buffer.from(r, "base64").toString("binary");
  };
function se(i) {
  for (var r = ze(i), t = new Uint8Array(r.length), e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return t;
}
var le = class extends Q {
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
  Ge = "	",
  oe = function (i) {
    let r = /([0-9.]*)?@?([0-9.]*)?/.exec(i || ""),
      t = {};
    return (r[1] && (t.length = parseInt(r[1], 10)), r[2] && (t.offset = parseInt(r[2], 10)), t);
  },
  qe = function () {
    let t = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + t + ")");
  },
  I = function (i) {
    let r = {};
    if (!i) return r;
    let t = i.split(qe()),
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
  xe = (i) => {
    let r = i.split("x"),
      t = {};
    return (r[0] && (t.width = parseInt(r[0], 10)), r[1] && (t.height = parseInt(r[1], 10)), t);
  },
  me = class extends Q {
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
          (a, o) => {
            let l = o(r);
            return l === r ? a : a.concat([l]);
          },
          [r],
        )
        .forEach((a) => {
          for (let o = 0; o < this.customParsers.length; o++)
            if (this.customParsers[o].call(this, a)) return;
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
            ((e = X(oe(t[1]), { type: "tag", tagType: "byterange" })), this.trigger("data", e));
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
              let o = I(t[1]);
              (o.URI && (e.uri = o.URI), o.BYTERANGE && (e.byterange = oe(o.BYTERANGE)));
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-STREAM-INF:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "stream-inf" }),
              t[1] &&
                ((e.attributes = I(t[1])),
                e.attributes.RESOLUTION && (e.attributes.RESOLUTION = xe(e.attributes.RESOLUTION)),
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
              t[1] && (e.attributes = I(t[1])),
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
                ((e.attributes = I(t[1])),
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
                ((e.attributes = I(t[1])),
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
              (e.attributes = I(t[1])),
              e.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (e.attributes["SKIPPED-SEGMENTS"] = parseInt(e.attributes["SKIPPED-SEGMENTS"], 10)),
              e.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (e.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  e.attributes["RECENTLY-REMOVED-DATERANGES"].split(Ge)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "part" }),
              (e.attributes = I(t[1])),
              ["DURATION"].forEach(function (o) {
                e.attributes.hasOwnProperty(o) && (e.attributes[o] = parseFloat(e.attributes[o]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (o) {
                e.attributes.hasOwnProperty(o) && (e.attributes[o] = /YES/.test(e.attributes[o]));
              }),
              e.attributes.hasOwnProperty("BYTERANGE") &&
                (e.attributes.byterange = oe(e.attributes.BYTERANGE)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "server-control" }),
              (e.attributes = I(t[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (o) {
                e.attributes.hasOwnProperty(o) && (e.attributes[o] = parseFloat(e.attributes[o]));
              }),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (o) {
                e.attributes.hasOwnProperty(o) && (e.attributes[o] = /YES/.test(e.attributes[o]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART-INF:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "part-inf" }),
              (e.attributes = I(t[1])),
              ["PART-TARGET"].forEach(function (o) {
                e.attributes.hasOwnProperty(o) && (e.attributes[o] = parseFloat(e.attributes[o]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "preload-hint" }),
              (e.attributes = I(t[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (o) {
                if (e.attributes.hasOwnProperty(o)) {
                  e.attributes[o] = parseInt(e.attributes[o], 10);
                  let l = o === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((e.attributes.byterange = e.attributes.byterange || {}),
                    (e.attributes.byterange[l] = e.attributes[o]),
                    delete e.attributes[o]);
                }
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "rendition-report" }),
              (e.attributes = I(t[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (o) {
                e.attributes.hasOwnProperty(o) && (e.attributes[o] = parseInt(e.attributes[o], 10));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DATERANGE:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "daterange" }),
              (e.attributes = I(t[1])),
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
            let o = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let l in e.attributes) {
              if (!o.test(l)) continue;
              let c = /[0-9A-Fa-f]{6}/g.test(e.attributes[l]),
                u = /^\d+(\.\d+)?$/.test(e.attributes[l]);
              e.attributes[l] = c
                ? e.attributes[l].toString(16)
                : u
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
              (e.attributes = I(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "i-frame-playlist" }),
              (e.attributes = I(t[1])),
              e.attributes.URI && (e.uri = e.attributes.URI),
              e.attributes.BANDWIDTH &&
                (e.attributes.BANDWIDTH = parseInt(e.attributes.BANDWIDTH, 10)),
              e.attributes.RESOLUTION && (e.attributes.RESOLUTION = xe(e.attributes.RESOLUTION)),
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
              (e.attributes = I(t[1])),
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
  We = (i) => i.toLowerCase().replace(/-(\w)/g, (r) => r[1].toUpperCase()),
  U = function (i) {
    let r = {};
    return (
      Object.keys(i).forEach(function (t) {
        r[We(t)] = i[t];
      }),
      r
    );
  },
  ue = function (i) {
    let { serverControl: r, targetDuration: t, partTargetDuration: e } = i;
    if (!r) return;
    let n = "#EXT-X-SERVER-CONTROL",
      a = "holdBack",
      o = "partHoldBack",
      l = t && t * 3,
      c = e && e * 2;
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
        !r.hasOwnProperty(o) &&
        ((r[o] = e * 3),
        this.trigger("info", {
          message: `${n} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${r[o]}).`,
        })),
      e &&
        r[o] < c &&
        (this.trigger("warn", {
          message: `${n} clamping PART-HOLD-BACK (${r[o]}) to partTargetDuration * 2 (${c}).`,
        }),
        (r[o] = c)));
  },
  J = class extends Q {
    constructor(r = {}) {
      (super(),
        (this.lineStream = new le()),
        (this.parseStream = new me()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = r.mainDefinitions || {}),
        (this.params = new URL(r.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let t = this,
        e = [],
        n = {},
        a,
        o,
        l = !1,
        c = function () {},
        u = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        h = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        A = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let S = 0,
        w = 0,
        v = {};
      (this.on("end", () => {
        n.uri ||
          (!n.parts && !n.preloadHints) ||
          (!n.map && a && (n.map = a),
          !n.key && o && (n.key = o),
          !n.timeline && typeof A == "number" && (n.timeline = A),
          (this.manifest.preloadSegment = n));
      }),
        this.parseStream.on("data", function (s) {
          let G, O;
          if (t.manifest.definitions) {
            for (let p in t.manifest.definitions)
              if (
                (s.uri && (s.uri = s.uri.replace(`{$${p}}`, t.manifest.definitions[p])),
                s.attributes)
              )
                for (let d in s.attributes)
                  typeof s.attributes[d] == "string" &&
                    (s.attributes[d] = s.attributes[d].replace(
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
                      ((n.byterange = p), (p.length = s.length), "offset" in s || (s.offset = S)),
                      "offset" in s && ((n.byterange = p), (p.offset = s.offset)),
                      (S = p.offset + p.length));
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
                      o = null;
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
                          pssh: se(s.attributes.URI.split(",")[1]),
                        }));
                      return;
                    }
                    (s.attributes.METHOD ||
                      this.trigger("warn", { message: "defaulting key method to AES-128" }),
                      (o = { method: s.attributes.METHOD || "AES-128", uri: s.attributes.URI }),
                      typeof s.attributes.IV < "u" && (o.iv = s.attributes.IV));
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
                    ((this.manifest.discontinuitySequence = s.number), (A = s.number));
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
                      o && (a.key = o));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = e),
                      (this.manifest.mediaGroups = this.manifest.mediaGroups || u),
                      !s.attributes)
                    ) {
                      this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
                      return;
                    }
                    (n.attributes || (n.attributes = {}), X(n.attributes, s.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups = this.manifest.mediaGroups || u),
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
                      (G = p[s.attributes["GROUP-ID"]]),
                      (O = { default: /yes/i.test(s.attributes.DEFAULT) }),
                      O.default
                        ? (O.autoselect = !0)
                        : (O.autoselect = /yes/i.test(s.attributes.AUTOSELECT)),
                      s.attributes.LANGUAGE && (O.language = s.attributes.LANGUAGE),
                      s.attributes.URI && (O.uri = s.attributes.URI),
                      s.attributes["INSTREAM-ID"] && (O.instreamId = s.attributes["INSTREAM-ID"]),
                      s.attributes.CHARACTERISTICS &&
                        (O.characteristics = s.attributes.CHARACTERISTICS),
                      s.attributes.FORCED && (O.forced = /yes/i.test(s.attributes.FORCED)),
                      (G[s.attributes.NAME] = O));
                  },
                  discontinuity() {
                    ((A += 1),
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
                          (d, m) => ((m.programDateTime = d - m.duration * 1e3), m.programDateTime),
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
                    ((this.manifest.targetDuration = s.duration), ue.call(this, this.manifest));
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
                    ((this.manifest.skip = U(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-SKIP", s.attributes, [
                        "SKIPPED-SEGMENTS",
                      ]));
                  },
                  part() {
                    l = !0;
                    let p = this.manifest.segments.length,
                      d = U(s.attributes);
                    ((n.parts = n.parts || []),
                      n.parts.push(d),
                      d.byterange &&
                        (d.byterange.hasOwnProperty("offset") || (d.byterange.offset = w),
                        (w = d.byterange.offset + d.byterange.length)));
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
                    let p = (this.manifest.serverControl = U(s.attributes));
                    (p.hasOwnProperty("canBlockReload") ||
                      ((p.canBlockReload = !1),
                      this.trigger("info", {
                        message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      ue.call(this, this.manifest),
                      p.canSkipDateranges &&
                        !p.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let p = this.manifest.segments.length,
                      d = U(s.attributes),
                      m = d.type && d.type === "PART";
                    ((n.preloadHints = n.preloadHints || []),
                      n.preloadHints.push(d),
                      d.byterange &&
                        (d.byterange.hasOwnProperty("offset") ||
                          ((d.byterange.offset = m ? w : 0),
                          m && (w = d.byterange.offset + d.byterange.length))));
                    let f = n.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${f} for segment #${p}`,
                        s.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!d.type)
                    )
                      for (let g = 0; g < n.preloadHints.length - 1; g++) {
                        let _ = n.preloadHints[g];
                        _.type &&
                          _.type === d.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${f} for segment #${p} has the same TYPE ${d.type} as preload hint #${g}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let p = U(s.attributes);
                    ((this.manifest.renditionReports = this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(p));
                    let d = this.manifest.renditionReports.length - 1,
                      m = ["LAST-MSN", "URI"];
                    (l && m.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${d}`,
                        s.attributes,
                        m,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = U(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-PART-INF", s.attributes, [
                        "PART-TARGET",
                      ]),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                      ue.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(U(s.attributes));
                    let p = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${p}`, s.attributes, [
                      "ID",
                      "START-DATE",
                    ]);
                    let d = this.manifest.dateRanges[p];
                    (d.endDate &&
                      d.startDate &&
                      new Date(d.endDate) < new Date(d.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      d.duration &&
                        d.duration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      d.plannedDuration &&
                        d.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let m = !!d.endOnNext;
                    if (
                      (m &&
                        !d.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      m &&
                        (d.duration || d.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      d.duration && d.endDate)
                    ) {
                      let g = d.startDate.getTime() + d.duration * 1e3;
                      this.manifest.dateRanges[p].endDate = new Date(g);
                    }
                    if (!v[d.id]) v[d.id] = d;
                    else {
                      for (let g in v[d.id])
                        if (d[g] && JSON.stringify(v[d.id][g]) !== JSON.stringify(d[g])) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let f = this.manifest.dateRanges.findIndex((g) => g.id === d.id);
                      ((this.manifest.dateRanges[f] = X(this.manifest.dateRanges[f], d)),
                        (v[d.id] = X(v[d.id], d)),
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
                    ((this.manifest.contentSteering = U(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", s.attributes, [
                        "SERVER-URI",
                      ]));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let p = (d, m) => {
                      if (d in this.manifest.definitions) {
                        this.trigger("error", { message: `EXT-X-DEFINE: Duplicate name ${d}` });
                        return;
                      }
                      this.manifest.definitions[d] = m;
                    };
                    if ("QUERYPARAM" in s.attributes) {
                      if ("NAME" in s.attributes || "IMPORT" in s.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      let d = this.params.get(s.attributes.QUERYPARAM);
                      if (!d) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${s.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      p(s.attributes.QUERYPARAM, decodeURIComponent(d));
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
                      timeline: A,
                    }),
                      this.warnOnMissingAttributes_("#EXT-X-I-FRAME-STREAM-INF", s.attributes, [
                        "BANDWIDTH",
                        "URI",
                      ]));
                  },
                })[s.tagType] || c
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
                o && (n.key = o),
                (n.timeline = A),
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
function ve(i) {
  let r;
  try {
    let n = new J();
    (n.push(i), n.end(), (r = n.manifest));
  } catch {}
  if (!r) return b("parse error");
  let t = r.segments;
  return !Array.isArray(t) || t.length == 0
    ? b("not a valid m3u8")
    : t.every((n) => {
          let o = n.uri.split(/[?#]/)[0];
          return o
            ? o
                .substring(o.lastIndexOf(".") + 1)
                .toLowerCase()
                .match(/vtt|srt|webvtt|ttml/)
            : !1;
        })
      ? b("subtitle playlist")
      : D(r);
}
function Ye(i) {
  let r = new Date(new Date().getTime() - 6e5);
  return !i.dateTimeObject && !i.programDateTime
    ? !1
    : typeof i.dateTimeObject == "object"
      ? i.dateTimeObject > r
      : typeof i.programDateTime == "number"
        ? i.programDateTime > r.getTime()
        : !1;
}
function Se(i) {
  if (!Array.isArray(i.segments) || i.segments.some((e) => typeof e.duration != "number"))
    return "unknown";
  let r = i.segments[i.segments.length - 1];
  return r && Ye(r)
    ? "live"
    : i.segments.reduce((e, n) => (typeof n.duration == "number" && (e += n.duration), e), 0);
}
function we(i, r = 0) {
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
var Ke = /\\"hls\\":\\"([^"]+)\\\"/;
function je(i) {
  be({ name: "on_media", data: { media: F(i) } });
}
function Qe() {
  let i = T,
    r = document.querySelectorAll("script");
  if (!r) return i;
  for (let t of r) {
    let e = t.innerHTML.match(Ke);
    if (e && e[1]) {
      i = R(e[1]);
      break;
    }
  }
  return i;
}
async function Je() {
  let i = Qe();
  if (i.isNone()) return T;
  let r = await he(`https://www.osmosis.org/videoPlaylist?hash=${i.value}`);
  if (r.isErr()) return T;
  let e = [...(await r.value.text())].reverse().join("");
  e = e.replace(
    /(#EXT-X-KEY:[^\n]*URI=")([^"]+)"/,
    (l, c, u) => c + new URL(u, "https://www.osmosis.org").href + '"',
  );
  let n = ve(e);
  if (n.isErr()) return T;
  let a = Se(n.value),
    o = {
      is_youtube: !1,
      has_drm: !1,
      sent_headers: new Headers(),
      initiator: ne(window.location.href),
      type: "m3u8",
      hash: `media_hash_${we(e)}`,
      discovery_timestamp_ms: Date.now(),
      duration: a,
      title: T,
      filename: T,
      thumbnail_url: T,
      demuxer: "mp4",
      url: new URL(`data:text/plain;charset=UTF-8,${encodeURIComponent(e)}`),
      cache: "default",
    };
  return R(o);
}
async function Ze() {
  let i = await Je();
  i.isSome() && je(i.value);
}
Ze();
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)
*/
