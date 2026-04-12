var An = Object.create;
var zt = Object.defineProperty;
var Dn = Object.getOwnPropertyDescriptor;
var En = Object.getOwnPropertyNames;
var yn = Object.getPrototypeOf,
  bn = Object.prototype.hasOwnProperty;
var ie = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var vn = (e, t, r, n) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of En(t))
      !bn.call(e, i) &&
        i !== r &&
        zt(e, i, { get: () => t[i], enumerable: !(n = Dn(t, i)) || n.enumerable });
  return e;
};
var Se = (e, t, r) => (
  (r = e != null ? An(yn(e)) : {}),
  vn(t || !e || !e.__esModule ? zt(r, "default", { value: e, enumerable: !0 }) : r, e)
);
var et = ie((na, Wt) => {
  var Ce;
  typeof window < "u"
    ? (Ce = window)
    : typeof global < "u"
      ? (Ce = global)
      : typeof self < "u"
        ? (Ce = self)
        : (Ce = {});
  Wt.exports = Ce;
});
var Jt = ie((Tt, Qt) => {
  (function (e, t) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
    else if (typeof Tt < "u") t(Qt);
    else {
      var r = { exports: {} };
      (t(r), (e.browser = r.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Tt, function (e) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      e.exports = globalThis.browser;
    else {
      let t = "The message port closed before a response was received.",
        r = (n) => {
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
          class u extends WeakMap {
            constructor(A, v = void 0) {
              (super(v), (this.createItem = A));
            }
            get(A) {
              return (this.has(A) || this.set(A, this.createItem(A)), super.get(A));
            }
          }
          let a = (d) => d && typeof d == "object" && typeof d.then == "function",
            s =
              (d, A) =>
              (...v) => {
                n.runtime.lastError
                  ? d.reject(new Error(n.runtime.lastError.message))
                  : A.singleCallbackArg || (v.length <= 1 && A.singleCallbackArg !== !1)
                    ? d.resolve(v[0])
                    : d.resolve(v);
              },
            l = (d) => (d == 1 ? "argument" : "arguments"),
            o = (d, A) =>
              function (_, ...M) {
                if (M.length < A.minArgs)
                  throw new Error(
                    `Expected at least ${A.minArgs} ${l(A.minArgs)} for ${d}(), got ${M.length}`,
                  );
                if (M.length > A.maxArgs)
                  throw new Error(
                    `Expected at most ${A.maxArgs} ${l(A.maxArgs)} for ${d}(), got ${M.length}`,
                  );
                return new Promise((N, L) => {
                  if (A.fallbackToNoCallback)
                    try {
                      _[d](...M, s({ resolve: N, reject: L }, A));
                    } catch (T) {
                      (console.warn(
                        `${d} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        T,
                      ),
                        _[d](...M),
                        (A.fallbackToNoCallback = !1),
                        (A.noCallback = !0),
                        N());
                    }
                  else
                    A.noCallback ? (_[d](...M), N()) : _[d](...M, s({ resolve: N, reject: L }, A));
                });
              },
            m = (d, A, v) =>
              new Proxy(A, {
                apply(_, M, N) {
                  return v.call(M, d, ...N);
                },
              }),
            f = Function.call.bind(Object.prototype.hasOwnProperty),
            g = (d, A = {}, v = {}) => {
              let _ = Object.create(null),
                M = {
                  has(L, T) {
                    return T in d || T in _;
                  },
                  get(L, T, V) {
                    if (T in _) return _[T];
                    if (!(T in d)) return;
                    let B = d[T];
                    if (typeof B == "function")
                      if (typeof A[T] == "function") B = m(d, d[T], A[T]);
                      else if (f(v, T)) {
                        let j = o(T, v[T]);
                        B = m(d, d[T], j);
                      } else B = B.bind(d);
                    else if (typeof B == "object" && B !== null && (f(A, T) || f(v, T)))
                      B = g(B, A[T], v[T]);
                    else if (f(v, "*")) B = g(B, A[T], v["*"]);
                    else
                      return (
                        Object.defineProperty(_, T, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return d[T];
                          },
                          set(j) {
                            d[T] = j;
                          },
                        }),
                        B
                      );
                    return ((_[T] = B), B);
                  },
                  set(L, T, V, B) {
                    return (T in _ ? (_[T] = V) : (d[T] = V), !0);
                  },
                  defineProperty(L, T, V) {
                    return Reflect.defineProperty(_, T, V);
                  },
                  deleteProperty(L, T) {
                    return Reflect.deleteProperty(_, T);
                  },
                },
                N = Object.create(d);
              return new Proxy(N, M);
            },
            E = (d) => ({
              addListener(A, v, ..._) {
                A.addListener(d.get(v), ..._);
              },
              hasListener(A, v) {
                return A.hasListener(d.get(v));
              },
              removeListener(A, v) {
                A.removeListener(d.get(v));
              },
            }),
            D = new u((d) =>
              typeof d != "function"
                ? d
                : function (v) {
                    let _ = g(v, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    d(_);
                  },
            ),
            c = new u((d) =>
              typeof d != "function"
                ? d
                : function (v, _, M) {
                    let N = !1,
                      L,
                      T = new Promise((ne) => {
                        L = function (w) {
                          ((N = !0), ne(w));
                        };
                      }),
                      V;
                    try {
                      V = d(v, _, L);
                    } catch (ne) {
                      V = Promise.reject(ne);
                    }
                    let B = V !== !0 && a(V);
                    if (V !== !0 && !B && !N) return !1;
                    let j = (ne) => {
                      ne.then(
                        (w) => {
                          M(w);
                        },
                        (w) => {
                          let k;
                          (w && (w instanceof Error || typeof w.message == "string")
                            ? (k = w.message)
                            : (k = "An unexpected error occurred"),
                            M({ __mozWebExtensionPolyfillReject__: !0, message: k }));
                        },
                      ).catch((w) => {
                        console.error("Failed to send onMessage rejected reply", w);
                      });
                    };
                    return (j(B ? V : T), !0);
                  },
            ),
            y = ({ reject: d, resolve: A }, v) => {
              n.runtime.lastError
                ? n.runtime.lastError.message === t
                  ? A()
                  : d(new Error(n.runtime.lastError.message))
                : v && v.__mozWebExtensionPolyfillReject__
                  ? d(new Error(v.message))
                  : A(v);
            },
            b = (d, A, v, ..._) => {
              if (_.length < A.minArgs)
                throw new Error(
                  `Expected at least ${A.minArgs} ${l(A.minArgs)} for ${d}(), got ${_.length}`,
                );
              if (_.length > A.maxArgs)
                throw new Error(
                  `Expected at most ${A.maxArgs} ${l(A.maxArgs)} for ${d}(), got ${_.length}`,
                );
              return new Promise((M, N) => {
                let L = y.bind(null, { resolve: M, reject: N });
                (_.push(L), v.sendMessage(..._));
              });
            },
            h = {
              devtools: { network: { onRequestFinished: E(D) } },
              runtime: {
                onMessage: E(c),
                onMessageExternal: E(c),
                sendMessage: b.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: b.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            p = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (i.privacy = { network: { "*": p }, services: { "*": p }, websites: { "*": p } }),
            g(n, h, i)
          );
        };
      e.exports = r(chrome);
    }
  });
});
var Re = ie((pe) => {
  "use strict";
  function $n(e, t, r) {
    if ((r === void 0 && (r = Array.prototype), e && typeof r.find == "function"))
      return r.find.call(e, t);
    for (var n = 0; n < e.length; n++)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var i = e[n];
        if (t.call(void 0, i, n, e)) return i;
      }
  }
  function St(e, t) {
    return (t === void 0 && (t = Object), t && typeof t.freeze == "function" ? t.freeze(e) : e);
  }
  function Wn(e, t) {
    if (e === null || typeof e != "object") throw new TypeError("target is not an object");
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
  }
  var nr = St({
      HTML: "text/html",
      isHTML: function (e) {
        return e === nr.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml",
    }),
    ir = St({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (e) {
        return e === ir.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
    });
  pe.assign = Wn;
  pe.find = $n;
  pe.freeze = St;
  pe.MIME_TYPE = nr;
  pe.NAMESPACE = ir;
});
var Pt = ie((se) => {
  var fr = Re(),
    Q = fr.find,
    Oe = fr.NAMESPACE;
  function Yn(e) {
    return e !== "";
  }
  function jn(e) {
    return e ? e.split(/[\t\n\f\r ]+/).filter(Yn) : [];
  }
  function Kn(e, t) {
    return (e.hasOwnProperty(t) || (e[t] = !0), e);
  }
  function ur(e) {
    if (!e) return [];
    var t = jn(e);
    return Object.keys(t.reduce(Kn, {}));
  }
  function Qn(e) {
    return function (t) {
      return e && e.indexOf(t) !== -1;
    };
  }
  function Be(e, t) {
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  }
  function $(e, t) {
    var r = e.prototype;
    if (!(r instanceof t)) {
      let i = function () {};
      var n = i;
      ((i.prototype = t.prototype), (i = new i()), Be(r, i), (e.prototype = r = i));
    }
    r.constructor != e &&
      (typeof e != "function" && console.error("unknown Class:" + e), (r.constructor = e));
  }
  var W = {},
    Y = (W.ELEMENT_NODE = 1),
    ge = (W.ATTRIBUTE_NODE = 2),
    nt = (W.TEXT_NODE = 3),
    pr = (W.CDATA_SECTION_NODE = 4),
    dr = (W.ENTITY_REFERENCE_NODE = 5),
    Jn = (W.ENTITY_NODE = 6),
    gr = (W.PROCESSING_INSTRUCTION_NODE = 7),
    hr = (W.COMMENT_NODE = 8),
    Ar = (W.DOCUMENT_NODE = 9),
    Dr = (W.DOCUMENT_TYPE_NODE = 10),
    te = (W.DOCUMENT_FRAGMENT_NODE = 11),
    Zn = (W.NOTATION_NODE = 12),
    q = {},
    P = {},
    La = (q.INDEX_SIZE_ERR = ((P[1] = "Index size error"), 1)),
    ka = (q.DOMSTRING_SIZE_ERR = ((P[2] = "DOMString size error"), 2)),
    H = (q.HIERARCHY_REQUEST_ERR = ((P[3] = "Hierarchy request error"), 3)),
    qa = (q.WRONG_DOCUMENT_ERR = ((P[4] = "Wrong document"), 4)),
    Va = (q.INVALID_CHARACTER_ERR = ((P[5] = "Invalid character"), 5)),
    Ga = (q.NO_DATA_ALLOWED_ERR = ((P[6] = "No data allowed"), 6)),
    Xa = (q.NO_MODIFICATION_ALLOWED_ERR = ((P[7] = "No modification allowed"), 7)),
    Er = (q.NOT_FOUND_ERR = ((P[8] = "Not found"), 8)),
    za = (q.NOT_SUPPORTED_ERR = ((P[9] = "Not supported"), 9)),
    ar = (q.INUSE_ATTRIBUTE_ERR = ((P[10] = "Attribute in use"), 10)),
    Ha = (q.INVALID_STATE_ERR = ((P[11] = "Invalid state"), 11)),
    $a = (q.SYNTAX_ERR = ((P[12] = "Syntax error"), 12)),
    Wa = (q.INVALID_MODIFICATION_ERR = ((P[13] = "Invalid modification"), 13)),
    Ya = (q.NAMESPACE_ERR = ((P[14] = "Invalid namespace"), 14)),
    ja = (q.INVALID_ACCESS_ERR = ((P[15] = "Invalid access"), 15));
  function O(e, t) {
    if (t instanceof Error) var r = t;
    else
      ((r = this),
        Error.call(this, P[e]),
        (this.message = P[e]),
        Error.captureStackTrace && Error.captureStackTrace(this, O));
    return ((r.code = e), t && (this.message = this.message + ": " + t), r);
  }
  O.prototype = Error.prototype;
  Be(q, O);
  function ee() {}
  ee.prototype = {
    length: 0,
    item: function (e) {
      return e >= 0 && e < this.length ? this[e] : null;
    },
    toString: function (e, t) {
      for (var r = [], n = 0; n < this.length; n++) de(this[n], r, e, t);
      return r.join("");
    },
    filter: function (e) {
      return Array.prototype.filter.call(this, e);
    },
    indexOf: function (e) {
      return Array.prototype.indexOf.call(this, e);
    },
  };
  function he(e, t) {
    ((this._node = e), (this._refresh = t), Ct(this));
  }
  function Ct(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc !== t) {
      var r = e._refresh(e._node);
      if ((Rr(e, "length", r.length), !e.$$length || r.length < e.$$length))
        for (var n = r.length; n in e; n++)
          Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
      (Be(r, e), (e._inc = t));
    }
  }
  he.prototype.item = function (e) {
    return (Ct(this), this[e] || null);
  };
  $(he, ee);
  function it() {}
  function yr(e, t) {
    for (var r = e.length; r--; ) if (e[r] === t) return r;
  }
  function sr(e, t, r, n) {
    if ((n ? (t[yr(t, n)] = r) : (t[t.length++] = r), e)) {
      r.ownerElement = e;
      var i = e.ownerDocument;
      i && (n && Tr(i, e, n), ei(i, e, r));
    }
  }
  function or(e, t, r) {
    var n = yr(t, r);
    if (n >= 0) {
      for (var i = t.length - 1; n < i; ) t[n] = t[++n];
      if (((t.length = i), e)) {
        var u = e.ownerDocument;
        u && (Tr(u, e, r), (r.ownerElement = null));
      }
    } else throw new O(Er, new Error(e.tagName + "@" + r));
  }
  it.prototype = {
    length: 0,
    item: ee.prototype.item,
    getNamedItem: function (e) {
      for (var t = this.length; t--; ) {
        var r = this[t];
        if (r.nodeName == e) return r;
      }
    },
    setNamedItem: function (e) {
      var t = e.ownerElement;
      if (t && t != this._ownerElement) throw new O(ar);
      var r = this.getNamedItem(e.nodeName);
      return (sr(this._ownerElement, this, e, r), r);
    },
    setNamedItemNS: function (e) {
      var t = e.ownerElement,
        r;
      if (t && t != this._ownerElement) throw new O(ar);
      return (
        (r = this.getNamedItemNS(e.namespaceURI, e.localName)),
        sr(this._ownerElement, this, e, r),
        r
      );
    },
    removeNamedItem: function (e) {
      var t = this.getNamedItem(e);
      return (or(this._ownerElement, this, t), t);
    },
    removeNamedItemNS: function (e, t) {
      var r = this.getNamedItemNS(e, t);
      return (or(this._ownerElement, this, r), r);
    },
    getNamedItemNS: function (e, t) {
      for (var r = this.length; r--; ) {
        var n = this[r];
        if (n.localName == t && n.namespaceURI == e) return n;
      }
      return null;
    },
  };
  function br() {}
  br.prototype = {
    hasFeature: function (e, t) {
      return !0;
    },
    createDocument: function (e, t, r) {
      var n = new Fe();
      if (
        ((n.implementation = this),
        (n.childNodes = new ee()),
        (n.doctype = r || null),
        r && n.appendChild(r),
        t)
      ) {
        var i = n.createElementNS(e, t);
        n.appendChild(i);
      }
      return n;
    },
    createDocumentType: function (e, t, r) {
      var n = new st();
      return ((n.name = e), (n.nodeName = e), (n.publicId = t || ""), (n.systemId = r || ""), n);
    },
  };
  function C() {}
  C.prototype = {
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
    insertBefore: function (e, t) {
      return ut(this, e, t);
    },
    replaceChild: function (e, t) {
      (ut(this, e, t, Sr), t && this.removeChild(t));
    },
    removeChild: function (e) {
      return _r(this, e);
    },
    appendChild: function (e) {
      return this.insertBefore(e, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (e) {
      return xt(this.ownerDocument || this, this, e);
    },
    normalize: function () {
      for (var e = this.firstChild; e; ) {
        var t = e.nextSibling;
        t && t.nodeType == nt && e.nodeType == nt
          ? (this.removeChild(t), e.appendData(t.data))
          : (e.normalize(), (e = t));
      }
    },
    isSupported: function (e, t) {
      return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (e) {
      for (var t = this; t; ) {
        var r = t._nsMap;
        if (r) {
          for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === e) return n;
        }
        t = t.nodeType == ge ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (e) {
      for (var t = this; t; ) {
        var r = t._nsMap;
        if (r && Object.prototype.hasOwnProperty.call(r, e)) return r[e];
        t = t.nodeType == ge ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (e) {
      var t = this.lookupPrefix(e);
      return t == null;
    },
  };
  function vr(e) {
    return (
      (e == "<" && "&lt;") ||
      (e == ">" && "&gt;") ||
      (e == "&" && "&amp;") ||
      (e == '"' && "&quot;") ||
      "&#" + e.charCodeAt() + ";"
    );
  }
  Be(W, C);
  Be(W, C.prototype);
  function Me(e, t) {
    if (t(e)) return !0;
    if ((e = e.firstChild))
      do if (Me(e, t)) return !0;
      while ((e = e.nextSibling));
  }
  function Fe() {
    this.ownerDocument = this;
  }
  function ei(e, t, r) {
    e && e._inc++;
    var n = r.namespaceURI;
    n === Oe.XMLNS && (t._nsMap[r.prefix ? r.localName : ""] = r.value);
  }
  function Tr(e, t, r, n) {
    e && e._inc++;
    var i = r.namespaceURI;
    i === Oe.XMLNS && delete t._nsMap[r.prefix ? r.localName : ""];
  }
  function Nt(e, t, r) {
    if (e && e._inc) {
      e._inc++;
      var n = t.childNodes;
      if (r) n[n.length++] = r;
      else {
        for (var i = t.firstChild, u = 0; i; ) ((n[u++] = i), (i = i.nextSibling));
        ((n.length = u), delete n[n.length]);
      }
    }
  }
  function _r(e, t) {
    var r = t.previousSibling,
      n = t.nextSibling;
    return (
      r ? (r.nextSibling = n) : (e.firstChild = n),
      n ? (n.previousSibling = r) : (e.lastChild = r),
      (t.parentNode = null),
      (t.previousSibling = null),
      (t.nextSibling = null),
      Nt(e.ownerDocument, e),
      t
    );
  }
  function ti(e) {
    return (
      e &&
      (e.nodeType === C.DOCUMENT_NODE ||
        e.nodeType === C.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === C.ELEMENT_NODE)
    );
  }
  function ri(e) {
    return (
      e &&
      (J(e) ||
        It(e) ||
        re(e) ||
        e.nodeType === C.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === C.COMMENT_NODE ||
        e.nodeType === C.PROCESSING_INSTRUCTION_NODE)
    );
  }
  function re(e) {
    return e && e.nodeType === C.DOCUMENT_TYPE_NODE;
  }
  function J(e) {
    return e && e.nodeType === C.ELEMENT_NODE;
  }
  function It(e) {
    return e && e.nodeType === C.TEXT_NODE;
  }
  function lr(e, t) {
    var r = e.childNodes || [];
    if (Q(r, J) || re(t)) return !1;
    var n = Q(r, re);
    return !(t && n && r.indexOf(n) > r.indexOf(t));
  }
  function cr(e, t) {
    var r = e.childNodes || [];
    function n(u) {
      return J(u) && u !== t;
    }
    if (Q(r, n)) return !1;
    var i = Q(r, re);
    return !(t && i && r.indexOf(i) > r.indexOf(t));
  }
  function ni(e, t, r) {
    if (!ti(e)) throw new O(H, "Unexpected parent node type " + e.nodeType);
    if (r && r.parentNode !== e) throw new O(Er, "child not in parent");
    if (!ri(t) || (re(t) && e.nodeType !== C.DOCUMENT_NODE))
      throw new O(H, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType);
  }
  function ii(e, t, r) {
    var n = e.childNodes || [],
      i = t.childNodes || [];
    if (t.nodeType === C.DOCUMENT_FRAGMENT_NODE) {
      var u = i.filter(J);
      if (u.length > 1 || Q(i, It)) throw new O(H, "More than one element or text in fragment");
      if (u.length === 1 && !lr(e, r))
        throw new O(H, "Element in fragment can not be inserted before doctype");
    }
    if (J(t) && !lr(e, r)) throw new O(H, "Only one element can be added and only after doctype");
    if (re(t)) {
      if (Q(n, re)) throw new O(H, "Only one doctype is allowed");
      var a = Q(n, J);
      if (r && n.indexOf(a) < n.indexOf(r))
        throw new O(H, "Doctype can only be inserted before an element");
      if (!r && a) throw new O(H, "Doctype can not be appended since element is present");
    }
  }
  function Sr(e, t, r) {
    var n = e.childNodes || [],
      i = t.childNodes || [];
    if (t.nodeType === C.DOCUMENT_FRAGMENT_NODE) {
      var u = i.filter(J);
      if (u.length > 1 || Q(i, It)) throw new O(H, "More than one element or text in fragment");
      if (u.length === 1 && !cr(e, r))
        throw new O(H, "Element in fragment can not be inserted before doctype");
    }
    if (J(t) && !cr(e, r)) throw new O(H, "Only one element can be added and only after doctype");
    if (re(t)) {
      let l = function (o) {
        return re(o) && o !== r;
      };
      var s = l;
      if (Q(n, l)) throw new O(H, "Only one doctype is allowed");
      var a = Q(n, J);
      if (r && n.indexOf(a) < n.indexOf(r))
        throw new O(H, "Doctype can only be inserted before an element");
    }
  }
  function ut(e, t, r, n) {
    (ni(e, t, r), e.nodeType === C.DOCUMENT_NODE && (n || ii)(e, t, r));
    var i = t.parentNode;
    if ((i && i.removeChild(t), t.nodeType === te)) {
      var u = t.firstChild;
      if (u == null) return t;
      var a = t.lastChild;
    } else u = a = t;
    var s = r ? r.previousSibling : e.lastChild;
    ((u.previousSibling = s),
      (a.nextSibling = r),
      s ? (s.nextSibling = u) : (e.firstChild = u),
      r == null ? (e.lastChild = a) : (r.previousSibling = a));
    do u.parentNode = e;
    while (u !== a && (u = u.nextSibling));
    return (
      Nt(e.ownerDocument || e, e),
      t.nodeType == te && (t.firstChild = t.lastChild = null),
      t
    );
  }
  function ui(e, t) {
    return (
      t.parentNode && t.parentNode.removeChild(t),
      (t.parentNode = e),
      (t.previousSibling = e.lastChild),
      (t.nextSibling = null),
      t.previousSibling ? (t.previousSibling.nextSibling = t) : (e.firstChild = t),
      (e.lastChild = t),
      Nt(e.ownerDocument, e, t),
      t
    );
  }
  Fe.prototype = {
    nodeName: "#document",
    nodeType: Ar,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (e, t) {
      if (e.nodeType == te) {
        for (var r = e.firstChild; r; ) {
          var n = r.nextSibling;
          (this.insertBefore(r, t), (r = n));
        }
        return e;
      }
      return (
        ut(this, e, t),
        (e.ownerDocument = this),
        this.documentElement === null && e.nodeType === Y && (this.documentElement = e),
        e
      );
    },
    removeChild: function (e) {
      return (this.documentElement == e && (this.documentElement = null), _r(this, e));
    },
    replaceChild: function (e, t) {
      (ut(this, e, t, Sr),
        (e.ownerDocument = this),
        t && this.removeChild(t),
        J(e) && (this.documentElement = e));
    },
    importNode: function (e, t) {
      return Ir(this, e, t);
    },
    getElementById: function (e) {
      var t = null;
      return (
        Me(this.documentElement, function (r) {
          if (r.nodeType == Y && r.getAttribute("id") == e) return ((t = r), !0);
        }),
        t
      );
    },
    getElementsByClassName: function (e) {
      var t = ur(e);
      return new he(this, function (r) {
        var n = [];
        return (
          t.length > 0 &&
            Me(r.documentElement, function (i) {
              if (i !== r && i.nodeType === Y) {
                var u = i.getAttribute("class");
                if (u) {
                  var a = e === u;
                  if (!a) {
                    var s = ur(u);
                    a = t.every(Qn(s));
                  }
                  a && n.push(i);
                }
              }
            }),
          n
        );
      });
    },
    createElement: function (e) {
      var t = new ce();
      ((t.ownerDocument = this),
        (t.nodeName = e),
        (t.tagName = e),
        (t.localName = e),
        (t.childNodes = new ee()));
      var r = (t.attributes = new it());
      return ((r._ownerElement = t), t);
    },
    createDocumentFragment: function () {
      var e = new ot();
      return ((e.ownerDocument = this), (e.childNodes = new ee()), e);
    },
    createTextNode: function (e) {
      var t = new Rt();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createComment: function (e) {
      var t = new Ot();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createCDATASection: function (e) {
      var t = new Mt();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createProcessingInstruction: function (e, t) {
      var r = new Ft();
      return (
        (r.ownerDocument = this),
        (r.tagName = r.nodeName = r.target = e),
        (r.nodeValue = r.data = t),
        r
      );
    },
    createAttribute: function (e) {
      var t = new at();
      return (
        (t.ownerDocument = this),
        (t.name = e),
        (t.nodeName = e),
        (t.localName = e),
        (t.specified = !0),
        t
      );
    },
    createEntityReference: function (e) {
      var t = new Bt();
      return ((t.ownerDocument = this), (t.nodeName = e), t);
    },
    createElementNS: function (e, t) {
      var r = new ce(),
        n = t.split(":"),
        i = (r.attributes = new it());
      return (
        (r.childNodes = new ee()),
        (r.ownerDocument = this),
        (r.nodeName = t),
        (r.tagName = t),
        (r.namespaceURI = e),
        n.length == 2 ? ((r.prefix = n[0]), (r.localName = n[1])) : (r.localName = t),
        (i._ownerElement = r),
        r
      );
    },
    createAttributeNS: function (e, t) {
      var r = new at(),
        n = t.split(":");
      return (
        (r.ownerDocument = this),
        (r.nodeName = t),
        (r.name = t),
        (r.namespaceURI = e),
        (r.specified = !0),
        n.length == 2 ? ((r.prefix = n[0]), (r.localName = n[1])) : (r.localName = t),
        r
      );
    },
  };
  $(Fe, C);
  function ce() {
    this._nsMap = {};
  }
  ce.prototype = {
    nodeType: Y,
    hasAttribute: function (e) {
      return this.getAttributeNode(e) != null;
    },
    getAttribute: function (e) {
      var t = this.getAttributeNode(e);
      return (t && t.value) || "";
    },
    getAttributeNode: function (e) {
      return this.attributes.getNamedItem(e);
    },
    setAttribute: function (e, t) {
      var r = this.ownerDocument.createAttribute(e);
      ((r.value = r.nodeValue = "" + t), this.setAttributeNode(r));
    },
    removeAttribute: function (e) {
      var t = this.getAttributeNode(e);
      t && this.removeAttributeNode(t);
    },
    appendChild: function (e) {
      return e.nodeType === te ? this.insertBefore(e, null) : ui(this, e);
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
    removeAttributeNS: function (e, t) {
      var r = this.getAttributeNodeNS(e, t);
      r && this.removeAttributeNode(r);
    },
    hasAttributeNS: function (e, t) {
      return this.getAttributeNodeNS(e, t) != null;
    },
    getAttributeNS: function (e, t) {
      var r = this.getAttributeNodeNS(e, t);
      return (r && r.value) || "";
    },
    setAttributeNS: function (e, t, r) {
      var n = this.ownerDocument.createAttributeNS(e, t);
      ((n.value = n.nodeValue = "" + r), this.setAttributeNode(n));
    },
    getAttributeNodeNS: function (e, t) {
      return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function (e) {
      return new he(this, function (t) {
        var r = [];
        return (
          Me(t, function (n) {
            n !== t && n.nodeType == Y && (e === "*" || n.tagName == e) && r.push(n);
          }),
          r
        );
      });
    },
    getElementsByTagNameNS: function (e, t) {
      return new he(this, function (r) {
        var n = [];
        return (
          Me(r, function (i) {
            i !== r &&
              i.nodeType === Y &&
              (e === "*" || i.namespaceURI === e) &&
              (t === "*" || i.localName == t) &&
              n.push(i);
          }),
          n
        );
      });
    },
  };
  Fe.prototype.getElementsByTagName = ce.prototype.getElementsByTagName;
  Fe.prototype.getElementsByTagNameNS = ce.prototype.getElementsByTagNameNS;
  $(ce, C);
  function at() {}
  at.prototype.nodeType = ge;
  $(at, C);
  function Pe() {}
  Pe.prototype = {
    data: "",
    substringData: function (e, t) {
      return this.data.substring(e, e + t);
    },
    appendData: function (e) {
      ((e = this.data + e), (this.nodeValue = this.data = e), (this.length = e.length));
    },
    insertData: function (e, t) {
      this.replaceData(e, 0, t);
    },
    appendChild: function (e) {
      throw new Error(P[H]);
    },
    deleteData: function (e, t) {
      this.replaceData(e, t, "");
    },
    replaceData: function (e, t, r) {
      var n = this.data.substring(0, e),
        i = this.data.substring(e + t);
      ((r = n + r + i), (this.nodeValue = this.data = r), (this.length = r.length));
    },
  };
  $(Pe, C);
  function Rt() {}
  Rt.prototype = {
    nodeName: "#text",
    nodeType: nt,
    splitText: function (e) {
      var t = this.data,
        r = t.substring(e);
      ((t = t.substring(0, e)), (this.data = this.nodeValue = t), (this.length = t.length));
      var n = this.ownerDocument.createTextNode(r);
      return (this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n);
    },
  };
  $(Rt, Pe);
  function Ot() {}
  Ot.prototype = { nodeName: "#comment", nodeType: hr };
  $(Ot, Pe);
  function Mt() {}
  Mt.prototype = { nodeName: "#cdata-section", nodeType: pr };
  $(Mt, Pe);
  function st() {}
  st.prototype.nodeType = Dr;
  $(st, C);
  function wr() {}
  wr.prototype.nodeType = Zn;
  $(wr, C);
  function xr() {}
  xr.prototype.nodeType = Jn;
  $(xr, C);
  function Bt() {}
  Bt.prototype.nodeType = dr;
  $(Bt, C);
  function ot() {}
  ot.prototype.nodeName = "#document-fragment";
  ot.prototype.nodeType = te;
  $(ot, C);
  function Ft() {}
  Ft.prototype.nodeType = gr;
  $(Ft, C);
  function Cr() {}
  Cr.prototype.serializeToString = function (e, t, r) {
    return Nr.call(e, t, r);
  };
  C.prototype.toString = Nr;
  function Nr(e, t) {
    var r = [],
      n = (this.nodeType == 9 && this.documentElement) || this,
      i = n.prefix,
      u = n.namespaceURI;
    if (u && i == null) {
      var i = n.lookupPrefix(u);
      if (i == null) var a = [{ namespace: u, prefix: null }];
    }
    return (de(this, r, e, t, a), r.join(""));
  }
  function mr(e, t, r) {
    var n = e.prefix || "",
      i = e.namespaceURI;
    if (!i || (n === "xml" && i === Oe.XML) || i === Oe.XMLNS) return !1;
    for (var u = r.length; u--; ) {
      var a = r[u];
      if (a.prefix === n) return a.namespace !== i;
    }
    return !0;
  }
  function wt(e, t, r) {
    e.push(" ", t, '="', r.replace(/[<>&"\t\n\r]/g, vr), '"');
  }
  function de(e, t, r, n, i) {
    if ((i || (i = []), n))
      if (((e = n(e)), e)) {
        if (typeof e == "string") {
          t.push(e);
          return;
        }
      } else return;
    switch (e.nodeType) {
      case Y:
        var u = e.attributes,
          a = u.length,
          b = e.firstChild,
          s = e.tagName;
        r = Oe.isHTML(e.namespaceURI) || r;
        var l = s;
        if (!r && !e.prefix && e.namespaceURI) {
          for (var o, m = 0; m < u.length; m++)
            if (u.item(m).name === "xmlns") {
              o = u.item(m).value;
              break;
            }
          if (!o)
            for (var f = i.length - 1; f >= 0; f--) {
              var g = i[f];
              if (g.prefix === "" && g.namespace === e.namespaceURI) {
                o = g.namespace;
                break;
              }
            }
          if (o !== e.namespaceURI)
            for (var f = i.length - 1; f >= 0; f--) {
              var g = i[f];
              if (g.namespace === e.namespaceURI) {
                g.prefix && (l = g.prefix + ":" + s);
                break;
              }
            }
        }
        t.push("<", l);
        for (var E = 0; E < a; E++) {
          var D = u.item(E);
          D.prefix == "xmlns"
            ? i.push({ prefix: D.localName, namespace: D.value })
            : D.nodeName == "xmlns" && i.push({ prefix: "", namespace: D.value });
        }
        for (var E = 0; E < a; E++) {
          var D = u.item(E);
          if (mr(D, r, i)) {
            var c = D.prefix || "",
              y = D.namespaceURI;
            (wt(t, c ? "xmlns:" + c : "xmlns", y), i.push({ prefix: c, namespace: y }));
          }
          de(D, t, r, n, i);
        }
        if (s === l && mr(e, r, i)) {
          var c = e.prefix || "",
            y = e.namespaceURI;
          (wt(t, c ? "xmlns:" + c : "xmlns", y), i.push({ prefix: c, namespace: y }));
        }
        if (b || (r && !/^(?:meta|link|img|br|hr|input)$/i.test(s))) {
          if ((t.push(">"), r && /^script$/i.test(s)))
            for (; b; ) (b.data ? t.push(b.data) : de(b, t, r, n, i.slice()), (b = b.nextSibling));
          else for (; b; ) (de(b, t, r, n, i.slice()), (b = b.nextSibling));
          t.push("</", l, ">");
        } else t.push("/>");
        return;
      case Ar:
      case te:
        for (var b = e.firstChild; b; ) (de(b, t, r, n, i.slice()), (b = b.nextSibling));
        return;
      case ge:
        return wt(t, e.name, e.value);
      case nt:
        return t.push(e.data.replace(/[<&>]/g, vr));
      case pr:
        return t.push("<![CDATA[", e.data, "]]>");
      case hr:
        return t.push("<!--", e.data, "-->");
      case Dr:
        var h = e.publicId,
          p = e.systemId;
        if ((t.push("<!DOCTYPE ", e.name), h))
          (t.push(" PUBLIC ", h), p && p != "." && t.push(" ", p), t.push(">"));
        else if (p && p != ".") t.push(" SYSTEM ", p, ">");
        else {
          var d = e.internalSubset;
          (d && t.push(" [", d, "]"), t.push(">"));
        }
        return;
      case gr:
        return t.push("<?", e.target, " ", e.data, "?>");
      case dr:
        return t.push("&", e.nodeName, ";");
      default:
        t.push("??", e.nodeName);
    }
  }
  function Ir(e, t, r) {
    var n;
    switch (t.nodeType) {
      case Y:
        ((n = t.cloneNode(!1)), (n.ownerDocument = e));
      case te:
        break;
      case ge:
        r = !0;
        break;
    }
    if ((n || (n = t.cloneNode(!1)), (n.ownerDocument = e), (n.parentNode = null), r))
      for (var i = t.firstChild; i; ) (n.appendChild(Ir(e, i, r)), (i = i.nextSibling));
    return n;
  }
  function xt(e, t, r) {
    var n = new t.constructor();
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var u = t[i];
        typeof u != "object" && u != n[i] && (n[i] = u);
      }
    switch ((t.childNodes && (n.childNodes = new ee()), (n.ownerDocument = e), n.nodeType)) {
      case Y:
        var a = t.attributes,
          s = (n.attributes = new it()),
          l = a.length;
        s._ownerElement = n;
        for (var o = 0; o < l; o++) n.setAttributeNode(xt(e, a.item(o), !0));
        break;
      case ge:
        r = !0;
    }
    if (r) for (var m = t.firstChild; m; ) (n.appendChild(xt(e, m, r)), (m = m.nextSibling));
    return n;
  }
  function Rr(e, t, r) {
    e[t] = r;
  }
  try {
    if (Object.defineProperty) {
      let e = function (t) {
        switch (t.nodeType) {
          case Y:
          case te:
            var r = [];
            for (t = t.firstChild; t; )
              (t.nodeType !== 7 && t.nodeType !== 8 && r.push(e(t)), (t = t.nextSibling));
            return r.join("");
          default:
            return t.nodeValue;
        }
      };
      ((ai = e),
        Object.defineProperty(he.prototype, "length", {
          get: function () {
            return (Ct(this), this.$$length);
          },
        }),
        Object.defineProperty(C.prototype, "textContent", {
          get: function () {
            return e(this);
          },
          set: function (t) {
            switch (this.nodeType) {
              case Y:
              case te:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
                break;
              default:
                ((this.data = t), (this.value = t), (this.nodeValue = t));
            }
          },
        }),
        (Rr = function (t, r, n) {
          t["$$" + r] = n;
        }));
    }
  } catch {}
  var ai;
  se.DocumentType = st;
  se.DOMException = O;
  se.DOMImplementation = br;
  se.Element = ce;
  se.Node = C;
  se.NodeList = ee;
  se.XMLSerializer = Cr;
});
var Mr = ie((Ue) => {
  "use strict";
  var Or = Re().freeze;
  Ue.XML_ENTITIES = Or({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
  Ue.HTML_ENTITIES = Or({
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
  Ue.entityMap = Ue.HTML_ENTITIES;
});
var Vr = ie((Lt) => {
  var Ve = Re().NAMESPACE,
    Ut =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Br = new RegExp(
      "[\\-\\.0-9" + Ut.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]",
    ),
    Fr = new RegExp("^" + Ut.source + Br.source + "*(?::" + Ut.source + Br.source + "*)?$"),
    Le = 0,
    oe = 1,
    Ae = 2,
    ke = 3,
    De = 4,
    Ee = 5,
    qe = 6,
    lt = 7;
  function ye(e, t) {
    ((this.message = e),
      (this.locator = t),
      Error.captureStackTrace && Error.captureStackTrace(this, ye));
  }
  ye.prototype = new Error();
  ye.prototype.name = ye.name;
  function Lr() {}
  Lr.prototype = {
    parse: function (e, t, r) {
      var n = this.domBuilder;
      (n.startDocument(), kr(t, (t = {})), si(e, t, r, n, this.errorHandler), n.endDocument());
    },
  };
  function si(e, t, r, n, i) {
    function u(w) {
      if (w > 65535) {
        w -= 65536;
        var k = 55296 + (w >> 10),
          hn = 56320 + (w & 1023);
        return String.fromCharCode(k, hn);
      } else return String.fromCharCode(w);
    }
    function a(w) {
      var k = w.slice(1, -1);
      return Object.hasOwnProperty.call(r, k)
        ? r[k]
        : k.charAt(0) === "#"
          ? u(parseInt(k.substr(1).replace("x", "0x")))
          : (i.error("entity not found:" + w), w);
    }
    function s(w) {
      if (w > c) {
        var k = e.substring(c, w).replace(/&#?\w+;/g, a);
        (g && l(c), n.characters(k, 0, w - c), (c = w));
      }
    }
    function l(w, k) {
      for (; w >= m && (k = f.exec(e)); ) ((o = k.index), (m = o + k[0].length), g.lineNumber++);
      g.columnNumber = w - o + 1;
    }
    for (
      var o = 0,
        m = 0,
        f = /.*(?:\r\n?|\n)|.*$/g,
        g = n.locator,
        E = [{ currentNSMap: t }],
        D = {},
        c = 0;
      ;
    ) {
      try {
        var y = e.indexOf("<", c);
        if (y < 0) {
          if (!e.substr(c).match(/^\s*$/)) {
            var b = n.doc,
              h = b.createTextNode(e.substr(c));
            (b.appendChild(h), (n.currentElement = h));
          }
          return;
        }
        switch ((y > c && s(y), e.charAt(y + 1))) {
          case "/":
            var T = e.indexOf(">", y + 3),
              p = e.substring(y + 2, T).replace(/[ \t\n\r]+$/g, ""),
              d = E.pop();
            T < 0
              ? ((p = e.substring(y + 2).replace(/[\s<].*/, "")),
                i.error("end tag name: " + p + " is not complete:" + d.tagName),
                (T = y + 1 + p.length))
              : p.match(/\s</) &&
                ((p = p.replace(/[\s<].*/, "")),
                i.error("end tag name: " + p + " maybe not complete"),
                (T = y + 1 + p.length));
            var A = d.localNSMap,
              v = d.tagName == p,
              _ = v || (d.tagName && d.tagName.toLowerCase() == p.toLowerCase());
            if (_) {
              if ((n.endElement(d.uri, d.localName, p), A))
                for (var M in A)
                  Object.prototype.hasOwnProperty.call(A, M) && n.endPrefixMapping(M);
              v ||
                i.fatalError(
                  "end tag name: " + p + " is not match the current start tagName:" + d.tagName,
                );
            } else E.push(d);
            T++;
            break;
          case "?":
            (g && l(y), (T = fi(e, y, n)));
            break;
          case "!":
            (g && l(y), (T = mi(e, y, n, i)));
            break;
          default:
            g && l(y);
            var N = new qr(),
              L = E[E.length - 1].currentNSMap,
              T = oi(e, y, N, L, a, i),
              V = N.length;
            if (
              (!N.closed &&
                ci(e, T, N.tagName, D) &&
                ((N.closed = !0), r.nbsp || i.warning("unclosed xml attribute")),
              g && V)
            ) {
              for (var B = Pr(g, {}), j = 0; j < V; j++) {
                var ne = N[j];
                (l(ne.offset), (ne.locator = Pr(g, {})));
              }
              ((n.locator = B), Ur(N, n, L) && E.push(N), (n.locator = g));
            } else Ur(N, n, L) && E.push(N);
            Ve.isHTML(N.uri) && !N.closed ? (T = li(e, T, N.tagName, a, n)) : T++;
        }
      } catch (w) {
        if (w instanceof ye) throw w;
        (i.error("element parse error: " + w), (T = -1));
      }
      T > c ? (c = T) : s(Math.max(y, c) + 1);
    }
  }
  function Pr(e, t) {
    return ((t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber), t);
  }
  function oi(e, t, r, n, i, u) {
    function a(E, D, c) {
      (r.attributeNames.hasOwnProperty(E) && u.fatalError("Attribute " + E + " redefined"),
        r.addValue(E, D.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, i), c));
    }
    for (var s, l, o = ++t, m = Le; ; ) {
      var f = e.charAt(o);
      switch (f) {
        case "=":
          if (m === oe) ((s = e.slice(t, o)), (m = ke));
          else if (m === Ae) m = ke;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (m === ke || m === oe)
            if (
              (m === oe && (u.warning('attribute value must after "="'), (s = e.slice(t, o))),
              (t = o + 1),
              (o = e.indexOf(f, t)),
              o > 0)
            )
              ((l = e.slice(t, o)), a(s, l, t - 1), (m = Ee));
            else throw new Error("attribute value no end '" + f + "' match");
          else if (m == De)
            ((l = e.slice(t, o)),
              a(s, l, t),
              u.warning('attribute "' + s + '" missed start quot(' + f + ")!!"),
              (t = o + 1),
              (m = Ee));
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (m) {
            case Le:
              r.setTagName(e.slice(t, o));
            case Ee:
            case qe:
            case lt:
              ((m = lt), (r.closed = !0));
            case De:
            case oe:
              break;
            case Ae:
              r.closed = !0;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return (u.error("unexpected end of input"), m == Le && r.setTagName(e.slice(t, o)), o);
        case ">":
          switch (m) {
            case Le:
              r.setTagName(e.slice(t, o));
            case Ee:
            case qe:
            case lt:
              break;
            case De:
            case oe:
              ((l = e.slice(t, o)), l.slice(-1) === "/" && ((r.closed = !0), (l = l.slice(0, -1))));
            case Ae:
              (m === Ae && (l = s),
                m == De
                  ? (u.warning('attribute "' + l + '" missed quot(")!'), a(s, l, t))
                  : ((!Ve.isHTML(n[""]) || !l.match(/^(?:disabled|checked|selected)$/i)) &&
                      u.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'),
                    a(l, l, t)));
              break;
            case ke:
              throw new Error("attribute value missed!!");
          }
          return o;
        case "\x80":
          f = " ";
        default:
          if (f <= " ")
            switch (m) {
              case Le:
                (r.setTagName(e.slice(t, o)), (m = qe));
                break;
              case oe:
                ((s = e.slice(t, o)), (m = Ae));
                break;
              case De:
                var l = e.slice(t, o);
                (u.warning('attribute "' + l + '" missed quot(")!!'), a(s, l, t));
              case Ee:
                m = qe;
                break;
            }
          else
            switch (m) {
              case Ae:
                var g = r.tagName;
                ((!Ve.isHTML(n[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) &&
                  u.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'),
                  a(s, s, t),
                  (t = o),
                  (m = oe));
                break;
              case Ee:
                u.warning('attribute space is required"' + s + '"!!');
              case qe:
                ((m = oe), (t = o));
                break;
              case ke:
                ((m = De), (t = o));
                break;
              case lt:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      o++;
    }
  }
  function Ur(e, t, r) {
    for (var n = e.tagName, i = null, f = e.length; f--; ) {
      var u = e[f],
        a = u.qName,
        s = u.value,
        g = a.indexOf(":");
      if (g > 0)
        var l = (u.prefix = a.slice(0, g)),
          o = a.slice(g + 1),
          m = l === "xmlns" && o;
      else ((o = a), (l = null), (m = a === "xmlns" && ""));
      ((u.localName = o),
        m !== !1 &&
          (i == null && ((i = {}), kr(r, (r = {}))),
          (r[m] = i[m] = s),
          (u.uri = Ve.XMLNS),
          t.startPrefixMapping(m, s)));
    }
    for (var f = e.length; f--; ) {
      u = e[f];
      var l = u.prefix;
      l && (l === "xml" && (u.uri = Ve.XML), l !== "xmlns" && (u.uri = r[l || ""]));
    }
    var g = n.indexOf(":");
    g > 0
      ? ((l = e.prefix = n.slice(0, g)), (o = e.localName = n.slice(g + 1)))
      : ((l = null), (o = e.localName = n));
    var E = (e.uri = r[l || ""]);
    if ((t.startElement(E, o, n, e), e.closed)) {
      if ((t.endElement(E, o, n), i))
        for (l in i) Object.prototype.hasOwnProperty.call(i, l) && t.endPrefixMapping(l);
    } else return ((e.currentNSMap = r), (e.localNSMap = i), !0);
  }
  function li(e, t, r, n, i) {
    if (/^(?:script|textarea)$/i.test(r)) {
      var u = e.indexOf("</" + r + ">", t),
        a = e.substring(t + 1, u);
      if (/[&<]/.test(a))
        return /^script$/i.test(r)
          ? (i.characters(a, 0, a.length), u)
          : ((a = a.replace(/&#?\w+;/g, n)), i.characters(a, 0, a.length), u);
    }
    return t + 1;
  }
  function ci(e, t, r, n) {
    var i = n[r];
    return (
      i == null &&
        ((i = e.lastIndexOf("</" + r + ">")), i < t && (i = e.lastIndexOf("</" + r)), (n[r] = i)),
      i < t
    );
  }
  function kr(e, t) {
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  }
  function mi(e, t, r, n) {
    var i = e.charAt(t + 2);
    switch (i) {
      case "-":
        if (e.charAt(t + 3) === "-") {
          var u = e.indexOf("-->", t + 4);
          return u > t
            ? (r.comment(e, t + 4, u - t - 4), u + 3)
            : (n.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (e.substr(t + 3, 6) == "CDATA[") {
          var u = e.indexOf("]]>", t + 9);
          return (r.startCDATA(), r.characters(e, t + 9, u - t - 9), r.endCDATA(), u + 3);
        }
        var a = pi(e, t),
          s = a.length;
        if (s > 1 && /!doctype/i.test(a[0][0])) {
          var l = a[1][0],
            o = !1,
            m = !1;
          s > 3 &&
            (/^public$/i.test(a[2][0])
              ? ((o = a[3][0]), (m = s > 4 && a[4][0]))
              : /^system$/i.test(a[2][0]) && (m = a[3][0]));
          var f = a[s - 1];
          return (r.startDTD(l, o, m), r.endDTD(), f.index + f[0].length);
        }
    }
    return -1;
  }
  function fi(e, t, r) {
    var n = e.indexOf("?>", t);
    if (n) {
      var i = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      if (i) {
        var u = i[0].length;
        return (r.processingInstruction(i[1], i[2]), n + 2);
      } else return -1;
    }
    return -1;
  }
  function qr() {
    this.attributeNames = {};
  }
  qr.prototype = {
    setTagName: function (e) {
      if (!Fr.test(e)) throw new Error("invalid tagName:" + e);
      this.tagName = e;
    },
    addValue: function (e, t, r) {
      if (!Fr.test(e)) throw new Error("invalid attribute:" + e);
      ((this.attributeNames[e] = this.length),
        (this[this.length++] = { qName: e, value: t, offset: r }));
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
  function pi(e, t) {
    var r,
      n = [],
      i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i.lastIndex = t, i.exec(e); (r = i.exec(e)); ) if ((n.push(r), r[1])) return n;
  }
  Lt.XMLReader = Lr;
  Lt.ParseError = ye;
});
var Yr = ie((mt) => {
  var di = Re(),
    gi = Pt(),
    Gr = Mr(),
    Hr = Vr(),
    hi = gi.DOMImplementation,
    Xr = di.NAMESPACE,
    Ai = Hr.ParseError,
    Di = Hr.XMLReader;
  function $r(e) {
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
  function Wr(e) {
    this.options = e || { locator: {} };
  }
  Wr.prototype.parseFromString = function (e, t) {
    var r = this.options,
      n = new Di(),
      i = r.domBuilder || new Ge(),
      u = r.errorHandler,
      a = r.locator,
      s = r.xmlns || {},
      l = /\/x?html?$/.test(t),
      o = l ? Gr.HTML_ENTITIES : Gr.XML_ENTITIES;
    (a && i.setDocumentLocator(a),
      (n.errorHandler = Ei(u, i, a)),
      (n.domBuilder = r.domBuilder || i),
      l && (s[""] = Xr.HTML),
      (s.xml = s.xml || Xr.XML));
    var m = r.normalizeLineEndings || $r;
    return (
      e && typeof e == "string" ? n.parse(m(e), s, o) : n.errorHandler.error("invalid doc source"),
      i.doc
    );
  };
  function Ei(e, t, r) {
    if (!e) {
      if (t instanceof Ge) return t;
      e = t;
    }
    var n = {},
      i = e instanceof Function;
    r = r || {};
    function u(a) {
      var s = e[a];
      (!s &&
        i &&
        (s =
          e.length == 2
            ? function (l) {
                e(a, l);
              }
            : e),
        (n[a] =
          (s &&
            function (l) {
              s("[xmldom " + a + "]	" + l + kt(r));
            }) ||
          function () {}));
    }
    return (u("warning"), u("error"), u("fatalError"), n);
  }
  function Ge() {
    this.cdata = !1;
  }
  function be(e, t) {
    ((t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber));
  }
  Ge.prototype = {
    startDocument: function () {
      ((this.doc = new hi().createDocument(null, null, null)),
        this.locator && (this.doc.documentURI = this.locator.systemId));
    },
    startElement: function (e, t, r, n) {
      var i = this.doc,
        u = i.createElementNS(e, r || t),
        a = n.length;
      (ct(this, u), (this.currentElement = u), this.locator && be(this.locator, u));
      for (var s = 0; s < a; s++) {
        var e = n.getURI(s),
          l = n.getValue(s),
          r = n.getQName(s),
          o = i.createAttributeNS(e, r);
        (this.locator && be(n.getLocator(s), o),
          (o.value = o.nodeValue = l),
          u.setAttributeNode(o));
      }
    },
    endElement: function (e, t, r) {
      var n = this.currentElement,
        i = n.tagName;
      this.currentElement = n.parentNode;
    },
    startPrefixMapping: function (e, t) {},
    endPrefixMapping: function (e) {},
    processingInstruction: function (e, t) {
      var r = this.doc.createProcessingInstruction(e, t);
      (this.locator && be(this.locator, r), ct(this, r));
    },
    ignorableWhitespace: function (e, t, r) {},
    characters: function (e, t, r) {
      if (((e = zr.apply(this, arguments)), e)) {
        if (this.cdata) var n = this.doc.createCDATASection(e);
        else var n = this.doc.createTextNode(e);
        (this.currentElement
          ? this.currentElement.appendChild(n)
          : /^\s*$/.test(e) && this.doc.appendChild(n),
          this.locator && be(this.locator, n));
      }
    },
    skippedEntity: function (e) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function (e, t, r) {
      e = zr.apply(this, arguments);
      var n = this.doc.createComment(e);
      (this.locator && be(this.locator, n), ct(this, n));
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, t, r) {
      var n = this.doc.implementation;
      if (n && n.createDocumentType) {
        var i = n.createDocumentType(e, t, r);
        (this.locator && be(this.locator, i), ct(this, i), (this.doc.doctype = i));
      }
    },
    warning: function (e) {
      console.warn("[xmldom warning]	" + e, kt(this.locator));
    },
    error: function (e) {
      console.error("[xmldom error]	" + e, kt(this.locator));
    },
    fatalError: function (e) {
      throw new Ai(e, this.locator);
    },
  };
  function kt(e) {
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
  function zr(e, t, r) {
    return typeof e == "string"
      ? e.substr(t, r)
      : e.length >= t + r || t
        ? new java.lang.String(e, t, r) + ""
        : e;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
    /\w+/g,
    function (e) {
      Ge.prototype[e] = function () {
        return null;
      };
    },
  );
  function ct(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
  }
  mt.__DOMHandler = Ge;
  mt.normalizeLineEndings = $r;
  mt.DOMParser = Wr;
});
var Kr = ie((ft) => {
  var jr = Pt();
  ft.DOMImplementation = jr.DOMImplementation;
  ft.XMLSerializer = jr.XMLSerializer;
  ft.DOMParser = Yr().DOMParser;
});
function ue(e) {
  var t = String(e);
  if (t === "[object Object]")
    try {
      t = JSON.stringify(e);
    } catch {}
  return t;
}
var Tn = (function () {
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
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error("".concat(t));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, r) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return t();
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t();
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.toResult = function (t) {
        return R(t);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new we(S);
      }),
      e
    );
  })(),
  S = new Tn();
Object.freeze(S);
var _n = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (t) {
        return x(t(this.value));
      }),
      (e.prototype.mapOr = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.toResult = function (t) {
        return G(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new we(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(ue(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  x = _n,
  $e;
(function (e) {
  function t() {
    for (var i = [], u = 0; u < arguments.length; u++) i[u] = arguments[u];
    for (var a = [], s = 0, l = i; s < l.length; s++) {
      var o = l[s];
      if (o.isSome()) a.push(o.value);
      else return o;
    }
    return x(a);
  }
  e.all = t;
  function r() {
    for (var i = [], u = 0; u < arguments.length; u++) i[u] = arguments[u];
    for (var a = 0, s = i; a < s.length; a++) {
      var l = s[a];
      if (l.isSome()) return l;
    }
    return S;
  }
  e.any = r;
  function n(i) {
    return i instanceof x || i === S;
  }
  e.isOption = n;
})($e || ($e = {}));
var me = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, i = t.length, u; n < i; n++)
        (u || !(n in t)) && (u || (u = Array.prototype.slice.call(t, 0, n)), (u[n] = t[n]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  Sn = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.error = t;
      var r = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (r && r.length > 0 && r[0].includes("ErrImpl") && r.shift(),
        (this._stack = r.join(`
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
      (e.prototype.else = function (t) {
        return t;
      }),
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error(
          ""
            .concat(t, " - Error: ")
            .concat(
              ue(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (t) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              ue(this.error),
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
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.mapErr = function (t) {
        return new R(t(this.error));
      }),
      (e.prototype.mapOr = function (t, r) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return t(this.error);
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t(this.error);
      }),
      (e.prototype.toOption = function () {
        return S;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(ue(this.error), ")");
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
        return new xe(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var R = Sn,
  wn = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (t) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.expectErr = function (t) {
        throw new Error(t);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(ue(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (t) {
        return new G(t(this.value));
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.mapErr = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return x(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(ue(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new xe(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var G = wn,
  We;
(function (e) {
  function t(s) {
    for (var l = [], o = 1; o < arguments.length; o++) l[o - 1] = arguments[o];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : me([s], l, !0), f = [], g = 0, E = m;
      g < E.length;
      g++
    ) {
      var D = E[g];
      if (D.isOk()) f.push(D.value);
      else return D;
    }
    return new G(f);
  }
  e.all = t;
  function r(s) {
    for (var l = [], o = 1; o < arguments.length; o++) l[o - 1] = arguments[o];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : me([s], l, !0), f = [], g = 0, E = m;
      g < E.length;
      g++
    ) {
      var D = E[g];
      if (D.isOk()) return D;
      f.push(D.error);
    }
    return new R(f);
  }
  e.any = r;
  function n(s) {
    try {
      return new G(s());
    } catch (l) {
      return new R(l);
    }
  }
  e.wrap = n;
  function i(s) {
    try {
      return s()
        .then(function (l) {
          return new G(l);
        })
        .catch(function (l) {
          return new R(l);
        });
    } catch (l) {
      return Promise.resolve(new R(l));
    }
  }
  e.wrapAsync = i;
  function u(s) {
    return s.reduce(
      function (l, o) {
        var m = l[0],
          f = l[1];
        return o.isOk()
          ? [me(me([], m, !0), [o.value], !1), f]
          : [m, me(me([], f, !0), [o.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = u;
  function a(s) {
    return s instanceof R || s instanceof G;
  }
  e.isResult = a;
})(We || (We = {}));
var Ye = function (e, t, r, n) {
    function i(u) {
      return u instanceof r
        ? u
        : new r(function (a) {
            a(u);
          });
    }
    return new (r || (r = Promise))(function (u, a) {
      function s(m) {
        try {
          o(n.next(m));
        } catch (f) {
          a(f);
        }
      }
      function l(m) {
        try {
          o(n.throw(m));
        } catch (f) {
          a(f);
        }
      }
      function o(m) {
        m.done ? u(m.value) : i(m.value).then(s, l);
      }
      o((n = n.apply(e, t || [])).next());
    });
  },
  je = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      n,
      i,
      u,
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
      return function (m) {
        return l([o, m]);
      };
    }
    function l(o) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), o[0] && (r = 0)), r; )
        try {
          if (
            ((n = 1),
            i &&
              (u =
                o[0] & 2
                  ? i.return
                  : o[0]
                    ? i.throw || ((u = i.return) && u.call(i), 0)
                    : i.next) &&
              !(u = u.call(i, o[1])).done)
          )
            return u;
          switch (((i = 0), u && (o = [o[0] & 2, u.value]), o[0])) {
            case 0:
            case 1:
              u = o;
              break;
            case 4:
              return (r.label++, { value: o[1], done: !1 });
            case 5:
              (r.label++, (i = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((u = r.trys), !(u = u.length > 0 && u[u.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (o[0] === 3 && (!u || (o[1] > u[0] && o[1] < u[3]))) {
                r.label = o[1];
                break;
              }
              if (o[0] === 6 && r.label < u[1]) {
                ((r.label = u[1]), (u = o));
                break;
              }
              if (u && r.label < u[2]) {
                ((r.label = u[2]), r.ops.push(o));
                break;
              }
              (u[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          o = t.call(e, r);
        } catch (m) {
          ((o = [6, m]), (i = 0));
        } finally {
          n = u = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  xe = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return Ye(r, void 0, void 0, function () {
            var i;
            return je(this, function (u) {
              return n.isErr() ? [2, n] : ((i = t(n.value)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return Ye(r, void 0, void 0, function () {
            var i;
            return je(this, function (u) {
              switch (u.label) {
                case 0:
                  return n.isErr() ? [2, n] : ((i = G), [4, t(n.value)]);
                case 1:
                  return [2, i.apply(void 0, [u.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return Ye(r, void 0, void 0, function () {
            var i;
            return je(this, function (u) {
              switch (u.label) {
                case 0:
                  return n.isOk() ? [2, n] : ((i = R), [4, t(n.error)]);
                case 1:
                  return [2, i.apply(void 0, [u.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return Ye(r, void 0, void 0, function () {
            var i;
            return je(this, function (u) {
              return n.isOk() ? [2, n] : ((i = t(n.error)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new we(
          this.promise.then(function (t) {
            return t.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
var dt = function (e, t, r, n) {
    function i(u) {
      return u instanceof r
        ? u
        : new r(function (a) {
            a(u);
          });
    }
    return new (r || (r = Promise))(function (u, a) {
      function s(m) {
        try {
          o(n.next(m));
        } catch (f) {
          a(f);
        }
      }
      function l(m) {
        try {
          o(n.throw(m));
        } catch (f) {
          a(f);
        }
      }
      function o(m) {
        m.done ? u(m.value) : i(m.value).then(s, l);
      }
      o((n = n.apply(e, t || [])).next());
    });
  },
  gt = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      n,
      i,
      u,
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
      return function (m) {
        return l([o, m]);
      };
    }
    function l(o) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), o[0] && (r = 0)), r; )
        try {
          if (
            ((n = 1),
            i &&
              (u =
                o[0] & 2
                  ? i.return
                  : o[0]
                    ? i.throw || ((u = i.return) && u.call(i), 0)
                    : i.next) &&
              !(u = u.call(i, o[1])).done)
          )
            return u;
          switch (((i = 0), u && (o = [o[0] & 2, u.value]), o[0])) {
            case 0:
            case 1:
              u = o;
              break;
            case 4:
              return (r.label++, { value: o[1], done: !1 });
            case 5:
              (r.label++, (i = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((u = r.trys), !(u = u.length > 0 && u[u.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (o[0] === 3 && (!u || (o[1] > u[0] && o[1] < u[3]))) {
                r.label = o[1];
                break;
              }
              if (o[0] === 6 && r.label < u[1]) {
                ((r.label = u[1]), (u = o));
                break;
              }
              if (u && r.label < u[2]) {
                ((r.label = u[2]), r.ops.push(o));
                break;
              }
              (u[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          o = t.call(e, r);
        } catch (m) {
          ((o = [6, m]), (i = 0));
        } finally {
          n = u = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  we = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return dt(r, void 0, void 0, function () {
            var i;
            return gt(this, function (u) {
              return n.isNone() ? [2, n] : ((i = t(n.value)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return dt(r, void 0, void 0, function () {
            var i;
            return gt(this, function (u) {
              switch (u.label) {
                case 0:
                  return n.isNone() ? [2, n] : ((i = x), [4, t(n.value)]);
                case 1:
                  return [2, i.apply(void 0, [u.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var r = this;
        return this.thenInternal(function (n) {
          return dt(r, void 0, void 0, function () {
            var i;
            return gt(this, function (u) {
              return n.isSome() ? [2, n] : ((i = t()), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (t) {
        return new xe(
          this.promise.then(function (r) {
            return r.toResult(t);
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
function ht(e, t) {
  let r = new URLSearchParams();
  for (let [n, i] of e) r.set(n, i);
  for (let [n, i] of t) r.set(n, i);
  return r.toString();
}
function Z(e, t) {
  try {
    if (e) return x(new URL(e, t));
  } catch {}
  return S;
}
function K(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e)) return { __serde_tag: "array", __serde_val: e.map((t) => K(t)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let t = [];
    return (
      e.forEach((r, n) => {
        t.push([n, r]);
      }),
      { __serde_tag: "headers", __serde_val: t }
    );
  } else {
    if (e instanceof Set) return { __serde_tag: "set", __serde_val: [...e.values()].map(K) };
    if (e instanceof Map)
      return { __serde_tag: "map", __serde_val: [...e.entries()].map(([t, r]) => [K(t), K(r)]) };
    if (e instanceof RegExp) return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if ($e.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: K(e.value) }
        : { __serde_tag: "none" };
    if (We.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: K(e.value) }
        : { __serde_tag: "err", __serde_val: K(e.error) };
    if (typeof e == "object") {
      let t = {};
      for (let [r, n] of Object.entries(e)) t[r] = K(n);
      return { __serde_tag: "object", __serde_val: t };
    } else throw new Error("Unreachable");
  }
}
var xn = ["mp4", "webm", "mkv"],
  Cn = ["mp3", "m4a", "ogg"],
  Nn = [...xn, ...Cn];
var In = [
    { mime_reg: /(avc1|avc3).*/i, demuxer: "mp4", codec: "H264" },
    { mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i, demuxer: "mp4", codec: "H265" },
    { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
    { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
    { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
    { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
  ],
  Rn = [
    { mime_reg: /(aac|mp4a.40).*/i, demuxer: "m4a", codec: "AAC" },
    { mime_reg: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, demuxer: "mp3", codec: "MP3" },
    { mime_reg: /(opus|(mp4a\.ad.*))/i, demuxer: "ogg", codec: "Opus" },
    { mime_reg: /vorbis/i, demuxer: "ogg", codec: "Vorbis" },
  ];
function Ke(e) {
  for (let t of In) if (t.mime_reg.test(e)) return x(t.demuxer);
  return S;
}
function Ht(e) {
  for (let t of Rn) if (t.mime_reg.test(e)) return x(t.demuxer);
  return S;
}
function On(e, t) {
  let u = e.size.map((o) => o.height).unwrapOr(0),
    a = t.size.map((o) => o.height).unwrapOr(0),
    s = e.bitrate.unwrapOr(0),
    l = t.bitrate.unwrapOr(0);
  return u > a ? -1 : u < a ? 1 : s > l ? -1 : s < l ? 1 : 0;
}
function Qe(e) {
  return [...e.values()].sort((t, r) => On(t.quality, r.quality));
}
function Je(e) {
  return e.length > 0;
}
var Ze = (function () {
  function e() {
    this.listeners = {};
  }
  var t = e.prototype;
  return (
    (t.on = function (n, i) {
      (this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push(i));
    }),
    (t.off = function (n, i) {
      if (!this.listeners[n]) return !1;
      var u = this.listeners[n].indexOf(i);
      return (
        (this.listeners[n] = this.listeners[n].slice(0)),
        this.listeners[n].splice(u, 1),
        u > -1
      );
    }),
    (t.trigger = function (n) {
      var i = this.listeners[n];
      if (i)
        if (arguments.length === 2)
          for (var u = i.length, a = 0; a < u; ++a) i[a].call(this, arguments[1]);
        else
          for (var s = Array.prototype.slice.call(arguments, 1), l = i.length, o = 0; o < l; ++o)
            i[o].apply(this, s);
    }),
    (t.dispose = function () {
      this.listeners = {};
    }),
    (t.pipe = function (n) {
      this.on("data", function (i) {
        n.push(i);
      });
    }),
    e
  );
})();
function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    le.apply(null, arguments)
  );
}
var At = Se(et()),
  Bn = function (t) {
    return At.default.atob ? At.default.atob(t) : Buffer.from(t, "base64").toString("binary");
  };
function Ne(e) {
  for (var t = Bn(e), r = new Uint8Array(t.length), n = 0; n < t.length; n++)
    r[n] = t.charCodeAt(n);
  return r;
}
var yt = class extends Ze {
    constructor() {
      (super(), (this.buffer = ""));
    }
    push(t) {
      let r;
      for (
        this.buffer += t,
          r = this.buffer.indexOf(`
`);
        r > -1;
        r = this.buffer.indexOf(`
`)
      )
        (this.trigger("data", this.buffer.substring(0, r)),
          (this.buffer = this.buffer.substring(r + 1)));
    }
  },
  Fn = "	",
  Dt = function (e) {
    let t = /([0-9.]*)?@?([0-9.]*)?/.exec(e || ""),
      r = {};
    return (t[1] && (r.length = parseInt(t[1], 10)), t[2] && (r.offset = parseInt(t[2], 10)), r);
  },
  Pn = function () {
    let r = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + r + ")");
  },
  X = function (e) {
    let t = {};
    if (!e) return t;
    let r = e.split(Pn()),
      n = r.length,
      i;
    for (; n--; )
      r[n] !== "" &&
        ((i = /([^=]*)=(.*)/.exec(r[n]).slice(1)),
        (i[0] = i[0].replace(/^\s+|\s+$/g, "")),
        (i[1] = i[1].replace(/^\s+|\s+$/g, "")),
        (i[1] = i[1].replace(/^['"](.*)['"]$/g, "$1")),
        (t[i[0]] = i[1]));
    return t;
  },
  Yt = (e) => {
    let t = e.split("x"),
      r = {};
    return (t[0] && (r.width = parseInt(t[0], 10)), t[1] && (r.height = parseInt(t[1], 10)), r);
  },
  bt = class extends Ze {
    constructor() {
      (super(), (this.customParsers = []), (this.tagMappers = []));
    }
    push(t) {
      let r, n;
      if (((t = t.trim()), t.length === 0)) return;
      if (t[0] !== "#") {
        this.trigger("data", { type: "uri", uri: t });
        return;
      }
      this.tagMappers
        .reduce(
          (u, a) => {
            let s = a(t);
            return s === t ? u : u.concat([s]);
          },
          [t],
        )
        .forEach((u) => {
          for (let a = 0; a < this.customParsers.length; a++)
            if (this.customParsers[a].call(this, u)) return;
          if (u.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: u.slice(1) });
            return;
          }
          if (((u = u.replace("\r", "")), (r = /^#EXTM3U/.exec(u)), r)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((r = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "inf" }),
              r[1] && (n.duration = parseFloat(r[1])),
              r[2] && (n.title = r[2]),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "targetduration" }),
              r[1] && (n.duration = parseInt(r[1], 10)),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-VERSION:([0-9.]*)?/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "version" }),
              r[1] && (n.version = parseInt(r[1], 10)),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "media-sequence" }),
              r[1] && (n.number = parseInt(r[1], 10)),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "discontinuity-sequence" }),
              r[1] && (n.number = parseInt(r[1], 10)),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "playlist-type" }),
              r[1] && (n.playlistType = r[1]),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-BYTERANGE:(.*)?$/.exec(u)), r)) {
            ((n = le(Dt(r[1]), { type: "tag", tagType: "byterange" })), this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "allow-cache" }),
              r[1] && (n.allowed = !/NO/.test(r[1])),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-MAP:(.*)$/.exec(u)), r)) {
            if (((n = { type: "tag", tagType: "map" }), r[1])) {
              let a = X(r[1]);
              (a.URI && (n.uri = a.URI), a.BYTERANGE && (n.byterange = Dt(a.BYTERANGE)));
            }
            this.trigger("data", n);
            return;
          }
          if (((r = /^#EXT-X-STREAM-INF:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "stream-inf" }),
              r[1] &&
                ((n.attributes = X(r[1])),
                n.attributes.RESOLUTION && (n.attributes.RESOLUTION = Yt(n.attributes.RESOLUTION)),
                n.attributes.BANDWIDTH &&
                  (n.attributes.BANDWIDTH = parseInt(n.attributes.BANDWIDTH, 10)),
                n.attributes["FRAME-RATE"] &&
                  (n.attributes["FRAME-RATE"] = parseFloat(n.attributes["FRAME-RATE"])),
                n.attributes["PROGRAM-ID"] &&
                  (n.attributes["PROGRAM-ID"] = parseInt(n.attributes["PROGRAM-ID"], 10))),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-MEDIA:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "media" }),
              r[1] && (n.attributes = X(r[1])),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-ENDLIST/.exec(u)), r)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((r = /^#EXT-X-DISCONTINUITY/.exec(u)), r)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((r = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "program-date-time" }),
              r[1] && ((n.dateTimeString = r[1]), (n.dateTimeObject = new Date(r[1]))),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-KEY:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "key" }),
              r[1] &&
                ((n.attributes = X(r[1])),
                n.attributes.IV &&
                  (n.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                    (n.attributes.IV = n.attributes.IV.substring(2)),
                  (n.attributes.IV = n.attributes.IV.match(/.{8}/g)),
                  (n.attributes.IV[0] = parseInt(n.attributes.IV[0], 16)),
                  (n.attributes.IV[1] = parseInt(n.attributes.IV[1], 16)),
                  (n.attributes.IV[2] = parseInt(n.attributes.IV[2], 16)),
                  (n.attributes.IV[3] = parseInt(n.attributes.IV[3], 16)),
                  (n.attributes.IV = new Uint32Array(n.attributes.IV)))),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-START:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "start" }),
              r[1] &&
                ((n.attributes = X(r[1])),
                (n.attributes["TIME-OFFSET"] = parseFloat(n.attributes["TIME-OFFSET"])),
                (n.attributes.PRECISE = /YES/.test(n.attributes.PRECISE))),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "cue-out-cont" }),
              r[1] ? (n.data = r[1]) : (n.data = ""),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-CUE-OUT:(.*)?$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "cue-out" }),
              r[1] ? (n.data = r[1]) : (n.data = ""),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-CUE-IN:?(.*)?$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "cue-in" }),
              r[1] ? (n.data = r[1]) : (n.data = ""),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-SKIP:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "skip" }),
              (n.attributes = X(r[1])),
              n.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (n.attributes["SKIPPED-SEGMENTS"] = parseInt(n.attributes["SKIPPED-SEGMENTS"], 10)),
              n.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (n.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  n.attributes["RECENTLY-REMOVED-DATERANGES"].split(Fn)),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-PART:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "part" }),
              (n.attributes = X(r[1])),
              ["DURATION"].forEach(function (a) {
                n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseFloat(n.attributes[a]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (a) {
                n.attributes.hasOwnProperty(a) && (n.attributes[a] = /YES/.test(n.attributes[a]));
              }),
              n.attributes.hasOwnProperty("BYTERANGE") &&
                (n.attributes.byterange = Dt(n.attributes.BYTERANGE)),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "server-control" }),
              (n.attributes = X(r[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (a) {
                n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseFloat(n.attributes[a]));
              }),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (a) {
                n.attributes.hasOwnProperty(a) && (n.attributes[a] = /YES/.test(n.attributes[a]));
              }),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-PART-INF:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "part-inf" }),
              (n.attributes = X(r[1])),
              ["PART-TARGET"].forEach(function (a) {
                n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseFloat(n.attributes[a]));
              }),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "preload-hint" }),
              (n.attributes = X(r[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (a) {
                if (n.attributes.hasOwnProperty(a)) {
                  n.attributes[a] = parseInt(n.attributes[a], 10);
                  let s = a === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((n.attributes.byterange = n.attributes.byterange || {}),
                    (n.attributes.byterange[s] = n.attributes[a]),
                    delete n.attributes[a]);
                }
              }),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "rendition-report" }),
              (n.attributes = X(r[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (a) {
                n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseInt(n.attributes[a], 10));
              }),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-DATERANGE:(.*)$/.exec(u)), r && r[1])) {
            ((n = { type: "tag", tagType: "daterange" }),
              (n.attributes = X(r[1])),
              ["ID", "CLASS"].forEach(function (s) {
                n.attributes.hasOwnProperty(s) && (n.attributes[s] = String(n.attributes[s]));
              }),
              ["START-DATE", "END-DATE"].forEach(function (s) {
                n.attributes.hasOwnProperty(s) && (n.attributes[s] = new Date(n.attributes[s]));
              }),
              ["DURATION", "PLANNED-DURATION"].forEach(function (s) {
                n.attributes.hasOwnProperty(s) && (n.attributes[s] = parseFloat(n.attributes[s]));
              }),
              ["END-ON-NEXT"].forEach(function (s) {
                n.attributes.hasOwnProperty(s) && (n.attributes[s] = /YES/i.test(n.attributes[s]));
              }),
              ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (s) {
                n.attributes.hasOwnProperty(s) && (n.attributes[s] = n.attributes[s].toString(16));
              }));
            let a = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let s in n.attributes) {
              if (!a.test(s)) continue;
              let l = /[0-9A-Fa-f]{6}/g.test(n.attributes[s]),
                o = /^\d+(\.\d+)?$/.test(n.attributes[s]);
              n.attributes[s] = l
                ? n.attributes[s].toString(16)
                : o
                  ? parseFloat(n.attributes[s])
                  : String(n.attributes[s]);
            }
            this.trigger("data", n);
            return;
          }
          if (((r = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(u)), r)) {
            this.trigger("data", { type: "tag", tagType: "independent-segments" });
            return;
          }
          if (((r = /^#EXT-X-I-FRAMES-ONLY/.exec(u)), r)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((r = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "content-steering" }),
              (n.attributes = X(r[1])),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "i-frame-playlist" }),
              (n.attributes = X(r[1])),
              n.attributes.URI && (n.uri = n.attributes.URI),
              n.attributes.BANDWIDTH &&
                (n.attributes.BANDWIDTH = parseInt(n.attributes.BANDWIDTH, 10)),
              n.attributes.RESOLUTION && (n.attributes.RESOLUTION = Yt(n.attributes.RESOLUTION)),
              n.attributes["AVERAGE-BANDWIDTH"] &&
                (n.attributes["AVERAGE-BANDWIDTH"] = parseInt(
                  n.attributes["AVERAGE-BANDWIDTH"],
                  10,
                )),
              n.attributes["FRAME-RATE"] &&
                (n.attributes["FRAME-RATE"] = parseFloat(n.attributes["FRAME-RATE"])),
              this.trigger("data", n));
            return;
          }
          if (((r = /^#EXT-X-DEFINE:(.*)$/.exec(u)), r)) {
            ((n = { type: "tag", tagType: "define" }),
              (n.attributes = X(r[1])),
              this.trigger("data", n));
            return;
          }
          this.trigger("data", { type: "tag", data: u.slice(4) });
        });
    }
    addParser({ expression: t, customType: r, dataParser: n, segment: i }) {
      (typeof n != "function" && (n = (u) => u),
        this.customParsers.push((u) => {
          if (t.exec(u))
            return (
              this.trigger("data", { type: "custom", data: n(u), customType: r, segment: i }),
              !0
            );
        }));
    }
    addTagMapper({ expression: t, map: r }) {
      let n = (i) => (t.test(i) ? r(i) : i);
      this.tagMappers.push(n);
    }
  },
  Un = (e) => e.toLowerCase().replace(/-(\w)/g, (t) => t[1].toUpperCase()),
  ae = function (e) {
    let t = {};
    return (
      Object.keys(e).forEach(function (r) {
        t[Un(r)] = e[r];
      }),
      t
    );
  },
  Et = function (e) {
    let { serverControl: t, targetDuration: r, partTargetDuration: n } = e;
    if (!t) return;
    let i = "#EXT-X-SERVER-CONTROL",
      u = "holdBack",
      a = "partHoldBack",
      s = r && r * 3,
      l = n && n * 2;
    (r &&
      !t.hasOwnProperty(u) &&
      ((t[u] = s),
      this.trigger("info", { message: `${i} defaulting HOLD-BACK to targetDuration * 3 (${s}).` })),
      s &&
        t[u] < s &&
        (this.trigger("warn", {
          message: `${i} clamping HOLD-BACK (${t[u]}) to targetDuration * 3 (${s})`,
        }),
        (t[u] = s)),
      n &&
        !t.hasOwnProperty(a) &&
        ((t[a] = n * 3),
        this.trigger("info", {
          message: `${i} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[a]}).`,
        })),
      n &&
        t[a] < l &&
        (this.trigger("warn", {
          message: `${i} clamping PART-HOLD-BACK (${t[a]}) to partTargetDuration * 2 (${l}).`,
        }),
        (t[a] = l)));
  },
  Ie = class extends Ze {
    constructor(t = {}) {
      (super(),
        (this.lineStream = new yt()),
        (this.parseStream = new bt()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = t.mainDefinitions || {}),
        (this.params = new URL(t.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let r = this,
        n = [],
        i = {},
        u,
        a,
        s = !1,
        l = function () {},
        o = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        m = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        f = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let g = 0,
        E = 0,
        D = {};
      (this.on("end", () => {
        i.uri ||
          (!i.parts && !i.preloadHints) ||
          (!i.map && u && (i.map = u),
          !i.key && a && (i.key = a),
          !i.timeline && typeof f == "number" && (i.timeline = f),
          (this.manifest.preloadSegment = i));
      }),
        this.parseStream.on("data", function (c) {
          let y, b;
          if (r.manifest.definitions) {
            for (let h in r.manifest.definitions)
              if (
                (c.uri && (c.uri = c.uri.replace(`{$${h}}`, r.manifest.definitions[h])),
                c.attributes)
              )
                for (let p in c.attributes)
                  typeof c.attributes[p] == "string" &&
                    (c.attributes[p] = c.attributes[p].replace(
                      `{$${h}}`,
                      r.manifest.definitions[h],
                    ));
          }
          ({
            tag() {
              (
                ({
                  version() {
                    c.version && (this.manifest.version = c.version);
                  },
                  "allow-cache"() {
                    ((this.manifest.allowCache = c.allowed),
                      "allowed" in c ||
                        (this.trigger("info", { message: "defaulting allowCache to YES" }),
                        (this.manifest.allowCache = !0)));
                  },
                  byterange() {
                    let h = {};
                    ("length" in c &&
                      ((i.byterange = h), (h.length = c.length), "offset" in c || (c.offset = g)),
                      "offset" in c && ((i.byterange = h), (h.offset = c.offset)),
                      (g = h.offset + h.length));
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
                      c.title && (i.title = c.title),
                      c.duration > 0 && (i.duration = c.duration),
                      c.duration === 0 &&
                        ((i.duration = 0.01),
                        this.trigger("info", {
                          message: "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = n));
                  },
                  key() {
                    if (!c.attributes) {
                      this.trigger("warn", {
                        message: "ignoring key declaration without attribute list",
                      });
                      return;
                    }
                    if (c.attributes.METHOD === "NONE") {
                      a = null;
                      return;
                    }
                    if (!c.attributes.URI) {
                      this.trigger("warn", { message: "ignoring key declaration without URI" });
                      return;
                    }
                    if (c.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.apple.fps.1_0"] = {
                          attributes: c.attributes,
                        }));
                      return;
                    }
                    if (c.attributes.KEYFORMAT === "com.microsoft.playready") {
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.microsoft.playready"] = {
                          uri: c.attributes.URI,
                        }));
                      return;
                    }
                    if (c.attributes.KEYFORMAT === m) {
                      if (
                        ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(
                          c.attributes.METHOD,
                        ) === -1
                      ) {
                        this.trigger("warn", {
                          message: "invalid key method provided for Widevine",
                        });
                        return;
                      }
                      if (
                        (c.attributes.METHOD === "SAMPLE-AES-CENC" &&
                          this.trigger("warn", {
                            message:
                              "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                          }),
                        c.attributes.URI.substring(0, 23) !== "data:text/plain;base64,")
                      ) {
                        this.trigger("warn", { message: "invalid key URI provided for Widevine" });
                        return;
                      }
                      if (!(c.attributes.KEYID && c.attributes.KEYID.substring(0, 2) === "0x")) {
                        this.trigger("warn", { message: "invalid key ID provided for Widevine" });
                        return;
                      }
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.widevine.alpha"] = {
                          attributes: {
                            schemeIdUri: c.attributes.KEYFORMAT,
                            keyId: c.attributes.KEYID.substring(2),
                          },
                          pssh: Ne(c.attributes.URI.split(",")[1]),
                        }));
                      return;
                    }
                    (c.attributes.METHOD ||
                      this.trigger("warn", { message: "defaulting key method to AES-128" }),
                      (a = { method: c.attributes.METHOD || "AES-128", uri: c.attributes.URI }),
                      typeof c.attributes.IV < "u" && (a.iv = c.attributes.IV));
                  },
                  "media-sequence"() {
                    if (!isFinite(c.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid media sequence: " + c.number,
                      });
                      return;
                    }
                    this.manifest.mediaSequence = c.number;
                  },
                  "discontinuity-sequence"() {
                    if (!isFinite(c.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid discontinuity sequence: " + c.number,
                      });
                      return;
                    }
                    ((this.manifest.discontinuitySequence = c.number), (f = c.number));
                  },
                  "playlist-type"() {
                    if (!/VOD|EVENT/.test(c.playlistType)) {
                      this.trigger("warn", {
                        message: "ignoring unknown playlist type: " + c.playlist,
                      });
                      return;
                    }
                    this.manifest.playlistType = c.playlistType;
                  },
                  map() {
                    ((u = {}),
                      c.uri && (u.uri = c.uri),
                      c.byterange && (u.byterange = c.byterange),
                      a && (u.key = a));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = n),
                      (this.manifest.mediaGroups = this.manifest.mediaGroups || o),
                      !c.attributes)
                    ) {
                      this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
                      return;
                    }
                    (i.attributes || (i.attributes = {}), le(i.attributes, c.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups = this.manifest.mediaGroups || o),
                      !(
                        c.attributes &&
                        c.attributes.TYPE &&
                        c.attributes["GROUP-ID"] &&
                        c.attributes.NAME
                      ))
                    ) {
                      this.trigger("warn", {
                        message: "ignoring incomplete or missing media group",
                      });
                      return;
                    }
                    let h = this.manifest.mediaGroups[c.attributes.TYPE];
                    ((h[c.attributes["GROUP-ID"]] = h[c.attributes["GROUP-ID"]] || {}),
                      (y = h[c.attributes["GROUP-ID"]]),
                      (b = { default: /yes/i.test(c.attributes.DEFAULT) }),
                      b.default
                        ? (b.autoselect = !0)
                        : (b.autoselect = /yes/i.test(c.attributes.AUTOSELECT)),
                      c.attributes.LANGUAGE && (b.language = c.attributes.LANGUAGE),
                      c.attributes.URI && (b.uri = c.attributes.URI),
                      c.attributes["INSTREAM-ID"] && (b.instreamId = c.attributes["INSTREAM-ID"]),
                      c.attributes.CHARACTERISTICS &&
                        (b.characteristics = c.attributes.CHARACTERISTICS),
                      c.attributes.FORCED && (b.forced = /yes/i.test(c.attributes.FORCED)),
                      (y[c.attributes.NAME] = b));
                  },
                  discontinuity() {
                    ((f += 1),
                      (i.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(n.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = c.dateTimeString),
                      (this.manifest.dateTimeObject = c.dateTimeObject)),
                      (i.dateTimeString = c.dateTimeString),
                      (i.dateTimeObject = c.dateTimeObject));
                    let { lastProgramDateTime: h } = this;
                    ((this.lastProgramDateTime = new Date(c.dateTimeString).getTime()),
                      h === null &&
                        this.manifest.segments.reduceRight(
                          (p, d) => ((d.programDateTime = p - d.duration * 1e3), d.programDateTime),
                          this.lastProgramDateTime,
                        ));
                  },
                  targetduration() {
                    if (!isFinite(c.duration) || c.duration < 0) {
                      this.trigger("warn", {
                        message: "ignoring invalid target duration: " + c.duration,
                      });
                      return;
                    }
                    ((this.manifest.targetDuration = c.duration), Et.call(this, this.manifest));
                  },
                  start() {
                    if (!c.attributes || isNaN(c.attributes["TIME-OFFSET"])) {
                      this.trigger("warn", {
                        message: "ignoring start declaration without appropriate attribute list",
                      });
                      return;
                    }
                    this.manifest.start = {
                      timeOffset: c.attributes["TIME-OFFSET"],
                      precise: c.attributes.PRECISE,
                    };
                  },
                  "cue-out"() {
                    i.cueOut = c.data;
                  },
                  "cue-out-cont"() {
                    i.cueOutCont = c.data;
                  },
                  "cue-in"() {
                    i.cueIn = c.data;
                  },
                  skip() {
                    ((this.manifest.skip = ae(c.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-SKIP", c.attributes, [
                        "SKIPPED-SEGMENTS",
                      ]));
                  },
                  part() {
                    s = !0;
                    let h = this.manifest.segments.length,
                      p = ae(c.attributes);
                    ((i.parts = i.parts || []),
                      i.parts.push(p),
                      p.byterange &&
                        (p.byterange.hasOwnProperty("offset") || (p.byterange.offset = E),
                        (E = p.byterange.offset + p.byterange.length)));
                    let d = i.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${d} for segment #${h}`,
                      c.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((A, v) => {
                          A.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${v} lacks required attribute(s): LAST-PART`,
                            });
                        }));
                  },
                  "server-control"() {
                    let h = (this.manifest.serverControl = ae(c.attributes));
                    (h.hasOwnProperty("canBlockReload") ||
                      ((h.canBlockReload = !1),
                      this.trigger("info", {
                        message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      Et.call(this, this.manifest),
                      h.canSkipDateranges &&
                        !h.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let h = this.manifest.segments.length,
                      p = ae(c.attributes),
                      d = p.type && p.type === "PART";
                    ((i.preloadHints = i.preloadHints || []),
                      i.preloadHints.push(p),
                      p.byterange &&
                        (p.byterange.hasOwnProperty("offset") ||
                          ((p.byterange.offset = d ? E : 0),
                          d && (E = p.byterange.offset + p.byterange.length))));
                    let A = i.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${A} for segment #${h}`,
                        c.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!p.type)
                    )
                      for (let v = 0; v < i.preloadHints.length - 1; v++) {
                        let _ = i.preloadHints[v];
                        _.type &&
                          _.type === p.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${A} for segment #${h} has the same TYPE ${p.type} as preload hint #${v}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let h = ae(c.attributes);
                    ((this.manifest.renditionReports = this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(h));
                    let p = this.manifest.renditionReports.length - 1,
                      d = ["LAST-MSN", "URI"];
                    (s && d.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${p}`,
                        c.attributes,
                        d,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = ae(c.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-PART-INF", c.attributes, [
                        "PART-TARGET",
                      ]),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                      Et.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(ae(c.attributes));
                    let h = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${h}`, c.attributes, [
                      "ID",
                      "START-DATE",
                    ]);
                    let p = this.manifest.dateRanges[h];
                    (p.endDate &&
                      p.startDate &&
                      new Date(p.endDate) < new Date(p.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      p.duration &&
                        p.duration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      p.plannedDuration &&
                        p.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let d = !!p.endOnNext;
                    if (
                      (d &&
                        !p.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      d &&
                        (p.duration || p.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      p.duration && p.endDate)
                    ) {
                      let v = p.startDate.getTime() + p.duration * 1e3;
                      this.manifest.dateRanges[h].endDate = new Date(v);
                    }
                    if (!D[p.id]) D[p.id] = p;
                    else {
                      for (let v in D[p.id])
                        if (p[v] && JSON.stringify(D[p.id][v]) !== JSON.stringify(p[v])) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let A = this.manifest.dateRanges.findIndex((v) => v.id === p.id);
                      ((this.manifest.dateRanges[A] = le(this.manifest.dateRanges[A], p)),
                        (D[p.id] = le(D[p.id], p)),
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
                    ((this.manifest.contentSteering = ae(c.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", c.attributes, [
                        "SERVER-URI",
                      ]));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let h = (p, d) => {
                      if (p in this.manifest.definitions) {
                        this.trigger("error", { message: `EXT-X-DEFINE: Duplicate name ${p}` });
                        return;
                      }
                      this.manifest.definitions[p] = d;
                    };
                    if ("QUERYPARAM" in c.attributes) {
                      if ("NAME" in c.attributes || "IMPORT" in c.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      let p = this.params.get(c.attributes.QUERYPARAM);
                      if (!p) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${c.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      h(c.attributes.QUERYPARAM, decodeURIComponent(p));
                      return;
                    }
                    if ("NAME" in c.attributes) {
                      if ("IMPORT" in c.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      if (!("VALUE" in c.attributes) || typeof c.attributes.VALUE != "string") {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value for ${c.attributes.NAME}`,
                        });
                        return;
                      }
                      h(c.attributes.NAME, c.attributes.VALUE);
                      return;
                    }
                    if ("IMPORT" in c.attributes) {
                      if (!this.mainDefinitions[c.attributes.IMPORT]) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value ${c.attributes.IMPORT} to import, or IMPORT used on main playlist`,
                        });
                        return;
                      }
                      h(c.attributes.IMPORT, this.mainDefinitions[c.attributes.IMPORT]);
                      return;
                    }
                    this.trigger("error", { message: "EXT-X-DEFINE: No attribute" });
                  },
                  "i-frame-playlist"() {
                    (this.manifest.iFramePlaylists.push({
                      attributes: c.attributes,
                      uri: c.uri,
                      timeline: f,
                    }),
                      this.warnOnMissingAttributes_("#EXT-X-I-FRAME-STREAM-INF", c.attributes, [
                        "BANDWIDTH",
                        "URI",
                      ]));
                  },
                })[c.tagType] || l
              ).call(r);
            },
            uri() {
              ((i.uri = c.uri),
                n.push(i),
                this.manifest.targetDuration &&
                  !("duration" in i) &&
                  (this.trigger("warn", {
                    message: "defaulting segment duration to the target duration",
                  }),
                  (i.duration = this.manifest.targetDuration)),
                a && (i.key = a),
                (i.timeline = f),
                u && (i.map = u),
                (E = 0),
                this.lastProgramDateTime !== null &&
                  ((i.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += i.duration * 1e3)),
                (i = {}));
            },
            comment() {},
            custom() {
              c.segment
                ? ((i.custom = i.custom || {}), (i.custom[c.customType] = c.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[c.customType] = c.data));
            },
          })[c.type].call(r);
        }));
    }
    requiredCompatibilityversion(t, r) {
      (t < r || !t) && this.trigger("warn", { message: `manifest must be at least version ${r}` });
    }
    warnOnMissingAttributes_(t, r, n) {
      let i = [];
      (n.forEach(function (u) {
        r.hasOwnProperty(u) || i.push(u);
      }),
        i.length &&
          this.trigger("warn", { message: `${t} lacks required attribute(s): ${i.join(", ")}` }));
    }
    push(t) {
      this.lineStream.push(t);
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
    addParser(t) {
      this.parseStream.addParser(t);
    }
    addTagMapper(t) {
      this.parseStream.addTagMapper(t);
    }
  };
var Ln = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);
function tt(e) {
  return Object.keys(e).some((t) => Ln.has(t));
}
function kn(e) {
  let t;
  try {
    let i = new Ie();
    (i.push(e), i.end(), (t = i.manifest));
  } catch {}
  if (!t) return R("parse error");
  let r = t.segments;
  return !Array.isArray(r) || r.length == 0
    ? R("not a valid m3u8")
    : r.every((i) => {
          let a = i.uri.split(/[?#]/)[0];
          return a
            ? a
                .substring(a.lastIndexOf(".") + 1)
                .toLowerCase()
                .match(/vtt|srt|webvtt|ttml/)
            : !1;
        })
      ? R("subtitle playlist")
      : G(t);
}
function qn(e) {
  let t = new Date(new Date().getTime() - 6e5);
  return !e.dateTimeObject && !e.programDateTime
    ? !1
    : typeof e.dateTimeObject == "object"
      ? e.dateTimeObject > t
      : typeof e.programDateTime == "number"
        ? e.programDateTime > t.getTime()
        : !1;
}
function Vn(e) {
  if (!Array.isArray(e.segments) || e.segments.some((n) => typeof n.duration != "number"))
    return "unknown";
  let t = e.segments[e.segments.length - 1];
  return t && qn(t)
    ? "live"
    : e.segments.reduce((n, i) => (typeof i.duration == "number" && (n += i.duration), n), 0);
}
function jt(e, t, r, n = !1, i = !1) {
  let u;
  try {
    let o = new Ie();
    (o.push(e), o.end(), (u = o.manifest));
  } catch {}
  if (!u) return R("parse error");
  if (!u.playlists) return R("Not a master M3U8");
  let a = u.playlists,
    s = u.mediaGroups.AUDIO ?? {},
    l = [];
  for (let o of a) {
    if (typeof o.uri != "string") continue;
    let m = "mp4";
    if (o.attributes.CODECS) {
      let b = Ke(o.attributes.CODECS);
      if (b.isNone()) continue;
      m = b.value;
    }
    if (
      (!("FRAME-RATE" in o.attributes) && "RESOLUTION" in o.attributes,
      o.attributes["VIDEO-RANGE"] && o.attributes["VIDEO-RANGE"] == "PQ")
    )
      continue;
    let f = Z(o.uri, t.href);
    if (f.isNone()) continue;
    let g = S;
    if (o.attributes.AUDIO) {
      let b = s[o.attributes.AUDIO];
      if (b) {
        for (let h of Object.values(b))
          if (
            (h.uri && (g = Z(h.uri, t.href)),
            (r.isSome() && h.language && r.value.includes(h.language)) || h.default)
          )
            break;
      }
    }
    let E = S,
      D = S;
    (o.attributes.RESOLUTION &&
      (E = x({ height: o.attributes.RESOLUTION.height, width: o.attributes.RESOLUTION.width })),
      o.attributes.BANDWIDTH && (D = x(o.attributes.BANDWIDTH)));
    let c = { size: E, bitrate: D },
      y = f.value;
    if ((n ? (y.search = ht(y.searchParams, t.searchParams)) : i && (y.search = ""), g.isSome())) {
      let b = g.value;
      (n ? (b.search = ht(y.searchParams, t.searchParams)) : i && (b.search = ""),
        l.push({ demuxer: m, quality: c, av: { video: y, audio: b } }));
    } else l.push({ demuxer: m, quality: c, av: { video: y, audio: !1 } });
  }
  return ((l = Qe(l)), Je(l) ? G(l) : R("Empty playlist"));
}
async function Kt(e) {
  let t = e[0].av.video || e[0].av.audio;
  try {
    let n = await (await fetch(t, { signal: AbortSignal.timeout(5e3) })).text(),
      i = kn(n);
    if (i.isOk()) {
      let u = Vn(i.value),
        a = Gn(i.value);
      return { duration: u, has_drm: a };
    }
  } catch {
    console.warn("request timeout while calculating duration & checking for DRM");
  }
  return { duration: "unknown", has_drm: !1 };
}
function Gn(e) {
  return e.contentProtection ? tt(e.contentProtection) : !1;
}
function vt(e, t = 0) {
  let r = 3735928559 ^ t,
    n = 1103547991 ^ t;
  for (let i = 0, u; i < e.length; i++)
    ((u = e.charCodeAt(i)), (r = Math.imul(r ^ u, 2654435761)), (n = Math.imul(n ^ u, 1597334677)));
  return (
    (r = Math.imul(r ^ (r >>> 16), 2246822507)),
    (r ^= Math.imul(n ^ (n >>> 13), 3266489909)),
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(r ^ (r >>> 13), 3266489909)),
    4294967296 * (2097151 & n) + (r >>> 0)
  );
}
var Zt = Se(Jt(), 1);
var _a = new BroadcastChannel("worker_service");
var _t = {
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
async function Xn(e, t) {
  await Zt.default.runtime.sendMessage({ msg: e, channel: t });
}
function er(e) {
  let t = _t.FromInjectedToService;
  Xn(e, t);
}
var fe = Se(et()),
  tr = "https://example.com",
  Hn = function (t, r) {
    if (/^[a-z]+:/i.test(r)) return r;
    /^data:/.test(t) && (t = (fe.default.location && fe.default.location.href) || "");
    var n = /^\/\//.test(t),
      i = !fe.default.location && !/\/\//i.test(t);
    t = new fe.default.URL(t, fe.default.location || tr);
    var u = new URL(r, t);
    return i ? u.href.slice(tr.length) : n ? u.href.slice(u.protocol.length) : u.href;
  },
  rt = Hn;
var z = Se(et());
var rr = function (t, r, n) {
  r.forEach(function (i) {
    for (var u in t.mediaGroups[i])
      for (var a in t.mediaGroups[i][u]) {
        var s = t.mediaGroups[i][u][a];
        n(s, i, u, a);
      }
  });
};
var un = Se(Kr());
var Qr = (e) => !!e && typeof e == "object",
  U = (...e) =>
    e.reduce(
      (t, r) => (
        typeof r != "object" ||
          Object.keys(r).forEach((n) => {
            Array.isArray(t[n]) && Array.isArray(r[n])
              ? (t[n] = t[n].concat(r[n]))
              : Qr(t[n]) && Qr(r[n])
                ? (t[n] = U(t[n], r[n]))
                : (t[n] = r[n]);
          }),
        t
      ),
      {},
    ),
  an = (e) => Object.keys(e).map((t) => e[t]),
  yi = (e, t) => {
    let r = [];
    for (let n = e; n < t; n++) r.push(n);
    return r;
  },
  Te = (e) => e.reduce((t, r) => t.concat(r), []),
  sn = (e) => {
    if (!e.length) return [];
    let t = [];
    for (let r = 0; r < e.length; r++) t.push(e[r]);
    return t;
  },
  bi = (e, t) => e.reduce((r, n, i) => (n[t] && r.push(i), r), []),
  vi = (e, t) =>
    an(
      e.reduce(
        (r, n) => (
          n.forEach((i) => {
            r[t(i)] = i;
          }),
          r
        ),
        {},
      ),
    ),
  Xe = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME",
  },
  ze = ({ baseUrl: e = "", source: t = "", range: r = "", indexRange: n = "" }) => {
    let i = { uri: t, resolvedUri: rt(e || "", t) };
    if (r || n) {
      let a = (r || n).split("-"),
        s = z.default.BigInt ? z.default.BigInt(a[0]) : parseInt(a[0], 10),
        l = z.default.BigInt ? z.default.BigInt(a[1]) : parseInt(a[1], 10);
      (s < Number.MAX_SAFE_INTEGER && typeof s == "bigint" && (s = Number(s)),
        l < Number.MAX_SAFE_INTEGER && typeof l == "bigint" && (l = Number(l)));
      let o;
      (typeof l == "bigint" || typeof s == "bigint"
        ? (o = z.default.BigInt(l) - z.default.BigInt(s) + z.default.BigInt(1))
        : (o = l - s + 1),
        typeof o == "bigint" && o < Number.MAX_SAFE_INTEGER && (o = Number(o)),
        (i.byterange = { length: o, offset: s }));
    }
    return i;
  },
  Ti = (e) => {
    let t;
    return (
      typeof e.offset == "bigint" || typeof e.length == "bigint"
        ? (t = z.default.BigInt(e.offset) + z.default.BigInt(e.length) - z.default.BigInt(1))
        : (t = e.offset + e.length - 1),
      `${e.offset}-${t}`
    );
  },
  Jr = (e) => (e && typeof e != "number" && (e = parseInt(e, 10)), isNaN(e) ? null : e),
  _i = {
    static(e) {
      let { duration: t, timescale: r = 1, sourceDuration: n, periodDuration: i } = e,
        u = Jr(e.endNumber),
        a = t / r;
      return typeof u == "number"
        ? { start: 0, end: u }
        : typeof i == "number"
          ? { start: 0, end: i / a }
          : { start: 0, end: n / a };
    },
    dynamic(e) {
      let {
          NOW: t,
          clientOffset: r,
          availabilityStartTime: n,
          timescale: i = 1,
          duration: u,
          periodStart: a = 0,
          minimumUpdatePeriod: s = 0,
          timeShiftBufferDepth: l = 1 / 0,
        } = e,
        o = Jr(e.endNumber),
        m = (t + r) / 1e3,
        f = n + a,
        E = m + s - f,
        D = Math.ceil((E * i) / u),
        c = Math.floor(((m - f - l) * i) / u),
        y = Math.floor(((m - f) * i) / u);
      return { start: Math.max(0, c), end: typeof o == "number" ? o : Math.min(D, y) };
    },
  },
  Si = (e) => (t) => {
    let { duration: r, timescale: n = 1, periodStart: i, startNumber: u = 1 } = e;
    return { number: u + t, duration: r / n, timeline: i, time: t * r };
  },
  Vt = (e) => {
    let { type: t, duration: r, timescale: n = 1, periodDuration: i, sourceDuration: u } = e,
      { start: a, end: s } = _i[t](e),
      l = yi(a, s).map(Si(e));
    if (t === "static") {
      let o = l.length - 1,
        m = typeof i == "number" ? i : u;
      l[o].duration = m - (r / n) * o;
    }
    return l;
  },
  on = (e) => {
    let {
      baseUrl: t,
      initialization: r = {},
      sourceDuration: n,
      indexRange: i = "",
      periodStart: u,
      presentationTime: a,
      number: s = 0,
      duration: l,
    } = e;
    if (!t) throw new Error(Xe.NO_BASE_URL);
    let o = ze({ baseUrl: t, source: r.sourceURL, range: r.range }),
      m = ze({ baseUrl: t, source: t, indexRange: i });
    if (((m.map = o), l)) {
      let f = Vt(e);
      f.length && ((m.duration = f[0].duration), (m.timeline = f[0].timeline));
    } else n && ((m.duration = n), (m.timeline = u));
    return ((m.presentationTime = a || u), (m.number = s), [m]);
  },
  wi = (e, t, r) => {
    let n = e.sidx.map ? e.sidx.map : null,
      i = e.sidx.duration,
      u = e.timeline || 0,
      a = e.sidx.byterange,
      s = a.offset + a.length,
      l = t.timescale,
      o = t.references.filter((y) => y.referenceType !== 1),
      m = [],
      f = e.endList ? "static" : "dynamic",
      g = e.sidx.timeline,
      E = g,
      D = e.mediaSequence || 0,
      c;
    typeof t.firstOffset == "bigint"
      ? (c = z.default.BigInt(s) + t.firstOffset)
      : (c = s + t.firstOffset);
    for (let y = 0; y < o.length; y++) {
      let b = t.references[y],
        h = b.referencedSize,
        p = b.subsegmentDuration,
        d;
      typeof c == "bigint" ? (d = c + z.default.BigInt(h) - z.default.BigInt(1)) : (d = c + h - 1);
      let A = `${c}-${d}`,
        _ = on({
          baseUrl: r,
          timescale: l,
          timeline: u,
          periodStart: g,
          presentationTime: E,
          number: D,
          duration: p,
          sourceDuration: i,
          indexRange: A,
          type: f,
        })[0];
      (n && (_.map = n),
        m.push(_),
        typeof c == "bigint" ? (c += z.default.BigInt(h)) : (c += h),
        (E += p / l),
        D++);
    }
    return ((e.segments = m), e);
  },
  xi = ["AUDIO", "SUBTITLES"],
  Ci = 1 / 60,
  ln = (e) => vi(e, ({ timeline: t }) => t).sort((t, r) => (t.timeline > r.timeline ? 1 : -1)),
  Ni = (e, t) => {
    for (let r = 0; r < e.length; r++) if (e[r].attributes.NAME === t) return e[r];
    return null;
  },
  Zr = (e) => {
    let t = [];
    return (
      rr(e, xi, (r, n, i, u) => {
        t = t.concat(r.playlists || []);
      }),
      t
    );
  },
  en = ({ playlist: e, mediaSequence: t }) => {
    ((e.mediaSequence = t),
      e.segments.forEach((r, n) => {
        r.number = e.mediaSequence + n;
      }));
  },
  Ii = ({ oldPlaylists: e, newPlaylists: t, timelineStarts: r }) => {
    t.forEach((n) => {
      n.discontinuitySequence = r.findIndex(function ({ timeline: l }) {
        return l === n.timeline;
      });
      let i = Ni(e, n.attributes.NAME);
      if (!i || n.sidx) return;
      let u = n.segments[0],
        a = i.segments.findIndex(function (l) {
          return Math.abs(l.presentationTime - u.presentationTime) < Ci;
        });
      if (a === -1) {
        (en({ playlist: n, mediaSequence: i.mediaSequence + i.segments.length }),
          (n.segments[0].discontinuity = !0),
          n.discontinuityStarts.unshift(0),
          ((!i.segments.length && n.timeline > i.timeline) ||
            (i.segments.length && n.timeline > i.segments[i.segments.length - 1].timeline)) &&
            n.discontinuitySequence--);
        return;
      }
      (i.segments[a].discontinuity &&
        !u.discontinuity &&
        ((u.discontinuity = !0), n.discontinuityStarts.unshift(0), n.discontinuitySequence--),
        en({ playlist: n, mediaSequence: i.segments[a].number }));
    });
  },
  Ri = ({ oldManifest: e, newManifest: t }) => {
    let r = e.playlists.concat(Zr(e)),
      n = t.playlists.concat(Zr(t));
    return (
      (t.timelineStarts = ln([e.timelineStarts, t.timelineStarts])),
      Ii({ oldPlaylists: r, newPlaylists: n, timelineStarts: t.timelineStarts }),
      t
    );
  },
  Oi = (e) => e && e.uri + "-" + Ti(e.byterange),
  qt = (e) => {
    let t = e.reduce(function (n, i) {
        return (
          n[i.attributes.baseUrl] || (n[i.attributes.baseUrl] = []),
          n[i.attributes.baseUrl].push(i),
          n
        );
      }, {}),
      r = [];
    return (
      Object.values(t).forEach((n) => {
        let i = an(
          n.reduce((u, a) => {
            let s = a.attributes.id + (a.attributes.lang || "");
            return (
              u[s]
                ? (a.segments &&
                    (a.segments[0] && (a.segments[0].discontinuity = !0),
                    u[s].segments.push(...a.segments)),
                  a.attributes.contentProtection &&
                    (u[s].attributes.contentProtection = a.attributes.contentProtection))
                : ((u[s] = a), (u[s].attributes.timelineStarts = [])),
              u[s].attributes.timelineStarts.push({
                start: a.attributes.periodStart,
                timeline: a.attributes.periodStart,
              }),
              u
            );
          }, {}),
        );
        r = r.concat(i);
      }),
      r.map((n) => ((n.discontinuityStarts = bi(n.segments || [], "discontinuity")), n))
    );
  },
  Gt = (e, t) => {
    let r = Oi(e.sidx),
      n = r && t[r] && t[r].sidx;
    return (n && wi(e, n, e.sidx.resolvedUri), e);
  },
  Mi = (e, t = {}) => {
    if (!Object.keys(t).length) return e;
    for (let r in e) e[r] = Gt(e[r], t);
    return e;
  },
  Bi = (
    {
      attributes: e,
      segments: t,
      sidx: r,
      mediaSequence: n,
      discontinuitySequence: i,
      discontinuityStarts: u,
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
      discontinuitySequence: i,
      discontinuityStarts: u,
      timelineStarts: e.timelineStarts,
      mediaSequence: n,
      segments: t,
    };
    return (
      e.contentProtection && (s.contentProtection = e.contentProtection),
      e.serviceLocation && (s.attributes.serviceLocation = e.serviceLocation),
      r && (s.sidx = r),
      a && ((s.attributes.AUDIO = "audio"), (s.attributes.SUBTITLES = "subs")),
      s
    );
  },
  Fi = ({
    attributes: e,
    segments: t,
    mediaSequence: r,
    discontinuityStarts: n,
    discontinuitySequence: i,
  }) => {
    typeof t > "u" &&
      ((t = [
        {
          uri: e.baseUrl,
          timeline: e.periodStart,
          resolvedUri: e.baseUrl || "",
          duration: e.sourceDuration,
          number: 0,
        },
      ]),
      (e.duration = e.sourceDuration));
    let u = { NAME: e.id, BANDWIDTH: e.bandwidth, "PROGRAM-ID": 1 };
    e.codecs && (u.CODECS = e.codecs);
    let a = {
      attributes: u,
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      timelineStarts: e.timelineStarts,
      discontinuityStarts: n,
      discontinuitySequence: i,
      mediaSequence: r,
      segments: t,
    };
    return (e.serviceLocation && (a.attributes.serviceLocation = e.serviceLocation), a);
  },
  Pi = (e, t = {}, r = !1) => {
    let n,
      i = e.reduce((u, a) => {
        let s = (a.attributes.role && a.attributes.role.value) || "",
          l = a.attributes.lang || "",
          o = a.attributes.label || "main";
        if (l && !a.attributes.label) {
          let f = s ? ` (${s})` : "";
          o = `${a.attributes.lang}${f}`;
        }
        u[o] ||
          (u[o] = { language: l, autoselect: !0, default: s === "main", playlists: [], uri: "" });
        let m = Gt(Bi(a, r), t);
        return (
          u[o].playlists.push(m),
          typeof n > "u" && s === "main" && ((n = a), (n.default = !0)),
          u
        );
      }, {});
    if (!n) {
      let u = Object.keys(i)[0];
      i[u].default = !0;
    }
    return i;
  },
  Ui = (e, t = {}) =>
    e.reduce((r, n) => {
      let i = n.attributes.label || n.attributes.lang || "text",
        u = n.attributes.lang || "und";
      return (
        r[i] || (r[i] = { language: u, default: !1, autoselect: !1, playlists: [], uri: "" }),
        r[i].playlists.push(Gt(Fi(n), t)),
        r
      );
    }, {}),
  Li = (e) =>
    e.reduce(
      (t, r) => (
        r &&
          r.forEach((n) => {
            let { channel: i, language: u } = n;
            ((t[u] = { autoselect: !1, default: !1, instreamId: i, language: u }),
              n.hasOwnProperty("aspectRatio") && (t[u].aspectRatio = n.aspectRatio),
              n.hasOwnProperty("easyReader") && (t[u].easyReader = n.easyReader),
              n.hasOwnProperty("3D") && (t[u]["3D"] = n["3D"]));
          }),
        t
      ),
      {},
    ),
  ki = ({ attributes: e, segments: t, sidx: r, discontinuityStarts: n }) => {
    let i = {
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
      segments: t,
    };
    return (
      e.frameRate && (i.attributes["FRAME-RATE"] = e.frameRate),
      e.contentProtection && (i.contentProtection = e.contentProtection),
      e.serviceLocation && (i.attributes.serviceLocation = e.serviceLocation),
      r && (i.sidx = r),
      i
    );
  },
  qi = ({ attributes: e }) =>
    e.mimeType === "video/mp4" || e.mimeType === "video/webm" || e.contentType === "video",
  Vi = ({ attributes: e }) =>
    e.mimeType === "audio/mp4" || e.mimeType === "audio/webm" || e.contentType === "audio",
  Gi = ({ attributes: e }) => e.mimeType === "text/vtt" || e.contentType === "text",
  Xi = (e, t) => {
    e.forEach((r) => {
      ((r.mediaSequence = 0),
        (r.discontinuitySequence = t.findIndex(function ({ timeline: n }) {
          return n === r.timeline;
        })),
        r.segments &&
          r.segments.forEach((n, i) => {
            n.number = i;
          }));
    });
  },
  tn = (e) =>
    e
      ? Object.keys(e).reduce((t, r) => {
          let n = e[r];
          return t.concat(n.playlists);
        }, [])
      : [],
  zi = ({
    dashPlaylists: e,
    locations: t,
    contentSteering: r,
    sidxMapping: n = {},
    previousManifest: i,
    eventStream: u,
  }) => {
    if (!e.length) return {};
    let {
        sourceDuration: a,
        type: s,
        suggestedPresentationDelay: l,
        minimumUpdatePeriod: o,
      } = e[0].attributes,
      m = qt(e.filter(qi)).map(ki),
      f = qt(e.filter(Vi)),
      g = qt(e.filter(Gi)),
      E = e.map((d) => d.attributes.captionServices).filter(Boolean),
      D = {
        allowCache: !0,
        discontinuityStarts: [],
        segments: [],
        endList: !0,
        mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        uri: "",
        duration: a,
        playlists: Mi(m, n),
      };
    (o >= 0 && (D.minimumUpdatePeriod = o * 1e3),
      t && (D.locations = t),
      r && (D.contentSteering = r),
      s === "dynamic" && (D.suggestedPresentationDelay = l),
      u && u.length > 0 && (D.eventStream = u));
    let c = D.playlists.length === 0,
      y = f.length ? Pi(f, n, c) : null,
      b = g.length ? Ui(g, n) : null,
      h = m.concat(tn(y), tn(b)),
      p = h.map(({ timelineStarts: d }) => d);
    return (
      (D.timelineStarts = ln(p)),
      Xi(h, D.timelineStarts),
      y && (D.mediaGroups.AUDIO.audio = y),
      b && (D.mediaGroups.SUBTITLES.subs = b),
      E.length && (D.mediaGroups["CLOSED-CAPTIONS"].cc = Li(E)),
      i ? Ri({ oldManifest: i, newManifest: D }) : D
    );
  },
  Hi = (e, t, r) => {
    let {
        NOW: n,
        clientOffset: i,
        availabilityStartTime: u,
        timescale: a = 1,
        periodStart: s = 0,
        minimumUpdatePeriod: l = 0,
      } = e,
      o = (n + i) / 1e3,
      m = u + s,
      g = o + l - m;
    return Math.ceil((g * a - t) / r);
  },
  cn = (e, t) => {
    let {
        type: r,
        minimumUpdatePeriod: n = 0,
        media: i = "",
        sourceDuration: u,
        timescale: a = 1,
        startNumber: s = 1,
        periodStart: l,
      } = e,
      o = [],
      m = -1;
    for (let f = 0; f < t.length; f++) {
      let g = t[f],
        E = g.d,
        D = g.r || 0,
        c = g.t || 0;
      (m < 0 && (m = c), c && c > m && (m = c));
      let y;
      if (D < 0) {
        let p = f + 1;
        p === t.length
          ? r === "dynamic" && n > 0 && i.indexOf("$Number$") > 0
            ? (y = Hi(e, m, E))
            : (y = (u * a - m) / E)
          : (y = (t[p].t - m) / E);
      } else y = D + 1;
      let b = s + o.length + y,
        h = s + o.length;
      for (; h < b; ) (o.push({ number: h, duration: E / a, time: m, timeline: l }), (m += E), h++);
    }
    return o;
  },
  $i = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
  Wi = (e) => (t, r, n, i) => {
    if (t === "$$") return "$";
    if (typeof e[r] > "u") return t;
    let u = "" + e[r];
    return r === "RepresentationID" || (n ? (i = parseInt(i, 10)) : (i = 1), u.length >= i)
      ? u
      : `${new Array(i - u.length + 1).join("0")}${u}`;
  },
  rn = (e, t) => e.replace($i, Wi(t)),
  Yi = (e, t) =>
    !e.duration && !t
      ? [
          {
            number: e.startNumber || 1,
            duration: e.sourceDuration,
            time: 0,
            timeline: e.periodStart,
          },
        ]
      : e.duration
        ? Vt(e)
        : cn(e, t),
  ji = (e, t) => {
    let r = { RepresentationID: e.id, Bandwidth: e.bandwidth || 0 },
      { initialization: n = { sourceURL: "", range: "" } } = e,
      i = ze({ baseUrl: e.baseUrl, source: rn(n.sourceURL, r), range: n.range });
    return Yi(e, t).map((a) => {
      ((r.Number = a.number), (r.Time = a.time));
      let s = rn(e.media || "", r),
        l = e.timescale || 1,
        o = e.presentationTimeOffset || 0,
        m = e.periodStart + (a.time - o) / l;
      return {
        uri: s,
        timeline: a.timeline,
        duration: a.duration,
        resolvedUri: rt(e.baseUrl || "", s),
        map: i,
        number: a.number,
        presentationTime: m,
      };
    });
  },
  Ki = (e, t) => {
    let { baseUrl: r, initialization: n = {} } = e,
      i = ze({ baseUrl: r, source: n.sourceURL, range: n.range }),
      u = ze({ baseUrl: r, source: t.media, range: t.mediaRange });
    return ((u.map = i), u);
  },
  Qi = (e, t) => {
    let { duration: r, segmentUrls: n = [], periodStart: i } = e;
    if ((!r && !t) || (r && t)) throw new Error(Xe.SEGMENT_TIME_UNSPECIFIED);
    let u = n.map((l) => Ki(e, l)),
      a;
    return (
      r && (a = Vt(e)),
      t && (a = cn(e, t)),
      a
        .map((l, o) => {
          if (u[o]) {
            let m = u[o],
              f = e.timescale || 1,
              g = e.presentationTimeOffset || 0;
            return (
              (m.timeline = l.timeline),
              (m.duration = l.duration),
              (m.number = l.number),
              (m.presentationTime = i + (l.time - g) / f),
              m
            );
          }
        })
        .filter((l) => l)
    );
  },
  Ji = ({ attributes: e, segmentInfo: t }) => {
    let r, n;
    t.template
      ? ((n = ji), (r = U(e, t.template)))
      : t.base
        ? ((n = on), (r = U(e, t.base)))
        : t.list && ((n = Qi), (r = U(e, t.list)));
    let i = { attributes: e };
    if (!n) return i;
    let u = n(r, t.segmentTimeline);
    if (r.duration) {
      let { duration: a, timescale: s = 1 } = r;
      r.duration = a / s;
    } else
      u.length
        ? (r.duration = u.reduce((a, s) => Math.max(a, Math.ceil(s.duration)), 0))
        : (r.duration = 0);
    return (
      (i.attributes = r),
      (i.segments = u),
      t.base && r.indexRange && ((i.sidx = u[0]), (i.segments = [])),
      i
    );
  },
  Zi = (e) => e.map(Ji),
  I = (e, t) => sn(e.childNodes).filter(({ tagName: r }) => r === t),
  He = (e) => e.textContent.trim(),
  eu = (e) => parseFloat(e.split("/").reduce((t, r) => t / r)),
  ve = (e) => {
    let s = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
    if (!s) return 0;
    let [l, o, m, f, g, E] = s.slice(1);
    return (
      parseFloat(l || 0) * 31536e3 +
      parseFloat(o || 0) * 2592e3 +
      parseFloat(m || 0) * 86400 +
      parseFloat(f || 0) * 3600 +
      parseFloat(g || 0) * 60 +
      parseFloat(E || 0)
    );
  },
  tu = (e) => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"), Date.parse(e)),
  nn = {
    mediaPresentationDuration(e) {
      return ve(e);
    },
    availabilityStartTime(e) {
      return tu(e) / 1e3;
    },
    minimumUpdatePeriod(e) {
      return ve(e);
    },
    suggestedPresentationDelay(e) {
      return ve(e);
    },
    type(e) {
      return e;
    },
    timeShiftBufferDepth(e) {
      return ve(e);
    },
    start(e) {
      return ve(e);
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
      return eu(e);
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
      let t = parseInt(e, 10);
      return isNaN(t) ? ve(e) : t;
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
  F = (e) =>
    e && e.attributes
      ? sn(e.attributes).reduce((t, r) => {
          let n = nn[r.name] || nn.DEFAULT;
          return ((t[r.name] = n(r.value)), t);
        }, {})
      : {},
  ru = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
    "urn:mpeg:dash:mp4protection:2011": "mp4protection",
  },
  pt = (e, t) =>
    t.length
      ? Te(
          e.map(function (r) {
            return t.map(function (n) {
              let i = He(n),
                u = rt(r.baseUrl, i),
                a = U(F(n), { baseUrl: u });
              return (
                u !== i &&
                  !a.serviceLocation &&
                  r.serviceLocation &&
                  (a.serviceLocation = r.serviceLocation),
                a
              );
            });
          }),
        )
      : e,
  Xt = (e) => {
    let t = I(e, "SegmentTemplate")[0],
      r = I(e, "SegmentList")[0],
      n = r && I(r, "SegmentURL").map((f) => U({ tag: "SegmentURL" }, F(f))),
      i = I(e, "SegmentBase")[0],
      u = r || t,
      a = u && I(u, "SegmentTimeline")[0],
      s = r || i || t,
      l = s && I(s, "Initialization")[0],
      o = t && F(t);
    o && l
      ? (o.initialization = l && F(l))
      : o && o.initialization && (o.initialization = { sourceURL: o.initialization });
    let m = {
      template: o,
      segmentTimeline: a && I(a, "S").map((f) => F(f)),
      list: r && U(F(r), { segmentUrls: n, initialization: F(l) }),
      base: i && U(F(i), { initialization: F(l) }),
    };
    return (
      Object.keys(m).forEach((f) => {
        m[f] || delete m[f];
      }),
      m
    );
  },
  nu = (e, t, r) => (n) => {
    let i = I(n, "BaseURL"),
      u = pt(t, i),
      a = U(e, F(n)),
      s = Xt(n);
    return u.map((l) => ({ segmentInfo: U(r, s), attributes: U(a, l) }));
  },
  iu = (e) =>
    e.reduce((t, r) => {
      let n = F(r);
      n.schemeIdUri && (n.schemeIdUri = n.schemeIdUri.toLowerCase());
      let i = ru[n.schemeIdUri];
      if (i) {
        t[i] = { attributes: n };
        let u = I(r, "cenc:pssh")[0];
        if (u) {
          let a = He(u);
          t[i].pssh = a && Ne(a);
        }
      }
      return t;
    }, {}),
  uu = (e) => {
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((r) => {
        let n, i;
        return (
          (i = r),
          /^CC\d=/.test(r) ? ([n, i] = r.split("=")) : /^CC\d$/.test(r) && (n = r),
          { channel: n, language: i }
        );
      });
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((r) => {
        let n = { channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0 };
        if (/=/.test(r)) {
          let [i, u = ""] = r.split("=");
          ((n.channel = i),
            (n.language = r),
            u.split(",").forEach((a) => {
              let [s, l] = a.split(":");
              s === "lang"
                ? (n.language = l)
                : s === "er"
                  ? (n.easyReader = Number(l))
                  : s === "war"
                    ? (n.aspectRatio = Number(l))
                    : s === "3D" && (n["3D"] = Number(l));
            }));
        } else n.language = r;
        return (n.channel && (n.channel = "SERVICE" + n.channel), n);
      });
  },
  au = (e) =>
    Te(
      I(e.node, "EventStream").map((t) => {
        let r = F(t),
          n = r.schemeIdUri;
        return I(t, "Event").map((i) => {
          let u = F(i),
            a = u.presentationTime || 0,
            s = r.timescale || 1,
            l = u.duration || 0,
            o = a / s + e.attributes.start;
          return {
            schemeIdUri: n,
            value: r.value,
            id: u.id,
            start: o,
            end: o + l / s,
            messageData: He(i) || u.messageData,
            contentEncoding: r.contentEncoding,
            presentationTimeOffset: r.presentationTimeOffset || 0,
          };
        });
      }),
    ),
  su = (e, t, r) => (n) => {
    let i = F(n),
      u = pt(t, I(n, "BaseURL")),
      a = I(n, "Role")[0],
      s = { role: F(a) },
      l = U(e, i, s),
      o = I(n, "Accessibility")[0],
      m = uu(F(o));
    m && (l = U(l, { captionServices: m }));
    let f = I(n, "Label")[0];
    if (f && f.childNodes.length) {
      let y = f.childNodes[0].nodeValue.trim();
      l = U(l, { label: y });
    }
    let g = iu(I(n, "ContentProtection"));
    Object.keys(g).length && (l = U(l, { contentProtection: g }));
    let E = Xt(n),
      D = I(n, "Representation"),
      c = U(r, E);
    return Te(D.map(nu(l, u, c)));
  },
  ou = (e, t) => (r, n) => {
    let i = pt(t, I(r.node, "BaseURL")),
      u = U(e, { periodStart: r.attributes.start });
    typeof r.attributes.duration == "number" && (u.periodDuration = r.attributes.duration);
    let a = I(r.node, "AdaptationSet"),
      s = Xt(r.node);
    return Te(a.map(su(u, i, s)));
  },
  lu = (e, t) => {
    if (
      (e.length > 1 &&
        t({
          type: "warn",
          message: "The MPD manifest should contain no more than one ContentSteering tag",
        }),
      !e.length)
    )
      return null;
    let r = U({ serverURL: He(e[0]) }, F(e[0]));
    return ((r.queryBeforeStart = r.queryBeforeStart === "true"), r);
  },
  cu = ({ attributes: e, priorPeriodAttributes: t, mpdType: r }) =>
    typeof e.start == "number"
      ? e.start
      : t && typeof t.start == "number" && typeof t.duration == "number"
        ? t.start + t.duration
        : !t && r === "static"
          ? 0
          : null,
  mu = (e, t = {}) => {
    let {
        manifestUri: r = "",
        NOW: n = Date.now(),
        clientOffset: i = 0,
        eventHandler: u = function () {},
      } = t,
      a = I(e, "Period");
    if (!a.length) throw new Error(Xe.INVALID_NUMBER_OF_PERIOD);
    let s = I(e, "Location"),
      l = F(e),
      o = pt([{ baseUrl: r }], I(e, "BaseURL")),
      m = I(e, "ContentSteering");
    ((l.type = l.type || "static"),
      (l.sourceDuration = l.mediaPresentationDuration || 0),
      (l.NOW = n),
      (l.clientOffset = i),
      s.length && (l.locations = s.map(He)));
    let f = [];
    return (
      a.forEach((g, E) => {
        let D = F(g),
          c = f[E - 1];
        ((D.start = cu({
          attributes: D,
          priorPeriodAttributes: c ? c.attributes : null,
          mpdType: l.type,
        })),
          f.push({ node: g, attributes: D }));
      }),
      {
        locations: l.locations,
        contentSteeringInfo: lu(m, u),
        representationInfo: Te(f.map(ou(l, o))),
        eventStream: Te(f.map(au)),
      }
    );
  },
  fu = (e) => {
    if (e === "") throw new Error(Xe.DASH_EMPTY_MANIFEST);
    let t = new un.DOMParser(),
      r,
      n;
    try {
      ((r = t.parseFromString(e, "application/xml")),
        (n = r && r.documentElement.tagName === "MPD" ? r.documentElement : null));
    } catch {}
    if (!n || (n && n.getElementsByTagName("parsererror").length > 0))
      throw new Error(Xe.DASH_INVALID_XML);
    return n;
  };
var mn = (e, t = {}) => {
  let r = mu(fu(e), t),
    n = Zi(r.representationInfo);
  return zi({
    dashPlaylists: n,
    locations: r.locations,
    contentSteering: r.contentSteeringInfo,
    sidxMapping: t.sidxMapping,
    previousManifest: t.previousManifest,
    eventStream: r.eventStream,
  });
};
function pu(e) {
  for (let t in e) {
    let r = e[t];
    for (let n in r) {
      let i = r[n];
      if ("playlists" in i) return x(i.playlists);
    }
  }
  return S;
}
function fn(e) {
  try {
    return du(e);
  } catch (t) {
    return R(`Error parsing MPD: ${t}`);
  }
}
function du(e) {
  let t = mn(e),
    r = t.duration || "unknown",
    n = gu(t),
    i = [],
    u = t.playlists;
  if (u.length == 0) {
    let s = pu(t.mediaGroups.AUDIO);
    s.isSome() && (u = s.value);
  }
  let a = 0;
  for (let s of u) {
    if (!s.attributes.CODECS) continue;
    let l = Ke(s.attributes.CODECS);
    if (l.isNone() && ((l = Ht(s.attributes.CODECS)), l.isNone())) continue;
    let o = S;
    s.attributes.RESOLUTION &&
      s.attributes.RESOLUTION.width &&
      s.attributes.RESOLUTION.height &&
      (o = x({ width: s.attributes.RESOLUTION.width, height: s.attributes.RESOLUTION.height }));
    let m;
    s.attributes.BANDWIDTH
      ? (m = { bitrate: x(s.attributes.BANDWIDTH), size: o })
      : (m = { bitrate: S, size: o });
    let f = { quality: m, demuxer: l.value, index: a };
    (i.push(f), a++);
  }
  return ((i = Qe(i)), Je(i) ? G([i, r, n]) : R("No playlists"));
}
function gu(e) {
  for (let t of e.playlists) if (t.contentProtection && tt(t.contentProtection)) return !0;
  return !1;
}
var pn = !1,
  dn = "",
  _e;
function hu() {
  let e = window.location.href.match(/(?:m\.)?ok\.ru\/(?:video|live|videoembed)\/([^\/]+)/);
  if (e && e.length > 1) {
    _e = e[1];
    return;
  }
  let t = Z(window.location.href);
  if (t.isSome()) {
    let r = t.value.searchParams.get("st.mvId");
    r && (_e = r);
  }
}
async function Au(e, t) {
  let r = await fetch(t);
  if (!r.ok) return S;
  let n = await r.text(),
    i = fn(n);
  if (i.isErr()) return (console.warn(`MPD playlist error ${i.error}`), S);
  let [u, a, s] = i.value,
    l = {
      type: "mpd_playlist",
      playlist: u,
      has_drm: s,
      hash: `media_hash_${vt(t.href)}`,
      discovery_timestamp_ms: Date.now(),
      duration: a,
      is_youtube: !1,
      filename: S,
      sent_headers: new Headers(),
      initiator: Z(window.location.href),
      prefered_entry: S,
      title: x(e.title),
      thumbnail_url: Z(e.thumbnail_url),
      master_url: t,
      cache: "default",
    };
  return x(l);
}
async function Du(e, t) {
  let r = await fetch(t);
  if (!r.ok) return S;
  let n = await r.text(),
    i = jt(n, t, S);
  if (i.isOk()) {
    let u = i.value,
      { duration: a } = await Kt(u),
      s = {
        is_youtube: !1,
        master_url: t,
        prefered_entry: S,
        initiator: Z(window.location.href),
        hash: `media_hash_${vt(t.href)}`,
        sent_headers: new Headers(),
        thumbnail_url: Z(e.thumbnail_url),
        filename: S,
        title: x(e.title),
        type: "m3u8_playlist",
        playlist: u,
        duration: a,
        discovery_timestamp_ms: Date.now(),
        has_drm: !1,
        cache: "default",
      };
    return x(s);
  }
  return S;
}
function Eu() {
  let e = gn(document);
  return e ? x(e) : S;
}
async function yu(e) {
  let t = `https://ok.ru/videoembed/${e}?nochat=1`,
    n = await (await fetch(t)).text(),
    i = bu(n);
  return i ? x(i) : S;
}
function gn(e) {
  let t = e.querySelectorAll("div[data-options]");
  for (let r of t) {
    let n = r.getAttribute("data-options");
    if (!n) continue;
    let i = JSON.parse(n);
    if (!i || !i.flashvars || !i.flashvars.metadata) continue;
    let u;
    if (
      (typeof i.flashvars.metadata == "string"
        ? (u = JSON.parse(i.flashvars.metadata))
        : (u = i.flashvars.metadata),
      !u || !u.movie)
    )
      continue;
    let a = u.movie.title,
      s = u.movie.poster,
      l = S;
    u.hlsManifestUrl
      ? (l = x(u.hlsManifestUrl))
      : u.ondemandHls
        ? (l = x(u.ondemandHls))
        : u.hlsMasterPlaylistUrl && (l = x(u.hlsMasterPlaylistUrl));
    let o = S;
    if ((u.dashSepUrl && (o = x(u.dashSepUrl)), !(!a || !s || !l)))
      return { title: a, thumbnail_url: s, m3u8_url: l, dash_url: o };
  }
}
function bu(e) {
  let r = new DOMParser().parseFromString(e, "text/html");
  return gn(r);
}
async function vu() {
  if (!pn)
    for (pn = !0; ; ) {
      if ((hu(), !_e || _e == dn)) {
        await new Promise((t) => setTimeout(t, 300));
        continue;
      }
      dn = _e;
      let e;
      if ((document.location.href.includes("m.ok") ? (e = Eu()) : (e = await yu(_e)), e.isSome())) {
        let t = S;
        (e.value.m3u8_url.isSome()
          ? (t = await Du(e.value, new URL(e.value.m3u8_url.value)))
          : e.value.dash_url.isSome() && (t = await Au(e.value, new URL(e.value.dash_url.value))),
          t.isSome() && er({ name: "on_media", data: { media: K(t.value) } }));
      }
    }
}
vu();
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)

mpd-parser/dist/mpd-parser.es.js:
  (*! @name mpd-parser @version 1.3.1 @license Apache-2.0 *)
*/
