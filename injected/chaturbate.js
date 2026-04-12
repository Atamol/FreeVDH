var Re = Object.create;
var de = Object.defineProperty;
var Ie = Object.getOwnPropertyDescriptor;
var Oe = Object.getOwnPropertyNames;
var De = Object.getPrototypeOf,
  Me = Object.prototype.hasOwnProperty;
var ce = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var Pe = (i, r, t, e) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let a of Oe(r))
      !Me.call(i, a) &&
        a !== t &&
        de(i, a, { get: () => r[a], enumerable: !(e = Ie(r, a)) || e.enumerable });
  return i;
};
var fe = (i, r, t) => (
  (t = i != null ? Re(De(i)) : {}),
  Pe(r || !i || !i.__esModule ? de(t, "default", { value: i, enumerable: !0 }) : t, i)
);
var _e = ce((Ft, Ae) => {
  var q;
  typeof window < "u"
    ? (q = window)
    : typeof global < "u"
      ? (q = global)
      : typeof self < "u"
        ? (q = self)
        : (q = {});
  Ae.exports = q;
});
var ve = ce((le, Ee) => {
  (function (i, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof le < "u") r(Ee);
    else {
      var t = { exports: {} };
      (r(t), (i.browser = t.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : le, function (i) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      i.exports = globalThis.browser;
    else {
      let r = "The message port closed before a response was received.",
        t = (e) => {
          let a = {
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
          if (Object.keys(a).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class n extends WeakMap {
            constructor(c, g = void 0) {
              (super(g), (this.createItem = c));
            }
            get(c) {
              return (this.has(c) || this.set(c, this.createItem(c)), super.get(c));
            }
          }
          let u = (m) => m && typeof m == "object" && typeof m.then == "function",
            l =
              (m, c) =>
              (...g) => {
                e.runtime.lastError
                  ? m.reject(new Error(e.runtime.lastError.message))
                  : c.singleCallbackArg || (g.length <= 1 && c.singleCallbackArg !== !1)
                    ? m.resolve(g[0])
                    : m.resolve(g);
              },
            f = (m) => (m == 1 ? "argument" : "arguments"),
            o = (m, c) =>
              function (_, ...w) {
                if (w.length < c.minArgs)
                  throw new Error(
                    `Expected at least ${c.minArgs} ${f(c.minArgs)} for ${m}(), got ${w.length}`,
                  );
                if (w.length > c.maxArgs)
                  throw new Error(
                    `Expected at most ${c.maxArgs} ${f(c.maxArgs)} for ${m}(), got ${w.length}`,
                  );
                return new Promise((D, M) => {
                  if (c.fallbackToNoCallback)
                    try {
                      _[m](...w, l({ resolve: D, reject: M }, c));
                    } catch (y) {
                      (console.warn(
                        `${m} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        y,
                      ),
                        _[m](...w),
                        (c.fallbackToNoCallback = !1),
                        (c.noCallback = !0),
                        D());
                    }
                  else
                    c.noCallback ? (_[m](...w), D()) : _[m](...w, l({ resolve: D, reject: M }, c));
                });
              },
            h = (m, c, g) =>
              new Proxy(c, {
                apply(_, w, D) {
                  return g.call(w, m, ...D);
                },
              }),
            A = Function.call.bind(Object.prototype.hasOwnProperty),
            E = (m, c = {}, g = {}) => {
              let _ = Object.create(null),
                w = {
                  has(M, y) {
                    return y in m || y in _;
                  },
                  get(M, y, P) {
                    if (y in _) return _[y];
                    if (!(y in m)) return;
                    let S = m[y];
                    if (typeof S == "function")
                      if (typeof c[y] == "function") S = h(m, m[y], c[y]);
                      else if (A(g, y)) {
                        let L = o(y, g[y]);
                        S = h(m, m[y], L);
                      } else S = S.bind(m);
                    else if (typeof S == "object" && S !== null && (A(c, y) || A(g, y)))
                      S = E(S, c[y], g[y]);
                    else if (A(g, "*")) S = E(S, c[y], g["*"]);
                    else
                      return (
                        Object.defineProperty(_, y, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return m[y];
                          },
                          set(L) {
                            m[y] = L;
                          },
                        }),
                        S
                      );
                    return ((_[y] = S), S);
                  },
                  set(M, y, P, S) {
                    return (y in _ ? (_[y] = P) : (m[y] = P), !0);
                  },
                  defineProperty(M, y, P) {
                    return Reflect.defineProperty(_, y, P);
                  },
                  deleteProperty(M, y) {
                    return Reflect.deleteProperty(_, y);
                  },
                },
                D = Object.create(m);
              return new Proxy(D, w);
            },
            x = (m) => ({
              addListener(c, g, ..._) {
                c.addListener(m.get(g), ..._);
              },
              hasListener(c, g) {
                return c.hasListener(m.get(g));
              },
              removeListener(c, g) {
                c.removeListener(m.get(g));
              },
            }),
            v = new n((m) =>
              typeof m != "function"
                ? m
                : function (g) {
                    let _ = E(g, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    m(_);
                  },
            ),
            s = new n((m) =>
              typeof m != "function"
                ? m
                : function (g, _, w) {
                    let D = !1,
                      M,
                      y = new Promise((z) => {
                        M = function (F) {
                          ((D = !0), z(F));
                        };
                      }),
                      P;
                    try {
                      P = m(g, _, M);
                    } catch (z) {
                      P = Promise.reject(z);
                    }
                    let S = P !== !0 && u(P);
                    if (P !== !0 && !S && !D) return !1;
                    let L = (z) => {
                      z.then(
                        (F) => {
                          w(F);
                        },
                        (F) => {
                          let Z;
                          (F && (F instanceof Error || typeof F.message == "string")
                            ? (Z = F.message)
                            : (Z = "An unexpected error occurred"),
                            w({ __mozWebExtensionPolyfillReject__: !0, message: Z }));
                        },
                      ).catch((F) => {
                        console.error("Failed to send onMessage rejected reply", F);
                      });
                    };
                    return (L(S ? P : y), !0);
                  },
            ),
            C = ({ reject: m, resolve: c }, g) => {
              e.runtime.lastError
                ? e.runtime.lastError.message === r
                  ? c()
                  : m(new Error(e.runtime.lastError.message))
                : g && g.__mozWebExtensionPolyfillReject__
                  ? m(new Error(g.message))
                  : c(g);
            },
            b = (m, c, g, ..._) => {
              if (_.length < c.minArgs)
                throw new Error(
                  `Expected at least ${c.minArgs} ${f(c.minArgs)} for ${m}(), got ${_.length}`,
                );
              if (_.length > c.maxArgs)
                throw new Error(
                  `Expected at most ${c.maxArgs} ${f(c.maxArgs)} for ${m}(), got ${_.length}`,
                );
              return new Promise((w, D) => {
                let M = C.bind(null, { resolve: w, reject: D });
                (_.push(M), g.sendMessage(..._));
              });
            },
            p = {
              devtools: { network: { onRequestFinished: x(v) } },
              runtime: {
                onMessage: x(s),
                onMessageExternal: x(s),
                sendMessage: b.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: b.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            d = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (a.privacy = { network: { "*": d }, services: { "*": d }, websites: { "*": d } }),
            E(e, p, a)
          );
        };
      i.exports = t(chrome);
    }
  });
});
function U(i) {
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
        return I(r);
      }),
      (i.prototype.toString = function () {
        return "None";
      }),
      (i.prototype.toAsyncOption = function () {
        return new H(T);
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
        return N(this.value);
      }),
      (i.prototype.toAsyncOption = function () {
        return new H(this);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Some(".concat(U(this.value), ")");
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })(),
  R = Ce,
  W;
(function (i) {
  function r() {
    for (var a = [], n = 0; n < arguments.length; n++) a[n] = arguments[n];
    for (var u = [], l = 0, f = a; l < f.length; l++) {
      var o = f[l];
      if (o.isSome()) u.push(o.value);
      else return o;
    }
    return R(u);
  }
  i.all = r;
  function t() {
    for (var a = [], n = 0; n < arguments.length; n++) a[n] = arguments[n];
    for (var u = 0, l = a; u < l.length; u++) {
      var f = l[u];
      if (f.isSome()) return f;
    }
    return T;
  }
  i.any = t;
  function e(a) {
    return a instanceof R || a === T;
  }
  i.isOption = e;
})(W || (W = {}));
var $ = function (i, r, t) {
    if (t || arguments.length === 2)
      for (var e = 0, a = r.length, n; e < a; e++)
        (n || !(e in r)) && (n || (n = Array.prototype.slice.call(r, 0, e)), (n[e] = r[e]));
    return i.concat(n || Array.prototype.slice.call(r));
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
              U(this.error),
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
              U(this.error),
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
        return new I(r(this.error));
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
        return "Err(".concat(U(this.error), ")");
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
var I = Fe,
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
        throw new Error("Tried to unwrap Ok: ".concat(U(this.value)), { cause: this.value });
      }),
      (i.prototype.map = function (r) {
        return new N(r(this.value));
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
        return "Ok(".concat(U(this.value), ")");
      }),
      (i.prototype.toAsyncResult = function () {
        return new G(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var N = ke,
  Y;
(function (i) {
  function r(l) {
    for (var f = [], o = 1; o < arguments.length; o++) f[o - 1] = arguments[o];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : $([l], f, !0), A = [], E = 0, x = h;
      E < x.length;
      E++
    ) {
      var v = x[E];
      if (v.isOk()) A.push(v.value);
      else return v;
    }
    return new N(A);
  }
  i.all = r;
  function t(l) {
    for (var f = [], o = 1; o < arguments.length; o++) f[o - 1] = arguments[o];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : $([l], f, !0), A = [], E = 0, x = h;
      E < x.length;
      E++
    ) {
      var v = x[E];
      if (v.isOk()) return v;
      A.push(v.error);
    }
    return new I(A);
  }
  i.any = t;
  function e(l) {
    try {
      return new N(l());
    } catch (f) {
      return new I(f);
    }
  }
  i.wrap = e;
  function a(l) {
    try {
      return l()
        .then(function (f) {
          return new N(f);
        })
        .catch(function (f) {
          return new I(f);
        });
    } catch (f) {
      return Promise.resolve(new I(f));
    }
  }
  i.wrapAsync = a;
  function n(l) {
    return l.reduce(
      function (f, o) {
        var h = f[0],
          A = f[1];
        return o.isOk() ? [$($([], h, !0), [o.value], !1), A] : [h, $($([], A, !0), [o.error], !1)];
      },
      [[], []],
    );
  }
  i.partition = n;
  function u(l) {
    return l instanceof I || l instanceof N;
  }
  i.isResult = u;
})(Y || (Y = {}));
var K = function (i, r, t, e) {
    function a(n) {
      return n instanceof t
        ? n
        : new t(function (u) {
            u(n);
          });
    }
    return new (t || (t = Promise))(function (n, u) {
      function l(h) {
        try {
          o(e.next(h));
        } catch (A) {
          u(A);
        }
      }
      function f(h) {
        try {
          o(e.throw(h));
        } catch (A) {
          u(A);
        }
      }
      function o(h) {
        h.done ? n(h.value) : a(h.value).then(l, f);
      }
      o((e = e.apply(i, r || [])).next());
    });
  },
  j = function (i, r) {
    var t = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      e,
      a,
      n,
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
        return f([o, h]);
      };
    }
    function f(o) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; u && ((u = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            a &&
              (n =
                o[0] & 2
                  ? a.return
                  : o[0]
                    ? a.throw || ((n = a.return) && n.call(a), 0)
                    : a.next) &&
              !(n = n.call(a, o[1])).done)
          )
            return n;
          switch (((a = 0), n && (o = [o[0] & 2, n.value]), o[0])) {
            case 0:
            case 1:
              n = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (a = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((n = t.trys), !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < n[1]) {
                ((t.label = n[1]), (n = o));
                break;
              }
              if (n && t.label < n[2]) {
                ((t.label = n[2]), t.ops.push(o));
                break;
              }
              (n[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(i, t);
        } catch (h) {
          ((o = [6, h]), (a = 0));
        } finally {
          e = n = 0;
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
          return K(t, void 0, void 0, function () {
            var a;
            return j(this, function (n) {
              return e.isErr() ? [2, e] : ((a = r(e.value)), [2, a instanceof i ? a.promise : a]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return K(t, void 0, void 0, function () {
            var a;
            return j(this, function (n) {
              switch (n.label) {
                case 0:
                  return e.isErr() ? [2, e] : ((a = N), [4, r(e.value)]);
                case 1:
                  return [2, a.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.mapErr = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return K(t, void 0, void 0, function () {
            var a;
            return j(this, function (n) {
              switch (n.label) {
                case 0:
                  return e.isOk() ? [2, e] : ((a = I), [4, r(e.error)]);
                case 1:
                  return [2, a.apply(void 0, [n.sent()])];
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
          return K(t, void 0, void 0, function () {
            var a;
            return j(this, function (n) {
              return e.isOk() ? [2, e] : ((a = r(e.error)), [2, a instanceof i ? a.promise : a]);
            });
          });
        });
      }),
      (i.prototype.toOption = function () {
        return new H(
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
    function a(n) {
      return n instanceof t
        ? n
        : new t(function (u) {
            u(n);
          });
    }
    return new (t || (t = Promise))(function (n, u) {
      function l(h) {
        try {
          o(e.next(h));
        } catch (A) {
          u(A);
        }
      }
      function f(h) {
        try {
          o(e.throw(h));
        } catch (A) {
          u(A);
        }
      }
      function o(h) {
        h.done ? n(h.value) : a(h.value).then(l, f);
      }
      o((e = e.apply(i, r || [])).next());
    });
  },
  te = function (i, r) {
    var t = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      e,
      a,
      n,
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
        return f([o, h]);
      };
    }
    function f(o) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; u && ((u = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            a &&
              (n =
                o[0] & 2
                  ? a.return
                  : o[0]
                    ? a.throw || ((n = a.return) && n.call(a), 0)
                    : a.next) &&
              !(n = n.call(a, o[1])).done)
          )
            return n;
          switch (((a = 0), n && (o = [o[0] & 2, n.value]), o[0])) {
            case 0:
            case 1:
              n = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (a = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((n = t.trys), !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < n[1]) {
                ((t.label = n[1]), (n = o));
                break;
              }
              if (n && t.label < n[2]) {
                ((t.label = n[2]), t.ops.push(o));
                break;
              }
              (n[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(i, t);
        } catch (h) {
          ((o = [6, h]), (a = 0));
        } finally {
          e = n = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
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
          return ee(t, void 0, void 0, function () {
            var a;
            return te(this, function (n) {
              return e.isNone() ? [2, e] : ((a = r(e.value)), [2, a instanceof i ? a.promise : a]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ee(t, void 0, void 0, function () {
            var a;
            return te(this, function (n) {
              switch (n.label) {
                case 0:
                  return e.isNone() ? [2, e] : ((a = R), [4, r(e.value)]);
                case 1:
                  return [2, a.apply(void 0, [n.sent()])];
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
            var a;
            return te(this, function (n) {
              return e.isSome() ? [2, e] : ((a = r()), [2, a instanceof i ? a.promise : a]);
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
function re(i, r) {
  let t = new URLSearchParams();
  for (let [e, a] of i) t.set(e, a);
  for (let [e, a] of r) t.set(e, a);
  return t.toString();
}
function V(i, r) {
  try {
    if (i) return R(new URL(i, r));
  } catch {}
  return T;
}
function k(i) {
  if (typeof i == "string") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "number") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "boolean") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i > "u") return { __serde_tag: "primitive", __serde_val: i };
  if (i == null) return { __serde_tag: "primitive", __serde_val: i };
  if (Array.isArray(i)) return { __serde_tag: "array", __serde_val: i.map((r) => k(r)) };
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
    if (i instanceof Set) return { __serde_tag: "set", __serde_val: [...i.values()].map(k) };
    if (i instanceof Map)
      return { __serde_tag: "map", __serde_val: [...i.entries()].map(([r, t]) => [k(r), k(t)]) };
    if (i instanceof RegExp) return { __serde_tag: "regex", __serde_val: [i.source, i.flags] };
    if (W.isOption(i))
      return i.isSome()
        ? { __serde_tag: "some", __serde_val: k(i.value) }
        : { __serde_tag: "none" };
    if (Y.isResult(i))
      return i.isOk()
        ? { __serde_tag: "ok", __serde_val: k(i.value) }
        : { __serde_tag: "err", __serde_val: k(i.error) };
    if (typeof i == "object") {
      let r = {};
      for (let [t, e] of Object.entries(i)) r[t] = k(e);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
function ge(i, r = 0) {
  let t = 3735928559 ^ r,
    e = 1103547991 ^ r;
  for (let a = 0, n; a < i.length; a++)
    ((n = i.charCodeAt(a)), (t = Math.imul(t ^ n, 2654435761)), (e = Math.imul(e ^ n, 1597334677)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t ^= Math.imul(e ^ (e >>> 13), 3266489909)),
    (e = Math.imul(e ^ (e >>> 16), 2246822507)),
    (e ^= Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & e) + (t >>> 0)
  );
}
var Ue = ["mp4", "webm", "mkv"],
  Xe = ["mp3", "m4a", "ogg"],
  Ve = [...Ue, ...Xe];
var Be = [
  { mime_reg: /(avc1|avc3).*/i, demuxer: "mp4", codec: "H264" },
  { mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i, demuxer: "mp4", codec: "H265" },
  { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
  { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
  { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
  { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
];
function pe(i) {
  for (let r of Be) if (r.mime_reg.test(i)) return R(r.demuxer);
  return T;
}
function $e(i, r) {
  let n = i.size.map((o) => o.height).unwrapOr(0),
    u = r.size.map((o) => o.height).unwrapOr(0),
    l = i.bitrate.unwrapOr(0),
    f = r.bitrate.unwrapOr(0);
  return n > u ? -1 : n < u ? 1 : l > f ? -1 : l < f ? 1 : 0;
}
function he(i) {
  return [...i.values()].sort((r, t) => $e(r.quality, t.quality));
}
function ye(i) {
  return i.length > 0;
}
var Q = (function () {
  function i() {
    this.listeners = {};
  }
  var r = i.prototype;
  return (
    (r.on = function (e, a) {
      (this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(a));
    }),
    (r.off = function (e, a) {
      if (!this.listeners[e]) return !1;
      var n = this.listeners[e].indexOf(a);
      return (
        (this.listeners[e] = this.listeners[e].slice(0)),
        this.listeners[e].splice(n, 1),
        n > -1
      );
    }),
    (r.trigger = function (e) {
      var a = this.listeners[e];
      if (a)
        if (arguments.length === 2)
          for (var n = a.length, u = 0; u < n; ++u) a[u].call(this, arguments[1]);
        else
          for (var l = Array.prototype.slice.call(arguments, 1), f = a.length, o = 0; o < f; ++o)
            a[o].apply(this, l);
    }),
    (r.dispose = function () {
      this.listeners = {};
    }),
    (r.pipe = function (e) {
      this.on("data", function (a) {
        e.push(a);
      });
    }),
    i
  );
})();
function B() {
  return (
    (B = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var e in t) ({}).hasOwnProperty.call(t, e) && (i[e] = t[e]);
          }
          return i;
        }),
    B.apply(null, arguments)
  );
}
var ie = fe(_e()),
  He = function (r) {
    return ie.default.atob ? ie.default.atob(r) : Buffer.from(r, "base64").toString("binary");
  };
function ne(i) {
  for (var r = He(i), t = new Uint8Array(r.length), e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return t;
}
var oe = class extends Q {
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
  ae = function (i) {
    let r = /([0-9.]*)?@?([0-9.]*)?/.exec(i || ""),
      t = {};
    return (r[1] && (t.length = parseInt(r[1], 10)), r[2] && (t.offset = parseInt(r[2], 10)), t);
  },
  qe = function () {
    let t = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + t + ")");
  },
  O = function (i) {
    let r = {};
    if (!i) return r;
    let t = i.split(qe()),
      e = t.length,
      a;
    for (; e--; )
      t[e] !== "" &&
        ((a = /([^=]*)=(.*)/.exec(t[e]).slice(1)),
        (a[0] = a[0].replace(/^\s+|\s+$/g, "")),
        (a[1] = a[1].replace(/^\s+|\s+$/g, "")),
        (a[1] = a[1].replace(/^['"](.*)['"]$/g, "$1")),
        (r[a[0]] = a[1]));
    return r;
  },
  be = (i) => {
    let r = i.split("x"),
      t = {};
    return (r[0] && (t.width = parseInt(r[0], 10)), r[1] && (t.height = parseInt(r[1], 10)), t);
  },
  ue = class extends Q {
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
          (n, u) => {
            let l = u(r);
            return l === r ? n : n.concat([l]);
          },
          [r],
        )
        .forEach((n) => {
          for (let u = 0; u < this.customParsers.length; u++)
            if (this.customParsers[u].call(this, n)) return;
          if (n.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: n.slice(1) });
            return;
          }
          if (((n = n.replace("\r", "")), (t = /^#EXTM3U/.exec(n)), t)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((t = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "inf" }),
              t[1] && (e.duration = parseFloat(t[1])),
              t[2] && (e.title = t[2]),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "targetduration" }),
              t[1] && (e.duration = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-VERSION:([0-9.]*)?/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "version" }),
              t[1] && (e.version = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "media-sequence" }),
              t[1] && (e.number = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "discontinuity-sequence" }),
              t[1] && (e.number = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "playlist-type" }),
              t[1] && (e.playlistType = t[1]),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-BYTERANGE:(.*)?$/.exec(n)), t)) {
            ((e = B(ae(t[1]), { type: "tag", tagType: "byterange" })), this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "allow-cache" }),
              t[1] && (e.allowed = !/NO/.test(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MAP:(.*)$/.exec(n)), t)) {
            if (((e = { type: "tag", tagType: "map" }), t[1])) {
              let u = O(t[1]);
              (u.URI && (e.uri = u.URI), u.BYTERANGE && (e.byterange = ae(u.BYTERANGE)));
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-STREAM-INF:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "stream-inf" }),
              t[1] &&
                ((e.attributes = O(t[1])),
                e.attributes.RESOLUTION && (e.attributes.RESOLUTION = be(e.attributes.RESOLUTION)),
                e.attributes.BANDWIDTH &&
                  (e.attributes.BANDWIDTH = parseInt(e.attributes.BANDWIDTH, 10)),
                e.attributes["FRAME-RATE"] &&
                  (e.attributes["FRAME-RATE"] = parseFloat(e.attributes["FRAME-RATE"])),
                e.attributes["PROGRAM-ID"] &&
                  (e.attributes["PROGRAM-ID"] = parseInt(e.attributes["PROGRAM-ID"], 10))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MEDIA:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "media" }),
              t[1] && (e.attributes = O(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-ENDLIST/.exec(n)), t)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((t = /^#EXT-X-DISCONTINUITY/.exec(n)), t)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((t = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "program-date-time" }),
              t[1] && ((e.dateTimeString = t[1]), (e.dateTimeObject = new Date(t[1]))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-KEY:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "key" }),
              t[1] &&
                ((e.attributes = O(t[1])),
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
          if (((t = /^#EXT-X-START:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "start" }),
              t[1] &&
                ((e.attributes = O(t[1])),
                (e.attributes["TIME-OFFSET"] = parseFloat(e.attributes["TIME-OFFSET"])),
                (e.attributes.PRECISE = /YES/.test(e.attributes.PRECISE))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "cue-out-cont" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-OUT:(.*)?$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "cue-out" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "cue-in" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SKIP:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "skip" }),
              (e.attributes = O(t[1])),
              e.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (e.attributes["SKIPPED-SEGMENTS"] = parseInt(e.attributes["SKIPPED-SEGMENTS"], 10)),
              e.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (e.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  e.attributes["RECENTLY-REMOVED-DATERANGES"].split(Ge)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "part" }),
              (e.attributes = O(t[1])),
              ["DURATION"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = /YES/.test(e.attributes[u]));
              }),
              e.attributes.hasOwnProperty("BYTERANGE") &&
                (e.attributes.byterange = ae(e.attributes.BYTERANGE)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "server-control" }),
              (e.attributes = O(t[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = /YES/.test(e.attributes[u]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART-INF:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "part-inf" }),
              (e.attributes = O(t[1])),
              ["PART-TARGET"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "preload-hint" }),
              (e.attributes = O(t[1])),
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
          if (((t = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "rendition-report" }),
              (e.attributes = O(t[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) && (e.attributes[u] = parseInt(e.attributes[u], 10));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DATERANGE:(.*)$/.exec(n)), t && t[1])) {
            ((e = { type: "tag", tagType: "daterange" }),
              (e.attributes = O(t[1])),
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
              let f = /[0-9A-Fa-f]{6}/g.test(e.attributes[l]),
                o = /^\d+(\.\d+)?$/.test(e.attributes[l]);
              e.attributes[l] = f
                ? e.attributes[l].toString(16)
                : o
                  ? parseFloat(e.attributes[l])
                  : String(e.attributes[l]);
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(n)), t)) {
            this.trigger("data", { type: "tag", tagType: "independent-segments" });
            return;
          }
          if (((t = /^#EXT-X-I-FRAMES-ONLY/.exec(n)), t)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((t = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "content-steering" }),
              (e.attributes = O(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "i-frame-playlist" }),
              (e.attributes = O(t[1])),
              e.attributes.URI && (e.uri = e.attributes.URI),
              e.attributes.BANDWIDTH &&
                (e.attributes.BANDWIDTH = parseInt(e.attributes.BANDWIDTH, 10)),
              e.attributes.RESOLUTION && (e.attributes.RESOLUTION = be(e.attributes.RESOLUTION)),
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
          if (((t = /^#EXT-X-DEFINE:(.*)$/.exec(n)), t)) {
            ((e = { type: "tag", tagType: "define" }),
              (e.attributes = O(t[1])),
              this.trigger("data", e));
            return;
          }
          this.trigger("data", { type: "tag", data: n.slice(4) });
        });
    }
    addParser({ expression: r, customType: t, dataParser: e, segment: a }) {
      (typeof e != "function" && (e = (n) => n),
        this.customParsers.push((n) => {
          if (r.exec(n))
            return (
              this.trigger("data", { type: "custom", data: e(n), customType: t, segment: a }),
              !0
            );
        }));
    }
    addTagMapper({ expression: r, map: t }) {
      let e = (a) => (r.test(a) ? t(a) : a);
      this.tagMappers.push(e);
    }
  },
  We = (i) => i.toLowerCase().replace(/-(\w)/g, (r) => r[1].toUpperCase()),
  X = function (i) {
    let r = {};
    return (
      Object.keys(i).forEach(function (t) {
        r[We(t)] = i[t];
      }),
      r
    );
  },
  se = function (i) {
    let { serverControl: r, targetDuration: t, partTargetDuration: e } = i;
    if (!r) return;
    let a = "#EXT-X-SERVER-CONTROL",
      n = "holdBack",
      u = "partHoldBack",
      l = t && t * 3,
      f = e && e * 2;
    (t &&
      !r.hasOwnProperty(n) &&
      ((r[n] = l),
      this.trigger("info", { message: `${a} defaulting HOLD-BACK to targetDuration * 3 (${l}).` })),
      l &&
        r[n] < l &&
        (this.trigger("warn", {
          message: `${a} clamping HOLD-BACK (${r[n]}) to targetDuration * 3 (${l})`,
        }),
        (r[n] = l)),
      e &&
        !r.hasOwnProperty(u) &&
        ((r[u] = e * 3),
        this.trigger("info", {
          message: `${a} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${r[u]}).`,
        })),
      e &&
        r[u] < f &&
        (this.trigger("warn", {
          message: `${a} clamping PART-HOLD-BACK (${r[u]}) to partTargetDuration * 2 (${f}).`,
        }),
        (r[u] = f)));
  },
  J = class extends Q {
    constructor(r = {}) {
      (super(),
        (this.lineStream = new oe()),
        (this.parseStream = new ue()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = r.mainDefinitions || {}),
        (this.params = new URL(r.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let t = this,
        e = [],
        a = {},
        n,
        u,
        l = !1,
        f = function () {},
        o = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        h = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        A = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let E = 0,
        x = 0,
        v = {};
      (this.on("end", () => {
        a.uri ||
          (!a.parts && !a.preloadHints) ||
          (!a.map && n && (a.map = n),
          !a.key && u && (a.key = u),
          !a.timeline && typeof A == "number" && (a.timeline = A),
          (this.manifest.preloadSegment = a));
      }),
        this.parseStream.on("data", function (s) {
          let C, b;
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
                      ((a.byterange = p), (p.length = s.length), "offset" in s || (s.offset = E)),
                      "offset" in s && ((a.byterange = p), (p.offset = s.offset)),
                      (E = p.offset + p.length));
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
                      s.title && (a.title = s.title),
                      s.duration > 0 && (a.duration = s.duration),
                      s.duration === 0 &&
                        ((a.duration = 0.01),
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
                          pssh: ne(s.attributes.URI.split(",")[1]),
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
                    ((n = {}),
                      s.uri && (n.uri = s.uri),
                      s.byterange && (n.byterange = s.byterange),
                      u && (n.key = u));
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
                    (a.attributes || (a.attributes = {}), B(a.attributes, s.attributes));
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
                      (b = { default: /yes/i.test(s.attributes.DEFAULT) }),
                      b.default
                        ? (b.autoselect = !0)
                        : (b.autoselect = /yes/i.test(s.attributes.AUTOSELECT)),
                      s.attributes.LANGUAGE && (b.language = s.attributes.LANGUAGE),
                      s.attributes.URI && (b.uri = s.attributes.URI),
                      s.attributes["INSTREAM-ID"] && (b.instreamId = s.attributes["INSTREAM-ID"]),
                      s.attributes.CHARACTERISTICS &&
                        (b.characteristics = s.attributes.CHARACTERISTICS),
                      s.attributes.FORCED && (b.forced = /yes/i.test(s.attributes.FORCED)),
                      (C[s.attributes.NAME] = b));
                  },
                  discontinuity() {
                    ((A += 1),
                      (a.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(e.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = s.dateTimeString),
                      (this.manifest.dateTimeObject = s.dateTimeObject)),
                      (a.dateTimeString = s.dateTimeString),
                      (a.dateTimeObject = s.dateTimeObject));
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
                    ((this.manifest.targetDuration = s.duration), se.call(this, this.manifest));
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
                    a.cueOut = s.data;
                  },
                  "cue-out-cont"() {
                    a.cueOutCont = s.data;
                  },
                  "cue-in"() {
                    a.cueIn = s.data;
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
                      d = X(s.attributes);
                    ((a.parts = a.parts || []),
                      a.parts.push(d),
                      d.byterange &&
                        (d.byterange.hasOwnProperty("offset") || (d.byterange.offset = x),
                        (x = d.byterange.offset + d.byterange.length)));
                    let m = a.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${m} for segment #${p}`,
                      s.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((c, g) => {
                          c.hasOwnProperty("lastPart") ||
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
                      se.call(this, this.manifest),
                      p.canSkipDateranges &&
                        !p.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let p = this.manifest.segments.length,
                      d = X(s.attributes),
                      m = d.type && d.type === "PART";
                    ((a.preloadHints = a.preloadHints || []),
                      a.preloadHints.push(d),
                      d.byterange &&
                        (d.byterange.hasOwnProperty("offset") ||
                          ((d.byterange.offset = m ? x : 0),
                          m && (x = d.byterange.offset + d.byterange.length))));
                    let c = a.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${c} for segment #${p}`,
                        s.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!d.type)
                    )
                      for (let g = 0; g < a.preloadHints.length - 1; g++) {
                        let _ = a.preloadHints[g];
                        _.type &&
                          _.type === d.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${c} for segment #${p} has the same TYPE ${d.type} as preload hint #${g}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let p = X(s.attributes);
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
                    ((this.manifest.partInf = X(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-PART-INF", s.attributes, [
                        "PART-TARGET",
                      ]),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                      se.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(X(s.attributes));
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
                      let c = this.manifest.dateRanges.findIndex((g) => g.id === d.id);
                      ((this.manifest.dateRanges[c] = B(this.manifest.dateRanges[c], d)),
                        (v[d.id] = B(v[d.id], d)),
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
                })[s.tagType] || f
              ).call(t);
            },
            uri() {
              ((a.uri = s.uri),
                e.push(a),
                this.manifest.targetDuration &&
                  !("duration" in a) &&
                  (this.trigger("warn", {
                    message: "defaulting segment duration to the target duration",
                  }),
                  (a.duration = this.manifest.targetDuration)),
                u && (a.key = u),
                (a.timeline = A),
                n && (a.map = n),
                (x = 0),
                this.lastProgramDateTime !== null &&
                  ((a.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += a.duration * 1e3)),
                (a = {}));
            },
            comment() {},
            custom() {
              s.segment
                ? ((a.custom = a.custom || {}), (a.custom[s.customType] = s.data))
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
      let a = [];
      (e.forEach(function (n) {
        t.hasOwnProperty(n) || a.push(n);
      }),
        a.length &&
          this.trigger("warn", { message: `${r} lacks required attribute(s): ${a.join(", ")}` }));
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
function Te(i, r, t, e = !1, a = !1) {
  let n;
  try {
    let o = new J();
    (o.push(i), o.end(), (n = o.manifest));
  } catch {}
  if (!n) return I("parse error");
  if (!n.playlists) return I("Not a master M3U8");
  let u = n.playlists,
    l = n.mediaGroups.AUDIO ?? {},
    f = [];
  for (let o of u) {
    if (typeof o.uri != "string") continue;
    let h = "mp4";
    if (o.attributes.CODECS) {
      let b = pe(o.attributes.CODECS);
      if (b.isNone()) continue;
      h = b.value;
    }
    if (
      (!("FRAME-RATE" in o.attributes) && "RESOLUTION" in o.attributes,
      o.attributes["VIDEO-RANGE"] && o.attributes["VIDEO-RANGE"] == "PQ")
    )
      continue;
    let A = V(o.uri, r.href);
    if (A.isNone()) continue;
    let E = T;
    if (o.attributes.AUDIO) {
      let b = l[o.attributes.AUDIO];
      if (b) {
        for (let p of Object.values(b))
          if (
            (p.uri && (E = V(p.uri, r.href)),
            (t.isSome() && p.language && t.value.includes(p.language)) || p.default)
          )
            break;
      }
    }
    let x = T,
      v = T;
    (o.attributes.RESOLUTION &&
      (x = R({ height: o.attributes.RESOLUTION.height, width: o.attributes.RESOLUTION.width })),
      o.attributes.BANDWIDTH && (v = R(o.attributes.BANDWIDTH)));
    let s = { size: x, bitrate: v },
      C = A.value;
    if ((e ? (C.search = re(C.searchParams, r.searchParams)) : a && (C.search = ""), E.isSome())) {
      let b = E.value;
      (e ? (b.search = re(C.searchParams, r.searchParams)) : a && (b.search = ""),
        f.push({ demuxer: h, quality: s, av: { video: C, audio: b } }));
    } else f.push({ demuxer: h, quality: s, av: { video: C, audio: !1 } });
  }
  return ((f = he(f)), ye(f) ? N(f) : I("Empty playlist"));
}
var xe = fe(ve(), 1);
var rr = new BroadcastChannel("worker_service");
var me = {
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
async function Ye(i, r) {
  await xe.default.runtime.sendMessage({ msg: i, channel: r });
}
function Se(i) {
  let r = me.FromInjectedToService;
  Ye(i, r);
}
var je =
  /https?:\/\/(?:[^/]+\.)?chaturbate\.(?<tld>com|eu|global)\/(?:fullvideo\/?\?.*?\bb=)?(?<id>[^/?&#]+)/;
async function we(i, r) {
  let e = await (await fetch(i)).text(),
    a = Te(e, i, T);
  if (a.isErr()) return !1;
  let n = a.value,
    u = {
      master_url: i,
      is_youtube: !1,
      prefered_entry: T,
      initiator: V(window.location.href),
      hash: `media_hash_${ge(i.href)}`,
      sent_headers: new Headers(),
      thumbnail_url: R(new URL(`https://thumb.live.mmcdn.com/ri/${r}.jpg`)),
      filename: T,
      title: T,
      type: "m3u8_playlist",
      playlist: n,
      duration: "live",
      discovery_timestamp_ms: Date.now(),
      has_drm: !1,
      cache: "default",
    };
  return (Se({ name: "on_media", data: { media: k(u) } }), !0);
}
async function Qe(i, r) {
  try {
    let t = await (
        await fetch(i, { credentials: "same-origin", headers: { Accept: "text/html" } })
      ).text(),
      e = /initialRoomDossier\s*=\s*(["'])(.+?)\1/s,
      a = t.match(e);
    if (!a || !a[2]) return !1;
    let n = JSON.parse(`"${a[2]}"`),
      u = JSON.parse(n),
      l = V(u?.hls_source);
    return l.isNone() ? !1 : we(l.value, r);
  } catch (t) {
    return (console.error("FVDH CB: ", t), !1);
  }
}
async function Je(i, r) {
  let t = `https://chaturbate.${r}/get_edge_hls_url_ajax/`,
    e = new URLSearchParams();
  e.append("room_slug", i);
  try {
    let n =
        (await (
          await fetch(t, {
            method: "POST",
            body: e,
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
        ).json()) || {},
      u = V(n.url);
    if (u.isNone()) return !1;
    let l = u.value;
    return we(l, i);
  } catch (a) {
    return (console.error("FVDH CB:", a), !1);
  }
}
async function Ze() {
  let i;
  for (;;) {
    let r = window.location.href;
    if (r == i) {
      await new Promise((u) => setTimeout(u, 600));
      continue;
    }
    let t = r.match(je);
    if (!t || !t.groups) {
      await new Promise((u) => setTimeout(u, 600));
      continue;
    }
    let { id: e, tld: a } = t.groups;
    if (!e || !a) {
      await new Promise((u) => setTimeout(u, 600));
      continue;
    }
    ((await Je(e, a)) || (await Qe(r, e)), (i = r));
  }
}
Ze();
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)
*/
