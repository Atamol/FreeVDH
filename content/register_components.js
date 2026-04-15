var zd = Object.create;
var vo = Object.defineProperty;
var Zs = Object.getOwnPropertyDescriptor;
var Dd = Object.getOwnPropertyNames;
var Id = Object.getPrototypeOf,
  Td = Object.prototype.hasOwnProperty;
var Ad = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports),
  Ge = (e, o) => {
    for (var r in o) vo(e, r, { get: o[r], enumerable: !0 });
  },
  Pd = (e, o, r, i) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let t of Dd(o))
        !Td.call(e, t) &&
          t !== r &&
          vo(e, t, { get: () => o[t], enumerable: !(i = Zs(o, t)) || i.enumerable });
    return e;
  };
var re = (e, o, r) => (
  (r = e != null ? zd(Id(e)) : {}),
  Pd(o || !e || !e.__esModule ? vo(r, "default", { value: e, enumerable: !0 }) : r, e)
);
var c = (e, o, r, i) => {
  for (var t = i > 1 ? void 0 : i ? Zs(o, r) : o, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (t = (i ? a(o, r, t) : a(t)) || t);
  return (i && t && vo(o, r, t), t);
};
var ee = Ad((Hr, Vs) => {
  (function (e, o) {
    if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], o);
    else if (typeof Hr < "u") o(Vs);
    else {
      var r = { exports: {} };
      (o(r), (e.browser = r.exports));
    }
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Hr, function (e) {
    "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
      throw new Error("This script should only be loaded in a browser extension.");
    if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
      e.exports = globalThis.browser;
    else {
      let o = "The message port closed before a response was received.",
        r = (i) => {
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
            constructor($, M = void 0) {
              (super(M), (this.createItem = $));
            }
            get($) {
              return (this.has($) || this.set($, this.createItem($)), super.get($));
            }
          }
          let a = (v) => v && typeof v == "object" && typeof v.then == "function",
            s =
              (v, $) =>
              (...M) => {
                i.runtime.lastError
                  ? v.reject(new Error(i.runtime.lastError.message))
                  : $.singleCallbackArg || (M.length <= 1 && $.singleCallbackArg !== !1)
                    ? v.resolve(M[0])
                    : v.resolve(M);
              },
            u = (v) => (v == 1 ? "argument" : "arguments"),
            l = (v, $) =>
              function (H, ...W) {
                if (W.length < $.minArgs)
                  throw new Error(
                    `Expected at least ${$.minArgs} ${u($.minArgs)} for ${v}(), got ${W.length}`,
                  );
                if (W.length > $.maxArgs)
                  throw new Error(
                    `Expected at most ${$.maxArgs} ${u($.maxArgs)} for ${v}(), got ${W.length}`,
                  );
                return new Promise((se, he) => {
                  if ($.fallbackToNoCallback)
                    try {
                      H[v](...W, s({ resolve: se, reject: he }, $));
                    } catch (U) {
                      (console.warn(
                        `${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                        U,
                      ),
                        H[v](...W),
                        ($.fallbackToNoCallback = !1),
                        ($.noCallback = !0),
                        se());
                    }
                  else
                    $.noCallback
                      ? (H[v](...W), se())
                      : H[v](...W, s({ resolve: se, reject: he }, $));
                });
              },
            p = (v, $, M) =>
              new Proxy($, {
                apply(H, W, se) {
                  return M.call(W, v, ...se);
                },
              }),
            f = Function.call.bind(Object.prototype.hasOwnProperty),
            g = (v, $ = {}, M = {}) => {
              let H = Object.create(null),
                W = {
                  has(he, U) {
                    return U in v || U in H;
                  },
                  get(he, U, ge) {
                    if (U in H) return H[U];
                    if (!(U in v)) return;
                    let Y = v[U];
                    if (typeof Y == "function")
                      if (typeof $[U] == "function") Y = p(v, v[U], $[U]);
                      else if (f(M, U)) {
                        let dt = l(U, M[U]);
                        Y = p(v, v[U], dt);
                      } else Y = Y.bind(v);
                    else if (typeof Y == "object" && Y !== null && (f($, U) || f(M, U)))
                      Y = g(Y, $[U], M[U]);
                    else if (f(M, "*")) Y = g(Y, $[U], M["*"]);
                    else
                      return (
                        Object.defineProperty(H, U, {
                          configurable: !0,
                          enumerable: !0,
                          get() {
                            return v[U];
                          },
                          set(dt) {
                            v[U] = dt;
                          },
                        }),
                        Y
                      );
                    return ((H[U] = Y), Y);
                  },
                  set(he, U, ge, Y) {
                    return (U in H ? (H[U] = ge) : (v[U] = ge), !0);
                  },
                  defineProperty(he, U, ge) {
                    return Reflect.defineProperty(H, U, ge);
                  },
                  deleteProperty(he, U) {
                    return Reflect.deleteProperty(H, U);
                  },
                },
                se = Object.create(v);
              return new Proxy(se, W);
            },
            m = (v) => ({
              addListener($, M, ...H) {
                $.addListener(v.get(M), ...H);
              },
              hasListener($, M) {
                return $.hasListener(v.get(M));
              },
              removeListener($, M) {
                $.removeListener(v.get(M));
              },
            }),
            b = new n((v) =>
              typeof v != "function"
                ? v
                : function (M) {
                    let H = g(M, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    v(H);
                  },
            ),
            z = new n((v) =>
              typeof v != "function"
                ? v
                : function (M, H, W) {
                    let se = !1,
                      he,
                      U = new Promise((zt) => {
                        he = function (Ie) {
                          ((se = !0), zt(Ie));
                        };
                      }),
                      ge;
                    try {
                      ge = v(M, H, he);
                    } catch (zt) {
                      ge = Promise.reject(zt);
                    }
                    let Y = ge !== !0 && a(ge);
                    if (ge !== !0 && !Y && !se) return !1;
                    let dt = (zt) => {
                      zt.then(
                        (Ie) => {
                          W(Ie);
                        },
                        (Ie) => {
                          let Rr;
                          (Ie && (Ie instanceof Error || typeof Ie.message == "string")
                            ? (Rr = Ie.message)
                            : (Rr = "An unexpected error occurred"),
                            W({ __mozWebExtensionPolyfillReject__: !0, message: Rr }));
                        },
                      ).catch((Ie) => {
                        console.error("Failed to send onMessage rejected reply", Ie);
                      });
                    };
                    return (dt(Y ? ge : U), !0);
                  },
            ),
            O = ({ reject: v, resolve: $ }, M) => {
              i.runtime.lastError
                ? i.runtime.lastError.message === o
                  ? $()
                  : v(new Error(i.runtime.lastError.message))
                : M && M.__mozWebExtensionPolyfillReject__
                  ? v(new Error(M.message))
                  : $(M);
            },
            x = (v, $, M, ...H) => {
              if (H.length < $.minArgs)
                throw new Error(
                  `Expected at least ${$.minArgs} ${u($.minArgs)} for ${v}(), got ${H.length}`,
                );
              if (H.length > $.maxArgs)
                throw new Error(
                  `Expected at most ${$.maxArgs} ${u($.maxArgs)} for ${v}(), got ${H.length}`,
                );
              return new Promise((W, se) => {
                let he = O.bind(null, { resolve: W, reject: se });
                (H.push(he), M.sendMessage(...H));
              });
            },
            D = {
              devtools: { network: { onRequestFinished: m(b) } },
              runtime: {
                onMessage: m(z),
                onMessageExternal: m(z),
                sendMessage: x.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
              },
              tabs: { sendMessage: x.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
            },
            P = {
              clear: { minArgs: 1, maxArgs: 1 },
              get: { minArgs: 1, maxArgs: 1 },
              set: { minArgs: 1, maxArgs: 1 },
            };
          return (
            (t.privacy = { network: { "*": P }, services: { "*": P }, websites: { "*": P } }),
            g(i, D, t)
          );
        };
      e.exports = r(chrome);
    }
  });
});
var Is = re(ee(), 1);
var Yu = re(ee(), 1);
var y = {};
Ge(y, {
  $brand: () => yo,
  $input: () => ta,
  $output: () => ea,
  NEVER: () => gm,
  ZodAny: () => iu,
  ZodArray: () => lu,
  ZodBase64: () => _s,
  ZodBase64URL: () => ms,
  ZodBigInt: () => uo,
  ZodBigIntFormat: () => hs,
  ZodBoolean: () => lo,
  ZodCIDRv4: () => ds,
  ZodCIDRv6: () => cs,
  ZodCUID: () => rs,
  ZodCUID2: () => ns,
  ZodCatch: () => Iu,
  ZodCustom: () => br,
  ZodDate: () => gr,
  ZodDefault: () => xu,
  ZodDiscriminatedUnion: () => uu,
  ZodE164: () => ps,
  ZodEmail: () => Qa,
  ZodEmoji: () => ts,
  ZodEnum: () => ao,
  ZodError: () => __,
  ZodFile: () => yu,
  ZodGUID: () => dr,
  ZodIPv4: () => ls,
  ZodIPv6: () => us,
  ZodISODate: () => ar,
  ZodISODateTime: () => ir,
  ZodISODuration: () => lr,
  ZodISOTime: () => sr,
  ZodIntersection: () => du,
  ZodIssueCode: () => fm,
  ZodJWT: () => fs,
  ZodKSUID: () => ss,
  ZodLazy: () => ju,
  ZodLiteral: () => gu,
  ZodMap: () => pu,
  ZodNaN: () => Au,
  ZodNanoID: () => os,
  ZodNever: () => au,
  ZodNonOptional: () => ks,
  ZodNull: () => ru,
  ZodNullable: () => wu,
  ZodNumber: () => so,
  ZodNumberFormat: () => bt,
  ZodObject: () => vr,
  ZodOptional: () => xs,
  ZodPipe: () => Ss,
  ZodPrefault: () => Su,
  ZodPromise: () => Lu,
  ZodReadonly: () => Pu,
  ZodRealError: () => yt,
  ZodRecord: () => bs,
  ZodSet: () => fu,
  ZodString: () => fr,
  ZodStringFormat: () => F,
  ZodSuccess: () => Du,
  ZodSymbol: () => tu,
  ZodTemplateLiteral: () => Mu,
  ZodTransform: () => bu,
  ZodTuple: () => _u,
  ZodType: () => L,
  ZodULID: () => is,
  ZodURL: () => es,
  ZodUUID: () => Ce,
  ZodUndefined: () => ou,
  ZodUnion: () => ys,
  ZodUnknown: () => gs,
  ZodVoid: () => su,
  ZodXID: () => as,
  _ZodString: () => Xa,
  _default: () => ku,
  any: () => q_,
  array: () => vs,
  base64: () => E_,
  base64url: () => M_,
  bigint: () => H_,
  boolean: () => eu,
  catch: () => Tu,
  check: () => Nu,
  cidrv4: () => A_,
  cidrv6: () => P_,
  clone: () => le,
  coerce: () => $s,
  config: () => B,
  core: () => He,
  cuid: () => k_,
  cuid2: () => S_,
  custom: () => dm,
  date: () => W_,
  discriminatedUnion: () => X_,
  e164: () => j_,
  email: () => p_,
  emoji: () => w_,
  endsWith: () => Xt,
  enum: () => hu,
  file: () => nm,
  flattenError: () => Nt,
  float32: () => L_,
  float64: () => N_,
  formatError: () => Ut,
  function: () => Ha,
  getErrorMap: () => ym,
  globalRegistry: () => Ae,
  gt: () => Ue,
  gte: () => ie,
  guid: () => f_,
  includes: () => Yt,
  instanceof: () => cm,
  int: () => Ja,
  int32: () => U_,
  int64: () => C_,
  intersection: () => cu,
  ipv4: () => I_,
  ipv6: () => T_,
  iso: () => ur,
  json: () => mm,
  jwt: () => O_,
  keyof: () => K_,
  ksuid: () => D_,
  lazy: () => Ou,
  length: () => vt,
  literal: () => vu,
  locales: () => Ft,
  looseObject: () => J_,
  lowercase: () => Kt,
  lt: () => Ne,
  lte: () => ve,
  map: () => tm,
  maxLength: () => gt,
  maxSize: () => ht,
  mime: () => Qt,
  minLength: () => We,
  minSize: () => ot,
  multipleOf: () => tt,
  nan: () => sm,
  nanoid: () => x_,
  nativeEnum: () => rm,
  negative: () => Pa,
  never: () => hr,
  nonnegative: () => Ma,
  nonoptional: () => zu,
  nonpositive: () => Ea,
  normalize: () => eo,
  null: () => nu,
  nullable: () => mr,
  nullish: () => im,
  number: () => Ql,
  object: () => G_,
  optional: () => _r,
  overwrite: () => Re,
  parse: () => Ba,
  parseAsync: () => Wa,
  partialRecord: () => em,
  pipe: () => pr,
  positive: () => Aa,
  prefault: () => $u,
  preprocess: () => pm,
  prettifyError: () => Qr,
  promise: () => um,
  property: () => ja,
  readonly: () => Eu,
  record: () => mu,
  refine: () => Uu,
  regex: () => Wt,
  regexes: () => Qe,
  registry: () => Lo,
  safeParse: () => Ka,
  safeParseAsync: () => Ga,
  set: () => om,
  setErrorMap: () => vm,
  size: () => Bt,
  startsWith: () => Jt,
  strictObject: () => Y_,
  string: () => Ya,
  stringbool: () => _m,
  success: () => am,
  superRefine: () => Ru,
  symbol: () => V_,
  templateLiteral: () => lm,
  toJSONSchema: () => Ca,
  toLowerCase: () => oo,
  toUpperCase: () => ro,
  transform: () => ws,
  treeifyError: () => Xr,
  trim: () => to,
  tuple: () => Q_,
  uint32: () => R_,
  uint64: () => Z_,
  ulid: () => $_,
  undefined: () => F_,
  union: () => yr,
  unknown: () => cr,
  uppercase: () => Gt,
  url: () => b_,
  uuid: () => h_,
  uuidv4: () => g_,
  uuidv6: () => v_,
  uuidv7: () => y_,
  void: () => B_,
  xid: () => z_,
});
var He = {};
Ge(He, {
  $ZodAny: () => Di,
  $ZodArray: () => Zt,
  $ZodAsyncError: () => Te,
  $ZodBase64: () => vi,
  $ZodBase64URL: () => yi,
  $ZodBigInt: () => Mo,
  $ZodBigIntFormat: () => ki,
  $ZodBoolean: () => Ct,
  $ZodCIDRv4: () => fi,
  $ZodCIDRv6: () => hi,
  $ZodCUID: () => ni,
  $ZodCUID2: () => ii,
  $ZodCatch: () => Wi,
  $ZodCheck: () => q,
  $ZodCheckBigIntFormat: () => jn,
  $ZodCheckEndsWith: () => Bn,
  $ZodCheckGreaterThan: () => To,
  $ZodCheckIncludes: () => Fn,
  $ZodCheckLengthEquals: () => Hn,
  $ZodCheckLessThan: () => Io,
  $ZodCheckLowerCase: () => Zn,
  $ZodCheckMaxLength: () => Un,
  $ZodCheckMaxSize: () => On,
  $ZodCheckMimeType: () => Kn,
  $ZodCheckMinLength: () => Rn,
  $ZodCheckMinSize: () => Ln,
  $ZodCheckMultipleOf: () => En,
  $ZodCheckNumberFormat: () => Mn,
  $ZodCheckOverwrite: () => Gn,
  $ZodCheckProperty: () => Wn,
  $ZodCheckRegex: () => Cn,
  $ZodCheckSizeEquals: () => Nn,
  $ZodCheckStartsWith: () => qn,
  $ZodCheckStringFormat: () => mt,
  $ZodCheckUpperCase: () => Vn,
  $ZodCustom: () => Qi,
  $ZodDate: () => Ai,
  $ZodDefault: () => Vi,
  $ZodDiscriminatedUnion: () => Ei,
  $ZodE164: () => bi,
  $ZodEmail: () => ei,
  $ZodEmoji: () => oi,
  $ZodEnum: () => Ni,
  $ZodError: () => Lt,
  $ZodFile: () => Ri,
  $ZodFunction: () => nr,
  $ZodGUID: () => Xn,
  $ZodIPv4: () => mi,
  $ZodIPv6: () => pi,
  $ZodISODate: () => di,
  $ZodISODateTime: () => ui,
  $ZodISODuration: () => _i,
  $ZodISOTime: () => ci,
  $ZodIntersection: () => Mi,
  $ZodJWT: () => wi,
  $ZodKSUID: () => li,
  $ZodLazy: () => Xi,
  $ZodLiteral: () => Ui,
  $ZodMap: () => Oi,
  $ZodNaN: () => Ki,
  $ZodNanoID: () => ri,
  $ZodNever: () => Ii,
  $ZodNonOptional: () => qi,
  $ZodNull: () => zi,
  $ZodNullable: () => Zi,
  $ZodNumber: () => Eo,
  $ZodNumberFormat: () => xi,
  $ZodObject: () => Pi,
  $ZodOptional: () => Ci,
  $ZodPipe: () => Vt,
  $ZodPrefault: () => Fi,
  $ZodPromise: () => Ji,
  $ZodReadonly: () => Gi,
  $ZodRealError: () => _t,
  $ZodRecord: () => ji,
  $ZodRegistry: () => pt,
  $ZodSet: () => Li,
  $ZodString: () => Ht,
  $ZodStringFormat: () => V,
  $ZodSuccess: () => Bi,
  $ZodSymbol: () => Si,
  $ZodTemplateLiteral: () => Yi,
  $ZodTransform: () => Hi,
  $ZodTuple: () => et,
  $ZodType: () => E,
  $ZodULID: () => ai,
  $ZodURL: () => ti,
  $ZodUUID: () => Qn,
  $ZodUndefined: () => $i,
  $ZodUnion: () => jo,
  $ZodUnknown: () => Be,
  $ZodVoid: () => Ti,
  $ZodXID: () => si,
  $brand: () => yo,
  $constructor: () => d,
  $input: () => ta,
  $output: () => ea,
  Doc: () => Rt,
  JSONSchema: () => Yl,
  JSONSchemaGenerator: () => io,
  _any: () => Sa,
  _array: () => no,
  _base64: () => er,
  _base64url: () => tr,
  _bigint: () => ga,
  _boolean: () => fa,
  _catch: () => i_,
  _cidrv4: () => Xo,
  _cidrv6: () => Qo,
  _coercedBigint: () => va,
  _coercedBoolean: () => ha,
  _coercedDate: () => Ia,
  _coercedNumber: () => ua,
  _coercedString: () => ra,
  _cuid: () => qo,
  _cuid2: () => Bo,
  _custom: () => Na,
  _date: () => Da,
  _default: () => o_,
  _discriminatedUnion: () => qc,
  _e164: () => or,
  _email: () => No,
  _emoji: () => Vo,
  _endsWith: () => Xt,
  _enum: () => Yc,
  _file: () => La,
  _float32: () => ca,
  _float64: () => _a,
  _gt: () => Ue,
  _gte: () => ie,
  _guid: () => qt,
  _includes: () => Yt,
  _int: () => da,
  _int32: () => ma,
  _int64: () => ya,
  _intersection: () => Bc,
  _ipv4: () => Yo,
  _ipv6: () => Jo,
  _isoDate: () => ia,
  _isoDateTime: () => na,
  _isoDuration: () => sa,
  _isoTime: () => aa,
  _jwt: () => rr,
  _ksuid: () => Go,
  _lazy: () => u_,
  _length: () => vt,
  _literal: () => Xc,
  _lowercase: () => Kt,
  _lt: () => Ne,
  _lte: () => ve,
  _map: () => Kc,
  _max: () => ve,
  _maxLength: () => gt,
  _maxSize: () => ht,
  _mime: () => Qt,
  _min: () => ie,
  _minLength: () => We,
  _minSize: () => ot,
  _multipleOf: () => tt,
  _nan: () => Ta,
  _nanoid: () => Fo,
  _nativeEnum: () => Jc,
  _negative: () => Pa,
  _never: () => $a,
  _nonnegative: () => Ma,
  _nonoptional: () => r_,
  _nonpositive: () => Ea,
  _normalize: () => eo,
  _null: () => ka,
  _nullable: () => t_,
  _number: () => la,
  _optional: () => e_,
  _overwrite: () => Re,
  _parse: () => wo,
  _parseAsync: () => ko,
  _pipe: () => a_,
  _positive: () => Aa,
  _promise: () => d_,
  _property: () => ja,
  _readonly: () => s_,
  _record: () => Wc,
  _refine: () => Ua,
  _regex: () => Wt,
  _safeParse: () => $o,
  _safeParseAsync: () => zo,
  _set: () => Gc,
  _size: () => Bt,
  _startsWith: () => Jt,
  _string: () => oa,
  _stringbool: () => Ra,
  _success: () => n_,
  _symbol: () => wa,
  _templateLiteral: () => l_,
  _toLowerCase: () => oo,
  _toUpperCase: () => ro,
  _transform: () => Qc,
  _trim: () => to,
  _tuple: () => Oa,
  _uint32: () => pa,
  _uint64: () => ba,
  _ulid: () => Wo,
  _undefined: () => xa,
  _union: () => Fc,
  _unknown: () => ft,
  _uppercase: () => Gt,
  _url: () => Zo,
  _uuid: () => Uo,
  _uuidv4: () => Ro,
  _uuidv6: () => Ho,
  _uuidv7: () => Co,
  _void: () => za,
  _xid: () => Ko,
  clone: () => le,
  config: () => B,
  flattenError: () => Nt,
  formatError: () => Ut,
  function: () => Ha,
  globalConfig: () => Dt,
  globalRegistry: () => Ae,
  isValidBase64: () => gi,
  isValidBase64URL: () => ul,
  isValidJWT: () => dl,
  locales: () => Ft,
  parse: () => xo,
  parseAsync: () => So,
  prettifyError: () => Qr,
  regexes: () => Qe,
  registry: () => Lo,
  safeParse: () => en,
  safeParseAsync: () => tn,
  toDotPath: () => qs,
  toJSONSchema: () => Ca,
  treeifyError: () => Xr,
  util: () => k,
  version: () => Yn,
});
function d(e, o, r) {
  function i(s, u) {
    var l;
    (Object.defineProperty(s, "_zod", { value: s._zod ?? {}, enumerable: !1 }),
      (l = s._zod).traits ?? (l.traits = new Set()),
      s._zod.traits.add(e),
      o(s, u));
    for (let p in a.prototype)
      p in s || Object.defineProperty(s, p, { value: a.prototype[p].bind(s) });
    ((s._zod.constr = a), (s._zod.def = u));
  }
  let t = r?.Parent ?? Object;
  class n extends t {}
  Object.defineProperty(n, "name", { value: e });
  function a(s) {
    var u;
    let l = r?.Parent ? new n() : this;
    (i(l, s), (u = l._zod).deferred ?? (u.deferred = []));
    for (let p of l._zod.deferred) p();
    return l;
  }
  return (
    Object.defineProperty(a, "init", { value: i }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (s) => (r?.Parent && s instanceof r.Parent ? !0 : s?._zod?.traits?.has(e)),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
var yo = Symbol("zod_brand"),
  Te = class extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  },
  Dt = {};
function B(e) {
  return (e && Object.assign(Dt, e), Dt);
}
var k = {};
Ge(k, {
  BIGINT_FORMAT_RANGES: () => Yr,
  Class: () => Zr,
  NUMBER_FORMAT_RANGES: () => Gr,
  aborted: () => Je,
  allowsEval: () => Br,
  assert: () => Ld,
  assertEqual: () => Ed,
  assertIs: () => jd,
  assertNever: () => Od,
  assertNotEqual: () => Md,
  assignProp: () => qr,
  cached: () => At,
  cleanEnum: () => Kd,
  cleanRegex: () => Pt,
  clone: () => le,
  createTransparentProxy: () => Cd,
  defineLazy: () => C,
  esc: () => Ye,
  escapeRegex: () => Le,
  extend: () => Fd,
  finalizeIssue: () => ue,
  floatSafeRemainder: () => Fr,
  getElementAtPath: () => Nd,
  getEnumValues: () => Tt,
  getLengthableOrigin: () => Ot,
  getParsedType: () => Hd,
  getSizableOrigin: () => jt,
  isObject: () => ct,
  isPlainObject: () => Et,
  issue: () => Jr,
  joinValues: () => h,
  jsonStringifyReplacer: () => Vr,
  merge: () => qd,
  normalizeParams: () => w,
  nullish: () => qe,
  numKeys: () => Rd,
  omit: () => Vd,
  optionalKeys: () => Kr,
  partial: () => Bd,
  pick: () => Zd,
  prefixIssues: () => ne,
  primitiveTypes: () => Wr,
  promiseAllObject: () => Ud,
  propertyKeyTypes: () => Mt,
  randomString: () => bo,
  required: () => Wd,
  stringifyPrimitive: () => S,
  unwrapMessage: () => It,
});
function Ed(e) {
  return e;
}
function Md(e) {
  return e;
}
function jd(e) {}
function Od(e) {
  throw new Error();
}
function Ld(e) {}
function Tt(e) {
  let o = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, t]) => o.indexOf(+i) === -1)
    .map(([i, t]) => t);
}
function h(e, o = "|") {
  return e.map((r) => S(r)).join(o);
}
function Vr(e, o) {
  return typeof o == "bigint" ? o.toString() : o;
}
function At(e) {
  return {
    get value() {
      {
        let r = e();
        return (Object.defineProperty(this, "value", { value: r }), r);
      }
      throw new Error("cached value already set");
    },
  };
}
function qe(e) {
  return e == null;
}
function Pt(e) {
  let o = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(o, r);
}
function Fr(e, o) {
  let r = (e.toString().split(".")[1] || "").length,
    i = (o.toString().split(".")[1] || "").length,
    t = r > i ? r : i,
    n = Number.parseInt(e.toFixed(t).replace(".", "")),
    a = Number.parseInt(o.toFixed(t).replace(".", ""));
  return (n % a) / 10 ** t;
}
function C(e, o, r) {
  Object.defineProperty(e, o, {
    get() {
      {
        let t = r();
        return ((e[o] = t), t);
      }
      throw new Error("cached value already set");
    },
    set(t) {
      Object.defineProperty(e, o, { value: t });
    },
    configurable: !0,
  });
}
function qr(e, o, r) {
  Object.defineProperty(e, o, { value: r, writable: !0, enumerable: !0, configurable: !0 });
}
function Nd(e, o) {
  return o ? o.reduce((r, i) => r?.[i], e) : e;
}
function Ud(e) {
  let o = Object.keys(e),
    r = o.map((i) => e[i]);
  return Promise.all(r).then((i) => {
    let t = {};
    for (let n = 0; n < o.length; n++) t[o[n]] = i[n];
    return t;
  });
}
function bo(e = 10) {
  let o = "abcdefghijklmnopqrstuvwxyz",
    r = "";
  for (let i = 0; i < e; i++) r += o[Math.floor(Math.random() * o.length)];
  return r;
}
function Ye(e) {
  return JSON.stringify(e);
}
function ct(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var Br = At(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Et(e) {
  if (ct(e) === !1) return !1;
  let o = e.constructor;
  if (o === void 0) return !0;
  let r = o.prototype;
  return !(ct(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Rd(e) {
  let o = 0;
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && o++;
  return o;
}
var Hd = (e) => {
    let o = typeof e;
    switch (o) {
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
        throw new Error(`Unknown data type: ${o}`);
    }
  },
  Mt = new Set(["string", "number", "symbol"]),
  Wr = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function Le(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function le(e, o, r) {
  let i = new e._zod.constr(o ?? e._zod.def);
  return ((!o || r?.parent) && (i._zod.parent = e), i);
}
function w(e) {
  let o = e;
  if (!o) return {};
  if (typeof o == "string") return { error: () => o };
  if (o?.message !== void 0) {
    if (o?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    o.error = o.message;
  }
  return (delete o.message, typeof o.error == "string" ? { ...o, error: () => o.error } : o);
}
function Cd(e) {
  let o;
  return new Proxy(
    {},
    {
      get(r, i, t) {
        return (o ?? (o = e()), Reflect.get(o, i, t));
      },
      set(r, i, t, n) {
        return (o ?? (o = e()), Reflect.set(o, i, t, n));
      },
      has(r, i) {
        return (o ?? (o = e()), Reflect.has(o, i));
      },
      deleteProperty(r, i) {
        return (o ?? (o = e()), Reflect.deleteProperty(o, i));
      },
      ownKeys(r) {
        return (o ?? (o = e()), Reflect.ownKeys(o));
      },
      getOwnPropertyDescriptor(r, i) {
        return (o ?? (o = e()), Reflect.getOwnPropertyDescriptor(o, i));
      },
      defineProperty(r, i, t) {
        return (o ?? (o = e()), Reflect.defineProperty(o, i, t));
      },
    },
  );
}
function S(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Kr(e) {
  return Object.keys(e).filter(
    (o) => e[o]._zod.optin === "optional" && e[o]._zod.optout === "optional",
  );
}
var Gr = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Yr = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Zd(e, o) {
  let r = {},
    i = e._zod.def;
  for (let t in o) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    o[t] && (r[t] = i.shape[t]);
  }
  return le(e, { ...e._zod.def, shape: r, checks: [] });
}
function Vd(e, o) {
  let r = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let t in o) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    o[t] && delete r[t];
  }
  return le(e, { ...e._zod.def, shape: r, checks: [] });
}
function Fd(e, o) {
  let r = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...o };
      return (qr(this, "shape", i), i);
    },
    checks: [],
  };
  return le(e, r);
}
function qd(e, o) {
  return le(e, {
    ...e._zod.def,
    get shape() {
      let r = { ...e._zod.def.shape, ...o._zod.def.shape };
      return (qr(this, "shape", r), r);
    },
    catchall: o._zod.def.catchall,
    checks: [],
  });
}
function Bd(e, o, r) {
  let i = o._zod.def.shape,
    t = { ...i };
  if (r)
    for (let n in r) {
      if (!(n in i)) throw new Error(`Unrecognized key: "${n}"`);
      r[n] && (t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n]);
    }
  else for (let n in i) t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n];
  return le(o, { ...o._zod.def, shape: t, checks: [] });
}
function Wd(e, o, r) {
  let i = o._zod.def.shape,
    t = { ...i };
  if (r)
    for (let n in r) {
      if (!(n in t)) throw new Error(`Unrecognized key: "${n}"`);
      r[n] && (t[n] = new e({ type: "nonoptional", innerType: i[n] }));
    }
  else for (let n in i) t[n] = new e({ type: "nonoptional", innerType: i[n] });
  return le(o, { ...o._zod.def, shape: t, checks: [] });
}
function Je(e, o = 0) {
  for (let r = o; r < e.issues.length; r++) if (e.issues[r].continue !== !0) return !0;
  return !1;
}
function ne(e, o) {
  return o.map((r) => {
    var i;
    return ((i = r).path ?? (i.path = []), r.path.unshift(e), r);
  });
}
function It(e) {
  return typeof e == "string" ? e : e?.message;
}
function ue(e, o, r) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let t =
      It(e.inst?._zod.def?.error?.(e)) ??
      It(o?.error?.(e)) ??
      It(r.customError?.(e)) ??
      It(r.localeError?.(e)) ??
      "Invalid input";
    i.message = t;
  }
  return (delete i.inst, delete i.continue, o?.reportInput || delete i.input, i);
}
function jt(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function Ot(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Jr(...e) {
  let [o, r, i] = e;
  return typeof o == "string" ? { message: o, code: "custom", input: r, inst: i } : { ...o };
}
function Kd(e) {
  return Object.entries(e)
    .filter(([o, r]) => Number.isNaN(Number.parseInt(o, 10)))
    .map((o) => o[1]);
}
var Zr = class {
  constructor(...o) {}
};
var Fs = (e, o) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: o, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(o, Vr, 2);
        },
        enumerable: !0,
      }));
  },
  Lt = d("$ZodError", Fs),
  _t = d("$ZodError", Fs, { Parent: Error });
function Nt(e, o = (r) => r.message) {
  let r = {},
    i = [];
  for (let t of e.issues)
    t.path.length > 0
      ? ((r[t.path[0]] = r[t.path[0]] || []), r[t.path[0]].push(o(t)))
      : i.push(o(t));
  return { formErrors: i, fieldErrors: r };
}
function Ut(e, o) {
  let r =
      o ||
      function (n) {
        return n.message;
      },
    i = { _errors: [] },
    t = (n) => {
      for (let a of n.issues)
        if (a.code === "invalid_union" && a.errors.length) a.errors.map((s) => t({ issues: s }));
        else if (a.code === "invalid_key") t({ issues: a.issues });
        else if (a.code === "invalid_element") t({ issues: a.issues });
        else if (a.path.length === 0) i._errors.push(r(a));
        else {
          let s = i,
            u = 0;
          for (; u < a.path.length; ) {
            let l = a.path[u];
            (u === a.path.length - 1
              ? ((s[l] = s[l] || { _errors: [] }), s[l]._errors.push(r(a)))
              : (s[l] = s[l] || { _errors: [] }),
              (s = s[l]),
              u++);
          }
        }
    };
  return (t(e), i);
}
function Xr(e, o) {
  let r =
      o ||
      function (n) {
        return n.message;
      },
    i = { errors: [] },
    t = (n, a = []) => {
      var s, u;
      for (let l of n.issues)
        if (l.code === "invalid_union" && l.errors.length)
          l.errors.map((p) => t({ issues: p }, l.path));
        else if (l.code === "invalid_key") t({ issues: l.issues }, l.path);
        else if (l.code === "invalid_element") t({ issues: l.issues }, l.path);
        else {
          let p = [...a, ...l.path];
          if (p.length === 0) {
            i.errors.push(r(l));
            continue;
          }
          let f = i,
            g = 0;
          for (; g < p.length; ) {
            let m = p[g],
              b = g === p.length - 1;
            (typeof m == "string"
              ? (f.properties ?? (f.properties = {}),
                (s = f.properties)[m] ?? (s[m] = { errors: [] }),
                (f = f.properties[m]))
              : (f.items ?? (f.items = []),
                (u = f.items)[m] ?? (u[m] = { errors: [] }),
                (f = f.items[m])),
              b && f.errors.push(r(l)),
              g++);
          }
        }
    };
  return (t(e), i);
}
function qs(e) {
  let o = [];
  for (let r of e)
    typeof r == "number"
      ? o.push(`[${r}]`)
      : typeof r == "symbol"
        ? o.push(`[${JSON.stringify(String(r))}]`)
        : /[^\w$]/.test(r)
          ? o.push(`[${JSON.stringify(r)}]`)
          : (o.length && o.push("."), o.push(r));
  return o.join("");
}
function Qr(e) {
  let o = [],
    r = [...e.issues].sort((i, t) => i.path.length - t.path.length);
  for (let i of r)
    (o.push(`\u2716 ${i.message}`), i.path?.length && o.push(`  \u2192 at ${qs(i.path)}`));
  return o.join(`
`);
}
var wo = (e) => (o, r, i, t) => {
    let n = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = o._zod.run({ value: r, issues: [] }, n);
    if (a instanceof Promise) throw new Te();
    if (a.issues.length) {
      let s = new (t?.Err ?? e)(a.issues.map((u) => ue(u, n, B())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  xo = wo(_t),
  ko = (e) => async (o, r, i, t) => {
    let n = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = o._zod.run({ value: r, issues: [] }, n);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let s = new (t?.Err ?? e)(a.issues.map((u) => ue(u, n, B())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  So = ko(_t),
  $o = (e) => (o, r, i) => {
    let t = i ? { ...i, async: !1 } : { async: !1 },
      n = o._zod.run({ value: r, issues: [] }, t);
    if (n instanceof Promise) throw new Te();
    return n.issues.length
      ? { success: !1, error: new (e ?? Lt)(n.issues.map((a) => ue(a, t, B()))) }
      : { success: !0, data: n.value };
  },
  en = $o(_t),
  zo = (e) => async (o, r, i) => {
    let t = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      n = o._zod.run({ value: r, issues: [] }, t);
    return (
      n instanceof Promise && (n = await n),
      n.issues.length
        ? { success: !1, error: new e(n.issues.map((a) => ue(a, t, B()))) }
        : { success: !0, data: n.value }
    );
  },
  tn = zo(_t);
var Qe = {};
Ge(Qe, {
  _emoji: () => Bs,
  base64: () => gn,
  base64url: () => Do,
  bigint: () => Sn,
  boolean: () => Dn,
  browserEmail: () => rc,
  cidrv4: () => fn,
  cidrv6: () => hn,
  cuid: () => on,
  cuid2: () => rn,
  date: () => bn,
  datetime: () => xn,
  domain: () => nc,
  duration: () => un,
  e164: () => yn,
  email: () => cn,
  emoji: () => _n,
  extendedDuration: () => Yd,
  guid: () => dn,
  hostname: () => vn,
  html5Email: () => ec,
  integer: () => $n,
  ipv4: () => mn,
  ipv6: () => pn,
  ksuid: () => sn,
  lowercase: () => An,
  nanoid: () => ln,
  null: () => In,
  number: () => zn,
  rfc5322Email: () => tc,
  string: () => kn,
  time: () => wn,
  ulid: () => nn,
  undefined: () => Tn,
  unicodeEmail: () => oc,
  uppercase: () => Pn,
  uuid: () => Xe,
  uuid4: () => Jd,
  uuid6: () => Xd,
  uuid7: () => Qd,
  xid: () => an,
});
var on = /^[cC][^\s-]{8,}$/,
  rn = /^[0-9a-z]+$/,
  nn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  an = /^[0-9a-vA-V]{20}$/,
  sn = /^[A-Za-z0-9]{27}$/,
  ln = /^[a-zA-Z0-9_-]{21}$/,
  un =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  Yd =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  dn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Xe = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  Jd = Xe(4),
  Xd = Xe(6),
  Qd = Xe(7),
  cn =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  ec =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  tc =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  oc = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  rc =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Bs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function _n() {
  return new RegExp(Bs, "u");
}
var mn =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  pn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  fn =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  hn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  gn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Do = /^[A-Za-z0-9_-]*$/,
  vn = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  nc = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  yn = /^\+(?:[0-9]){6,14}[0-9]$/,
  Ws =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  bn = new RegExp(`^${Ws}$`);
function Ks(e) {
  let o = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (o = `${o}\\.\\d{${e.precision}}`)
      : e.precision == null && (o = `${o}(\\.\\d+)?`),
    o
  );
}
function wn(e) {
  return new RegExp(`^${Ks(e)}$`);
}
function xn(e) {
  let o = `${Ws}T${Ks(e)}`,
    r = [];
  return (
    r.push(e.local ? "Z?" : "Z"),
    e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (o = `${o}(${r.join("|")})`),
    new RegExp(`^${o}$`)
  );
}
var kn = (e) => {
    let o = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${o}$`);
  },
  Sn = /^\d+n?$/,
  $n = /^\d+$/,
  zn = /^-?\d+(?:\.\d+)?/i,
  Dn = /true|false/i,
  In = /null/i;
var Tn = /undefined/i;
var An = /^[^A-Z]*$/,
  Pn = /^[^a-z]*$/;
var q = d("$ZodCheck", (e, o) => {
    var r;
    (e._zod ?? (e._zod = {}), (e._zod.def = o), (r = e._zod).onattach ?? (r.onattach = []));
  }),
  Ys = { number: "number", bigint: "bigint", object: "date" },
  Io = d("$ZodCheckLessThan", (e, o) => {
    q.init(e, o);
    let r = Ys[typeof o.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        n = (o.inclusive ? t.maximum : t.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      o.value < n && (o.inclusive ? (t.maximum = o.value) : (t.exclusiveMaximum = o.value));
    }),
      (e._zod.check = (i) => {
        (o.inclusive ? i.value <= o.value : i.value < o.value) ||
          i.issues.push({
            origin: r,
            code: "too_big",
            maximum: o.value,
            input: i.value,
            inclusive: o.inclusive,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  To = d("$ZodCheckGreaterThan", (e, o) => {
    q.init(e, o);
    let r = Ys[typeof o.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        n = (o.inclusive ? t.minimum : t.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      o.value > n && (o.inclusive ? (t.minimum = o.value) : (t.exclusiveMinimum = o.value));
    }),
      (e._zod.check = (i) => {
        (o.inclusive ? i.value >= o.value : i.value > o.value) ||
          i.issues.push({
            origin: r,
            code: "too_small",
            minimum: o.value,
            input: i.value,
            inclusive: o.inclusive,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  En = d("$ZodCheckMultipleOf", (e, o) => {
    (q.init(e, o),
      e._zod.onattach.push((r) => {
        var i;
        (i = r._zod.bag).multipleOf ?? (i.multipleOf = o.value);
      }),
      (e._zod.check = (r) => {
        if (typeof r.value != typeof o.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint"
          ? r.value % o.value === BigInt(0)
          : Fr(r.value, o.value) === 0) ||
          r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: o.value,
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Mn = d("$ZodCheckNumberFormat", (e, o) => {
    (q.init(e, o), (o.format = o.format || "float64"));
    let r = o.format?.includes("int"),
      i = r ? "int" : "number",
      [t, n] = Gr[o.format];
    (e._zod.onattach.push((a) => {
      let s = a._zod.bag;
      ((s.format = o.format), (s.minimum = t), (s.maximum = n), r && (s.pattern = $n));
    }),
      (e._zod.check = (a) => {
        let s = a.value;
        if (r) {
          if (!Number.isInteger(s)) {
            a.issues.push({
              expected: i,
              format: o.format,
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
                  continue: !o.abort,
                })
              : a.issues.push({
                  input: s,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !o.abort,
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
            continue: !o.abort,
          }),
          s > n &&
            a.issues.push({ origin: "number", input: s, code: "too_big", maximum: n, inst: e }));
      }));
  }),
  jn = d("$ZodCheckBigIntFormat", (e, o) => {
    q.init(e, o);
    let [r, i] = Yr[o.format];
    (e._zod.onattach.push((t) => {
      let n = t._zod.bag;
      ((n.format = o.format), (n.minimum = r), (n.maximum = i));
    }),
      (e._zod.check = (t) => {
        let n = t.value;
        (n < r &&
          t.issues.push({
            origin: "bigint",
            input: n,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: e,
            continue: !o.abort,
          }),
          n > i &&
            t.issues.push({ origin: "bigint", input: n, code: "too_big", maximum: i, inst: e }));
      }));
  }),
  On = d("$ZodCheckMaxSize", (e, o) => {
    (q.init(e, o),
      (e._zod.when = (r) => {
        let i = r.value;
        return !qe(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        o.maximum < i && (r._zod.bag.maximum = o.maximum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        i.size <= o.maximum ||
          r.issues.push({
            origin: jt(i),
            code: "too_big",
            maximum: o.maximum,
            input: i,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Ln = d("$ZodCheckMinSize", (e, o) => {
    (q.init(e, o),
      (e._zod.when = (r) => {
        let i = r.value;
        return !qe(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        o.minimum > i && (r._zod.bag.minimum = o.minimum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        i.size >= o.minimum ||
          r.issues.push({
            origin: jt(i),
            code: "too_small",
            minimum: o.minimum,
            input: i,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Nn = d("$ZodCheckSizeEquals", (e, o) => {
    (q.init(e, o),
      (e._zod.when = (r) => {
        let i = r.value;
        return !qe(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        ((i.minimum = o.size), (i.maximum = o.size), (i.size = o.size));
      }),
      (e._zod.check = (r) => {
        let i = r.value,
          t = i.size;
        if (t === o.size) return;
        let n = t > o.size;
        r.issues.push({
          origin: jt(i),
          ...(n ? { code: "too_big", maximum: o.size } : { code: "too_small", minimum: o.size }),
          input: r.value,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  Un = d("$ZodCheckMaxLength", (e, o) => {
    (q.init(e, o),
      (e._zod.when = (r) => {
        let i = r.value;
        return !qe(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        o.maximum < i && (r._zod.bag.maximum = o.maximum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        if (i.length <= o.maximum) return;
        let n = Ot(i);
        r.issues.push({
          origin: n,
          code: "too_big",
          maximum: o.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  Rn = d("$ZodCheckMinLength", (e, o) => {
    (q.init(e, o),
      (e._zod.when = (r) => {
        let i = r.value;
        return !qe(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        o.minimum > i && (r._zod.bag.minimum = o.minimum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        if (i.length >= o.minimum) return;
        let n = Ot(i);
        r.issues.push({
          origin: n,
          code: "too_small",
          minimum: o.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  Hn = d("$ZodCheckLengthEquals", (e, o) => {
    (q.init(e, o),
      (e._zod.when = (r) => {
        let i = r.value;
        return !qe(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        ((i.minimum = o.length), (i.maximum = o.length), (i.length = o.length));
      }),
      (e._zod.check = (r) => {
        let i = r.value,
          t = i.length;
        if (t === o.length) return;
        let n = Ot(i),
          a = t > o.length;
        r.issues.push({
          origin: n,
          ...(a
            ? { code: "too_big", maximum: o.length }
            : { code: "too_small", minimum: o.length }),
          input: r.value,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  mt = d("$ZodCheckStringFormat", (e, o) => {
    var r;
    (q.init(e, o),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        ((t.format = o.format),
          o.pattern && (t.patterns ?? (t.patterns = new Set()), t.patterns.add(o.pattern)));
      }),
      (r = e._zod).check ??
        (r.check = (i) => {
          if (!o.pattern) throw new Error("Not implemented.");
          ((o.pattern.lastIndex = 0),
            !o.pattern.test(i.value) &&
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: o.format,
                input: i.value,
                ...(o.pattern ? { pattern: o.pattern.toString() } : {}),
                inst: e,
                continue: !o.abort,
              }));
        }));
  }),
  Cn = d("$ZodCheckRegex", (e, o) => {
    (mt.init(e, o),
      (e._zod.check = (r) => {
        ((o.pattern.lastIndex = 0),
          !o.pattern.test(r.value) &&
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: o.pattern.toString(),
              inst: e,
              continue: !o.abort,
            }));
      }));
  }),
  Zn = d("$ZodCheckLowerCase", (e, o) => {
    (o.pattern ?? (o.pattern = An), mt.init(e, o));
  }),
  Vn = d("$ZodCheckUpperCase", (e, o) => {
    (o.pattern ?? (o.pattern = Pn), mt.init(e, o));
  }),
  Fn = d("$ZodCheckIncludes", (e, o) => {
    q.init(e, o);
    let r = Le(o.includes),
      i = new RegExp(typeof o.position == "number" ? `^.{${o.position}}${r}` : r);
    ((o.pattern = i),
      e._zod.onattach.push((t) => {
        let n = t._zod.bag;
        (n.patterns ?? (n.patterns = new Set()), n.patterns.add(i));
      }),
      (e._zod.check = (t) => {
        t.value.includes(o.includes, o.position) ||
          t.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: o.includes,
            input: t.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  qn = d("$ZodCheckStartsWith", (e, o) => {
    q.init(e, o);
    let r = new RegExp(`^${Le(o.prefix)}.*`);
    (o.pattern ?? (o.pattern = r),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
      }),
      (e._zod.check = (i) => {
        i.value.startsWith(o.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: o.prefix,
            input: i.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Bn = d("$ZodCheckEndsWith", (e, o) => {
    q.init(e, o);
    let r = new RegExp(`.*${Le(o.suffix)}$`);
    (o.pattern ?? (o.pattern = r),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
      }),
      (e._zod.check = (i) => {
        i.value.endsWith(o.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: o.suffix,
            input: i.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  });
function Gs(e, o, r) {
  e.issues.length && o.issues.push(...ne(r, e.issues));
}
var Wn = d("$ZodCheckProperty", (e, o) => {
    (q.init(e, o),
      (e._zod.check = (r) => {
        let i = o.schema._zod.run({ value: r.value[o.property], issues: [] }, {});
        if (i instanceof Promise) return i.then((t) => Gs(t, r, o.property));
        Gs(i, r, o.property);
      }));
  }),
  Kn = d("$ZodCheckMimeType", (e, o) => {
    q.init(e, o);
    let r = new Set(o.mime);
    (e._zod.onattach.push((i) => {
      i._zod.bag.mime = o.mime;
    }),
      (e._zod.check = (i) => {
        r.has(i.value.type) ||
          i.issues.push({
            code: "invalid_value",
            values: o.mime,
            input: i.value.type,
            path: ["type"],
            inst: e,
          });
      }));
  }),
  Gn = d("$ZodCheckOverwrite", (e, o) => {
    (q.init(e, o),
      (e._zod.check = (r) => {
        r.value = o.tx(r.value);
      }));
  });
var Rt = class {
  constructor(o = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = o));
  }
  indented(o) {
    ((this.indent += 1), o(this), (this.indent -= 1));
  }
  write(o) {
    if (typeof o == "function") {
      (o(this, { execution: "sync" }), o(this, { execution: "async" }));
      return;
    }
    let i = o
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
    let o = Function,
      r = this?.args,
      t = [...(this?.content ?? [""]).map((n) => `  ${n}`)];
    return new o(
      ...r,
      t.join(`
`),
    );
  }
};
var Yn = { major: 4, minor: 0, patch: 0 };
var E = d("$ZodType", (e, o) => {
    var r;
    (e ?? (e = {}),
      (e._zod.id = o.type + "_" + bo(10)),
      (e._zod.def = o),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Yn));
    let i = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (let t of i) for (let n of t._zod.onattach) n(e);
    if (i.length === 0)
      ((r = e._zod).deferred ?? (r.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let t = (n, a, s) => {
        let u = Je(n),
          l;
        for (let p of a) {
          if (p._zod.when) {
            if (!p._zod.when(n)) continue;
          } else if (u) continue;
          let f = n.issues.length,
            g = p._zod.check(n);
          if (g instanceof Promise && s?.async === !1) throw new Te();
          if (l || g instanceof Promise)
            l = (l ?? Promise.resolve()).then(async () => {
              (await g, n.issues.length !== f && (u || (u = Je(n, f))));
            });
          else {
            if (n.issues.length === f) continue;
            u || (u = Je(n, f));
          }
        }
        return l ? l.then(() => n) : n;
      };
      e._zod.run = (n, a) => {
        let s = e._zod.parse(n, a);
        if (s instanceof Promise) {
          if (a.async === !1) throw new Te();
          return s.then((u) => t(u, i, a));
        }
        return t(s, i, a);
      };
    }
    e["~standard"] = {
      validate: (t) => {
        try {
          let n = en(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch {
          return tn(e, t).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  Ht = d("$ZodString", (e, o) => {
    (E.init(e, o),
      (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? kn(e._zod.bag)),
      (e._zod.parse = (r, i) => {
        if (o.coerce)
          try {
            r.value = String(r.value);
          } catch {}
        return (
          typeof r.value == "string" ||
            r.issues.push({ expected: "string", code: "invalid_type", input: r.value, inst: e }),
          r
        );
      }));
  }),
  V = d("$ZodStringFormat", (e, o) => {
    (mt.init(e, o), Ht.init(e, o));
  }),
  Xn = d("$ZodGUID", (e, o) => {
    (o.pattern ?? (o.pattern = dn), V.init(e, o));
  }),
  Qn = d("$ZodUUID", (e, o) => {
    if (o.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[o.version];
      if (i === void 0) throw new Error(`Invalid UUID version: "${o.version}"`);
      o.pattern ?? (o.pattern = Xe(i));
    } else o.pattern ?? (o.pattern = Xe());
    V.init(e, o);
  }),
  ei = d("$ZodEmail", (e, o) => {
    (o.pattern ?? (o.pattern = cn), V.init(e, o));
  }),
  ti = d("$ZodURL", (e, o) => {
    (V.init(e, o),
      (e._zod.check = (r) => {
        try {
          let i = new URL(r.value);
          (o.hostname &&
            ((o.hostname.lastIndex = 0),
            o.hostname.test(i.hostname) ||
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: vn.source,
                input: r.value,
                inst: e,
                continue: !o.abort,
              })),
            o.protocol &&
              ((o.protocol.lastIndex = 0),
              o.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: o.protocol.source,
                  input: r.value,
                  inst: e,
                  continue: !o.abort,
                })));
          return;
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
        }
      }));
  }),
  oi = d("$ZodEmoji", (e, o) => {
    (o.pattern ?? (o.pattern = _n()), V.init(e, o));
  }),
  ri = d("$ZodNanoID", (e, o) => {
    (o.pattern ?? (o.pattern = ln), V.init(e, o));
  }),
  ni = d("$ZodCUID", (e, o) => {
    (o.pattern ?? (o.pattern = on), V.init(e, o));
  }),
  ii = d("$ZodCUID2", (e, o) => {
    (o.pattern ?? (o.pattern = rn), V.init(e, o));
  }),
  ai = d("$ZodULID", (e, o) => {
    (o.pattern ?? (o.pattern = nn), V.init(e, o));
  }),
  si = d("$ZodXID", (e, o) => {
    (o.pattern ?? (o.pattern = an), V.init(e, o));
  }),
  li = d("$ZodKSUID", (e, o) => {
    (o.pattern ?? (o.pattern = sn), V.init(e, o));
  }),
  ui = d("$ZodISODateTime", (e, o) => {
    (o.pattern ?? (o.pattern = xn(o)), V.init(e, o));
  }),
  di = d("$ZodISODate", (e, o) => {
    (o.pattern ?? (o.pattern = bn), V.init(e, o));
  }),
  ci = d("$ZodISOTime", (e, o) => {
    (o.pattern ?? (o.pattern = wn(o)), V.init(e, o));
  }),
  _i = d("$ZodISODuration", (e, o) => {
    (o.pattern ?? (o.pattern = un), V.init(e, o));
  }),
  mi = d("$ZodIPv4", (e, o) => {
    (o.pattern ?? (o.pattern = mn),
      V.init(e, o),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        i.format = "ipv4";
      }));
  }),
  pi = d("$ZodIPv6", (e, o) => {
    (o.pattern ?? (o.pattern = pn),
      V.init(e, o),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        i.format = "ipv6";
      }),
      (e._zod.check = (r) => {
        try {
          new URL(`http://[${r.value}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
        }
      }));
  }),
  fi = d("$ZodCIDRv4", (e, o) => {
    (o.pattern ?? (o.pattern = fn), V.init(e, o));
  }),
  hi = d("$ZodCIDRv6", (e, o) => {
    (o.pattern ?? (o.pattern = hn),
      V.init(e, o),
      (e._zod.check = (r) => {
        let [i, t] = r.value.split("/");
        try {
          if (!t) throw new Error();
          let n = Number(t);
          if (`${n}` !== t) throw new Error();
          if (n < 0 || n > 128) throw new Error();
          new URL(`http://[${i}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
        }
      }));
  });
function gi(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var vi = d("$ZodBase64", (e, o) => {
  (o.pattern ?? (o.pattern = gn),
    V.init(e, o),
    e._zod.onattach.push((r) => {
      r._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (r) => {
      gi(r.value) ||
        r.issues.push({
          code: "invalid_format",
          format: "base64",
          input: r.value,
          inst: e,
          continue: !o.abort,
        });
    }));
});
function ul(e) {
  if (!Do.test(e)) return !1;
  let o = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    r = o.padEnd(Math.ceil(o.length / 4) * 4, "=");
  return gi(r);
}
var yi = d("$ZodBase64URL", (e, o) => {
    (o.pattern ?? (o.pattern = Do),
      V.init(e, o),
      e._zod.onattach.push((r) => {
        r._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (r) => {
        ul(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  bi = d("$ZodE164", (e, o) => {
    (o.pattern ?? (o.pattern = yn), V.init(e, o));
  });
function dl(e, o = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) return !1;
    let [i] = r,
      t = JSON.parse(atob(i));
    return !(("typ" in t && t?.typ !== "JWT") || !t.alg || (o && (!("alg" in t) || t.alg !== o)));
  } catch {
    return !1;
  }
}
var wi = d("$ZodJWT", (e, o) => {
    (V.init(e, o),
      (e._zod.check = (r) => {
        dl(r.value, o.alg) ||
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Eo = d("$ZodNumber", (e, o) => {
    (E.init(e, o),
      (e._zod.pattern = e._zod.bag.pattern ?? zn),
      (e._zod.parse = (r, i) => {
        if (o.coerce)
          try {
            r.value = Number(r.value);
          } catch {}
        let t = r.value;
        if (typeof t == "number" && !Number.isNaN(t) && Number.isFinite(t)) return r;
        let n =
          typeof t == "number"
            ? Number.isNaN(t)
              ? "NaN"
              : Number.isFinite(t)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: t,
            inst: e,
            ...(n ? { received: n } : {}),
          }),
          r
        );
      }));
  }),
  xi = d("$ZodNumber", (e, o) => {
    (Mn.init(e, o), Eo.init(e, o));
  }),
  Ct = d("$ZodBoolean", (e, o) => {
    (E.init(e, o),
      (e._zod.pattern = Dn),
      (e._zod.parse = (r, i) => {
        if (o.coerce)
          try {
            r.value = !!r.value;
          } catch {}
        let t = r.value;
        return (
          typeof t == "boolean" ||
            r.issues.push({ expected: "boolean", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  Mo = d("$ZodBigInt", (e, o) => {
    (E.init(e, o),
      (e._zod.pattern = Sn),
      (e._zod.parse = (r, i) => {
        if (o.coerce)
          try {
            r.value = BigInt(r.value);
          } catch {}
        let { value: t } = r;
        return (
          typeof t == "bigint" ||
            r.issues.push({ expected: "bigint", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  ki = d("$ZodBigInt", (e, o) => {
    (jn.init(e, o), Mo.init(e, o));
  }),
  Si = d("$ZodSymbol", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          typeof t == "symbol" ||
            r.issues.push({ expected: "symbol", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  $i = d("$ZodUndefined", (e, o) => {
    (E.init(e, o),
      (e._zod.pattern = Tn),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          typeof t > "u" ||
            r.issues.push({ expected: "undefined", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  zi = d("$ZodNull", (e, o) => {
    (E.init(e, o),
      (e._zod.pattern = In),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          t === null ||
            r.issues.push({ expected: "null", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  Di = d("$ZodAny", (e, o) => {
    (E.init(e, o), (e._zod.parse = (r) => r));
  }),
  Be = d("$ZodUnknown", (e, o) => {
    (E.init(e, o), (e._zod.parse = (r) => r));
  }),
  Ii = d("$ZodNever", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => (
        r.issues.push({ expected: "never", code: "invalid_type", input: r.value, inst: e }),
        r
      )));
  }),
  Ti = d("$ZodVoid", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          typeof t > "u" ||
            r.issues.push({ expected: "void", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  Ai = d("$ZodDate", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        if (o.coerce)
          try {
            r.value = new Date(r.value);
          } catch {}
        let t = r.value,
          n = t instanceof Date;
        return (
          (n && !Number.isNaN(t.getTime())) ||
            r.issues.push({
              expected: "date",
              code: "invalid_type",
              input: t,
              ...(n ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          r
        );
      }));
  });
function Xs(e, o, r) {
  (e.issues.length && o.issues.push(...ne(r, e.issues)), (o.value[r] = e.value));
}
var Zt = d("$ZodArray", (e, o) => {
  (E.init(e, o),
    (e._zod.parse = (r, i) => {
      let t = r.value;
      if (!Array.isArray(t))
        return (r.issues.push({ expected: "array", code: "invalid_type", input: t, inst: e }), r);
      r.value = Array(t.length);
      let n = [];
      for (let a = 0; a < t.length; a++) {
        let s = t[a],
          u = o.element._zod.run({ value: s, issues: [] }, i);
        u instanceof Promise ? n.push(u.then((l) => Xs(l, r, a))) : Xs(u, r, a);
      }
      return n.length ? Promise.all(n).then(() => r) : r;
    }));
});
function Ao(e, o, r) {
  (e.issues.length && o.issues.push(...ne(r, e.issues)), (o.value[r] = e.value));
}
function Qs(e, o, r, i) {
  e.issues.length
    ? i[r] === void 0
      ? r in i
        ? (o.value[r] = void 0)
        : (o.value[r] = e.value)
      : o.issues.push(...ne(r, e.issues))
    : e.value === void 0
      ? r in i && (o.value[r] = void 0)
      : (o.value[r] = e.value);
}
var Pi = d("$ZodObject", (e, o) => {
  E.init(e, o);
  let r = At(() => {
    let f = Object.keys(o.shape);
    for (let m of f)
      if (!(o.shape[m] instanceof E))
        throw new Error(`Invalid element at key "${m}": expected a Zod schema`);
    let g = Kr(o.shape);
    return {
      shape: o.shape,
      keys: f,
      keySet: new Set(f),
      numKeys: f.length,
      optionalKeys: new Set(g),
    };
  });
  C(e._zod, "propValues", () => {
    let f = o.shape,
      g = {};
    for (let m in f) {
      let b = f[m]._zod;
      if (b.values) {
        g[m] ?? (g[m] = new Set());
        for (let z of b.values) g[m].add(z);
      }
    }
    return g;
  });
  let i = (f) => {
      let g = new Rt(["shape", "payload", "ctx"]),
        { keys: m, optionalKeys: b } = r.value,
        z = (D) => {
          let P = Ye(D);
          return `shape[${P}]._zod.run({ value: input[${P}], issues: [] }, ctx)`;
        };
      g.write("const input = payload.value;");
      let O = Object.create(null);
      for (let D of m) O[D] = bo(15);
      g.write("const newResult = {}");
      for (let D of m)
        if (b.has(D)) {
          let P = O[D];
          g.write(`const ${P} = ${z(D)};`);
          let v = Ye(D);
          g.write(`
        if (${P}.issues.length) {
          if (input[${v}] === undefined) {
            if (${v} in input) {
              newResult[${v}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${P}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${v}, ...iss.path] : [${v}],
              }))
            );
          }
        } else if (${P}.value === undefined) {
          if (${v} in input) newResult[${v}] = undefined;
        } else {
          newResult[${v}] = ${P}.value;
        }
        `);
        } else {
          let P = O[D];
          (g.write(`const ${P} = ${z(D)};`),
            g.write(`
          if (${P}.issues.length) payload.issues = payload.issues.concat(${P}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Ye(D)}, ...iss.path] : [${Ye(D)}]
          })));`),
            g.write(`newResult[${Ye(D)}] = ${P}.value`));
        }
      (g.write("payload.value = newResult;"), g.write("return payload;"));
      let x = g.compile();
      return (D, P) => x(f, D, P);
    },
    t,
    n = ct,
    a = !Dt.jitless,
    u = a && Br.value,
    { catchall: l } = o,
    p;
  e._zod.parse = (f, g) => {
    p ?? (p = r.value);
    let m = f.value;
    if (!n(m))
      return (f.issues.push({ expected: "object", code: "invalid_type", input: m, inst: e }), f);
    let b = [];
    if (a && u && g?.async === !1 && g.jitless !== !0) (t || (t = i(o.shape)), (f = t(f, g)));
    else {
      f.value = {};
      let P = p.shape;
      for (let v of p.keys) {
        let $ = P[v],
          M = $._zod.run({ value: m[v], issues: [] }, g),
          H = $._zod.optin === "optional" && $._zod.optout === "optional";
        M instanceof Promise
          ? b.push(M.then((W) => (H ? Qs(W, f, v, m) : Ao(W, f, v))))
          : H
            ? Qs(M, f, v, m)
            : Ao(M, f, v);
      }
    }
    if (!l) return b.length ? Promise.all(b).then(() => f) : f;
    let z = [],
      O = p.keySet,
      x = l._zod,
      D = x.def.type;
    for (let P of Object.keys(m)) {
      if (O.has(P)) continue;
      if (D === "never") {
        z.push(P);
        continue;
      }
      let v = x.run({ value: m[P], issues: [] }, g);
      v instanceof Promise ? b.push(v.then(($) => Ao($, f, P))) : Ao(v, f, P);
    }
    return (
      z.length && f.issues.push({ code: "unrecognized_keys", keys: z, input: m, inst: e }),
      b.length ? Promise.all(b).then(() => f) : f
    );
  };
});
function el(e, o, r, i) {
  for (let t of e) if (t.issues.length === 0) return ((o.value = t.value), o);
  return (
    o.issues.push({
      code: "invalid_union",
      input: o.value,
      inst: r,
      errors: e.map((t) => t.issues.map((n) => ue(n, i, B()))),
    }),
    o
  );
}
var jo = d("$ZodUnion", (e, o) => {
    (E.init(e, o),
      C(e._zod, "values", () => {
        if (o.options.every((r) => r._zod.values))
          return new Set(o.options.flatMap((r) => Array.from(r._zod.values)));
      }),
      C(e._zod, "pattern", () => {
        if (o.options.every((r) => r._zod.pattern)) {
          let r = o.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${r.map((i) => Pt(i.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (r, i) => {
        let t = !1,
          n = [];
        for (let a of o.options) {
          let s = a._zod.run({ value: r.value, issues: [] }, i);
          if (s instanceof Promise) (n.push(s), (t = !0));
          else {
            if (s.issues.length === 0) return s;
            n.push(s);
          }
        }
        return t ? Promise.all(n).then((a) => el(a, r, e, i)) : el(n, r, e, i);
      }));
  }),
  Ei = d("$ZodDiscriminatedUnion", (e, o) => {
    jo.init(e, o);
    let r = e._zod.parse;
    C(e._zod, "propValues", () => {
      let t = {};
      for (let n of o.options) {
        let a = n._zod.propValues;
        if (!a || Object.keys(a).length === 0)
          throw new Error(`Invalid discriminated union option at index "${o.options.indexOf(n)}"`);
        for (let [s, u] of Object.entries(a)) {
          t[s] || (t[s] = new Set());
          for (let l of u) t[s].add(l);
        }
      }
      return t;
    });
    let i = At(() => {
      let t = o.options,
        n = new Map();
      for (let a of t) {
        let s = a._zod.propValues[o.discriminator];
        if (!s || s.size === 0)
          throw new Error(`Invalid discriminated union option at index "${o.options.indexOf(a)}"`);
        for (let u of s) {
          if (n.has(u)) throw new Error(`Duplicate discriminator value "${String(u)}"`);
          n.set(u, a);
        }
      }
      return n;
    });
    e._zod.parse = (t, n) => {
      let a = t.value;
      if (!ct(a))
        return (t.issues.push({ code: "invalid_type", expected: "object", input: a, inst: e }), t);
      let s = i.value.get(a?.[o.discriminator]);
      return s
        ? s._zod.run(t, n)
        : o.unionFallback
          ? r(t, n)
          : (t.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [o.discriminator],
              inst: e,
            }),
            t);
    };
  }),
  Mi = d("$ZodIntersection", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let { value: t } = r,
          n = o.left._zod.run({ value: t, issues: [] }, i),
          a = o.right._zod.run({ value: t, issues: [] }, i);
        return n instanceof Promise || a instanceof Promise
          ? Promise.all([n, a]).then(([u, l]) => tl(r, u, l))
          : tl(r, n, a);
      }));
  });
function Jn(e, o) {
  if (e === o) return { valid: !0, data: e };
  if (e instanceof Date && o instanceof Date && +e == +o) return { valid: !0, data: e };
  if (Et(e) && Et(o)) {
    let r = Object.keys(o),
      i = Object.keys(e).filter((n) => r.indexOf(n) !== -1),
      t = { ...e, ...o };
    for (let n of i) {
      let a = Jn(e[n], o[n]);
      if (!a.valid) return { valid: !1, mergeErrorPath: [n, ...a.mergeErrorPath] };
      t[n] = a.data;
    }
    return { valid: !0, data: t };
  }
  if (Array.isArray(e) && Array.isArray(o)) {
    if (e.length !== o.length) return { valid: !1, mergeErrorPath: [] };
    let r = [];
    for (let i = 0; i < e.length; i++) {
      let t = e[i],
        n = o[i],
        a = Jn(t, n);
      if (!a.valid) return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function tl(e, o, r) {
  if (
    (o.issues.length && e.issues.push(...o.issues),
    r.issues.length && e.issues.push(...r.issues),
    Je(e))
  )
    return e;
  let i = Jn(o.value, r.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return ((e.value = i.data), e);
}
var et = d("$ZodTuple", (e, o) => {
  E.init(e, o);
  let r = o.items,
    i = r.length - [...r].reverse().findIndex((t) => t._zod.optin !== "optional");
  e._zod.parse = (t, n) => {
    let a = t.value;
    if (!Array.isArray(a))
      return (t.issues.push({ input: a, inst: e, expected: "tuple", code: "invalid_type" }), t);
    t.value = [];
    let s = [];
    if (!o.rest) {
      let l = a.length > r.length,
        p = a.length < i - 1;
      if (l || p)
        return (
          t.issues.push({
            input: a,
            inst: e,
            origin: "array",
            ...(l
              ? { code: "too_big", maximum: r.length }
              : { code: "too_small", minimum: r.length }),
          }),
          t
        );
    }
    let u = -1;
    for (let l of r) {
      if ((u++, u >= a.length && u >= i)) continue;
      let p = l._zod.run({ value: a[u], issues: [] }, n);
      p instanceof Promise ? s.push(p.then((f) => Po(f, t, u))) : Po(p, t, u);
    }
    if (o.rest) {
      let l = a.slice(r.length);
      for (let p of l) {
        u++;
        let f = o.rest._zod.run({ value: p, issues: [] }, n);
        f instanceof Promise ? s.push(f.then((g) => Po(g, t, u))) : Po(f, t, u);
      }
    }
    return s.length ? Promise.all(s).then(() => t) : t;
  };
});
function Po(e, o, r) {
  (e.issues.length && o.issues.push(...ne(r, e.issues)), (o.value[r] = e.value));
}
var ji = d("$ZodRecord", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        if (!Et(t))
          return (
            r.issues.push({ expected: "record", code: "invalid_type", input: t, inst: e }),
            r
          );
        let n = [];
        if (o.keyType._zod.values) {
          let a = o.keyType._zod.values;
          r.value = {};
          for (let u of a)
            if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
              let l = o.valueType._zod.run({ value: t[u], issues: [] }, i);
              l instanceof Promise
                ? n.push(
                    l.then((p) => {
                      (p.issues.length && r.issues.push(...ne(u, p.issues)),
                        (r.value[u] = p.value));
                    }),
                  )
                : (l.issues.length && r.issues.push(...ne(u, l.issues)), (r.value[u] = l.value));
            }
          let s;
          for (let u in t) a.has(u) || ((s = s ?? []), s.push(u));
          s &&
            s.length > 0 &&
            r.issues.push({ code: "unrecognized_keys", input: t, inst: e, keys: s });
        } else {
          r.value = {};
          for (let a of Reflect.ownKeys(t)) {
            if (a === "__proto__") continue;
            let s = o.keyType._zod.run({ value: a, issues: [] }, i);
            if (s instanceof Promise)
              throw new Error("Async schemas not supported in object keys currently");
            if (s.issues.length) {
              (r.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: s.issues.map((l) => ue(l, i, B())),
                input: a,
                path: [a],
                inst: e,
              }),
                (r.value[s.value] = s.value));
              continue;
            }
            let u = o.valueType._zod.run({ value: t[a], issues: [] }, i);
            u instanceof Promise
              ? n.push(
                  u.then((l) => {
                    (l.issues.length && r.issues.push(...ne(a, l.issues)),
                      (r.value[s.value] = l.value));
                  }),
                )
              : (u.issues.length && r.issues.push(...ne(a, u.issues)),
                (r.value[s.value] = u.value));
          }
        }
        return n.length ? Promise.all(n).then(() => r) : r;
      }));
  }),
  Oi = d("$ZodMap", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        if (!(t instanceof Map))
          return (r.issues.push({ expected: "map", code: "invalid_type", input: t, inst: e }), r);
        let n = [];
        r.value = new Map();
        for (let [a, s] of t) {
          let u = o.keyType._zod.run({ value: a, issues: [] }, i),
            l = o.valueType._zod.run({ value: s, issues: [] }, i);
          u instanceof Promise || l instanceof Promise
            ? n.push(
                Promise.all([u, l]).then(([p, f]) => {
                  ol(p, f, r, a, t, e, i);
                }),
              )
            : ol(u, l, r, a, t, e, i);
        }
        return n.length ? Promise.all(n).then(() => r) : r;
      }));
  });
function ol(e, o, r, i, t, n, a) {
  (e.issues.length &&
    (Mt.has(typeof i)
      ? r.issues.push(...ne(i, e.issues))
      : r.issues.push({
          origin: "map",
          code: "invalid_key",
          input: t,
          inst: n,
          issues: e.issues.map((s) => ue(s, a, B())),
        })),
    o.issues.length &&
      (Mt.has(typeof i)
        ? r.issues.push(...ne(i, o.issues))
        : r.issues.push({
            origin: "map",
            code: "invalid_element",
            input: t,
            inst: n,
            key: i,
            issues: o.issues.map((s) => ue(s, a, B())),
          })),
    r.value.set(e.value, o.value));
}
var Li = d("$ZodSet", (e, o) => {
  (E.init(e, o),
    (e._zod.parse = (r, i) => {
      let t = r.value;
      if (!(t instanceof Set))
        return (r.issues.push({ input: t, inst: e, expected: "set", code: "invalid_type" }), r);
      let n = [];
      r.value = new Set();
      for (let a of t) {
        let s = o.valueType._zod.run({ value: a, issues: [] }, i);
        s instanceof Promise ? n.push(s.then((u) => rl(u, r))) : rl(s, r);
      }
      return n.length ? Promise.all(n).then(() => r) : r;
    }));
});
function rl(e, o) {
  (e.issues.length && o.issues.push(...e.issues), o.value.add(e.value));
}
var Ni = d("$ZodEnum", (e, o) => {
    E.init(e, o);
    let r = Tt(o.entries);
    ((e._zod.values = new Set(r)),
      (e._zod.pattern = new RegExp(
        `^(${r
          .filter((i) => Mt.has(typeof i))
          .map((i) => (typeof i == "string" ? Le(i) : i.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (i, t) => {
        let n = i.value;
        return (
          e._zod.values.has(n) ||
            i.issues.push({ code: "invalid_value", values: r, input: n, inst: e }),
          i
        );
      }));
  }),
  Ui = d("$ZodLiteral", (e, o) => {
    (E.init(e, o),
      (e._zod.values = new Set(o.values)),
      (e._zod.pattern = new RegExp(
        `^(${o.values.map((r) => (typeof r == "string" ? Le(r) : r ? r.toString() : String(r))).join("|")})$`,
      )),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        return (
          e._zod.values.has(t) ||
            r.issues.push({ code: "invalid_value", values: o.values, input: t, inst: e }),
          r
        );
      }));
  }),
  Ri = d("$ZodFile", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        return (
          t instanceof File ||
            r.issues.push({ expected: "file", code: "invalid_type", input: t, inst: e }),
          r
        );
      }));
  }),
  Hi = d("$ZodTransform", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let t = o.transform(r.value, r);
        if (i.async)
          return (t instanceof Promise ? t : Promise.resolve(t)).then((a) => ((r.value = a), r));
        if (t instanceof Promise) throw new Te();
        return ((r.value = t), r);
      }));
  }),
  Ci = d("$ZodOptional", (e, o) => {
    (E.init(e, o),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      C(e._zod, "values", () =>
        o.innerType._zod.values ? new Set([...o.innerType._zod.values, void 0]) : void 0,
      ),
      C(e._zod, "pattern", () => {
        let r = o.innerType._zod.pattern;
        return r ? new RegExp(`^(${Pt(r.source)})?$`) : void 0;
      }),
      (e._zod.parse = (r, i) => (r.value === void 0 ? r : o.innerType._zod.run(r, i))));
  }),
  Zi = d("$ZodNullable", (e, o) => {
    (E.init(e, o),
      C(e._zod, "optin", () => o.innerType._zod.optin),
      C(e._zod, "optout", () => o.innerType._zod.optout),
      C(e._zod, "pattern", () => {
        let r = o.innerType._zod.pattern;
        return r ? new RegExp(`^(${Pt(r.source)}|null)$`) : void 0;
      }),
      C(e._zod, "values", () =>
        o.innerType._zod.values ? new Set([...o.innerType._zod.values, null]) : void 0,
      ),
      (e._zod.parse = (r, i) => (r.value === null ? r : o.innerType._zod.run(r, i))));
  }),
  Vi = d("$ZodDefault", (e, o) => {
    (E.init(e, o),
      (e._zod.optin = "optional"),
      C(e._zod, "values", () => o.innerType._zod.values),
      (e._zod.parse = (r, i) => {
        if (r.value === void 0) return ((r.value = o.defaultValue), r);
        let t = o.innerType._zod.run(r, i);
        return t instanceof Promise ? t.then((n) => nl(n, o)) : nl(t, o);
      }));
  });
function nl(e, o) {
  return (e.value === void 0 && (e.value = o.defaultValue), e);
}
var Fi = d("$ZodPrefault", (e, o) => {
    (E.init(e, o),
      (e._zod.optin = "optional"),
      C(e._zod, "values", () => o.innerType._zod.values),
      (e._zod.parse = (r, i) => (
        r.value === void 0 && (r.value = o.defaultValue),
        o.innerType._zod.run(r, i)
      )));
  }),
  qi = d("$ZodNonOptional", (e, o) => {
    (E.init(e, o),
      C(e._zod, "values", () => {
        let r = o.innerType._zod.values;
        return r ? new Set([...r].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (r, i) => {
        let t = o.innerType._zod.run(r, i);
        return t instanceof Promise ? t.then((n) => il(n, e)) : il(t, e);
      }));
  });
function il(e, o) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: o }),
    e
  );
}
var Bi = d("$ZodSuccess", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => {
        let t = o.innerType._zod.run(r, i);
        return t instanceof Promise
          ? t.then((n) => ((r.value = n.issues.length === 0), r))
          : ((r.value = t.issues.length === 0), r);
      }));
  }),
  Wi = d("$ZodCatch", (e, o) => {
    (E.init(e, o),
      C(e._zod, "optin", () => o.innerType._zod.optin),
      C(e._zod, "optout", () => o.innerType._zod.optout),
      C(e._zod, "values", () => o.innerType._zod.values),
      (e._zod.parse = (r, i) => {
        let t = o.innerType._zod.run(r, i);
        return t instanceof Promise
          ? t.then(
              (n) => (
                (r.value = n.value),
                n.issues.length &&
                  ((r.value = o.catchValue({
                    ...r,
                    error: { issues: n.issues.map((a) => ue(a, i, B())) },
                    input: r.value,
                  })),
                  (r.issues = [])),
                r
              ),
            )
          : ((r.value = t.value),
            t.issues.length &&
              ((r.value = o.catchValue({
                ...r,
                error: { issues: t.issues.map((n) => ue(n, i, B())) },
                input: r.value,
              })),
              (r.issues = [])),
            r);
      }));
  }),
  Ki = d("$ZodNaN", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) => (
        (typeof r.value != "number" || !Number.isNaN(r.value)) &&
          r.issues.push({ input: r.value, inst: e, expected: "nan", code: "invalid_type" }),
        r
      )));
  }),
  Vt = d("$ZodPipe", (e, o) => {
    (E.init(e, o),
      C(e._zod, "values", () => o.in._zod.values),
      C(e._zod, "optin", () => o.in._zod.optin),
      C(e._zod, "optout", () => o.out._zod.optout),
      (e._zod.parse = (r, i) => {
        let t = o.in._zod.run(r, i);
        return t instanceof Promise ? t.then((n) => al(n, o, i)) : al(t, o, i);
      }));
  });
function al(e, o, r) {
  return Je(e) ? e : o.out._zod.run({ value: e.value, issues: e.issues }, r);
}
var Gi = d("$ZodReadonly", (e, o) => {
  (E.init(e, o),
    C(e._zod, "propValues", () => o.innerType._zod.propValues),
    C(e._zod, "optin", () => o.innerType._zod.optin),
    C(e._zod, "optout", () => o.innerType._zod.optout),
    (e._zod.parse = (r, i) => {
      let t = o.innerType._zod.run(r, i);
      return t instanceof Promise ? t.then(sl) : sl(t);
    }));
});
function sl(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var Yi = d("$ZodTemplateLiteral", (e, o) => {
    E.init(e, o);
    let r = [];
    for (let i of o.parts)
      if (i instanceof E) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let t = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
        if (!t) throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let n = t.startsWith("^") ? 1 : 0,
          a = t.endsWith("$") ? t.length - 1 : t.length;
        r.push(t.slice(n, a));
      } else if (i === null || Wr.has(typeof i)) r.push(Le(`${i}`));
      else throw new Error(`Invalid template literal part: ${i}`);
    ((e._zod.pattern = new RegExp(`^${r.join("")}$`)),
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
  Ji = d("$ZodPromise", (e, o) => {
    (E.init(e, o),
      (e._zod.parse = (r, i) =>
        Promise.resolve(r.value).then((t) => o.innerType._zod.run({ value: t, issues: [] }, i))));
  }),
  Xi = d("$ZodLazy", (e, o) => {
    (E.init(e, o),
      C(e._zod, "innerType", () => o.getter()),
      C(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      C(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      C(e._zod, "optin", () => e._zod.innerType._zod.optin),
      C(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (r, i) => e._zod.innerType._zod.run(r, i)));
  }),
  Qi = d("$ZodCustom", (e, o) => {
    (q.init(e, o),
      E.init(e, o),
      (e._zod.parse = (r, i) => r),
      (e._zod.check = (r) => {
        let i = r.value,
          t = o.fn(i);
        if (t instanceof Promise) return t.then((n) => ll(n, r, i, e));
        ll(t, r, i, e);
      }));
  });
function ll(e, o, r, i) {
  if (!e) {
    let t = {
      code: "custom",
      input: r,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (t.params = i._zod.def.params), o.issues.push(Jr(t)));
  }
}
var Ft = {};
Ge(Ft, {
  ar: () => _l,
  az: () => ml,
  be: () => fl,
  ca: () => hl,
  cs: () => gl,
  de: () => vl,
  en: () => Oo,
  es: () => yl,
  fa: () => bl,
  fi: () => wl,
  fr: () => xl,
  frCA: () => kl,
  he: () => Sl,
  hu: () => $l,
  id: () => zl,
  it: () => Dl,
  ja: () => Il,
  kh: () => Tl,
  ko: () => Al,
  mk: () => Pl,
  ms: () => El,
  nl: () => Ml,
  no: () => jl,
  ota: () => Ol,
  pl: () => Ll,
  pt: () => Nl,
  ru: () => Rl,
  sl: () => Hl,
  sv: () => Cl,
  ta: () => Zl,
  th: () => Vl,
  tr: () => Fl,
  ua: () => ql,
  ur: () => Bl,
  vi: () => Wl,
  zhCN: () => Kl,
  zhTW: () => Gl,
});
var ic = () => {
  let e = {
    string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${t.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${S(t.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${n} ${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${h(t.keys, "\u060C ")}`;
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
function _l() {
  return { localeError: ic() };
}
var ac = () => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${t.expected}, daxil olan ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${S(t.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${n}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${h(t.keys, ", ")}`;
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
function ml() {
  return { localeError: ac() };
}
function pl(e, o, r, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? o : n >= 2 && n <= 4 ? r : i;
}
var sc = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${t.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${S(t.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        if (a) {
          let s = Number(t.maximum),
            u = pl(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.maximum.toString()} ${u}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
        if (a) {
          let s = Number(t.minimum),
            u = pl(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.minimum.toString()} ${u}`;
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
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${h(t.keys, ", ")}`;
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
function fl() {
  return { localeError: sc() };
}
var lc = () => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Tipus inv\xE0lid: s'esperava ${t.expected}, s'ha rebut ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${S(t.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${h(t.values, " o ")}`;
      case "too_big": {
        let n = t.inclusive ? "com a m\xE0xim" : "menys de",
          a = o(t.origin);
        return a
          ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingu\xE9s ${n} ${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          a = o(t.origin);
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
        return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function hl() {
  return { localeError: lc() };
}
var uc = () => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${t.expected}, obdr\u017Eeno ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${S(t.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${n}${t.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${h(t.keys, ", ")}`;
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
function gl() {
  return { localeError: uc() };
}
var dc = () => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Ung\xFCltige Eingabe: erwartet ${t.expected}, erhalten ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${S(t.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${n}${t.maximum.toString()} ${a.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${n}${t.maximum.toString()} ist`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${h(t.keys, ", ")}`;
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
function vl() {
  return { localeError: dc() };
}
var cc = (e) => {
    let o = typeof e;
    switch (o) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return o;
  },
  _c = () => {
    let e = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function o(i) {
      return e[i] ?? null;
    }
    let r = {
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
          return `Invalid input: expected ${i.expected}, received ${cc(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${S(i.values[0])}`
            : `Invalid option: expected one of ${h(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            n = o(i.origin);
          return n
            ? `Too big: expected ${i.origin ?? "value"} to have ${t}${i.maximum.toString()} ${n.unit ?? "elements"}`
            : `Too big: expected ${i.origin ?? "value"} to be ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            n = o(i.origin);
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
                  : `Invalid ${r[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${i.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${h(i.keys, ", ")}`;
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
function Oo() {
  return { localeError: _c() };
}
var mc = () => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Entrada inv\xE1lida: se esperaba ${t.expected}, recibido ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${S(t.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Demasiado grande: se esperaba que ${t.origin ?? "valor"} tuviera ${n}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${t.origin ?? "valor"} fuera ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function yl() {
  return { localeError: mc() };
}
var pc = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${t.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${r(t.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${S(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${h(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${n}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${n}${t.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${h(t.keys, ", ")}`;
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
function bl() {
  return { localeError: pc() };
}
var fc = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Virheellinen tyyppi: odotettiin ${t.expected}, oli ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${S(t.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${n}${t.maximum.toString()} ${a.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${h(t.keys, ", ")}`;
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
function wl() {
  return { localeError: fc() };
}
var hc = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Entr\xE9e invalide : ${t.expected} attendu, ${r(t.input)} re\xE7u`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : ${S(t.values[0])} attendu`
          : `Option invalide : une valeur parmi ${h(t.values, "|")} attendue`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Trop grand : ${t.origin ?? "valeur"} doit ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${t.origin ?? "valeur"} doit \xEAtre ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${h(t.keys, ", ")}`;
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
function xl() {
  return { localeError: hc() };
}
var gc = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Entr\xE9e invalide : attendu ${t.expected}, re\xE7u ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : attendu ${S(t.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "\u2264" : "<",
          a = o(t.origin);
        return a
          ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${n}${t.maximum.toString()} ${a.unit}`
          : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? "\u2265" : ">",
          a = o(t.origin);
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
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${h(t.keys, ", ")}`;
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
function kl() {
  return { localeError: gc() };
}
var vc = () => {
  let e = {
    string: {
      unit: "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", verb: "\u05DC\u05DB\u05DC\u05D5\u05DC" },
    array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", verb: "\u05DC\u05DB\u05DC\u05D5\u05DC" },
    set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", verb: "\u05DC\u05DB\u05DC\u05D5\u05DC" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${t.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${S(t.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u05DE\u05E4\u05EA\u05D7${t.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${t.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${h(t.keys, ", ")}`;
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
function Sl() {
  return { localeError: vc() };
}
var yc = () => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${t.expected}, a kapott \xE9rt\xE9k ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${S(t.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `T\xFAl nagy: ${t.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${n}${t.maximum.toString()} ${a.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${t.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function $l() {
  return { localeError: yc() };
}
var bc = () => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Input tidak valid: diharapkan ${t.expected}, diterima ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak valid: diharapkan ${S(t.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${n}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function zl() {
  return { localeError: bc() };
}
var wc = () => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Input non valido: atteso ${t.expected}, ricevuto ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input non valido: atteso ${S(t.values[0])}`
          : `Opzione non valida: atteso uno tra ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${n}${t.maximum.toString()} ${a.unit ?? "elementi"}`
          : `Troppo grande: ${t.origin ?? "valore"} deve essere ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${h(t.keys, ", ")}`;
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
function Dl() {
  return { localeError: wc() };
}
var xc = () => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u7121\u52B9\u306A\u5165\u529B: ${t.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${r(t.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${S(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${h(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${h(t.keys, "\u3001")}`;
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
function Il() {
  return { localeError: xc() };
}
var kc = () => {
  let e = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${S(t.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${n} ${t.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${h(t.keys, ", ")}`;
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
function Tl() {
  return { localeError: kc() };
}
var Sc = () => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${t.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${r(t.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return t.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${S(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${h(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let n = t.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          a =
            n === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = o(t.origin),
          u = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()}${u} ${n}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()} ${n}${a}`;
      }
      case "too_small": {
        let n = t.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          a =
            n === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = o(t.origin),
          u = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()}${u} ${n}${a}`
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
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${h(t.keys, ", ")}`;
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
function Al() {
  return { localeError: Sc() };
}
var $c = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Invalid input: expected ${S(t.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${n}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${h(t.keys, ", ")}`;
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
function Pl() {
  return { localeError: $c() };
}
var zc = () => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Input tidak sah: dijangka ${t.expected}, diterima ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak sah: dijangka ${S(t.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Kunci tidak dikenali: ${h(t.keys, ", ")}`;
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
function El() {
  return { localeError: zc() };
}
var Dc = () => {
  let e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Ongeldige invoer: verwacht ${t.expected}, ontving ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ongeldige invoer: verwacht ${S(t.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Te lang: verwacht dat ${t.origin ?? "waarde"} ${n}${t.maximum.toString()} ${a.unit ?? "elementen"} bevat`
          : `Te lang: verwacht dat ${t.origin ?? "waarde"} ${n}${t.maximum.toString()} is`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function Ml() {
  return { localeError: Dc() };
}
var Ic = () => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Ugyldig input: forventet ${t.expected}, fikk ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ugyldig verdi: forventet ${S(t.values[0])}`
          : `Ugyldig valg: forventet en av ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${n}${t.maximum.toString()} ${a.unit ?? "elementer"}`
          : `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${h(t.keys, ", ")}`;
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
function jl() {
  return { localeError: Ic() };
}
var Tc = () => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `F\xE2sit giren: umulan ${t.expected}, al\u0131nan ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `F\xE2sit giren: umulan ${S(t.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${n}${t.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${n}${t.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function Ol() {
  return { localeError: Tc() };
}
var Ac = () => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${t.expected}, otrzymano ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${S(t.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${n}${t.maximum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function Ll() {
  return { localeError: Ac() };
}
var Pc = () => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Tipo inv\xE1lido: esperado ${t.expected}, recebido ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${S(t.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${n}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${h(t.keys, ", ")}`;
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
function Nl() {
  return { localeError: Pc() };
}
function Ul(e, o, r, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? o : n >= 2 && n <= 4 ? r : i;
}
var Ec = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${S(t.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        if (a) {
          let s = Number(t.maximum),
            u = Ul(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.maximum.toString()} ${u}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
        if (a) {
          let s = Number(t.minimum),
            u = Ul(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.minimum.toString()} ${u}`;
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
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${h(t.keys, ", ")}`;
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
function Rl() {
  return { localeError: Ec() };
}
var Mc = () => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Neveljaven vnos: pri\u010Dakovano ${t.expected}, prejeto ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${S(t.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} imelo ${n}${t.maximum.toString()} ${a.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${h(t.keys, ", ")}`;
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
function Hl() {
  return { localeError: Mc() };
}
var jc = () => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${t.expected}, fick ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${S(t.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${h(t.keys, ", ")}`;
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
function Cl() {
  return { localeError: jc() };
}
var Oc = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${S(t.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${h(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${n}${t.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${n}${t.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${h(t.keys, ", ")}`;
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
function Zl() {
  return { localeError: Oc() };
}
var Lc = () => {
  let e = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${t.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${S(t.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          a = o(t.origin);
        return a
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          a = o(t.origin);
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
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${h(t.keys, ", ")}`;
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
function Vl() {
  return { localeError: Lc() };
}
var Nc = (e) => {
    let o = typeof e;
    switch (o) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return o;
  },
  Uc = () => {
    let e = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    };
    function o(i) {
      return e[i] ?? null;
    }
    let r = {
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
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${Nc(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${S(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${h(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            n = o(i.origin);
          return n
            ? `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()} ${n.unit ?? "\xF6\u011Fe"}`
            : `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            n = o(i.origin);
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
                  : `Ge\xE7ersiz ${r[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${i.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${h(i.keys, ", ")}`;
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
function Fl() {
  return { localeError: Uc() };
}
var Rc = () => {
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
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${t.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${S(t.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${h(t.keys, ", ")}`;
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
function ql() {
  return { localeError: Rc() };
}
var Hc = () => {
  let e = {
    string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
    file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
    array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
    set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${t.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${r(t.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${S(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${h(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${n}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${n}${t.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${h(t.keys, "\u060C ")}`;
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
function Bl() {
  return { localeError: Hc() };
}
var Cc = () => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${t.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${S(t.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${h(t.keys, ", ")}`;
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
function Wl() {
  return { localeError: Cc() };
}
var Zc = () => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${t.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${S(t.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${n}${t.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${h(t.keys, ", ")}`;
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
function Kl() {
  return { localeError: Zc() };
}
var Vc = () => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function o(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
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
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${t.expected}\uFF0C\u4F46\u6536\u5230 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${S(t.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${h(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = o(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${n}${t.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = o(t.origin);
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
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${h(t.keys, "\u3001")}`;
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
function Gl() {
  return { localeError: Vc() };
}
var ea = Symbol("ZodOutput"),
  ta = Symbol("ZodInput"),
  pt = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(o, ...r) {
      let i = r[0];
      if ((this._map.set(o, i), i && typeof i == "object" && "id" in i)) {
        if (this._idmap.has(i.id)) throw new Error(`ID ${i.id} already exists in the registry`);
        this._idmap.set(i.id, o);
      }
      return this;
    }
    remove(o) {
      return (this._map.delete(o), this);
    }
    get(o) {
      let r = o._zod.parent;
      if (r) {
        let i = { ...(this.get(r) ?? {}) };
        return (delete i.id, { ...i, ...this._map.get(o) });
      }
      return this._map.get(o);
    }
    has(o) {
      return this._map.has(o);
    }
  };
function Lo() {
  return new pt();
}
var Ae = Lo();
function oa(e, o) {
  return new e({ type: "string", ...w(o) });
}
function ra(e, o) {
  return new e({ type: "string", coerce: !0, ...w(o) });
}
function No(e, o) {
  return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...w(o) });
}
function qt(e, o) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...w(o) });
}
function Uo(e, o) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...w(o) });
}
function Ro(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...w(o),
  });
}
function Ho(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...w(o),
  });
}
function Co(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...w(o),
  });
}
function Zo(e, o) {
  return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...w(o) });
}
function Vo(e, o) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...w(o) });
}
function Fo(e, o) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...w(o) });
}
function qo(e, o) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...w(o) });
}
function Bo(e, o) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...w(o) });
}
function Wo(e, o) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...w(o) });
}
function Ko(e, o) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...w(o) });
}
function Go(e, o) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...w(o) });
}
function Yo(e, o) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...w(o) });
}
function Jo(e, o) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...w(o) });
}
function Xo(e, o) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...w(o) });
}
function Qo(e, o) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...w(o) });
}
function er(e, o) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...w(o) });
}
function tr(e, o) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...w(o) });
}
function or(e, o) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...w(o) });
}
function rr(e, o) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...w(o) });
}
function na(e, o) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...w(o),
  });
}
function ia(e, o) {
  return new e({ type: "string", format: "date", check: "string_format", ...w(o) });
}
function aa(e, o) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...w(o),
  });
}
function sa(e, o) {
  return new e({ type: "string", format: "duration", check: "string_format", ...w(o) });
}
function la(e, o) {
  return new e({ type: "number", checks: [], ...w(o) });
}
function ua(e, o) {
  return new e({ type: "number", coerce: !0, checks: [], ...w(o) });
}
function da(e, o) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...w(o) });
}
function ca(e, o) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float32", ...w(o) });
}
function _a(e, o) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float64", ...w(o) });
}
function ma(e, o) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "int32", ...w(o) });
}
function pa(e, o) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "uint32", ...w(o) });
}
function fa(e, o) {
  return new e({ type: "boolean", ...w(o) });
}
function ha(e, o) {
  return new e({ type: "boolean", coerce: !0, ...w(o) });
}
function ga(e, o) {
  return new e({ type: "bigint", ...w(o) });
}
function va(e, o) {
  return new e({ type: "bigint", coerce: !0, ...w(o) });
}
function ya(e, o) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...w(o) });
}
function ba(e, o) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...w(o) });
}
function wa(e, o) {
  return new e({ type: "symbol", ...w(o) });
}
function xa(e, o) {
  return new e({ type: "undefined", ...w(o) });
}
function ka(e, o) {
  return new e({ type: "null", ...w(o) });
}
function Sa(e) {
  return new e({ type: "any" });
}
function ft(e) {
  return new e({ type: "unknown" });
}
function $a(e, o) {
  return new e({ type: "never", ...w(o) });
}
function za(e, o) {
  return new e({ type: "void", ...w(o) });
}
function Da(e, o) {
  return new e({ type: "date", ...w(o) });
}
function Ia(e, o) {
  return new e({ type: "date", coerce: !0, ...w(o) });
}
function Ta(e, o) {
  return new e({ type: "nan", ...w(o) });
}
function Ne(e, o) {
  return new Io({ check: "less_than", ...w(o), value: e, inclusive: !1 });
}
function ve(e, o) {
  return new Io({ check: "less_than", ...w(o), value: e, inclusive: !0 });
}
function Ue(e, o) {
  return new To({ check: "greater_than", ...w(o), value: e, inclusive: !1 });
}
function ie(e, o) {
  return new To({ check: "greater_than", ...w(o), value: e, inclusive: !0 });
}
function Aa(e) {
  return Ue(0, e);
}
function Pa(e) {
  return Ne(0, e);
}
function Ea(e) {
  return ve(0, e);
}
function Ma(e) {
  return ie(0, e);
}
function tt(e, o) {
  return new En({ check: "multiple_of", ...w(o), value: e });
}
function ht(e, o) {
  return new On({ check: "max_size", ...w(o), maximum: e });
}
function ot(e, o) {
  return new Ln({ check: "min_size", ...w(o), minimum: e });
}
function Bt(e, o) {
  return new Nn({ check: "size_equals", ...w(o), size: e });
}
function gt(e, o) {
  return new Un({ check: "max_length", ...w(o), maximum: e });
}
function We(e, o) {
  return new Rn({ check: "min_length", ...w(o), minimum: e });
}
function vt(e, o) {
  return new Hn({ check: "length_equals", ...w(o), length: e });
}
function Wt(e, o) {
  return new Cn({ check: "string_format", format: "regex", ...w(o), pattern: e });
}
function Kt(e) {
  return new Zn({ check: "string_format", format: "lowercase", ...w(e) });
}
function Gt(e) {
  return new Vn({ check: "string_format", format: "uppercase", ...w(e) });
}
function Yt(e, o) {
  return new Fn({ check: "string_format", format: "includes", ...w(o), includes: e });
}
function Jt(e, o) {
  return new qn({ check: "string_format", format: "starts_with", ...w(o), prefix: e });
}
function Xt(e, o) {
  return new Bn({ check: "string_format", format: "ends_with", ...w(o), suffix: e });
}
function ja(e, o, r) {
  return new Wn({ check: "property", property: e, schema: o, ...w(r) });
}
function Qt(e, o) {
  return new Kn({ check: "mime_type", mime: e, ...w(o) });
}
function Re(e) {
  return new Gn({ check: "overwrite", tx: e });
}
function eo(e) {
  return Re((o) => o.normalize(e));
}
function to() {
  return Re((e) => e.trim());
}
function oo() {
  return Re((e) => e.toLowerCase());
}
function ro() {
  return Re((e) => e.toUpperCase());
}
function no(e, o, r) {
  return new e({ type: "array", element: o, ...w(r) });
}
function Fc(e, o, r) {
  return new e({ type: "union", options: o, ...w(r) });
}
function qc(e, o, r, i) {
  return new e({ type: "union", options: r, discriminator: o, ...w(i) });
}
function Bc(e, o, r) {
  return new e({ type: "intersection", left: o, right: r });
}
function Oa(e, o, r, i) {
  let t = r instanceof E,
    n = t ? i : r,
    a = t ? r : null;
  return new e({ type: "tuple", items: o, rest: a, ...w(n) });
}
function Wc(e, o, r, i) {
  return new e({ type: "record", keyType: o, valueType: r, ...w(i) });
}
function Kc(e, o, r, i) {
  return new e({ type: "map", keyType: o, valueType: r, ...w(i) });
}
function Gc(e, o, r) {
  return new e({ type: "set", valueType: o, ...w(r) });
}
function Yc(e, o, r) {
  let i = Array.isArray(o) ? Object.fromEntries(o.map((t) => [t, t])) : o;
  return new e({ type: "enum", entries: i, ...w(r) });
}
function Jc(e, o, r) {
  return new e({ type: "enum", entries: o, ...w(r) });
}
function Xc(e, o, r) {
  return new e({ type: "literal", values: Array.isArray(o) ? o : [o], ...w(r) });
}
function La(e, o) {
  return new e({ type: "file", ...w(o) });
}
function Qc(e, o) {
  return new e({ type: "transform", transform: o });
}
function e_(e, o) {
  return new e({ type: "optional", innerType: o });
}
function t_(e, o) {
  return new e({ type: "nullable", innerType: o });
}
function o_(e, o, r) {
  return new e({
    type: "default",
    innerType: o,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
function r_(e, o, r) {
  return new e({ type: "nonoptional", innerType: o, ...w(r) });
}
function n_(e, o) {
  return new e({ type: "success", innerType: o });
}
function i_(e, o, r) {
  return new e({ type: "catch", innerType: o, catchValue: typeof r == "function" ? r : () => r });
}
function a_(e, o, r) {
  return new e({ type: "pipe", in: o, out: r });
}
function s_(e, o) {
  return new e({ type: "readonly", innerType: o });
}
function l_(e, o, r) {
  return new e({ type: "template_literal", parts: o, ...w(r) });
}
function u_(e, o) {
  return new e({ type: "lazy", getter: o });
}
function d_(e, o) {
  return new e({ type: "promise", innerType: o });
}
function Na(e, o, r) {
  let i = w(r);
  return (i.abort ?? (i.abort = !0), new e({ type: "custom", check: "custom", fn: o, ...i }));
}
function Ua(e, o, r) {
  return new e({ type: "custom", check: "custom", fn: o, ...w(r) });
}
function Ra(e, o) {
  let { case: r, error: i, truthy: t, falsy: n } = w(o),
    a = new Set(t ?? ["true", "1", "yes", "on", "y", "enabled"]),
    s = new Set(n ?? ["false", "0", "no", "off", "n", "disabled"]),
    u = e.Pipe ?? Vt,
    l = e.Boolean ?? Ct,
    p = e.Unknown ?? Be,
    f = new p({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (g) => {
              if (typeof g.value == "string") {
                let m = g.value;
                (r !== "sensitive" && (m = m.toLowerCase()),
                  a.has(m)
                    ? (g.value = !0)
                    : s.has(m)
                      ? (g.value = !1)
                      : g.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...s],
                          input: g.value,
                          inst: f,
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
  return new u({ type: "pipe", in: f, out: new l({ type: "boolean", error: i }), error: i });
}
var nr = class {
  constructor(o) {
    ((this._def = o), (this.def = o));
  }
  implement(o) {
    if (typeof o != "function") throw new Error("implement() must be called with a function");
    let r = (...i) => {
      let t = this._def.input ? xo(this._def.input, i, void 0, { callee: r }) : i;
      if (!Array.isArray(t))
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      let n = o(...t);
      return this._def.output ? xo(this._def.output, n, void 0, { callee: r }) : n;
    };
    return r;
  }
  implementAsync(o) {
    if (typeof o != "function") throw new Error("implement() must be called with a function");
    let r = async (...i) => {
      let t = this._def.input ? await So(this._def.input, i, void 0, { callee: r }) : i;
      if (!Array.isArray(t))
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      let n = await o(...t);
      return this._def.output ? So(this._def.output, n, void 0, { callee: r }) : n;
    };
    return r;
  }
  input(...o) {
    let r = this.constructor;
    return Array.isArray(o[0])
      ? new r({
          type: "function",
          input: new et({ type: "tuple", items: o[0], rest: o[1] }),
          output: this._def.output,
        })
      : new r({ type: "function", input: o[0], output: this._def.output });
  }
  output(o) {
    let r = this.constructor;
    return new r({ type: "function", input: this._def.input, output: o });
  }
};
function Ha(e) {
  return new nr({
    type: "function",
    input: Array.isArray(e?.input) ? Oa(et, e?.input) : (e?.input ?? no(Zt, ft(Be))),
    output: e?.output ?? ft(Be),
  });
}
var io = class {
  constructor(o) {
    ((this.counter = 0),
      (this.metadataRegistry = o?.metadata ?? Ae),
      (this.target = o?.target ?? "draft-2020-12"),
      (this.unrepresentable = o?.unrepresentable ?? "throw"),
      (this.override = o?.override ?? (() => {})),
      (this.io = o?.io ?? "output"),
      (this.seen = new Map()));
  }
  process(o, r = { path: [], schemaPath: [] }) {
    var i;
    let t = o._zod.def,
      n = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      a = this.seen.get(o);
    if (a) return (a.count++, r.schemaPath.includes(o) && (a.cycle = r.path), a.schema);
    let s = { schema: {}, count: 1, cycle: void 0 };
    (this.seen.set(o, s), o._zod.toJSONSchema && (s.schema = o._zod.toJSONSchema()));
    let u = { ...r, schemaPath: [...r.schemaPath, o], path: r.path },
      l = o._zod.parent;
    if (l) ((s.ref = l), this.process(l, u), (this.seen.get(l).isParent = !0));
    else {
      let g = s.schema;
      switch (t.type) {
        case "string": {
          let m = g;
          m.type = "string";
          let { minimum: b, maximum: z, format: O, patterns: x, contentEncoding: D } = o._zod.bag;
          if (
            (typeof b == "number" && (m.minLength = b),
            typeof z == "number" && (m.maxLength = z),
            O && ((m.format = n[O] ?? O), m.format === "" && delete m.format),
            D && (m.contentEncoding = D),
            x && x.size > 0)
          ) {
            let P = [...x];
            P.length === 1
              ? (m.pattern = P[0].source)
              : P.length > 1 &&
                (s.schema.allOf = [
                  ...P.map((v) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: v.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let m = g,
            {
              minimum: b,
              maximum: z,
              format: O,
              multipleOf: x,
              exclusiveMaximum: D,
              exclusiveMinimum: P,
            } = o._zod.bag;
          (typeof O == "string" && O.includes("int") ? (m.type = "integer") : (m.type = "number"),
            typeof P == "number" && (m.exclusiveMinimum = P),
            typeof b == "number" &&
              ((m.minimum = b),
              typeof P == "number" && (P >= b ? delete m.minimum : delete m.exclusiveMinimum)),
            typeof D == "number" && (m.exclusiveMaximum = D),
            typeof z == "number" &&
              ((m.maximum = z),
              typeof D == "number" && (D <= z ? delete m.maximum : delete m.exclusiveMaximum)),
            typeof x == "number" && (m.multipleOf = x));
          break;
        }
        case "boolean": {
          let m = g;
          m.type = "boolean";
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
          let m = g;
          m.type = "null";
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
          let m = g,
            { minimum: b, maximum: z } = o._zod.bag;
          (typeof b == "number" && (m.minItems = b),
            typeof z == "number" && (m.maxItems = z),
            (m.type = "array"),
            (m.items = this.process(t.element, { ...u, path: [...u.path, "items"] })));
          break;
        }
        case "object": {
          let m = g;
          ((m.type = "object"), (m.properties = {}));
          let b = t.shape;
          for (let x in b)
            m.properties[x] = this.process(b[x], { ...u, path: [...u.path, "properties", x] });
          let z = new Set(Object.keys(b)),
            O = new Set(
              [...z].filter((x) => {
                let D = t.shape[x]._zod;
                return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
              }),
            );
          (O.size > 0 && (m.required = Array.from(O)),
            t.catchall?._zod.def.type === "never"
              ? (m.additionalProperties = !1)
              : t.catchall
                ? t.catchall &&
                  (m.additionalProperties = this.process(t.catchall, {
                    ...u,
                    path: [...u.path, "additionalProperties"],
                  }))
                : this.io === "output" && (m.additionalProperties = !1));
          break;
        }
        case "union": {
          let m = g;
          m.anyOf = t.options.map((b, z) =>
            this.process(b, { ...u, path: [...u.path, "anyOf", z] }),
          );
          break;
        }
        case "intersection": {
          let m = g,
            b = this.process(t.left, { ...u, path: [...u.path, "allOf", 0] }),
            z = this.process(t.right, { ...u, path: [...u.path, "allOf", 1] }),
            O = (D) => "allOf" in D && Object.keys(D).length === 1,
            x = [...(O(b) ? b.allOf : [b]), ...(O(z) ? z.allOf : [z])];
          m.allOf = x;
          break;
        }
        case "tuple": {
          let m = g;
          m.type = "array";
          let b = t.items.map((x, D) =>
            this.process(x, { ...u, path: [...u.path, "prefixItems", D] }),
          );
          if ((this.target === "draft-2020-12" ? (m.prefixItems = b) : (m.items = b), t.rest)) {
            let x = this.process(t.rest, { ...u, path: [...u.path, "items"] });
            this.target === "draft-2020-12" ? (m.items = x) : (m.additionalItems = x);
          }
          t.rest && (m.items = this.process(t.rest, { ...u, path: [...u.path, "items"] }));
          let { minimum: z, maximum: O } = o._zod.bag;
          (typeof z == "number" && (m.minItems = z), typeof O == "number" && (m.maxItems = O));
          break;
        }
        case "record": {
          let m = g;
          ((m.type = "object"),
            (m.propertyNames = this.process(t.keyType, {
              ...u,
              path: [...u.path, "propertyNames"],
            })),
            (m.additionalProperties = this.process(t.valueType, {
              ...u,
              path: [...u.path, "additionalProperties"],
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
          let m = g,
            b = Tt(t.entries);
          (b.every((z) => typeof z == "number") && (m.type = "number"),
            b.every((z) => typeof z == "string") && (m.type = "string"),
            (m.enum = b));
          break;
        }
        case "literal": {
          let m = g,
            b = [];
          for (let z of t.values)
            if (z === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error("Literal `undefined` cannot be represented in JSON Schema");
            } else if (typeof z == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error("BigInt literals cannot be represented in JSON Schema");
              b.push(Number(z));
            } else b.push(z);
          if (b.length !== 0)
            if (b.length === 1) {
              let z = b[0];
              ((m.type = z === null ? "null" : typeof z), (m.const = z));
            } else
              (b.every((z) => typeof z == "number") && (m.type = "number"),
                b.every((z) => typeof z == "string") && (m.type = "string"),
                b.every((z) => typeof z == "boolean") && (m.type = "string"),
                b.every((z) => z === null) && (m.type = "null"),
                (m.enum = b));
          break;
        }
        case "file": {
          let m = g,
            b = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: z, maximum: O, mime: x } = o._zod.bag;
          (z !== void 0 && (b.minLength = z),
            O !== void 0 && (b.maxLength = O),
            x
              ? x.length === 1
                ? ((b.contentMediaType = x[0]), Object.assign(m, b))
                : (m.anyOf = x.map((D) => ({ ...b, contentMediaType: D })))
              : Object.assign(m, b));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let m = this.process(t.innerType, u);
          g.anyOf = [m, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(t.innerType, u), (s.ref = t.innerType));
          break;
        }
        case "success": {
          let m = g;
          m.type = "boolean";
          break;
        }
        case "default": {
          (this.process(t.innerType, u), (s.ref = t.innerType), (g.default = t.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(t.innerType, u),
            (s.ref = t.innerType),
            this.io === "input" && (g._prefault = t.defaultValue));
          break;
        }
        case "catch": {
          (this.process(t.innerType, u), (s.ref = t.innerType));
          let m;
          try {
            m = t.catchValue(void 0);
          } catch {
            throw new Error("Dynamic catch values are not supported in JSON Schema");
          }
          g.default = m;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let m = g,
            b = o._zod.pattern;
          if (!b) throw new Error("Pattern not found in template literal");
          ((m.type = "string"), (m.pattern = b.source));
          break;
        }
        case "pipe": {
          let m = this.io === "input" ? (t.in._zod.def.type === "transform" ? t.out : t.in) : t.out;
          (this.process(m, u), (s.ref = m));
          break;
        }
        case "readonly": {
          (this.process(t.innerType, u), (s.ref = t.innerType), (g.readOnly = !0));
          break;
        }
        case "promise": {
          (this.process(t.innerType, u), (s.ref = t.innerType));
          break;
        }
        case "optional": {
          (this.process(t.innerType, u), (s.ref = t.innerType));
          break;
        }
        case "lazy": {
          let m = o._zod.innerType;
          (this.process(m, u), (s.ref = m));
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
    let p = this.metadataRegistry.get(o);
    return (
      p && Object.assign(s.schema, p),
      this.io === "input" && G(o) && (delete s.schema.examples, delete s.schema.default),
      this.io === "input" &&
        s.schema._prefault &&
        ((i = s.schema).default ?? (i.default = s.schema._prefault)),
      delete s.schema._prefault,
      this.seen.get(o).schema
    );
  }
  emit(o, r) {
    let i = {
        cycles: r?.cycles ?? "ref",
        reused: r?.reused ?? "inline",
        external: r?.external ?? void 0,
      },
      t = this.seen.get(o);
    if (!t) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let n = (p) => {
        let f = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let z = i.external.registry.get(p[0])?.id;
          if (z) return { ref: i.external.uri(z) };
          let O = p[1].defId ?? p[1].schema.id ?? `schema${this.counter++}`;
          return ((p[1].defId = O), { defId: O, ref: `${i.external.uri("__shared")}#/${f}/${O}` });
        }
        if (p[1] === t) return { ref: "#" };
        let m = `#/${f}/`,
          b = p[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: b, ref: m + b };
      },
      a = (p) => {
        if (p[1].schema.$ref) return;
        let f = p[1],
          { ref: g, defId: m } = n(p);
        ((f.def = { ...f.schema }), m && (f.defId = m));
        let b = f.schema;
        for (let z in b) delete b[z];
        b.$ref = g;
      };
    for (let p of this.seen.entries()) {
      let f = p[1];
      if (o === p[0]) {
        a(p);
        continue;
      }
      if (i.external) {
        let m = i.external.registry.get(p[0])?.id;
        if (o !== p[0] && m) {
          a(p);
          continue;
        }
      }
      if (this.metadataRegistry.get(p[0])?.id) {
        a(p);
        continue;
      }
      if (f.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${f.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(p);
        continue;
      }
      if (f.count > 1 && i.reused === "ref") {
        a(p);
        continue;
      }
    }
    let s = (p, f) => {
      let g = this.seen.get(p),
        m = g.def ?? g.schema,
        b = { ...m };
      if (g.ref === null) return;
      let z = g.ref;
      if (((g.ref = null), z)) {
        s(z, f);
        let O = this.seen.get(z).schema;
        O.$ref && f.target === "draft-7"
          ? ((m.allOf = m.allOf ?? []), m.allOf.push(O))
          : (Object.assign(m, O), Object.assign(m, b));
      }
      g.isParent || this.override({ zodSchema: p, jsonSchema: m });
    };
    for (let p of [...this.seen.entries()].reverse()) s(p[0], { target: this.target });
    let u = {};
    (this.target === "draft-2020-12"
      ? (u.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (u.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(u, t.def));
    let l = i.external?.defs ?? {};
    for (let p of this.seen.entries()) {
      let f = p[1];
      f.def && f.defId && (l[f.defId] = f.def);
    }
    !i.external &&
      Object.keys(l).length > 0 &&
      (this.target === "draft-2020-12" ? (u.$defs = l) : (u.definitions = l));
    try {
      return JSON.parse(JSON.stringify(u));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function Ca(e, o) {
  if (e instanceof pt) {
    let i = new io(o),
      t = {};
    for (let s of e._idmap.entries()) {
      let [u, l] = s;
      i.process(l);
    }
    let n = {},
      a = { registry: e, uri: o?.uri || ((s) => s), defs: t };
    for (let s of e._idmap.entries()) {
      let [u, l] = s;
      n[u] = i.emit(l, { ...o, external: a });
    }
    if (Object.keys(t).length > 0) {
      let s = i.target === "draft-2020-12" ? "$defs" : "definitions";
      n.__shared = { [s]: t };
    }
    return { schemas: n };
  }
  let r = new io(o);
  return (r.process(e), r.emit(e, o));
}
function G(e, o) {
  let r = o ?? { seen: new Set() };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
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
      return G(t.element, r);
    case "object": {
      for (let n in t.shape) if (G(t.shape[n], r)) return !0;
      return !1;
    }
    case "union": {
      for (let n of t.options) if (G(n, r)) return !0;
      return !1;
    }
    case "intersection":
      return G(t.left, r) || G(t.right, r);
    case "tuple": {
      for (let n of t.items) if (G(n, r)) return !0;
      return !!(t.rest && G(t.rest, r));
    }
    case "record":
      return G(t.keyType, r) || G(t.valueType, r);
    case "map":
      return G(t.keyType, r) || G(t.valueType, r);
    case "set":
      return G(t.valueType, r);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return G(t.innerType, r);
    case "lazy":
      return G(t.getter(), r);
    case "default":
      return G(t.innerType, r);
    case "prefault":
      return G(t.innerType, r);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return G(t.in, r) || G(t.out, r);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${t.type}`);
}
var Yl = {};
var ur = {};
Ge(ur, {
  ZodISODate: () => ar,
  ZodISODateTime: () => ir,
  ZodISODuration: () => lr,
  ZodISOTime: () => sr,
  date: () => Va,
  datetime: () => Za,
  duration: () => qa,
  time: () => Fa,
});
var ir = d("ZodISODateTime", (e, o) => {
  (ui.init(e, o), F.init(e, o));
});
function Za(e) {
  return na(ir, e);
}
var ar = d("ZodISODate", (e, o) => {
  (di.init(e, o), F.init(e, o));
});
function Va(e) {
  return ia(ar, e);
}
var sr = d("ZodISOTime", (e, o) => {
  (ci.init(e, o), F.init(e, o));
});
function Fa(e) {
  return aa(sr, e);
}
var lr = d("ZodISODuration", (e, o) => {
  (_i.init(e, o), F.init(e, o));
});
function qa(e) {
  return sa(lr, e);
}
var Xl = (e, o) => {
    (Lt.init(e, o),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (r) => Ut(e, r) },
        flatten: { value: (r) => Nt(e, r) },
        addIssue: { value: (r) => e.issues.push(r) },
        addIssues: { value: (r) => e.issues.push(...r) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  __ = d("ZodError", Xl),
  yt = d("ZodError", Xl, { Parent: Error });
var Ba = wo(yt),
  Wa = ko(yt),
  Ka = $o(yt),
  Ga = zo(yt);
var L = d(
    "ZodType",
    (e, o) => (
      E.init(e, o),
      (e.def = o),
      Object.defineProperty(e, "_def", { value: o }),
      (e.check = (...r) =>
        e.clone({
          ...o,
          checks: [
            ...(o.checks ?? []),
            ...r.map((i) =>
              typeof i == "function"
                ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } }
                : i,
            ),
          ],
        })),
      (e.clone = (r, i) => le(e, r, i)),
      (e.brand = () => e),
      (e.register = (r, i) => (r.add(e, i), e)),
      (e.parse = (r, i) => Ba(e, r, i, { callee: e.parse })),
      (e.safeParse = (r, i) => Ka(e, r, i)),
      (e.parseAsync = async (r, i) => Wa(e, r, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (r, i) => Ga(e, r, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (r, i) => e.check(Uu(r, i))),
      (e.superRefine = (r) => e.check(Ru(r))),
      (e.overwrite = (r) => e.check(Re(r))),
      (e.optional = () => _r(e)),
      (e.nullable = () => mr(e)),
      (e.nullish = () => _r(mr(e))),
      (e.nonoptional = (r) => zu(e, r)),
      (e.array = () => vs(e)),
      (e.or = (r) => yr([e, r])),
      (e.and = (r) => cu(e, r)),
      (e.transform = (r) => pr(e, ws(r))),
      (e.default = (r) => ku(e, r)),
      (e.prefault = (r) => $u(e, r)),
      (e.catch = (r) => Tu(e, r)),
      (e.pipe = (r) => pr(e, r)),
      (e.readonly = () => Eu(e)),
      (e.describe = (r) => {
        let i = e.clone();
        return (Ae.add(i, { description: r }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return Ae.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...r) => {
        if (r.length === 0) return Ae.get(e);
        let i = e.clone();
        return (Ae.add(i, r[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Xa = d("_ZodString", (e, o) => {
    (Ht.init(e, o), L.init(e, o));
    let r = e._zod.bag;
    ((e.format = r.format ?? null),
      (e.minLength = r.minimum ?? null),
      (e.maxLength = r.maximum ?? null),
      (e.regex = (...i) => e.check(Wt(...i))),
      (e.includes = (...i) => e.check(Yt(...i))),
      (e.startsWith = (...i) => e.check(Jt(...i))),
      (e.endsWith = (...i) => e.check(Xt(...i))),
      (e.min = (...i) => e.check(We(...i))),
      (e.max = (...i) => e.check(gt(...i))),
      (e.length = (...i) => e.check(vt(...i))),
      (e.nonempty = (...i) => e.check(We(1, ...i))),
      (e.lowercase = (i) => e.check(Kt(i))),
      (e.uppercase = (i) => e.check(Gt(i))),
      (e.trim = () => e.check(to())),
      (e.normalize = (...i) => e.check(eo(...i))),
      (e.toLowerCase = () => e.check(oo())),
      (e.toUpperCase = () => e.check(ro())));
  }),
  fr = d("ZodString", (e, o) => {
    (Ht.init(e, o),
      Xa.init(e, o),
      (e.email = (r) => e.check(No(Qa, r))),
      (e.url = (r) => e.check(Zo(es, r))),
      (e.jwt = (r) => e.check(rr(fs, r))),
      (e.emoji = (r) => e.check(Vo(ts, r))),
      (e.guid = (r) => e.check(qt(dr, r))),
      (e.uuid = (r) => e.check(Uo(Ce, r))),
      (e.uuidv4 = (r) => e.check(Ro(Ce, r))),
      (e.uuidv6 = (r) => e.check(Ho(Ce, r))),
      (e.uuidv7 = (r) => e.check(Co(Ce, r))),
      (e.nanoid = (r) => e.check(Fo(os, r))),
      (e.guid = (r) => e.check(qt(dr, r))),
      (e.cuid = (r) => e.check(qo(rs, r))),
      (e.cuid2 = (r) => e.check(Bo(ns, r))),
      (e.ulid = (r) => e.check(Wo(is, r))),
      (e.base64 = (r) => e.check(er(_s, r))),
      (e.base64url = (r) => e.check(tr(ms, r))),
      (e.xid = (r) => e.check(Ko(as, r))),
      (e.ksuid = (r) => e.check(Go(ss, r))),
      (e.ipv4 = (r) => e.check(Yo(ls, r))),
      (e.ipv6 = (r) => e.check(Jo(us, r))),
      (e.cidrv4 = (r) => e.check(Xo(ds, r))),
      (e.cidrv6 = (r) => e.check(Qo(cs, r))),
      (e.e164 = (r) => e.check(or(ps, r))),
      (e.datetime = (r) => e.check(Za(r))),
      (e.date = (r) => e.check(Va(r))),
      (e.time = (r) => e.check(Fa(r))),
      (e.duration = (r) => e.check(qa(r))));
  });
function Ya(e) {
  return oa(fr, e);
}
var F = d("ZodStringFormat", (e, o) => {
    (V.init(e, o), Xa.init(e, o));
  }),
  Qa = d("ZodEmail", (e, o) => {
    (ei.init(e, o), F.init(e, o));
  });
function p_(e) {
  return No(Qa, e);
}
var dr = d("ZodGUID", (e, o) => {
  (Xn.init(e, o), F.init(e, o));
});
function f_(e) {
  return qt(dr, e);
}
var Ce = d("ZodUUID", (e, o) => {
  (Qn.init(e, o), F.init(e, o));
});
function h_(e) {
  return Uo(Ce, e);
}
function g_(e) {
  return Ro(Ce, e);
}
function v_(e) {
  return Ho(Ce, e);
}
function y_(e) {
  return Co(Ce, e);
}
var es = d("ZodURL", (e, o) => {
  (ti.init(e, o), F.init(e, o));
});
function b_(e) {
  return Zo(es, e);
}
var ts = d("ZodEmoji", (e, o) => {
  (oi.init(e, o), F.init(e, o));
});
function w_(e) {
  return Vo(ts, e);
}
var os = d("ZodNanoID", (e, o) => {
  (ri.init(e, o), F.init(e, o));
});
function x_(e) {
  return Fo(os, e);
}
var rs = d("ZodCUID", (e, o) => {
  (ni.init(e, o), F.init(e, o));
});
function k_(e) {
  return qo(rs, e);
}
var ns = d("ZodCUID2", (e, o) => {
  (ii.init(e, o), F.init(e, o));
});
function S_(e) {
  return Bo(ns, e);
}
var is = d("ZodULID", (e, o) => {
  (ai.init(e, o), F.init(e, o));
});
function $_(e) {
  return Wo(is, e);
}
var as = d("ZodXID", (e, o) => {
  (si.init(e, o), F.init(e, o));
});
function z_(e) {
  return Ko(as, e);
}
var ss = d("ZodKSUID", (e, o) => {
  (li.init(e, o), F.init(e, o));
});
function D_(e) {
  return Go(ss, e);
}
var ls = d("ZodIPv4", (e, o) => {
  (mi.init(e, o), F.init(e, o));
});
function I_(e) {
  return Yo(ls, e);
}
var us = d("ZodIPv6", (e, o) => {
  (pi.init(e, o), F.init(e, o));
});
function T_(e) {
  return Jo(us, e);
}
var ds = d("ZodCIDRv4", (e, o) => {
  (fi.init(e, o), F.init(e, o));
});
function A_(e) {
  return Xo(ds, e);
}
var cs = d("ZodCIDRv6", (e, o) => {
  (hi.init(e, o), F.init(e, o));
});
function P_(e) {
  return Qo(cs, e);
}
var _s = d("ZodBase64", (e, o) => {
  (vi.init(e, o), F.init(e, o));
});
function E_(e) {
  return er(_s, e);
}
var ms = d("ZodBase64URL", (e, o) => {
  (yi.init(e, o), F.init(e, o));
});
function M_(e) {
  return tr(ms, e);
}
var ps = d("ZodE164", (e, o) => {
  (bi.init(e, o), F.init(e, o));
});
function j_(e) {
  return or(ps, e);
}
var fs = d("ZodJWT", (e, o) => {
  (wi.init(e, o), F.init(e, o));
});
function O_(e) {
  return rr(fs, e);
}
var so = d("ZodNumber", (e, o) => {
  (Eo.init(e, o),
    L.init(e, o),
    (e.gt = (i, t) => e.check(Ue(i, t))),
    (e.gte = (i, t) => e.check(ie(i, t))),
    (e.min = (i, t) => e.check(ie(i, t))),
    (e.lt = (i, t) => e.check(Ne(i, t))),
    (e.lte = (i, t) => e.check(ve(i, t))),
    (e.max = (i, t) => e.check(ve(i, t))),
    (e.int = (i) => e.check(Ja(i))),
    (e.safe = (i) => e.check(Ja(i))),
    (e.positive = (i) => e.check(Ue(0, i))),
    (e.nonnegative = (i) => e.check(ie(0, i))),
    (e.negative = (i) => e.check(Ne(0, i))),
    (e.nonpositive = (i) => e.check(ve(0, i))),
    (e.multipleOf = (i, t) => e.check(tt(i, t))),
    (e.step = (i, t) => e.check(tt(i, t))),
    (e.finite = () => e));
  let r = e._zod.bag;
  ((e.minValue =
    Math.max(
      r.minimum ?? Number.NEGATIVE_INFINITY,
      r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        r.maximum ?? Number.POSITIVE_INFINITY,
        r.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = r.format ?? null));
});
function Ql(e) {
  return la(so, e);
}
var bt = d("ZodNumberFormat", (e, o) => {
  (xi.init(e, o), so.init(e, o));
});
function Ja(e) {
  return da(bt, e);
}
function L_(e) {
  return ca(bt, e);
}
function N_(e) {
  return _a(bt, e);
}
function U_(e) {
  return ma(bt, e);
}
function R_(e) {
  return pa(bt, e);
}
var lo = d("ZodBoolean", (e, o) => {
  (Ct.init(e, o), L.init(e, o));
});
function eu(e) {
  return fa(lo, e);
}
var uo = d("ZodBigInt", (e, o) => {
  (Mo.init(e, o),
    L.init(e, o),
    (e.gte = (i, t) => e.check(ie(i, t))),
    (e.min = (i, t) => e.check(ie(i, t))),
    (e.gt = (i, t) => e.check(Ue(i, t))),
    (e.gte = (i, t) => e.check(ie(i, t))),
    (e.min = (i, t) => e.check(ie(i, t))),
    (e.lt = (i, t) => e.check(Ne(i, t))),
    (e.lte = (i, t) => e.check(ve(i, t))),
    (e.max = (i, t) => e.check(ve(i, t))),
    (e.positive = (i) => e.check(Ue(BigInt(0), i))),
    (e.negative = (i) => e.check(Ne(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(ve(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(ie(BigInt(0), i))),
    (e.multipleOf = (i, t) => e.check(tt(i, t))));
  let r = e._zod.bag;
  ((e.minValue = r.minimum ?? null),
    (e.maxValue = r.maximum ?? null),
    (e.format = r.format ?? null));
});
function H_(e) {
  return ga(uo, e);
}
var hs = d("ZodBigIntFormat", (e, o) => {
  (ki.init(e, o), uo.init(e, o));
});
function C_(e) {
  return ya(hs, e);
}
function Z_(e) {
  return ba(hs, e);
}
var tu = d("ZodSymbol", (e, o) => {
  (Si.init(e, o), L.init(e, o));
});
function V_(e) {
  return wa(tu, e);
}
var ou = d("ZodUndefined", (e, o) => {
  ($i.init(e, o), L.init(e, o));
});
function F_(e) {
  return xa(ou, e);
}
var ru = d("ZodNull", (e, o) => {
  (zi.init(e, o), L.init(e, o));
});
function nu(e) {
  return ka(ru, e);
}
var iu = d("ZodAny", (e, o) => {
  (Di.init(e, o), L.init(e, o));
});
function q_() {
  return Sa(iu);
}
var gs = d("ZodUnknown", (e, o) => {
  (Be.init(e, o), L.init(e, o));
});
function cr() {
  return ft(gs);
}
var au = d("ZodNever", (e, o) => {
  (Ii.init(e, o), L.init(e, o));
});
function hr(e) {
  return $a(au, e);
}
var su = d("ZodVoid", (e, o) => {
  (Ti.init(e, o), L.init(e, o));
});
function B_(e) {
  return za(su, e);
}
var gr = d("ZodDate", (e, o) => {
  (Ai.init(e, o),
    L.init(e, o),
    (e.min = (i, t) => e.check(ie(i, t))),
    (e.max = (i, t) => e.check(ve(i, t))));
  let r = e._zod.bag;
  ((e.minDate = r.minimum ? new Date(r.minimum) : null),
    (e.maxDate = r.maximum ? new Date(r.maximum) : null));
});
function W_(e) {
  return Da(gr, e);
}
var lu = d("ZodArray", (e, o) => {
  (Zt.init(e, o),
    L.init(e, o),
    (e.element = o.element),
    (e.min = (r, i) => e.check(We(r, i))),
    (e.nonempty = (r) => e.check(We(1, r))),
    (e.max = (r, i) => e.check(gt(r, i))),
    (e.length = (r, i) => e.check(vt(r, i))),
    (e.unwrap = () => e.element));
});
function vs(e, o) {
  return no(lu, e, o);
}
function K_(e) {
  let o = e._zod.def.shape;
  return vu(Object.keys(o));
}
var vr = d("ZodObject", (e, o) => {
  (Pi.init(e, o),
    L.init(e, o),
    k.defineLazy(e, "shape", () => Object.fromEntries(Object.entries(e._zod.def.shape))),
    (e.keyof = () => hu(Object.keys(e._zod.def.shape))),
    (e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: cr() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: cr() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: hr() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (r) => k.extend(e, r)),
    (e.merge = (r) => k.merge(e, r)),
    (e.pick = (r) => k.pick(e, r)),
    (e.omit = (r) => k.omit(e, r)),
    (e.partial = (...r) => k.partial(xs, e, r[0])),
    (e.required = (...r) => k.required(ks, e, r[0])));
});
function G_(e, o) {
  let r = {
    type: "object",
    get shape() {
      return (k.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...k.normalizeParams(o),
  };
  return new vr(r);
}
function Y_(e, o) {
  return new vr({
    type: "object",
    get shape() {
      return (k.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: hr(),
    ...k.normalizeParams(o),
  });
}
function J_(e, o) {
  return new vr({
    type: "object",
    get shape() {
      return (k.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: cr(),
    ...k.normalizeParams(o),
  });
}
var ys = d("ZodUnion", (e, o) => {
  (jo.init(e, o), L.init(e, o), (e.options = o.options));
});
function yr(e, o) {
  return new ys({ type: "union", options: e, ...k.normalizeParams(o) });
}
var uu = d("ZodDiscriminatedUnion", (e, o) => {
  (ys.init(e, o), Ei.init(e, o));
});
function X_(e, o, r) {
  return new uu({ type: "union", options: o, discriminator: e, ...k.normalizeParams(r) });
}
var du = d("ZodIntersection", (e, o) => {
  (Mi.init(e, o), L.init(e, o));
});
function cu(e, o) {
  return new du({ type: "intersection", left: e, right: o });
}
var _u = d("ZodTuple", (e, o) => {
  (et.init(e, o), L.init(e, o), (e.rest = (r) => e.clone({ ...e._zod.def, rest: r })));
});
function Q_(e, o, r) {
  let i = o instanceof E,
    t = i ? r : o,
    n = i ? o : null;
  return new _u({ type: "tuple", items: e, rest: n, ...k.normalizeParams(t) });
}
var bs = d("ZodRecord", (e, o) => {
  (ji.init(e, o), L.init(e, o), (e.keyType = o.keyType), (e.valueType = o.valueType));
});
function mu(e, o, r) {
  return new bs({ type: "record", keyType: e, valueType: o, ...k.normalizeParams(r) });
}
function em(e, o, r) {
  return new bs({ type: "record", keyType: yr([e, hr()]), valueType: o, ...k.normalizeParams(r) });
}
var pu = d("ZodMap", (e, o) => {
  (Oi.init(e, o), L.init(e, o), (e.keyType = o.keyType), (e.valueType = o.valueType));
});
function tm(e, o, r) {
  return new pu({ type: "map", keyType: e, valueType: o, ...k.normalizeParams(r) });
}
var fu = d("ZodSet", (e, o) => {
  (Li.init(e, o),
    L.init(e, o),
    (e.min = (...r) => e.check(ot(...r))),
    (e.nonempty = (r) => e.check(ot(1, r))),
    (e.max = (...r) => e.check(ht(...r))),
    (e.size = (...r) => e.check(Bt(...r))));
});
function om(e, o) {
  return new fu({ type: "set", valueType: e, ...k.normalizeParams(o) });
}
var ao = d("ZodEnum", (e, o) => {
  (Ni.init(e, o), L.init(e, o), (e.enum = o.entries), (e.options = Object.values(o.entries)));
  let r = new Set(Object.keys(o.entries));
  ((e.extract = (i, t) => {
    let n = {};
    for (let a of i)
      if (r.has(a)) n[a] = o.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new ao({ ...o, checks: [], ...k.normalizeParams(t), entries: n });
  }),
    (e.exclude = (i, t) => {
      let n = { ...o.entries };
      for (let a of i)
        if (r.has(a)) delete n[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new ao({ ...o, checks: [], ...k.normalizeParams(t), entries: n });
    }));
});
function hu(e, o) {
  let r = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new ao({ type: "enum", entries: r, ...k.normalizeParams(o) });
}
function rm(e, o) {
  return new ao({ type: "enum", entries: e, ...k.normalizeParams(o) });
}
var gu = d("ZodLiteral", (e, o) => {
  (Ui.init(e, o),
    L.init(e, o),
    (e.values = new Set(o.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (o.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return o.values[0];
      },
    }));
});
function vu(e, o) {
  return new gu({ type: "literal", values: Array.isArray(e) ? e : [e], ...k.normalizeParams(o) });
}
var yu = d("ZodFile", (e, o) => {
  (Ri.init(e, o),
    L.init(e, o),
    (e.min = (r, i) => e.check(ot(r, i))),
    (e.max = (r, i) => e.check(ht(r, i))),
    (e.mime = (r, i) => e.check(Qt(Array.isArray(r) ? r : [r], i))));
});
function nm(e) {
  return La(yu, e);
}
var bu = d("ZodTransform", (e, o) => {
  (Hi.init(e, o),
    L.init(e, o),
    (e._zod.parse = (r, i) => {
      r.addIssue = (n) => {
        if (typeof n == "string") r.issues.push(k.issue(n, r.value, o));
        else {
          let a = n;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = r.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            r.issues.push(k.issue(a)));
        }
      };
      let t = o.transform(r.value, r);
      return t instanceof Promise ? t.then((n) => ((r.value = n), r)) : ((r.value = t), r);
    }));
});
function ws(e) {
  return new bu({ type: "transform", transform: e });
}
var xs = d("ZodOptional", (e, o) => {
  (Ci.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.innerType));
});
function _r(e) {
  return new xs({ type: "optional", innerType: e });
}
var wu = d("ZodNullable", (e, o) => {
  (Zi.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.innerType));
});
function mr(e) {
  return new wu({ type: "nullable", innerType: e });
}
function im(e) {
  return _r(mr(e));
}
var xu = d("ZodDefault", (e, o) => {
  (Vi.init(e, o),
    L.init(e, o),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function ku(e, o) {
  return new xu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof o == "function" ? o() : o;
    },
  });
}
var Su = d("ZodPrefault", (e, o) => {
  (Fi.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.innerType));
});
function $u(e, o) {
  return new Su({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof o == "function" ? o() : o;
    },
  });
}
var ks = d("ZodNonOptional", (e, o) => {
  (qi.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.innerType));
});
function zu(e, o) {
  return new ks({ type: "nonoptional", innerType: e, ...k.normalizeParams(o) });
}
var Du = d("ZodSuccess", (e, o) => {
  (Bi.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.innerType));
});
function am(e) {
  return new Du({ type: "success", innerType: e });
}
var Iu = d("ZodCatch", (e, o) => {
  (Wi.init(e, o),
    L.init(e, o),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Tu(e, o) {
  return new Iu({ type: "catch", innerType: e, catchValue: typeof o == "function" ? o : () => o });
}
var Au = d("ZodNaN", (e, o) => {
  (Ki.init(e, o), L.init(e, o));
});
function sm(e) {
  return Ta(Au, e);
}
var Ss = d("ZodPipe", (e, o) => {
  (Vt.init(e, o), L.init(e, o), (e.in = o.in), (e.out = o.out));
});
function pr(e, o) {
  return new Ss({ type: "pipe", in: e, out: o });
}
var Pu = d("ZodReadonly", (e, o) => {
  (Gi.init(e, o), L.init(e, o));
});
function Eu(e) {
  return new Pu({ type: "readonly", innerType: e });
}
var Mu = d("ZodTemplateLiteral", (e, o) => {
  (Yi.init(e, o), L.init(e, o));
});
function lm(e, o) {
  return new Mu({ type: "template_literal", parts: e, ...k.normalizeParams(o) });
}
var ju = d("ZodLazy", (e, o) => {
  (Xi.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.getter()));
});
function Ou(e) {
  return new ju({ type: "lazy", getter: e });
}
var Lu = d("ZodPromise", (e, o) => {
  (Ji.init(e, o), L.init(e, o), (e.unwrap = () => e._zod.def.innerType));
});
function um(e) {
  return new Lu({ type: "promise", innerType: e });
}
var br = d("ZodCustom", (e, o) => {
  (Qi.init(e, o), L.init(e, o));
});
function Nu(e, o) {
  let r = new q({ check: "custom", ...k.normalizeParams(o) });
  return ((r._zod.check = e), r);
}
function dm(e, o) {
  return Na(br, e ?? (() => !0), o);
}
function Uu(e, o = {}) {
  return Ua(br, e, o);
}
function Ru(e, o) {
  let r = Nu(
    (i) => (
      (i.addIssue = (t) => {
        if (typeof t == "string") i.issues.push(k.issue(t, i.value, r._zod.def));
        else {
          let n = t;
          (n.fatal && (n.continue = !1),
            n.code ?? (n.code = "custom"),
            n.input ?? (n.input = i.value),
            n.inst ?? (n.inst = r),
            n.continue ?? (n.continue = !r._zod.def.abort),
            i.issues.push(k.issue(n)));
        }
      }),
      e(i.value, i)
    ),
    o,
  );
  return r;
}
function cm(e, o = { error: `Input not instance of ${e.name}` }) {
  let r = new br({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...k.normalizeParams(o),
  });
  return ((r._zod.bag.Class = e), r);
}
var _m = (...e) => Ra({ Pipe: Ss, Boolean: lo, Unknown: gs }, ...e);
function mm(e) {
  let o = Ou(() => yr([Ya(e), Ql(), eu(), nu(), vs(o), mu(Ya(), o)]));
  return o;
}
function pm(e, o) {
  return pr(ws(e), o);
}
var fm = {
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
  hm = Object.freeze({ status: "aborted" }),
  gm = hm;
function vm(e) {
  B({ customError: e });
}
function ym() {
  return B().customError;
}
var $s = {};
Ge($s, { bigint: () => km, boolean: () => xm, date: () => Sm, number: () => wm, string: () => bm });
function bm(e) {
  return ra(fr, e);
}
function wm(e) {
  return ua(so, e);
}
function xm(e) {
  return ha(lo, e);
}
function km(e) {
  return va(uo, e);
}
function Sm(e) {
  return Ia(gr, e);
}
B(Oo());
var Pe = "google",
  Hu = "stable",
  Cu = Pe != "mozilla",
  ye = Pe == "mozilla";
var Zu = !1;
var Vu = !1,
  Rh = atob(
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
  );
var Ee = "https://github.com/Atamol/FreeVDH",
  Hh = `${Ee}/v2/entitlements/validate`,
  Ch = `${Ee}/v2/entitlements/activate`,
  Zh = `${Ee}/v2/entitlements/migrate`,
  Fu = `${Ee}/v2/reports`,
  wr = `${Ee}/issue`,
  xr = `${Ee}/premium`,
  qu = `${Ee}/manage-subscription`,
  Vh = `${Ee}/welcome/${Pe}`,
  Fh = `${Ee}/changelog/${Pe}`,
  qh = `${Ee}/goodbye/${Pe}`,
  kr = "https://github.com/Atamol/FreeVDH";
ye && y.config({ jitless: !0 });
var Bu = [
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
  zs = [
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
var Qh = new Set(Bu),
  $m = y.enum(Sr),
  zm = y.enum(zs),
  Wu = y.map($m, y.string()),
  Ku = y.map(zm, y.string()),
  Dm = new Set(Sr);
function Ds(e) {
  return typeof e == "string" && Dm.has(e);
}
function Im(e) {
  return e
    ? e
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
    : "";
}
function Z(e, o, r) {
  let i = () => (console.error(`Requesting unknown i18n string ${e}`), e);
  o = o.map((n) => n.toString()).map(Im);
  let t = r.get(e);
  if (t) {
    let n = 1;
    for (let a = 0; a < o.length; a++) t = t.replace(`$${n}`, o[a]);
  }
  try {
    return (t || (t = Yu.default.i18n.getMessage(e, o)), t || i());
  } catch {
    return i();
  }
}
function Ju(e, o) {
  for (let r of Array.from(e.querySelectorAll("[data-i18n]"))) {
    let i = r.dataset.i18n;
    if (!Ds(i)) {
      console.error(`Unknown key: "${i}"`);
      continue;
    }
    r.textContent = Z(i, [], o);
  }
  for (let r of Array.from(e.querySelectorAll("[data-i18n-tooltip]"))) {
    let i = r.dataset.i18nTooltip;
    if (!Ds(i)) {
      console.error(`Unknown key: "${i}"`);
      continue;
    }
    r.setAttribute("tooltip", Z(i, [], o));
  }
  return e;
}
var N = class extends HTMLElement {
  constructor(r) {
    super();
    this.mounted = !1;
    this.pending_state = null;
    this.persistent_invalid = !0;
    this._onPersistentChanged = () => {
      this.mounted
        ? (this.onPersistentChangedInner(), this.onPersistentChanged())
        : (this.persistent_invalid = !0);
    };
    this.attachShadow({ mode: "open" });
    let i = document.querySelector(r);
    if (!i || !(i instanceof HTMLTemplateElement)) throw new Error(`Template not found: ${r}`);
    (this.root().appendChild(i.content.cloneNode(!0)), customElements.upgrade(this.root()));
  }
  root() {
    return (
      this.shadowRoot || console.error("ComBase.shadowRoot was not initialized"),
      this.shadowRoot
    );
  }
  persistent() {
    return globalThis.persistent_state;
  }
  connectedCallback() {
    (document.documentElement.addEventListener("persistent-changed", this._onPersistentChanged),
      (this.mounted = !0),
      this.pending_state !== null &&
        (this.onStateChangedInner(this.pending_state),
        this.onStateChanged(this.pending_state),
        (this.pending_state = null)),
      this.persistent_invalid &&
        (this.onPersistentChangedInner(),
        this.onPersistentChanged(),
        (this.persistent_invalid = !1)),
      this.onMounted());
  }
  disconnectedCallback() {
    document.documentElement.removeEventListener("persistent-changed", this._onPersistentChanged);
  }
  invalidateState(r) {
    this.mounted ? (this.onStateChangedInner(r), this.onStateChanged(r)) : (this.pending_state = r);
  }
  onPersistentChangedInner() {
    if (!this.mounted) throw new Error("onPersistentChangedInner called while not mounted");
    (Ju(this.root(), this.persistent().custom_strings.addon), (this.persistent_invalid = !1));
  }
  onStateChangedInner(r) {
    if (!this.mounted) throw new Error("onStateChanged called while not mounted");
  }
};
function _(e, o) {
  return function (r, i) {
    let t = o ?? `#${i}`;
    Object.defineProperty(r, i, {
      get() {
        let n = Symbol.for(`cache_${i}`);
        if (this[n]) return this[n];
        let a = this.root().querySelector(t);
        if (!a) return null;
        return (
          a instanceof e ||
            console.error(`[${this.tagName}] "${t}" is ${a.constructor.name}, expected ${e.name}`),
          (this[n] = a),
          a
        );
      },
      enumerable: !0,
      configurable: !0,
    });
  };
}
var Me = class extends N {
  constructor() {
    super("#button-dismiss-template");
  }
  onMounted() {}
  onStateChanged() {}
  onPersistentChanged() {}
};
function j(e) {
  if (e) e.removeAttribute("hidden");
}
function A(e) {
  if (e) e.setAttribute("hidden", "true");
}
function co(e) {
  e.removeAttribute("disabled");
}
function $r(e) {
  e.setAttribute("disabled", "true");
}
function R(e, o) {
  if (!e) return;
  o ? j(e) : o === !1 ? A(e) : e.hasAttribute("hidden") ? j(e) : A(e);
}
var De = class extends N {
  onPersistentChanged() {}
  constructor() {
    super("#report-button-template");
  }
  onMounted() {
    this.button_report.onclick = async () => {
      this.on_click &&
        (A(this.button_report),
        j(this.button_reporting),
        A(this.button_reported),
        await this.on_click(),
        A(this.button_report),
        A(this.button_reporting),
        j(this.button_reported));
    };
  }
  onStateChanged(o) {
    this.on_click = o;
  }
  reset() {
    (j(this.button_report), A(this.button_reporting), A(this.button_reported));
  }
};
(c([_(HTMLButtonElement)], De.prototype, "button_report", 2),
  c([_(HTMLButtonElement)], De.prototype, "button_reported", 2),
  c([_(HTMLButtonElement)], De.prototype, "button_reporting", 2));
var Xu = re(ee(), 1);
var be = class extends N {
  constructor() {
    super("#media-button-origin");
  }
  onPersistentChanged() {}
  onMounted() {}
  onStateChanged(o) {
    ((this.span_hostname.textContent = o.url.hostname),
      o.origin_favicon_url
        ? (this.div_favicon.style.backgroundImage = `url(${o.origin_favicon_url})`)
        : (this.div_favicon.style.backgroundImage = "unset"),
      (this.button_origin.onclick = () => {
        Xu.default.tabs.create({ url: o.url.href });
      }),
      R(this.box_drm, o.has_drm));
  }
};
(c([_(HTMLSpanElement)], be.prototype, "span_hostname", 2),
  c([_(HTMLDivElement)], be.prototype, "div_favicon", 2),
  c([_(HTMLButtonElement)], be.prototype, "button_origin", 2),
  c([_(HTMLElement)], be.prototype, "box_drm", 2));
var Dr = re(ee(), 1);
var gg = new BroadcastChannel("worker_service");
var zr = {
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
async function Tm(e, o) {
  await Dr.default.runtime.sendMessage({ msg: e, channel: o });
}
async function I(e) {
  let o = zr.FromContentToService;
  try {
    return (await Tm(e, o), !0);
  } catch {
    return !1;
  }
}
function Qu(e) {
  let o = (r) => {
    r.channel == zr.FromServiceToContent && e(r.msg);
  };
  return (
    Dr.default.runtime.onMessage.addListener(o),
    () => {
      Dr.default.runtime.onMessage.removeListener(o);
    }
  );
}
var wt = re(ee(), 1);
async function ed(e, o, r, i, t) {
  if (ye && Hu == "stable") {
    wt.default.tabs.create({ url: kr });
    return;
  }
  let n = await wt.default.runtime.getPlatformInfo(),
    a = wt.default.runtime.getManifest(),
    s = {
      type: e,
      dable: { timestamp: r, page_url: o },
      media_type: i,
      details: t,
      platform: { arch: n.arch, os: n.os },
      store: Pe,
      ua: navigator.userAgent,
      version: a.version,
      lang: wt.default.i18n.getUILanguage(),
    };
  await fetch(Fu, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(s),
  });
}
async function td() {
  let o = (await wt.default.tabs.query({ currentWindow: !0, active: !0 }))[0];
  if (o && o.url) {
    let r = Date.now();
    return ed("MISSING_MEDIA", o.url, r, null, null);
  }
}
function Ir(e, o, r, i) {
  return ed("FAILED", e, o, r, i);
}
function rd() {
  document.documentElement.getAttribute("dockmode") == "popup" && window.close();
}
var we = class extends N {
  constructor() {
    super("#notification-template");
  }
  onMounted() {
    this.dismiss_button.onclick = () => {
      I({ name: "rm_notification", data: { notification_id: this.id } });
    };
  }
  onPersistentChanged() {}
  onStateChanged(o) {
    this.setAttribute("type", o.type);
    let r = this.persistent().custom_strings.addon;
    if ((A(this.button_origin), o.type == "download_error"))
      (o.url &&
        (j(this.button_origin),
        this.button_origin.invalidateState({
          url: o.url,
          origin_favicon_url: o.favicon,
          has_drm: o.has_drm,
        })),
        this.vbox_top.classList.add("level-error"),
        A(this.button_action),
        A(this.button_action_2),
        (this.p_title.textContent = Z("download_failed", [], r) + "\u{1F629}"),
        o.interrupt_reason != null
          ? (A(this.button_report), (this.p_description.textContent = o.interrupt_reason))
          : o.has_drm
            ? (A(this.button_report),
              (this.p_description.textContent = Z("download_with_drm_failed_description", [], r)))
            : (j(this.button_report),
              (this.p_description.textContent = Z("download_failed_description", [], r)),
              this.button_report.invalidateState(() =>
                Ir(o.url?.href || "none", o.timestamp, o.media_type, o.details),
              )));
    else if (o.type == "download_interrupted")
      (o.url &&
        (j(this.button_origin),
        this.button_origin.invalidateState({
          url: o.url,
          origin_favicon_url: o.favicon,
          has_drm: !1,
        })),
        this.vbox_top.classList.add("level-warn"),
        A(this.button_action),
        A(this.button_action_2),
        (this.p_title.textContent = Z("download_interrupted", [], r)),
        j(this.button_report),
        (this.p_description.textContent = Z("download_interrupted_description", [], r)),
        this.button_report.invalidateState(() =>
          Ir(o.url?.href || "none", o.timestamp, o.media_type, o.details),
        ));
    else if (o.type == "no_youtube") {
      (this.vbox_top.classList.add("level-error"),
        A(this.button_report),
        A(this.button_action),
        A(this.button_action_2),
        (this.p_title.textContent = Z("no_youtube", [], r)));
      let i = document.createElement("span");
      ((i.textContent = Z("no_youtube_description", [], r)), this.p_description.appendChild(i));
    } else
      o.type == "limit_hls" || o.type == "limit_all" || o.type == "limit_youtube"
        ? (this.vbox_top.classList.add("level-error"),
          A(this.button_report),
          A(this.button_action),
          A(this.button_action_2),
          (this.p_title.textContent = Z("premium_required", [], r)),
          o.type == "limit_hls"
            ? (this.p_description.textContent = Z("premium_hls_required_description", [], r))
            : o.type == "limit_all"
              ? (this.p_description.textContent = Z("premium_all_required_description", [], r))
              : o.type == "limit_youtube" &&
                (this.p_description.textContent = Z("premium_yt_required_description", [], r)))
        : o.type == "one_hundred_downloads"
          ? void 0
          : o.type == "youtube_403" &&
            (this.vbox_top.classList.add("level-error"),
            j(this.button_report),
            A(this.button_action),
            A(this.button_action_2),
            (this.p_title.textContent = Z("youtube_too_many_downloads", [], r)),
            (this.p_description.textContent = Z("youtube_too_many_downloads_description", [], r)),
            this.button_report.invalidateState(() =>
              Ir(o.url?.href || "none", o.timestamp, "youtube", "403"),
            ));
  }
};
(c([_(De)], we.prototype, "button_report", 2),
  c([_(HTMLButtonElement)], we.prototype, "button_action", 2),
  c([_(HTMLButtonElement)], we.prototype, "button_action_2", 2),
  c([_(HTMLParagraphElement)], we.prototype, "p_title", 2),
  c([_(HTMLParagraphElement)], we.prototype, "p_description", 2),
  c([_(HTMLElement)], we.prototype, "vbox_top", 2),
  c([_(Me, "com-dismiss-button")], we.prototype, "dismiss_button", 2),
  c([_(be, "com-media-button-origin")], we.prototype, "button_origin", 2));
var nt = re(ee(), 1);
function Ke(e) {
  var o = String(e);
  if (o === "[object Object]")
    try {
      o = JSON.stringify(e);
    } catch {}
  return o;
}
var Am = (function () {
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
      (e.prototype.unwrapOr = function (o) {
        return o;
      }),
      (e.prototype.expect = function (o) {
        throw new Error("".concat(o));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (o) {
        return this;
      }),
      (e.prototype.mapOr = function (o, r) {
        return o;
      }),
      (e.prototype.mapOrElse = function (o, r) {
        return o();
      }),
      (e.prototype.or = function (o) {
        return o;
      }),
      (e.prototype.orElse = function (o) {
        return o();
      }),
      (e.prototype.andThen = function (o) {
        return this;
      }),
      (e.prototype.toResult = function (o) {
        return Q(o);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new mo(X);
      }),
      e
    );
  })(),
  X = new Am();
Object.freeze(X);
var Pm = (function () {
    function e(o) {
      if (!(this instanceof e)) return new e(o);
      this.value = o;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var o = Object(this.value);
        return Symbol.iterator in o
          ? o[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (o) {
        return this.value;
      }),
      (e.prototype.expect = function (o) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (o) {
        return xe(o(this.value));
      }),
      (e.prototype.mapOr = function (o, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (o, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (o) {
        return this;
      }),
      (e.prototype.orElse = function (o) {
        return this;
      }),
      (e.prototype.andThen = function (o) {
        return o(this.value);
      }),
      (e.prototype.toResult = function (o) {
        return te(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new mo(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(Ke(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  xe = Pm,
  _o;
(function (e) {
  function o() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = [], s = 0, u = t; s < u.length; s++) {
      var l = u[s];
      if (l.isSome()) a.push(l.value);
      else return l;
    }
    return xe(a);
  }
  e.all = o;
  function r() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = 0, s = t; a < s.length; a++) {
      var u = s[a];
      if (u.isSome()) return u;
    }
    return X;
  }
  e.any = r;
  function i(t) {
    return t instanceof xe || t === X;
  }
  e.isOption = i;
})(_o || (_o = {}));
var xt = function (e, o, r) {
    if (r || arguments.length === 2)
      for (var i = 0, t = o.length, n; i < t; i++)
        (n || !(i in o)) && (n || (n = Array.prototype.slice.call(o, 0, i)), (n[i] = o[i]));
    return e.concat(n || Array.prototype.slice.call(o));
  },
  Em = (function () {
    function e(o) {
      if (!(this instanceof e)) return new e(o);
      this.error = o;
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
      (e.prototype.else = function (o) {
        return o;
      }),
      (e.prototype.unwrapOr = function (o) {
        return o;
      }),
      (e.prototype.expect = function (o) {
        throw new Error(
          ""
            .concat(o, " - Error: ")
            .concat(
              Ke(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (o) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              Ke(this.error),
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
      (e.prototype.map = function (o) {
        return this;
      }),
      (e.prototype.andThen = function (o) {
        return this;
      }),
      (e.prototype.mapErr = function (o) {
        return new Q(o(this.error));
      }),
      (e.prototype.mapOr = function (o, r) {
        return o;
      }),
      (e.prototype.mapOrElse = function (o, r) {
        return o(this.error);
      }),
      (e.prototype.or = function (o) {
        return o;
      }),
      (e.prototype.orElse = function (o) {
        return o(this.error);
      }),
      (e.prototype.toOption = function () {
        return X;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(Ke(this.error), ")");
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
        return new fo(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var Q = Em,
  Mm = (function () {
    function e(o) {
      if (!(this instanceof e)) return new e(o);
      this.value = o;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var o = Object(this.value);
        return Symbol.iterator in o
          ? o[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (o) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (o) {
        return this.value;
      }),
      (e.prototype.expect = function (o) {
        return this.value;
      }),
      (e.prototype.expectErr = function (o) {
        throw new Error(o);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(Ke(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (o) {
        return new te(o(this.value));
      }),
      (e.prototype.andThen = function (o) {
        return o(this.value);
      }),
      (e.prototype.mapErr = function (o) {
        return this;
      }),
      (e.prototype.mapOr = function (o, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (o, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (o) {
        return this;
      }),
      (e.prototype.orElse = function (o) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return xe(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(Ke(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new fo(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var te = Mm,
  po;
(function (e) {
  function o(s) {
    for (var u = [], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
    for (
      var p = s === void 0 ? [] : Array.isArray(s) ? s : xt([s], u, !0), f = [], g = 0, m = p;
      g < m.length;
      g++
    ) {
      var b = m[g];
      if (b.isOk()) f.push(b.value);
      else return b;
    }
    return new te(f);
  }
  e.all = o;
  function r(s) {
    for (var u = [], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
    for (
      var p = s === void 0 ? [] : Array.isArray(s) ? s : xt([s], u, !0), f = [], g = 0, m = p;
      g < m.length;
      g++
    ) {
      var b = m[g];
      if (b.isOk()) return b;
      f.push(b.error);
    }
    return new Q(f);
  }
  e.any = r;
  function i(s) {
    try {
      return new te(s());
    } catch (u) {
      return new Q(u);
    }
  }
  e.wrap = i;
  function t(s) {
    try {
      return s()
        .then(function (u) {
          return new te(u);
        })
        .catch(function (u) {
          return new Q(u);
        });
    } catch (u) {
      return Promise.resolve(new Q(u));
    }
  }
  e.wrapAsync = t;
  function n(s) {
    return s.reduce(
      function (u, l) {
        var p = u[0],
          f = u[1];
        return l.isOk()
          ? [xt(xt([], p, !0), [l.value], !1), f]
          : [p, xt(xt([], f, !0), [l.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = n;
  function a(s) {
    return s instanceof Q || s instanceof te;
  }
  e.isResult = a;
})(po || (po = {}));
var Tr = function (e, o, r, i) {
    function t(n) {
      return n instanceof r
        ? n
        : new r(function (a) {
            a(n);
          });
    }
    return new (r || (r = Promise))(function (n, a) {
      function s(p) {
        try {
          l(i.next(p));
        } catch (f) {
          a(f);
        }
      }
      function u(p) {
        try {
          l(i.throw(p));
        } catch (f) {
          a(f);
        }
      }
      function l(p) {
        p.done ? n(p.value) : t(p.value).then(s, u);
      }
      l((i = i.apply(e, o || [])).next());
    });
  },
  Ar = function (e, o) {
    var r = {
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
    function s(l) {
      return function (p) {
        return u([l, p]);
      };
    }
    function u(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), l[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            t &&
              (n =
                l[0] & 2
                  ? t.return
                  : l[0]
                    ? t.throw || ((n = t.return) && n.call(t), 0)
                    : t.next) &&
              !(n = n.call(t, l[1])).done)
          )
            return n;
          switch (((t = 0), n && (l = [l[0] & 2, n.value]), l[0])) {
            case 0:
            case 1:
              n = l;
              break;
            case 4:
              return (r.label++, { value: l[1], done: !1 });
            case 5:
              (r.label++, (t = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((n = r.trys), !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (l[0] === 3 && (!n || (l[1] > n[0] && l[1] < n[3]))) {
                r.label = l[1];
                break;
              }
              if (l[0] === 6 && r.label < n[1]) {
                ((r.label = n[1]), (n = l));
                break;
              }
              if (n && r.label < n[2]) {
                ((r.label = n[2]), r.ops.push(l));
                break;
              }
              (n[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          l = o.call(e, r);
        } catch (p) {
          ((l = [6, p]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  },
  fo = (function () {
    function e(o) {
      this.promise = Promise.resolve(o);
    }
    return (
      (e.prototype.andThen = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Tr(r, void 0, void 0, function () {
            var t;
            return Ar(this, function (n) {
              return i.isErr() ? [2, i] : ((t = o(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Tr(r, void 0, void 0, function () {
            var t;
            return Ar(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((t = te), [4, o(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Tr(r, void 0, void 0, function () {
            var t;
            return Ar(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((t = Q), [4, o(i.error)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (o) {
        return this.orElse(function () {
          return o;
        });
      }),
      (e.prototype.orElse = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Tr(r, void 0, void 0, function () {
            var t;
            return Ar(this, function (n) {
              return i.isOk() ? [2, i] : ((t = o(i.error)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new mo(
          this.promise.then(function (o) {
            return o.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (o) {
        return new e(this.promise.then(o));
      }),
      e
    );
  })();
var Ts = function (e, o, r, i) {
    function t(n) {
      return n instanceof r
        ? n
        : new r(function (a) {
            a(n);
          });
    }
    return new (r || (r = Promise))(function (n, a) {
      function s(p) {
        try {
          l(i.next(p));
        } catch (f) {
          a(f);
        }
      }
      function u(p) {
        try {
          l(i.throw(p));
        } catch (f) {
          a(f);
        }
      }
      function l(p) {
        p.done ? n(p.value) : t(p.value).then(s, u);
      }
      l((i = i.apply(e, o || [])).next());
    });
  },
  As = function (e, o) {
    var r = {
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
    function s(l) {
      return function (p) {
        return u([l, p]);
      };
    }
    function u(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), l[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            t &&
              (n =
                l[0] & 2
                  ? t.return
                  : l[0]
                    ? t.throw || ((n = t.return) && n.call(t), 0)
                    : t.next) &&
              !(n = n.call(t, l[1])).done)
          )
            return n;
          switch (((t = 0), n && (l = [l[0] & 2, n.value]), l[0])) {
            case 0:
            case 1:
              n = l;
              break;
            case 4:
              return (r.label++, { value: l[1], done: !1 });
            case 5:
              (r.label++, (t = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((n = r.trys), !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (l[0] === 3 && (!n || (l[1] > n[0] && l[1] < n[3]))) {
                r.label = l[1];
                break;
              }
              if (l[0] === 6 && r.label < n[1]) {
                ((r.label = n[1]), (n = l));
                break;
              }
              if (n && r.label < n[2]) {
                ((r.label = n[2]), r.ops.push(l));
                break;
              }
              (n[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          l = o.call(e, r);
        } catch (p) {
          ((l = [6, p]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  },
  mo = (function () {
    function e(o) {
      this.promise = Promise.resolve(o);
    }
    return (
      (e.prototype.andThen = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Ts(r, void 0, void 0, function () {
            var t;
            return As(this, function (n) {
              return i.isNone() ? [2, i] : ((t = o(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Ts(r, void 0, void 0, function () {
            var t;
            return As(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((t = xe), [4, o(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (o) {
        return this.orElse(function () {
          return o;
        });
      }),
      (e.prototype.orElse = function (o) {
        var r = this;
        return this.thenInternal(function (i) {
          return Ts(r, void 0, void 0, function () {
            var t;
            return As(this, function (n) {
              return i.isSome() ? [2, i] : ((t = o()), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (o) {
        return new fo(
          this.promise.then(function (r) {
            return r.toResult(o);
          }),
        );
      }),
      (e.prototype.thenInternal = function (o) {
        return new e(this.promise.then(o));
      }),
      e
    );
  })();
function ce(e, o = 0) {
  return e < 1048576 ? `${(e / 1024).toFixed(0)}KB` : `${(e / 1048576).toFixed(o)}MB`;
}
function Pr(e) {
  let o = Math.floor(e / 3600);
  e -= o * 3600;
  let r = Math.floor(e / 60);
  e -= r * 60;
  let i = Math.round(e),
    t = ("0" + o + ":").slice(-3),
    n = ("0" + r + ":").slice(-3),
    a = ("0" + i).slice(-2);
  return (t == "00:" && (t = ""), t + n + a);
}
function ke(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let o = {};
    for (let [r, i] of Object.entries(e.__serde_val)) {
      let t = i;
      o[r] = ke(t);
    }
    return o;
  } else {
    if (e.__serde_tag == "map") return new Map(e.__serde_val.map(([o, r]) => [ke(o), ke(r)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(ke));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(ke);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex") return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return xe(ke(e.__serde_val));
    if (e.__serde_tag == "none") return X;
    if (e.__serde_tag == "ok") return te(ke(e.__serde_val));
    if (e.__serde_tag == "err") return Q(ke(e.__serde_val));
    throw new Error("Unreachable");
  }
}
function oe(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e)) return { __serde_tag: "array", __serde_val: e.map((o) => oe(o)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let o = [];
    return (
      e.forEach((r, i) => {
        o.push([i, r]);
      }),
      { __serde_tag: "headers", __serde_val: o }
    );
  } else {
    if (e instanceof Set) return { __serde_tag: "set", __serde_val: [...e.values()].map(oe) };
    if (e instanceof Map)
      return { __serde_tag: "map", __serde_val: [...e.entries()].map(([o, r]) => [oe(o), oe(r)]) };
    if (e instanceof RegExp) return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if (_o.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: oe(e.value) }
        : { __serde_tag: "none" };
    if (po.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: oe(e.value) }
        : { __serde_tag: "err", __serde_val: oe(e.error) };
    if (typeof e == "object") {
      let o = {};
      for (let [r, i] of Object.entries(e)) o[r] = oe(i);
      return { __serde_tag: "object", __serde_val: o };
    } else throw new Error("Unreachable");
  }
}
function je(e) {
  if (typeof e == "string") return e;
  if (typeof e == "number") return e;
  if (typeof e == "boolean") return e;
  if (typeof e > "u") return e;
  if (e == null) return e;
  if (Array.isArray(e)) return e.map((o) => je(o));
  if (e instanceof URL) return e.href;
  if (e instanceof Headers) {
    let o = [];
    return (
      e.forEach((r, i) => {
        o.push([i, r]);
      }),
      o
    );
  } else {
    if (e instanceof Set) return je([...e.values()]);
    if (e instanceof Map) return je([...e.entries()].map(([o, r]) => ({ key: o, value: r })));
    if (e instanceof RegExp) return e.source;
    if (_o.isOption(e)) return e.isSome() ? je(e.value) : "None";
    if (po.isResult(e)) return e.isOk() ? je(e.value) : je(e.error);
    if (typeof e == "object") {
      let o = {};
      for (let [r, i] of Object.entries(e)) o[r] = je(i);
      return o;
    } else throw new Error("Unreachable");
  }
}
function Ve(e) {
  return ke(oe(e));
}
var jr = re(ee(), 1);
var Zm = re(ee(), 1);
var rt = "";
function nd(e) {
  if (e == "") return te(rt);
  (e.startsWith("/") && (e = e.slice(1)), e.endsWith("/") && (e = e.slice(0, -1)));
  let o = e.split("/");
  for (let i of o)
    if (Se(i) != i)
      return Q('This not a valid path. Avoid special characters. Use "/" between directories.');
  let r = o.join("/") + "/";
  return r.length > 255 ? Q("Path too long") : te(r);
}
function id() {
  return { default_: { max_length: 64, template: "%title" }, rules: [] };
}
function Se(e) {
  let o = e
    .trim()
    .normalize("NFC")
    .replace(/^\.+/gu, "")
    .replace(/[^\p{L}\p{N}\p{M}\-\s_\.]/gu, "")
    .replace(/-+/gu, "-")
    .replace(/\s+/gu, " ")
    .replace(/^(\s|-)+/gu, "")
    .substring(0, 190)
    .replace(/(\s|-)+$/gu, "");
  return o.length == 0 ? "no-name" : o;
}
function ad(e, o) {
  let { template: r, selector: i, max_length: t, replace: n, subdir: a } = o.smartnaming_rule,
    s,
    u;
  if (
    ((s = e.title
      .or(o.title)
      .or(e.filename)
      .map((f) => f.trim())
      .unwrapOr(void 0)),
    o.url.isSome())
  ) {
    let f = o.url.value.host.split(".").slice(-2);
    (f.pop(), (u = f[0]));
  }
  let l = r,
    p = (f, g) => {
      g
        ? (l = l.replace(f, g))
        : ((l = l.replace(` ${f}`, "")),
          (l = l.replace(`-${f}`, "")),
          (l = l.replace(`_${f}`, "")),
          (l = l.replace(`${f}`, "")));
    };
  (p("%title", s),
    p("%hostname", u),
    p("%selector", i),
    (l = l || s || u || ""),
    (l = Se(l).substring(0, t)));
  for (let f of n) l = l.replaceAll(f.from, f.to);
  return ((l = Se(l).substring(0, t)), { basename: l, subdir: a });
}
var ld = y.templateLiteral(["ded_", y.string()]),
  Vm = y.templateLiteral(["media_hash_", y.number()]),
  sd = y.enum(["download", "download_as", "download_audio", "copy"]),
  Fm = y.enum(["popup", "sidebar"]),
  js = y.string().brand("directorypath"),
  qm = y.strictObject({
    downloaded_id: ld,
    media_hash: Vm,
    path: y.string(),
    browser_download_id: y.number(),
    download_timestamp: y.number(),
    origin_url: y.nullable(y.url()),
    origin_favicon_url: y.nullable(y.url()),
    has_drm: y.boolean(),
    subdir: y.optional(js),
  }),
  Bm = y.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]),
  Wm = y.object({
    iat: y.optional(y.number()),
    user_id: y.number(),
    store: y.string().max(256),
    jti: y.string().max(512),
    valid_until: y.number(),
    exp: y.number(),
    developer: y.boolean().optional(),
    entitlement_type: Bm.optional(),
  }),
  Km = Wm.extend({ raw: y.string() }),
  Gm = y.enum(["original", "user_language"]),
  Ym = y.enum(["none", "video", "image"]),
  Jm = y.enum(["system", "light", "dark"]),
  Xm = y.enum(["big", "medium", "small"]),
  Qm = y.enum(["verylarge", "large", "default"]),
  ep = y.strictObject({
    max_length: y.number(),
    template: y.string(),
    force_doc_title: y.optional(y.boolean()),
  }),
  tp = y.strictObject({
    template: y.string(),
    url: y.string(),
    max_length: y.nullable(y.number()),
    selector: y.nullable(y.string()),
    subdir: y.optional(js),
    force_doc_title: y.optional(y.boolean()),
    replace: y.optional(y.array(y.strictObject({ from: y.string(), to: y.string() }))),
  }),
  op = y.enum(["SMART", "OLDEST", "NEWEST"]),
  Ms = y.strictObject({
    version: y.number(),
    default_action: sd,
    default_action_per_hostname: y.map(y.string(), sd),
    downloaded: y.map(ld, qm),
    jwt: y.nullable(Km),
    lsd: y.number(),
    dockmode: Fm,
    download_directory: js,
    youtube_throttle: y.boolean(),
    youtube_audio_strategy: Gm,
    max_concurrent_downloads: y.number(),
    show_desktop_notifications: y.boolean(),
    show_desktop_notifications_private: y.boolean(),
    history_days: y.number(),
    show_transient_history: y.boolean(),
    ui_theme: Jm,
    use_context_menu: y.boolean(),
    dont_ask_for_user_review: y.boolean(),
    successful_downloads_count: y.number(),
    prefered_quality: y.nullable(y.number()),
    prefered_av_muxer: y.enum(["mp4", "mkv"]),
    hide_nomedia_box: y.boolean(),
    popup_size: Xm,
    font_size: Qm,
    prefered_discovered_media_order: op,
    smartnaming: y.strictObject({
      source: y.nullable(y.string()),
      compiled: y.strictObject({ default_: ep, rules: y.array(tp) }),
    }),
    preview_mode: Ym,
    last_migration_request: y.number(),
    custom_strings: y.strictObject({ web: Ku, addon: Wu }),
  }),
  Qv = Ms.readonly();
function ud(e) {
  let o = Er();
  if (e && typeof e == "object")
    for (let r of Object.keys(Ms.shape)) {
      let i = Ms.shape[r];
      if (r in e) {
        let t = e[r],
          n = i.safeParse(t);
        if (n.success) o[r] = n.data;
        else {
          for (let a of n.error.issues)
            (console.warn("Zod issue"), console.warn(a.path.join(".")), console.warn(a.message));
          (console.warn(n.error.issues),
            console.warn(n.error.type),
            console.warn(n.error.message),
            console.warn(
              `Failed to import past persitent state field: ${r}. Fallback to default. Value was:`,
              t,
            ));
        }
      }
    }
  return o;
}
var rp = 1710169438e3;
function Er() {
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
    jwt: null,
    lsd: rp,
    default_action: "download",
    hide_nomedia_box: !0,
    dont_ask_for_user_review: !1,
    dockmode: "popup",
    download_directory: rt,
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
    smartnaming: { source: null, compiled: id() },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
  };
}
function dd(e, o) {
  if (
    !(
      e.favicon_url.map((n) => n.href).unwrapOr("") ==
        o.favicon_url.map((n) => n.href).unwrapOr("") &&
      e.title.unwrapOr("") == o.title.unwrapOr("") &&
      e.thumbnail_url.map((n) => n.href).unwrapOr("") ==
        o.thumbnail_url.map((n) => n.href).unwrapOr("") &&
      e.url.map((n) => n.href).unwrapOr("") == o.url.map((n) => n.href).unwrapOr("")
    )
  )
    return !1;
  let i = e.smartnaming_rule,
    t = o.smartnaming_rule;
  return (
    i.template == t.template &&
    i.max_length == t.max_length &&
    i.selector == t.selector &&
    i.force_doc_title == t.force_doc_title &&
    i.subdir == t.subdir
  );
}
function cd() {
  return {
    current_win_tab: { tab_id: X, win_id: X },
    notifications: new Map(),
    discovered: new Map(),
    downloading: new Map(),
    transient_history: [],
    suspecting_saveas: !1,
  };
}
var Os = "global_session_state",
  Mr = "global_persistent_state",
  ip = "session";
async function md() {
  let e = (await Ls()).lsd,
    o = Er();
  return ((o.lsd = e), ap(o));
}
function ap(e) {
  let o = oe(e);
  return jr.storage.local.set({ [Mr]: o });
}
async function pd() {
  let e = await jr.storage[ip].get(Os);
  if (Os in e) {
    let o = e[Os];
    return ke(o);
  } else return cd();
}
async function Ls() {
  let e = await jr.storage.local.get(Mr);
  if (Mr in e) {
    let o = e[Mr];
    return ud(ke(o));
  }
  return Er();
}
var fd = 3e3,
  _e = class extends N {
    constructor() {
      super("#debug-template");
      this._render_counter = 0;
      this._throbber = "|";
    }
    onPersistentChanged() {}
    onStateChanged(r) {
      ((this.state = r), this._render_counter++);
    }
    onMounted() {
      ((this.button_restart.onclick = () => nt.default.runtime.reload()),
        (this.button_storage.onclick = () => this.printStorage()),
        (this.button_persistent.onclick = () => nt.default.storage.local.clear()),
        (this.button_reload.onclick = () => window.location.reload()),
        (this.button_purge_files.onclick = async () => {
          let r = await navigator.storage.getDirectory();
          for await (let i of r.keys()) r.removeEntry(i);
        }));
    }
    activate() {
      ((this._render_counter = 0),
        this.onTick(),
        setInterval(() => this.onTick(), fd),
        this.printStorage());
    }
    async printStorage() {
      let r = "",
        i = (u) =>
          (r += `${u}
`),
        t = await Ls(),
        n = await pd();
      (console.log("persistent", t), console.log("session", n));
      let a = JSON.stringify(je(n), null, 2),
        s = JSON.stringify(je(t), null, 2);
      (i("== persistent"), i(s), i("== session"), i(a), (this.pre_storage.textContent = r));
    }
    async onTick() {
      this._throbber == "|" ? (this._throbber = "-") : (this._throbber = "|");
      let r = "",
        i = (f) =>
          (r += `${f}
`),
        t = await navigator.storage.getDirectory(),
        n = 0;
      for await (let f of t.keys()) n++;
      let a = await navigator.storage.estimate(),
        s = ce(a.usage || 0),
        u = ce(a.quota || 0);
      (i(`Renders per second: ${(this._render_counter / (fd / 1e3)).toFixed(2)} ${this._throbber}`),
        i(`Internal storage: ${s} / ${u}. ${n} files`));
      let l = await nt.default.declarativeNetRequest.getAvailableStaticRuleCount(),
        p = (await nt.default.declarativeNetRequest.getSessionRules()).length;
      if ((i(`Dec. Rules: ${p} / ${l}`), this.state)) {
        let f = this.state.discovered.size;
        i(`Tracking tabs: ${f}`);
      }
      (nt.default.runtime.lastError &&
        (i("Last runtime error:"), i(nt.default.runtime.lastError.toString())),
        (this.pre_logs.textContent = r),
        (this._render_counter = 0));
    }
  };
(c([_(HTMLButtonElement)], _e.prototype, "button_restart", 2),
  c([_(HTMLButtonElement)], _e.prototype, "button_storage", 2),
  c([_(HTMLButtonElement)], _e.prototype, "button_persistent", 2),
  c([_(HTMLButtonElement)], _e.prototype, "button_purge_files", 2),
  c([_(HTMLButtonElement)], _e.prototype, "button_reload", 2),
  c([_(HTMLPreElement)], _e.prototype, "pre_storage", 2),
  c([_(HTMLPreElement)], _e.prototype, "pre_logs", 2));
var lp = (Cu ? chrome : browser).runtime.getURL("/bitmaps/empty-thumbnail.png"),
  it = class extends N {
    onMounted() {}
    onPersistentChanged() {}
    constructor() {
      (super("#media-preview-template"),
        (this.playing_p = Promise.resolve()),
        Qu(async (o) => {
          if (this.state) {
            if (o.name == "on_preview_available") {
              let r = o.data.tab_id,
                i = o.data.media_hash;
              if (this.state.meta.tab_id == r && this.state.media.hash == i) {
                let t = o.data.filename,
                  s = await (
                    await (await navigator.storage.getDirectory()).getFileHandle(t)
                  ).getFile(),
                  u = URL.createObjectURL(s);
                ((this.preview_url = u),
                  this.dom_video.classList.remove("preview_incoming"),
                  (this.dom_video.src = u));
              }
            } else if (o.name == "on_no_preview") {
              let r = o.data.media_hash;
              this.state.media.hash == r && this.dom_video.classList.remove("preview_incoming");
            }
          }
        }));
    }
    activate() {
      !this.state ||
        this.persistent().preview_mode != "video" ||
        (this.preview_url
          ? (this.dom_video.src != this.preview_url && (this.dom_video.src = this.preview_url),
            (this.playing_p = this.dom_video.play()),
            this.playing_p.catch(() => {
              (console.error("Invalid preview video"), (this.dom_video.src = ""));
            }))
          : (this.dom_video.classList.add("preview_incoming"),
            I({
              name: "request_preview",
              data: { tab_id: this.state.meta.tab_id, media_hash: this.state.media.hash },
            })));
    }
    deactivate() {
      this.playing_p.finally(() => this.dom_video.pause());
    }
    onStateChanged(o) {
      ((this.state = o),
        (this.dom_video.poster = this.state.media.thumbnail_url
          .or(this.state.meta.thumbnail_url)
          .map((r) => r.href)
          .unwrapOr(lp)));
    }
  };
c([_(HTMLVideoElement, "video")], it.prototype, "dom_video", 2);
var Hs = re(ee(), 1);
var kt = "separator",
  Fe = class extends N {
    constructor() {
      super("#native-menu-template");
      this.items = new Map();
    }
    onPersistentChanged() {}
    onMounted() {
      this.dom_select.onchange = () => {
        let r = this.dom_select.children[this.dom_select.selectedIndex];
        if (r) {
          let i = this.items.get(r.value);
          (i && i.onclick(), this.selected_option && (this.selected_option.selected = !0));
        }
      };
    }
    onStateChanged(r) {
      for (let i of r) {
        let t = document.createElement("option");
        (i != kt
          ? (this.items.set(i.id, i),
            (t.value = i.id),
            "text" in i
              ? (t.textContent = i.text)
              : (t.textContent = Z(i.key, [], this.persistent().custom_strings.addon)),
            i.enabled || (t.disabled = !0))
          : ((t.textContent = "\u2500\u2500"), (t.disabled = !0)),
          this.dom_select.appendChild(t));
      }
    }
    setSelectedButton(r) {
      let i = this.dom_select.querySelector(`option[value="${r}"]`);
      i && ((this.selected_option = i), (i.selected = !0));
    }
  };
c([_(HTMLSelectElement, "select")], Fe.prototype, "dom_select", 2);
var hd = ["mp4", "webm", "mkv"],
  gd = ["mp3", "m4a", "ogg"],
  vd = [...hd, ...gd];
function Ns(e) {
  return hd.includes(e);
}
function Us(e) {
  return gd.includes(e);
}
function yd(e, o) {
  return Ns(e) ? St(e, o) : up(e);
}
function up(e) {
  if (e == "mp3") return "mp3";
  if (e == "m4a") return "mp3";
  if (e == "ogg") return "mp3";
  throw new Error("Unreachable");
}
function St(e, o) {
  if (e == "mp4") return o;
  if (e == "webm") return "mkv";
  if (e == "mkv") return "mkv";
  throw new Error("Unreachable");
}
function bd(e, o) {
  let n = e.size.map((l) => l.height).unwrapOr(0),
    a = o.size.map((l) => l.height).unwrapOr(0),
    s = e.bitrate.unwrapOr(0),
    u = o.bitrate.unwrapOr(0);
  return n > a ? -1 : n < a ? 1 : s > u ? -1 : s < u ? 1 : 0;
}
function wd(e, o, r) {
  if (e.is_youtube && o.is_youtube)
    if (e.type != o.type && e.type != "m3u8" && o.type != "m3u8") {
      let a = e.playlist[0].quality,
        s = o.playlist[0].quality,
        u = bd(a, s);
      return u == 0 ? (e.type == "youtube_format" ? -1 : 1) : u;
    } else return e.discovery_timestamp_ms > o.discovery_timestamp_ms ? -1 : 1;
  if (e.is_youtube && !o.is_youtube) return -1;
  if (!e.is_youtube && o.is_youtube) return 1;
  if (e.type != o.type) {
    if (e.type == "mpd_playlist") return -1;
    if (o.type == "mpd_playlist") return 1;
    if (e.type == "m3u8_playlist") return -1;
    if (o.type == "m3u8_playlist") return 1;
  }
  if (e.type == "m3u8_playlist" && o.type == "m3u8_playlist") {
    if (typeof e.duration == "number" && o.duration === "live") return -1;
    if (typeof o.duration == "number" && e.duration === "live") return 1;
  }
  if (r.isSome()) {
    let a = r.value.hostname.split(".").slice(-2).join("."),
      s = e.initiator.map((l) => l.hostname).unwrapOr("noop"),
      u = o.initiator.map((l) => l.hostname).unwrapOr("noop");
    if (s != u) {
      let l = s.split(".").slice(-2).join("."),
        p = u.split(".").slice(-2).join(".");
      if (l == a) return -1;
      if (p == a) return 1;
    }
  }
  if (e.type == o.type) {
    let a = o.discovery_timestamp_ms - e.discovery_timestamp_ms;
    if (Math.abs(a) > 4e3) return o.discovery_timestamp_ms > e.discovery_timestamp_ms ? 1 : -1;
  }
  if (e.type == "m3u8_playlist" && o.type == "m3u8_playlist") {
    if (
      e.duration != o.duration &&
      typeof e.duration == "number" &&
      typeof o.duration == "number"
    ) {
      if (e.duration > o.duration) return -1;
      if (e.duration < o.duration) return 1;
    }
    let a = e.playlist[0].quality,
      s = o.playlist[0].quality;
    return bd(a, s);
  }
  if (e.type == "http_playlist" && o.type == "http_playlist") {
    let a = e.playlist[0].size,
      s = o.playlist[0].size;
    if (a.isSome() && s.isSome()) {
      let u = a.value,
        l = s.value;
      if (u > l) return -1;
      if (l > u) return 1;
    }
  }
  return 0;
}
function Or(e, o) {
  if (e.prefered_entry.isSome() && e.playlist[e.prefered_entry.value])
    return e.prefered_entry.value;
  if (o)
    for (let r of vd) {
      let i = 0;
      for (let { quality: t, demuxer: n } of e.playlist) {
        if (r == n && t.size.isSome() && t.size.value.height == o) return i;
        i++;
      }
    }
  else return 0;
  return 0;
}
function cp(e) {
  let o = [];
  if ((o.push(e.demuxer.toUpperCase()), e.quality.size.isSome())) {
    let { width: r, height: i } = e.quality.size.value;
    o.push(`${r}x${i}`);
  }
  return (e.quality.bitrate.isSome() && o.push(ce(e.quality.bitrate.value) + "/s"), o.join(" - "));
}
var $t = class $t extends N {
  constructor() {
    super("#media-selector-template");
    this.selected_entry = 0;
  }
  static {
    this.CHANGED_EVENT = "entry-changed";
  }
  onMounted() {}
  onPersistentChanged() {}
  getPlaylistEntry() {
    return this.selected_entry;
  }
  onStateChanged(r) {
    let i = !this.media;
    this.media = r;
    let t = Or(r, this.persistent().prefered_quality);
    if (((this.selected_entry = t), i)) {
      let n = r.playlist,
        a = [];
      for (let s = 0; s < n.length; s++) {
        let u = n[s];
        a.push({
          id: `menu_${s}`,
          text: cp(u),
          enabled: !0,
          onclick: () => {
            ((this.selected_entry = s), this.renderSelectedEntry());
            let l = new CustomEvent($t.CHANGED_EVENT, { composed: !0 });
            this.dispatchEvent(l);
          },
        });
      }
      this.menu_options.invalidateState(a);
    }
    this.renderSelectedEntry();
  }
  renderSelectedEntry() {
    let r = this.media.playlist[this.selected_entry];
    if (
      (this.menu_options.setSelectedButton(`menu_${this.selected_entry}`),
      (this.span_demuxer.textContent = r.demuxer),
      r.quality.size.isSome())
    ) {
      j(this.span_size);
      let { height: i } = r.quality.size.value;
      ((this.span_size.textContent = `${i}p`),
        i < 1080
          ? this.span_size.setAttribute("quality", "meh")
          : i == 1080
            ? this.span_size.setAttribute("quality", "good")
            : this.span_size.setAttribute("quality", "very_good"));
    } else
      r.quality.bitrate.isSome()
        ? (j(this.span_size), (this.span_size.textContent = ce(r.quality.bitrate.value)))
        : A(this.span_size);
  }
};
(c([_(Fe)], $t.prototype, "menu_options", 2),
  c([_(HTMLSpanElement)], $t.prototype, "span_demuxer", 2),
  c([_(HTMLSpanElement)], $t.prototype, "span_size", 2));
var at = $t;
var me = class extends N {
  constructor() {
    super("#media-tags-template");
  }
  onMounted() {}
  onPersistentChanged() {}
  onStateChanged(o) {
    if (o.type == "m3u8_playlist") j(this.tag_hls);
    else if (o.type == "m3u8") j(this.tag_m3u8);
    else if (o.type == "http_playlist") j(this.tag_http);
    else if (o.type == "youtube_format") j(this.tag_yt);
    else if (o.type == "mpd_playlist") j(this.tag_mpd);
    else {
      let r = o;
    }
  }
};
(c([_(HTMLSpanElement)], me.prototype, "tag_hls", 2),
  c([_(HTMLSpanElement)], me.prototype, "tag_m3u8", 2),
  c([_(HTMLSpanElement)], me.prototype, "tag_http", 2),
  c([_(HTMLSpanElement)], me.prototype, "tag_yt", 2),
  c([_(HTMLSpanElement)], me.prototype, "tag_mpd", 2));
var _p = [
  "youtube_video_preview",
  "youtube_audio_only",
  "youtube_audio_video_one_source",
  "youtube_audio_video_two_sources",
];
function xd(e) {
  return _p.includes(e.strategy);
}
function mp(e, o, r, i, t, n, a, s) {
  t = Se(t);
  let u = `download_${crypto.randomUUID()}`,
    l = Ve(e.sent_headers),
    p = e.playlist[a].index;
  return o || Us(e.playlist[a].demuxer)
    ? {
        download_id: u,
        headers: l,
        good_basename: t,
        subdir: n,
        save_as: r,
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
        download_id: u,
        headers: l,
        good_basename: t,
        subdir: n,
        save_as: r,
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
function pp(e, o, r, i, t, n, a, s) {
  t = Se(t);
  let u = `download_${crypto.randomUUID()}`,
    l = e.playlist[a],
    p = Ve(e.sent_headers);
  if (l.av.video == !1)
    return {
      download_id: u,
      headers: p,
      good_basename: t,
      subdir: n,
      save_as: r,
      will_use_jsfetch: !1,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: l.av.audio.url,
      content_length: l.av.audio.content_length,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
  if (o)
    return l.av.audio
      ? {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: l.av.audio.url,
          content_length: l.av.audio.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: l.av.video.url,
          content_length: l.av.video.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  {
    let f = l.demuxer,
      g = St(f, i);
    return l.av.audio
      ? {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: g,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_two_sources",
          url: l.av.video.url,
          content_length: l.av.video.content_length,
          url_audio: l.av.audio.url,
          audio_content_length: l.av.audio.content_length,
          extension: g,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: g,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_one_source",
          url: l.av.video.url,
          content_length: l.av.video.content_length,
          extension: g,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  }
}
function fp(e, o, r, i, t, n, a, s) {
  t = Se(t);
  let u = `download_${crypto.randomUUID()}`,
    l = e.playlist[a],
    p = Ve(e.sent_headers),
    f = e.duration;
  if (l.av.video == !1)
    return {
      download_id: u,
      headers: p,
      good_basename: t,
      subdir: n,
      duration: f,
      save_as: r,
      will_use_jsfetch: !1,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: l.av.audio,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
  if (o)
    return l.av.audio
      ? {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          duration: f,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: l.av.audio,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          duration: f,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: l.av.video,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  {
    let g = l.demuxer,
      m = St(g, i);
    return l.av.audio
      ? {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: m,
          duration: f,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_two_sources",
          url: l.av.video,
          url_audio: l.av.audio,
          extension: m,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: p,
          good_basename: t,
          subdir: n,
          muxer: m,
          duration: f,
          save_as: r,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_one_source",
          url: l.av.video,
          extension: m,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  }
}
function hp(e, o, r, i, t, n, a) {
  t = Se(t);
  let s = `download_${crypto.randomUUID()}`,
    u = Ve(e.sent_headers),
    l = e.url,
    p = e.duration;
  if (o || Us(e.demuxer))
    return {
      save_as: r,
      subdir: n,
      duration: p,
      will_use_jsfetch: !0,
      download_id: s,
      headers: u,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: l,
      good_basename: t,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
  {
    let f = St(e.demuxer, i);
    return {
      download_id: s,
      headers: u,
      subdir: n,
      duration: p,
      will_use_jsfetch: !0,
      save_as: r,
      strategy: "m3u8_audio_video_one_source",
      muxer: f,
      url: l,
      good_basename: t,
      extension: f,
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
  }
}
function gp(e, o, r, i, t, n, a, s) {
  t = Se(t);
  let u = `download_${crypto.randomUUID()}`,
    l = e.playlist[a],
    p = e.extension == "flv" && l.size.isNone(),
    f = (e.libav_demuxer.isSome() && Ns(e.libav_demuxer.value) && e.supports_byte_ranges) || p;
  if (o)
    return {
      save_as: r,
      download_id: u,
      subdir: n,
      will_use_jsfetch: !0,
      headers: Ve(e.sent_headers),
      strategy: "http_strip_audio_jsfetch",
      url: l.av.video,
      good_basename: t,
      muxer: "mp3",
      extension: "mp3",
      is_youtube: e.is_youtube,
      size: l.size,
      throttle: s,
      cache: e.cache,
    };
  if (f) {
    let g,
      m = "";
    if (
      (e.libav_demuxer.isSome()
        ? ((g = yd(e.libav_demuxer.value, i)), (m = g))
        : ((g = i), (m = i)),
      l.av.audio)
    ) {
      let b = l.demuxer,
        z = St(b, i);
      return {
        save_as: r,
        download_id: u,
        subdir: n,
        will_use_jsfetch: !0,
        headers: Ve(e.sent_headers),
        strategy: "http_audio_video_two_sources_jsfetch",
        url: l.av.video,
        url_audio: l.av.audio,
        good_basename: t,
        muxer: z,
        extension: z,
        size: l.size,
        duration: e.duration,
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      };
    } else
      return {
        save_as: r,
        download_id: u,
        subdir: n,
        will_use_jsfetch: !0,
        headers: Ve(e.sent_headers),
        strategy: "http_audio_video_one_source_jsfetch",
        url: l.av.video,
        good_basename: t,
        muxer: g,
        extension: m,
        size: l.size,
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      };
  } else
    return {
      save_as: r,
      download_id: u,
      subdir: n,
      will_use_jsfetch: !1,
      headers: Ve(e.sent_headers),
      strategy: "http_audio_video_one_source",
      url: e.playlist[0].av.video,
      good_basename: t,
      size: l.size,
      extension: e.extension,
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
}
function Rs(e, o, r, i, t, n, a, s) {
  if (e.type == "http_playlist") return gp(e, o, r, i, t, n, a, s);
  if (e.type == "m3u8") return hp(e, o, r, i, t, n, s);
  if (e.type == "m3u8_playlist") return fp(e, o, r, i, t, n, a, s);
  if (e.type == "youtube_format") {
    if (typeof a == "number") return pp(e, o, r, i, t, n, a, s);
    throw "Missing playlist_entry";
  } else if (e.type == "mpd_playlist") {
    if (typeof a == "number") return mp(e, o, r, i, t, n, a, s);
    throw "Missing playlist_entry";
  } else throw new Error("Unreachable");
}
var K = class extends N {
  constructor() {
    super("#media-discovered-template");
    this.filename_is_dirty = !1;
    this.action = "download";
  }
  onMounted() {
    (ye && this.span_filename.classList.add("firefox"),
      (this.span_filename.onkeydown = (r) =>
        r.key == "Enter"
          ? (this.box_combo.querySelector('button:not([hidden="true"])').focus(), !1)
          : !0),
      this.span_filename.addEventListener("blur", () => {
        let r = Se(this.span_filename.textContent || "");
        (this.span_filename.textContent != r &&
          ((this.span_filename.textContent = r), (this.filename_is_dirty = !0)),
          window.getSelection()?.removeAllRanges());
      }));
  }
  onPersistentChanged() {}
  onStateChanged(r) {
    let { media: i, meta: t } = r,
      n = !this.media;
    if (((this.meta = t), (this.media = i), !n)) {
      if (!this.filename_is_dirty) {
        let l = this.buildArgs(!1);
        this.span_filename.textContent = l.good_basename;
      }
      this.span_directory.textContent = this.meta.smartnaming_rule.subdir;
      return;
    }
    ((this.action = t.default_action), this.updateActionButtons(), this.setupMediaSelector());
    let a = this.media.type != "http_playlist" || this.media.extension == "mp4";
    (this.menu_options.invalidateState([
      {
        id: "menu_set_default_action_download",
        key: "download_audio_and_video_menu",
        enabled: !0,
        onclick: () => s("download"),
      },
      kt,
      {
        id: "menu_do_download_as",
        key: "download_as_button_and_menu",
        enabled: !0,
        onclick: () => this.doDownloadAs(),
      },
      {
        id: "menu_set_default_action_download_as",
        key: "always_download_as_menu",
        enabled: !0,
        onclick: () => s("download_as"),
      },
      kt,
      {
        id: "menu_do_audio_only",
        key: "download_audio_only_menu",
        enabled: a,
        onclick: () => this.doDownloadAudio(),
      },
      {
        id: "menu_set_default_action_audio_only",
        key: "audio_only_for_this_website",
        enabled: a,
        onclick: () => s("download_audio"),
      },
      kt,
      { id: "menu_do_copy_link", key: "copy_url", enabled: !0, onclick: () => this.doCopyLink() },
      {
        id: "menu_set_default_action_copy",
        key: "always_copy_url",
        enabled: !0,
        onclick: () => s("copy"),
      },
      kt,
      {
        id: "menu_show_smartnaming",
        text: "Smartnaming",
        enabled: !0,
        onclick: () => {
          Hs.default.tabs.create({ url: "/content/smartnaming.html" });
        },
      },
      {
        id: "menu_do_details",
        key: "details",
        enabled: !0,
        onclick: () => {
          Hs.default.tabs.create({
            url: `/content/details.html?tab_id=${t.tab_id}&media_hash=${i.hash}`,
          });
        },
      },
    ]),
      this.media_tags.invalidateState(i));
    let s = (l) => {
      if (!this.meta?.url.isSome()) return;
      let p = this.meta.url.value.hostname;
      (I({ name: "set_default_action", data: { action: l, hostname: p } }),
        (this.action = l),
        this.updateMediaSelectorVisibility());
      let f = this.buildArgs(!0);
      ((this.span_extension.textContent = f.extension), this.updateActionButtons());
    };
    R(this.box_drm, i.has_drm);
    let u = this.buildArgs(!1);
    ((this.span_directory.textContent = u.subdir),
      (this.span_filename.textContent = u.good_basename),
      (this.span_extension.textContent = u.extension),
      this.updateActionButtons(),
      (this.action_copy.onclick = () => this.doCopyLink()),
      (this.action_download.onclick = () => this.doDownload()),
      (this.action_download_as.onclick = () => this.doDownloadAs()),
      (this.action_download_audio.onclick = () => this.doDownloadAudio()),
      this.setupFilenameEditor());
  }
  doCopyLink() {
    let r = this.buildArgs(!0);
    navigator.clipboard.writeText(r.url.href);
  }
  doDownload() {
    let r = this.buildArgs(!0);
    I({
      name: "do_download",
      data: { download_args: oe(r), meta: oe(this.meta), media: oe(this.media) },
    });
  }
  doDownloadAs() {
    ((this.action = "download_as"), this.doDownload());
  }
  doDownloadAudio() {
    ((this.action = "download_audio"), this.doDownload());
  }
  updateMediaSelectorVisibility() {
    "playlist" in this.media
      ? R(this.media_selector, this.action != "download_audio")
      : A(this.media_selector);
  }
  setupMediaSelector() {
    let r = this.media;
    ("playlist" in r &&
      (this.media_selector.invalidateState(r),
      this.media_selector.addEventListener(at.CHANGED_EVENT, (i) => {
        let { extension: t } = this.buildArgs(!0);
        this.span_extension.textContent = t;
        let n = this.media_selector.getPlaylistEntry();
        I({ name: "update_media_prefered_entry", data: { playlist_index: n, media_hash: r.hash } });
      })),
      this.updateMediaSelectorVisibility());
  }
  updateActionButtons() {
    this.action &&
      (this.action == "copy"
        ? this.menu_options.setSelectedButton("menu_set_default_action_copy")
        : this.action == "download"
          ? this.menu_options.setSelectedButton("menu_set_default_action_download")
          : this.action == "download_audio"
            ? this.menu_options.setSelectedButton("menu_set_default_action_audio_only")
            : this.action == "download_as"
              ? this.menu_options.setSelectedButton("menu_set_default_action_download_as")
              : this.action,
      R(this.action_copy, this.action == "copy"),
      R(this.action_download, this.action == "download"),
      R(this.action_download_as, this.action == "download_as"),
      R(this.action_download_audio, this.action == "download_audio"));
  }
  setupFilenameEditor() {
    let r = !1;
    (this.span_filename.addEventListener("blur", () => {
      ((r = !0), setTimeout(() => (r = !1), 500), co(this.button_rename_2));
    }),
      this.span_filename.addEventListener("focus", () => {
        $r(this.button_rename_2);
      }));
    let i = () => {
      let t = window.getSelection();
      if ((t && t.removeAllRanges(), r)) return;
      let n = document.createRange();
      (n.selectNodeContents(this.span_filename), t && t.addRange(n), this.span_filename.focus());
    };
    ((this.button_rename_1.onclick = i), (this.button_rename_2.onclick = i));
  }
  buildArgs(r) {
    let i = this.action == "download_audio",
      t = this.action == "download_as",
      n = this.media,
      a = ad(n, this.meta),
      s = r ? Se(this.span_filename.textContent) : a.basename,
      u = n.is_youtube && this.persistent().youtube_throttle,
      l = this.persistent().prefered_av_muxer;
    if ("playlist" in n) {
      let p = r
        ? this.media_selector.getPlaylistEntry()
        : Or(n, this.persistent().prefered_quality);
      return Rs(n, i, t, l, s, a.subdir, p, u);
    } else return Rs(n, i, t, l, s, a.subdir, void 0, u);
  }
};
(c([_(HTMLSpanElement)], K.prototype, "span_extension", 2),
  c([_(HTMLSpanElement)], K.prototype, "span_filename", 2),
  c([_(HTMLSpanElement)], K.prototype, "span_directory", 2),
  c([_(Fe)], K.prototype, "menu_options", 2),
  c([_(me)], K.prototype, "media_tags", 2),
  c([_(HTMLElement)], K.prototype, "box_combo", 2),
  c([_(HTMLElement)], K.prototype, "box_drm", 2),
  c([_(HTMLButtonElement)], K.prototype, "action_download_audio", 2),
  c([_(HTMLButtonElement)], K.prototype, "action_download", 2),
  c([_(HTMLButtonElement)], K.prototype, "action_download_as", 2),
  c([_(HTMLButtonElement)], K.prototype, "action_copy", 2),
  c([_(at)], K.prototype, "media_selector", 2),
  c([_(HTMLButtonElement)], K.prototype, "button_rename_1", 2),
  c([_(HTMLButtonElement)], K.prototype, "button_rename_2", 2));
var pe = class extends N {
  constructor() {
    super("#media-downloading-template");
    this.interruptable = !1;
  }
  onMounted() {
    this.button_stop.onclick = () => {
      this.download_id && I({ name: "abort_download", data: { download_id: this.download_id } });
    };
  }
  onPersistentChanged() {
    this.button_stop.textContent = Z(
      this.interruptable ? "stop" : "cancel",
      [],
      this.persistent().custom_strings.addon,
    );
  }
  onStateChanged(r) {
    let i = r.download_args,
      t = i.subdir + i.good_basename + "." + i.extension;
    if (
      ((this.interruptable = !xd(i) && i.strategy != "http_audio_video_one_source"),
      this.span_filename.textContent != t && (this.span_filename.textContent = t),
      (this.download_id = r.download_args.download_id),
      this.media_tags.invalidateState(r.media),
      r.status == "queuing")
    )
      (A(this.span_percent),
        A(this.span_bitrate),
        co(this.button_stop),
        A(this.span_live_icon),
        this.div_progressbar.classList.add("undefined"),
        (this.div_progressbar.style.transform = "unset"));
    else if (r.status == "downloading")
      if (
        (j(this.span_percent),
        j(this.span_bitrate),
        co(this.button_stop),
        this.div_progressbar.classList.remove("undefined"),
        (this.span_bitrate.textContent = ce(r.bitrate, 2) + "/s"),
        r.percent.is_known)
      ) {
        (A(this.span_live_icon),
          (this.span_percent.textContent = Math.floor(r.percent.value) + "%"));
        let n = 100 - r.percent.value;
        this.div_progressbar.style.transform = `translateX(-${n}%)`;
      } else {
        if ((j(this.span_live_icon), r.output_duration_s)) {
          let n = Pr(r.output_duration_s);
          this.span_percent.textContent = n;
        } else this.span_percent.textContent = "";
        this.div_progressbar.style.transform = "unset";
      }
    else
      r.status == "finalizing" &&
        (j(this.span_percent),
        $r(this.button_stop),
        A(this.span_bitrate),
        A(this.span_live_icon),
        this.div_progressbar.classList.remove("undefined"),
        (this.span_percent.textContent = ""),
        (this.div_progressbar.style.transform = "unset"));
  }
};
(c([_(HTMLSpanElement)], pe.prototype, "span_filename", 2),
  c([_(HTMLSpanElement)], pe.prototype, "span_percent", 2),
  c([_(HTMLSpanElement)], pe.prototype, "span_live_icon", 2),
  c([_(HTMLSpanElement)], pe.prototype, "span_bitrate", 2),
  c([_(HTMLDivElement)], pe.prototype, "div_progressbar", 2),
  c([_(HTMLButtonElement)], pe.prototype, "button_stop", 2),
  c([_(me)], pe.prototype, "media_tags", 2));
var st = re(ee(), 1);
function vp(e, o) {
  let r = window.navigator.userAgent,
    i = "/";
  r.includes("Windows") && (i = "\\");
  let n = e.split(i).pop();
  return o + n;
}
var fe = class extends N {
  constructor() {
    super("#media-downloaded-template");
  }
  onMounted() {
    ((this.button_play.onclick = () => {
      if (!this.browser_download_id) return;
      let i = this.browser_download_id,
        t = async () => {
          let a = { permissions: ["downloads.open"] };
          (await st.default.permissions.request(a)) && st.default.downloads.open(i);
        };
      st.default.downloads.open
        ? st.default.downloads.open(i).catch((n) => {
            t();
          })
        : t();
    }),
      (this.button_not_playing.onclick = () => {
        this.downloaded_id && st.default.tabs.create({ url: "https://github.com/Atamol/FreeVDH" });
      }),
      (this.button_dir.onclick = () => {
        this.browser_download_id && st.default.downloads.show(this.browser_download_id);
      }));
    let o = () => {
        (this.classList.add("disappearing"),
          this.browser_download_id &&
            I({ name: "rm_download", data: { browser_download_id: this.browser_download_id } }));
      },
      r = () => {
        this.browser_download_id &&
          I({ name: "retry_download", data: { media_hash: this.media_hash, tab_id: this.tab_id } });
      };
    ((this.button_rm.onclick = o), (this.button_retry.onclick = r));
  }
  onPersistentChanged() {}
  onStateChanged(o) {
    let { meta: r, ded: i } = o,
      t = !r;
    if (
      (this.classList.toggle("collapsed", t),
      this.classList.remove("disappearing"),
      (this.p_filename.textContent = vp(i.path, i.subdir || rt)),
      (this.browser_download_id = i.browser_download_id),
      (this.downloaded_id = i.downloaded_id),
      (this.media_hash = i.media_hash),
      r && (this.tab_id = r.tab_id),
      i.origin_url)
    ) {
      j(this.button_origin);
      let n = null;
      (i.origin_favicon_url && (n = new URL(i.origin_favicon_url)),
        this.button_origin.invalidateState({
          url: new URL(i.origin_url),
          origin_favicon_url: n,
          has_drm: i.has_drm,
        }));
    } else A(this.button_origin);
  }
};
(c([_(HTMLParagraphElement)], fe.prototype, "p_filename", 2),
  c([_(HTMLButtonElement)], fe.prototype, "button_play", 2),
  c([_(HTMLButtonElement)], fe.prototype, "button_not_playing", 2),
  c([_(HTMLButtonElement)], fe.prototype, "button_dir", 2),
  c([_(HTMLButtonElement)], fe.prototype, "button_rm", 2),
  c([_(HTMLButtonElement)], fe.prototype, "button_retry", 2),
  c([_(be)], fe.prototype, "button_origin", 2));
var Oe = class extends N {
  constructor() {
    super("#media-meta-template");
  }
  onMounted() {}
  onPersistentChanged() {}
  onStateChanged(o) {
    let { media: r, meta: i } = o,
      t = !1;
    if (
      ("duration" in r
        ? (j(this.p_duration),
          typeof r.duration == "number"
            ? ((this.p_duration.textContent = Pr(r.duration)),
              (r.type == "m3u8_playlist" ||
                r.type == "youtube_format" ||
                r.type == "mpd_playlist") &&
                (t = !0))
            : r.duration == "live"
              ? (this.p_duration.textContent = "live")
              : A(this.p_duration))
        : A(this.p_duration),
      r.type == "http_playlist")
    ) {
      let n = r.playlist[0].size;
      n.isSome() ? (this.p_size.textContent = ce(n.value)) : A(this.p_size);
    } else A(this.p_size);
    (A(this.p_star),
      i.favicon_url.isSome()
        ? (this.div_favicon.style.backgroundImage = `url(${i.favicon_url.value.href})`)
        : A(this.div_favicon));
  }
};
(c([_(HTMLParagraphElement)], Oe.prototype, "p_duration", 2),
  c([_(HTMLParagraphElement)], Oe.prototype, "p_size", 2),
  c([_(HTMLParagraphElement)], Oe.prototype, "p_star", 2),
  c([_(HTMLDivElement)], Oe.prototype, "div_favicon", 2));
var $e = class extends N {
  constructor() {
    super("#media-template");
    this.status = "discovered";
    this.preview_mode = "image";
  }
  onMounted() {
    ((this.dismiss_button.onclick = () => {
      this.media &&
        this.meta &&
        I({
          name: "dismiss_media",
          data: { tab_id: this.meta.tab_id, media_hash: this.media.hash },
        });
    }),
      this.addEventListener("mouseenter", () => {
        (this.status == "discovered" || this.status == "downloaded") &&
          this.media_preview.activate();
      }),
      this.addEventListener("mouseleave", () => {
        this.media_preview.deactivate();
      }));
  }
  onPersistentChanged() {}
  toggleHiddens() {
    (R(this.vbox_dismiss, this.status != "downloading"),
      R(this.media_downloading, this.status == "downloading"),
      R(this.media_downloaded, this.status == "downloaded"),
      R(this.media_discovered, this.status == "discovered"),
      R(this.stack_top, this.preview_mode != "none"));
  }
  activatePreview() {
    this.media_preview.activate();
  }
  isDiscovered() {
    this.status != "discovered" && ((this.status = "discovered"), this.toggleHiddens());
  }
  isDownloading(r) {
    ((this.status = "downloading"),
      this.media_downloading.invalidateState(r),
      this.toggleHiddens(),
      this.media_preview.deactivate());
  }
  isDownloaded(r) {
    this.status != "downloaded" &&
      ((this.status = "downloaded"),
      this.media_downloaded.invalidateState({ ded: r, meta: this.meta }),
      this.toggleHiddens(),
      this.media_preview.deactivate());
  }
  onStateChanged(r) {
    (this.meta && dd(this.meta, r.meta)) ||
      ((this.media = r.media),
      (this.meta = r.meta),
      this.media_preview.invalidateState(r),
      this.media_discovered.invalidateState(r),
      this.media_meta.invalidateState(r),
      this.toggleHiddens());
  }
};
(c([_(it, "com-media-preview")], $e.prototype, "media_preview", 2),
  c([_(K, "com-media-discovered")], $e.prototype, "media_discovered", 2),
  c([_(pe, "com-media-downloading")], $e.prototype, "media_downloading", 2),
  c([_(fe, "com-media-downloaded")], $e.prototype, "media_downloaded", 2),
  c([_(Oe, "com-media-meta")], $e.prototype, "media_meta", 2),
  c([_(Me, "com-dismiss-button")], $e.prototype, "dismiss_button", 2),
  c([_(HTMLElement)], $e.prototype, "stack_top", 2),
  c([_(HTMLElement)], $e.prototype, "vbox_dismiss", 2));
var go = re(ee(), 1);
var ae = class ae extends N {
  static {
    this.TOGGLE_DEBUG = "toggle-debug";
  }
  static {
    this.TOGGLE_SETTINGS = "toggle-settings";
  }
  constructor() {
    super("#toolbar-template");
  }
  onPersistentChanged() {
    let o = this.persistent();
    (R(this.button_popup, o.dockmode == "sidebar"),
      R(this.button_sidebar, o.dockmode == "popup"),
      R(this.button_show_nomedia, o.hide_nomedia_box),
      this.button_show_history.classList.toggle("has_downloaded", o.downloaded.size > 0),
      o.jwt?.developer &&
        (j(this.button_debug),
        (this.button_debug.onclick = () => {
          let r = new CustomEvent(ae.TOGGLE_DEBUG, { composed: !0 });
          this.dispatchEvent(r);
        })));
  }
  onStateChanged(o) {
    this.button_show_dir.classList.toggle("has_downloaded", o.transient_history.length > 0);
  }
  onMounted() {
    ((this.button_show_dir.onclick = () => {
      go.default.downloads.showDefaultFolder();
    }),
      (this.button_show_nomedia.onclick = () => {
        I({ name: "mut-settings", data: { hide_nomedia_box: !1 } });
      }),
      (this.toolbar_button_settings.onclick = () => {
        let r = new CustomEvent(ae.TOGGLE_SETTINGS, { composed: !0 });
        this.dispatchEvent(r);
      }),
      (this.button_trash.onclick = () => {
        I({ name: "clear-completed", data: null });
      }),
      (this.button_show_translate.onclick = () => {
        (go.default.tabs.create({ url: "/content/translate.html" }),
          this.persistent().dockmode == "popup" && window.close());
      }),
      (this.button_show_history.onclick = () => {
        (go.default.tabs.create({ url: "/content/history.html" }),
          this.persistent().dockmode == "popup" && window.close());
      }));
    let o = async (r) => {
      (await I({ name: "redock", data: { mode: r } }), window.close());
    };
    ((this.button_popup.onclick = () => o("popup")),
      (this.button_sidebar.onclick = () => o("sidebar")),
      (this.button_help.onclick = () => {
        go.default.tabs.create({ url: kr });
      }));
  }
};
(c([_(HTMLButtonElement)], ae.prototype, "button_show_dir", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_show_history", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_show_nomedia", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_show_translate", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_trash", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_help", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_popup", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_sidebar", 2),
  c([_(HTMLButtonElement)], ae.prototype, "button_debug", 2),
  c([_(HTMLButtonElement)], ae.prototype, "toolbar_button_settings", 2));
var Lr = ae;
var ze = re(ee(), 1);
var lt = re(ee(), 1);
function Cs() {
  ye
    ? lt.default.tabs.create({
        url: "https://support.mozilla.org/en-US/kb/where-find-and-manage-downloaded-files-firefox#w_change-where-downloads-are-saved",
      })
    : lt.default.tabs.create({ url: "chrome://settings/downloads" });
}
function kd() {
  ye
    ? lt.default.tabs.create({
        url: "https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows",
      })
    : lt.default.tabs.create({ url: `chrome://extensions/?id=${lt.default.runtime.id}` });
}
async function Sd() {
  if (Zu) return !1;
  let e = await lt.default.runtime.getPlatformInfo();
  return e.os == "linux" || e.os == "openbsd";
}
function Nr() {
  document.documentElement.getAttribute("dockmode") == "popup" && window.close();
}
var T = class T extends N {
  static {
    this.TOGGLE_SETTINGS = "toggle-setting";
  }
  onPersistentChanged() {
    let o = this.persistent();
    ((this.checkbox_youtube_throttle.checked = o.youtube_throttle),
      (this.checkbox_youtube_audio_original.checked = o.youtube_audio_strategy == "original"),
      (this.input_concurrent_downloads.value = o.max_concurrent_downloads.toString()),
      (this.checkbox_show_desktop_notifications.checked = o.show_desktop_notifications),
      (this.checkbox_show_desktop_notifications_private.checked =
        o.show_desktop_notifications_private),
      (this.prefered_quality_highest.checked = o.prefered_quality === null),
      (this.prefered_quality_1080p.checked = o.prefered_quality === 1080),
      (this.prefered_quality_720p.checked = o.prefered_quality === 720),
      (this.prefered_quality_480p.checked = o.prefered_quality === 480),
      (this.checkbox_always_download_as_mkv.checked = o.prefered_av_muxer == "mkv"),
      (this.preview_mode_none.checked = o.preview_mode == "none"),
      (this.preview_mode_video.checked = o.preview_mode == "video"),
      (this.preview_mode_image.checked = o.preview_mode == "image"),
      (this.theme_light.checked = o.ui_theme == "light"),
      (this.theme_dark.checked = o.ui_theme == "dark"),
      (this.theme_system.checked = o.ui_theme == "system"),
      (this.popup_size_small.checked = o.popup_size == "small"),
      (this.popup_size_medium.checked = o.popup_size == "medium"),
      (this.popup_size_big.checked = o.popup_size == "big"),
      (this.font_size_default.checked = o.font_size == "default"),
      (this.font_size_large.checked = o.font_size == "large"),
      (this.font_size_verylarge.checked = o.font_size == "verylarge"),
      (this.dock_popup.checked = o.dockmode == "popup"),
      (this.dock_sidebar.checked = o.dockmode == "sidebar"),
      (this.prefered_discovered_order_newest.checked =
        o.prefered_discovered_media_order == "NEWEST"),
      (this.prefered_discovered_order_oldest.checked =
        o.prefered_discovered_media_order == "OLDEST"),
      (this.prefered_discovered_order_smart.checked = o.prefered_discovered_media_order == "SMART"),
      (this.checkbox_transient_history.checked = o.show_transient_history),
      (this.checkbox_history.checked = o.history_days > 0),
      o.history_days == 0
        ? (A(this.input_history.parentElement), (this.input_history.value = "30"))
        : (j(this.input_history.parentElement),
          (this.input_history.value = o.history_days.toString())),
      (this.checkbox_context_menu.checked = o.use_context_menu),
      (this.input_subdirectory.value = o.download_directory));
    A(this.p_leave_review);
  }
  scrollUp() {
    this.box_main.scroll({ top: 0 });
  }
  onStateChanged(o) {
    R(this.section_suspecting_saveas, o.suspecting_saveas);
  }
  constructor() {
    super("#settings-template");
  }
  onMounted() {
    (A(this.p_leave_review),
      Pe == "google" && !Vu && A(this.section_youtube),
      (this.button_back.onclick = () => {
        let i = new CustomEvent(T.TOGGLE_SETTINGS, { composed: !0 });
        this.dispatchEvent(i);
      }),
      (this.checkbox_youtube_throttle.onchange = () => {
        let i = this.checkbox_youtube_throttle.checked;
        I({ name: "mut-settings", data: { youtube_throttle: i } });
      }),
      (this.checkbox_youtube_audio_original.onchange = () => {
        let i = this.checkbox_youtube_audio_original.checked;
        I({
          name: "mut-settings",
          data: { youtube_audio_strategy: i ? "original" : "user_language" },
        });
      }));
    let o;
    ((this.input_subdirectory.oninput = () => {
      (clearTimeout(o),
        (o = setTimeout(() => {
          let i = this.input_subdirectory.value,
            t = nd(i);
          (R(this.span_bad_download_subdirectory, t.isErr()),
            t.isOk() && I({ name: "mut-settings", data: { download_directory: t.value } }));
        }, 1e3)));
    }),
      (this.input_concurrent_downloads.onchange = () => {
        let i = parseInt(this.input_concurrent_downloads.value);
        I({ name: "mut-settings", data: { max_concurrent_downloads: i } });
      }),
      (this.checkbox_show_desktop_notifications.onchange = () => {
        let i = this.checkbox_show_desktop_notifications.checked;
        I({ name: "mut-settings", data: { show_desktop_notifications: i } });
      }),
      (this.checkbox_show_desktop_notifications_private.onchange = () => {
        let i = this.checkbox_show_desktop_notifications_private.checked;
        I({ name: "mut-settings", data: { show_desktop_notifications_private: i } });
      }),
      (this.prefered_quality_highest.onchange = () => {
        this.prefered_quality_highest.checked &&
          I({ name: "mut-settings", data: { prefered_quality: null } });
      }),
      (this.prefered_quality_1080p.onchange = () => {
        this.prefered_quality_1080p.checked &&
          I({ name: "mut-settings", data: { prefered_quality: 1080 } });
      }),
      (this.prefered_quality_720p.onchange = () => {
        this.prefered_quality_720p.checked &&
          I({ name: "mut-settings", data: { prefered_quality: 720 } });
      }),
      (this.prefered_quality_480p.onchange = () => {
        this.prefered_quality_480p.checked &&
          I({ name: "mut-settings", data: { prefered_quality: 480 } });
      }),
      (this.prefered_discovered_order_oldest.onchange = () => {
        this.prefered_discovered_order_oldest.checked &&
          I({ name: "mut-settings", data: { prefered_discovered_order: "OLDEST" } });
      }),
      (this.prefered_discovered_order_newest.onchange = () => {
        this.prefered_discovered_order_newest.checked &&
          I({ name: "mut-settings", data: { prefered_discovered_order: "NEWEST" } });
      }),
      (this.prefered_discovered_order_smart.onchange = () => {
        this.prefered_discovered_order_smart.checked &&
          I({ name: "mut-settings", data: { prefered_discovered_order: "SMART" } });
      }),
      (this.checkbox_always_download_as_mkv.onchange = () => {
        let i = this.checkbox_always_download_as_mkv.checked;
        I({ name: "mut-settings", data: { always_download_as_mkv: i } });
      }));
    let r = () => {
      let t = this.checkbox_history.checked ? parseInt(this.input_history.value) : 0;
      I({ name: "mut-settings", data: { history_days: t } });
    };
    ((this.input_history.onchange = r),
      (this.checkbox_history.onchange = r),
      (this.checkbox_transient_history.onchange = () => {
        let i = this.checkbox_transient_history.checked;
        I({ name: "mut-settings", data: { show_transient_history: i } });
      }),
      (this.theme_light.onchange = () => {
        this.theme_light.checked && I({ name: "mut-settings", data: { ui_theme: "light" } });
      }),
      (this.theme_dark.onchange = () => {
        this.theme_dark.checked && I({ name: "mut-settings", data: { ui_theme: "dark" } });
      }),
      (this.theme_system.onchange = () => {
        this.theme_system.checked && I({ name: "mut-settings", data: { ui_theme: "system" } });
      }),
      (this.preview_mode_none.onchange = () => {
        this.preview_mode_none.checked &&
          I({ name: "mut-settings", data: { preview_mode: "none" } });
      }),
      (this.preview_mode_image.onchange = () => {
        this.preview_mode_image.checked &&
          I({ name: "mut-settings", data: { preview_mode: "image" } });
      }),
      (this.preview_mode_video.onchange = () => {
        this.preview_mode_video.checked &&
          I({ name: "mut-settings", data: { preview_mode: "video" } });
      }),
      (this.popup_size_small.onchange = () => {
        this.popup_size_small.checked && I({ name: "mut-settings", data: { popup_size: "small" } });
      }),
      (this.popup_size_medium.onchange = () => {
        this.popup_size_medium.checked &&
          I({ name: "mut-settings", data: { popup_size: "medium" } });
      }),
      (this.popup_size_big.onchange = () => {
        this.popup_size_big.checked && I({ name: "mut-settings", data: { popup_size: "big" } });
      }),
      (this.font_size_default.onchange = () => {
        this.font_size_default.checked &&
          I({ name: "mut-settings", data: { font_size: "default" } });
      }),
      (this.font_size_large.onchange = () => {
        this.font_size_large.checked && I({ name: "mut-settings", data: { font_size: "large" } });
      }),
      (this.font_size_verylarge.onchange = () => {
        this.font_size_verylarge.checked &&
          I({ name: "mut-settings", data: { font_size: "verylarge" } });
      }),
      (this.dock_popup.onchange = () => {
        this.dock_popup.checked && (I({ name: "redock", data: { mode: "popup" } }), window.close());
      }),
      (this.dock_sidebar.onchange = () => {
        this.dock_sidebar.checked &&
          (I({ name: "redock", data: { mode: "sidebar" } }), window.close());
      }),
      (this.checkbox_context_menu.onchange = () => {
        let i = this.checkbox_context_menu.checked;
        I({ name: "mut-settings", data: { use_context_menu: i } });
      }),
      (this.button_restart.onclick = () => {
        ze.default.runtime.reload();
      }),
      (this.button_reset.onclick = async () => {
        (await md(), ze.default.runtime.reload());
      }),
      (this.button_copy.onclick = async () => {
        let t = ze.default.runtime.getManifest().version,
          n = await ze.default.runtime.getPlatformInfo(),
          a = ze.default.i18n.getUILanguage(),
          s = "";
        ((s += `version: ${t}
`),
          (s += `store: ${Pe}
`),
          (s += `lang: ${a}
`),
          (s += `platform: ${n.arch} ${n.os}
`),
          (s += `UA: ${navigator.userAgent}
`));
        let u = await navigator.storage.estimate(),
          l = ce(u.usage || 0),
          p = ce(u.quota || 0),
          f = await navigator.storage.getDirectory(),
          g = 0;
        for await (let b of f.keys()) g++;
        s += `Internal storage: ${l} / ${p}. ${g} files
`;
        let m = globalThis.persistent_state;
        if (m.jwt) {
          let b = m.jwt,
            z = b.developer ? "true" : "false",
            { store: O, valid_until: x, exp: D, entitlement_type: P, user_id: v } = b;
          ((s += `dev: ${z}
`),
            (s += `jwt_store: ${O}
`),
            (s += `valid_until: ${x}
`),
            (s += `exp: ${D}
`),
            (s += `entitlement_type: ${P}
`),
            (s += `user_id: ${v}
`));
        }
        navigator.clipboard.writeText(s);
      }),
      (this.button_browser_download_dir.onclick = () => {
        (Cs(), window.close());
      }),
      (this.button_smartnaming.onclick = () => {
        (ze.default.tabs.create({ url: "/content/smartnaming.html" }), Nr());
      }),
      (this.button_saveas.onclick = () => {
        (I({ name: "reset-suspicious-saveas", data: null }), Cs(), window.close());
      }),
      (this.button_set_incognito.onclick = () => {
        (kd(), window.close());
      }),
      (this.span_version.textContent = `v${ze.default.runtime.getManifest().version}`),
      ze.default.extension.isAllowedIncognitoAccess().then((i) => {
        R(this.section_no_private_browsing, !i);
      }));
  }
};
(c([_(HTMLElement)], T.prototype, "box_main", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_browser_download_dir", 2),
  c([_(HTMLInputElement)], T.prototype, "input_subdirectory", 2),
  c([_(HTMLSpanElement)], T.prototype, "span_bad_download_subdirectory", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_smartnaming", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_saveas", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_set_incognito", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_youtube_throttle", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_youtube_audio_original", 2),
  c([_(HTMLElement)], T.prototype, "section_youtube", 2),
  c([_(HTMLInputElement)], T.prototype, "input_concurrent_downloads", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_show_desktop_notifications", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_show_desktop_notifications_private", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_history", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_transient_history", 2),
  c([_(HTMLInputElement)], T.prototype, "input_history", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_back", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_context_menu", 2),
  c([_(HTMLElement)], T.prototype, "section_no_private_browsing", 2),
  c([_(HTMLElement)], T.prototype, "section_suspecting_saveas", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_restart", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_reset", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_copy", 2),
  c([_(HTMLSpanElement)], T.prototype, "span_version", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_my_account", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_restore_purchase", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_get_premium", 2),
  c([_(HTMLParagraphElement)], T.prototype, "p_leave_review", 2),
  c([_(HTMLButtonElement)], T.prototype, "button_leave_review", 2),
  c([_(HTMLInputElement)], T.prototype, "checkbox_always_download_as_mkv", 2),
  c(
    [_(HTMLInputElement, 'input[name="discovered_media_order"][value="prefered_newest"]')],
    T.prototype,
    "prefered_discovered_order_newest",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="discovered_media_order"][value="prefered_oldest"]')],
    T.prototype,
    "prefered_discovered_order_oldest",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="discovered_media_order"][value="prefered_smart"]')],
    T.prototype,
    "prefered_discovered_order_smart",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_theme"][value="theme_dark"]')],
    T.prototype,
    "theme_dark",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_theme"][value="theme_light"]')],
    T.prototype,
    "theme_light",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_theme"][value="theme_system"]')],
    T.prototype,
    "theme_system",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="preview_mode"][value="preview_mode_none"]')],
    T.prototype,
    "preview_mode_none",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="preview_mode"][value="preview_mode_video"]')],
    T.prototype,
    "preview_mode_video",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="preview_mode"][value="preview_mode_image"]')],
    T.prototype,
    "preview_mode_image",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_popup_size"][value="popup_size_small"]')],
    T.prototype,
    "popup_size_small",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_popup_size"][value="popup_size_medium"]')],
    T.prototype,
    "popup_size_medium",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_popup_size"][value="popup_size_big"]')],
    T.prototype,
    "popup_size_big",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_font_size"][value="font_size_default"]')],
    T.prototype,
    "font_size_default",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_font_size"][value="font_size_large"]')],
    T.prototype,
    "font_size_large",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_font_size"][value="font_size_verylarge"]')],
    T.prototype,
    "font_size_verylarge",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_dock"][value="dock_popup"]')],
    T.prototype,
    "dock_popup",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="settings_dock"][value="dock_sidebar"]')],
    T.prototype,
    "dock_sidebar",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="prefered_quality"][value="prefered_quality_highest"]')],
    T.prototype,
    "prefered_quality_highest",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="prefered_quality"][value="prefered_quality_1080p"]')],
    T.prototype,
    "prefered_quality_1080p",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="prefered_quality"][value="prefered_quality_720p"]')],
    T.prototype,
    "prefered_quality_720p",
    2,
  ),
  c(
    [_(HTMLInputElement, 'input[name="prefered_quality"][value="prefered_quality_480p"]')],
    T.prototype,
    "prefered_quality_480p",
    2,
  ));
var Ur = T;
var ut = re(ee(), 1);
var J = class extends N {
  constructor() {
    super("#main-template");
    this.current_tab_id = X;
    this.preview_was_autoplayed = !1;
    this.dockmode = document.documentElement.getAttribute("dockmode");
  }
  enableDebug() {
    (j(this.debug), this.debug.activate());
  }
  onPersistentChanged() {
    R(this.box_nomedia, !this.persistent().hide_nomedia_box);
    let r = !!this.downloaded_container.querySelector("com-media-downloaded");
    R(this.downloaded, this.persistent().show_transient_history && r);
  }
  scrollUp() {
    this.box_main.scroll({ top: 0 });
  }
  onStateChanged(r) {
    let i = !1,
      t = r.current_win_tab.tab_id;
    (this.current_tab_id.isSome() &&
      t.isSome() &&
      this.current_tab_id.value != t.value &&
      ((i = !0), this.button_report_nomedia.reset()),
      (this.current_tab_id = r.current_win_tab.tab_id),
      this.debug.invalidateState(r));
    {
      let x = new Map(),
        D = [],
        P = r.notifications.size >= 2;
      R(this.button_rm_all_notifications, P);
      for (let v of this.notification_container.children)
        r.notifications.has(v.id) ? x.set(v.id, v) : D.push(v);
      D.forEach((v) => v.remove());
      for (let [v, $] of r.notifications.entries()) {
        let M = x.get(v);
        M ||
          ((M = document.createElement("com-notification")),
          (M.className = "roundedbox"),
          (M.id = v),
          this.notification_container.appendChild(M),
          M.invalidateState($),
          (i = !0));
      }
    }
    i && this.scrollUp();
    let n = X,
      a = new Map();
    if (r.current_win_tab.tab_id.isSome()) {
      let x = r.current_win_tab.tab_id.value,
        D = r.discovered.get(x);
      D && ((n = D.meta), (a = D.media));
    }
    let s = new Map(),
      u = new Map();
    for (let x of r.downloading.values())
      a.has(x.media.hash) ? s.set(x.media.hash, x) : u.set(x.media.hash, x);
    let l = new Map();
    for (let x of r.transient_history) a.has(x.media_hash) && l.set(x.media_hash, x);
    let p = new Map(),
      f = [];
    for (let x of this.media_container.children) {
      if (x.nodeName != "COM-MEDIA") continue;
      let D = x.id;
      !a.has(D) && !u.has(D) ? f.push(x) : p.set(D, x);
    }
    f.forEach((x) => x.remove());
    let g = n.andThen((x) => x.url),
      m = [];
    this.persistent().prefered_discovered_media_order == "NEWEST"
      ? (m = [...a.values()].sort((x, D) => D.discovery_timestamp_ms - x.discovery_timestamp_ms))
      : this.persistent().prefered_discovered_media_order == "OLDEST"
        ? (m = [...a.values()].sort((x, D) => x.discovery_timestamp_ms - D.discovery_timestamp_ms))
        : (m = [...a.values()].sort((x, D) => wd(x, D, g)));
    let b = 0,
      z = (x, D, P, v) => {
        let $ = p.get(x.hash);
        ($ ||
          (($ = document.createElement("com-media")),
          ($.className = "roundedbox"),
          ($.id = x.hash),
          this.media_container.appendChild($)),
          $.invalidateState({ media: x, meta: D }),
          v ? $.isDownloaded(v) : P ? $.isDownloading(P) : $.isDiscovered(),
          ($.style.order = b.toString()),
          b++);
      };
    if (n.isSome() && a.size > 0) {
      A(this.loading);
      for (let x of m) {
        let D = s.get(x.hash),
          P = l.get(x.hash);
        z(x, n.value, D, P);
      }
    } else j(this.loading);
    for (let x of u.values()) {
      let D = x.media;
      z(D, x.meta, x, void 0);
    }
    let O = r.transient_history.slice(-10);
    R(this.downloaded, this.persistent().show_transient_history && O.length > 0);
    {
      let x = new Map(O.map((v) => [v.downloaded_id, v])),
        D = new Map(),
        P = [];
      for (let v of this.downloaded_container.children) x.get(v.id) ? D.set(v.id, v) : P.push(v);
      P.forEach((v) => v.remove());
      for (let v of O) {
        let $ = D.get(v.downloaded_id);
        $ ||
          (($ = document.createElement("com-media-downloaded")),
          ($.id = v.downloaded_id),
          this.downloaded_container.appendChild($),
          $.invalidateState({ ded: v, meta: void 0 }),
          ($.style.order = Math.round(v.download_timestamp / 1e3).toString()));
      }
    }
    if (this.dockmode == "popup") {
      let x = this.media_container.querySelector("com-media");
      x &&
        !this.preview_was_autoplayed &&
        (x.activatePreview(), (this.preview_was_autoplayed = !0));
    }
  }
  onMounted() {
    (this.button_report_nomedia.invalidateState(() => td()),
      (this.button_rm_all_notifications.onclick = () => {
        I({ name: "rm_notifications_all", data: null });
      }),
      (this.button_hide_nomedia.onclick = () => {
        I({ name: "mut-settings", data: { hide_nomedia_box: !0 } });
      }),
      (this.button_hide_transient.onclick = () => {
        I({ name: "mut-settings", data: { show_transient_history: !1 } });
      }),
      (this.button_super_reload.onclick = () => {
        yp();
      }),
      (this.button_show_history.onclick = () => {
        (ut.default.tabs.create({ url: "/content/history.html" }),
          this.dockmode == "popup" && window.close());
      }));
  }
};
(c([_(De)], J.prototype, "button_report_nomedia", 2),
  c([_(HTMLElement)], J.prototype, "box_main", 2),
  c([_(_e, "com-debug")], J.prototype, "debug", 2),
  c([_(HTMLElement, "#nomedia")], J.prototype, "box_nomedia", 2),
  c([_(HTMLElement, "#rm_notifications_all")], J.prototype, "button_rm_all_notifications", 2),
  c([_(HTMLElement, "#notification-container-top")], J.prototype, "notification_container", 2),
  c([_(HTMLElement, "#media")], J.prototype, "media_container", 2),
  c([_(HTMLElement, "#downloaded")], J.prototype, "downloaded", 2),
  c([_(HTMLElement, "#downloaded_container")], J.prototype, "downloaded_container", 2),
  c([_(HTMLElement)], J.prototype, "loading", 2),
  c([_(Me, "#nomedia com-dismiss-button")], J.prototype, "button_hide_nomedia", 2),
  c([_(HTMLButtonElement, "#button_hide_transient")], J.prototype, "button_hide_transient", 2),
  c([_(HTMLButtonElement)], J.prototype, "button_super_reload", 2),
  c([_(HTMLButtonElement)], J.prototype, "button_show_history", 2));
function yp() {
  let e = async () => {
    let r = { permissions: ["browsingData"] };
    (await ut.default.permissions.request(r)) && $d();
  };
  ut.default.browsingData?.removeCookies
    ? $d().catch((o) => {
        e();
      })
    : e();
}
async function $d() {
  let o = (await ut.default.tabs.query({ currentWindow: !0, active: !0 }))[0];
  if (o && o.url && o.id != null) {
    let r = o.url,
      i = new URL(r);
    if (ye) {
      let t = i.hostname,
        n = t.split(".").slice(-2).join(".");
      await ut.default.browsingData.removeCookies({ hostnames: [t, n] });
    } else chrome.browsingData.removeCookies({ origins: [i.origin] });
    ut.default.tabs.reload(o.id, { bypassCache: !0 });
  }
}
var bp = {
  "com-report-button": De,
  "com-notification": we,
  "com-debug": _e,
  "com-native-menu": Fe,
  "com-dismiss-button": Me,
  "com-media-tags": me,
  "com-media-preview": it,
  "com-media-selector": at,
  "com-media-meta": Oe,
  "com-media-button-origin": be,
  "com-media-discovered": K,
  "com-media-downloading": pe,
  "com-media-downloaded": fe,
  "com-media": $e,
  "com-toolbar": Lr,
  "com-settings": Ur,
  "com-main": J,
};
function _w() {
  for (let [e, o] of Object.entries(bp)) window.customElements.define(e, o);
}
export { _w as RegisterAllComponents };
