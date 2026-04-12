var Zu = Object.create;
var Dr = Object.defineProperty;
var Ru = Object.getOwnPropertyDescriptor;
var Vu = Object.getOwnPropertyNames;
var Lu = Object.getPrototypeOf,
  Mu = Object.prototype.hasOwnProperty;
var Cu = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  pe = (e, r) => {
    for (var o in r) Dr(e, o, { get: r[o], enumerable: !0 });
  },
  qu = (e, r, o, i) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let t of Vu(r))
        !Mu.call(e, t) &&
          t !== o &&
          Dr(e, t, { get: () => r[t], enumerable: !(i = Ru(r, t)) || i.enumerable });
    return e;
  };
var Aa = (e, r, o) => (
  (o = e != null ? Zu(Lu(e)) : {}),
  qu(r || !e || !e.__esModule ? Dr(o, "default", { value: e, enumerable: !0 }) : o, e)
);
var jr = Cu((Pr, Pa) => {
  (function (e, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof Pr < "u") r(Pa);
    else {
      var o = { exports: {} };
      (r(o), (e.browser = o.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Pr, function (e) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      e.exports = globalThis.browser;
    else {
      let r = "The message port closed before a response was received.",
        o = (i) => {
          let t = {
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
          if (Object.keys(t).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class n extends WeakMap {
            constructor($, D = void 0) {
              (super(D), (this.createItem = $));
            }
            get($) {
              return (this.has($) || this.set($, this.createItem($)), super.get($));
            }
          }
          let a = (w) => w && typeof w == "object" && typeof w.then == "function",
            s =
              (w, $) =>
              (...D) => {
                i.runtime.lastError
                  ? w.reject(new Error(i.runtime.lastError.message))
                  : $.singleCallbackArg || (D.length <= 1 && $.singleCallbackArg !== !1)
                    ? w.resolve(D[0])
                    : w.resolve(D);
              },
            l = (w) => (w == 1 ? "argument" : "arguments"),
            u = (w, $) =>
              function (O, ...R) {
                if (R.length < $.minArgs)
                  throw new Error(
                    `Expected at least ${$.minArgs} ${l($.minArgs)} for ${w}(), got ${R.length}`,
                  );
                if (R.length > $.maxArgs)
                  throw new Error(
                    `Expected at most ${$.maxArgs} ${l($.maxArgs)} for ${w}(), got ${R.length}`,
                  );
                return new Promise((F, K) => {
                  if ($.fallbackToNoCallback)
                    try {
                      O[w](...R, s({ resolve: F, reject: K }, $));
                    } catch (A) {
                      (console.warn(
                        `${w} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        A,
                      ),
                        O[w](...R),
                        ($.fallbackToNoCallback = !1),
                        ($.noCallback = !0),
                        F());
                    }
                  else
                    $.noCallback ? (O[w](...R), F()) : O[w](...R, s({ resolve: F, reject: K }, $));
                });
              },
            m = (w, $, D) =>
              new Proxy($, {
                apply(O, R, F) {
                  return D.call(R, w, ...F);
                },
              }),
            p = Function.call.bind(Object.prototype.hasOwnProperty),
            g = (w, $ = {}, D = {}) => {
              let O = Object.create(null),
                R = {
                  has(K, A) {
                    return A in w || A in O;
                  },
                  get(K, A, Y) {
                    if (A in O) return O[A];
                    if (!(A in w)) return;
                    let L = w[A];
                    if (typeof L == "function")
                      if (typeof $[A] == "function") L = m(w, w[A], $[A]);
                      else if (p(D, A)) {
                        let xe = u(A, D[A]);
                        L = m(w, w[A], xe);
                      } else L = L.bind(w);
                    else if (typeof L == "object" && L !== null && (p($, A) || p(D, A)))
                      L = g(L, $[A], D[A]);
                    else if (p(D, "*")) L = g(L, $[A], D["*"]);
                    else
                      return (
                        Object.defineProperty(O, A, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return w[A];
                          },
                          set(xe) {
                            w[A] = xe;
                          },
                        }),
                        L
                      );
                    return ((O[A] = L), L);
                  },
                  set(K, A, Y, L) {
                    return (A in O ? (O[A] = Y) : (w[A] = Y), !0);
                  },
                  defineProperty(K, A, Y) {
                    return Reflect.defineProperty(O, A, Y);
                  },
                  deleteProperty(K, A) {
                    return Reflect.deleteProperty(O, A);
                  },
                },
                F = Object.create(w);
              return new Proxy(F, R);
            },
            d = (w) => ({
              addListener($, D, ...O) {
                $.addListener(w.get(D), ...O);
              },
              hasListener($, D) {
                return $.hasListener(w.get(D));
              },
              removeListener($, D) {
                $.removeListener(w.get(D));
              },
            }),
            v = new n((w) =>
              typeof w != "function"
                ? w
                : function (D) {
                    let O = g(D, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    w(O);
                  },
            ),
            x = new n((w) =>
              typeof w != "function"
                ? w
                : function (D, O, R) {
                    let F = !1,
                      K,
                      A = new Promise((Te) => {
                        K = function (J) {
                          ((F = !0), Te(J));
                        };
                      }),
                      Y;
                    try {
                      Y = w(D, O, K);
                    } catch (Te) {
                      Y = Promise.reject(Te);
                    }
                    let L = Y !== !0 && a(Y);
                    if (Y !== !0 && !L && !F) return !1;
                    let xe = (Te) => {
                      Te.then(
                        (J) => {
                          R(J);
                        },
                        (J) => {
                          let Ir;
                          (J && (J instanceof Error || typeof J.message == "string")
                            ? (Ir = J.message)
                            : (Ir = "An unexpected error occurred"),
                            R({ __mozWebExtensionPolyfillReject__: !0, message: Ir }));
                        },
                      ).catch((J) => {
                        console.error("Failed to send onMessage rejected reply", J);
                      });
                    };
                    return (xe(L ? Y : A), !0);
                  },
            ),
            P = ({ reject: w, resolve: $ }, D) => {
              i.runtime.lastError
                ? i.runtime.lastError.message === r
                  ? $()
                  : w(new Error(i.runtime.lastError.message))
                : D && D.__mozWebExtensionPolyfillReject__
                  ? w(new Error(D.message))
                  : $(D);
            },
            j = (w, $, D, ...O) => {
              if (O.length < $.minArgs)
                throw new Error(
                  `Expected at least ${$.minArgs} ${l($.minArgs)} for ${w}(), got ${O.length}`,
                );
              if (O.length > $.maxArgs)
                throw new Error(
                  `Expected at most ${$.maxArgs} ${l($.maxArgs)} for ${w}(), got ${O.length}`,
                );
              return new Promise((R, F) => {
                let K = P.bind(null, { resolve: R, reject: F });
                (O.push(K), D.sendMessage(...O));
              });
            },
            I = {
              devtools: { network: { onRequestFinished: d(v) } },
              runtime: {
                onMessage: d(x),
                onMessageExternal: d(x),
                sendMessage: j.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: j.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            S = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (t.privacy = { network: { "*": S }, services: { "*": S }, websites: { "*": S } }),
            g(i, I, t)
          );
        };
      e.exports = o(chrome);
    }
  });
});
var Ee = "google";
var v_ = Ee != "mozilla",
  Ar = Ee == "mozilla";
var y_ = atob(
  "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
);
var X = "https://github.com/Atamol/FreeVDH",
  b_ = `${X}/v2/entitlements/validate`,
  w_ = `${X}/v2/entitlements/activate`,
  x_ = `${X}/v2/entitlements/migrate`,
  $_ = `${X}/v2/reports`,
  k_ = `${X}/issue`,
  z_ = `${X}/premium`,
  S_ = `${X}/manage-subscription`,
  I_ = `${X}/welcome/${Ee}`,
  D_ = `${X}/changelog/${Ee}`,
  A_ = `${X}/goodbye/${Ee}`;
var Eu = Aa(jr(), 1);
function ce(e) {
  var r = String(e);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(e);
    } catch {}
  return r;
}
var Fu = (function () {
    function e() {}
    return (
      (e.prototype.isSome = function () {
        return !1;
      }),
      (e.prototype.isNone = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.unwrapOr = function (r) {
        return r;
      }),
      (e.prototype.expect = function (r) {
        throw new Error("".concat(r));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (r) {
        return this;
      }),
      (e.prototype.mapOr = function (r, o) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return r();
      }),
      (e.prototype.or = function (r) {
        return r;
      }),
      (e.prototype.orElse = function (r) {
        return r();
      }),
      (e.prototype.andThen = function (r) {
        return this;
      }),
      (e.prototype.toResult = function (r) {
        return M(r);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ue(re);
      }),
      e
    );
  })(),
  re = new Fu();
Object.freeze(re);
var Hu = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.value = r;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (e.prototype.expect = function (r) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (r) {
        return ne(r(this.value));
      }),
      (e.prototype.mapOr = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.or = function (r) {
        return this;
      }),
      (e.prototype.orElse = function (r) {
        return this;
      }),
      (e.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (e.prototype.toResult = function (r) {
        return H(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ue(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(ce(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  ne = Hu,
  Or;
(function (e) {
  function r() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = [], s = 0, l = t; s < l.length; s++) {
      var u = l[s];
      if (u.isSome()) a.push(u.value);
      else return u;
    }
    return ne(a);
  }
  e.all = r;
  function o() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = 0, s = t; a < s.length; a++) {
      var l = s[a];
      if (l.isSome()) return l;
    }
    return re;
  }
  e.any = o;
  function i(t) {
    return t instanceof ne || t === re;
  }
  e.isOption = i;
})(Or || (Or = {}));
var $e = function (e, r, o) {
    if (o || arguments.length === 2)
      for (var i = 0, t = r.length, n; i < t; i++)
        (n || !(i in r)) && (n || (n = Array.prototype.slice.call(r, 0, i)), (n[i] = r[i]));
    return e.concat(n || Array.prototype.slice.call(r));
  },
  Wu = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.error = r;
      var o = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (o && o.length > 0 && o[0].includes("ErrImpl") && o.shift(),
        (this._stack = o.join(`
`)));
    }
    return (
      (e.prototype.isOk = function () {
        return !1;
      }),
      (e.prototype.isErr = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.else = function (r) {
        return r;
      }),
      (e.prototype.unwrapOr = function (r) {
        return r;
      }),
      (e.prototype.expect = function (r) {
        throw new Error(
          ""
            .concat(r, " - Error: ")
            .concat(
              ce(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (r) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              ce(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.unwrapErr = function () {
        return this.error;
      }),
      (e.prototype.map = function (r) {
        return this;
      }),
      (e.prototype.andThen = function (r) {
        return this;
      }),
      (e.prototype.mapErr = function (r) {
        return new M(r(this.error));
      }),
      (e.prototype.mapOr = function (r, o) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return r(this.error);
      }),
      (e.prototype.or = function (r) {
        return r;
      }),
      (e.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (e.prototype.toOption = function () {
        return re;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(ce(this.error), ")");
      }),
      Object.defineProperty(e.prototype, "stack", {
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
      (e.prototype.toAsyncResult = function () {
        return new Ze(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var M = Wu,
  Bu = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.value = r;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (r) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (e.prototype.expect = function (r) {
        return this.value;
      }),
      (e.prototype.expectErr = function (r) {
        throw new Error(r);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(ce(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (r) {
        return new H(r(this.value));
      }),
      (e.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (e.prototype.mapErr = function (r) {
        return this;
      }),
      (e.prototype.mapOr = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.or = function (r) {
        return this;
      }),
      (e.prototype.orElse = function (r) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return ne(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(ce(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new Ze(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var H = Bu,
  Nr;
(function (e) {
  function r(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : $e([s], l, !0), p = [], g = 0, d = m;
      g < d.length;
      g++
    ) {
      var v = d[g];
      if (v.isOk()) p.push(v.value);
      else return v;
    }
    return new H(p);
  }
  e.all = r;
  function o(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : $e([s], l, !0), p = [], g = 0, d = m;
      g < d.length;
      g++
    ) {
      var v = d[g];
      if (v.isOk()) return v;
      p.push(v.error);
    }
    return new M(p);
  }
  e.any = o;
  function i(s) {
    try {
      return new H(s());
    } catch (l) {
      return new M(l);
    }
  }
  e.wrap = i;
  function t(s) {
    try {
      return s()
        .then(function (l) {
          return new H(l);
        })
        .catch(function (l) {
          return new M(l);
        });
    } catch (l) {
      return Promise.resolve(new M(l));
    }
  }
  e.wrapAsync = t;
  function n(s) {
    return s.reduce(
      function (l, u) {
        var m = l[0],
          p = l[1];
        return u.isOk()
          ? [$e($e([], m, !0), [u.value], !1), p]
          : [m, $e($e([], p, !0), [u.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = n;
  function a(s) {
    return s instanceof M || s instanceof H;
  }
  e.isResult = a;
})(Nr || (Nr = {}));
var xt = function (e, r, o, i) {
    function t(n) {
      return n instanceof o
        ? n
        : new o(function (a) {
            a(n);
          });
    }
    return new (o || (o = Promise))(function (n, a) {
      function s(m) {
        try {
          u(i.next(m));
        } catch (p) {
          a(p);
        }
      }
      function l(m) {
        try {
          u(i.throw(m));
        } catch (p) {
          a(p);
        }
      }
      function u(m) {
        m.done ? n(m.value) : t(m.value).then(s, l);
      }
      u((i = i.apply(e, r || [])).next());
    });
  },
  $t = function (e, r) {
    var o = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      i,
      t,
      n,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (m) {
        return l([u, m]);
      };
    }
    function l(u) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (o = 0)), o; )
        try {
          if (
            ((i = 1),
            t &&
              (n =
                u[0] & 2
                  ? t.return
                  : u[0]
                    ? t.throw || ((n = t.return) && n.call(t), 0)
                    : t.next) &&
              !(n = n.call(t, u[1])).done)
          )
            return n;
          switch (((t = 0), n && (u = [u[0] & 2, n.value]), u[0])) {
            case 0:
            case 1:
              n = u;
              break;
            case 4:
              return (o.label++, { value: u[1], done: !1 });
            case 5:
              (o.label++, (t = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = o.ops.pop()), o.trys.pop());
              continue;
            default:
              if (
                ((n = o.trys), !(n = n.length > 0 && n[n.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                o = 0;
                continue;
              }
              if (u[0] === 3 && (!n || (u[1] > n[0] && u[1] < n[3]))) {
                o.label = u[1];
                break;
              }
              if (u[0] === 6 && o.label < n[1]) {
                ((o.label = n[1]), (n = u));
                break;
              }
              if (n && o.label < n[2]) {
                ((o.label = n[2]), o.ops.push(u));
                break;
              }
              (n[2] && o.ops.pop(), o.trys.pop());
              continue;
          }
          u = r.call(e, o);
        } catch (m) {
          ((u = [6, m]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Ze = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return xt(o, void 0, void 0, function () {
            var t;
            return $t(this, function (n) {
              return i.isErr() ? [2, i] : ((t = r(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return xt(o, void 0, void 0, function () {
            var t;
            return $t(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((t = H), [4, r(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return xt(o, void 0, void 0, function () {
            var t;
            return $t(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((t = M), [4, r(i.error)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (e.prototype.orElse = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return xt(o, void 0, void 0, function () {
            var t;
            return $t(this, function (n) {
              return i.isOk() ? [2, i] : ((t = r(i.error)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Ue(
          this.promise.then(function (r) {
            return r.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (r) {
        return new e(this.promise.then(r));
      }),
      e
    );
  })();
var Tr = function (e, r, o, i) {
    function t(n) {
      return n instanceof o
        ? n
        : new o(function (a) {
            a(n);
          });
    }
    return new (o || (o = Promise))(function (n, a) {
      function s(m) {
        try {
          u(i.next(m));
        } catch (p) {
          a(p);
        }
      }
      function l(m) {
        try {
          u(i.throw(m));
        } catch (p) {
          a(p);
        }
      }
      function u(m) {
        m.done ? n(m.value) : t(m.value).then(s, l);
      }
      u((i = i.apply(e, r || [])).next());
    });
  },
  Er = function (e, r) {
    var o = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      i,
      t,
      n,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (m) {
        return l([u, m]);
      };
    }
    function l(u) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (o = 0)), o; )
        try {
          if (
            ((i = 1),
            t &&
              (n =
                u[0] & 2
                  ? t.return
                  : u[0]
                    ? t.throw || ((n = t.return) && n.call(t), 0)
                    : t.next) &&
              !(n = n.call(t, u[1])).done)
          )
            return n;
          switch (((t = 0), n && (u = [u[0] & 2, n.value]), u[0])) {
            case 0:
            case 1:
              n = u;
              break;
            case 4:
              return (o.label++, { value: u[1], done: !1 });
            case 5:
              (o.label++, (t = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = o.ops.pop()), o.trys.pop());
              continue;
            default:
              if (
                ((n = o.trys), !(n = n.length > 0 && n[n.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                o = 0;
                continue;
              }
              if (u[0] === 3 && (!n || (u[1] > n[0] && u[1] < n[3]))) {
                o.label = u[1];
                break;
              }
              if (u[0] === 6 && o.label < n[1]) {
                ((o.label = n[1]), (n = u));
                break;
              }
              if (n && o.label < n[2]) {
                ((o.label = n[2]), o.ops.push(u));
                break;
              }
              (n[2] && o.ops.pop(), o.trys.pop());
              continue;
          }
          u = r.call(e, o);
        } catch (m) {
          ((u = [6, m]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Ue = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Tr(o, void 0, void 0, function () {
            var t;
            return Er(this, function (n) {
              return i.isNone() ? [2, i] : ((t = r(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Tr(o, void 0, void 0, function () {
            var t;
            return Er(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((t = ne), [4, r(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (e.prototype.orElse = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Tr(o, void 0, void 0, function () {
            var t;
            return Er(this, function (n) {
              return i.isSome() ? [2, i] : ((t = r()), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (r) {
        return new Ze(
          this.promise.then(function (o) {
            return o.toResult(r);
          }),
        );
      }),
      (e.prototype.thenInternal = function (r) {
        return new e(this.promise.then(r));
      }),
      e
    );
  })();
function Q(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let r = {};
    for (let [o, i] of Object.entries(e.__serde_val)) {
      let t = i;
      r[o] = Q(t);
    }
    return r;
  } else {
    if (e.__serde_tag == "map") return new Map(e.__serde_val.map(([r, o]) => [Q(r), Q(o)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(Q));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(Q);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex") return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return ne(Q(e.__serde_val));
    if (e.__serde_tag == "none") return re;
    if (e.__serde_tag == "ok") return H(Q(e.__serde_val));
    if (e.__serde_tag == "err") return M(Q(e.__serde_val));
    throw new Error("Unreachable");
  }
}
var f = {};
pe(f, {
  $brand: () => kt,
  $input: () => Jo,
  $output: () => Go,
  NEVER: () => Nd,
  ZodAny: () => Ws,
  ZodArray: () => Ys,
  ZodBase64: () => ua,
  ZodBase64URL: () => la,
  ZodBigInt: () => bt,
  ZodBigIntFormat: () => _a,
  ZodBoolean: () => yt,
  ZodCIDRv4: () => aa,
  ZodCIDRv6: () => sa,
  ZodCUID: () => Qi,
  ZodCUID2: () => ea,
  ZodCatch: () => fu,
  ZodCustom: () => zr,
  ZodDate: () => xr,
  ZodDefault: () => lu,
  ZodDiscriminatedUnion: () => Gs,
  ZodE164: () => ca,
  ZodEmail: () => Yi,
  ZodEmoji: () => Ji,
  ZodEnum: () => ht,
  ZodError: () => Dc,
  ZodFile: () => au,
  ZodGUID: () => fr,
  ZodIPv4: () => oa,
  ZodIPv6: () => ia,
  ZodISODate: () => dr,
  ZodISODateTime: () => cr,
  ZodISODuration: () => mr,
  ZodISOTime: () => _r,
  ZodIntersection: () => Js,
  ZodIssueCode: () => jd,
  ZodJWT: () => da,
  ZodKSUID: () => na,
  ZodLazy: () => wu,
  ZodLiteral: () => ou,
  ZodMap: () => tu,
  ZodNaN: () => hu,
  ZodNanoID: () => Xi,
  ZodNever: () => Bs,
  ZodNonOptional: () => ya,
  ZodNull: () => Fs,
  ZodNullable: () => uu,
  ZodNumber: () => vt,
  ZodNumberFormat: () => Ne,
  ZodObject: () => $r,
  ZodOptional: () => va,
  ZodPipe: () => ba,
  ZodPrefault: () => du,
  ZodPromise: () => $u,
  ZodReadonly: () => vu,
  ZodRealError: () => Oe,
  ZodRecord: () => ga,
  ZodSet: () => ru,
  ZodString: () => br,
  ZodStringFormat: () => E,
  ZodSuccess: () => pu,
  ZodSymbol: () => Cs,
  ZodTemplateLiteral: () => bu,
  ZodTransform: () => su,
  ZodTuple: () => Qs,
  ZodType: () => z,
  ZodULID: () => ta,
  ZodURL: () => Gi,
  ZodUUID: () => le,
  ZodUndefined: () => qs,
  ZodUnion: () => fa,
  ZodUnknown: () => ma,
  ZodVoid: () => Ks,
  ZodXID: () => ra,
  _ZodString: () => Ki,
  _default: () => cu,
  any: () => sd,
  array: () => pa,
  base64: () => Kc,
  base64url: () => Yc,
  bigint: () => rd,
  boolean: () => Ms,
  catch: () => gu,
  check: () => ku,
  cidrv4: () => Wc,
  cidrv6: () => Bc,
  clone: () => W,
  coerce: () => wa,
  config: () => Z,
  core: () => ue,
  cuid: () => Vc,
  cuid2: () => Lc,
  custom: () => Sd,
  date: () => ld,
  discriminatedUnion: () => pd,
  e164: () => Gc,
  email: () => Pc,
  emoji: () => Zc,
  endsWith: () => lt,
  enum: () => nu,
  file: () => bd,
  flattenError: () => Ke,
  float32: () => Xc,
  float64: () => Qc,
  formatError: () => Ye,
  function: () => Ui,
  getErrorMap: () => Ed,
  globalRegistry: () => te,
  gt: () => ae,
  gte: () => q,
  guid: () => jc,
  includes: () => st,
  instanceof: () => Id,
  int: () => Bi,
  int32: () => ed,
  int64: () => nd,
  intersection: () => Xs,
  ipv4: () => Fc,
  ipv6: () => Hc,
  iso: () => pr,
  json: () => Ad,
  jwt: () => Jc,
  keyof: () => cd,
  ksuid: () => qc,
  lazy: () => xu,
  length: () => je,
  literal: () => iu,
  locales: () => tt,
  looseObject: () => md,
  lowercase: () => it,
  lt: () => ie,
  lte: () => G,
  map: () => hd,
  maxLength: () => Pe,
  maxSize: () => Ae,
  mime: () => ct,
  minLength: () => me,
  minSize: () => we,
  multipleOf: () => be,
  nan: () => $d,
  nanoid: () => Rc,
  nativeEnum: () => yd,
  negative: () => Ii,
  never: () => wr,
  nonnegative: () => Ai,
  nonoptional: () => mu,
  nonpositive: () => Di,
  normalize: () => dt,
  null: () => Hs,
  nullable: () => vr,
  nullish: () => wd,
  number: () => Ls,
  object: () => dd,
  optional: () => hr,
  overwrite: () => se,
  parse: () => Ci,
  parseAsync: () => qi,
  partialRecord: () => gd,
  pipe: () => yr,
  positive: () => Si,
  prefault: () => _u,
  preprocess: () => Pd,
  prettifyError: () => Kr,
  promise: () => zd,
  property: () => Pi,
  readonly: () => yu,
  record: () => eu,
  refine: () => zu,
  regex: () => ot,
  regexes: () => ve,
  registry: () => Mt,
  safeParse: () => Fi,
  safeParseAsync: () => Hi,
  set: () => vd,
  setErrorMap: () => Td,
  size: () => nt,
  startsWith: () => ut,
  strictObject: () => _d,
  string: () => Wi,
  stringbool: () => Dd,
  success: () => xd,
  superRefine: () => Su,
  symbol: () => id,
  templateLiteral: () => kd,
  toJSONSchema: () => Zi,
  toLowerCase: () => mt,
  toUpperCase: () => pt,
  transform: () => ha,
  treeifyError: () => Br,
  trim: () => _t,
  tuple: () => fd,
  uint32: () => td,
  uint64: () => od,
  ulid: () => Mc,
  undefined: () => ad,
  union: () => kr,
  unknown: () => gr,
  uppercase: () => at,
  url: () => Uc,
  uuid: () => Oc,
  uuidv4: () => Nc,
  uuidv6: () => Tc,
  uuidv7: () => Ec,
  void: () => ud,
  xid: () => Cc,
});
var ue = {};
pe(ue, {
  $ZodAny: () => $o,
  $ZodArray: () => Qe,
  $ZodAsyncError: () => ee,
  $ZodBase64: () => po,
  $ZodBase64URL: () => fo,
  $ZodBigInt: () => Rt,
  $ZodBigIntFormat: () => yo,
  $ZodBoolean: () => Xe,
  $ZodCIDRv4: () => co,
  $ZodCIDRv6: () => _o,
  $ZodCUID: () => Qn,
  $ZodCUID2: () => eo,
  $ZodCatch: () => qo,
  $ZodCheck: () => U,
  $ZodCheckBigIntFormat: () => An,
  $ZodCheckEndsWith: () => Mn,
  $ZodCheckGreaterThan: () => Tt,
  $ZodCheckIncludes: () => Vn,
  $ZodCheckLengthEquals: () => En,
  $ZodCheckLessThan: () => Nt,
  $ZodCheckLowerCase: () => Zn,
  $ZodCheckMaxLength: () => Nn,
  $ZodCheckMaxSize: () => Pn,
  $ZodCheckMimeType: () => qn,
  $ZodCheckMinLength: () => Tn,
  $ZodCheckMinSize: () => jn,
  $ZodCheckMultipleOf: () => In,
  $ZodCheckNumberFormat: () => Dn,
  $ZodCheckOverwrite: () => Fn,
  $ZodCheckProperty: () => Cn,
  $ZodCheckRegex: () => Un,
  $ZodCheckSizeEquals: () => On,
  $ZodCheckStartsWith: () => Ln,
  $ZodCheckStringFormat: () => Se,
  $ZodCheckUpperCase: () => Rn,
  $ZodCustom: () => Yo,
  $ZodDate: () => So,
  $ZodDefault: () => Vo,
  $ZodDiscriminatedUnion: () => Do,
  $ZodE164: () => go,
  $ZodEmail: () => Yn,
  $ZodEmoji: () => Jn,
  $ZodEnum: () => No,
  $ZodError: () => Be,
  $ZodFile: () => Eo,
  $ZodFunction: () => lr,
  $ZodGUID: () => Bn,
  $ZodIPv4: () => uo,
  $ZodIPv6: () => lo,
  $ZodISODate: () => io,
  $ZodISODateTime: () => oo,
  $ZodISODuration: () => so,
  $ZodISOTime: () => ao,
  $ZodIntersection: () => Ao,
  $ZodJWT: () => ho,
  $ZodKSUID: () => no,
  $ZodLazy: () => Ko,
  $ZodLiteral: () => To,
  $ZodMap: () => jo,
  $ZodNaN: () => Fo,
  $ZodNanoID: () => Xn,
  $ZodNever: () => ko,
  $ZodNonOptional: () => Mo,
  $ZodNull: () => xo,
  $ZodNullable: () => Ro,
  $ZodNumber: () => Zt,
  $ZodNumberFormat: () => vo,
  $ZodObject: () => Io,
  $ZodOptional: () => Zo,
  $ZodPipe: () => et,
  $ZodPrefault: () => Lo,
  $ZodPromise: () => Bo,
  $ZodReadonly: () => Ho,
  $ZodRealError: () => ze,
  $ZodRecord: () => Po,
  $ZodRegistry: () => Ie,
  $ZodSet: () => Oo,
  $ZodString: () => Je,
  $ZodStringFormat: () => T,
  $ZodSuccess: () => Co,
  $ZodSymbol: () => bo,
  $ZodTemplateLiteral: () => Wo,
  $ZodTransform: () => Uo,
  $ZodTuple: () => ye,
  $ZodType: () => k,
  $ZodULID: () => to,
  $ZodURL: () => Gn,
  $ZodUUID: () => Kn,
  $ZodUndefined: () => wo,
  $ZodUnion: () => Vt,
  $ZodUnknown: () => _e,
  $ZodVoid: () => zo,
  $ZodXID: () => ro,
  $brand: () => kt,
  $constructor: () => c,
  $input: () => Jo,
  $output: () => Go,
  Doc: () => Ge,
  JSONSchema: () => Zs,
  JSONSchemaGenerator: () => gt,
  _any: () => bi,
  _array: () => ft,
  _base64: () => ir,
  _base64url: () => ar,
  _bigint: () => mi,
  _boolean: () => di,
  _catch: () => wc,
  _cidrv4: () => nr,
  _cidrv6: () => or,
  _coercedBigint: () => pi,
  _coercedBoolean: () => _i,
  _coercedDate: () => ki,
  _coercedNumber: () => ii,
  _coercedString: () => Qo,
  _cuid: () => Gt,
  _cuid2: () => Jt,
  _custom: () => Ni,
  _date: () => $i,
  _default: () => vc,
  _discriminatedUnion: () => sc,
  _e164: () => sr,
  _email: () => Ct,
  _emoji: () => Kt,
  _endsWith: () => lt,
  _enum: () => _c,
  _file: () => Oi,
  _float32: () => si,
  _float64: () => ui,
  _gt: () => ae,
  _gte: () => q,
  _guid: () => rt,
  _includes: () => st,
  _int: () => ai,
  _int32: () => li,
  _int64: () => fi,
  _intersection: () => uc,
  _ipv4: () => tr,
  _ipv6: () => rr,
  _isoDate: () => ti,
  _isoDateTime: () => ei,
  _isoDuration: () => ni,
  _isoTime: () => ri,
  _jwt: () => ur,
  _ksuid: () => er,
  _lazy: () => zc,
  _length: () => je,
  _literal: () => pc,
  _lowercase: () => it,
  _lt: () => ie,
  _lte: () => G,
  _map: () => cc,
  _max: () => G,
  _maxLength: () => Pe,
  _maxSize: () => Ae,
  _mime: () => ct,
  _min: () => q,
  _minLength: () => me,
  _minSize: () => we,
  _multipleOf: () => be,
  _nan: () => zi,
  _nanoid: () => Yt,
  _nativeEnum: () => mc,
  _negative: () => Ii,
  _never: () => wi,
  _nonnegative: () => Ai,
  _nonoptional: () => yc,
  _nonpositive: () => Di,
  _normalize: () => dt,
  _null: () => yi,
  _nullable: () => hc,
  _number: () => oi,
  _optional: () => gc,
  _overwrite: () => se,
  _parse: () => St,
  _parseAsync: () => Dt,
  _pipe: () => xc,
  _positive: () => Si,
  _promise: () => Sc,
  _property: () => Pi,
  _readonly: () => $c,
  _record: () => lc,
  _refine: () => Ti,
  _regex: () => ot,
  _safeParse: () => Pt,
  _safeParseAsync: () => jt,
  _set: () => dc,
  _size: () => nt,
  _startsWith: () => ut,
  _string: () => Xo,
  _stringbool: () => Ei,
  _success: () => bc,
  _symbol: () => hi,
  _templateLiteral: () => kc,
  _toLowerCase: () => mt,
  _toUpperCase: () => pt,
  _transform: () => fc,
  _trim: () => _t,
  _tuple: () => ji,
  _uint32: () => ci,
  _uint64: () => gi,
  _ulid: () => Xt,
  _undefined: () => vi,
  _union: () => ac,
  _unknown: () => De,
  _uppercase: () => at,
  _url: () => Bt,
  _uuid: () => qt,
  _uuidv4: () => Ft,
  _uuidv6: () => Ht,
  _uuidv7: () => Wt,
  _void: () => xi,
  _xid: () => Qt,
  clone: () => W,
  config: () => Z,
  flattenError: () => Ke,
  formatError: () => Ye,
  function: () => Ui,
  globalConfig: () => Re,
  globalRegistry: () => te,
  isValidBase64: () => mo,
  isValidBase64URL: () => Ga,
  isValidJWT: () => Ja,
  locales: () => tt,
  parse: () => It,
  parseAsync: () => At,
  prettifyError: () => Kr,
  regexes: () => ve,
  registry: () => Mt,
  safeParse: () => Yr,
  safeParseAsync: () => Gr,
  toDotPath: () => Oa,
  toJSONSchema: () => Zi,
  treeifyError: () => Br,
  util: () => y,
  version: () => Hn,
});
function c(e, r, o) {
  function i(s, l) {
    var u;
    (Object.defineProperty(s, "_zod", { value: s._zod ?? {}, enumerable: !1 }),
      (u = s._zod).traits ?? (u.traits = new Set()),
      s._zod.traits.add(e),
      r(s, l));
    for (let m in a.prototype)
      m in s || Object.defineProperty(s, m, { value: a.prototype[m].bind(s) });
    ((s._zod.constr = a), (s._zod.def = l));
  }
  let t = o?.Parent ?? Object;
  class n extends t {}
  Object.defineProperty(n, "name", { value: e });
  function a(s) {
    var l;
    let u = o?.Parent ? new n() : this;
    (i(u, s), (l = u._zod).deferred ?? (l.deferred = []));
    for (let m of u._zod.deferred) m();
    return u;
  }
  return (
    Object.defineProperty(a, "init", { value: i }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (s) => (o?.Parent && s instanceof o.Parent ? !0 : s?._zod?.traits?.has(e)),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
var kt = Symbol("zod_brand"),
  ee = class extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  },
  Re = {};
function Z(e) {
  return (e && Object.assign(Re, e), Re);
}
var y = {};
pe(y, {
  BIGINT_FORMAT_RANGES: () => Hr,
  Class: () => Zr,
  NUMBER_FORMAT_RANGES: () => Fr,
  aborted: () => ge,
  allowsEval: () => Mr,
  assert: () => Xu,
  assertEqual: () => Ku,
  assertIs: () => Gu,
  assertNever: () => Ju,
  assertNotEqual: () => Yu,
  assignProp: () => Lr,
  cached: () => Me,
  cleanEnum: () => cl,
  cleanRegex: () => Ce,
  clone: () => W,
  createTransparentProxy: () => nl,
  defineLazy: () => N,
  esc: () => fe,
  escapeRegex: () => oe,
  extend: () => al,
  finalizeIssue: () => B,
  floatSafeRemainder: () => Vr,
  getElementAtPath: () => Qu,
  getEnumValues: () => Le,
  getLengthableOrigin: () => We,
  getParsedType: () => rl,
  getSizableOrigin: () => He,
  isObject: () => ke,
  isPlainObject: () => qe,
  issue: () => Wr,
  joinValues: () => _,
  jsonStringifyReplacer: () => Rr,
  merge: () => sl,
  normalizeParams: () => h,
  nullish: () => de,
  numKeys: () => tl,
  omit: () => il,
  optionalKeys: () => qr,
  partial: () => ul,
  pick: () => ol,
  prefixIssues: () => C,
  primitiveTypes: () => Cr,
  promiseAllObject: () => el,
  propertyKeyTypes: () => Fe,
  randomString: () => zt,
  required: () => ll,
  stringifyPrimitive: () => b,
  unwrapMessage: () => Ve,
});
function Ku(e) {
  return e;
}
function Yu(e) {
  return e;
}
function Gu(e) {}
function Ju(e) {
  throw new Error();
}
function Xu(e) {}
function Le(e) {
  let r = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, t]) => r.indexOf(+i) === -1)
    .map(([i, t]) => t);
}
function _(e, r = "|") {
  return e.map((o) => b(o)).join(r);
}
function Rr(e, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Me(e) {
  return {
    get value() {
      {
        let o = e();
        return (Object.defineProperty(this, "value", { value: o }), o);
      }
      throw new Error("cached value already set");
    },
  };
}
function de(e) {
  return e == null;
}
function Ce(e) {
  let r = e.startsWith("^") ? 1 : 0,
    o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(r, o);
}
function Vr(e, r) {
  let o = (e.toString().split(".")[1] || "").length,
    i = (r.toString().split(".")[1] || "").length,
    t = o > i ? o : i,
    n = Number.parseInt(e.toFixed(t).replace(".", "")),
    a = Number.parseInt(r.toFixed(t).replace(".", ""));
  return (n % a) / 10 ** t;
}
function N(e, r, o) {
  Object.defineProperty(e, r, {
    get() {
      {
        let t = o();
        return ((e[r] = t), t);
      }
      throw new Error("cached value already set");
    },
    set(t) {
      Object.defineProperty(e, r, { value: t });
    },
    configurable: !0,
  });
}
function Lr(e, r, o) {
  Object.defineProperty(e, r, { value: o, writable: !0, enumerable: !0, configurable: !0 });
}
function Qu(e, r) {
  return r ? r.reduce((o, i) => o?.[i], e) : e;
}
function el(e) {
  let r = Object.keys(e),
    o = r.map((i) => e[i]);
  return Promise.all(o).then((i) => {
    let t = {};
    for (let n = 0; n < r.length; n++) t[r[n]] = i[n];
    return t;
  });
}
function zt(e = 10) {
  let r = "abcdefghijklmnopqrstuvwxyz",
    o = "";
  for (let i = 0; i < e; i++) o += r[Math.floor(Math.random() * r.length)];
  return o;
}
function fe(e) {
  return JSON.stringify(e);
}
function ke(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var Mr = Me(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function qe(e) {
  if (ke(e) === !1) return !1;
  let r = e.constructor;
  if (r === void 0) return !0;
  let o = r.prototype;
  return !(ke(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function tl(e) {
  let r = 0;
  for (let o in e) Object.prototype.hasOwnProperty.call(e, o) && r++;
  return r;
}
var rl = (e) => {
    let r = typeof e;
    switch (r) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        return Array.isArray(e)
          ? "array"
          : e === null
            ? "null"
            : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function"
              ? "promise"
              : typeof Map < "u" && e instanceof Map
                ? "map"
                : typeof Set < "u" && e instanceof Set
                  ? "set"
                  : typeof Date < "u" && e instanceof Date
                    ? "date"
                    : typeof File < "u" && e instanceof File
                      ? "file"
                      : "object";
      default:
        throw new Error(`Unknown data type: ${r}`);
    }
  },
  Fe = new Set(["string", "number", "symbol"]),
  Cr = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function oe(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function W(e, r, o) {
  let i = new e._zod.constr(r ?? e._zod.def);
  return ((!r || o?.parent) && (i._zod.parent = e), i);
}
function h(e) {
  let r = e;
  if (!r) return {};
  if (typeof r == "string") return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return (delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r);
}
function nl(e) {
  let r;
  return new Proxy(
    {},
    {
      get(o, i, t) {
        return (r ?? (r = e()), Reflect.get(r, i, t));
      },
      set(o, i, t, n) {
        return (r ?? (r = e()), Reflect.set(r, i, t, n));
      },
      has(o, i) {
        return (r ?? (r = e()), Reflect.has(r, i));
      },
      deleteProperty(o, i) {
        return (r ?? (r = e()), Reflect.deleteProperty(r, i));
      },
      ownKeys(o) {
        return (r ?? (r = e()), Reflect.ownKeys(r));
      },
      getOwnPropertyDescriptor(o, i) {
        return (r ?? (r = e()), Reflect.getOwnPropertyDescriptor(r, i));
      },
      defineProperty(o, i, t) {
        return (r ?? (r = e()), Reflect.defineProperty(r, i, t));
      },
    },
  );
}
function b(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function qr(e) {
  return Object.keys(e).filter(
    (r) => e[r]._zod.optin === "optional" && e[r]._zod.optout === "optional",
  );
}
var Fr = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Hr = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function ol(e, r) {
  let o = {},
    i = e._zod.def;
  for (let t in r) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    r[t] && (o[t] = i.shape[t]);
  }
  return W(e, { ...e._zod.def, shape: o, checks: [] });
}
function il(e, r) {
  let o = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let t in r) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    r[t] && delete o[t];
  }
  return W(e, { ...e._zod.def, shape: o, checks: [] });
}
function al(e, r) {
  let o = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...r };
      return (Lr(this, "shape", i), i);
    },
    checks: [],
  };
  return W(e, o);
}
function sl(e, r) {
  return W(e, {
    ...e._zod.def,
    get shape() {
      let o = { ...e._zod.def.shape, ...r._zod.def.shape };
      return (Lr(this, "shape", o), o);
    },
    catchall: r._zod.def.catchall,
    checks: [],
  });
}
function ul(e, r, o) {
  let i = r._zod.def.shape,
    t = { ...i };
  if (o)
    for (let n in o) {
      if (!(n in i)) throw new Error(`Unrecognized key: "${n}"`);
      o[n] && (t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n]);
    }
  else for (let n in i) t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n];
  return W(r, { ...r._zod.def, shape: t, checks: [] });
}
function ll(e, r, o) {
  let i = r._zod.def.shape,
    t = { ...i };
  if (o)
    for (let n in o) {
      if (!(n in t)) throw new Error(`Unrecognized key: "${n}"`);
      o[n] && (t[n] = new e({ type: "nonoptional", innerType: i[n] }));
    }
  else for (let n in i) t[n] = new e({ type: "nonoptional", innerType: i[n] });
  return W(r, { ...r._zod.def, shape: t, checks: [] });
}
function ge(e, r = 0) {
  for (let o = r; o < e.issues.length; o++) if (e.issues[o].continue !== !0) return !0;
  return !1;
}
function C(e, r) {
  return r.map((o) => {
    var i;
    return ((i = o).path ?? (i.path = []), o.path.unshift(e), o);
  });
}
function Ve(e) {
  return typeof e == "string" ? e : e?.message;
}
function B(e, r, o) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let t =
      Ve(e.inst?._zod.def?.error?.(e)) ??
      Ve(r?.error?.(e)) ??
      Ve(o.customError?.(e)) ??
      Ve(o.localeError?.(e)) ??
      "Invalid input";
    i.message = t;
  }
  return (delete i.inst, delete i.continue, r?.reportInput || delete i.input, i);
}
function He(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function We(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Wr(...e) {
  let [r, o, i] = e;
  return typeof r == "string" ? { message: r, code: "custom", input: o, inst: i } : { ...r };
}
function cl(e) {
  return Object.entries(e)
    .filter(([r, o]) => Number.isNaN(Number.parseInt(r, 10)))
    .map((r) => r[1]);
}
var Zr = class {
  constructor(...r) {}
};
var ja = (e, r) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: r, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(r, Rr, 2);
        },
        enumerable: !0,
      }));
  },
  Be = c("$ZodError", ja),
  ze = c("$ZodError", ja, { Parent: Error });
function Ke(e, r = (o) => o.message) {
  let o = {},
    i = [];
  for (let t of e.issues)
    t.path.length > 0
      ? ((o[t.path[0]] = o[t.path[0]] || []), o[t.path[0]].push(r(t)))
      : i.push(r(t));
  return { formErrors: i, fieldErrors: o };
}
function Ye(e, r) {
  let o =
      r ||
      function (n) {
        return n.message;
      },
    i = { _errors: [] },
    t = (n) => {
      for (let a of n.issues)
        if (a.code === "invalid_union" && a.errors.length) a.errors.map((s) => t({ issues: s }));
        else if (a.code === "invalid_key") t({ issues: a.issues });
        else if (a.code === "invalid_element") t({ issues: a.issues });
        else if (a.path.length === 0) i._errors.push(o(a));
        else {
          let s = i,
            l = 0;
          for (; l < a.path.length; ) {
            let u = a.path[l];
            (l === a.path.length - 1
              ? ((s[u] = s[u] || { _errors: [] }), s[u]._errors.push(o(a)))
              : (s[u] = s[u] || { _errors: [] }),
              (s = s[u]),
              l++);
          }
        }
    };
  return (t(e), i);
}
function Br(e, r) {
  let o =
      r ||
      function (n) {
        return n.message;
      },
    i = { errors: [] },
    t = (n, a = []) => {
      var s, l;
      for (let u of n.issues)
        if (u.code === "invalid_union" && u.errors.length)
          u.errors.map((m) => t({ issues: m }, u.path));
        else if (u.code === "invalid_key") t({ issues: u.issues }, u.path);
        else if (u.code === "invalid_element") t({ issues: u.issues }, u.path);
        else {
          let m = [...a, ...u.path];
          if (m.length === 0) {
            i.errors.push(o(u));
            continue;
          }
          let p = i,
            g = 0;
          for (; g < m.length; ) {
            let d = m[g],
              v = g === m.length - 1;
            (typeof d == "string"
              ? (p.properties ?? (p.properties = {}),
                (s = p.properties)[d] ?? (s[d] = { errors: [] }),
                (p = p.properties[d]))
              : (p.items ?? (p.items = []),
                (l = p.items)[d] ?? (l[d] = { errors: [] }),
                (p = p.items[d])),
              v && p.errors.push(o(u)),
              g++);
          }
        }
    };
  return (t(e), i);
}
function Oa(e) {
  let r = [];
  for (let o of e)
    typeof o == "number"
      ? r.push(`[${o}]`)
      : typeof o == "symbol"
        ? r.push(`[${JSON.stringify(String(o))}]`)
        : /[^\w$]/.test(o)
          ? r.push(`[${JSON.stringify(o)}]`)
          : (r.length && r.push("."), r.push(o));
  return r.join("");
}
function Kr(e) {
  let r = [],
    o = [...e.issues].sort((i, t) => i.path.length - t.path.length);
  for (let i of o)
    (r.push(`\u2716 ${i.message}`), i.path?.length && r.push(`  \u2192 at ${Oa(i.path)}`));
  return r.join(`
`);
}
var St = (e) => (r, o, i, t) => {
    let n = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = r._zod.run({ value: o, issues: [] }, n);
    if (a instanceof Promise) throw new ee();
    if (a.issues.length) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => B(l, n, Z())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  It = St(ze),
  Dt = (e) => async (r, o, i, t) => {
    let n = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = r._zod.run({ value: o, issues: [] }, n);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => B(l, n, Z())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  At = Dt(ze),
  Pt = (e) => (r, o, i) => {
    let t = i ? { ...i, async: !1 } : { async: !1 },
      n = r._zod.run({ value: o, issues: [] }, t);
    if (n instanceof Promise) throw new ee();
    return n.issues.length
      ? { success: !1, error: new (e ?? Be)(n.issues.map((a) => B(a, t, Z()))) }
      : { success: !0, data: n.value };
  },
  Yr = Pt(ze),
  jt = (e) => async (r, o, i) => {
    let t = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      n = r._zod.run({ value: o, issues: [] }, t);
    return (
      n instanceof Promise && (n = await n),
      n.issues.length
        ? { success: !1, error: new e(n.issues.map((a) => B(a, t, Z()))) }
        : { success: !0, data: n.value }
    );
  },
  Gr = jt(ze);
var ve = {};
pe(ve, {
  _emoji: () => Na,
  base64: () => _n,
  base64url: () => Ot,
  bigint: () => yn,
  boolean: () => xn,
  browserEmail: () => yl,
  cidrv4: () => cn,
  cidrv6: () => dn,
  cuid: () => Jr,
  cuid2: () => Xr,
  date: () => fn,
  datetime: () => hn,
  domain: () => bl,
  duration: () => nn,
  e164: () => pn,
  email: () => an,
  emoji: () => sn,
  extendedDuration: () => _l,
  guid: () => on,
  hostname: () => mn,
  html5Email: () => gl,
  integer: () => bn,
  ipv4: () => un,
  ipv6: () => ln,
  ksuid: () => tn,
  lowercase: () => zn,
  nanoid: () => rn,
  null: () => $n,
  number: () => wn,
  rfc5322Email: () => hl,
  string: () => vn,
  time: () => gn,
  ulid: () => Qr,
  undefined: () => kn,
  unicodeEmail: () => vl,
  uppercase: () => Sn,
  uuid: () => he,
  uuid4: () => ml,
  uuid6: () => pl,
  uuid7: () => fl,
  xid: () => en,
});
var Jr = /^[cC][^\s-]{8,}$/,
  Xr = /^[0-9a-z]+$/,
  Qr = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  en = /^[0-9a-vA-V]{20}$/,
  tn = /^[A-Za-z0-9]{27}$/,
  rn = /^[a-zA-Z0-9_-]{21}$/,
  nn =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  _l =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  on = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  he = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  ml = he(4),
  pl = he(6),
  fl = he(7),
  an =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  gl =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  hl =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  vl = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  yl =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Na = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function sn() {
  return new RegExp(Na, "u");
}
var un =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ln =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  cn =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  dn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  _n = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Ot = /^[A-Za-z0-9_-]*$/,
  mn = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  bl = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  pn = /^\+(?:[0-9]){6,14}[0-9]$/,
  Ta =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  fn = new RegExp(`^${Ta}$`);
function Ea(e) {
  let r = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (r = `${r}\\.\\d{${e.precision}}`)
      : e.precision == null && (r = `${r}(\\.\\d+)?`),
    r
  );
}
function gn(e) {
  return new RegExp(`^${Ea(e)}$`);
}
function hn(e) {
  let r = `${Ta}T${Ea(e)}`,
    o = [];
  return (
    o.push(e.local ? "Z?" : "Z"),
    e.offset && o.push("([+-]\\d{2}:?\\d{2})"),
    (r = `${r}(${o.join("|")})`),
    new RegExp(`^${r}$`)
  );
}
var vn = (e) => {
    let r = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${r}$`);
  },
  yn = /^\d+n?$/,
  bn = /^\d+$/,
  wn = /^-?\d+(?:\.\d+)?/i,
  xn = /true|false/i,
  $n = /null/i;
var kn = /undefined/i;
var zn = /^[^A-Z]*$/,
  Sn = /^[^a-z]*$/;
var U = c("$ZodCheck", (e, r) => {
    var o;
    (e._zod ?? (e._zod = {}), (e._zod.def = r), (o = e._zod).onattach ?? (o.onattach = []));
  }),
  Za = { number: "number", bigint: "bigint", object: "date" },
  Nt = c("$ZodCheckLessThan", (e, r) => {
    U.init(e, r);
    let o = Za[typeof r.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        n = (r.inclusive ? t.maximum : t.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      r.value < n && (r.inclusive ? (t.maximum = r.value) : (t.exclusiveMaximum = r.value));
    }),
      (e._zod.check = (i) => {
        (r.inclusive ? i.value <= r.value : i.value < r.value) ||
          i.issues.push({
            origin: o,
            code: "too_big",
            maximum: r.value,
            input: i.value,
            inclusive: r.inclusive,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Tt = c("$ZodCheckGreaterThan", (e, r) => {
    U.init(e, r);
    let o = Za[typeof r.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        n = (r.inclusive ? t.minimum : t.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      r.value > n && (r.inclusive ? (t.minimum = r.value) : (t.exclusiveMinimum = r.value));
    }),
      (e._zod.check = (i) => {
        (r.inclusive ? i.value >= r.value : i.value > r.value) ||
          i.issues.push({
            origin: o,
            code: "too_small",
            minimum: r.value,
            input: i.value,
            inclusive: r.inclusive,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  In = c("$ZodCheckMultipleOf", (e, r) => {
    (U.init(e, r),
      e._zod.onattach.push((o) => {
        var i;
        (i = o._zod.bag).multipleOf ?? (i.multipleOf = r.value);
      }),
      (e._zod.check = (o) => {
        if (typeof o.value != typeof r.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof o.value == "bigint"
          ? o.value % r.value === BigInt(0)
          : Vr(o.value, r.value) === 0) ||
          o.issues.push({
            origin: typeof o.value,
            code: "not_multiple_of",
            divisor: r.value,
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Dn = c("$ZodCheckNumberFormat", (e, r) => {
    (U.init(e, r), (r.format = r.format || "float64"));
    let o = r.format?.includes("int"),
      i = o ? "int" : "number",
      [t, n] = Fr[r.format];
    (e._zod.onattach.push((a) => {
      let s = a._zod.bag;
      ((s.format = r.format), (s.minimum = t), (s.maximum = n), o && (s.pattern = bn));
    }),
      (e._zod.check = (a) => {
        let s = a.value;
        if (o) {
          if (!Number.isInteger(s)) {
            a.issues.push({
              expected: i,
              format: r.format,
              code: "invalid_type",
              input: s,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(s)) {
            s > 0
              ? a.issues.push({
                  input: s,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !r.abort,
                })
              : a.issues.push({
                  input: s,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !r.abort,
                });
            return;
          }
        }
        (s < t &&
          a.issues.push({
            origin: "number",
            input: s,
            code: "too_small",
            minimum: t,
            inclusive: !0,
            inst: e,
            continue: !r.abort,
          }),
          s > n &&
            a.issues.push({ origin: "number", input: s, code: "too_big", maximum: n, inst: e }));
      }));
  }),
  An = c("$ZodCheckBigIntFormat", (e, r) => {
    U.init(e, r);
    let [o, i] = Hr[r.format];
    (e._zod.onattach.push((t) => {
      let n = t._zod.bag;
      ((n.format = r.format), (n.minimum = o), (n.maximum = i));
    }),
      (e._zod.check = (t) => {
        let n = t.value;
        (n < o &&
          t.issues.push({
            origin: "bigint",
            input: n,
            code: "too_small",
            minimum: o,
            inclusive: !0,
            inst: e,
            continue: !r.abort,
          }),
          n > i &&
            t.issues.push({ origin: "bigint", input: n, code: "too_big", maximum: i, inst: e }));
      }));
  }),
  Pn = c("$ZodCheckMaxSize", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        r.maximum < i && (o._zod.bag.maximum = r.maximum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        i.size <= r.maximum ||
          o.issues.push({
            origin: He(i),
            code: "too_big",
            maximum: r.maximum,
            input: i,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  jn = c("$ZodCheckMinSize", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        r.minimum > i && (o._zod.bag.minimum = r.minimum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        i.size >= r.minimum ||
          o.issues.push({
            origin: He(i),
            code: "too_small",
            minimum: r.minimum,
            input: i,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  On = c("$ZodCheckSizeEquals", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        ((i.minimum = r.size), (i.maximum = r.size), (i.size = r.size));
      }),
      (e._zod.check = (o) => {
        let i = o.value,
          t = i.size;
        if (t === r.size) return;
        let n = t > r.size;
        o.issues.push({
          origin: He(i),
          ...(n ? { code: "too_big", maximum: r.size } : { code: "too_small", minimum: r.size }),
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Nn = c("$ZodCheckMaxLength", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        r.maximum < i && (o._zod.bag.maximum = r.maximum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        if (i.length <= r.maximum) return;
        let n = We(i);
        o.issues.push({
          origin: n,
          code: "too_big",
          maximum: r.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Tn = c("$ZodCheckMinLength", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        r.minimum > i && (o._zod.bag.minimum = r.minimum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        if (i.length >= r.minimum) return;
        let n = We(i);
        o.issues.push({
          origin: n,
          code: "too_small",
          minimum: r.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  En = c("$ZodCheckLengthEquals", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        ((i.minimum = r.length), (i.maximum = r.length), (i.length = r.length));
      }),
      (e._zod.check = (o) => {
        let i = o.value,
          t = i.length;
        if (t === r.length) return;
        let n = We(i),
          a = t > r.length;
        o.issues.push({
          origin: n,
          ...(a
            ? { code: "too_big", maximum: r.length }
            : { code: "too_small", minimum: r.length }),
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Se = c("$ZodCheckStringFormat", (e, r) => {
    var o;
    (U.init(e, r),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        ((t.format = r.format),
          r.pattern && (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r.pattern)));
      }),
      (o = e._zod).check ??
        (o.check = (i) => {
          if (!r.pattern) throw new Error("Not implemented.");
          ((r.pattern.lastIndex = 0),
            !r.pattern.test(i.value) &&
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: r.format,
                input: i.value,
                ...(r.pattern ? { pattern: r.pattern.toString() } : {}),
                inst: e,
                continue: !r.abort,
              }));
        }));
  }),
  Un = c("$ZodCheckRegex", (e, r) => {
    (Se.init(e, r),
      (e._zod.check = (o) => {
        ((r.pattern.lastIndex = 0),
          !r.pattern.test(o.value) &&
            o.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: o.value,
              pattern: r.pattern.toString(),
              inst: e,
              continue: !r.abort,
            }));
      }));
  }),
  Zn = c("$ZodCheckLowerCase", (e, r) => {
    (r.pattern ?? (r.pattern = zn), Se.init(e, r));
  }),
  Rn = c("$ZodCheckUpperCase", (e, r) => {
    (r.pattern ?? (r.pattern = Sn), Se.init(e, r));
  }),
  Vn = c("$ZodCheckIncludes", (e, r) => {
    U.init(e, r);
    let o = oe(r.includes),
      i = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${o}` : o);
    ((r.pattern = i),
      e._zod.onattach.push((t) => {
        let n = t._zod.bag;
        (n.patterns ?? (n.patterns = new Set()), n.patterns.add(i));
      }),
      (e._zod.check = (t) => {
        t.value.includes(r.includes, r.position) ||
          t.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: r.includes,
            input: t.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Ln = c("$ZodCheckStartsWith", (e, r) => {
    U.init(e, r);
    let o = new RegExp(`^${oe(r.prefix)}.*`);
    (r.pattern ?? (r.pattern = o),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(o));
      }),
      (e._zod.check = (i) => {
        i.value.startsWith(r.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: r.prefix,
            input: i.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Mn = c("$ZodCheckEndsWith", (e, r) => {
    U.init(e, r);
    let o = new RegExp(`.*${oe(r.suffix)}$`);
    (r.pattern ?? (r.pattern = o),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(o));
      }),
      (e._zod.check = (i) => {
        i.value.endsWith(r.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: r.suffix,
            input: i.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  });
function Ua(e, r, o) {
  e.issues.length && r.issues.push(...C(o, e.issues));
}
var Cn = c("$ZodCheckProperty", (e, r) => {
    (U.init(e, r),
      (e._zod.check = (o) => {
        let i = r.schema._zod.run({ value: o.value[r.property], issues: [] }, {});
        if (i instanceof Promise) return i.then((t) => Ua(t, o, r.property));
        Ua(i, o, r.property);
      }));
  }),
  qn = c("$ZodCheckMimeType", (e, r) => {
    U.init(e, r);
    let o = new Set(r.mime);
    (e._zod.onattach.push((i) => {
      i._zod.bag.mime = r.mime;
    }),
      (e._zod.check = (i) => {
        o.has(i.value.type) ||
          i.issues.push({
            code: "invalid_value",
            values: r.mime,
            input: i.value.type,
            path: ["type"],
            inst: e,
          });
      }));
  }),
  Fn = c("$ZodCheckOverwrite", (e, r) => {
    (U.init(e, r),
      (e._zod.check = (o) => {
        o.value = r.tx(o.value);
      }));
  });
var Ge = class {
  constructor(r = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = r));
  }
  indented(r) {
    ((this.indent += 1), r(this), (this.indent -= 1));
  }
  write(r) {
    if (typeof r == "function") {
      (r(this, { execution: "sync" }), r(this, { execution: "async" }));
      return;
    }
    let i = r
        .split(
          `
`,
        )
        .filter((a) => a),
      t = Math.min(...i.map((a) => a.length - a.trimStart().length)),
      n = i.map((a) => a.slice(t)).map((a) => " ".repeat(this.indent * 2) + a);
    for (let a of n) this.content.push(a);
  }
  compile() {
    let r = Function,
      o = this?.args,
      t = [...(this?.content ?? [""]).map((n) => `  ${n}`)];
    return new r(
      ...o,
      t.join(`
`),
    );
  }
};
var Hn = { major: 4, minor: 0, patch: 0 };
var k = c("$ZodType", (e, r) => {
    var o;
    (e ?? (e = {}),
      (e._zod.id = r.type + "_" + zt(10)),
      (e._zod.def = r),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Hn));
    let i = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (let t of i) for (let n of t._zod.onattach) n(e);
    if (i.length === 0)
      ((o = e._zod).deferred ?? (o.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let t = (n, a, s) => {
        let l = ge(n),
          u;
        for (let m of a) {
          if (m._zod.when) {
            if (!m._zod.when(n)) continue;
          } else if (l) continue;
          let p = n.issues.length,
            g = m._zod.check(n);
          if (g instanceof Promise && s?.async === !1) throw new ee();
          if (u || g instanceof Promise)
            u = (u ?? Promise.resolve()).then(async () => {
              (await g, n.issues.length !== p && (l || (l = ge(n, p))));
            });
          else {
            if (n.issues.length === p) continue;
            l || (l = ge(n, p));
          }
        }
        return u ? u.then(() => n) : n;
      };
      e._zod.run = (n, a) => {
        let s = e._zod.parse(n, a);
        if (s instanceof Promise) {
          if (a.async === !1) throw new ee();
          return s.then((l) => t(l, i, a));
        }
        return t(s, i, a);
      };
    }
    e["~standard"] = {
      validate: (t) => {
        try {
          let n = Yr(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch {
          return Gr(e, t).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  Je = c("$ZodString", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? vn(e._zod.bag)),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = String(o.value);
          } catch {}
        return (
          typeof o.value == "string" ||
            o.issues.push({ expected: "string", code: "invalid_type", input: o.value, inst: e }),
          o
        );
      }));
  }),
  T = c("$ZodStringFormat", (e, r) => {
    (Se.init(e, r), Je.init(e, r));
  }),
  Bn = c("$ZodGUID", (e, r) => {
    (r.pattern ?? (r.pattern = on), T.init(e, r));
  }),
  Kn = c("$ZodUUID", (e, r) => {
    if (r.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[r.version];
      if (i === void 0) throw new Error(`Invalid UUID version: "${r.version}"`);
      r.pattern ?? (r.pattern = he(i));
    } else r.pattern ?? (r.pattern = he());
    T.init(e, r);
  }),
  Yn = c("$ZodEmail", (e, r) => {
    (r.pattern ?? (r.pattern = an), T.init(e, r));
  }),
  Gn = c("$ZodURL", (e, r) => {
    (T.init(e, r),
      (e._zod.check = (o) => {
        try {
          let i = new URL(o.value);
          (r.hostname &&
            ((r.hostname.lastIndex = 0),
            r.hostname.test(i.hostname) ||
              o.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: mn.source,
                input: o.value,
                inst: e,
                continue: !r.abort,
              })),
            r.protocol &&
              ((r.protocol.lastIndex = 0),
              r.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) ||
                o.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: r.protocol.source,
                  input: o.value,
                  inst: e,
                  continue: !r.abort,
                })));
          return;
        } catch {
          o.issues.push({
            code: "invalid_format",
            format: "url",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
        }
      }));
  }),
  Jn = c("$ZodEmoji", (e, r) => {
    (r.pattern ?? (r.pattern = sn()), T.init(e, r));
  }),
  Xn = c("$ZodNanoID", (e, r) => {
    (r.pattern ?? (r.pattern = rn), T.init(e, r));
  }),
  Qn = c("$ZodCUID", (e, r) => {
    (r.pattern ?? (r.pattern = Jr), T.init(e, r));
  }),
  eo = c("$ZodCUID2", (e, r) => {
    (r.pattern ?? (r.pattern = Xr), T.init(e, r));
  }),
  to = c("$ZodULID", (e, r) => {
    (r.pattern ?? (r.pattern = Qr), T.init(e, r));
  }),
  ro = c("$ZodXID", (e, r) => {
    (r.pattern ?? (r.pattern = en), T.init(e, r));
  }),
  no = c("$ZodKSUID", (e, r) => {
    (r.pattern ?? (r.pattern = tn), T.init(e, r));
  }),
  oo = c("$ZodISODateTime", (e, r) => {
    (r.pattern ?? (r.pattern = hn(r)), T.init(e, r));
  }),
  io = c("$ZodISODate", (e, r) => {
    (r.pattern ?? (r.pattern = fn), T.init(e, r));
  }),
  ao = c("$ZodISOTime", (e, r) => {
    (r.pattern ?? (r.pattern = gn(r)), T.init(e, r));
  }),
  so = c("$ZodISODuration", (e, r) => {
    (r.pattern ?? (r.pattern = nn), T.init(e, r));
  }),
  uo = c("$ZodIPv4", (e, r) => {
    (r.pattern ?? (r.pattern = un),
      T.init(e, r),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        i.format = "ipv4";
      }));
  }),
  lo = c("$ZodIPv6", (e, r) => {
    (r.pattern ?? (r.pattern = ln),
      T.init(e, r),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        i.format = "ipv6";
      }),
      (e._zod.check = (o) => {
        try {
          new URL(`http://[${o.value}]`);
        } catch {
          o.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
        }
      }));
  }),
  co = c("$ZodCIDRv4", (e, r) => {
    (r.pattern ?? (r.pattern = cn), T.init(e, r));
  }),
  _o = c("$ZodCIDRv6", (e, r) => {
    (r.pattern ?? (r.pattern = dn),
      T.init(e, r),
      (e._zod.check = (o) => {
        let [i, t] = o.value.split("/");
        try {
          if (!t) throw new Error();
          let n = Number(t);
          if (`${n}` !== t) throw new Error();
          if (n < 0 || n > 128) throw new Error();
          new URL(`http://[${i}]`);
        } catch {
          o.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
        }
      }));
  });
function mo(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var po = c("$ZodBase64", (e, r) => {
  (r.pattern ?? (r.pattern = _n),
    T.init(e, r),
    e._zod.onattach.push((o) => {
      o._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (o) => {
      mo(o.value) ||
        o.issues.push({
          code: "invalid_format",
          format: "base64",
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
    }));
});
function Ga(e) {
  if (!Ot.test(e)) return !1;
  let r = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    o = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return mo(o);
}
var fo = c("$ZodBase64URL", (e, r) => {
    (r.pattern ?? (r.pattern = Ot),
      T.init(e, r),
      e._zod.onattach.push((o) => {
        o._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (o) => {
        Ga(o.value) ||
          o.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  go = c("$ZodE164", (e, r) => {
    (r.pattern ?? (r.pattern = pn), T.init(e, r));
  });
function Ja(e, r = null) {
  try {
    let o = e.split(".");
    if (o.length !== 3) return !1;
    let [i] = o,
      t = JSON.parse(atob(i));
    return !(("typ" in t && t?.typ !== "JWT") || !t.alg || (r && (!("alg" in t) || t.alg !== r)));
  } catch {
    return !1;
  }
}
var ho = c("$ZodJWT", (e, r) => {
    (T.init(e, r),
      (e._zod.check = (o) => {
        Ja(o.value, r.alg) ||
          o.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Zt = c("$ZodNumber", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = e._zod.bag.pattern ?? wn),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = Number(o.value);
          } catch {}
        let t = o.value;
        if (typeof t == "number" && !Number.isNaN(t) && Number.isFinite(t)) return o;
        let n =
          typeof t == "number"
            ? Number.isNaN(t)
              ? "NaN"
              : Number.isFinite(t)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          o.issues.push({
            expected: "number",
            code: "invalid_type",
            input: t,
            inst: e,
            ...(n ? { received: n } : {}),
          }),
          o
        );
      }));
  }),
  vo = c("$ZodNumber", (e, r) => {
    (Dn.init(e, r), Zt.init(e, r));
  }),
  Xe = c("$ZodBoolean", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = xn),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = !!o.value;
          } catch {}
        let t = o.value;
        return (
          typeof t == "boolean" ||
            o.issues.push({ expected: "boolean", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  Rt = c("$ZodBigInt", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = yn),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = BigInt(o.value);
          } catch {}
        let { value: t } = o;
        return (
          typeof t == "bigint" ||
            o.issues.push({ expected: "bigint", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  yo = c("$ZodBigInt", (e, r) => {
    (An.init(e, r), Rt.init(e, r));
  }),
  bo = c("$ZodSymbol", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t == "symbol" ||
            o.issues.push({ expected: "symbol", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  wo = c("$ZodUndefined", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = kn),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t > "u" ||
            o.issues.push({ expected: "undefined", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  xo = c("$ZodNull", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = $n),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          t === null ||
            o.issues.push({ expected: "null", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  $o = c("$ZodAny", (e, r) => {
    (k.init(e, r), (e._zod.parse = (o) => o));
  }),
  _e = c("$ZodUnknown", (e, r) => {
    (k.init(e, r), (e._zod.parse = (o) => o));
  }),
  ko = c("$ZodNever", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => (
        o.issues.push({ expected: "never", code: "invalid_type", input: o.value, inst: e }),
        o
      )));
  }),
  zo = c("$ZodVoid", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t > "u" ||
            o.issues.push({ expected: "void", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  So = c("$ZodDate", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = new Date(o.value);
          } catch {}
        let t = o.value,
          n = t instanceof Date;
        return (
          (n && !Number.isNaN(t.getTime())) ||
            o.issues.push({
              expected: "date",
              code: "invalid_type",
              input: t,
              ...(n ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          o
        );
      }));
  });
function Va(e, r, o) {
  (e.issues.length && r.issues.push(...C(o, e.issues)), (r.value[o] = e.value));
}
var Qe = c("$ZodArray", (e, r) => {
  (k.init(e, r),
    (e._zod.parse = (o, i) => {
      let t = o.value;
      if (!Array.isArray(t))
        return (o.issues.push({ expected: "array", code: "invalid_type", input: t, inst: e }), o);
      o.value = Array(t.length);
      let n = [];
      for (let a = 0; a < t.length; a++) {
        let s = t[a],
          l = r.element._zod.run({ value: s, issues: [] }, i);
        l instanceof Promise ? n.push(l.then((u) => Va(u, o, a))) : Va(l, o, a);
      }
      return n.length ? Promise.all(n).then(() => o) : o;
    }));
});
function Et(e, r, o) {
  (e.issues.length && r.issues.push(...C(o, e.issues)), (r.value[o] = e.value));
}
function La(e, r, o, i) {
  e.issues.length
    ? i[o] === void 0
      ? o in i
        ? (r.value[o] = void 0)
        : (r.value[o] = e.value)
      : r.issues.push(...C(o, e.issues))
    : e.value === void 0
      ? o in i && (r.value[o] = void 0)
      : (r.value[o] = e.value);
}
var Io = c("$ZodObject", (e, r) => {
  k.init(e, r);
  let o = Me(() => {
    let p = Object.keys(r.shape);
    for (let d of p)
      if (!(r.shape[d] instanceof k))
        throw new Error(`Invalid element at key "${d}": expected a Zod schema`);
    let g = qr(r.shape);
    return {
      shape: r.shape,
      keys: p,
      keySet: new Set(p),
      numKeys: p.length,
      optionalKeys: new Set(g),
    };
  });
  N(e._zod, "propValues", () => {
    let p = r.shape,
      g = {};
    for (let d in p) {
      let v = p[d]._zod;
      if (v.values) {
        g[d] ?? (g[d] = new Set());
        for (let x of v.values) g[d].add(x);
      }
    }
    return g;
  });
  let i = (p) => {
      let g = new Ge(["shape", "payload", "ctx"]),
        { keys: d, optionalKeys: v } = o.value,
        x = (I) => {
          let S = fe(I);
          return `shape[${S}]._zod.run({ value: input[${S}], issues: [] }, ctx)`;
        };
      g.write("const input = payload.value;");
      let P = Object.create(null);
      for (let I of d) P[I] = zt(15);
      g.write("const newResult = {}");
      for (let I of d)
        if (v.has(I)) {
          let S = P[I];
          g.write(`const ${S} = ${x(I)};`);
          let w = fe(I);
          g.write(`
        if (${S}.issues.length) {
          if (input[${w}] === undefined) {
            if (${w} in input) {
              newResult[${w}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${S}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${w}, ...iss.path] : [${w}],
              }))
            );
          }
        } else if (${S}.value === undefined) {
          if (${w} in input) newResult[${w}] = undefined;
        } else {
          newResult[${w}] = ${S}.value;
        }
        `);
        } else {
          let S = P[I];
          (g.write(`const ${S} = ${x(I)};`),
            g.write(`
          if (${S}.issues.length) payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${fe(I)}, ...iss.path] : [${fe(I)}]
          })));`),
            g.write(`newResult[${fe(I)}] = ${S}.value`));
        }
      (g.write("payload.value = newResult;"), g.write("return payload;"));
      let j = g.compile();
      return (I, S) => j(p, I, S);
    },
    t,
    n = ke,
    a = !Re.jitless,
    l = a && Mr.value,
    { catchall: u } = r,
    m;
  e._zod.parse = (p, g) => {
    m ?? (m = o.value);
    let d = p.value;
    if (!n(d))
      return (p.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), p);
    let v = [];
    if (a && l && g?.async === !1 && g.jitless !== !0) (t || (t = i(r.shape)), (p = t(p, g)));
    else {
      p.value = {};
      let S = m.shape;
      for (let w of m.keys) {
        let $ = S[w],
          D = $._zod.run({ value: d[w], issues: [] }, g),
          O = $._zod.optin === "optional" && $._zod.optout === "optional";
        D instanceof Promise
          ? v.push(D.then((R) => (O ? La(R, p, w, d) : Et(R, p, w))))
          : O
            ? La(D, p, w, d)
            : Et(D, p, w);
      }
    }
    if (!u) return v.length ? Promise.all(v).then(() => p) : p;
    let x = [],
      P = m.keySet,
      j = u._zod,
      I = j.def.type;
    for (let S of Object.keys(d)) {
      if (P.has(S)) continue;
      if (I === "never") {
        x.push(S);
        continue;
      }
      let w = j.run({ value: d[S], issues: [] }, g);
      w instanceof Promise ? v.push(w.then(($) => Et($, p, S))) : Et(w, p, S);
    }
    return (
      x.length && p.issues.push({ code: "unrecognized_keys", keys: x, input: d, inst: e }),
      v.length ? Promise.all(v).then(() => p) : p
    );
  };
});
function Ma(e, r, o, i) {
  for (let t of e) if (t.issues.length === 0) return ((r.value = t.value), r);
  return (
    r.issues.push({
      code: "invalid_union",
      input: r.value,
      inst: o,
      errors: e.map((t) => t.issues.map((n) => B(n, i, Z()))),
    }),
    r
  );
}
var Vt = c("$ZodUnion", (e, r) => {
    (k.init(e, r),
      N(e._zod, "values", () => {
        if (r.options.every((o) => o._zod.values))
          return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
      }),
      N(e._zod, "pattern", () => {
        if (r.options.every((o) => o._zod.pattern)) {
          let o = r.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${o.map((i) => Ce(i.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (o, i) => {
        let t = !1,
          n = [];
        for (let a of r.options) {
          let s = a._zod.run({ value: o.value, issues: [] }, i);
          if (s instanceof Promise) (n.push(s), (t = !0));
          else {
            if (s.issues.length === 0) return s;
            n.push(s);
          }
        }
        return t ? Promise.all(n).then((a) => Ma(a, o, e, i)) : Ma(n, o, e, i);
      }));
  }),
  Do = c("$ZodDiscriminatedUnion", (e, r) => {
    Vt.init(e, r);
    let o = e._zod.parse;
    N(e._zod, "propValues", () => {
      let t = {};
      for (let n of r.options) {
        let a = n._zod.propValues;
        if (!a || Object.keys(a).length === 0)
          throw new Error(`Invalid discriminated union option at index "${r.options.indexOf(n)}"`);
        for (let [s, l] of Object.entries(a)) {
          t[s] || (t[s] = new Set());
          for (let u of l) t[s].add(u);
        }
      }
      return t;
    });
    let i = Me(() => {
      let t = r.options,
        n = new Map();
      for (let a of t) {
        let s = a._zod.propValues[r.discriminator];
        if (!s || s.size === 0)
          throw new Error(`Invalid discriminated union option at index "${r.options.indexOf(a)}"`);
        for (let l of s) {
          if (n.has(l)) throw new Error(`Duplicate discriminator value "${String(l)}"`);
          n.set(l, a);
        }
      }
      return n;
    });
    e._zod.parse = (t, n) => {
      let a = t.value;
      if (!ke(a))
        return (t.issues.push({ code: "invalid_type", expected: "object", input: a, inst: e }), t);
      let s = i.value.get(a?.[r.discriminator]);
      return s
        ? s._zod.run(t, n)
        : r.unionFallback
          ? o(t, n)
          : (t.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [r.discriminator],
              inst: e,
            }),
            t);
    };
  }),
  Ao = c("$ZodIntersection", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o,
          n = r.left._zod.run({ value: t, issues: [] }, i),
          a = r.right._zod.run({ value: t, issues: [] }, i);
        return n instanceof Promise || a instanceof Promise
          ? Promise.all([n, a]).then(([l, u]) => Ca(o, l, u))
          : Ca(o, n, a);
      }));
  });
function Wn(e, r) {
  if (e === r) return { valid: !0, data: e };
  if (e instanceof Date && r instanceof Date && +e == +r) return { valid: !0, data: e };
  if (qe(e) && qe(r)) {
    let o = Object.keys(r),
      i = Object.keys(e).filter((n) => o.indexOf(n) !== -1),
      t = { ...e, ...r };
    for (let n of i) {
      let a = Wn(e[n], r[n]);
      if (!a.valid) return { valid: !1, mergeErrorPath: [n, ...a.mergeErrorPath] };
      t[n] = a.data;
    }
    return { valid: !0, data: t };
  }
  if (Array.isArray(e) && Array.isArray(r)) {
    if (e.length !== r.length) return { valid: !1, mergeErrorPath: [] };
    let o = [];
    for (let i = 0; i < e.length; i++) {
      let t = e[i],
        n = r[i],
        a = Wn(t, n);
      if (!a.valid) return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      o.push(a.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Ca(e, r, o) {
  if (
    (r.issues.length && e.issues.push(...r.issues),
    o.issues.length && e.issues.push(...o.issues),
    ge(e))
  )
    return e;
  let i = Wn(r.value, o.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return ((e.value = i.data), e);
}
var ye = c("$ZodTuple", (e, r) => {
  k.init(e, r);
  let o = r.items,
    i = o.length - [...o].reverse().findIndex((t) => t._zod.optin !== "optional");
  e._zod.parse = (t, n) => {
    let a = t.value;
    if (!Array.isArray(a))
      return (t.issues.push({ input: a, inst: e, expected: "tuple", code: "invalid_type" }), t);
    t.value = [];
    let s = [];
    if (!r.rest) {
      let u = a.length > o.length,
        m = a.length < i - 1;
      if (u || m)
        return (
          t.issues.push({
            input: a,
            inst: e,
            origin: "array",
            ...(u
              ? { code: "too_big", maximum: o.length }
              : { code: "too_small", minimum: o.length }),
          }),
          t
        );
    }
    let l = -1;
    for (let u of o) {
      if ((l++, l >= a.length && l >= i)) continue;
      let m = u._zod.run({ value: a[l], issues: [] }, n);
      m instanceof Promise ? s.push(m.then((p) => Ut(p, t, l))) : Ut(m, t, l);
    }
    if (r.rest) {
      let u = a.slice(o.length);
      for (let m of u) {
        l++;
        let p = r.rest._zod.run({ value: m, issues: [] }, n);
        p instanceof Promise ? s.push(p.then((g) => Ut(g, t, l))) : Ut(p, t, l);
      }
    }
    return s.length ? Promise.all(s).then(() => t) : t;
  };
});
function Ut(e, r, o) {
  (e.issues.length && r.issues.push(...C(o, e.issues)), (r.value[o] = e.value));
}
var Po = c("$ZodRecord", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        if (!qe(t))
          return (
            o.issues.push({ expected: "record", code: "invalid_type", input: t, inst: e }),
            o
          );
        let n = [];
        if (r.keyType._zod.values) {
          let a = r.keyType._zod.values;
          o.value = {};
          for (let l of a)
            if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
              let u = r.valueType._zod.run({ value: t[l], issues: [] }, i);
              u instanceof Promise
                ? n.push(
                    u.then((m) => {
                      (m.issues.length && o.issues.push(...C(l, m.issues)), (o.value[l] = m.value));
                    }),
                  )
                : (u.issues.length && o.issues.push(...C(l, u.issues)), (o.value[l] = u.value));
            }
          let s;
          for (let l in t) a.has(l) || ((s = s ?? []), s.push(l));
          s &&
            s.length > 0 &&
            o.issues.push({ code: "unrecognized_keys", input: t, inst: e, keys: s });
        } else {
          o.value = {};
          for (let a of Reflect.ownKeys(t)) {
            if (a === "__proto__") continue;
            let s = r.keyType._zod.run({ value: a, issues: [] }, i);
            if (s instanceof Promise)
              throw new Error("Async schemas not supported in object keys currently");
            if (s.issues.length) {
              (o.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: s.issues.map((u) => B(u, i, Z())),
                input: a,
                path: [a],
                inst: e,
              }),
                (o.value[s.value] = s.value));
              continue;
            }
            let l = r.valueType._zod.run({ value: t[a], issues: [] }, i);
            l instanceof Promise
              ? n.push(
                  l.then((u) => {
                    (u.issues.length && o.issues.push(...C(a, u.issues)),
                      (o.value[s.value] = u.value));
                  }),
                )
              : (l.issues.length && o.issues.push(...C(a, l.issues)), (o.value[s.value] = l.value));
          }
        }
        return n.length ? Promise.all(n).then(() => o) : o;
      }));
  }),
  jo = c("$ZodMap", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        if (!(t instanceof Map))
          return (o.issues.push({ expected: "map", code: "invalid_type", input: t, inst: e }), o);
        let n = [];
        o.value = new Map();
        for (let [a, s] of t) {
          let l = r.keyType._zod.run({ value: a, issues: [] }, i),
            u = r.valueType._zod.run({ value: s, issues: [] }, i);
          l instanceof Promise || u instanceof Promise
            ? n.push(
                Promise.all([l, u]).then(([m, p]) => {
                  qa(m, p, o, a, t, e, i);
                }),
              )
            : qa(l, u, o, a, t, e, i);
        }
        return n.length ? Promise.all(n).then(() => o) : o;
      }));
  });
function qa(e, r, o, i, t, n, a) {
  (e.issues.length &&
    (Fe.has(typeof i)
      ? o.issues.push(...C(i, e.issues))
      : o.issues.push({
          origin: "map",
          code: "invalid_key",
          input: t,
          inst: n,
          issues: e.issues.map((s) => B(s, a, Z())),
        })),
    r.issues.length &&
      (Fe.has(typeof i)
        ? o.issues.push(...C(i, r.issues))
        : o.issues.push({
            origin: "map",
            code: "invalid_element",
            input: t,
            inst: n,
            key: i,
            issues: r.issues.map((s) => B(s, a, Z())),
          })),
    o.value.set(e.value, r.value));
}
var Oo = c("$ZodSet", (e, r) => {
  (k.init(e, r),
    (e._zod.parse = (o, i) => {
      let t = o.value;
      if (!(t instanceof Set))
        return (o.issues.push({ input: t, inst: e, expected: "set", code: "invalid_type" }), o);
      let n = [];
      o.value = new Set();
      for (let a of t) {
        let s = r.valueType._zod.run({ value: a, issues: [] }, i);
        s instanceof Promise ? n.push(s.then((l) => Fa(l, o))) : Fa(s, o);
      }
      return n.length ? Promise.all(n).then(() => o) : o;
    }));
});
function Fa(e, r) {
  (e.issues.length && r.issues.push(...e.issues), r.value.add(e.value));
}
var No = c("$ZodEnum", (e, r) => {
    k.init(e, r);
    let o = Le(r.entries);
    ((e._zod.values = new Set(o)),
      (e._zod.pattern = new RegExp(
        `^(${o
          .filter((i) => Fe.has(typeof i))
          .map((i) => (typeof i == "string" ? oe(i) : i.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (i, t) => {
        let n = i.value;
        return (
          e._zod.values.has(n) ||
            i.issues.push({ code: "invalid_value", values: o, input: n, inst: e }),
          i
        );
      }));
  }),
  To = c("$ZodLiteral", (e, r) => {
    (k.init(e, r),
      (e._zod.values = new Set(r.values)),
      (e._zod.pattern = new RegExp(
        `^(${r.values.map((o) => (typeof o == "string" ? oe(o) : o ? o.toString() : String(o))).join("|")})$`,
      )),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        return (
          e._zod.values.has(t) ||
            o.issues.push({ code: "invalid_value", values: r.values, input: t, inst: e }),
          o
        );
      }));
  }),
  Eo = c("$ZodFile", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        return (
          t instanceof File ||
            o.issues.push({ expected: "file", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  Uo = c("$ZodTransform", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = r.transform(o.value, o);
        if (i.async)
          return (t instanceof Promise ? t : Promise.resolve(t)).then((a) => ((o.value = a), o));
        if (t instanceof Promise) throw new ee();
        return ((o.value = t), o);
      }));
  }),
  Zo = c("$ZodOptional", (e, r) => {
    (k.init(e, r),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      N(e._zod, "values", () =>
        r.innerType._zod.values ? new Set([...r.innerType._zod.values, void 0]) : void 0,
      ),
      N(e._zod, "pattern", () => {
        let o = r.innerType._zod.pattern;
        return o ? new RegExp(`^(${Ce(o.source)})?$`) : void 0;
      }),
      (e._zod.parse = (o, i) => (o.value === void 0 ? o : r.innerType._zod.run(o, i))));
  }),
  Ro = c("$ZodNullable", (e, r) => {
    (k.init(e, r),
      N(e._zod, "optin", () => r.innerType._zod.optin),
      N(e._zod, "optout", () => r.innerType._zod.optout),
      N(e._zod, "pattern", () => {
        let o = r.innerType._zod.pattern;
        return o ? new RegExp(`^(${Ce(o.source)}|null)$`) : void 0;
      }),
      N(e._zod, "values", () =>
        r.innerType._zod.values ? new Set([...r.innerType._zod.values, null]) : void 0,
      ),
      (e._zod.parse = (o, i) => (o.value === null ? o : r.innerType._zod.run(o, i))));
  }),
  Vo = c("$ZodDefault", (e, r) => {
    (k.init(e, r),
      (e._zod.optin = "optional"),
      N(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => {
        if (o.value === void 0) return ((o.value = r.defaultValue), o);
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => Ha(n, r)) : Ha(t, r);
      }));
  });
function Ha(e, r) {
  return (e.value === void 0 && (e.value = r.defaultValue), e);
}
var Lo = c("$ZodPrefault", (e, r) => {
    (k.init(e, r),
      (e._zod.optin = "optional"),
      N(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => (
        o.value === void 0 && (o.value = r.defaultValue),
        r.innerType._zod.run(o, i)
      )));
  }),
  Mo = c("$ZodNonOptional", (e, r) => {
    (k.init(e, r),
      N(e._zod, "values", () => {
        let o = r.innerType._zod.values;
        return o ? new Set([...o].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => Wa(n, e)) : Wa(t, e);
      }));
  });
function Wa(e, r) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: r }),
    e
  );
}
var Co = c("$ZodSuccess", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise
          ? t.then((n) => ((o.value = n.issues.length === 0), o))
          : ((o.value = t.issues.length === 0), o);
      }));
  }),
  qo = c("$ZodCatch", (e, r) => {
    (k.init(e, r),
      N(e._zod, "optin", () => r.innerType._zod.optin),
      N(e._zod, "optout", () => r.innerType._zod.optout),
      N(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise
          ? t.then(
              (n) => (
                (o.value = n.value),
                n.issues.length &&
                  ((o.value = r.catchValue({
                    ...o,
                    error: { issues: n.issues.map((a) => B(a, i, Z())) },
                    input: o.value,
                  })),
                  (o.issues = [])),
                o
              ),
            )
          : ((o.value = t.value),
            t.issues.length &&
              ((o.value = r.catchValue({
                ...o,
                error: { issues: t.issues.map((n) => B(n, i, Z())) },
                input: o.value,
              })),
              (o.issues = [])),
            o);
      }));
  }),
  Fo = c("$ZodNaN", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => (
        (typeof o.value != "number" || !Number.isNaN(o.value)) &&
          o.issues.push({ input: o.value, inst: e, expected: "nan", code: "invalid_type" }),
        o
      )));
  }),
  et = c("$ZodPipe", (e, r) => {
    (k.init(e, r),
      N(e._zod, "values", () => r.in._zod.values),
      N(e._zod, "optin", () => r.in._zod.optin),
      N(e._zod, "optout", () => r.out._zod.optout),
      (e._zod.parse = (o, i) => {
        let t = r.in._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => Ba(n, r, i)) : Ba(t, r, i);
      }));
  });
function Ba(e, r, o) {
  return ge(e) ? e : r.out._zod.run({ value: e.value, issues: e.issues }, o);
}
var Ho = c("$ZodReadonly", (e, r) => {
  (k.init(e, r),
    N(e._zod, "propValues", () => r.innerType._zod.propValues),
    N(e._zod, "optin", () => r.innerType._zod.optin),
    N(e._zod, "optout", () => r.innerType._zod.optout),
    (e._zod.parse = (o, i) => {
      let t = r.innerType._zod.run(o, i);
      return t instanceof Promise ? t.then(Ka) : Ka(t);
    }));
});
function Ka(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var Wo = c("$ZodTemplateLiteral", (e, r) => {
    k.init(e, r);
    let o = [];
    for (let i of r.parts)
      if (i instanceof k) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let t = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
        if (!t) throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let n = t.startsWith("^") ? 1 : 0,
          a = t.endsWith("$") ? t.length - 1 : t.length;
        o.push(t.slice(n, a));
      } else if (i === null || Cr.has(typeof i)) o.push(oe(`${i}`));
      else throw new Error(`Invalid template literal part: ${i}`);
    ((e._zod.pattern = new RegExp(`^${o.join("")}$`)),
      (e._zod.parse = (i, t) =>
        typeof i.value != "string"
          ? (i.issues.push({
              input: i.value,
              inst: e,
              expected: "template_literal",
              code: "invalid_type",
            }),
            i)
          : ((e._zod.pattern.lastIndex = 0),
            e._zod.pattern.test(i.value) ||
              i.issues.push({
                input: i.value,
                inst: e,
                code: "invalid_format",
                format: "template_literal",
                pattern: e._zod.pattern.source,
              }),
            i)));
  }),
  Bo = c("$ZodPromise", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) =>
        Promise.resolve(o.value).then((t) => r.innerType._zod.run({ value: t, issues: [] }, i))));
  }),
  Ko = c("$ZodLazy", (e, r) => {
    (k.init(e, r),
      N(e._zod, "innerType", () => r.getter()),
      N(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      N(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      N(e._zod, "optin", () => e._zod.innerType._zod.optin),
      N(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (o, i) => e._zod.innerType._zod.run(o, i)));
  }),
  Yo = c("$ZodCustom", (e, r) => {
    (U.init(e, r),
      k.init(e, r),
      (e._zod.parse = (o, i) => o),
      (e._zod.check = (o) => {
        let i = o.value,
          t = r.fn(i);
        if (t instanceof Promise) return t.then((n) => Ya(n, o, i, e));
        Ya(t, o, i, e);
      }));
  });
function Ya(e, r, o, i) {
  if (!e) {
    let t = {
      code: "custom",
      input: o,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (t.params = i._zod.def.params), r.issues.push(Wr(t)));
  }
}
var tt = {};
pe(tt, {
  ar: () => Qa,
  az: () => es,
  be: () => rs,
  ca: () => ns,
  cs: () => os,
  de: () => is,
  en: () => Lt,
  es: () => as,
  fa: () => ss,
  fi: () => us,
  fr: () => ls,
  frCA: () => cs,
  he: () => ds,
  hu: () => _s,
  id: () => ms,
  it: () => ps,
  ja: () => fs,
  kh: () => gs,
  ko: () => hs,
  mk: () => vs,
  ms: () => ys,
  nl: () => bs,
  no: () => ws,
  ota: () => xs,
  pl: () => $s,
  pt: () => ks,
  ru: () => Ss,
  sl: () => Is,
  sv: () => Ds,
  ta: () => As,
  th: () => Ps,
  tr: () => js,
  ua: () => Os,
  ur: () => Ns,
  vi: () => Ts,
  zhCN: () => Es,
  zhTW: () => Us,
});
var wl = () => {
  let e = {
    string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0645\u062F\u062E\u0644",
      email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      url: "\u0631\u0627\u0628\u0637",
      emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
      ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
      cidrv4:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
      cidrv6:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
      base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
      base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
      json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
      e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
      jwt: "JWT",
      template_literal: "\u0645\u062F\u062E\u0644",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${t.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${b(t.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${n} ${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${n} ${t.minimum.toString()} ${a.unit}`
          : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${t.prefix}"`
          : n.format === "ends_with"
            ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${n.suffix}"`
            : n.format === "includes"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${n.includes}"`
              : n.format === "regex"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${n.pattern}`
                : `${i[n.format] ?? t.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${t.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${_(t.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function Qa() {
  return { localeError: wl() };
}
var xl = () => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${t.expected}, daxil olan ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${b(t.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${n}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${n}${t.minimum.toString()} ${a.unit}`
          : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Yanl\u0131\u015F m\u0259tn: "${n.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
          : n.format === "ends_with"
            ? `Yanl\u0131\u015F m\u0259tn: "${n.suffix}" il\u0259 bitm\u0259lidir`
            : n.format === "includes"
              ? `Yanl\u0131\u015F m\u0259tn: "${n.includes}" daxil olmal\u0131d\u0131r`
              : n.format === "regex"
                ? `Yanl\u0131\u015F m\u0259tn: ${n.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                : `Yanl\u0131\u015F ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${t.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${t.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function es() {
  return { localeError: xl() };
}
function ts(e, r, o, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? r : n >= 2 && n <= 4 ? o : i;
}
var $l = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u043B\u0456\u043A";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0456\u045E";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0443\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0430\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0447\u0430\u0441",
      duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
      cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
      base64url:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
      json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
      e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0443\u0432\u043E\u0434",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${t.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${b(t.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = ts(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.maximum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = ts(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.minimum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n.pattern}`
                : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${t.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function rs() {
  return { localeError: $l() };
}
var kl = () => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entrada",
      email: "adre\xE7a electr\xF2nica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adre\xE7a IPv4",
      ipv6: "adre\xE7a IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Tipus inv\xE0lid: s'esperava ${t.expected}, s'ha rebut ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${b(t.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${_(t.values, " o ")}`;
      case "too_big": {
        let n = t.inclusive ? "com a m\xE0xim" : "menys de",
          a = r(t.origin);
        return a
          ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingu\xE9s ${n} ${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          a = r(t.origin);
        return a
          ? `Massa petit: s'esperava que ${t.origin} contingu\xE9s ${n} ${t.minimum.toString()} ${a.unit}`
          : `Massa petit: s'esperava que ${t.origin} fos ${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Format inv\xE0lid: ha de comen\xE7ar amb "${n.prefix}"`
          : n.format === "ends_with"
            ? `Format inv\xE0lid: ha d'acabar amb "${n.suffix}"`
            : n.format === "includes"
              ? `Format inv\xE0lid: ha d'incloure "${n.includes}"`
              : n.format === "regex"
                ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${n.pattern}`
                : `Format inv\xE0lid per a ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${t.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function ns() {
  return { localeError: kl() };
}
var zl = () => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u010D\xEDslo";
        case "string":
          return "\u0159et\u011Bzec";
        case "boolean":
          return "boolean";
        case "bigint":
          return "bigint";
        case "function":
          return "funkce";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
        case "object": {
          if (Array.isArray(t)) return "pole";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "regul\xE1rn\xED v\xFDraz",
      email: "e-mailov\xE1 adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a \u010Das ve form\xE1tu ISO",
      date: "datum ve form\xE1tu ISO",
      time: "\u010Das ve form\xE1tu ISO",
      duration: "doba trv\xE1n\xED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
      base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
      e164: "\u010D\xEDslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${t.expected}, obdr\u017Eeno ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${b(t.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${n}${t.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${n}${t.minimum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${n.prefix}"`
          : n.format === "ends_with"
            ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${n.suffix}"`
            : n.format === "includes"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${n.includes}"`
              : n.format === "regex"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${n.pattern}`
                : `Neplatn\xFD form\xE1t ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${t.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${t.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${t.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function os() {
  return { localeError: zl() };
}
var Sl = () => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(t)) return "Array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ung\xFCltige Eingabe: erwartet ${t.expected}, erhalten ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${b(t.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${n}${t.maximum.toString()} ${a.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${n}${t.maximum.toString()} ist`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Zu klein: erwartet, dass ${t.origin} ${n}${t.minimum.toString()} ${a.unit} hat`
          : `Zu klein: erwartet, dass ${t.origin} ${n}${t.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ung\xFCltiger String: muss mit "${n.prefix}" beginnen`
          : n.format === "ends_with"
            ? `Ung\xFCltiger String: muss mit "${n.suffix}" enden`
            : n.format === "includes"
              ? `Ung\xFCltiger String: muss "${n.includes}" enthalten`
              : n.format === "regex"
                ? `Ung\xFCltiger String: muss dem Muster ${n.pattern} entsprechen`
                : `Ung\xFCltig: ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${t.divisor} sein`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${t.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${t.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function is() {
  return { localeError: Sl() };
}
var Il = (e) => {
    let r = typeof e;
    switch (r) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return r;
  },
  Dl = () => {
    let e = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function r(i) {
      return e[i] ?? null;
    }
    let o = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Invalid input: expected ${i.expected}, received ${Il(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${b(i.values[0])}`
            : `Invalid option: expected one of ${_(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            n = r(i.origin);
          return n
            ? `Too big: expected ${i.origin ?? "value"} to have ${t}${i.maximum.toString()} ${n.unit ?? "elements"}`
            : `Too big: expected ${i.origin ?? "value"} to be ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            n = r(i.origin);
          return n
            ? `Too small: expected ${i.origin} to have ${t}${i.minimum.toString()} ${n.unit}`
            : `Too small: expected ${i.origin} to be ${t}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let t = i;
          return t.format === "starts_with"
            ? `Invalid string: must start with "${t.prefix}"`
            : t.format === "ends_with"
              ? `Invalid string: must end with "${t.suffix}"`
              : t.format === "includes"
                ? `Invalid string: must include "${t.includes}"`
                : t.format === "regex"
                  ? `Invalid string: must match pattern ${t.pattern}`
                  : `Invalid ${o[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${i.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${_(i.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${i.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${i.origin}`;
        default:
          return "Invalid input";
      }
    };
  };
function Lt() {
  return { localeError: Dl() };
}
var Al = () => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(t)) return "arreglo";
          if (t === null) return "nulo";
          if (Object.getPrototypeOf(t) !== Object.prototype) return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entrada",
      email: "direcci\xF3n de correo electr\xF3nico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duraci\xF3n ISO",
      ipv4: "direcci\xF3n IPv4",
      ipv6: "direcci\xF3n IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entrada inv\xE1lida: se esperaba ${t.expected}, recibido ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${b(t.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Demasiado grande: se esperaba que ${t.origin ?? "valor"} tuviera ${n}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${t.origin ?? "valor"} fuera ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Demasiado peque\xF1o: se esperaba que ${t.origin} tuviera ${n}${t.minimum.toString()} ${a.unit}`
          : `Demasiado peque\xF1o: se esperaba que ${t.origin} fuera ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Cadena inv\xE1lida: debe comenzar con "${n.prefix}"`
          : n.format === "ends_with"
            ? `Cadena inv\xE1lida: debe terminar en "${n.suffix}"`
            : n.format === "includes"
              ? `Cadena inv\xE1lida: debe incluir "${n.includes}"`
              : n.format === "regex"
                ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${n.pattern}`
                : `Inv\xE1lido ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${t.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function as() {
  return { localeError: Al() };
}
var Pl = () => {
  let e = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0639\u062F\u062F";
        case "object": {
          if (Array.isArray(t)) return "\u0622\u0631\u0627\u06CC\u0647";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0648\u0631\u0648\u062F\u06CC",
      email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
      url: "URL",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
      time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      ipv4: "IPv4 \u0622\u062F\u0631\u0633",
      ipv6: "IPv6 \u0622\u062F\u0631\u0633",
      cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
      cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
      base64: "base64-encoded \u0631\u0634\u062A\u0647",
      base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
      json_string: "JSON \u0631\u0634\u062A\u0647",
      e164: "E.164 \u0639\u062F\u062F",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u06CC",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${t.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${o(t.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${b(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${_(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${n}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${n}${t.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${n}${t.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${n}${t.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${n.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
          : n.format === "ends_with"
            ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${n.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
            : n.format === "includes"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${n.includes}" \u0628\u0627\u0634\u062F`
              : n.format === "regex"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${n.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                : `${i[n.format] ?? t.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${t.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${t.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${t.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function ss() {
  return { localeError: Pl() };
}
var jl = () => {
  let e = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "s\xE4\xE4nn\xF6llinen lauseke",
      email: "s\xE4hk\xF6postiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${t.expected}, oli ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${b(t.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${n}${t.maximum.toString()} ${a.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${n}${t.minimum.toString()} ${a.unit}`.trim()
          : `Liian pieni: arvon t\xE4ytyy olla ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${n.prefix}"`
          : n.format === "ends_with"
            ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${n.suffix}"`
            : n.format === "includes"
              ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${n.includes}"`
              : n.format === "regex"
                ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${n.pattern}`
                : `Virheellinen ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${t.divisor} monikerta`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function us() {
  return { localeError: jl() };
}
var Ol = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(t)) return "tableau";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : ${t.expected} attendu, ${o(t.input)} re\xE7u`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : ${b(t.values[0])} attendu`
          : `Option invalide : une valeur parmi ${_(t.values, "|")} attendue`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Trop grand : ${t.origin ?? "valeur"} doit ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${t.origin ?? "valeur"} doit \xEAtre ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Trop petit : ${t.origin} doit ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `Trop petit : ${t.origin} doit \xEAtre ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${n.prefix}"`
          : n.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${n.suffix}"`
            : n.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${n.includes}"`
              : n.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${n.pattern}`
                : `${i[n.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function ls() {
  return { localeError: Ol() };
}
var Nl = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : attendu ${t.expected}, re\xE7u ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : attendu ${b(t.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "\u2264" : "<",
          a = r(t.origin);
        return a
          ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${n}${t.maximum.toString()} ${a.unit}`
          : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? "\u2265" : ">",
          a = r(t.origin);
        return a
          ? `Trop petit : attendu que ${t.origin} ait ${n}${t.minimum.toString()} ${a.unit}`
          : `Trop petit : attendu que ${t.origin} soit ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${n.prefix}"`
          : n.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${n.suffix}"`
            : n.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${n.includes}"`
              : n.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au motif ${n.pattern}`
                : `${i[n.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function cs() {
  return { localeError: Nl() };
}
var Tl = () => {
  let e = {
    string: {
      unit: "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", verb: "\u05DC\u05DB\u05DC\u05D5\u05DC" },
    array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", verb: "\u05DC\u05DB\u05DC\u05D5\u05DC" },
    set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", verb: "\u05DC\u05DB\u05DC\u05D5\u05DC" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u05E7\u05DC\u05D8",
      email: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
      url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
      emoji: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
      date: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
      time: "\u05D6\u05DE\u05DF ISO",
      duration: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
      ipv4: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
      ipv6: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
      cidrv4: "\u05D8\u05D5\u05D5\u05D7 IPv4",
      cidrv6: "\u05D8\u05D5\u05D5\u05D7 IPv6",
      base64: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
      base64url:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
      json_string: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
      e164: "\u05DE\u05E1\u05E4\u05E8 E.164",
      jwt: "JWT",
      template_literal: "\u05E7\u05DC\u05D8",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${t.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${b(t.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${t.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.minimum.toString()} ${a.unit}`
          : `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${t.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1"${n.prefix}"`
          : n.format === "ends_with"
            ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${n.suffix}"`
            : n.format === "includes"
              ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${n.includes}"`
              : n.format === "regex"
                ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${n.pattern}`
                : `${i[n.format] ?? t.format} \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${t.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${t.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${t.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u05DE\u05E4\u05EA\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t.origin}`;
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t.origin}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function ds() {
  return { localeError: Tl() };
}
var El = () => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "sz\xE1m";
        case "object": {
          if (Array.isArray(t)) return "t\xF6mb";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "bemenet",
      email: "email c\xEDm",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO id\u0151b\xE9lyeg",
      date: "ISO d\xE1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\xEDm",
      ipv6: "IPv6 c\xEDm",
      cidrv4: "IPv4 tartom\xE1ny",
      cidrv6: "IPv6 tartom\xE1ny",
      base64: "base64-k\xF3dolt string",
      base64url: "base64url-k\xF3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\xE1m",
      jwt: "JWT",
      template_literal: "bemenet",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${t.expected}, a kapott \xE9rt\xE9k ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${b(t.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `T\xFAl nagy: ${t.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${n}${t.maximum.toString()} ${a.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${t.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} m\xE9rete t\xFAl kicsi ${n}${t.minimum.toString()} ${a.unit}`
          : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} t\xFAl kicsi ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\xC9rv\xE9nytelen string: "${n.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
          : n.format === "ends_with"
            ? `\xC9rv\xE9nytelen string: "${n.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
            : n.format === "includes"
              ? `\xC9rv\xE9nytelen string: "${n.includes}" \xE9rt\xE9ket kell tartalmaznia`
              : n.format === "regex"
                ? `\xC9rv\xE9nytelen string: ${n.pattern} mint\xE1nak kell megfelelnie`
                : `\xC9rv\xE9nytelen ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${t.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${t.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${t.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function _s() {
  return { localeError: El() };
}
var Ul = () => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${t.expected}, diterima ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak valid: diharapkan ${b(t.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${n}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Terlalu kecil: diharapkan ${t.origin} memiliki ${n}${t.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: diharapkan ${t.origin} menjadi ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `String tidak valid: harus dimulai dengan "${n.prefix}"`
          : n.format === "ends_with"
            ? `String tidak valid: harus berakhir dengan "${n.suffix}"`
            : n.format === "includes"
              ? `String tidak valid: harus menyertakan "${n.includes}"`
              : n.format === "regex"
                ? `String tidak valid: harus sesuai pola ${n.pattern}`
                : `${i[n.format] ?? t.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${t.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${t.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function ms() {
  return { localeError: Ul() };
}
var Zl = () => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(t)) return "vettore";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input non valido: atteso ${t.expected}, ricevuto ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input non valido: atteso ${b(t.values[0])}`
          : `Opzione non valida: atteso uno tra ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${n}${t.maximum.toString()} ${a.unit ?? "elementi"}`
          : `Troppo grande: ${t.origin ?? "valore"} deve essere ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Troppo piccolo: ${t.origin} deve avere ${n}${t.minimum.toString()} ${a.unit}`
          : `Troppo piccolo: ${t.origin} deve essere ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Stringa non valida: deve iniziare con "${n.prefix}"`
          : n.format === "ends_with"
            ? `Stringa non valida: deve terminare con "${n.suffix}"`
            : n.format === "includes"
              ? `Stringa non valida: deve includere "${n.includes}"`
              : n.format === "regex"
                ? `Stringa non valida: deve corrispondere al pattern ${n.pattern}`
                : `Invalid ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${t.divisor}`;
      case "unrecognized_keys":
        return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${t.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${t.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function ps() {
  return { localeError: Zl() };
}
var Rl = () => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u6570\u5024";
        case "object": {
          if (Array.isArray(t)) return "\u914D\u5217";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u5165\u529B\u5024",
      email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      url: "URL",
      emoji: "\u7D75\u6587\u5B57",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u6642",
      date: "ISO\u65E5\u4ED8",
      time: "ISO\u6642\u523B",
      duration: "ISO\u671F\u9593",
      ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
      ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
      cidrv4: "IPv4\u7BC4\u56F2",
      cidrv6: "IPv6\u7BC4\u56F2",
      base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      json_string: "JSON\u6587\u5B57\u5217",
      e164: "E.164\u756A\u53F7",
      jwt: "JWT",
      template_literal: "\u5165\u529B\u5024",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u7121\u52B9\u306A\u5165\u529B: ${t.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${o(t.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${b(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${_(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${a.unit}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : n.format === "ends_with"
            ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
            : n.format === "includes"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : n.format === "regex"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${n.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : `\u7121\u52B9\u306A${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${t.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${_(t.keys, "\u3001")}`;
      case "invalid_key":
        return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function fs() {
  return { localeError: Rl() };
}
var Vl = () => {
  let e = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t)
            ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)"
            : "\u179B\u17C1\u1781";
        case "object": {
          if (Array.isArray(t)) return "\u17A2\u17B6\u179A\u17C1 (Array)";
          if (t === null)
            return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
      email:
        "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
      url: "URL",
      emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
      date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
      time: "\u1798\u17C9\u17C4\u1784 ISO",
      duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
      ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      base64:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
      base64url:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
      json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
      e164: "\u179B\u17C1\u1781 E.164",
      jwt: "JWT",
      template_literal:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${b(t.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${n} ${t.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${n} ${t.minimum.toString()} ${a.unit}`
          : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${n.suffix}"`
            : n.format === "includes"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${n.includes}"`
              : n.format === "regex"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${n.pattern}`
                : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${t.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function gs() {
  return { localeError: Vl() };
}
var Ll = () => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\uC785\uB825",
      email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
      url: "URL",
      emoji: "\uC774\uBAA8\uC9C0",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
      date: "ISO \uB0A0\uC9DC",
      time: "ISO \uC2DC\uAC04",
      duration: "ISO \uAE30\uAC04",
      ipv4: "IPv4 \uC8FC\uC18C",
      ipv6: "IPv6 \uC8FC\uC18C",
      cidrv4: "IPv4 \uBC94\uC704",
      cidrv6: "IPv6 \uBC94\uC704",
      base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      json_string: "JSON \uBB38\uC790\uC5F4",
      e164: "E.164 \uBC88\uD638",
      jwt: "JWT",
      template_literal: "\uC785\uB825",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${t.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${o(t.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return t.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${b(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${_(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let n = t.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          a =
            n === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = r(t.origin),
          l = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()}${l} ${n}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()} ${n}${a}`;
      }
      case "too_small": {
        let n = t.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          a =
            n === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = r(t.origin),
          l = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()}${l} ${n}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()} ${n}${a}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
          : n.format === "ends_with"
            ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
            : n.format === "includes"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
              : n.format === "regex"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${n.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                : `\uC798\uBABB\uB41C ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${t.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${t.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${t.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function hs() {
  return { localeError: Ll() };
}
var Ml = () => {
  let e = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0431\u0440\u043E\u0458";
        case "object": {
          if (Array.isArray(t)) return "\u043D\u0438\u0437\u0430";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0432\u043D\u0435\u0441",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u045F\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0443\u043C",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
      cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
      cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
      base64:
        "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      base64url:
        "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      json_string: "JSON \u043D\u0438\u0437\u0430",
      e164: "E.164 \u0431\u0440\u043E\u0458",
      jwt: "JWT",
      template_literal: "\u0432\u043D\u0435\u0441",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Invalid input: expected ${b(t.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${n}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0438\u043C\u0430 ${n}${t.minimum.toString()} ${a.unit}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${n.pattern}`
                : `Invalid ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${t.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${t.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function vs() {
  return { localeError: Ml() };
}
var Cl = () => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${t.expected}, diterima ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak sah: dijangka ${b(t.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Terlalu kecil: dijangka ${t.origin} ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: dijangka ${t.origin} adalah ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `String tidak sah: mesti bermula dengan "${n.prefix}"`
          : n.format === "ends_with"
            ? `String tidak sah: mesti berakhir dengan "${n.suffix}"`
            : n.format === "includes"
              ? `String tidak sah: mesti mengandungi "${n.includes}"`
              : n.format === "regex"
                ? `String tidak sah: mesti sepadan dengan corak ${n.pattern}`
                : `${i[n.format] ?? t.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${t.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${t.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function ys() {
  return { localeError: Cl() };
}
var ql = () => {
  let e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${t.expected}, ontving ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ongeldige invoer: verwacht ${b(t.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Te lang: verwacht dat ${t.origin ?? "waarde"} ${n}${t.maximum.toString()} ${a.unit ?? "elementen"} bevat`
          : `Te lang: verwacht dat ${t.origin ?? "waarde"} ${n}${t.maximum.toString()} is`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Te kort: verwacht dat ${t.origin} ${n}${t.minimum.toString()} ${a.unit} bevat`
          : `Te kort: verwacht dat ${t.origin} ${n}${t.minimum.toString()} is`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ongeldige tekst: moet met "${n.prefix}" beginnen`
          : n.format === "ends_with"
            ? `Ongeldige tekst: moet op "${n.suffix}" eindigen`
            : n.format === "includes"
              ? `Ongeldige tekst: moet "${n.includes}" bevatten`
              : n.format === "regex"
                ? `Ongeldige tekst: moet overeenkomen met patroon ${n.pattern}`
                : `Ongeldig: ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${t.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${t.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function bs() {
  return { localeError: ql() };
}
var Fl = () => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(t)) return "liste";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${t.expected}, fikk ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ugyldig verdi: forventet ${b(t.values[0])}`
          : `Ugyldig valg: forventet en av ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${n}${t.maximum.toString()} ${a.unit ?? "elementer"}`
          : `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `For lite(n): forventet ${t.origin} til \xE5 ha ${n}${t.minimum.toString()} ${a.unit}`
          : `For lite(n): forventet ${t.origin} til \xE5 ha ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ugyldig streng: m\xE5 starte med "${n.prefix}"`
          : n.format === "ends_with"
            ? `Ugyldig streng: m\xE5 ende med "${n.suffix}"`
            : n.format === "includes"
              ? `Ugyldig streng: m\xE5 inneholde "${n.includes}"`
              : n.format === "regex"
                ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${n.pattern}`
                : `Ugyldig ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${t.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${t.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function ws() {
  return { localeError: Fl() };
}
var Hl = () => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(t)) return "saf";
          if (t === null) return "gayb";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "giren",
      email: "epostag\xE2h",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO heng\xE2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\xFCddeti",
      ipv4: "IPv4 ni\u015F\xE2n\u0131",
      ipv6: "IPv6 ni\u015F\xE2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `F\xE2sit giren: umulan ${t.expected}, al\u0131nan ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `F\xE2sit giren: umulan ${b(t.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${n}${t.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${n}${t.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${n}${t.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.`
          : `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${n}${t.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `F\xE2sit metin: "${n.prefix}" ile ba\u015Flamal\u0131.`
          : n.format === "ends_with"
            ? `F\xE2sit metin: "${n.suffix}" ile bitmeli.`
            : n.format === "includes"
              ? `F\xE2sit metin: "${n.includes}" ihtiv\xE2 etmeli.`
              : n.format === "regex"
                ? `F\xE2sit metin: ${n.pattern} nak\u015F\u0131na uymal\u0131.`
                : `F\xE2sit ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${t.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${t.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function xs() {
  return { localeError: Hl() };
}
var Wl = () => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(t)) return "tablica";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "wyra\u017Cenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
      base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
      json_string: "ci\u0105g znak\xF3w w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wej\u015Bcie",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${t.expected}, otrzymano ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${b(t.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${n}${t.maximum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${n}${t.minimum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${n.prefix}"`
          : n.format === "ends_with"
            ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${n.suffix}"`
            : n.format === "includes"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${n.includes}"`
              : n.format === "regex"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${n.pattern}`
                : `Nieprawid\u0142ow(y/a/e) ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${t.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${t.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${t.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function $s() {
  return { localeError: Wl() };
}
var Bl = () => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "nulo";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "padr\xE3o",
      email: "endere\xE7o de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "dura\xE7\xE3o ISO",
      ipv4: "endere\xE7o IPv4",
      ipv6: "endere\xE7o IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Tipo inv\xE1lido: esperado ${t.expected}, recebido ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${b(t.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${n}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Muito pequeno: esperado que ${t.origin} tivesse ${n}${t.minimum.toString()} ${a.unit}`
          : `Muito pequeno: esperado que ${t.origin} fosse ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Texto inv\xE1lido: deve come\xE7ar com "${n.prefix}"`
          : n.format === "ends_with"
            ? `Texto inv\xE1lido: deve terminar com "${n.suffix}"`
            : n.format === "includes"
              ? `Texto inv\xE1lido: deve incluir "${n.includes}"`
              : n.format === "regex"
                ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${n.pattern}`
                : `${i[n.format] ?? t.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${t.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function ks() {
  return { localeError: Bl() };
}
function zs(e, r, o, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? r : n >= 2 && n <= 4 ? o : i;
}
var Kl = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0441\u0438\u0432";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0432\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u044F",
      duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
      base64url:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
      json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0432\u043E\u0434",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${b(t.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = zs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.maximum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = zs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.minimum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n.pattern}`
                : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${t.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function Ss() {
  return { localeError: Kl() };
}
var Yl = () => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0161tevilo";
        case "object": {
          if (Array.isArray(t)) return "tabela";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Neveljaven vnos: pri\u010Dakovano ${t.expected}, prejeto ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${b(t.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} imelo ${n}${t.maximum.toString()} ${a.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Premajhno: pri\u010Dakovano, da bo ${t.origin} imelo ${n}${t.minimum.toString()} ${a.unit}`
          : `Premajhno: pri\u010Dakovano, da bo ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Neveljaven niz: mora se za\u010Deti z "${n.prefix}"`
          : n.format === "ends_with"
            ? `Neveljaven niz: mora se kon\u010Dati z "${n.suffix}"`
            : n.format === "includes"
              ? `Neveljaven niz: mora vsebovati "${n.includes}"`
              : n.format === "regex"
                ? `Neveljaven niz: mora ustrezati vzorcu ${n.pattern}`
                : `Neveljaven ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${t.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${t.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${t.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function Is() {
  return { localeError: Yl() };
}
var Gl = () => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(t)) return "lista";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "regulj\xE4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\xE4ng",
      base64url: "base64url-kodad str\xE4ng",
      json_string: "JSON-str\xE4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${t.expected}, fick ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${b(t.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.minimum.toString()} ${a.unit}`
          : `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${n.prefix}"`
          : n.format === "ends_with"
            ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${n.suffix}"`
            : n.format === "includes"
              ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${n.includes}"`
              : n.format === "regex"
                ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${n.pattern}"`
                : `Ogiltig(t) ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${t.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${t.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function Ds() {
  return { localeError: Gl() };
}
var Jl = () => {
  let e = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t)
            ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1"
            : "\u0B8E\u0BA3\u0BCD";
        case "object": {
          if (Array.isArray(t)) return "\u0B85\u0BA3\u0BBF";
          if (t === null) return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
      email:
        "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
      time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
      ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
      e164: "E.164 \u0B8E\u0BA3\u0BCD",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${b(t.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${n}${t.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${n}${t.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${n}${t.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${n}${t.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : n.format === "ends_with"
            ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
            : n.format === "includes"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : n.format === "regex"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${n.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${t.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function As() {
  return { localeError: Jl() };
}
var Xl = () => {
  let e = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t)
            ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)"
            : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
        case "object": {
          if (Array.isArray(t)) return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
          if (t === null) return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
      email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
      url: "URL",
      emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
      time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
      ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
      cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
      cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
      base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
      base64url:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
      json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
      e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
      jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
      template_literal:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${t.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${b(t.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          a = r(t.origin);
        return a
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          a = r(t.origin);
        return a
          ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.minimum.toString()} ${a.unit}`
          : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${n.suffix}"`
            : n.format === "includes"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${n.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
              : n.format === "regex"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${n.pattern}`
                : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${t.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function Ps() {
  return { localeError: Xl() };
}
var Ql = (e) => {
    let r = typeof e;
    switch (r) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return r;
  },
  ec = () => {
    let e = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    };
    function r(i) {
      return e[i] ?? null;
    }
    let o = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO s\xFCre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aral\u0131\u011F\u0131",
      cidrv6: "IPv6 aral\u0131\u011F\u0131",
      base64: "base64 ile \u015Fifrelenmi\u015F metin",
      base64url: "base64url ile \u015Fifrelenmi\u015F metin",
      json_string: "JSON dizesi",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "\u015Eablon dizesi",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${Ql(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${b(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${_(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            n = r(i.origin);
          return n
            ? `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()} ${n.unit ?? "\xF6\u011Fe"}`
            : `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            n = r(i.origin);
          return n
            ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${t}${i.minimum.toString()} ${n.unit}`
            : `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${t}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let t = i;
          return t.format === "starts_with"
            ? `Ge\xE7ersiz metin: "${t.prefix}" ile ba\u015Flamal\u0131`
            : t.format === "ends_with"
              ? `Ge\xE7ersiz metin: "${t.suffix}" ile bitmeli`
              : t.format === "includes"
                ? `Ge\xE7ersiz metin: "${t.includes}" i\xE7ermeli`
                : t.format === "regex"
                  ? `Ge\xE7ersiz metin: ${t.pattern} desenine uymal\u0131`
                  : `Ge\xE7ersiz ${o[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${i.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${_(i.keys, ", ")}`;
        case "invalid_key":
          return `${i.origin} i\xE7inde ge\xE7ersiz anahtar`;
        case "invalid_union":
          return "Ge\xE7ersiz de\u011Fer";
        case "invalid_element":
          return `${i.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
        default:
          return "Ge\xE7ersiz de\u011Fer";
      }
    };
  };
function js() {
  return { localeError: ec() };
}
var tc = () => {
  let e = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0438\u0432";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
      date: "\u0434\u0430\u0442\u0430 ISO",
      time: "\u0447\u0430\u0441 ISO",
      duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
      ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
      ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
      cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
      cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
      base64:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
      base64url:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
      json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${t.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${b(t.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} \u0431\u0443\u0434\u0435 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n.pattern}`
                : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${t.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function Os() {
  return { localeError: tc() };
}
var rc = () => {
  let e = {
    string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
    file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
    array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
    set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0646\u0645\u0628\u0631";
        case "object": {
          if (Array.isArray(t)) return "\u0622\u0631\u06D2";
          if (t === null) return "\u0646\u0644";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0627\u0646 \u067E\u0679",
      email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
      uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
      nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
      ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
      xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
      ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      datetime:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
      date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
      time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
      duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
      ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
      cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
      base64:
        "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      base64url:
        "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      json_string:
        "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
      e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
      jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
      template_literal: "\u0627\u0646 \u067E\u0679",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${t.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${o(t.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${b(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${_(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${n}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${n}${t.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u06D2 ${n}${t.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u0627 ${n}${t.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
          : n.format === "ends_with"
            ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
            : n.format === "includes"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : n.format === "regex"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${n.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : `\u063A\u0644\u0637 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${t.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${_(t.keys, "\u060C ")}`;
      case "invalid_key":
        return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function Ns() {
  return { localeError: rc() };
}
var nc = () => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "s\u1ED1";
        case "object": {
          if (Array.isArray(t)) return "m\u1EA3ng";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0111\u1EA7u v\xE0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ng\xE0y gi\u1EDD ISO",
      date: "ng\xE0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\xE3 h\xF3a base64",
      base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\xE0o",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${t.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${b(t.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${n.prefix}"`
          : n.format === "ends_with"
            ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${n.suffix}"`
            : n.format === "includes"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${n.includes}"`
              : n.format === "regex"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${n.pattern}`
                : `${i[n.format] ?? t.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${t.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function Ts() {
  return { localeError: nc() };
}
var oc = () => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
        case "object": {
          if (Array.isArray(t)) return "\u6570\u7EC4";
          if (t === null) return "\u7A7A\u503C(null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u8F93\u5165",
      email: "\u7535\u5B50\u90AE\u4EF6",
      url: "URL",
      emoji: "\u8868\u60C5\u7B26\u53F7",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u671F\u65F6\u95F4",
      date: "ISO\u65E5\u671F",
      time: "ISO\u65F6\u95F4",
      duration: "ISO\u65F6\u957F",
      ipv4: "IPv4\u5730\u5740",
      ipv6: "IPv6\u5730\u5740",
      cidrv4: "IPv4\u7F51\u6BB5",
      cidrv6: "IPv6\u7F51\u6BB5",
      base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
      base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
      json_string: "JSON\u5B57\u7B26\u4E32",
      e164: "E.164\u53F7\u7801",
      jwt: "JWT",
      template_literal: "\u8F93\u5165",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${t.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${b(t.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${n}${t.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${n}${t.minimum.toString()} ${a.unit}`
          : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${n.prefix}" \u5F00\u5934`
          : n.format === "ends_with"
            ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${n.suffix}" \u7ED3\u5C3E`
            : n.format === "includes"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${n.includes}"`
              : n.format === "regex"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${n.pattern}`
                : `\u65E0\u6548${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${t.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${t.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function Es() {
  return { localeError: oc() };
}
var ic = () => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u8F38\u5165",
      email: "\u90F5\u4EF6\u5730\u5740",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u65E5\u671F\u6642\u9593",
      date: "ISO \u65E5\u671F",
      time: "ISO \u6642\u9593",
      duration: "ISO \u671F\u9593",
      ipv4: "IPv4 \u4F4D\u5740",
      ipv6: "IPv6 \u4F4D\u5740",
      cidrv4: "IPv4 \u7BC4\u570D",
      cidrv6: "IPv6 \u7BC4\u570D",
      base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
      base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
      json_string: "JSON \u5B57\u4E32",
      e164: "E.164 \u6578\u503C",
      jwt: "JWT",
      template_literal: "\u8F38\u5165",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${t.expected}\uFF0C\u4F46\u6536\u5230 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${b(t.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${n}${t.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${n}${t.minimum.toString()} ${a.unit}`
          : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${n.prefix}" \u958B\u982D`
          : n.format === "ends_with"
            ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${n.suffix}" \u7D50\u5C3E`
            : n.format === "includes"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${n.includes}"`
              : n.format === "regex"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${n.pattern}`
                : `\u7121\u6548\u7684 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${t.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${_(t.keys, "\u3001")}`;
      case "invalid_key":
        return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function Us() {
  return { localeError: ic() };
}
var Go = Symbol("ZodOutput"),
  Jo = Symbol("ZodInput"),
  Ie = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(r, ...o) {
      let i = o[0];
      if ((this._map.set(r, i), i && typeof i == "object" && "id" in i)) {
        if (this._idmap.has(i.id)) throw new Error(`ID ${i.id} already exists in the registry`);
        this._idmap.set(i.id, r);
      }
      return this;
    }
    remove(r) {
      return (this._map.delete(r), this);
    }
    get(r) {
      let o = r._zod.parent;
      if (o) {
        let i = { ...(this.get(o) ?? {}) };
        return (delete i.id, { ...i, ...this._map.get(r) });
      }
      return this._map.get(r);
    }
    has(r) {
      return this._map.has(r);
    }
  };
function Mt() {
  return new Ie();
}
var te = Mt();
function Xo(e, r) {
  return new e({ type: "string", ...h(r) });
}
function Qo(e, r) {
  return new e({ type: "string", coerce: !0, ...h(r) });
}
function Ct(e, r) {
  return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...h(r) });
}
function rt(e, r) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...h(r) });
}
function qt(e, r) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...h(r) });
}
function Ft(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...h(r),
  });
}
function Ht(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...h(r),
  });
}
function Wt(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...h(r),
  });
}
function Bt(e, r) {
  return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...h(r) });
}
function Kt(e, r) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...h(r) });
}
function Yt(e, r) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...h(r) });
}
function Gt(e, r) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...h(r) });
}
function Jt(e, r) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...h(r) });
}
function Xt(e, r) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...h(r) });
}
function Qt(e, r) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...h(r) });
}
function er(e, r) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...h(r) });
}
function tr(e, r) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...h(r) });
}
function rr(e, r) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...h(r) });
}
function nr(e, r) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...h(r) });
}
function or(e, r) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...h(r) });
}
function ir(e, r) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...h(r) });
}
function ar(e, r) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...h(r) });
}
function sr(e, r) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...h(r) });
}
function ur(e, r) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...h(r) });
}
function ei(e, r) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...h(r),
  });
}
function ti(e, r) {
  return new e({ type: "string", format: "date", check: "string_format", ...h(r) });
}
function ri(e, r) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...h(r),
  });
}
function ni(e, r) {
  return new e({ type: "string", format: "duration", check: "string_format", ...h(r) });
}
function oi(e, r) {
  return new e({ type: "number", checks: [], ...h(r) });
}
function ii(e, r) {
  return new e({ type: "number", coerce: !0, checks: [], ...h(r) });
}
function ai(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...h(r) });
}
function si(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float32", ...h(r) });
}
function ui(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float64", ...h(r) });
}
function li(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "int32", ...h(r) });
}
function ci(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "uint32", ...h(r) });
}
function di(e, r) {
  return new e({ type: "boolean", ...h(r) });
}
function _i(e, r) {
  return new e({ type: "boolean", coerce: !0, ...h(r) });
}
function mi(e, r) {
  return new e({ type: "bigint", ...h(r) });
}
function pi(e, r) {
  return new e({ type: "bigint", coerce: !0, ...h(r) });
}
function fi(e, r) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...h(r) });
}
function gi(e, r) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...h(r) });
}
function hi(e, r) {
  return new e({ type: "symbol", ...h(r) });
}
function vi(e, r) {
  return new e({ type: "undefined", ...h(r) });
}
function yi(e, r) {
  return new e({ type: "null", ...h(r) });
}
function bi(e) {
  return new e({ type: "any" });
}
function De(e) {
  return new e({ type: "unknown" });
}
function wi(e, r) {
  return new e({ type: "never", ...h(r) });
}
function xi(e, r) {
  return new e({ type: "void", ...h(r) });
}
function $i(e, r) {
  return new e({ type: "date", ...h(r) });
}
function ki(e, r) {
  return new e({ type: "date", coerce: !0, ...h(r) });
}
function zi(e, r) {
  return new e({ type: "nan", ...h(r) });
}
function ie(e, r) {
  return new Nt({ check: "less_than", ...h(r), value: e, inclusive: !1 });
}
function G(e, r) {
  return new Nt({ check: "less_than", ...h(r), value: e, inclusive: !0 });
}
function ae(e, r) {
  return new Tt({ check: "greater_than", ...h(r), value: e, inclusive: !1 });
}
function q(e, r) {
  return new Tt({ check: "greater_than", ...h(r), value: e, inclusive: !0 });
}
function Si(e) {
  return ae(0, e);
}
function Ii(e) {
  return ie(0, e);
}
function Di(e) {
  return G(0, e);
}
function Ai(e) {
  return q(0, e);
}
function be(e, r) {
  return new In({ check: "multiple_of", ...h(r), value: e });
}
function Ae(e, r) {
  return new Pn({ check: "max_size", ...h(r), maximum: e });
}
function we(e, r) {
  return new jn({ check: "min_size", ...h(r), minimum: e });
}
function nt(e, r) {
  return new On({ check: "size_equals", ...h(r), size: e });
}
function Pe(e, r) {
  return new Nn({ check: "max_length", ...h(r), maximum: e });
}
function me(e, r) {
  return new Tn({ check: "min_length", ...h(r), minimum: e });
}
function je(e, r) {
  return new En({ check: "length_equals", ...h(r), length: e });
}
function ot(e, r) {
  return new Un({ check: "string_format", format: "regex", ...h(r), pattern: e });
}
function it(e) {
  return new Zn({ check: "string_format", format: "lowercase", ...h(e) });
}
function at(e) {
  return new Rn({ check: "string_format", format: "uppercase", ...h(e) });
}
function st(e, r) {
  return new Vn({ check: "string_format", format: "includes", ...h(r), includes: e });
}
function ut(e, r) {
  return new Ln({ check: "string_format", format: "starts_with", ...h(r), prefix: e });
}
function lt(e, r) {
  return new Mn({ check: "string_format", format: "ends_with", ...h(r), suffix: e });
}
function Pi(e, r, o) {
  return new Cn({ check: "property", property: e, schema: r, ...h(o) });
}
function ct(e, r) {
  return new qn({ check: "mime_type", mime: e, ...h(r) });
}
function se(e) {
  return new Fn({ check: "overwrite", tx: e });
}
function dt(e) {
  return se((r) => r.normalize(e));
}
function _t() {
  return se((e) => e.trim());
}
function mt() {
  return se((e) => e.toLowerCase());
}
function pt() {
  return se((e) => e.toUpperCase());
}
function ft(e, r, o) {
  return new e({ type: "array", element: r, ...h(o) });
}
function ac(e, r, o) {
  return new e({ type: "union", options: r, ...h(o) });
}
function sc(e, r, o, i) {
  return new e({ type: "union", options: o, discriminator: r, ...h(i) });
}
function uc(e, r, o) {
  return new e({ type: "intersection", left: r, right: o });
}
function ji(e, r, o, i) {
  let t = o instanceof k,
    n = t ? i : o,
    a = t ? o : null;
  return new e({ type: "tuple", items: r, rest: a, ...h(n) });
}
function lc(e, r, o, i) {
  return new e({ type: "record", keyType: r, valueType: o, ...h(i) });
}
function cc(e, r, o, i) {
  return new e({ type: "map", keyType: r, valueType: o, ...h(i) });
}
function dc(e, r, o) {
  return new e({ type: "set", valueType: r, ...h(o) });
}
function _c(e, r, o) {
  let i = Array.isArray(r) ? Object.fromEntries(r.map((t) => [t, t])) : r;
  return new e({ type: "enum", entries: i, ...h(o) });
}
function mc(e, r, o) {
  return new e({ type: "enum", entries: r, ...h(o) });
}
function pc(e, r, o) {
  return new e({ type: "literal", values: Array.isArray(r) ? r : [r], ...h(o) });
}
function Oi(e, r) {
  return new e({ type: "file", ...h(r) });
}
function fc(e, r) {
  return new e({ type: "transform", transform: r });
}
function gc(e, r) {
  return new e({ type: "optional", innerType: r });
}
function hc(e, r) {
  return new e({ type: "nullable", innerType: r });
}
function vc(e, r, o) {
  return new e({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof o == "function" ? o() : o;
    },
  });
}
function yc(e, r, o) {
  return new e({ type: "nonoptional", innerType: r, ...h(o) });
}
function bc(e, r) {
  return new e({ type: "success", innerType: r });
}
function wc(e, r, o) {
  return new e({ type: "catch", innerType: r, catchValue: typeof o == "function" ? o : () => o });
}
function xc(e, r, o) {
  return new e({ type: "pipe", in: r, out: o });
}
function $c(e, r) {
  return new e({ type: "readonly", innerType: r });
}
function kc(e, r, o) {
  return new e({ type: "template_literal", parts: r, ...h(o) });
}
function zc(e, r) {
  return new e({ type: "lazy", getter: r });
}
function Sc(e, r) {
  return new e({ type: "promise", innerType: r });
}
function Ni(e, r, o) {
  let i = h(o);
  return (i.abort ?? (i.abort = !0), new e({ type: "custom", check: "custom", fn: r, ...i }));
}
function Ti(e, r, o) {
  return new e({ type: "custom", check: "custom", fn: r, ...h(o) });
}
function Ei(e, r) {
  let { case: o, error: i, truthy: t, falsy: n } = h(r),
    a = new Set(t ?? ["true", "1", "yes", "on", "y", "enabled"]),
    s = new Set(n ?? ["false", "0", "no", "off", "n", "disabled"]),
    l = e.Pipe ?? et,
    u = e.Boolean ?? Xe,
    m = e.Unknown ?? _e,
    p = new m({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (g) => {
              if (typeof g.value == "string") {
                let d = g.value;
                (o !== "sensitive" && (d = d.toLowerCase()),
                  a.has(d)
                    ? (g.value = !0)
                    : s.has(d)
                      ? (g.value = !1)
                      : g.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...s],
                          input: g.value,
                          inst: p,
                        }));
              } else g.issues.push({ code: "invalid_type", expected: "string", input: g.value });
            },
            def: { check: "custom" },
            onattach: [],
          },
        },
      ],
      error: i,
    });
  return new l({ type: "pipe", in: p, out: new u({ type: "boolean", error: i }), error: i });
}
var lr = class {
  constructor(r) {
    ((this._def = r), (this.def = r));
  }
  implement(r) {
    if (typeof r != "function") throw new Error("implement() must be called with a function");
    let o = (...i) => {
      let t = this._def.input ? It(this._def.input, i, void 0, { callee: o }) : i;
      if (!Array.isArray(t))
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      let n = r(...t);
      return this._def.output ? It(this._def.output, n, void 0, { callee: o }) : n;
    };
    return o;
  }
  implementAsync(r) {
    if (typeof r != "function") throw new Error("implement() must be called with a function");
    let o = async (...i) => {
      let t = this._def.input ? await At(this._def.input, i, void 0, { callee: o }) : i;
      if (!Array.isArray(t))
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      let n = await r(...t);
      return this._def.output ? At(this._def.output, n, void 0, { callee: o }) : n;
    };
    return o;
  }
  input(...r) {
    let o = this.constructor;
    return Array.isArray(r[0])
      ? new o({
          type: "function",
          input: new ye({ type: "tuple", items: r[0], rest: r[1] }),
          output: this._def.output,
        })
      : new o({ type: "function", input: r[0], output: this._def.output });
  }
  output(r) {
    let o = this.constructor;
    return new o({ type: "function", input: this._def.input, output: r });
  }
};
function Ui(e) {
  return new lr({
    type: "function",
    input: Array.isArray(e?.input) ? ji(ye, e?.input) : (e?.input ?? ft(Qe, De(_e))),
    output: e?.output ?? De(_e),
  });
}
var gt = class {
  constructor(r) {
    ((this.counter = 0),
      (this.metadataRegistry = r?.metadata ?? te),
      (this.target = r?.target ?? "draft-2020-12"),
      (this.unrepresentable = r?.unrepresentable ?? "throw"),
      (this.override = r?.override ?? (() => {})),
      (this.io = r?.io ?? "output"),
      (this.seen = new Map()));
  }
  process(r, o = { path: [], schemaPath: [] }) {
    var i;
    let t = r._zod.def,
      n = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      a = this.seen.get(r);
    if (a) return (a.count++, o.schemaPath.includes(r) && (a.cycle = o.path), a.schema);
    let s = { schema: {}, count: 1, cycle: void 0 };
    (this.seen.set(r, s), r._zod.toJSONSchema && (s.schema = r._zod.toJSONSchema()));
    let l = { ...o, schemaPath: [...o.schemaPath, r], path: o.path },
      u = r._zod.parent;
    if (u) ((s.ref = u), this.process(u, l), (this.seen.get(u).isParent = !0));
    else {
      let g = s.schema;
      switch (t.type) {
        case "string": {
          let d = g;
          d.type = "string";
          let { minimum: v, maximum: x, format: P, patterns: j, contentEncoding: I } = r._zod.bag;
          if (
            (typeof v == "number" && (d.minLength = v),
            typeof x == "number" && (d.maxLength = x),
            P && ((d.format = n[P] ?? P), d.format === "" && delete d.format),
            I && (d.contentEncoding = I),
            j && j.size > 0)
          ) {
            let S = [...j];
            S.length === 1
              ? (d.pattern = S[0].source)
              : S.length > 1 &&
                (s.schema.allOf = [
                  ...S.map((w) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: w.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let d = g,
            {
              minimum: v,
              maximum: x,
              format: P,
              multipleOf: j,
              exclusiveMaximum: I,
              exclusiveMinimum: S,
            } = r._zod.bag;
          (typeof P == "string" && P.includes("int") ? (d.type = "integer") : (d.type = "number"),
            typeof S == "number" && (d.exclusiveMinimum = S),
            typeof v == "number" &&
              ((d.minimum = v),
              typeof S == "number" && (S >= v ? delete d.minimum : delete d.exclusiveMinimum)),
            typeof I == "number" && (d.exclusiveMaximum = I),
            typeof x == "number" &&
              ((d.maximum = x),
              typeof I == "number" && (I <= x ? delete d.maximum : delete d.exclusiveMaximum)),
            typeof j == "number" && (d.multipleOf = j));
          break;
        }
        case "boolean": {
          let d = g;
          d.type = "boolean";
          break;
        }
        case "bigint": {
          if (this.unrepresentable === "throw")
            throw new Error("BigInt cannot be represented in JSON Schema");
          break;
        }
        case "symbol": {
          if (this.unrepresentable === "throw")
            throw new Error("Symbols cannot be represented in JSON Schema");
          break;
        }
        case "undefined": {
          let d = g;
          d.type = "null";
          break;
        }
        case "null": {
          g.type = "null";
          break;
        }
        case "any":
          break;
        case "unknown":
          break;
        case "never": {
          g.not = {};
          break;
        }
        case "void": {
          if (this.unrepresentable === "throw")
            throw new Error("Void cannot be represented in JSON Schema");
          break;
        }
        case "date": {
          if (this.unrepresentable === "throw")
            throw new Error("Date cannot be represented in JSON Schema");
          break;
        }
        case "array": {
          let d = g,
            { minimum: v, maximum: x } = r._zod.bag;
          (typeof v == "number" && (d.minItems = v),
            typeof x == "number" && (d.maxItems = x),
            (d.type = "array"),
            (d.items = this.process(t.element, { ...l, path: [...l.path, "items"] })));
          break;
        }
        case "object": {
          let d = g;
          ((d.type = "object"), (d.properties = {}));
          let v = t.shape;
          for (let j in v)
            d.properties[j] = this.process(v[j], { ...l, path: [...l.path, "properties", j] });
          let x = new Set(Object.keys(v)),
            P = new Set(
              [...x].filter((j) => {
                let I = t.shape[j]._zod;
                return this.io === "input" ? I.optin === void 0 : I.optout === void 0;
              }),
            );
          (P.size > 0 && (d.required = Array.from(P)),
            t.catchall?._zod.def.type === "never"
              ? (d.additionalProperties = !1)
              : t.catchall
                ? t.catchall &&
                  (d.additionalProperties = this.process(t.catchall, {
                    ...l,
                    path: [...l.path, "additionalProperties"],
                  }))
                : this.io === "output" && (d.additionalProperties = !1));
          break;
        }
        case "union": {
          let d = g;
          d.anyOf = t.options.map((v, x) =>
            this.process(v, { ...l, path: [...l.path, "anyOf", x] }),
          );
          break;
        }
        case "intersection": {
          let d = g,
            v = this.process(t.left, { ...l, path: [...l.path, "allOf", 0] }),
            x = this.process(t.right, { ...l, path: [...l.path, "allOf", 1] }),
            P = (I) => "allOf" in I && Object.keys(I).length === 1,
            j = [...(P(v) ? v.allOf : [v]), ...(P(x) ? x.allOf : [x])];
          d.allOf = j;
          break;
        }
        case "tuple": {
          let d = g;
          d.type = "array";
          let v = t.items.map((j, I) =>
            this.process(j, { ...l, path: [...l.path, "prefixItems", I] }),
          );
          if ((this.target === "draft-2020-12" ? (d.prefixItems = v) : (d.items = v), t.rest)) {
            let j = this.process(t.rest, { ...l, path: [...l.path, "items"] });
            this.target === "draft-2020-12" ? (d.items = j) : (d.additionalItems = j);
          }
          t.rest && (d.items = this.process(t.rest, { ...l, path: [...l.path, "items"] }));
          let { minimum: x, maximum: P } = r._zod.bag;
          (typeof x == "number" && (d.minItems = x), typeof P == "number" && (d.maxItems = P));
          break;
        }
        case "record": {
          let d = g;
          ((d.type = "object"),
            (d.propertyNames = this.process(t.keyType, {
              ...l,
              path: [...l.path, "propertyNames"],
            })),
            (d.additionalProperties = this.process(t.valueType, {
              ...l,
              path: [...l.path, "additionalProperties"],
            })));
          break;
        }
        case "map": {
          if (this.unrepresentable === "throw")
            throw new Error("Map cannot be represented in JSON Schema");
          break;
        }
        case "set": {
          if (this.unrepresentable === "throw")
            throw new Error("Set cannot be represented in JSON Schema");
          break;
        }
        case "enum": {
          let d = g,
            v = Le(t.entries);
          (v.every((x) => typeof x == "number") && (d.type = "number"),
            v.every((x) => typeof x == "string") && (d.type = "string"),
            (d.enum = v));
          break;
        }
        case "literal": {
          let d = g,
            v = [];
          for (let x of t.values)
            if (x === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error("Literal `undefined` cannot be represented in JSON Schema");
            } else if (typeof x == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error("BigInt literals cannot be represented in JSON Schema");
              v.push(Number(x));
            } else v.push(x);
          if (v.length !== 0)
            if (v.length === 1) {
              let x = v[0];
              ((d.type = x === null ? "null" : typeof x), (d.const = x));
            } else
              (v.every((x) => typeof x == "number") && (d.type = "number"),
                v.every((x) => typeof x == "string") && (d.type = "string"),
                v.every((x) => typeof x == "boolean") && (d.type = "string"),
                v.every((x) => x === null) && (d.type = "null"),
                (d.enum = v));
          break;
        }
        case "file": {
          let d = g,
            v = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: x, maximum: P, mime: j } = r._zod.bag;
          (x !== void 0 && (v.minLength = x),
            P !== void 0 && (v.maxLength = P),
            j
              ? j.length === 1
                ? ((v.contentMediaType = j[0]), Object.assign(d, v))
                : (d.anyOf = j.map((I) => ({ ...v, contentMediaType: I })))
              : Object.assign(d, v));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let d = this.process(t.innerType, l);
          g.anyOf = [d, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "success": {
          let d = g;
          d.type = "boolean";
          break;
        }
        case "default": {
          (this.process(t.innerType, l), (s.ref = t.innerType), (g.default = t.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            this.io === "input" && (g._prefault = t.defaultValue));
          break;
        }
        case "catch": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          let d;
          try {
            d = t.catchValue(void 0);
          } catch {
            throw new Error("Dynamic catch values are not supported in JSON Schema");
          }
          g.default = d;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let d = g,
            v = r._zod.pattern;
          if (!v) throw new Error("Pattern not found in template literal");
          ((d.type = "string"), (d.pattern = v.source));
          break;
        }
        case "pipe": {
          let d = this.io === "input" ? (t.in._zod.def.type === "transform" ? t.out : t.in) : t.out;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "readonly": {
          (this.process(t.innerType, l), (s.ref = t.innerType), (g.readOnly = !0));
          break;
        }
        case "promise": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "optional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "lazy": {
          let d = r._zod.innerType;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "custom": {
          if (this.unrepresentable === "throw")
            throw new Error("Custom types cannot be represented in JSON Schema");
          break;
        }
        default:
      }
    }
    let m = this.metadataRegistry.get(r);
    return (
      m && Object.assign(s.schema, m),
      this.io === "input" && V(r) && (delete s.schema.examples, delete s.schema.default),
      this.io === "input" &&
        s.schema._prefault &&
        ((i = s.schema).default ?? (i.default = s.schema._prefault)),
      delete s.schema._prefault,
      this.seen.get(r).schema
    );
  }
  emit(r, o) {
    let i = {
        cycles: o?.cycles ?? "ref",
        reused: o?.reused ?? "inline",
        external: o?.external ?? void 0,
      },
      t = this.seen.get(r);
    if (!t) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let n = (m) => {
        let p = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let x = i.external.registry.get(m[0])?.id;
          if (x) return { ref: i.external.uri(x) };
          let P = m[1].defId ?? m[1].schema.id ?? `schema${this.counter++}`;
          return ((m[1].defId = P), { defId: P, ref: `${i.external.uri("__shared")}#/${p}/${P}` });
        }
        if (m[1] === t) return { ref: "#" };
        let d = `#/${p}/`,
          v = m[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: v, ref: d + v };
      },
      a = (m) => {
        if (m[1].schema.$ref) return;
        let p = m[1],
          { ref: g, defId: d } = n(m);
        ((p.def = { ...p.schema }), d && (p.defId = d));
        let v = p.schema;
        for (let x in v) delete v[x];
        v.$ref = g;
      };
    for (let m of this.seen.entries()) {
      let p = m[1];
      if (r === m[0]) {
        a(m);
        continue;
      }
      if (i.external) {
        let d = i.external.registry.get(m[0])?.id;
        if (r !== m[0] && d) {
          a(m);
          continue;
        }
      }
      if (this.metadataRegistry.get(m[0])?.id) {
        a(m);
        continue;
      }
      if (p.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(m);
        continue;
      }
      if (p.count > 1 && i.reused === "ref") {
        a(m);
        continue;
      }
    }
    let s = (m, p) => {
      let g = this.seen.get(m),
        d = g.def ?? g.schema,
        v = { ...d };
      if (g.ref === null) return;
      let x = g.ref;
      if (((g.ref = null), x)) {
        s(x, p);
        let P = this.seen.get(x).schema;
        P.$ref && p.target === "draft-7"
          ? ((d.allOf = d.allOf ?? []), d.allOf.push(P))
          : (Object.assign(d, P), Object.assign(d, v));
      }
      g.isParent || this.override({ zodSchema: m, jsonSchema: d });
    };
    for (let m of [...this.seen.entries()].reverse()) s(m[0], { target: this.target });
    let l = {};
    (this.target === "draft-2020-12"
      ? (l.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (l.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(l, t.def));
    let u = i.external?.defs ?? {};
    for (let m of this.seen.entries()) {
      let p = m[1];
      p.def && p.defId && (u[p.defId] = p.def);
    }
    !i.external &&
      Object.keys(u).length > 0 &&
      (this.target === "draft-2020-12" ? (l.$defs = u) : (l.definitions = u));
    try {
      return JSON.parse(JSON.stringify(l));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function Zi(e, r) {
  if (e instanceof Ie) {
    let i = new gt(r),
      t = {};
    for (let s of e._idmap.entries()) {
      let [l, u] = s;
      i.process(u);
    }
    let n = {},
      a = { registry: e, uri: r?.uri || ((s) => s), defs: t };
    for (let s of e._idmap.entries()) {
      let [l, u] = s;
      n[l] = i.emit(u, { ...r, external: a });
    }
    if (Object.keys(t).length > 0) {
      let s = i.target === "draft-2020-12" ? "$defs" : "definitions";
      n.__shared = { [s]: t };
    }
    return { schemas: n };
  }
  let o = new gt(r);
  return (o.process(e), o.emit(e, r));
}
function V(e, r) {
  let o = r ?? { seen: new Set() };
  if (o.seen.has(e)) return !1;
  o.seen.add(e);
  let t = e._zod.def;
  switch (t.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return V(t.element, o);
    case "object": {
      for (let n in t.shape) if (V(t.shape[n], o)) return !0;
      return !1;
    }
    case "union": {
      for (let n of t.options) if (V(n, o)) return !0;
      return !1;
    }
    case "intersection":
      return V(t.left, o) || V(t.right, o);
    case "tuple": {
      for (let n of t.items) if (V(n, o)) return !0;
      return !!(t.rest && V(t.rest, o));
    }
    case "record":
      return V(t.keyType, o) || V(t.valueType, o);
    case "map":
      return V(t.keyType, o) || V(t.valueType, o);
    case "set":
      return V(t.valueType, o);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return V(t.innerType, o);
    case "lazy":
      return V(t.getter(), o);
    case "default":
      return V(t.innerType, o);
    case "prefault":
      return V(t.innerType, o);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return V(t.in, o) || V(t.out, o);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${t.type}`);
}
var Zs = {};
var pr = {};
pe(pr, {
  ZodISODate: () => dr,
  ZodISODateTime: () => cr,
  ZodISODuration: () => mr,
  ZodISOTime: () => _r,
  date: () => Vi,
  datetime: () => Ri,
  duration: () => Mi,
  time: () => Li,
});
var cr = c("ZodISODateTime", (e, r) => {
  (oo.init(e, r), E.init(e, r));
});
function Ri(e) {
  return ei(cr, e);
}
var dr = c("ZodISODate", (e, r) => {
  (io.init(e, r), E.init(e, r));
});
function Vi(e) {
  return ti(dr, e);
}
var _r = c("ZodISOTime", (e, r) => {
  (ao.init(e, r), E.init(e, r));
});
function Li(e) {
  return ri(_r, e);
}
var mr = c("ZodISODuration", (e, r) => {
  (so.init(e, r), E.init(e, r));
});
function Mi(e) {
  return ni(mr, e);
}
var Vs = (e, r) => {
    (Be.init(e, r),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (o) => Ye(e, o) },
        flatten: { value: (o) => Ke(e, o) },
        addIssue: { value: (o) => e.issues.push(o) },
        addIssues: { value: (o) => e.issues.push(...o) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  Dc = c("ZodError", Vs),
  Oe = c("ZodError", Vs, { Parent: Error });
var Ci = St(Oe),
  qi = Dt(Oe),
  Fi = Pt(Oe),
  Hi = jt(Oe);
var z = c(
    "ZodType",
    (e, r) => (
      k.init(e, r),
      (e.def = r),
      Object.defineProperty(e, "_def", { value: r }),
      (e.check = (...o) =>
        e.clone({
          ...r,
          checks: [
            ...(r.checks ?? []),
            ...o.map((i) =>
              typeof i == "function"
                ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } }
                : i,
            ),
          ],
        })),
      (e.clone = (o, i) => W(e, o, i)),
      (e.brand = () => e),
      (e.register = (o, i) => (o.add(e, i), e)),
      (e.parse = (o, i) => Ci(e, o, i, { callee: e.parse })),
      (e.safeParse = (o, i) => Fi(e, o, i)),
      (e.parseAsync = async (o, i) => qi(e, o, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (o, i) => Hi(e, o, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (o, i) => e.check(zu(o, i))),
      (e.superRefine = (o) => e.check(Su(o))),
      (e.overwrite = (o) => e.check(se(o))),
      (e.optional = () => hr(e)),
      (e.nullable = () => vr(e)),
      (e.nullish = () => hr(vr(e))),
      (e.nonoptional = (o) => mu(e, o)),
      (e.array = () => pa(e)),
      (e.or = (o) => kr([e, o])),
      (e.and = (o) => Xs(e, o)),
      (e.transform = (o) => yr(e, ha(o))),
      (e.default = (o) => cu(e, o)),
      (e.prefault = (o) => _u(e, o)),
      (e.catch = (o) => gu(e, o)),
      (e.pipe = (o) => yr(e, o)),
      (e.readonly = () => yu(e)),
      (e.describe = (o) => {
        let i = e.clone();
        return (te.add(i, { description: o }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return te.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...o) => {
        if (o.length === 0) return te.get(e);
        let i = e.clone();
        return (te.add(i, o[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Ki = c("_ZodString", (e, r) => {
    (Je.init(e, r), z.init(e, r));
    let o = e._zod.bag;
    ((e.format = o.format ?? null),
      (e.minLength = o.minimum ?? null),
      (e.maxLength = o.maximum ?? null),
      (e.regex = (...i) => e.check(ot(...i))),
      (e.includes = (...i) => e.check(st(...i))),
      (e.startsWith = (...i) => e.check(ut(...i))),
      (e.endsWith = (...i) => e.check(lt(...i))),
      (e.min = (...i) => e.check(me(...i))),
      (e.max = (...i) => e.check(Pe(...i))),
      (e.length = (...i) => e.check(je(...i))),
      (e.nonempty = (...i) => e.check(me(1, ...i))),
      (e.lowercase = (i) => e.check(it(i))),
      (e.uppercase = (i) => e.check(at(i))),
      (e.trim = () => e.check(_t())),
      (e.normalize = (...i) => e.check(dt(...i))),
      (e.toLowerCase = () => e.check(mt())),
      (e.toUpperCase = () => e.check(pt())));
  }),
  br = c("ZodString", (e, r) => {
    (Je.init(e, r),
      Ki.init(e, r),
      (e.email = (o) => e.check(Ct(Yi, o))),
      (e.url = (o) => e.check(Bt(Gi, o))),
      (e.jwt = (o) => e.check(ur(da, o))),
      (e.emoji = (o) => e.check(Kt(Ji, o))),
      (e.guid = (o) => e.check(rt(fr, o))),
      (e.uuid = (o) => e.check(qt(le, o))),
      (e.uuidv4 = (o) => e.check(Ft(le, o))),
      (e.uuidv6 = (o) => e.check(Ht(le, o))),
      (e.uuidv7 = (o) => e.check(Wt(le, o))),
      (e.nanoid = (o) => e.check(Yt(Xi, o))),
      (e.guid = (o) => e.check(rt(fr, o))),
      (e.cuid = (o) => e.check(Gt(Qi, o))),
      (e.cuid2 = (o) => e.check(Jt(ea, o))),
      (e.ulid = (o) => e.check(Xt(ta, o))),
      (e.base64 = (o) => e.check(ir(ua, o))),
      (e.base64url = (o) => e.check(ar(la, o))),
      (e.xid = (o) => e.check(Qt(ra, o))),
      (e.ksuid = (o) => e.check(er(na, o))),
      (e.ipv4 = (o) => e.check(tr(oa, o))),
      (e.ipv6 = (o) => e.check(rr(ia, o))),
      (e.cidrv4 = (o) => e.check(nr(aa, o))),
      (e.cidrv6 = (o) => e.check(or(sa, o))),
      (e.e164 = (o) => e.check(sr(ca, o))),
      (e.datetime = (o) => e.check(Ri(o))),
      (e.date = (o) => e.check(Vi(o))),
      (e.time = (o) => e.check(Li(o))),
      (e.duration = (o) => e.check(Mi(o))));
  });
function Wi(e) {
  return Xo(br, e);
}
var E = c("ZodStringFormat", (e, r) => {
    (T.init(e, r), Ki.init(e, r));
  }),
  Yi = c("ZodEmail", (e, r) => {
    (Yn.init(e, r), E.init(e, r));
  });
function Pc(e) {
  return Ct(Yi, e);
}
var fr = c("ZodGUID", (e, r) => {
  (Bn.init(e, r), E.init(e, r));
});
function jc(e) {
  return rt(fr, e);
}
var le = c("ZodUUID", (e, r) => {
  (Kn.init(e, r), E.init(e, r));
});
function Oc(e) {
  return qt(le, e);
}
function Nc(e) {
  return Ft(le, e);
}
function Tc(e) {
  return Ht(le, e);
}
function Ec(e) {
  return Wt(le, e);
}
var Gi = c("ZodURL", (e, r) => {
  (Gn.init(e, r), E.init(e, r));
});
function Uc(e) {
  return Bt(Gi, e);
}
var Ji = c("ZodEmoji", (e, r) => {
  (Jn.init(e, r), E.init(e, r));
});
function Zc(e) {
  return Kt(Ji, e);
}
var Xi = c("ZodNanoID", (e, r) => {
  (Xn.init(e, r), E.init(e, r));
});
function Rc(e) {
  return Yt(Xi, e);
}
var Qi = c("ZodCUID", (e, r) => {
  (Qn.init(e, r), E.init(e, r));
});
function Vc(e) {
  return Gt(Qi, e);
}
var ea = c("ZodCUID2", (e, r) => {
  (eo.init(e, r), E.init(e, r));
});
function Lc(e) {
  return Jt(ea, e);
}
var ta = c("ZodULID", (e, r) => {
  (to.init(e, r), E.init(e, r));
});
function Mc(e) {
  return Xt(ta, e);
}
var ra = c("ZodXID", (e, r) => {
  (ro.init(e, r), E.init(e, r));
});
function Cc(e) {
  return Qt(ra, e);
}
var na = c("ZodKSUID", (e, r) => {
  (no.init(e, r), E.init(e, r));
});
function qc(e) {
  return er(na, e);
}
var oa = c("ZodIPv4", (e, r) => {
  (uo.init(e, r), E.init(e, r));
});
function Fc(e) {
  return tr(oa, e);
}
var ia = c("ZodIPv6", (e, r) => {
  (lo.init(e, r), E.init(e, r));
});
function Hc(e) {
  return rr(ia, e);
}
var aa = c("ZodCIDRv4", (e, r) => {
  (co.init(e, r), E.init(e, r));
});
function Wc(e) {
  return nr(aa, e);
}
var sa = c("ZodCIDRv6", (e, r) => {
  (_o.init(e, r), E.init(e, r));
});
function Bc(e) {
  return or(sa, e);
}
var ua = c("ZodBase64", (e, r) => {
  (po.init(e, r), E.init(e, r));
});
function Kc(e) {
  return ir(ua, e);
}
var la = c("ZodBase64URL", (e, r) => {
  (fo.init(e, r), E.init(e, r));
});
function Yc(e) {
  return ar(la, e);
}
var ca = c("ZodE164", (e, r) => {
  (go.init(e, r), E.init(e, r));
});
function Gc(e) {
  return sr(ca, e);
}
var da = c("ZodJWT", (e, r) => {
  (ho.init(e, r), E.init(e, r));
});
function Jc(e) {
  return ur(da, e);
}
var vt = c("ZodNumber", (e, r) => {
  (Zt.init(e, r),
    z.init(e, r),
    (e.gt = (i, t) => e.check(ae(i, t))),
    (e.gte = (i, t) => e.check(q(i, t))),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.lt = (i, t) => e.check(ie(i, t))),
    (e.lte = (i, t) => e.check(G(i, t))),
    (e.max = (i, t) => e.check(G(i, t))),
    (e.int = (i) => e.check(Bi(i))),
    (e.safe = (i) => e.check(Bi(i))),
    (e.positive = (i) => e.check(ae(0, i))),
    (e.nonnegative = (i) => e.check(q(0, i))),
    (e.negative = (i) => e.check(ie(0, i))),
    (e.nonpositive = (i) => e.check(G(0, i))),
    (e.multipleOf = (i, t) => e.check(be(i, t))),
    (e.step = (i, t) => e.check(be(i, t))),
    (e.finite = () => e));
  let o = e._zod.bag;
  ((e.minValue =
    Math.max(
      o.minimum ?? Number.NEGATIVE_INFINITY,
      o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        o.maximum ?? Number.POSITIVE_INFINITY,
        o.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = o.format ?? null));
});
function Ls(e) {
  return oi(vt, e);
}
var Ne = c("ZodNumberFormat", (e, r) => {
  (vo.init(e, r), vt.init(e, r));
});
function Bi(e) {
  return ai(Ne, e);
}
function Xc(e) {
  return si(Ne, e);
}
function Qc(e) {
  return ui(Ne, e);
}
function ed(e) {
  return li(Ne, e);
}
function td(e) {
  return ci(Ne, e);
}
var yt = c("ZodBoolean", (e, r) => {
  (Xe.init(e, r), z.init(e, r));
});
function Ms(e) {
  return di(yt, e);
}
var bt = c("ZodBigInt", (e, r) => {
  (Rt.init(e, r),
    z.init(e, r),
    (e.gte = (i, t) => e.check(q(i, t))),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.gt = (i, t) => e.check(ae(i, t))),
    (e.gte = (i, t) => e.check(q(i, t))),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.lt = (i, t) => e.check(ie(i, t))),
    (e.lte = (i, t) => e.check(G(i, t))),
    (e.max = (i, t) => e.check(G(i, t))),
    (e.positive = (i) => e.check(ae(BigInt(0), i))),
    (e.negative = (i) => e.check(ie(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(G(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(q(BigInt(0), i))),
    (e.multipleOf = (i, t) => e.check(be(i, t))));
  let o = e._zod.bag;
  ((e.minValue = o.minimum ?? null),
    (e.maxValue = o.maximum ?? null),
    (e.format = o.format ?? null));
});
function rd(e) {
  return mi(bt, e);
}
var _a = c("ZodBigIntFormat", (e, r) => {
  (yo.init(e, r), bt.init(e, r));
});
function nd(e) {
  return fi(_a, e);
}
function od(e) {
  return gi(_a, e);
}
var Cs = c("ZodSymbol", (e, r) => {
  (bo.init(e, r), z.init(e, r));
});
function id(e) {
  return hi(Cs, e);
}
var qs = c("ZodUndefined", (e, r) => {
  (wo.init(e, r), z.init(e, r));
});
function ad(e) {
  return vi(qs, e);
}
var Fs = c("ZodNull", (e, r) => {
  (xo.init(e, r), z.init(e, r));
});
function Hs(e) {
  return yi(Fs, e);
}
var Ws = c("ZodAny", (e, r) => {
  ($o.init(e, r), z.init(e, r));
});
function sd() {
  return bi(Ws);
}
var ma = c("ZodUnknown", (e, r) => {
  (_e.init(e, r), z.init(e, r));
});
function gr() {
  return De(ma);
}
var Bs = c("ZodNever", (e, r) => {
  (ko.init(e, r), z.init(e, r));
});
function wr(e) {
  return wi(Bs, e);
}
var Ks = c("ZodVoid", (e, r) => {
  (zo.init(e, r), z.init(e, r));
});
function ud(e) {
  return xi(Ks, e);
}
var xr = c("ZodDate", (e, r) => {
  (So.init(e, r),
    z.init(e, r),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.max = (i, t) => e.check(G(i, t))));
  let o = e._zod.bag;
  ((e.minDate = o.minimum ? new Date(o.minimum) : null),
    (e.maxDate = o.maximum ? new Date(o.maximum) : null));
});
function ld(e) {
  return $i(xr, e);
}
var Ys = c("ZodArray", (e, r) => {
  (Qe.init(e, r),
    z.init(e, r),
    (e.element = r.element),
    (e.min = (o, i) => e.check(me(o, i))),
    (e.nonempty = (o) => e.check(me(1, o))),
    (e.max = (o, i) => e.check(Pe(o, i))),
    (e.length = (o, i) => e.check(je(o, i))),
    (e.unwrap = () => e.element));
});
function pa(e, r) {
  return ft(Ys, e, r);
}
function cd(e) {
  let r = e._zod.def.shape;
  return iu(Object.keys(r));
}
var $r = c("ZodObject", (e, r) => {
  (Io.init(e, r),
    z.init(e, r),
    y.defineLazy(e, "shape", () => Object.fromEntries(Object.entries(e._zod.def.shape))),
    (e.keyof = () => nu(Object.keys(e._zod.def.shape))),
    (e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: gr() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: gr() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: wr() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (o) => y.extend(e, o)),
    (e.merge = (o) => y.merge(e, o)),
    (e.pick = (o) => y.pick(e, o)),
    (e.omit = (o) => y.omit(e, o)),
    (e.partial = (...o) => y.partial(va, e, o[0])),
    (e.required = (...o) => y.required(ya, e, o[0])));
});
function dd(e, r) {
  let o = {
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...y.normalizeParams(r),
  };
  return new $r(o);
}
function _d(e, r) {
  return new $r({
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: wr(),
    ...y.normalizeParams(r),
  });
}
function md(e, r) {
  return new $r({
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: gr(),
    ...y.normalizeParams(r),
  });
}
var fa = c("ZodUnion", (e, r) => {
  (Vt.init(e, r), z.init(e, r), (e.options = r.options));
});
function kr(e, r) {
  return new fa({ type: "union", options: e, ...y.normalizeParams(r) });
}
var Gs = c("ZodDiscriminatedUnion", (e, r) => {
  (fa.init(e, r), Do.init(e, r));
});
function pd(e, r, o) {
  return new Gs({ type: "union", options: r, discriminator: e, ...y.normalizeParams(o) });
}
var Js = c("ZodIntersection", (e, r) => {
  (Ao.init(e, r), z.init(e, r));
});
function Xs(e, r) {
  return new Js({ type: "intersection", left: e, right: r });
}
var Qs = c("ZodTuple", (e, r) => {
  (ye.init(e, r), z.init(e, r), (e.rest = (o) => e.clone({ ...e._zod.def, rest: o })));
});
function fd(e, r, o) {
  let i = r instanceof k,
    t = i ? o : r,
    n = i ? r : null;
  return new Qs({ type: "tuple", items: e, rest: n, ...y.normalizeParams(t) });
}
var ga = c("ZodRecord", (e, r) => {
  (Po.init(e, r), z.init(e, r), (e.keyType = r.keyType), (e.valueType = r.valueType));
});
function eu(e, r, o) {
  return new ga({ type: "record", keyType: e, valueType: r, ...y.normalizeParams(o) });
}
function gd(e, r, o) {
  return new ga({ type: "record", keyType: kr([e, wr()]), valueType: r, ...y.normalizeParams(o) });
}
var tu = c("ZodMap", (e, r) => {
  (jo.init(e, r), z.init(e, r), (e.keyType = r.keyType), (e.valueType = r.valueType));
});
function hd(e, r, o) {
  return new tu({ type: "map", keyType: e, valueType: r, ...y.normalizeParams(o) });
}
var ru = c("ZodSet", (e, r) => {
  (Oo.init(e, r),
    z.init(e, r),
    (e.min = (...o) => e.check(we(...o))),
    (e.nonempty = (o) => e.check(we(1, o))),
    (e.max = (...o) => e.check(Ae(...o))),
    (e.size = (...o) => e.check(nt(...o))));
});
function vd(e, r) {
  return new ru({ type: "set", valueType: e, ...y.normalizeParams(r) });
}
var ht = c("ZodEnum", (e, r) => {
  (No.init(e, r), z.init(e, r), (e.enum = r.entries), (e.options = Object.values(r.entries)));
  let o = new Set(Object.keys(r.entries));
  ((e.extract = (i, t) => {
    let n = {};
    for (let a of i)
      if (o.has(a)) n[a] = r.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new ht({ ...r, checks: [], ...y.normalizeParams(t), entries: n });
  }),
    (e.exclude = (i, t) => {
      let n = { ...r.entries };
      for (let a of i)
        if (o.has(a)) delete n[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new ht({ ...r, checks: [], ...y.normalizeParams(t), entries: n });
    }));
});
function nu(e, r) {
  let o = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new ht({ type: "enum", entries: o, ...y.normalizeParams(r) });
}
function yd(e, r) {
  return new ht({ type: "enum", entries: e, ...y.normalizeParams(r) });
}
var ou = c("ZodLiteral", (e, r) => {
  (To.init(e, r),
    z.init(e, r),
    (e.values = new Set(r.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (r.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return r.values[0];
      },
    }));
});
function iu(e, r) {
  return new ou({ type: "literal", values: Array.isArray(e) ? e : [e], ...y.normalizeParams(r) });
}
var au = c("ZodFile", (e, r) => {
  (Eo.init(e, r),
    z.init(e, r),
    (e.min = (o, i) => e.check(we(o, i))),
    (e.max = (o, i) => e.check(Ae(o, i))),
    (e.mime = (o, i) => e.check(ct(Array.isArray(o) ? o : [o], i))));
});
function bd(e) {
  return Oi(au, e);
}
var su = c("ZodTransform", (e, r) => {
  (Uo.init(e, r),
    z.init(e, r),
    (e._zod.parse = (o, i) => {
      o.addIssue = (n) => {
        if (typeof n == "string") o.issues.push(y.issue(n, o.value, r));
        else {
          let a = n;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = o.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            o.issues.push(y.issue(a)));
        }
      };
      let t = r.transform(o.value, o);
      return t instanceof Promise ? t.then((n) => ((o.value = n), o)) : ((o.value = t), o);
    }));
});
function ha(e) {
  return new su({ type: "transform", transform: e });
}
var va = c("ZodOptional", (e, r) => {
  (Zo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function hr(e) {
  return new va({ type: "optional", innerType: e });
}
var uu = c("ZodNullable", (e, r) => {
  (Ro.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function vr(e) {
  return new uu({ type: "nullable", innerType: e });
}
function wd(e) {
  return hr(vr(e));
}
var lu = c("ZodDefault", (e, r) => {
  (Vo.init(e, r),
    z.init(e, r),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function cu(e, r) {
  return new lu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
var du = c("ZodPrefault", (e, r) => {
  (Lo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function _u(e, r) {
  return new du({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
var ya = c("ZodNonOptional", (e, r) => {
  (Mo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function mu(e, r) {
  return new ya({ type: "nonoptional", innerType: e, ...y.normalizeParams(r) });
}
var pu = c("ZodSuccess", (e, r) => {
  (Co.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function xd(e) {
  return new pu({ type: "success", innerType: e });
}
var fu = c("ZodCatch", (e, r) => {
  (qo.init(e, r),
    z.init(e, r),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function gu(e, r) {
  return new fu({ type: "catch", innerType: e, catchValue: typeof r == "function" ? r : () => r });
}
var hu = c("ZodNaN", (e, r) => {
  (Fo.init(e, r), z.init(e, r));
});
function $d(e) {
  return zi(hu, e);
}
var ba = c("ZodPipe", (e, r) => {
  (et.init(e, r), z.init(e, r), (e.in = r.in), (e.out = r.out));
});
function yr(e, r) {
  return new ba({ type: "pipe", in: e, out: r });
}
var vu = c("ZodReadonly", (e, r) => {
  (Ho.init(e, r), z.init(e, r));
});
function yu(e) {
  return new vu({ type: "readonly", innerType: e });
}
var bu = c("ZodTemplateLiteral", (e, r) => {
  (Wo.init(e, r), z.init(e, r));
});
function kd(e, r) {
  return new bu({ type: "template_literal", parts: e, ...y.normalizeParams(r) });
}
var wu = c("ZodLazy", (e, r) => {
  (Ko.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.getter()));
});
function xu(e) {
  return new wu({ type: "lazy", getter: e });
}
var $u = c("ZodPromise", (e, r) => {
  (Bo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function zd(e) {
  return new $u({ type: "promise", innerType: e });
}
var zr = c("ZodCustom", (e, r) => {
  (Yo.init(e, r), z.init(e, r));
});
function ku(e, r) {
  let o = new U({ check: "custom", ...y.normalizeParams(r) });
  return ((o._zod.check = e), o);
}
function Sd(e, r) {
  return Ni(zr, e ?? (() => !0), r);
}
function zu(e, r = {}) {
  return Ti(zr, e, r);
}
function Su(e, r) {
  let o = ku(
    (i) => (
      (i.addIssue = (t) => {
        if (typeof t == "string") i.issues.push(y.issue(t, i.value, o._zod.def));
        else {
          let n = t;
          (n.fatal && (n.continue = !1),
            n.code ?? (n.code = "custom"),
            n.input ?? (n.input = i.value),
            n.inst ?? (n.inst = o),
            n.continue ?? (n.continue = !o._zod.def.abort),
            i.issues.push(y.issue(n)));
        }
      }),
      e(i.value, i)
    ),
    r,
  );
  return o;
}
function Id(e, r = { error: `Input not instance of ${e.name}` }) {
  let o = new zr({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...y.normalizeParams(r),
  });
  return ((o._zod.bag.Class = e), o);
}
var Dd = (...e) => Ei({ Pipe: ba, Boolean: yt, Unknown: ma }, ...e);
function Ad(e) {
  let r = xu(() => kr([Wi(e), Ls(), Ms(), Hs(), pa(r), eu(Wi(), r)]));
  return r;
}
function Pd(e, r) {
  return yr(ha(e), r);
}
var jd = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
  },
  Od = Object.freeze({ status: "aborted" }),
  Nd = Od;
function Td(e) {
  Z({ customError: e });
}
function Ed() {
  return Z().customError;
}
var wa = {};
pe(wa, { bigint: () => Vd, boolean: () => Rd, date: () => Ld, number: () => Zd, string: () => Ud });
function Ud(e) {
  return Qo(br, e);
}
function Zd(e) {
  return ii(vt, e);
}
function Rd(e) {
  return _i(yt, e);
}
function Vd(e) {
  return pi(bt, e);
}
function Ld(e) {
  return ki(xr, e);
}
Z(Lt());
Ar && f.config({ jitless: !0 });
var Iu = [
    "ar",
    "bg",
    "ca",
    "co",
    "cs",
    "da",
    "de",
    "dsb",
    "el",
    "en",
    "es",
    "fa",
    "fr",
    "hsb",
    "hu",
    "id",
    "is",
    "it",
    "ja",
    "ko",
    "nb",
    "nl",
    "pl",
    "pt-BR",
    "ro",
    "ru",
    "sk",
    "sl",
    "sv",
    "tr",
    "uk",
    "zh-CN",
    "zh-TW",
  ],
  Sr = [
    "appDesc",
    "restore_purchase_button",
    "get_premium_button",
    "back",
    "rm_notifications_all",
    "waiting_for_media",
    "nomedia_title",
    "nomedia_description",
    "nomedia_reload_button",
    "nomedia_reload_button_tooltip",
    "show_nomedia_button",
    "show_nomedia_button_tooltip",
    "setting_button_tooltip",
    "history_button_tooltip",
    "show_all_history_button",
    "complete_title",
    "hide_complete_button",
    "translate_button_tooltip",
    "help_button_tooltip",
    "open_source_tab_button_tooltip",
    "retry_download_button_tooltip",
    "delete_file_button_tooltip",
    "download_directory_button_tooltip",
    "clear_downloaded_tooltip",
    "show_in_popup_button_tooltip",
    "show_in_sidebar_button_tooltip",
    "video_not_playing_button_tooltip",
    "play",
    "warn_drm_tooltip",
    "version_title",
    "account_title",
    "one_hundred_downloads_title",
    "leave_review_description",
    "leave_review_button",
    "account_status",
    "account_status_premium",
    "free_account",
    "copy_to_clipboard",
    "my_account_button",
    "download_title",
    "show_notification",
    "max_parallel_downloads",
    "saveas_detected_warning",
    "change_saveas_setting",
    "download_directory_title",
    "download_directory_description",
    "change_browser_download_directory",
    "bad_download_subdirectory_warning",
    "download_subdirectory",
    "private_browsing_title",
    "private_browsing_warning",
    "private_browsing_notifications",
    "private_browsing_button",
    "throttle_youtube",
    "prefer_original_audio",
    "settings_history_title",
    "transient_history_description",
    "history_limit",
    "appearance_title",
    "theme_title",
    "theme_light",
    "theme_dark",
    "theme_system",
    "popup_size_title",
    "popup_size_small",
    "popup_size_medium",
    "popup_size_big",
    "font_size_title",
    "font_size_default",
    "font_size_large",
    "font_size_verylarge",
    "panel_position_title",
    "use_popup",
    "use_sidebar",
    "behavior_title",
    "controls_title",
    "show_in_context_menu",
    "restart_addon",
    "reset_settings",
    "prefered_quality",
    "prefered_quality_highest",
    "prefered_quality_1080p",
    "prefered_quality_720p",
    "prefered_quality_480p",
    "prefer_mkv",
    "preview_mode_title",
    "preview_mode_none",
    "preview_mode_video",
    "preview_mode_image",
    "media_discovered_ordering_title",
    "order_media_smart",
    "order_media_by_newest",
    "order_media_by_oldest",
    "history_title",
    "history_warning",
    "history_warning_2",
    "enable_history",
    "clear_history",
    "disable_history",
    "no_downloads_yet",
    "download_failed",
    "download_failed_description",
    "download_interrupted",
    "download_interrupted_description",
    "download_with_drm_failed_description",
    "no_youtube",
    "no_youtube_description",
    "no_youtube_description_2",
    "premium_required",
    "premium_yt_required_description",
    "premium_hls_required_description",
    "premium_all_required_description",
    "youtube_too_many_downloads",
    "youtube_too_many_downloads_description",
    "stop",
    "cancel",
    "copy_url",
    "always_copy_url",
    "download_button",
    "download_as_button_and_menu",
    "rename_short",
    "always_download_as_menu",
    "download_audio_button",
    "download_audio_and_video_menu",
    "download_audio_only_menu",
    "audio_only_for_this_website",
    "details",
    "report",
    "reporting",
    "reported_thankyou",
  ],
  xa = [
    "back",
    "header_help",
    "header_ask_question",
    "activate_title",
    "activate_pending",
    "activate_success",
    "activate_error",
    "activate_no_addon_found",
    "activate_no_method_found",
    "activate_help_me",
    "issue_title",
    "issue_submit",
    "issue_thank_you",
    "issue_enter_email",
    "issue_email_sent",
    "issue_or_digit",
    "issue_just_digit",
    "issue_i_have_a_code",
    "issue_i_have_a_key",
    "issue_key",
    "landing_text1",
    "landing_text2",
    "landing_text3",
    "landing_text4",
    "landing_install_for_google",
    "landing_install_for_mozilla",
    "landing_install_for_microsoft",
    "landing_feature1_title",
    "landing_feature1_description",
    "landing_feature2_title",
    "landing_feature2_description",
    "landing_feature3_title",
    "landing_feature3_description",
    "landing_feature4_title",
    "landing_feature4_description",
    "premium_hero1",
    "premium_hero2",
    "premium_hero3",
    "premium_supported_payment_methods",
    "premium_buy",
    "welcome_text",
    "welcome_pin_message",
  ];
var zf = new Set(Iu),
  Md = f.enum(Sr),
  Cd = f.enum(xa),
  Du = f.map(Md, f.string()),
  Au = f.map(Cd, f.string()),
  Sf = new Set(Sr);
var Xd = Aa(jr(), 1);
var ka = "";
function ju() {
  return { default_: { max_length: 64, template: "%title" }, rules: [] };
}
var Nu = f.templateLiteral(["ded_", f.string()]),
  Qd = f.templateLiteral(["media_hash_", f.number()]),
  Ou = f.enum(["download", "download_as", "download_audio", "copy"]),
  e_ = f.enum(["popup", "sidebar"]),
  Sa = f.string().brand("directorypath"),
  t_ = f.strictObject({
    downloaded_id: Nu,
    media_hash: Qd,
    path: f.string(),
    browser_download_id: f.number(),
    download_timestamp: f.number(),
    origin_url: f.nullable(f.url()),
    origin_favicon_url: f.nullable(f.url()),
    has_drm: f.boolean(),
    subdir: f.optional(Sa),
  }),
  r_ = f.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]),
  n_ = f.object({
    iat: f.optional(f.number()),
    user_id: f.number(),
    store: f.string().max(256),
    jti: f.string().max(512),
    valid_until: f.number(),
    exp: f.number(),
    developer: f.boolean().optional(),
    entitlement_type: r_.optional(),
  }),
  o_ = n_.extend({ raw: f.string() }),
  i_ = f.enum(["original", "user_language"]),
  a_ = f.enum(["none", "video", "image"]),
  s_ = f.enum(["system", "light", "dark"]),
  u_ = f.enum(["big", "medium", "small"]),
  l_ = f.enum(["verylarge", "large", "default"]),
  c_ = f.strictObject({
    max_length: f.number(),
    template: f.string(),
    force_doc_title: f.optional(f.boolean()),
  }),
  d_ = f.strictObject({
    template: f.string(),
    url: f.string(),
    max_length: f.nullable(f.number()),
    selector: f.nullable(f.string()),
    subdir: f.optional(Sa),
    force_doc_title: f.optional(f.boolean()),
    replace: f.optional(f.array(f.strictObject({ from: f.string(), to: f.string() }))),
  }),
  __ = f.enum(["SMART", "OLDEST", "NEWEST"]),
  za = f.strictObject({
    version: f.number(),
    default_action: Ou,
    default_action_per_hostname: f.map(f.string(), Ou),
    downloaded: f.map(Nu, t_),
    jwt: f.nullable(o_),
    lsd: f.number(),
    dockmode: e_,
    download_directory: Sa,
    youtube_throttle: f.boolean(),
    youtube_audio_strategy: i_,
    max_concurrent_downloads: f.number(),
    show_desktop_notifications: f.boolean(),
    show_desktop_notifications_private: f.boolean(),
    history_days: f.number(),
    show_transient_history: f.boolean(),
    ui_theme: s_,
    use_context_menu: f.boolean(),
    dont_ask_for_user_review: f.boolean(),
    successful_downloads_count: f.number(),
    prefered_quality: f.nullable(f.number()),
    prefered_av_muxer: f.enum(["mp4", "mkv"]),
    hide_nomedia_box: f.boolean(),
    popup_size: u_,
    font_size: l_,
    prefered_discovered_media_order: __,
    smartnaming: f.strictObject({
      source: f.nullable(f.string()),
      compiled: f.strictObject({ default_: c_, rules: f.array(d_) }),
    }),
    preview_mode: a_,
    last_migration_request: f.number(),
    custom_strings: f.strictObject({ web: Au, addon: Du }),
  }),
  fg = za.readonly();
function Tu(e) {
  let r = Ia();
  if (e && typeof e == "object")
    for (let o of Object.keys(za.shape)) {
      let i = za.shape[o];
      if (o in e) {
        let t = e[o],
          n = i.safeParse(t);
        if (n.success) r[o] = n.data;
        else {
          for (let a of n.error.issues)
            (console.warn("Zod issue"), console.warn(a.path.join(".")), console.warn(a.message));
          (console.warn(n.error.issues),
            console.warn(n.error.type),
            console.warn(n.error.message),
            console.warn(
              `Failed to import past persitent state field: ${o}. Fallback to default. Value was:`,
              t,
            ));
        }
      }
    }
  return r;
}
var m_ = 1710169438e3;
function Ia() {
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
    jwt: null,
    lsd: m_,
    default_action: "download",
    hide_nomedia_box: !0,
    dont_ask_for_user_review: !1,
    dockmode: "popup",
    download_directory: ka,
    youtube_throttle: !0,
    youtube_audio_strategy: "original",
    max_concurrent_downloads: 6,
    show_desktop_notifications: !0,
    show_desktop_notifications_private: !1,
    history_days: 0,
    show_transient_history: !0,
    ui_theme: "system",
    use_context_menu: !0,
    prefered_quality: 1080,
    prefered_av_muxer: "mp4",
    popup_size: "medium",
    font_size: "default",
    prefered_discovered_media_order: "SMART",
    successful_downloads_count: 0,
    smartnaming: { source: null, compiled: ju() },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
  };
}
var Da = "global_persistent_state";
async function Uu() {
  let e = await Eu.storage.local.get(Da);
  if (Da in e) {
    let r = e[Da];
    return Tu(Q(r));
  }
  return Ia();
}
(async () => (await Uu()).jwt || document.body.classList.add("show-gopremium"))();
