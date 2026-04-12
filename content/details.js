var cl = Object.create;
var Lr = Object.defineProperty;
var dl = Object.getOwnPropertyDescriptor;
var _l = Object.getOwnPropertyNames;
var ml = Object.getPrototypeOf,
  pl = Object.prototype.hasOwnProperty;
var Ha = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(e, { get: (r, o) => (typeof require < "u" ? require : r)[o] })
      : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var fl = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  we = (e, r) => {
    for (var o in r) Lr(e, o, { get: r[o], enumerable: !0 });
  },
  gl = (e, r, o, i) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let t of _l(r))
        !pl.call(e, t) &&
          t !== o &&
          Lr(e, t, { get: () => r[t], enumerable: !(i = dl(r, t)) || i.enumerable });
    return e;
  };
var Ya = (e, r, o) => (
  (o = e != null ? cl(ml(e)) : {}),
  gl(r || !e || !e.__esModule ? Lr(o, "default", { value: e, enumerable: !0 }) : o, e)
);
var Yr = fl((Hr, es) => {
  (function (e, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof Hr < "u") r(es);
    else {
      var o = { exports: {} };
      (r(o), (e.browser = o.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Hr, function (e) {
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
          let a = (g) => g && typeof g == "object" && typeof g.then == "function",
            s =
              (g, $) =>
              (...D) => {
                i.runtime.lastError
                  ? g.reject(new Error(i.runtime.lastError.message))
                  : $.singleCallbackArg || (D.length <= 1 && $.singleCallbackArg !== !1)
                    ? g.resolve(D[0])
                    : g.resolve(D);
              },
            l = (g) => (g == 1 ? "argument" : "arguments"),
            u = (g, $) =>
              function (V, ...I) {
                if (I.length < $.minArgs)
                  throw new Error(
                    `Expected at least ${$.minArgs} ${l($.minArgs)} for ${g}(), got ${I.length}`,
                  );
                if (I.length > $.maxArgs)
                  throw new Error(
                    `Expected at most ${$.maxArgs} ${l($.maxArgs)} for ${g}(), got ${I.length}`,
                  );
                return new Promise((R, B) => {
                  if ($.fallbackToNoCallback)
                    try {
                      V[g](...I, s({ resolve: R, reject: B }, $));
                    } catch (E) {
                      (console.warn(
                        `${g} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        E,
                      ),
                        V[g](...I),
                        ($.fallbackToNoCallback = !1),
                        ($.noCallback = !0),
                        R());
                    }
                  else
                    $.noCallback ? (V[g](...I), R()) : V[g](...I, s({ resolve: R, reject: B }, $));
                });
              },
            p = (g, $, D) =>
              new Proxy($, {
                apply(V, I, R) {
                  return D.call(I, g, ...R);
                },
              }),
            m = Function.call.bind(Object.prototype.hasOwnProperty),
            _ = (g, $ = {}, D = {}) => {
              let V = Object.create(null),
                I = {
                  has(B, E) {
                    return E in g || E in V;
                  },
                  get(B, E, G) {
                    if (E in V) return V[E];
                    if (!(E in g)) return;
                    let q = g[E];
                    if (typeof q == "function")
                      if (typeof $[E] == "function") q = p(g, g[E], $[E]);
                      else if (m(D, E)) {
                        let Pe = u(E, D[E]);
                        q = p(g, g[E], Pe);
                      } else q = q.bind(g);
                    else if (typeof q == "object" && q !== null && (m($, E) || m(D, E)))
                      q = _(q, $[E], D[E]);
                    else if (m(D, "*")) q = _(q, $[E], D["*"]);
                    else
                      return (
                        Object.defineProperty(V, E, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return g[E];
                          },
                          set(Pe) {
                            g[E] = Pe;
                          },
                        }),
                        q
                      );
                    return ((V[E] = q), q);
                  },
                  set(B, E, G, q) {
                    return (E in V ? (V[E] = G) : (g[E] = G), !0);
                  },
                  defineProperty(B, E, G) {
                    return Reflect.defineProperty(V, E, G);
                  },
                  deleteProperty(B, E) {
                    return Reflect.deleteProperty(V, E);
                  },
                },
                R = Object.create(g);
              return new Proxy(R, I);
            },
            d = (g) => ({
              addListener($, D, ...V) {
                $.addListener(g.get(D), ...V);
              },
              hasListener($, D) {
                return $.hasListener(g.get(D));
              },
              removeListener($, D) {
                $.removeListener(g.get(D));
              },
            }),
            h = new n((g) =>
              typeof g != "function"
                ? g
                : function (D) {
                    let V = _(D, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    g(V);
                  },
            ),
            b = new n((g) =>
              typeof g != "function"
                ? g
                : function (D, V, I) {
                    let R = !1,
                      B,
                      E = new Promise((Le) => {
                        B = function (ne) {
                          ((R = !0), Le(ne));
                        };
                      }),
                      G;
                    try {
                      G = g(D, V, B);
                    } catch (Le) {
                      G = Promise.reject(Le);
                    }
                    let q = G !== !0 && a(G);
                    if (G !== !0 && !q && !R) return !1;
                    let Pe = (Le) => {
                      Le.then(
                        (ne) => {
                          I(ne);
                        },
                        (ne) => {
                          let Fr;
                          (ne && (ne instanceof Error || typeof ne.message == "string")
                            ? (Fr = ne.message)
                            : (Fr = "An unexpected error occurred"),
                            I({ __mozWebExtensionPolyfillReject__: !0, message: Fr }));
                        },
                      ).catch((ne) => {
                        console.error("Failed to send onMessage rejected reply", ne);
                      });
                    };
                    return (Pe(q ? G : E), !0);
                  },
            ),
            z = ({ reject: g, resolve: $ }, D) => {
              i.runtime.lastError
                ? i.runtime.lastError.message === r
                  ? $()
                  : g(new Error(i.runtime.lastError.message))
                : D && D.__mozWebExtensionPolyfillReject__
                  ? g(new Error(D.message))
                  : $(D);
            },
            S = (g, $, D, ...V) => {
              if (V.length < $.minArgs)
                throw new Error(
                  `Expected at least ${$.minArgs} ${l($.minArgs)} for ${g}(), got ${V.length}`,
                );
              if (V.length > $.maxArgs)
                throw new Error(
                  `Expected at most ${$.maxArgs} ${l($.maxArgs)} for ${g}(), got ${V.length}`,
                );
              return new Promise((I, R) => {
                let B = z.bind(null, { resolve: I, reject: R });
                (V.push(B), D.sendMessage(...V));
              });
            },
            A = {
              devtools: { network: { onRequestFinished: d(h) } },
              runtime: {
                onMessage: d(b),
                onMessageExternal: d(b),
                sendMessage: S.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: S.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            k = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (t.privacy = { network: { "*": k }, services: { "*": k }, websites: { "*": k } }),
            _(i, A, t)
          );
        };
      e.exports = o(chrome);
    }
  });
});
var O = {};
(function () {
  function e(a) {
    if (
      ((a = a || [0, 97, 115, 109, 1, 0, 0, 0]),
      typeof WebAssembly != "object" || typeof WebAssembly.instantiate != "function")
    )
      return !1;
    try {
      var a = new WebAssembly.Module(new Uint8Array(a));
      if (a instanceof WebAssembly.Module)
        return new WebAssembly.Instance(a) instanceof WebAssembly.Instance;
    } catch {}
    return !1;
  }
  function r() {
    try {
      var a = new WebAssembly.Memory({ initial: 1, maximum: 1, shared: !0 });
      return a.buffer instanceof SharedArrayBuffer;
    } catch {}
    return !1;
  }
  var o = typeof process < "u";
  (O.base || ((O.base = import.meta.url), (O.base = O.base.replace(/\/[^\/]*$/, ""))),
    (O.isWebAssemblySupported = e),
    (O.isThreadingSupported = r));
  function i(a) {
    a = a || {};
    var s = !a.nowasm && e(),
      l = a.yesthreads && s && !a.nothreads && r();
    return s ? (l ? "thr" : "wasm") : "asm";
  }
  ((O.target = i),
    (O.VER = "6.5.7.1"),
    (O.CONFIG = "h264-aac-mp3"),
    (O.DBG = ""),
    (O.factories = {}));
  var t = {};
  ((t.i64tof64 = function (a, s) {
    return (!s && a >= 0) || (s === -1 && a < 0)
      ? a
      : s * 4294967296 + a + (a < 0 ? 4294967296 : 0);
  }),
    (t.f64toi64 = function (a) {
      return [~~a, Math.floor(a / 4294967296)];
    }),
    (t.i64ToBigInt = function (a, s) {
      var l = new DataView(new ArrayBuffer(8));
      return (l.setInt32(0, a, !0), l.setInt32(4, s, !0), l.getBigInt64(0, !0));
    }),
    (t.bigIntToi64 = function (a) {
      var s = new DataView(new ArrayBuffer(8));
      return (s.setBigInt64(0, a, !0), [s.getInt32(0, !0), s.getInt32(4, !0)]);
    }),
    (t.ff_channel_layout = function (a) {
      return a.channel_layout
        ? a.channel_layout
        : a.channels && a.channels !== 1
          ? (1 << a.channels) - 1
          : 4;
    }),
    (t.ff_channels = function (a) {
      if (a.channels) return a.channels;
      if (a.channel_layout) {
        for (var s = 0, l = a.channel_layout; l; ) ((s += l & 1), (l >>= 1));
        return s;
      } else return 1;
    }));
  function n(a, s) {
    typeof s === void 0 && (s = 0);
    var l = s;
    a.forEach(function (u) {
      t[u] = l++;
    });
  }
  ((t.AV_TIME_BASE = 1e6),
    (t.AV_OPT_SEARCH_CHILDREN = 1),
    n(
      [
        "AVMEDIA_TYPE_UNKNOWN",
        "AVMEDIA_TYPE_VIDEO",
        "AVMEDIA_TYPE_AUDIO",
        "AVMEDIA_TYPE_DATA",
        "AVMEDIA_TYPE_SUBTITLE",
        "AVMEDIA_TYPE_ATTACHMENT",
      ],
      -1,
    ),
    n(
      [
        "AV_SAMPLE_FMT_NONE",
        "AV_SAMPLE_FMT_U8",
        "AV_SAMPLE_FMT_S16",
        "AV_SAMPLE_FMT_S32",
        "AV_SAMPLE_FMT_FLT",
        "AV_SAMPLE_FMT_DBL",
        "AV_SAMPLE_FMT_U8P",
        "AV_SAMPLE_FMT_S16P",
        "AV_SAMPLE_FMT_S32P",
        "AV_SAMPLE_FMT_FLTP",
        "AV_SAMPLE_FMT_DBLP",
        "AV_SAMPLE_FMT_S64",
        "AV_SAMPLE_FMT_S64P",
        "AV_SAMPLE_FMT_NB",
      ],
      -1,
    ),
    n(
      [
        "AV_PIX_FMT_NONE",
        "AV_PIX_FMT_YUV420P",
        "AV_PIX_FMT_YUYV422",
        "AV_PIX_FMT_RGB24",
        "AV_PIX_FMT_BGR24",
        "AV_PIX_FMT_YUV422P",
        "AV_PIX_FMT_YUV444P",
        "AV_PIX_FMT_YUV410P",
        "AV_PIX_FMT_YUV411P",
        "AV_PIX_FMT_GRAY8",
        "AV_PIX_FMT_MONOWHITE",
        "AV_PIX_FMT_MONOBLACK",
        "AV_PIX_FMT_PAL8",
        "AV_PIX_FMT_YUVJ420P",
        "AV_PIX_FMT_YUVJ422P",
        "AV_PIX_FMT_YUVJ444P",
        "AV_PIX_FMT_UYVY422",
        "AV_PIX_FMT_UYYVYY411",
        "AV_PIX_FMT_BGR8",
        "AV_PIX_FMT_BGR4",
        "AV_PIX_FMT_BGR4_BYTE",
        "AV_PIX_FMT_RGB8",
        "AV_PIX_FMT_RGB4",
        "AV_PIX_FMT_RGB4_BYTE",
        "AV_PIX_FMT_NV12",
        "AV_PIX_FMT_NV21",
        "AV_PIX_FMT_ARGB",
        "AV_PIX_FMT_RGBA",
        "AV_PIX_FMT_ABGR",
        "AV_PIX_FMT_BGRA",
        "AV_PIX_FMT_GRAY16BE",
        "AV_PIX_FMT_GRAY16LE",
        "AV_PIX_FMT_YUV440P",
        "AV_PIX_FMT_YUVJ440P",
        "AV_PIX_FMT_YUVA420P",
        "AV_PIX_FMT_RGB48BE",
        "AV_PIX_FMT_RGB48LE",
        "AV_PIX_FMT_RGB565BE",
        "AV_PIX_FMT_RGB565LE",
        "AV_PIX_FMT_RGB555BE",
        "AV_PIX_FMT_RGB555LE",
        "AV_PIX_FMT_BGR565BE",
        "AV_PIX_FMT_BGR565LE",
        "AV_PIX_FMT_BGR555BE",
        "AV_PIX_FMT_BGR555LE",
      ],
      -1,
    ),
    (t.AVIO_FLAG_READ = 1),
    (t.AVIO_FLAG_WRITE = 2),
    (t.AVIO_FLAG_READ_WRITE = 3),
    (t.AVIO_FLAG_NONBLOCK = 8),
    (t.AVIO_FLAG_DIRECT = 32768),
    (t.AVFMT_FLAG_NOBUFFER = 64),
    (t.AVFMT_FLAG_FLUSH_PACKETS = 512),
    (t.AVSEEK_FLAG_BACKWARD = 1),
    (t.AVSEEK_FLAG_BYTE = 2),
    (t.AVSEEK_FLAG_ANY = 4),
    (t.AVSEEK_FLAG_FRAME = 8),
    (t.AVDISCARD_NONE = -16),
    (t.AVDISCARD_DEFAULT = 0),
    (t.AVDISCARD_NONREF = 8),
    (t.AVDISCARD_BIDIR = 16),
    (t.AVDISCARD_NONINTRA = 24),
    (t.AVDISCARD_NONKEY = 32),
    (t.AVDISCARD_ALL = 48),
    (t.AV_LOG_QUIET = -8),
    (t.AV_LOG_PANIC = 0),
    (t.AV_LOG_FATAL = 8),
    (t.AV_LOG_ERROR = 16),
    (t.AV_LOG_WARNING = 24),
    (t.AV_LOG_INFO = 32),
    (t.AV_LOG_VERBOSE = 40),
    (t.AV_LOG_DEBUG = 48),
    (t.AV_LOG_TRACE = 56),
    (t.AV_PKT_FLAG_KEY = 1),
    (t.AV_PKT_FLAG_CORRUPT = 2),
    (t.AV_PKT_FLAG_DISCARD = 4),
    (t.AV_PKT_FLAG_TRUSTED = 8),
    (t.AV_PKT_FLAG_DISPOSABLE = 16),
    n(
      [
        "E2BIG",
        "EPERM",
        "EADDRINUSE",
        "EADDRNOTAVAIL",
        "EAFNOSUPPORT",
        "EAGAIN",
        "EALREADY",
        "EBADF",
        "EBADMSG",
        "EBUSY",
        "ECANCELED",
        "ECHILD",
        "ECONNABORTED",
        "ECONNREFUSED",
        "ECONNRESET",
        "EDEADLOCK",
        "EDESTADDRREQ",
        "EDOM",
        "EDQUOT",
        "EEXIST",
        "EFAULT",
        "EFBIG",
        "EHOSTUNREACH",
        "EIDRM",
        "EILSEQ",
        "EINPROGRESS",
        "EINTR",
        "EINVAL",
        "EIO",
        "EISCONN",
        "EISDIR",
        "ELOOP",
        "EMFILE",
        "EMLINK",
        "EMSGSIZE",
        "EMULTIHOP",
        "ENAMETOOLONG",
        "ENETDOWN",
        "ENETRESET",
        "ENETUNREACH",
        "ENFILE",
        "ENOBUFS",
        "ENODEV",
        "ENOENT",
      ],
      1,
    ),
    (t.AVERROR_EOF = -541478725),
    Object.assign(O, t),
    (O.LibAV = function (a) {
      a = a || {};
      var s = a.base || O.base,
        l = i(a),
        u = "h264-aac-mp3";
      l === "asm" && (u = a.variant || O.variant || "h264-aac-mp3");
      var p = !0;
      p && (a.noes6 || O.noes6) && (p = !1);
      var m =
          a.toImport ||
          O.toImport ||
          s + "/libav-6.5.7.1-" + u + "." + l + "." + (p ? "mjs" : "js"),
        _,
        d = "direct";
      return (
        l === "thr" ? (d = "threads") : !o && !a.noworker && typeof Worker < "u" && (d = "worker"),
        Promise.all([])
          .then(function () {
            if (a.factory || O.factory) return a.factory || O.factory;
            if (O.factories[m]) return O.factories[m];
            if (d !== "worker")
              return p
                ? import(m).then(function (h) {
                    return ((O.factories[m] = h.default), h.default);
                  })
                : o
                  ? (O.factories[m] = Ha(m))
                  : typeof importScripts < "u"
                    ? (importScripts(m), (O.factories[m] = LibAVFactory))
                    : new Promise(function (h, b) {
                        var z = document.createElement("script");
                        ((z.src = m),
                          z.addEventListener("load", h),
                          z.addEventListener("error", b),
                          (z.async = !0),
                          document.body.appendChild(z));
                      }).then(function () {
                        return (O.factories[m] = LibAVFactory);
                      });
          })
          .then(function (h) {
            return d === "worker"
              ? ((_ = {}),
                (_.worker = new Worker(m, { type: p ? "module" : "classic" })),
                _.worker.postMessage({
                  config: { variant: a.variant || O.variant, wasmurl: a.wasmurl || O.wasmurl },
                }),
                new Promise(function (b, z) {
                  ((_.on = 1),
                    (_.handlers = {
                      onready: [
                        function () {
                          b();
                        },
                        null,
                      ],
                      onwrite: [
                        function (A) {
                          _.onwrite && _.onwrite.apply(_, A);
                        },
                        null,
                      ],
                      onread: [
                        function (A) {
                          try {
                            var k = null;
                            (_.onread && (k = _.onread.apply(_, A)),
                              k &&
                                k.then &&
                                k.catch &&
                                k.catch(function (g) {
                                  _.ff_reader_dev_send(A[0], null, { error: g });
                                }));
                          } catch (g) {
                            _.ff_reader_dev_send(A[0], null, { error: g });
                          }
                        },
                        null,
                      ],
                      onblockread: [
                        function (A) {
                          try {
                            var k = null;
                            (_.onblockread && (k = _.onblockread.apply(_, A)),
                              k &&
                                k.then &&
                                k.catch &&
                                k.catch(function (g) {
                                  _.ff_block_reader_dev_send(A[0], A[1], null, { error: g });
                                }));
                          } catch (g) {
                            _.ff_block_reader_dev_send(A[0], A[1], null, { error: g });
                          }
                        },
                        null,
                      ],
                    }),
                    (_.c = function () {
                      for (
                        var A = Array.prototype.slice.call(arguments), k = [], g = 0;
                        g < A.length;
                        g++
                      )
                        A[g] && A[g].libavjsTransfer && k.push.apply(k, A[g].libavjsTransfer);
                      return new Promise(function ($, D) {
                        var V = _.on++;
                        ((A = [V].concat(A)), (_.handlers[V] = [$, D]), _.worker.postMessage(A, k));
                      });
                    }));
                  function S(A) {
                    var k = A.data[0],
                      g = _.handlers[k];
                    g &&
                      (A.data[2] ? g[0](A.data[3]) : g[1](A.data[3]),
                      typeof k == "number" && delete _.handlers[k]);
                  }
                  ((_.worker.onmessage = S),
                    (_.terminate = function () {
                      _.worker.terminate();
                    }));
                }))
              : d === "threads"
                ? Promise.all([])
                    .then(function () {
                      return h({
                        wasmurl: a.wasmurl || O.wasmurl,
                        variant: a.variant || O.variant,
                      });
                    })
                    .then(function (b) {
                      _ = b;
                      var z = _.libavjs_create_main_thread(),
                        S = _.PThread.pthreads[z],
                        A = 0,
                        k = 1,
                        g = {},
                        $ = null,
                        D = new Promise(function (I) {
                          $ = I;
                        });
                      _.c = function () {
                        var I = Array.prototype.slice.call(arguments);
                        return new Promise(function (R, B) {
                          var E = k++;
                          ((I = [E].concat(I)),
                            (g[E] = [R, B]),
                            S.postMessage({ c: "libavjs_run", a: I }));
                        });
                      };
                      var V = S.onmessage;
                      return (
                        (S.onmessage = function (I) {
                          if (I.data && I.data.c === "libavjs_ret") {
                            var R = I.data.a,
                              B = g[R[0]];
                            B && (R[2] ? B[0](R[3]) : B[1](R[3]), delete g[R[0]]);
                          } else if (I.data && I.data.c === "libavjs_wait_reader")
                            if (_.readerDevReady(I.data.fd))
                              S.postMessage({ c: "libavjs_wait_reader", fd: I.data.fd });
                            else {
                              var E = _.fdName(I.data.fd),
                                G = _.ff_reader_dev_waiters[E];
                              (G || (G = _.ff_reader_dev_waiters[E] = []),
                                G.push(function () {
                                  S.postMessage({ c: "libavjs_wait_reader", fd: I.data.fd });
                                }));
                            }
                          else if (I.data && I.data.c === "libavjs_ready") $();
                          else return V.apply(this, arguments);
                        }),
                        (_.terminate = function () {
                          _.PThread.unusedWorkers
                            .concat(_.PThread.runningWorkers)
                            .forEach(function (I) {
                              I.terminate();
                            });
                        }),
                        D
                      );
                    })
                : Promise.all([])
                    .then(function () {
                      return h({
                        wasmurl: a.wasmurl || O.wasmurl,
                        variant: a.variant || O.variant,
                      });
                    })
                    .then(function (b) {
                      ((_ = b),
                        (_.worker = !1),
                        (_.c = function (z) {
                          var S = Array.prototype.slice.call(arguments, 1);
                          return new Promise(function (A, k) {
                            try {
                              A(_[z].apply(_, S));
                            } catch (g) {
                              k(g);
                            }
                          });
                        }),
                        (_.terminate = function () {}));
                    });
          })
          .then(function () {
            function h(A) {
              A.forEach(function (k) {
                _[k] = function () {
                  return _.c.apply(_, [k].concat(Array.prototype.slice.call(arguments)));
                };
              });
            }
            function b(A) {
              A.forEach(function (k) {
                var g = (_[k + "_sync"] = _[k]);
                _[k] = function () {
                  var $ = arguments;
                  return new Promise(function (D, V) {
                    try {
                      var I = g.apply(_, $);
                      typeof I == "object" && I !== null && I.then ? I.then(D).catch(V) : D(I);
                    } catch (R) {
                      V(R);
                    }
                  });
                };
              });
            }
            var z = [
                "av_get_bytes_per_sample",
                "av_compare_ts_js",
                "av_opt_set",
                "av_opt_set_int_list_js",
                "av_frame_alloc",
                "av_frame_clone",
                "av_frame_free",
                "av_frame_get_buffer",
                "av_frame_make_writable",
                "av_frame_ref",
                "av_frame_unref",
                "ff_frame_rescale_ts_js",
                "av_log_get_level",
                "av_log_set_level",
                "av_packet_alloc",
                "av_packet_clone",
                "av_packet_free",
                "av_packet_new_side_data",
                "av_packet_ref",
                "av_packet_rescale_ts_js",
                "av_packet_unref",
                "av_strdup",
                "av_buffersink_get_frame",
                "av_buffersink_get_time_base_num",
                "av_buffersink_get_time_base_den",
                "av_buffersink_set_frame_size",
                "ff_buffersink_set_ch_layout",
                "av_buffersrc_add_frame_flags",
                "avfilter_free",
                "avfilter_get_by_name",
                "avfilter_graph_alloc",
                "avfilter_graph_config",
                "avfilter_graph_create_filter_js",
                "avfilter_graph_free",
                "avfilter_graph_parse",
                "avfilter_inout_alloc",
                "avfilter_inout_free",
                "avfilter_link",
                "avcodec_alloc_context3",
                "avcodec_close",
                "avcodec_descriptor_get",
                "avcodec_descriptor_get_by_name",
                "avcodec_descriptor_next",
                "avcodec_find_decoder",
                "avcodec_find_decoder_by_name",
                "avcodec_find_encoder",
                "avcodec_find_encoder_by_name",
                "avcodec_flush_buffers",
                "avcodec_free_context",
                "avcodec_get_name",
                "avcodec_open2",
                "avcodec_open2_js",
                "avcodec_parameters_alloc",
                "avcodec_parameters_copy",
                "avcodec_parameters_free",
                "avcodec_parameters_from_context",
                "avcodec_parameters_to_context",
                "avcodec_receive_frame",
                "avcodec_receive_packet",
                "avcodec_send_frame",
                "avcodec_send_packet",
                "av_find_input_format",
                "avformat_alloc_context",
                "avformat_alloc_output_context2_js",
                "avformat_close_input",
                "avformat_find_stream_info",
                "avformat_flush",
                "avformat_free_context",
                "avformat_new_stream",
                "avformat_open_input",
                "avformat_open_input_js",
                "av_seek_frame",
                "avformat_seek_file",
                "avformat_seek_file_min",
                "avformat_seek_file_max",
                "avformat_seek_file_approx",
                "avformat_write_header",
                "avio_open2_js",
                "avio_close",
                "avio_flush",
                "av_find_best_stream",
                "av_get_sample_fmt_name",
                "av_grow_packet",
                "av_interleaved_write_frame",
                "av_packet_make_writable",
                "av_pix_fmt_desc_get",
                "av_read_frame",
                "av_shrink_packet",
                "av_write_frame",
                "av_write_trailer",
                "av_dict_copy_js",
                "av_dict_free",
                "av_dict_set_js",
                "sws_getContext",
                "sws_freeContext",
                "sws_scale_frame",
                "AVPacketSideData_data",
                "AVPacketSideData_size",
                "AVPacketSideData_type",
                "AVPixFmtDescriptor_comp_depth",
                "ff_error",
                "ff_nothing",
                "calloc",
                "close",
                "dup2",
                "free",
                "malloc",
                "mallinfo_uordblks",
                "open",
                "strerror",
                "libavjs_with_swscale",
                "libavjs_create_main_thread",
                "ffmpeg_main",
                "ffprobe_main",
                "ffmpeg_interrupt",
                "ffmpeg_get_out_time_ms",
                "ffmpeg_get_total_size_bytes",
                "jsfetch_set_read_timeout",
                "jsfetch_set_fetch_timeout",
                "jsfetch_set_initial_retry_delay",
                "jsfetch_set_bypass_cache",
                "AVFrame_channel_layout",
                "AVFrame_channel_layout_s",
                "AVFrame_channel_layouthi",
                "AVFrame_channel_layouthi_s",
                "AVFrame_channels",
                "AVFrame_channels_s",
                "AVFrame_channel_layoutmask",
                "AVFrame_channel_layoutmask_s",
                "AVFrame_ch_layout_nb_channels",
                "AVFrame_ch_layout_nb_channels_s",
                "AVFrame_crop_bottom",
                "AVFrame_crop_bottom_s",
                "AVFrame_crop_left",
                "AVFrame_crop_left_s",
                "AVFrame_crop_right",
                "AVFrame_crop_right_s",
                "AVFrame_crop_top",
                "AVFrame_crop_top_s",
                "AVFrame_data_a",
                "AVFrame_data_a_s",
                "AVFrame_format",
                "AVFrame_format_s",
                "AVFrame_height",
                "AVFrame_height_s",
                "AVFrame_key_frame",
                "AVFrame_key_frame_s",
                "AVFrame_linesize_a",
                "AVFrame_linesize_a_s",
                "AVFrame_nb_samples",
                "AVFrame_nb_samples_s",
                "AVFrame_pict_type",
                "AVFrame_pict_type_s",
                "AVFrame_pts",
                "AVFrame_pts_s",
                "AVFrame_ptshi",
                "AVFrame_ptshi_s",
                "AVFrame_sample_aspect_ratio_num",
                "AVFrame_sample_aspect_ratio_num_s",
                "AVFrame_sample_aspect_ratio_den",
                "AVFrame_sample_aspect_ratio_den_s",
                "AVFrame_sample_aspect_ratio_s",
                "AVFrame_sample_rate",
                "AVFrame_sample_rate_s",
                "AVFrame_time_base_num",
                "AVFrame_time_base_num_s",
                "AVFrame_time_base_den",
                "AVFrame_time_base_den_s",
                "AVFrame_time_base_s",
                "AVFrame_width",
                "AVFrame_width_s",
                "AVPixFmtDescriptor_flags",
                "AVPixFmtDescriptor_flags_s",
                "AVPixFmtDescriptor_log2_chroma_h",
                "AVPixFmtDescriptor_log2_chroma_h_s",
                "AVPixFmtDescriptor_log2_chroma_w",
                "AVPixFmtDescriptor_log2_chroma_w_s",
                "AVPixFmtDescriptor_nb_components",
                "AVPixFmtDescriptor_nb_components_s",
                "AVCodec_name",
                "AVCodec_sample_fmts",
                "AVCodec_sample_fmts_s",
                "AVCodec_sample_fmts_a",
                "AVCodec_sample_fmts_a_s",
                "AVCodec_supported_samplerates",
                "AVCodec_supported_samplerates_s",
                "AVCodec_supported_samplerates_a",
                "AVCodec_supported_samplerates_a_s",
                "AVCodec_type",
                "AVCodec_type_s",
                "AVCodecContext_codec_id",
                "AVCodecContext_codec_id_s",
                "AVCodecContext_codec_type",
                "AVCodecContext_codec_type_s",
                "AVCodecContext_bit_rate",
                "AVCodecContext_bit_rate_s",
                "AVCodecContext_bit_ratehi",
                "AVCodecContext_bit_ratehi_s",
                "AVCodecContext_channel_layout",
                "AVCodecContext_channel_layout_s",
                "AVCodecContext_channel_layouthi",
                "AVCodecContext_channel_layouthi_s",
                "AVCodecContext_channels",
                "AVCodecContext_channels_s",
                "AVCodecContext_channel_layoutmask",
                "AVCodecContext_channel_layoutmask_s",
                "AVCodecContext_ch_layout_nb_channels",
                "AVCodecContext_ch_layout_nb_channels_s",
                "AVCodecContext_extradata",
                "AVCodecContext_extradata_s",
                "AVCodecContext_extradata_size",
                "AVCodecContext_extradata_size_s",
                "AVCodecContext_frame_size",
                "AVCodecContext_frame_size_s",
                "AVCodecContext_framerate_num",
                "AVCodecContext_framerate_num_s",
                "AVCodecContext_framerate_den",
                "AVCodecContext_framerate_den_s",
                "AVCodecContext_framerate_s",
                "AVCodecContext_gop_size",
                "AVCodecContext_gop_size_s",
                "AVCodecContext_height",
                "AVCodecContext_height_s",
                "AVCodecContext_keyint_min",
                "AVCodecContext_keyint_min_s",
                "AVCodecContext_level",
                "AVCodecContext_level_s",
                "AVCodecContext_max_b_frames",
                "AVCodecContext_max_b_frames_s",
                "AVCodecContext_pix_fmt",
                "AVCodecContext_pix_fmt_s",
                "AVCodecContext_profile",
                "AVCodecContext_profile_s",
                "AVCodecContext_rc_max_rate",
                "AVCodecContext_rc_max_rate_s",
                "AVCodecContext_rc_max_ratehi",
                "AVCodecContext_rc_max_ratehi_s",
                "AVCodecContext_rc_min_rate",
                "AVCodecContext_rc_min_rate_s",
                "AVCodecContext_rc_min_ratehi",
                "AVCodecContext_rc_min_ratehi_s",
                "AVCodecContext_sample_aspect_ratio_num",
                "AVCodecContext_sample_aspect_ratio_num_s",
                "AVCodecContext_sample_aspect_ratio_den",
                "AVCodecContext_sample_aspect_ratio_den_s",
                "AVCodecContext_sample_aspect_ratio_s",
                "AVCodecContext_sample_fmt",
                "AVCodecContext_sample_fmt_s",
                "AVCodecContext_sample_rate",
                "AVCodecContext_sample_rate_s",
                "AVCodecContext_time_base_num",
                "AVCodecContext_time_base_num_s",
                "AVCodecContext_time_base_den",
                "AVCodecContext_time_base_den_s",
                "AVCodecContext_time_base_s",
                "AVCodecContext_qmax",
                "AVCodecContext_qmax_s",
                "AVCodecContext_qmin",
                "AVCodecContext_qmin_s",
                "AVCodecContext_width",
                "AVCodecContext_width_s",
                "AVCodecDescriptor_id",
                "AVCodecDescriptor_id_s",
                "AVCodecDescriptor_long_name",
                "AVCodecDescriptor_long_name_s",
                "AVCodecDescriptor_mime_types_a",
                "AVCodecDescriptor_mime_types_a_s",
                "AVCodecDescriptor_name",
                "AVCodecDescriptor_name_s",
                "AVCodecDescriptor_props",
                "AVCodecDescriptor_props_s",
                "AVCodecDescriptor_type",
                "AVCodecDescriptor_type_s",
                "AVCodecParameters_bit_rate",
                "AVCodecParameters_bit_rate_s",
                "AVCodecParameters_channel_layoutmask",
                "AVCodecParameters_channel_layoutmask_s",
                "AVCodecParameters_channels",
                "AVCodecParameters_channels_s",
                "AVCodecParameters_ch_layout_nb_channels",
                "AVCodecParameters_ch_layout_nb_channels_s",
                "AVCodecParameters_chroma_location",
                "AVCodecParameters_chroma_location_s",
                "AVCodecParameters_codec_id",
                "AVCodecParameters_codec_id_s",
                "AVCodecParameters_codec_tag",
                "AVCodecParameters_codec_tag_s",
                "AVCodecParameters_codec_type",
                "AVCodecParameters_codec_type_s",
                "AVCodecParameters_color_primaries",
                "AVCodecParameters_color_primaries_s",
                "AVCodecParameters_color_range",
                "AVCodecParameters_color_range_s",
                "AVCodecParameters_color_space",
                "AVCodecParameters_color_space_s",
                "AVCodecParameters_color_trc",
                "AVCodecParameters_color_trc_s",
                "AVCodecParameters_extradata",
                "AVCodecParameters_extradata_s",
                "AVCodecParameters_extradata_size",
                "AVCodecParameters_extradata_size_s",
                "AVCodecParameters_format",
                "AVCodecParameters_format_s",
                "AVCodecParameters_framerate_num",
                "AVCodecParameters_framerate_num_s",
                "AVCodecParameters_framerate_den",
                "AVCodecParameters_framerate_den_s",
                "AVCodecParameters_framerate_s",
                "AVCodecParameters_height",
                "AVCodecParameters_height_s",
                "AVCodecParameters_level",
                "AVCodecParameters_level_s",
                "AVCodecParameters_profile",
                "AVCodecParameters_profile_s",
                "AVCodecParameters_sample_rate",
                "AVCodecParameters_sample_rate_s",
                "AVCodecParameters_width",
                "AVCodecParameters_width_s",
                "AVPacket_data",
                "AVPacket_data_s",
                "AVPacket_dts",
                "AVPacket_dts_s",
                "AVPacket_dtshi",
                "AVPacket_dtshi_s",
                "AVPacket_duration",
                "AVPacket_duration_s",
                "AVPacket_durationhi",
                "AVPacket_durationhi_s",
                "AVPacket_flags",
                "AVPacket_flags_s",
                "AVPacket_pos",
                "AVPacket_pos_s",
                "AVPacket_poshi",
                "AVPacket_poshi_s",
                "AVPacket_pts",
                "AVPacket_pts_s",
                "AVPacket_ptshi",
                "AVPacket_ptshi_s",
                "AVPacket_side_data",
                "AVPacket_side_data_s",
                "AVPacket_side_data_elems",
                "AVPacket_side_data_elems_s",
                "AVPacket_size",
                "AVPacket_size_s",
                "AVPacket_stream_index",
                "AVPacket_stream_index_s",
                "AVPacket_time_base_num",
                "AVPacket_time_base_num_s",
                "AVPacket_time_base_den",
                "AVPacket_time_base_den_s",
                "AVPacket_time_base_s",
                "AVFormatContext_duration",
                "AVFormatContext_duration_s",
                "AVFormatContext_durationhi",
                "AVFormatContext_durationhi_s",
                "AVFormatContext_flags",
                "AVFormatContext_flags_s",
                "AVFormatContext_nb_streams",
                "AVFormatContext_nb_streams_s",
                "AVFormatContext_oformat",
                "AVFormatContext_oformat_s",
                "AVFormatContext_pb",
                "AVFormatContext_pb_s",
                "AVFormatContext_start_time",
                "AVFormatContext_start_time_s",
                "AVFormatContext_start_timehi",
                "AVFormatContext_start_timehi_s",
                "AVFormatContext_streams_a",
                "AVFormatContext_streams_a_s",
                "AVStream_codecpar",
                "AVStream_codecpar_s",
                "AVStream_discard",
                "AVStream_discard_s",
                "AVStream_duration",
                "AVStream_duration_s",
                "AVStream_durationhi",
                "AVStream_durationhi_s",
                "AVStream_time_base_num",
                "AVStream_time_base_num_s",
                "AVStream_time_base_den",
                "AVStream_time_base_den_s",
                "AVStream_time_base_s",
                "AVFilterInOut_filter_ctx",
                "AVFilterInOut_filter_ctx_s",
                "AVFilterInOut_name",
                "AVFilterInOut_name_s",
                "AVFilterInOut_next",
                "AVFilterInOut_next_s",
                "AVFilterInOut_pad_idx",
                "AVFilterInOut_pad_idx_s",
                "ff_init_encoder",
                "ff_init_decoder",
                "ff_free_encoder",
                "ff_free_decoder",
                "ff_encode_multi",
                "ff_decode_multi",
                "ff_set_packet",
                "ff_init_muxer",
                "ff_free_muxer",
                "ff_init_demuxer_file",
                "ff_write_multi",
                "ff_read_frame_multi",
                "ff_read_multi",
                "ff_init_filter_graph",
                "ff_filter_multi",
                "ff_decode_filter_multi",
                "ff_copyout_frame",
                "ff_copyout_frame_video",
                "ff_frame_video_packed_size",
                "ff_copyout_frame_video_packed",
                "ff_copyout_frame_video_imagedata",
                "ff_copyout_frame_ptr",
                "ff_copyin_frame",
                "ff_copyout_packet",
                "ff_copyout_packet_ptr",
                "ff_copyin_packet",
                "ff_copyout_codecpar",
                "ff_copyin_codecpar",
                "ff_malloc_int32_list",
                "ff_malloc_int64_list",
                "ffmpeg",
                "ffprobe",
                "av_frame_free_js",
                "av_packet_free_js",
                "avformat_close_input_js",
                "avcodec_free_context_js",
                "avcodec_parameters_free_js",
                "avfilter_graph_free_js",
                "avfilter_inout_free_js",
                "av_dict_free_js",
              ],
              S = [
                "readFile",
                "writeFile",
                "unlink",
                "unmount",
                "mkdev",
                "createLazyFile",
                "mkreaderdev",
                "mkblockreaderdev",
                "mkreadaheadfile",
                "unlinkreadaheadfile",
                "mkwriterdev",
                "mkstreamwriterdev",
                "mountwriterfs",
                "mkfsfhfile",
                "unlinkfsfhfile",
                "mkworkerfsfile",
                "unlinkworkerfsfile",
                "ff_reader_dev_send",
                "ff_block_reader_dev_send",
                "ff_reader_dev_waiting",
                "copyin_u8",
                "copyout_u8",
                "copyin_s16",
                "copyout_s16",
                "copyin_s32",
                "copyout_s32",
                "copyin_f32",
                "copyout_f32",
              ];
            return (
              (_.libavjsMode = d),
              d === "worker" ? (h(z), h(S)) : d === "threads" ? (h(z), b(S)) : (b(z), b(S)),
              Object.assign(_, t),
              _
            );
          })
      );
    }));
})();
var {
    base: tm,
    isWebAssemblySupported: rm,
    isThreadingSupported: nm,
    target: om,
    VER: im,
    CONFIG: am,
    DBG: sm,
    factories: um,
    i64tof64: lm,
    f64toi64: cm,
    i64ToBigInt: dm,
    bigIntToi64: _m,
    ff_channel_layout: mm,
    ff_channels: pm,
    AV_TIME_BASE: fm,
    AV_OPT_SEARCH_CHILDREN: gm,
    AVMEDIA_TYPE_UNKNOWN: hm,
    AVMEDIA_TYPE_VIDEO: vm,
    AVMEDIA_TYPE_AUDIO: ym,
    AVMEDIA_TYPE_DATA: bm,
    AVMEDIA_TYPE_SUBTITLE: wm,
    AVMEDIA_TYPE_ATTACHMENT: xm,
    AV_SAMPLE_FMT_NONE: Am,
    AV_SAMPLE_FMT_U8: km,
    AV_SAMPLE_FMT_S16: $m,
    AV_SAMPLE_FMT_S32: zm,
    AV_SAMPLE_FMT_FLT: Sm,
    AV_SAMPLE_FMT_DBL: Im,
    AV_SAMPLE_FMT_U8P: Pm,
    AV_SAMPLE_FMT_S16P: Dm,
    AV_SAMPLE_FMT_S32P: Em,
    AV_SAMPLE_FMT_FLTP: Vm,
    AV_SAMPLE_FMT_DBLP: Tm,
    AV_SAMPLE_FMT_S64: Om,
    AV_SAMPLE_FMT_S64P: jm,
    AV_SAMPLE_FMT_NB: Nm,
    AV_PIX_FMT_NONE: Mm,
    AV_PIX_FMT_YUV420P: Um,
    AV_PIX_FMT_YUYV422: Rm,
    AV_PIX_FMT_RGB24: Cm,
    AV_PIX_FMT_BGR24: Fm,
    AV_PIX_FMT_YUV422P: Lm,
    AV_PIX_FMT_YUV444P: Zm,
    AV_PIX_FMT_YUV410P: Bm,
    AV_PIX_FMT_YUV411P: qm,
    AV_PIX_FMT_GRAY8: Gm,
    AV_PIX_FMT_MONOWHITE: Hm,
    AV_PIX_FMT_MONOBLACK: Ym,
    AV_PIX_FMT_PAL8: Wm,
    AV_PIX_FMT_YUVJ420P: Km,
    AV_PIX_FMT_YUVJ422P: Xm,
    AV_PIX_FMT_YUVJ444P: Jm,
    AV_PIX_FMT_UYVY422: Qm,
    AV_PIX_FMT_UYYVYY411: ep,
    AV_PIX_FMT_BGR8: tp,
    AV_PIX_FMT_BGR4: rp,
    AV_PIX_FMT_BGR4_BYTE: np,
    AV_PIX_FMT_RGB8: op,
    AV_PIX_FMT_RGB4: ip,
    AV_PIX_FMT_RGB4_BYTE: ap,
    AV_PIX_FMT_NV12: sp,
    AV_PIX_FMT_NV21: up,
    AV_PIX_FMT_ARGB: lp,
    AV_PIX_FMT_RGBA: cp,
    AV_PIX_FMT_ABGR: dp,
    AV_PIX_FMT_BGRA: _p,
    AV_PIX_FMT_GRAY16BE: mp,
    AV_PIX_FMT_GRAY16LE: pp,
    AV_PIX_FMT_YUV440P: fp,
    AV_PIX_FMT_YUVJ440P: gp,
    AV_PIX_FMT_YUVA420P: hp,
    AV_PIX_FMT_RGB48BE: vp,
    AV_PIX_FMT_RGB48LE: yp,
    AV_PIX_FMT_RGB565BE: bp,
    AV_PIX_FMT_RGB565LE: wp,
    AV_PIX_FMT_RGB555BE: xp,
    AV_PIX_FMT_RGB555LE: Ap,
    AV_PIX_FMT_BGR565BE: kp,
    AV_PIX_FMT_BGR565LE: $p,
    AV_PIX_FMT_BGR555BE: zp,
    AV_PIX_FMT_BGR555LE: Sp,
    AVIO_FLAG_READ: Ip,
    AVIO_FLAG_WRITE: Pp,
    AVIO_FLAG_READ_WRITE: Dp,
    AVIO_FLAG_NONBLOCK: Ep,
    AVIO_FLAG_DIRECT: Vp,
    AVFMT_FLAG_NOBUFFER: Tp,
    AVFMT_FLAG_FLUSH_PACKETS: Op,
    AVSEEK_FLAG_BACKWARD: jp,
    AVSEEK_FLAG_BYTE: Np,
    AVSEEK_FLAG_ANY: Mp,
    AVSEEK_FLAG_FRAME: Up,
    AVDISCARD_NONE: Rp,
    AVDISCARD_DEFAULT: Cp,
    AVDISCARD_NONREF: Fp,
    AVDISCARD_BIDIR: Lp,
    AVDISCARD_NONINTRA: Zp,
    AVDISCARD_NONKEY: Bp,
    AVDISCARD_ALL: qp,
    AV_LOG_QUIET: Gp,
    AV_LOG_PANIC: Hp,
    AV_LOG_FATAL: Yp,
    AV_LOG_ERROR: Wp,
    AV_LOG_WARNING: Kp,
    AV_LOG_INFO: Xp,
    AV_LOG_VERBOSE: Jp,
    AV_LOG_DEBUG: Qp,
    AV_LOG_TRACE: ef,
    AV_PKT_FLAG_KEY: tf,
    AV_PKT_FLAG_CORRUPT: rf,
    AV_PKT_FLAG_DISCARD: nf,
    AV_PKT_FLAG_TRUSTED: of,
    AV_PKT_FLAG_DISPOSABLE: af,
    E2BIG: sf,
    EPERM: uf,
    EADDRINUSE: lf,
    EADDRNOTAVAIL: cf,
    EAFNOSUPPORT: df,
    EAGAIN: _f,
    EALREADY: mf,
    EBADF: pf,
    EBADMSG: ff,
    EBUSY: gf,
    ECANCELED: hf,
    ECHILD: vf,
    ECONNABORTED: yf,
    ECONNREFUSED: bf,
    ECONNRESET: wf,
    EDEADLOCK: xf,
    EDESTADDRREQ: Af,
    EDOM: kf,
    EDQUOT: $f,
    EEXIST: zf,
    EFAULT: Sf,
    EFBIG: If,
    EHOSTUNREACH: Pf,
    EIDRM: Df,
    EILSEQ: Ef,
    EINPROGRESS: Vf,
    EINTR: Tf,
    EINVAL: Of,
    EIO: jf,
    EISCONN: Nf,
    EISDIR: Mf,
    ELOOP: Uf,
    EMFILE: Rf,
    EMLINK: Cf,
    EMSGSIZE: Ff,
    EMULTIHOP: Lf,
    ENAMETOOLONG: Zf,
    ENETDOWN: Bf,
    ENETRESET: qf,
    ENETUNREACH: Gf,
    ENFILE: Hf,
    ENOBUFS: Yf,
    ENODEV: Wf,
    ENOENT: Kf,
    AVERROR_EOF: Xf,
    LibAV: Jf,
  } = O,
  Dt = O;
var Et = class {
  constructor() {
    this.filename_writable_map = new Map();
  }
  async open(r) {
    let i = await (await navigator.storage.getDirectory()).getFileHandle(r, { create: !0 }),
      t = await i.createSyncAccessHandle();
    this.filename_writable_map.set(r, { writable: t, handle: i, size: 0 });
  }
  async onwrite(r, o, i) {
    let t = this.filename_writable_map.get(r);
    if (!t) {
      console.error("Onwrite called for unknown file");
      return;
    }
    (await t.writable.write(i, { at: o }), (t.size += i.length));
  }
  async close(r) {
    let o = this.filename_writable_map.get(r);
    if (!o) return (console.error("Finish called for unknown file"), 0);
    await o.writable.close();
    let i = this.filename_writable_map.get(r)?.size;
    return (this.filename_writable_map.delete(r), i || 0);
  }
  async remove(r) {
    await (await navigator.storage.getDirectory()).removeEntry(r);
  }
};
function ge(e) {
  var r = String(e);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(e);
    } catch {}
  return r;
}
var hl = (function () {
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
        return H(r);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ze(K);
      }),
      e
    );
  })(),
  K = new hl();
Object.freeze(K);
var vl = (function () {
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
        return re(r(this.value));
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
        return X(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ze(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(ge(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  re = vl,
  Vt;
(function (e) {
  function r() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = [], s = 0, l = t; s < l.length; s++) {
      var u = l[s];
      if (u.isSome()) a.push(u.value);
      else return u;
    }
    return re(a);
  }
  e.all = r;
  function o() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = 0, s = t; a < s.length; a++) {
      var l = s[a];
      if (l.isSome()) return l;
    }
    return K;
  }
  e.any = o;
  function i(t) {
    return t instanceof re || t === K;
  }
  e.isOption = i;
})(Vt || (Vt = {}));
var De = function (e, r, o) {
    if (o || arguments.length === 2)
      for (var i = 0, t = r.length, n; i < t; i++)
        (n || !(i in r)) && (n || (n = Array.prototype.slice.call(r, 0, i)), (n[i] = r[i]));
    return e.concat(n || Array.prototype.slice.call(r));
  },
  yl = (function () {
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
              ge(this.error),
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
              ge(this.error),
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
        return new H(r(this.error));
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
        return K;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(ge(this.error), ")");
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
        return new Be(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var H = yl,
  bl = (function () {
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
        throw new Error("Tried to unwrap Ok: ".concat(ge(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (r) {
        return new X(r(this.value));
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
        return re(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(ge(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new Be(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var X = bl,
  Tt;
(function (e) {
  function r(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var p = s === void 0 ? [] : Array.isArray(s) ? s : De([s], l, !0), m = [], _ = 0, d = p;
      _ < d.length;
      _++
    ) {
      var h = d[_];
      if (h.isOk()) m.push(h.value);
      else return h;
    }
    return new X(m);
  }
  e.all = r;
  function o(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var p = s === void 0 ? [] : Array.isArray(s) ? s : De([s], l, !0), m = [], _ = 0, d = p;
      _ < d.length;
      _++
    ) {
      var h = d[_];
      if (h.isOk()) return h;
      m.push(h.error);
    }
    return new H(m);
  }
  e.any = o;
  function i(s) {
    try {
      return new X(s());
    } catch (l) {
      return new H(l);
    }
  }
  e.wrap = i;
  function t(s) {
    try {
      return s()
        .then(function (l) {
          return new X(l);
        })
        .catch(function (l) {
          return new H(l);
        });
    } catch (l) {
      return Promise.resolve(new H(l));
    }
  }
  e.wrapAsync = t;
  function n(s) {
    return s.reduce(
      function (l, u) {
        var p = l[0],
          m = l[1];
        return u.isOk()
          ? [De(De([], p, !0), [u.value], !1), m]
          : [p, De(De([], m, !0), [u.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = n;
  function a(s) {
    return s instanceof H || s instanceof X;
  }
  e.isResult = a;
})(Tt || (Tt = {}));
var Ot = function (e, r, o, i) {
    function t(n) {
      return n instanceof o
        ? n
        : new o(function (a) {
            a(n);
          });
    }
    return new (o || (o = Promise))(function (n, a) {
      function s(p) {
        try {
          u(i.next(p));
        } catch (m) {
          a(m);
        }
      }
      function l(p) {
        try {
          u(i.throw(p));
        } catch (m) {
          a(m);
        }
      }
      function u(p) {
        p.done ? n(p.value) : t(p.value).then(s, l);
      }
      u((i = i.apply(e, r || [])).next());
    });
  },
  jt = function (e, r) {
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
      return function (p) {
        return l([u, p]);
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
        } catch (p) {
          ((u = [6, p]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Be = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Ot(o, void 0, void 0, function () {
            var t;
            return jt(this, function (n) {
              return i.isErr() ? [2, i] : ((t = r(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Ot(o, void 0, void 0, function () {
            var t;
            return jt(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((t = X), [4, r(i.value)]);
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
          return Ot(o, void 0, void 0, function () {
            var t;
            return jt(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((t = H), [4, r(i.error)]);
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
          return Ot(o, void 0, void 0, function () {
            var t;
            return jt(this, function (n) {
              return i.isOk() ? [2, i] : ((t = r(i.error)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Ze(
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
var Zr = function (e, r, o, i) {
    function t(n) {
      return n instanceof o
        ? n
        : new o(function (a) {
            a(n);
          });
    }
    return new (o || (o = Promise))(function (n, a) {
      function s(p) {
        try {
          u(i.next(p));
        } catch (m) {
          a(m);
        }
      }
      function l(p) {
        try {
          u(i.throw(p));
        } catch (m) {
          a(m);
        }
      }
      function u(p) {
        p.done ? n(p.value) : t(p.value).then(s, l);
      }
      u((i = i.apply(e, r || [])).next());
    });
  },
  Br = function (e, r) {
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
      return function (p) {
        return l([u, p]);
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
        } catch (p) {
          ((u = [6, p]), (t = 0));
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
          return Zr(o, void 0, void 0, function () {
            var t;
            return Br(this, function (n) {
              return i.isNone() ? [2, i] : ((t = r(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Zr(o, void 0, void 0, function () {
            var t;
            return Br(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((t = re), [4, r(i.value)]);
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
          return Zr(o, void 0, void 0, function () {
            var t;
            return Br(this, function (n) {
              return i.isSome() ? [2, i] : ((t = r()), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (r) {
        return new Be(
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
var Wa = ["mp4", "webm", "mkv"],
  Ka = ["mp3", "m4a", "ogg"],
  Xa = [...Wa, ...Ka];
function qr(e) {
  return Wa.includes(e);
}
function Gr(e) {
  return Ka.includes(e);
}
function Ja(e, r) {
  return qr(e) ? Ee(e, r) : wl(e);
}
function wl(e) {
  if (e == "mp3") return "mp3";
  if (e == "m4a") return "mp3";
  if (e == "ogg") return "mp3";
  throw new Error("Unreachable");
}
function Ee(e, r) {
  if (e == "mp4") return r;
  if (e == "webm") return "mkv";
  if (e == "mkv") return "mkv";
  throw new Error("Unreachable");
}
function Qa(e, r) {
  if (e.prefered_entry.isSome() && e.playlist[e.prefered_entry.value])
    return e.prefered_entry.value;
  if (r)
    for (let o of Xa) {
      let i = 0;
      for (let { quality: t, demuxer: n } of e.playlist) {
        if (o == n && t.size.isSome() && t.size.value.height == r) return i;
        i++;
      }
    }
  else return 0;
  return 0;
}
var El = Ya(Yr(), 1);
var Nt = "";
function ts() {
  return { default_: { max_length: 64, template: "%title" }, rules: [] };
}
function he(e) {
  let r = e
    .trim()
    .normalize("NFC")
    .replace(/^\.+/gu, "")
    .replace(/[^\p{L}\p{N}\p{M}\-\s_\.]/gu, "")
    .replace(/-+/gu, "-")
    .replace(/\s+/gu, " ")
    .replace(/^(\s|-)+/gu, "")
    .substring(0, 190)
    .replace(/(\s|-)+$/gu, "");
  return r.length == 0 ? "no-name" : r;
}
function Xr(e, r) {
  let { template: o, selector: i, max_length: t, replace: n, subdir: a } = r.smartnaming_rule,
    s,
    l;
  if (
    ((s = e.title
      .or(r.title)
      .or(e.filename)
      .map((m) => m.trim())
      .unwrapOr(void 0)),
    r.url.isSome())
  ) {
    let m = r.url.value.host.split(".").slice(-2);
    (m.pop(), (l = m[0]));
  }
  let u = o,
    p = (m, _) => {
      _
        ? (u = u.replace(m, _))
        : ((u = u.replace(` ${m}`, "")),
          (u = u.replace(`-${m}`, "")),
          (u = u.replace(`_${m}`, "")),
          (u = u.replace(`${m}`, "")));
    };
  (p("%title", s),
    p("%hostname", l),
    p("%selector", i),
    (u = u || s || l || ""),
    (u = he(u).substring(0, t)));
  for (let m of n) u = u.replaceAll(m.from, m.to);
  return ((u = he(u).substring(0, t)), { basename: u, subdir: a });
}
function ee(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let r = {};
    for (let [o, i] of Object.entries(e.__serde_val)) {
      let t = i;
      r[o] = ee(t);
    }
    return r;
  } else {
    if (e.__serde_tag == "map") return new Map(e.__serde_val.map(([r, o]) => [ee(r), ee(o)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(ee));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(ee);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex") return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return re(ee(e.__serde_val));
    if (e.__serde_tag == "none") return K;
    if (e.__serde_tag == "ok") return X(ee(e.__serde_val));
    if (e.__serde_tag == "err") return H(ee(e.__serde_val));
    throw new Error("Unreachable");
  }
}
function oe(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e)) return { __serde_tag: "array", __serde_val: e.map((r) => oe(r)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let r = [];
    return (
      e.forEach((o, i) => {
        r.push([i, o]);
      }),
      { __serde_tag: "headers", __serde_val: r }
    );
  } else {
    if (e instanceof Set) return { __serde_tag: "set", __serde_val: [...e.values()].map(oe) };
    if (e instanceof Map)
      return { __serde_tag: "map", __serde_val: [...e.entries()].map(([r, o]) => [oe(r), oe(o)]) };
    if (e instanceof RegExp) return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if (Vt.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: oe(e.value) }
        : { __serde_tag: "none" };
    if (Tt.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: oe(e.value) }
        : { __serde_tag: "err", __serde_val: oe(e.error) };
    if (typeof e == "object") {
      let r = {};
      for (let [o, i] of Object.entries(e)) r[o] = oe(i);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
function ue(e) {
  return ee(oe(e));
}
function Vl(e, r, o, i, t, n, a, s) {
  t = he(t);
  let l = `download_${crypto.randomUUID()}`,
    u = ue(e.sent_headers),
    p = e.playlist[a].index;
  return r || Gr(e.playlist[a].demuxer)
    ? {
        download_id: l,
        headers: u,
        good_basename: t,
        subdir: n,
        save_as: o,
        will_use_jsfetch: !0,
        muxer: "mp3",
        strategy: "mpd_audio_only",
        url: e.master_url,
        entry: p,
        duration: e.duration,
        extension: "mp3",
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      }
    : {
        download_id: l,
        headers: u,
        good_basename: t,
        subdir: n,
        save_as: o,
        will_use_jsfetch: !0,
        muxer: i,
        strategy: "mpd_audio_video_one_source",
        url: e.master_url,
        entry: p,
        duration: e.duration,
        extension: i,
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      };
}
function Tl(e, r, o, i, t, n, a, s) {
  t = he(t);
  let l = `download_${crypto.randomUUID()}`,
    u = e.playlist[a],
    p = ue(e.sent_headers);
  if (u.av.video == !1)
    return {
      download_id: l,
      headers: p,
      good_basename: t,
      subdir: n,
      save_as: o,
      will_use_jsfetch: !1,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: u.av.audio.url,
      content_length: u.av.audio.content_length,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
  if (r)
    return u.av.audio
      ? {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: u.av.audio.url,
          content_length: u.av.audio.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: u.av.video.url,
          content_length: u.av.video.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  {
    let m = u.demuxer,
      _ = Ee(m, i);
    return u.av.audio
      ? {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: _,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_two_sources",
          url: u.av.video.url,
          content_length: u.av.video.content_length,
          url_audio: u.av.audio.url,
          audio_content_length: u.av.audio.content_length,
          extension: _,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: _,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_one_source",
          url: u.av.video.url,
          content_length: u.av.video.content_length,
          extension: _,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  }
}
function Ol(e, r, o, i, t, n, a, s) {
  t = he(t);
  let l = `download_${crypto.randomUUID()}`,
    u = e.playlist[a],
    p = ue(e.sent_headers),
    m = e.duration;
  if (u.av.video == !1)
    return {
      download_id: l,
      headers: p,
      good_basename: t,
      subdir: n,
      duration: m,
      save_as: o,
      will_use_jsfetch: !1,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: u.av.audio,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
  if (r)
    return u.av.audio
      ? {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          duration: m,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: u.av.audio,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          duration: m,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: u.av.video,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  {
    let _ = u.demuxer,
      d = Ee(_, i);
    return u.av.audio
      ? {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: d,
          duration: m,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_two_sources",
          url: u.av.video,
          url_audio: u.av.audio,
          extension: d,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: l,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: d,
          duration: m,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_one_source",
          url: u.av.video,
          extension: d,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  }
}
function jl(e, r, o, i, t, n, a) {
  t = he(t);
  let s = `download_${crypto.randomUUID()}`,
    l = ue(e.sent_headers),
    u = e.url,
    p = e.duration;
  if (r || Gr(e.demuxer))
    return {
      save_as: o,
      subdir: n,
      duration: p,
      will_use_jsfetch: !0,
      download_id: s,
      headers: l,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: u,
      good_basename: t,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
  {
    let m = Ee(e.demuxer, i);
    return {
      download_id: s,
      headers: l,
      subdir: n,
      duration: p,
      will_use_jsfetch: !0,
      save_as: o,
      strategy: "m3u8_audio_video_one_source",
      muxer: m,
      url: u,
      good_basename: t,
      extension: m,
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
  }
}
function Nl(e, r, o, i, t, n, a, s) {
  t = he(t);
  let l = `download_${crypto.randomUUID()}`,
    u = e.playlist[a],
    p = e.extension == "flv" && u.size.isNone(),
    m = (e.libav_demuxer.isSome() && qr(e.libav_demuxer.value) && e.supports_byte_ranges) || p;
  if (r)
    return {
      save_as: o,
      download_id: l,
      subdir: n,
      will_use_jsfetch: !0,
      headers: ue(e.sent_headers),
      strategy: "http_strip_audio_jsfetch",
      url: u.av.video,
      good_basename: t,
      muxer: "mp3",
      extension: "mp3",
      is_youtube: e.is_youtube,
      size: u.size,
      throttle: s,
      cache: e.cache,
    };
  if (m) {
    let _,
      d = "";
    if (
      (e.libav_demuxer.isSome()
        ? ((_ = Ja(e.libav_demuxer.value, i)), (d = _))
        : ((_ = i), (d = i)),
      u.av.audio)
    ) {
      let h = u.demuxer,
        b = Ee(h, i);
      return {
        save_as: o,
        download_id: l,
        subdir: n,
        will_use_jsfetch: !0,
        headers: ue(e.sent_headers),
        strategy: "http_audio_video_two_sources_jsfetch",
        url: u.av.video,
        url_audio: u.av.audio,
        good_basename: t,
        muxer: b,
        extension: b,
        size: u.size,
        duration: e.duration,
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      };
    } else
      return {
        save_as: o,
        download_id: l,
        subdir: n,
        will_use_jsfetch: !0,
        headers: ue(e.sent_headers),
        strategy: "http_audio_video_one_source_jsfetch",
        url: u.av.video,
        good_basename: t,
        muxer: _,
        extension: d,
        size: u.size,
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      };
  } else
    return {
      save_as: o,
      download_id: l,
      subdir: n,
      will_use_jsfetch: !1,
      headers: ue(e.sent_headers),
      strategy: "http_audio_video_one_source",
      url: e.playlist[0].av.video,
      good_basename: t,
      size: u.size,
      extension: e.extension,
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
}
function Jr(e, r, o, i, t, n, a, s) {
  if (e.type == "http_playlist") return Nl(e, r, o, i, t, n, a, s);
  if (e.type == "m3u8") return jl(e, r, o, i, t, n, s);
  if (e.type == "m3u8_playlist") return Ol(e, r, o, i, t, n, a, s);
  if (e.type == "youtube_format") {
    if (typeof a == "number") return Tl(e, r, o, i, t, n, a, s);
    throw "Missing playlist_entry";
  } else if (e.type == "mpd_playlist") {
    if (typeof a == "number") return Vl(e, r, o, i, t, n, a, s);
    throw "Missing playlist_entry";
  } else throw new Error("Unreachable");
}
var Ge = "google";
var bh = Ge != "mozilla",
  Qr = Ge == "mozilla";
var wh = atob(
  "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
);
var ie = "https://github.com/Atamol/FreeVDH",
  xh = `${ie}/v2/entitlements/validate`,
  Ah = `${ie}/v2/entitlements/activate`,
  kh = `${ie}/v2/entitlements/migrate`,
  $h = `${ie}/v2/reports`,
  zh = `${ie}/issue`,
  Sh = `${ie}/premium`,
  Ih = `${ie}/manage-subscription`,
  Ph = `${ie}/welcome/${Ge}`,
  Dh = `${ie}/changelog/${Ge}`,
  Eh = `${ie}/goodbye/${Ge}`;
var Ga = Ya(Yr(), 1);
var v = {};
we(v, {
  $brand: () => Mt,
  $input: () => fi,
  $output: () => pi,
  NEVER: () => x_,
  ZodAny: () => hu,
  ZodArray: () => bu,
  ZodBase64: () => za,
  ZodBase64URL: () => Sa,
  ZodBigInt: () => Pt,
  ZodBigIntFormat: () => Da,
  ZodBoolean: () => It,
  ZodCIDRv4: () => ka,
  ZodCIDRv6: () => $a,
  ZodCUID: () => ha,
  ZodCUID2: () => va,
  ZodCatch: () => Cu,
  ZodCustom: () => Ur,
  ZodDate: () => jr,
  ZodDefault: () => Ou,
  ZodDiscriminatedUnion: () => wu,
  ZodE164: () => Ia,
  ZodEmail: () => ma,
  ZodEmoji: () => fa,
  ZodEnum: () => zt,
  ZodError: () => hd,
  ZodFile: () => Eu,
  ZodGUID: () => Ir,
  ZodIPv4: () => xa,
  ZodIPv6: () => Aa,
  ZodISODate: () => kr,
  ZodISODateTime: () => Ar,
  ZodISODuration: () => zr,
  ZodISOTime: () => $r,
  ZodIntersection: () => xu,
  ZodIssueCode: () => b_,
  ZodJWT: () => Pa,
  ZodKSUID: () => wa,
  ZodLazy: () => Gu,
  ZodLiteral: () => Pu,
  ZodMap: () => zu,
  ZodNaN: () => Lu,
  ZodNanoID: () => ga,
  ZodNever: () => vu,
  ZodNonOptional: () => Ma,
  ZodNull: () => fu,
  ZodNullable: () => Tu,
  ZodNumber: () => St,
  ZodNumberFormat: () => Fe,
  ZodObject: () => Nr,
  ZodOptional: () => Na,
  ZodPipe: () => Ua,
  ZodPrefault: () => Nu,
  ZodPromise: () => Yu,
  ZodReadonly: () => Zu,
  ZodRealError: () => Ce,
  ZodRecord: () => Oa,
  ZodSet: () => Su,
  ZodString: () => Tr,
  ZodStringFormat: () => U,
  ZodSuccess: () => Ru,
  ZodSymbol: () => mu,
  ZodTemplateLiteral: () => qu,
  ZodTransform: () => Vu,
  ZodTuple: () => ku,
  ZodType: () => T,
  ZodULID: () => ya,
  ZodURL: () => pa,
  ZodUUID: () => pe,
  ZodUndefined: () => pu,
  ZodUnion: () => Ta,
  ZodUnknown: () => Ea,
  ZodVoid: () => yu,
  ZodXID: () => ba,
  _ZodString: () => _a,
  _default: () => ju,
  any: () => Kd,
  array: () => Va,
  base64: () => Md,
  base64url: () => Ud,
  bigint: () => qd,
  boolean: () => _u,
  catch: () => Fu,
  check: () => Wu,
  cidrv4: () => jd,
  cidrv6: () => Nd,
  clone: () => J,
  coerce: () => Ra,
  config: () => F,
  core: () => me,
  cuid: () => Id,
  cuid2: () => Pd,
  custom: () => f_,
  date: () => Jd,
  discriminatedUnion: () => n_,
  e164: () => Rd,
  email: () => yd,
  emoji: () => zd,
  endsWith: () => vt,
  enum: () => Iu,
  file: () => l_,
  flattenError: () => nt,
  float32: () => Fd,
  float64: () => Ld,
  formatError: () => ot,
  function: () => ea,
  getErrorMap: () => k_,
  globalRegistry: () => se,
  gt: () => de,
  gte: () => W,
  guid: () => bd,
  includes: () => gt,
  instanceof: () => g_,
  int: () => da,
  int32: () => Zd,
  int64: () => Gd,
  intersection: () => Au,
  ipv4: () => Td,
  ipv6: () => Od,
  iso: () => Sr,
  json: () => v_,
  jwt: () => Cd,
  keyof: () => Qd,
  ksuid: () => Vd,
  lazy: () => Hu,
  length: () => Re,
  literal: () => Du,
  locales: () => ct,
  looseObject: () => r_,
  lowercase: () => pt,
  lt: () => ce,
  lte: () => te,
  map: () => a_,
  maxLength: () => Ue,
  maxSize: () => Me,
  mime: () => yt,
  minLength: () => be,
  minSize: () => Ie,
  multipleOf: () => Se,
  nan: () => __,
  nanoid: () => Sd,
  nativeEnum: () => u_,
  negative: () => qi,
  never: () => Or,
  nonnegative: () => Hi,
  nonoptional: () => Uu,
  nonpositive: () => Gi,
  normalize: () => bt,
  null: () => gu,
  nullable: () => Er,
  nullish: () => c_,
  number: () => du,
  object: () => e_,
  optional: () => Dr,
  overwrite: () => _e,
  parse: () => aa,
  parseAsync: () => sa,
  partialRecord: () => i_,
  pipe: () => Vr,
  positive: () => Bi,
  prefault: () => Mu,
  preprocess: () => y_,
  prettifyError: () => mn,
  promise: () => p_,
  property: () => Yi,
  readonly: () => Bu,
  record: () => $u,
  refine: () => Ku,
  regex: () => mt,
  regexes: () => $e,
  registry: () => er,
  safeParse: () => ua,
  safeParseAsync: () => la,
  set: () => s_,
  setErrorMap: () => A_,
  size: () => _t,
  startsWith: () => ht,
  strictObject: () => t_,
  string: () => ca,
  stringbool: () => h_,
  success: () => d_,
  superRefine: () => Xu,
  symbol: () => Yd,
  templateLiteral: () => m_,
  toJSONSchema: () => ta,
  toLowerCase: () => xt,
  toUpperCase: () => At,
  transform: () => ja,
  treeifyError: () => _n,
  trim: () => wt,
  tuple: () => o_,
  uint32: () => Bd,
  uint64: () => Hd,
  ulid: () => Dd,
  undefined: () => Wd,
  union: () => Mr,
  unknown: () => Pr,
  uppercase: () => ft,
  url: () => $d,
  uuid: () => wd,
  uuidv4: () => xd,
  uuidv6: () => Ad,
  uuidv7: () => kd,
  void: () => Xd,
  xid: () => Ed,
});
var me = {};
we(me, {
  $ZodAny: () => Fo,
  $ZodArray: () => ut,
  $ZodAsyncError: () => ae,
  $ZodBase64: () => Vo,
  $ZodBase64URL: () => To,
  $ZodBigInt: () => Xt,
  $ZodBigIntFormat: () => Mo,
  $ZodBoolean: () => st,
  $ZodCIDRv4: () => Po,
  $ZodCIDRv6: () => Do,
  $ZodCUID: () => vo,
  $ZodCUID2: () => yo,
  $ZodCatch: () => si,
  $ZodCheck: () => C,
  $ZodCheckBigIntFormat: () => Hn,
  $ZodCheckEndsWith: () => io,
  $ZodCheckGreaterThan: () => Ht,
  $ZodCheckIncludes: () => no,
  $ZodCheckLengthEquals: () => Qn,
  $ZodCheckLessThan: () => Gt,
  $ZodCheckLowerCase: () => to,
  $ZodCheckMaxLength: () => Xn,
  $ZodCheckMaxSize: () => Yn,
  $ZodCheckMimeType: () => so,
  $ZodCheckMinLength: () => Jn,
  $ZodCheckMinSize: () => Wn,
  $ZodCheckMultipleOf: () => qn,
  $ZodCheckNumberFormat: () => Gn,
  $ZodCheckOverwrite: () => uo,
  $ZodCheckProperty: () => ao,
  $ZodCheckRegex: () => eo,
  $ZodCheckSizeEquals: () => Kn,
  $ZodCheckStartsWith: () => oo,
  $ZodCheckStringFormat: () => Oe,
  $ZodCheckUpperCase: () => ro,
  $ZodCustom: () => mi,
  $ZodDate: () => Bo,
  $ZodDefault: () => ni,
  $ZodDiscriminatedUnion: () => Go,
  $ZodE164: () => Oo,
  $ZodEmail: () => po,
  $ZodEmoji: () => go,
  $ZodEnum: () => Xo,
  $ZodError: () => rt,
  $ZodFile: () => Qo,
  $ZodFunction: () => xr,
  $ZodGUID: () => _o,
  $ZodIPv4: () => So,
  $ZodIPv6: () => Io,
  $ZodISODate: () => ko,
  $ZodISODateTime: () => Ao,
  $ZodISODuration: () => zo,
  $ZodISOTime: () => $o,
  $ZodIntersection: () => Ho,
  $ZodJWT: () => jo,
  $ZodKSUID: () => xo,
  $ZodLazy: () => _i,
  $ZodLiteral: () => Jo,
  $ZodMap: () => Wo,
  $ZodNaN: () => ui,
  $ZodNanoID: () => ho,
  $ZodNever: () => Lo,
  $ZodNonOptional: () => ii,
  $ZodNull: () => Co,
  $ZodNullable: () => ri,
  $ZodNumber: () => Kt,
  $ZodNumberFormat: () => No,
  $ZodObject: () => qo,
  $ZodOptional: () => ti,
  $ZodPipe: () => lt,
  $ZodPrefault: () => oi,
  $ZodPromise: () => di,
  $ZodReadonly: () => li,
  $ZodRealError: () => Te,
  $ZodRecord: () => Yo,
  $ZodRegistry: () => je,
  $ZodSet: () => Ko,
  $ZodString: () => at,
  $ZodStringFormat: () => M,
  $ZodSuccess: () => ai,
  $ZodSymbol: () => Uo,
  $ZodTemplateLiteral: () => ci,
  $ZodTransform: () => ei,
  $ZodTuple: () => ze,
  $ZodType: () => P,
  $ZodULID: () => bo,
  $ZodURL: () => fo,
  $ZodUUID: () => mo,
  $ZodUndefined: () => Ro,
  $ZodUnion: () => Jt,
  $ZodUnknown: () => ye,
  $ZodVoid: () => Zo,
  $ZodXID: () => wo,
  $brand: () => Mt,
  $constructor: () => c,
  $input: () => fi,
  $output: () => pi,
  Doc: () => it,
  JSONSchema: () => uu,
  JSONSchemaGenerator: () => $t,
  _any: () => Ui,
  _array: () => kt,
  _base64: () => vr,
  _base64url: () => yr,
  _bigint: () => Ei,
  _boolean: () => Pi,
  _catch: () => cd,
  _cidrv4: () => gr,
  _cidrv6: () => hr,
  _coercedBigint: () => Vi,
  _coercedBoolean: () => Di,
  _coercedDate: () => Li,
  _coercedNumber: () => Ai,
  _coercedString: () => hi,
  _cuid: () => lr,
  _cuid2: () => cr,
  _custom: () => Xi,
  _date: () => Fi,
  _default: () => sd,
  _discriminatedUnion: () => Kc,
  _e164: () => br,
  _email: () => tr,
  _emoji: () => sr,
  _endsWith: () => vt,
  _enum: () => td,
  _file: () => Ki,
  _float32: () => $i,
  _float64: () => zi,
  _gt: () => de,
  _gte: () => W,
  _guid: () => dt,
  _includes: () => gt,
  _int: () => ki,
  _int32: () => Si,
  _int64: () => Ti,
  _intersection: () => Xc,
  _ipv4: () => pr,
  _ipv6: () => fr,
  _isoDate: () => yi,
  _isoDateTime: () => vi,
  _isoDuration: () => wi,
  _isoTime: () => bi,
  _jwt: () => wr,
  _ksuid: () => mr,
  _lazy: () => pd,
  _length: () => Re,
  _literal: () => nd,
  _lowercase: () => pt,
  _lt: () => ce,
  _lte: () => te,
  _map: () => Qc,
  _max: () => te,
  _maxLength: () => Ue,
  _maxSize: () => Me,
  _mime: () => yt,
  _min: () => W,
  _minLength: () => be,
  _minSize: () => Ie,
  _multipleOf: () => Se,
  _nan: () => Zi,
  _nanoid: () => ur,
  _nativeEnum: () => rd,
  _negative: () => qi,
  _never: () => Ri,
  _nonnegative: () => Hi,
  _nonoptional: () => ud,
  _nonpositive: () => Gi,
  _normalize: () => bt,
  _null: () => Mi,
  _nullable: () => ad,
  _number: () => xi,
  _optional: () => id,
  _overwrite: () => _e,
  _parse: () => Rt,
  _parseAsync: () => Ft,
  _pipe: () => dd,
  _positive: () => Bi,
  _promise: () => fd,
  _property: () => Yi,
  _readonly: () => _d,
  _record: () => Jc,
  _refine: () => Ji,
  _regex: () => mt,
  _safeParse: () => Zt,
  _safeParseAsync: () => Bt,
  _set: () => ed,
  _size: () => _t,
  _startsWith: () => ht,
  _string: () => gi,
  _stringbool: () => Qi,
  _success: () => ld,
  _symbol: () => ji,
  _templateLiteral: () => md,
  _toLowerCase: () => xt,
  _toUpperCase: () => At,
  _transform: () => od,
  _trim: () => wt,
  _tuple: () => Wi,
  _uint32: () => Ii,
  _uint64: () => Oi,
  _ulid: () => dr,
  _undefined: () => Ni,
  _union: () => Wc,
  _unknown: () => Ne,
  _uppercase: () => ft,
  _url: () => ar,
  _uuid: () => rr,
  _uuidv4: () => nr,
  _uuidv6: () => or,
  _uuidv7: () => ir,
  _void: () => Ci,
  _xid: () => _r,
  clone: () => J,
  config: () => F,
  flattenError: () => nt,
  formatError: () => ot,
  function: () => ea,
  globalConfig: () => He,
  globalRegistry: () => se,
  isValidBase64: () => Eo,
  isValidBase64URL: () => ws,
  isValidJWT: () => xs,
  locales: () => ct,
  parse: () => Ct,
  parseAsync: () => Lt,
  prettifyError: () => mn,
  regexes: () => $e,
  registry: () => er,
  safeParse: () => pn,
  safeParseAsync: () => fn,
  toDotPath: () => ns,
  toJSONSchema: () => ta,
  treeifyError: () => _n,
  util: () => w,
  version: () => lo,
});
function c(e, r, o) {
  function i(s, l) {
    var u;
    (Object.defineProperty(s, "_zod", { value: s._zod ?? {}, enumerable: !1 }),
      (u = s._zod).traits ?? (u.traits = new Set()),
      s._zod.traits.add(e),
      r(s, l));
    for (let p in a.prototype)
      p in s || Object.defineProperty(s, p, { value: a.prototype[p].bind(s) });
    ((s._zod.constr = a), (s._zod.def = l));
  }
  let t = o?.Parent ?? Object;
  class n extends t {}
  Object.defineProperty(n, "name", { value: e });
  function a(s) {
    var l;
    let u = o?.Parent ? new n() : this;
    (i(u, s), (l = u._zod).deferred ?? (l.deferred = []));
    for (let p of u._zod.deferred) p();
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
var Mt = Symbol("zod_brand"),
  ae = class extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  },
  He = {};
function F(e) {
  return (e && Object.assign(He, e), He);
}
var w = {};
we(w, {
  BIGINT_FORMAT_RANGES: () => cn,
  Class: () => tn,
  NUMBER_FORMAT_RANGES: () => ln,
  aborted: () => Ae,
  allowsEval: () => an,
  assert: () => Fl,
  assertEqual: () => Ml,
  assertIs: () => Rl,
  assertNever: () => Cl,
  assertNotEqual: () => Ul,
  assignProp: () => on,
  cached: () => Ke,
  cleanEnum: () => Ql,
  cleanRegex: () => Xe,
  clone: () => J,
  createTransparentProxy: () => Gl,
  defineLazy: () => j,
  esc: () => xe,
  escapeRegex: () => le,
  extend: () => Wl,
  finalizeIssue: () => Q,
  floatSafeRemainder: () => nn,
  getElementAtPath: () => Ll,
  getEnumValues: () => We,
  getLengthableOrigin: () => tt,
  getParsedType: () => ql,
  getSizableOrigin: () => et,
  isObject: () => Ve,
  isPlainObject: () => Je,
  issue: () => dn,
  joinValues: () => f,
  jsonStringifyReplacer: () => rn,
  merge: () => Kl,
  normalizeParams: () => y,
  nullish: () => ve,
  numKeys: () => Bl,
  omit: () => Yl,
  optionalKeys: () => un,
  partial: () => Xl,
  pick: () => Hl,
  prefixIssues: () => Y,
  primitiveTypes: () => sn,
  promiseAllObject: () => Zl,
  propertyKeyTypes: () => Qe,
  randomString: () => Ut,
  required: () => Jl,
  stringifyPrimitive: () => x,
  unwrapMessage: () => Ye,
});
function Ml(e) {
  return e;
}
function Ul(e) {
  return e;
}
function Rl(e) {}
function Cl(e) {
  throw new Error();
}
function Fl(e) {}
function We(e) {
  let r = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, t]) => r.indexOf(+i) === -1)
    .map(([i, t]) => t);
}
function f(e, r = "|") {
  return e.map((o) => x(o)).join(r);
}
function rn(e, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Ke(e) {
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
function ve(e) {
  return e == null;
}
function Xe(e) {
  let r = e.startsWith("^") ? 1 : 0,
    o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(r, o);
}
function nn(e, r) {
  let o = (e.toString().split(".")[1] || "").length,
    i = (r.toString().split(".")[1] || "").length,
    t = o > i ? o : i,
    n = Number.parseInt(e.toFixed(t).replace(".", "")),
    a = Number.parseInt(r.toFixed(t).replace(".", ""));
  return (n % a) / 10 ** t;
}
function j(e, r, o) {
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
function on(e, r, o) {
  Object.defineProperty(e, r, { value: o, writable: !0, enumerable: !0, configurable: !0 });
}
function Ll(e, r) {
  return r ? r.reduce((o, i) => o?.[i], e) : e;
}
function Zl(e) {
  let r = Object.keys(e),
    o = r.map((i) => e[i]);
  return Promise.all(o).then((i) => {
    let t = {};
    for (let n = 0; n < r.length; n++) t[r[n]] = i[n];
    return t;
  });
}
function Ut(e = 10) {
  let r = "abcdefghijklmnopqrstuvwxyz",
    o = "";
  for (let i = 0; i < e; i++) o += r[Math.floor(Math.random() * r.length)];
  return o;
}
function xe(e) {
  return JSON.stringify(e);
}
function Ve(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var an = Ke(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Je(e) {
  if (Ve(e) === !1) return !1;
  let r = e.constructor;
  if (r === void 0) return !0;
  let o = r.prototype;
  return !(Ve(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Bl(e) {
  let r = 0;
  for (let o in e) Object.prototype.hasOwnProperty.call(e, o) && r++;
  return r;
}
var ql = (e) => {
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
  Qe = new Set(["string", "number", "symbol"]),
  sn = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function le(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function J(e, r, o) {
  let i = new e._zod.constr(r ?? e._zod.def);
  return ((!r || o?.parent) && (i._zod.parent = e), i);
}
function y(e) {
  let r = e;
  if (!r) return {};
  if (typeof r == "string") return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return (delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r);
}
function Gl(e) {
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
function x(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function un(e) {
  return Object.keys(e).filter(
    (r) => e[r]._zod.optin === "optional" && e[r]._zod.optout === "optional",
  );
}
var ln = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  cn = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Hl(e, r) {
  let o = {},
    i = e._zod.def;
  for (let t in r) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    r[t] && (o[t] = i.shape[t]);
  }
  return J(e, { ...e._zod.def, shape: o, checks: [] });
}
function Yl(e, r) {
  let o = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let t in r) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    r[t] && delete o[t];
  }
  return J(e, { ...e._zod.def, shape: o, checks: [] });
}
function Wl(e, r) {
  let o = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...r };
      return (on(this, "shape", i), i);
    },
    checks: [],
  };
  return J(e, o);
}
function Kl(e, r) {
  return J(e, {
    ...e._zod.def,
    get shape() {
      let o = { ...e._zod.def.shape, ...r._zod.def.shape };
      return (on(this, "shape", o), o);
    },
    catchall: r._zod.def.catchall,
    checks: [],
  });
}
function Xl(e, r, o) {
  let i = r._zod.def.shape,
    t = { ...i };
  if (o)
    for (let n in o) {
      if (!(n in i)) throw new Error(`Unrecognized key: "${n}"`);
      o[n] && (t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n]);
    }
  else for (let n in i) t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n];
  return J(r, { ...r._zod.def, shape: t, checks: [] });
}
function Jl(e, r, o) {
  let i = r._zod.def.shape,
    t = { ...i };
  if (o)
    for (let n in o) {
      if (!(n in t)) throw new Error(`Unrecognized key: "${n}"`);
      o[n] && (t[n] = new e({ type: "nonoptional", innerType: i[n] }));
    }
  else for (let n in i) t[n] = new e({ type: "nonoptional", innerType: i[n] });
  return J(r, { ...r._zod.def, shape: t, checks: [] });
}
function Ae(e, r = 0) {
  for (let o = r; o < e.issues.length; o++) if (e.issues[o].continue !== !0) return !0;
  return !1;
}
function Y(e, r) {
  return r.map((o) => {
    var i;
    return ((i = o).path ?? (i.path = []), o.path.unshift(e), o);
  });
}
function Ye(e) {
  return typeof e == "string" ? e : e?.message;
}
function Q(e, r, o) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let t =
      Ye(e.inst?._zod.def?.error?.(e)) ??
      Ye(r?.error?.(e)) ??
      Ye(o.customError?.(e)) ??
      Ye(o.localeError?.(e)) ??
      "Invalid input";
    i.message = t;
  }
  return (delete i.inst, delete i.continue, r?.reportInput || delete i.input, i);
}
function et(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function tt(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function dn(...e) {
  let [r, o, i] = e;
  return typeof r == "string" ? { message: r, code: "custom", input: o, inst: i } : { ...r };
}
function Ql(e) {
  return Object.entries(e)
    .filter(([r, o]) => Number.isNaN(Number.parseInt(r, 10)))
    .map((r) => r[1]);
}
var tn = class {
  constructor(...r) {}
};
var rs = (e, r) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: r, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(r, rn, 2);
        },
        enumerable: !0,
      }));
  },
  rt = c("$ZodError", rs),
  Te = c("$ZodError", rs, { Parent: Error });
function nt(e, r = (o) => o.message) {
  let o = {},
    i = [];
  for (let t of e.issues)
    t.path.length > 0
      ? ((o[t.path[0]] = o[t.path[0]] || []), o[t.path[0]].push(r(t)))
      : i.push(r(t));
  return { formErrors: i, fieldErrors: o };
}
function ot(e, r) {
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
function _n(e, r) {
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
          u.errors.map((p) => t({ issues: p }, u.path));
        else if (u.code === "invalid_key") t({ issues: u.issues }, u.path);
        else if (u.code === "invalid_element") t({ issues: u.issues }, u.path);
        else {
          let p = [...a, ...u.path];
          if (p.length === 0) {
            i.errors.push(o(u));
            continue;
          }
          let m = i,
            _ = 0;
          for (; _ < p.length; ) {
            let d = p[_],
              h = _ === p.length - 1;
            (typeof d == "string"
              ? (m.properties ?? (m.properties = {}),
                (s = m.properties)[d] ?? (s[d] = { errors: [] }),
                (m = m.properties[d]))
              : (m.items ?? (m.items = []),
                (l = m.items)[d] ?? (l[d] = { errors: [] }),
                (m = m.items[d])),
              h && m.errors.push(o(u)),
              _++);
          }
        }
    };
  return (t(e), i);
}
function ns(e) {
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
function mn(e) {
  let r = [],
    o = [...e.issues].sort((i, t) => i.path.length - t.path.length);
  for (let i of o)
    (r.push(`\u2716 ${i.message}`), i.path?.length && r.push(`  \u2192 at ${ns(i.path)}`));
  return r.join(`
`);
}
var Rt = (e) => (r, o, i, t) => {
    let n = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = r._zod.run({ value: o, issues: [] }, n);
    if (a instanceof Promise) throw new ae();
    if (a.issues.length) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => Q(l, n, F())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  Ct = Rt(Te),
  Ft = (e) => async (r, o, i, t) => {
    let n = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = r._zod.run({ value: o, issues: [] }, n);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => Q(l, n, F())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  Lt = Ft(Te),
  Zt = (e) => (r, o, i) => {
    let t = i ? { ...i, async: !1 } : { async: !1 },
      n = r._zod.run({ value: o, issues: [] }, t);
    if (n instanceof Promise) throw new ae();
    return n.issues.length
      ? { success: !1, error: new (e ?? rt)(n.issues.map((a) => Q(a, t, F()))) }
      : { success: !0, data: n.value };
  },
  pn = Zt(Te),
  Bt = (e) => async (r, o, i) => {
    let t = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      n = r._zod.run({ value: o, issues: [] }, t);
    return (
      n instanceof Promise && (n = await n),
      n.issues.length
        ? { success: !1, error: new e(n.issues.map((a) => Q(a, t, F()))) }
        : { success: !0, data: n.value }
    );
  },
  fn = Bt(Te);
var $e = {};
we($e, {
  _emoji: () => os,
  base64: () => Dn,
  base64url: () => qt,
  bigint: () => Mn,
  boolean: () => Cn,
  browserEmail: () => uc,
  cidrv4: () => In,
  cidrv6: () => Pn,
  cuid: () => gn,
  cuid2: () => hn,
  date: () => Tn,
  datetime: () => jn,
  domain: () => lc,
  duration: () => xn,
  e164: () => Vn,
  email: () => kn,
  emoji: () => $n,
  extendedDuration: () => tc,
  guid: () => An,
  hostname: () => En,
  html5Email: () => ic,
  integer: () => Un,
  ipv4: () => zn,
  ipv6: () => Sn,
  ksuid: () => bn,
  lowercase: () => Zn,
  nanoid: () => wn,
  null: () => Fn,
  number: () => Rn,
  rfc5322Email: () => ac,
  string: () => Nn,
  time: () => On,
  ulid: () => vn,
  undefined: () => Ln,
  unicodeEmail: () => sc,
  uppercase: () => Bn,
  uuid: () => ke,
  uuid4: () => rc,
  uuid6: () => nc,
  uuid7: () => oc,
  xid: () => yn,
});
var gn = /^[cC][^\s-]{8,}$/,
  hn = /^[0-9a-z]+$/,
  vn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  yn = /^[0-9a-vA-V]{20}$/,
  bn = /^[A-Za-z0-9]{27}$/,
  wn = /^[a-zA-Z0-9_-]{21}$/,
  xn =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  tc =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  An = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  ke = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  rc = ke(4),
  nc = ke(6),
  oc = ke(7),
  kn =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  ic =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  ac =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  sc = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  uc =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  os = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function $n() {
  return new RegExp(os, "u");
}
var zn =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Sn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  In =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Pn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Dn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  qt = /^[A-Za-z0-9_-]*$/,
  En = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  lc = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  Vn = /^\+(?:[0-9]){6,14}[0-9]$/,
  is =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Tn = new RegExp(`^${is}$`);
function as(e) {
  let r = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (r = `${r}\\.\\d{${e.precision}}`)
      : e.precision == null && (r = `${r}(\\.\\d+)?`),
    r
  );
}
function On(e) {
  return new RegExp(`^${as(e)}$`);
}
function jn(e) {
  let r = `${is}T${as(e)}`,
    o = [];
  return (
    o.push(e.local ? "Z?" : "Z"),
    e.offset && o.push("([+-]\\d{2}:?\\d{2})"),
    (r = `${r}(${o.join("|")})`),
    new RegExp(`^${r}$`)
  );
}
var Nn = (e) => {
    let r = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${r}$`);
  },
  Mn = /^\d+n?$/,
  Un = /^\d+$/,
  Rn = /^-?\d+(?:\.\d+)?/i,
  Cn = /true|false/i,
  Fn = /null/i;
var Ln = /undefined/i;
var Zn = /^[^A-Z]*$/,
  Bn = /^[^a-z]*$/;
var C = c("$ZodCheck", (e, r) => {
    var o;
    (e._zod ?? (e._zod = {}), (e._zod.def = r), (o = e._zod).onattach ?? (o.onattach = []));
  }),
  us = { number: "number", bigint: "bigint", object: "date" },
  Gt = c("$ZodCheckLessThan", (e, r) => {
    C.init(e, r);
    let o = us[typeof r.value];
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
  Ht = c("$ZodCheckGreaterThan", (e, r) => {
    C.init(e, r);
    let o = us[typeof r.value];
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
  qn = c("$ZodCheckMultipleOf", (e, r) => {
    (C.init(e, r),
      e._zod.onattach.push((o) => {
        var i;
        (i = o._zod.bag).multipleOf ?? (i.multipleOf = r.value);
      }),
      (e._zod.check = (o) => {
        if (typeof o.value != typeof r.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof o.value == "bigint"
          ? o.value % r.value === BigInt(0)
          : nn(o.value, r.value) === 0) ||
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
  Gn = c("$ZodCheckNumberFormat", (e, r) => {
    (C.init(e, r), (r.format = r.format || "float64"));
    let o = r.format?.includes("int"),
      i = o ? "int" : "number",
      [t, n] = ln[r.format];
    (e._zod.onattach.push((a) => {
      let s = a._zod.bag;
      ((s.format = r.format), (s.minimum = t), (s.maximum = n), o && (s.pattern = Un));
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
  Hn = c("$ZodCheckBigIntFormat", (e, r) => {
    C.init(e, r);
    let [o, i] = cn[r.format];
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
  Yn = c("$ZodCheckMaxSize", (e, r) => {
    (C.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !ve(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        r.maximum < i && (o._zod.bag.maximum = r.maximum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        i.size <= r.maximum ||
          o.issues.push({
            origin: et(i),
            code: "too_big",
            maximum: r.maximum,
            input: i,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Wn = c("$ZodCheckMinSize", (e, r) => {
    (C.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !ve(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        r.minimum > i && (o._zod.bag.minimum = r.minimum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        i.size >= r.minimum ||
          o.issues.push({
            origin: et(i),
            code: "too_small",
            minimum: r.minimum,
            input: i,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Kn = c("$ZodCheckSizeEquals", (e, r) => {
    (C.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !ve(i) && i.size !== void 0;
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
          origin: et(i),
          ...(n ? { code: "too_big", maximum: r.size } : { code: "too_small", minimum: r.size }),
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Xn = c("$ZodCheckMaxLength", (e, r) => {
    (C.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !ve(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        r.maximum < i && (o._zod.bag.maximum = r.maximum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        if (i.length <= r.maximum) return;
        let n = tt(i);
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
  Jn = c("$ZodCheckMinLength", (e, r) => {
    (C.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !ve(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        r.minimum > i && (o._zod.bag.minimum = r.minimum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        if (i.length >= r.minimum) return;
        let n = tt(i);
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
  Qn = c("$ZodCheckLengthEquals", (e, r) => {
    (C.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !ve(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        ((i.minimum = r.length), (i.maximum = r.length), (i.length = r.length));
      }),
      (e._zod.check = (o) => {
        let i = o.value,
          t = i.length;
        if (t === r.length) return;
        let n = tt(i),
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
  Oe = c("$ZodCheckStringFormat", (e, r) => {
    var o;
    (C.init(e, r),
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
  eo = c("$ZodCheckRegex", (e, r) => {
    (Oe.init(e, r),
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
  to = c("$ZodCheckLowerCase", (e, r) => {
    (r.pattern ?? (r.pattern = Zn), Oe.init(e, r));
  }),
  ro = c("$ZodCheckUpperCase", (e, r) => {
    (r.pattern ?? (r.pattern = Bn), Oe.init(e, r));
  }),
  no = c("$ZodCheckIncludes", (e, r) => {
    C.init(e, r);
    let o = le(r.includes),
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
  oo = c("$ZodCheckStartsWith", (e, r) => {
    C.init(e, r);
    let o = new RegExp(`^${le(r.prefix)}.*`);
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
  io = c("$ZodCheckEndsWith", (e, r) => {
    C.init(e, r);
    let o = new RegExp(`.*${le(r.suffix)}$`);
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
function ss(e, r, o) {
  e.issues.length && r.issues.push(...Y(o, e.issues));
}
var ao = c("$ZodCheckProperty", (e, r) => {
    (C.init(e, r),
      (e._zod.check = (o) => {
        let i = r.schema._zod.run({ value: o.value[r.property], issues: [] }, {});
        if (i instanceof Promise) return i.then((t) => ss(t, o, r.property));
        ss(i, o, r.property);
      }));
  }),
  so = c("$ZodCheckMimeType", (e, r) => {
    C.init(e, r);
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
  uo = c("$ZodCheckOverwrite", (e, r) => {
    (C.init(e, r),
      (e._zod.check = (o) => {
        o.value = r.tx(o.value);
      }));
  });
var it = class {
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
var lo = { major: 4, minor: 0, patch: 0 };
var P = c("$ZodType", (e, r) => {
    var o;
    (e ?? (e = {}),
      (e._zod.id = r.type + "_" + Ut(10)),
      (e._zod.def = r),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = lo));
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
        let l = Ae(n),
          u;
        for (let p of a) {
          if (p._zod.when) {
            if (!p._zod.when(n)) continue;
          } else if (l) continue;
          let m = n.issues.length,
            _ = p._zod.check(n);
          if (_ instanceof Promise && s?.async === !1) throw new ae();
          if (u || _ instanceof Promise)
            u = (u ?? Promise.resolve()).then(async () => {
              (await _, n.issues.length !== m && (l || (l = Ae(n, m))));
            });
          else {
            if (n.issues.length === m) continue;
            l || (l = Ae(n, m));
          }
        }
        return u ? u.then(() => n) : n;
      };
      e._zod.run = (n, a) => {
        let s = e._zod.parse(n, a);
        if (s instanceof Promise) {
          if (a.async === !1) throw new ae();
          return s.then((l) => t(l, i, a));
        }
        return t(s, i, a);
      };
    }
    e["~standard"] = {
      validate: (t) => {
        try {
          let n = pn(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch {
          return fn(e, t).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  at = c("$ZodString", (e, r) => {
    (P.init(e, r),
      (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? Nn(e._zod.bag)),
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
  M = c("$ZodStringFormat", (e, r) => {
    (Oe.init(e, r), at.init(e, r));
  }),
  _o = c("$ZodGUID", (e, r) => {
    (r.pattern ?? (r.pattern = An), M.init(e, r));
  }),
  mo = c("$ZodUUID", (e, r) => {
    if (r.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[r.version];
      if (i === void 0) throw new Error(`Invalid UUID version: "${r.version}"`);
      r.pattern ?? (r.pattern = ke(i));
    } else r.pattern ?? (r.pattern = ke());
    M.init(e, r);
  }),
  po = c("$ZodEmail", (e, r) => {
    (r.pattern ?? (r.pattern = kn), M.init(e, r));
  }),
  fo = c("$ZodURL", (e, r) => {
    (M.init(e, r),
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
                pattern: En.source,
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
  go = c("$ZodEmoji", (e, r) => {
    (r.pattern ?? (r.pattern = $n()), M.init(e, r));
  }),
  ho = c("$ZodNanoID", (e, r) => {
    (r.pattern ?? (r.pattern = wn), M.init(e, r));
  }),
  vo = c("$ZodCUID", (e, r) => {
    (r.pattern ?? (r.pattern = gn), M.init(e, r));
  }),
  yo = c("$ZodCUID2", (e, r) => {
    (r.pattern ?? (r.pattern = hn), M.init(e, r));
  }),
  bo = c("$ZodULID", (e, r) => {
    (r.pattern ?? (r.pattern = vn), M.init(e, r));
  }),
  wo = c("$ZodXID", (e, r) => {
    (r.pattern ?? (r.pattern = yn), M.init(e, r));
  }),
  xo = c("$ZodKSUID", (e, r) => {
    (r.pattern ?? (r.pattern = bn), M.init(e, r));
  }),
  Ao = c("$ZodISODateTime", (e, r) => {
    (r.pattern ?? (r.pattern = jn(r)), M.init(e, r));
  }),
  ko = c("$ZodISODate", (e, r) => {
    (r.pattern ?? (r.pattern = Tn), M.init(e, r));
  }),
  $o = c("$ZodISOTime", (e, r) => {
    (r.pattern ?? (r.pattern = On(r)), M.init(e, r));
  }),
  zo = c("$ZodISODuration", (e, r) => {
    (r.pattern ?? (r.pattern = xn), M.init(e, r));
  }),
  So = c("$ZodIPv4", (e, r) => {
    (r.pattern ?? (r.pattern = zn),
      M.init(e, r),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        i.format = "ipv4";
      }));
  }),
  Io = c("$ZodIPv6", (e, r) => {
    (r.pattern ?? (r.pattern = Sn),
      M.init(e, r),
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
  Po = c("$ZodCIDRv4", (e, r) => {
    (r.pattern ?? (r.pattern = In), M.init(e, r));
  }),
  Do = c("$ZodCIDRv6", (e, r) => {
    (r.pattern ?? (r.pattern = Pn),
      M.init(e, r),
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
function Eo(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var Vo = c("$ZodBase64", (e, r) => {
  (r.pattern ?? (r.pattern = Dn),
    M.init(e, r),
    e._zod.onattach.push((o) => {
      o._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (o) => {
      Eo(o.value) ||
        o.issues.push({
          code: "invalid_format",
          format: "base64",
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
    }));
});
function ws(e) {
  if (!qt.test(e)) return !1;
  let r = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    o = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Eo(o);
}
var To = c("$ZodBase64URL", (e, r) => {
    (r.pattern ?? (r.pattern = qt),
      M.init(e, r),
      e._zod.onattach.push((o) => {
        o._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (o) => {
        ws(o.value) ||
          o.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Oo = c("$ZodE164", (e, r) => {
    (r.pattern ?? (r.pattern = Vn), M.init(e, r));
  });
function xs(e, r = null) {
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
var jo = c("$ZodJWT", (e, r) => {
    (M.init(e, r),
      (e._zod.check = (o) => {
        xs(o.value, r.alg) ||
          o.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Kt = c("$ZodNumber", (e, r) => {
    (P.init(e, r),
      (e._zod.pattern = e._zod.bag.pattern ?? Rn),
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
  No = c("$ZodNumber", (e, r) => {
    (Gn.init(e, r), Kt.init(e, r));
  }),
  st = c("$ZodBoolean", (e, r) => {
    (P.init(e, r),
      (e._zod.pattern = Cn),
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
  Xt = c("$ZodBigInt", (e, r) => {
    (P.init(e, r),
      (e._zod.pattern = Mn),
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
  Mo = c("$ZodBigInt", (e, r) => {
    (Hn.init(e, r), Xt.init(e, r));
  }),
  Uo = c("$ZodSymbol", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t == "symbol" ||
            o.issues.push({ expected: "symbol", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  Ro = c("$ZodUndefined", (e, r) => {
    (P.init(e, r),
      (e._zod.pattern = Ln),
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
  Co = c("$ZodNull", (e, r) => {
    (P.init(e, r),
      (e._zod.pattern = Fn),
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
  Fo = c("$ZodAny", (e, r) => {
    (P.init(e, r), (e._zod.parse = (o) => o));
  }),
  ye = c("$ZodUnknown", (e, r) => {
    (P.init(e, r), (e._zod.parse = (o) => o));
  }),
  Lo = c("$ZodNever", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => (
        o.issues.push({ expected: "never", code: "invalid_type", input: o.value, inst: e }),
        o
      )));
  }),
  Zo = c("$ZodVoid", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t > "u" ||
            o.issues.push({ expected: "void", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  Bo = c("$ZodDate", (e, r) => {
    (P.init(e, r),
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
function cs(e, r, o) {
  (e.issues.length && r.issues.push(...Y(o, e.issues)), (r.value[o] = e.value));
}
var ut = c("$ZodArray", (e, r) => {
  (P.init(e, r),
    (e._zod.parse = (o, i) => {
      let t = o.value;
      if (!Array.isArray(t))
        return (o.issues.push({ expected: "array", code: "invalid_type", input: t, inst: e }), o);
      o.value = Array(t.length);
      let n = [];
      for (let a = 0; a < t.length; a++) {
        let s = t[a],
          l = r.element._zod.run({ value: s, issues: [] }, i);
        l instanceof Promise ? n.push(l.then((u) => cs(u, o, a))) : cs(l, o, a);
      }
      return n.length ? Promise.all(n).then(() => o) : o;
    }));
});
function Yt(e, r, o) {
  (e.issues.length && r.issues.push(...Y(o, e.issues)), (r.value[o] = e.value));
}
function ds(e, r, o, i) {
  e.issues.length
    ? i[o] === void 0
      ? o in i
        ? (r.value[o] = void 0)
        : (r.value[o] = e.value)
      : r.issues.push(...Y(o, e.issues))
    : e.value === void 0
      ? o in i && (r.value[o] = void 0)
      : (r.value[o] = e.value);
}
var qo = c("$ZodObject", (e, r) => {
  P.init(e, r);
  let o = Ke(() => {
    let m = Object.keys(r.shape);
    for (let d of m)
      if (!(r.shape[d] instanceof P))
        throw new Error(`Invalid element at key "${d}": expected a Zod schema`);
    let _ = un(r.shape);
    return {
      shape: r.shape,
      keys: m,
      keySet: new Set(m),
      numKeys: m.length,
      optionalKeys: new Set(_),
    };
  });
  j(e._zod, "propValues", () => {
    let m = r.shape,
      _ = {};
    for (let d in m) {
      let h = m[d]._zod;
      if (h.values) {
        _[d] ?? (_[d] = new Set());
        for (let b of h.values) _[d].add(b);
      }
    }
    return _;
  });
  let i = (m) => {
      let _ = new it(["shape", "payload", "ctx"]),
        { keys: d, optionalKeys: h } = o.value,
        b = (A) => {
          let k = xe(A);
          return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        };
      _.write("const input = payload.value;");
      let z = Object.create(null);
      for (let A of d) z[A] = Ut(15);
      _.write("const newResult = {}");
      for (let A of d)
        if (h.has(A)) {
          let k = z[A];
          _.write(`const ${k} = ${b(A)};`);
          let g = xe(A);
          _.write(`
        if (${k}.issues.length) {
          if (input[${g}] === undefined) {
            if (${g} in input) {
              newResult[${g}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${k}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${g}, ...iss.path] : [${g}],
              }))
            );
          }
        } else if (${k}.value === undefined) {
          if (${g} in input) newResult[${g}] = undefined;
        } else {
          newResult[${g}] = ${k}.value;
        }
        `);
        } else {
          let k = z[A];
          (_.write(`const ${k} = ${b(A)};`),
            _.write(`
          if (${k}.issues.length) payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${xe(A)}, ...iss.path] : [${xe(A)}]
          })));`),
            _.write(`newResult[${xe(A)}] = ${k}.value`));
        }
      (_.write("payload.value = newResult;"), _.write("return payload;"));
      let S = _.compile();
      return (A, k) => S(m, A, k);
    },
    t,
    n = Ve,
    a = !He.jitless,
    l = a && an.value,
    { catchall: u } = r,
    p;
  e._zod.parse = (m, _) => {
    p ?? (p = o.value);
    let d = m.value;
    if (!n(d))
      return (m.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), m);
    let h = [];
    if (a && l && _?.async === !1 && _.jitless !== !0) (t || (t = i(r.shape)), (m = t(m, _)));
    else {
      m.value = {};
      let k = p.shape;
      for (let g of p.keys) {
        let $ = k[g],
          D = $._zod.run({ value: d[g], issues: [] }, _),
          V = $._zod.optin === "optional" && $._zod.optout === "optional";
        D instanceof Promise
          ? h.push(D.then((I) => (V ? ds(I, m, g, d) : Yt(I, m, g))))
          : V
            ? ds(D, m, g, d)
            : Yt(D, m, g);
      }
    }
    if (!u) return h.length ? Promise.all(h).then(() => m) : m;
    let b = [],
      z = p.keySet,
      S = u._zod,
      A = S.def.type;
    for (let k of Object.keys(d)) {
      if (z.has(k)) continue;
      if (A === "never") {
        b.push(k);
        continue;
      }
      let g = S.run({ value: d[k], issues: [] }, _);
      g instanceof Promise ? h.push(g.then(($) => Yt($, m, k))) : Yt(g, m, k);
    }
    return (
      b.length && m.issues.push({ code: "unrecognized_keys", keys: b, input: d, inst: e }),
      h.length ? Promise.all(h).then(() => m) : m
    );
  };
});
function _s(e, r, o, i) {
  for (let t of e) if (t.issues.length === 0) return ((r.value = t.value), r);
  return (
    r.issues.push({
      code: "invalid_union",
      input: r.value,
      inst: o,
      errors: e.map((t) => t.issues.map((n) => Q(n, i, F()))),
    }),
    r
  );
}
var Jt = c("$ZodUnion", (e, r) => {
    (P.init(e, r),
      j(e._zod, "values", () => {
        if (r.options.every((o) => o._zod.values))
          return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
      }),
      j(e._zod, "pattern", () => {
        if (r.options.every((o) => o._zod.pattern)) {
          let o = r.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${o.map((i) => Xe(i.source)).join("|")})$`);
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
        return t ? Promise.all(n).then((a) => _s(a, o, e, i)) : _s(n, o, e, i);
      }));
  }),
  Go = c("$ZodDiscriminatedUnion", (e, r) => {
    Jt.init(e, r);
    let o = e._zod.parse;
    j(e._zod, "propValues", () => {
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
    let i = Ke(() => {
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
      if (!Ve(a))
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
  Ho = c("$ZodIntersection", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o,
          n = r.left._zod.run({ value: t, issues: [] }, i),
          a = r.right._zod.run({ value: t, issues: [] }, i);
        return n instanceof Promise || a instanceof Promise
          ? Promise.all([n, a]).then(([l, u]) => ms(o, l, u))
          : ms(o, n, a);
      }));
  });
function co(e, r) {
  if (e === r) return { valid: !0, data: e };
  if (e instanceof Date && r instanceof Date && +e == +r) return { valid: !0, data: e };
  if (Je(e) && Je(r)) {
    let o = Object.keys(r),
      i = Object.keys(e).filter((n) => o.indexOf(n) !== -1),
      t = { ...e, ...r };
    for (let n of i) {
      let a = co(e[n], r[n]);
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
        a = co(t, n);
      if (!a.valid) return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      o.push(a.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function ms(e, r, o) {
  if (
    (r.issues.length && e.issues.push(...r.issues),
    o.issues.length && e.issues.push(...o.issues),
    Ae(e))
  )
    return e;
  let i = co(r.value, o.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return ((e.value = i.data), e);
}
var ze = c("$ZodTuple", (e, r) => {
  P.init(e, r);
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
        p = a.length < i - 1;
      if (u || p)
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
      let p = u._zod.run({ value: a[l], issues: [] }, n);
      p instanceof Promise ? s.push(p.then((m) => Wt(m, t, l))) : Wt(p, t, l);
    }
    if (r.rest) {
      let u = a.slice(o.length);
      for (let p of u) {
        l++;
        let m = r.rest._zod.run({ value: p, issues: [] }, n);
        m instanceof Promise ? s.push(m.then((_) => Wt(_, t, l))) : Wt(m, t, l);
      }
    }
    return s.length ? Promise.all(s).then(() => t) : t;
  };
});
function Wt(e, r, o) {
  (e.issues.length && r.issues.push(...Y(o, e.issues)), (r.value[o] = e.value));
}
var Yo = c("$ZodRecord", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        if (!Je(t))
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
                    u.then((p) => {
                      (p.issues.length && o.issues.push(...Y(l, p.issues)), (o.value[l] = p.value));
                    }),
                  )
                : (u.issues.length && o.issues.push(...Y(l, u.issues)), (o.value[l] = u.value));
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
                issues: s.issues.map((u) => Q(u, i, F())),
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
                    (u.issues.length && o.issues.push(...Y(a, u.issues)),
                      (o.value[s.value] = u.value));
                  }),
                )
              : (l.issues.length && o.issues.push(...Y(a, l.issues)), (o.value[s.value] = l.value));
          }
        }
        return n.length ? Promise.all(n).then(() => o) : o;
      }));
  }),
  Wo = c("$ZodMap", (e, r) => {
    (P.init(e, r),
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
                Promise.all([l, u]).then(([p, m]) => {
                  ps(p, m, o, a, t, e, i);
                }),
              )
            : ps(l, u, o, a, t, e, i);
        }
        return n.length ? Promise.all(n).then(() => o) : o;
      }));
  });
function ps(e, r, o, i, t, n, a) {
  (e.issues.length &&
    (Qe.has(typeof i)
      ? o.issues.push(...Y(i, e.issues))
      : o.issues.push({
          origin: "map",
          code: "invalid_key",
          input: t,
          inst: n,
          issues: e.issues.map((s) => Q(s, a, F())),
        })),
    r.issues.length &&
      (Qe.has(typeof i)
        ? o.issues.push(...Y(i, r.issues))
        : o.issues.push({
            origin: "map",
            code: "invalid_element",
            input: t,
            inst: n,
            key: i,
            issues: r.issues.map((s) => Q(s, a, F())),
          })),
    o.value.set(e.value, r.value));
}
var Ko = c("$ZodSet", (e, r) => {
  (P.init(e, r),
    (e._zod.parse = (o, i) => {
      let t = o.value;
      if (!(t instanceof Set))
        return (o.issues.push({ input: t, inst: e, expected: "set", code: "invalid_type" }), o);
      let n = [];
      o.value = new Set();
      for (let a of t) {
        let s = r.valueType._zod.run({ value: a, issues: [] }, i);
        s instanceof Promise ? n.push(s.then((l) => fs(l, o))) : fs(s, o);
      }
      return n.length ? Promise.all(n).then(() => o) : o;
    }));
});
function fs(e, r) {
  (e.issues.length && r.issues.push(...e.issues), r.value.add(e.value));
}
var Xo = c("$ZodEnum", (e, r) => {
    P.init(e, r);
    let o = We(r.entries);
    ((e._zod.values = new Set(o)),
      (e._zod.pattern = new RegExp(
        `^(${o
          .filter((i) => Qe.has(typeof i))
          .map((i) => (typeof i == "string" ? le(i) : i.toString()))
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
  Jo = c("$ZodLiteral", (e, r) => {
    (P.init(e, r),
      (e._zod.values = new Set(r.values)),
      (e._zod.pattern = new RegExp(
        `^(${r.values.map((o) => (typeof o == "string" ? le(o) : o ? o.toString() : String(o))).join("|")})$`,
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
  Qo = c("$ZodFile", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        return (
          t instanceof File ||
            o.issues.push({ expected: "file", code: "invalid_type", input: t, inst: e }),
          o
        );
      }));
  }),
  ei = c("$ZodTransform", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = r.transform(o.value, o);
        if (i.async)
          return (t instanceof Promise ? t : Promise.resolve(t)).then((a) => ((o.value = a), o));
        if (t instanceof Promise) throw new ae();
        return ((o.value = t), o);
      }));
  }),
  ti = c("$ZodOptional", (e, r) => {
    (P.init(e, r),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      j(e._zod, "values", () =>
        r.innerType._zod.values ? new Set([...r.innerType._zod.values, void 0]) : void 0,
      ),
      j(e._zod, "pattern", () => {
        let o = r.innerType._zod.pattern;
        return o ? new RegExp(`^(${Xe(o.source)})?$`) : void 0;
      }),
      (e._zod.parse = (o, i) => (o.value === void 0 ? o : r.innerType._zod.run(o, i))));
  }),
  ri = c("$ZodNullable", (e, r) => {
    (P.init(e, r),
      j(e._zod, "optin", () => r.innerType._zod.optin),
      j(e._zod, "optout", () => r.innerType._zod.optout),
      j(e._zod, "pattern", () => {
        let o = r.innerType._zod.pattern;
        return o ? new RegExp(`^(${Xe(o.source)}|null)$`) : void 0;
      }),
      j(e._zod, "values", () =>
        r.innerType._zod.values ? new Set([...r.innerType._zod.values, null]) : void 0,
      ),
      (e._zod.parse = (o, i) => (o.value === null ? o : r.innerType._zod.run(o, i))));
  }),
  ni = c("$ZodDefault", (e, r) => {
    (P.init(e, r),
      (e._zod.optin = "optional"),
      j(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => {
        if (o.value === void 0) return ((o.value = r.defaultValue), o);
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => gs(n, r)) : gs(t, r);
      }));
  });
function gs(e, r) {
  return (e.value === void 0 && (e.value = r.defaultValue), e);
}
var oi = c("$ZodPrefault", (e, r) => {
    (P.init(e, r),
      (e._zod.optin = "optional"),
      j(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => (
        o.value === void 0 && (o.value = r.defaultValue),
        r.innerType._zod.run(o, i)
      )));
  }),
  ii = c("$ZodNonOptional", (e, r) => {
    (P.init(e, r),
      j(e._zod, "values", () => {
        let o = r.innerType._zod.values;
        return o ? new Set([...o].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => hs(n, e)) : hs(t, e);
      }));
  });
function hs(e, r) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: r }),
    e
  );
}
var ai = c("$ZodSuccess", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise
          ? t.then((n) => ((o.value = n.issues.length === 0), o))
          : ((o.value = t.issues.length === 0), o);
      }));
  }),
  si = c("$ZodCatch", (e, r) => {
    (P.init(e, r),
      j(e._zod, "optin", () => r.innerType._zod.optin),
      j(e._zod, "optout", () => r.innerType._zod.optout),
      j(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise
          ? t.then(
              (n) => (
                (o.value = n.value),
                n.issues.length &&
                  ((o.value = r.catchValue({
                    ...o,
                    error: { issues: n.issues.map((a) => Q(a, i, F())) },
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
                error: { issues: t.issues.map((n) => Q(n, i, F())) },
                input: o.value,
              })),
              (o.issues = [])),
            o);
      }));
  }),
  ui = c("$ZodNaN", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) => (
        (typeof o.value != "number" || !Number.isNaN(o.value)) &&
          o.issues.push({ input: o.value, inst: e, expected: "nan", code: "invalid_type" }),
        o
      )));
  }),
  lt = c("$ZodPipe", (e, r) => {
    (P.init(e, r),
      j(e._zod, "values", () => r.in._zod.values),
      j(e._zod, "optin", () => r.in._zod.optin),
      j(e._zod, "optout", () => r.out._zod.optout),
      (e._zod.parse = (o, i) => {
        let t = r.in._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => vs(n, r, i)) : vs(t, r, i);
      }));
  });
function vs(e, r, o) {
  return Ae(e) ? e : r.out._zod.run({ value: e.value, issues: e.issues }, o);
}
var li = c("$ZodReadonly", (e, r) => {
  (P.init(e, r),
    j(e._zod, "propValues", () => r.innerType._zod.propValues),
    j(e._zod, "optin", () => r.innerType._zod.optin),
    j(e._zod, "optout", () => r.innerType._zod.optout),
    (e._zod.parse = (o, i) => {
      let t = r.innerType._zod.run(o, i);
      return t instanceof Promise ? t.then(ys) : ys(t);
    }));
});
function ys(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var ci = c("$ZodTemplateLiteral", (e, r) => {
    P.init(e, r);
    let o = [];
    for (let i of r.parts)
      if (i instanceof P) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let t = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
        if (!t) throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let n = t.startsWith("^") ? 1 : 0,
          a = t.endsWith("$") ? t.length - 1 : t.length;
        o.push(t.slice(n, a));
      } else if (i === null || sn.has(typeof i)) o.push(le(`${i}`));
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
  di = c("$ZodPromise", (e, r) => {
    (P.init(e, r),
      (e._zod.parse = (o, i) =>
        Promise.resolve(o.value).then((t) => r.innerType._zod.run({ value: t, issues: [] }, i))));
  }),
  _i = c("$ZodLazy", (e, r) => {
    (P.init(e, r),
      j(e._zod, "innerType", () => r.getter()),
      j(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      j(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      j(e._zod, "optin", () => e._zod.innerType._zod.optin),
      j(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (o, i) => e._zod.innerType._zod.run(o, i)));
  }),
  mi = c("$ZodCustom", (e, r) => {
    (C.init(e, r),
      P.init(e, r),
      (e._zod.parse = (o, i) => o),
      (e._zod.check = (o) => {
        let i = o.value,
          t = r.fn(i);
        if (t instanceof Promise) return t.then((n) => bs(n, o, i, e));
        bs(t, o, i, e);
      }));
  });
function bs(e, r, o, i) {
  if (!e) {
    let t = {
      code: "custom",
      input: o,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (t.params = i._zod.def.params), r.issues.push(dn(t)));
  }
}
var ct = {};
we(ct, {
  ar: () => ks,
  az: () => $s,
  be: () => Ss,
  ca: () => Is,
  cs: () => Ps,
  de: () => Ds,
  en: () => Qt,
  es: () => Es,
  fa: () => Vs,
  fi: () => Ts,
  fr: () => Os,
  frCA: () => js,
  he: () => Ns,
  hu: () => Ms,
  id: () => Us,
  it: () => Rs,
  ja: () => Cs,
  kh: () => Fs,
  ko: () => Ls,
  mk: () => Zs,
  ms: () => Bs,
  nl: () => qs,
  no: () => Gs,
  ota: () => Hs,
  pl: () => Ys,
  pt: () => Ws,
  ru: () => Xs,
  sl: () => Js,
  sv: () => Qs,
  ta: () => eu,
  th: () => tu,
  tr: () => ru,
  ua: () => nu,
  ur: () => ou,
  vi: () => iu,
  zhCN: () => au,
  zhTW: () => su,
});
var cc = () => {
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
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${x(t.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${f(t.values, "|")}`;
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
        return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${f(t.keys, "\u060C ")}`;
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
function ks() {
  return { localeError: cc() };
}
var dc = () => {
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
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${x(t.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${f(t.values, "|")}`;
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
        return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${f(t.keys, ", ")}`;
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
function $s() {
  return { localeError: dc() };
}
function zs(e, r, o, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? r : n >= 2 && n <= 4 ? o : i;
}
var _c = () => {
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
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${x(t.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${f(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = zs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.maximum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = zs(s, a.unit.one, a.unit.few, a.unit.many);
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
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${f(t.keys, ", ")}`;
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
function Ss() {
  return { localeError: _c() };
}
var mc = () => {
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
          ? `Valor inv\xE0lid: s'esperava ${x(t.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${f(t.values, " o ")}`;
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
        return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Is() {
  return { localeError: mc() };
}
var pc = () => {
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
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${x(t.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${f(t.values, "|")}`;
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
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${f(t.keys, ", ")}`;
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
function Ps() {
  return { localeError: pc() };
}
var fc = () => {
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
          ? `Ung\xFCltige Eingabe: erwartet ${x(t.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${f(t.values, "|")}`;
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
        return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${f(t.keys, ", ")}`;
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
function Ds() {
  return { localeError: fc() };
}
var gc = (e) => {
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
  hc = () => {
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
          return `Invalid input: expected ${i.expected}, received ${gc(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${x(i.values[0])}`
            : `Invalid option: expected one of ${f(i.values, "|")}`;
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
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${f(i.keys, ", ")}`;
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
function Qt() {
  return { localeError: hc() };
}
var vc = () => {
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
          ? `Entrada inv\xE1lida: se esperaba ${x(t.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${f(t.values, "|")}`;
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
        return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Es() {
  return { localeError: vc() };
}
var yc = () => {
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
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${x(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${f(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
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
        return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${f(t.keys, ", ")}`;
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
function Vs() {
  return { localeError: yc() };
}
var bc = () => {
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
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${x(t.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${f(t.values, "|")}`;
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
        return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${f(t.keys, ", ")}`;
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
function Ts() {
  return { localeError: bc() };
}
var wc = () => {
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
          ? `Entr\xE9e invalide : ${x(t.values[0])} attendu`
          : `Option invalide : une valeur parmi ${f(t.values, "|")} attendue`;
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
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${f(t.keys, ", ")}`;
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
function Os() {
  return { localeError: wc() };
}
var xc = () => {
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
          ? `Entr\xE9e invalide : attendu ${x(t.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${f(t.values, "|")}`;
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
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${f(t.keys, ", ")}`;
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
function js() {
  return { localeError: xc() };
}
var Ac = () => {
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
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${x(t.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${f(t.values, "|")}`;
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
        return `\u05DE\u05E4\u05EA\u05D7${t.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${t.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${f(t.keys, ", ")}`;
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
function Ns() {
  return { localeError: Ac() };
}
var kc = () => {
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
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${x(t.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${f(t.values, "|")}`;
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
        return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Ms() {
  return { localeError: kc() };
}
var $c = () => {
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
          ? `Input tidak valid: diharapkan ${x(t.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${f(t.values, "|")}`;
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
        return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Us() {
  return { localeError: $c() };
}
var zc = () => {
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
          ? `Input non valido: atteso ${x(t.values[0])}`
          : `Opzione non valida: atteso uno tra ${f(t.values, "|")}`;
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
        return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${f(t.keys, ", ")}`;
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
function Rs() {
  return { localeError: zc() };
}
var Sc = () => {
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
          ? `\u7121\u52B9\u306A\u5165\u529B: ${x(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${f(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
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
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${f(t.keys, "\u3001")}`;
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
function Cs() {
  return { localeError: Sc() };
}
var Ic = () => {
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
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${x(t.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${f(t.values, "|")}`;
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
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${f(t.keys, ", ")}`;
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
function Fs() {
  return { localeError: Ic() };
}
var Pc = () => {
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
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${x(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${f(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
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
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${f(t.keys, ", ")}`;
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
function Ls() {
  return { localeError: Pc() };
}
var Dc = () => {
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
          ? `Invalid input: expected ${x(t.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${f(t.values, "|")}`;
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
        return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${f(t.keys, ", ")}`;
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
function Zs() {
  return { localeError: Dc() };
}
var Ec = () => {
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
          ? `Input tidak sah: dijangka ${x(t.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${f(t.values, "|")}`;
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
        return `Kunci tidak dikenali: ${f(t.keys, ", ")}`;
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
function Bs() {
  return { localeError: Ec() };
}
var Vc = () => {
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
          ? `Ongeldige invoer: verwacht ${x(t.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${f(t.values, "|")}`;
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
        return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function qs() {
  return { localeError: Vc() };
}
var Tc = () => {
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
          ? `Ugyldig verdi: forventet ${x(t.values[0])}`
          : `Ugyldig valg: forventet en av ${f(t.values, "|")}`;
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
        return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${f(t.keys, ", ")}`;
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
function Gs() {
  return { localeError: Tc() };
}
var Oc = () => {
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
          ? `F\xE2sit giren: umulan ${x(t.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${f(t.values, "|")}`;
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
        return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Hs() {
  return { localeError: Oc() };
}
var jc = () => {
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
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${x(t.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${f(t.values, "|")}`;
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
        return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Ys() {
  return { localeError: jc() };
}
var Nc = () => {
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
          ? `Entrada inv\xE1lida: esperado ${x(t.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${f(t.values, "|")}`;
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
        return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${f(t.keys, ", ")}`;
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
function Ws() {
  return { localeError: Nc() };
}
function Ks(e, r, o, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? r : n >= 2 && n <= 4 ? o : i;
}
var Mc = () => {
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
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${x(t.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${f(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = Ks(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.maximum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = Ks(s, a.unit.one, a.unit.few, a.unit.many);
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
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${f(t.keys, ", ")}`;
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
function Xs() {
  return { localeError: Mc() };
}
var Uc = () => {
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
          ? `Neveljaven vnos: pri\u010Dakovano ${x(t.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${f(t.values, "|")}`;
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
        return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${f(t.keys, ", ")}`;
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
function Js() {
  return { localeError: Uc() };
}
var Rc = () => {
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
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${x(t.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${f(t.values, "|")}`;
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
        return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${f(t.keys, ", ")}`;
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
function Qs() {
  return { localeError: Rc() };
}
var Cc = () => {
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
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${x(t.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${f(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
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
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${f(t.keys, ", ")}`;
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
function eu() {
  return { localeError: Cc() };
}
var Fc = () => {
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
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${x(t.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${f(t.values, "|")}`;
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
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${f(t.keys, ", ")}`;
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
function tu() {
  return { localeError: Fc() };
}
var Lc = (e) => {
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
  Zc = () => {
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
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${Lc(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${x(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${f(i.values, "|")}`;
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
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${f(i.keys, ", ")}`;
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
function ru() {
  return { localeError: Zc() };
}
var Bc = () => {
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
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${x(t.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${f(t.values, "|")}`;
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
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${f(t.keys, ", ")}`;
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
function nu() {
  return { localeError: Bc() };
}
var qc = () => {
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
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${x(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${f(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
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
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${f(t.keys, "\u060C ")}`;
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
function ou() {
  return { localeError: qc() };
}
var Gc = () => {
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
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${x(t.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${f(t.values, "|")}`;
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
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${f(t.keys, ", ")}`;
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
function iu() {
  return { localeError: Gc() };
}
var Hc = () => {
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
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${x(t.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${f(t.values, "|")}`;
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
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${f(t.keys, ", ")}`;
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
function au() {
  return { localeError: Hc() };
}
var Yc = () => {
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
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${x(t.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${f(t.values, "|")}`;
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
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${f(t.keys, "\u3001")}`;
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
function su() {
  return { localeError: Yc() };
}
var pi = Symbol("ZodOutput"),
  fi = Symbol("ZodInput"),
  je = class {
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
function er() {
  return new je();
}
var se = er();
function gi(e, r) {
  return new e({ type: "string", ...y(r) });
}
function hi(e, r) {
  return new e({ type: "string", coerce: !0, ...y(r) });
}
function tr(e, r) {
  return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...y(r) });
}
function dt(e, r) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...y(r) });
}
function rr(e, r) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...y(r) });
}
function nr(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...y(r),
  });
}
function or(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...y(r),
  });
}
function ir(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...y(r),
  });
}
function ar(e, r) {
  return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...y(r) });
}
function sr(e, r) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...y(r) });
}
function ur(e, r) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...y(r) });
}
function lr(e, r) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...y(r) });
}
function cr(e, r) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...y(r) });
}
function dr(e, r) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...y(r) });
}
function _r(e, r) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...y(r) });
}
function mr(e, r) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...y(r) });
}
function pr(e, r) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...y(r) });
}
function fr(e, r) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...y(r) });
}
function gr(e, r) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...y(r) });
}
function hr(e, r) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...y(r) });
}
function vr(e, r) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...y(r) });
}
function yr(e, r) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...y(r) });
}
function br(e, r) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...y(r) });
}
function wr(e, r) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...y(r) });
}
function vi(e, r) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...y(r),
  });
}
function yi(e, r) {
  return new e({ type: "string", format: "date", check: "string_format", ...y(r) });
}
function bi(e, r) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...y(r),
  });
}
function wi(e, r) {
  return new e({ type: "string", format: "duration", check: "string_format", ...y(r) });
}
function xi(e, r) {
  return new e({ type: "number", checks: [], ...y(r) });
}
function Ai(e, r) {
  return new e({ type: "number", coerce: !0, checks: [], ...y(r) });
}
function ki(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...y(r) });
}
function $i(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float32", ...y(r) });
}
function zi(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float64", ...y(r) });
}
function Si(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "int32", ...y(r) });
}
function Ii(e, r) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "uint32", ...y(r) });
}
function Pi(e, r) {
  return new e({ type: "boolean", ...y(r) });
}
function Di(e, r) {
  return new e({ type: "boolean", coerce: !0, ...y(r) });
}
function Ei(e, r) {
  return new e({ type: "bigint", ...y(r) });
}
function Vi(e, r) {
  return new e({ type: "bigint", coerce: !0, ...y(r) });
}
function Ti(e, r) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...y(r) });
}
function Oi(e, r) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...y(r) });
}
function ji(e, r) {
  return new e({ type: "symbol", ...y(r) });
}
function Ni(e, r) {
  return new e({ type: "undefined", ...y(r) });
}
function Mi(e, r) {
  return new e({ type: "null", ...y(r) });
}
function Ui(e) {
  return new e({ type: "any" });
}
function Ne(e) {
  return new e({ type: "unknown" });
}
function Ri(e, r) {
  return new e({ type: "never", ...y(r) });
}
function Ci(e, r) {
  return new e({ type: "void", ...y(r) });
}
function Fi(e, r) {
  return new e({ type: "date", ...y(r) });
}
function Li(e, r) {
  return new e({ type: "date", coerce: !0, ...y(r) });
}
function Zi(e, r) {
  return new e({ type: "nan", ...y(r) });
}
function ce(e, r) {
  return new Gt({ check: "less_than", ...y(r), value: e, inclusive: !1 });
}
function te(e, r) {
  return new Gt({ check: "less_than", ...y(r), value: e, inclusive: !0 });
}
function de(e, r) {
  return new Ht({ check: "greater_than", ...y(r), value: e, inclusive: !1 });
}
function W(e, r) {
  return new Ht({ check: "greater_than", ...y(r), value: e, inclusive: !0 });
}
function Bi(e) {
  return de(0, e);
}
function qi(e) {
  return ce(0, e);
}
function Gi(e) {
  return te(0, e);
}
function Hi(e) {
  return W(0, e);
}
function Se(e, r) {
  return new qn({ check: "multiple_of", ...y(r), value: e });
}
function Me(e, r) {
  return new Yn({ check: "max_size", ...y(r), maximum: e });
}
function Ie(e, r) {
  return new Wn({ check: "min_size", ...y(r), minimum: e });
}
function _t(e, r) {
  return new Kn({ check: "size_equals", ...y(r), size: e });
}
function Ue(e, r) {
  return new Xn({ check: "max_length", ...y(r), maximum: e });
}
function be(e, r) {
  return new Jn({ check: "min_length", ...y(r), minimum: e });
}
function Re(e, r) {
  return new Qn({ check: "length_equals", ...y(r), length: e });
}
function mt(e, r) {
  return new eo({ check: "string_format", format: "regex", ...y(r), pattern: e });
}
function pt(e) {
  return new to({ check: "string_format", format: "lowercase", ...y(e) });
}
function ft(e) {
  return new ro({ check: "string_format", format: "uppercase", ...y(e) });
}
function gt(e, r) {
  return new no({ check: "string_format", format: "includes", ...y(r), includes: e });
}
function ht(e, r) {
  return new oo({ check: "string_format", format: "starts_with", ...y(r), prefix: e });
}
function vt(e, r) {
  return new io({ check: "string_format", format: "ends_with", ...y(r), suffix: e });
}
function Yi(e, r, o) {
  return new ao({ check: "property", property: e, schema: r, ...y(o) });
}
function yt(e, r) {
  return new so({ check: "mime_type", mime: e, ...y(r) });
}
function _e(e) {
  return new uo({ check: "overwrite", tx: e });
}
function bt(e) {
  return _e((r) => r.normalize(e));
}
function wt() {
  return _e((e) => e.trim());
}
function xt() {
  return _e((e) => e.toLowerCase());
}
function At() {
  return _e((e) => e.toUpperCase());
}
function kt(e, r, o) {
  return new e({ type: "array", element: r, ...y(o) });
}
function Wc(e, r, o) {
  return new e({ type: "union", options: r, ...y(o) });
}
function Kc(e, r, o, i) {
  return new e({ type: "union", options: o, discriminator: r, ...y(i) });
}
function Xc(e, r, o) {
  return new e({ type: "intersection", left: r, right: o });
}
function Wi(e, r, o, i) {
  let t = o instanceof P,
    n = t ? i : o,
    a = t ? o : null;
  return new e({ type: "tuple", items: r, rest: a, ...y(n) });
}
function Jc(e, r, o, i) {
  return new e({ type: "record", keyType: r, valueType: o, ...y(i) });
}
function Qc(e, r, o, i) {
  return new e({ type: "map", keyType: r, valueType: o, ...y(i) });
}
function ed(e, r, o) {
  return new e({ type: "set", valueType: r, ...y(o) });
}
function td(e, r, o) {
  let i = Array.isArray(r) ? Object.fromEntries(r.map((t) => [t, t])) : r;
  return new e({ type: "enum", entries: i, ...y(o) });
}
function rd(e, r, o) {
  return new e({ type: "enum", entries: r, ...y(o) });
}
function nd(e, r, o) {
  return new e({ type: "literal", values: Array.isArray(r) ? r : [r], ...y(o) });
}
function Ki(e, r) {
  return new e({ type: "file", ...y(r) });
}
function od(e, r) {
  return new e({ type: "transform", transform: r });
}
function id(e, r) {
  return new e({ type: "optional", innerType: r });
}
function ad(e, r) {
  return new e({ type: "nullable", innerType: r });
}
function sd(e, r, o) {
  return new e({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof o == "function" ? o() : o;
    },
  });
}
function ud(e, r, o) {
  return new e({ type: "nonoptional", innerType: r, ...y(o) });
}
function ld(e, r) {
  return new e({ type: "success", innerType: r });
}
function cd(e, r, o) {
  return new e({ type: "catch", innerType: r, catchValue: typeof o == "function" ? o : () => o });
}
function dd(e, r, o) {
  return new e({ type: "pipe", in: r, out: o });
}
function _d(e, r) {
  return new e({ type: "readonly", innerType: r });
}
function md(e, r, o) {
  return new e({ type: "template_literal", parts: r, ...y(o) });
}
function pd(e, r) {
  return new e({ type: "lazy", getter: r });
}
function fd(e, r) {
  return new e({ type: "promise", innerType: r });
}
function Xi(e, r, o) {
  let i = y(o);
  return (i.abort ?? (i.abort = !0), new e({ type: "custom", check: "custom", fn: r, ...i }));
}
function Ji(e, r, o) {
  return new e({ type: "custom", check: "custom", fn: r, ...y(o) });
}
function Qi(e, r) {
  let { case: o, error: i, truthy: t, falsy: n } = y(r),
    a = new Set(t ?? ["true", "1", "yes", "on", "y", "enabled"]),
    s = new Set(n ?? ["false", "0", "no", "off", "n", "disabled"]),
    l = e.Pipe ?? lt,
    u = e.Boolean ?? st,
    p = e.Unknown ?? ye,
    m = new p({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (_) => {
              if (typeof _.value == "string") {
                let d = _.value;
                (o !== "sensitive" && (d = d.toLowerCase()),
                  a.has(d)
                    ? (_.value = !0)
                    : s.has(d)
                      ? (_.value = !1)
                      : _.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...s],
                          input: _.value,
                          inst: m,
                        }));
              } else _.issues.push({ code: "invalid_type", expected: "string", input: _.value });
            },
            def: { check: "custom" },
            onattach: [],
          },
        },
      ],
      error: i,
    });
  return new l({ type: "pipe", in: m, out: new u({ type: "boolean", error: i }), error: i });
}
var xr = class {
  constructor(r) {
    ((this._def = r), (this.def = r));
  }
  implement(r) {
    if (typeof r != "function") throw new Error("implement() must be called with a function");
    let o = (...i) => {
      let t = this._def.input ? Ct(this._def.input, i, void 0, { callee: o }) : i;
      if (!Array.isArray(t))
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      let n = r(...t);
      return this._def.output ? Ct(this._def.output, n, void 0, { callee: o }) : n;
    };
    return o;
  }
  implementAsync(r) {
    if (typeof r != "function") throw new Error("implement() must be called with a function");
    let o = async (...i) => {
      let t = this._def.input ? await Lt(this._def.input, i, void 0, { callee: o }) : i;
      if (!Array.isArray(t))
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      let n = await r(...t);
      return this._def.output ? Lt(this._def.output, n, void 0, { callee: o }) : n;
    };
    return o;
  }
  input(...r) {
    let o = this.constructor;
    return Array.isArray(r[0])
      ? new o({
          type: "function",
          input: new ze({ type: "tuple", items: r[0], rest: r[1] }),
          output: this._def.output,
        })
      : new o({ type: "function", input: r[0], output: this._def.output });
  }
  output(r) {
    let o = this.constructor;
    return new o({ type: "function", input: this._def.input, output: r });
  }
};
function ea(e) {
  return new xr({
    type: "function",
    input: Array.isArray(e?.input) ? Wi(ze, e?.input) : (e?.input ?? kt(ut, Ne(ye))),
    output: e?.output ?? Ne(ye),
  });
}
var $t = class {
  constructor(r) {
    ((this.counter = 0),
      (this.metadataRegistry = r?.metadata ?? se),
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
      let _ = s.schema;
      switch (t.type) {
        case "string": {
          let d = _;
          d.type = "string";
          let { minimum: h, maximum: b, format: z, patterns: S, contentEncoding: A } = r._zod.bag;
          if (
            (typeof h == "number" && (d.minLength = h),
            typeof b == "number" && (d.maxLength = b),
            z && ((d.format = n[z] ?? z), d.format === "" && delete d.format),
            A && (d.contentEncoding = A),
            S && S.size > 0)
          ) {
            let k = [...S];
            k.length === 1
              ? (d.pattern = k[0].source)
              : k.length > 1 &&
                (s.schema.allOf = [
                  ...k.map((g) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: g.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let d = _,
            {
              minimum: h,
              maximum: b,
              format: z,
              multipleOf: S,
              exclusiveMaximum: A,
              exclusiveMinimum: k,
            } = r._zod.bag;
          (typeof z == "string" && z.includes("int") ? (d.type = "integer") : (d.type = "number"),
            typeof k == "number" && (d.exclusiveMinimum = k),
            typeof h == "number" &&
              ((d.minimum = h),
              typeof k == "number" && (k >= h ? delete d.minimum : delete d.exclusiveMinimum)),
            typeof A == "number" && (d.exclusiveMaximum = A),
            typeof b == "number" &&
              ((d.maximum = b),
              typeof A == "number" && (A <= b ? delete d.maximum : delete d.exclusiveMaximum)),
            typeof S == "number" && (d.multipleOf = S));
          break;
        }
        case "boolean": {
          let d = _;
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
          let d = _;
          d.type = "null";
          break;
        }
        case "null": {
          _.type = "null";
          break;
        }
        case "any":
          break;
        case "unknown":
          break;
        case "never": {
          _.not = {};
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
          let d = _,
            { minimum: h, maximum: b } = r._zod.bag;
          (typeof h == "number" && (d.minItems = h),
            typeof b == "number" && (d.maxItems = b),
            (d.type = "array"),
            (d.items = this.process(t.element, { ...l, path: [...l.path, "items"] })));
          break;
        }
        case "object": {
          let d = _;
          ((d.type = "object"), (d.properties = {}));
          let h = t.shape;
          for (let S in h)
            d.properties[S] = this.process(h[S], { ...l, path: [...l.path, "properties", S] });
          let b = new Set(Object.keys(h)),
            z = new Set(
              [...b].filter((S) => {
                let A = t.shape[S]._zod;
                return this.io === "input" ? A.optin === void 0 : A.optout === void 0;
              }),
            );
          (z.size > 0 && (d.required = Array.from(z)),
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
          let d = _;
          d.anyOf = t.options.map((h, b) =>
            this.process(h, { ...l, path: [...l.path, "anyOf", b] }),
          );
          break;
        }
        case "intersection": {
          let d = _,
            h = this.process(t.left, { ...l, path: [...l.path, "allOf", 0] }),
            b = this.process(t.right, { ...l, path: [...l.path, "allOf", 1] }),
            z = (A) => "allOf" in A && Object.keys(A).length === 1,
            S = [...(z(h) ? h.allOf : [h]), ...(z(b) ? b.allOf : [b])];
          d.allOf = S;
          break;
        }
        case "tuple": {
          let d = _;
          d.type = "array";
          let h = t.items.map((S, A) =>
            this.process(S, { ...l, path: [...l.path, "prefixItems", A] }),
          );
          if ((this.target === "draft-2020-12" ? (d.prefixItems = h) : (d.items = h), t.rest)) {
            let S = this.process(t.rest, { ...l, path: [...l.path, "items"] });
            this.target === "draft-2020-12" ? (d.items = S) : (d.additionalItems = S);
          }
          t.rest && (d.items = this.process(t.rest, { ...l, path: [...l.path, "items"] }));
          let { minimum: b, maximum: z } = r._zod.bag;
          (typeof b == "number" && (d.minItems = b), typeof z == "number" && (d.maxItems = z));
          break;
        }
        case "record": {
          let d = _;
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
          let d = _,
            h = We(t.entries);
          (h.every((b) => typeof b == "number") && (d.type = "number"),
            h.every((b) => typeof b == "string") && (d.type = "string"),
            (d.enum = h));
          break;
        }
        case "literal": {
          let d = _,
            h = [];
          for (let b of t.values)
            if (b === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error("Literal `undefined` cannot be represented in JSON Schema");
            } else if (typeof b == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error("BigInt literals cannot be represented in JSON Schema");
              h.push(Number(b));
            } else h.push(b);
          if (h.length !== 0)
            if (h.length === 1) {
              let b = h[0];
              ((d.type = b === null ? "null" : typeof b), (d.const = b));
            } else
              (h.every((b) => typeof b == "number") && (d.type = "number"),
                h.every((b) => typeof b == "string") && (d.type = "string"),
                h.every((b) => typeof b == "boolean") && (d.type = "string"),
                h.every((b) => b === null) && (d.type = "null"),
                (d.enum = h));
          break;
        }
        case "file": {
          let d = _,
            h = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: b, maximum: z, mime: S } = r._zod.bag;
          (b !== void 0 && (h.minLength = b),
            z !== void 0 && (h.maxLength = z),
            S
              ? S.length === 1
                ? ((h.contentMediaType = S[0]), Object.assign(d, h))
                : (d.anyOf = S.map((A) => ({ ...h, contentMediaType: A })))
              : Object.assign(d, h));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let d = this.process(t.innerType, l);
          _.anyOf = [d, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "success": {
          let d = _;
          d.type = "boolean";
          break;
        }
        case "default": {
          (this.process(t.innerType, l), (s.ref = t.innerType), (_.default = t.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            this.io === "input" && (_._prefault = t.defaultValue));
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
          _.default = d;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let d = _,
            h = r._zod.pattern;
          if (!h) throw new Error("Pattern not found in template literal");
          ((d.type = "string"), (d.pattern = h.source));
          break;
        }
        case "pipe": {
          let d = this.io === "input" ? (t.in._zod.def.type === "transform" ? t.out : t.in) : t.out;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "readonly": {
          (this.process(t.innerType, l), (s.ref = t.innerType), (_.readOnly = !0));
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
    let p = this.metadataRegistry.get(r);
    return (
      p && Object.assign(s.schema, p),
      this.io === "input" && L(r) && (delete s.schema.examples, delete s.schema.default),
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
    let n = (p) => {
        let m = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let b = i.external.registry.get(p[0])?.id;
          if (b) return { ref: i.external.uri(b) };
          let z = p[1].defId ?? p[1].schema.id ?? `schema${this.counter++}`;
          return ((p[1].defId = z), { defId: z, ref: `${i.external.uri("__shared")}#/${m}/${z}` });
        }
        if (p[1] === t) return { ref: "#" };
        let d = `#/${m}/`,
          h = p[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: h, ref: d + h };
      },
      a = (p) => {
        if (p[1].schema.$ref) return;
        let m = p[1],
          { ref: _, defId: d } = n(p);
        ((m.def = { ...m.schema }), d && (m.defId = d));
        let h = m.schema;
        for (let b in h) delete h[b];
        h.$ref = _;
      };
    for (let p of this.seen.entries()) {
      let m = p[1];
      if (r === p[0]) {
        a(p);
        continue;
      }
      if (i.external) {
        let d = i.external.registry.get(p[0])?.id;
        if (r !== p[0] && d) {
          a(p);
          continue;
        }
      }
      if (this.metadataRegistry.get(p[0])?.id) {
        a(p);
        continue;
      }
      if (m.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(p);
        continue;
      }
      if (m.count > 1 && i.reused === "ref") {
        a(p);
        continue;
      }
    }
    let s = (p, m) => {
      let _ = this.seen.get(p),
        d = _.def ?? _.schema,
        h = { ...d };
      if (_.ref === null) return;
      let b = _.ref;
      if (((_.ref = null), b)) {
        s(b, m);
        let z = this.seen.get(b).schema;
        z.$ref && m.target === "draft-7"
          ? ((d.allOf = d.allOf ?? []), d.allOf.push(z))
          : (Object.assign(d, z), Object.assign(d, h));
      }
      _.isParent || this.override({ zodSchema: p, jsonSchema: d });
    };
    for (let p of [...this.seen.entries()].reverse()) s(p[0], { target: this.target });
    let l = {};
    (this.target === "draft-2020-12"
      ? (l.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (l.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(l, t.def));
    let u = i.external?.defs ?? {};
    for (let p of this.seen.entries()) {
      let m = p[1];
      m.def && m.defId && (u[m.defId] = m.def);
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
function ta(e, r) {
  if (e instanceof je) {
    let i = new $t(r),
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
  let o = new $t(r);
  return (o.process(e), o.emit(e, r));
}
function L(e, r) {
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
      return L(t.element, o);
    case "object": {
      for (let n in t.shape) if (L(t.shape[n], o)) return !0;
      return !1;
    }
    case "union": {
      for (let n of t.options) if (L(n, o)) return !0;
      return !1;
    }
    case "intersection":
      return L(t.left, o) || L(t.right, o);
    case "tuple": {
      for (let n of t.items) if (L(n, o)) return !0;
      return !!(t.rest && L(t.rest, o));
    }
    case "record":
      return L(t.keyType, o) || L(t.valueType, o);
    case "map":
      return L(t.keyType, o) || L(t.valueType, o);
    case "set":
      return L(t.valueType, o);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return L(t.innerType, o);
    case "lazy":
      return L(t.getter(), o);
    case "default":
      return L(t.innerType, o);
    case "prefault":
      return L(t.innerType, o);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return L(t.in, o) || L(t.out, o);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${t.type}`);
}
var uu = {};
var Sr = {};
we(Sr, {
  ZodISODate: () => kr,
  ZodISODateTime: () => Ar,
  ZodISODuration: () => zr,
  ZodISOTime: () => $r,
  date: () => na,
  datetime: () => ra,
  duration: () => ia,
  time: () => oa,
});
var Ar = c("ZodISODateTime", (e, r) => {
  (Ao.init(e, r), U.init(e, r));
});
function ra(e) {
  return vi(Ar, e);
}
var kr = c("ZodISODate", (e, r) => {
  (ko.init(e, r), U.init(e, r));
});
function na(e) {
  return yi(kr, e);
}
var $r = c("ZodISOTime", (e, r) => {
  ($o.init(e, r), U.init(e, r));
});
function oa(e) {
  return bi($r, e);
}
var zr = c("ZodISODuration", (e, r) => {
  (zo.init(e, r), U.init(e, r));
});
function ia(e) {
  return wi(zr, e);
}
var cu = (e, r) => {
    (rt.init(e, r),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (o) => ot(e, o) },
        flatten: { value: (o) => nt(e, o) },
        addIssue: { value: (o) => e.issues.push(o) },
        addIssues: { value: (o) => e.issues.push(...o) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  hd = c("ZodError", cu),
  Ce = c("ZodError", cu, { Parent: Error });
var aa = Rt(Ce),
  sa = Ft(Ce),
  ua = Zt(Ce),
  la = Bt(Ce);
var T = c(
    "ZodType",
    (e, r) => (
      P.init(e, r),
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
      (e.clone = (o, i) => J(e, o, i)),
      (e.brand = () => e),
      (e.register = (o, i) => (o.add(e, i), e)),
      (e.parse = (o, i) => aa(e, o, i, { callee: e.parse })),
      (e.safeParse = (o, i) => ua(e, o, i)),
      (e.parseAsync = async (o, i) => sa(e, o, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (o, i) => la(e, o, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (o, i) => e.check(Ku(o, i))),
      (e.superRefine = (o) => e.check(Xu(o))),
      (e.overwrite = (o) => e.check(_e(o))),
      (e.optional = () => Dr(e)),
      (e.nullable = () => Er(e)),
      (e.nullish = () => Dr(Er(e))),
      (e.nonoptional = (o) => Uu(e, o)),
      (e.array = () => Va(e)),
      (e.or = (o) => Mr([e, o])),
      (e.and = (o) => Au(e, o)),
      (e.transform = (o) => Vr(e, ja(o))),
      (e.default = (o) => ju(e, o)),
      (e.prefault = (o) => Mu(e, o)),
      (e.catch = (o) => Fu(e, o)),
      (e.pipe = (o) => Vr(e, o)),
      (e.readonly = () => Bu(e)),
      (e.describe = (o) => {
        let i = e.clone();
        return (se.add(i, { description: o }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return se.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...o) => {
        if (o.length === 0) return se.get(e);
        let i = e.clone();
        return (se.add(i, o[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  _a = c("_ZodString", (e, r) => {
    (at.init(e, r), T.init(e, r));
    let o = e._zod.bag;
    ((e.format = o.format ?? null),
      (e.minLength = o.minimum ?? null),
      (e.maxLength = o.maximum ?? null),
      (e.regex = (...i) => e.check(mt(...i))),
      (e.includes = (...i) => e.check(gt(...i))),
      (e.startsWith = (...i) => e.check(ht(...i))),
      (e.endsWith = (...i) => e.check(vt(...i))),
      (e.min = (...i) => e.check(be(...i))),
      (e.max = (...i) => e.check(Ue(...i))),
      (e.length = (...i) => e.check(Re(...i))),
      (e.nonempty = (...i) => e.check(be(1, ...i))),
      (e.lowercase = (i) => e.check(pt(i))),
      (e.uppercase = (i) => e.check(ft(i))),
      (e.trim = () => e.check(wt())),
      (e.normalize = (...i) => e.check(bt(...i))),
      (e.toLowerCase = () => e.check(xt())),
      (e.toUpperCase = () => e.check(At())));
  }),
  Tr = c("ZodString", (e, r) => {
    (at.init(e, r),
      _a.init(e, r),
      (e.email = (o) => e.check(tr(ma, o))),
      (e.url = (o) => e.check(ar(pa, o))),
      (e.jwt = (o) => e.check(wr(Pa, o))),
      (e.emoji = (o) => e.check(sr(fa, o))),
      (e.guid = (o) => e.check(dt(Ir, o))),
      (e.uuid = (o) => e.check(rr(pe, o))),
      (e.uuidv4 = (o) => e.check(nr(pe, o))),
      (e.uuidv6 = (o) => e.check(or(pe, o))),
      (e.uuidv7 = (o) => e.check(ir(pe, o))),
      (e.nanoid = (o) => e.check(ur(ga, o))),
      (e.guid = (o) => e.check(dt(Ir, o))),
      (e.cuid = (o) => e.check(lr(ha, o))),
      (e.cuid2 = (o) => e.check(cr(va, o))),
      (e.ulid = (o) => e.check(dr(ya, o))),
      (e.base64 = (o) => e.check(vr(za, o))),
      (e.base64url = (o) => e.check(yr(Sa, o))),
      (e.xid = (o) => e.check(_r(ba, o))),
      (e.ksuid = (o) => e.check(mr(wa, o))),
      (e.ipv4 = (o) => e.check(pr(xa, o))),
      (e.ipv6 = (o) => e.check(fr(Aa, o))),
      (e.cidrv4 = (o) => e.check(gr(ka, o))),
      (e.cidrv6 = (o) => e.check(hr($a, o))),
      (e.e164 = (o) => e.check(br(Ia, o))),
      (e.datetime = (o) => e.check(ra(o))),
      (e.date = (o) => e.check(na(o))),
      (e.time = (o) => e.check(oa(o))),
      (e.duration = (o) => e.check(ia(o))));
  });
function ca(e) {
  return gi(Tr, e);
}
var U = c("ZodStringFormat", (e, r) => {
    (M.init(e, r), _a.init(e, r));
  }),
  ma = c("ZodEmail", (e, r) => {
    (po.init(e, r), U.init(e, r));
  });
function yd(e) {
  return tr(ma, e);
}
var Ir = c("ZodGUID", (e, r) => {
  (_o.init(e, r), U.init(e, r));
});
function bd(e) {
  return dt(Ir, e);
}
var pe = c("ZodUUID", (e, r) => {
  (mo.init(e, r), U.init(e, r));
});
function wd(e) {
  return rr(pe, e);
}
function xd(e) {
  return nr(pe, e);
}
function Ad(e) {
  return or(pe, e);
}
function kd(e) {
  return ir(pe, e);
}
var pa = c("ZodURL", (e, r) => {
  (fo.init(e, r), U.init(e, r));
});
function $d(e) {
  return ar(pa, e);
}
var fa = c("ZodEmoji", (e, r) => {
  (go.init(e, r), U.init(e, r));
});
function zd(e) {
  return sr(fa, e);
}
var ga = c("ZodNanoID", (e, r) => {
  (ho.init(e, r), U.init(e, r));
});
function Sd(e) {
  return ur(ga, e);
}
var ha = c("ZodCUID", (e, r) => {
  (vo.init(e, r), U.init(e, r));
});
function Id(e) {
  return lr(ha, e);
}
var va = c("ZodCUID2", (e, r) => {
  (yo.init(e, r), U.init(e, r));
});
function Pd(e) {
  return cr(va, e);
}
var ya = c("ZodULID", (e, r) => {
  (bo.init(e, r), U.init(e, r));
});
function Dd(e) {
  return dr(ya, e);
}
var ba = c("ZodXID", (e, r) => {
  (wo.init(e, r), U.init(e, r));
});
function Ed(e) {
  return _r(ba, e);
}
var wa = c("ZodKSUID", (e, r) => {
  (xo.init(e, r), U.init(e, r));
});
function Vd(e) {
  return mr(wa, e);
}
var xa = c("ZodIPv4", (e, r) => {
  (So.init(e, r), U.init(e, r));
});
function Td(e) {
  return pr(xa, e);
}
var Aa = c("ZodIPv6", (e, r) => {
  (Io.init(e, r), U.init(e, r));
});
function Od(e) {
  return fr(Aa, e);
}
var ka = c("ZodCIDRv4", (e, r) => {
  (Po.init(e, r), U.init(e, r));
});
function jd(e) {
  return gr(ka, e);
}
var $a = c("ZodCIDRv6", (e, r) => {
  (Do.init(e, r), U.init(e, r));
});
function Nd(e) {
  return hr($a, e);
}
var za = c("ZodBase64", (e, r) => {
  (Vo.init(e, r), U.init(e, r));
});
function Md(e) {
  return vr(za, e);
}
var Sa = c("ZodBase64URL", (e, r) => {
  (To.init(e, r), U.init(e, r));
});
function Ud(e) {
  return yr(Sa, e);
}
var Ia = c("ZodE164", (e, r) => {
  (Oo.init(e, r), U.init(e, r));
});
function Rd(e) {
  return br(Ia, e);
}
var Pa = c("ZodJWT", (e, r) => {
  (jo.init(e, r), U.init(e, r));
});
function Cd(e) {
  return wr(Pa, e);
}
var St = c("ZodNumber", (e, r) => {
  (Kt.init(e, r),
    T.init(e, r),
    (e.gt = (i, t) => e.check(de(i, t))),
    (e.gte = (i, t) => e.check(W(i, t))),
    (e.min = (i, t) => e.check(W(i, t))),
    (e.lt = (i, t) => e.check(ce(i, t))),
    (e.lte = (i, t) => e.check(te(i, t))),
    (e.max = (i, t) => e.check(te(i, t))),
    (e.int = (i) => e.check(da(i))),
    (e.safe = (i) => e.check(da(i))),
    (e.positive = (i) => e.check(de(0, i))),
    (e.nonnegative = (i) => e.check(W(0, i))),
    (e.negative = (i) => e.check(ce(0, i))),
    (e.nonpositive = (i) => e.check(te(0, i))),
    (e.multipleOf = (i, t) => e.check(Se(i, t))),
    (e.step = (i, t) => e.check(Se(i, t))),
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
function du(e) {
  return xi(St, e);
}
var Fe = c("ZodNumberFormat", (e, r) => {
  (No.init(e, r), St.init(e, r));
});
function da(e) {
  return ki(Fe, e);
}
function Fd(e) {
  return $i(Fe, e);
}
function Ld(e) {
  return zi(Fe, e);
}
function Zd(e) {
  return Si(Fe, e);
}
function Bd(e) {
  return Ii(Fe, e);
}
var It = c("ZodBoolean", (e, r) => {
  (st.init(e, r), T.init(e, r));
});
function _u(e) {
  return Pi(It, e);
}
var Pt = c("ZodBigInt", (e, r) => {
  (Xt.init(e, r),
    T.init(e, r),
    (e.gte = (i, t) => e.check(W(i, t))),
    (e.min = (i, t) => e.check(W(i, t))),
    (e.gt = (i, t) => e.check(de(i, t))),
    (e.gte = (i, t) => e.check(W(i, t))),
    (e.min = (i, t) => e.check(W(i, t))),
    (e.lt = (i, t) => e.check(ce(i, t))),
    (e.lte = (i, t) => e.check(te(i, t))),
    (e.max = (i, t) => e.check(te(i, t))),
    (e.positive = (i) => e.check(de(BigInt(0), i))),
    (e.negative = (i) => e.check(ce(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(te(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(W(BigInt(0), i))),
    (e.multipleOf = (i, t) => e.check(Se(i, t))));
  let o = e._zod.bag;
  ((e.minValue = o.minimum ?? null),
    (e.maxValue = o.maximum ?? null),
    (e.format = o.format ?? null));
});
function qd(e) {
  return Ei(Pt, e);
}
var Da = c("ZodBigIntFormat", (e, r) => {
  (Mo.init(e, r), Pt.init(e, r));
});
function Gd(e) {
  return Ti(Da, e);
}
function Hd(e) {
  return Oi(Da, e);
}
var mu = c("ZodSymbol", (e, r) => {
  (Uo.init(e, r), T.init(e, r));
});
function Yd(e) {
  return ji(mu, e);
}
var pu = c("ZodUndefined", (e, r) => {
  (Ro.init(e, r), T.init(e, r));
});
function Wd(e) {
  return Ni(pu, e);
}
var fu = c("ZodNull", (e, r) => {
  (Co.init(e, r), T.init(e, r));
});
function gu(e) {
  return Mi(fu, e);
}
var hu = c("ZodAny", (e, r) => {
  (Fo.init(e, r), T.init(e, r));
});
function Kd() {
  return Ui(hu);
}
var Ea = c("ZodUnknown", (e, r) => {
  (ye.init(e, r), T.init(e, r));
});
function Pr() {
  return Ne(Ea);
}
var vu = c("ZodNever", (e, r) => {
  (Lo.init(e, r), T.init(e, r));
});
function Or(e) {
  return Ri(vu, e);
}
var yu = c("ZodVoid", (e, r) => {
  (Zo.init(e, r), T.init(e, r));
});
function Xd(e) {
  return Ci(yu, e);
}
var jr = c("ZodDate", (e, r) => {
  (Bo.init(e, r),
    T.init(e, r),
    (e.min = (i, t) => e.check(W(i, t))),
    (e.max = (i, t) => e.check(te(i, t))));
  let o = e._zod.bag;
  ((e.minDate = o.minimum ? new Date(o.minimum) : null),
    (e.maxDate = o.maximum ? new Date(o.maximum) : null));
});
function Jd(e) {
  return Fi(jr, e);
}
var bu = c("ZodArray", (e, r) => {
  (ut.init(e, r),
    T.init(e, r),
    (e.element = r.element),
    (e.min = (o, i) => e.check(be(o, i))),
    (e.nonempty = (o) => e.check(be(1, o))),
    (e.max = (o, i) => e.check(Ue(o, i))),
    (e.length = (o, i) => e.check(Re(o, i))),
    (e.unwrap = () => e.element));
});
function Va(e, r) {
  return kt(bu, e, r);
}
function Qd(e) {
  let r = e._zod.def.shape;
  return Du(Object.keys(r));
}
var Nr = c("ZodObject", (e, r) => {
  (qo.init(e, r),
    T.init(e, r),
    w.defineLazy(e, "shape", () => Object.fromEntries(Object.entries(e._zod.def.shape))),
    (e.keyof = () => Iu(Object.keys(e._zod.def.shape))),
    (e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: Pr() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: Pr() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: Or() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (o) => w.extend(e, o)),
    (e.merge = (o) => w.merge(e, o)),
    (e.pick = (o) => w.pick(e, o)),
    (e.omit = (o) => w.omit(e, o)),
    (e.partial = (...o) => w.partial(Na, e, o[0])),
    (e.required = (...o) => w.required(Ma, e, o[0])));
});
function e_(e, r) {
  let o = {
    type: "object",
    get shape() {
      return (w.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...w.normalizeParams(r),
  };
  return new Nr(o);
}
function t_(e, r) {
  return new Nr({
    type: "object",
    get shape() {
      return (w.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: Or(),
    ...w.normalizeParams(r),
  });
}
function r_(e, r) {
  return new Nr({
    type: "object",
    get shape() {
      return (w.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: Pr(),
    ...w.normalizeParams(r),
  });
}
var Ta = c("ZodUnion", (e, r) => {
  (Jt.init(e, r), T.init(e, r), (e.options = r.options));
});
function Mr(e, r) {
  return new Ta({ type: "union", options: e, ...w.normalizeParams(r) });
}
var wu = c("ZodDiscriminatedUnion", (e, r) => {
  (Ta.init(e, r), Go.init(e, r));
});
function n_(e, r, o) {
  return new wu({ type: "union", options: r, discriminator: e, ...w.normalizeParams(o) });
}
var xu = c("ZodIntersection", (e, r) => {
  (Ho.init(e, r), T.init(e, r));
});
function Au(e, r) {
  return new xu({ type: "intersection", left: e, right: r });
}
var ku = c("ZodTuple", (e, r) => {
  (ze.init(e, r), T.init(e, r), (e.rest = (o) => e.clone({ ...e._zod.def, rest: o })));
});
function o_(e, r, o) {
  let i = r instanceof P,
    t = i ? o : r,
    n = i ? r : null;
  return new ku({ type: "tuple", items: e, rest: n, ...w.normalizeParams(t) });
}
var Oa = c("ZodRecord", (e, r) => {
  (Yo.init(e, r), T.init(e, r), (e.keyType = r.keyType), (e.valueType = r.valueType));
});
function $u(e, r, o) {
  return new Oa({ type: "record", keyType: e, valueType: r, ...w.normalizeParams(o) });
}
function i_(e, r, o) {
  return new Oa({ type: "record", keyType: Mr([e, Or()]), valueType: r, ...w.normalizeParams(o) });
}
var zu = c("ZodMap", (e, r) => {
  (Wo.init(e, r), T.init(e, r), (e.keyType = r.keyType), (e.valueType = r.valueType));
});
function a_(e, r, o) {
  return new zu({ type: "map", keyType: e, valueType: r, ...w.normalizeParams(o) });
}
var Su = c("ZodSet", (e, r) => {
  (Ko.init(e, r),
    T.init(e, r),
    (e.min = (...o) => e.check(Ie(...o))),
    (e.nonempty = (o) => e.check(Ie(1, o))),
    (e.max = (...o) => e.check(Me(...o))),
    (e.size = (...o) => e.check(_t(...o))));
});
function s_(e, r) {
  return new Su({ type: "set", valueType: e, ...w.normalizeParams(r) });
}
var zt = c("ZodEnum", (e, r) => {
  (Xo.init(e, r), T.init(e, r), (e.enum = r.entries), (e.options = Object.values(r.entries)));
  let o = new Set(Object.keys(r.entries));
  ((e.extract = (i, t) => {
    let n = {};
    for (let a of i)
      if (o.has(a)) n[a] = r.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new zt({ ...r, checks: [], ...w.normalizeParams(t), entries: n });
  }),
    (e.exclude = (i, t) => {
      let n = { ...r.entries };
      for (let a of i)
        if (o.has(a)) delete n[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new zt({ ...r, checks: [], ...w.normalizeParams(t), entries: n });
    }));
});
function Iu(e, r) {
  let o = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new zt({ type: "enum", entries: o, ...w.normalizeParams(r) });
}
function u_(e, r) {
  return new zt({ type: "enum", entries: e, ...w.normalizeParams(r) });
}
var Pu = c("ZodLiteral", (e, r) => {
  (Jo.init(e, r),
    T.init(e, r),
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
function Du(e, r) {
  return new Pu({ type: "literal", values: Array.isArray(e) ? e : [e], ...w.normalizeParams(r) });
}
var Eu = c("ZodFile", (e, r) => {
  (Qo.init(e, r),
    T.init(e, r),
    (e.min = (o, i) => e.check(Ie(o, i))),
    (e.max = (o, i) => e.check(Me(o, i))),
    (e.mime = (o, i) => e.check(yt(Array.isArray(o) ? o : [o], i))));
});
function l_(e) {
  return Ki(Eu, e);
}
var Vu = c("ZodTransform", (e, r) => {
  (ei.init(e, r),
    T.init(e, r),
    (e._zod.parse = (o, i) => {
      o.addIssue = (n) => {
        if (typeof n == "string") o.issues.push(w.issue(n, o.value, r));
        else {
          let a = n;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = o.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            o.issues.push(w.issue(a)));
        }
      };
      let t = r.transform(o.value, o);
      return t instanceof Promise ? t.then((n) => ((o.value = n), o)) : ((o.value = t), o);
    }));
});
function ja(e) {
  return new Vu({ type: "transform", transform: e });
}
var Na = c("ZodOptional", (e, r) => {
  (ti.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function Dr(e) {
  return new Na({ type: "optional", innerType: e });
}
var Tu = c("ZodNullable", (e, r) => {
  (ri.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function Er(e) {
  return new Tu({ type: "nullable", innerType: e });
}
function c_(e) {
  return Dr(Er(e));
}
var Ou = c("ZodDefault", (e, r) => {
  (ni.init(e, r),
    T.init(e, r),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function ju(e, r) {
  return new Ou({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
var Nu = c("ZodPrefault", (e, r) => {
  (oi.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function Mu(e, r) {
  return new Nu({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
var Ma = c("ZodNonOptional", (e, r) => {
  (ii.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function Uu(e, r) {
  return new Ma({ type: "nonoptional", innerType: e, ...w.normalizeParams(r) });
}
var Ru = c("ZodSuccess", (e, r) => {
  (ai.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function d_(e) {
  return new Ru({ type: "success", innerType: e });
}
var Cu = c("ZodCatch", (e, r) => {
  (si.init(e, r),
    T.init(e, r),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Fu(e, r) {
  return new Cu({ type: "catch", innerType: e, catchValue: typeof r == "function" ? r : () => r });
}
var Lu = c("ZodNaN", (e, r) => {
  (ui.init(e, r), T.init(e, r));
});
function __(e) {
  return Zi(Lu, e);
}
var Ua = c("ZodPipe", (e, r) => {
  (lt.init(e, r), T.init(e, r), (e.in = r.in), (e.out = r.out));
});
function Vr(e, r) {
  return new Ua({ type: "pipe", in: e, out: r });
}
var Zu = c("ZodReadonly", (e, r) => {
  (li.init(e, r), T.init(e, r));
});
function Bu(e) {
  return new Zu({ type: "readonly", innerType: e });
}
var qu = c("ZodTemplateLiteral", (e, r) => {
  (ci.init(e, r), T.init(e, r));
});
function m_(e, r) {
  return new qu({ type: "template_literal", parts: e, ...w.normalizeParams(r) });
}
var Gu = c("ZodLazy", (e, r) => {
  (_i.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.getter()));
});
function Hu(e) {
  return new Gu({ type: "lazy", getter: e });
}
var Yu = c("ZodPromise", (e, r) => {
  (di.init(e, r), T.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function p_(e) {
  return new Yu({ type: "promise", innerType: e });
}
var Ur = c("ZodCustom", (e, r) => {
  (mi.init(e, r), T.init(e, r));
});
function Wu(e, r) {
  let o = new C({ check: "custom", ...w.normalizeParams(r) });
  return ((o._zod.check = e), o);
}
function f_(e, r) {
  return Xi(Ur, e ?? (() => !0), r);
}
function Ku(e, r = {}) {
  return Ji(Ur, e, r);
}
function Xu(e, r) {
  let o = Wu(
    (i) => (
      (i.addIssue = (t) => {
        if (typeof t == "string") i.issues.push(w.issue(t, i.value, o._zod.def));
        else {
          let n = t;
          (n.fatal && (n.continue = !1),
            n.code ?? (n.code = "custom"),
            n.input ?? (n.input = i.value),
            n.inst ?? (n.inst = o),
            n.continue ?? (n.continue = !o._zod.def.abort),
            i.issues.push(w.issue(n)));
        }
      }),
      e(i.value, i)
    ),
    r,
  );
  return o;
}
function g_(e, r = { error: `Input not instance of ${e.name}` }) {
  let o = new Ur({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...w.normalizeParams(r),
  });
  return ((o._zod.bag.Class = e), o);
}
var h_ = (...e) => Qi({ Pipe: Ua, Boolean: It, Unknown: Ea }, ...e);
function v_(e) {
  let r = Hu(() => Mr([ca(e), du(), _u(), gu(), Va(r), $u(ca(), r)]));
  return r;
}
function y_(e, r) {
  return Vr(ja(e), r);
}
var b_ = {
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
  w_ = Object.freeze({ status: "aborted" }),
  x_ = w_;
function A_(e) {
  F({ customError: e });
}
function k_() {
  return F().customError;
}
var Ra = {};
we(Ra, { bigint: () => I_, boolean: () => S_, date: () => P_, number: () => z_, string: () => $_ });
function $_(e) {
  return hi(Tr, e);
}
function z_(e) {
  return Ai(St, e);
}
function S_(e) {
  return Di(It, e);
}
function I_(e) {
  return Vi(Pt, e);
}
function P_(e) {
  return Li(jr, e);
}
F(Qt());
Qr && v.config({ jitless: !0 });
var Ju = [
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
  Rr = [
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
  Ca = [
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
var ob = new Set(Ju),
  D_ = v.enum(Rr),
  E_ = v.enum(Ca),
  Qu = v.map(D_, v.string()),
  el = v.map(E_, v.string()),
  ib = new Set(Rr);
var rl = v.templateLiteral(["ded_", v.string()]),
  T_ = v.templateLiteral(["media_hash_", v.number()]),
  tl = v.enum(["download", "download_as", "download_audio", "copy"]),
  O_ = v.enum(["popup", "sidebar"]),
  La = v.string().brand("directorypath"),
  j_ = v.strictObject({
    downloaded_id: rl,
    media_hash: T_,
    path: v.string(),
    browser_download_id: v.number(),
    download_timestamp: v.number(),
    origin_url: v.nullable(v.url()),
    origin_favicon_url: v.nullable(v.url()),
    has_drm: v.boolean(),
    subdir: v.optional(La),
  }),
  N_ = v.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]),
  M_ = v.object({
    iat: v.optional(v.number()),
    user_id: v.number(),
    store: v.string().max(256),
    jti: v.string().max(512),
    valid_until: v.number(),
    exp: v.number(),
    developer: v.boolean().optional(),
    entitlement_type: N_.optional(),
  }),
  U_ = M_.extend({ raw: v.string() }),
  R_ = v.enum(["original", "user_language"]),
  C_ = v.enum(["none", "video", "image"]),
  F_ = v.enum(["system", "light", "dark"]),
  L_ = v.enum(["big", "medium", "small"]),
  Z_ = v.enum(["verylarge", "large", "default"]),
  B_ = v.strictObject({
    max_length: v.number(),
    template: v.string(),
    force_doc_title: v.optional(v.boolean()),
  }),
  q_ = v.strictObject({
    template: v.string(),
    url: v.string(),
    max_length: v.nullable(v.number()),
    selector: v.nullable(v.string()),
    subdir: v.optional(La),
    force_doc_title: v.optional(v.boolean()),
    replace: v.optional(v.array(v.strictObject({ from: v.string(), to: v.string() }))),
  }),
  G_ = v.enum(["SMART", "OLDEST", "NEWEST"]),
  Fa = v.strictObject({
    version: v.number(),
    default_action: tl,
    default_action_per_hostname: v.map(v.string(), tl),
    downloaded: v.map(rl, j_),
    jwt: v.nullable(U_),
    lsd: v.number(),
    dockmode: O_,
    download_directory: La,
    youtube_throttle: v.boolean(),
    youtube_audio_strategy: R_,
    max_concurrent_downloads: v.number(),
    show_desktop_notifications: v.boolean(),
    show_desktop_notifications_private: v.boolean(),
    history_days: v.number(),
    show_transient_history: v.boolean(),
    ui_theme: F_,
    use_context_menu: v.boolean(),
    dont_ask_for_user_review: v.boolean(),
    successful_downloads_count: v.number(),
    prefered_quality: v.nullable(v.number()),
    prefered_av_muxer: v.enum(["mp4", "mkv"]),
    hide_nomedia_box: v.boolean(),
    popup_size: L_,
    font_size: Z_,
    prefered_discovered_media_order: G_,
    smartnaming: v.strictObject({
      source: v.nullable(v.string()),
      compiled: v.strictObject({ default_: B_, rules: v.array(q_) }),
    }),
    preview_mode: C_,
    last_migration_request: v.number(),
    custom_strings: v.strictObject({ web: el, addon: Qu }),
  }),
  lb = Fa.readonly();
function nl(e) {
  let r = Za();
  if (e && typeof e == "object")
    for (let o of Object.keys(Fa.shape)) {
      let i = Fa.shape[o];
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
var H_ = 1710169438e3;
function Za() {
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
    jwt: null,
    lsd: H_,
    default_action: "download",
    hide_nomedia_box: !0,
    dont_ask_for_user_review: !1,
    dockmode: "popup",
    download_directory: Nt,
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
    smartnaming: { source: null, compiled: ts() },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
  };
}
function ol() {
  return {
    current_win_tab: { tab_id: K, win_id: K },
    notifications: new Map(),
    discovered: new Map(),
    downloading: new Map(),
    transient_history: [],
    suspecting_saveas: !1,
  };
}
var Ba = "global_session_state",
  qa = "global_persistent_state",
  K_ = "session";
async function il() {
  let e = await Ga.storage[K_].get(Ba);
  if (Ba in e) {
    let r = e[Ba];
    return ee(r);
  } else return ol();
}
async function al() {
  let e = await Ga.storage.local.get(qa);
  if (qa in e) {
    let r = e[qa];
    return nl(ee(r));
  }
  return Za();
}
var sl = new URL(document.location.toString()).searchParams,
  X_ = sl.get("tab_id") ?? "",
  ul = sl.get("media_hash") ?? "",
  J_ = await il(),
  Cr = await al(),
  ll = J_.discovered.get(parseInt(X_)),
  N = ll?.media.get(ul),
  fe = ll?.meta.unwrapOr(null);
if (fe && N) {
  let e = (i) => i.href,
    { basename: r, subdir: o } = Xr(N, fe);
  (Z("Tab", `${fe.tab_id} (incognito: ${fe.incognito})`),
    Z("Basename", r),
    Z("SubDir", o),
    Z("Hash", ul),
    Z(
      "Page URL",
      `${fe.url.map(e).unwrapOr("none")} with ${[...N.sent_headers.values()].length} headers`,
    ),
    Z("Thumbnail", fe.thumbnail_url.map(e).unwrapOr("none")),
    Z("Type", N.type),
    Z("DRM Protected", `${N.has_drm}`),
    "duration" in N && Z("Duration", N.duration.toString()),
    "demuxer" in N && Z("Demuxer", N.demuxer),
    "extension" in N && Z("Extension", N.extension),
    "url" in N
      ? Z("Media URL", N.url.href)
      : N.type == "m3u8_playlist" && Z("Master URL", N.master_url.href),
    "playlist" in N && N.type != "mpd_playlist" && Q_(N));
  for (let [i, t] of [...N.sent_headers.entries()]) Z(i, t);
}
function Q_(e) {
  let r = 0,
    o = e.playlist;
  for (let i of o) {
    if (!("video" in i.av)) return;
    (i.av.video &&
      ("url" in i.av.video
        ? Z(`#${r} video component`, i.av.video.url.href)
        : Z(`#${r} video component`, i.av.video.href)),
      i.av.audio &&
        ("url" in i.av.audio
          ? Z(`#${r} audio component`, i.av.audio.url.href)
          : Z(`#${r} audio component`, i.av.audio.href)));
    let t = i.demuxer;
    ((t += " b:" + i.quality.bitrate),
      (t += " p:" + i.quality.size.map((n) => `${n.width}x${n.height}`).unwrapOr("none")),
      Z(`#${r} core media`, t),
      r++);
  }
}
function Z(e, r, o) {
  let i = document.querySelector("tbody"),
    t = document.createElement("tr"),
    n = document.createElement("th"),
    a = document.createElement("td");
  (t.appendChild(n),
    t.appendChild(a),
    (n.textContent = e),
    (a.textContent = r),
    o && t.classList.add("separator"),
    i.appendChild(t));
}
if (N && fe) {
  let e,
    { basename: r, subdir: o } = Xr(N, fe),
    i = N.is_youtube && Cr.youtube_throttle;
  if ("playlist" in N) {
    let s = Qa(N, Cr.prefered_quality);
    e = Jr(N, !1, !1, Cr.prefered_av_muxer, r, o, s, i);
  } else e = Jr(N, !1, !1, Cr.prefered_av_muxer, r, o, void 0, i);
  let t = new Et(),
    n = `libav-${Dt.VER}-${Dt.CONFIG}.wasm.wasm`,
    a = await Dt.LibAV({
      noworker: !0,
      base: "/download_worker/",
      wasmurl: `../download_worker/${n}`,
    });
  ((a.onwrite = t.onwrite.bind(t)),
    (window.debug = { libav: a, meta: fe, media: N, args: e }),
    await a.ffmpeg("-version"));
}
