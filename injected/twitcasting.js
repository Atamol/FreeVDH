function m(t) {
  var r = String(t);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(t);
    } catch {}
  return r;
}
var M = (function () {
    function t() {}
    return (
      (t.prototype.isSome = function () {
        return !1;
      }),
      (t.prototype.isNone = function () {
        return !0;
      }),
      (t.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (t.prototype.unwrapOr = function (r) {
        return r;
      }),
      (t.prototype.expect = function (r) {
        throw new Error("".concat(r));
      }),
      (t.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (t.prototype.map = function (r) {
        return this;
      }),
      (t.prototype.mapOr = function (r, e) {
        return r;
      }),
      (t.prototype.mapOrElse = function (r, e) {
        return r();
      }),
      (t.prototype.or = function (r) {
        return r;
      }),
      (t.prototype.orElse = function (r) {
        return r();
      }),
      (t.prototype.andThen = function (r) {
        return this;
      }),
      (t.prototype.toResult = function (r) {
        return l(r);
      }),
      (t.prototype.toString = function () {
        return "None";
      }),
      (t.prototype.toAsyncOption = function () {
        return new S(v);
      }),
      t
    );
  })(),
  v = new M();
Object.freeze(v);
var j = (function () {
    function t(r) {
      if (!(this instanceof t)) return new t(r);
      this.value = r;
    }
    return (
      (t.prototype.isSome = function () {
        return !0;
      }),
      (t.prototype.isNone = function () {
        return !1;
      }),
      (t.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (t.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (t.prototype.expect = function (r) {
        return this.value;
      }),
      (t.prototype.unwrap = function () {
        return this.value;
      }),
      (t.prototype.map = function (r) {
        return y(r(this.value));
      }),
      (t.prototype.mapOr = function (r, e) {
        return e(this.value);
      }),
      (t.prototype.mapOrElse = function (r, e) {
        return e(this.value);
      }),
      (t.prototype.or = function (r) {
        return this;
      }),
      (t.prototype.orElse = function (r) {
        return this;
      }),
      (t.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (t.prototype.toResult = function (r) {
        return h(this.value);
      }),
      (t.prototype.toAsyncOption = function () {
        return new S(this);
      }),
      (t.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (t.prototype.toString = function () {
        return "Some(".concat(m(this.value), ")");
      }),
      (t.EMPTY = new t(void 0)),
      t
    );
  })(),
  y = j,
  I;
(function (t) {
  function r() {
    for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
    for (var s = [], a = 0, c = i; a < c.length; a++) {
      var o = c[a];
      if (o.isSome()) s.push(o.value);
      else return o;
    }
    return y(s);
  }
  t.all = r;
  function e() {
    for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
    for (var s = 0, a = i; s < a.length; s++) {
      var c = a[s];
      if (c.isSome()) return c;
    }
    return v;
  }
  t.any = e;
  function u(i) {
    return i instanceof y || i === v;
  }
  t.isOption = u;
})(I || (I = {}));
var b = function (t, r, e) {
    if (e || arguments.length === 2)
      for (var u = 0, i = r.length, n; u < i; u++)
        (n || !(u in r)) && (n || (n = Array.prototype.slice.call(r, 0, u)), (n[u] = r[u]));
    return t.concat(n || Array.prototype.slice.call(r));
  },
  L = (function () {
    function t(r) {
      if (!(this instanceof t)) return new t(r);
      this.error = r;
      var e = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (e && e.length > 0 && e[0].includes("ErrImpl") && e.shift(),
        (this._stack = e.join(`
`)));
    }
    return (
      (t.prototype.isOk = function () {
        return !1;
      }),
      (t.prototype.isErr = function () {
        return !0;
      }),
      (t.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (t.prototype.else = function (r) {
        return r;
      }),
      (t.prototype.unwrapOr = function (r) {
        return r;
      }),
      (t.prototype.expect = function (r) {
        throw new Error(
          ""
            .concat(r, " - Error: ")
            .concat(
              m(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (t.prototype.expectErr = function (r) {
        return this.error;
      }),
      (t.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              m(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (t.prototype.unwrapErr = function () {
        return this.error;
      }),
      (t.prototype.map = function (r) {
        return this;
      }),
      (t.prototype.andThen = function (r) {
        return this;
      }),
      (t.prototype.mapErr = function (r) {
        return new l(r(this.error));
      }),
      (t.prototype.mapOr = function (r, e) {
        return r;
      }),
      (t.prototype.mapOrElse = function (r, e) {
        return r(this.error);
      }),
      (t.prototype.or = function (r) {
        return r;
      }),
      (t.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (t.prototype.toOption = function () {
        return v;
      }),
      (t.prototype.toString = function () {
        return "Err(".concat(m(this.error), ")");
      }),
      Object.defineProperty(t.prototype, "stack", {
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
      (t.prototype.toAsyncResult = function () {
        return new E(this);
      }),
      (t.EMPTY = new t(void 0)),
      t
    );
  })();
var l = L,
  P = (function () {
    function t(r) {
      if (!(this instanceof t)) return new t(r);
      this.value = r;
    }
    return (
      (t.prototype.isOk = function () {
        return !0;
      }),
      (t.prototype.isErr = function () {
        return !1;
      }),
      (t.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (t.prototype.else = function (r) {
        return this.value;
      }),
      (t.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (t.prototype.expect = function (r) {
        return this.value;
      }),
      (t.prototype.expectErr = function (r) {
        throw new Error(r);
      }),
      (t.prototype.unwrap = function () {
        return this.value;
      }),
      (t.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(m(this.value)), { cause: this.value });
      }),
      (t.prototype.map = function (r) {
        return new h(r(this.value));
      }),
      (t.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (t.prototype.mapErr = function (r) {
        return this;
      }),
      (t.prototype.mapOr = function (r, e) {
        return e(this.value);
      }),
      (t.prototype.mapOrElse = function (r, e) {
        return e(this.value);
      }),
      (t.prototype.or = function (r) {
        return this;
      }),
      (t.prototype.orElse = function (r) {
        return this;
      }),
      (t.prototype.toOption = function () {
        return y(this.value);
      }),
      (t.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (t.prototype.toString = function () {
        return "Ok(".concat(m(this.value), ")");
      }),
      (t.prototype.toAsyncResult = function () {
        return new E(this);
      }),
      (t.EMPTY = new t(void 0)),
      t
    );
  })();
var h = P,
  A;
(function (t) {
  function r(a) {
    for (var c = [], o = 1; o < arguments.length; o++) c[o - 1] = arguments[o];
    for (
      var f = a === void 0 ? [] : Array.isArray(a) ? a : b([a], c, !0), p = [], d = 0, g = f;
      d < g.length;
      d++
    ) {
      var w = g[d];
      if (w.isOk()) p.push(w.value);
      else return w;
    }
    return new h(p);
  }
  t.all = r;
  function e(a) {
    for (var c = [], o = 1; o < arguments.length; o++) c[o - 1] = arguments[o];
    for (
      var f = a === void 0 ? [] : Array.isArray(a) ? a : b([a], c, !0), p = [], d = 0, g = f;
      d < g.length;
      d++
    ) {
      var w = g[d];
      if (w.isOk()) return w;
      p.push(w.error);
    }
    return new l(p);
  }
  t.any = e;
  function u(a) {
    try {
      return new h(a());
    } catch (c) {
      return new l(c);
    }
  }
  t.wrap = u;
  function i(a) {
    try {
      return a()
        .then(function (c) {
          return new h(c);
        })
        .catch(function (c) {
          return new l(c);
        });
    } catch (c) {
      return Promise.resolve(new l(c));
    }
  }
  t.wrapAsync = i;
  function n(a) {
    return a.reduce(
      function (c, o) {
        var f = c[0],
          p = c[1];
        return o.isOk() ? [b(b([], f, !0), [o.value], !1), p] : [f, b(b([], p, !0), [o.error], !1)];
      },
      [[], []],
    );
  }
  t.partition = n;
  function s(a) {
    return a instanceof l || a instanceof h;
  }
  t.isResult = s;
})(A || (A = {}));
var O = function (t, r, e, u) {
    function i(n) {
      return n instanceof e
        ? n
        : new e(function (s) {
            s(n);
          });
    }
    return new (e || (e = Promise))(function (n, s) {
      function a(f) {
        try {
          o(u.next(f));
        } catch (p) {
          s(p);
        }
      }
      function c(f) {
        try {
          o(u.throw(f));
        } catch (p) {
          s(p);
        }
      }
      function o(f) {
        f.done ? n(f.value) : i(f.value).then(a, c);
      }
      o((u = u.apply(t, r || [])).next());
    });
  },
  x = function (t, r) {
    var e = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      u,
      i,
      n,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol == "function" &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(o) {
      return function (f) {
        return c([o, f]);
      };
    }
    function c(o) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; s && ((s = 0), o[0] && (e = 0)), e; )
        try {
          if (
            ((u = 1),
            i &&
              (n =
                o[0] & 2
                  ? i.return
                  : o[0]
                    ? i.throw || ((n = i.return) && n.call(i), 0)
                    : i.next) &&
              !(n = n.call(i, o[1])).done)
          )
            return n;
          switch (((i = 0), n && (o = [o[0] & 2, n.value]), o[0])) {
            case 0:
            case 1:
              n = o;
              break;
            case 4:
              return (e.label++, { value: o[1], done: !1 });
            case 5:
              (e.label++, (i = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = e.ops.pop()), e.trys.pop());
              continue;
            default:
              if (
                ((n = e.trys), !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                e = 0;
                continue;
              }
              if (o[0] === 3 && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                e.label = o[1];
                break;
              }
              if (o[0] === 6 && e.label < n[1]) {
                ((e.label = n[1]), (n = o));
                break;
              }
              if (n && e.label < n[2]) {
                ((e.label = n[2]), e.ops.push(o));
                break;
              }
              (n[2] && e.ops.pop(), e.trys.pop());
              continue;
          }
          o = r.call(t, e);
        } catch (f) {
          ((o = [6, f]), (i = 0));
        } finally {
          u = n = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  E = (function () {
    function t(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (t.prototype.andThen = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return O(e, void 0, void 0, function () {
            var i;
            return x(this, function (n) {
              return u.isErr() ? [2, u] : ((i = r(u.value)), [2, i instanceof t ? i.promise : i]);
            });
          });
        });
      }),
      (t.prototype.map = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return O(e, void 0, void 0, function () {
            var i;
            return x(this, function (n) {
              switch (n.label) {
                case 0:
                  return u.isErr() ? [2, u] : ((i = h), [4, r(u.value)]);
                case 1:
                  return [2, i.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (t.prototype.mapErr = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return O(e, void 0, void 0, function () {
            var i;
            return x(this, function (n) {
              switch (n.label) {
                case 0:
                  return u.isOk() ? [2, u] : ((i = l), [4, r(u.error)]);
                case 1:
                  return [2, i.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (t.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (t.prototype.orElse = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return O(e, void 0, void 0, function () {
            var i;
            return x(this, function (n) {
              return u.isOk() ? [2, u] : ((i = r(u.error)), [2, i instanceof t ? i.promise : i]);
            });
          });
        });
      }),
      (t.prototype.toOption = function () {
        return new S(
          this.promise.then(function (r) {
            return r.toOption();
          }),
        );
      }),
      (t.prototype.thenInternal = function (r) {
        return new t(this.promise.then(r));
      }),
      t
    );
  })();
var _ = function (t, r, e, u) {
    function i(n) {
      return n instanceof e
        ? n
        : new e(function (s) {
            s(n);
          });
    }
    return new (e || (e = Promise))(function (n, s) {
      function a(f) {
        try {
          o(u.next(f));
        } catch (p) {
          s(p);
        }
      }
      function c(f) {
        try {
          o(u.throw(f));
        } catch (p) {
          s(p);
        }
      }
      function o(f) {
        f.done ? n(f.value) : i(f.value).then(a, c);
      }
      o((u = u.apply(t, r || [])).next());
    });
  },
  k = function (t, r) {
    var e = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      u,
      i,
      n,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol == "function" &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(o) {
      return function (f) {
        return c([o, f]);
      };
    }
    function c(o) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; s && ((s = 0), o[0] && (e = 0)), e; )
        try {
          if (
            ((u = 1),
            i &&
              (n =
                o[0] & 2
                  ? i.return
                  : o[0]
                    ? i.throw || ((n = i.return) && n.call(i), 0)
                    : i.next) &&
              !(n = n.call(i, o[1])).done)
          )
            return n;
          switch (((i = 0), n && (o = [o[0] & 2, n.value]), o[0])) {
            case 0:
            case 1:
              n = o;
              break;
            case 4:
              return (e.label++, { value: o[1], done: !1 });
            case 5:
              (e.label++, (i = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = e.ops.pop()), e.trys.pop());
              continue;
            default:
              if (
                ((n = e.trys), !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2))
              ) {
                e = 0;
                continue;
              }
              if (o[0] === 3 && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                e.label = o[1];
                break;
              }
              if (o[0] === 6 && e.label < n[1]) {
                ((e.label = n[1]), (n = o));
                break;
              }
              if (n && e.label < n[2]) {
                ((e.label = n[2]), e.ops.push(o));
                break;
              }
              (n[2] && e.ops.pop(), e.trys.pop());
              continue;
          }
          o = r.call(t, e);
        } catch (f) {
          ((o = [6, f]), (i = 0));
        } finally {
          u = n = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  S = (function () {
    function t(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (t.prototype.andThen = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return _(e, void 0, void 0, function () {
            var i;
            return k(this, function (n) {
              return u.isNone() ? [2, u] : ((i = r(u.value)), [2, i instanceof t ? i.promise : i]);
            });
          });
        });
      }),
      (t.prototype.map = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return _(e, void 0, void 0, function () {
            var i;
            return k(this, function (n) {
              switch (n.label) {
                case 0:
                  return u.isNone() ? [2, u] : ((i = y), [4, r(u.value)]);
                case 1:
                  return [2, i.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (t.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (t.prototype.orElse = function (r) {
        var e = this;
        return this.thenInternal(function (u) {
          return _(e, void 0, void 0, function () {
            var i;
            return k(this, function (n) {
              return u.isSome() ? [2, u] : ((i = r()), [2, i instanceof t ? i.promise : i]);
            });
          });
        });
      }),
      (t.prototype.toResult = function (r) {
        return new E(
          this.promise.then(function (e) {
            return e.toResult(r);
          }),
        );
      }),
      (t.prototype.thenInternal = function (r) {
        return new t(this.promise.then(r));
      }),
      t
    );
  })();
function R(t, r) {
  try {
    if (t) return y(new URL(t, r));
  } catch {}
  return v;
}
var U = /^(?:https?:\/\/)?(?:[\w-]+\.)*twitcasting\.tv\/([\w:-]+)\/?$/i;
async function B(t) {
  let r = await fetch(
    `https://en.twitcasting.tv/streamserver.php?target=${t}&mode=client&player=pc_web`,
  );
  if (!r.ok) return l(`Coudln't fetch channel data ${t}`);
  let e = await r.json();
  return h(e);
}
async function N() {
  let t = document.location.href.match(U);
  if (t && t[1]) {
    let r = await B(t[1]);
    if (r.isErr()) {
      console.error(r.error);
      return;
    }
    let e = R(r.value?.["tc-hls"].streams.high);
    e.isSome() ? fetch(e.value) : console.error("No HLS stream found");
  }
}
N();
var T = document.location.href,
  F = new MutationObserver((t) => {
    T !== document.location.href && ((T = document.location.href), N());
  });
F.observe(document.body, { childList: !0, subtree: !0 });
