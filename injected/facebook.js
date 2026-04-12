var Kt = Object.create;
var Tr = Object.defineProperty;
var en = Object.getOwnPropertyDescriptor;
var rn = Object.getOwnPropertyNames;
var tn = Object.getPrototypeOf,
  nn = Object.prototype.hasOwnProperty;
var te = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var un = (e, r, t, n) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let u of rn(r))
      !nn.call(e, u) &&
        u !== t &&
        Tr(e, u, { get: () => r[u], enumerable: !(n = en(r, u)) || n.enumerable });
  return e;
};
var ve = (e, r, t) => (
  (t = e != null ? Kt(tn(e)) : {}),
  un(r || !e || !e.__esModule ? Tr(t, "default", { value: e, enumerable: !0 }) : t, e)
);
var Ir = te((ur, Br) => {
  (function (e, r) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
    else if (typeof ur < "u") r(Br);
    else {
      var t = { exports: {} };
      (r(t), (e.browser = t.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ur, function (e) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      e.exports = globalThis.browser;
    else {
      let r = "The message port closed before a response was received.",
        t = (n) => {
          let u = {
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
          if (Object.keys(u).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class i extends WeakMap {
            constructor(f, v = void 0) {
              (super(v), (this.createItem = f));
            }
            get(f) {
              return (this.has(f) || this.set(f, this.createItem(f)), super.get(f));
            }
          }
          let a = (p) => p && typeof p == "object" && typeof p.then == "function",
            s =
              (p, f) =>
              (...v) => {
                n.runtime.lastError
                  ? p.reject(new Error(n.runtime.lastError.message))
                  : f.singleCallbackArg || (v.length <= 1 && f.singleCallbackArg !== !1)
                    ? p.resolve(v[0])
                    : p.resolve(v);
              },
            l = (p) => (p == 1 ? "argument" : "arguments"),
            o = (p, f) =>
              function (E, ...B) {
                if (B.length < f.minArgs)
                  throw new Error(
                    `Expected at least ${f.minArgs} ${l(f.minArgs)} for ${p}(), got ${B.length}`,
                  );
                if (B.length > f.maxArgs)
                  throw new Error(
                    `Expected at most ${f.maxArgs} ${l(f.maxArgs)} for ${p}(), got ${B.length}`,
                  );
                return new Promise((x, P) => {
                  if (f.fallbackToNoCallback)
                    try {
                      E[p](...B, s({ resolve: x, reject: P }, f));
                    } catch (A) {
                      (console.warn(
                        `${p} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        A,
                      ),
                        E[p](...B),
                        (f.fallbackToNoCallback = !1),
                        (f.noCallback = !0),
                        x());
                    }
                  else
                    f.noCallback ? (E[p](...B), x()) : E[p](...B, s({ resolve: x, reject: P }, f));
                });
              },
            c = (p, f, v) =>
              new Proxy(f, {
                apply(E, B, x) {
                  return v.call(B, p, ...x);
                },
              }),
            m = Function.call.bind(Object.prototype.hasOwnProperty),
            d = (p, f = {}, v = {}) => {
              let E = Object.create(null),
                B = {
                  has(P, A) {
                    return A in p || A in E;
                  },
                  get(P, A, q) {
                    if (A in E) return E[A];
                    if (!(A in p)) return;
                    let I = p[A];
                    if (typeof I == "function")
                      if (typeof f[A] == "function") I = c(p, p[A], f[A]);
                      else if (m(v, A)) {
                        let Y = o(A, v[A]);
                        I = c(p, p[A], Y);
                      } else I = I.bind(p);
                    else if (typeof I == "object" && I !== null && (m(f, A) || m(v, A)))
                      I = d(I, f[A], v[A]);
                    else if (m(v, "*")) I = d(I, f[A], v["*"]);
                    else
                      return (
                        Object.defineProperty(E, A, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return p[A];
                          },
                          set(Y) {
                            p[A] = Y;
                          },
                        }),
                        I
                      );
                    return ((E[A] = I), I);
                  },
                  set(P, A, q, I) {
                    return (A in E ? (E[A] = q) : (p[A] = q), !0);
                  },
                  defineProperty(P, A, q) {
                    return Reflect.defineProperty(E, A, q);
                  },
                  deleteProperty(P, A) {
                    return Reflect.deleteProperty(E, A);
                  },
                },
                x = Object.create(p);
              return new Proxy(x, B);
            },
            h = (p) => ({
              addListener(f, v, ...E) {
                f.addListener(p.get(v), ...E);
              },
              hasListener(f, v) {
                return f.hasListener(p.get(v));
              },
              removeListener(f, v) {
                f.removeListener(p.get(v));
              },
            }),
            g = new i((p) =>
              typeof p != "function"
                ? p
                : function (v) {
                    let E = d(v, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    p(E);
                  },
            ),
            D = new i((p) =>
              typeof p != "function"
                ? p
                : function (v, E, B) {
                    let x = !1,
                      P,
                      A = new Promise((re) => {
                        P = function (_) {
                          ((x = !0), re(_));
                        };
                      }),
                      q;
                    try {
                      q = p(v, E, P);
                    } catch (re) {
                      q = Promise.reject(re);
                    }
                    let I = q !== !0 && a(q);
                    if (q !== !0 && !I && !x) return !1;
                    let Y = (re) => {
                      re.then(
                        (_) => {
                          B(_);
                        },
                        (_) => {
                          let U;
                          (_ && (_ instanceof Error || typeof _.message == "string")
                            ? (U = _.message)
                            : (U = "An unexpected error occurred"),
                            B({ __mozWebExtensionPolyfillReject__: !0, message: U }));
                        },
                      ).catch((_) => {
                        console.error("Failed to send onMessage rejected reply", _);
                      });
                    };
                    return (Y(I ? q : A), !0);
                  },
            ),
            y = ({ reject: p, resolve: f }, v) => {
              n.runtime.lastError
                ? n.runtime.lastError.message === r
                  ? f()
                  : p(new Error(n.runtime.lastError.message))
                : v && v.__mozWebExtensionPolyfillReject__
                  ? p(new Error(v.message))
                  : f(v);
            },
            b = (p, f, v, ...E) => {
              if (E.length < f.minArgs)
                throw new Error(
                  `Expected at least ${f.minArgs} ${l(f.minArgs)} for ${p}(), got ${E.length}`,
                );
              if (E.length > f.maxArgs)
                throw new Error(
                  `Expected at most ${f.maxArgs} ${l(f.maxArgs)} for ${p}(), got ${E.length}`,
                );
              return new Promise((B, x) => {
                let P = y.bind(null, { resolve: B, reject: x });
                (E.push(P), v.sendMessage(...E));
              });
            },
            O = {
              devtools: { network: { onRequestFinished: h(g) } },
              runtime: {
                onMessage: h(D),
                onMessageExternal: h(D),
                sendMessage: b.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: b.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            S = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (u.privacy = { network: { "*": S }, services: { "*": S }, websites: { "*": S } }),
            d(n, O, u)
          );
        };
      e.exports = t(chrome);
    }
  });
});
var Ge = te((Hi, Ur) => {
  var be;
  typeof window < "u"
    ? (be = window)
    : typeof global < "u"
      ? (be = global)
      : typeof self < "u"
        ? (be = self)
        : (be = {});
  Ur.exports = be;
});
var Se = te((le) => {
  "use strict";
  function En(e, r, t) {
    if ((t === void 0 && (t = Array.prototype), e && typeof t.find == "function"))
      return t.find.call(e, r);
    for (var n = 0; n < e.length; n++)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var u = e[n];
        if (r.call(void 0, u, n, e)) return u;
      }
  }
  function sr(e, r) {
    return (r === void 0 && (r = Object), r && typeof r.freeze == "function" ? r.freeze(e) : e);
  }
  function _n(e, r) {
    if (e === null || typeof e != "object") throw new TypeError("target is not an object");
    for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    return e;
  }
  var Vr = sr({
      HTML: "text/html",
      isHTML: function (e) {
        return e === Vr.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml",
    }),
    zr = sr({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (e) {
        return e === zr.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
    });
  le.assign = _n;
  le.find = En;
  le.freeze = sr;
  le.MIME_TYPE = Vr;
  le.NAMESPACE = zr;
});
var yr = te((ue) => {
  var Qr = Se(),
    Q = Qr.find,
    we = Qr.NAMESPACE;
  function bn(e) {
    return e !== "";
  }
  function Sn(e) {
    return e ? e.split(/[\t\n\f\r ]+/).filter(bn) : [];
  }
  function wn(e, r) {
    return (e.hasOwnProperty(r) || (e[r] = !0), e);
  }
  function Gr(e) {
    if (!e) return [];
    var r = Sn(e);
    return Object.keys(r.reduce(wn, {}));
  }
  function xn(e) {
    return function (r) {
      return e && e.indexOf(r) !== -1;
    };
  }
  function Te(e, r) {
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
  }
  function H(e, r) {
    var t = e.prototype;
    if (!(t instanceof r)) {
      let u = function () {};
      var n = u;
      ((u.prototype = r.prototype), (u = new u()), Te(t, u), (e.prototype = t = u));
    }
    t.constructor != e &&
      (typeof e != "function" && console.error("unknown Class:" + e), (t.constructor = e));
  }
  var W = {},
    j = (W.ELEMENT_NODE = 1),
    me = (W.ATTRIBUTE_NODE = 2),
    We = (W.TEXT_NODE = 3),
    Jr = (W.CDATA_SECTION_NODE = 4),
    Zr = (W.ENTITY_REFERENCE_NODE = 5),
    Tn = (W.ENTITY_NODE = 6),
    Kr = (W.PROCESSING_INSTRUCTION_NODE = 7),
    et = (W.COMMENT_NODE = 8),
    rt = (W.DOCUMENT_NODE = 9),
    tt = (W.DOCUMENT_TYPE_NODE = 10),
    K = (W.DOCUMENT_FRAGMENT_NODE = 11),
    Cn = (W.NOTATION_NODE = 12),
    k = {},
    F = {},
    Xi = (k.INDEX_SIZE_ERR = ((F[1] = "Index size error"), 1)),
    Qi = (k.DOMSTRING_SIZE_ERR = ((F[2] = "DOMString size error"), 2)),
    G = (k.HIERARCHY_REQUEST_ERR = ((F[3] = "Hierarchy request error"), 3)),
    Ji = (k.WRONG_DOCUMENT_ERR = ((F[4] = "Wrong document"), 4)),
    Zi = (k.INVALID_CHARACTER_ERR = ((F[5] = "Invalid character"), 5)),
    Ki = (k.NO_DATA_ALLOWED_ERR = ((F[6] = "No data allowed"), 6)),
    eo = (k.NO_MODIFICATION_ALLOWED_ERR = ((F[7] = "No modification allowed"), 7)),
    nt = (k.NOT_FOUND_ERR = ((F[8] = "Not found"), 8)),
    ro = (k.NOT_SUPPORTED_ERR = ((F[9] = "Not supported"), 9)),
    Hr = (k.INUSE_ATTRIBUTE_ERR = ((F[10] = "Attribute in use"), 10)),
    to = (k.INVALID_STATE_ERR = ((F[11] = "Invalid state"), 11)),
    no = (k.SYNTAX_ERR = ((F[12] = "Syntax error"), 12)),
    uo = (k.INVALID_MODIFICATION_ERR = ((F[13] = "Invalid modification"), 13)),
    io = (k.NAMESPACE_ERR = ((F[14] = "Invalid namespace"), 14)),
    oo = (k.INVALID_ACCESS_ERR = ((F[15] = "Invalid access"), 15));
  function N(e, r) {
    if (r instanceof Error) var t = r;
    else
      ((t = this),
        Error.call(this, F[e]),
        (this.message = F[e]),
        Error.captureStackTrace && Error.captureStackTrace(this, N));
    return ((t.code = e), r && (this.message = this.message + ": " + r), t);
  }
  N.prototype = Error.prototype;
  Te(k, N);
  function Z() {}
  Z.prototype = {
    length: 0,
    item: function (e) {
      return e >= 0 && e < this.length ? this[e] : null;
    },
    toString: function (e, r) {
      for (var t = [], n = 0; n < this.length; n++) ce(this[n], t, e, r);
      return t.join("");
    },
    filter: function (e) {
      return Array.prototype.filter.call(this, e);
    },
    indexOf: function (e) {
      return Array.prototype.indexOf.call(this, e);
    },
  };
  function pe(e, r) {
    ((this._node = e), (this._refresh = r), mr(this));
  }
  function mr(e) {
    var r = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc !== r) {
      var t = e._refresh(e._node);
      if ((gt(e, "length", t.length), !e.$$length || t.length < e.$$length))
        for (var n = t.length; n in e; n++)
          Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
      (Te(t, e), (e._inc = r));
    }
  }
  pe.prototype.item = function (e) {
    return (mr(this), this[e] || null);
  };
  H(pe, Z);
  function $e() {}
  function ut(e, r) {
    for (var t = e.length; t--; ) if (e[t] === r) return t;
  }
  function Wr(e, r, t, n) {
    if ((n ? (r[ut(r, n)] = t) : (r[r.length++] = t), e)) {
      t.ownerElement = e;
      var u = e.ownerDocument;
      u && (n && at(u, e, n), Nn(u, e, t));
    }
  }
  function $r(e, r, t) {
    var n = ut(r, t);
    if (n >= 0) {
      for (var u = r.length - 1; n < u; ) r[n] = r[++n];
      if (((r.length = u), e)) {
        var i = e.ownerDocument;
        i && (at(i, e, t), (t.ownerElement = null));
      }
    } else throw new N(nt, new Error(e.tagName + "@" + t));
  }
  $e.prototype = {
    length: 0,
    item: Z.prototype.item,
    getNamedItem: function (e) {
      for (var r = this.length; r--; ) {
        var t = this[r];
        if (t.nodeName == e) return t;
      }
    },
    setNamedItem: function (e) {
      var r = e.ownerElement;
      if (r && r != this._ownerElement) throw new N(Hr);
      var t = this.getNamedItem(e.nodeName);
      return (Wr(this._ownerElement, this, e, t), t);
    },
    setNamedItemNS: function (e) {
      var r = e.ownerElement,
        t;
      if (r && r != this._ownerElement) throw new N(Hr);
      return (
        (t = this.getNamedItemNS(e.namespaceURI, e.localName)),
        Wr(this._ownerElement, this, e, t),
        t
      );
    },
    removeNamedItem: function (e) {
      var r = this.getNamedItem(e);
      return ($r(this._ownerElement, this, r), r);
    },
    removeNamedItemNS: function (e, r) {
      var t = this.getNamedItemNS(e, r);
      return ($r(this._ownerElement, this, t), t);
    },
    getNamedItemNS: function (e, r) {
      for (var t = this.length; t--; ) {
        var n = this[t];
        if (n.localName == r && n.namespaceURI == e) return n;
      }
      return null;
    },
  };
  function it() {}
  it.prototype = {
    hasFeature: function (e, r) {
      return !0;
    },
    createDocument: function (e, r, t) {
      var n = new Ce();
      if (
        ((n.implementation = this),
        (n.childNodes = new Z()),
        (n.doctype = t || null),
        t && n.appendChild(t),
        r)
      ) {
        var u = n.createElementNS(e, r);
        n.appendChild(u);
      }
      return n;
    },
    createDocumentType: function (e, r, t) {
      var n = new Xe();
      return ((n.name = e), (n.nodeName = e), (n.publicId = r || ""), (n.systemId = t || ""), n);
    },
  };
  function w() {}
  w.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (e, r) {
      return je(this, e, r);
    },
    replaceChild: function (e, r) {
      (je(this, e, r, lt), r && this.removeChild(r));
    },
    removeChild: function (e) {
      return st(this, e);
    },
    appendChild: function (e) {
      return this.insertBefore(e, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (e) {
      return cr(this.ownerDocument || this, this, e);
    },
    normalize: function () {
      for (var e = this.firstChild; e; ) {
        var r = e.nextSibling;
        r && r.nodeType == We && e.nodeType == We
          ? (this.removeChild(r), e.appendData(r.data))
          : (e.normalize(), (e = r));
      }
    },
    isSupported: function (e, r) {
      return this.ownerDocument.implementation.hasFeature(e, r);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (e) {
      for (var r = this; r; ) {
        var t = r._nsMap;
        if (t) {
          for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n) && t[n] === e) return n;
        }
        r = r.nodeType == me ? r.ownerDocument : r.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (e) {
      for (var r = this; r; ) {
        var t = r._nsMap;
        if (t && Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        r = r.nodeType == me ? r.ownerDocument : r.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (e) {
      var r = this.lookupPrefix(e);
      return r == null;
    },
  };
  function ot(e) {
    return (
      (e == "<" && "&lt;") ||
      (e == ">" && "&gt;") ||
      (e == "&" && "&amp;") ||
      (e == '"' && "&quot;") ||
      "&#" + e.charCodeAt() + ";"
    );
  }
  Te(W, w);
  Te(W, w.prototype);
  function xe(e, r) {
    if (r(e)) return !0;
    if ((e = e.firstChild))
      do if (xe(e, r)) return !0;
      while ((e = e.nextSibling));
  }
  function Ce() {
    this.ownerDocument = this;
  }
  function Nn(e, r, t) {
    e && e._inc++;
    var n = t.namespaceURI;
    n === we.XMLNS && (r._nsMap[t.prefix ? t.localName : ""] = t.value);
  }
  function at(e, r, t, n) {
    e && e._inc++;
    var u = t.namespaceURI;
    u === we.XMLNS && delete r._nsMap[t.prefix ? t.localName : ""];
  }
  function pr(e, r, t) {
    if (e && e._inc) {
      e._inc++;
      var n = r.childNodes;
      if (t) n[n.length++] = t;
      else {
        for (var u = r.firstChild, i = 0; u; ) ((n[i++] = u), (u = u.nextSibling));
        ((n.length = i), delete n[n.length]);
      }
    }
  }
  function st(e, r) {
    var t = r.previousSibling,
      n = r.nextSibling;
    return (
      t ? (t.nextSibling = n) : (e.firstChild = n),
      n ? (n.previousSibling = t) : (e.lastChild = t),
      (r.parentNode = null),
      (r.previousSibling = null),
      (r.nextSibling = null),
      pr(e.ownerDocument, e),
      r
    );
  }
  function Bn(e) {
    return (
      e &&
      (e.nodeType === w.DOCUMENT_NODE ||
        e.nodeType === w.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === w.ELEMENT_NODE)
    );
  }
  function In(e) {
    return (
      e &&
      (J(e) ||
        dr(e) ||
        ee(e) ||
        e.nodeType === w.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === w.COMMENT_NODE ||
        e.nodeType === w.PROCESSING_INSTRUCTION_NODE)
    );
  }
  function ee(e) {
    return e && e.nodeType === w.DOCUMENT_TYPE_NODE;
  }
  function J(e) {
    return e && e.nodeType === w.ELEMENT_NODE;
  }
  function dr(e) {
    return e && e.nodeType === w.TEXT_NODE;
  }
  function jr(e, r) {
    var t = e.childNodes || [];
    if (Q(t, J) || ee(r)) return !1;
    var n = Q(t, ee);
    return !(r && n && t.indexOf(n) > t.indexOf(r));
  }
  function Yr(e, r) {
    var t = e.childNodes || [];
    function n(i) {
      return J(i) && i !== r;
    }
    if (Q(t, n)) return !1;
    var u = Q(t, ee);
    return !(r && u && t.indexOf(u) > t.indexOf(r));
  }
  function On(e, r, t) {
    if (!Bn(e)) throw new N(G, "Unexpected parent node type " + e.nodeType);
    if (t && t.parentNode !== e) throw new N(nt, "child not in parent");
    if (!In(r) || (ee(r) && e.nodeType !== w.DOCUMENT_NODE))
      throw new N(G, "Unexpected node type " + r.nodeType + " for parent node type " + e.nodeType);
  }
  function Rn(e, r, t) {
    var n = e.childNodes || [],
      u = r.childNodes || [];
    if (r.nodeType === w.DOCUMENT_FRAGMENT_NODE) {
      var i = u.filter(J);
      if (i.length > 1 || Q(u, dr)) throw new N(G, "More than one element or text in fragment");
      if (i.length === 1 && !jr(e, t))
        throw new N(G, "Element in fragment can not be inserted before doctype");
    }
    if (J(r) && !jr(e, t)) throw new N(G, "Only one element can be added and only after doctype");
    if (ee(r)) {
      if (Q(n, ee)) throw new N(G, "Only one doctype is allowed");
      var a = Q(n, J);
      if (t && n.indexOf(a) < n.indexOf(t))
        throw new N(G, "Doctype can only be inserted before an element");
      if (!t && a) throw new N(G, "Doctype can not be appended since element is present");
    }
  }
  function lt(e, r, t) {
    var n = e.childNodes || [],
      u = r.childNodes || [];
    if (r.nodeType === w.DOCUMENT_FRAGMENT_NODE) {
      var i = u.filter(J);
      if (i.length > 1 || Q(u, dr)) throw new N(G, "More than one element or text in fragment");
      if (i.length === 1 && !Yr(e, t))
        throw new N(G, "Element in fragment can not be inserted before doctype");
    }
    if (J(r) && !Yr(e, t)) throw new N(G, "Only one element can be added and only after doctype");
    if (ee(r)) {
      let l = function (o) {
        return ee(o) && o !== t;
      };
      var s = l;
      if (Q(n, l)) throw new N(G, "Only one doctype is allowed");
      var a = Q(n, J);
      if (t && n.indexOf(a) < n.indexOf(t))
        throw new N(G, "Doctype can only be inserted before an element");
    }
  }
  function je(e, r, t, n) {
    (On(e, r, t), e.nodeType === w.DOCUMENT_NODE && (n || Rn)(e, r, t));
    var u = r.parentNode;
    if ((u && u.removeChild(r), r.nodeType === K)) {
      var i = r.firstChild;
      if (i == null) return r;
      var a = r.lastChild;
    } else i = a = r;
    var s = t ? t.previousSibling : e.lastChild;
    ((i.previousSibling = s),
      (a.nextSibling = t),
      s ? (s.nextSibling = i) : (e.firstChild = i),
      t == null ? (e.lastChild = a) : (t.previousSibling = a));
    do i.parentNode = e;
    while (i !== a && (i = i.nextSibling));
    return (pr(e.ownerDocument || e, e), r.nodeType == K && (r.firstChild = r.lastChild = null), r);
  }
  function Fn(e, r) {
    return (
      r.parentNode && r.parentNode.removeChild(r),
      (r.parentNode = e),
      (r.previousSibling = e.lastChild),
      (r.nextSibling = null),
      r.previousSibling ? (r.previousSibling.nextSibling = r) : (e.firstChild = r),
      (e.lastChild = r),
      pr(e.ownerDocument, e, r),
      r
    );
  }
  Ce.prototype = {
    nodeName: "#document",
    nodeType: rt,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (e, r) {
      if (e.nodeType == K) {
        for (var t = e.firstChild; t; ) {
          var n = t.nextSibling;
          (this.insertBefore(t, r), (t = n));
        }
        return e;
      }
      return (
        je(this, e, r),
        (e.ownerDocument = this),
        this.documentElement === null && e.nodeType === j && (this.documentElement = e),
        e
      );
    },
    removeChild: function (e) {
      return (this.documentElement == e && (this.documentElement = null), st(this, e));
    },
    replaceChild: function (e, r) {
      (je(this, e, r, lt),
        (e.ownerDocument = this),
        r && this.removeChild(r),
        J(e) && (this.documentElement = e));
    },
    importNode: function (e, r) {
      return ft(this, e, r);
    },
    getElementById: function (e) {
      var r = null;
      return (
        xe(this.documentElement, function (t) {
          if (t.nodeType == j && t.getAttribute("id") == e) return ((r = t), !0);
        }),
        r
      );
    },
    getElementsByClassName: function (e) {
      var r = Gr(e);
      return new pe(this, function (t) {
        var n = [];
        return (
          r.length > 0 &&
            xe(t.documentElement, function (u) {
              if (u !== t && u.nodeType === j) {
                var i = u.getAttribute("class");
                if (i) {
                  var a = e === i;
                  if (!a) {
                    var s = Gr(i);
                    a = r.every(xn(s));
                  }
                  a && n.push(u);
                }
              }
            }),
          n
        );
      });
    },
    createElement: function (e) {
      var r = new oe();
      ((r.ownerDocument = this),
        (r.nodeName = e),
        (r.tagName = e),
        (r.localName = e),
        (r.childNodes = new Z()));
      var t = (r.attributes = new $e());
      return ((t._ownerElement = r), r);
    },
    createDocumentFragment: function () {
      var e = new Qe();
      return ((e.ownerDocument = this), (e.childNodes = new Z()), e);
    },
    createTextNode: function (e) {
      var r = new fr();
      return ((r.ownerDocument = this), r.appendData(e), r);
    },
    createComment: function (e) {
      var r = new gr();
      return ((r.ownerDocument = this), r.appendData(e), r);
    },
    createCDATASection: function (e) {
      var r = new hr();
      return ((r.ownerDocument = this), r.appendData(e), r);
    },
    createProcessingInstruction: function (e, r) {
      var t = new Dr();
      return (
        (t.ownerDocument = this),
        (t.tagName = t.nodeName = t.target = e),
        (t.nodeValue = t.data = r),
        t
      );
    },
    createAttribute: function (e) {
      var r = new Ye();
      return (
        (r.ownerDocument = this),
        (r.name = e),
        (r.nodeName = e),
        (r.localName = e),
        (r.specified = !0),
        r
      );
    },
    createEntityReference: function (e) {
      var r = new Ar();
      return ((r.ownerDocument = this), (r.nodeName = e), r);
    },
    createElementNS: function (e, r) {
      var t = new oe(),
        n = r.split(":"),
        u = (t.attributes = new $e());
      return (
        (t.childNodes = new Z()),
        (t.ownerDocument = this),
        (t.nodeName = r),
        (t.tagName = r),
        (t.namespaceURI = e),
        n.length == 2 ? ((t.prefix = n[0]), (t.localName = n[1])) : (t.localName = r),
        (u._ownerElement = t),
        t
      );
    },
    createAttributeNS: function (e, r) {
      var t = new Ye(),
        n = r.split(":");
      return (
        (t.ownerDocument = this),
        (t.nodeName = r),
        (t.name = r),
        (t.namespaceURI = e),
        (t.specified = !0),
        n.length == 2 ? ((t.prefix = n[0]), (t.localName = n[1])) : (t.localName = r),
        t
      );
    },
  };
  H(Ce, w);
  function oe() {
    this._nsMap = {};
  }
  oe.prototype = {
    nodeType: j,
    hasAttribute: function (e) {
      return this.getAttributeNode(e) != null;
    },
    getAttribute: function (e) {
      var r = this.getAttributeNode(e);
      return (r && r.value) || "";
    },
    getAttributeNode: function (e) {
      return this.attributes.getNamedItem(e);
    },
    setAttribute: function (e, r) {
      var t = this.ownerDocument.createAttribute(e);
      ((t.value = t.nodeValue = "" + r), this.setAttributeNode(t));
    },
    removeAttribute: function (e) {
      var r = this.getAttributeNode(e);
      r && this.removeAttributeNode(r);
    },
    appendChild: function (e) {
      return e.nodeType === K ? this.insertBefore(e, null) : Fn(this, e);
    },
    setAttributeNode: function (e) {
      return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function (e) {
      return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function (e) {
      return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function (e, r) {
      var t = this.getAttributeNodeNS(e, r);
      t && this.removeAttributeNode(t);
    },
    hasAttributeNS: function (e, r) {
      return this.getAttributeNodeNS(e, r) != null;
    },
    getAttributeNS: function (e, r) {
      var t = this.getAttributeNodeNS(e, r);
      return (t && t.value) || "";
    },
    setAttributeNS: function (e, r, t) {
      var n = this.ownerDocument.createAttributeNS(e, r);
      ((n.value = n.nodeValue = "" + t), this.setAttributeNode(n));
    },
    getAttributeNodeNS: function (e, r) {
      return this.attributes.getNamedItemNS(e, r);
    },
    getElementsByTagName: function (e) {
      return new pe(this, function (r) {
        var t = [];
        return (
          xe(r, function (n) {
            n !== r && n.nodeType == j && (e === "*" || n.tagName == e) && t.push(n);
          }),
          t
        );
      });
    },
    getElementsByTagNameNS: function (e, r) {
      return new pe(this, function (t) {
        var n = [];
        return (
          xe(t, function (u) {
            u !== t &&
              u.nodeType === j &&
              (e === "*" || u.namespaceURI === e) &&
              (r === "*" || u.localName == r) &&
              n.push(u);
          }),
          n
        );
      });
    },
  };
  Ce.prototype.getElementsByTagName = oe.prototype.getElementsByTagName;
  Ce.prototype.getElementsByTagNameNS = oe.prototype.getElementsByTagNameNS;
  H(oe, w);
  function Ye() {}
  Ye.prototype.nodeType = me;
  H(Ye, w);
  function Ne() {}
  Ne.prototype = {
    data: "",
    substringData: function (e, r) {
      return this.data.substring(e, e + r);
    },
    appendData: function (e) {
      ((e = this.data + e), (this.nodeValue = this.data = e), (this.length = e.length));
    },
    insertData: function (e, r) {
      this.replaceData(e, 0, r);
    },
    appendChild: function (e) {
      throw new Error(F[G]);
    },
    deleteData: function (e, r) {
      this.replaceData(e, r, "");
    },
    replaceData: function (e, r, t) {
      var n = this.data.substring(0, e),
        u = this.data.substring(e + r);
      ((t = n + t + u), (this.nodeValue = this.data = t), (this.length = t.length));
    },
  };
  H(Ne, w);
  function fr() {}
  fr.prototype = {
    nodeName: "#text",
    nodeType: We,
    splitText: function (e) {
      var r = this.data,
        t = r.substring(e);
      ((r = r.substring(0, e)), (this.data = this.nodeValue = r), (this.length = r.length));
      var n = this.ownerDocument.createTextNode(t);
      return (this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n);
    },
  };
  H(fr, Ne);
  function gr() {}
  gr.prototype = { nodeName: "#comment", nodeType: et };
  H(gr, Ne);
  function hr() {}
  hr.prototype = { nodeName: "#cdata-section", nodeType: Jr };
  H(hr, Ne);
  function Xe() {}
  Xe.prototype.nodeType = tt;
  H(Xe, w);
  function ct() {}
  ct.prototype.nodeType = Cn;
  H(ct, w);
  function mt() {}
  mt.prototype.nodeType = Tn;
  H(mt, w);
  function Ar() {}
  Ar.prototype.nodeType = Zr;
  H(Ar, w);
  function Qe() {}
  Qe.prototype.nodeName = "#document-fragment";
  Qe.prototype.nodeType = K;
  H(Qe, w);
  function Dr() {}
  Dr.prototype.nodeType = Kr;
  H(Dr, w);
  function pt() {}
  pt.prototype.serializeToString = function (e, r, t) {
    return dt.call(e, r, t);
  };
  w.prototype.toString = dt;
  function dt(e, r) {
    var t = [],
      n = (this.nodeType == 9 && this.documentElement) || this,
      u = n.prefix,
      i = n.namespaceURI;
    if (i && u == null) {
      var u = n.lookupPrefix(i);
      if (u == null) var a = [{ namespace: i, prefix: null }];
    }
    return (ce(this, t, e, r, a), t.join(""));
  }
  function Xr(e, r, t) {
    var n = e.prefix || "",
      u = e.namespaceURI;
    if (!u || (n === "xml" && u === we.XML) || u === we.XMLNS) return !1;
    for (var i = t.length; i--; ) {
      var a = t[i];
      if (a.prefix === n) return a.namespace !== u;
    }
    return !0;
  }
  function lr(e, r, t) {
    e.push(" ", r, '="', t.replace(/[<>&"\t\n\r]/g, ot), '"');
  }
  function ce(e, r, t, n, u) {
    if ((u || (u = []), n))
      if (((e = n(e)), e)) {
        if (typeof e == "string") {
          r.push(e);
          return;
        }
      } else return;
    switch (e.nodeType) {
      case j:
        var i = e.attributes,
          a = i.length,
          b = e.firstChild,
          s = e.tagName;
        t = we.isHTML(e.namespaceURI) || t;
        var l = s;
        if (!t && !e.prefix && e.namespaceURI) {
          for (var o, c = 0; c < i.length; c++)
            if (i.item(c).name === "xmlns") {
              o = i.item(c).value;
              break;
            }
          if (!o)
            for (var m = u.length - 1; m >= 0; m--) {
              var d = u[m];
              if (d.prefix === "" && d.namespace === e.namespaceURI) {
                o = d.namespace;
                break;
              }
            }
          if (o !== e.namespaceURI)
            for (var m = u.length - 1; m >= 0; m--) {
              var d = u[m];
              if (d.namespace === e.namespaceURI) {
                d.prefix && (l = d.prefix + ":" + s);
                break;
              }
            }
        }
        r.push("<", l);
        for (var h = 0; h < a; h++) {
          var g = i.item(h);
          g.prefix == "xmlns"
            ? u.push({ prefix: g.localName, namespace: g.value })
            : g.nodeName == "xmlns" && u.push({ prefix: "", namespace: g.value });
        }
        for (var h = 0; h < a; h++) {
          var g = i.item(h);
          if (Xr(g, t, u)) {
            var D = g.prefix || "",
              y = g.namespaceURI;
            (lr(r, D ? "xmlns:" + D : "xmlns", y), u.push({ prefix: D, namespace: y }));
          }
          ce(g, r, t, n, u);
        }
        if (s === l && Xr(e, t, u)) {
          var D = e.prefix || "",
            y = e.namespaceURI;
          (lr(r, D ? "xmlns:" + D : "xmlns", y), u.push({ prefix: D, namespace: y }));
        }
        if (b || (t && !/^(?:meta|link|img|br|hr|input)$/i.test(s))) {
          if ((r.push(">"), t && /^script$/i.test(s)))
            for (; b; ) (b.data ? r.push(b.data) : ce(b, r, t, n, u.slice()), (b = b.nextSibling));
          else for (; b; ) (ce(b, r, t, n, u.slice()), (b = b.nextSibling));
          r.push("</", l, ">");
        } else r.push("/>");
        return;
      case rt:
      case K:
        for (var b = e.firstChild; b; ) (ce(b, r, t, n, u.slice()), (b = b.nextSibling));
        return;
      case me:
        return lr(r, e.name, e.value);
      case We:
        return r.push(e.data.replace(/[<&>]/g, ot));
      case Jr:
        return r.push("<![CDATA[", e.data, "]]>");
      case et:
        return r.push("<!--", e.data, "-->");
      case tt:
        var O = e.publicId,
          S = e.systemId;
        if ((r.push("<!DOCTYPE ", e.name), O))
          (r.push(" PUBLIC ", O), S && S != "." && r.push(" ", S), r.push(">"));
        else if (S && S != ".") r.push(" SYSTEM ", S, ">");
        else {
          var p = e.internalSubset;
          (p && r.push(" [", p, "]"), r.push(">"));
        }
        return;
      case Kr:
        return r.push("<?", e.target, " ", e.data, "?>");
      case Zr:
        return r.push("&", e.nodeName, ";");
      default:
        r.push("??", e.nodeName);
    }
  }
  function ft(e, r, t) {
    var n;
    switch (r.nodeType) {
      case j:
        ((n = r.cloneNode(!1)), (n.ownerDocument = e));
      case K:
        break;
      case me:
        t = !0;
        break;
    }
    if ((n || (n = r.cloneNode(!1)), (n.ownerDocument = e), (n.parentNode = null), t))
      for (var u = r.firstChild; u; ) (n.appendChild(ft(e, u, t)), (u = u.nextSibling));
    return n;
  }
  function cr(e, r, t) {
    var n = new r.constructor();
    for (var u in r)
      if (Object.prototype.hasOwnProperty.call(r, u)) {
        var i = r[u];
        typeof i != "object" && i != n[u] && (n[u] = i);
      }
    switch ((r.childNodes && (n.childNodes = new Z()), (n.ownerDocument = e), n.nodeType)) {
      case j:
        var a = r.attributes,
          s = (n.attributes = new $e()),
          l = a.length;
        s._ownerElement = n;
        for (var o = 0; o < l; o++) n.setAttributeNode(cr(e, a.item(o), !0));
        break;
      case me:
        t = !0;
    }
    if (t) for (var c = r.firstChild; c; ) (n.appendChild(cr(e, c, t)), (c = c.nextSibling));
    return n;
  }
  function gt(e, r, t) {
    e[r] = t;
  }
  try {
    if (Object.defineProperty) {
      let e = function (r) {
        switch (r.nodeType) {
          case j:
          case K:
            var t = [];
            for (r = r.firstChild; r; )
              (r.nodeType !== 7 && r.nodeType !== 8 && t.push(e(r)), (r = r.nextSibling));
            return t.join("");
          default:
            return r.nodeValue;
        }
      };
      ((Mn = e),
        Object.defineProperty(pe.prototype, "length", {
          get: function () {
            return (mr(this), this.$$length);
          },
        }),
        Object.defineProperty(w.prototype, "textContent", {
          get: function () {
            return e(this);
          },
          set: function (r) {
            switch (this.nodeType) {
              case j:
              case K:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (r || String(r)) && this.appendChild(this.ownerDocument.createTextNode(r));
                break;
              default:
                ((this.data = r), (this.value = r), (this.nodeValue = r));
            }
          },
        }),
        (gt = function (r, t, n) {
          r["$$" + t] = n;
        }));
    }
  } catch {}
  var Mn;
  ue.DocumentType = Xe;
  ue.DOMException = N;
  ue.DOMImplementation = it;
  ue.Element = oe;
  ue.Node = w;
  ue.NodeList = Z;
  ue.XMLSerializer = pt;
});
var At = te((Be) => {
  "use strict";
  var ht = Se().freeze;
  Be.XML_ENTITIES = ht({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
  Be.HTML_ENTITIES = ht({
    Aacute: "\xC1",
    aacute: "\xE1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223E",
    acd: "\u223F",
    acE: "\u223E\u0333",
    Acirc: "\xC2",
    acirc: "\xE2",
    acute: "\xB4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xC6",
    aelig: "\xE6",
    af: "\u2061",
    Afr: "\u{1D504}",
    afr: "\u{1D51E}",
    Agrave: "\xC0",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2A3F",
    AMP: "&",
    amp: "&",
    And: "\u2A53",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\u{1D538}",
    aopf: "\u{1D552}",
    ap: "\u2248",
    apacir: "\u2A6F",
    apE: "\u2A70",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224A",
    Aring: "\xC5",
    aring: "\xE5",
    Ascr: "\u{1D49C}",
    ascr: "\u{1D4B6}",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    Atilde: "\xC3",
    atilde: "\xE3",
    Auml: "\xC4",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    barvee: "\u22BD",
    Barwed: "\u2306",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    Because: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    Bfr: "\u{1D505}",
    bfr: "\u{1D51F}",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bNot: "\u2AED",
    bnot: "\u2310",
    Bopf: "\u{1D539}",
    bopf: "\u{1D553}",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxbox: "\u29C9",
    boxDL: "\u2557",
    boxDl: "\u2556",
    boxdL: "\u2555",
    boxdl: "\u2510",
    boxDR: "\u2554",
    boxDr: "\u2553",
    boxdR: "\u2552",
    boxdr: "\u250C",
    boxH: "\u2550",
    boxh: "\u2500",
    boxHD: "\u2566",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxhd: "\u252C",
    boxHU: "\u2569",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxUL: "\u255D",
    boxUl: "\u255C",
    boxuL: "\u255B",
    boxul: "\u2518",
    boxUR: "\u255A",
    boxUr: "\u2559",
    boxuR: "\u2558",
    boxur: "\u2514",
    boxV: "\u2551",
    boxv: "\u2502",
    boxVH: "\u256C",
    boxVh: "\u256B",
    boxvH: "\u256A",
    boxvh: "\u253C",
    boxVL: "\u2563",
    boxVl: "\u2562",
    boxvL: "\u2561",
    boxvl: "\u2524",
    boxVR: "\u2560",
    boxVr: "\u255F",
    boxvR: "\u255E",
    boxvr: "\u251C",
    bprime: "\u2035",
    Breve: "\u02D8",
    breve: "\u02D8",
    brvbar: "\xA6",
    Bscr: "\u212C",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    Bumpeq: "\u224E",
    bumpeq: "\u224F",
    Cacute: "\u0106",
    cacute: "\u0107",
    Cap: "\u22D2",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    Cayleys: "\u212D",
    ccaps: "\u2A4D",
    Ccaron: "\u010C",
    ccaron: "\u010D",
    Ccedil: "\xC7",
    ccedil: "\xE7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    Cdot: "\u010A",
    cdot: "\u010B",
    cedil: "\xB8",
    Cedilla: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    Cfr: "\u212D",
    cfr: "\u{1D520}",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03A7",
    chi: "\u03C7",
    cir: "\u25CB",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    CircleDot: "\u2299",
    circledR: "\xAE",
    circledS: "\u24C8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cirE: "\u29C3",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    Colon: "\u2237",
    colon: ":",
    Colone: "\u2A74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    Congruent: "\u2261",
    Conint: "\u222F",
    conint: "\u222E",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    copf: "\u{1D554}",
    coprod: "\u2210",
    Coproduct: "\u2210",
    COPY: "\xA9",
    copy: "\xA9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21B5",
    Cross: "\u2A2F",
    cross: "\u2717",
    Cscr: "\u{1D49E}",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    Cup: "\u22D3",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    CupCap: "\u224D",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    Dagger: "\u2021",
    dagger: "\u2020",
    daleth: "\u2138",
    Darr: "\u21A1",
    dArr: "\u21D3",
    darr: "\u2193",
    dash: "\u2010",
    Dashv: "\u2AE4",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    Dcaron: "\u010E",
    dcaron: "\u010F",
    Dcy: "\u0414",
    dcy: "\u0434",
    DD: "\u2145",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    DDotrahd: "\u2911",
    ddotseq: "\u2A77",
    deg: "\xB0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    Dfr: "\u{1D507}",
    dfr: "\u{1D521}",
    dHar: "\u2965",
    dharl: "\u21C3",
    dharr: "\u21C2",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    diam: "\u22C4",
    Diamond: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    DifferentialD: "\u2146",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    Dopf: "\u{1D53B}",
    dopf: "\u{1D555}",
    Dot: "\xA8",
    dot: "\u02D9",
    DotDot: "\u20DC",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    Downarrow: "\u21D3",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    Dscr: "\u{1D49F}",
    dscr: "\u{1D4B9}",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29F6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    DZcy: "\u040F",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    Eacute: "\xC9",
    eacute: "\xE9",
    easter: "\u2A6E",
    Ecaron: "\u011A",
    ecaron: "\u011B",
    ecir: "\u2256",
    Ecirc: "\xCA",
    ecirc: "\xEA",
    ecolon: "\u2255",
    Ecy: "\u042D",
    ecy: "\u044D",
    eDDot: "\u2A77",
    Edot: "\u0116",
    eDot: "\u2251",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\u{1D508}",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    Egrave: "\xC8",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    Element: "\u2208",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25FB",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25AB",
    emsp: "\u2003",
    emsp13: "\u2004",
    emsp14: "\u2005",
    ENG: "\u014A",
    eng: "\u014B",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\u{1D53C}",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    Equal: "\u2A75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225F",
    Equilibrium: "\u21CC",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erarr: "\u2971",
    erDot: "\u2253",
    Escr: "\u2130",
    escr: "\u212F",
    esdot: "\u2250",
    Esim: "\u2A73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\xD0",
    eth: "\xF0",
    Euml: "\xCB",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    ExponentialE: "\u2147",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    Ffr: "\u{1D509}",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    Fopf: "\u{1D53D}",
    fopf: "\u{1D557}",
    ForAll: "\u2200",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    Fouriertrf: "\u2131",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    Fscr: "\u2131",
    fscr: "\u{1D4BB}",
    gacute: "\u01F5",
    Gamma: "\u0393",
    gamma: "\u03B3",
    Gammad: "\u03DC",
    gammad: "\u03DD",
    gap: "\u2A86",
    Gbreve: "\u011E",
    gbreve: "\u011F",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    gcirc: "\u011D",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    gE: "\u2267",
    ge: "\u2265",
    gEl: "\u2A8C",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    Gfr: "\u{1D50A}",
    gfr: "\u{1D524}",
    Gg: "\u22D9",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gl: "\u2277",
    gla: "\u2AA5",
    glE: "\u2A92",
    glj: "\u2AA4",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gnE: "\u2269",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    Gopf: "\u{1D53E}",
    gopf: "\u{1D558}",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\u{1D4A2}",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    Gt: "\u226B",
    GT: ">",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    Hacek: "\u02C7",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    HARDcy: "\u042A",
    hardcy: "\u044A",
    hArr: "\u21D4",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    Hat: "^",
    hbar: "\u210F",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    Hfr: "\u210C",
    hfr: "\u{1D525}",
    HilbertSpace: "\u210B",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    Hopf: "\u210D",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    hscr: "\u{1D4BD}",
    hslash: "\u210F",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xCD",
    iacute: "\xED",
    ic: "\u2063",
    Icirc: "\xCE",
    icirc: "\xEE",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    Ifr: "\u2111",
    ifr: "\u{1D526}",
    Igrave: "\xCC",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Im: "\u2111",
    Imacr: "\u012A",
    imacr: "\u012B",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    Implies: "\u21D2",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    Int: "\u222C",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    Integral: "\u222B",
    intercal: "\u22BA",
    Intersection: "\u22C2",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012E",
    iogon: "\u012F",
    Iopf: "\u{1D540}",
    iopf: "\u{1D55A}",
    Iota: "\u0399",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    Iscr: "\u2110",
    iscr: "\u{1D4BE}",
    isin: "\u2208",
    isindot: "\u22F5",
    isinE: "\u22F9",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xCF",
    iuml: "\xEF",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\u{1D50D}",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    Jopf: "\u{1D541}",
    jopf: "\u{1D55B}",
    Jscr: "\u{1D4A5}",
    jscr: "\u{1D4BF}",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039A",
    kappa: "\u03BA",
    kappav: "\u03F0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041A",
    kcy: "\u043A",
    Kfr: "\u{1D50E}",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040C",
    kjcy: "\u045C",
    Kopf: "\u{1D542}",
    kopf: "\u{1D55C}",
    Kscr: "\u{1D4A6}",
    kscr: "\u{1D4C0}",
    lAarr: "\u21DA",
    Lacute: "\u0139",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    Lambda: "\u039B",
    lambda: "\u03BB",
    Lang: "\u27EA",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    Laplacetrf: "\u2112",
    laquo: "\xAB",
    Larr: "\u219E",
    lArr: "\u21D0",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    lAtail: "\u291B",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lBarr: "\u290E",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    Lcaron: "\u013D",
    lcaron: "\u013E",
    Lcedil: "\u013B",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041B",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    lE: "\u2266",
    le: "\u2264",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    Leftarrow: "\u21D0",
    leftarrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftarrowtail: "\u21A2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21D4",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    leftthreetimes: "\u22CB",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    lEg: "\u2A8B",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2AA1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    Lfr: "\u{1D50F}",
    lfr: "\u{1D529}",
    lg: "\u2276",
    lgE: "\u2A91",
    lHar: "\u2962",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    Ll: "\u22D8",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    Lleftarrow: "\u21DA",
    llhard: "\u296B",
    lltri: "\u25FA",
    Lmidot: "\u013F",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lnE: "\u2268",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    LongLeftArrow: "\u27F5",
    Longleftarrow: "\u27F8",
    longleftarrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    Longleftrightarrow: "\u27FA",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    LongRightArrow: "\u27F6",
    Longrightarrow: "\u27F9",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    Lopf: "\u{1D543}",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    Lscr: "\u2112",
    lscr: "\u{1D4C1}",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    Lt: "\u226A",
    LT: "<",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    ltrPar: "\u2996",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    Mcy: "\u041C",
    mcy: "\u043C",
    mdash: "\u2014",
    mDDot: "\u223A",
    measuredangle: "\u2221",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\u{1D510}",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xB7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    MinusPlus: "\u2213",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    Mopf: "\u{1D544}",
    mopf: "\u{1D55E}",
    mp: "\u2213",
    Mscr: "\u2133",
    mscr: "\u{1D4C2}",
    mstpos: "\u223E",
    Mu: "\u039C",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    Ncy: "\u041D",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    nearhk: "\u2924",
    neArr: "\u21D7",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\u{1D511}",
    nfr: "\u{1D52B}",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    nGg: "\u22D9\u0338",
    ngsim: "\u2275",
    nGt: "\u226B\u20D2",
    ngt: "\u226F",
    ngtr: "\u226F",
    nGtv: "\u226B\u0338",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    NJcy: "\u040A",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlarr: "\u219A",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nLeftarrow: "\u21CD",
    nleftarrow: "\u219A",
    nLeftrightarrow: "\u21CE",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nLl: "\u22D8\u0338",
    nlsim: "\u2274",
    nLt: "\u226A\u20D2",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nLtv: "\u226A\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    Nopf: "\u2115",
    nopf: "\u{1D55F}",
    Not: "\u2AEC",
    not: "\xAC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    notin: "\u2209",
    notindot: "\u22F5\u0338",
    notinE: "\u22F9\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nRightarrow: "\u21CF",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    Nscr: "\u{1D4A9}",
    nscr: "\u{1D4C3}",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xD1",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    Nu: "\u039D",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224D\u20D2",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nvDash: "\u22AD",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvHarr: "\u2904",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwarhk: "\u2923",
    nwArr: "\u21D6",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xD3",
    oacute: "\xF3",
    oast: "\u229B",
    ocir: "\u229A",
    Ocirc: "\xD4",
    ocirc: "\xF4",
    Ocy: "\u041E",
    ocy: "\u043E",
    odash: "\u229D",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29BF",
    Ofr: "\u{1D512}",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    Ograve: "\xD2",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    Omacr: "\u014C",
    omacr: "\u014D",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    Oopf: "\u{1D546}",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    operp: "\u29B9",
    oplus: "\u2295",
    Or: "\u2A54",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oS: "\u24C8",
    Oscr: "\u{1D4AA}",
    oscr: "\u2134",
    Oslash: "\xD8",
    oslash: "\xF8",
    osol: "\u2298",
    Otilde: "\xD5",
    otilde: "\xF5",
    Otimes: "\u2A37",
    otimes: "\u2297",
    otimesas: "\u2A36",
    Ouml: "\xD6",
    ouml: "\xF6",
    ovbar: "\u233D",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    par: "\u2225",
    para: "\xB6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041F",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    Pfr: "\u{1D513}",
    pfr: "\u{1D52D}",
    Phi: "\u03A6",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    Pi: "\u03A0",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    Poincareplane: "\u210C",
    pointint: "\u2A15",
    Popf: "\u2119",
    popf: "\u{1D561}",
    pound: "\xA3",
    Pr: "\u2ABB",
    pr: "\u227A",
    prap: "\u2AB7",
    prcue: "\u227C",
    prE: "\u2AB3",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    Prime: "\u2033",
    prime: "\u2032",
    primes: "\u2119",
    prnap: "\u2AB9",
    prnE: "\u2AB5",
    prnsim: "\u22E8",
    prod: "\u220F",
    Product: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    Proportion: "\u2237",
    Proportional: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    Pscr: "\u{1D4AB}",
    pscr: "\u{1D4C5}",
    Psi: "\u03A8",
    psi: "\u03C8",
    puncsp: "\u2008",
    Qfr: "\u{1D514}",
    qfr: "\u{1D52E}",
    qint: "\u2A0C",
    Qopf: "\u211A",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    Qscr: "\u{1D4AC}",
    qscr: "\u{1D4C6}",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    QUOT: '"',
    quot: '"',
    rAarr: "\u21DB",
    race: "\u223D\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    Rang: "\u27EB",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    Rarr: "\u21A0",
    rArr: "\u21D2",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    rAtail: "\u291C",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    RBarr: "\u2910",
    rBarr: "\u290F",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    Re: "\u211C",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    REG: "\xAE",
    reg: "\xAE",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    rfisht: "\u297D",
    rfloor: "\u230B",
    Rfr: "\u211C",
    rfr: "\u{1D52F}",
    rHar: "\u2964",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    Rho: "\u03A1",
    rho: "\u03C1",
    rhov: "\u03F1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    Rightarrow: "\u21D2",
    rightarrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightarrowtail: "\u21A3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    rightthreetimes: "\u22CC",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    Ropf: "\u211D",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    Rrightarrow: "\u21DB",
    rsaquo: "\u203A",
    Rscr: "\u211B",
    rscr: "\u{1D4C7}",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    RuleDelayed: "\u29F4",
    ruluhar: "\u2968",
    rx: "\u211E",
    Sacute: "\u015A",
    sacute: "\u015B",
    sbquo: "\u201A",
    Sc: "\u2ABC",
    sc: "\u227B",
    scap: "\u2AB8",
    Scaron: "\u0160",
    scaron: "\u0161",
    sccue: "\u227D",
    scE: "\u2AB4",
    sce: "\u2AB0",
    Scedil: "\u015E",
    scedil: "\u015F",
    Scirc: "\u015C",
    scirc: "\u015D",
    scnap: "\u2ABA",
    scnE: "\u2AB6",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    Scy: "\u0421",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    searhk: "\u2925",
    seArr: "\u21D8",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\u{1D516}",
    sfr: "\u{1D530}",
    sfrown: "\u2322",
    sharp: "\u266F",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xAD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    SOFTcy: "\u042C",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    Sopf: "\u{1D54A}",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    Sqrt: "\u221A",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    Square: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    Sscr: "\u{1D4AE}",
    sscr: "\u{1D4C8}",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    Star: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    Sub: "\u22D0",
    sub: "\u2282",
    subdot: "\u2ABD",
    subE: "\u2AC5",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    Subset: "\u22D0",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    sum: "\u2211",
    sung: "\u266A",
    Sup: "\u22D1",
    sup: "\u2283",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supE: "\u2AC6",
    supe: "\u2287",
    supedot: "\u2AC4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    Supset: "\u22D1",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swarhk: "\u2926",
    swArr: "\u21D9",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    Tab: "	",
    target: "\u2316",
    Tau: "\u03A4",
    tau: "\u03C4",
    tbrk: "\u23B4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    Tfr: "\u{1D517}",
    tfr: "\u{1D531}",
    there4: "\u2234",
    Therefore: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    ThickSpace: "\u205F\u200A",
    thinsp: "\u2009",
    ThinSpace: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    THORN: "\xDE",
    thorn: "\xFE",
    Tilde: "\u223C",
    tilde: "\u02DC",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    times: "\xD7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    Topf: "\u{1D54B}",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    TRADE: "\u2122",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    TripleDot: "\u20DB",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    Tscr: "\u{1D4AF}",
    tscr: "\u{1D4C9}",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040B",
    tshcy: "\u045B",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    Uacute: "\xDA",
    uacute: "\xFA",
    Uarr: "\u219F",
    uArr: "\u21D1",
    uarr: "\u2191",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    ubrcy: "\u045E",
    Ubreve: "\u016C",
    ubreve: "\u016D",
    Ucirc: "\xDB",
    ucirc: "\xFB",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21C5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    Ufr: "\u{1D518}",
    ufr: "\u{1D532}",
    Ugrave: "\xD9",
    ugrave: "\xF9",
    uHar: "\u2963",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    Umacr: "\u016A",
    umacr: "\u016B",
    uml: "\xA8",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\u{1D54C}",
    uopf: "\u{1D566}",
    UpArrow: "\u2191",
    Uparrow: "\u21D1",
    uparrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21D5",
    updownarrow: "\u2195",
    UpEquilibrium: "\u296E",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    upsi: "\u03C5",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    Uring: "\u016E",
    uring: "\u016F",
    urtri: "\u25F9",
    Uscr: "\u{1D4B0}",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    Uuml: "\xDC",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    vArr: "\u21D5",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    Vbar: "\u2AEB",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    Vcy: "\u0412",
    vcy: "\u0432",
    VDash: "\u22AB",
    Vdash: "\u22A9",
    vDash: "\u22A8",
    vdash: "\u22A2",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    Verbar: "\u2016",
    verbar: "|",
    Vert: "\u2016",
    vert: "|",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\u{1D519}",
    vfr: "\u{1D533}",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    Vopf: "\u{1D54D}",
    vopf: "\u{1D567}",
    vprop: "\u221D",
    vrtri: "\u22B3",
    Vscr: "\u{1D4B1}",
    vscr: "\u{1D4CB}",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    Vvdash: "\u22AA",
    vzigzag: "\u299A",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    Wedge: "\u22C0",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\u{1D51A}",
    wfr: "\u{1D534}",
    Wopf: "\u{1D54E}",
    wopf: "\u{1D568}",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\u{1D4B2}",
    wscr: "\u{1D4CC}",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    Xfr: "\u{1D51B}",
    xfr: "\u{1D535}",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    Xi: "\u039E",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    Xopf: "\u{1D54F}",
    xopf: "\u{1D569}",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    Xscr: "\u{1D4B3}",
    xscr: "\u{1D4CD}",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    Yacute: "\xDD",
    yacute: "\xFD",
    YAcy: "\u042F",
    yacy: "\u044F",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042B",
    ycy: "\u044B",
    yen: "\xA5",
    Yfr: "\u{1D51C}",
    yfr: "\u{1D536}",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\u{1D550}",
    yopf: "\u{1D56A}",
    Yscr: "\u{1D4B4}",
    yscr: "\u{1D4CE}",
    YUcy: "\u042E",
    yucy: "\u044E",
    Yuml: "\u0178",
    yuml: "\xFF",
    Zacute: "\u0179",
    zacute: "\u017A",
    Zcaron: "\u017D",
    zcaron: "\u017E",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017B",
    zdot: "\u017C",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    zeta: "\u03B6",
    Zfr: "\u2128",
    zfr: "\u{1D537}",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    Zopf: "\u2124",
    zopf: "\u{1D56B}",
    Zscr: "\u{1D4B5}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C",
  });
  Be.entityMap = Be.HTML_ENTITIES;
});
var wt = te((Er) => {
  var Fe = Se().NAMESPACE,
    vr =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Dt = new RegExp(
      "[\\-\\.0-9" + vr.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]",
    ),
    yt = new RegExp("^" + vr.source + Dt.source + "*(?::" + vr.source + Dt.source + "*)?$"),
    Ie = 0,
    ie = 1,
    de = 2,
    Oe = 3,
    fe = 4,
    ge = 5,
    Re = 6,
    Je = 7;
  function he(e, r) {
    ((this.message = e),
      (this.locator = r),
      Error.captureStackTrace && Error.captureStackTrace(this, he));
  }
  he.prototype = new Error();
  he.prototype.name = he.name;
  function _t() {}
  _t.prototype = {
    parse: function (e, r, t) {
      var n = this.domBuilder;
      (n.startDocument(), bt(r, (r = {})), Ln(e, r, t, n, this.errorHandler), n.endDocument());
    },
  };
  function Ln(e, r, t, n, u) {
    function i(_) {
      if (_ > 65535) {
        _ -= 65536;
        var U = 55296 + (_ >> 10),
          Zt = 56320 + (_ & 1023);
        return String.fromCharCode(U, Zt);
      } else return String.fromCharCode(_);
    }
    function a(_) {
      var U = _.slice(1, -1);
      return Object.hasOwnProperty.call(t, U)
        ? t[U]
        : U.charAt(0) === "#"
          ? i(parseInt(U.substr(1).replace("x", "0x")))
          : (u.error("entity not found:" + _), _);
    }
    function s(_) {
      if (_ > D) {
        var U = e.substring(D, _).replace(/&#?\w+;/g, a);
        (d && l(D), n.characters(U, 0, _ - D), (D = _));
      }
    }
    function l(_, U) {
      for (; _ >= c && (U = m.exec(e)); ) ((o = U.index), (c = o + U[0].length), d.lineNumber++);
      d.columnNumber = _ - o + 1;
    }
    for (
      var o = 0,
        c = 0,
        m = /.*(?:\r\n?|\n)|.*$/g,
        d = n.locator,
        h = [{ currentNSMap: r }],
        g = {},
        D = 0;
      ;
    ) {
      try {
        var y = e.indexOf("<", D);
        if (y < 0) {
          if (!e.substr(D).match(/^\s*$/)) {
            var b = n.doc,
              O = b.createTextNode(e.substr(D));
            (b.appendChild(O), (n.currentElement = O));
          }
          return;
        }
        switch ((y > D && s(y), e.charAt(y + 1))) {
          case "/":
            var A = e.indexOf(">", y + 3),
              S = e.substring(y + 2, A).replace(/[ \t\n\r]+$/g, ""),
              p = h.pop();
            A < 0
              ? ((S = e.substring(y + 2).replace(/[\s<].*/, "")),
                u.error("end tag name: " + S + " is not complete:" + p.tagName),
                (A = y + 1 + S.length))
              : S.match(/\s</) &&
                ((S = S.replace(/[\s<].*/, "")),
                u.error("end tag name: " + S + " maybe not complete"),
                (A = y + 1 + S.length));
            var f = p.localNSMap,
              v = p.tagName == S,
              E = v || (p.tagName && p.tagName.toLowerCase() == S.toLowerCase());
            if (E) {
              if ((n.endElement(p.uri, p.localName, S), f))
                for (var B in f)
                  Object.prototype.hasOwnProperty.call(f, B) && n.endPrefixMapping(B);
              v ||
                u.fatalError(
                  "end tag name: " + S + " is not match the current start tagName:" + p.tagName,
                );
            } else h.push(p);
            A++;
            break;
          case "?":
            (d && l(y), (A = Vn(e, y, n)));
            break;
          case "!":
            (d && l(y), (A = qn(e, y, n, u)));
            break;
          default:
            d && l(y);
            var x = new St(),
              P = h[h.length - 1].currentNSMap,
              A = Pn(e, y, x, P, a, u),
              q = x.length;
            if (
              (!x.closed &&
                kn(e, A, x.tagName, g) &&
                ((x.closed = !0), t.nbsp || u.warning("unclosed xml attribute")),
              d && q)
            ) {
              for (var I = vt(d, {}), Y = 0; Y < q; Y++) {
                var re = x[Y];
                (l(re.offset), (re.locator = vt(d, {})));
              }
              ((n.locator = I), Et(x, n, P) && h.push(x), (n.locator = d));
            } else Et(x, n, P) && h.push(x);
            Fe.isHTML(x.uri) && !x.closed ? (A = Un(e, A, x.tagName, a, n)) : A++;
        }
      } catch (_) {
        if (_ instanceof he) throw _;
        (u.error("element parse error: " + _), (A = -1));
      }
      A > D ? (D = A) : s(Math.max(y, D) + 1);
    }
  }
  function vt(e, r) {
    return ((r.lineNumber = e.lineNumber), (r.columnNumber = e.columnNumber), r);
  }
  function Pn(e, r, t, n, u, i) {
    function a(h, g, D) {
      (t.attributeNames.hasOwnProperty(h) && i.fatalError("Attribute " + h + " redefined"),
        t.addValue(h, g.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, u), D));
    }
    for (var s, l, o = ++r, c = Ie; ; ) {
      var m = e.charAt(o);
      switch (m) {
        case "=":
          if (c === ie) ((s = e.slice(r, o)), (c = Oe));
          else if (c === de) c = Oe;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (c === Oe || c === ie)
            if (
              (c === ie && (i.warning('attribute value must after "="'), (s = e.slice(r, o))),
              (r = o + 1),
              (o = e.indexOf(m, r)),
              o > 0)
            )
              ((l = e.slice(r, o)), a(s, l, r - 1), (c = ge));
            else throw new Error("attribute value no end '" + m + "' match");
          else if (c == fe)
            ((l = e.slice(r, o)),
              a(s, l, r),
              i.warning('attribute "' + s + '" missed start quot(' + m + ")!!"),
              (r = o + 1),
              (c = ge));
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (c) {
            case Ie:
              t.setTagName(e.slice(r, o));
            case ge:
            case Re:
            case Je:
              ((c = Je), (t.closed = !0));
            case fe:
            case ie:
              break;
            case de:
              t.closed = !0;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return (i.error("unexpected end of input"), c == Ie && t.setTagName(e.slice(r, o)), o);
        case ">":
          switch (c) {
            case Ie:
              t.setTagName(e.slice(r, o));
            case ge:
            case Re:
            case Je:
              break;
            case fe:
            case ie:
              ((l = e.slice(r, o)), l.slice(-1) === "/" && ((t.closed = !0), (l = l.slice(0, -1))));
            case de:
              (c === de && (l = s),
                c == fe
                  ? (i.warning('attribute "' + l + '" missed quot(")!'), a(s, l, r))
                  : ((!Fe.isHTML(n[""]) || !l.match(/^(?:disabled|checked|selected)$/i)) &&
                      i.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'),
                    a(l, l, r)));
              break;
            case Oe:
              throw new Error("attribute value missed!!");
          }
          return o;
        case "\x80":
          m = " ";
        default:
          if (m <= " ")
            switch (c) {
              case Ie:
                (t.setTagName(e.slice(r, o)), (c = Re));
                break;
              case ie:
                ((s = e.slice(r, o)), (c = de));
                break;
              case fe:
                var l = e.slice(r, o);
                (i.warning('attribute "' + l + '" missed quot(")!!'), a(s, l, r));
              case ge:
                c = Re;
                break;
            }
          else
            switch (c) {
              case de:
                var d = t.tagName;
                ((!Fe.isHTML(n[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) &&
                  i.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'),
                  a(s, s, r),
                  (r = o),
                  (c = ie));
                break;
              case ge:
                i.warning('attribute space is required"' + s + '"!!');
              case Re:
                ((c = ie), (r = o));
                break;
              case Oe:
                ((c = fe), (r = o));
                break;
              case Je:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      o++;
    }
  }
  function Et(e, r, t) {
    for (var n = e.tagName, u = null, m = e.length; m--; ) {
      var i = e[m],
        a = i.qName,
        s = i.value,
        d = a.indexOf(":");
      if (d > 0)
        var l = (i.prefix = a.slice(0, d)),
          o = a.slice(d + 1),
          c = l === "xmlns" && o;
      else ((o = a), (l = null), (c = a === "xmlns" && ""));
      ((i.localName = o),
        c !== !1 &&
          (u == null && ((u = {}), bt(t, (t = {}))),
          (t[c] = u[c] = s),
          (i.uri = Fe.XMLNS),
          r.startPrefixMapping(c, s)));
    }
    for (var m = e.length; m--; ) {
      i = e[m];
      var l = i.prefix;
      l && (l === "xml" && (i.uri = Fe.XML), l !== "xmlns" && (i.uri = t[l || ""]));
    }
    var d = n.indexOf(":");
    d > 0
      ? ((l = e.prefix = n.slice(0, d)), (o = e.localName = n.slice(d + 1)))
      : ((l = null), (o = e.localName = n));
    var h = (e.uri = t[l || ""]);
    if ((r.startElement(h, o, n, e), e.closed)) {
      if ((r.endElement(h, o, n), u))
        for (l in u) Object.prototype.hasOwnProperty.call(u, l) && r.endPrefixMapping(l);
    } else return ((e.currentNSMap = t), (e.localNSMap = u), !0);
  }
  function Un(e, r, t, n, u) {
    if (/^(?:script|textarea)$/i.test(t)) {
      var i = e.indexOf("</" + t + ">", r),
        a = e.substring(r + 1, i);
      if (/[&<]/.test(a))
        return /^script$/i.test(t)
          ? (u.characters(a, 0, a.length), i)
          : ((a = a.replace(/&#?\w+;/g, n)), u.characters(a, 0, a.length), i);
    }
    return r + 1;
  }
  function kn(e, r, t, n) {
    var u = n[t];
    return (
      u == null &&
        ((u = e.lastIndexOf("</" + t + ">")), u < r && (u = e.lastIndexOf("</" + t)), (n[t] = u)),
      u < r
    );
  }
  function bt(e, r) {
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
  }
  function qn(e, r, t, n) {
    var u = e.charAt(r + 2);
    switch (u) {
      case "-":
        if (e.charAt(r + 3) === "-") {
          var i = e.indexOf("-->", r + 4);
          return i > r
            ? (t.comment(e, r + 4, i - r - 4), i + 3)
            : (n.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (e.substr(r + 3, 6) == "CDATA[") {
          var i = e.indexOf("]]>", r + 9);
          return (t.startCDATA(), t.characters(e, r + 9, i - r - 9), t.endCDATA(), i + 3);
        }
        var a = zn(e, r),
          s = a.length;
        if (s > 1 && /!doctype/i.test(a[0][0])) {
          var l = a[1][0],
            o = !1,
            c = !1;
          s > 3 &&
            (/^public$/i.test(a[2][0])
              ? ((o = a[3][0]), (c = s > 4 && a[4][0]))
              : /^system$/i.test(a[2][0]) && (c = a[3][0]));
          var m = a[s - 1];
          return (t.startDTD(l, o, c), t.endDTD(), m.index + m[0].length);
        }
    }
    return -1;
  }
  function Vn(e, r, t) {
    var n = e.indexOf("?>", r);
    if (n) {
      var u = e.substring(r, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      if (u) {
        var i = u[0].length;
        return (t.processingInstruction(u[1], u[2]), n + 2);
      } else return -1;
    }
    return -1;
  }
  function St() {
    this.attributeNames = {};
  }
  St.prototype = {
    setTagName: function (e) {
      if (!yt.test(e)) throw new Error("invalid tagName:" + e);
      this.tagName = e;
    },
    addValue: function (e, r, t) {
      if (!yt.test(e)) throw new Error("invalid attribute:" + e);
      ((this.attributeNames[e] = this.length),
        (this[this.length++] = { qName: e, value: r, offset: t }));
    },
    length: 0,
    getLocalName: function (e) {
      return this[e].localName;
    },
    getLocator: function (e) {
      return this[e].locator;
    },
    getQName: function (e) {
      return this[e].qName;
    },
    getURI: function (e) {
      return this[e].uri;
    },
    getValue: function (e) {
      return this[e].value;
    },
  };
  function zn(e, r) {
    var t,
      n = [],
      u = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (u.lastIndex = r, u.exec(e); (t = u.exec(e)); ) if ((n.push(t), t[1])) return n;
  }
  Er.XMLReader = _t;
  Er.ParseError = he;
});
var Ot = te((Ke) => {
  var Gn = Se(),
    Hn = yr(),
    xt = At(),
    Nt = wt(),
    Wn = Hn.DOMImplementation,
    Tt = Gn.NAMESPACE,
    $n = Nt.ParseError,
    jn = Nt.XMLReader;
  function Bt(e) {
    return e
      .replace(
        /\r[\n\u0085]/g,
        `
`,
      )
      .replace(
        /[\r\u0085\u2028]/g,
        `
`,
      );
  }
  function It(e) {
    this.options = e || { locator: {} };
  }
  It.prototype.parseFromString = function (e, r) {
    var t = this.options,
      n = new jn(),
      u = t.domBuilder || new Me(),
      i = t.errorHandler,
      a = t.locator,
      s = t.xmlns || {},
      l = /\/x?html?$/.test(r),
      o = l ? xt.HTML_ENTITIES : xt.XML_ENTITIES;
    (a && u.setDocumentLocator(a),
      (n.errorHandler = Yn(i, u, a)),
      (n.domBuilder = t.domBuilder || u),
      l && (s[""] = Tt.HTML),
      (s.xml = s.xml || Tt.XML));
    var c = t.normalizeLineEndings || Bt;
    return (
      e && typeof e == "string" ? n.parse(c(e), s, o) : n.errorHandler.error("invalid doc source"),
      u.doc
    );
  };
  function Yn(e, r, t) {
    if (!e) {
      if (r instanceof Me) return r;
      e = r;
    }
    var n = {},
      u = e instanceof Function;
    t = t || {};
    function i(a) {
      var s = e[a];
      (!s &&
        u &&
        (s =
          e.length == 2
            ? function (l) {
                e(a, l);
              }
            : e),
        (n[a] =
          (s &&
            function (l) {
              s("[xmldom " + a + "]	" + l + _r(t));
            }) ||
          function () {}));
    }
    return (i("warning"), i("error"), i("fatalError"), n);
  }
  function Me() {
    this.cdata = !1;
  }
  function Ae(e, r) {
    ((r.lineNumber = e.lineNumber), (r.columnNumber = e.columnNumber));
  }
  Me.prototype = {
    startDocument: function () {
      ((this.doc = new Wn().createDocument(null, null, null)),
        this.locator && (this.doc.documentURI = this.locator.systemId));
    },
    startElement: function (e, r, t, n) {
      var u = this.doc,
        i = u.createElementNS(e, t || r),
        a = n.length;
      (Ze(this, i), (this.currentElement = i), this.locator && Ae(this.locator, i));
      for (var s = 0; s < a; s++) {
        var e = n.getURI(s),
          l = n.getValue(s),
          t = n.getQName(s),
          o = u.createAttributeNS(e, t);
        (this.locator && Ae(n.getLocator(s), o),
          (o.value = o.nodeValue = l),
          i.setAttributeNode(o));
      }
    },
    endElement: function (e, r, t) {
      var n = this.currentElement,
        u = n.tagName;
      this.currentElement = n.parentNode;
    },
    startPrefixMapping: function (e, r) {},
    endPrefixMapping: function (e) {},
    processingInstruction: function (e, r) {
      var t = this.doc.createProcessingInstruction(e, r);
      (this.locator && Ae(this.locator, t), Ze(this, t));
    },
    ignorableWhitespace: function (e, r, t) {},
    characters: function (e, r, t) {
      if (((e = Ct.apply(this, arguments)), e)) {
        if (this.cdata) var n = this.doc.createCDATASection(e);
        else var n = this.doc.createTextNode(e);
        (this.currentElement
          ? this.currentElement.appendChild(n)
          : /^\s*$/.test(e) && this.doc.appendChild(n),
          this.locator && Ae(this.locator, n));
      }
    },
    skippedEntity: function (e) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function (e, r, t) {
      e = Ct.apply(this, arguments);
      var n = this.doc.createComment(e);
      (this.locator && Ae(this.locator, n), Ze(this, n));
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, r, t) {
      var n = this.doc.implementation;
      if (n && n.createDocumentType) {
        var u = n.createDocumentType(e, r, t);
        (this.locator && Ae(this.locator, u), Ze(this, u), (this.doc.doctype = u));
      }
    },
    warning: function (e) {
      console.warn("[xmldom warning]	" + e, _r(this.locator));
    },
    error: function (e) {
      console.error("[xmldom error]	" + e, _r(this.locator));
    },
    fatalError: function (e) {
      throw new $n(e, this.locator);
    },
  };
  function _r(e) {
    if (e)
      return (
        `
@` +
        (e.systemId || "") +
        "#[line:" +
        e.lineNumber +
        ",col:" +
        e.columnNumber +
        "]"
      );
  }
  function Ct(e, r, t) {
    return typeof e == "string"
      ? e.substr(r, t)
      : e.length >= r + t || r
        ? new java.lang.String(e, r, t) + ""
        : e;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
    /\w+/g,
    function (e) {
      Me.prototype[e] = function () {
        return null;
      };
    },
  );
  function Ze(e, r) {
    e.currentElement ? e.currentElement.appendChild(r) : e.doc.appendChild(r);
  }
  Ke.__DOMHandler = Me;
  Ke.normalizeLineEndings = Bt;
  Ke.DOMParser = It;
});
var Ft = te((er) => {
  var Rt = yr();
  er.DOMImplementation = Rt.DOMImplementation;
  er.XMLSerializer = Rt.XMLSerializer;
  er.DOMParser = Ot().DOMParser;
});
function ne(e) {
  var r = String(e);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(e);
    } catch {}
  return r;
}
var on = (function () {
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
      (e.prototype.mapOr = function (r, t) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, t) {
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
        return z(r);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ee(C);
      }),
      e
    );
  })(),
  C = new on();
Object.freeze(C);
var an = (function () {
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
        return L(r(this.value));
      }),
      (e.prototype.mapOr = function (r, t) {
        return t(this.value);
      }),
      (e.prototype.mapOrElse = function (r, t) {
        return t(this.value);
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
        return $(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ee(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(ne(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  L = an,
  ke;
(function (e) {
  function r() {
    for (var u = [], i = 0; i < arguments.length; i++) u[i] = arguments[i];
    for (var a = [], s = 0, l = u; s < l.length; s++) {
      var o = l[s];
      if (o.isSome()) a.push(o.value);
      else return o;
    }
    return L(a);
  }
  e.all = r;
  function t() {
    for (var u = [], i = 0; i < arguments.length; i++) u[i] = arguments[i];
    for (var a = 0, s = u; a < s.length; a++) {
      var l = s[a];
      if (l.isSome()) return l;
    }
    return C;
  }
  e.any = t;
  function n(u) {
    return u instanceof L || u === C;
  }
  e.isOption = n;
})(ke || (ke = {}));
var ae = function (e, r, t) {
    if (t || arguments.length === 2)
      for (var n = 0, u = r.length, i; n < u; n++)
        (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), (i[n] = r[n]));
    return e.concat(i || Array.prototype.slice.call(r));
  },
  sn = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
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
              ne(this.error),
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
              ne(this.error),
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
        return new z(r(this.error));
      }),
      (e.prototype.mapOr = function (r, t) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, t) {
        return r(this.error);
      }),
      (e.prototype.or = function (r) {
        return r;
      }),
      (e.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (e.prototype.toOption = function () {
        return C;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(ne(this.error), ")");
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
        return new _e(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var z = sn,
  ln = (function () {
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
        throw new Error("Tried to unwrap Ok: ".concat(ne(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (r) {
        return new $(r(this.value));
      }),
      (e.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (e.prototype.mapErr = function (r) {
        return this;
      }),
      (e.prototype.mapOr = function (r, t) {
        return t(this.value);
      }),
      (e.prototype.mapOrElse = function (r, t) {
        return t(this.value);
      }),
      (e.prototype.or = function (r) {
        return this;
      }),
      (e.prototype.orElse = function (r) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return L(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(ne(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new _e(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var $ = ln,
  qe;
(function (e) {
  function r(s) {
    for (var l = [], o = 1; o < arguments.length; o++) l[o - 1] = arguments[o];
    for (
      var c = s === void 0 ? [] : Array.isArray(s) ? s : ae([s], l, !0), m = [], d = 0, h = c;
      d < h.length;
      d++
    ) {
      var g = h[d];
      if (g.isOk()) m.push(g.value);
      else return g;
    }
    return new $(m);
  }
  e.all = r;
  function t(s) {
    for (var l = [], o = 1; o < arguments.length; o++) l[o - 1] = arguments[o];
    for (
      var c = s === void 0 ? [] : Array.isArray(s) ? s : ae([s], l, !0), m = [], d = 0, h = c;
      d < h.length;
      d++
    ) {
      var g = h[d];
      if (g.isOk()) return g;
      m.push(g.error);
    }
    return new z(m);
  }
  e.any = t;
  function n(s) {
    try {
      return new $(s());
    } catch (l) {
      return new z(l);
    }
  }
  e.wrap = n;
  function u(s) {
    try {
      return s()
        .then(function (l) {
          return new $(l);
        })
        .catch(function (l) {
          return new z(l);
        });
    } catch (l) {
      return Promise.resolve(new z(l));
    }
  }
  e.wrapAsync = u;
  function i(s) {
    return s.reduce(
      function (l, o) {
        var c = l[0],
          m = l[1];
        return o.isOk()
          ? [ae(ae([], c, !0), [o.value], !1), m]
          : [c, ae(ae([], m, !0), [o.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = i;
  function a(s) {
    return s instanceof z || s instanceof $;
  }
  e.isResult = a;
})(qe || (qe = {}));
var Ve = function (e, r, t, n) {
    function u(i) {
      return i instanceof t
        ? i
        : new t(function (a) {
            a(i);
          });
    }
    return new (t || (t = Promise))(function (i, a) {
      function s(c) {
        try {
          o(n.next(c));
        } catch (m) {
          a(m);
        }
      }
      function l(c) {
        try {
          o(n.throw(c));
        } catch (m) {
          a(m);
        }
      }
      function o(c) {
        c.done ? i(c.value) : u(c.value).then(s, l);
      }
      o((n = n.apply(e, r || [])).next());
    });
  },
  ze = function (e, r) {
    var t = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      n,
      u,
      i,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(o) {
      return function (c) {
        return l([o, c]);
      };
    }
    function l(o) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((n = 1),
            u &&
              (i =
                o[0] & 2
                  ? u.return
                  : o[0]
                    ? u.throw || ((i = u.return) && i.call(u), 0)
                    : u.next) &&
              !(i = i.call(u, o[1])).done)
          )
            return i;
          switch (((u = 0), i && (o = [o[0] & 2, i.value]), o[0])) {
            case 0:
            case 1:
              i = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (u = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((i = t.trys), !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < i[1]) {
                ((t.label = i[1]), (i = o));
                break;
              }
              if (i && t.label < i[2]) {
                ((t.label = i[2]), t.ops.push(o));
                break;
              }
              (i[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(e, t);
        } catch (c) {
          ((o = [6, c]), (u = 0));
        } finally {
          n = i = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  _e = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (n) {
          return Ve(t, void 0, void 0, function () {
            var u;
            return ze(this, function (i) {
              return n.isErr() ? [2, n] : ((u = r(n.value)), [2, u instanceof e ? u.promise : u]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (n) {
          return Ve(t, void 0, void 0, function () {
            var u;
            return ze(this, function (i) {
              switch (i.label) {
                case 0:
                  return n.isErr() ? [2, n] : ((u = $), [4, r(n.value)]);
                case 1:
                  return [2, u.apply(void 0, [i.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (r) {
        var t = this;
        return this.thenInternal(function (n) {
          return Ve(t, void 0, void 0, function () {
            var u;
            return ze(this, function (i) {
              switch (i.label) {
                case 0:
                  return n.isOk() ? [2, n] : ((u = z), [4, r(n.error)]);
                case 1:
                  return [2, u.apply(void 0, [i.sent()])];
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
        var t = this;
        return this.thenInternal(function (n) {
          return Ve(t, void 0, void 0, function () {
            var u;
            return ze(this, function (i) {
              return n.isOk() ? [2, n] : ((u = r(n.error)), [2, u instanceof e ? u.promise : u]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Ee(
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
var tr = function (e, r, t, n) {
    function u(i) {
      return i instanceof t
        ? i
        : new t(function (a) {
            a(i);
          });
    }
    return new (t || (t = Promise))(function (i, a) {
      function s(c) {
        try {
          o(n.next(c));
        } catch (m) {
          a(m);
        }
      }
      function l(c) {
        try {
          o(n.throw(c));
        } catch (m) {
          a(m);
        }
      }
      function o(c) {
        c.done ? i(c.value) : u(c.value).then(s, l);
      }
      o((n = n.apply(e, r || [])).next());
    });
  },
  nr = function (e, r) {
    var t = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      n,
      u,
      i,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(o) {
      return function (c) {
        return l([o, c]);
      };
    }
    function l(o) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((n = 1),
            u &&
              (i =
                o[0] & 2
                  ? u.return
                  : o[0]
                    ? u.throw || ((i = u.return) && i.call(u), 0)
                    : u.next) &&
              !(i = i.call(u, o[1])).done)
          )
            return i;
          switch (((u = 0), i && (o = [o[0] & 2, i.value]), o[0])) {
            case 0:
            case 1:
              i = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (u = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((i = t.trys), !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < i[1]) {
                ((t.label = i[1]), (i = o));
                break;
              }
              if (i && t.label < i[2]) {
                ((t.label = i[2]), t.ops.push(o));
                break;
              }
              (i[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(e, t);
        } catch (c) {
          ((o = [6, c]), (u = 0));
        } finally {
          n = i = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  Ee = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (n) {
          return tr(t, void 0, void 0, function () {
            var u;
            return nr(this, function (i) {
              return n.isNone() ? [2, n] : ((u = r(n.value)), [2, u instanceof e ? u.promise : u]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (n) {
          return tr(t, void 0, void 0, function () {
            var u;
            return nr(this, function (i) {
              switch (i.label) {
                case 0:
                  return n.isNone() ? [2, n] : ((u = L), [4, r(n.value)]);
                case 1:
                  return [2, u.apply(void 0, [i.sent()])];
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
        var t = this;
        return this.thenInternal(function (n) {
          return tr(t, void 0, void 0, function () {
            var u;
            return nr(this, function (i) {
              return n.isSome() ? [2, n] : ((u = r()), [2, u instanceof e ? u.promise : u]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (r) {
        return new _e(
          this.promise.then(function (t) {
            return t.toResult(r);
          }),
        );
      }),
      (e.prototype.thenInternal = function (r) {
        return new e(this.promise.then(r));
      }),
      e
    );
  })();
function Cr(e, r) {
  try {
    if (e) return L(new URL(e, r));
  } catch {}
  return C;
}
function X(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e)) return { __serde_tag: "array", __serde_val: e.map((r) => X(r)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let r = [];
    return (
      e.forEach((t, n) => {
        r.push([n, t]);
      }),
      { __serde_tag: "headers", __serde_val: r }
    );
  } else {
    if (e instanceof Set) return { __serde_tag: "set", __serde_val: [...e.values()].map(X) };
    if (e instanceof Map)
      return { __serde_tag: "map", __serde_val: [...e.entries()].map(([r, t]) => [X(r), X(t)]) };
    if (e instanceof RegExp) return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if (ke.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: X(e.value) }
        : { __serde_tag: "none" };
    if (qe.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: X(e.value) }
        : { __serde_tag: "err", __serde_val: X(e.error) };
    if (typeof e == "object") {
      let r = {};
      for (let [t, n] of Object.entries(e)) r[t] = X(n);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
function Nr(e, r = 0) {
  let t = 3735928559 ^ r,
    n = 1103547991 ^ r;
  for (let u = 0, i; u < e.length; u++)
    ((i = e.charCodeAt(u)), (t = Math.imul(t ^ i, 2654435761)), (n = Math.imul(n ^ i, 1597334677)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t ^= Math.imul(n ^ (n >>> 13), 3266489909)),
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & n) + (t >>> 0)
  );
}
var Or = ve(Ir(), 1);
var xi = new BroadcastChannel("worker_service");
var ir = {
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
async function cn(e, r) {
  await Or.default.runtime.sendMessage({ msg: e, channel: r });
}
function Rr(e) {
  let r = ir.FromInjectedToService;
  cn(e, r);
}
var pn = ["mp4", "webm", "mkv"],
  dn = ["mp3", "m4a", "ogg"],
  fn = [...pn, ...dn];
var gn = [
    { mime_reg: /(avc1|avc3).*/i, demuxer: "mp4", codec: "H264" },
    { mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i, demuxer: "mp4", codec: "H265" },
    { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
    { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
    { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
    { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
  ],
  hn = [
    { mime_reg: /(aac|mp4a.40).*/i, demuxer: "m4a", codec: "AAC" },
    { mime_reg: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, demuxer: "mp3", codec: "MP3" },
    { mime_reg: /(opus|(mp4a\.ad.*))/i, demuxer: "ogg", codec: "Opus" },
    { mime_reg: /vorbis/i, demuxer: "ogg", codec: "Vorbis" },
  ];
function Fr(e) {
  for (let r of gn) if (r.mime_reg.test(e)) return L(r.demuxer);
  return C;
}
function Mr(e) {
  for (let r of hn) if (r.mime_reg.test(e)) return L(r.demuxer);
  return C;
}
function Lr(e) {
  return e.length > 0;
}
function Dn(e, r) {
  let i = e.size.map((o) => o.height).unwrapOr(0),
    a = r.size.map((o) => o.height).unwrapOr(0),
    s = e.bitrate.unwrapOr(0),
    l = r.bitrate.unwrapOr(0);
  return i > a ? -1 : i < a ? 1 : s > l ? -1 : s < l ? 1 : 0;
}
function Pr(e) {
  return [...e.values()].sort((r, t) => Dn(r.quality, t.quality));
}
var se = ve(Ge()),
  kr = "https://example.com",
  yn = function (r, t) {
    if (/^[a-z]+:/i.test(t)) return t;
    /^data:/.test(r) && (r = (se.default.location && se.default.location.href) || "");
    var n = /^\/\//.test(r),
      u = !se.default.location && !/\/\//i.test(r);
    r = new se.default.URL(r, se.default.location || kr);
    var i = new URL(t, r);
    return u ? i.href.slice(kr.length) : n ? i.href.slice(i.protocol.length) : i.href;
  },
  He = yn;
var V = ve(Ge());
var qr = function (r, t, n) {
  t.forEach(function (u) {
    for (var i in r.mediaGroups[u])
      for (var a in r.mediaGroups[u][i]) {
        var s = r.mediaGroups[u][i][a];
        n(s, u, i, a);
      }
  });
};
var or = ve(Ge()),
  vn = function (r) {
    return or.default.atob ? or.default.atob(r) : Buffer.from(r, "base64").toString("binary");
  };
function ar(e) {
  for (var r = vn(e), t = new Uint8Array(r.length), n = 0; n < r.length; n++)
    t[n] = r.charCodeAt(n);
  return t;
}
var zt = ve(Ft());
var Mt = (e) => !!e && typeof e == "object",
  M = (...e) =>
    e.reduce(
      (r, t) => (
        typeof t != "object" ||
          Object.keys(t).forEach((n) => {
            Array.isArray(r[n]) && Array.isArray(t[n])
              ? (r[n] = r[n].concat(t[n]))
              : Mt(r[n]) && Mt(t[n])
                ? (r[n] = M(r[n], t[n]))
                : (r[n] = t[n]);
          }),
        r
      ),
      {},
    ),
  Gt = (e) => Object.keys(e).map((r) => e[r]),
  Xn = (e, r) => {
    let t = [];
    for (let n = e; n < r; n++) t.push(n);
    return t;
  },
  ye = (e) => e.reduce((r, t) => r.concat(t), []),
  Ht = (e) => {
    if (!e.length) return [];
    let r = [];
    for (let t = 0; t < e.length; t++) r.push(e[t]);
    return r;
  },
  Qn = (e, r) => e.reduce((t, n, u) => (n[r] && t.push(u), t), []),
  Jn = (e, r) =>
    Gt(
      e.reduce(
        (t, n) => (
          n.forEach((u) => {
            t[r(u)] = u;
          }),
          t
        ),
        {},
      ),
    ),
  Le = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME",
  },
  Pe = ({ baseUrl: e = "", source: r = "", range: t = "", indexRange: n = "" }) => {
    let u = { uri: r, resolvedUri: He(e || "", r) };
    if (t || n) {
      let a = (t || n).split("-"),
        s = V.default.BigInt ? V.default.BigInt(a[0]) : parseInt(a[0], 10),
        l = V.default.BigInt ? V.default.BigInt(a[1]) : parseInt(a[1], 10);
      (s < Number.MAX_SAFE_INTEGER && typeof s == "bigint" && (s = Number(s)),
        l < Number.MAX_SAFE_INTEGER && typeof l == "bigint" && (l = Number(l)));
      let o;
      (typeof l == "bigint" || typeof s == "bigint"
        ? (o = V.default.BigInt(l) - V.default.BigInt(s) + V.default.BigInt(1))
        : (o = l - s + 1),
        typeof o == "bigint" && o < Number.MAX_SAFE_INTEGER && (o = Number(o)),
        (u.byterange = { length: o, offset: s }));
    }
    return u;
  },
  Zn = (e) => {
    let r;
    return (
      typeof e.offset == "bigint" || typeof e.length == "bigint"
        ? (r = V.default.BigInt(e.offset) + V.default.BigInt(e.length) - V.default.BigInt(1))
        : (r = e.offset + e.length - 1),
      `${e.offset}-${r}`
    );
  },
  Lt = (e) => (e && typeof e != "number" && (e = parseInt(e, 10)), isNaN(e) ? null : e),
  Kn = {
    static(e) {
      let { duration: r, timescale: t = 1, sourceDuration: n, periodDuration: u } = e,
        i = Lt(e.endNumber),
        a = r / t;
      return typeof i == "number"
        ? { start: 0, end: i }
        : typeof u == "number"
          ? { start: 0, end: u / a }
          : { start: 0, end: n / a };
    },
    dynamic(e) {
      let {
          NOW: r,
          clientOffset: t,
          availabilityStartTime: n,
          timescale: u = 1,
          duration: i,
          periodStart: a = 0,
          minimumUpdatePeriod: s = 0,
          timeShiftBufferDepth: l = 1 / 0,
        } = e,
        o = Lt(e.endNumber),
        c = (r + t) / 1e3,
        m = n + a,
        h = c + s - m,
        g = Math.ceil((h * u) / i),
        D = Math.floor(((c - m - l) * u) / i),
        y = Math.floor(((c - m) * u) / i);
      return { start: Math.max(0, D), end: typeof o == "number" ? o : Math.min(g, y) };
    },
  },
  eu = (e) => (r) => {
    let { duration: t, timescale: n = 1, periodStart: u, startNumber: i = 1 } = e;
    return { number: i + r, duration: t / n, timeline: u, time: r * t };
  },
  Sr = (e) => {
    let { type: r, duration: t, timescale: n = 1, periodDuration: u, sourceDuration: i } = e,
      { start: a, end: s } = Kn[r](e),
      l = Xn(a, s).map(eu(e));
    if (r === "static") {
      let o = l.length - 1,
        c = typeof u == "number" ? u : i;
      l[o].duration = c - (t / n) * o;
    }
    return l;
  },
  Wt = (e) => {
    let {
      baseUrl: r,
      initialization: t = {},
      sourceDuration: n,
      indexRange: u = "",
      periodStart: i,
      presentationTime: a,
      number: s = 0,
      duration: l,
    } = e;
    if (!r) throw new Error(Le.NO_BASE_URL);
    let o = Pe({ baseUrl: r, source: t.sourceURL, range: t.range }),
      c = Pe({ baseUrl: r, source: r, indexRange: u });
    if (((c.map = o), l)) {
      let m = Sr(e);
      m.length && ((c.duration = m[0].duration), (c.timeline = m[0].timeline));
    } else n && ((c.duration = n), (c.timeline = i));
    return ((c.presentationTime = a || i), (c.number = s), [c]);
  },
  ru = (e, r, t) => {
    let n = e.sidx.map ? e.sidx.map : null,
      u = e.sidx.duration,
      i = e.timeline || 0,
      a = e.sidx.byterange,
      s = a.offset + a.length,
      l = r.timescale,
      o = r.references.filter((y) => y.referenceType !== 1),
      c = [],
      m = e.endList ? "static" : "dynamic",
      d = e.sidx.timeline,
      h = d,
      g = e.mediaSequence || 0,
      D;
    typeof r.firstOffset == "bigint"
      ? (D = V.default.BigInt(s) + r.firstOffset)
      : (D = s + r.firstOffset);
    for (let y = 0; y < o.length; y++) {
      let b = r.references[y],
        O = b.referencedSize,
        S = b.subsegmentDuration,
        p;
      typeof D == "bigint" ? (p = D + V.default.BigInt(O) - V.default.BigInt(1)) : (p = D + O - 1);
      let f = `${D}-${p}`,
        E = Wt({
          baseUrl: t,
          timescale: l,
          timeline: i,
          periodStart: d,
          presentationTime: h,
          number: g,
          duration: S,
          sourceDuration: u,
          indexRange: f,
          type: m,
        })[0];
      (n && (E.map = n),
        c.push(E),
        typeof D == "bigint" ? (D += V.default.BigInt(O)) : (D += O),
        (h += S / l),
        g++);
    }
    return ((e.segments = c), e);
  },
  tu = ["AUDIO", "SUBTITLES"],
  nu = 1 / 60,
  $t = (e) => Jn(e, ({ timeline: r }) => r).sort((r, t) => (r.timeline > t.timeline ? 1 : -1)),
  uu = (e, r) => {
    for (let t = 0; t < e.length; t++) if (e[t].attributes.NAME === r) return e[t];
    return null;
  },
  Pt = (e) => {
    let r = [];
    return (
      qr(e, tu, (t, n, u, i) => {
        r = r.concat(t.playlists || []);
      }),
      r
    );
  },
  Ut = ({ playlist: e, mediaSequence: r }) => {
    ((e.mediaSequence = r),
      e.segments.forEach((t, n) => {
        t.number = e.mediaSequence + n;
      }));
  },
  iu = ({ oldPlaylists: e, newPlaylists: r, timelineStarts: t }) => {
    r.forEach((n) => {
      n.discontinuitySequence = t.findIndex(function ({ timeline: l }) {
        return l === n.timeline;
      });
      let u = uu(e, n.attributes.NAME);
      if (!u || n.sidx) return;
      let i = n.segments[0],
        a = u.segments.findIndex(function (l) {
          return Math.abs(l.presentationTime - i.presentationTime) < nu;
        });
      if (a === -1) {
        (Ut({ playlist: n, mediaSequence: u.mediaSequence + u.segments.length }),
          (n.segments[0].discontinuity = !0),
          n.discontinuityStarts.unshift(0),
          ((!u.segments.length && n.timeline > u.timeline) ||
            (u.segments.length && n.timeline > u.segments[u.segments.length - 1].timeline)) &&
            n.discontinuitySequence--);
        return;
      }
      (u.segments[a].discontinuity &&
        !i.discontinuity &&
        ((i.discontinuity = !0), n.discontinuityStarts.unshift(0), n.discontinuitySequence--),
        Ut({ playlist: n, mediaSequence: u.segments[a].number }));
    });
  },
  ou = ({ oldManifest: e, newManifest: r }) => {
    let t = e.playlists.concat(Pt(e)),
      n = r.playlists.concat(Pt(r));
    return (
      (r.timelineStarts = $t([e.timelineStarts, r.timelineStarts])),
      iu({ oldPlaylists: t, newPlaylists: n, timelineStarts: r.timelineStarts }),
      r
    );
  },
  au = (e) => e && e.uri + "-" + Zn(e.byterange),
  br = (e) => {
    let r = e.reduce(function (n, u) {
        return (
          n[u.attributes.baseUrl] || (n[u.attributes.baseUrl] = []),
          n[u.attributes.baseUrl].push(u),
          n
        );
      }, {}),
      t = [];
    return (
      Object.values(r).forEach((n) => {
        let u = Gt(
          n.reduce((i, a) => {
            let s = a.attributes.id + (a.attributes.lang || "");
            return (
              i[s]
                ? (a.segments &&
                    (a.segments[0] && (a.segments[0].discontinuity = !0),
                    i[s].segments.push(...a.segments)),
                  a.attributes.contentProtection &&
                    (i[s].attributes.contentProtection = a.attributes.contentProtection))
                : ((i[s] = a), (i[s].attributes.timelineStarts = [])),
              i[s].attributes.timelineStarts.push({
                start: a.attributes.periodStart,
                timeline: a.attributes.periodStart,
              }),
              i
            );
          }, {}),
        );
        t = t.concat(u);
      }),
      t.map((n) => ((n.discontinuityStarts = Qn(n.segments || [], "discontinuity")), n))
    );
  },
  wr = (e, r) => {
    let t = au(e.sidx),
      n = t && r[t] && r[t].sidx;
    return (n && ru(e, n, e.sidx.resolvedUri), e);
  },
  su = (e, r = {}) => {
    if (!Object.keys(r).length) return e;
    for (let t in e) e[t] = wr(e[t], r);
    return e;
  },
  lu = (
    {
      attributes: e,
      segments: r,
      sidx: t,
      mediaSequence: n,
      discontinuitySequence: u,
      discontinuityStarts: i,
    },
    a,
  ) => {
    let s = {
      attributes: { NAME: e.id, BANDWIDTH: e.bandwidth, CODECS: e.codecs, "PROGRAM-ID": 1 },
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      discontinuitySequence: u,
      discontinuityStarts: i,
      timelineStarts: e.timelineStarts,
      mediaSequence: n,
      segments: r,
    };
    return (
      e.contentProtection && (s.contentProtection = e.contentProtection),
      e.serviceLocation && (s.attributes.serviceLocation = e.serviceLocation),
      t && (s.sidx = t),
      a && ((s.attributes.AUDIO = "audio"), (s.attributes.SUBTITLES = "subs")),
      s
    );
  },
  cu = ({
    attributes: e,
    segments: r,
    mediaSequence: t,
    discontinuityStarts: n,
    discontinuitySequence: u,
  }) => {
    typeof r > "u" &&
      ((r = [
        {
          uri: e.baseUrl,
          timeline: e.periodStart,
          resolvedUri: e.baseUrl || "",
          duration: e.sourceDuration,
          number: 0,
        },
      ]),
      (e.duration = e.sourceDuration));
    let i = { NAME: e.id, BANDWIDTH: e.bandwidth, "PROGRAM-ID": 1 };
    e.codecs && (i.CODECS = e.codecs);
    let a = {
      attributes: i,
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      timelineStarts: e.timelineStarts,
      discontinuityStarts: n,
      discontinuitySequence: u,
      mediaSequence: t,
      segments: r,
    };
    return (e.serviceLocation && (a.attributes.serviceLocation = e.serviceLocation), a);
  },
  mu = (e, r = {}, t = !1) => {
    let n,
      u = e.reduce((i, a) => {
        let s = (a.attributes.role && a.attributes.role.value) || "",
          l = a.attributes.lang || "",
          o = a.attributes.label || "main";
        if (l && !a.attributes.label) {
          let m = s ? ` (${s})` : "";
          o = `${a.attributes.lang}${m}`;
        }
        i[o] ||
          (i[o] = { language: l, autoselect: !0, default: s === "main", playlists: [], uri: "" });
        let c = wr(lu(a, t), r);
        return (
          i[o].playlists.push(c),
          typeof n > "u" && s === "main" && ((n = a), (n.default = !0)),
          i
        );
      }, {});
    if (!n) {
      let i = Object.keys(u)[0];
      u[i].default = !0;
    }
    return u;
  },
  pu = (e, r = {}) =>
    e.reduce((t, n) => {
      let u = n.attributes.label || n.attributes.lang || "text",
        i = n.attributes.lang || "und";
      return (
        t[u] || (t[u] = { language: i, default: !1, autoselect: !1, playlists: [], uri: "" }),
        t[u].playlists.push(wr(cu(n), r)),
        t
      );
    }, {}),
  du = (e) =>
    e.reduce(
      (r, t) => (
        t &&
          t.forEach((n) => {
            let { channel: u, language: i } = n;
            ((r[i] = { autoselect: !1, default: !1, instreamId: u, language: i }),
              n.hasOwnProperty("aspectRatio") && (r[i].aspectRatio = n.aspectRatio),
              n.hasOwnProperty("easyReader") && (r[i].easyReader = n.easyReader),
              n.hasOwnProperty("3D") && (r[i]["3D"] = n["3D"]));
          }),
        r
      ),
      {},
    ),
  fu = ({ attributes: e, segments: r, sidx: t, discontinuityStarts: n }) => {
    let u = {
      attributes: {
        NAME: e.id,
        AUDIO: "audio",
        SUBTITLES: "subs",
        RESOLUTION: { width: e.width, height: e.height },
        CODECS: e.codecs,
        BANDWIDTH: e.bandwidth,
        "PROGRAM-ID": 1,
      },
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      discontinuityStarts: n,
      timelineStarts: e.timelineStarts,
      segments: r,
    };
    return (
      e.frameRate && (u.attributes["FRAME-RATE"] = e.frameRate),
      e.contentProtection && (u.contentProtection = e.contentProtection),
      e.serviceLocation && (u.attributes.serviceLocation = e.serviceLocation),
      t && (u.sidx = t),
      u
    );
  },
  gu = ({ attributes: e }) =>
    e.mimeType === "video/mp4" || e.mimeType === "video/webm" || e.contentType === "video",
  hu = ({ attributes: e }) =>
    e.mimeType === "audio/mp4" || e.mimeType === "audio/webm" || e.contentType === "audio",
  Au = ({ attributes: e }) => e.mimeType === "text/vtt" || e.contentType === "text",
  Du = (e, r) => {
    e.forEach((t) => {
      ((t.mediaSequence = 0),
        (t.discontinuitySequence = r.findIndex(function ({ timeline: n }) {
          return n === t.timeline;
        })),
        t.segments &&
          t.segments.forEach((n, u) => {
            n.number = u;
          }));
    });
  },
  kt = (e) =>
    e
      ? Object.keys(e).reduce((r, t) => {
          let n = e[t];
          return r.concat(n.playlists);
        }, [])
      : [],
  yu = ({
    dashPlaylists: e,
    locations: r,
    contentSteering: t,
    sidxMapping: n = {},
    previousManifest: u,
    eventStream: i,
  }) => {
    if (!e.length) return {};
    let {
        sourceDuration: a,
        type: s,
        suggestedPresentationDelay: l,
        minimumUpdatePeriod: o,
      } = e[0].attributes,
      c = br(e.filter(gu)).map(fu),
      m = br(e.filter(hu)),
      d = br(e.filter(Au)),
      h = e.map((p) => p.attributes.captionServices).filter(Boolean),
      g = {
        allowCache: !0,
        discontinuityStarts: [],
        segments: [],
        endList: !0,
        mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        uri: "",
        duration: a,
        playlists: su(c, n),
      };
    (o >= 0 && (g.minimumUpdatePeriod = o * 1e3),
      r && (g.locations = r),
      t && (g.contentSteering = t),
      s === "dynamic" && (g.suggestedPresentationDelay = l),
      i && i.length > 0 && (g.eventStream = i));
    let D = g.playlists.length === 0,
      y = m.length ? mu(m, n, D) : null,
      b = d.length ? pu(d, n) : null,
      O = c.concat(kt(y), kt(b)),
      S = O.map(({ timelineStarts: p }) => p);
    return (
      (g.timelineStarts = $t(S)),
      Du(O, g.timelineStarts),
      y && (g.mediaGroups.AUDIO.audio = y),
      b && (g.mediaGroups.SUBTITLES.subs = b),
      h.length && (g.mediaGroups["CLOSED-CAPTIONS"].cc = du(h)),
      u ? ou({ oldManifest: u, newManifest: g }) : g
    );
  },
  vu = (e, r, t) => {
    let {
        NOW: n,
        clientOffset: u,
        availabilityStartTime: i,
        timescale: a = 1,
        periodStart: s = 0,
        minimumUpdatePeriod: l = 0,
      } = e,
      o = (n + u) / 1e3,
      c = i + s,
      d = o + l - c;
    return Math.ceil((d * a - r) / t);
  },
  jt = (e, r) => {
    let {
        type: t,
        minimumUpdatePeriod: n = 0,
        media: u = "",
        sourceDuration: i,
        timescale: a = 1,
        startNumber: s = 1,
        periodStart: l,
      } = e,
      o = [],
      c = -1;
    for (let m = 0; m < r.length; m++) {
      let d = r[m],
        h = d.d,
        g = d.r || 0,
        D = d.t || 0;
      (c < 0 && (c = D), D && D > c && (c = D));
      let y;
      if (g < 0) {
        let S = m + 1;
        S === r.length
          ? t === "dynamic" && n > 0 && u.indexOf("$Number$") > 0
            ? (y = vu(e, c, h))
            : (y = (i * a - c) / h)
          : (y = (r[S].t - c) / h);
      } else y = g + 1;
      let b = s + o.length + y,
        O = s + o.length;
      for (; O < b; ) (o.push({ number: O, duration: h / a, time: c, timeline: l }), (c += h), O++);
    }
    return o;
  },
  Eu = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
  _u = (e) => (r, t, n, u) => {
    if (r === "$$") return "$";
    if (typeof e[t] > "u") return r;
    let i = "" + e[t];
    return t === "RepresentationID" || (n ? (u = parseInt(u, 10)) : (u = 1), i.length >= u)
      ? i
      : `${new Array(u - i.length + 1).join("0")}${i}`;
  },
  qt = (e, r) => e.replace(Eu, _u(r)),
  bu = (e, r) =>
    !e.duration && !r
      ? [
          {
            number: e.startNumber || 1,
            duration: e.sourceDuration,
            time: 0,
            timeline: e.periodStart,
          },
        ]
      : e.duration
        ? Sr(e)
        : jt(e, r),
  Su = (e, r) => {
    let t = { RepresentationID: e.id, Bandwidth: e.bandwidth || 0 },
      { initialization: n = { sourceURL: "", range: "" } } = e,
      u = Pe({ baseUrl: e.baseUrl, source: qt(n.sourceURL, t), range: n.range });
    return bu(e, r).map((a) => {
      ((t.Number = a.number), (t.Time = a.time));
      let s = qt(e.media || "", t),
        l = e.timescale || 1,
        o = e.presentationTimeOffset || 0,
        c = e.periodStart + (a.time - o) / l;
      return {
        uri: s,
        timeline: a.timeline,
        duration: a.duration,
        resolvedUri: He(e.baseUrl || "", s),
        map: u,
        number: a.number,
        presentationTime: c,
      };
    });
  },
  wu = (e, r) => {
    let { baseUrl: t, initialization: n = {} } = e,
      u = Pe({ baseUrl: t, source: n.sourceURL, range: n.range }),
      i = Pe({ baseUrl: t, source: r.media, range: r.mediaRange });
    return ((i.map = u), i);
  },
  xu = (e, r) => {
    let { duration: t, segmentUrls: n = [], periodStart: u } = e;
    if ((!t && !r) || (t && r)) throw new Error(Le.SEGMENT_TIME_UNSPECIFIED);
    let i = n.map((l) => wu(e, l)),
      a;
    return (
      t && (a = Sr(e)),
      r && (a = jt(e, r)),
      a
        .map((l, o) => {
          if (i[o]) {
            let c = i[o],
              m = e.timescale || 1,
              d = e.presentationTimeOffset || 0;
            return (
              (c.timeline = l.timeline),
              (c.duration = l.duration),
              (c.number = l.number),
              (c.presentationTime = u + (l.time - d) / m),
              c
            );
          }
        })
        .filter((l) => l)
    );
  },
  Tu = ({ attributes: e, segmentInfo: r }) => {
    let t, n;
    r.template
      ? ((n = Su), (t = M(e, r.template)))
      : r.base
        ? ((n = Wt), (t = M(e, r.base)))
        : r.list && ((n = xu), (t = M(e, r.list)));
    let u = { attributes: e };
    if (!n) return u;
    let i = n(t, r.segmentTimeline);
    if (t.duration) {
      let { duration: a, timescale: s = 1 } = t;
      t.duration = a / s;
    } else
      i.length
        ? (t.duration = i.reduce((a, s) => Math.max(a, Math.ceil(s.duration)), 0))
        : (t.duration = 0);
    return (
      (u.attributes = t),
      (u.segments = i),
      r.base && t.indexRange && ((u.sidx = i[0]), (u.segments = [])),
      u
    );
  },
  Cu = (e) => e.map(Tu),
  T = (e, r) => Ht(e.childNodes).filter(({ tagName: t }) => t === r),
  Ue = (e) => e.textContent.trim(),
  Nu = (e) => parseFloat(e.split("/").reduce((r, t) => r / t)),
  De = (e) => {
    let s = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
    if (!s) return 0;
    let [l, o, c, m, d, h] = s.slice(1);
    return (
      parseFloat(l || 0) * 31536e3 +
      parseFloat(o || 0) * 2592e3 +
      parseFloat(c || 0) * 86400 +
      parseFloat(m || 0) * 3600 +
      parseFloat(d || 0) * 60 +
      parseFloat(h || 0)
    );
  },
  Bu = (e) => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"), Date.parse(e)),
  Vt = {
    mediaPresentationDuration(e) {
      return De(e);
    },
    availabilityStartTime(e) {
      return Bu(e) / 1e3;
    },
    minimumUpdatePeriod(e) {
      return De(e);
    },
    suggestedPresentationDelay(e) {
      return De(e);
    },
    type(e) {
      return e;
    },
    timeShiftBufferDepth(e) {
      return De(e);
    },
    start(e) {
      return De(e);
    },
    width(e) {
      return parseInt(e, 10);
    },
    height(e) {
      return parseInt(e, 10);
    },
    bandwidth(e) {
      return parseInt(e, 10);
    },
    frameRate(e) {
      return Nu(e);
    },
    startNumber(e) {
      return parseInt(e, 10);
    },
    timescale(e) {
      return parseInt(e, 10);
    },
    presentationTimeOffset(e) {
      return parseInt(e, 10);
    },
    duration(e) {
      let r = parseInt(e, 10);
      return isNaN(r) ? De(e) : r;
    },
    d(e) {
      return parseInt(e, 10);
    },
    t(e) {
      return parseInt(e, 10);
    },
    r(e) {
      return parseInt(e, 10);
    },
    presentationTime(e) {
      return parseInt(e, 10);
    },
    DEFAULT(e) {
      return e;
    },
  },
  R = (e) =>
    e && e.attributes
      ? Ht(e.attributes).reduce((r, t) => {
          let n = Vt[t.name] || Vt.DEFAULT;
          return ((r[t.name] = n(t.value)), r);
        }, {})
      : {},
  Iu = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
    "urn:mpeg:dash:mp4protection:2011": "mp4protection",
  },
  rr = (e, r) =>
    r.length
      ? ye(
          e.map(function (t) {
            return r.map(function (n) {
              let u = Ue(n),
                i = He(t.baseUrl, u),
                a = M(R(n), { baseUrl: i });
              return (
                i !== u &&
                  !a.serviceLocation &&
                  t.serviceLocation &&
                  (a.serviceLocation = t.serviceLocation),
                a
              );
            });
          }),
        )
      : e,
  xr = (e) => {
    let r = T(e, "SegmentTemplate")[0],
      t = T(e, "SegmentList")[0],
      n = t && T(t, "SegmentURL").map((m) => M({ tag: "SegmentURL" }, R(m))),
      u = T(e, "SegmentBase")[0],
      i = t || r,
      a = i && T(i, "SegmentTimeline")[0],
      s = t || u || r,
      l = s && T(s, "Initialization")[0],
      o = r && R(r);
    o && l
      ? (o.initialization = l && R(l))
      : o && o.initialization && (o.initialization = { sourceURL: o.initialization });
    let c = {
      template: o,
      segmentTimeline: a && T(a, "S").map((m) => R(m)),
      list: t && M(R(t), { segmentUrls: n, initialization: R(l) }),
      base: u && M(R(u), { initialization: R(l) }),
    };
    return (
      Object.keys(c).forEach((m) => {
        c[m] || delete c[m];
      }),
      c
    );
  },
  Ou = (e, r, t) => (n) => {
    let u = T(n, "BaseURL"),
      i = rr(r, u),
      a = M(e, R(n)),
      s = xr(n);
    return i.map((l) => ({ segmentInfo: M(t, s), attributes: M(a, l) }));
  },
  Ru = (e) =>
    e.reduce((r, t) => {
      let n = R(t);
      n.schemeIdUri && (n.schemeIdUri = n.schemeIdUri.toLowerCase());
      let u = Iu[n.schemeIdUri];
      if (u) {
        r[u] = { attributes: n };
        let i = T(t, "cenc:pssh")[0];
        if (i) {
          let a = Ue(i);
          r[u].pssh = a && ar(a);
        }
      }
      return r;
    }, {}),
  Fu = (e) => {
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((t) => {
        let n, u;
        return (
          (u = t),
          /^CC\d=/.test(t) ? ([n, u] = t.split("=")) : /^CC\d$/.test(t) && (n = t),
          { channel: n, language: u }
        );
      });
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((t) => {
        let n = { channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0 };
        if (/=/.test(t)) {
          let [u, i = ""] = t.split("=");
          ((n.channel = u),
            (n.language = t),
            i.split(",").forEach((a) => {
              let [s, l] = a.split(":");
              s === "lang"
                ? (n.language = l)
                : s === "er"
                  ? (n.easyReader = Number(l))
                  : s === "war"
                    ? (n.aspectRatio = Number(l))
                    : s === "3D" && (n["3D"] = Number(l));
            }));
        } else n.language = t;
        return (n.channel && (n.channel = "SERVICE" + n.channel), n);
      });
  },
  Mu = (e) =>
    ye(
      T(e.node, "EventStream").map((r) => {
        let t = R(r),
          n = t.schemeIdUri;
        return T(r, "Event").map((u) => {
          let i = R(u),
            a = i.presentationTime || 0,
            s = t.timescale || 1,
            l = i.duration || 0,
            o = a / s + e.attributes.start;
          return {
            schemeIdUri: n,
            value: t.value,
            id: i.id,
            start: o,
            end: o + l / s,
            messageData: Ue(u) || i.messageData,
            contentEncoding: t.contentEncoding,
            presentationTimeOffset: t.presentationTimeOffset || 0,
          };
        });
      }),
    ),
  Lu = (e, r, t) => (n) => {
    let u = R(n),
      i = rr(r, T(n, "BaseURL")),
      a = T(n, "Role")[0],
      s = { role: R(a) },
      l = M(e, u, s),
      o = T(n, "Accessibility")[0],
      c = Fu(R(o));
    c && (l = M(l, { captionServices: c }));
    let m = T(n, "Label")[0];
    if (m && m.childNodes.length) {
      let y = m.childNodes[0].nodeValue.trim();
      l = M(l, { label: y });
    }
    let d = Ru(T(n, "ContentProtection"));
    Object.keys(d).length && (l = M(l, { contentProtection: d }));
    let h = xr(n),
      g = T(n, "Representation"),
      D = M(t, h);
    return ye(g.map(Ou(l, i, D)));
  },
  Pu = (e, r) => (t, n) => {
    let u = rr(r, T(t.node, "BaseURL")),
      i = M(e, { periodStart: t.attributes.start });
    typeof t.attributes.duration == "number" && (i.periodDuration = t.attributes.duration);
    let a = T(t.node, "AdaptationSet"),
      s = xr(t.node);
    return ye(a.map(Lu(i, u, s)));
  },
  Uu = (e, r) => {
    if (
      (e.length > 1 &&
        r({
          type: "warn",
          message: "The MPD manifest should contain no more than one ContentSteering tag",
        }),
      !e.length)
    )
      return null;
    let t = M({ serverURL: Ue(e[0]) }, R(e[0]));
    return ((t.queryBeforeStart = t.queryBeforeStart === "true"), t);
  },
  ku = ({ attributes: e, priorPeriodAttributes: r, mpdType: t }) =>
    typeof e.start == "number"
      ? e.start
      : r && typeof r.start == "number" && typeof r.duration == "number"
        ? r.start + r.duration
        : !r && t === "static"
          ? 0
          : null,
  qu = (e, r = {}) => {
    let {
        manifestUri: t = "",
        NOW: n = Date.now(),
        clientOffset: u = 0,
        eventHandler: i = function () {},
      } = r,
      a = T(e, "Period");
    if (!a.length) throw new Error(Le.INVALID_NUMBER_OF_PERIOD);
    let s = T(e, "Location"),
      l = R(e),
      o = rr([{ baseUrl: t }], T(e, "BaseURL")),
      c = T(e, "ContentSteering");
    ((l.type = l.type || "static"),
      (l.sourceDuration = l.mediaPresentationDuration || 0),
      (l.NOW = n),
      (l.clientOffset = u),
      s.length && (l.locations = s.map(Ue)));
    let m = [];
    return (
      a.forEach((d, h) => {
        let g = R(d),
          D = m[h - 1];
        ((g.start = ku({
          attributes: g,
          priorPeriodAttributes: D ? D.attributes : null,
          mpdType: l.type,
        })),
          m.push({ node: d, attributes: g }));
      }),
      {
        locations: l.locations,
        contentSteeringInfo: Uu(c, i),
        representationInfo: ye(m.map(Pu(l, o))),
        eventStream: ye(m.map(Mu)),
      }
    );
  },
  Vu = (e) => {
    if (e === "") throw new Error(Le.DASH_EMPTY_MANIFEST);
    let r = new zt.DOMParser(),
      t,
      n;
    try {
      ((t = r.parseFromString(e, "application/xml")),
        (n = t && t.documentElement.tagName === "MPD" ? t.documentElement : null));
    } catch {}
    if (!n || (n && n.getElementsByTagName("parsererror").length > 0))
      throw new Error(Le.DASH_INVALID_XML);
    return n;
  };
var Yt = (e, r = {}) => {
  let t = qu(Vu(e), r),
    n = Cu(t.representationInfo);
  return yu({
    dashPlaylists: n,
    locations: t.locations,
    contentSteering: t.contentSteeringInfo,
    sidxMapping: r.sidxMapping,
    previousManifest: r.previousManifest,
    eventStream: t.eventStream,
  });
};
var zu = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);
function Xt(e) {
  return Object.keys(e).some((r) => zu.has(r));
}
function Gu(e) {
  for (let r in e) {
    let t = e[r];
    for (let n in t) {
      let u = t[n];
      if ("playlists" in u) return L(u.playlists);
    }
  }
  return C;
}
function Qt(e) {
  try {
    return Hu(e);
  } catch (r) {
    return z(`Error parsing MPD: ${r}`);
  }
}
function Hu(e) {
  let r = Yt(e),
    t = r.duration || "unknown",
    n = Wu(r),
    u = [],
    i = r.playlists;
  if (i.length == 0) {
    let s = Gu(r.mediaGroups.AUDIO);
    s.isSome() && (i = s.value);
  }
  let a = 0;
  for (let s of i) {
    if (!s.attributes.CODECS) continue;
    let l = Fr(s.attributes.CODECS);
    if (l.isNone() && ((l = Mr(s.attributes.CODECS)), l.isNone())) continue;
    let o = C;
    s.attributes.RESOLUTION &&
      s.attributes.RESOLUTION.width &&
      s.attributes.RESOLUTION.height &&
      (o = L({ width: s.attributes.RESOLUTION.width, height: s.attributes.RESOLUTION.height }));
    let c;
    s.attributes.BANDWIDTH
      ? (c = { bitrate: L(s.attributes.BANDWIDTH), size: o })
      : (c = { bitrate: C, size: o });
    let m = { quality: c, demuxer: l.value, index: a };
    (u.push(m), a++);
  }
  return ((u = Pr(u)), Lr(u) ? $([u, t, n]) : z("No playlists"));
}
function Wu(e) {
  for (let r of e.playlists) if (r.contentProtection && Xt(r.contentProtection)) return !0;
  return !1;
}
async function $u() {
  let e;
  for (;;) {
    let r = window.location.href;
    if (r == e) {
      await new Promise((t) => setTimeout(t, 300));
      continue;
    }
    (ju(r), (e = r));
  }
}
$u();
function Jt(e) {
  try {
    return JSON.parse(e);
  } catch (r) {
    console.error(`Couldn't parse JSON: ${r}`);
  }
}
async function ju(e) {
  let r = await (
      await fetch(e, { credentials: "same-origin", headers: { Accept: "text/html" } })
    ).text(),
    t = [],
    n = Array.from(r.matchAll(/"dash_manifests":(\[.*?\])/g));
  for (let u of n) {
    if (!u[1]) continue;
    let i = Jt(u[1]);
    if (!(!i || !Array.isArray(i) || i.length == 0)) {
      t.push(i[0].manifest_xml);
      break;
    }
  }
  n = Array.from(
    r.matchAll(/"(?:video_dash_manifest|dash_manifest_xml_string)":\s*"((?:\\.|[^"\\])*)"/g),
  );
  for (let u of n) {
    if (!u[1]) continue;
    let i = Jt(`"${u[1]}"`);
    if (i) {
      t.push(i);
      break;
    }
  }
  for (let u of t) {
    let i = Qt(u);
    if (i.isErr()) continue;
    let [a, s] = i.value,
      o = {
        master_url: new URL(`data:text/plain;charset=UTF-8,${encodeURIComponent(u)}`),
        is_youtube: !1,
        prefered_entry: C,
        duration: s,
        initiator: Cr(window.location.href),
        hash: `media_hash_${Nr(u)}`,
        sent_headers: new Headers(),
        thumbnail_url: C,
        filename: C,
        title: C,
        type: "mpd_playlist",
        playlist: a,
        discovery_timestamp_ms: Date.now(),
        has_drm: !1,
        cache: "default",
      };
    Rr({ name: "on_media", data: { media: X(o) } });
  }
}
/*! Bundled license information:

mpd-parser/dist/mpd-parser.es.js:
  (*! @name mpd-parser @version 1.3.1 @license Apache-2.0 *)
*/
