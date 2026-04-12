var ge = Object.create;
var te = Object.defineProperty;
var ye = Object.getOwnPropertyDescriptor;
var _e = Object.getOwnPropertyNames;
var he = Object.getPrototypeOf,
  ve = Object.prototype.hasOwnProperty;
var Ae = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var xe = (e, r, n, s) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let i of _e(r))
      !ve.call(e, i) &&
        i !== n &&
        te(e, i, { get: () => r[i], enumerable: !(s = ye(r, i)) || s.enumerable });
  return e;
};
var be = (e, r, n) => (
  (n = e != null ? ge(he(e)) : {}),
  xe(r || !e || !e.__esModule ? te(n, "default", { value: e, enumerable: !0 }) : n, e)
);
var oe = Ae((Z, ne) => {
  (function (e, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof Z < "u") r(ne);
    else {
      var n = { exports: {} };
      (r(n), (e.browser = n.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Z, function (e) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      e.exports = globalThis.browser;
    else {
      let r = "The message port closed before a response was received.",
        n = (s) => {
          let i = {
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
          if (Object.keys(i).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class o extends WeakMap {
            constructor(_, v = void 0) {
              (super(v), (this.createItem = _));
            }
            get(_) {
              return (this.has(_) || this.set(_, this.createItem(_)), super.get(_));
            }
          }
          let g = (y) => y && typeof y == "object" && typeof y.then == "function",
            p =
              (y, _) =>
              (...v) => {
                s.runtime.lastError
                  ? y.reject(new Error(s.runtime.lastError.message))
                  : _.singleCallbackArg || (v.length <= 1 && _.singleCallbackArg !== !1)
                    ? y.resolve(v[0])
                    : y.resolve(v);
              },
            l = (y) => (y == 1 ? "argument" : "arguments"),
            t = (y, _) =>
              function (x, ...S) {
                if (S.length < _.minArgs)
                  throw new Error(
                    `Expected at least ${_.minArgs} ${l(_.minArgs)} for ${y}(), got ${S.length}`,
                  );
                if (S.length > _.maxArgs)
                  throw new Error(
                    `Expected at most ${_.maxArgs} ${l(_.maxArgs)} for ${y}(), got ${S.length}`,
                  );
                return new Promise((O, k) => {
                  if (_.fallbackToNoCallback)
                    try {
                      x[y](...S, p({ resolve: O, reject: k }, _));
                    } catch (h) {
                      (console.warn(
                        `${y} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        h,
                      ),
                        x[y](...S),
                        (_.fallbackToNoCallback = !1),
                        (_.noCallback = !0),
                        O());
                    }
                  else
                    _.noCallback ? (x[y](...S), O()) : x[y](...S, p({ resolve: O, reject: k }, _));
                });
              },
            a = (y, _, v) =>
              new Proxy(_, {
                apply(x, S, O) {
                  return v.call(S, y, ...O);
                },
              }),
            u = Function.call.bind(Object.prototype.hasOwnProperty),
            m = (y, _ = {}, v = {}) => {
              let x = Object.create(null),
                S = {
                  has(k, h) {
                    return h in y || h in x;
                  },
                  get(k, h, R) {
                    if (h in x) return x[h];
                    if (!(h in y)) return;
                    let E = y[h];
                    if (typeof E == "function")
                      if (typeof _[h] == "function") E = a(y, y[h], _[h]);
                      else if (u(v, h)) {
                        let U = t(h, v[h]);
                        E = a(y, y[h], U);
                      } else E = E.bind(y);
                    else if (typeof E == "object" && E !== null && (u(_, h) || u(v, h)))
                      E = m(E, _[h], v[h]);
                    else if (u(v, "*")) E = m(E, _[h], v["*"]);
                    else
                      return (
                        Object.defineProperty(x, h, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return y[h];
                          },
                          set(U) {
                            y[h] = U;
                          },
                        }),
                        E
                      );
                    return ((x[h] = E), E);
                  },
                  set(k, h, R, E) {
                    return (h in x ? (x[h] = R) : (y[h] = R), !0);
                  },
                  defineProperty(k, h, R) {
                    return Reflect.defineProperty(x, h, R);
                  },
                  deleteProperty(k, h) {
                    return Reflect.deleteProperty(x, h);
                  },
                },
                O = Object.create(y);
              return new Proxy(O, S);
            },
            d = (y) => ({
              addListener(_, v, ...x) {
                _.addListener(y.get(v), ...x);
              },
              hasListener(_, v) {
                return _.hasListener(y.get(v));
              },
              removeListener(_, v) {
                _.removeListener(y.get(v));
              },
            }),
            f = new o((y) =>
              typeof y != "function"
                ? y
                : function (v) {
                    let x = m(v, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    y(x);
                  },
            ),
            B = new o((y) =>
              typeof y != "function"
                ? y
                : function (v, x, S) {
                    let O = !1,
                      k,
                      h = new Promise((V) => {
                        k = function (P) {
                          ((O = !0), V(P));
                        };
                      }),
                      R;
                    try {
                      R = y(v, x, k);
                    } catch (V) {
                      R = Promise.reject(V);
                    }
                    let E = R !== !0 && g(R);
                    if (R !== !0 && !E && !O) return !1;
                    let U = (V) => {
                      V.then(
                        (P) => {
                          S(P);
                        },
                        (P) => {
                          let K;
                          (P && (P instanceof Error || typeof P.message == "string")
                            ? (K = P.message)
                            : (K = "An unexpected error occurred"),
                            S({ __mozWebExtensionPolyfillReject__: !0, message: K }));
                        },
                      ).catch((P) => {
                        console.error("Failed to send onMessage rejected reply", P);
                      });
                    };
                    return (U(E ? R : h), !0);
                  },
            ),
            c = ({ reject: y, resolve: _ }, v) => {
              s.runtime.lastError
                ? s.runtime.lastError.message === r
                  ? _()
                  : y(new Error(s.runtime.lastError.message))
                : v && v.__mozWebExtensionPolyfillReject__
                  ? y(new Error(v.message))
                  : _(v);
            },
            w = (y, _, v, ...x) => {
              if (x.length < _.minArgs)
                throw new Error(
                  `Expected at least ${_.minArgs} ${l(_.minArgs)} for ${y}(), got ${x.length}`,
                );
              if (x.length > _.maxArgs)
                throw new Error(
                  `Expected at most ${_.maxArgs} ${l(_.maxArgs)} for ${y}(), got ${x.length}`,
                );
              return new Promise((S, O) => {
                let k = c.bind(null, { resolve: S, reject: O });
                (x.push(k), v.sendMessage(...x));
              });
            },
            T = {
              devtools: { network: { onRequestFinished: d(f) } },
              runtime: {
                onMessage: d(B),
                onMessageExternal: d(B),
                sendMessage: w.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: w.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            F = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (i.privacy = { network: { "*": F }, services: { "*": F }, websites: { "*": F } }),
            m(s, T, i)
          );
        };
      e.exports = n(chrome);
    }
  });
});
var er = new BroadcastChannel("worker_service");
var z = {
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
function W(e, r = 0) {
  let n = 3735928559 ^ r,
    s = 1103547991 ^ r;
  for (let i = 0, o; i < e.length; i++)
    ((o = e.charCodeAt(i)), (n = Math.imul(n ^ o, 2654435761)), (s = Math.imul(s ^ o, 1597334677)));
  return (
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(s ^ (s >>> 13), 3266489909)),
    (s = Math.imul(s ^ (s >>> 16), 2246822507)),
    (s ^= Math.imul(n ^ (n >>> 13), 3266489909)),
    4294967296 * (2097151 & s) + (n >>> 0)
  );
}
var J = new BroadcastChannel(`injected-${W(window.location.href)}`);
function Q(e) {
  let r = z.FromTrustedInjectedToUntrusted;
  J.postMessage({ msg: e, channel: r });
}
function X(e) {
  let r = (n) => {
    let s = n.data.msg;
    n.data.channel == z.FromUntrustedInjectedToTrusted && e(s);
  };
  return (
    J.addEventListener("message", r),
    () => {
      J.removeEventListener("message", r);
    }
  );
}
var ie = be(oe(), 1);
async function Se(e, r) {
  await ie.default.runtime.sendMessage({ msg: e, channel: r });
}
function ae(e) {
  let r = z.FromInjectedToService;
  Se(e, r);
}
function C(e) {
  var r = String(e);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(e);
    } catch {}
  return r;
}
var Ee = (function () {
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
      (e.prototype.mapOr = function (r, n) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, n) {
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
        return new N(A);
      }),
      e
    );
  })(),
  A = new Ee();
Object.freeze(A);
var Me = (function () {
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
        return b(r(this.value));
      }),
      (e.prototype.mapOr = function (r, n) {
        return n(this.value);
      }),
      (e.prototype.mapOrElse = function (r, n) {
        return n(this.value);
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
        return I(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new N(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(C(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  b = Me,
  $;
(function (e) {
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
    for (var g = [], p = 0, l = i; p < l.length; p++) {
      var t = l[p];
      if (t.isSome()) g.push(t.value);
      else return t;
    }
    return b(g);
  }
  e.all = r;
  function n() {
    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
    for (var g = 0, p = i; g < p.length; g++) {
      var l = p[g];
      if (l.isSome()) return l;
    }
    return A;
  }
  e.any = n;
  function s(i) {
    return i instanceof b || i === A;
  }
  e.isOption = s;
})($ || ($ = {}));
var L = function (e, r, n) {
    if (n || arguments.length === 2)
      for (var s = 0, i = r.length, o; s < i; s++)
        (o || !(s in r)) && (o || (o = Array.prototype.slice.call(r, 0, s)), (o[s] = r[s]));
    return e.concat(o || Array.prototype.slice.call(r));
  },
  Ie = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.error = r;
      var n = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (n && n.length > 0 && n[0].includes("ErrImpl") && n.shift(),
        (this._stack = n.join(`
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
              C(this.error),
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
              C(this.error),
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
      (e.prototype.mapOr = function (r, n) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, n) {
        return r(this.error);
      }),
      (e.prototype.or = function (r) {
        return r;
      }),
      (e.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (e.prototype.toOption = function () {
        return A;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(C(this.error), ")");
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
        return new q(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var M = Ie,
  Oe = (function () {
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
        throw new Error("Tried to unwrap Ok: ".concat(C(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (r) {
        return new I(r(this.value));
      }),
      (e.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (e.prototype.mapErr = function (r) {
        return this;
      }),
      (e.prototype.mapOr = function (r, n) {
        return n(this.value);
      }),
      (e.prototype.mapOrElse = function (r, n) {
        return n(this.value);
      }),
      (e.prototype.or = function (r) {
        return this;
      }),
      (e.prototype.orElse = function (r) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return b(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(C(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new q(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var I = Oe,
  j;
(function (e) {
  function r(p) {
    for (var l = [], t = 1; t < arguments.length; t++) l[t - 1] = arguments[t];
    for (
      var a = p === void 0 ? [] : Array.isArray(p) ? p : L([p], l, !0), u = [], m = 0, d = a;
      m < d.length;
      m++
    ) {
      var f = d[m];
      if (f.isOk()) u.push(f.value);
      else return f;
    }
    return new I(u);
  }
  e.all = r;
  function n(p) {
    for (var l = [], t = 1; t < arguments.length; t++) l[t - 1] = arguments[t];
    for (
      var a = p === void 0 ? [] : Array.isArray(p) ? p : L([p], l, !0), u = [], m = 0, d = a;
      m < d.length;
      m++
    ) {
      var f = d[m];
      if (f.isOk()) return f;
      u.push(f.error);
    }
    return new M(u);
  }
  e.any = n;
  function s(p) {
    try {
      return new I(p());
    } catch (l) {
      return new M(l);
    }
  }
  e.wrap = s;
  function i(p) {
    try {
      return p()
        .then(function (l) {
          return new I(l);
        })
        .catch(function (l) {
          return new M(l);
        });
    } catch (l) {
      return Promise.resolve(new M(l));
    }
  }
  e.wrapAsync = i;
  function o(p) {
    return p.reduce(
      function (l, t) {
        var a = l[0],
          u = l[1];
        return t.isOk() ? [L(L([], a, !0), [t.value], !1), u] : [a, L(L([], u, !0), [t.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = o;
  function g(p) {
    return p instanceof M || p instanceof I;
  }
  e.isResult = g;
})(j || (j = {}));
var H = function (e, r, n, s) {
    function i(o) {
      return o instanceof n
        ? o
        : new n(function (g) {
            g(o);
          });
    }
    return new (n || (n = Promise))(function (o, g) {
      function p(a) {
        try {
          t(s.next(a));
        } catch (u) {
          g(u);
        }
      }
      function l(a) {
        try {
          t(s.throw(a));
        } catch (u) {
          g(u);
        }
      }
      function t(a) {
        a.done ? o(a.value) : i(a.value).then(p, l);
      }
      t((s = s.apply(e, r || [])).next());
    });
  },
  G = function (e, r) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      s,
      i,
      o,
      g;
    return (
      (g = { next: p(0), throw: p(1), return: p(2) }),
      typeof Symbol == "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function p(t) {
      return function (a) {
        return l([t, a]);
      };
    }
    function l(t) {
      if (s) throw new TypeError("Generator is already executing.");
      for (; g && ((g = 0), t[0] && (n = 0)), n; )
        try {
          if (
            ((s = 1),
            i &&
              (o =
                t[0] & 2
                  ? i.return
                  : t[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
              !(o = o.call(i, t[1])).done)
          )
            return o;
          switch (((i = 0), o && (t = [t[0] & 2, o.value]), t[0])) {
            case 0:
            case 1:
              o = t;
              break;
            case 4:
              return (n.label++, { value: t[1], done: !1 });
            case 5:
              (n.label++, (i = t[1]), (t = [0]));
              continue;
            case 7:
              ((t = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((o = n.trys), !(o = o.length > 0 && o[o.length - 1]) && (t[0] === 6 || t[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (t[0] === 3 && (!o || (t[1] > o[0] && t[1] < o[3]))) {
                n.label = t[1];
                break;
              }
              if (t[0] === 6 && n.label < o[1]) {
                ((n.label = o[1]), (o = t));
                break;
              }
              if (o && n.label < o[2]) {
                ((n.label = o[2]), n.ops.push(t));
                break;
              }
              (o[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          t = r.call(e, n);
        } catch (a) {
          ((t = [6, a]), (i = 0));
        } finally {
          s = o = 0;
        }
      if (t[0] & 5) throw t[1];
      return { value: t[0] ? t[1] : void 0, done: !0 };
    }
  },
  q = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var n = this;
        return this.thenInternal(function (s) {
          return H(n, void 0, void 0, function () {
            var i;
            return G(this, function (o) {
              return s.isErr() ? [2, s] : ((i = r(s.value)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var n = this;
        return this.thenInternal(function (s) {
          return H(n, void 0, void 0, function () {
            var i;
            return G(this, function (o) {
              switch (o.label) {
                case 0:
                  return s.isErr() ? [2, s] : ((i = I), [4, r(s.value)]);
                case 1:
                  return [2, i.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (r) {
        var n = this;
        return this.thenInternal(function (s) {
          return H(n, void 0, void 0, function () {
            var i;
            return G(this, function (o) {
              switch (o.label) {
                case 0:
                  return s.isOk() ? [2, s] : ((i = M), [4, r(s.error)]);
                case 1:
                  return [2, i.apply(void 0, [o.sent()])];
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
        var n = this;
        return this.thenInternal(function (s) {
          return H(n, void 0, void 0, function () {
            var i;
            return G(this, function (o) {
              return s.isOk() ? [2, s] : ((i = r(s.error)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new N(
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
var ee = function (e, r, n, s) {
    function i(o) {
      return o instanceof n
        ? o
        : new n(function (g) {
            g(o);
          });
    }
    return new (n || (n = Promise))(function (o, g) {
      function p(a) {
        try {
          t(s.next(a));
        } catch (u) {
          g(u);
        }
      }
      function l(a) {
        try {
          t(s.throw(a));
        } catch (u) {
          g(u);
        }
      }
      function t(a) {
        a.done ? o(a.value) : i(a.value).then(p, l);
      }
      t((s = s.apply(e, r || [])).next());
    });
  },
  re = function (e, r) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      s,
      i,
      o,
      g;
    return (
      (g = { next: p(0), throw: p(1), return: p(2) }),
      typeof Symbol == "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function p(t) {
      return function (a) {
        return l([t, a]);
      };
    }
    function l(t) {
      if (s) throw new TypeError("Generator is already executing.");
      for (; g && ((g = 0), t[0] && (n = 0)), n; )
        try {
          if (
            ((s = 1),
            i &&
              (o =
                t[0] & 2
                  ? i.return
                  : t[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
              !(o = o.call(i, t[1])).done)
          )
            return o;
          switch (((i = 0), o && (t = [t[0] & 2, o.value]), t[0])) {
            case 0:
            case 1:
              o = t;
              break;
            case 4:
              return (n.label++, { value: t[1], done: !1 });
            case 5:
              (n.label++, (i = t[1]), (t = [0]));
              continue;
            case 7:
              ((t = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((o = n.trys), !(o = o.length > 0 && o[o.length - 1]) && (t[0] === 6 || t[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (t[0] === 3 && (!o || (t[1] > o[0] && t[1] < o[3]))) {
                n.label = t[1];
                break;
              }
              if (t[0] === 6 && n.label < o[1]) {
                ((n.label = o[1]), (o = t));
                break;
              }
              if (o && n.label < o[2]) {
                ((n.label = o[2]), n.ops.push(t));
                break;
              }
              (o[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          t = r.call(e, n);
        } catch (a) {
          ((t = [6, a]), (i = 0));
        } finally {
          s = o = 0;
        }
      if (t[0] & 5) throw t[1];
      return { value: t[0] ? t[1] : void 0, done: !0 };
    }
  },
  N = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var n = this;
        return this.thenInternal(function (s) {
          return ee(n, void 0, void 0, function () {
            var i;
            return re(this, function (o) {
              return s.isNone() ? [2, s] : ((i = r(s.value)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var n = this;
        return this.thenInternal(function (s) {
          return ee(n, void 0, void 0, function () {
            var i;
            return re(this, function (o) {
              switch (o.label) {
                case 0:
                  return s.isNone() ? [2, s] : ((i = b), [4, r(s.value)]);
                case 1:
                  return [2, i.apply(void 0, [o.sent()])];
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
        var n = this;
        return this.thenInternal(function (s) {
          return ee(n, void 0, void 0, function () {
            var i;
            return re(this, function (o) {
              return s.isSome() ? [2, s] : ((i = r()), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (r) {
        return new q(
          this.promise.then(function (n) {
            return n.toResult(r);
          }),
        );
      }),
      (e.prototype.thenInternal = function (r) {
        return new e(this.promise.then(r));
      }),
      e
    );
  })();
function se(e) {
  return e.length > 0;
}
function D(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e)) return { __serde_tag: "array", __serde_val: e.map((r) => D(r)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let r = [];
    return (
      e.forEach((n, s) => {
        r.push([s, n]);
      }),
      { __serde_tag: "headers", __serde_val: r }
    );
  } else {
    if (e instanceof Set) return { __serde_tag: "set", __serde_val: [...e.values()].map(D) };
    if (e instanceof Map)
      return { __serde_tag: "map", __serde_val: [...e.entries()].map(([r, n]) => [D(r), D(n)]) };
    if (e instanceof RegExp) return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if ($.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: D(e.value) }
        : { __serde_tag: "none" };
    if (j.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: D(e.value) }
        : { __serde_tag: "err", __serde_val: D(e.error) };
    if (typeof e == "object") {
      let r = {};
      for (let [n, s] of Object.entries(e)) r[n] = D(s);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
var ke = ["mp4", "webm", "mkv"],
  Re = ["mp3", "m4a", "ogg"],
  Pe = [...ke, ...Re];
function le(e) {
  if (e == "mp3") return "mp4";
  if (e == "m4a") return "mp4";
  if (e == "ogg") return "webm";
  throw new Error("Unreachable");
}
var De = [
    { mime_reg: /(avc1|avc3).*/i, demuxer: "mp4", codec: "H264" },
    { mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i, demuxer: "mp4", codec: "H265" },
    { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
    { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
    { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
    { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
  ],
  Ce = [
    { mime_reg: /(aac|mp4a.40).*/i, demuxer: "m4a", codec: "AAC" },
    { mime_reg: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, demuxer: "mp3", codec: "MP3" },
    { mime_reg: /(opus|(mp4a\.ad.*))/i, demuxer: "ogg", codec: "Opus" },
    { mime_reg: /vorbis/i, demuxer: "ogg", codec: "Vorbis" },
  ];
function ue(e) {
  for (let r of De) if (r.mime_reg.test(e)) return b(r.demuxer);
  return A;
}
function me(e) {
  for (let r of Ce) if (r.mime_reg.test(e)) return b(r.demuxer);
  return A;
}
function Y(e, r) {
  try {
    if (e) return b(new URL(e, r));
  } catch {}
  return A;
}
function Ue(e, r) {
  let o = e.size.map((t) => t.height).unwrapOr(0),
    g = r.size.map((t) => t.height).unwrapOr(0),
    p = e.bitrate.unwrapOr(0),
    l = r.bitrate.unwrapOr(0);
  return o > g ? -1 : o < g ? 1 : p > l ? -1 : p < l ? 1 : 0;
}
function de(e) {
  return [...e.values()].sort((r, n) => Ue(r.quality, n.quality));
}
function ce(e) {
  function r(c, w) {
    return (c << w) | (c >>> (32 - w));
  }
  function n(c) {
    let w = c.length,
      T = (((w + 8) >> 6) + 1) * 16,
      F = new Array(T).fill(0);
    for (let y = 0; y < w; y++) F[y >> 2] |= c.charCodeAt(y) << ((y % 4) * 8);
    return ((F[w >> 2] |= 128 << ((w % 4) * 8)), (F[T - 2] = w * 8), F);
  }
  function s(c, w) {
    return (c + w) >>> 0;
  }
  function i(c, w, T) {
    return (c & w) | (~c & T);
  }
  function o(c, w, T) {
    return (c & T) | (w & ~T);
  }
  function g(c, w, T) {
    return c ^ w ^ T;
  }
  function p(c, w, T) {
    return w ^ (c | ~T);
  }
  function l(c, w, T, F, y, _, v, x) {
    let S = s(w, s(c(T, F, y), s(_, x)));
    return s(r(S, v), T);
  }
  let t = new Array(65);
  for (let c = 1; c <= 64; c++) t[c] = Math.floor(Math.abs(Math.sin(c)) * 2 ** 32);
  let a = 1732584193,
    u = 4023233417,
    m = 2562383102,
    d = 271733878,
    f = n(e);
  for (let c = 0; c < f.length; c += 16) {
    let w = a,
      T = u,
      F = m,
      y = d;
    ((a = l(i, a, u, m, d, f[c + 0], 7, t[1])),
      (d = l(i, d, a, u, m, f[c + 1], 12, t[2])),
      (m = l(i, m, d, a, u, f[c + 2], 17, t[3])),
      (u = l(i, u, m, d, a, f[c + 3], 22, t[4])),
      (a = l(i, a, u, m, d, f[c + 4], 7, t[5])),
      (d = l(i, d, a, u, m, f[c + 5], 12, t[6])),
      (m = l(i, m, d, a, u, f[c + 6], 17, t[7])),
      (u = l(i, u, m, d, a, f[c + 7], 22, t[8])),
      (a = l(i, a, u, m, d, f[c + 8], 7, t[9])),
      (d = l(i, d, a, u, m, f[c + 9], 12, t[10])),
      (m = l(i, m, d, a, u, f[c + 10], 17, t[11])),
      (u = l(i, u, m, d, a, f[c + 11], 22, t[12])),
      (a = l(i, a, u, m, d, f[c + 12], 7, t[13])),
      (d = l(i, d, a, u, m, f[c + 13], 12, t[14])),
      (m = l(i, m, d, a, u, f[c + 14], 17, t[15])),
      (u = l(i, u, m, d, a, f[c + 15], 22, t[16])),
      (a = l(o, a, u, m, d, f[c + 1], 5, t[17])),
      (d = l(o, d, a, u, m, f[c + 6], 9, t[18])),
      (m = l(o, m, d, a, u, f[c + 11], 14, t[19])),
      (u = l(o, u, m, d, a, f[c + 0], 20, t[20])),
      (a = l(o, a, u, m, d, f[c + 5], 5, t[21])),
      (d = l(o, d, a, u, m, f[c + 10], 9, t[22])),
      (m = l(o, m, d, a, u, f[c + 15], 14, t[23])),
      (u = l(o, u, m, d, a, f[c + 4], 20, t[24])),
      (a = l(o, a, u, m, d, f[c + 9], 5, t[25])),
      (d = l(o, d, a, u, m, f[c + 14], 9, t[26])),
      (m = l(o, m, d, a, u, f[c + 3], 14, t[27])),
      (u = l(o, u, m, d, a, f[c + 8], 20, t[28])),
      (a = l(o, a, u, m, d, f[c + 13], 5, t[29])),
      (d = l(o, d, a, u, m, f[c + 2], 9, t[30])),
      (m = l(o, m, d, a, u, f[c + 7], 14, t[31])),
      (u = l(o, u, m, d, a, f[c + 12], 20, t[32])),
      (a = l(g, a, u, m, d, f[c + 5], 4, t[33])),
      (d = l(g, d, a, u, m, f[c + 8], 11, t[34])),
      (m = l(g, m, d, a, u, f[c + 11], 16, t[35])),
      (u = l(g, u, m, d, a, f[c + 14], 23, t[36])),
      (a = l(g, a, u, m, d, f[c + 1], 4, t[37])),
      (d = l(g, d, a, u, m, f[c + 4], 11, t[38])),
      (m = l(g, m, d, a, u, f[c + 7], 16, t[39])),
      (u = l(g, u, m, d, a, f[c + 10], 23, t[40])),
      (a = l(g, a, u, m, d, f[c + 13], 4, t[41])),
      (d = l(g, d, a, u, m, f[c + 0], 11, t[42])),
      (m = l(g, m, d, a, u, f[c + 3], 16, t[43])),
      (u = l(g, u, m, d, a, f[c + 6], 23, t[44])),
      (a = l(g, a, u, m, d, f[c + 9], 4, t[45])),
      (d = l(g, d, a, u, m, f[c + 12], 11, t[46])),
      (m = l(g, m, d, a, u, f[c + 15], 16, t[47])),
      (u = l(g, u, m, d, a, f[c + 2], 23, t[48])),
      (a = l(p, a, u, m, d, f[c + 0], 6, t[49])),
      (d = l(p, d, a, u, m, f[c + 7], 10, t[50])),
      (m = l(p, m, d, a, u, f[c + 14], 15, t[51])),
      (u = l(p, u, m, d, a, f[c + 5], 21, t[52])),
      (a = l(p, a, u, m, d, f[c + 12], 6, t[53])),
      (d = l(p, d, a, u, m, f[c + 3], 10, t[54])),
      (m = l(p, m, d, a, u, f[c + 10], 15, t[55])),
      (u = l(p, u, m, d, a, f[c + 1], 21, t[56])),
      (a = l(p, a, u, m, d, f[c + 8], 6, t[57])),
      (d = l(p, d, a, u, m, f[c + 15], 10, t[58])),
      (m = l(p, m, d, a, u, f[c + 6], 15, t[59])),
      (u = l(p, u, m, d, a, f[c + 13], 21, t[60])),
      (a = l(p, a, u, m, d, f[c + 4], 6, t[61])),
      (d = l(p, d, a, u, m, f[c + 11], 10, t[62])),
      (m = l(p, m, d, a, u, f[c + 2], 15, t[63])),
      (u = l(p, u, m, d, a, f[c + 9], 21, t[64])),
      (a = s(a, w)),
      (u = s(u, T)),
      (m = s(m, F)),
      (d = s(d, y)));
  }
  function B(c) {
    return ("00000000" + c.toString(16)).slice(-8);
  }
  return B(a) + B(u) + B(m) + B(d);
}
var ze = /\.tv\/(?:[^/]+\/)?(?:play|video)\//,
  Le = /\.com\/video\//;
function Ve(e) {
  ae({ name: "on_media", data: { media: D(e) } });
}
function Ne(e, r) {
  let n = window.location.href.split("?")[0],
    i = b("mp4");
  return {
    type: "http_playlist",
    discovery_timestamp_ms: Date.now(),
    hash: `media_hash_${W(window.location.href)}`,
    initiator: Y(window.location.href),
    is_youtube: !1,
    prefered_entry: A,
    sent_headers: new Headers({ Referer: n }),
    title: A,
    thumbnail_url: A,
    cache: "default",
    has_drm: !1,
    supports_byte_ranges: !0,
    libav_demuxer: i,
    filename: A,
    extension: "mp4",
    playlist: e,
    duration: r.unwrapOr("unknown"),
  };
}
function qe(e, r) {
  let n = [],
    s = new Map();
  for (let i of e) {
    let o = Y(i.url ?? i.base_url);
    if (o.isNone()) continue;
    let g = me(i.codecs);
    if (g.isNone()) continue;
    let p = le(g.value),
      l = s.get(p);
    (!l || l.bitrate < i.bandwidth) &&
      s.set(p, {
        bitrate: i.bandwidth,
        url: o.value,
        size: Number.isFinite(i.size) ? b(i.size) : A,
      });
  }
  for (let i of r) {
    let o = Y(i.url ?? i.base_url);
    if (o.isNone()) continue;
    let g = ue(i.codecs);
    if (g.isNone()) continue;
    let p = A;
    i.height && i.width && (p = b({ width: i.width, height: i.height }));
    let l = { bitrate: b(i.bandwidth), size: p },
      t = Number.isFinite(i.size) ? b(i.size) : A,
      a = s.get(g.value);
    if (a) {
      let u = t.unwrapOr(0) + a.size.unwrapOr(0);
      n.push({
        quality: l,
        demuxer: g.value,
        size: u != 0 ? b(u) : A,
        av: { video: o.value, audio: a.url },
      });
    } else console.log(`No matching audio for ${o}`);
  }
  return ((n = de(n)), se(n) ? I(n) : M("No media for playlist"));
}
async function We() {
  let e = await new Promise((r) => {
    let n = X((s) => {
      s.name == "bilibili_tv_on_config" && (r(s.data), n());
    });
    Q({ name: "bilibili_tv_request_config", data: null });
  });
  if (e.ep_id)
    try {
      let r = await fetch(
        `https://api.bilibili.tv/intl/gateway/web/playurl?s_locale=en_US&platform=web&ep_id=${e.ep_id}&qn=64&type=0&device=wap&tf=0&spm_id=bstar-web.pgc-video-detail.0.0&from_spm_id=bstar-web.homepage.recommend.all`,
      );
      return I(JSON.parse(await r.text()));
    } catch (r) {
      return M(`Error fetching /web/playurl for episode id ${e} : ${r}`);
    }
  else if (e.ai_id)
    try {
      let r = await fetch(
        `https://api.bilibili.tv/intl/gateway/web/playurl?s_locale=en_US&platform=web&aid=${e.ai_id}&qn=64&type=0&device=wap&tf=0&spm_id=bstar-web.ugc-video-detail.0.0&from_spm_id=bstar-web.homepage.recommend.all`,
      );
      return I(JSON.parse(await r.text()));
    } catch (r) {
      return M(`Error fetching /web/playurl for episode id ${e} : ${r}`);
    }
  return M("Fatal : neither ai id nor ep id were found for current media");
}
var $e = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28,
  14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54,
  21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52,
];
async function je() {
  let e = await fetch("https://api.bilibili.com/x/web-interface/nav");
  if (e.ok) {
    let r = await e.json(),
      n = r.data.wbi_img.img_url,
      s = r.data.wbi_img.sub_url;
    if (n && s) {
      let i = n.substring(n.lastIndexOf("/") + 1, n.lastIndexOf(".")),
        o = n.substring(s.lastIndexOf("/") + 1, s.lastIndexOf(".")),
        g = `${i}${o}`,
        p = $e.map((l) => g.charAt(l)).join("");
      return I(p);
    }
  }
  return M("Error during WBI fetching");
}
async function He() {
  let e = await new Promise((s) => {
      let i = X((o) => {
        o.name == "bilibili_com_on_id" && (s(o.data), i());
      });
      Q({ name: "bilibili_com_request_id", data: null });
    }),
    r = new URLSearchParams({
      bvid: String(e.bvid),
      cid: String(e.cid),
      fnval: "4048",
      try_look: "1",
      wts: String(Math.round(Date.now() / 1e3)),
    }),
    n = await je();
  if (n.isOk()) {
    r.append("w_rid", ce(`${r.toString()}${n}`));
    let s = await fetch("https://api.bilibili.com/x/player/wbi/playurl?" + r.toString());
    if (s.ok) {
      let i = await s.json();
      return I(i);
    }
  }
  return M("Couldn't fetch bilibili com video data");
}
async function fe() {
  let e = window.location.href,
    r = A,
    n = A,
    s = A,
    i = A,
    o;
  if (Le.test(e)) {
    let p = await He();
    if (p.isErr()) {
      console.error(`Error fetching bilibili.com playlist data ${p.error}`);
      return;
    }
    ((i = Number.isFinite(p.value.data.timelength) ? b(p.value.data.timelength / 1e3) : A),
      (r = p.value.data.dash.audio ? b(p.value.data.dash.audio) : A),
      (n = p.value.data.dash.video ? b(p.value.data.dash.video) : A));
  } else if (ze.test(e)) {
    let p = await We();
    if (p.isErr()) {
      console.error(`Error during bilibili tv data fetch ${p.error}`);
      return;
    }
    ((r = p.value?.data?.playurl.audio_resource ? b(p.value?.data?.playurl.audio_resource) : A),
      (n = p.value.data.playurl.video
        ? b([...p.value.data.playurl.video].map((l) => l.video_resource))
        : A));
  }
  if (r.isNone() || n.isNone()) {
    console.error("Missing audio or video data to build playlist");
    return;
  }
  let g = qe(r.value, n.value);
  if (g.isErr()) {
    console.error(`Invalid bilibili tv data, playlist failed to build ${g.error}`);
    return;
  }
  if (((s = b(g.value)), s.isNone())) {
    console.log("No media playlist found");
    return;
  }
  ((o = Ne(s.value, i)), Ve(o));
}
fe();
var pe = document.location.href,
  Ge = new MutationObserver((e) => {
    pe !== document.location.href &&
      ((pe = document.location.href),
      setTimeout(() => {
        fe();
      }, 5e3));
  });
Ge.observe(document.body, { childList: !0, subtree: !0 });
