var _wAMD;
!function() {
    if (!_wAMD ||!_wAMD.requirejs) {
        _wAMD ? t = _wAMD : _wAMD = {};
        var e, t, n;
        !function(i) {
            function r(e, t) {
                return _.call(e, t)
            }
            function o(e, t) {
                var n, i, r, o, s, a, l, u, c, h, d = t && t.split("/"), f = y.map, p = f && f["*"] || {};
                if (e && "." === e.charAt(0))
                    if (t) {
                        for (d = d.slice(0, d.length - 1), e = d.concat(e.split("/")), u = 0; u < e.length; u += 1)
                            if (h = e[u], "." === h)
                                e.splice(u, 1), u -= 1;
                            else if (".." === h) {
                                if (1 === u && (".." === e[2] || ".." === e[0]))
                                    break;
                                    u > 0 && (e.splice(u - 1, 2), u -= 2)
                            }
                            e = e.join("/")
                    } else
                        0 === e.indexOf("./") && (e = e.substring(2));
                if ((d || p) && f) {
                    for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                        if (i = n.slice(0, u).join("/"), d)
                            for (c = d.length; c > 0; c -= 1)
                                if (r = f[d.slice(0, c).join("/")], r && (r = r[i])) {
                                    o = r, s = u;
                                    break
                                }
                        if (o)
                            break;
                        !a && p && p[i] && (a = p[i], l = u)
                    }
                    !o && a && (o = a, s = l), o && (n.splice(0, s, o), e = n.join("/"))
                }
                return e
            }
            function s(e, t) {
                return function() {
                    return f.apply(i, b.call(arguments, 0).concat([e, t]))
                }
            }
            function a(e) {
                return function(t) {
                    return o(t, e)
                }
            }
            function l(e) {
                return function(t) {
                    m[e] = t
                }
            }
            function u(e) {
                if (r(v, e)) {
                    var t = v[e];
                    delete v[e], w[e]=!0, d.apply(i, t)
                }
                if (!r(m, e)&&!r(w, e))
                    throw new Error("No " + e);
                return m[e]
            }
            function c(e) {
                var t, n = e ? e.indexOf("!"): - 1;
                return n>-1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }
            function h(e) {
                return function() {
                    return y && y.config && y.config[e] || {}
                }
            }
            var d, f, p, g, m = {}, v = {}, y = {}, w = {}, _ = Object.prototype.hasOwnProperty, b = [].slice;
            p = function(e, t) {
                var n, i = c(e), r = i[0];
                return e = i[1], r && (r = o(r, t), n = u(r)), r ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), i = c(e), r = i[0], e = i[1], r && (n = u(r))), {
                    f: r ? r + "!" + e: e,
                    n: e,
                    pr: r,
                    p: n
                }
            }, g = {
                require: function(e) {
                    return s(e)
                },
                exports: function(e) {
                    var t = m[e];
                    return "undefined" != typeof t ? t : m[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: m[e],
                        config: h(e)
                    }
                }
            }, d = function(e, t, n, o) {
                var a, c, h, d, f, y, _ = [];
                if (o = o || e, "function" == typeof n) {
                    for (t=!t.length && n.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1)
                        if (d = p(t[f], o), c = d.f, "require" === c)
                            _[f] = g.require(e);
                        else if ("exports" === c)
                            _[f] = g.exports(e), y=!0;
                        else if ("module" === c)
                            a = _[f] = g.module(e);
                        else if (r(m, c) || r(v, c) || r(w, c))
                            _[f] = u(c);
                        else {
                            if (!d.p)
                                throw new Error(e + " missing " + c);
                                d.p.load(d.n, s(o, !0), l(c), {}), _[f] = m[c]
                        }
                    h = n.apply(m[e], _), e && (a && a.exports !== i && a.exports !== m[e] ? m[e] = a.exports : h === i && y || (m[e] = h))
                } else
                    e && (m[e] = n)
            }, e = t = f = function(e, t, n, r, o) {
                return "string" == typeof e ? g[e] ? g[e](t) : u(p(e, t).f) : (e.splice || (y = e, t.splice ? (e = t, t = n, n = null) : e = i), t = t || function() {}, "function" == typeof n && (n = r, r = o), r ? d(i, e, t, n) : setTimeout(function() {
                    d(i, e, t, n)
                }, 4), f)
            }, f.config = function(e) {
                return y = e, y.deps && f(y.deps, y.callback), f
            }, n = function(e, t, n) {
                t.splice || (n = t, t = []), r(m, e) || r(v, e) || (v[e] = [e, t, n])
            }, n.amd = {
                jQuery: !0
            }
        }(), _wAMD.requirejs = e, _wAMD.require = t, _wAMD.define = n
    }
}(), _wAMD.define("vendor/almond", function() {}), function() {
    function e(e, t) {
        o > 0 && 0 >= s ? e() : t ? a.unshift(e) : a.push(e)
    }
    function t() {
        var e = Array.prototype.slice.apply(arguments);
        if (1 === e.length && "string" == typeof e[0]);
        else {
            var t;
            "function" == typeof e[e.length - 1] && (t = e.pop()), o++, s++, e.push(function() {
                var e;
                if (t && (e = t.apply(this, arguments)), s--, o > 0 && 0 >= s)
                    for (; a.length;)
                        a.shift()();
                return e
            })
        }
        return f.apply(this, e)
    }
    function n() {
        window.define = l, window.require = u, window.requirejs = c
    }
    function i() {
        Weebly.jQuery.noConflict(!0), window.jQuery = window.jQuery || Weebly.jQuery
    }
    function r() {
        n(), i()
    }
    _W = Weebly = window.Weebly || {}, _W.tl = _W.tl || function(e) {
        return e
    };
    var o = 0, s = 0, a = [];
    Weebly.ready = e;
    var l = window.define, u = window.require, c = window.requirejs, h = window._wAMD || {}, d = h.define || window.define, f = h.require || window.require, p = h.requirejs || window.requirejs;
    window.define = h.define = d, window.require = h.require = t, window.requirejs = h.requirejs = p, Weebly.relinquishAMD = n, Weebly.jQuery = jQuery, Weebly.relinquishJQuery = i;
    var g = jQuery.fn.ready;
    jQuery.fn.ready = function() {
        var t = this, n = arguments;
        return e(function() {
            g.apply(t, n)
        }), t
    }, Weebly.relinquish = r, Weebly.setCookie = function(e, t, n) {
        var i = new Date;
        i.setTime(i.getTime() + 1e3 * 60 * 60 * 24 * n);
        var r = "expires=" + i.toUTCString();
        document.cookie = e + "=" + t + "; " + r
    }, Weebly.clearCookie = function(e) {
        setCookie(e, "", - 1)
    }, Weebly.getCookie = function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var r = n[i]; " " == r.charAt(0);)
                r = r.substring(1);
            if (0 == r.indexOf(t))
                return r.substring(t.length, r.length)
        }
        return ""
    }
}(), window.console || (window.console = {}), window.console.log || (window.console.log = function() {}, window.console.warn = window.console.log, window.console.info = window.console.log, window.console.error = window.console.log), _wAMD.define("init", function() {}), function() {
    var e = this, t = e._, n = {}, i = Array.prototype, r = Object.prototype, o = Function.prototype, s = i.push, a = i.slice, l = i.concat, u = r.toString, c = r.hasOwnProperty, h = i.forEach, d = i.map, f = i.reduce, p = i.reduceRight, g = i.filter, m = i.every, v = i.some, y = i.indexOf, w = i.lastIndexOf, _ = Array.isArray, b = Object.keys, M = o.bind, x = function(e) {
        return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.6.0";
    var k = x.each = x.forEach = function(e, t, i) {
        if (null == e)
            return e;
        if (h && e.forEach === h)
            e.forEach(t, i);
        else if (e.length ===+ e.length) {
            for (var r = 0, o = e.length; o > r; r++)
                if (t.call(i, e[r], r, e) === n)
                    return
        } else
            for (var s = x.keys(e), r = 0, o = s.length; o > r; r++)
                if (t.call(i, e[s[r]], s[r], e) === n)
                    return;
        return e
    };
    x.map = x.collect = function(e, t, n) {
        var i = [];
        return null == e ? i : d && e.map === d ? e.map(t, n) : (k(e, function(e, r, o) {
            i.push(t.call(n, e, r, o))
        }), i)
    };
    var C = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, i) {
        var r = arguments.length > 2;
        if (null == e && (e = []), f && e.reduce === f)
            return i && (t = x.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
        if (k(e, function(e, o, s) {
            r ? n = t.call(i, n, e, o, s) : (n = e, r=!0)
        }), !r)
            throw new TypeError(C);
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, i) {
        var r = arguments.length > 2;
        if (null == e && (e = []), p && e.reduceRight === p)
            return i && (t = x.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o!==+o) {
            var s = x.keys(e);
            o = s.length
        }
        if (k(e, function(a, l, u) {
            l = s ? s[--o] : --o, r ? n = t.call(i, n, e[l], l, u) : (n = e[l], r=!0)
        }), !r)
            throw new TypeError(C);
        return n
    }, x.find = x.detect = function(e, t, n) {
        var i;
        return R(e, function(e, r, o) {
            return t.call(n, e, r, o) ? (i = e, !0) : void 0
        }), i
    }, x.filter = x.select = function(e, t, n) {
        var i = [];
        return null == e ? i : g && e.filter === g ? e.filter(t, n) : (k(e, function(e, r, o) {
            t.call(n, e, r, o) && i.push(e)
        }), i)
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, i, r) {
            return !t.call(n, e, i, r)
        }, n)
    }, x.every = x.all = function(e, t, i) {
        t || (t = x.identity);
        var r=!0;
        return null == e ? r : m && e.every === m ? e.every(t, i) : (k(e, function(e, o, s) {
            return (r = r && t.call(i, e, o, s)) ? void 0 : n
        }), !!r)
    };
    var R = x.some = x.any = function(e, t, i) {
        t || (t = x.identity);
        var r=!1;
        return null == e ? r : v && e.some === v ? e.some(t, i) : (k(e, function(e, o, s) {
            return r || (r = t.call(i, e, o, s)) ? n : void 0
        }), !!r)
    };
    x.contains = x.include = function(e, t) {
        return null == e?!1 : y && e.indexOf === y?-1 != e.indexOf(t) : R(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = a.call(arguments, 2), i = x.isFunction(t);
        return x.map(e, function(e) {
            return (i ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, x.property(t))
    }, x.where = function(e, t) {
        return x.filter(e, x.matches(t))
    }, x.findWhere = function(e, t) {
        return x.find(e, x.matches(t))
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] ===+ e[0] && e.length < 65535)
            return Math.max.apply(Math, e);
        var i =- 1 / 0, r =- 1 / 0;
        return k(e, function(e, o, s) {
            var a = t ? t.call(n, e, o, s): e;
            a > r && (i = e, r = a)
        }), i
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] ===+ e[0] && e.length < 65535)
            return Math.min.apply(Math, e);
        var i = 1 / 0, r = 1 / 0;
        return k(e, function(e, o, s) {
            var a = t ? t.call(n, e, o, s): e;
            r > a && (i = e, r = a)
        }), i
    }, x.shuffle = function(e) {
        var t, n = 0, i = [];
        return k(e, function(e) {
            t = x.random(n++), i[n - 1] = i[t], i[t] = e
        }), i
    }, x.sample = function(e, t, n) {
        return null == t || n ? (e.length!==+e.length && (e = x.values(e)), e[x.random(e.length - 1)]) : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var S = function(e) {
        return null == e ? x.identity : x.isFunction(e) ? e : x.property(e)
    };
    x.sortBy = function(e, t, n) {
        return t = S(t), x.pluck(x.map(e, function(e, i, r) {
            return {
                value: e,
                index: i,
                criteria: t.call(n, e, i, r)
            }
        }).sort(function(e, t) {
            var n = e.criteria, i = t.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (i > n || void 0 === i)
                    return - 1
            }
            return e.index - t.index
        }), "value")
    };
    var D = function(e) {
        return function(t, n, i) {
            var r = {};
            return n = S(n), k(t, function(o, s) {
                var a = n.call(i, o, s, t);
                e(r, a, o)
            }), r
        }
    };
    x.groupBy = D(function(e, t, n) {
        x.has(e, t) ? e[t].push(n) : e[t] = [n]
    }), x.indexBy = D(function(e, t, n) {
        e[t] = n
    }), x.countBy = D(function(e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }), x.sortedIndex = function(e, t, n, i) {
        n = S(n);
        for (var r = n.call(i, t), o = 0, s = e.length; s > o;) {
            var a = o + s>>>1;
            n.call(i, e[a]) < r ? o = a + 1 : s = a
        }
        return o
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? a.call(e) : e.length ===+ e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
        return null == e ? 0 : e.length ===+ e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : a.call(e, 0, t)
    }, x.initial = function(e, t, n) {
        return a.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return a.call(e, null == t || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, x.identity)
    };
    var T = function(e, t, n, i) {
        if (t && x.every(e, x.isArray))
            return l.apply(i, e);
        for (var r = 0, o = e.length; o > r; r++) {
            var a = e[r];
            x.isArray(a) || x.isArguments(a) ? t ? s.apply(i, a) : T(a, t, n, i) : n || i.push(a)
        }
        return i
    };
    x.flatten = function(e, t) {
        return T(e, t, !1, [])
    }, x.without = function(e) {
        return x.difference(e, a.call(arguments, 1))
    }, x.partition = function(e, t, n) {
        t = S(t);
        var i = [], r = [];
        return k(e, function(e) {
            (t.call(n, e) ? i : r).push(e)
        }), [i, r]
    }, x.uniq = x.unique = function(e, t, n, i) {
        x.isFunction(t) && (i = n, n = t, t=!1);
        var r = n ? x.map(e, n, i): e, o = [], s = [];
        return k(r, function(n, i) {
            (t ? i && s[s.length - 1] === n : x.contains(s, n)) || (s.push(n), o.push(e[i]))
        }), o
    }, x.union = function() {
        return x.uniq(T(arguments, !0, !0, []))
    }, x.intersection = function(e) {
        var t = a.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.contains(t, e)
            })
        })
    }, x.difference = function(e) {
        var t = T(a.call(arguments, 1), !0, !0, []);
        return x.filter(e, function(e) {
            return !x.contains(t, e)
        })
    }, x.zip = function() {
        for (var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++)
            t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function(e, t) {
        if (null == e)
            return {};
        for (var n = {}, i = 0, r = e.length; r > i; i++)
            t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
        return n
    }, x.indexOf = function(e, t, n) {
        if (null == e)
            return - 1;
        var i = 0, r = e.length;
        if (n) {
            if ("number" != typeof n)
                return i = x.sortedIndex(e, t), e[i] === t ? i : - 1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        if (y && e.indexOf === y)
            return e.indexOf(t, n);
        for (; r > i; i++)
            if (e[i] === t)
                return i;
        return - 1
    }, x.lastIndexOf = function(e, t, n) {
        if (null == e)
            return - 1;
        var i = null != n;
        if (w && e.lastIndexOf === w)
            return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var r = i ? n : e.length; r--;)
            if (e[r] === t)
                return r;
        return - 1
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;)
            o[r++] = e, e += n;
        return o
    };
    var A = function() {};
    x.bind = function(e, t) {
        var n, i;
        if (M && e.bind === M)
            return M.apply(e, a.call(arguments, 1));
        if (!x.isFunction(e))
            throw new TypeError;
        return n = a.call(arguments, 2), i = function() {
            if (!(this instanceof i))
                return e.apply(t, n.concat(a.call(arguments)));
            A.prototype = e.prototype;
            var r = new A;
            A.prototype = null;
            var o = e.apply(r, n.concat(a.call(arguments)));
            return Object(o) === o ? o : r
        }
    }, x.partial = function(e) {
        var t = a.call(arguments, 1);
        return function() {
            for (var n = 0, i = t.slice(), r = 0, o = i.length; o > r; r++)
                i[r] === x && (i[r] = arguments[n++]);
            for (; n < arguments.length;)
                i.push(arguments[n++]);
            return e.apply(this, i)
        }
    }, x.bindAll = function(e) {
        var t = a.call(arguments, 1);
        if (0 === t.length)
            throw new Error("bindAll must be passed function names");
        return k(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity), function() {
            var i = t.apply(this, arguments);
            return x.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
        }
    }, x.delay = function(e, t) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(a.call(arguments, 1)))
    }, x.throttle = function(e, t, n) {
        var i, r, o, s = null, a = 0;
        n || (n = {});
        var l = function() {
            a = n.leading===!1 ? 0 : x.now(), s = null, o = e.apply(i, r), i = r = null
        };
        return function() {
            var u = x.now();
            a || n.leading!==!1 || (a = u);
            var c = t - (u - a);
            return i = this, r = arguments, 0 >= c ? (clearTimeout(s), s = null, a = u, o = e.apply(i, r), i = r = null) : s || n.trailing===!1 || (s = setTimeout(l, c)), o
        }
    }, x.debounce = function(e, t, n) {
        var i, r, o, s, a, l = function() {
            var u = x.now() - s;
            t > u ? i = setTimeout(l, t - u) : (i = null, n || (a = e.apply(o, r), o = r = null))
        };
        return function() {
            o = this, r = arguments, s = x.now();
            var u = n&&!i;
            return i || (i = setTimeout(l, t)), u && (a = e.apply(o, r), o = r = null), a
        }
    }, x.once = function(e) {
        var t, n=!1;
        return function() {
            return n ? t : (n=!0, t = e.apply(this, arguments), e = null, t)
        }
    }, x.wrap = function(e, t) {
        return x.partial(t, e)
    }, x.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--)
                t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, x.keys = function(e) {
        if (!x.isObject(e))
            return [];
        if (b)
            return b(e);
        var t = [];
        for (var n in e)
            x.has(e, n) && t.push(n);
        return t
    }, x.values = function(e) {
        for (var t = x.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++)
            i[r] = e[t[r]];
        return i
    }, x.pairs = function(e) {
        for (var t = x.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++)
            i[r] = [t[r], e[t[r]]];
        return i
    }, x.invert = function(e) {
        for (var t = {}, n = x.keys(e), i = 0, r = n.length; r > i; i++)
            t[e[n[i]]] = n[i];
        return t
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e)
            x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function(e) {
        return k(a.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {}, n = l.apply(i, a.call(arguments, 1));
        return k(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function(e) {
        var t = {}, n = l.apply(i, a.call(arguments, 1));
        for (var r in e)
            x.contains(n, r) || (t[r] = e[r]);
        return t
    }, x.defaults = function(e) {
        return k(a.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    void 0 === e[n] && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var F = function(e, t, n, i) {
        if (e === t)
            return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t)
            return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var r = u.call(e);
        if (r != u.call(t))
            return !1;
        switch (r) {
        case"[object String]":
            return e == String(t);
        case"[object Number]":
            return e!=+e ? t!=+t : 0 == e ? 1 / e == 1 / t : e ==+ t;
        case"[object Date]":
        case"[object Boolean]":
            return + e ==+ t;
        case"[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t)
            return !1;
        for (var o = n.length; o--;)
            if (n[o] == e)
                return i[o] == t;
        var s = e.constructor, a = t.constructor;
        if (s !== a&&!(x.isFunction(s) && s instanceof s && x.isFunction(a) && a instanceof a) && "constructor"in e && "constructor"in t)
            return !1;
        n.push(e), i.push(t);
        var l = 0, c=!0;
        if ("[object Array]" == r) {
            if (l = e.length, c = l == t.length)
                for (; l--&&(c = F(e[l], t[l], n, i)););
        } else {
            for (var h in e)
                if (x.has(e, h) && (l++, !(c = x.has(t, h) && F(e[h], t[h], n, i))))
                    break;
            if (c) {
                for (h in t)
                    if (x.has(t, h)&&!l--)
                        break;
                c=!l
            }
        }
        return n.pop(), i.pop(), c
    };
    x.isEqual = function(e, t) {
        return F(e, t, [], [])
    }, x.isEmpty = function(e) {
        if (null == e)
            return !0;
        if (x.isArray(e) || x.isString(e))
            return 0 === e.length;
        for (var t in e)
            if (x.has(e, t))
                return !1;
        return !0
    }, x.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, x.isArray = _ || function(e) {
        return "[object Array]" == u.call(e)
    }, x.isObject = function(e) {
        return e === Object(e)
    }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return u.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !(!e ||!x.has(e, "callee"))
    }), "function" != typeof/./ && (x.isFunction = function(e) {
        return "function" == typeof e
    }), x.isFinite = function(e) {
        return isFinite(e)&&!isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e!=+e
    }, x.isBoolean = function(e) {
        return e===!0 || e===!1 || "[object Boolean]" == u.call(e)
    }, x.isNull = function(e) {
        return null === e
    }, x.isUndefined = function(e) {
        return void 0 === e
    }, x.has = function(e, t) {
        return c.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.constant = function(e) {
        return function() {
            return e
        }
    }, x.property = function(e) {
        return function(t) {
            return t[e]
        }
    }, x.matches = function(e) {
        return function(t) {
            if (t === e)
                return !0;
            for (var n in e)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
    }, x.times = function(e, t, n) {
        for (var i = Array(Math.max(0, e)), r = 0; e > r; r++)
            i[r] = t.call(n, r);
        return i
    }, x.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, x.now = Date.now || function() {
        return (new Date).getTime()
    };
    var E = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    E.unescape = x.invert(E.escape);
    var O = {
        escape: new RegExp("[" + x.keys(E.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(E.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return null == t ? "" : ("" + t).replace(O[e], function(t) {
                return E[e][t]
            })
        }
    }), x.result = function(e, t) {
        if (null == e)
            return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        k(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return s.apply(e, arguments), q.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function(e) {
        var t=++P + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/, j = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, W = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var i;
        n = x.defaults({}, n, x.templateSettings);
        var r = new RegExp([(n.escape || I).source, (n.interpolate || I).source, (n.evaluate || I).source].join("|") + "|$", "g"), o = 0, s = "__p+='";
        e.replace(r, function(t, n, i, r, a) {
            return s += e.slice(o, a).replace(W, function(e) {
                return "\\" + j[e]
            }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (s += "';\n" + r + "\n__p+='"), o = a + t.length, t
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            i = new Function(n.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        if (t)
            return i(t, x);
        var l = function(e) {
            return i.call(this, e, x)
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var q = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = i[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], q.call(this, n)
        }
    }), k(["concat", "join", "slice"], function(e) {
        var t = i[e];
        x.prototype[e] = function() {
            return q.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain=!0, this
        },
        value: function() {
            return this._wrapped
        }
    }), "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("underscore", [], function() {
        return x
    })
}.call(this), _wAMD.define("jquery", [], function() {
    return Weebly.jQuery
}), function(e) {
    !function(e, t) {
        "object" == typeof exports && exports ? module.exports = t : "function" == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define("mustache-vendor", t) : e.Mustache = t
    }(this, function() {
        function e(e, t) {
            return y.call(e, t)
        }
        function t(t) {
            return !e(p, t)
        }
        function n(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        function i(e) {
            return String(e).replace(/[&<>"'\/]/g, function(e) {
                return b[e]
            })
        }
        function r(e) {
            this.string = e, this.tail = e, this.pos = 0
        }
        function o(e, t) {
            this.view = e, this.parent = t, this._cache = {}
        }
        function s() {
            this.clearCache()
        }
        function a(e, t, n, i) {
            for (var r, o, s, l = "", u = 0, c = e.length; c > u; ++u)
                switch (r = e[u], o = r[1], r[0]) {
                case"#":
                    if (s = n.lookup(o), "object" == typeof s)
                        if (_(s))
                            for (var d = 0, f = s.length; f > d; ++d)
                                l += a(r[4], t, n.push(s[d]), i);
                        else
                            s && (l += a(r[4], t, n.push(s), i));
                else if ("function" == typeof s) {
                    var p = null == i ? null: i.slice(r[3], r[5]);
                    s = s.call(n.view, p, function(e) {
                        return t.render(e, n)
                    }), null != s && (l += s)
                } else
                    s && (l += a(r[4], t, n, i));
                    break;
                case"^":
                    s = n.lookup(o), (!s || _(s) && 0 === s.length) && (l += a(r[4], t, n, i));
                    break;
                case">":
                    s = t.getPartial(o), "function" == typeof s && (l += s(n));
                    break;
                case"&":
                    s = n.lookup(o), null != s && (l += s);
                    break;
                case"name":
                    s = n.lookup(o), null != s && (l += h.escape(s));
                    break;
                case"text":
                    l += o
            }
            return l
        }
        function l(e) {
            for (var t, n = [], i = n, r = [], o = 0, s = e.length; s > o; ++o)
                switch (t = e[o], t[0]) {
                case"#":
                case"^":
                    r.push(t), i.push(t), i = t[4] = [];
                    break;
                case"/":
                    var a = r.pop();
                    a[5] = t[2], i = r.length > 0 ? r[r.length - 1][4] : n;
                    break;
                default:
                    i.push(t)
                }
            return n
        }
        function u(e) {
            for (var t, n, i = [], r = 0, o = e.length; o > r; ++r)
                t = e[r], t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (n = t, i.push(t)));
            return i
        }
        function c(e) {
            return [new RegExp(n(e[0]) + "\\s*"), new RegExp("\\s*" + n(e[1]))]
        }
        var h = {};
        h.name = "mustache.js", h.version = "0.7.2", h.tags = ["{{", "}}"], h.Scanner = r, h.Context = o, h.Writer = s;
        var d = /\s*/, f = /\s+/, p = /\S/, g = /\s*=/, m = /\s*\}/, v = /#|\^|\/|>|\{|&|=|!/, y = RegExp.prototype.test, w = Object.prototype.toString, _ = Array.isArray || function(e) {
            return "[object Array]" === w.call(e)
        }, b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        h.escape = i, r.prototype.eos = function() {
            return "" === this.tail
        }, r.prototype.scan = function(e) {
            var t = this.tail.match(e);
            return t && 0 === t.index ? (this.tail = this.tail.substring(t[0].length), this.pos += t[0].length, t[0]) : ""
        }, r.prototype.scanUntil = function(e) {
            var t, n = this.tail.search(e);
            switch (n) {
            case - 1:
                t = this.tail, this.pos += this.tail.length, this.tail = "";
                break;
            case 0:
                t = "";
                break;
            default:
                t = this.tail.substring(0, n), this.tail = this.tail.substring(n), this.pos += n
            }
            return t
        }, o.make = function(e) {
            return e instanceof o ? e : new o(e)
        }, o.prototype.push = function(e) {
            return new o(e, this)
        }, o.prototype.lookup = function(e) {
            var t = this._cache[e];
            if (!t) {
                if ("." == e)
                    t = this.view;
                else
                    for (var n = this; n;) {
                        if (e.indexOf(".") > 0) {
                            t = n.view;
                            for (var i = e.split("."), r = 0; t && r < i.length;)
                                t = t[i[r++]]
                        } else
                            t = n.view[e];
                            if (null != t)
                                break;
                                n = n.parent
                    }
                this._cache[e] = t
            }
            return "function" == typeof t && (t = t.call(this.view)), t
        }, s.prototype.clearCache = function() {
            this._cache = {}, this._partialCache = {}
        }, s.prototype.compile = function(e, t) {
            var n = this._cache[e];
            if (!n) {
                var i = h.parse(e, t);
                n = this._cache[e] = this.compileTokens(i, e)
            }
            return n
        }, s.prototype.compilePartial = function(e, t, n) {
            var i = this.compile(t, n);
            return this._partialCache[e] = i, i
        }, s.prototype.getPartial = function(e) {
            return e in this._partialCache ||!this._loadPartial || this.compilePartial(e, this._loadPartial(e)), this._partialCache[e]
        }, s.prototype.compileTokens = function(e, t) {
            var n = this;
            return function(i, r) {
                if (r)
                    if ("function" == typeof r)
                        n._loadPartial = r;
                    else
                        for (var s in r)
                            n.compilePartial(s, r[s]);
                return a(e, n, o.make(i), t)
            }
        }, s.prototype.render = function(e, t, n) {
            return this.compile(e)(t, n)
        }, h.parse = function(e, i) {
            function o() {
                if (C&&!R)
                    for (; k.length;)
                        delete x[k.pop()];
                else
                    k = [];
                C=!1, R=!1
            }
            if (e = e || "", i = i || h.tags, "string" == typeof i && (i = i.split(f)), 2 !== i.length)
                throw new Error("Invalid tags: " + i.join(", "));
            for (var s, a, p, y, w, _ = c(i), b = new r(e), M = [], x = [], k = [], C=!1, R=!1; !b.eos();) {
                if (s = b.pos, p = b.scanUntil(_[0]))
                    for (var S = 0, D = p.length; D > S; ++S)
                        y = p.charAt(S), t(y) ? k.push(x.length) : R=!0, x.push(["text", y, s, s + 1]), s += 1, "\n" == y && o();
                if (!b.scan(_[0]))
                    break;
                if (C=!0, a = b.scan(v) || "name", b.scan(d), "=" === a ? (p = b.scanUntil(g), b.scan(g), b.scanUntil(_[1])) : "{" === a ? (p = b.scanUntil(new RegExp("\\s*" + n("}" + i[1]))), b.scan(m), b.scanUntil(_[1]), a = "&") : p = b.scanUntil(_[1]), !b.scan(_[1]))
                    throw new Error("Unclosed tag at " + b.pos);
                if (w = [a, p, s, b.pos], x.push(w), "#" === a || "^" === a)
                    M.push(w);
                else if ("/" === a) {
                    if (0 === M.length)
                        throw new Error('Unopened section "' + p + '" at ' + s);
                    var T = M.pop();
                    if (T[1] !== p)
                        throw new Error('Unclosed section "' + T[1] + '" at ' + s)
                    } else if ("name" === a || "{" === a || "&" === a)
                    R=!0;
                else if ("=" === a) {
                    if (i = p.split(f), 2 !== i.length)
                        throw new Error("Invalid tags at " + s + ": " + i.join(", "));
                    _ = c(i)
                }
            }
            var T = M.pop();
            if (T)
                throw new Error('Unclosed section "' + T[1] + '" at ' + b.pos);
            return x = u(x), l(x)
        };
        var M = new s;
        return h.clearCache = function() {
            return M.clearCache()
        }, h.compile = function(e, t) {
            return M.compile(e, t)
        }, h.compilePartial = function(e, t, n) {
            return M.compilePartial(e, t, n)
        }, h.compileTokens = function(e, t) {
            return M.compileTokens(e, t)
        }, h.render = function(e, t, n) {
            return M.render(e, t, n)
        }, h.to_html = function(e, t, n, i) {
            var r = h.render(e, t, n);
            return "function" != typeof i ? r : (i(r), void 0)
        }, h
    }()), e.mustache = function(e, t, n) {
        return Mustache.render(e, t, n)
    }, e.fn.mustache = function(t, n) {
        return e(this).map(function(i, r) {
            var o = e.trim(e(r).html()), s = e.mustache(o, t, n);
            return e(s).get()
        })
    }
}(jQuery), function(e) {
    function t(e, t, n) {
        switch (arguments.length) {
        case 2:
            return null != e ? e : t;
        case 3:
            return null != e ? e : null != t ? t : n;
        default:
            throw new Error("Implement me")
        }
    }
    function n() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: - 2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function i(e) {
        vt.suppressDeprecationWarnings===!1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function r(e, t) {
        var n=!0;
        return h(function() {
            return n && (i(e), n=!1), t.apply(this, arguments)
        }, t)
    }
    function o(e, t) {
        pn[e] || (i(t), pn[e]=!0)
    }
    function s(e, t) {
        return function(n) {
            return p(e.call(this, n), t)
        }
    }
    function a(e, t) {
        return function(n) {
            return this.localeData().ordinal(e.call(this, n), t)
        }
    }
    function l() {}
    function u(e, t) {
        t!==!1 && A(e), d(this, e), this._d = new Date( + e._d)
    }
    function c(e) {
        var t = x(e), n = t.year || 0, i = t.quarter || 0, r = t.month || 0, o = t.week || 0, s = t.day || 0, a = t.hour || 0, l = t.minute || 0, u = t.second || 0, c = t.millisecond || 0;
        this._milliseconds =+ c + 1e3 * u + 6e4 * l + 36e5 * a, this._days =+ s + 7 * o, this._months =+ r + 3 * i + 12 * n, this._data = {}, this._locale = vt.localeData(), this._bubble()
    }
    function h(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }
    function d(e, t) {
        var n, i, r;
        if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Ft.length > 0)
            for (n in Ft)
                i = Ft[n], r = t[i], "undefined" != typeof r && (e[i] = r);
        return e
    }
    function f(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }
    function p(e, t, n) {
        for (var i = "" + Math.abs(e), r = e >= 0; i.length < t;)
            i = "0" + i;
        return (r ? n ? "+" : "" : "-") + i
    }
    function g(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t)&&--n.months, n.milliseconds =+ t-+e.clone().add(n.months, "M"), n
    }
    function m(e, t) {
        var n;
        return t = I(t, e), e.isBefore(t) ? n = g(e, t) : (n = g(t, e), n.milliseconds =- n.milliseconds, n.months =- n.months), n
    }
    function v(e, t) {
        return function(n, i) {
            var r, s;
            return null === i || isNaN( + i) || (o(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = n, n = i, i = s), n = "string" == typeof n?+n : n, r = vt.duration(n, i), y(this, r, e), this
        }
    }
    function y(e, t, n, i) {
        var r = t._milliseconds, o = t._days, s = t._months;
        i = null == i?!0 : i, r && e._d.setTime( + e._d + r * n), o && ht(e, "Date", ct(e, "Date") + o * n), s && ut(e, ct(e, "Month") + s * n), i && vt.updateOffset(e, o || s)
    }
    function w(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function _(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }
    function b(e, t, n) {
        var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0;
        for (i = 0; r > i; i++)(n && e[i] !== t[i] ||!n && C(e[i]) !== C(t[i])
            ) && s++;
        return s + o
    }
    function M(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = an[e] || ln[t] || t
        }
        return e
    }
    function x(e) {
        var t, n, i = {};
        for (n in e)
            e.hasOwnProperty(n) && (t = M(n), t && (i[t] = e[n]));
        return i
    }
    function k(t) {
        var n, i;
        if (0 === t.indexOf("week"))
            n = 7, i = "day";
        else {
            if (0 !== t.indexOf("month"))
                return;
            n = 12, i = "month"
        }
        vt[t] = function(r, o) {
            var s, a, l = vt._locale[t], u = [];
            if ("number" == typeof r && (o = r, r = e), a = function(e) {
                var t = vt().utc().set(i, e);
                return l.call(vt._locale, t, r || "")
            }, null != o)
                return a(o);
            for (s = 0; n > s; s++)
                u.push(a(s));
            return u
        }
    }
    function C(e) {
        var t =+ e, n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }
    function R(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }
    function S(e, t, n) {
        return ot(vt([e, 11, 31 + t - n]), t, n).week
    }
    function D(e) {
        return T(e) ? 366 : 365
    }
    function T(e) {
        return 0 === e%4 && 0 !== e%100 || 0 === e%400
    }
    function A(e) {
        var t;
        e._a&&-2 === e._pf.overflow && (t = e._a[kt] < 0 || e._a[kt] > 11 ? kt : e._a[Ct] < 1 || e._a[Ct] > R(e._a[xt], e._a[kt]) ? Ct : e._a[Rt] < 0 || e._a[Rt] > 23 ? Rt : e._a[St] < 0 || e._a[St] > 59 ? St : e._a[Dt] < 0 || e._a[Dt] > 59 ? Dt : e._a[Tt] < 0 || e._a[Tt] > 999 ? Tt : - 1, e._pf._overflowDayOfYear && (xt > t || t > Ct) && (t = Ct), e._pf.overflow = t)
    }
    function F(e) {
        return null == e._isValid && (e._isValid=!isNaN(e._d.getTime()) && e._pf.overflow < 0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
    }
    function E(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function O(e) {
        for (var t, n, i, r, o = 0; o < e.length;) {
            for (r = E(e[o]).split("-"), t = r.length, n = E(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (i = P(r.slice(0, t).join("-")))
                    return i;
                if (n && n.length >= t && b(r, n, !0) >= t - 1)
                    break;
                t--
            }
            o++
        }
        return null
    }
    function P(e) {
        var t = null;
        if (!At[e] && Et)
            try {
                t = vt.locale(), require("./locale/" + e), vt.locale(t)
        } catch (n) {}
        return At[e]
    }
    function I(e, t) {
        return t._isUTC ? vt(e).zone(t._offset || 0) : vt(e).local()
    }
    function j(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function W(e) {
        var t, n, i = e.match(jt);
        for (t = 0, n = i.length; n > t; t++)
            i[t] = fn[i[t]] ? fn[i[t]] : j(i[t]);
        return function(r) {
            var o = "";
            for (t = 0; n > t; t++)
                o += i[t]instanceof Function ? i[t].call(r, e) : i[t];
            return o
        }
    }
    function q(e, t) {
        return e.isValid() ? (t = H(t, e.localeData()), un[t] || (un[t] = W(t)), un[t](e)) : e.localeData().invalidDate()
    }
    function H(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (Wt.lastIndex = 0; i >= 0 && Wt.test(e);)
            e = e.replace(Wt, n), Wt.lastIndex = 0, i -= 1;
        return e
    }
    function z(e, t) {
        var n, i = t._strict;
        switch (e) {
        case"Q":
            return Jt;
        case"DDDD":
            return Gt;
        case"YYYY":
        case"GGGG":
        case"gggg":
            return i ? Kt : zt;
        case"Y":
        case"G":
        case"g":
            return Xt;
        case"YYYYYY":
        case"YYYYY":
        case"GGGGG":
        case"ggggg":
            return i ? Zt : Yt;
        case"S":
            if (i)
                return Jt;
        case"SS":
            if (i)
                return Qt;
        case"SSS":
            if (i)
                return Gt;
        case"DDD":
            return Ht;
        case"MMM":
        case"MMMM":
        case"dd":
        case"ddd":
        case"dddd":
            return Nt;
        case"a":
        case"A":
            return t._locale._meridiemParse;
        case"X":
            return $t;
        case"Z":
        case"ZZ":
            return Bt;
        case"T":
            return Vt;
        case"SSSS":
            return Lt;
        case"MM":
        case"DD":
        case"YY":
        case"GG":
        case"gg":
        case"HH":
        case"hh":
        case"mm":
        case"ss":
        case"ww":
        case"WW":
            return i ? Qt : qt;
        case"M":
        case"D":
        case"d":
        case"H":
        case"h":
        case"m":
        case"s":
        case"w":
        case"W":
        case"e":
        case"E":
            return qt;
        case"Do":
            return Ut;
        default:
            return n = new RegExp(Q(J(e.replace("\\", "")), "i"))
        }
    }
    function Y(e) {
        e = e || "";
        var t = e.match(Bt) || [], n = t[t.length - 1] || [], i = (n + "").match(on) || ["-", 0, 0], r =+ (60 * i[1]) + C(i[2]);
        return "+" === i[0]?-r : r
    }
    function L(e, t, n) {
        var i, r = n._a;
        switch (e) {
        case"Q":
            null != t && (r[kt] = 3 * (C(t) - 1));
            break;
        case"M":
        case"MM":
            null != t && (r[kt] = C(t) - 1);
            break;
        case"MMM":
        case"MMMM":
            i = n._locale.monthsParse(t), null != i ? r[kt] = i : n._pf.invalidMonth = t;
            break;
        case"D":
        case"DD":
            null != t && (r[Ct] = C(t));
            break;
        case"Do":
            null != t && (r[Ct] = C(parseInt(t, 10)));
            break;
        case"DDD":
        case"DDDD":
            null != t && (n._dayOfYear = C(t));
            break;
        case"YY":
            r[xt] = vt.parseTwoDigitYear(t);
            break;
        case"YYYY":
        case"YYYYY":
        case"YYYYYY":
            r[xt] = C(t);
            break;
        case"a":
        case"A":
            n._isPm = n._locale.isPM(t);
            break;
        case"H":
        case"HH":
        case"h":
        case"hh":
            r[Rt] = C(t);
            break;
        case"m":
        case"mm":
            r[St] = C(t);
            break;
        case"s":
        case"ss":
            r[Dt] = C(t);
            break;
        case"S":
        case"SS":
        case"SSS":
        case"SSSS":
            r[Tt] = C(1e3 * ("0." + t));
            break;
        case"X":
            n._d = new Date(1e3 * parseFloat(t));
            break;
        case"Z":
        case"ZZ":
            n._useUTC=!0, n._tzm = Y(t);
            break;
        case"dd":
        case"ddd":
        case"dddd":
            i = n._locale.weekdaysParse(t), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = t;
            break;
        case"w":
        case"ww":
        case"W":
        case"WW":
        case"d":
        case"e":
        case"E":
            e = e.substr(0, 1);
        case"gggg":
        case"GGGG":
        case"GGGGG":
            e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = C(t));
            break;
        case"gg":
        case"GG":
            n._w = n._w || {}, n._w[e] = vt.parseTwoDigitYear(t)
        }
    }
    function N(e) {
        var n, i, r, o, s, a, l;
        n = e._w, null != n.GG || null != n.W || null != n.E ? (s = 1, a = 4, i = t(n.GG, e._a[xt], ot(vt(), 1, 4).year), r = t(n.W, 1), o = t(n.E, 1)) : (s = e._locale._week.dow, a = e._locale._week.doy, i = t(n.gg, e._a[xt], ot(vt(), s, a).year), r = t(n.w, 1), null != n.d ? (o = n.d, s > o&&++r) : o = null != n.e ? n.e + s : s), l = st(i, r, o, a, s), e._a[xt] = l.year, e._dayOfYear = l.dayOfYear
    }
    function B(e) {
        var n, i, r, o, s = [];
        if (!e._d) {
            for (r = $(e), e._w && null == e._a[Ct] && null == e._a[kt] && N(e), e._dayOfYear && (o = t(e._a[xt], r[xt]), e._dayOfYear > D(o) && (e._pf._overflowDayOfYear=!0), i = tt(o, 0, e._dayOfYear), e._a[kt] = i.getUTCMonth(), e._a[Ct] = i.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n)
                e._a[n] = s[n] = r[n];
            for (; 7 > n; n++)
                e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
            e._d = (e._useUTC ? tt : et).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm)
        }
    }
    function V(e) {
        var t;
        e._d || (t = x(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], B(e))
    }
    function $(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function U(e) {
        if (e._f === vt.ISO_8601)
            return K(e), void 0;
        e._a = [], e._pf.empty=!0;
        var t, n, i, r, o, s = "" + e._i, a = s.length, l = 0;
        for (i = H(e._f, e._locale).match(jt) || [], t = 0; t < i.length; t++)
            r = i[t], n = (s.match(z(r, e)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && e._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), l += n.length), fn[r] ? (n ? e._pf.empty=!1 : e._pf.unusedTokens.push(r), L(r, n, e)) : e._strict&&!n && e._pf.unusedTokens.push(r);
        e._pf.charsLeftOver = a - l, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[Rt] < 12 && (e._a[Rt] += 12), e._isPm===!1 && 12 === e._a[Rt] && (e._a[Rt] = 0), B(e), A(e)
    }
    function J(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
            return t || n || i || r
        })
    }
    function Q(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function G(e) {
        var t, i, r, o, s;
        if (0 === e._f.length)
            return e._pf.invalidFormat=!0, e._d = new Date(0 / 0), void 0;
        for (o = 0; o < e._f.length; o++)
            s = 0, t = d({}, e), t._pf = n(), t._f = e._f[o], U(t), F(t) && (s += t._pf.charsLeftOver, s += 10 * t._pf.unusedTokens.length, t._pf.score = s, (null == r || r > s) && (r = s, i = t));
        h(e, i || t)
    }
    function K(e) {
        var t, n, i = e._i, r = en.exec(i);
        if (r) {
            for (e._pf.iso=!0, t = 0, n = nn.length; n > t; t++)
                if (nn[t][1].exec(i)) {
                    e._f = nn[t][0] + (r[6] || " ");
                    break
                }
            for (t = 0, n = rn.length; n > t; t++)
                if (rn[t][1].exec(i)) {
                    e._f += rn[t][0];
                    break
                }
            i.match(Bt) && (e._f += "Z"), U(e)
        } else
            e._isValid=!1
    }
    function Z(e) {
        K(e), e._isValid===!1 && (delete e._isValid, vt.createFromInputFallback(e))
    }
    function X(t) {
        var n, i = t._i;
        i === e ? t._d = new Date : _(i) ? t._d = new Date( + i) : null !== (n = Ot.exec(i)) ? t._d = new Date( + n[1]) : "string" == typeof i ? Z(t) : w(i) ? (t._a = i.slice(0), B(t)) : "object" == typeof i ? V(t) : "number" == typeof i ? t._d = new Date(i) : vt.createFromInputFallback(t)
    }
    function et(e, t, n, i, r, o, s) {
        var a = new Date(e, t, n, i, r, o, s);
        return 1970 > e && a.setFullYear(e), a
    }
    function tt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }
    function nt(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e)
                    return null
            } else
                e = parseInt(e, 10);
        return e
    }
    function it(e, t, n, i, r) {
        return r.relativeTime(t || 1, !!n, e, i)
    }
    function rt(e, t, n) {
        var i = vt.duration(e).abs(), r = Mt(i.as("s")), o = Mt(i.as("m")), s = Mt(i.as("h")), a = Mt(i.as("d")), l = Mt(i.as("M")), u = Mt(i.as("y")), c = r < cn.s && ["s", r] || 1 === o && ["m"] || o < cn.m && ["mm", o] || 1 === s && ["h"] || s < cn.h && ["hh", s] || 1 === a && ["d"] || a < cn.d && ["dd", a] || 1 === l && ["M"] || l < cn.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
        return c[2] = t, c[3] =+ e > 0, c[4] = n, it.apply({}, c)
    }
    function ot(e, t, n) {
        var i, r = n - t, o = n - e.day();
        return o > r && (o -= 7), r - 7 > o && (o += 7), i = vt(e).add(o, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }
    function st(e, t, n, i, r) {
        var o, s, a = tt(e, 0, 1).getUTCDay();
        return a = 0 === a ? 7 : a, n = null != n ? n : r, o = r - a + (a > i ? 7 : 0) - (r > a ? 7 : 0), s = 7 * (t - 1) + (n - r) + o + 1, {
            year: s > 0 ? e: e - 1,
            dayOfYear: s > 0 ? s: D(e - 1) + s
        }
    }
    function at(t) {
        var n = t._i, i = t._f;
        return t._locale = t._locale || vt.localeData(t._l), null === n || i === e && "" === n ? vt.invalid({
            nullInput: !0
        }) : ("string" == typeof n && (t._i = n = t._locale.preparse(n)), vt.isMoment(n) ? new u(n, !0) : (i ? w(i) ? G(t) : U(t) : X(t), new u(t)))
    }
    function lt(e, t) {
        var n, i;
        if (1 === t.length && w(t[0]) && (t = t[0]), !t.length)
            return vt();
        for (n = t[0], i = 1; i < t.length; ++i)
            t[i][e](n) && (n = t[i]);
        return n
    }
    function ut(e, t) {
        var n;
        return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), R(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }
    function ct(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }
    function ht(e, t, n) {
        return "Month" === t ? ut(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }
    function dt(e, t) {
        return function(n) {
            return null != n ? (ht(this, e, n), vt.updateOffset(this, t), this) : ct(this, e)
        }
    }
    function ft(e) {
        return 400 * e / 146097
    }
    function pt(e) {
        return 146097 * e / 400
    }
    function gt(e) {
        vt.duration.fn[e] = function() {
            return this._data[e]
        }
    }
    function mt(e) {
        "undefined" == typeof ender && (yt = bt.moment, bt.moment = e ? r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vt) : vt)
    }
    for (var vt, yt, wt, _t = "2.8.1", bt = "undefined" != typeof global ? global : this, Mt = Math.round, xt = 0, kt = 1, Ct = 2, Rt = 3, St = 4, Dt = 5, Tt = 6, At = {}, Ft = [], Et = "undefined" != typeof module && module.exports, Ot = /^\/?Date\((\-?\d+)/i, Pt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, It = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, jt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Wt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, qt = /\d\d?/, Ht = /\d{1,3}/, zt = /\d{1,4}/, Yt = /[+\-]?\d{1,6}/, Lt = /\d+/, Nt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Bt = /Z|[\+\-]\d\d:?\d\d/gi, Vt = /T/i, $t = /[\+\-]?\d+(\.\d{1,3})?/, Ut = /\d{1,2}/, Jt = /\d/, Qt = /\d\d/, Gt = /\d{3}/, Kt = /\d{4}/, Zt = /[+-]?\d{6}/, Xt = /[+-]?\d+/, en = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tn = "YYYY-MM-DDTHH:mm:ssZ", nn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], rn = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], on = /([\+\-]|\d\d)/gi, sn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|")
        , {
        Milliseconds: 1, Seconds : 1e3, Minutes : 6e4, Hours : 36e5, Days : 864e5, Months : 2592e6, Years : 31536e6
    }), an = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, ln = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, un = {}, cn = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, hn = "DDD w W M D d".split(" "), dn = "M D H h m s w W".split(" "), fn = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(e) {
            return this.localeData().monthsShort(this, e)
        },
        MMMM: function(e) {
            return this.localeData().months(this, e)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(e) {
            return this.localeData().weekdaysMin(this, e)
        },
        ddd: function(e) {
            return this.localeData().weekdaysShort(this, e)
        },
        dddd: function(e) {
            return this.localeData().weekdays(this, e)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return p(this.year()%100, 2)
        },
        YYYY: function() {
            return p(this.year(), 4)
        },
        YYYYY: function() {
            return p(this.year(), 5)
        },
        YYYYYY: function() {
            var e = this.year(), t = e >= 0 ? "+": "-";
            return t + p(Math.abs(e), 6)
        },
        gg: function() {
            return p(this.weekYear()%100, 2)
        },
        gggg: function() {
            return p(this.weekYear(), 4)
        },
        ggggg: function() {
            return p(this.weekYear(), 5)
        },
        GG: function() {
            return p(this.isoWeekYear()%100, 2)
        },
        GGGG: function() {
            return p(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return p(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours()%12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return C(this.milliseconds() / 100)
        },
        SS: function() {
            return p(C(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return p(this.milliseconds(), 3)
        },
        SSSS: function() {
            return p(this.milliseconds(), 3)
        },
        Z: function() {
            var e =- this.zone(), t = "+";
            return 0 > e && (e =- e, t = "-"), t + p(C(e / 60), 2) + ":" + p(C(e)%60, 2)
        },
        ZZ: function() {
            var e =- this.zone(), t = "+";
            return 0 > e && (e =- e, t = "-"), t + p(C(e / 60), 2) + p(C(e)%60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    }, pn = {}, gn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
    hn.length;
    )wt = hn.pop(), fn[wt + "o"] = a(fn[wt], wt);
    for (; dn.length;)
        wt = dn.pop(), fn[wt + wt] = s(fn[wt], 2);
    fn.DDDD = s(fn.DDD, 3), h(l.prototype, {
        set: function(e) {
            var t, n;
            for (n in e)
                t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e) {
            var t, n, i;
            for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                if (this._monthsParse[t] || (n = vt.utc([2e3, t]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[t].test(e))
                    return t
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, n, i;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = vt([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e))
                    return t
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t) {
            var n = this._calendar[e];
            return "function" == typeof n ? n.apply(t) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, i) {
            var r = this._relativeTime[n];
            return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future": "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return ot(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), vt = function(t, i, r, o) {
        var s;
        return "boolean" == typeof r && (o = r, r = e), s = {}, s._isAMomentObject=!0, s._i = t, s._f = i, s._l = r, s._strict = o, s._isUTC=!1, s._pf = n(), at(s)
    }, vt.suppressDeprecationWarnings=!1, vt.createFromInputFallback = r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i)
    }), vt.min = function() {
        var e = [].slice.call(arguments, 0);
        return lt("isBefore", e)
    }, vt.max = function() {
        var e = [].slice.call(arguments, 0);
        return lt("isAfter", e)
    }, vt.utc = function(t, i, r, o) {
        var s;
        return "boolean" == typeof r && (o = r, r = e), s = {}, s._isAMomentObject=!0, s._useUTC=!0, s._isUTC=!0, s._l = r, s._i = t, s._f = i, s._strict = o, s._pf = n(), at(s).utc()
    }, vt.unix = function(e) {
        return vt(1e3 * e)
    }, vt.duration = function(e, t) {
        var n, i, r, o, s = e, a = null;
        return vt.isDuration(e) ? s = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (a = Pt.exec(e)) ? (n = "-" === a[1]?-1 : 1, s = {
            y : 0, d : C(a[Ct]) * n, h : C(a[Rt]) * n, m : C(a[St]) * n, s : C(a[Dt]) * n, ms : C(a[Tt]) * n
        }) : (a = It.exec(e)) ? (n = "-" === a[1]?-1 : 1, r = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * n
        }, s = {
            y: r(a[2]),
            M: r(a[3]),
            d: r(a[4]),
            h: r(a[5]),
            m: r(a[6]),
            s: r(a[7]),
            w: r(a[8])
        }) : "object" == typeof s && ("from"in s || "to"in s) && (o = m(vt(s.from), vt(s.to)), s = {}, s.ms = o.milliseconds, s.M = o.months), i = new c(s), vt.isDuration(e) && e.hasOwnProperty("_locale") && (i._locale = e._locale), i
    }, vt.version = _t, vt.defaultFormat = tn, vt.ISO_8601 = function() {}, vt.momentProperties = Ft, vt.updateOffset = function() {}, vt.relativeTimeThreshold = function(t, n) {
        return cn[t] === e?!1 : n === e ? cn[t] : (cn[t] = n, !0)
    }, vt.lang = r("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
        return vt.locale(e, t)
    }), vt.locale = function(e, t) {
        var n;
        return e && (n = "undefined" != typeof t ? vt.defineLocale(e, t) : vt.localeData(e), n && (vt.duration._locale = vt._locale = n)), vt._locale._abbr
    }, vt.defineLocale = function(e, t) {
        return null !== t ? (t.abbr = e, At[e] || (At[e] = new l), At[e].set(t), vt.locale(e), At[e]) : (delete At[e], null)
    }, vt.langData = r("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
        return vt.localeData(e)
    }), vt.localeData = function(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            return vt._locale;
        if (!w(e)) {
            if (t = P(e))
                return t;
            e = [e]
        }
        return O(e)
    }, vt.isMoment = function(e) {
        return e instanceof u || null != e && e.hasOwnProperty("_isAMomentObject")
    }, vt.isDuration = function(e) {
        return e instanceof c
    };
    for (wt = gn.length - 1; wt >= 0; --wt)
        k(gn[wt]);
    vt.normalizeUnits = function(e) {
        return M(e)
    }, vt.invalid = function(e) {
        var t = vt.utc(0 / 0);
        return null != e ? h(t._pf, e) : t._pf.userInvalidated=!0, t
    }, vt.parseZone = function() {
        return vt.apply(null, arguments).parseZone()
    }, vt.parseTwoDigitYear = function(e) {
        return C(e) + (C(e) > 68 ? 1900 : 2e3)
    }, h(vt.fn = u.prototype, {
        clone: function() {
            return vt(this)
        },
        valueOf: function() {
            return + this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor( + this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date( + this) : this._d
        },
        toISOString: function() {
            var e = vt(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return F(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && b(this._a, (this._isUTC ? vt.utc(this._a) : vt(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return h({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(e) {
            return this.zone(0, e)
        },
        local: function(e) {
            return this._isUTC && (this.zone(0, e), this._isUTC=!1, e && this.add(this._d.getTimezoneOffset(), "m")), this
        },
        format: function(e) {
            var t = q(this, e || vt.defaultFormat);
            return this.localeData().postformat(t)
        },
        add: v(1, "add"),
        subtract: v( - 1, "subtract"),
        diff: function(e, t, n) {
            var i, r, o = I(e, this), s = 6e4 * (this.zone() - o.zone());
            return t = M(t), "year" === t || "month" === t ? (i = 432e5 * (this.daysInMonth() + o.daysInMonth()), r = 12 * (this.year() - o.year()) + (this.month() - o.month()), r += (this - vt(this).startOf("month") - (o - vt(o).startOf("month"))) / i, r -= 6e4 * (this.zone() - vt(this).startOf("month").zone() - (o.zone() - vt(o).startOf("month").zone())) / i, "year" === t && (r/=12)) : (i = this - o, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? r : f(r)
        },
        from: function(e, t) {
            return vt.duration({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(vt(), e)
        },
        calendar: function(e) {
            var t = e || vt(), n = I(t, this).startOf("day"), i = this.diff(n, "days", !0), r =- 6 > i ? "sameElse" : - 1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(r, this))
        },
        isLeapYear: function() {
            return T(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay(): this._d.getDay();
            return null != e ? (e = nt(e, this.localeData()), this.add(e - t, "d")) : t
        },
        month: dt("Month", !0),
        startOf: function(e) {
            switch (e = M(e)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(e) {
            return e = M(e), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        },
        isAfter: function(e, t) {
            return t = "undefined" != typeof t ? t : "millisecond", + this.clone().startOf(t)>+vt(e).startOf(t)
        },
        isBefore: function(e, t) {
            return t = "undefined" != typeof t ? t : "millisecond", + this.clone().startOf(t)<+vt(e).startOf(t)
        },
        isSame: function(e, t) {
            return t = t || "ms", + this.clone().startOf(t) ===+ I(e, this).startOf(t)
        },
        min: r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = vt.apply(null, arguments), this > e ? this : e
        }),
        max: r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = vt.apply(null, arguments), e > this ? this : e
        }),
        zone: function(e, t) {
            var n, i = this._offset || 0;
            return null == e ? this._isUTC ? i : this._d.getTimezoneOffset() : ("string" == typeof e && (e = Y(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._d.getTimezoneOffset()), this._offset = e, this._isUTC=!0, null != n && this.subtract(n, "m"), i !== e && (!t || this._changeInProgress ? y(this, vt.duration(i - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress=!0, vt.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(e) {
            return e = e ? vt(e).zone() : 0, 0 === (this.zone() - e)%60
        },
        daysInMonth: function() {
            return R(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var t = Mt((vt(this).startOf("day") - vt(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        },
        quarter: function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month()%3)
        },
        weekYear: function(e) {
            var t = ot(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        },
        isoWeekYear: function(e) {
            var t = ot(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        },
        week: function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        isoWeek: function(e) {
            var t = ot(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow)%7;
            return null == e ? t : this.add(e - t, "d")
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day()%7 ? e : e - 7)
        },
        isoWeeksInYear: function() {
            return S(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var e = this.localeData()._week;
            return S(this.year(), e.dow, e.doy)
        },
        get: function(e) {
            return e = M(e), this[e]()
        },
        set: function(e, t) {
            return e = M(e), "function" == typeof this[e] && this[e](t), this
        },
        locale: function(t) {
            return t === e ? this._locale._abbr : (this._locale = vt.localeData(t), this)
        },
        lang: r("moment().lang() is deprecated. Use moment().localeData() instead.", function(t) {
            return t === e ? this.localeData() : (this._locale = vt.localeData(t), this)
        }),
        localeData: function() {
            return this._locale
        }
    }), vt.fn.millisecond = vt.fn.milliseconds = dt("Milliseconds", !1), vt.fn.second = vt.fn.seconds = dt("Seconds", !1), vt.fn.minute = vt.fn.minutes = dt("Minutes", !1), vt.fn.hour = vt.fn.hours = dt("Hours", !0), vt.fn.date = dt("Date", !0), vt.fn.dates = r("dates accessor is deprecated. Use date instead.", dt("Date", !0)), vt.fn.year = dt("FullYear", !0), vt.fn.years = r("years accessor is deprecated. Use year instead.", dt("FullYear", !0)), vt.fn.days = vt.fn.day, vt.fn.months = vt.fn.month, vt.fn.weeks = vt.fn.week, vt.fn.isoWeeks = vt.fn.isoWeek, vt.fn.quarters = vt.fn.quarter, vt.fn.toJSON = vt.fn.toISOString, h(vt.duration.fn = c.prototype, {
        _bubble: function() {
            var e, t, n, i = this._milliseconds, r = this._days, o = this._months, s = this._data, a = 0;
            s.milliseconds = i%1e3, e = f(i / 1e3), s.seconds = e%60, t = f(e / 60), s.minutes = t%60, n = f(t / 60), s.hours = n%24, r += f(n / 24), a = f(ft(r)), r -= f(pt(a)), o += f(r / 30), r%=30, a += f(o / 12), o%=12, s.days = r, s.months = o, s.years = a
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return f(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months%12) + 31536e6 * C(this._months / 12)
        },
        humanize: function(e) {
            var t = rt(this, !e, this.localeData());
            return e && (t = this.localeData().pastFuture( + this, t)), this.localeData().postformat(t)
        },
        add: function(e, t) {
            var n = vt.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var n = vt.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(e) {
            return e = M(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            var t, n;
            if (e = M(e), t = this._days + this._milliseconds / 864e5, "month" === e || "year" === e)
                return n = this._months + 12 * ft(t), "month" === e ? n : n / 12;
            switch (t += pt(this._months / 12), e) {
            case"week":
                return t / 7;
            case"day":
                return t;
            case"hour":
                return 24 * t;
            case"minute":
                return 60 * 24 * t;
            case"second":
                return 60 * 60 * 24 * t;
            case"millisecond":
                return 1e3 * 60 * 60 * 24 * t;
            default:
                throw new Error("Unknown unit " + e)
            }
        },
        lang: vt.fn.lang,
        locale: vt.fn.locale,
        toIsoString: r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var e = Math.abs(this.years()), t = Math.abs(this.months()), n = Math.abs(this.days()), i = Math.abs(this.hours()), r = Math.abs(this.minutes()), o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || r || o ? "T" : "") + (i ? i + "H" : "") + (r ? r + "M" : "") + (o ? o + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        }
    });
    for (wt in sn)
        sn.hasOwnProperty(wt) && gt(wt.toLowerCase());
    vt.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, vt.duration.fn.asSeconds = function() {
        return this.as("s")
    }, vt.duration.fn.asMinutes = function() {
        return this.as("m")
    }, vt.duration.fn.asHours = function() {
        return this.as("h")
    }, vt.duration.fn.asDays = function() {
        return this.as("d")
    }, vt.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, vt.duration.fn.asMonths = function() {
        return this.as("M")
    }, vt.duration.fn.asYears = function() {
        return this.as("y")
    }, vt.locale("en", {
        ordinal: function(e) {
            var t = e%10, n = 1 === C(e%100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th";
            return e + n
        }
    }), Et ? module.exports = vt : "function" == typeof _wAMD.define && _wAMD.define.amd ? (_wAMD.define("moment", ["require", "exports", "module"], function(e, t, n) {
        return n.config && n.config() && n.config().noGlobal===!0 && (bt.moment = yt), vt
    }), mt(!0)) : mt()
}.call(this), _wAMD.define("mustache", ["jquery", "mustache-vendor", "moment"], function(e, t, n) {
    window.Mustache = t;
    var i = Weebly ? Weebly.AdminType: "", r = {
        date: "MMMM D, YYYY",
        shortDate: "M/D/YY",
        longDate: "M/D/YYYY",
        time: "h:mm a"
    }, o = function(e) {
        return function(t, i) {
            var o = i(t), s = n.unix(o);
            return s.format(r[e])
        }
    }, s = {
        buildTime: "undefined" != typeof buildTime ? buildTime: null,
        ASSETS_BASE: "undefined" != typeof ASSETS_BASE ? ASSETS_BASE: null,
        tl: function() {
            return function(e, t) {
                var n = e.match(/(.+?)(\|\[(.+)\])?$/), i = n[1], r = n[3] || "";
                return t(_W.tl(i, r))
            }
        },
        esc_attr: function() {
            return function(e, t) {
                return _.escape(t(e))
            }
        },
        fmt: {
            date: function() {
                return o("date")
            },
            shortDate: function() {
                return o("shortDate")
            },
            longDate: function() {
                return o("longDate")
            },
            time: function() {
                return o("time")
            }
        },
        isWeeblyAdmin: function() {
            return "weebly" === i
        },
        td: function() {
            return function(e, t) {
                var i = ["d", "j", "m", "n", "y", "Y", "a", "A", "g", "h", "G", "H", "i", "s"], r = ["DD", "D", "MM", "M", "YY", "YYYY", "a", "A", "hh", "h", "HH", "H", "mm", "ss"];
                _.each(i, function(t, n) {
                    e = e.replace(t, r[n])
                });
                var o = e.split(/\|/), s = o[0], a = t("{{" + o[1] + "}}"), l = n(a).format(s);
                return l
            }
        }
    };
    t.origRender = t.render, t.render = function(n, i) {
        return e.extend(i, s), t.origRender.apply(this, arguments)
    };
    var a = t.Writer.prototype;
    return a.origCompile = a.compile, a.compile = function(t) {
        var n = a.origCompile.apply(this, [t]);
        return function() {
            var t = Array.prototype.slice.call(arguments);
            return t[0] = e.extend(t[0] || {}, s), n.apply(this, t)
        }
    }, t
}), function(e, t, n) {
    function i(e) {
        return e.match(/\D+$/)
    }
    function r(e, t, n, i) {
        if ("d" != n && h(e)) {
            var r = v.exec(t), o = "auto" === e.css(n) ? 0: e.css(n), s = "string" == typeof o ? c(o): o, a = ("string" == typeof t ? c(t) : t, i===!0 ? 0 : s), l = e.is(":hidden"), u = e.translation();
            if ("left" == n && (a = parseInt(s, 10) + u.x), "right" == n && (a = parseInt(s, 10) + u.x), "top" == n && (a = parseInt(s, 10) + u.y), "bottom" == n && (a = parseInt(s, 10) + u.y), r || "show" != t ? r || "hide" != t || (a = 0) : (a = 1, l && e.css({
                display: "block",
                opacity: 0
            })), r) {
                var d = parseFloat(r[2]);
                return r[1] && (d = ("-=" === r[1]?-1 : 1) * d + parseInt(a, 10)), d
            }
            return a
        }
    }
    function o(e, t, n) {
        return (n===!0 || F===!0 && n!==!1) && A ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px," + t + "px)"
    }
    function s(t, n, i, r, o, s, l, h) {
        var d = t.data(b), f = d&&!u(d) ? d: e.extend(!0, {}, w), g = o, m = e.inArray(n, p)>-1;
        if (m) {
            var v = f.meta, y = c(t.css(n)) || 0, _ = n + "_o";
            g = o - y, v[n] = g, v[_] = "auto" == t.css(n) ? 0 + g : y + g || 0, f.meta = v, l && 0 === g && (g = 0 - v[_], v[n] = g, v[_] = 0)
        }
        return t.data(b, a(t, f, n, i, r, g, s, l, h))
    }
    function a(e, t, n, i, r, s, a, l, u) {
        var c=!1, h = a===!0 && l===!0;
        t = t || {}, t.original || (t.original = {}, c=!0), t.properties = t.properties || {}, t.secondary = t.secondary || {};
        for (var d = t.meta, f = t.original, p = t.properties, m = t.secondary, v = g.length - 1; v >= 0; v--) {
            var y = g[v] + "transition-property", w = g[v] + "transition-duration", _ = g[v] + "transition-timing-function";
            n = h ? g[v] + "transform" : n, c && (f[y] = e.css(y) || "", f[w] = e.css(w) || "", f[_] = e.css(_) || ""), m[n] = h ? o(d.left, d.top, u) : s, p[y] = (p[y] ? p[y] + "," : "") + n, p[w] = (p[w] ? p[w] + "," : "") + i + "ms", p[_] = (p[_] ? p[_] + "," : "") + r
        }
        return t
    }
    function l(e) {
        for (var t in e)
            if (!("width" != t && "height" != t || "show" != e[t] && "hide" != e[t] && "toggle" != e[t]))
                return !0;
        return !1
    }
    function u(e) {
        for (var t in e)
            return !1;
        return !0
    }
    function c(e) {
        return parseFloat(e.replace(i(e), ""))
    }
    function h(e) {
        var t=!0;
        return e.each(function(e, n) {
            return t = t && n.ownerDocument
        }), t
    }
    function d(t, n, i) {
        if (!h(i))
            return !1;
        var r = e.inArray(t, f)>-1;
        return "width" != t && "height" != t && "opacity" != t || parseFloat(n) !== parseFloat(i.css(t)) || (r=!1), r
    }
    var f = ["top", "right", "bottom", "left", "opacity", "height", "width"], p = ["top", "right", "bottom", "left"], g = ["-webkit-", "-moz-", "-o-", ""], m = ["avoidTransforms", "useTranslate3d", "leaveTransforms"], v = /^([+-]=)?([\d+-.]+)(.*)$/, y = /([A-Z])/g, w = {
        secondary: {},
        meta: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }, _ = "px", b = "jQe", M = "cubic-bezier(", x = ")", k = null, C=!1, R = document.body || document.documentElement, S = R.style, D = "webkitTransitionEnd oTransitionEnd transitionend", T = void 0 !== S.WebkitTransition || void 0 !== S.MozTransition || void 0 !== S.OTransition || void 0 !== S.transition, A = "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix, F = A;
    e.expr && e.expr.filters && (k = e.expr.filters.animated, e.expr.filters.animated = function(t) {
        return e(t).data("events") && e(t).data("events")[D]?!0 : k.call(this, t)
    }), e.extend({
        toggle3DByDefault: function() {
            return F=!F
        },
        toggleDisabledByDefault: function() {
            return C=!C
        }
    }), e.fn.translation = function() {
        if (!this[0])
            return null;
        var e = this[0], t = window.getComputedStyle(e, null), n = {
            x: 0,
            y: 0
        };
        if (t)
            for (var i = g.length - 1; i >= 0; i--) {
                var r = t.getPropertyValue(g[i] + "transform");
                if (r && /matrix/i.test(r)) {
                    var o = r.replace(/^matrix\(/i, "").split(/, |\)$/g);
                    n = {
                        x: parseInt(o[4], 10),
                        y: parseInt(o[5], 10)
                    };
                    break
                }
            }
        return n
    }, e.fn.animate = function(n, i, o, a) {
        n = n || {};
        var c=!("undefined" != typeof n.bottom || "undefined" != typeof n.right), h = e.speed(i, o, a), f = this, v = 0, y = function() {
            v--, 0 === v && "function" == typeof h.complete && h.complete.apply(f, arguments)
        }, w = "undefined" != typeof n.avoidCSSTransitions ? n.avoidCSSTransitions : C;
        return w===!0 ||!T || u(n) || l(n) || h.duration <= 0 || e.fn.animate.defaults.avoidTransforms===!0 && n.avoidTransforms!==!1 ? t.apply(this, arguments) : this[h.queue===!0 ? "queue": "each"](function() {
            var i = e(this), o = e.extend({}, h), a = function(t) {
                var r = i.data(b) || {
                    original: {}
                }, o = {};
                if (2 == t.eventPhase) {
                    if (n.leaveTransforms!==!0) {
                        for (var s = g.length - 1; s >= 0; s--)
                            o[g[s] + "transform"] = "";
                        if (c && "undefined" != typeof r.meta)
                            for (var a, l = 0; a = p[l]; ++l)
                                o[a] = r.meta[a + "_o"] + _, e(this).css(a, o[a])
                            }
                    i.unbind(D).css(r.original).css(o).data(b, null), "hide" === n.opacity && i.css({
                        display: "none",
                        opacity: ""
                    }), y.call(this)
                }
            }, l = {
                bounce: M + "0.0, 0.35, .5, 1.3" + x,
                linear: "linear",
                swing: "ease-in-out",
                easeInQuad: M + "0.550, 0.085, 0.680, 0.530" + x,
                easeInCubic: M + "0.550, 0.055, 0.675, 0.190" + x,
                easeInQuart: M + "0.895, 0.030, 0.685, 0.220" + x,
                easeInQuint: M + "0.755, 0.050, 0.855, 0.060" + x,
                easeInSine: M + "0.470, 0.000, 0.745, 0.715" + x,
                easeInExpo: M + "0.950, 0.050, 0.795, 0.035" + x,
                easeInCirc: M + "0.600, 0.040, 0.980, 0.335" + x,
                easeInBack: M + "0.600, -0.280, 0.735, 0.045" + x,
                easeOutQuad: M + "0.250, 0.460, 0.450, 0.940" + x,
                easeOutCubic: M + "0.215, 0.610, 0.355, 1.000" + x,
                easeOutQuart: M + "0.165, 0.840, 0.440, 1.000" + x,
                easeOutQuint: M + "0.230, 1.000, 0.320, 1.000" + x,
                easeOutSine: M + "0.390, 0.575, 0.565, 1.000" + x,
                easeOutExpo: M + "0.190, 1.000, 0.220, 1.000" + x,
                easeOutCirc: M + "0.075, 0.820, 0.165, 1.000" + x,
                easeOutBack: M + "0.175, 0.885, 0.320, 1.275" + x,
                easeInOutQuad: M + "0.455, 0.030, 0.515, 0.955" + x,
                easeInOutCubic: M + "0.645, 0.045, 0.355, 1.000" + x,
                easeInOutQuart: M + "0.770, 0.000, 0.175, 1.000" + x,
                easeInOutQuint: M + "0.860, 0.000, 0.070, 1.000" + x,
                easeInOutSine: M + "0.445, 0.050, 0.550, 0.950" + x,
                easeInOutExpo: M + "1.000, 0.000, 0.000, 1.000" + x,
                easeInOutCirc: M + "0.785, 0.135, 0.150, 0.860" + x,
                easeInOutBack: M + "0.680, -0.550, 0.265, 1.550" + x
            }, f = {}, w = l[o.easing || "swing"] ? l[o.easing || "swing"]: o.easing || "swing";
            for (var k in n)
                if ( - 1 === e.inArray(k, m)) {
                    var C = e.inArray(k, p)>-1, R = r(i, n[k], k, C && n.avoidTransforms!==!0);
                    n.avoidTransforms!==!0 && d(k, R, i) ? s(i, k, o.duration, w, C && n.avoidTransforms===!0 ? R + _ : R, C && n.avoidTransforms!==!0, c, n.useTranslate3d) : f[k] = n[k]
                }
            i.unbind(D);
            var S = i.data(b);
            if (!S || u(S) || u(S.secondary))
                o.queue=!1;
            else {
                v++, i.css(S.properties);
                var T = S.secondary;
                setTimeout(function() {
                    i.bind(D, a).css(T)
                })
            }
            return u(f) || (v++, t.apply(i, [f, {
                duration: o.duration,
                easing: e.easing[o.easing] ? o.easing: e.easing.swing ? "swing": "linear",
                complete: y,
                queue: o.queue
            }
            ])), !0
        })
    }, e.fn.animate.defaults = {}, e.fn.stop = function(t, i, r) {
        return T ? (t && this.queue([]), this.each(function() {
            var o = e(this), s = o.data(b);
            if (s&&!u(s)) {
                var a, l = {};
                if (i) {
                    if (l = s.secondary, !r && void 0 !== typeof s.meta.left_o || void 0 !== typeof s.meta.top_o)
                        for (l.left = void 0 !== typeof s.meta.left_o ? s.meta.left_o : "auto", l.top = void 0 !== typeof s.meta.top_o ? s.meta.top_o : "auto", a = g.length - 1; a >= 0; a--)
                            l[g[a] + "transform"] = ""
                } else if (!u(s.secondary)) {
                    var c = window.getComputedStyle(o[0], null);
                    if (c)
                        for (var h in s.secondary)
                            if (s.secondary.hasOwnProperty(h) && (h = h.replace(y, "-$1").toLowerCase(), l[h] = c.getPropertyValue(h), !r && /matrix/i.test(l[h]))) {
                                var d = l[h].replace(/^matrix\(/i, "").split(/, |\)$/g);
                                for (l.left = parseFloat(d[4]) + parseFloat(o.css("left")) + _ || "auto", l.top = parseFloat(d[5]) + parseFloat(o.css("top")) + _ || "auto", a = g.length - 1; a >= 0; a--)
                                    l[g[a] + "transform"] = ""
                            }
                }
                o.unbind(D), o.css(s.original).css(l).data(b, null)
            } else
                n.apply(o, [t, i])
        }), this) : n.apply(this, [t, i])
    }, RegExp(" AppleWebKit/").test(navigator.userAgent) && RegExp(" Mobile/").test(navigator.userAgent) || e.toggleDisabledByDefault()
}(jQuery, jQuery.fn.animate, jQuery.fn.stop), _wAMD.define("legacy/jquery.animate", function() {}), function(e) {
    e.fn.up = function(e) {
        return this.eq(0).parent().closest(e || "*")
    }, e.fn.down = function(e) {
        return e ? this.eq(0).find(e || "*").eq(0) : this.eq(0).children(":first")
    };
    var t = 1;
    e.fn.identify = function() {
        var n = this.attr("id");
        if (!n && this.length) {
            do
                n = "anonymous_element_" + t++;
            while (e("#" + n).length);
            this.attr("id", n)
        }
        return n
    }, e.fn.placeholder = function() {
        if (!("placeholder"in document.createElement("input"))) {
            var t, n;
            this.each(function(i, r) {
                n = r.getAttribute("placeholder"), n && "input" === r.nodeName.toLowerCase() && (t = e(r).on({
                    focus: function() {
                        r.value === n && (e(r).removeClass("wsite-placeholder"), r.value = "")
                    },
                    blur: function() {
                        r.value.length || (r.value = n, r.className += " wsite-placeholder")
                    }
                }), r.className += " wsite-placeholder", r.value = n)
            })
        }
    }, e.extend({
        isValidSelector: function(t) {
            try {
                e(t)
            } catch (n) {
                return !1
            }
            return !0
        }
    }), document.observe || (document.observe = function(t, n) {
        "dom:loaded" == t && e(document).ready(n)
    })
}(Weebly.jQuery), Weebly.evalJSON = function(json) {
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    cx.test(json) && (json = json.replace(cx, function(e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
    }));
    try {
        return eval("(" + json + ")")
    } catch (e) {}
    throw new SyntaxError("Badly formed JSON string: " + json)
}, _wAMD.define("legacy/jquery_utils", function() {}), _wAMD.define("jquery-ui/effect", ["jquery"], function(e) {
    !function(t, n) {
        var i = "ui-effects-";
        t.effects = {
            effect: {}
        }, function(e, t) {
            function n(e, t, n) {
                var i = h[t.type] || {};
                return null == e ? n ||!t.def ? null : t.def : (e = i.floor?~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod)%i.mod : 0 > e ? 0 : i.max < e ? i.max : e)
            }
            function i(t) {
                var n = u(), i = n._rgba = [];
                return t = t.toLowerCase(), p(l, function(e, r) {
                    var o, s = r.re.exec(t), a = s && r.parse(s), l = r.space || "rgba";
                    return a ? (o = n[l](a), n[c[l].cache] = o[c[l].cache], i = n._rgba = o._rgba, !1) : void 0
                }), i.length ? ("0,0,0,0" === i.join() && e.extend(i, o.transparent), n) : o[t]
            }
            function r(e, t, n) {
                return n = (n + 1)%1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e
            }
            var o, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }
            ], u = e.Color = function(t, n, i, r) {
                return new e.Color.fn.parse(t, n, i, r)
            }, c = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, h = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, d = u.support = {}, f = e("<p>")[0], p = e.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = f.style.backgroundColor.indexOf("rgba")>-1, p(c, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), u.fn = e.extend(u.prototype, {
                parse: function(r, s, a, l) {
                    if (r === t)
                        return this._rgba = [null, null, null, null], this;
                    (r.jquery || r.nodeType) && (r = e(r).css(s), s = t);
                    var h = this, d = e.type(r), f = this._rgba = [];
                    return s !== t && (r = [r, s, a, l], d = "array"), "string" === d ? this.parse(i(r) || o._default) : "array" === d ? (p(c.rgba.props, function(e, t) {
                        f[t.idx] = n(r[t.idx], t)
                    }), this) : "object" === d ? (r instanceof u ? p(c, function(e, t) {
                        r[t.cache] && (h[t.cache] = r[t.cache].slice())
                    }) : p(c, function(t, i) {
                        var o = i.cache;
                        p(i.props, function(e, t) {
                            if (!h[o] && i.to) {
                                if ("alpha" === e || null == r[e])
                                    return;
                                h[o] = i.to(h._rgba)
                            }
                            h[o][t.idx] = n(r[e], t, !0)
                        }), h[o] && e.inArray(null, h[o].slice(0, 3)) < 0 && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])))
                    }), this) : void 0
                },
                is: function(e) {
                    var t = u(e), n=!0, i = this;
                    return p(c, function(e, r) {
                        var o, s = t[r.cache];
                        return s && (o = i[r.cache] || r.to && r.to(i._rgba) || [], p(r.props, function(e, t) {
                            return null != s[t.idx] ? n = s[t.idx] === o[t.idx] : void 0
                        })), n
                    }), n
                },
                _space: function() {
                    var e = [], t = this;
                    return p(c, function(n, i) {
                        t[i.cache] && e.push(n)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var i = u(e), r = i._space(), o = c[r], s = 0 === this.alpha() ? u("transparent"): this, a = s[o.cache] || o.to(s._rgba), l = a.slice();
                    return i = i[o.cache], p(o.props, function(e, r) {
                        var o = r.idx, s = a[o], u = i[o], c = h[r.type] || {};
                        null !== u && (null === s ? l[o] = u : (c.mod && (u - s > c.mod / 2 ? s += c.mod : s - u > c.mod / 2 && (s -= c.mod)), l[o] = n((u - s) * t + s, r)))
                    }), this[r](l)
                },
                blend: function(t) {
                    if (1 === this._rgba[3])
                        return this;
                    var n = this._rgba.slice(), i = n.pop(), r = u(t)._rgba;
                    return u(e.map(n, function(e, t) {
                        return (1 - i) * r[t] + i * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(", n = e.map(this._rgba, function(e, t) {
                        return null == e ? t > 2 ? 1 : 0 : e
                    });
                    return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(", n = e.map(this.hsla(), function(e, t) {
                        return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                    });
                    return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                },
                toHexString: function(t) {
                    var n = this._rgba.slice(), i = n.pop();
                    return t && n.push(~~(255 * i)), "#" + e.map(n, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), u.fn.parse.prototype = u.fn, c.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2])
                    return [null, null, null, e[3]];
                var t, n, i = e[0] / 255, r = e[1] / 255, o = e[2] / 255, s = e[3], a = Math.max(i, r, o), l = Math.min(i, r, o), u = a - l, c = a + l, h = .5 * c;
                return t = l === a ? 0 : i === a ? 60 * (r - o) / u + 360 : r === a ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === u ? 0 : .5 >= h ? u / c : u / (2 - c), [Math.round(t)%360, n, h, null == s ? 1: s]
            }, c.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2])
                    return [null, null, null, e[3]];
                var t = e[0] / 360, n = e[1], i = e[2], o = e[3], s = .5 >= i ? i * (1 + n): i + n - i * n, a = 2 * i - s;
                return [Math.round(255 * r(a, s, t + 1 / 3)), Math.round(255 * r(a, s, t)), Math.round(255 * r(a, s, t - 1 / 3)), o]
            }, p(c, function(i, r) {
                var o = r.props, s = r.cache, l = r.to, c = r.from;
                u.fn[i] = function(i) {
                    if (l&&!this[s] && (this[s] = l(this._rgba)), i === t)
                        return this[s].slice();
                    var r, a = e.type(i), h = "array" === a || "object" === a ? i: arguments, d = this[s].slice();
                    return p(o, function(e, t) {
                        var i = h["object" === a ? e: t.idx];
                        null == i && (i = d[t.idx]), d[t.idx] = n(i, t)
                    }), c ? (r = u(c(d)), r[s] = d, r) : u(d)
                }, p(o, function(t, n) {
                    u.fn[t] || (u.fn[t] = function(r) {
                        var o, s = e.type(r), l = "alpha" === t ? this._hsla ? "hsla": "rgba": i, u = this[l](), c = u[n.idx];
                        return "undefined" === s ? c : ("function" === s && (r = r.call(this, c), s = e.type(r)), null == r && n.empty ? this : ("string" === s && (o = a.exec(r), o && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : - 1))), u[n.idx] = r, this[l](u)))
                    })
                })
            }), u.hook = function(t) {
                var n = t.split(" ");
                p(n, function(t, n) {
                    e.cssHooks[n] = {
                        set: function(t, r) {
                            var o, s, a = "";
                            if ("transparent" !== r && ("string" !== e.type(r) || (o = i(r)))) {
                                if (r = u(o || r), !d.rgba && 1 !== r._rgba[3]) {
                                    for (s = "backgroundColor" === n ? t.parentNode : t; ("" === a || "transparent" === a) && s && s.style;)
                                        try {
                                            a = e.css(s, "backgroundColor"), s = s.parentNode
                                    } catch (l) {}
                                    r = r.blend(a && "transparent" !== a ? a : "_default")
                                }
                                r = r.toRgbaString()
                            }
                            try {
                                t.style[n] = r
                            } catch (l) {}
                        }
                    }, e.fx.step[n] = function(t) {
                        t.colorInit || (t.start = u(t.elem, n), t.end = u(t.end), t.colorInit=!0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, u.hook(s), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return p(["Top", "Right", "Bottom", "Left"], function(n, i) {
                        t["border" + i + "Color"] = e
                    }), t
                }
            }, o = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(e), function() {
            function i(e) {
                var n, i, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null): e.currentStyle, o = {};
                if (r && r.length && r[0] && r[r[0]])
                    for (i = r.length; i--;)
                        n = r[i], "string" == typeof r[n] && (o[t.camelCase(n)] = r[n]);
                else
                    for (n in r)
                        "string" == typeof r[n] && (o[n] = r[n]);
                return o
            }
            function r(e, n) {
                var i, r, o = {};
                for (i in n)
                    r = n[i], e[i] !== r && (s[i] || (t.fx.step[i] ||!isNaN(parseFloat(r))) && (o[i] = r));
                return o
            }
            var o = ["add", "remove", "toggle"], s = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(n, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end&&!t.setAttr || 1 === t.pos&&!t.setAttr) && (e.style(t.elem, i, t.end), t.setAttr=!0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), t.effects.animateClass = function(e, n, s, a) {
                var l = t.speed(n, s, a);
                return this.queue(function() {
                    var n, s = t(this), a = s.attr("class") || "", u = l.children ? s.find("*").addBack(): s;
                    u = u.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), n = function() {
                        t.each(o, function(t, n) {
                            e[n] && s[n + "Class"](e[n])
                        })
                    }, n(), u = u.map(function() {
                        return this.end = i(this.el[0]), this.diff = r(this.start, this.end), this
                    }), s.attr("class", a), u = u.map(function() {
                        var e = this, n = t.Deferred(), i = t.extend({}, l, {
                            queue: !1,
                            complete: function() {
                                n.resolve(e)
                            }
                        });
                        return this.el.animate(this.diff, i), n.promise()
                    }), t.when.apply(t, u.get()).done(function() {
                        n(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(s[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(n, i, r, o) {
                        return i ? t.effects.animateClass.call(this, {
                            add: n
                        }, i, r, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(n, i, r, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: n
                        }, i, r, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(e) {
                    return function(i, r, o, s, a) {
                        return "boolean" == typeof r || r === n ? o ? t.effects.animateClass.call(this, r ? {
                            add: i
                        } : {
                            remove: i
                        }, o, s, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, r, o, s)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, n, i, r, o) {
                    return t.effects.animateClass.call(this, {
                        add: n,
                        remove: e
                    }, i, r, o)
                }
            })
        }(), function() {
            function e(e, n, i, r) {
                return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                    effect: e
                }, null == n && (n = {}), t.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (r = i, i = n, n = {}), t.isFunction(i) && (r = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = r || n.complete, e
            }
            function r(e) {
                return !e || "number" == typeof e || t.fx.speeds[e]?!0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e)?!0 : "object" != typeof e || e.effect?!1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.10.2",
                save: function(e, t) {
                    for (var n = 0; n < t.length; n++)
                        null !== t[n] && e.data(i + t[n], e[0].style[t[n]])
                },
                restore: function(e, t) {
                    var r, o;
                    for (o = 0; o < t.length; o++)
                        null !== t[o] && (r = e.data(i + t[o]), r === n && (r = ""), e.css(t[o], r))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var n, i;
                    switch (e[0]) {
                    case"top":
                        n = 0;
                        break;
                    case"middle":
                        n = .5;
                        break;
                    case"bottom":
                        n = 1;
                        break;
                    default:
                        n = e[0] / t.height
                    }
                    switch (e[1]) {
                    case"left":
                        i = 0;
                        break;
                    case"center":
                        i = .5;
                        break;
                    case"right":
                        i = 1;
                        break;
                    default:
                        i = e[1] / t.width
                    }
                    return {
                        x: i,
                        y: n
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper"))
                        return e.parent();
                    var n = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        "float": e.css("float")
                    }, i = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), r = {
                        width: e.width(),
                        height: e.height()
                    }, o = document.activeElement;
                    try {
                        o.id
                    } catch (s) {
                        o = document.body
                    }
                    return e.wrap(i), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(n, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, i) {
                        n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(r), i.css(n).show()
                },
                removeWrapper: function(e) {
                    var n = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
                },
                setTransition: function(e, n, i, r) {
                    return r = r || {}, t.each(n, function(t, n) {
                        var o = e.cssUnit(n);
                        o[0] > 0 && (r[n] = o[0] * i + o[1])
                    }), r
                }
            }), t.fn.extend({
                effect: function() {
                    function n(e) {
                        function n() {
                            t.isFunction(o) && o.call(r[0]), t.isFunction(e) && e()
                        }
                        var r = t(this), o = i.complete, a = i.mode;
                        (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), n()) : s.call(r[0], i, n)
                    }
                    var i = e.apply(this, arguments), r = i.mode, o = i.queue, s = t.effects.effect[i.effect];
                    return t.fx.off ||!s ? r ? this[r](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : o===!1 ? this.each(n) : this.queue(o || "fx", n)
                },
                show: function(t) {
                    return function(n) {
                        if (r(n))
                            return t.apply(this, arguments);
                        var i = e.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(n) {
                        if (r(n))
                            return t.apply(this, arguments);
                        var i = e.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(n) {
                        if (r(n) || "boolean" == typeof n)
                            return t.apply(this, arguments);
                        var i = e.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var n = this.css(e), i = [];
                    return t.each(["em", "px", "%", "pt"], function(e, t) {
                        n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                    }), i
                }
            })
        }(), function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, n) {
                e[n] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : - Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), t.each(e, function(e, n) {
                t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function(e) {
                    return 1 - n(1 - e)
                }, t.easing["easeInOut" + e] = function(e) {
                    return .5 > e ? n(2 * e) / 2 : 1 - n( - 2 * e + 2) / 2
                }
            })
        }()
    }(e)
}), _wAMD.define("jquery-ui/effect-highlight", ["jquery", "./effect"], function(e) {
    !function(e) {
        e.effects.effect.highlight = function(t, n) {
            var i = e(this), r = ["backgroundImage", "backgroundColor", "opacity"], o = e.effects.setMode(i, t.mode || "show"), s = {
                backgroundColor: i.css("backgroundColor")
            };
            "hide" === o && (s.opacity = 0), e.effects.save(i, r), i.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === o && i.hide(), e.effects.restore(i, r), n()
                }
            })
        }
    }(e)
}), _wAMD.define("jquery-ui/effect-fade", ["jquery", "./effect"], function(e) {
    !function(e) {
        e.effects.effect.fade = function(t, n) {
            var i = e(this), r = e.effects.setMode(i, t.mode || "toggle");
            i.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: n
            })
        }
    }(e)
}), _wAMD.define("util/effect-slide-custom", ["jquery", "jquery-ui/effect"], function(e) {
    !function(e) {
        e.effects.effect.slide = function(t, n) {
            var i, r = e(this), o = ["position", "top", "bottom", "left", "right", "width", "height"], s = e.effects.setMode(r, t.mode || "show"), a = "show" === s, l = t.direction || "left", u = "up" === l || "down" === l ? "top": "left", c = "up" === l || "left" === l, h = {};
            e.effects.save(r, o), r.show();
            var d = t.wrapper;
            d ? (d = e(d).show(), /relative|absolute/.test(r.css("position")) || r.css("position", "relative")) : d = e.effects.createWrapper(r), d.css("overflow", "hidden");
            var i = t.distance || ("top" == u ? r.height() ? r.outerHeight(!0) : d.height() : r.width() ? r.outerWidth(!0) : d.width());
            a && r.css(u, c ? isNaN(i) ? "-" + i : - i : i), h[u] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + i, r.animate(h, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === s && r.hide(), e.effects.restore(r, o), t.wrapper ? (d.css("overflow", ""), "hide" == s && d.hide()) : e.effects.removeWrapper(r), n()
                }
            })
        }
    }(e)
}), function(e, t) {
    if ("function" == typeof _wAMD.define && _wAMD.define.amd)
        _wAMD.define("backbone", ["underscore", "jquery", "exports"], function(n, i, r) {
            e.Backbone = t(e, r, n, i)
        });
    else if ("undefined" != typeof exports) {
        var n = require("underscore");
        t(e, exports, n)
    } else
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function(e, t, n, i) {
    var r = e.Backbone, o = [];
    o.push;
    var s = o.slice;
    o.splice, t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() {
        return e.Backbone = r, this
    }, t.emulateHTTP=!1, t.emulateJSON=!1;
    var a = t.Events = {
        on: function(e, t, n) {
            if (!u(this, "on", e, [t, n]) ||!t)
                return this;
            this._events || (this._events = {});
            var i = this._events[e] || (this._events[e] = []);
            return i.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function(e, t, i) {
            if (!u(this, "once", e, [t, i]) ||!t)
                return this;
            var r = this, o = n.once(function() {
                r.off(e, o), t.apply(this, arguments)
            });
            return o._callback = t, this.on(e, o, i)
        },
        off: function(e, t, i) {
            var r, o, s, a, l, c, h, d;
            if (!this._events ||!u(this, "off", e, [t, i]))
                return this;
            if (!e&&!t&&!i)
                return this._events = void 0, this;
            for (a = e ? [e] : n.keys(this._events), l = 0, c = a.length; c > l; l++)
                if (e = a[l], s = this._events[e]) {
                    if (this._events[e] = r = [], t || i)
                        for (h = 0, d = s.length; d > h; h++)
                            o = s[h], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && r.push(o);
                            r.length || delete this._events[e]
                }
            return this
        },
        trigger: function(e) {
            if (!this._events)
                return this;
            var t = s.call(arguments, 1);
            if (!u(this, "trigger", e, t))
                return this;
            var n = this._events[e], i = this._events.all;
            return n && c(n, t), i && c(i, arguments), this
        },
        stopListening: function(e, t, i) {
            var r = this._listeningTo;
            if (!r)
                return this;
            var o=!t&&!i;
            i || "object" != typeof t || (i = this), e && ((r = {})[e._listenId] = e);
            for (var s in r)
                e = r[s], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[s];
            return this
        }
    }, l = /\s+/, u = function(e, t, n, i) {
        if (!n)
            return !0;
        if ("object" == typeof n) {
            for (var r in n)
                e[t].apply(e, [r, n[r]].concat(i));
            return !1
        }
        if (l.test(n)) {
            for (var o = n.split(l), s = 0, a = o.length; a > s; s++)
                e[t].apply(e, [o[s]].concat(i));
            return !1
        }
        return !0
    }, c = function(e, t) {
        var n, i =- 1, r = e.length, o = t[0], s = t[1], a = t[2];
        switch (t.length) {
        case 0:
            for (; ++i < r;)(n = e[i])
                .callback.call(n.ctx);
            return;
        case 1:
            for (; ++i < r;)(n = e[i])
                .callback.call(n.ctx, o);
            return;
        case 2:
            for (; ++i < r;)(n = e[i])
                .callback.call(n.ctx, o, s);
            return;
        case 3:
            for (; ++i < r;)(n = e[i])
                .callback.call(n.ctx, o, s, a);
            return;
        default:
            for (; ++i < r;)(n = e[i])
                .callback.apply(n.ctx, t);
            return
        }
    }, h = {
        listenTo: "on",
        listenToOnce: "once"
    };
    n.each(h, function(e, t) {
        a[t] = function(t, i, r) {
            var o = this._listeningTo || (this._listeningTo = {}), s = t._listenId || (t._listenId = n.uniqueId("l"));
            return o[s] = t, r || "object" != typeof i || (r = this), t[e](i, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, n.extend(t, a);
    var d = t.Model = function(e, t) {
        var i = e || {};
        t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(d.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return n.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return n.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        set: function(e, t, i) {
            var r, o, s, a, l, u, c, h;
            if (null == e)
                return this;
            if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i))
                return !1;
            s = i.unset, l = i.silent, a = [], u = this._changing, this._changing=!0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), h = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
            for (r in o)
                t = o[r], n.isEqual(h[r], t) || a.push(r), n.isEqual(c[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete h[r] : h[r] = t;
            if (!l) {
                a.length && (this._pending = i);
                for (var d = 0, f = a.length; f > d; d++)
                    this.trigger("change:" + a[d], this, h[a[d]], i)
            }
            if (u)
                return this;
            if (!l)
                for (; this._pending;)
                    i = this._pending, this._pending=!1, this.trigger("change", this, i);
            return this._pending=!1, this._changing=!1, this
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset : !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes)
                t[i] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e?!n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return this.hasChanged() ? n.clone(this.changed) : !1;
            var t, i=!1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var o in e)
                n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
            return i
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse=!0);
            var t = this, i = e.success;
            return e.success = function(n) {
                return t.set(t.parse(n, e), e) ? (i && i(t, n, e), t.trigger("sync", t, n, e), void 0) : !1
            }, W(this, e), this.sync("read", this, e)
        },
        save: function(e, t, i) {
            var r, o, s, a = this.attributes;
            if (null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                validate: !0
            }, i), r&&!i.wait) {
                if (!this.set(r, i))
                    return !1
            } else if (!this._validate(r, i))
                return !1;
            r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse=!0);
            var l = this, u = i.success;
            return i.success = function(e) {
                l.attributes = a;
                var t = l.parse(e, i);
                return i.wait && (t = n.extend(r || {}, t)), n.isObject(t)&&!l.set(t, i)?!1 : (u && u(l, e, i), l.trigger("sync", l, e, i), void 0)
            }, W(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), s = this.sync(o, this, i), r && i.wait && (this.attributes = a), s
        },
        destroy: function(e) {
            e = e ? n.clone(e) : {};
            var t = this, i = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e)
            };
            if (e.success = function(n) {
                (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
            }, this.isNew())
                return e.success(), !1;
            W(this, e);
            var o = this.sync("delete", this, e);
            return e.wait || r(), o
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || j();
            return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, n.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate ||!this.validate)
                return !0;
            e = n.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            return i ? (this.trigger("invalid", this, i, n.extend(t, {
                validationError: i
            })), !1) : !0
        }
    });
    var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(f, function(e) {
        d.prototype[e] = function() {
            var t = s.call(arguments);
            return t.unshift(this.attributes), n[e].apply(n, t)
        }
    });
    var p = t.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
            silent: !0
        }, t))
    }, g = {
        add: !0,
        remove: !0,
        merge: !0
    }, m = {
        add: !0,
        remove: !1
    };
    n.extend(p.prototype, a, {
        model: d,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, m))
        },
        remove: function(e, t) {
            var i=!n.isArray(e);
            e = i ? [e] : n.clone(e), t || (t = {});
            var r, o, s, a;
            for (r = 0, o = e.length; o > r; r++)
                a = e[r] = this.get(e[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a, t));
            return i ? e[0] : e
        },
        set: function(e, t) {
            t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
            var i=!n.isArray(e);
            e = i ? e ? [e] : [] : n.clone(e);
            var r, o, s, a, l, u, c, h = t.at, f = this.model, p = this.comparator && null == h && t.sort!==!1, m = n.isString(this.comparator) ? this.comparator: null, v = [], y = [], w = {}, _ = t.add, b = t.merge, M = t.remove, x=!p && _ && M ? [] : !1;
            for (r = 0, o = e.length; o > r; r++) {
                if (l = e[r] || {}, s = l instanceof d ? a = l : l[f.prototype.idAttribute || "id"], u = this.get(s))
                    M && (w[u.cid]=!0), b && (l = l === a ? a.attributes : l, t.parse && (l = u.parse(l, t)), u.set(l, t), p&&!c && u.hasChanged(m) && (c=!0)), e[r] = u;
                else if (_) {
                    if (a = e[r] = this._prepareModel(l, t), !a)
                        continue;
                    v.push(a), this._addReference(a, t)
                }
                a = u || a, !x ||!a.isNew() && w[a.id] || x.push(a), w[a.id]=!0
            }
            if (M) {
                for (r = 0, o = this.length; o > r; ++r)
                    w[(a = this.models[r]).cid] || y.push(a);
                y.length && this.remove(y, t)
            }
            if (v.length || x && x.length)
                if (p && (c=!0), this.length += v.length, null != h)
                    for (r = 0, o = v.length; o > r; r++)
                        this.models.splice(h + r, 0, v[r]);
                else {
                    x && (this.models.length = 0);
                    var k = x || v;
                    for (r = 0, o = k.length; o > r; r++)
                        this.models.push(k[r])
                }
            if (c && this.sort({
                silent: !0
            }), !t.silent) {
                for (r = 0, o = v.length; o > r; r++)(a = v[r])
                    .trigger("add", a, this, t);
                (c || x && x.length) && this.trigger("sort", this, t)
            }
            return i ? e[0] : e
        },
        reset: function(e, t) {
            t || (t = {});
            for (var i = 0, r = this.models.length; r > i; i++)
                this._removeReference(this.models[i], t);
            return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), e
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(e) {
            return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
        },
        at: function(e) {
            return this.models[e]
        },
        where: function(e, t) {
            return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find": "filter"](function(t) {
                for (var n in e)
                    if (e[n] !== t.get(n))
                        return !1;
                return !0
            })
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function(e) {
            return n.invoke(this.models, "get", e)
        },
        fetch: function(e) {
            e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse=!0);
            var t = e.success, i = this;
            return e.success = function(n) {
                var r = e.reset ? "reset": "set";
                i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
            }, W(this, e), this.sync("read", this, e)
        },
        create: function(e, t) {
            if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t)))
                return !1;
            t.wait || this.add(e, t);
            var i = this, r = t.success;
            return t.success = function(e, n) {
                t.wait && i.add(e, t), r && r(e, n, t)
            }, e.save(null, t), e
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (e instanceof d)
                return e;
            t = t ? n.clone(t) : {}, t.collection = this;
            var i = new this.model(e, t);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
        },
        _addReference: function(e) {
            this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, i) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
        }
    });
    var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(v, function(e) {
        p.prototype[e] = function() {
            var t = s.call(arguments);
            return t.unshift(this.models), n[e].apply(n, t)
        }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(y, function(e) {
        p.prototype[e] = function(t, i) {
            var r = n.isFunction(t) ? t: function(e) {
                return e.get(t)
            };
            return n[e](this.models, r, i)
        }
    });
    var w = t.View = function(e) {
        this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, b)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, _ = /^(\S+)\s*(.*)$/, b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(w.prototype, a, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function(e, n) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n!==!1 && this.delegateEvents(), this
        },
        delegateEvents: function(e) {
            if (!e&&!(e = n.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var t in e) {
                var i = e[t];
                if (n.isFunction(i) || (i = this[e[t]]), i) {
                    var r = t.match(_), o = r[1], s = r[2];
                    i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(n.result(this, "el"), !1);
            else {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                this.setElement(i, !1)
            }
        }
    }), t.sync = function(e, i, r) {
        var o = x[e];
        n.defaults(r || (r = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || j()), null != r.data ||!i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
            model: s.data
        } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(e) {
                return e.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
            }
        }
        "GET" === s.type || r.emulateJSON || (s.processData=!1), "PATCH" === s.type && M && (s.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var l = r.xhr = t.ajax(n.extend(s, r));
        return i.trigger("request", i, l, r), l
    };
    var M=!("undefined" == typeof window ||!window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), x = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    };
    var k = t.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g, R = /(\(\?)?:\w+/g, S = /\*\w+/g, D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(k.prototype, a, {
        initialize: function() {},
        route: function(e, i, r) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return t.history.route(e, function(n) {
                var s = o._extractParameters(e, n);
                o.execute(r, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s)
            }), this
        },
        execute: function(e, t) {
            e && e.apply(this, t)
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var e, t = n.keys(this.routes); null != (e = t.pop());)
                    this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(D, "\\$&").replace(C, "(?:$1)?").replace(R, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(S, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return n.map(i, function(e, t) {
                return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var T = t.History = function() {
        this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, A = /^[#\/]|\s+$/g, F = /^\/+|\/+$/g, E = /msie [\w.]+/, O = /\/$/, P = /#.*$/;
    T.started=!1, n.extend(T.prototype, a, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(e, t) {
            if (null == e)
                if (this._hasPushState ||!this._wantsHashChange || t) {
                    e = decodeURI(this.location.pathname + this.location.search);
                    var n = this.root.replace(O, "");
                    e.indexOf(n) || (e = e.slice(n.length))
                } else
                    e = this.getHash();
            return e.replace(A, "")
        },
        start: function(e) {
            if (T.started)
                throw new Error("Backbone.history has already been started");
            T.started=!0, this.options = n.extend({
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange!==!1, this._wantsPushState=!!this.options.pushState, this._hasPushState=!!(this.options.pushState && this.history && this.history.pushState);
            var i = this.getFragment(), r = document.documentMode, o = E.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
            if (this.root = ("/" + this.root + "/").replace(F, "/"), o && this._wantsHashChange) {
                var s = t.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(i)
            }
            this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window&&!o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
            var a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState&&!this.atRoot())
                    return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), T.started=!1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function() {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment?!1 : (this.iframe && this.navigate(e), this.loadUrl(), void 0)
        },
        loadUrl: function(e) {
            return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                return t.route.test(e) ? (t.callback(e), !0) : void 0
            })
        },
        navigate: function(e, t) {
            if (!T.started)
                return !1;
            t && t!==!0 || (t = {
                trigger: !!t
            });
            var n = this.root + (e = this.getFragment(e || ""));
            if (e = e.replace(P, ""), this.fragment !== e) {
                if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, - 1)), this._hasPushState)
                    this.history[t.replace ? "replaceState": "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t)
            } else
                e.hash = "#" + t
        }
    }), t.history = new T;
    var I = function(e, t) {
        var i, r = this;
        i = e && n.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments)
        }, n.extend(i, r, t);
        var o = function() {
            this.constructor = i
        };
        return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
    };
    d.extend = p.extend = k.extend = w.extend = T.extend = I;
    var j = function() {
        throw new Error('A "url" property or function must be specified')
    }, W = function(e, t) {
        var n = t.error;
        t.error = function(i) {
            n && n(e, i, t), e.trigger("error", e, i, t)
        }
    };
    return t
}), _wAMD.define("util/platform/elements/PlatformElement", ["backbone"], function(e) {
    var t = e.View.prototype, n = e.View.extend({
        initialize: function() {
            t.initialize.apply(this, arguments)
        },
        render: function() {
            window.inEditor && window.inEditor() && require("editor-site-shared/relay").request("page:navigate")
        },
        remove: function() {
            t.remove.apply(this, arguments)
        },
        setElement: function() {
            t.setElement.apply(this, arguments)
        },
        delegateEvents: function() {
            t.delegateEvents.apply(this, arguments)
        },
        undelegateEvents: function() {
            t.undelegateEvents.apply(this, arguments)
        }
    });
    return n
}), _wAMD.define("util/platform/elements/PlatformElementSettings", ["jquery", "backbone"], function(e, t) {
    var n = t.Model.extend({
        save: function(t, n, i) {
            var r = this, o = this.attributes;
            if (null == t || "object" == typeof t ? (o = t, i = n) : (o = {})[t] = n, o&&!this.set(o, i))
                return !1;
            if (window.inEditor && window.inEditor())
                return _W.Editor.RPC.PlatformElementInstance.updateSettings(r.page_element_id, r.toJSON());
            var s = new e.Deferred;
            return s.resolve({
                success: !1,
                message: "You cannot update settings outside of the editor."
            }), s.promise()
        }
    });
    return n
}), function(e) {
    function t() {
        "placeholder"in document.createElement("input") || e(this).find("input[placeholder]").placeholder()
    }
    var n = function() {
        var t = function() {
            var t = e(".wsite-view-link-full"), n = e(".wsite-view-link-mobile"), i = window.location.href || "";
            i += i.indexOf("?")>-1 ? "&" : "?", t.attr("href", i + "view=full"), n.attr("href", i + "view=mobile")
        };
        t();
        var n = window.History;
        n && n.enabled && History.Adapter.bind(window, "statechange", t)
    };
    e(document).ready(n), e(document).ready(t)
}(Weebly.jQuery), function() {
    var e = window.STYLE_PREFIX || "weebly", t = function() {
        for (var t = 0; t < document.styleSheets.length; t++)
            try {
                if (document.styleSheets[t].title == e + "-theme-css") {
                    var n = document.styleSheets[t], i = n.cssRules || n.rules;
                    return i && i.length > 0
                }
        } catch (r) {}
        return !1
    }, n = function(e) {
        if (t())
            e();
        else
            var n = setInterval(function() {
                t() && (clearInterval(n), e())
            }, 200)
    };
    window.whenThemeCSSLoaded || (window.whenThemeCSSLoaded = n), window.isThemeCSSLoaded || (window.isThemeCSSLoaded = t)
}(), _wAMD.define("site/published/general", function() {}), function(e) {
    window.blogCommentDisplayForm = function(t, n) {
        var i = e("#" + n), r = i.data("isReplyFormOpen") ||!1, o = i.prev(".reply-comment").find("span").first(), s = _W.tl("Cancel Reply");
        if (!i.data("locked")) {
            i.data("locked", !0);
            var a = i.data("replyText");
            a || (a = o.html(), i.data("replyText", a));
            var l = e("#" + n + " iframe");
            return l.length || (l = e('<iframe src="' + t + '" frameborder="0" allowtransparency="true" scrolling="no"></iframe>'), e("#" + n + " > div > div").first().append(l)), r ? (o.html(a), i.data("isReplyFormOpen", !1), i.down().hide("slide", {
                wrapper: i,
                direction: "up",
                duration: 1e3,
                complete: function() {
                    i.data("locked", !1)
                }
            })) : (o.html(s), i.data("isReplyFormOpen", !0), i.down().show("slide", {
                wrapper: i,
                direction: "up",
                duration: 1e3,
                complete: function() {
                    i.data("locked", !1)
                }
            })), !1
        }
    }
}(Weebly.jQuery), _wAMD.define("site/published/comments", function() {}), _wAMD.define("util/HoverJoiner", ["jquery", "underscore"], function(e, t) {
    var n = function(e) {
        this.elements = e, this.boundHoverJoinerMouseEnter = t.bind(this.hoverJoinerMouseEnter, this), this.boundHoverJoinerMouseLeave = t.bind(this.hoverJoinerMouseLeave, this), t.each(e, function(e) {
            e.hover(this.boundHoverJoinerMouseEnter, this.boundHoverJoinerMouseLeave)
        }, this)
    };
    return t.extend(n.prototype, Backbone.Events), n.prototype.mouseOver=!1, n.prototype.hoverJoinerMouseEnter = function() {
        this.mouseOver=!0, setTimeout(t.bind(function() {
            this.mouseOver && this.trigger("mouseenter")
        }, this), 100)
    }, n.prototype.hoverJoinerMouseLeave = function() {
        this.mouseOver=!1, setTimeout(t.bind(function() {
            this.mouseOver || this.trigger("mouseleave")
        }, this), 100)
    }, n.prototype.mouseenter = function(e) {
        return this.on("mouseenter", e)
    }, n.prototype.mouseleave = function(e) {
        return this.on("mouseleave", e)
    }, n.prototype.unbind = function() {
        t.each(this.elements, function(e) {
            e.unbind("mouseenter", this.boundHoverJoinerMouseEnter), e.unbind("mouseleave", this.boundHoverJoinerMouseLeave)
        }, this)
    }, n.prototype.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t)
    }, n
}), _wAMD.define("editor-site-shared/ui/FormFieldInstructions", ["jquery", "underscore", "util/HoverJoiner"], function(e, t, n) {
    var i = [], r=!1, o = void 0, s = function(e) {
        return t.findWhere(i, {
            container: e
        })
    }, a = {
        createFieldInstructions: function(t) {
            var n = e('<div class="instructions-container">').html(t);
            e("body").append(n);
            var i = e('<img src="http://www.weebly.com/images/error_arrow_left.gif">').css({
                position: "absolute",
                left: - 13,
                top: n.outerHeight() / 2 - 10
            });
            return n.append(i), n
        },
        setupFieldInstructions: function(s, l) {
            if (e(s).html()) {
                null == l && (l = "wsite");
                var u = e(s).parents("." + l + "-form-field"), c = u.find("." + l + "-form-input");
                c.length || (c = u.find("." + l + "-form-radio-container")), c.length || (c = u.find(".form-select")), c.length || (c = u.find("." + l + "-form-label")), u.find("." + l + "-form-left").length && (c = u.find("." + l + "-form-right")), c.length || (c = u.find(".form-select"));
                var h = a.createFieldInstructions(s.innerHTML);
                h.click(function() {
                    a.hideFieldInstructions(u)
                });
                var d = new n([u, h]);
                d.hover(function() {
                    a.showFieldInstructions(u)
                }, function() {
                    a.hideFieldInstructions(u)
                }), i.push({
                    instructions: h,
                    pointTo: c,
                    container: u,
                    hoverjoiner: d
                }), a.hideFieldInstructions(u), setTimeout(function() {
                    a.layoutFieldInstructions(u)
                }, 100), r || (o = t.debounce(a.layoutAllFieldInstructions, 100), e(window).resize(o), r=!0)
            }
        },
        showFieldInstructions: function(e) {
            s(e).instructions.css({
                visibility: "visible"
            })
        },
        hideFieldInstructions: function(e) {
            s(e).instructions.css({
                visibility: "hidden"
            })
        },
        hideAllFieldInstructions: function(e) {
            t.each(i, function(t) {
                var n = t.container;
                (e.length || e.get(0) != n) && a.hideFieldInstructions(n)
            })
        },
        layoutAllFieldInstructions: function() {
            t.each(i, function(e) {
                var t = e.container;
                a.layoutFieldInstructions(t)
            })
        },
        layoutFieldInstructions: function(e) {
            var t = s(e), n = t.instructions, i = t.pointTo, r = i.offset();
            n.offset({
                top: r.top + i.outerHeight() / 2 - n.outerHeight() / 2,
                left: r.left + i.outerWidth() + 20
            })
        },
        cleanupFieldInstructions: function() {
            t.each(i, function(e) {
                e.hoverjoiner.unbind(), e.instructions.remove()
            }), i = [], e(window).off("resize", o), r=!1
        }
    };
    return a
}), _wAMD.define("site/published/form", ["jquery", "editor-site-shared/ui/FormFieldInstructions"], function(e, t) {
    !function(n) {
        function i() {
            if (window.location.href.match(/posted=(.*)$/)) {
                var t = e.parseJSON(decodeURIComponent(window.location.href.match(/posted=(.*)$/)[1].replace(/\+/g, " ")));
                e("form").each(function(n, i) {
                    var r = e(i);
                    e.each(t, function(t, n) {
                        "object" == typeof n ? e.each(n, function(e, n) {
                            r.find("input").each(function(i, r) {
                                (r.name.replace(/_u\d*/, "") == t + "[" + e + "]" || r.name == t + "[" + e + "]") && ("checkbox" === r.type ? r.checked = 1 : r.value = n)
                            })
                        }) : r.find("input,textarea,select,button").each(function(e, o) {
                            if (o.name.replace(/_u\d*/, "") == t || o.name == t) {
                                var s = o.name;
                                i[s][0] && "radio" === i[s][0].type ? r.find("radio[name=" + s + "]").each(function(e, t) {
                                    t.value == n && (t.checked=!0)
                                }) : o.value = n
                            }
                        })
                    })
                })
            }
            if (window.location.href.match(/form-errors=(.*?)&/) && window.location.href.match(/ucfid%22%3A%22(.*?)%/)) {
                var n = window.location.href.match(/form\-errors=(.*?)&/)[1].split(","), i = window.location.href.match(/ucfid%22%3A%22(.*?)%/)[1], r = e("#form-" + i);
                e.each(n, function(t, n) {
                    n = decodeURIComponent(n), r.find("input,textarea,select,button").each(function(t, i) {
                        (i.name.replace(/_u\d*/, "") == n || i.name.replace(/.*_u/, "_u") == n || i.name.replace(/\[.*\]$/, "") == n) && e(i).addClass("form-input-error").up("." + l + "-form-field").addClass("form-field-error")
                    })
                }), e("#" + i + "-form-parent").after("<div>Please correct the highlighted fields</div>")
            }
            if (window.location.href.match(/success\=1/) && window.location.href.match(/ucfid\=(.*)/)) {
                var i = window.location.href.match(/ucfid\=(.*?)&/)[1], r = e("#form-" + i), o = "Your data was successfully submitted.", s = window.location.href.match(/text=(.*?)&/);
                s && (o = a(decodeURIComponent(s[1].replace(/\+/g, " ")))), r.html("<div>" + o + "</div>")
            }
        }
        function r() {
            function t(t) {
                var i = t.origin == location.protocol + location.port + "//" + location.hostname;
                if (!i) {
                    if (!_W.resellerSite ||!_W.configDomain)
                        return;
                    var r = t.origin == location.protocol + location.port + "//" + _W.configDomain;
                    if (!r)
                        return
                }
                var o = n.evalJSON(t.data);
                switch (o.action) {
                case"finished":
                    var s = o.data.ucfid, a = e("#form-" + s);
                    a.hide();
                    var u = e("#" + s + "-msg");
                    return u.length || (u = e('<div id="' + s + '-msg"/>').insertAfter(a)), u.html(o.data.message), u.effect("highlight", {}, 2e3), e("body").animate({
                        scrollTop: u.offset().top
                    }, {
                        easing: "easeOutQuart",
                        duration: 2e3
                    }), void 0;
                case"redirect":
                    return window.location = o.data.location, void 0;
                case"error":
                    var c = o.data["error-fields"], s = o.data.ucfid, a = e("#form-" + s);
                    a.find("input,textarea,select,button").filter(".form-input-error").each(function(t, n) {
                        e(n).removeClass("form-input-error").up("." + l + "-form-field").removeClass("form-field-error")
                    }), e.each(c, function(t, n) {
                        a.find("input,textarea,select,button").each(function(t, i) {
                            (i.name.replace(/_u\d*/, "") == n || i.name.replace(/.*_u/, "_u") == n || i.name.replace(/\[.*\]$/, "") == n) && e(i).addClass("form-input-error").up("." + l + "-form-field").addClass("form-field-error")
                        })
                    });
                    var u = e("#" + s + "-msg");
                    return u.length || (u = e('<div id="' + s + '-msg"/>').insertAfter(a)), u.html(o.data.message), void 0
                }
            }
            e("form").each(function(n, i) {
                var r = e(i), o = r.attr("action") || "";
                if (o.match(/formSubmit\.php$/)) {
                    1 != _W.resellerSite ? o = o.replace(/(.*)\/formSubmit\.php$/, window.location.protocol + "//" + window.location.host + "/ajax/apps/formSubmitAjax.php") : (o = o.replace("formSubmit.php", "formSubmitAjax.php"), "https:" == window.location.protocol && (o = o.replace("http:", "https:")), e("<input>").attr({
                        type: "hidden",
                        id: "formLocation",
                        name: "formLocation",
                        value: window.location.host
                    }).appendTo(r)), r.attr("action", o), r.attr("accept-charset", "UTF-8");
                    var s = r.attr("id") + "-target-" + Date.now(), a = e('<iframe name="' + s + '"/>').hide().attr("id", s).insertAfter(r), l = a[0];
                    r.attr("target", l.id), window.postMessage || a.on("load", function() {
                        try {
                            var e = (l.contentDocument || l.contentWindow.document).location.href, n = (l.contentDocument || l.contentWindow.document).body.firstChild.nodeValue;
                            "about:blank" != e && t({
                                data: n,
                                source: l.contentWindow
                            })
                        } catch (i) {}
                    })
                }
            }), window.postMessage && e(window).on("message", function(e) {
                try {
                    t(e.originalEvent)
                } catch (n) {}
            })
        }
        function o() {
            e("." + l + "-form-instructions").each(function(e, n) {
                t.setupFieldInstructions(n, l)
            })
        }
        function s() {
            e("input[name=" + l + "_approved]").val("approved"), e(document).off("mousedown", s).off("keydown", s)
        }
        function a(e) {
            var t = document.createElement("div"), n = document.createTextNode(e);
            return t.appendChild(n), t.innerHTML
        }
        var l = window.STYLE_PREFIX || "weebly";
        e(document).ready(i).ready(o).ready(r).on("mousedown", s).on("keydown", s).on("click", function(n) {
            var i = e(n.target), r = i.up("." + l + "-form-field");
            i.hasClass(l + "-form-field") && (r = i), t.hideAllFieldInstructions(r)
        })
    }(Weebly)
}), function(e) {
    function t() {
        e("#wsite-header-search-form").on("click", "span.wsite-search-button", function(t) {
            e(t.delegateTarget).submit()
        }).on("submit", function() {
            return - 1 === document.body.className.indexOf("wsite-page-weebly/apps/preview")
        }), e("form.wsite-search-element-form").on("click", "span.wsite-search-element-submit", function(t) {
            e(t.delegateTarget).submit()
        }).on("submit", function() {
            return - 1 === document.body.className.indexOf("wsite-page-weebly/apps/preview")
        })
    }
    e(document).ready(t)
}(Weebly.jQuery), _wAMD.define("site/published/search", function() {}), _wAMD.define("site/published/core", ["jquery", "legacy/jquery.animate", "legacy/jquery_utils", "jquery-ui/effect", "jquery-ui/effect-highlight", "jquery-ui/effect-fade", "util/effect-slide-custom", "util/platform/elements/PlatformElement", "util/platform/elements/PlatformElementSettings", "site/published/general", "site/published/comments", "site/published/form", "site/published/search", "underscore", "mustache"], function() {}), function(e) {
    if ("object" == typeof exports)
        module.exports = e(require("underscore"), require("backbone"));
    else if ("function" == typeof define && define.amd)
        _wAMD.define("backbone-pageable", ["underscore", "backbone"], e);
    else if ("undefined" != typeof _ && "undefined" != typeof Backbone) {
        var t = Backbone.PageableCollection, n = e(_, Backbone);
        Backbone.PageableCollection.noConflict = function() {
            return Backbone.PageableCollection = t, n
        }
    }
}(function(e, t) {
    function n(t, n) {
        if (!e.isNumber(t) || e.isNaN(t) ||!e.isFinite(t)||~~t !== t)
            throw new TypeError("`" + n + "` must be a finite integer");
        return t
    }
    function i(e) {
        for (var t, n, i, r, o = {}, s = decodeURIComponent, a = e.split("&"), l = 0, u = a.length; u > l; l++) {
            var c = a[l];
            t = c.split("="), n = t[0], i = t[1] ||!0, n = s(n), i = s(i), r = o[n], p(r) ? r.push(i) : o[n] = r ? [r, i] : i
        }
        return o
    }
    function r(e, t, n) {
        var i = e._events[t];
        if (i && i.length) {
            var r = i[i.length - 1], o = r.callback;
            r.callback = function() {
                try {
                    o.apply(this, arguments), n()
                } catch (e) {
                    throw e
                } finally {
                    r.callback = o
                }
            }
        } else
            n()
    }
    var o = e.extend, s = e.omit, a = e.clone, l = e.each, u = e.pick, c = e.contains, h = e.isEmpty, d = e.pairs, f = e.invert, p = e.isArray, g = e.isFunction, m = e.isObject, v = e.keys, y = e.isUndefined, w = e.result, _ = Math.ceil, b = Math.floor, M = Math.max, x = t.Collection.prototype, k = /[\s'"]/g, C = /[<>\s'"]/g, R = t.PageableCollection = t.Collection.extend({
        state: {
            firstPage: 1,
            lastPage: null,
            currentPage: null,
            pageSize: 25,
            totalPages: null,
            totalRecords: null,
            sortKey: null,
            order: - 1
        },
        mode: "server",
        queryParams: {
            currentPage: "page",
            pageSize: "per_page",
            totalPages: "total_pages",
            totalRecords: "total_entries",
            sortKey: "sort_by",
            order: "order",
            directions: {
                "-1": "asc",
                1: "desc"
            }
        },
        constructor: function(e, t) {
            x.constructor.apply(this, arguments), t = t || {};
            var n = this.mode = t.mode || this.mode || S.mode, i = o({}, S.queryParams, this.queryParams, t.queryParams || {});
            i.directions = o({}, S.queryParams.directions, this.queryParams.directions, i.directions || {}), this.queryParams = i;
            var r = this.state = o({}, S.state, this.state, t.state || {});
            r.currentPage = null == r.currentPage ? r.firstPage : r.currentPage, p(e) || (e = e ? [e] : []), "server" == n || null != r.totalRecords || h(e) || (r.totalRecords = e.length), this.switchMode(n, o({
                fetch: !1,
                resetState: !1,
                models: e
            }, t));
            var s = t.comparator;
            if (r.sortKey&&!s && this.setSorting(r.sortKey, r.order, t), "server" != n) {
                var l = this.fullCollection;
                s && t.full && (this.comparator = null, l.comparator = s), t.full && l.sort(), e&&!h(e) && (this.reset([].slice.call(e), o({
                    silent: !0
                }, t)), this.getPage(r.currentPage), e.splice.apply(e, [0, e.length].concat(this.models)))
            }
            this._initState = a(this.state)
        },
        _makeFullCollection: function(e, n) {
            var i, r, o, s = ["url", "model", "sync", "comparator"], a = this.constructor.prototype, l = {};
            for (i = 0, r = s.length; r > i; i++)
                o = s[i], y(a[o]) || (l[o] = a[o]);
            var u = new (t.Collection.extend(l))(e, n);
            for (i = 0, r = s.length; r > i; i++)
                o = s[i], this[o] !== a[o] && (u[o] = this[o]);
            return u
        },
        _makeCollectionEventHandler: function(e, t) {
            return function(n, i, s, u) {
                var c = e._handlers;
                l(v(c), function(n) {
                    var i = c[n];
                    e.off(n, i), t.off(n, i)
                });
                var h = a(e.state), d = h.firstPage, f = 0 === d ? h.currentPage: h.currentPage - 1, p = h.pageSize, g = f * p, m = g + p;
                if ("add" == n) {
                    var w, b, M, x, u = u || {};
                    if (s == t)
                        b = t.indexOf(i), b >= g && m > b && (x = e, w = M = b - g);
                    else {
                        w = e.indexOf(i), b = g + w, x = t;
                        var M = y(u.at) ? b: u.at + g
                    }
                    if (u.onRemove || (++h.totalRecords, delete u.onRemove), e.state = e._checkState(h), x) {
                        x.add(i, o({}, u || {}, {
                            at: M
                        }));
                        var k = w >= p ? i: !y(u.at) && m > M && e.length > p ? e.at(p): null;
                        k && r(s, n, function() {
                            e.remove(k, {
                                onAdd: !0
                            })
                        })
                    }
                }
                if ("remove" == n)
                    if (u.onAdd)
                        delete u.onAdd;
                    else {
                        if (--h.totalRecords) {
                            var C = h.totalPages = _(h.totalRecords / p);
                            h.lastPage = 0 === d ? C - 1 : C || d, h.currentPage > C && (h.currentPage = h.lastPage)
                        } else
                            h.totalRecords = null, h.totalPages = null;
                            e.state = e._checkState(h);
                            var R, S = u.index;
                            s == e ? ((R = t.at(m)) && r(e, n, function() {
                                e.push(R, {
                                    onRemove: !0
                                })
                            }), t.remove(i)) : S >= g && m > S && ((R = t.at(m - 1)) && r(e, n, function() {
                                e.push(R, {
                                    onRemove: !0
                                })
                            }), e.remove(i))
                    }
                if ("reset" == n)
                    if (u = s, s = i, s == e && null == u.from && null == u.to) {
                        var D = t.models.slice(0, g), T = t.models.slice(g + e.models.length);
                        t.reset(D.concat(e.models).concat(T), u)
                    } else
                        s == t && ((h.totalRecords = t.models.length) || (h.totalRecords = null, h.totalPages = null), "client" == e.mode && (h.lastPage = h.currentPage = h.firstPage), e.state = e._checkState(h), e.reset(t.models.slice(g, m), o({}, u, {
                            parse: !1
                        })));
                "sort" == n && (u = s, s = i, s === t && e.reset(t.models.slice(g, m), o({}, u, {
                    parse: !1
                }))), l(v(c), function(n) {
                    var i = c[n];
                    l([e, t], function(e) {
                        e.on(n, i);
                        var t = e._events[n] || [];
                        t.unshift(t.pop())
                    })
                })
            }
        },
        _checkState: function(e) {
            var t = this.mode, i = this.links, r = e.totalRecords, o = e.pageSize, s = e.currentPage, a = e.firstPage, l = e.totalPages;
            if (null != r && null != o && null != s && null != a && ("infinite" == t ? i : !0)) {
                if (r = n(r, "totalRecords"), o = n(o, "pageSize"), s = n(s, "currentPage"), a = n(a, "firstPage"), 1 > o)
                    throw new RangeError("`pageSize` must be >= 1");
                if (l = e.totalPages = _(r / o), 0 > a || a > 1)
                    throw new RangeError("`firstPage must be 0 or 1`");
                if (e.lastPage = 0 === a ? M(0, l - 1) : l || a, "infinite" == t) {
                    if (!i[s + ""])
                        throw new RangeError("No link found for page " + s)
                    } else if (a > s || l > 0 && (a ? s > l : s >= l))
                    throw new RangeError("`currentPage` must be firstPage <= currentPage " + (a ? ">" : ">=") + " totalPages if " + a + "-based. Got " + s + ".")
            }
            return e
        },
        setPageSize: function(e, t) {
            e = n(e, "pageSize"), t = t || {
                first: !1
            };
            var i = this.state, r = _(i.totalRecords / e), a = r ? M(i.firstPage, b(r * (i.firstPage ? i.currentPage : i.currentPage + 1) / i.totalPages)): i.firstPage;
            return i = this.state = this._checkState(o({}, i, {
                pageSize: e,
                currentPage: t.first ? i.firstPage: a,
                totalPages: r
            })), this.getPage(i.currentPage, s(t, ["first"]))
        },
        switchMode: function(t, n) {
            if (!c(["server", "client", "infinite"], t))
                throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
            n = n || {
                fetch: !0,
                resetState: !0
            };
            var i = this.state = n.resetState ? a(this._initState): this._checkState(o({}, this.state));
            this.mode = t;
            var r, u = this, h = this.fullCollection, d = this._handlers = this._handlers || {};
            if ("server" == t || h)
                "server" == t && h && (l(v(d), function(e) {
                    r = d[e], u.off(e, r), h.off(e, r)
                }), delete this._handlers, this._fullComparator = h.comparator, delete this.fullCollection);
            else {
                h = this._makeFullCollection(n.models || [], n), h.pageableCollection = this, this.fullCollection = h;
                var f = this._makeCollectionEventHandler(this, h);
                l(["add", "remove", "reset", "sort"], function(t) {
                    d[t] = r = e.bind(f, {}, t), u.on(t, r), h.on(t, r)
                }), h.comparator = this._fullComparator
            }
            if ("infinite" == t)
                for (var p = this.links = {}, g = i.firstPage, m = _(i.totalRecords / i.pageSize), y = 0 === g ? M(0, m - 1) : m || g, w = i.firstPage; y >= w; w++)
                    p[w] = this.url;
            else
                this.links && delete this.links;
            return n.fetch ? this.fetch(s(n, "fetch", "resetState")) : this
        },
        hasPrevious: function() {
            var e = this.state, t = e.currentPage;
            return "infinite" != this.mode ? t > e.firstPage : !!this.links[t - 1]
        },
        hasNext: function() {
            var e = this.state, t = this.state.currentPage;
            return "infinite" != this.mode ? t < e.lastPage : !!this.links[t + 1]
        },
        getFirstPage: function(e) {
            return this.getPage("first", e)
        },
        getPreviousPage: function(e) {
            return this.getPage("prev", e)
        },
        getNextPage: function(e) {
            return this.getPage("next", e)
        },
        getLastPage: function(e) {
            return this.getPage("last", e)
        },
        getPage: function(e, t) {
            var i = this.mode, r = this.fullCollection;
            t = t || {
                fetch: !1
            };
            var a = this.state, l = a.firstPage, u = a.currentPage, c = a.lastPage, d = a.pageSize, f = e;
            switch (e) {
            case"first":
                f = l;
                break;
            case"prev":
                f = u - 1;
                break;
            case"next":
                f = u + 1;
                break;
            case"last":
                f = c;
                break;
            default:
                f = n(e, "index")
            }
            this.state = this._checkState(o({}, a, {
                currentPage: f
            })), t.from = u, t.to = f;
            var p = (0 === l ? f : f - 1) * d, g = r && r.length ? r.models.slice(p, p + d): [];
            return "client" != i && ("infinite" != i || h(g)) || t.fetch ? ("infinite" == i && (t.url = this.links[f]), this.fetch(s(t, "fetch"))) : (this.reset(g, s(t, "fetch")), this)
        },
        getPageByOffset: function(e, t) {
            if (0 > e)
                throw new RangeError("`offset must be > 0`");
            e = n(e);
            var i = b(e / this.state.pageSize);
            return 0 !== this.state.firstPage && i++, i > this.state.lastPage && (i = this.state.lastPage), this.getPage(i, t)
        },
        sync: function(e, n, i) {
            var r = this;
            if ("infinite" == r.mode) {
                var s = i.success, a = r.state.currentPage;
                i.success = function(e, t, n) {
                    var l = r.links, u = r.parseLinks(e, o({
                        xhr: n
                    }, i));
                    u.first && (l[r.state.firstPage] = u.first), u.prev && (l[a - 1] = u.prev), u.next && (l[a + 1] = u.next), s && s(e, t, n)
                }
            }
            return (x.sync || t.sync).call(r, e, n, i)
        },
        parseLinks: function(e, t) {
            var n = {}, i = t.xhr.getResponseHeader("Link");
            if (i) {
                var r = ["first", "prev", "next"];
                l(i.split(","), function(e) {
                    var t = e.split(";"), i = t[0].replace(C, ""), o = t.slice(1);
                    l(o, function(e) {
                        var t = e.split("="), o = t[0].replace(k, ""), s = t[1].replace(k, "");
                        "rel" == o && c(r, s) && (n[s] = i)
                    })
                })
            }
            return n
        },
        parse: function(e, t) {
            var n = this.parseState(e, a(this.queryParams), a(this.state), t);
            return n && (this.state = this._checkState(o({}, this.state, n))), this.parseRecords(e, t)
        },
        parseState: function(t, n, i) {
            if (t && 2 === t.length && m(t[0]) && p(t[1])) {
                var r = a(i), o = t[0];
                return l(d(s(n, "directions")), function(t) {
                    var n = t[0], i = t[1], s = o[i];
                    y(s) || e.isNull(s) || (r[n] = o[i])
                }), o.order && (r.order = 1 * f(n.directions)[o.order]), r
            }
        },
        parseRecords: function(e) {
            return e && 2 === e.length && m(e[0]) && p(e[1]) ? e[1] : e
        },
        fetch: function(e) {
            e = e || {};
            var t = this._checkState(this.state), n = this.mode;
            "infinite" != n || e.url || (e.url = this.links[t.currentPage]);
            var r = e.data || {}, l = w(e, "url") || w(this, "url") || "", c = l.indexOf("?");
            - 1 != c && (o(r, i(l.slice(c + 1))), l = l.slice(0, c)), e.url = l, e.data = r;
            var h, f, p, m, _ = "client" == this.mode ? u(this.queryParams, "sortKey", "order"): s(u(this.queryParams, v(S.queryParams)), "directions"), b = d(_), M = a(this);
            for (h = 0; h < b.length; h++)
                f = b[h], p = f[0], m = f[1], m = g(m) ? m.call(M) : m, null != t[p] && null != m && (r[m] = t[p]);
            t.sortKey && t.order ? r[_.order] = this.queryParams.directions[t.order + ""] : t.sortKey || delete r[_.order];
            var k = d(s(this.queryParams, v(S.queryParams)));
            for (h = 0; h < k.length; h++)
                f = k[h], m = f[1], m = g(m) ? m.call(M) : m, null != m && (r[f[0]] = m);
            if ("server" != n) {
                var C = this, R = this.fullCollection, D = e.success;
                return e.success = function(t, i, r) {
                    r = r || {}, y(e.silent) ? delete r.silent : r.silent = e.silent;
                    var s = t.models;
                    "client" == n ? R.reset(s, r) : (R.add(s, o({
                        at: R.length
                    }, o(r, {
                        parse: !1
                    }))), C.trigger("reset", C, r)), D && D(t, i, r)
                }, x.fetch.call(this, o({}, e, {
                    silent: !0
                }))
            }
            return x.fetch.call(this, e)
        },
        _makeComparator: function(e, t, n) {
            var i = this.state;
            return e = e || i.sortKey, t = t || i.order, e && t ? (n || (n = function(e, t) {
                return e.get(t)
            }), function(i, r) {
                var o, s = n(i, e), a = n(r, e);
                return 1 === t && (o = s, s = a, a = o), s === a ? 0 : a > s?-1 : 1
            }) : void 0
        },
        setSorting: function(t, n, i) {
            var r = this.state;
            r.sortKey = t, r.order = n = n || r.order;
            var s = this.fullCollection, a=!1, l=!1;
            t || (a = l=!0);
            var u = this.mode;
            i = o({
                side: "client" == u ? u: "server",
                full: !0
            }, i);
            var c = this._makeComparator(t, n, i.sortValue), h = i.full, d = i.side;
            return "client" == d ? h ? (s && (s.comparator = c), a=!0) : (this.comparator = c, l=!0) : "server" != d || h || (this.comparator = c), a && (this.comparator = null), l && s && (s.comparator = null), this.fetchOptions = e.extend({}, this.fetchOptions, {
                sort: [{
                    property: t,
                    direction: n > 0 ? "ASC": "DESC"
                }
                ]
            }), this
        }
    }), S = R.prototype;
    return R
}), function(e) {
    "object" == typeof exports ? module.exports = e(require("backbone"), require("underscore")) : "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone-validation", ["backbone", "underscore"], e)
}(function(e, t) {
    return e.Validation = function(t) {
        var n = {
            forceUpdate: !1,
            selector: "name",
            labelFormatter: "sentenceCase",
            valid: Function.prototype,
            invalid: Function.prototype
        }, i = {
            formatLabel: function(e, t) {
                return u[n.labelFormatter](e, t)
            },
            format: function() {
                var e = Array.prototype.slice.call(arguments), t = e.shift();
                return t.replace(/\{(\d+)\}/g, function(t, n) {
                    return "undefined" != typeof e[n] ? e[n] : t
                })
            }
        }, r = function(n, i, o) {
            return i = i || {}, o = o || "", t.each(n, function(t, s) {
                n.hasOwnProperty(s) && (!t || "object" != typeof t || t instanceof Array || t instanceof Date || t instanceof RegExp || t instanceof e.Model || t instanceof e.Collection ? i[o + s] = t : r(t, i, o + s + "."))
            }), i
        }, o = function() {
            var e = function(e) {
                return t.reduce(t.keys(t.result(e, "validation") || {}), function(e, t) {
                    return e[t] = void 0, e
                }, {})
            }, o = function(e, n) {
                var i = e.validation ? t.result(e, "validation")[n] || {}
                : {};
                return (t.isFunction(i) || t.isString(i)) && (i = {
                    fn: i
                }), t.isArray(i) || (i = [i]), t.reduce(i, function(e, n) {
                    return t.each(t.without(t.keys(n), "msg"), function(t) {
                        e.push({
                            fn: c[t],
                            val: n[t],
                            msg: n.msg
                        })
                    }), e
                }, [])
            }, a = function(e, n, r, s) {
                return t.reduce(o(e, n), function(o, a) {
                    var l = t.extend({}, i, c), u = a.fn.call(l, r, n, a.val, e, s);
                    return u===!1 || o===!1?!1 : u&&!o ? t.result(a, "msg") || u : o
                }, "")
            }, l = function(e, n) {
                var i, o = {}, s=!0, l = t.clone(n), u = r(n);
                return t.each(u, function(t, n) {
                    i = a(e, n, t, l), i && (o[n] = i, s=!1)
                }), {
                    invalidAttrs: o,
                    isValid: s
                }
            }, u = function(n, i) {
                return {
                    preValidate: function(e, n) {
                        var i, r = this, o = {};
                        return t.isObject(e) ? (t.each(e, function(e, t) {
                            i = r.preValidate(t, e), i && (o[t] = i)
                        }), t.isEmpty(o) ? void 0 : o) : a(this, e, n, t.extend({}, this.attributes))
                    },
                    isValid: function(e) {
                        var n = r(this.attributes);
                        return t.isString(e)?!a(this, e, n[e], t.extend({}, this.attributes)) : t.isArray(e) ? t.reduce(e, function(e, i) {
                            return e&&!a(this, i, n[i], t.extend({}, this.attributes))
                        }, !0, this) : (e===!0 && this.validate(), this.validation ? this._isValid : !0)
                    },
                    validate: function(o, s) {
                        var a = this, u=!o, c = t.extend({}, i, s), h = e(a), d = t.extend({}, h, a.attributes, o), f = r(o || d), p = l(a, d);
                        return a._isValid = p.isValid, t.each(h, function(e, t) {
                            var i = p.invalidAttrs.hasOwnProperty(t);
                            i || c.valid(n, t, c.selector)
                        }), t.each(h, function(e, t) {
                            var i = p.invalidAttrs.hasOwnProperty(t), r = f.hasOwnProperty(t);
                            i && (r || u) && c.invalid(n, t, p.invalidAttrs[t], c.selector)
                        }), t.defer(function() {
                            a.trigger("validated", a._isValid, a, p.invalidAttrs), a.trigger("validated:" + (a._isValid ? "valid" : "invalid"), a, p.invalidAttrs)
                        }), !c.forceUpdate && t.intersection(t.keys(p.invalidAttrs), t.keys(f)).length > 0 ? p.invalidAttrs : void 0
                    }
                }
            }, h = function(e, n, i) {
                t.extend(n, u(e, i))
            }, d = function(e) {
                delete e.validate, delete e.preValidate, delete e.isValid
            }, f = function(e) {
                h(this.view, e, this.options)
            }, p = function(e) {
                d(e)
            };
            return {
                version: "0.9.1",
                configure: function(e) {
                    t.extend(n, e)
                },
                bind: function(e, i) {
                    i = t.extend({}, n, s, i);
                    var r = i.model || e.model, o = i.collection || e.collection;
                    if ("undefined" == typeof r && "undefined" == typeof o)
                        throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                    r ? h(e, r, i) : o && (o.each(function(t) {
                        h(e, t, i)
                    }), o.bind("add", f, {
                        view: e,
                        options: i
                    }), o.bind("remove", p))
                },
                unbind: function(e, n) {
                    n = t.extend({}, n);
                    var i = n.model || e.model, r = n.collection || e.collection;
                    i ? d(i) : r && (r.each(function(e) {
                        d(e)
                    }), r.unbind("add", f), r.unbind("remove", p))
                },
                mixin: u(null, n)
            }
        }(), s = o.callbacks = {
            valid: function(e, t, n) {
                e.$("[" + n + '~="' + t + '"]').removeClass("invalid").removeAttr("data-error")
            },
            invalid: function(e, t, n, i) {
                e.$("[" + i + '~="' + t + '"]').addClass("invalid").attr("data-error", n)
            }
        }, a = o.patterns = {
            digits: /^\d+$/,
            number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
            domain: /^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z]{2,6}$/
        }, l = o.messages = {
            required: "{0} is required",
            acceptance: "{0} must be accepted",
            min: "{0} must be greater than or equal to {1}",
            max: "{0} must be less than or equal to {1}",
            range: "{0} must be between {1} and {2}",
            length: "{0} must be {1} characters",
            minLength: "{0} must be at least {1} characters",
            maxLength: "{0} must be at most {1} characters",
            rangeLength: "{0} must be between {1} and {2} characters",
            oneOf: "{0} must be one of: {1}",
            equalTo: "{0} must be the same as {1}",
            digits: "{0} must only contain digits",
            number: "{0} must be a number",
            "int": "{0} must be a whole number",
            email: "{0} must be a valid email",
            url: "{0} must be a valid url",
            domain: "{0} must be a valid domain",
            inlinePattern: "{0} is invalid"
        }, u = o.labelFormatters = {
            none: function(e) {
                return e
            },
            sentenceCase: function(e) {
                return e.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e, t) {
                    return 0 === t ? e.toUpperCase() : " " + e.toLowerCase()
                }).replace(/_/g, " ")
            },
            label: function(e, t) {
                return t.labels && t.labels[e] || u.sentenceCase(e, t)
            }
        }, c = o.validators = function() {
            var e = String.prototype.trim ? function(e) {
                return null === e ? "" : String.prototype.trim.call(e)
            }
            : function(e) {
                var t = /^\s+/, n = /\s+$/;
                return null === e ? "" : e.toString().replace(t, "").replace(n, "")
            }, n = function(e) {
                return t.isNumber(e) || t.isString(e) && e.match(a.number)
            }, i = function(n) {
                return !(t.isNull(n) || t.isUndefined(n) || t.isString(n) && "" === e(n) || t.isArray(n) && t.isEmpty(n))
            };
            return {
                fn: function(e, n, i, r, o) {
                    return t.isString(i) && (i = r[i]), i.call(r, e, n, o)
                },
                required: function(e, n, r, o, s) {
                    var a = t.isFunction(r) ? r.call(o, e, n, s): r;
                    return a || i(e) ? a&&!i(e) ? this.format(l.required, this.formatLabel(n, o)) : void 0 : !1
                },
                acceptance: function(e, n, i, r) {
                    return "true" === e || t.isBoolean(e) && e!==!1 ? void 0 : this.format(l.acceptance, this.formatLabel(n, r))
                },
                min: function(e, t, i, r) {
                    return !n(e) || i > e ? this.format(l.min, this.formatLabel(t, r), i) : void 0
                },
                max: function(e, t, i, r) {
                    return !n(e) || e > i ? this.format(l.max, this.formatLabel(t, r), i) : void 0
                },
                range: function(e, t, i, r) {
                    return !n(e) || e < i[0] || e > i[1] ? this.format(l.range, this.formatLabel(t, r), i[0], i[1]) : void 0
                },
                length: function(e, n, i, r) {
                    return t.isString(e) && e.length === i ? void 0 : this.format(l.length, this.formatLabel(n, r), i)
                },
                minLength: function(e, n, i, r) {
                    return !t.isString(e) || e.length < i ? this.format(l.minLength, this.formatLabel(n, r), i) : void 0
                },
                maxLength: function(e, n, i, r) {
                    return !t.isString(e) || e.length > i ? this.format(l.maxLength, this.formatLabel(n, r), i) : void 0
                },
                rangeLength: function(e, n, i, r) {
                    return !t.isString(e) || e.length < i[0] || e.length > i[1] ? this.format(l.rangeLength, this.formatLabel(n, r), i[0], i[1]) : void 0
                },
                oneOf: function(e, n, i, r) {
                    return t.include(i, e) ? void 0 : this.format(l.oneOf, this.formatLabel(n, r), i.join(", "))
                },
                equalTo: function(e, t, n, i, r) {
                    return e !== r[n] ? this.format(l.equalTo, this.formatLabel(t, i), this.formatLabel(n, i)) : void 0
                },
                pattern: function(e, t, n, r) {
                    return i(e) && e.toString().match(a[n] || n) ? void 0 : this.format(l[n] || l.inlinePattern, this.formatLabel(t, r), n)
                },
                url: function(e, t, n, i) {
                    return a.url.test(e) ? void 0 : this.format(l.url, this.formatLabel(t, i))
                },
                domain: function(e, t, n, i) {
                    return a.domain.test(e) ? void 0 : this.format(l.domain, this.formatLabel(t, i))
                },
                email: function(e, t, n, i) {
                    return a.email.test(e) ? void 0 : this.format(l.email, this.formatLabel(t, i))
                },
                number: function(e, t, n, i) {
                    return isNaN(parseFloat(e)) ||!isFinite(e) ? this.format(l.number, this.formatLabel(t, i)) : void 0
                },
                "int": function(e, t, n, i) {
                    return 0 !== e%1 ? this.format(l.int, this.formatLabel(t, i)) : void 0
                }
            }
        }();
        return t.each(c, function(e, n) {
            c[n] = t.bind(c[n], t.extend({}, i, c))
        }), o
    }(t), e.Validation
}), function(e, t) {
    "function" == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define("backbone-relational", ["exports", "backbone", "underscore"], t) : "undefined" != typeof exports ? t(exports, require("backbone"), require("underscore")) : t(e, e.Backbone, e._)
}(this, function(e, t, n) {
    t.Relational = {
        showWarnings: !0
    }, t.Semaphore = {
        _class: "Backbone.Semaphore",
        _permitsAvailable: null,
        _permitsUsed: 0,
        acquire: function() {
            if (this._permitsAvailable && this._permitsUsed >= this._permitsAvailable)
                throw new Error("Max permits acquired");
            this._permitsUsed++
        },
        release: function() {
            if (0 === this._permitsUsed)
                throw new Error("All permits released");
            this._permitsUsed--
        },
        isLocked: function() {
            return this._permitsUsed > 0
        },
        setAvailablePermits: function(e) {
            if (this._permitsUsed > e)
                throw new Error("Available permits cannot be less than used permits");
            this._permitsAvailable = e
        }
    }, t.BlockingQueue = function() {
        this._queue = []
    }, n.extend(t.BlockingQueue.prototype, t.Semaphore, {
        _class: "Backbone.BlockingQueue",
        _queue: null,
        add: function(e) {
            this.isBlocked() ? this._queue.push(e) : e()
        },
        process: function() {
            var e = this._queue;
            for (this._queue = []; e && e.length;)
                e.shift()()
        },
        block: function() {
            this.acquire()
        },
        unblock: function() {
            this.release(), this.isBlocked() || this.process()
        },
        isBlocked: function() {
            return this.isLocked()
        }
    }), t.Relational.eventQueue = new t.BlockingQueue, t.Store = function() {
        this._collections = [], this._reverseRelations = [], this._orphanRelations = [], this._subModels = [], this._modelScopes = [e]
    }, n.extend(t.Store.prototype, t.Events, {
        _class: "Backbone.Store",
        initializeRelation: function(e, i, r) {
            var o = n.isString(i.type) ? t[i.type] || this.getObjectByName(i.type): i.type;
            o && o.prototype instanceof t.Relation ? new o(e, i, r) : t.Relational.showWarnings && "undefined" != typeof console && console.warn("Relation=%o; missing or invalid relation type!", i)
        },
        addModelScope: function(e) {
            this._modelScopes.push(e)
        },
        removeModelScope: function(e) {
            this._modelScopes = n.without(this._modelScopes, e)
        },
        addSubModels: function(e, t) {
            this._subModels.push({
                superModelType: t,
                subModels: e
            })
        },
        setupSuperModel: function(e) {
            n.find(this._subModels, function(t) {
                return n.each(t.subModels || [], function(n, i) {
                    var r = this.getObjectByName(n);
                    return e === r ? (t.superModelType._subModels[i] = e, e._superModel = t.superModelType, e._subModelTypeValue = i, e._subModelTypeAttribute = t.superModelType.prototype.subModelTypeAttribute, !0) : void 0
                }, this)
            }, this)
        },
        addReverseRelation: function(e) {
            var t = n.any(this._reverseRelations, function(t) {
                return n.all(e || [], function(e, n) {
                    return e === t[n]
                })
            });
            !t && e.model && e.type && (this._reverseRelations.push(e), this._addRelation(e.model, e), this.retroFitRelation(e))
        },
        addOrphanRelation: function(e) {
            var t = n.any(this._orphanRelations, function(t) {
                return n.all(e || [], function(e, n) {
                    return e === t[n]
                })
            });
            !t && e.model && e.type && this._orphanRelations.push(e)
        },
        processOrphanRelations: function() {
            n.each(this._orphanRelations.slice(0), function(e) {
                var i = t.Relational.store.getObjectByName(e.relatedModel);
                i && (this.initializeRelation(null, e), this._orphanRelations = n.without(this._orphanRelations, e))
            }, this)
        },
        _addRelation: function(e, t) {
            e.prototype.relations || (e.prototype.relations = []), e.prototype.relations.push(t), n.each(e._subModels || [], function(e) {
                this._addRelation(e, t)
            }, this)
        },
        retroFitRelation: function(e) {
            var t = this.getCollection(e.model, !1);
            t && t.each(function(t) {
                t instanceof e.model && new e.type(t, e)
            }, this)
        },
        getCollection: function(e, i) {
            e instanceof t.RelationalModel && (e = e.constructor);
            for (var r = e; r._superModel;)
                r = r._superModel;
            var o = n.find(this._collections, function(e) {
                return e.model === r
            });
            return o || i===!1 || (o = this._createCollection(r)), o
        },
        getObjectByName: function(e) {
            var t = e.split("."), i = null;
            return n.find(this._modelScopes, function(e) {
                return i = n.reduce(t || [], function(e, t) {
                    return e ? e[t] : void 0
                }, e), i && i !== e?!0 : void 0
            }, this), i
        },
        _createCollection: function(e) {
            var n;
            return e instanceof t.RelationalModel && (e = e.constructor), e.prototype instanceof t.RelationalModel && (n = new t.Collection, n.model = e, this._collections.push(n)), n
        },
        resolveIdForItem: function(e, i) {
            var r = n.isString(i) || n.isNumber(i) ? i: null;
            return null === r && (i instanceof t.RelationalModel ? r = i.id : n.isObject(i) && (r = e.prototype._getNewId(i))), r || 0 === r || (r = null), r
        },
        find: function(e, t) {
            var n = this.resolveIdForItem(e, t), i = this.getCollection(e);
            if (i) {
                var r = i.get(n);
                if (r instanceof e)
                    return r
            }
            return null
        },
        register: function(e) {
            var t = this.getCollection(e);
            if (t) {
                var n = e.collection;
                t.add(e), e.collection = n
            }
        },
        checkId: function(e, n) {
            var i = this.getCollection(e), r = i && i.get(n);
            if (r && e !== r)
                throw t.Relational.showWarnings && "undefined" != typeof console && console.warn("Duplicate id! Old RelationalModel=%o, new RelationalModel=%o", r, e), new Error("Cannot instantiate more than one Backbone.RelationalModel with the same id per type!")
        },
        update: function(e) {
            var t = this.getCollection(e);
            t.contains(e) || this.register(e), t._onModelEvent("change:" + e.idAttribute, e, t), e.trigger("relational:change:id", e, t)
        },
        unregister: function(e) {
            var i, r;
            e instanceof t.Model ? (i = this.getCollection(e), r = [e]) : e instanceof t.Collection ? (i = this.getCollection(e.model), r = n.clone(e.models)) : (i = this.getCollection(e), r = n.clone(i.models)), n.each(r, function(e) {
                this.stopListening(e), n.invoke(e.getRelations(), "stopListening")
            }, this), n.contains(this._collections, e) ? i.reset([]) : n.each(r, function(e) {
                i.get(e) ? i.remove(e) : i.trigger("relational:remove", e, i)
            }, this)
        },
        reset: function() {
            this.stopListening(), n.each(this._collections, function(e) {
                this.unregister(e)
            }, this), this._collections = [], this._subModels = [], this._modelScopes = [e]
        }
    }), t.Relational.store = new t.Store, t.Relation = function(e, i, r) {
        if (this.instance = e, i = n.isObject(i) ? i : {}, this.reverseRelation = n.defaults(i.reverseRelation || {}, this.options.reverseRelation), this.options = n.defaults(i, this.options, t.Relation.prototype.options), this.reverseRelation.type = n.isString(this.reverseRelation.type) ? t[this.reverseRelation.type] || t.Relational.store.getObjectByName(this.reverseRelation.type) : this.reverseRelation.type, this.key = this.options.key, this.keySource = this.options.keySource || this.key, this.keyDestination = this.options.keyDestination || this.keySource || this.key, this.model = this.options.model || this.instance.constructor, this.relatedModel = this.options.relatedModel, !n.isFunction(this.relatedModel) || this.relatedModel.prototype instanceof t.RelationalModel || (this.relatedModel = n.result(this, "relatedModel")), n.isString(this.relatedModel) && (this.relatedModel = t.Relational.store.getObjectByName(this.relatedModel)), this.checkPreconditions() && (!this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key && t.Relational.store.addReverseRelation(n.defaults({
            isAutoRelation: !0,
            model: this.relatedModel,
            relatedModel: this.model,
            reverseRelation: this.options
        }, this.reverseRelation)), e)) {
            var o = this.keySource;
            o !== this.key && "object" == typeof this.instance.get(this.key) && (o = this.key), this.setKeyContents(this.instance.get(o)), this.relatedCollection = t.Relational.store.getCollection(this.relatedModel), this.keySource !== this.key && delete this.instance.attributes[this.keySource], this.instance._relations[this.key] = this, this.initialize(r), this.options.autoFetch && this.instance.fetchRelated(this.key, n.isObject(this.options.autoFetch) ? this.options.autoFetch : {}), this.listenTo(this.instance, "destroy", this.destroy).listenTo(this.relatedCollection, "relational:add relational:change:id", this.tryAddRelated).listenTo(this.relatedCollection, "relational:remove", this.removeRelated)
        }
    }, t.Relation.extend = t.Model.extend, n.extend(t.Relation.prototype, t.Events, t.Semaphore, {
        _class: "Backbone.Relation",
        options: {
            createModels: !0,
            includeInJSON: !0,
            isAutoRelation: !1,
            autoFetch: !1,
            parse: !1
        },
        instance: null,
        key: null,
        keyContents: null,
        relatedModel: null,
        relatedCollection: null,
        reverseRelation: null,
        related: null,
        checkPreconditions: function() {
            var e = this.instance, i = this.key, r = this.model, o = this.relatedModel, s = t.Relational.showWarnings && "undefined" != typeof console;
            if (!r ||!i ||!o)
                return s && console.warn("Relation=%o: missing model, key or relatedModel (%o, %o, %o).", this, r, i, o), !1;
            if (!(r.prototype instanceof t.RelationalModel))
                return s && console.warn("Relation=%o: model does not inherit from Backbone.RelationalModel (%o).", this, e), !1;
            if (!(o.prototype instanceof t.RelationalModel))
                return s && console.warn("Relation=%o: relatedModel does not inherit from Backbone.RelationalModel (%o).", this, o), !1;
            if (this instanceof t.HasMany && this.reverseRelation.type === t.HasMany)
                return s && console.warn("Relation=%o: relation is a HasMany, and the reverseRelation is HasMany as well.", this), !1;
            if (e && n.keys(e._relations).length) {
                var a = n.find(e._relations, function(e) {
                    return e.key === i
                }, this);
                if (a)
                    return s && console.warn("Cannot create relation=%o on %o for model=%o: already taken by relation=%o.", this, i, e, a), !1
            }
            return !0
        },
        setRelated: function(e) {
            this.related = e, this.instance.attributes[this.key] = e
        },
        _isReverseRelation: function(e) {
            return e.instance instanceof this.relatedModel && this.reverseRelation.key === e.key && this.key === e.reverseRelation.key
        },
        getReverseRelations: function(e) {
            var t = [], i = n.isUndefined(e) ? this.related && (this.related.models || [this.related]): [e];
            return n.each(i || [], function(e) {
                n.each(e.getRelations() || [], function(e) {
                    this._isReverseRelation(e) && t.push(e)
                }, this)
            }, this), t
        },
        destroy: function() {
            this.stopListening(), this instanceof t.HasOne ? this.setRelated(null) : this instanceof t.HasMany && this.setRelated(this._prepareCollection()), n.each(this.getReverseRelations(), function(e) {
                e.removeRelated(this.instance)
            }, this)
        }
    }), t.HasOne = t.Relation.extend({
        _class: "Backbone.HasOne",
        options: {
            reverseRelation: {
                type: "HasMany"
            }
        },
        initialize: function(e) {
            this.listenTo(this.instance, "relational:change:" + this.key, this.onChange);
            var t = this.findRelated(e);
            this.setRelated(t), n.each(this.getReverseRelations(), function(t) {
                t.addRelated(this.instance, e)
            }, this)
        },
        findRelated: function(e) {
            var t = null;
            if (e = n.defaults({
                parse: this.options.parse
            }, e), this.keyContents instanceof this.relatedModel)
                t = this.keyContents;
            else if (this.keyContents || 0 === this.keyContents) {
                var i = n.defaults({
                    create: this.options.createModels
                }, e);
                t = this.relatedModel.findOrCreate(this.keyContents, i)
            }
            return t && (this.keyId = null), t
        },
        setKeyContents: function(e) {
            this.keyContents = e, this.keyId = t.Relational.store.resolveIdForItem(this.relatedModel, this.keyContents)
        },
        onChange: function(e, i, r) {
            if (!this.isLocked()) {
                this.acquire(), r = r ? n.clone(r) : {};
                var o = n.isUndefined(r.__related), s = o ? this.related: r.__related;
                if (o) {
                    this.setKeyContents(i);
                    var a = this.findRelated(r);
                    this.setRelated(a)
                }
                if (s && this.related !== s && n.each(this.getReverseRelations(s), function(e) {
                    e.removeRelated(this.instance, null, r)
                }, this), n.each(this.getReverseRelations(), function(e) {
                    e.addRelated(this.instance, r)
                }, this), !r.silent && this.related !== s) {
                    var l = this;
                    this.changed=!0, t.Relational.eventQueue.add(function() {
                        l.instance.trigger("change:" + l.key, l.instance, l.related, r, !0), l.changed=!1
                    })
                }
                this.release()
            }
        },
        tryAddRelated: function(e, t, n) {
            !this.keyId && 0 !== this.keyId || e.id !== this.keyId || (this.addRelated(e, n), this.keyId = null)
        },
        addRelated: function(e, t) {
            var i = this;
            e.queue(function() {
                if (e !== i.related) {
                    var r = i.related || null;
                    i.setRelated(e), i.onChange(i.instance, e, n.defaults({
                        __related: r
                    }, t))
                }
            })
        },
        removeRelated: function(e, t, i) {
            if (this.related && e === this.related) {
                var r = this.related || null;
                this.setRelated(null), this.onChange(this.instance, e, n.defaults({
                    __related: r
                }, i))
            }
        }
    }), t.HasMany = t.Relation.extend({
        _class: "Backbone.HasMany",
        collectionType: null,
        options: {
            reverseRelation: {
                type: "HasOne"
            },
            collectionType: t.Collection,
            collectionKey: !0,
            collectionOptions: {}
        },
        initialize: function(e) {
            if (this.listenTo(this.instance, "relational:change:" + this.key, this.onChange), this.collectionType = this.options.collectionType, !n.isFunction(this.collectionType) || this.collectionType === t.Collection || this.collectionType.prototype instanceof t.Collection || (this.collectionType = n.result(this, "collectionType")), n.isString(this.collectionType)) {
                var i = this.collectionType;
                this.collectionType = t.Relational.store.getObjectByName(this.collectionType)
            }
            if (this.collectionType || (i && t.Relational.showWarnings && "undefined" != typeof console && console.warn("`collectionType` of " + i + " not found, using Backbone.Collection in its place."), this.collectionType = t.Collection), this.collectionType !== t.Collection&&!(this.collectionType.prototype instanceof t.Collection))
                throw new Error("`collectionType` must inherit from Backbone.Collection");
            var r = this.findRelated(e);
            this.setRelated(r)
        },
        _prepareCollection: function(e) {
            if (this.related && this.stopListening(this.related), !(e && e instanceof t.Collection)) {
                var i = n.isFunction(this.options.collectionOptions) ? this.options.collectionOptions(this.instance): this.options.collectionOptions;
                e = new this.collectionType(null, i)
            }
            if (e.model = this.relatedModel, this.options.collectionKey) {
                var r = this.options.collectionKey===!0 ? this.options.reverseRelation.key: this.options.collectionKey;
                e[r] && e[r] !== this.instance ? t.Relational.showWarnings && "undefined" != typeof console && console.warn("Relation=%o; collectionKey=%s already exists on collection=%o", this, r, this.options.collectionKey) : r && (e[r] = this.instance)
            }
            return this.listenTo(e, "relational:add", this.handleAddition).listenTo(e, "relational:remove", this.handleRemoval).listenTo(e, "relational:reset", this.handleReset), e
        },
        findRelated: function(e) {
            var i = null;
            if (e = n.defaults({
                parse: this.options.parse
            }, e), this.keyContents instanceof t.Collection)
                this._prepareCollection(this.keyContents), i = this.keyContents;
            else {
                var r = [];
                n.each(this.keyContents, function(t) {
                    if (t instanceof this.relatedModel)
                        var i = t;
                    else
                        i = this.relatedModel.findOrCreate(t, n.extend({
                            merge: !0
                        }, e, {
                            create: this.options.createModels
                        }));
                    i && r.push(i)
                }, this), i = this.related instanceof t.Collection ? this.related : this._prepareCollection(), i.set(r, n.defaults({
                    merge: !1,
                    parse: !1
                }, e))
            }
            return this.keyIds = n.difference(this.keyIds, n.pluck(i.models, "id")), i
        },
        setKeyContents: function(e) {
            this.keyContents = e instanceof t.Collection ? e : null, this.keyIds = [], this.keyContents ||!e && 0 !== e || (this.keyContents = n.isArray(e) ? e : [e], n.each(this.keyContents, function(e) {
                var n = t.Relational.store.resolveIdForItem(this.relatedModel, e);
                (n || 0 === n) && this.keyIds.push(n)
            }, this))
        },
        onChange: function(e, i, r) {
            r = r ? n.clone(r) : {}, this.setKeyContents(i), this.changed=!1;
            var o = this.findRelated(r);
            if (this.setRelated(o), !r.silent) {
                var s = this;
                t.Relational.eventQueue.add(function() {
                    s.changed && (s.instance.trigger("change:" + s.key, s.instance, s.related, r, !0), s.changed=!1)
                })
            }
        },
        handleAddition: function(e, i, r) {
            r = r ? n.clone(r) : {}, this.changed=!0, n.each(this.getReverseRelations(e), function(e) {
                e.addRelated(this.instance, r)
            }, this);
            var o = this;
            !r.silent && t.Relational.eventQueue.add(function() {
                o.instance.trigger("add:" + o.key, e, o.related, r)
            })
        },
        handleRemoval: function(e, i, r) {
            r = r ? n.clone(r) : {}, this.changed=!0, n.each(this.getReverseRelations(e), function(e) {
                e.removeRelated(this.instance, null, r)
            }, this);
            var o = this;
            !r.silent && t.Relational.eventQueue.add(function() {
                o.instance.trigger("remove:" + o.key, e, o.related, r)
            })
        },
        handleReset: function(e, i) {
            var r = this;
            i = i ? n.clone(i) : {}, !i.silent && t.Relational.eventQueue.add(function() {
                r.instance.trigger("reset:" + r.key, r.related, i)
            })
        },
        tryAddRelated: function(e, t, i) {
            var r = n.contains(this.keyIds, e.id);
            r && (this.addRelated(e, i), this.keyIds = n.without(this.keyIds, e.id))
        },
        addRelated: function(e, t) {
            var i = this;
            e.queue(function() {
                i.related&&!i.related.get(e) && i.related.add(e, n.defaults({
                    parse: !1
                }, t))
            })
        },
        removeRelated: function(e, t, n) {
            this.related.get(e) && this.related.remove(e, n)
        }
    }), t.RelationalModel = t.Model.extend({
        _class: "Backbone.RelationalModel",
        relations: null,
        _relations: null,
        _isInitialized: !1,
        _deferProcessing: !1,
        _queue: null,
        _attributeChangeFired: !1,
        subModelTypeAttribute: "type",
        subModelTypes: null,
        keydefs: {},
        compoundKeyDelim: "-",
        constructor: function(e, i) {
            if (i && i.collection) {
                var r = this, o = this.collection = i.collection;
                delete i.collection, this._deferProcessing=!0;
                var s = function(e) {
                    e === r && (r._deferProcessing=!1, r.processQueue(), o.off("relational:add", s))
                };
                o.on("relational:add", s), n.defer(function() {
                    s(r)
                })
            }
            t.Relational.store.processOrphanRelations(), t.Relational.store.listenTo(this, "relational:unregister", t.Relational.store.unregister), this._queue = new t.BlockingQueue, this._queue.block(), t.Relational.eventQueue.block();
            try {
                t.Model.apply(this, arguments)
            } finally {
                t.Relational.eventQueue.unblock()
            }
            this.createSavepoint(), this.on("sync", this.createSavepoint, this)
        },
        createSavepoint: function() {
            return this.savepoint = JSON.parse(JSON.stringify(this)), this
        },
        rollback: function(e) {
            e = e || {}, this.set(this.savepoint), this.changed = [], e.silent || this.trigger("rollback", this, e)
        },
        commit: function(e) {
            e = e || {};
            var i = this, r = i.isNew(), o = [], s = [];
            return (r || i.hasChangedDeepSinceSavepoint()) && (r || n.each(i.relations, function(t) {
                if (t.includeInJSON && (o.push(t), t.includeInJSON=!1, !t.isAutoRelation)) {
                    var n = i.get(t.key);
                    s.push(n.commit(e))
                }
            }), s.push(i.save(null, e)), n.each(o, function(e) {
                e.includeInJSON=!0
            }), e.silent || i.trigger("commit", i, e)), t.$.when.apply(t.$, s)
        },
        hasChangedDeepSinceSavepoint: function() {
            return !n.isEqual(this.toJSON(), this.savepoint)
        },
        trigger: function(e) {
            if (e.length > 5 && 0 === e.indexOf("change")) {
                var n = this, i = arguments;
                t.Relational.eventQueue.add(function() {
                    if (n._isInitialized) {
                        var r=!0;
                        if ("change" === e)
                            r = n.hasChanged() || n._attributeChangeFired, n._attributeChangeFired=!1;
                        else {
                            var o = e.slice(7), s = n.getRelation(o);
                            s ? (r = i[4]===!0, r ? n.changed[o] = i[2] : s.changed || delete n.changed[o]) : r && (n._attributeChangeFired=!0)
                        }
                        r && t.Model.prototype.trigger.apply(n, i)
                    }
                })
            } else
                "destroy" === e ? (t.Model.prototype.trigger.apply(this, arguments), t.Relational.store.unregister(this)) : t.Model.prototype.trigger.apply(this, arguments);
            return this
        },
        initializeRelations: function(e) {
            this.acquire(), this._relations = {}, n.each(this.relations || [], function(n) {
                t.Relational.store.initializeRelation(this, n, e)
            }, this), this._isInitialized=!0, this.release(), this.processQueue()
        },
        updateRelations: function(e, t) {
            this._isInitialized&&!this.isLocked() && n.each(this._relations, function(n) {
                if (!e || n.keySource in e || n.key in e) {
                    var i = this.attributes[n.keySource] || this.attributes[n.key], r = e && (e[n.keySource] || e[n.key]);
                    (n.related !== i || null === i && null === r) && this.trigger("relational:change:" + n.key, this, i, t || {})
                }
                n.keySource !== n.key && delete this.attributes[n.keySource]
            }, this)
        },
        queue: function(e) {
            this._queue.add(e)
        },
        processQueue: function() {
            this._isInitialized&&!this._deferProcessing && this._queue.isBlocked() && this._queue.unblock()
        },
        getRelation: function(e) {
            return this._relations[e]
        },
        getRelations: function() {
            return n.values(this._relations)
        },
        fetchRelated: function(e, i, r) {
            i = n.extend({
                update: !0,
                remove: !1
            }, i);
            var o, s, a = [], l = this.getRelation(e), u = l && (l.keyIds && l.keyIds.slice(0) || (l.keyId || 0 === l.keyId ? [l.keyId] : []));
            if (r && (o = l.related instanceof t.Collection ? l.related.models : [l.related], n.each(o, function(e) {
                (e.id || 0 === e.id) && u.push(e.id)
            })), u && u.length) {
                var c = [];
                if (o = n.map(u, function(e) {
                    var t = l.relatedModel.findModel(e);
                    if (!t) {
                        var n = {};
                        n[l.relatedModel.prototype.idAttribute] = e, t = l.relatedModel.findOrCreate(n, i), c.push(t)
                    }
                    return t
                }, this), l.related instanceof t.Collection && n.isFunction(l.related.url) && (s = l.related.url(o)), s && s !== l.related.url()) {
                    var h = n.defaults({
                        error: function() {
                            var e = arguments;
                            n.each(c, function(t) {
                                t.trigger("destroy", t, t.collection, i), i.error && i.error.apply(t, e)
                            })
                        },
                        url: s
                    }, i);
                    a = [l.related.fetch(h)]
                } else
                    a = n.map(o, function(e) {
                        var t = n.defaults({
                            error: function() {
                                n.contains(c, e) && (e.trigger("destroy", e, e.collection, i), i.error && i.error.apply(e, arguments))
                            }
                        }, i);
                        return e.fetch(t)
                    }, this)
            }
            return a
        },
        get: function(e) {
            var i = t.Model.prototype.get.call(this, e);
            if (!this.dotNotation||-1 === e.indexOf("."))
                return i;
            var r = e.split("."), o = n.reduce(r, function(e, i) {
                if (n.isNull(e) || n.isUndefined(e))
                    return void 0;
                if (e instanceof t.Model)
                    return t.Model.prototype.get.call(e, i);
                if (e instanceof t.Collection)
                    return t.Collection.prototype.at.call(e, i);
                throw new Error("Attribute must be an instanceof Backbone.Model or Backbone.Collection. Is: " + e + ", currentSplit: " + i)
            }, this);
            if (void 0 !== i && void 0 !== o)
                throw new Error("Ambiguous result for '" + e + "'. direct result: " + i + ", dotNotation: " + o);
            return i || o
        },
        _getNewId: function(e) {
            var t, n = this, i = null, r = "", o=!1, s = n.keydefs.PRIMARY;
            return s && (s.forEach(function(i) {
                t = e[i] || n.attributes && n.attributes[i], t || 0 === t ? r += (r ? n.compoundKeyDelim : "") + (e[i] || n.attributes && n.attributes[i]) : o=!0
            }), o || (i = r)), i || (i = e && n.idAttribute in e && e[n.idAttribute]), i
        },
        set: function(e, i, r) {
            t.Relational.eventQueue.block();
            var o;
            n.isObject(e) || null == e ? (o = e, r = i) : (o = {}, o[e] = i);
            try {
                var s = this.id, a = this._getNewId(o);
                t.Relational.store.checkId(this, a);
                var l = t.Model.prototype.set.apply(this, arguments);
                a && (this.id = a), this._isInitialized || this.isLocked() ? a && a !== s && t.Relational.store.update(this) : (this.constructor.initializeModelHierarchy(), (a || 0 === a) && t.Relational.store.register(this), this.initializeRelations(r)), o && this.updateRelations(o, r)
            } finally {
                t.Relational.eventQueue.unblock()
            }
            return l
        },
        clone: function() {
            var e = n.clone(this.attributes);
            return n.isUndefined(e[this.idAttribute]) || (e[this.idAttribute] = null), n.each(this.getRelations(), function(t) {
                delete e[t.key]
            }), new this.constructor(e)
        },
        toJSON: function(e) {
            if (this.isLocked())
                return this.id;
            this.acquire();
            var i = t.Model.prototype.toJSON.call(this, e);
            return !this.constructor._superModel || this.constructor._subModelTypeAttribute in i || (i[this.constructor._subModelTypeAttribute] = this.constructor._subModelTypeValue), n.each(this._relations, function(r) {
                var o = i[r.key], s = r.options.includeInJSON, a = null;
                s===!0 ? o && n.isFunction(o.toJSON) && (a = o.toJSON(e)) : n.isString(s) ? (o instanceof t.Collection ? a = o.pluck(s) : o instanceof t.Model && (a = o.get(s)), s === r.relatedModel.prototype.idAttribute && (r instanceof t.HasMany ? a = a.concat(r.keyIds) : r instanceof t.HasOne && (a = a || r.keyId, a || n.isObject(r.keyContents) || (a = r.keyContents || null)))) : n.isArray(s) ? o instanceof t.Collection ? (a = [], o.each(function(e) {
                    var t = {};
                    n.each(s, function(n) {
                        t[n] = e.get(n)
                    }), a.push(t)
                })) : o instanceof t.Model && (a = {}, n.each(s, function(e) {
                    a[e] = o.get(e)
                })) : delete i[r.key], s && (i[r.keyDestination] = a), r.keyDestination !== r.key && delete i[r.key]
            }), this.release(), i
        }
    }, {
        setup: function() {
            return this.prototype.relations = (this.prototype.relations || []).slice(0), this._subModels = {}, this._superModel = null, this.prototype.hasOwnProperty("subModelTypes") ? t.Relational.store.addSubModels(this.prototype.subModelTypes, this) : this.prototype.subModelTypes = null, n.each(this.prototype.relations || [], function(e) {
                if (e.model || (e.model = this), e.reverseRelation && e.model === this) {
                    var i=!0;
                    if (n.isString(e.relatedModel)) {
                        var r = t.Relational.store.getObjectByName(e.relatedModel);
                        i = r && r.prototype instanceof t.RelationalModel
                    }
                    i ? t.Relational.store.initializeRelation(null, e) : n.isString(e.relatedModel) && t.Relational.store.addOrphanRelation(e)
                }
            }, this), this
        },
        build: function(e, t) {
            this.initializeModelHierarchy();
            var n = this._findSubModelType(this, e) || this;
            return new n(e, t)
        },
        _findSubModelType: function(e, t) {
            if (e._subModels && e.prototype.subModelTypeAttribute in t) {
                var n = t[e.prototype.subModelTypeAttribute], i = e._subModels[n];
                if (i)
                    return i;
                for (n in e._subModels)
                    if (i = this._findSubModelType(e._subModels[n], t))
                        return i
            }
            return null
        },
        initializeModelHierarchy: function() {
            if (this.inheritRelations(), this.prototype.subModelTypes) {
                var e = n.keys(this._subModels), i = n.omit(this.prototype.subModelTypes, e);
                n.each(i, function(e) {
                    var n = t.Relational.store.getObjectByName(e);
                    n && n.initializeModelHierarchy()
                })
            }
        },
        inheritRelations: function() {
            if (n.isUndefined(this._superModel) || n.isNull(this._superModel))
                if (t.Relational.store.setupSuperModel(this), this._superModel) {
                    if (this._superModel.inheritRelations(), this._superModel.prototype.relations) {
                        var e = n.filter(this._superModel.prototype.relations || [], function(e) {
                            return !n.any(this.prototype.relations || [], function(t) {
                                return e.relatedModel === t.relatedModel && e.key === t.key
                            }, this)
                        }, this);
                        this.prototype.relations = e.concat(this.prototype.relations)
                    }
                } else
                    this._superModel=!1
            },
        findOrCreate: function(e, t) {
            t || (t = {});
            var i = n.isObject(e) && t.parse && this.prototype.parse ? this.prototype.parse(n.clone(e)): e, r = this.findModel(i);
            return n.isObject(e) && (r && t.merge!==!1 ? (delete t.collection, delete t.url, r.set(i, t)) : r || t.create===!1 || (r = this.build(e, t))), r
        },
        find: function(e, t) {
            return t || (t = {}), t.create=!1, this.findOrCreate(e, t)
        },
        findModel: function(e) {
            return t.Relational.store.find(this, e)
        }
    }), n.extend(t.RelationalModel.prototype, t.Semaphore);
    var i = t.Collection.prototype.__initialize = t.Collection.prototype.initialize;
    t.Collection.prototype.initialize = function() {
        i.apply(this, arguments), this.createSavepoint(), this.on("sync", this.createSavepoint, this)
    }, t.Collection.prototype.createSavepoint = function() {
        return this._added = [], this._removed = [], this
    }, t.Collection.prototype.rollback = function(e) {
        return e = e || {}, this.add(this._removed, {
            silent: !0
        }), n.each(this.models, function(e) {
            e.rollback()
        }), this.remove(this._added, {
            silent: !0
        }), this.createSavepoint(), e.silent || this.trigger("rollback", this, e), this
    }, t.Collection.prototype.hasChangedDeepSinceSavepoint = function() {
        return this._removed.length || this._added.length?!0 : !!n.find(this.models, function(e) {
            return e.hasChangedDeepSinceSavepoint()
        })
    }, t.Collection.prototype.commit = function(e) {
        var i = [];
        return this.hasChangedDeepSinceSavepoint() && (e = e || {}, n.each(this._removed, function(e) {
            i.push(e.destroy())
        }), n.each(this.models, function(e) {
            i.push(e.commit())
        }), this.createSavepoint(), e.silent || this.trigger("commit", this, e)), t.$.when.apply(t.$, i)
    }, t.Collection.prototype._class = "Backbone.Collection", t.Collection.prototype.__prepareModel = t.Collection.prototype._prepareModel, t.Collection.prototype._prepareModel = function(e, i) {
        var r;
        return e instanceof t.Model ? (e.collection || (e.collection = this), r = e) : (i = i ? n.clone(i) : {}, i.collection = this, r = "undefined" != typeof this.model.findOrCreate ? this.model.findOrCreate(e, i) : new this.model(e, i), r && r.validationError && (this.trigger("invalid", this, e, i), r=!1)), r
    };
    var r = t.Collection.prototype.__set = t.Collection.prototype.set;
    t.Collection.prototype.set = function(e, i) {
        if (!(this.model.prototype instanceof t.RelationalModel))
            return r.apply(this, arguments);
        i && i.parse && (e = this.parse(e, i));
        var o=!n.isArray(e), s = [], a = [];
        e = o ? e ? [e] : [] : n.clone(e), n.each(e, function(e) {
            e instanceof t.Model || (e = t.Collection.prototype._prepareModel.call(this, e, i)), e && (a.push(e), this.get(e) || this.get(e.cid) ? null != e.id && (this._byId[e.id] = e) : s.push(e))
        }, this), a = o ? a.length ? a[0] : null : a;
        var l = r.call(this, a, n.defaults({
            parse: !1
        }, i));
        return n.each(s, function(e) {
            (this.get(e) || this.get(e.cid)) && this.trigger("relational:add", e, this, i)
        }, this), l
    };
    var o = t.Collection.prototype.__get = t.Collection.prototype.get;
    t.Collection.prototype.get = function(e) {
        if (!(this.model.prototype instanceof t.RelationalModel))
            return o.apply(this, arguments);
        if (null == e)
            return void 0;
        var n = t.Relational.store.resolveIdForItem(this.model, e);
        return this._byId[null != n ? n: e.cid || e]
    };
    var s = t.Collection.prototype.__add = t.Collection.prototype.add;
    t.Collection.prototype.add = function(e, i) {
        if (!(this.model.prototype instanceof t.RelationalModel))
            return s.apply(this, arguments);
        var r = s.call(this, e, n.defaults(i || {}, {
            add: !0,
            merge: !1,
            remove: !1
        }));
        return this._added = this._added.concat(r), r
    };
    var a = t.Collection.prototype.__remove = t.Collection.prototype.remove;
    t.Collection.prototype.remove = function(e, i) {
        if (!(this.model.prototype instanceof t.RelationalModel))
            return this._removed = this._removed.concat(e), a.apply(this, arguments);
        var r=!n.isArray(e), o = [];
        e = r ? e ? [e] : [] : n.clone(e), i || (i = {}), n.each(e, function(e) {
            e = this.get(e) || e && this.get(e.cid), e && o.push(e)
        }, this);
        var s = a.call(this, r ? o.length ? o[0] : null : o, i);
        return n.each(o, function(e) {
            this.trigger("relational:remove", e, this, i)
        }, this), this._removed = this._removed.concat(o), s
    };
    var l = t.Collection.prototype.__reset = t.Collection.prototype.reset;
    t.Collection.prototype.reset = function(e, i) {
        i = n.extend({
            merge: !0
        }, i);
        var r = l.call(this, e, i);
        return this._added = [], this._removed = [], this.model.prototype instanceof t.RelationalModel && this.trigger("relational:reset", this, i), this.createSavepoint(), r
    };
    var u = t.Collection.prototype.__sort = t.Collection.prototype.sort;
    t.Collection.prototype.sort = function(e) {
        var n = u.call(this, e);
        return this.model.prototype instanceof t.RelationalModel && this.trigger("relational:reset", this, e), n
    };
    var c = t.Collection.prototype.__trigger = t.Collection.prototype.trigger;
    t.Collection.prototype.trigger = function(e) {
        if (!(this.model.prototype instanceof t.RelationalModel))
            return c.apply(this, arguments);
        if ("add" === e || "remove" === e || "reset" === e || "sort" === e) {
            var i = this, r = arguments;
            n.isObject(r[3]) && (r = n.toArray(r), r[3] = n.clone(r[3])), t.Relational.eventQueue.add(function() {
                c.apply(i, r)
            })
        } else
            c.apply(this, arguments);
        return this
    }, t.RelationalModel.extend = function() {
        var e = t.Model.extend.apply(this, arguments);
        return e.setup(this), e
    }
}), function(e, t) {
    if ("object" == typeof exports) {
        var n = require("underscore"), i = require("backbone");
        module.exports = t(n, i)
    } else
        "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone.wreqr", ["underscore", "backbone"], t)
}(this, function(e, t) {
    return t.Wreqr = function(e, t, n) {
        var i = {};
        return i.Handlers = function(e, t) {
            var n = function(e) {
                this.options = e, this._wreqrHandlers = {}, t.isFunction(this.initialize) && this.initialize(e)
            };
            return n.extend = e.Model.extend, t.extend(n.prototype, e.Events, {
                setHandlers: function(e) {
                    t.each(e, function(e, n) {
                        var i = null;
                        t.isObject(e)&&!t.isFunction(e) && (i = e.context, e = e.callback), this.setHandler(n, e, i)
                    }, this)
                },
                setHandler: function(e, t, n) {
                    var i = {
                        callback: t,
                        context: n
                    };
                    this._wreqrHandlers[e] = i, this.trigger("handler:add", e, t, n)
                },
                hasHandler: function(e) {
                    return !!this._wreqrHandlers[e]
                },
                getHandler: function(e) {
                    var t = this._wreqrHandlers[e];
                    if (!t)
                        throw new Error("Handler not found for '" + e + "'");
                    return function() {
                        var e = Array.prototype.slice.apply(arguments);
                        return t.callback.apply(t.context, e)
                    }
                },
                removeHandler: function(e) {
                    delete this._wreqrHandlers[e]
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }
            }), n
        }(e, n), i.CommandStorage = function() {
            var t = function(e) {
                this.options = e, this._commands = {}, n.isFunction(this.initialize) && this.initialize(e)
            };
            return n.extend(t.prototype, e.Events, {
                getCommands: function(e) {
                    var t = this._commands[e];
                    return t || (t = {
                        command: e,
                        instances: []
                    }, this._commands[e] = t), t
                },
                addCommand: function(e, t) {
                    var n = this.getCommands(e);
                    n.instances.push(t)
                },
                clearCommands: function(e) {
                    var t = this.getCommands(e);
                    t.instances = []
                }
            }), t
        }(), i.Commands = function(e) {
            return e.Handlers.extend({
                storageType: e.CommandStorage,
                constructor: function(t) {
                    this.options = t || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                    var n = Array.prototype.slice.call(arguments);
                    e.Handlers.prototype.constructor.apply(this, n)
                },
                execute: function(e, t) {
                    e = arguments[0], t = Array.prototype.slice.call(arguments, 1), this.hasHandler(e) ? this.getHandler(e).apply(this, t) : this.storage.addCommand(e, t)
                },
                _executeCommands: function(e, t, i) {
                    var r = this.storage.getCommands(e);
                    n.each(r.instances, function(e) {
                        t.apply(i, e)
                    }), this.storage.clearCommands(e)
                },
                _initializeStorage: function(e) {
                    var t, i = e.storageType || this.storageType;
                    t = n.isFunction(i) ? new i : i, this.storage = t
                }
            })
        }(i), i.RequestResponse = function(e) {
            return e.Handlers.extend({
                request: function() {
                    var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
                    return this.getHandler(e).apply(this, t)
                }
            })
        }(i), i.EventAggregator = function(e, t) {
            var n = function() {};
            return n.extend = e.Model.extend, t.extend(n.prototype, e.Events), n
        }(e, n), i
    }(t, t.Marionette, e), t.Wreqr
}), function(e, t) {
    if ("object" == typeof exports) {
        var n = require("underscore"), i = require("backbone");
        module.exports = t(n, i)
    } else
        "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone.babysitter", ["underscore", "backbone"], t)
}(this, function(e, t) {
    "option strict";
    return t.ChildViewContainer = function(e, t) {
        var n = function(e) {
            this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), t.each(e, this.add, this)
        };
        t.extend(n.prototype, {
            add: function(e, t) {
                var n = e.cid;
                this._views[n] = e, e.model && (this._indexByModel[e.model.cid] = n), t && (this._indexByCustom[t] = n), this._updateLength()
            },
            findByModel: function(e) {
                return this.findByModelCid(e.cid)
            },
            findByModelCid: function(e) {
                var t = this._indexByModel[e];
                return this.findByCid(t)
            },
            findByCustom: function(e) {
                var t = this._indexByCustom[e];
                return this.findByCid(t)
            },
            findByIndex: function(e) {
                return t.values(this._views)[e]
            },
            findByCid: function(e) {
                return this._views[e]
            },
            remove: function(e) {
                var n = e.cid;
                e.model && delete this._indexByModel[e.model.cid], t.any(this._indexByCustom, function(e, t) {
                    return e === n ? (delete this._indexByCustom[t], !0) : void 0
                }, this), delete this._views[n], this._updateLength()
            },
            call: function(e) {
                this.apply(e, t.tail(arguments))
            },
            apply: function(e, n) {
                t.each(this._views, function(i) {
                    t.isFunction(i[e]) && i[e].apply(i, n || [])
                })
            },
            _updateLength: function() {
                this.length = t.size(this._views)
            }
        });
        var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        return t.each(i, function(e) {
            n.prototype[e] = function() {
                var n = t.values(this._views), i = [n].concat(t.toArray(arguments));
                return t[e].apply(t, i)
            }
        }), n
    }(t, e), t.ChildViewContainer
}), function(e, t) {
    if ("object" == typeof exports) {
        var n = require("underscore"), i = require("backbone"), r = require("backbone.wreqr"), o = require("backbone.babysitter");
        module.exports = t(n, i, r, o)
    } else
        "function" == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define("backbone-marionette-vendor", ["underscore", "backbone", "backbone.wreqr", "backbone.babysitter"], t)
}(this, function(e, t) {
    return !function(e, t, n) {
        function i(e) {
            return s.call(e)
        }
        function r(e, t) {
            var n = new Error(e);
            throw n.name = t || "Error", n
        }
        var o = {};
        t.Marionette = o, o.$ = t.$;
        var s = Array.prototype.slice;
        return o.extend = t.Model.extend, o.getOption = function(e, t) {
            if (e && t) {
                var n;
                return n = e.options && t in e.options && void 0 !== e.options[t] ? e.options[t] : e[t]
            }
        }, o.normalizeMethods = function(e) {
            var t, i = {};
            return n.each(e, function(e, r) {
                t = e, n.isFunction(t) || (t = this[t]), t && (i[r] = t)
            }, this), i
        }, o.triggerMethod = function() {
            function e(e, t, n) {
                return n.toUpperCase()
            }
            var t = /(^|:)(\w)/gi, i = function(i) {
                var r = "on" + i.replace(t, e), o = this[r];
                return n.isFunction(this.trigger) && this.trigger.apply(this, arguments), n.isFunction(o) ? o.apply(this, n.tail(arguments)) : void 0
            };
            return i
        }(), o.MonitorDOMRefresh = function(e) {
            function t(e) {
                e._isShown=!0, r(e)
            }
            function i(e) {
                e._isRendered=!0, r(e)
            }
            function r(e) {
                e._isShown && e._isRendered && o(e) && n.isFunction(e.triggerMethod) && e.triggerMethod("dom:refresh")
            }
            function o(t) {
                return e.contains(t.el)
            }
            return function(e) {
                e.listenTo(e, "show", function() {
                    t(e)
                }), e.listenTo(e, "render", function() {
                    i(e)
                })
            }
        }(document.documentElement), function(e) {
            function t(e, t, i, o) {
                var s = o.split(/\s+/);
                n.each(s, function(n) {
                    var o = e[n];
                    o || r("Method '" + n + "' was configured as an event handler, but does not exist."), e.listenTo(t, i, o, e)
                })
            }
            function i(e, t, n, i) {
                e.listenTo(t, n, i, e)
            }
            function o(e, t, i, r) {
                var o = r.split(/\s+/);
                n.each(o, function(n) {
                    var r = e[n];
                    e.stopListening(t, i, r, e)
                })
            }
            function s(e, t, n, i) {
                e.stopListening(t, n, i, e)
            }
            function a(e, t, i, r, o) {
                t && i && (n.isFunction(i) && (i = i.call(e)), n.each(i, function(i, s) {
                    n.isFunction(i) ? r(e, t, s, i) : o(e, t, s, i)
                }))
            }
            e.bindEntityEvents = function(e, n, r) {
                a(e, n, r, i, t)
            }, e.unbindEntityEvents = function(e, t, n) {
                a(e, t, n, s, o)
            }
        }(o), o.Callbacks = function() {
            this._deferred = o.$.Deferred(), this._callbacks = []
        }, n.extend(o.Callbacks.prototype, {
            add: function(e, t) {
                this._callbacks.push({
                    cb: e,
                    ctx: t
                }), this._deferred.done(function(n, i) {
                    t && (n = t), e.call(n, i)
                })
            },
            run: function(e, t) {
                this._deferred.resolve(t, e)
            },
            reset: function() {
                var e = this._callbacks;
                this._deferred = o.$.Deferred(), this._callbacks = [], n.each(e, function(e) {
                    this.add(e.cb, e.ctx)
                }, this)
            }
        }), o.Controller = function(e) {
            this.triggerMethod = o.triggerMethod, this.options = e || {}, n.isFunction(this.initialize) && this.initialize(this.options)
        }, o.Controller.extend = o.extend, n.extend(o.Controller.prototype, t.Events, {
            close: function() {
                this.stopListening(), this.triggerMethod("close"), this.unbind()
            }
        }), o.Region = function(e) {
            if (this.options = e || {}, this.el = o.getOption(this, "el"), !this.el) {
                var t = new Error("An 'el' must be specified for a region.");
                throw t.name = "NoElError", t
            }
            if (this.initialize) {
                var n = Array.prototype.slice.apply(arguments);
                this.initialize.apply(this, n)
            }
        }, n.extend(o.Region, {
            buildRegion: function(e, t) {
                var i = "string" == typeof e, r = "string" == typeof e.selector, o = "undefined" == typeof e.regionType, s = "function" == typeof e;
                if (!s&&!i&&!r)
                    throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
                var a, l;
                i && (a = e), e.selector && (a = e.selector, delete e.selector), s && (l = e), !s && o && (l = t), e.regionType && (l = e.regionType, delete e.regionType), (i || s) && (e = {}), e.el = a;
                var u = new l(e);
                return e.parentEl && (u.getEl = function(t) {
                    var i = e.parentEl;
                    return n.isFunction(i) && (i = i()), i.find(t)
                }), u
            }
        }), n.extend(o.Region.prototype, t.Events, {
            show: function(e) {
                this.ensureEl();
                var t = e.isClosed || n.isUndefined(e.$el), i = e !== this.currentView;
                i && this.close(), e.render(), (i || t) && this.open(e), this.currentView = e, o.triggerMethod.call(this, "show", e), o.triggerMethod.call(e, "show")
            },
            ensureEl: function() {
                this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
            },
            getEl: function(e) {
                return o.$(e)
            },
            open: function(e) {
                this.$el.empty().append(e.el)
            },
            close: function() {
                var e = this.currentView;
                e&&!e.isClosed && (e.close ? e.close() : e.remove && e.remove(), o.triggerMethod.call(this, "close", e), delete this.currentView)
            },
            attachView: function(e) {
                this.currentView = e
            },
            reset: function() {
                this.close(), delete this.$el
            }
        }), o.Region.extend = o.extend, o.RegionManager = function(e) {
            var t = e.Controller.extend({
                constructor: function(t) {
                    this._regions = {}, e.Controller.prototype.constructor.call(this, t)
                },
                addRegions: function(e, t) {
                    var i = {};
                    return n.each(e, function(e, r) {
                        "string" == typeof e && (e = {
                            selector: e
                        }), e.selector && (e = n.defaults({}, e, t));
                        var o = this.addRegion(r, e);
                        i[r] = o
                    }, this), i
                },
                addRegion: function(t, i) {
                    var r, o = n.isObject(i), s = n.isString(i), a=!!i.selector;
                    return r = s || o && a ? e.Region.buildRegion(i, e.Region) : n.isFunction(i) ? e.Region.buildRegion(i, e.Region) : i, this._store(t, r), this.triggerMethod("region:add", t, r), r
                },
                get: function(e) {
                    return this._regions[e]
                },
                removeRegion: function(e) {
                    var t = this._regions[e];
                    this._remove(e, t)
                },
                removeRegions: function() {
                    n.each(this._regions, function(e, t) {
                        this._remove(t, e)
                    }, this)
                },
                closeRegions: function() {
                    n.each(this._regions, function(e) {
                        e.close()
                    }, this)
                },
                close: function() {
                    this.removeRegions();
                    var t = Array.prototype.slice.call(arguments);
                    e.Controller.prototype.close.apply(this, t)
                },
                _store: function(e, t) {
                    this._regions[e] = t, this._setLength()
                },
                _remove: function(e, t) {
                    t.close(), delete this._regions[e], this._setLength(), this.triggerMethod("region:remove", e, t)
                },
                _setLength: function() {
                    this.length = n.size(this._regions)
                }
            }), i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            return n.each(i, function(e) {
                t.prototype[e] = function() {
                    var t = n.values(this._regions), i = [t].concat(n.toArray(arguments));
                    return n[e].apply(n, i)
                }
            }), t
        }(o), o.TemplateCache = function(e) {
            this.templateId = e
        }, n.extend(o.TemplateCache, {
            templateCaches: {},
            get: function(e) {
                var t = this.templateCaches[e];
                return t || (t = new o.TemplateCache(e), this.templateCaches[e] = t), t.load()
            },
            clear: function() {
                var e, t = i(arguments), n = t.length;
                if (n > 0)
                    for (e = 0; n > e; e++)
                        delete this.templateCaches[t[e]];
                else
                    this.templateCaches = {}
            }
        }), n.extend(o.TemplateCache.prototype, {
            load: function() {
                if (this.compiledTemplate)
                    return this.compiledTemplate;
                var e = this.loadTemplate(this.templateId);
                return this.compiledTemplate = this.compileTemplate(e), this.compiledTemplate
            },
            loadTemplate: function(e) {
                var t = o.$(e).html();
                return t && 0 !== t.length || r("Could not find template: '" + e + "'", "NoTemplateError"), t
            },
            compileTemplate: function(e) {
                return n.template(e)
            }
        }), o.Renderer = {
            render: function(e, t) {
                if (!e) {
                    var n = new Error("Cannot render the template since it's false, null or undefined.");
                    throw n.name = "TemplateNotFoundError", n
                }
                var i;
                return i = "function" == typeof e ? e : o.TemplateCache.get(e), i(t)
            }
        }, o.View = t.View.extend({
            constructor: function(e) {
                n.bindAll(this, "render");
                var i = Array.prototype.slice.apply(arguments);
                this.options = n.extend({}, n.result(this, "options"), n.isFunction(e) ? e.call(this) : e), this.events = this.normalizeUIKeys(n.result(this, "events")), t.View.prototype.constructor.apply(this, i), o.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled, this)
            },
            triggerMethod: o.triggerMethod,
            normalizeMethods: o.normalizeMethods,
            getTemplate: function() {
                return o.getOption(this, "template")
            },
            mixinTemplateHelpers: function(e) {
                e = e || {};
                var t = o.getOption(this, "templateHelpers");
                return n.isFunction(t) && (t = t.call(this)), n.extend(e, t)
            },
            normalizeUIKeys: function(e) {
                return "undefined" != typeof e ? (n.each(n.keys(e), function(t) {
                    var n = t.split("@ui.");
                    2 === n.length && (e[n[0] + this.ui[n[1]]] = e[t], delete e[t])
                }, this), e) : void 0
            },
            configureTriggers: function() {
                if (this.triggers) {
                    var e = {}, t = this.normalizeUIKeys(n.result(this, "triggers"));
                    return n.each(t, function(t, i) {
                        var r = n.isObject(t), o = r ? t.event: t;
                        e[i] = function(e) {
                            if (e) {
                                var n = e.preventDefault, i = e.stopPropagation, s = r ? t.preventDefault: n, a = r ? t.stopPropagation: i;
                                s && n && n.apply(e), a && i && i.apply(e)
                            }
                            var l = {
                                view: this,
                                model: this.model,
                                collection: this.collection
                            };
                            this.triggerMethod(o, l)
                        }
                    }, this), e
                }
            },
            delegateEvents: function(e) {
                this._delegateDOMEvents(e), o.bindEntityEvents(this, this.model, o.getOption(this, "modelEvents")), o.bindEntityEvents(this, this.collection, o.getOption(this, "collectionEvents"))
            },
            _delegateDOMEvents: function(e) {
                e = e || this.events, n.isFunction(e) && (e = e.call(this));
                var i = {}, r = this.configureTriggers();
                n.extend(i, e, r), t.View.prototype.delegateEvents.call(this, i)
            },
            undelegateEvents: function() {
                var e = Array.prototype.slice.call(arguments);
                t.View.prototype.undelegateEvents.apply(this, e), o.unbindEntityEvents(this, this.model, o.getOption(this, "modelEvents")), o.unbindEntityEvents(this, this.collection, o.getOption(this, "collectionEvents"))
            },
            onShowCalled: function() {},
            close: function() {
                if (!this.isClosed) {
                    var e = this.triggerMethod("before:close");
                    e!==!1 && (this.isClosed=!0, this.triggerMethod("close"), this.unbindUIElements(), this.remove())
                }
            },
            bindUIElements: function() {
                if (this.ui) {
                    this._uiBindings || (this._uiBindings = this.ui);
                    var e = n.result(this, "_uiBindings");
                    this.ui = {}, n.each(n.keys(e), function(t) {
                        var n = e[t];
                        this.ui[t] = this.$(n)
                    }, this)
                }
            },
            unbindUIElements: function() {
                this.ui && this._uiBindings && (n.each(this.ui, function(e, t) {
                    delete this.ui[t]
                }, this), this.ui = this._uiBindings, delete this._uiBindings)
            }
        }), o.ItemView = o.View.extend({
            constructor: function() {
                o.View.prototype.constructor.apply(this, i(arguments))
            },
            serializeData: function() {
                var e = {};
                return this.model ? e = this.model.toJSON() : this.collection && (e = {
                    items: this.collection.toJSON()
                }), e
            },
            render: function() {
                this.isClosed=!1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
                var e = this.serializeData();
                e = this.mixinTemplateHelpers(e);
                var t = this.getTemplate(), n = o.Renderer.render(t, e);
                return this.$el.html(n), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
            },
            close: function() {
                this.isClosed || (this.triggerMethod("item:before:close"), o.View.prototype.close.apply(this, i(arguments)), this.triggerMethod("item:closed"))
            }
        }), o.CollectionView = o.View.extend({
            itemViewEventPrefix: "itemview",
            constructor: function() {
                this._initChildViewStorage(), o.View.prototype.constructor.apply(this, i(arguments)), this._initialEvents(), this.initRenderBuffer()
            },
            initRenderBuffer: function() {
                this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
            },
            startBuffering: function() {
                this.initRenderBuffer(), this.isBuffering=!0
            },
            endBuffering: function() {
                this.isBuffering=!1, this.appendBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
            },
            _triggerShowBufferedChildren: function() {
                this._isShown && (n.each(this._bufferedChildren, function(e) {
                    o.triggerMethod.call(e, "show")
                }), this._bufferedChildren = [])
            },
            _initialEvents: function() {
                this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this))
            },
            addChildView: function(e) {
                this.closeEmptyView();
                var t = this.getItemView(e), n = this.collection.indexOf(e);
                this.addItemView(e, t, n)
            },
            onShowCalled: function() {
                this.children.each(function(e) {
                    o.triggerMethod.call(e, "show")
                })
            },
            triggerBeforeRender: function() {
                this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
            },
            triggerRendered: function() {
                this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
            },
            render: function() {
                return this.isClosed=!1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
            },
            _renderChildren: function() {
                this.startBuffering(), this.closeEmptyView(), this.closeChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : this.showCollection(), this.endBuffering()
            },
            showCollection: function() {
                var e;
                this.collection.each(function(t, n) {
                    e = this.getItemView(t), this.addItemView(t, e, n)
                }, this)
            },
            showEmptyView: function() {
                var e = this.getEmptyView();
                if (e&&!this._showingEmptyView) {
                    this._showingEmptyView=!0;
                    var n = new t.Model;
                    this.addItemView(n, e, 0)
                }
            },
            closeEmptyView: function() {
                this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
            },
            getEmptyView: function() {
                return o.getOption(this, "emptyView")
            },
            getItemView: function() {
                var e = o.getOption(this, "itemView");
                return e || r("An `itemView` must be specified", "NoItemViewError"), e
            },
            addItemView: function(e, t, i) {
                var r = o.getOption(this, "itemViewOptions");
                n.isFunction(r) && (r = r.call(this, e, i));
                var s = this.buildItemView(e, t, r);
                return this.addChildViewEventForwarding(s), this.triggerMethod("before:item:added", s), this.children.add(s), this.renderItemView(s, i), this._isShown&&!this.isBuffering && o.triggerMethod.call(s, "show"), this.triggerMethod("after:item:added", s), s
            },
            addChildViewEventForwarding: function(e) {
                var t = o.getOption(this, "itemViewEventPrefix");
                this.listenTo(e, "all", function() {
                    var r = i(arguments), s = r[0], a = this.normalizeMethods(this.getItemEvents());
                    r[0] = t + ":" + s, r.splice(1, 0, e), "undefined" != typeof a && n.isFunction(a[s]) && a[s].apply(this, r), o.triggerMethod.apply(this, r)
                }, this)
            },
            getItemEvents: function() {
                return n.isFunction(this.itemEvents) ? this.itemEvents.call(this) : this.itemEvents
            },
            renderItemView: function(e, t) {
                e.render(), this.appendHtml(this, e, t)
            },
            buildItemView: function(e, t, i) {
                var r = n.extend({
                    model: e
                }, i);
                return new t(r)
            },
            removeItemView: function(e) {
                var t = this.children.findByModel(e);
                this.removeChildView(t), this.checkEmpty()
            },
            removeChildView: function(e) {
                e && (this.stopListening(e), e.close ? e.close() : e.remove && e.remove(), this.children.remove(e)), this.triggerMethod("item:removed", e)
            },
            isEmpty: function() {
                return !this.collection || 0 === this.collection.length
            },
            checkEmpty: function() {
                this.isEmpty(this.collection) && this.showEmptyView()
            },
            appendBuffer: function(e, t) {
                e.$el.append(t)
            },
            appendHtml: function(e, t) {
                e.isBuffering ? (e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t)) : e.$el.append(t.el)
            },
            _initChildViewStorage: function() {
                this.children = new t.ChildViewContainer
            },
            close: function() {
                this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), o.View.prototype.close.apply(this, i(arguments)))
            },
            closeChildren: function() {
                this.children.each(function(e) {
                    this.removeChildView(e)
                }, this), this.checkEmpty()
            }
        }), o.CompositeView = o.CollectionView.extend({
            constructor: function() {
                o.CollectionView.prototype.constructor.apply(this, i(arguments))
            },
            _initialEvents: function() {
                this.once("render", function() {
                    this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this))
                })
            },
            getItemView: function() {
                var e = o.getOption(this, "itemView") || this.constructor;
                return e || r("An `itemView` must be specified", "NoItemViewError"), e
            },
            serializeData: function() {
                var e = {};
                return this.model && (e = this.model.toJSON()), e
            },
            render: function() {
                this.isRendered=!0, this.isClosed=!1, this.resetItemViewContainer(), this.triggerBeforeRender();
                var e = this.renderModel();
                return this.$el.html(e), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
            },
            _renderChildren: function() {
                this.isRendered && (this.triggerMethod("composite:collection:before:render"), o.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
            },
            renderModel: function() {
                var e = {};
                e = this.serializeData(), e = this.mixinTemplateHelpers(e);
                var t = this.getTemplate();
                return o.Renderer.render(t, e)
            },
            appendBuffer: function(e, t) {
                var n = this.getItemViewContainer(e);
                n.append(t)
            },
            appendHtml: function(e, t) {
                if (e.isBuffering)
                    e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t);
                else {
                    var n = this.getItemViewContainer(e);
                    n.append(t.el)
                }
            },
            getItemViewContainer: function(e) {
                if ("$itemViewContainer"in e)
                    return e.$itemViewContainer;
                var t, i = o.getOption(e, "itemViewContainer");
                if (i) {
                    var s = n.isFunction(i) ? i.call(this): i;
                    t = e.$(s), t.length <= 0 && r("The specified `itemViewContainer` was not found: " + e.itemViewContainer, "ItemViewContainerMissingError")
                } else
                    t = e.$el;
                return e.$itemViewContainer = t, t
            },
            resetItemViewContainer: function() {
                this.$itemViewContainer && delete this.$itemViewContainer
            }
        }), o.Layout = o.ItemView.extend({
            regionType: o.Region,
            constructor: function(e) {
                e = e || {}, this._firstRender=!0, this._initializeRegions(e), o.ItemView.prototype.constructor.call(this, e)
            },
            render: function() {
                this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender=!1 : this.isClosed || this._reInitializeRegions();
                var e = Array.prototype.slice.apply(arguments), t = o.ItemView.prototype.render.apply(this, e);
                return t
            },
            close: function() {
                if (!this.isClosed) {
                    this.regionManager.close();
                    var e = Array.prototype.slice.apply(arguments);
                    o.ItemView.prototype.close.apply(this, e)
                }
            },
            addRegion: function(e, t) {
                var n = {};
                return n[e] = t, this._buildRegions(n)[e]
            },
            addRegions: function(e) {
                return this.regions = n.extend({}, this.regions, e), this._buildRegions(e)
            },
            removeRegion: function(e) {
                return delete this.regions[e], this.regionManager.removeRegion(e)
            },
            _buildRegions: function(e) {
                var t = this, n = {
                    regionType: o.getOption(this, "regionType"),
                    parentEl: function() {
                        return t.$el
                    }
                };
                return this.regionManager.addRegions(e, n)
            },
            _initializeRegions: function(e) {
                var t;
                this._initRegionManager(), t = n.isFunction(this.regions) ? this.regions(e) : this.regions || {}, this.addRegions(t)
            },
            _reInitializeRegions: function() {
                this.regionManager.closeRegions(), this.regionManager.each(function(e) {
                    e.reset()
                })
            },
            _initRegionManager: function() {
                this.regionManager = new o.RegionManager, this.listenTo(this.regionManager, "region:add", function(e, t) {
                    this[e] = t, this.trigger("region:add", e, t)
                }), this.listenTo(this.regionManager, "region:remove", function(e, t) {
                    delete this[e], this.trigger("region:remove", e, t)
                })
            }
        }), o.AppRouter = t.Router.extend({
            constructor: function(e) {
                t.Router.prototype.constructor.apply(this, i(arguments)), this.options = e || {};
                var n = o.getOption(this, "appRoutes"), r = this._getController();
                this.processAppRoutes(r, n)
            },
            appRoute: function(e, t) {
                var n = this._getController();
                this._addAppRoute(n, e, t)
            },
            processAppRoutes: function(e, t) {
                if (t) {
                    var i = n.keys(t).reverse();
                    n.each(i, function(n) {
                        this._addAppRoute(e, n, t[n])
                    }, this)
                }
            },
            _getController: function() {
                return o.getOption(this, "controller")
            },
            _addAppRoute: function(e, t, i) {
                var r = e[i];
                if (!r)
                    throw new Error("Method '" + i + "' was not found on the controller");
                this.route(t, i, n.bind(r, e))
            }
        }), o.Application = function(e) {
            this._initRegionManager(), this._initCallbacks = new o.Callbacks, this.vent = new t.Wreqr.EventAggregator, this.commands = new t.Wreqr.Commands, this.reqres = new t.Wreqr.RequestResponse, this.submodules = {}, n.extend(this, e), this.triggerMethod = o.triggerMethod
        }, n.extend(o.Application.prototype, t.Events, {
            execute: function() {
                var e = Array.prototype.slice.apply(arguments);
                this.commands.execute.apply(this.commands, e)
            },
            request: function() {
                var e = Array.prototype.slice.apply(arguments);
                return this.reqres.request.apply(this.reqres, e)
            },
            addInitializer: function(e) {
                this._initCallbacks.add(e)
            },
            start: function(e) {
                this.triggerMethod("initialize:before", e), this._initCallbacks.run(e, this), this.triggerMethod("initialize:after", e), this.triggerMethod("start", e)
            },
            addRegions: function(e) {
                return this._regionManager.addRegions(e)
            },
            closeRegions: function() {
                this._regionManager.closeRegions()
            },
            removeRegion: function(e) {
                this._regionManager.removeRegion(e)
            },
            getRegion: function(e) {
                return this._regionManager.get(e)
            },
            module: function(e,
            t) {
                var n = o.Module;
                t && (n = t.moduleClass || n);
                var r = i(arguments);
                return r.unshift(this),
                n.create.apply(n,
                r)
            }, _initRegionManager : function() {
                this._regionManager = new o.RegionManager, this.listenTo(this._regionManager, "region:add", function(e, t) {
                    this[e] = t
                }), this.listenTo(this._regionManager, "region:remove", function(e) {
                    delete this[e]
                })
            }
        }), o.Application.extend = o.extend, o.Module = function(e, t, i) {
            this.moduleName = e, this.options = n.extend({}, this.options, i), this.initialize = i.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = t, this.startWithParent=!0, this.triggerMethod = o.triggerMethod, n.isFunction(this.initialize) && this.initialize(this.options, e, t)
        }, o.Module.extend = o.extend, n.extend(o.Module.prototype, t.Events, {
            initialize: function() {},
            addInitializer: function(e) {
                this._initializerCallbacks.add(e)
            },
            addFinalizer: function(e) {
                this._finalizerCallbacks.add(e)
            },
            start: function(e) {
                this._isInitialized || (n.each(this.submodules, function(t) {
                    t.startWithParent && t.start(e)
                }), this.triggerMethod("before:start", e), this._initializerCallbacks.run(e, this), this._isInitialized=!0, this.triggerMethod("start", e))
            },
            stop: function() {
                this._isInitialized && (this._isInitialized=!1, o.triggerMethod.call(this, "before:stop"), n.each(this.submodules, function(e) {
                    e.stop()
                }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), o.triggerMethod.call(this, "stop"))
            },
            addDefinition: function(e, t) {
                this._runModuleDefinition(e, t)
            },
            _runModuleDefinition: function(e, i) {
                if (e) {
                    var r = n.flatten([this, this.app, t, o, o.$, n, i]);
                    e.apply(this, r)
                }
            },
            _setupInitializersAndFinalizers: function() {
                this._initializerCallbacks = new o.Callbacks, this._finalizerCallbacks = new o.Callbacks
            }
        }), n.extend(o.Module, {
            create: function(e, t, r) {
                var o = e, s = i(arguments);
                s.splice(0, 3), t = t.split(".");
                var a = t.length, l = [];
                return l[a - 1] = r, n.each(t, function(t, n) {
                    var i = o;
                    o = this._getModule(i, t, e, r), this._addModuleDefinition(i, o, l[n], s)
                }, this), o
            },
            _getModule: function(e, t, i, r) {
                var s = o.Module, a = n.extend({}, r);
                r && (s = r.moduleClass || s);
                var l = e[t];
                return l || (l = new s(t, i, a), e[t] = l, e.submodules[t] = l), l
            },
            _addModuleDefinition: function(e, t, i, r) {
                var o, s;
                n.isFunction(i) ? (o = i, s=!0) : n.isObject(i) ? (o = i.define, s = "undefined" != typeof i.startWithParent ? i.startWithParent : !0) : s=!0, o && t.addDefinition(o, r), t.startWithParent = t.startWithParent && s, t.startWithParent&&!t.startWithParentIsConfigured && (t.startWithParentIsConfigured=!0, e.addInitializer(function(e) {
                    t.startWithParent && t.start(e)
                }))
            }
        }), o
    }(this, t, e), t.Marionette
}), _wAMD.define("backbone-marionette", ["mustache", "backbone-marionette-vendor"], function(e, t) {
    return t.Renderer.render = function(t, n) {
        if (!t) {
            var i = new Error("Cannot render the template since it's false, null or undefined.");
            throw i.name = "TemplateNotFoundError", i
        }
        return "function" == typeof t ? t(n) : e.render(t, n)
    }, t
}), _wAMD.define("util/backbone-prevent", ["jquery", "underscore", "backbone"], function(e, t, n) {
    n.preventClose = function(i) {
        var r = this;
        if (!this.defer) {
            if (this.defer = e.Deferred(), n.preventClose.preventer) {
                var o = n.preventClose.preventer();
                o && o.promise ? this.defer = o : o ? this.defer.resolve() : this.defer.reject(), this.defer.fail(function() {
                    delete n.preventClose.preventer
                })
            } else
                this.defer.reject();
            this.defer.always(function() {
                t.defer(function() {
                    delete r.defer
                })
            })
        }
        this.defer.fail(function() {
            i()
        })
    }, n.preventClose.ifModelChanged = function(n, i) {
        if (!n.hasChangedDeepSinceSavepoint())
            return !1;
        var r = e.Deferred();
        return i ? i(function() {
            r.reject()
        }, function() {
            r.resolve()
        }) : t.defer(function() {
            confirm("Are you sure? You'll lose your current changes.") ? r.reject() : r.resolve()
        }), r.promise()
    };
    var i = n.View.prototype.constructor;
    n.View.prototype.constructor = function() {
        i.apply(this, arguments), this.preventClose && (n.preventClose.preventer = t.bind(this.preventClose, this))
    }
}), jsonrpc = {}, jsonrpc.CallStack = function(e, t, n, i) {
    this._counter = 0, this._enterFn = e, this._exitFn = n, this._enterScope = t, this._exitScope = i
}, jsonrpc.CallStack.prototype = {
    enter: function() {
        this._counter = this._counter < 0 ? 1 : this._counter + 1, 1 === this._counter && this._enterFn.apply(this._enterScope, arguments)
    },
    exit: function() {
        this._counter -= 1, 0 === this._counter && this._exitFn.apply(this._exitScope, arguments)
    }
}, jsonrpc.DelayedTask = function(e, t, n) {
    this._fn = e || function() {}, this._scope = t || void 0, this._args = n || [], this._id = null
}, jsonrpc.Observable = function() {
    this._listeners = []
}, jsonrpc.Observable.prototype = {
    bind: function(e, t) {
        var n = {
            fn: e,
            scope: t || this
        };
        return this._listeners.push(n), n
    },
    unbind: function(e) {
        var t = this._listeners.indexOf(e);
        - 1 !== t && this._listeners.splice(t, 1)
    },
    trigger: function() {
        var e;
        for (e = 0; e < this._listeners.length; e += 1)
            this._listeners[e].fn.apply(this._listeners[e].scope, arguments)
    }
}, jsonrpc.DelayedTask.prototype = {
    delay: function(e, t, n, i) {
        var r = this;
        this._fn = t || this._fn, this._scope = n || this._scope, this._args = i || this._args, this.cancel(), this._id = window.setInterval(function() {
            window.clearInterval(r._id), r._id = null, r._fn.apply(r._scope, r._args)
        }, e)
    },
    cancel: function() {
        this._id && (window.clearInterval(this._id), this._id = null)
    }
}, jsonrpc.JsonRpc = function(e) {
    this._url = e, this.loading = new jsonrpc.Observable, this.loaded = new jsonrpc.Observable, this.unhandledFailure = new jsonrpc.Observable, this._loadingState = new jsonrpc.CallStack(this.loading.trigger, this.loading, this.loaded.trigger, this.loaded), this._requests = [], this._batchingMilliseconds = 10, this._delayedTask = new jsonrpc.DelayedTask
}, jsonrpc.JsonRpc.prototype = {
    setBatchingMilliseconds: function(e) {
        this._batchingMilliseconds = e
    },
    call: function() {
        var e = this._getParams.apply(this, arguments);
        this._loadingState.enter(), e.standalone ? this._sendRequests([e]) : (this._requests.push(e), this._batchingMilliseconds ? this._delayedTask.delay(this._batchingMilliseconds, this._sendRequests, this) : this._sendRequests())
    },
    _sendRequests: function(e) {
        function t(t, r, o) {
            var s;
            if (t)
                s = i._isArray(r) ? r : [r];
            else
                for (s = [], n = 0; n < e.length; n += 1)
                    s[n] = {
                        id: n,
                        error: {
                            message: r
                        }
                    };
            i._handleResponses(e, s, o)
        }
        var n, i = this, r = [], o = [];
        for ("undefined" == typeof e && (e = i._requests, i._requests = []), n = 0; n < e.length; n += 1)
            e[n].request.id = n, e[n].secure ? o.push(e[n].request) : r.push(e[n].request);
        r.length > 0 && (1 === r.length && (r = r[0]), i._doJsonPost(i._url, r, t)), o.length > 0 && (1 === o.length && (o = o[0]), i._doJsonpGet(i._url, o, t))
    },
    _handleResponses: function(e, t, n) {
        var i, r, o;
        for (i = 0; i < t.length; i += 1)
            r = t[i], o = e[r.id], this._handleResponse(o, r, n)
    },
    _handleResponse: function(e, t, n) {
        var i=!t.error, r = i ? t.result : t.error.message;
        this._loadingState.exit(), i ? e.success.call(e.scope, r, n) : e.failure.call(e.scope, r, n), e.callback.call(e.scope, i, r, n)
    },
    _getParams: function() {
        var e = this, t = Array.prototype.slice.call(arguments), n = {
            request: {
                jsonrpc: "2.0",
                method: t.shift()
            }
        };
        for (n.request.params = []; t.length > 1&&!this._isFunction(t[0]);)
            n.request.params.push(t.shift());
        return this._isFunction(t[0]) ? (n.success = t[0], n.scope = t[1]) : (n.success = t[0].success, n.failure = t[0].failure, n.callback = t[0].callback, n.scope = t[0].scope, n.secure=!!t[0].secure, n.standalone=!!t[0].standalone), n.success = n.success || function() {}, n.failure = n.failure || function() {
            e.unhandledFailure.trigger.apply(e.unhandledFailure, arguments)
        }, n.callback = n.callback || function() {}, n
    },
    _isArray: function(e) {
        return "[object Array]" === Object.prototype.toString.apply(e)
    },
    _isFunction: function(e) {
        return "[object Function]" === Object.prototype.toString.apply(e)
    },
    _beforeSend: function() {},
    _doJsonPost: function(e, t, n) {
        var i = Weebly.jQuery || require("jquery"), r = i.ajax({
            type: "POST",
            url: e,
            cache: !1,
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            beforeSend: this._beforeSend,
            data: JSON.stringify(t),
            headers: {
                "x-wtok": Weebly.RequestToken
            }
        }).done(function(e) {
            var t = r.getResponseHeader("Content-Type");
            200 !== r.status ? n(!1, 'Expected HTTP response "200 OK", found "' + r.status + " " + r.statusText + '"', r) : 0 !== t.indexOf("application/json") ? n(!1, 'Expected JSON encoded response, found "' + t + '"', r) : n(!0, e, r)
        })
    },
    _doJsonpGet: function(e, t, n) {
        e = "https://" + _W.securePrefix + e;
        var i = Weebly.jQuery || require("jquery");
        i.ajax({
            type: "GET",
            url: e,
            cache: !1,
            jsonpCallback: "WJsonp",
            dataType: "jsonp",
            beforeSend: this._beforeSend,
            data: t,
            headers: {
                "x-wtok": Weebly.RequestToken
            }
        }).done(function(e) {
            n(!0, e)
        })
    }
}, _wAMD.define("vendor/jsonrpc", function() {}), function(e, t) {
    "function" == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define("util/backbone-rpc", ["underscore", "backbone", "vendor/jsonrpc"], t) : t(e._, e.Backbone)
}(this, function(e, t) {
    var n = t.sync;
    e.extend(t, {
        sync: function(i, r, o) {
            if (!r.rpc)
                return n.apply(t, arguments);
            var s;
            switch (i) {
            case"delete":
                i = "destroy";
            case"create":
            case"update":
            case"patch":
                s = o.attrs || r.toJSON(o);
                break;
            case"read":
                if (r.rpc && "read" == i) {
                    o = e.extend({}, e.omit(o, "data"), o.data), s = e.extend({
                        filter: []
                    }, o);
                    var a = r.keydefs || r.model.prototype.keydefs;
                    if (a.PRIMARY)
                        for (var l = 0; l < a.PRIMARY.length; l++) {
                            var u = a.PRIMARY[l];
                            void 0 == r.get(u) || e.findWhere(s.filter, {
                                property: u
                            }) || s.filter.push({
                                property: u,
                                value: r.get(u)
                            })
                        }
                    }
                break;
            default:
                console.warn(i + " params not defined for this model ", r), s = o.attrs || r.toJSON()
            }
            if (r.rpc[i]) {
                var c = r.rpc[i](s);
                return c.done(function(e) {
                    return e.success===!1 ? o.error(e) : o.success(e)
                }), c.fail(function(e) {
                    return o.error(e)
                }), c
            }
            console.warn(i + " not defined for this model ", r)
        }
    })
}), function() {
    Weebly.ns = function(e, t) {
        for (var t = t || window, n = e.split("."), i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            "string" != typeof o ? t = o : (t[o] || (t[o] = {}), t = t[o])
        }
        return t
    }, Weebly.setup_rpc = function(e) {
        var t = Weebly.ns(e.namespace), n = new jsonrpc.JsonRpc(e.url), i = Weebly.jQuery || require("jquery"), r = function(e, t, r, o, s) {
            return function() {
                var o = Array.prototype.slice.call(arguments);
                if (o.length < t)
                    return console.error("Wrong number of args for " + e), void 0;
                r=!!r, o.unshift(e);
                var a = i.Deferred();
                return o.push({
                    success: a.resolve,
                    failure: a.reject,
                    scope: a,
                    secure: r,
                    standalone: s
                }), n.call.apply(n, o), a
            }
        };
        for (var o in e.actions)
            if (e.actions.hasOwnProperty(o))
                for (var s = Weebly.ns(o, t), a = e.actions[o] || [], l = 0; l < a.length; l++) {
                    var u = a[l];
                    s[u.name] = r(o + "::" + u.name, u.len, u.secure, u.multiple, u.standalone)
                }
    }, Weebly.setup_model_rpc = function(e) {
        var t = Weebly.ns(e.rpc_namespace), n = Weebly.ns(e.model_namespace), i = Weebly.ns(e.collection_namespace), r = Weebly.ns(e.bootstrap_namespace);
        _.extend(n, e.models), _.extend(i, e.collections), _.extend(r, e.bootstrap);
        for (var o in i)
            t[o] && (i[o].rpc = t[o]);
        for (var o in n)
            if (t[o]) {
                n[o].rpc = t[o];
                var s = n[o].relations;
                if (s)
                    for (var a = 0; a < s.length; a++) {
                        var l = s[a];
                        i[l.relatedModel] && (l.collectionType = l.relatedModel + "Collection")
                    }
                }
        }
}(), _wAMD.define("backbone-all", ["backbone", "backbone-pageable", "backbone-validation", "backbone-relational", "backbone-marionette", "util/backbone-prevent", "util/backbone-rpc"], function(e) {
    var t = {}, n = e.RelationalModel.extend;
    return e.Relational.store.addModelScope(t), e.RelationalModel.extend = function(e) {
        var i = n.apply(this, arguments), r = e._class;
        return r && (r = r.split("."), r = r[r.length - 1], t[r] = i), i
    }, e.Wreqr.Handlers.prototype.removeHandlers = function(e) {
        for (var t = 0; t < e.length; t++)
            this.removeHandler(e[t])
    }, e
}), _wAMD.define("site/published/app", ["backbone-all"], function(e) {
    var t = new e.Marionette.Application;
    return t.addRegions({
        contentRegion: "#wsite-content"
    }), t
}), _wAMD.define("editor/page-manager/entities/Defaults", ["underscore"], function(e) {
    var t = {
        "for": function(t) {
            var n = ["blog", "link", "store", "category", "product"], i = e.contains(n, t) ? this[t]: this.page;
            return i.layout = i.layout || getDefaultPageType(currentThemeData, Weebly.view.isMobileView), i
        },
        page: {
            title: _W.tl("New Page"),
            kind: "page"
        },
        link: {
            title: _W.tl("Link Page"),
            kind: "page",
            extlink: "http://"
        },
        blog: {
            title: _W.tl("Blog"),
            kind: "blog"
        },
        store: {
            title: _W.tl("Store"),
            kind: "store",
            layout: "no-header",
            store_page_kind: "category",
            store_page_kind_id: "1"
        },
        category: {
            title: _W.tl("Category"),
            kind: "store",
            layout: "no-header",
            store_page_kind: "category"
        },
        product: {
            title: _W.tl("Product"),
            kind: "store",
            layout: "no-header",
            store_page_kind: "product"
        }
    };
    return t
}), _wAMD.define("editor/page-manager/entities/PageHash", ["underscore"], function(e) {
    var t = {
        initialize: function(e) {
            return this.length = 0, this.items = {}, e.length > 0 && this.flatten(e), this
        },
        flatten: function(e) {
            var t = this;
            e.each(function(e) {
                t.add(e), t.flatten(e.get("children"))
            })
        },
        toJSON: function() {
            return hash = {}, e.each(this.items, function(e) {
                hash[e.id] = e.toJSON()
            }), hash
        },
        get: function(e) {
            return this.items[e]
        },
        add: function(e) {
            this.items[e.id] || (this.length += 1, this.items[e.id] = e)
        },
        remove: function(e) {
            this.length -= 1, delete this.items[e.id]
        },
        each: function(t) {
            return e.each(this.items, function(e, n) {
                t.call(null, e, n)
            }), this
        },
        some: function(t) {
            return e.some(this.items, function(e, n) {
                return t.call(null, e, n)
            })
        },
        map: function(t) {
            return e.map(this.items, function(e, n) {
                return t.call(null, e, n)
            })
        },
        find: function(t) {
            return e.find(this.items, function(e, n) {
                return t.call(null, e, n)
            })
        }
    };
    return t
}), _wAMD.define("editor/page-manager/entities/Pages", ["jquery", "underscore", "backbone-all", "./Defaults", "./PageHash"], function(e, t, n, i, r) {
    var o = n.Model.extend({
        defaults: function(e) {
            return this.isNew() && e ? i.for(e) : {}
        },
        initialize: function(e) {
            e = e || {}, this.set(this.defaults(e.page_kind)), this.set("page_kind", this.normalizedKind()), this.initChildren(), this.on("change", function() {
                var e = t.keys(this.changedAttributes()), n = ["title", "hidden", "pwprotected", "membership_required"], i = t.intersection(n, e).length > 0;
                i && this.trigger("changed", this);
                var r = ["title", "hidden", "layout", "store_page_kind_id"], o = t.intersection(r, e).length > 0;
                o && this.trigger("page:go", this)
            }, this), this.listenTo(this.get("children"), {
                changed: function(e) {
                    this.trigger("changed", e)
                },
                "page:go": function(e) {
                    this.trigger("page:go", e)
                },
                removed: function(e) {
                    this.trigger("removed", e)
                }
            })
        },
        initChildren: function() {
            var e = this.get("children");
            e instanceof s==!1 && this.set("children", new s(e, {
                subcollection: !0
            }))
        },
        isCommercePage: function() {
            return t.contains(["store", "category", "product"], this.get("page_kind"))
        },
        hasCommerceModel: function(e) {
            return this.hasCategory(e) || this.hasProduct(e)
        },
        hasProduct: function(e) {
            return this.get("store_page_kind_id") == e.get("site_product_id")
        },
        hasCategory: function(e) {
            return this.get("store_page_kind_id") == e.get("site_category_id")
        },
        commerceCleanup: function() {
            var e = this;
            Weebly.Editor.RPC.Page.cleanupCommercePage(e.id).done(function() {
                e.set({
                    hidden: 1,
                    kind: "page",
                    page_kind: "page",
                    store_page_kind: null,
                    store_page_kind_id: null
                })
            })
        },
        normalizedKind: function() {
            var e = this.get("kind"), t = e;
            return this.get("extlink") ? t = "link" : "store" == e && (t = this.get("store_page_kind"), "category" == t && 1 == this.get("store_page_kind_id") && (t = "store")), t
        },
        unescapedAttr: function(t) {
            var n = this.get(t);
            return e("<div/>").html(n).text()
        },
        sync: function(e, n) {
            n.collection && n.set("order", n.collection.indexOf(n) + 1);
            var i = n.isNew() ? Weebly.Mobile.RPC.Page.createPage(currentSite, n.attributes): Weebly.Mobile.RPC.Page.updatePage(currentSite, n.id, n.attributes);
            return i.then(function(e) {
                var i = t.object(t.map(e.page, function(e, t) {
                    return "0" === e && (e = 0), "1" === e && (e = 1), [t, e]
                })), r = n.isNew(), o = r ? "save": "sync";
                return n.set(i), n.trigger(o, n), n
            })
        },
        destroy: function() {
            return this.trigger("destroy", this, this.collection, this.collection.indexOf(this)), Weebly.Mobile.RPC.Page.removePage(currentSite, this.id)
        },
        copy: function() {
            var e = this, n = Weebly.Editor.RPC.Page.copyPage(currentSite, e.id);
            return n.then(function(n) {
                var i = t.extend(e.toJSON(), {
                    id: n.page_id,
                    children: []
                });
                return new o(i)
            })
        },
        toJSON: function() {
            var e = t.clone(this.attributes);
            return e.children = this.get("children").toJSON(), e
        }
    }), s = n.Collection.extend({
        model: o,
        initialize: function(e, t) {
            t = t || {}, t.subcollection || this.on({
                "save add": function(e) {
                    e.isNew() || this.getHash().add(e)
                },
                removed: function(e) {
                    this.getHash().remove(e)
                }
            }, this), this.on("destroy", this.relocateChildren, this)
        },
        saveHierarchy: function(e) {
            return this.mirrorHierarchy(e), Weebly.Mobile.RPC.Page.saveHierarchy(currentSite, e)
        },
        mirrorHierarchy: function(e) {
            function n(e, r) {
                var o = 1;
                t.each(r, function(t) {
                    var r = i.get(t.id);
                    r.collection.remove(r, {
                        silent: !0
                    }), e.add(r, {
                        silent: !0
                    }), r.set("order", o++), n(r.get("children"), t.children)
                })
            }
            var i = this.getHash();
            n(this, e)
        },
        relocateChildren: function(e, t, n) {
            for (var i = e.get("children"), r = i.at(0); r;)
                i.remove(r), t.add(r, {
                    at: n++
                }), r = i.at(0);
            this.trigger("removed", e)
        },
        onSitePasswordChange: function(e, t) {
            var n = this.getHash();
            if (!t)
                return n.each(function(e) {
                    e.set("pwprotected", 0)
                }), void 0;
            var i = n.find(function(e) {
                return e.get("pwprotected")
            });
            e || i || n.each(function(e) {
                e.set("pwprotected", 1)
            })
        },
        reset: function(e, t) {
            delete this.pageHash, n.Collection.prototype.reset.call(this, e, t)
        },
        getHash: function() {
            return this.pageHash = this.pageHash || r.initialize(this), this.pageHash
        },
        getPage: function(e) {
            return this.getHash().get(e)
        },
        getHomepage: function() {
            return this.at(0)
        },
        cleanupCommercePages: function(e) {
            this.getHash().each(function(t) {
                t.isCommercePage() && t.hasCommerceModel(e) && t.commerceCleanup()
            })
        }
    });
    return {
        PageModel: o,
        PageCollection: s
    }
}), _wAMD.define("editor/page-manager/pages", ["./entities/Pages"], function(e) {
    var t = function() {
        return new e.PageCollection(Weebly.initialRight)
    };
    return t()
}), !function(e) {
    var t = function(e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, i) {
            var r, o, s, a, l;
            for (this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled=!0, s = this.options.trigger.split(" "), l = s.length; l--;)
                a = s[l], "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (r = "hover" == a ? "mouseenter" : "focus", o = "hover" == a ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function(t) {
            var n, i = e.fn[this.type].defaults, r = {};
            return this._options && e.each(this._options, function(e, t) {
                i[e] != t && (r[e] = t)
            }, this), n = e(t.currentTarget)[this.type](r).data(this.type), n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show), void 0) : n.show()
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide), void 0) : n.hide()
        },
        show: function() {
            var t, n, i, r, o, s, a = e.Event("tooltipshow");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(a), a.isDefaultPrevented())
                    return;
                switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), i = t[0].offsetWidth, r = t[0].offsetHeight, o) {
                case"bottom":
                    s = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;
                case"top":
                    s = {
                        top: n.top - r,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;
                case"left":
                    s = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left - i
                    };
                    break;
                case"right":
                    s = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left + n.width
                    }
                }
                this.applyPlacement(s, o), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(e, t) {
            var n, i, r, o, s = this.tip(), a = s[0].offsetWidth, l = s[0].offsetHeight;
            s.offset(e).addClass(t).addClass("in"), n = s[0].offsetWidth, i = s[0].offsetHeight, "top" == t && i != l && (e.top = e.top + l - i, o=!0), "bottom" == t || "top" == t ? (r = 0, e.left < 0 && (r =- 2 * e.left, e.left = 0, s.offset(e), n = s[0].offsetWidth, i = s[0].offsetHeight), this.replaceArrow(r - a + n, n, "left")) : this.replaceArrow(i - l, i, "top"), o && s.offset(e)
        },
        replaceArrow: function(e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
        },
        setContent: function() {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html": "text"](t), e.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function t() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).detach()
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t), n.detach()
                })
            }
            var n = this.tip(), i = e.Event("tooltiphide");
            return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : n.detach(), this.$element.trigger("hidden"), this)
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var t = this.$element[0];
            return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled=!0
        },
        disable: function() {
            this.enabled=!1
        },
        toggleEnabled: function() {
            this.enabled=!this.enabled
        },
        toggle: function(t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type): this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("tooltip"), o = "object" == typeof n && n;
            r || i.data("tooltip", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(window.jQuery), !function(e) {
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html": "text"](t), e.find(".popover-content")[this.options.html ? "html": "text"](n), e.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var e, t = this.$element, n = this.options;
            return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content")
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("popover"), o = "object" == typeof n && n;
            r || i.data("popover", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(window.jQuery), _wAMD.define("vendor/bootstrap/popover", function() {}), function(e) {
    function t() {
        return T() ? (F || (F = W("editor-site-shared/relay"), E = W("site/editor/relay-constants")), !0) : !1
    }
    function n(e) {
        var t = e.closest("." + L);
        return t.length ? t : e.parent()
    }
    function i(e) {
        var t = e.find("." + B);
        return t.length ? t : e.find("a").first()
    }
    function r(e) {
        var t = e.find("." + N);
        return t.length ? t : (t = e.find("." + z), t.length ? t : e.find("li"))
    }
    function o(e) {
        var t = e.closest("." + V);
        return t.length ? t : e.parent()
    }
    function s(e) {
        return e.find("." + V).first()
    }
    function a(e) {
        var t = e.find("." + U);
        return t.length ? t : e.find("li")
    }
    function l(e) {
        var t = e.find("." + J);
        return t.length ? t : e.find("a")
    }
    function u(t) {
        if (window.navFlyoutMenu) {
            var n = window.currentPage || I, o = window.navFlyoutMenu.getMainList(), a = o.children(), u = e("body").find("#" + nt), c = e("body").find("#" + X), h = j && j.hasCustomMembership, f = j && j.hasCustomMinicart, p = a.filter(function() {
                return !!e(this).find("#" + X).length
            });
            p.length || (p = void 0);
            var g, m, w = window.getCartCount(), _ = window.location.host, b = window.location.pathname, M = window._W.tl("Cart") + " (<span id='" + tt + "'></span>)";
            _.indexOf(".checkout.weebly.com")>-1 || _.indexOf(".checkout.editmysite.com")>-1 || b.indexOf("store/checkout")>-1 || "object" == typeof Weebly && Weebly.EDITOR&&!Weebly.COMMERCE_ENABLED || "object" != typeof Weebly ||!Weebly.Commerce || "boolean" != typeof Weebly.Commerce.hasCart || "object" == typeof Weebly && Weebly.Commerce && Weebly.Commerce.hasCart===!1 ? p && (p.remove(), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames()) : (p || (f ? (c.html(M), p = void 0) : p = x(M), g = f ? c : i(p), g.attr("id", X).css("position", "relative"), T() && (m = W("config"), m.chromeless || (g = f ? c.parent() : d(p), g.attr("data-content", window._W.tl("The shopping cart is only visible on your published site.")).popover({
                trigger: "hover",
                placement: "bottom",
                container: "#_editor-ui",
                delay: {
                    show: 500,
                    hide: 100
                }
            }))), g = f ? c.parent() : d(p), g.addClass(et).css("position", "relative"), A = f ? c : p, window.reportCartNavElement(), f || (o.append(p), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames())), e("#" + tt).text(w));
            var C;
            p && f ? C = null : p && (C = d(p));
            var S = a.filter(function() {
                return !!e(this).find("#" + nt).length
            });
            S.length || (S = void 0);
            var D = Weebly.allowMemberRegistration ? window._W.tl("Log In | Register"): window._W.tl("Log In"), F = W("editor/page-manager/pages"), E = F.some(function(e) {
                return e.get("membership_required")
            }), P = T() && (E || Weebly.allowMemberRegistration || Weebly.memberCount > 0 || Weebly.groupCount > 0) && Weebly.showMemberLoginLink, q = window._W && _W.showLogin;
            if (!P&&!q || S ? P || q ||!S || (S.remove(), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames()) : (S = x(D), T() ? S.attr("id", "pgmember-login") : S.attr("id", "member-login"), i(S).attr("id", nt), h || (p&&!f ? S.insertBefore(p) : o.append(S)), a = o.children(), window.navFlyoutMenu.writeOrderingClassNames()), T() && S) {
                m = W("config");
                var H = i(S);
                H = u.length ? u : H, u.length && H.text(D), m.chromeless || H.attr("data-content", window._W.tl("Membership Log In only works on your published site.")).popover({
                    trigger: "hover",
                    placement: "bottom",
                    container: "body",
                    delay: {
                        show: 500,
                        hide: 100
                    }
                })
            }
            if (!window.DISABLE_NAV_MORE) {
                var L = O.clone(!0, !0), N = a.filter(function() {
                    return !!e(this).find("#" + K).length
                });
                N.length || (N = void 0);
                var B=!1;
                N && (N.hide(), B=!0);
                var $;
                if (B)
                    if ($ = d(N), $[0]._flyoutmenu_destroy)
                        $ = $[0]._flyoutmenu_destroy(!0);
                    else {
                        var U = r($)[0];
                        U._flyoutmenu_destroy && ($ = U._flyoutmenu_destroy(!0))
                    }
                var J, G, it, rt, ot = [], st = [], at=!1, lt = null;
                for (it = 0; it < t.length; it++)
                    rt = y(t[it].id, o), rt && (rt.show(), ot.push(rt));
                for (p && ot.push(p), S && ot.push(S), it = 0; it < ot.length; it++) {
                    rt = ot[it];
                    var ut = d(rt), ct = v(ut);
                    if (it) {
                        if (1 == it)
                            J = Math.abs(ct[0].top - st[0][0].top) > Math.abs(ct[0].left - st[0][0].left), J && (G = ut.closest(".wsite-nav-vertical"), G.length && (lt = G.offset().top + (parseInt(G.css("padding-top"), 10) || 0) + G.height()));
                        else if (J) {
                            if (null !== lt && ct[1].top > lt) {
                                at=!0;
                                break
                            }
                        } else if (Math.abs(ct[0].top - st[it - 1][0].top) > 5) {
                            at=!0;
                            break
                        }
                    } else ;
                    st.push(ct)
                }
                var ht, dt, ft, pt = [];
                if (at) {
                    N ? N.show() : (N = L, i(N).attr("id", K).css("position", "relative").on("click", !1), S&&!h ? N.insertBefore(S) : p&&!f ? N.insertBefore(p) : o.append(N));
                    var gt = d(N).addClass(Z).css("position", "relative"), mt = d(ot[0]), vt = null;
                    S&&!h && (vt = d(S));
                    var yt = C || vt || gt, wt = ot.length - 1;
                    for (p && wt--, S && wt--, it = wt; it >= 0; it--) {
                        var _t = v(mt), bt = v(yt);
                        if (!(J && bt[1].top > lt ||!J && Math.abs(_t[0].top - bt[0].top) > 5))
                            break;
                        ot[it].hide(), pt.unshift(it)
                    }
                    if (0 === pt.length)
                        N.remove();
                    else if (pt.length == t.length) {
                        for (it = 0; it < pt.length; it++) {
                            var Mt = y(t[pt[it]].id, o);
                            Mt && Mt.show()
                        }
                        N.remove()
                    } else {
                        for (var xt, F = W("editor/page-manager/pages"), kt = [], Ct = 0; Ct < pt.length; Ct++) {
                            ht = t[pt[Ct]], F.length && (ht = F.getPage(ht.id).toJSON()), ht = e.extend({}, ht), ht.title_html = ht.title, ht.membership_required = ht["membership-required"], T() && (ht.url = "page://" + ht.id);
                            var Rt = y(ht.id, o);
                            Rt && (xt = d(Rt)[0]._get_sublist()), !xt && $ && (xt=!!$.find("#" + Y + ht.id + " ." + V).length), xt && (ht.has_children=!0, ht.children=!1), kt.push(ht)
                        }
                        var St = e(k(R("navigation/flyout/list") || R("menu/submenu-main"), {
                            children: kt
                        }));
                        T() && window.processNavLinks(St), l(St).each(function() {
                            var r = e(this).closest("[id]"), a = r.attr("id");
                            if (a) {
                                a = a.replace(/[^\d]/g, "");
                                var l;
                                if (e.each(t, function() {
                                    return this.id === a ? (l = this, !1) : void 0
                                }), l) {
                                    if (r.is("span." + z) && (r = r.children(), r.unwrap()), dt = Y + l.id, r.attr("id", dt), dt.replace(/[^\d]/g, "") == n && r.addClass(Q), ft = i(r), !l.onclick) {
                                        var u = l.url;
                                        if (window.IS_ARCHIVE || u.match(/^http:\/\//))
                                            ft.attr("href", u);
                                        else {
                                            var c = e(e.map(ot, function(e) {
                                                return e.get()
                                            })), h = i(c.filter("[id*=" + a + "]")), f = h.attr("href"), p = h.data("membership-required");
                                            f ? ft.attr("href", f) : ft.attr("href", "/" + u), "number" == typeof p && ft.attr("data-membership-required", "" + p)
                                        }
                                        l.target && ft.attr("target", l.target)
                                    }
                                    var g, m = y(l.id, o);
                                    m && (g = d(m)[0]._flyoutmenu_destroy()), !g && $ && (g = s($.find("#" + Y + l.id)), g.length || (g = void 0)), g && s(r).replaceWith(g)
                                }
                            }
                        }), gt.append(St), window.navFlyoutMenu.addItem(gt)
                    }
                }
                if ($)
                    for (it = 0; it < pt[0]; it++) {
                        ht = t[it];
                        var Dt = y(ht.id, o), Tt = $.find("#" + Y + ht.id + " ." + V + ":first");
                        Tt.length && (Dt[0]._flyoutmenu_destroy && Dt[0]._flyoutmenu_destroy(), Dt.append(Tt), window.navFlyoutMenu.addItem(Dt))
                    }
                window.navFlyoutMenu.writeOrderingClassNames()
            }
        }
    }
    function c(e, t, n) {
        var i = e.closest("." + L);
        i.length || (i = e.parent(), i.hasClass(z) && (i = i.parent()));
        var r = h(i, t, n);
        if (r.length >= 2) {
            var o = r.eq(0).offset(), s = r.eq(1).offset(), a = Math.abs(o.left - s.left) - Math.abs(o.top - s.top);
            if (0 !== a)
                return 0 > a
        }
        return !m(e)
    }
    function h(t, n, i) {
        var r = t.find("." + N);
        if (r.length)
            return r;
        var r = t.find("." + z);
        if (r.length)
            return r;
        var o = [];
        return t.children().each(function(t, r) {
            var s = e(r);
            if (!n || s.hasClass(z) || s.hasClass(Z) || r.id.match(/^pg/) || i && r.id == i) {
                var a = d(s);
                a.length && o.push(a[0])
            }
        }), e(o)
    }
    function d(e) {
        if (e.hasClass(z)) {
            var t = e.find("." + N).first();
            e = t.length ? t : e.children().first()
        }
        return e.hasClass(L) ? void 0 : e
    }
    function f(e) {
        return r(e).add(a(e))
    }
    function p(e) {
        var t = e.closest("." + z).siblings().find("." + N + ":first-child");
        return t.length ? t : e.parent().hasClass(z) ? e.parent().siblings().children(":first-child") : e.siblings()
    }
    function g(e) {
        var t = e.find("." + $).first();
        if (t.length)
            return t;
        if (t = e.closest("." + U + ", ." + N).find("." + $).first(), t.length)
            return t;
        if (t = e.find("ul").first(), !t.length) {
            var n = e.next();
            n.hasClass(L) && (t = n.children().first())
        }
        return t.length ? t : void 0
    }
    function m(e) {
        return !e.closest("." + $).length
    }
    function v(e) {
        var t = e.is("a") ? e: e.find("a"), n = e.offset(), i = {
            top: n.top + e[0].offsetHeight,
            left: n.left + e[0].offsetWidth
        };
        if (!t)
            return [n, i];
        var r, o, s = t.offset(), a = {
            top: s.top + t[0].offsetHeight,
            left: s.left + t[0].offsetWidth
        };
        return Math.abs(n.left - i.left) < 10 ? (r = s, o = a) : (r = {
            top: Math.min(n.top, s.top),
            left: Math.min(n.left, s.left)
        }, o = {
            top: Math.max(i.top, a.top),
            left: Math.max(i.left, a.left)
        }), [r, o]
    }
    function y(t, n) {
        var i = e("#pg" + t, n);
        return !i.length && P && (i = e("#" + P, n)), i.length ? i : void 0
    }
    function w() {
        if (T()) {
            for (var e = 0; e < document.styleSheets.length; e++)
                try {
                    if (document.styleSheets[e].title == q + "-theme-css") {
                        var t = document.styleSheets[e], n = t.cssRules || t.rules;
                        return n && n.length > 0
                    }
            } catch (i) {}
            return !1
        }
        return !0
    }
    function b(e) {
        if (w())
            e();
        else
            var t = setInterval(function() {
                w() && (clearInterval(t), e())
            }, 200)
    }
    function M() {
        return x(window._W.tl("more..."))
    }
    function x(t) {
        return e(k(C(), {
            title_html: t,
            url: "#",
            has_children: !1
        }))
    }
    function k(e, t) {
        var n = W("mustache");
        return n.render(e, t, S())
    }
    function C() {
        return rt || (rt = R("navigation/item") || R("menu/item")), rt
    }
    function R(e) {
        return S()[e]
    }
    function S() {
        return it || {}
    }
    function D(e) {
        it = _.extend({}, objectify(e))
    }
    function T() {
        return window.inEditor && window.inEditor()
    }
    window.getCartCount = function() {
        var e = T() ? 0: "-";
        return e
    };
    var A = null;
    window.getCartNavElement = function() {
        return A
    }, window.reportCartNavElement = function() {};
    var F, E, O, P, I, j, W = window._wAMD && window._wAMD.require || window.require, q = window.STYLE_PREFIX || "weebly", H = 300, z = q + "-nav-handle", Y = q + "-nav-", L = q + "-menu-default", N = q + "-menu-item-wrap", B = q + "-menu-item", V = q + "-menu-wrap", $ = q + "-menu", U = q + "-menu-subitem-wrap", J = q + "-menu-subitem", Q = q + "-nav-current", G = q + "-menus", K = q + "-nav-more-a", Z = q + "-nav-more", X = q + "-nav-cart-a", et = q + "-nav-cart", tt = q + "-nav-cart-num", nt = q + "-nav-login-a";
    window.initPublishedFlyoutMenus = function(t, i, r, o, s, a, l) {
        if (I = i, j = l, D(a), O = M(), t.length > 0) {
            var c = function() {
                P = o;
                var i = e("<div>", {
                    id: G
                }).appendTo("body"), r = y(t[0].id);
                r && (window.navFlyoutMenu = new window.FlyoutMenu(n(r), {
                    relocate: i,
                    aLiId: o
                }), u(t))
            };
            s ? c() : b(c)
        }
        window.refreshPublishedFlyoutMenus = function() {
            u(t)
        }, e(".wsite-logo img").on("load", window.refreshPublishedFlyoutMenus), e(window).on("load", window.refreshPublishedFlyoutMenus)
    }, window.flyoutMenusRefreshable=!0, window.initEditorFlyoutMenus = function(t, i) {
        P = t, j = i, D(i.templates), b(function() {
            function i() {
                var e = getTopLevelSummary();
                if (e.length > 0) {
                    var i = y(e[0].id);
                    if (i) {
                        var r = n(i);
                        r.is("table,tbody,thead,tr") ? window.navFlyoutMenu = null : (window.navFlyoutMenu = new window.FlyoutMenu(r, {
                            relocate: "#" + G,
                            aLiId: t
                        }), O = M(), u(e))
                    } else
                        window.navFlyoutMenu = null
                }
            }
            if (e.browser.webkit) {
                var r = e("#icontent span." + z);
                r.hide(), setTimeout(function() {
                    r.show(), i()
                }, 0)
            } else
                i()
        })
    }, window.refreshNavCondense = function(e) {
        "object" == typeof e && _.extend(window.Weebly, e), !window.navFlyoutMenu || Weebly.view && Weebly.view.isMobileView || u(getTopLevelSummary())
    }, window.disableFlyouts=!1, window.FlyoutMenu = function(n, r) {
        function s(n) {
            function s(e) {
                w && k && e.preventDefault()
            }
            function u() {
                return window.disableFlyouts?!1 : (m.mouseoverItems.push(n), S++, R=!0, C || k || x && (n.data("hasChildren", !0), p(n).each(function(e, t) {
                    t._flyoutmenu_contract && t._flyoutmenu_contract()
                }), f(), n.data("isExpanded", !0)), void 0)
            }
            function h() {
                if (window.disableFlyouts)
                    return !1;
                if (R=!1, C) {
                    var e = S;
                    setTimeout(function() {
                        S == e && C&&!k && (y(), n.data("isExpanded", !1))
                    }, _)
                }
            }
            function d() {
                return window.disableFlyouts?!1 : (S++, void 0)
            }
            function f() {
                k=!0;
                var i = {
                    wrapper: M,
                    duration: H,
                    complete: function() {
                        if (k=!1, C=!0, R ? (n[0]._flyoutmenu_contract = y, n[0]._flyoutmenu_hide = function() {
                            k=!1, C=!1, R=!1, n[0]._flyoutmenu_contract = null, n[0]._flyoutmenu_hide = null, M.hide()
                        }) : y(), t()) {
                            var i = e(this), r = i.offset();
                            F.trigger(E.EVENTS.SUBNAV_SHOWN, {
                                top: r.top,
                                left: r.left,
                                width: i.outerWidth(),
                                height: i.outerHeight()
                            })
                        }
                    }
                }, o = v(n);
                M.css("left", - 1e4), M.show();
                var s = M.offsetParent(), a = s.is("body") ? {
                    top: 0,
                    left: 0
                }
                : s.offset();
                M.hide(), x.show();
                var l;
                if (c(n, !0, r.aLiId))
                    D=!1, M.css("top", - a.top + o[0].top), l = M.outerWidth(), o[1].left + l > e("body").outerWidth() ? (A=!1, M.css("left", - a.left + o[0].left - l), i.direction = "right", x.show("slide", i)) : (A=!0, M.css("left", - a.left + o[1].left), i.direction = "left", x.show("slide", i));
                else {
                    D=!0, M.css("top", - a.top + o[1].top), l = M.outerWidth();
                    var u = M.outerHeight();
                    o[0].left + l > e("body").outerWidth() ? M.css("left", - a.left + o[1].left - l) : M.css("left", - a.left + o[0].left);
                    var h;
                    if (n.parentsUntil("body, #icontent").filter(function() {
                        return "fixed" === e(this).css("position")
                    }).length > 0) {
                        var d = e(window);
                        h = d.height() + d.scrollTop()
                    } else
                        h = T() ? e("#icontent").height() : e(document).height();
                    var f = parseInt(M.css("top"), 10) - u - n.outerHeight();
                    o[1].top + u > h && f > 0 ? (M.css("top", f + "px"), i.direction = "down", O=!0) : (i.direction = "up", O=!1), x.show("slide", i)
                }
            }
            function y(e) {
                if (!window.disableFlyouts && n.parent().length) {
                    e && (R=!1), k=!0, n[0]._flyoutmenu_contract = null, n[0]._flyoutmenu_hide = null;
                    var i = {
                        wrapper: M,
                        duration: H,
                        complete: function() {
                            k=!1, C=!1, R && f(), t() && F.trigger(E.EVENTS.SUBNAV_HIDDEN)
                        }
                    };
                    D ? (i.direction = O ? "down" : "up", x.hide("slide", i)) : A ? (i.direction = "left", x.hide("slide", i)) : (i.direction = "right", x.hide("slide", i))
                }
            }
            n.css("position", "relative"), i(n).add(l(n)).css("position", "relative");
            var M, x, k=!1, C=!1, R=!1, S = 0, D=!1, A=!1, O=!1;
            x = g(n), x && (M = o(x), M.css("position", "absolute"), M.hide(), b ? (M.on("mouseover", u), M.on("mouseout", h), M.on("click", function(e) {
                s(e)
            })) : (M.on("mouseover", d), M.on("click", function(e) {
                s(e)
            }))), n.on("mouseover", u), n.on("mouseout", h), n.on("click", function(e) {
                s(e)
            }), n[0]._flyoutmenu_destroy = function(e) {
                if (n.off("mouseover", u), n.off("mouseout", h), n.off("click", s), M) {
                    b ? (M.off("mouseover", u), M.off("mouseout", h), M.off("click", s)) : (M.off("mouseover", d), M.off("click", s)), a(M).each(function() {
                        this._flyoutmenu_destroy()
                    }), e && M.detach();
                    var t = M;
                    return M = null, x = null, t
                }
            }, n[0]._get_sublist = function() {
                return x
            }
        }
        function u() {
            var t = 1;
            h(n).each(function() {
                this.className = this.className.replace(new RegExp(Y + "\\d+"), "");
                var n = e(this);
                "none" != n.css("display") && (n.addClass(Y + t), t++)
            })
        }
        var m = this;
        m.mouseoverItems = [], n = e(n), r = r || {};
        var y, w = "ontouchstart"in window, _ = 1e3 * (r.delay || .5), b = r.relocate ? e(r.relocate): !1;
        this.contract = function() {
            y.each(function(e, t) {
                t._flyoutmenu_contract && t._flyoutmenu_contract(!0)
            })
        }, this.hideSubmenus = function() {
            y.each(function(e, t) {
                t._flyoutmenu_hide && t._flyoutmenu_hide()
            })
        }, this.destroy = function() {
            y.each(function(e, t) {
                t._flyoutmenu_destroy && t._flyoutmenu_destroy()
            })
        }, this.addItem = function(t) {
            t = e(t);
            var n = d(t);
            if (n.length) {
                s(n);
                var i = g(n);
                i && a(i).each(function() {
                    s(e(this))
                }), b && i && b.append(o(i)), y = y.add(n), u()
            }
        }, this.removeItem = function(t) {
            t = e(t);
            var n = d(t);
            n.length && (n[0]._flyoutmenu_destroy && n[0]._flyoutmenu_destroy(!0), n.remove(), y = y.not(n), u())
        }, this.getMainList = function() {
            return n
        }, this.writeOrderingClassNames = u, y = f(n), y.each(function() {
            s(e(this))
        }), u(), b && h(n).each(function(t, n) {
            var i = g(e(n));
            i && b.append(o(i))
        })
    }, window.whenThemeCSSLoaded || (window.whenThemeCSSLoaded = b), Weebly.Menus = {
        inVerticalList: c
    };
    var it, rt;
    window.objectify = function(e) {
        return _.isEmpty(e) ? {} : e
    }
}(Weebly.jQuery), _wAMD.define("legacy/flyout_menus_jq", ["editor/page-manager/pages", "util/effect-slide-custom", "vendor/bootstrap/popover", "mustache"], function() {}), function(e) {
    e(document).ready(function() {
        e("a[rel=lightbox]").removeAttr("rel").add('a[rel^="lightbox["]').addClass("w-fancybox"), e.fn.fancybox && (e(".w-fancybox").fancybox({
            prevEffect: "none",
            nextEffect: "none",
            padding: 10,
            helpers: {
                title: {
                    type: "inside"
                },
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        }), window.lightboxLoaded=!0)
    })
}(Weebly.jQuery), _wAMD.define("site/published/fancybox", function() {}), function(e, t, n, i) {
    var r = n(e), o = n(t), s = n.fancybox = function() {
        s.open.apply(this, arguments)
    }, a = null, l = t.createTouch !== i, u = function(e) {
        return e && e.hasOwnProperty && e instanceof n
    }, c = function(e) {
        return e && "string" === n.type(e)
    }, h = function(e) {
        return c(e) && e.indexOf("%") > 0
    }, d = function(e) {
        return e&&!(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
    }, f = function(e, t) {
        var n = parseInt(e, 10);
        return t && h(e) && (n = s.getViewport()[t] / 100 * n), Math.ceil(n)
    }, p = function(e, t) {
        return f(e, t) + "px"
    };
    n.extend(s, {
        version: "2.1.0",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !l,
            autoCenter: !l,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + (n.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: {
                    closeClick: !0,
                    speedOut: 200,
                    showEarly: !0,
                    css: {}
                },
                title: {
                    type: "float"
                }
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = u(e) ? n(e).get() : [e]), n.each(e, function(r, o) {
                var a, l, h, d, f, p, g, m = {};
                "object" === n.type(o) && (o.nodeType && (o = n(o)), u(o) ? (m = {
                    href: o.attr("href"),
                    title: o.attr("title"),
                    isDom: !0,
                    element: o
                }, n.metadata && n.extend(!0, m, o.metadata())) : m = o), a = t.href || m.href || (c(o) ? o : null), l = t.title !== i ? t.title : m.title || "", h = t.content || m.content, d = h ? "html" : t.type || m.type, !d && m.isDom && (d = o.data("fancybox-type"), d || (f = o.prop("class").match(/fancybox\.(\w+)/), d = f ? f[1] : null)), c(a) && (d || (s.isImage(a) ? d = "image" : s.isSWF(a) ? d = "swf" : "#" === a.charAt(0) ? d = "inline" : c(o) && (d = "html", h = o)), "ajax" === d && (p = a.split(/\s+/, 2), a = p.shift(), g = p.shift())), h || ("inline" === d ? a ? h = n(c(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : m.isDom && (h = o) : "html" === d ? h = a : d || a ||!m.isDom || (d = "inline", h = o)), n.extend(m, {
                    href: a,
                    type: d,
                    content: h,
                    title: l,
                    selector: g
                }), e[r] = m
            }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
        },
        cancel: function() {
            var e = s.coming;
            e&&!1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0).trigger("onReset").remove(), s.current || s.trigger("afterClose"), s.coming = null)
        },
        close: function(e) {
            s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isOpen && e!==!0 ? (s.isOpen = s.isOpened=!1, s.isClosing=!0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), "fixed" === s.wrap.css("position") && s.wrap.css(s._getPosition(!0)), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut()))
        },
        play: function(e) {
            var t = function() {
                clearTimeout(s.player.timer)
            }, i = function() {
                t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
            }, r = function() {
                t(), n("body").unbind(".player"), s.player.isActive=!1, s.trigger("onPlayEnd")
            }, o = function() {
                s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive=!0, n("body").bind({
                    "afterShow.player onUpdate.player": i,
                    "onCancel.player beforeClose.player": r,
                    "beforeLoad.player": t
                }), i(), s.trigger("onPlayStart"))
            };
            e===!0 ||!s.player.isActive && e!==!1 ? o() : r()
        },
        next: function(e) {
            var t = s.current;
            t && (c(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = s.current;
            t && (c(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, n) {
            var r = s.current;
            r && (e = f(e), s.direction = t || r.direction[e >= r.index ? "next": "prev"], s.router = n || "jumpto", r.loop && (0 > e && (e = r.group.length + e%r.group.length), e%=r.group.length), r.group[e] !== i && (s.cancel(), s._start(e)))
        },
        reposition: function(e, t) {
            var n;
            s.isOpen && (n = s._getPosition(t), e && "scroll" === e.type ? (delete n.position, s.wrap.stop(!0, !0).animate(n, 200)) : s.wrap.css(n))
        },
        update: function(e) {
            var t = e && e.type, n=!t || "orientationchange" === t;
            n && (clearTimeout(a), a = null), s.isOpen&&!a && ((n || l) && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), a = setTimeout(function() {
                var n = s.current;
                n && (s.wrap.removeClass("fancybox-tmp"), "scroll" !== t && s._setDimension(), "scroll" === t && n.canShrink || s.reposition(e), s.trigger("onUpdate"), a = null)
            }, l ? 500 : n ? 20 : 300))
        },
        toggle: function(e) {
            s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, s.update())
        },
        hideLoading: function() {
            o.unbind("keypress.fb"), n("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            s.hideLoading(), o.bind("keypress.fb", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
            }), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t = s.current ? s.current.locked: !1, n = {
                x: r.scrollLeft(),
                y: r.scrollTop()
            };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = l && e.innerWidth ? e.innerWidth : r.width(), n.h = l && e.innerHeight ? e.innerHeight : r.height()), n
        },
        unbindEvents: function() {
            s.wrap && u(s.wrap) && s.wrap.unbind(".fb"), o.unbind(".fb"), r.unbind(".fb")
        },
        bindEvents: function() {
            var e, t = s.current;
            t && (r.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (t.autoCenter&&!t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && o.bind("keydown.fb", function(r) {
                var o = r.which || r.keyCode, a = r.target || r.srcElement;
                r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || a && (a.type || n(a).is("[contenteditable]")) || n.each(e, function(e, a) {
                    return t.group.length > 1 && a[o] !== i ? (s[e](a[o]), r.preventDefault(), !1) : n.inArray(o, a)>-1 ? (s[e](), r.preventDefault(), !1) : void 0
                })
            }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, i, r, o) {
                for (var a = e.target || null, l = n(a), u=!1; l.length&&!(u || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));)
                    u = d(l[0]), l = n(l).parent();
                0 === i || u || s.group.length > 1&&!t.canShrink && (o > 0 || r > 0 ? s.prev(o > 0 ? "down" : "left") : (0 > o || 0 > r) && s.next(0 > o ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(e, t) {
            var i, r = t || s.coming || s.current;
            if (r) {
                if (n.isFunction(r[e]) && (i = r[e].apply(r, Array.prototype.slice.call(arguments, 1))), i===!1)
                    return !1;
                "onCancel" !== e || s.isOpened || (s.isActive=!1), r.helpers && n.each(r.helpers, function(t, i) {
                    i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](i, r)
                }), n.event.trigger(e + ".fb")
            }
        },
        isImage: function(e) {
            return c(e) && e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)
        },
        isSWF: function(e) {
            return c(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, i, r, o, a, u = {};
            if (e = f(e), t = s.group[e] || null, !t)
                return !1;
            if (u = n.extend(!0, {}, s.opts, t), o = u.margin, a = u.padding, "number" === n.type(o) && (u.margin = [o, o, o, o]), "number" === n.type(a) && (u.padding = [a, a, a, a]), u.modal && n.extend(!0, u, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), u.autoSize && (u.autoWidth = u.autoHeight=!0), "auto" === u.width && (u.autoWidth=!0), "auto" === u.height && (u.autoHeight=!0), u.group = s.group, u.index = e, s.coming = u, !1 === s.trigger("beforeLoad"))
                return s.coming = null, void 0;
            if (r = u.type, i = u.href, !r)
                return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
            if (s.isActive=!0, ("image" === r || "swf" === r) && (u.autoHeight = u.autoWidth=!1, u.scrolling = "visible"), "image" === r && (u.aspectRatio=!0), "iframe" === r && l && (u.scrolling = "scroll"), u.wrap = n(u.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + u.wrapCSS).appendTo(u.parent), n.extend(u, {
                skin: n(".fancybox-skin", u.wrap),
                outer: n(".fancybox-outer", u.wrap),
                inner: n(".fancybox-inner", u.wrap)
            }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                u.skin.css("padding" + t, p(u.padding[e]))
            }), s.trigger("onReady"), "inline" === r || "html" === r) {
                if (!u.content ||!u.content.length)
                    return s._error("content")
            } else if (!i)
                return s._error("href");
            "image" === r ? s._loadImage() : "ajax" === r ? s._loadAjax() : "iframe" === r ? s._loadIframe() : s._afterLoad()
        },
        _error: function(e) {
            n.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: s.coming.tpl.error
            }), s._afterLoad()
        },
        _loadImage: function() {
            var e = s.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, s.coming.width = this.width, s.coming.height = this.height, s._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, e.complete !== i && e.complete || s.showLoading()
        },
        _loadAjax: function() {
            var e = s.coming;
            s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                },
                success: function(t, n) {
                    "success" === n && (e.content = t, s._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = s.coming, t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (s.showLoading(), t.one("load", function() {
                n(this).data("ready", 1), l || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
        },
        _preloadImages: function() {
            var e, t, n = s.group, i = s.current, r = n.length, o = i.preload ? Math.min(i.preload, r - 1): 0;
            for (t = 1; o >= t; t += 1)
                e = n[(i.index + t)%r], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e, t, i, r, o, a, l = s.coming, c = s.current, h = "fancybox-placeholder";
            if (s.hideLoading(), l && s.isActive!==!1) {
                if (!1 === s.trigger("afterLoad", l, c))
                    return l.wrap.stop(!0).trigger("onReset").remove(), s.coming = null, void 0;
                switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(), "fixed" === c.wrap.css("position") && c.wrap.css(s._getPosition(!0))), s.unbindEvents(), e = l, t = l.content, i = l.type, r = l.scrolling, n.extend(s, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: c
                }), o = e.href, i) {
                case"inline":
                case"ajax":
                case"html":
                    e.selector ? t = n("<div>").html(t).find(e.selector) : u(t) && (t.data(h) || t.data(h, n('<div class="' + h + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                        n(this).find(t).length && t.hide().replaceAll(t.data(h)).data(h, !1)
                    }));
                    break;
                case"image":
                    t = e.tpl.image.replace("{href}", o);
                    break;
                case"swf":
                    t = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", n.each(e.swf, function(e, n) {
                        t += '<param name="' + e + '" value="' + n + '"></param>', a += " " + e + '="' + n + '"'
                    }), t += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                }
                u(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), s._setDimension(), e.wrap.removeClass("fancybox-tmp"), e.pos = n.extend({}, e.dim, s._getPosition(!0)), s.isOpen=!1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod: e.openMethod](), s._preloadImages()
            }
        },
        _setDimension: function() {
            var e, t, i, r, o, a, l, u, c, d, g, m, v, y, w, _ = s.getViewport(), b = 0, M=!1, x=!1, k = s.wrap, C = s.skin, R = s.inner, S = s.current, D = S.width, T = S.height, A = S.minWidth, F = S.minHeight, E = S.maxWidth, O = S.maxHeight, P = S.scrolling, I = S.scrollOutside ? S.scrollbarWidth : 0, j = S.margin, W = j[1] + j[3], q = j[0] + j[2];
            if (k.add(C).add(R).width("auto").height("auto"), e = C.outerWidth(!0) - C.width(), t = C.outerHeight(!0) - C.height(), i = W + e, r = q + t, o = h(D) ? (_.w - i) * f(D) / 100 : D, a = h(T) ? (_.h - r) * f(T) / 100 : T, "iframe" === S.type) {
                if (y = S.content, S.autoHeight && 1 === y.data("ready"))
                    try {
                        y[0].contentWindow.document.location && (R.width(o).height(9999), w = y.contents().find("body"), I && w.css("overflow-x", "hidden"), a = w.height())
                    } catch (H) {}
            } else (S.autoWidth || S.autoHeight)
                && (R.addClass("fancybox-tmp"), S.autoWidth || R.width(o), S.autoHeight || R.height(a), S.autoWidth && (o = R.width()), S.autoHeight && (a = R.height()), R.removeClass("fancybox-tmp"));
            if (D = f(o), T = f(a), c = o / a, A = f(h(A) ? f(A, "w") - i : A), E = f(h(E) ? f(E, "w") - i : E), F = f(h(F) ? f(F, "h") - r : F), O = f(h(O) ? f(O, "h") - r : O), l = E, u = O, m = _.w - W, v = _.h - q, S.aspectRatio ? (D > E && (D = E, T = D / c), T > O && (T = O, D = T * c), A > D && (D = A, T = D / c), F > T && (T = F, D = T * c)) : (D = Math.max(A, Math.min(D, E)), T = Math.max(F, Math.min(T, O))), S.fitToView)
                if (E = Math.min(_.w - i, E), O = Math.min(_.h - r, O), R.width(f(D)).height(f(T)), k.width(f(D + e)), d = k.width(), g = k.height(), S.aspectRatio)
                    for (; (d > m || g > v) && D > A && T > F&&!(b++>19);)
                        T = Math.max(F, Math.min(O, T - 10)), D = T * c, A > D && (D = A, T = D / c), D > E && (D = E, T = D / c), R.width(f(D)).height(f(T)), k.width(f(D + e)), d = k.width(), g = k.height();
                else
                    D = Math.max(A, Math.min(D, D - (d - m))), T = Math.max(F, Math.min(T, T - (g - v)));
            I && "auto" === P && a > T && m > D + e + I && (D += I), R.width(f(D)).height(f(T)), k.width(f(D + e)), d = k.width(), g = k.height(), M = (d > m || g > v) && D > A && T > F, x = S.aspectRatio ? l > D && u > T && o > D && a > T : (l > D || u > T) && (o > D || a > T), n.extend(S, {
                dim: {
                    width: p(d),
                    height: p(g)
                },
                origWidth: o,
                origHeight: a,
                canShrink: M,
                canExpand: x,
                wPadding: e,
                hPadding: t,
                wrapSpace: g - C.outerHeight(!0),
                skinSpace: C.height() - T
            }), !y && S.autoHeight && T > F && O > T&&!x && R.height("auto")
        },
        _getPosition: function(e) {
            var t = s.current, n = s.getViewport(), i = t.margin, r = s.wrap.width() + i[1] + i[3], o = s.wrap.height() + i[0] + i[2], a = {
                position: "absolute",
                top: i[0],
                left: i[3]
            };
            return t.autoCenter && t.fixed&&!e && o <= n.h && r <= n.w ? a.position = "fixed" : t.locked || (a.top += n.y, a.left += n.x), a.top = p(Math.max(a.top, a.top + (n.h - o) * t.topRatio)), a.left = p(Math.max(a.left, a.left + (n.w - r) * t.leftRatio)), a
        },
        _afterZoomIn: function() {
            var e = s.current;
            e && (s.isOpen = s.isOpened=!0, s.wrap.addClass("fancybox-opened").css("overflow", "visible"), s.reposition(), (e.closeClick || e.nextClick) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                n(t.target).is("a") || n(t.target).parent().is("a") || s[e.closeClick ? "close": "next"]()
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", s.close), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay&&!s.player.isActive && (s.opts.autoPlay=!1, s.play()) : s.play(!1))
        },
        _afterZoomOut: function() {
            var e = s.current;
            n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), n.extend(s, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), s.trigger("afterClose", e)
        }
    }), s.transitions = {
        getOrigPosition: function() {
            var e = s.current, t = e.element, n = e.orig, i = {}, r = 50, o = 50, a = e.hPadding, l = e.wPadding, c = s.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), u(n) ? (i = n.offset(), n.is("img") && (r = n.outerWidth(), o = n.outerHeight())) : (i.top = c.y + (c.h - o) * e.topRatio, i.left = c.x + (c.w - r) * e.leftRatio), e.locked && (i.top -= c.y, i.left -= c.x), i = {
                top: p(i.top - a * e.topRatio),
                left: p(i.left - l * e.leftRatio),
                width: p(r + l),
                height: p(o + a)
            }
        },
        step: function(e, t) {
            var n, i, r, o = t.prop, a = s.current, l = a.wrapSpace, u = a.skinSpace;
            ("width" === o || "height" === o) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), i = "width" === o ? a.wPadding : a.hPadding, r = e - i, s.skin[o](f("width" === o ? r : r - l * n)), s.inner[o](f("width" === o ? r : r - l * n - u * n)))
        },
        zoomIn: function() {
            var e = s.current, t = e.pos, i = e.openEffect, r = "elastic" === i, o = n.extend({
                opacity: 1
            }, t);
            delete o.position, r ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t).animate(o, {
                duration: "none" === i ? 0: e.openSpeed,
                easing: e.openEasing,
                step: r ? this.step: null,
                complete: s._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = s.current, t = e.closeEffect, n = "elastic" === t, i = {
                opacity: .1
            };
            n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
                duration: "none" === t ? 0: e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step: null,
                complete: s._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = s.current, n = t.nextEffect, i = t.pos, r = {
                opacity: 1
            }, o = s.direction, a = 200;
            i.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[e] = p(f(i[e]) - a), r[e] = "+=" + a + "px") : (i[e] = p(f(i[e]) + a), r[e] = "-=" + a + "px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(r, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: s._afterZoomIn
            })
        },
        changeOut: function() {
            var e = s.previous, t = e.prevEffect, i = {
                opacity: .1
            }, r = s.direction, o = 200;
            "elastic" === t && (i["down" === r || "up" === r ? "top": "left"] = ("up" === r || "left" === r ? "-" : "+") + "=" + o + "px"), e.wrap.animate(i, {
                duration: "none" === t ? 0: e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, s.helpers.overlay = {
        overlay: null,
        update: function() {
            var e, i = "100%";
            this.overlay.width(i).height("100%"), n.browser.msie ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (i = o.width())) : o.width() > r.width() && (i = o.width()), this.overlay.width(i).height(o.height())
        },
        onReady: function(e, i) {
            n(".fancybox-overlay").stop(!0, !0), this.overlay || n.extend(this, {
                overlay: n('<div class="fancybox-overlay"></div>').appendTo(i.parent),
                margin: o.height() > r.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right"): !1,
                el: t.all&&!t.querySelector ? n("html"): n("body")
            }), i.fixed&&!l && (this.overlay.addClass("fancybox-overlay-fixed"), i.autoCenter && (this.overlay.append(i.wrap), i.locked = this.overlay)), e.showEarly===!0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var i = this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);
            e.closeClick && i.bind("click.fb", function(e) {
                n(e.target).hasClass("fancybox-overlay") && s.close()
            }), t.fixed&&!l ? t.locked && (this.el.addClass("fancybox-lock"), this.margin!==!1 && n("body").css("margin-right", f(this.margin) + t.scrollbarWidth)) : this.update(), i.show()
        },
        onUpdate: function(e, t) {
            (!t.fixed || l) && this.update()
        },
        afterClose: function(e) {
            var t = this, i = e.speedOut || 0;
            t.overlay&&!s.isActive && t.overlay.fadeOut(i || 0, function() {
                n("body").css("margin-right", t.margin), t.el.removeClass("fancybox-lock"), t.overlay.remove(), t.overlay = null
            })
        }
    }, s.helpers.title = {
        beforeShow: function(e) {
            var t, i, r = s.current.title, o = e.type;
            if (c(r) && "" !== n.trim(r)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + r + "</div>"), o) {
                case"inside":
                    i = s.skin;
                    break;
                case"outside":
                    i = s.wrap;
                    break;
                case"over":
                    i = s.inner;
                    break;
                default:
                    i = s.skin, t.appendTo("body").width(t.width()).wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                }
                "top" === e.position ? t.prependTo(i) : t.appendTo(i)
            }
        }
    }, n.fn.fancybox = function(e) {
        var t, i = n(this), r = this.selector || "", a = function(o) {
            var a, l, u = n(this).blur(), c = t;
            o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || u.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", l = u.attr(a), l || (a = "rel", l = u.get(0)[a]), l && "" !== l && "nofollow" !== l && (u = r.length ? n(r) : i, u = u.filter("[" + a + '="' + l + '"]'), c = u.index(this)), e.index = c, s.open(u, e)!==!1 && o.preventDefault())
        };
        return e = e || {}, t = e.index || 0, r && e.live!==!1 ? o.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a), this
    }, o.ready(function() {
        n.scrollbarWidth === i && (n.scrollbarWidth = function() {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), i = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), i
        }), n.support.fixedPosition === i && (n.support.fixedPosition = function() {
            var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"), t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), n.extend(s.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        })
    })
}(window, document, jQuery), function(e) {
    var t = e.fancybox;
    t.helpers.thumbs = {
        wrap: null,
        list: null,
        width: 0,
        source: function(t) {
            var n;
            return t.element && (n = e(t.element).find("img").attr("src")), !n && "image" === t.type && t.href && (n = t.href), n
        },
        init: function(t, n) {
            var i, r = this, o = t.width || 50, s = t.height || 50, a = t.source || this.source;
            i = "";
            for (var l = 0; l < n.group.length; l++)
                i += '<li><a style="width:' + o + "px;height:" + s + 'px;" href="javascript:jQuery.fancybox.jumpto(' + l + ');"></a></li>';
            this.wrap = e('<div id="fancybox-thumbs"></div>').addClass(t.position || "bottom").appendTo("body"), this.list = e("<ul>" + i + "</ul>").appendTo(this.wrap), e.each(n.group, function(t) {
                var i = a(n.group[t]);
                i && e("<img />").load(function() {
                    var n, i, a, l = this.width, u = this.height;
                    r.list && l && u && (n = l / o, i = u / s, a = r.list.children().eq(t).find("a"), n >= 1 && i >= 1 && (n > i ? (l = Math.floor(l / i), u = s) : (l = o, u = Math.floor(u / n))), e(this).css({
                        width: l,
                        height: u,
                        top: Math.floor(s / 2 - u / 2),
                        left: Math.floor(o / 2 - l / 2)
                    }), a.width(o).height(s), e(this).hide().appendTo(a).fadeIn(300))
                }).attr("src", i)
            }), this.width = this.list.children().eq(0).outerWidth(!0), this.list.width(this.width * (n.group.length + 1)).css("left", Math.floor(.5 * e(window).width() - (n.index * this.width + .5 * this.width)))
        },
        beforeLoad: function(e, t) {
            return t.group.length < 2 ? (t.helpers.thumbs=!1, void 0) : (t.margin["top" === e.position ? 0: 2] += (e.height || 50) + 15, void 0)
        },
        afterShow: function(e, t) {
            this.list ? this.onUpdate(e, t) : this.init(e, t), this.list.children().removeClass("active").eq(t.index).addClass("active")
        },
        onUpdate: function(t, n) {
            this.list && this.list.stop(!0).animate({
                left: Math.floor(.5 * e(window).width() - (n.index * this.width + .5 * this.width))
            }, 150)
        },
        beforeClose: function() {
            this.wrap && this.wrap.remove(), this.wrap = null, this.list = null, this.width = 0
        }
    }
}(jQuery), _wAMD.define("legacy/fancybox/fancybox", function() {}), _wAMD.require(["underscore", "mustache", "site/published/core", "site/published/app", "util/platform/elements/PlatformElement", "backbone", "legacy/flyout_menus_jq", "site/published/fancybox", "legacy/fancybox/fancybox"], function(e, t, n, i, r, o) {
    if (i.start(), window.PlatformElement = r, e.each(_W.templates, function(e, n) {
        t.compilePartial(n, e)
    }), _W.events = {}, e.extend(_W.events, o.Events), document.createEvent && document.addEventListener) {
        var s = document.createEvent("Event");
        s.initEvent("appReady", !0, !1), document.dispatchEvent(s), document.documentElement.appReady = 1
    } else
        0 === document.documentElement.appReady ? document.documentElement.appReady++ : document.documentElement.appReady = 1
}), _wAMD.define("site/published/main", function() {}), _wAMD.define("site/main", function() {});
