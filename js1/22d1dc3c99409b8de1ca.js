/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[35], {
    111 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.
    default = void 0;
        var o = r(n(0)),
        l = n(112),
        d = r(n(211)),
        h = o.
    default.prototype,
        c = o.
    default.util.defineReactive;
        c(h, "$vantLang", "zh-CN"),
        c(h, "$vantMessages", {
            "zh-CN": d.
        default
        });
        var f = {
            messages: function() {
                return h.$vantMessages[h.$vantLang]
            },
            use: function(e, t) {
                var n;
                h.$vantLang = e,
                this.add(((n = {})[e] = t, n))
            },
            add: function(e) {
                void 0 === e && (e = {}),
                (0, l.deepAssign)(h.$vantMessages, e)
            }
        };
        t.
    default = f
    },
    112 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.deepAssign = l;
        var r = n(16),
        o = Object.prototype.hasOwnProperty;
        function l(e, t) {
            return Object.keys(t).forEach(function(n) { !
                function(e, t, n) {
                    var d = t[n]; ! (0, r.isDef)(d) || o.call(e, n) && !(0, r.isDef)(e[n]) || (o.call(e, n) && (0, r.isObj)(d) ? e[n] = l(Object(e[n]), t[n]) : e[n] = d)
                } (e, t, n)
            }),
            e
        }
    },
    113 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.on = function(e, t, n, l) {
            void 0 === l && (l = !1);
            r.isServer || e.addEventListener(t, n, !!o && {
                capture: !1,
                passive: l
            })
        },
        t.off = function(e, t, n) { ! r.isServer && e.removeEventListener(t, n)
        },
        t.stop = function(e) {
            e.stopPropagation()
        },
        t.prevent = function(e) {
            e.preventDefault()
        },
        t.supportsPassive = void 0;
        var r = n(16),
        o = !1;
        if (t.supportsPassive = o, !r.isServer) try {
            var l = {};
            Object.defineProperty(l, "passive", {
                get: function() {
                    t.supportsPassive = o = !0
                }
            }),
            window.addEventListener("test-passive", r.noop, l)
        } catch(e) {}
    },
    114 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.deepClone = function e(t) {
            if (Array.isArray(t)) return t.map(function(t) {
                return e(t)
            });
            if ("object" == typeof t) return (0, r.deepAssign)({},
            t);
            return t
        };
        var r = n(112)
    },
    115 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.
    default = void 0;
        var r = {
            zIndex: 2e3,
            stack: [],
            lockCount: 0,
            get top() {
                return this.stack[this.stack.length - 1]
            }
        };
        t.
    default = r
    },
    116 : function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
        o = function() {
            for (var e = [], i = 0; i < 256; ++i) e.push("%" + ((i < 16 ? "0": "") + i.toString(16)).toUpperCase());
            return e
        } (),
        l = function(source, e) {
            for (var t = e && e.plainObjects ? Object.create(null) : {},
            i = 0; i < source.length; ++i) void 0 !== source[i] && (t[i] = source[i]);
            return t
        };
        e.exports = {
            arrayToObject: l,
            assign: function(e, source) {
                return Object.keys(source).reduce(function(e, t) {
                    return e[t] = source[t],
                    e
                },
                e)
            },
            combine: function(a, b) {
                return [].concat(a, b)
            },
            compact: function(e) {
                for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], i = 0; i < t.length; ++i) for (var r = t[i], o = r.obj[r.prop], l = Object.keys(o), d = 0; d < l.length; ++d) {
                    var h = l[d],
                    c = o[h];
                    "object" == typeof c && null !== c && -1 === n.indexOf(c) && (t.push({
                        obj: o,
                        prop: h
                    }), n.push(c))
                }
                return function(e) {
                    for (; e.length > 1;) {
                        var t = e.pop(),
                        n = t.obj[t.prop];
                        if (Array.isArray(n)) {
                            for (var r = [], o = 0; o < n.length; ++o) void 0 !== n[o] && r.push(n[o]);
                            t.obj[t.prop] = r
                        }
                    }
                } (t),
                e
            },
            decode: function(e, t, n) {
                var r = e.replace(/\+/g, " ");
                if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(r)
                } catch(e) {
                    return r
                }
            },
            encode: function(e, t, n) {
                if (0 === e.length) return e;
                var r = "string" == typeof e ? e: String(e);
                if ("iso-8859-1" === n) return escape(r).replace(/%u[0-9a-f]{4}/gi,
                function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                });
                for (var l = "",
                i = 0; i < r.length; ++i) {
                    var d = r.charCodeAt(i);
                    45 === d || 46 === d || 95 === d || 126 === d || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 ? l += r.charAt(i) : d < 128 ? l += o[d] : d < 2048 ? l += o[192 | d >> 6] + o[128 | 63 & d] : d < 55296 || d >= 57344 ? l += o[224 | d >> 12] + o[128 | d >> 6 & 63] + o[128 | 63 & d] : (i += 1, d = 65536 + ((1023 & d) << 10 | 1023 & r.charCodeAt(i)), l += o[240 | d >> 18] + o[128 | d >> 12 & 63] + o[128 | d >> 6 & 63] + o[128 | 63 & d])
                }
                return l
            },
            isBuffer: function(e) {
                return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            merge: function e(t, source, n) {
                if (!source) return t;
                if ("object" != typeof source) {
                    if (Array.isArray(t)) t.push(source);
                    else {
                        if ("object" != typeof t) return [t, source]; (n && (n.plainObjects || n.allowPrototypes) || !r.call(Object.prototype, source)) && (t[source] = !0)
                    }
                    return t
                }
                if ("object" != typeof t) return [t].concat(source);
                var o = t;
                return Array.isArray(t) && !Array.isArray(source) && (o = l(t, n)),
                Array.isArray(t) && Array.isArray(source) ? (source.forEach(function(o, i) {
                    r.call(t, i) ? t[i] && "object" == typeof t[i] ? t[i] = e(t[i], o, n) : t.push(o) : t[i] = o
                }), t) : Object.keys(source).reduce(function(t, o) {
                    var l = source[o];
                    return r.call(t, o) ? t[o] = e(t[o], l, n) : t[o] = l,
                    t
                },
                o)
            }
        }
    },
    117 : function(e, t, n) {
        "use strict";
        var r = String.prototype.replace,
        o = /%20/g;
        e.exports = {
        default:
            "RFC3986",
            formatters: {
                RFC1738: function(e) {
                    return r.call(e, o, "+")
                },
                RFC3986: function(e) {
                    return e
                }
            },
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        }
    },
    119 : function(e, t, n) {
        "use strict";
        var r = {
            name: "NoSsr",
            functional: !0,
            props: {
                placeholder: String,
                placeholderTag: {
                    type: String,
                default:
                    "div"
                }
            },
            render: function(e, t) {
                var n = t.parent,
                r = t.slots,
                o = t.props,
                l = r(),
                d = l.
            default;
                void 0 === d && (d = []);
                var h = l.placeholder;
                return n._isMounted ? d: (n.$once("hook:mounted",
                function() {
                    n.$forceUpdate()
                }), o.placeholderTag && (o.placeholder || h) ? e(o.placeholderTag, {
                    class: ["no-ssr-placeholder"]
                },
                o.placeholder || h) : d.length > 0 ? d.map(function() {
                    return e(!1)
                }) : e(!1))
            }
        };
        e.exports = r
    },
    121 : function(e, t, n) {
        e.exports = n(201).
    default
    },
    122 : function(e, t, n) { (function(t) {
            e.exports = function() {
                "use strict";
                function i(i, e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(i, n.key, n)
                    }
                }
                function e(e, t, n) {
                    return t && i(e.prototype, t),
                    n && i(e, n),
                    e
                }
                function n(i, e, t) {
                    return e in i ? Object.defineProperty(i, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[e] = t,
                    i
                }
                function r(i) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function(i) {
                        return typeof i
                    }: function(i) {
                        return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol": typeof i
                    })(i)
                }
                function s(i, e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(i, n.key, n)
                    }
                }
                function o(i, e, t) {
                    return e && s(i.prototype, e),
                    t && s(i, t),
                    i
                }
                function l(i, e, t) {
                    return e in i ? Object.defineProperty(i, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[e] = t,
                    i
                }
                var d = function() {
                    function i(e) { !
                        function(i, e) {
                            if (! (i instanceof e)) throw new TypeError("Cannot call a class as a function")
                        } (this, i),
                        l(this, "userAgent", void 0),
                        this.userAgent = e || navigator && navigator.userAgent
                    }
                    return o(i, null, [{
                        key: "create",
                        value: function(i) {
                            return this.instance || (this.instance = new this(i)),
                            this.instance
                        }
                    }]),
                    o(i, [{
                        key: "find",
                        value: function(i) {
                            return new RegExp(i, "i").test(this.userAgent)
                        }
                    },
                    {
                        key: "isIphone",
                        value: function() {
                            return ! this.isWindows() && this.find("iphone")
                        }
                    },
                    {
                        key: "isIpod",
                        value: function() {
                            return this.find("ipod")
                        }
                    },
                    {
                        key: "isIpad",
                        value: function() {
                            return this.find("ipad")
                        }
                    },
                    {
                        key: "isIos",
                        value: function() {
                            return this.isIphone() || this.isIpad() || this.isIpod()
                        }
                    },
                    {
                        key: "isWindows",
                        value: function() {
                            return this.find("windows")
                        }
                    },
                    {
                        key: "isWindowsPhone",
                        value: function() {
                            return this.isWindows() && this.find("phone")
                        }
                    },
                    {
                        key: "isWindowsTablet",
                        value: function() {
                            return this.isWindows() && this.find("touch") && !this.isWindowsPhone()
                        }
                    },
                    {
                        key: "isAndroid",
                        value: function() {
                            return ! this.isWindows() && this.find("android")
                        }
                    },
                    {
                        key: "isAndroidPhone",
                        value: function() {
                            return this.isAndroid() && this.find("mobile")
                        }
                    },
                    {
                        key: "isAndroidTablet",
                        value: function() {
                            return this.isAndroid() && !this.find("mobile")
                        }
                    },
                    {
                        key: "isBlackberry",
                        value: function() {
                            return this.find("blackberry") || this.find("bb10") || this.find("rim")
                        }
                    },
                    {
                        key: "isBlackberryPhone",
                        value: function() {
                            return this.isBlackberry() && !this.find("tablet")
                        }
                    },
                    {
                        key: "isBlackberryTablet",
                        value: function() {
                            return this.isBlackberry() && this.find("tablet")
                        }
                    },
                    {
                        key: "isFirefox",
                        value: function() {
                            return (this.find("mobile") || this.find("tablet")) && this.find("firefox")
                        }
                    },
                    {
                        key: "isFirefoxPhone",
                        value: function() {
                            return this.isFirefox() && this.find("mobile")
                        }
                    },
                    {
                        key: "isFirefoxTablet",
                        value: function() {
                            return this.isFirefox() && this.find("tablet")
                        }
                    },
                    {
                        key: "isMeego",
                        value: function() {
                            return this.find("meego")
                        }
                    },
                    {
                        key: "isCordova",
                        value: function() {
                            return window && "file:" === location.protocol
                        }
                    },
                    {
                        key: "isNode",
                        value: function() {
                            return "object" === (void 0 === t ? "undefined": r(t))
                        }
                    },
                    {
                        key: "isMobile",
                        value: function() {
                            return this.isAndroidPhone() || this.isIphone() || this.isIpod() || this.isWindowsPhone() || this.isBlackberryPhone() || this.isFirefoxPhone() || this.isMeego()
                        }
                    },
                    {
                        key: "isTablet",
                        value: function() {
                            return this.isIpad() || this.isAndroidTablet() || this.isBlackberryTablet() || this.isWindowsTablet() || this.isFirefoxTablet()
                        }
                    },
                    {
                        key: "isDesktop",
                        value: function() {
                            return ! this.isTablet() && !this.isMobile()
                        }
                    },
                    {
                        key: "isTv",
                        value: function() {
                            var i = this;
                            return ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"].some(function(e) {
                                return i.find(e)
                            })
                        }
                    }]),
                    i
                } ();
                l(d, "instance", void 0);
                var h = function() {
                    function i() { !
                        function(i, e) {
                            if (! (i instanceof e)) throw new TypeError("Cannot call a class as a function")
                        } (this, i),
                        n(this, "device", void 0),
                        this.device = new d
                    }
                    return e(i, null, [{
                        key: "create",
                        value: function() {
                            return this.instance || (this.instance = new this),
                            this.instance
                        }
                    }]),
                    e(i, [{
                        key: "fetch",
                        value: function(i) {
                            var e = this.getStatus();
                            return e ? {
                                1 : "http://wpa.qq.com/msgrd?v=3&uin=".concat(i, "&site=qq&menu=yes"),
                                2 : "mqqwpa://im/chat?chat_type=wpa&uin=".concat(i, "&version=1&src_type=web&web_src=yidian51.com"),
                                3 : "mqq://im/chat?chat_type=wpa&uin=".concat(i, "&version=1&src_type=web"),
                                4 : "tencent://message/?uin=".concat(i, "&Site=https://wap.yidian51.com&Menu=yes")
                            } [e] : null
                        }
                    },
                    {
                        key: "getStatus",
                        value: function() {
                            return this.device.isMobile() || this.device.isIpad() ? this.device.find("15C202") || this.device.find("15E216") || this.device.find("14G60") || this.device.find("OPiOS") && this.device.isIphone() ? 0 : this.device.find("Mb2345Browser") && this.device.isIphone() && (this.device.find("14A456") || this.device.find("15C114")) ? 0 : this.device.find("Quark") && this.device.isIphone() && (this.device.find("14A456") || this.device.find("14F89")) ? 0 : this.device.find("UCBrowser") && this.device.isIphone() && this.device.find("15E216") ? 0 : this.device.find("searchBrowser") && this.device.isIphone() && this.device.find("12B466") ? 0 : this.device.find("FxiOS") && this.device.isIphone() && (this.device.find("15C202") || this.device.find("15D100") || this.device.find("16A5288q")) ? 0 : this.device.find("baiduboxapp") || this.device.find("baidubrowser") ? 0 : this.device.find("MXiOS") && this.device.isIphone() ? this.device.find("15C202") || this.device.find("14G60") ? 1 : 0 : this.device.find("MicroMessenger") ? 1 : this.device.find("iPhone 84") && this.device.find("MQQBrowser") ? 2 : this.device.find("UCBrowser") || this.device.find("MQQBrowser") ? 2 : this.device.find("SogouMobileBrowser") ? 1 : this.device.find("QihooBrowser") ? 2 : this.device.find("iPhone") && this.device.find("Safari") ? 2 : this.device.find("HUAWEI") && this.device.find("Safari") ? 3 : 1 : 4
                        }
                    }]),
                    i
                } ();
                return n(h, "instance", void 0),
                h
            } ()
        }).call(this, n(55))
    },
    123 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.
    default = void 0;
        var o = r(n(56)),
        l = n(16),
        d = n(113),
        h = n(114),
        c = n(214),
        f = r(n(215)),
        v = r(n(216)),
        m = (0, l.use)("picker"),
        y = m[0],
        w = m[1],
        x = m[2],
        E = y({
            props: (0, o.
        default)({},
            c.pickerProps, {
                columns: Array,
                valueKey: {
                    type: String,
                default:
                    "text"
                }
            }),
            data: function() {
                return {
                    children: []
                }
            },
            computed: {
                simple: function() {
                    return this.columns.length && !this.columns[0].values
                }
            },
            watch: {
                columns: function() {
                    this.setColumns()
                }
            },
            methods: {
                setColumns: function() {
                    var e = this; (this.simple ? [{
                        values: this.columns
                    }] : this.columns).forEach(function(t, n) {
                        e.setColumnValues(n, (0, h.deepClone)(t.values))
                    })
                },
                emit: function(e) {
                    this.simple ? this.$emit(e, this.getColumnValue(0), this.getColumnIndex(0)) : this.$emit(e, this.getValues(), this.getIndexes())
                },
                onChange: function(e) {
                    this.simple ? this.$emit("change", this, this.getColumnValue(0), this.getColumnIndex(0)) : this.$emit("change", this, this.getValues(), e)
                },
                getColumn: function(e) {
                    return this.children[e]
                },
                getColumnValue: function(e) {
                    var t = this.getColumn(e);
                    return t && t.getValue()
                },
                setColumnValue: function(e, t) {
                    var n = this.getColumn(e);
                    n && n.setValue(t)
                },
                getColumnIndex: function(e) {
                    return (this.getColumn(e) || {}).currentIndex
                },
                setColumnIndex: function(e, t) {
                    var n = this.getColumn(e);
                    n && n.setIndex(t)
                },
                getColumnValues: function(e) {
                    return (this.children[e] || {}).options
                },
                setColumnValues: function(e, t) {
                    var n = this.children[e];
                    n && JSON.stringify(n.options) !== JSON.stringify(t) && (n.options = t, n.setIndex(0))
                },
                getValues: function() {
                    return this.children.map(function(e) {
                        return e.getValue()
                    })
                },
                setValues: function(e) {
                    var t = this;
                    e.forEach(function(e, n) {
                        t.setColumnValue(n, e)
                    })
                },
                getIndexes: function() {
                    return this.children.map(function(e) {
                        return e.currentIndex
                    })
                },
                setIndexes: function(e) {
                    var t = this;
                    e.forEach(function(e, n) {
                        t.setColumnIndex(n, e)
                    })
                },
                onConfirm: function() {
                    this.emit("confirm")
                },
                onCancel: function() {
                    this.emit("cancel")
                }
            },
            render: function(e) {
                var t = this,
                n = this.itemHeight,
                r = this.simple ? [this.columns] : this.columns,
                o = {
                    height: n + "px"
                },
                l = {
                    height: n * this.visibleItemCount + "px"
                },
                h = this.showToolbar && e("div", {
                    class: ["van-hairline--top-bottom", w("toolbar")]
                },
                [this.slots() || [e("div", {
                    class: w("cancel"),
                    on: {
                        click: this.onCancel
                    }
                },
                [this.cancelButtonText || x("cancel")]), this.slots("title") || this.title && e("div", {
                    class: ["van-ellipsis", w("title")]
                },
                [this.title]), e("div", {
                    class: w("confirm"),
                    on: {
                        click: this.onConfirm
                    }
                },
                [this.confirmButtonText || x("confirm")])]]);
                return e("div", {
                    class: w()
                },
                [h, this.loading && e("div", {
                    class: w("loading")
                },
                [e(f.
            default)]), e("div", {
                    class: w("columns"),
                    style: l,
                    on: {
                        touchmove: d.prevent
                    }
                },
                [r.map(function(n, r) {
                    return e(v.
                default, {
                        attrs: {
                            valueKey: t.valueKey,
                            className: n.className,
                            itemHeight: t.itemHeight,
                            defaultIndex: n.defaultIndex,
                            visibleItemCount: t.visibleItemCount,
                            initialOptions: t.simple ? n: n.values
                        },
                        on: {
                            change: function() {
                                t.onChange(r)
                            }
                        }
                    })
                }), e("div", {
                    class: ["van-hairline--top-bottom", w("frame")],
                    style: o
                })])])
            }
        });
        t.
    default = E
    },
    124 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.
    default = void 0;
        var r = n(16),
        o = n(217),
        l = (0, r.use)("popup"),
        d = l[0],
        h = l[1],
        c = d({
            mixins: [o.PopupMixin],
            props: {
                position: String,
                transition: String,
                overlay: {
                    type: Boolean,
                default:
                    !0
                },
                closeOnClickOverlay: {
                    type: Boolean,
                default:
                    !0
                }
            },
            render: function(e) {
                var t, n = this;
                if (this.shouldRender) {
                    var r = this.position,
                    o = function(e) {
                        return function() {
                            return n.$emit(e)
                        }
                    };
                    return e("transition", {
                        attrs: {
                            name: this.transition || (r ? "van-popup-slide-" + r: "van-fade")
                        },
                        on: {
                            afterEnter: o("opened"),
                            afterLeave: o("closed")
                        }
                    },
                    [e("div", {
                        directives: [{
                            name: "show",
                            value: this.value
                        }],
                        class: h((t = {},
                        t[r] = r, t))
                    },
                    [this.slots()])])
                }
            }
        });
        t.
    default = c
    },
    125 : function(e, t, n) {
        "use strict";
        var r = n(224),
        o = n(225),
        l = n(117);
        e.exports = {
            formats: l,
            parse: o,
            stringify: r
        }
    },
    126 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.install = t.swiper = t.Swiper = void 0;
        var r = l(n(227)),
        o = l(n(228));
        function l(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var d = window.Swiper || r.
    default,
        h = ["beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize"],
        c = function(e) {
            var t = function(e, t, n) {
                var r = null;
                return t.arg ? r = t.arg: n.data.attrs && (n.data.attrs.instanceName || n.data.attrs["instance-name"]) ? r = n.data.attrs.instanceName || n.data.attrs["instance-name"] : e.id && (r = e.id),
                r || "swiper"
            };
            return {
                bind: function(e, t, n) {
                    n.context; - 1 === e.className.indexOf("swiper-container") && (e.className += (e.className ? " ": "") + "swiper-container")
                },
                inserted: function(n, r, l) {
                    var c = l.context,
                    f = r.value,
                    v = t(n, r, l),
                    m = c[v],
                    y = function(e, t, data) {
                        var n = e.data && e.data.on || e.componentOptions && e.componentOptions.listeners;
                        n && n[t] && n[t].fns(data)
                    };
                    if (!m) {
                        var w = (0, o.
                    default)({},
                        e, f);
                        m = c[v] = new d(n, w),
                        h.forEach(function(e) {
                            m.on(e,
                            function() {
                                y.apply(void 0, [l, e].concat(Array.prototype.slice.call(arguments))),
                                y.apply(void 0, [l, e.replace(/([A-Z])/g, "-$1")].concat(Array.prototype.slice.call(arguments)))
                            })
                        })
                    }
                    y(l, "ready", m)
                },
                componentUpdated: function(e, n, r) {
                    var o = t(e, n, r),
                    l = r.context[o];
                    l && (l.update && l.update(), l.navigation && l.navigation.update(), l.pagination && l.pagination.render(), l.pagination && l.pagination.update())
                },
                unbind: function(e, n, r) {
                    var o = t(e, n, r),
                    l = r.context[o];
                    l && (l.destroy && l.destroy(), delete r.context[o])
                }
            }
        },
        f = c({}),
        v = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e.directive("swiper", c(t))
        },
        m = {
            Swiper: d,
            swiper: f,
            install: v
        };
        t.Swiper = d,
        t.swiper = f,
        t.install = v,
        t.
    default = m
    },
    16 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.noop = function() {},
        t.isDef = h,
        t.isObj = function(e) {
            var t = typeof e;
            return null !== e && ("object" === t || "function" === t)
        },
        t.get = function(object, path) {
            var e = path.split("."),
            t = object;
            return e.forEach(function(e) {
                t = h(t[e]) ? t[e] : ""
            }),
            t
        },
        t.camelize = function(e) {
            return e.replace(c,
            function(e, t) {
                return t.toUpperCase()
            })
        },
        t.isAndroid = function() {
            return ! d && /android/.test(navigator.userAgent.toLowerCase())
        },
        t.isIOS = function() {
            return ! d && /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
        },
        t.range = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        },
        t.isServer = t.use = void 0;
        var o = r(n(0)),
        l = n(208);
        t.use = l.use;
        var d = o.
    default.prototype.$isServer;
        function h(e) {
            return null != e
        }
        t.isServer = d;
        var c = /-(\w)/g
    },
    201 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isNetworkError = h,
        t.isRetryableError = v,
        t.isSafeRequestError = m,
        t.isIdempotentRequestError = y,
        t.isNetworkOrIdempotentRequestError = w,
        t.exponentialDelay = E,
        t.
    default = C;
        var r, o = n(202),
        l = (r = o) && r.__esModule ? r: {
        default:
            r
        };
        var d = "axios-retry";
        function h(e) {
            return ! e.response && Boolean(e.code) && "ECONNABORTED" !== e.code && (0, l.
        default)(e)
        }
        var c = ["get", "head", "options"],
        f = c.concat(["put", "delete"]);
        function v(e) {
            return "ECONNABORTED" !== e.code && (!e.response || e.response.status >= 500 && e.response.status <= 599)
        }
        function m(e) {
            return !! e.config && (v(e) && -1 !== c.indexOf(e.config.method))
        }
        function y(e) {
            return !! e.config && (v(e) && -1 !== f.indexOf(e.config.method))
        }
        function w(e) {
            return h(e) || y(e)
        }
        function x() {
            return 0
        }
        function E() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = 100 * Math.pow(2, e);
            return t + .2 * t * Math.random()
        }
        function T(e) {
            var t = e[d] || {};
            return t.retryCount = t.retryCount || 0,
            e[d] = t,
            t
        }
        function C(e, t) {
            e.interceptors.request.use(function(e) {
                return T(e).lastRequestTime = Date.now(),
                e
            }),
            e.interceptors.response.use(null,
            function(n) {
                var r = n.config;
                if (!r) return Promise.reject(n);
                var o = function(e, t) {
                    return Object.assign({},
                    t, e[d])
                } (r, t),
                l = o.retries,
                h = void 0 === l ? 3 : l,
                c = o.retryCondition,
                f = void 0 === c ? w: c,
                v = o.retryDelay,
                m = void 0 === v ? x: v,
                y = o.shouldResetTimeout,
                E = void 0 !== y && y,
                C = T(r);
                if (f(n) && C.retryCount < h) {
                    C.retryCount += 1;
                    var S = m(C.retryCount, n);
                    if (function(e, t) {
                        e.defaults.agent === t.agent && delete t.agent,
                        e.defaults.httpAgent === t.httpAgent && delete t.httpAgent,
                        e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent
                    } (e, r), !E && r.timeout && C.lastRequestTime) {
                        var M = Date.now() - C.lastRequestTime;
                        r.timeout = Math.max(r.timeout - M - S, 1)
                    }
                    return r.transformRequest = [function(data) {
                        return data
                    }],
                    new Promise(function(t) {
                        return setTimeout(function() {
                            return t(e(r))
                        },
                        S)
                    })
                }
                return Promise.reject(n)
            })
        }
        C.isNetworkError = h,
        C.isSafeRequestError = m,
        C.isIdempotentRequestError = y,
        C.isNetworkOrIdempotentRequestError = w,
        C.exponentialDelay = E,
        C.isRetryableError = v
    },
    202 : function(e, t, n) {
        "use strict";
        var r = ["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ESOCKETTIMEDOUT", "ECONNREFUSED", "EPIPE"],
        o = ["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED"];
        e.exports = function(e) {
            return ! e || !e.code || ( - 1 !== r.indexOf(e.code) || -1 === o.indexOf(e.code))
        }
    },
    208 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.use = function(e) {
            return e = "van-" + e,
            [(0, o.useSFC)(e), (0, r.useBEM)(e), (0, l.useI18N)(e)]
        };
        var r = n(209),
        o = n(210),
        l = n(213)
    },
    209 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.useBEM = void 0;
        var r = "--";
        function o(e, t, symbol) {
            return t ? e + symbol + t: e
        }
        function l(e, t) {
            if ("string" == typeof t) return o(e, t, r);
            if (Array.isArray(t)) return t.map(function(t) {
                return l(e, t)
            });
            var n = {};
            return t && Object.keys(t).forEach(function(o) {
                n[e + r + o] = t[o]
            }),
            n
        }
        t.useBEM = function(e) {
            return function(t, n) {
                return t && "string" != typeof t && (n = t, t = ""),
                t = o(e, t, "__"),
                n ? [t, l(t, n)] : t
            }
        }
    },
    210 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.unifySlots = c,
        t.useSFC = void 0,
        n(111);
        var r = n(16),
        o = n(212),
        l = {
            type: Array,
        default:
            function() {
                return []
            }
        },
        d = {
            type: Number,
        default:
            0
        };
        function h(e) {
            var t = this.name;
            t && (e.component(t, this), e.component((0, r.camelize)("-" + t), this))
        }
        function c(e) {
            var t = e.scopedSlots || e.data.scopedSlots || {},
            n = e.slots();
            return Object.keys(n).forEach(function(e) {
                t[e] || (t[e] = function() {
                    return n[e]
                })
            }),
            t
        }
        t.useSFC = function(e) {
            return function(t) {
                var n, r;
                return "function" == typeof t && (t = {
                    functional: !0,
                    props: (n = t).props,
                    model: n.model,
                    render: function(e, t) {
                        return n(e, t.props, c(t), t)
                    }
                }),
                t.functional || (t.mixins = t.mixins || [], t.mixins.push(o.SlotsMixin)),
                t.props && (r = t.props, Object.keys(r).forEach(function(e) {
                    r[e] === Array ? r[e] = l: r[e] === Number && (r[e] = d)
                })),
                t.name = e,
                t.install = h,
                t
            }
        }
    },
    211 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.
    default = void 0;
        t.
    default = {
            name: "姓名",
            tel: "电话",
            save: "保存",
            confirm: "确认",
            cancel: "取消",
            delete: "删除",
            complete: "完成",
            loading: "加载中...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            confirmDelete: "确定要删除么",
            telInvalid: "请填写正确的电话",
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "下拉即可刷新...",
                loosing: "释放即可刷新..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                valid: "有效期",
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "使用优惠",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠",
                enable: "可使用优惠券",
                disabled: "不可使用优惠券",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        }
    },
    212 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.SlotsMixin = void 0;
        t.SlotsMixin = {
            methods: {
                slots: function(e, t) {
                    void 0 === e && (e = "default");
                    var n = this.$slots,
                    r = this.$scopedSlots;
                    return r[e] ? r[e](t) : n[e]
                }
            }
        }
    },
    213 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.useI18N = void 0;
        var o = n(16),
        l = r(n(111));
        t.useI18N = function(e) {
            var t = (0, o.camelize)(e) + ".";
            return function(path) {
                for (var e = (0, o.get)(l.
            default.messages(), t + path) || (0, o.get)(l.
            default.messages(), path), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++) r[d - 1] = arguments[d];
                return "function" == typeof e ? e.apply(void 0, r) : e
            }
        }
    },
    214 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.pickerProps = void 0;
        var r = {
            title: String,
            loading: Boolean,
            showToolbar: Boolean,
            cancelButtonText: String,
            confirmButtonText: String,
            visibleItemCount: {
                type: Number,
            default:
                5
            },
            itemHeight: {
                type: Number,
            default:
                44
            }
        };
        t.pickerProps = r
    },
    215 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.
    default = void 0;
        var o = r(n(84)),
        l = n(16),
        d = n(78),
        h = (0, l.use)("loading"),
        c = h[0],
        f = h[1],
        v = "#c9c9c9";
        function m(e, t, n, r) {
            var l = t.color,
            h = t.size,
            c = t.type,
            m = "white" === l || "black" === l ? l: "",
            style = {
                color: "black" === l ? v: l,
                width: h,
                height: h
            },
            y = [];
            if ("spinner" === c) for (var i = 0; i < 12; i++) y.push(e("i"));
            var w = "circular" === c && e("svg", {
                class: f("circular"),
                attrs: {
                    viewBox: "25 25 50 50"
                }
            },
            [e("circle", {
                attrs: {
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none"
                }
            })]);
            return e("div", (0, o.
        default)([{
                class:
                f([c, m]),
                style: style
            },
            (0, d.inherit)(r, !0)]), [e("span", {
                class: f("spinner", c)
            },
            [y, w])])
        }
        m.props = {
            size: String,
            type: {
                type: String,
            default:
                "circular"
            },
            color: {
                type: String,
            default:
                v
            }
        };
        var y = c(m);
        t.
    default = y
    },
    216 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.
    default = void 0;
        var r = n(114),
        o = n(16),
        l = (0, o.use)("picker-column"),
        d = l[0],
        h = l[1],
        c = d({
            props: {
                valueKey: String,
                className: String,
                itemHeight: Number,
                defaultIndex: Number,
                initialOptions: Array,
                visibleItemCount: Number
            },
            data: function() {
                return {
                    startY: 0,
                    offset: 0,
                    duration: 0,
                    startOffset: 0,
                    options: (0, r.deepClone)(this.initialOptions),
                    currentIndex: this.defaultIndex
                }
            },
            created: function() {
                this.$parent.children && this.$parent.children.push(this),
                this.setIndex(this.currentIndex)
            },
            destroyed: function() {
                var e = this.$parent.children;
                e && e.splice(e.indexOf(this), 1)
            },
            watch: {
                defaultIndex: function() {
                    this.setIndex(this.defaultIndex)
                }
            },
            computed: {
                count: function() {
                    return this.options.length
                }
            },
            methods: {
                onTouchStart: function(e) {
                    this.startY = e.touches[0].clientY,
                    this.startOffset = this.offset,
                    this.duration = 0
                },
                onTouchMove: function(e) {
                    e.preventDefault();
                    var t = e.touches[0].clientY - this.startY;
                    this.offset = (0, o.range)(this.startOffset + t, -this.count * this.itemHeight, this.itemHeight)
                },
                onTouchEnd: function() {
                    if (this.offset !== this.startOffset) {
                        this.duration = 200;
                        var e = (0, o.range)(Math.round( - this.offset / this.itemHeight), 0, this.count - 1);
                        this.setIndex(e, !0)
                    }
                },
                adjustIndex: function(e) {
                    for (var i = e = (0, o.range)(e, 0, this.count); i < this.count; i++) if (!this.isDisabled(this.options[i])) return i;
                    for (var t = e - 1; t >= 0; t--) if (!this.isDisabled(this.options[t])) return t
                },
                isDisabled: function(option) {
                    return (0, o.isObj)(option) && option.disabled
                },
                getOptionText: function(option) {
                    return (0, o.isObj)(option) && this.valueKey in option ? option[this.valueKey] : option
                },
                setIndex: function(e, t) {
                    e = this.adjustIndex(e) || 0,
                    this.offset = -e * this.itemHeight,
                    e !== this.currentIndex && (this.currentIndex = e, t && this.$emit("change", e))
                },
                setValue: function(e) {
                    for (var t = this.options,
                    i = 0; i < t.length; i++) if (this.getOptionText(t[i]) === e) return this.setIndex(i)
                },
                getValue: function() {
                    return this.options[this.currentIndex]
                }
            },
            render: function(e) {
                var t = this,
                n = this.itemHeight,
                r = this.visibleItemCount,
                o = {
                    height: n * r + "px"
                },
                l = n * (r - 1) / 2,
                d = {
                    transition: this.duration + "ms",
                    transform: "translate3d(0, " + (this.offset + l) + "px, 0)",
                    lineHeight: n + "px"
                },
                c = {
                    height: n + "px"
                };
                return e("div", {
                    style: o,
                    class: [h(), this.className],
                    on: {
                        touchstart: this.onTouchStart,
                        touchmove: this.onTouchMove,
                        touchend: this.onTouchEnd,
                        touchcancel: this.onTouchEnd
                    }
                },
                [e("ul", {
                    style: d
                },
                [this.options.map(function(option, n) {
                    return e("li", {
                        style: c,
                        class: ["van-ellipsis", h("item", {
                            disabled: t.isDisabled(option),
                            selected: n === t.currentIndex
                        })],
                        domProps: {
                            innerHTML: t.getOptionText(option)
                        },
                        on: {
                            click: function() {
                                t.setIndex(n, !0)
                            }
                        }
                    })
                })])])
            }
        });
        t.
    default = c
    },
    217 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.PopupMixin = void 0;
        var o = r(n(218)),
        l = r(n(115)),
        d = n(220),
        h = n(113),
        c = n(221),
        f = {
            mixins: [d.TouchMixin],
            props: {
                value: Boolean,
                overlay: Boolean,
                overlayStyle: Object,
                overlayClass: String,
                closeOnClickOverlay: Boolean,
                zIndex: [String, Number],
                getContainer: [String, Function],
                lockScroll: {
                    type: Boolean,
                default:
                    !0
                },
                lazyRender: {
                    type: Boolean,
                default:
                    !0
                }
            },
            data: function() {
                return {
                    inited: this.value
                }
            },
            computed: {
                shouldRender: function() {
                    return this.inited || !this.lazyRender
                }
            },
            watch: {
                value: function(e) {
                    var t = e ? "open": "close";
                    this.inited = this.inited || this.value,
                    this[t](),
                    this.$emit(t)
                },
                getContainer: function() {
                    this.move()
                },
                overlay: function() {
                    this.renderOverlay()
                }
            },
            mounted: function() {
                this.getContainer && this.move(),
                this.value && this.open()
            },
            activated: function() {
                this.value && this.open()
            },
            beforeDestroy: function() {
                this.close(),
                this.getContainer && this.$parent && this.$parent.$el && this.$parent.$el.appendChild(this.$el)
            },
            deactivated: function() {
                this.close()
            },
            methods: {
                open: function() {
                    this.$isServer || this.opened || (void 0 !== this.zIndex && (l.
                default.zIndex = this.zIndex), this.opened = !0, this.renderOverlay(), this.lockScroll && ((0, h.on)(document, "touchstart", this.touchStart), (0, h.on)(document, "touchmove", this.onTouchMove), l.
                default.lockCount || document.body.classList.add("van-overflow-hidden"), l.
                default.lockCount++))
                },
                close: function() {
                    this.opened && (this.lockScroll && (l.
                default.lockCount--, (0, h.off)(document, "touchstart", this.touchStart), (0, h.off)(document, "touchmove", this.onTouchMove), l.
                default.lockCount || document.body.classList.remove("van-overflow-hidden")), this.opened = !1, o.
                default.close(this), this.$emit("input", !1))
                },
                move: function() {
                    var e, t = this.getContainer;
                    t ? e = "string" == typeof t ? "body" === t ? document.body: document.querySelector(t) : t() : this.$parent && (e = this.$parent.$el),
                    e && e !== this.$el.parentNode && e.appendChild(this.$el)
                },
                onTouchMove: function(e) {
                    this.touchMove(e);
                    var t = this.deltaY > 0 ? "10": "01",
                    n = (0, c.getScrollEventTarget)(e.target, this.$el),
                    r = n.scrollHeight,
                    o = n.offsetHeight,
                    l = n.scrollTop,
                    d = "11";
                    0 === l ? d = o >= r ? "00": "01": l + o >= r && (d = "10"),
                    "11" === d || "vertical" !== this.direction || parseInt(d, 2) & parseInt(t, 2) || (e.preventDefault(), e.stopPropagation())
                },
                renderOverlay: function() {
                    var e = this;
                    this.overlay ? o.
                default.open(this, {
                        zIndex: l.
                    default.zIndex++,
                        className: this.overlayClass,
                        customStyle: this.overlayStyle
                    }) : o.
                default.close(this),
                    this.$nextTick(function() {
                        e.$el.style.zIndex = l.
                    default.zIndex++
                    })
                }
            }
        };
        t.PopupMixin = f
    },
    218 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.
    default = void 0;
        var o = r(n(56)),
        l = r(n(115)),
        d = r(n(219)),
        h = n(78),
        c = {
            className: "",
            customStyle: {}
        },
        f = {
            open: function(e, t) {
                if (!l.
            default.stack.some(function(t) {
                    return t.vm === e
                })) {
                    var n = e.$el,
                    r = n && n.parentNode ? n.parentNode: document.body;
                    l.
                default.stack.push({
                        vm:
                        e,
                        config: t,
                        target: r
                    }),
                    this.update()
                }
            },
            close: function(e) {
                var t = l.
            default.stack;
                t.length && (l.
            default.top.vm === e ? (t.pop(), this.update()) : l.
            default.stack = t.filter(function(t) {
                    return t.vm !== e
                }))
            },
            update: function() {
                var e = l.
            default.modal;
                if (e || (e = (0, h.mount)(d.
            default, {
                    on: {
                        click: this.onClick
                    }
                }), l.
            default.modal = e), e.$el.parentNode && (e.visible = !1), l.
            default.top) {
                    var t = l.
                default.top,
                    n = t.target,
                    r = t.config;
                    n.appendChild(e.$el),
                    (0, o.
                default)(e, c, r, {
                        visible: !0
                    })
                }
            },
            onClick: function() {
                if (l.
            default.top) {
                    var e = l.
                default.top.vm;
                    e.$emit("click-overlay"),
                    e.closeOnClickOverlay && (e.onClickOverlay ? e.onClickOverlay() : e.close())
                }
            }
        };
        t.
    default = f
    },
    219 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.
    default = void 0;
        var o = r(n(84)),
        l = r(n(56)),
        d = n(16),
        h = n(78),
        c = (0, d.use)("overlay"),
        f = c[0],
        v = c[1];
        function m(e, t, n, r) {
            var style = (0, l.
        default)({
                zIndex:
                t.zIndex
            },
            t.customStyle);
            return e("transition", {
                attrs: {
                    name: "van-fade"
                }
            },
            [e("div", (0, o.
        default)([{
                directives:
                [{
                    name:
                    "show",
                    value: t.visible
                }],
                style: style,
                class: [v(), t.className],
                on: {
                    touchmove: function(e) {
                        e.preventDefault(),
                        e.stopPropagation()
                    },
                    click: function(e) { (0, h.emit)(r, "click", e)
                    }
                }
            },
            (0, h.inherit)(r, !0)]))])
        }
        m.props = {
            zIndex: Number,
            className: null,
            visible: Boolean,
            customStyle: Object
        };
        var y = f(m);
        t.
    default = y
    },
    220 : function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.TouchMixin = void 0;
        var r = 10;
        var o = {
            data: function() {
                return {
                    direction: ""
                }
            },
            methods: {
                touchStart: function(e) {
                    this.resetTouchStatus(),
                    this.startX = e.touches[0].clientX,
                    this.startY = e.touches[0].clientY
                },
                touchMove: function(e) {
                    var t, n, o = e.touches[0];
                    this.deltaX = o.clientX - this.startX,
                    this.deltaY = o.clientY - this.startY,
                    this.offsetX = Math.abs(this.deltaX),
                    this.offsetY = Math.abs(this.deltaY),
                    this.direction = this.direction || (t = this.offsetX, n = this.offsetY, t > n && t > r ? "horizontal": n > t && n > r ? "vertical": "")
                },
                resetTouchStatus: function() {
                    this.direction = "",
                    this.deltaX = 0,
                    this.deltaY = 0,
                    this.offsetX = 0,
                    this.offsetY = 0
                }
            }
        };
        t.TouchMixin = o
    },
    221 : function(e, t, n) {
        "use strict";
        function r(element) {
            return "scrollTop" in element ? element.scrollTop: element.pageYOffset
        }
        t.__esModule = !0,
        t.getScrollEventTarget = function(element, e) {
            void 0 === e && (e = window);
            var t = element;
            for (; t && "HTML" !== t.tagName && "BODY" !== t.tagName && 1 === t.nodeType && t !== e;) {
                var n = window.getComputedStyle(t),
                r = n.overflowY;
                if ("scroll" === r || "auto" === r) return t;
                t = t.parentNode
            }
            return e
        },
        t.getScrollTop = r,
        t.setScrollTop = function(element, e) {
            "scrollTop" in element ? element.scrollTop = e: element.scrollTo(element.scrollX, e)
        },
        t.getElementTop = function(element) {
            return (element === window ? 0 : element.getBoundingClientRect().top) + r(window)
        },
        t.getVisibleHeight = function(element) {
            return element === window ? element.innerHeight: element.getBoundingClientRect().height
        }
    },
    222 : function(e, t, n) {},
    224 : function(e, t, n) {
        "use strict";
        var r = n(116),
        o = n(117),
        l = {
            brackets: function(e) {
                return e + "[]"
            },
            indices: function(e, t) {
                return e + "[" + t + "]"
            },
            repeat: function(e) {
                return e
            }
        },
        d = Array.isArray,
        h = Array.prototype.push,
        c = function(e, t) {
            h.apply(e, d(t) ? t: [t])
        },
        f = Date.prototype.toISOString,
        v = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: r.encode,
            encodeValuesOnly: !1,
            indices: !1,
            serializeDate: function(e) {
                return f.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        m = function e(object, t, n, o, l, d, filter, h, f, m, y, w, x) {
            var E = object;
            if ("function" == typeof filter ? E = filter(t, E) : E instanceof Date && (E = m(E)), null === E) {
                if (o) return d && !w ? d(t, v.encoder, x) : t;
                E = ""
            }
            if ("string" == typeof E || "number" == typeof E || "boolean" == typeof E || r.isBuffer(E)) return d ? [y(w ? t: d(t, v.encoder, x)) + "=" + y(d(E, v.encoder, x))] : [y(t) + "=" + y(String(E))];
            var T, C = [];
            if (void 0 === E) return C;
            if (Array.isArray(filter)) T = filter;
            else {
                var S = Object.keys(E);
                T = h ? S.sort(h) : S
            }
            for (var i = 0; i < T.length; ++i) {
                var M = T[i];
                l && null === E[M] || (Array.isArray(E) ? c(C, e(E[M], n(t, M), n, o, l, d, filter, h, f, m, y, w, x)) : c(C, e(E[M], t + (f ? "." + M: "[" + M + "]"), n, o, l, d, filter, h, f, m, y, w, x)))
            }
            return C
        };
        e.exports = function(object, e) {
            var t = object,
            n = e ? r.assign({},
            e) : {};
            if (null !== n.encoder && void 0 !== n.encoder && "function" != typeof n.encoder) throw new TypeError("Encoder has to be a function.");
            var d = void 0 === n.delimiter ? v.delimiter: n.delimiter,
            h = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling: v.strictNullHandling,
            f = "boolean" == typeof n.skipNulls ? n.skipNulls: v.skipNulls,
            y = "boolean" == typeof n.encode ? n.encode: v.encode,
            w = "function" == typeof n.encoder ? n.encoder: v.encoder,
            x = "function" == typeof n.sort ? n.sort: null,
            E = void 0 === n.allowDots ? v.allowDots: !!n.allowDots,
            T = "function" == typeof n.serializeDate ? n.serializeDate: v.serializeDate,
            C = "boolean" == typeof n.encodeValuesOnly ? n.encodeValuesOnly: v.encodeValuesOnly,
            S = n.charset || v.charset;
            if (void 0 !== n.charset && "utf-8" !== n.charset && "iso-8859-1" !== n.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
            if (void 0 === n.format) n.format = o.
        default;
            else if (!Object.prototype.hasOwnProperty.call(o.formatters, n.format)) throw new TypeError("Unknown format option provided.");
            var M, filter, k = o.formatters[n.format];
            "function" == typeof n.filter ? t = (filter = n.filter)("", t) : Array.isArray(n.filter) && (M = filter = n.filter);
            var P, O = [];
            if ("object" != typeof t || null === t) return "";
            P = n.arrayFormat in l ? n.arrayFormat: "indices" in n ? n.indices ? "indices": "repeat": "indices";
            var A = l[P];
            M || (M = Object.keys(t)),
            x && M.sort(x);
            for (var i = 0; i < M.length; ++i) {
                var I = M[i];
                f && null === t[I] || c(O, m(t[I], I, A, h, f, y ? w: null, filter, x, E, T, k, C, S))
            }
            var _ = O.join(d),
            z = !0 === n.addQueryPrefix ? "?": "";
            return n.charsetSentinel && (z += "iso-8859-1" === S ? "utf8=%26%2310003%3B&": "utf8=%E2%9C%93&"),
            _.length > 0 ? z + _: ""
        }
    },
    225 : function(e, t, n) {
        "use strict";
        var r = n(116),
        o = Object.prototype.hasOwnProperty,
        l = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        d = function(e) {
            return e.replace(/&#(\d+);/g,
            function(e, t) {
                return String.fromCharCode(parseInt(t, 10))
            })
        },
        h = function(e, t, n) {
            if (e) {
                var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                l = /(\[[^[\]]*])/g,
                d = /(\[[^[\]]*])/.exec(r),
                h = d ? r.slice(0, d.index) : r,
                c = [];
                if (h) {
                    if (!n.plainObjects && o.call(Object.prototype, h) && !n.allowPrototypes) return;
                    c.push(h)
                }
                for (var i = 0; null !== (d = l.exec(r)) && i < n.depth;) {
                    if (i += 1, !n.plainObjects && o.call(Object.prototype, d[1].slice(1, -1)) && !n.allowPrototypes) return;
                    c.push(d[1])
                }
                return d && c.push("[" + r.slice(d.index) + "]"),
                function(e, t, n) {
                    for (var r = t,
                    i = e.length - 1; i >= 0; --i) {
                        var o, l = e[i];
                        if ("[]" === l && n.parseArrays) o = [].concat(r);
                        else {
                            o = n.plainObjects ? Object.create(null) : {};
                            var d = "[" === l.charAt(0) && "]" === l.charAt(l.length - 1) ? l.slice(1, -1) : l,
                            h = parseInt(d, 10);
                            n.parseArrays || "" !== d ? !isNaN(h) && l !== d && String(h) === d && h >= 0 && n.parseArrays && h <= n.arrayLimit ? (o = [])[h] = r: o[d] = r: o = {
                                0 : r
                            }
                        }
                        r = o
                    }
                    return r
                } (c, t, n)
            }
        };
        e.exports = function(e, t) {
            var n = t ? r.assign({},
            t) : {};
            if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
            if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter: l.delimiter, n.depth = "number" == typeof n.depth ? n.depth: l.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit: l.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder: l.decoder, n.allowDots = void 0 === n.allowDots ? l.allowDots: !!n.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects: l.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes: l.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit: l.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling: l.strictNullHandling, void 0 !== n.charset && "utf-8" !== n.charset && "iso-8859-1" !== n.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
            if (void 0 === n.charset && (n.charset = l.charset), "" === e || null == e) return n.plainObjects ? Object.create(null) : {};
            for (var c = "string" == typeof e ?
            function(e, t) {
                var i, n = {},
                h = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                c = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                f = h.split(t.delimiter, c),
                v = -1,
                m = t.charset;
                if (t.charsetSentinel) for (i = 0; i < f.length; ++i) 0 === f[i].indexOf("utf8=") && ("utf8=%E2%9C%93" === f[i] ? m = "utf-8": "utf8=%26%2310003%3B" === f[i] && (m = "iso-8859-1"), v = i, i = f.length);
                for (i = 0; i < f.length; ++i) if (i !== v) {
                    var y, w, x = f[i],
                    E = x.indexOf("]="),
                    T = -1 === E ? x.indexOf("=") : E + 1; - 1 === T ? (y = t.decoder(x, l.decoder, m), w = t.strictNullHandling ? null: "") : (y = t.decoder(x.slice(0, T), l.decoder, m), w = t.decoder(x.slice(T + 1), l.decoder, m)),
                    w && t.interpretNumericEntities && "iso-8859-1" === m && (w = d(w)),
                    o.call(n, y) ? n[y] = r.combine(n[y], w) : n[y] = w
                }
                return n
            } (e, n) : e, f = n.plainObjects ? Object.create(null) : {},
            v = Object.keys(c), i = 0; i < v.length; ++i) {
                var m = v[i],
                y = h(m, c[m], n);
                f = r.merge(f, y, n)
            }
            return r.compact(f)
        }
    },
    226 : function(e, t, n) { (function(t, n) {
            var r;
            r = function() {
                "use strict";
                function e(e) {
                    return "function" == typeof e
                }
                var r = Array.isArray ? Array.isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                o = 0,
                l = void 0,
                d = void 0,
                h = function(e, t) {
                    x[o] = e,
                    x[o + 1] = t,
                    2 === (o += 2) && (d ? d(E) : k())
                },
                c = "undefined" != typeof window ? window: void 0,
                f = c || {},
                v = f.MutationObserver || f.WebKitMutationObserver,
                m = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                y = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function w() {
                    var e = setTimeout;
                    return function() {
                        return e(E, 1)
                    }
                }
                var x = new Array(1e3);
                function E() {
                    for (var i = 0; i < o; i += 2) { (0, x[i])(x[i + 1]),
                        x[i] = void 0,
                        x[i + 1] = void 0
                    }
                    o = 0
                }
                var T, C, S, M, k = void 0;
                function P(e, t) {
                    var n = this,
                    r = new this.constructor(I);
                    void 0 === r[A] && X(r);
                    var o = n._state;
                    if (o) {
                        var l = arguments[o - 1];
                        h(function() {
                            return V(o, r, l, n._result)
                        })
                    } else F(n, r, e, t);
                    return r
                }
                function O(object) {
                    if (object && "object" == typeof object && object.constructor === this) return object;
                    var e = new this(I);
                    return B(e, object),
                    e
                }
                m ? k = function() {
                    return t.nextTick(E)
                }: v ? (C = 0, S = new v(E), M = document.createTextNode(""), S.observe(M, {
                    characterData: !0
                }), k = function() {
                    M.data = C = ++C % 2
                }) : y ? ((T = new MessageChannel).port1.onmessage = E, k = function() {
                    return T.port2.postMessage(0)
                }) : k = void 0 === c ?
                function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (l = e.runOnLoop || e.runOnContext) ?
                        function() {
                            l(E)
                        }: w()
                    } catch(e) {
                        return w()
                    }
                } () : w();
                var A = Math.random().toString(36).substring(2);
                function I() {}
                var _ = void 0,
                z = 1,
                L = 2,
                $ = {
                    error: null
                };
                function D(e) {
                    try {
                        return e.then
                    } catch(e) {
                        return $.error = e,
                        $
                    }
                }
                function N(t, n, r) {
                    n.constructor === t.constructor && r === P && n.constructor.resolve === O ?
                    function(e, t) {
                        t._state === z ? j(e, t._result) : t._state === L ? H(e, t._result) : F(t, void 0,
                        function(t) {
                            return B(e, t)
                        },
                        function(t) {
                            return H(e, t)
                        })
                    } (t, n) : r === $ ? (H(t, $.error), $.error = null) : void 0 === r ? j(t, n) : e(r) ?
                    function(e, t, n) {
                        h(function(e) {
                            var r = !1,
                            o = function(e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch(e) {
                                    return e
                                }
                            } (n, t,
                            function(n) {
                                r || (r = !0, t !== n ? B(e, n) : j(e, n))
                            },
                            function(t) {
                                r || (r = !0, H(e, t))
                            },
                            e._label); ! r && o && (r = !0, H(e, o))
                        },
                        e)
                    } (t, n, r) : j(t, n)
                }
                function B(e, t) {
                    var n, r;
                    e === t ? H(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? j(e, t) : N(e, t, D(t)))
                }
                function R(e) {
                    e._onerror && e._onerror(e._result),
                    Y(e)
                }
                function j(e, t) {
                    e._state === _ && (e._result = t, e._state = z, 0 !== e._subscribers.length && h(Y, e))
                }
                function H(e, t) {
                    e._state === _ && (e._state = L, e._result = t, h(R, e))
                }
                function F(e, t, n, r) {
                    var o = e._subscribers,
                    l = o.length;
                    e._onerror = null,
                    o[l] = t,
                    o[l + z] = n,
                    o[l + L] = r,
                    0 === l && e._state && h(Y, e)
                }
                function Y(e) {
                    var t = e._subscribers,
                    n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0,
                        o = void 0,
                        l = e._result,
                        i = 0; i < t.length; i += 3) r = t[i],
                        o = t[i + n],
                        r ? V(n, r, o, l) : o(l);
                        e._subscribers.length = 0
                    }
                }
                function V(t, n, r, o) {
                    var l = e(r),
                    d = void 0,
                    h = void 0,
                    c = void 0,
                    f = void 0;
                    if (l) {
                        if ((d = function(e, t) {
                            try {
                                return e(t)
                            } catch(e) {
                                return $.error = e,
                                $
                            }
                        } (r, o)) === $ ? (f = !0, h = d.error, d.error = null) : c = !0, n === d) return void H(n, new TypeError("A promises callback cannot return that same promise."))
                    } else d = o,
                    c = !0;
                    n._state !== _ || (l && c ? B(n, d) : f ? H(n, h) : t === z ? j(n, d) : t === L && H(n, d))
                }
                var G = 0;
                function X(e) {
                    e[A] = G++,
                    e._state = void 0,
                    e._result = void 0,
                    e._subscribers = []
                }
                var W = function() {
                    function e(e, input) {
                        this._instanceConstructor = e,
                        this.promise = new e(I),
                        this.promise[A] || X(this.promise),
                        r(input) ? (this.length = input.length, this._remaining = input.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(input), 0 === this._remaining && j(this.promise, this._result))) : H(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(input) {
                        for (var i = 0; this._state === _ && i < input.length; i++) this._eachEntry(input[i], i)
                    },
                    e.prototype._eachEntry = function(e, i) {
                        var t = this._instanceConstructor,
                        n = t.resolve;
                        if (n === O) {
                            var r = D(e);
                            if (r === P && e._state !== _) this._settledAt(e._state, i, e._result);
                            else if ("function" != typeof r) this._remaining--,
                            this._result[i] = e;
                            else if (t === U) {
                                var o = new t(I);
                                N(o, e, r),
                                this._willSettleAt(o, i)
                            } else this._willSettleAt(new t(function(t) {
                                return t(e)
                            }), i)
                        } else this._willSettleAt(n(e), i)
                    },
                    e.prototype._settledAt = function(e, i, t) {
                        var n = this.promise;
                        n._state === _ && (this._remaining--, e === L ? H(n, t) : this._result[i] = t),
                        0 === this._remaining && j(n, this._result)
                    },
                    e.prototype._willSettleAt = function(e, i) {
                        var t = this;
                        F(e, void 0,
                        function(e) {
                            return t._settledAt(z, i, e)
                        },
                        function(e) {
                            return t._settledAt(L, i, e)
                        })
                    },
                    e
                } (),
                U = function() {
                    function t(e) {
                        this[A] = G++,
                        this._result = this._state = void 0,
                        this._subscribers = [],
                        I !== e && ("function" != typeof e &&
                        function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        } (), this instanceof t ?
                        function(e, t) {
                            try {
                                t(function(t) {
                                    B(e, t)
                                },
                                function(t) {
                                    H(e, t)
                                })
                            } catch(t) {
                                H(e, t)
                            }
                        } (this, e) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        } ())
                    }
                    return t.prototype.
                    catch = function(e) {
                        return this.then(null, e)
                    },
                    t.prototype.
                    finally = function(t) {
                        var n = this.constructor;
                        return e(t) ? this.then(function(e) {
                            return n.resolve(t()).then(function() {
                                return e
                            })
                        },
                        function(e) {
                            return n.resolve(t()).then(function() {
                                throw e
                            })
                        }) : this.then(t, t)
                    },
                    t
                } ();
                return U.prototype.then = P,
                U.all = function(e) {
                    return new W(this, e).promise
                },
                U.race = function(e) {
                    var t = this;
                    return r(e) ? new t(function(n, r) {
                        for (var o = e.length,
                        i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                    }) : new t(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                },
                U.resolve = O,
                U.reject = function(e) {
                    var t = new this(I);
                    return H(t, e),
                    t
                },
                U._setScheduler = function(e) {
                    d = e
                },
                U._setAsap = function(e) {
                    h = e
                },
                U._asap = h,
                U.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== n) e = n;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch(e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve())
                        } catch(e) {}
                        if ("[object Promise]" === r && !t.cast) return
                    }
                    e.Promise = U
                },
                U.Promise = U,
                U
            },
            e.exports = r()
        }).call(this, n(55), n(31))
    },
    227 : function(e, t, n) {
        e.exports = function() {
            "use strict";
            var e = "undefined" == typeof document ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            }: document,
            t = "undefined" == typeof window ? {
                document: e,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
            }: window,
            n = function(e) {
                for (var i = 0; i < e.length; i += 1) this[i] = e[i];
                return this.length = e.length,
                this
            };
            function r(r, o) {
                var l = [],
                i = 0;
                if (r && !o && r instanceof n) return r;
                if (r) if ("string" == typeof r) {
                    var d, h, html = r.trim();
                    if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                        var c = "div";
                        for (0 === html.indexOf("<li") && (c = "ul"), 0 === html.indexOf("<tr") && (c = "tbody"), 0 !== html.indexOf("<td") && 0 !== html.indexOf("<th") || (c = "tr"), 0 === html.indexOf("<tbody") && (c = "table"), 0 === html.indexOf("<option") && (c = "select"), (h = e.createElement(c)).innerHTML = html, i = 0; i < h.childNodes.length; i += 1) l.push(h.childNodes[i])
                    } else for (d = o || "#" !== r[0] || r.match(/[ .<>:~]/) ? (o || e).querySelectorAll(r.trim()) : [e.getElementById(r.trim().split("#")[1])], i = 0; i < d.length; i += 1) d[i] && l.push(d[i])
                } else if (r.nodeType || r === t || r === e) l.push(r);
                else if (r.length > 0 && r[0].nodeType) for (i = 0; i < r.length; i += 1) l.push(r[i]);
                return new n(l)
            }
            function o(e) {
                for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            r.fn = n.prototype,
            r.Class = n,
            r.Dom7 = n;
            var l = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !! this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    var n = arguments;
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var i = 0; i < this.length; i += 1) if (2 === n.length) this[i].setAttribute(e, t);
                    else for (var r in e) this[i][r] = e[r],
                    this[i].setAttribute(r, e[r]);
                    return this
                },
                removeAttr: function(e) {
                    for (var i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    var n;
                    if (void 0 !== t) {
                        for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                        n.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (n = this[0]) {
                        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                        var r = n.getAttribute("data-" + e);
                        return r || void 0
                    }
                },
                transform: function(e) {
                    for (var i = 0; i < this.length; i += 1) {
                        var t = this[i].style;
                        t.webkitTransform = e,
                        t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var i = 0; i < this.length; i += 1) {
                        var t = this[i].style;
                        t.webkitTransitionDuration = e,
                        t.transitionDuration = e
                    }
                    return this
                },
                on: function() {
                    for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    var o = t[0],
                    l = t[1],
                    d = t[2],
                    h = t[3];
                    function c(e) {
                        var t = e.target;
                        if (t) {
                            var n = e.target.dom7EventData || [];
                            if (n.indexOf(e) < 0 && n.unshift(e), r(t).is(l)) d.apply(t, n);
                            else for (var o = r(t).parents(), h = 0; h < o.length; h += 1) r(o[h]).is(l) && d.apply(o[h], n)
                        }
                    }
                    function f(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e),
                        d.apply(this, t)
                    }
                    "function" == typeof t[1] && (o = (e = t)[0], d = e[1], h = e[2], l = void 0),
                    h || (h = !1);
                    for (var v, m = o.split(" "), i = 0; i < this.length; i += 1) {
                        var y = this[i];
                        if (l) for (v = 0; v < m.length; v += 1) {
                            var w = m[v];
                            y.dom7LiveListeners || (y.dom7LiveListeners = {}),
                            y.dom7LiveListeners[w] || (y.dom7LiveListeners[w] = []),
                            y.dom7LiveListeners[w].push({
                                listener: d,
                                proxyListener: c
                            }),
                            y.addEventListener(w, c, h)
                        } else for (v = 0; v < m.length; v += 1) {
                            var x = m[v];
                            y.dom7Listeners || (y.dom7Listeners = {}),
                            y.dom7Listeners[x] || (y.dom7Listeners[x] = []),
                            y.dom7Listeners[x].push({
                                listener: d,
                                proxyListener: f
                            }),
                            y.addEventListener(x, f, h)
                        }
                    }
                    return this
                },
                off: function() {
                    for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    var r = t[0],
                    o = t[1],
                    l = t[2],
                    d = t[3];
                    "function" == typeof t[1] && (r = (e = t)[0], l = e[1], d = e[2], o = void 0),
                    d || (d = !1);
                    for (var h = r.split(" "), i = 0; i < h.length; i += 1) for (var c = h[i], f = 0; f < this.length; f += 1) {
                        var v = this[f],
                        m = void 0;
                        if (!o && v.dom7Listeners ? m = v.dom7Listeners[c] : o && v.dom7LiveListeners && (m = v.dom7LiveListeners[c]), m && m.length) for (var y = m.length - 1; y >= 0; y -= 1) {
                            var w = m[y];
                            l && w.listener === l ? (v.removeEventListener(c, w.proxyListener, d), m.splice(y, 1)) : l && w.listener && w.listener.dom7proxy && w.listener.dom7proxy === l ? (v.removeEventListener(c, w.proxyListener, d), m.splice(y, 1)) : l || (v.removeEventListener(c, w.proxyListener, d), m.splice(y, 1))
                        }
                    }
                    return this
                },
                trigger: function() {
                    for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                    for (var o = n[0].split(" "), l = n[1], i = 0; i < o.length; i += 1) for (var d = o[i], h = 0; h < this.length; h += 1) {
                        var c = this[h],
                        f = void 0;
                        try {
                            f = new t.CustomEvent(d, {
                                detail: l,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch(t) { (f = e.createEvent("Event")).initEvent(d, !0, !0),
                            f.detail = l
                        }
                        c.dom7EventData = n.filter(function(data, e) {
                            return e > 0
                        }),
                        c.dispatchEvent(f),
                        c.dom7EventData = [],
                        delete c.dom7EventData
                    }
                    return this
                },
                transitionEnd: function(e) {
                    var i, t = ["webkitTransitionEnd", "transitionend"],
                    n = this;
                    function r(o) {
                        if (o.target === this) for (e.call(this, o), i = 0; i < t.length; i += 1) n.off(t[i], r)
                    }
                    if (e) for (i = 0; i < t.length; i += 1) n.on(t[i], r);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        var n = this[0],
                        r = n.getBoundingClientRect(),
                        body = e.body,
                        o = n.clientTop || body.clientTop || 0,
                        l = n.clientLeft || body.clientLeft || 0,
                        d = n === t ? t.scrollY: n.scrollTop,
                        h = n === t ? t.scrollX: n.scrollLeft;
                        return {
                            top: r.top + d - o,
                            left: r.left + h - l
                        }
                    }
                    return null
                },
                css: function(e, n) {
                    var i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1) for (var r in e) this[i].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = n;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (var i = 0; i < this.length; i += 1) if (!1 === e.call(this[i], i, this[i])) return this;
                    return this
                },
                html: function(html) {
                    if (void 0 === html) return this[0] ? this[0].innerHTML: void 0;
                    for (var i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                    return this
                },
                text: function(text) {
                    if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                    for (var i = 0; i < this.length; i += 1) this[i].textContent = text;
                    return this
                },
                is: function(o) {
                    var l, i, d = this[0];
                    if (!d || void 0 === o) return ! 1;
                    if ("string" == typeof o) {
                        if (d.matches) return d.matches(o);
                        if (d.webkitMatchesSelector) return d.webkitMatchesSelector(o);
                        if (d.msMatchesSelector) return d.msMatchesSelector(o);
                        for (l = r(o), i = 0; i < l.length; i += 1) if (l[i] === d) return ! 0;
                        return ! 1
                    }
                    if (o === e) return d === e;
                    if (o === t) return d === t;
                    if (o.nodeType || o instanceof n) {
                        for (l = o.nodeType ? [o] : o, i = 0; i < l.length; i += 1) if (l[i] === d) return ! 0;
                        return ! 1
                    }
                    return ! 1
                },
                index: function() {
                    var i, e = this[0];
                    if (e) {
                        for (i = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (i += 1);
                        return i
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var t, r = this.length;
                    return new n(e > r - 1 ? [] : e < 0 ? (t = r + e) < 0 ? [] : [this[t]] : [this[e]])
                },
                append: function() {
                    for (var t, r = [], o = arguments.length; o--;) r[o] = arguments[o];
                    for (var l = 0; l < r.length; l += 1) {
                        t = r[l];
                        for (var i = 0; i < this.length; i += 1) if ("string" == typeof t) {
                            var d = e.createElement("div");
                            for (d.innerHTML = t; d.firstChild;) this[i].appendChild(d.firstChild)
                        } else if (t instanceof n) for (var h = 0; h < t.length; h += 1) this[i].appendChild(t[h]);
                        else this[i].appendChild(t)
                    }
                    return this
                },
                prepend: function(t) {
                    var i, r;
                    for (i = 0; i < this.length; i += 1) if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t, r = o.childNodes.length - 1; r >= 0; r -= 1) this[i].insertBefore(o.childNodes[r], this[i].childNodes[0])
                    } else if (t instanceof n) for (r = 0; r < t.length; r += 1) this[i].insertBefore(t[r], this[i].childNodes[0]);
                    else this[i].insertBefore(t, this[i].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new n([this[0].nextElementSibling]) : new n([]) : this[0].nextElementSibling ? new n([this[0].nextElementSibling]) : new n([]) : new n([])
                },
                nextAll: function(e) {
                    var t = [],
                    o = this[0];
                    if (!o) return new n([]);
                    for (; o.nextElementSibling;) {
                        var l = o.nextElementSibling;
                        e ? r(l).is(e) && t.push(l) : t.push(l),
                        o = l
                    }
                    return new n(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e ? t.previousElementSibling && r(t.previousElementSibling).is(e) ? new n([t.previousElementSibling]) : new n([]) : t.previousElementSibling ? new n([t.previousElementSibling]) : new n([])
                    }
                    return new n([])
                },
                prevAll: function(e) {
                    var t = [],
                    o = this[0];
                    if (!o) return new n([]);
                    for (; o.previousElementSibling;) {
                        var l = o.previousElementSibling;
                        e ? r(l).is(e) && t.push(l) : t.push(l),
                        o = l
                    }
                    return new n(t)
                },
                parent: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? r(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return r(o(t))
                },
                parents: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n;) e ? r(n).is(e) && t.push(n) : t.push(n),
                    n = n.parentNode;
                    return r(o(t))
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e ? new n([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].querySelectorAll(e), o = 0; o < r.length; o += 1) t.push(r[o]);
                    return new n(t)
                },
                children: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) for (var l = this[i].childNodes, d = 0; d < l.length; d += 1) e ? 1 === l[d].nodeType && r(l[d]).is(e) && t.push(l[d]) : 1 === l[d].nodeType && t.push(l[d]);
                    return new n(o(t))
                },
                remove: function() {
                    for (var i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                    return this
                },
                add: function() {
                    for (var i, e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    for (i = 0; i < t.length; i += 1) {
                        var o = r(t[i]);
                        for (e = 0; e < o.length; e += 1) this[this.length] = o[e],
                        this.length += 1
                    }
                    return this
                },
                styles: function() {
                    return this[0] ? t.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(l).forEach(function(e) {
                r.fn[e] = l[e]
            });
            var d, style, h, c = {
                deleteProps: function(e) {
                    var object = e;
                    Object.keys(object).forEach(function(e) {
                        try {
                            object[e] = null
                        } catch(e) {}
                        try {
                            delete object[e]
                        } catch(e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0),
                    setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, n) {
                    var r, o, l;
                    void 0 === n && (n = "x");
                    var d = t.getComputedStyle(e, null);
                    return t.WebKitCSSMatrix ? ((o = d.transform || d.webkitTransform).split(",").length > 6 && (o = o.split(", ").map(function(a) {
                        return a.replace(",", ".")
                    }).join(", ")), l = new t.WebKitCSSMatrix("none" === o ? "": o)) : (l = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = l.toString().split(",")),
                    "x" === n && (o = t.WebKitCSSMatrix ? l.m41: 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])),
                    "y" === n && (o = t.WebKitCSSMatrix ? l.m42: 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])),
                    o || 0
                },
                parseUrlQuery: function(e) {
                    var i, n, param, r, o = {},
                    l = e || t.location.href;
                    if ("string" == typeof l && l.length) for (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "", n = l.split("&").filter(function(e) {
                        return "" !== e
                    }), r = n.length, i = 0; i < r; i += 1) param = n[i].replace(/#\S+/g, "").split("="),
                    o[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "";
                    return o
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                        var r = e[i];
                        if (null != r) for (var o = Object.keys(Object(r)), l = 0, d = o.length; l < d; l += 1) {
                            var h = o[l],
                            desc = Object.getOwnPropertyDescriptor(r, h);
                            void 0 !== desc && desc.enumerable && (c.isObject(n[h]) && c.isObject(r[h]) ? c.extend(n[h], r[h]) : !c.isObject(n[h]) && c.isObject(r[h]) ? (n[h] = {},
                            c.extend(n[h], r[h])) : n[h] = r[h])
                        }
                    }
                    return n
                }
            },
            f = (h = e.createElement("div"), {
                touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0),
                prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                transition: (style = h.style, "transition" in style || "webkitTransition" in style || "MozTransition" in style),
                transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d ||
                function() {
                    var style = h.style;
                    return "webkitPerspective" in style || "MozPerspective" in style || "OPerspective" in style || "MsPerspective" in style || "perspective" in style
                } (),
                flexbox: function() {
                    for (var style = h.style,
                    e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i += 1) if (e[i] in style) return ! 0;
                    return ! 1
                } (),
                observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var n = Object.defineProperty({},
                        "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        t.addEventListener("testPassiveListener", null, n)
                    } catch(e) {}
                    return e
                } (),
                gestures: "ongesturestart" in t
            }),
            v = {
                isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (d = t.navigator.userAgent.toLowerCase(), d.indexOf("safari") >= 0 && d.indexOf("chrome") < 0 && d.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            },
            m = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e,
                t.eventsListeners = {},
                t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            },
            y = {
                components: {
                    configurable: !0
                }
            };
            m.prototype.on = function(e, t, n) {
                var r = this;
                if ("function" != typeof t) return r;
                var o = n ? "unshift": "push";
                return e.split(" ").forEach(function(e) {
                    r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][o](t)
                }),
                r
            },
            m.prototype.once = function(e, t, n) {
                var r = this;
                if ("function" != typeof t) return r;
                function o() {
                    for (var n = [], l = arguments.length; l--;) n[l] = arguments[l];
                    t.apply(r, n),
                    r.off(e, o),
                    o.f7proxy && delete o.f7proxy
                }
                return o.f7proxy = t,
                r.on(e, o, n)
            },
            m.prototype.off = function(e, t) {
                var n = this;
                return n.eventsListeners ? (e.split(" ").forEach(function(e) {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(function(r, o) { (r === t || r.f7proxy && r.f7proxy === t) && n.eventsListeners[e].splice(o, 1)
                    })
                }), n) : n
            },
            m.prototype.emit = function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var n, data, r, o = this;
                if (!o.eventsListeners) return o;
                "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], data = e.slice(1, e.length), r = o) : (n = e[0].events, data = e[0].data, r = e[0].context || o);
                var l = Array.isArray(n) ? n: n.split(" ");
                return l.forEach(function(e) {
                    if (o.eventsListeners && o.eventsListeners[e]) {
                        var t = [];
                        o.eventsListeners[e].forEach(function(e) {
                            t.push(e)
                        }),
                        t.forEach(function(e) {
                            e.apply(r, data)
                        })
                    }
                }),
                o
            },
            m.prototype.useModulesParams = function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach(function(n) {
                    var r = t.modules[n];
                    r.params && c.extend(e, r.params)
                })
            },
            m.prototype.useModules = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach(function(n) {
                    var r = t.modules[n],
                    o = e[n] || {};
                    r.instance && Object.keys(r.instance).forEach(function(e) {
                        var n = r.instance[e];
                        t[e] = "function" == typeof n ? n.bind(t) : n
                    }),
                    r.on && t.on && Object.keys(r.on).forEach(function(e) {
                        t.on(e, r.on[e])
                    }),
                    r.create && r.create.bind(t)(o)
                })
            },
            y.components.set = function(e) {
                this.use && this.use(e)
            },
            m.installModule = function(e) {
                for (var t = [], n = arguments.length - 1; n-->0;) t[n] = arguments[n + 1];
                var r = this;
                r.prototype.modules || (r.prototype.modules = {});
                var o = e.name || Object.keys(r.prototype.modules).length + "_" + c.now();
                return r.prototype.modules[o] = e,
                e.proto && Object.keys(e.proto).forEach(function(t) {
                    r.prototype[t] = e.proto[t]
                }),
                e.static && Object.keys(e.static).forEach(function(t) {
                    r[t] = e.static[t]
                }),
                e.install && e.install.apply(r, t),
                r
            },
            m.use = function(e) {
                for (var t = [], n = arguments.length - 1; n-->0;) t[n] = arguments[n + 1];
                var r = this;
                return Array.isArray(e) ? (e.forEach(function(e) {
                    return r.installModule(e)
                }), r) : r.installModule.apply(r, [e].concat(t))
            },
            Object.defineProperties(m, y);
            var w = {
                updateSize: function() {
                    var e, t, n = this.$el;
                    e = void 0 !== this.params.width ? this.params.width: n[0].clientWidth,
                    t = void 0 !== this.params.height ? this.params.height: n[0].clientHeight,
                    0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), c.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e: t
                    }))
                },
                updateSlides: function() {
                    var e = this.params,
                    n = this.$wrapperEl,
                    r = this.size,
                    o = this.rtlTranslate,
                    l = this.wrongRTL,
                    d = this.virtual && e.virtual.enabled,
                    h = d ? this.virtual.slides.length: this.slides.length,
                    v = n.children("." + this.params.slideClass),
                    m = d ? this.virtual.slides.length: v.length,
                    y = [],
                    w = [],
                    x = [],
                    E = e.slidesOffsetBefore;
                    "function" == typeof E && (E = e.slidesOffsetBefore.call(this));
                    var T = e.slidesOffsetAfter;
                    "function" == typeof T && (T = e.slidesOffsetAfter.call(this));
                    var C, S, M = this.snapGrid.length,
                    k = this.snapGrid.length,
                    P = e.spaceBetween,
                    O = -E,
                    A = 0,
                    I = 0;
                    if (void 0 !== r) {
                        "string" == typeof P && P.indexOf("%") >= 0 && (P = parseFloat(P.replace("%", "")) / 100 * r),
                        this.virtualSize = -P,
                        o ? v.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : v.css({
                            marginRight: "",
                            marginBottom: ""
                        }),
                        e.slidesPerColumn > 1 && (C = Math.floor(m / e.slidesPerColumn) === m / this.params.slidesPerColumn ? m: Math.ceil(m / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (C = Math.max(C, e.slidesPerView * e.slidesPerColumn)));
                        for (var _, z = e.slidesPerColumn,
                        L = C / z,
                        $ = Math.floor(m / e.slidesPerColumn), i = 0; i < m; i += 1) {
                            S = 0;
                            var D = v.eq(i);
                            if (e.slidesPerColumn > 1) {
                                var N = void 0,
                                B = void 0,
                                R = void 0;
                                "column" === e.slidesPerColumnFill ? (B = Math.floor(i / z), R = i - B * z, (B > $ || B === $ && R === z - 1) && (R += 1) >= z && (R = 0, B += 1), N = B + R * C / z, D.css({
                                    "-webkit-box-ordinal-group": N,
                                    "-moz-box-ordinal-group": N,
                                    "-ms-flex-order": N,
                                    "-webkit-order": N,
                                    order: N
                                })) : (R = Math.floor(i / L), B = i - R * L),
                                D.css("margin-" + (this.isHorizontal() ? "top": "left"), 0 !== R && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", B).attr("data-swiper-row", R)
                            }
                            if ("none" !== D.css("display")) {
                                if ("auto" === e.slidesPerView) {
                                    var j = t.getComputedStyle(D[0], null),
                                    H = D[0].style.transform,
                                    F = D[0].style.webkitTransform;
                                    if (H && (D[0].style.transform = "none"), F && (D[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                                    else if (this.isHorizontal()) {
                                        var Y = parseFloat(j.getPropertyValue("width")),
                                        V = parseFloat(j.getPropertyValue("padding-left")),
                                        G = parseFloat(j.getPropertyValue("padding-right")),
                                        X = parseFloat(j.getPropertyValue("margin-left")),
                                        W = parseFloat(j.getPropertyValue("margin-right")),
                                        U = j.getPropertyValue("box-sizing");
                                        S = U && "border-box" === U ? Y + X + W: Y + V + G + X + W
                                    } else {
                                        var K = parseFloat(j.getPropertyValue("height")),
                                        Q = parseFloat(j.getPropertyValue("padding-top")),
                                        Z = parseFloat(j.getPropertyValue("padding-bottom")),
                                        J = parseFloat(j.getPropertyValue("margin-top")),
                                        ee = parseFloat(j.getPropertyValue("margin-bottom")),
                                        te = j.getPropertyValue("box-sizing");
                                        S = te && "border-box" === te ? K + J + ee: K + Q + Z + J + ee
                                    }
                                    H && (D[0].style.transform = H),
                                    F && (D[0].style.webkitTransform = F),
                                    e.roundLengths && (S = Math.floor(S))
                                } else S = (r - (e.slidesPerView - 1) * P) / e.slidesPerView,
                                e.roundLengths && (S = Math.floor(S)),
                                v[i] && (this.isHorizontal() ? v[i].style.width = S + "px": v[i].style.height = S + "px");
                                v[i] && (v[i].swiperSlideSize = S),
                                x.push(S),
                                e.centeredSlides ? (O = O + S / 2 + A / 2 + P, 0 === A && 0 !== i && (O = O - r / 2 - P), 0 === i && (O = O - r / 2 - P), Math.abs(O) < .001 && (O = 0), e.roundLengths && (O = Math.floor(O)), I % e.slidesPerGroup == 0 && y.push(O), w.push(O)) : (e.roundLengths && (O = Math.floor(O)), I % e.slidesPerGroup == 0 && y.push(O), w.push(O), O = O + S + P),
                                this.virtualSize += S + P,
                                A = S,
                                I += 1
                            }
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, r) + T, o && l && ("slide" === e.effect || "coverflow" === e.effect) && n.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }), f.flexbox && !e.setWrapperSize || (this.isHorizontal() ? n.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : n.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * C, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? n.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : n.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.centeredSlides)) {
                            _ = [];
                            for (var ie = 0; ie < y.length; ie += 1) {
                                var se = y[ie];
                                e.roundLengths && (se = Math.floor(se)),
                                y[ie] < this.virtualSize + y[0] && _.push(se)
                            }
                            y = _
                        }
                        if (!e.centeredSlides) {
                            _ = [];
                            for (var ne = 0; ne < y.length; ne += 1) {
                                var ae = y[ne];
                                e.roundLengths && (ae = Math.floor(ae)),
                                y[ne] <= this.virtualSize - r && _.push(ae)
                            }
                            y = _,
                            Math.floor(this.virtualSize - r) - Math.floor(y[y.length - 1]) > 1 && y.push(this.virtualSize - r)
                        }
                        if (0 === y.length && (y = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? o ? v.css({
                            marginLeft: P + "px"
                        }) : v.css({
                            marginRight: P + "px"
                        }) : v.css({
                            marginBottom: P + "px"
                        })), e.centerInsufficientSlides) {
                            var re = 0;
                            if (x.forEach(function(t) {
                                re += t + (e.spaceBetween ? e.spaceBetween: 0)
                            }), (re -= e.spaceBetween) < r) {
                                var oe = (r - re) / 2;
                                y.forEach(function(e, t) {
                                    y[t] = e - oe
                                }),
                                w.forEach(function(e, t) {
                                    w[t] = e + oe
                                })
                            }
                        }
                        c.extend(this, {
                            slides: v,
                            snapGrid: y,
                            slidesGrid: w,
                            slidesSizesGrid: x
                        }),
                        m !== h && this.emit("slidesLengthChange"),
                        y.length !== M && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
                        w.length !== k && this.emit("slidesGridLengthChange"),
                        (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var i, t = [],
                    n = 0;
                    if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (i = 0; i < Math.ceil(this.params.slidesPerView); i += 1) {
                        var r = this.activeIndex + i;
                        if (r > this.slides.length) break;
                        t.push(this.slides.eq(r)[0])
                    } else t.push(this.slides.eq(this.activeIndex)[0]);
                    for (i = 0; i < t.length; i += 1) if (void 0 !== t[i]) {
                        var o = t[i].offsetHeight;
                        n = o > n ? o: n
                    }
                    n && this.$wrapperEl.css("height", n + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides,
                    i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = this.isHorizontal() ? e[i].offsetLeft: e[i].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                    n = this.slides,
                    o = this.rtlTranslate;
                    if (0 !== n.length) {
                        void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
                        var l = -e;
                        o && (l = e),
                        n.removeClass(t.slideVisibleClass),
                        this.visibleSlidesIndexes = [],
                        this.visibleSlides = [];
                        for (var i = 0; i < n.length; i += 1) {
                            var d = n[i],
                            h = (l + (t.centeredSlides ? this.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility) {
                                var c = -(l - d.swiperSlideOffset),
                                f = c + this.slidesSizesGrid[i],
                                v = c >= 0 && c < this.size || f > 0 && f <= this.size || c <= 0 && f >= this.size;
                                v && (this.visibleSlides.push(d), this.visibleSlidesIndexes.push(i), n.eq(i).addClass(t.slideVisibleClass))
                            }
                            d.progress = o ? -h: h
                        }
                        this.visibleSlides = r(this.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                    n = this.maxTranslate() - this.minTranslate(),
                    progress = this.progress,
                    r = this.isBeginning,
                    o = this.isEnd,
                    l = r,
                    d = o;
                    0 === n ? (progress = 0, r = !0, o = !0) : (progress = (e - this.minTranslate()) / n, r = progress <= 0, o = progress >= 1),
                    c.extend(this, {
                        progress: progress,
                        isBeginning: r,
                        isEnd: o
                    }),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e),
                    r && !l && this.emit("reachBeginning toEdge"),
                    o && !d && this.emit("reachEnd toEdge"),
                    (l && !r || d && !o) && this.emit("fromEdge"),
                    this.emit("progress", progress)
                },
                updateSlidesClasses: function() {
                    var e, t = this.slides,
                    n = this.params,
                    r = this.$wrapperEl,
                    o = this.activeIndex,
                    l = this.realIndex,
                    d = this.virtual && n.virtual.enabled;
                    t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass),
                    (e = d ? this.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + o + '"]') : t.eq(o)).addClass(n.slideActiveClass),
                    n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l + '"]').addClass(n.slideDuplicateActiveClass));
                    var h = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === h.length && (h = t.eq(0)).addClass(n.slideNextClass);
                    var c = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = t.eq( - 1)).addClass(n.slidePrevClass),
                    n.loop && (h.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, n = this.rtlTranslate ? this.translate: -this.translate,
                    r = this.slidesGrid,
                    o = this.snapGrid,
                    l = this.params,
                    d = this.activeIndex,
                    h = this.realIndex,
                    f = this.snapIndex,
                    v = e;
                    if (void 0 === v) {
                        for (var i = 0; i < r.length; i += 1) void 0 !== r[i + 1] ? n >= r[i] && n < r[i + 1] - (r[i + 1] - r[i]) / 2 ? v = i: n >= r[i] && n < r[i + 1] && (v = i + 1) : n >= r[i] && (v = i);
                        l.normalizeSlideIndex && (v < 0 || void 0 === v) && (v = 0)
                    }
                    if ((t = o.indexOf(n) >= 0 ? o.indexOf(n) : Math.floor(v / l.slidesPerGroup)) >= o.length && (t = o.length - 1), v !== d) {
                        var m = parseInt(this.slides.eq(v).attr("data-swiper-slide-index") || v, 10);
                        c.extend(this, {
                            snapIndex: t,
                            realIndex: m,
                            previousIndex: d,
                            activeIndex: v
                        }),
                        this.emit("activeIndexChange"),
                        this.emit("snapIndexChange"),
                        h !== m && this.emit("realIndexChange"),
                        this.emit("slideChange")
                    } else t !== f && (this.snapIndex = t, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this.params,
                    n = r(e.target).closest("." + t.slideClass)[0],
                    o = !1;
                    if (n) for (var i = 0; i < this.slides.length; i += 1) this.slides[i] === n && (o = !0);
                    if (!n || !o) return this.clickedSlide = void 0,
                    void(this.clickedIndex = void 0);
                    this.clickedSlide = n,
                    this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r(n).attr("data-swiper-slide-index"), 10) : this.clickedIndex = r(n).index(),
                    t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            x = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x": "y");
                    var t = this.params,
                    n = this.rtlTranslate,
                    r = this.translate,
                    o = this.$wrapperEl;
                    if (t.virtualTranslate) return n ? -r: r;
                    var l = c.getTranslate(o[0], e);
                    return n && (l = -l),
                    l || 0
                },
                setTranslate: function(e, t) {
                    var n = this.rtlTranslate,
                    r = this.params,
                    o = this.$wrapperEl,
                    progress = this.progress,
                    l = 0,
                    d = 0;
                    this.isHorizontal() ? l = n ? -e: e: d = e,
                    r.roundLengths && (l = Math.floor(l), d = Math.floor(d)),
                    r.virtualTranslate || (f.transforms3d ? o.transform("translate3d(" + l + "px, " + d + "px, 0px)") : o.transform("translate(" + l + "px, " + d + "px)")),
                    this.previousTranslate = this.translate,
                    this.translate = this.isHorizontal() ? l: d;
                    var h = this.maxTranslate() - this.minTranslate(); (0 === h ? 0 : (e - this.minTranslate()) / h) !== progress && this.updateProgress(e),
                    this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return - this.snapGrid[0]
                },
                maxTranslate: function() {
                    return - this.snapGrid[this.snapGrid.length - 1]
                }
            },
            E = {
                setTransition: function(e, t) {
                    this.$wrapperEl.transition(e),
                    this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this.activeIndex,
                    r = this.params,
                    o = this.previousIndex;
                    r.autoHeight && this.updateAutoHeight();
                    var l = t;
                    if (l || (l = n > o ? "next": n < o ? "prev": "reset"), this.emit("transitionStart"), e && n !== o) {
                        if ("reset" === l) return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"),
                        "next" === l ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this.activeIndex,
                    r = this.previousIndex;
                    this.animating = !1,
                    this.setTransition(0);
                    var o = t;
                    if (o || (o = n > r ? "next": n < r ? "prev": "reset"), this.emit("transitionEnd"), e && n !== r) {
                        if ("reset" === o) return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"),
                        "next" === o ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                    }
                }
            },
            T = {
                slideTo: function(e, t, n, r) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === n && (n = !0);
                    var o = this,
                    l = e;
                    l < 0 && (l = 0);
                    var d = o.params,
                    h = o.snapGrid,
                    c = o.slidesGrid,
                    v = o.previousIndex,
                    m = o.activeIndex,
                    y = o.rtlTranslate;
                    if (o.animating && d.preventInteractionOnTransition) return ! 1;
                    var w = Math.floor(l / d.slidesPerGroup);
                    w >= h.length && (w = h.length - 1),
                    (m || d.initialSlide || 0) === (v || 0) && n && o.emit("beforeSlideChangeStart");
                    var x, E = -h[w];
                    if (o.updateProgress(E), d.normalizeSlideIndex) for (var i = 0; i < c.length; i += 1) - Math.floor(100 * E) >= Math.floor(100 * c[i]) && (l = i);
                    if (o.initialized && l !== m) {
                        if (!o.allowSlideNext && E < o.translate && E < o.minTranslate()) return ! 1;
                        if (!o.allowSlidePrev && E > o.translate && E > o.maxTranslate() && (m || 0) !== l) return ! 1
                    }
                    return x = l > m ? "next": l < m ? "prev": "reset",
                    y && -E === o.translate || !y && E === o.translate ? (o.updateActiveIndex(l), d.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== d.effect && o.setTranslate(E), "reset" !== x && (o.transitionStart(n, x), o.transitionEnd(n, x)), !1) : (0 !== t && f.transition ? (o.setTransition(t), o.setTranslate(E), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, x), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, x))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))) : (o.setTransition(0), o.setTranslate(E), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, x), o.transitionEnd(n, x)), !0)
                },
                slideToLoop: function(e, t, n, r) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === n && (n = !0);
                    var o = e;
                    return this.params.loop && (o += this.loopedSlides),
                    this.slideTo(o, t, n, r)
                },
                slideNext: function(e, t, n) {
                    void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0);
                    var r = this.params,
                    o = this.animating;
                    return r.loop ? !o && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + r.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + r.slidesPerGroup, e, t, n)
                },
                slidePrev: function(e, t, n) {
                    void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0);
                    var r = this.params,
                    o = this.animating,
                    l = this.snapGrid,
                    d = this.slidesGrid,
                    h = this.rtlTranslate;
                    if (r.loop) {
                        if (o) return ! 1;
                        this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft
                    }
                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var f, v = c(h ? this.translate: -this.translate),
                    m = l.map(function(e) {
                        return c(e)
                    }),
                    y = (d.map(function(e) {
                        return c(e)
                    }), l[m.indexOf(v)], l[m.indexOf(v) - 1]);
                    return void 0 !== y && (f = d.indexOf(y)) < 0 && (f = this.activeIndex - 1),
                    this.slideTo(f, e, t, n)
                },
                slideReset: function(e, t, n) {
                    return void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0),
                    this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e, t, n) {
                    void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0);
                    var r = this.activeIndex,
                    o = Math.floor(r / this.params.slidesPerGroup);
                    if (o < this.snapGrid.length - 1) {
                        var l = this.rtlTranslate ? this.translate: -this.translate,
                        d = this.snapGrid[o],
                        h = this.snapGrid[o + 1];
                        l - d > (h - d) / 2 && (r = this.params.slidesPerGroup)
                    }
                    return this.slideTo(r, e, t, n)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                    n = t.params,
                    o = t.$wrapperEl,
                    l = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                    d = t.clickedIndex;
                    if (n.loop) {
                        if (t.animating) return;
                        e = parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                        n.centeredSlides ? d < t.loopedSlides - l / 2 || d > t.slides.length - t.loopedSlides + l / 2 ? (t.loopFix(), d = o.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() {
                            t.slideTo(d)
                        })) : t.slideTo(d) : d > t.slides.length - l ? (t.loopFix(), d = o.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() {
                            t.slideTo(d)
                        })) : t.slideTo(d)
                    } else t.slideTo(d)
                }
            },
            C = {
                loopCreate: function() {
                    var t = this,
                    n = t.params,
                    o = t.$wrapperEl;
                    o.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                    var l = o.children("." + n.slideClass);
                    if (n.loopFillGroupWithBlank) {
                        var d = n.slidesPerGroup - l.length % n.slidesPerGroup;
                        if (d !== n.slidesPerGroup) {
                            for (var i = 0; i < d; i += 1) {
                                var h = r(e.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                                o.append(h)
                            }
                            l = o.children("." + n.slideClass)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = l.length),
                    t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10),
                    t.loopedSlides += n.loopAdditionalSlides,
                    t.loopedSlides > l.length && (t.loopedSlides = l.length);
                    var c = [],
                    f = [];
                    l.each(function(e, n) {
                        var o = r(n);
                        e < t.loopedSlides && f.push(n),
                        e < l.length && e >= l.length - t.loopedSlides && c.push(n),
                        o.attr("data-swiper-slide-index", e)
                    });
                    for (var v = 0; v < f.length; v += 1) o.append(r(f[v].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (var m = c.length - 1; m >= 0; m -= 1) o.prepend(r(c[m].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this.params,
                    n = this.activeIndex,
                    r = this.slides,
                    o = this.loopedSlides,
                    l = this.allowSlidePrev,
                    d = this.allowSlideNext,
                    h = this.snapGrid,
                    c = this.rtlTranslate;
                    this.allowSlidePrev = !0,
                    this.allowSlideNext = !0;
                    var f = -h[n] - this.getTranslate();
                    if (n < o) {
                        e = r.length - 3 * o + n,
                        e += o;
                        var v = this.slideTo(e, 0, !1, !0);
                        v && 0 !== f && this.setTranslate((c ? -this.translate: this.translate) - f)
                    } else if ("auto" === t.slidesPerView && n >= 2 * o || n >= r.length - o) {
                        e = -r.length + n + o,
                        e += o;
                        var m = this.slideTo(e, 0, !1, !0);
                        m && 0 !== f && this.setTranslate((c ? -this.translate: this.translate) - f)
                    }
                    this.allowSlidePrev = l,
                    this.allowSlideNext = d
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                    t = this.params,
                    n = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
                    n.removeAttr("data-swiper-slide-index")
                }
            },
            S = {
                setGrabCursor: function(e) {
                    if (! (f.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var t = this.el;
                        t.style.cursor = "move",
                        t.style.cursor = e ? "-webkit-grabbing": "-webkit-grab",
                        t.style.cursor = e ? "-moz-grabbin": "-moz-grab",
                        t.style.cursor = e ? "grabbing": "grab"
                    }
                },
                unsetGrabCursor: function() {
                    f.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                }
            },
            M = {
                appendSlide: function(e) {
                    var t = this.$wrapperEl,
                    n = this.params;
                    if (n.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
                    else t.append(e);
                    n.loop && this.loopCreate(),
                    n.observer && f.observer || this.update()
                },
                prependSlide: function(e) {
                    var t = this.params,
                    n = this.$wrapperEl,
                    r = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var o = r + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var i = 0; i < e.length; i += 1) e[i] && n.prepend(e[i]);
                        o = r + e.length
                    } else n.prepend(e);
                    t.loop && this.loopCreate(),
                    t.observer && f.observer || this.update(),
                    this.slideTo(o, 0, !1)
                },
                addSlide: function(e, t) {
                    var n = this.$wrapperEl,
                    r = this.params,
                    o = this.activeIndex;
                    r.loop && (o -= this.loopedSlides, this.loopDestroy(), this.slides = n.children("." + r.slideClass));
                    var l = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= l) this.appendSlide(t);
                    else {
                        for (var d = o > e ? o + 1 : o, h = [], i = l - 1; i >= e; i -= 1) {
                            var c = this.slides.eq(i);
                            c.remove(),
                            h.unshift(c)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var v = 0; v < t.length; v += 1) t[v] && n.append(t[v]);
                            d = o > e ? o + t.length: o
                        } else n.append(t);
                        for (var m = 0; m < h.length; m += 1) n.append(h[m]);
                        r.loop && this.loopCreate(),
                        r.observer && f.observer || this.update(),
                        r.loop ? this.slideTo(d + this.loopedSlides, 0, !1) : this.slideTo(d, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this.params,
                    n = this.$wrapperEl,
                    r = this.activeIndex;
                    t.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = n.children("." + t.slideClass));
                    var o, l = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var i = 0; i < e.length; i += 1) o = e[i],
                        this.slides[o] && this.slides.eq(o).remove(),
                        o < l && (l -= 1);
                        l = Math.max(l, 0)
                    } else o = e,
                    this.slides[o] && this.slides.eq(o).remove(),
                    o < l && (l -= 1),
                    l = Math.max(l, 0);
                    t.loop && this.loopCreate(),
                    t.observer && f.observer || this.update(),
                    t.loop ? this.slideTo(l + this.loopedSlides, 0, !1) : this.slideTo(l, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], i = 0; i < this.slides.length; i += 1) e.push(i);
                    this.removeSlide(e)
                }
            },
            k = function() {
                var n = t.navigator.userAgent,
                r = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: t.cordova || t.phonegap,
                    phonegap: t.cordova || t.phonegap
                },
                o = n.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                l = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                d = n.match(/(iPad).*OS\s([\d_]+)/),
                h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (o && (r.os = "windows", r.osVersion = o[2], r.windows = !0), l && !o && (r.os = "android", r.osVersion = l[2], r.android = !0, r.androidChrome = n.toLowerCase().indexOf("chrome") >= 0), (d || c || h) && (r.os = "ios", r.ios = !0), c && !h && (r.osVersion = c[2].replace(/_/g, "."), r.iphone = !0), d && (r.osVersion = d[2].replace(/_/g, "."), r.ipad = !0), h && (r.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, r.iphone = !0), r.ios && r.osVersion && n.indexOf("Version/") >= 0 && "10" === r.osVersion.split(".")[0] && (r.osVersion = n.toLowerCase().split("version/")[1].split(" ")[0]), r.desktop = !(r.os || r.android || r.webView), r.webView = (c || d || h) && n.match(/.*AppleWebKit(?!.*Safari)/i), r.os && "ios" === r.os) {
                    var f = r.osVersion.split("."),
                    v = e.querySelector('meta[name="viewport"]');
                    r.minimalUi = !r.webView && (h || c) && (1 * f[0] == 7 ? 1 * f[1] >= 1 : 1 * f[0] > 7) && v && v.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return r.pixelRatio = t.devicePixelRatio || 1,
                r
            } ();
            function P() {
                var e = this.params,
                t = this.el;
                if (!t || 0 !== t.offsetWidth) {
                    e.breakpoints && this.setBreakpoint();
                    var n = this.allowSlideNext,
                    r = this.allowSlidePrev,
                    o = this.snapGrid;
                    if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                        var l = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                        this.setTranslate(l),
                        this.updateActiveIndex(),
                        this.updateSlidesClasses(),
                        e.autoHeight && this.updateAutoHeight()
                    } else this.updateSlidesClasses(),
                    ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                    this.allowSlidePrev = r,
                    this.allowSlideNext = n,
                    this.params.watchOverflow && o !== this.snapGrid && this.checkOverflow()
                }
            }
            var O = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsInverse: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            A = {
                update: w,
                translate: x,
                transition: E,
                slide: T,
                loop: C,
                grabCursor: S,
                manipulation: M,
                events: {
                    attachEvents: function() {
                        var n = this.params,
                        o = this.touchEvents,
                        l = this.el,
                        d = this.wrapperEl;
                        this.onTouchStart = function(n) {
                            var data = this.touchEventsData,
                            o = this.params,
                            l = this.touches;
                            if (!this.animating || !o.preventInteractionOnTransition) {
                                var d = n;
                                if (d.originalEvent && (d = d.originalEvent), data.isTouchEvent = "touchstart" === d.type, (data.isTouchEvent || !("which" in d) || 3 !== d.which) && !(!data.isTouchEvent && "button" in d && d.button > 0 || data.isTouched && data.isMoved)) if (o.noSwiping && r(d.target).closest(o.noSwipingSelector ? o.noSwipingSelector: "." + o.noSwipingClass)[0]) this.allowClick = !0;
                                else if (!o.swipeHandler || r(d).closest(o.swipeHandler)[0]) {
                                    l.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX: d.pageX,
                                    l.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY: d.pageY;
                                    var h = l.currentX,
                                    f = l.currentY,
                                    v = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                                    m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                    if (!v || !(h <= m || h >= t.screen.width - m)) {
                                        if (c.extend(data, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), l.startX = h, l.startY = f, data.touchStartTime = c.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, o.threshold > 0 && (data.allowThresholdMove = !1), "touchstart" !== d.type) {
                                            var y = !0;
                                            r(d.target).is(data.formElements) && (y = !1),
                                            e.activeElement && r(e.activeElement).is(data.formElements) && e.activeElement !== d.target && e.activeElement.blur();
                                            var w = y && this.allowTouchMove && o.touchStartPreventDefault; (o.touchStartForcePreventDefault || w) && d.preventDefault()
                                        }
                                        this.emit("touchStart", d)
                                    }
                                }
                            }
                        }.bind(this),
                        this.onTouchMove = function(t) {
                            var data = this.touchEventsData,
                            n = this.params,
                            o = this.touches,
                            l = this.rtlTranslate,
                            d = t;
                            if (d.originalEvent && (d = d.originalEvent), data.isTouched) {
                                if (!data.isTouchEvent || "mousemove" !== d.type) {
                                    var h = "touchmove" === d.type ? d.targetTouches[0].pageX: d.pageX,
                                    f = "touchmove" === d.type ? d.targetTouches[0].pageY: d.pageY;
                                    if (d.preventedByNestedSwiper) return o.startX = h,
                                    void(o.startY = f);
                                    if (!this.allowTouchMove) return this.allowClick = !1,
                                    void(data.isTouched && (c.extend(o, {
                                        startX: h,
                                        startY: f,
                                        currentX: h,
                                        currentY: f
                                    }), data.touchStartTime = c.now()));
                                    if (data.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (this.isVertical()) {
                                        if (f < o.startY && this.translate <= this.maxTranslate() || f > o.startY && this.translate >= this.minTranslate()) return data.isTouched = !1,
                                        void(data.isMoved = !1)
                                    } else if (h < o.startX && this.translate <= this.maxTranslate() || h > o.startX && this.translate >= this.minTranslate()) return;
                                    if (data.isTouchEvent && e.activeElement && d.target === e.activeElement && r(d.target).is(data.formElements)) return data.isMoved = !0,
                                    void(this.allowClick = !1);
                                    if (data.allowTouchCallbacks && this.emit("touchMove", d), !(d.targetTouches && d.targetTouches.length > 1)) {
                                        o.currentX = h,
                                        o.currentY = f;
                                        var v, m = o.currentX - o.startX,
                                        y = o.currentY - o.startY;
                                        if (! (this.params.threshold && Math.sqrt(Math.pow(m, 2) + Math.pow(y, 2)) < this.params.threshold)) if (void 0 === data.isScrolling && (this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? data.isScrolling = !1 : m * m + y * y >= 25 && (v = 180 * Math.atan2(Math.abs(y), Math.abs(m)) / Math.PI, data.isScrolling = this.isHorizontal() ? v > n.touchAngle: 90 - v > n.touchAngle)), data.isScrolling && this.emit("touchMoveOpposite", d), void 0 === data.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (data.startMoving = !0)), data.isScrolling) data.isTouched = !1;
                                        else if (data.startMoving) {
                                            this.allowClick = !1,
                                            d.preventDefault(),
                                            n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
                                            data.isMoved || (n.loop && this.loopFix(), data.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", d)),
                                            this.emit("sliderMove", d),
                                            data.isMoved = !0;
                                            var w = this.isHorizontal() ? m: y;
                                            o.diff = w,
                                            w *= n.touchRatio,
                                            l && (w = -w),
                                            this.swipeDirection = w > 0 ? "prev": "next",
                                            data.currentTranslate = w + data.startTranslate;
                                            var x = !0,
                                            E = n.resistanceRatio;
                                            if (n.touchReleaseOnEdges && (E = 0), w > 0 && data.currentTranslate > this.minTranslate() ? (x = !1, n.resistance && (data.currentTranslate = this.minTranslate() - 1 + Math.pow( - this.minTranslate() + data.startTranslate + w, E))) : w < 0 && data.currentTranslate < this.maxTranslate() && (x = !1, n.resistance && (data.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - data.startTranslate - w, E))), x && (d.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), n.threshold > 0) {
                                                if (! (Math.abs(w) > n.threshold || data.allowThresholdMove)) return void(data.currentTranslate = data.startTranslate);
                                                if (!data.allowThresholdMove) return data.allowThresholdMove = !0,
                                                o.startX = o.currentX,
                                                o.startY = o.currentY,
                                                data.currentTranslate = data.startTranslate,
                                                void(o.diff = this.isHorizontal() ? o.currentX - o.startX: o.currentY - o.startY)
                                            }
                                            n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === data.velocities.length && data.velocities.push({
                                                position: o[this.isHorizontal() ? "startX": "startY"],
                                                time: data.touchStartTime
                                            }), data.velocities.push({
                                                position: o[this.isHorizontal() ? "currentX": "currentY"],
                                                time: c.now()
                                            })), this.updateProgress(data.currentTranslate), this.setTranslate(data.currentTranslate))
                                        }
                                    }
                                }
                            } else data.startMoving && data.isScrolling && this.emit("touchMoveOpposite", d)
                        }.bind(this),
                        this.onTouchEnd = function(e) {
                            var t = this,
                            data = t.touchEventsData,
                            n = t.params,
                            r = t.touches,
                            o = t.rtlTranslate,
                            l = t.$wrapperEl,
                            d = t.slidesGrid,
                            h = t.snapGrid,
                            f = e;
                            if (f.originalEvent && (f = f.originalEvent), data.allowTouchCallbacks && t.emit("touchEnd", f), data.allowTouchCallbacks = !1, !data.isTouched) return data.isMoved && n.grabCursor && t.setGrabCursor(!1),
                            data.isMoved = !1,
                            void(data.startMoving = !1);
                            n.grabCursor && data.isMoved && data.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var v, m = c.now(),
                            y = m - data.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(f), t.emit("tap", f), y < 300 && m - data.lastClickTime > 300 && (data.clickTimeout && clearTimeout(data.clickTimeout), data.clickTimeout = c.nextTick(function() {
                                t && !t.destroyed && t.emit("click", f)
                            },
                            300)), y < 300 && m - data.lastClickTime < 300 && (data.clickTimeout && clearTimeout(data.clickTimeout), t.emit("doubleTap", f))), data.lastClickTime = c.now(), c.nextTick(function() {
                                t.destroyed || (t.allowClick = !0)
                            }), !data.isTouched || !data.isMoved || !t.swipeDirection || 0 === r.diff || data.currentTranslate === data.startTranslate) return data.isTouched = !1,
                            data.isMoved = !1,
                            void(data.startMoving = !1);
                            if (data.isTouched = !1, data.isMoved = !1, data.startMoving = !1, v = n.followFinger ? o ? t.translate: -t.translate: -data.currentTranslate, n.freeMode) {
                                if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                if (v > -t.maxTranslate()) return void(t.slides.length < h.length ? t.slideTo(h.length - 1) : t.slideTo(t.slides.length - 1));
                                if (n.freeModeMomentum) {
                                    if (data.velocities.length > 1) {
                                        var w = data.velocities.pop(),
                                        x = data.velocities.pop(),
                                        E = w.position - x.position,
                                        time = w.time - x.time;
                                        t.velocity = E / time,
                                        t.velocity /= 2,
                                        Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                                        (time > 150 || c.now() - w.time > 300) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= n.freeModeMomentumVelocityRatio,
                                    data.velocities.length = 0;
                                    var T = 1e3 * n.freeModeMomentumRatio,
                                    C = t.velocity * T,
                                    S = t.translate + C;
                                    o && (S = -S);
                                    var M, k, P = !1,
                                    O = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                    if (S < t.maxTranslate()) n.freeModeMomentumBounce ? (S + t.maxTranslate() < -O && (S = t.maxTranslate() - O), M = t.maxTranslate(), P = !0, data.allowMomentumBounce = !0) : S = t.maxTranslate(),
                                    n.loop && n.centeredSlides && (k = !0);
                                    else if (S > t.minTranslate()) n.freeModeMomentumBounce ? (S - t.minTranslate() > O && (S = t.minTranslate() + O), M = t.minTranslate(), P = !0, data.allowMomentumBounce = !0) : S = t.minTranslate(),
                                    n.loop && n.centeredSlides && (k = !0);
                                    else if (n.freeModeSticky) {
                                        for (var A, I = 0; I < h.length; I += 1) if (h[I] > -S) {
                                            A = I;
                                            break
                                        }
                                        S = -(S = Math.abs(h[A] - S) < Math.abs(h[A - 1] - S) || "next" === t.swipeDirection ? h[A] : h[A - 1])
                                    }
                                    if (k && t.once("transitionEnd",
                                    function() {
                                        t.loopFix()
                                    }), 0 !== t.velocity) T = o ? Math.abs(( - S - t.translate) / t.velocity) : Math.abs((S - t.translate) / t.velocity);
                                    else if (n.freeModeSticky) return void t.slideToClosest();
                                    n.freeModeMomentumBounce && P ? (t.updateProgress(M), t.setTransition(T), t.setTranslate(S), t.transitionStart(!0, t.swipeDirection), t.animating = !0, l.transitionEnd(function() {
                                        t && !t.destroyed && data.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(M), l.transitionEnd(function() {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    })) : t.velocity ? (t.updateProgress(S), t.setTransition(T), t.setTranslate(S), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, l.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(S),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses()
                                } else if (n.freeModeSticky) return void t.slideToClosest(); (!n.freeModeMomentum || y >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            } else {
                                for (var _ = 0,
                                z = t.slidesSizesGrid[0], i = 0; i < d.length; i += n.slidesPerGroup) void 0 !== d[i + n.slidesPerGroup] ? v >= d[i] && v < d[i + n.slidesPerGroup] && (_ = i, z = d[i + n.slidesPerGroup] - d[i]) : v >= d[i] && (_ = i, z = d[d.length - 1] - d[d.length - 2]);
                                var L = (v - d[_]) / z;
                                if (y > n.longSwipesMs) {
                                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && (L >= n.longSwipesRatio ? t.slideTo(_ + n.slidesPerGroup) : t.slideTo(_)),
                                    "prev" === t.swipeDirection && (L > 1 - n.longSwipesRatio ? t.slideTo(_ + n.slidesPerGroup) : t.slideTo(_))
                                } else {
                                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && t.slideTo(_ + n.slidesPerGroup),
                                    "prev" === t.swipeDirection && t.slideTo(_)
                                }
                            }
                        }.bind(this),
                        this.onClick = function(e) {
                            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                        }.bind(this);
                        var h = "container" === n.touchEventsTarget ? l: d,
                        v = !!n.nested;
                        if (f.touch || !f.pointerEvents && !f.prefixedPointerEvents) {
                            if (f.touch) {
                                var m = !("touchstart" !== o.start || !f.passiveListener || !n.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                h.addEventListener(o.start, this.onTouchStart, m),
                                h.addEventListener(o.move, this.onTouchMove, f.passiveListener ? {
                                    passive: !1,
                                    capture: v
                                }: v),
                                h.addEventListener(o.end, this.onTouchEnd, m)
                            } (n.simulateTouch && !k.ios && !k.android || n.simulateTouch && !f.touch && k.ios) && (h.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, v), e.addEventListener("mouseup", this.onTouchEnd, !1))
                        } else h.addEventListener(o.start, this.onTouchStart, !1),
                        e.addEventListener(o.move, this.onTouchMove, v),
                        e.addEventListener(o.end, this.onTouchEnd, !1); (n.preventClicks || n.preventClicksPropagation) && h.addEventListener("click", this.onClick, !0),
                        this.on(k.ios || k.android ? "resize orientationchange observerUpdate": "resize observerUpdate", P, !0)
                    },
                    detachEvents: function() {
                        var t = this.params,
                        n = this.touchEvents,
                        r = this.el,
                        o = this.wrapperEl,
                        l = "container" === t.touchEventsTarget ? r: o,
                        d = !!t.nested;
                        if (f.touch || !f.pointerEvents && !f.prefixedPointerEvents) {
                            if (f.touch) {
                                var h = !("onTouchStart" !== n.start || !f.passiveListener || !t.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                l.removeEventListener(n.start, this.onTouchStart, h),
                                l.removeEventListener(n.move, this.onTouchMove, d),
                                l.removeEventListener(n.end, this.onTouchEnd, h)
                            } (t.simulateTouch && !k.ios && !k.android || t.simulateTouch && !f.touch && k.ios) && (l.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, d), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                        } else l.removeEventListener(n.start, this.onTouchStart, !1),
                        e.removeEventListener(n.move, this.onTouchMove, d),
                        e.removeEventListener(n.end, this.onTouchEnd, !1); (t.preventClicks || t.preventClicksPropagation) && l.removeEventListener("click", this.onClick, !0),
                        this.off(k.ios || k.android ? "resize orientationchange observerUpdate": "resize observerUpdate", P)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var e = this.activeIndex,
                        t = this.initialized,
                        n = this.loopedSlides;
                        void 0 === n && (n = 0);
                        var r = this.params,
                        o = r.breakpoints;
                        if (o && (!o || 0 !== Object.keys(o).length)) {
                            var l = this.getBreakpoint(o);
                            if (l && this.currentBreakpoint !== l) {
                                var d = l in o ? o[l] : void 0;
                                d && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(param) {
                                    var e = d[param];
                                    void 0 !== e && (d[param] = "slidesPerView" !== param || "AUTO" !== e && "auto" !== e ? "slidesPerView" === param ? parseFloat(e) : parseInt(e, 10) : "auto")
                                });
                                var h = d || this.originalParams,
                                f = h.direction && h.direction !== r.direction,
                                v = r.loop && (h.slidesPerView !== r.slidesPerView || f);
                                f && t && this.changeDirection(),
                                c.extend(this.params, h),
                                c.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }),
                                this.currentBreakpoint = l,
                                v && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - n + this.loopedSlides, 0, !1)),
                                this.emit("breakpoint", h)
                            }
                        }
                    },
                    getBreakpoint: function(e) {
                        if (e) {
                            var n = !1,
                            r = [];
                            Object.keys(e).forEach(function(e) {
                                r.push(e)
                            }),
                            r.sort(function(a, b) {
                                return parseInt(a, 10) - parseInt(b, 10)
                            });
                            for (var i = 0; i < r.length; i += 1) {
                                var o = r[i];
                                this.params.breakpointsInverse ? o <= t.innerWidth && (n = o) : o >= t.innerWidth && !n && (n = o)
                            }
                            return n || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this.isLocked;
                        this.isLocked = 1 === this.snapGrid.length,
                        this.allowSlideNext = !this.isLocked,
                        this.allowSlidePrev = !this.isLocked,
                        e !== this.isLocked && this.emit(this.isLocked ? "lock": "unlock"),
                        e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var e = this.classNames,
                        t = this.params,
                        n = this.rtl,
                        r = this.$el,
                        o = [];
                        o.push("initialized"),
                        o.push(t.direction),
                        t.freeMode && o.push("free-mode"),
                        f.flexbox || o.push("no-flexbox"),
                        t.autoHeight && o.push("autoheight"),
                        n && o.push("rtl"),
                        t.slidesPerColumn > 1 && o.push("multirow"),
                        k.android && o.push("android"),
                        k.ios && o.push("ios"),
                        (v.isIE || v.isEdge) && (f.pointerEvents || f.prefixedPointerEvents) && o.push("wp8-" + t.direction),
                        o.forEach(function(n) {
                            e.push(t.containerModifierClass + n)
                        }),
                        r.addClass(e.join(" "))
                    },
                    removeClasses: function() {
                        var e = this.$el,
                        t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, n, r, o, l, d) {
                        var image;
                        function h() {
                            d && d()
                        }
                        e.complete && l ? h() : n ? ((image = new t.Image).onload = h, image.onerror = h, o && (image.sizes = o), r && (image.srcset = r), n && (image.src = n)) : h()
                    },
                    preloadImages: function() {
                        var e = this;
                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            I = {},
            _ = function(e) {
                function t() {
                    for (var n, o, l, d = [], h = arguments.length; h--;) d[h] = arguments[h];
                    1 === d.length && d[0].constructor && d[0].constructor === Object ? l = d[0] : (o = (n = d)[0], l = n[1]),
                    l || (l = {}),
                    l = c.extend({},
                    l),
                    o && !l.el && (l.el = o),
                    e.call(this, l),
                    Object.keys(A).forEach(function(e) {
                        Object.keys(A[e]).forEach(function(n) {
                            t.prototype[n] || (t.prototype[n] = A[e][n])
                        })
                    });
                    var v = this;
                    void 0 === v.modules && (v.modules = {}),
                    Object.keys(v.modules).forEach(function(e) {
                        var t = v.modules[e];
                        if (t.params) {
                            var n = Object.keys(t.params)[0],
                            r = t.params[n];
                            if ("object" != typeof r || null === r) return;
                            if (! (n in l && "enabled" in r)) return; ! 0 === l[n] && (l[n] = {
                                enabled: !0
                            }),
                            "object" != typeof l[n] || "enabled" in l[n] || (l[n].enabled = !0),
                            l[n] || (l[n] = {
                                enabled: !1
                            })
                        }
                    });
                    var m = c.extend({},
                    O);
                    v.useModulesParams(m),
                    v.params = c.extend({},
                    m, I, l),
                    v.originalParams = c.extend({},
                    v.params),
                    v.passedParams = c.extend({},
                    l),
                    v.$ = r;
                    var y = r(v.params.el);
                    if (o = y[0]) {
                        if (y.length > 1) {
                            var w = [];
                            return y.each(function(e, n) {
                                var r = c.extend({},
                                l, {
                                    el: n
                                });
                                w.push(new t(r))
                            }),
                            w
                        }
                        o.swiper = v,
                        y.data("swiper", v);
                        var x, E, T = y.children("." + v.params.wrapperClass);
                        return c.extend(v, {
                            $el: y,
                            el: o,
                            $wrapperEl: T,
                            wrapperEl: T[0],
                            classNames: [],
                            slides: r(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === v.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === v.params.direction
                            },
                            rtl: "rtl" === o.dir.toLowerCase() || "rtl" === y.css("direction"),
                            rtlTranslate: "horizontal" === v.params.direction && ("rtl" === o.dir.toLowerCase() || "rtl" === y.css("direction")),
                            wrongRTL: "-webkit-box" === T.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: v.params.allowSlideNext,
                            allowSlidePrev: v.params.allowSlidePrev,
                            touchEvents: (x = ["touchstart", "touchmove", "touchend"], E = ["mousedown", "mousemove", "mouseup"], f.pointerEvents ? E = ["pointerdown", "pointermove", "pointerup"] : f.prefixedPointerEvents && (E = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEventsTouch = {
                                start: x[0],
                                move: x[1],
                                end: x[2]
                            },
                            v.touchEventsDesktop = {
                                start: E[0],
                                move: E[1],
                                end: E[2]
                            },
                            f.touch || !v.params.simulateTouch ? v.touchEventsTouch: v.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: c.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: v.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }),
                        v.useModules(),
                        v.params.init && v.init(),
                        v
                    }
                }
                e && (t.__proto__ = e),
                t.prototype = Object.create(e && e.prototype),
                t.prototype.constructor = t;
                var n = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return t.prototype.slidesPerViewDynamic = function() {
                    var e = this.params,
                    t = this.slides,
                    n = this.slidesGrid,
                    r = this.size,
                    o = this.activeIndex,
                    l = 1;
                    if (e.centeredSlides) {
                        for (var d, h = t[o].swiperSlideSize, i = o + 1; i < t.length; i += 1) t[i] && !d && (h += t[i].swiperSlideSize, l += 1, h > r && (d = !0));
                        for (var c = o - 1; c >= 0; c -= 1) t[c] && !d && (h += t[c].swiperSlideSize, l += 1, h > r && (d = !0))
                    } else for (var f = o + 1; f < t.length; f += 1) n[f] - n[o] < r && (l += 1);
                    return l
                },
                t.prototype.update = function() {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                        n = e.params;
                        n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit("update")
                    }
                    function r() {
                        var t = e.rtlTranslate ? -1 * e.translate: e.translate,
                        n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                    }
                },
                t.prototype.changeDirection = function(e, t) {
                    void 0 === t && (t = !0);
                    var n = this.params.direction;
                    return e || (e = "horizontal" === n ? "vertical": "horizontal"),
                    e === n || "horizontal" !== e && "vertical" !== e ? this: ("vertical" === n && (this.$el.removeClass(this.params.containerModifierClass + "vertical wp8-vertical").addClass("" + this.params.containerModifierClass + e), (v.isIE || v.isEdge) && (f.pointerEvents || f.prefixedPointerEvents) && this.$el.addClass(this.params.containerModifierClass + "wp8-" + e)), "horizontal" === n && (this.$el.removeClass(this.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + this.params.containerModifierClass + e), (v.isIE || v.isEdge) && (f.pointerEvents || f.prefixedPointerEvents) && this.$el.addClass(this.params.containerModifierClass + "wp8-" + e)), this.params.direction = e, this.slides.each(function(t, n) {
                        "vertical" === e ? n.style.width = "": n.style.height = ""
                    }), this.emit("changeDirection"), t && this.update(), this)
                },
                t.prototype.init = function() {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                },
                t.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0),
                    void 0 === t && (t = !0);
                    var n = this,
                    r = n.params,
                    o = n.$el,
                    l = n.$wrapperEl,
                    d = n.slides;
                    return void 0 === n.params || n.destroyed ? null: (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), o.removeAttr("style"), l.removeAttr("style"), d && d.length && d.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) {
                        n.off(e)
                    }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), c.deleteProps(n)), n.destroyed = !0, null)
                },
                t.extendDefaults = function(e) {
                    c.extend(I, e)
                },
                n.extendedDefaults.get = function() {
                    return I
                },
                n.defaults.get = function() {
                    return O
                },
                n.Class.get = function() {
                    return e
                },
                n.$.get = function() {
                    return r
                },
                Object.defineProperties(t, n),
                t
            } (m),
            z = {
                name: "device",
                proto: {
                    device: k
                },
                static: {
                    device: k
                }
            },
            L = {
                name: "support",
                proto: {
                    support: f
                },
                static: {
                    support: f
                }
            },
            $ = {
                name: "browser",
                proto: {
                    browser: v
                },
                static: {
                    browser: v
                }
            },
            D = {
                name: "resize",
                create: function() {
                    var e = this;
                    c.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        t.addEventListener("resize", this.resize.resizeHandler),
                        t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        t.removeEventListener("resize", this.resize.resizeHandler),
                        t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            N = {
                func: t.MutationObserver || t.WebkitMutationObserver,
                attach: function(e, n) {
                    void 0 === n && (n = {});
                    var r = this,
                    o = N.func,
                    l = new o(function(e) {
                        if (1 !== e.length) {
                            var n = function() {
                                r.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(n) : t.setTimeout(n, 0)
                        } else r.emit("observerUpdate", e[0])
                    });
                    l.observe(e, {
                        attributes: void 0 === n.attributes || n.attributes,
                        childList: void 0 === n.childList || n.childList,
                        characterData: void 0 === n.characterData || n.characterData
                    }),
                    r.observer.observers.push(l)
                },
                init: function() {
                    if (f.observer && this.params.observer) {
                        if (this.params.observeParents) for (var e = this.$el.parents(), i = 0; i < e.length; i += 1) this.observer.attach(e[i]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }),
                        this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    this.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }),
                    this.observer.observers = []
                }
            },
            B = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function() {
                    c.extend(this, {
                        observer: {
                            init: N.init.bind(this),
                            attach: N.attach.bind(this),
                            destroy: N.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            R = {
                update: function(e) {
                    var t = this,
                    n = t.params,
                    r = n.slidesPerView,
                    o = n.slidesPerGroup,
                    l = n.centeredSlides,
                    d = t.params.virtual,
                    h = d.addSlidesBefore,
                    f = d.addSlidesAfter,
                    v = t.virtual,
                    m = v.from,
                    y = v.to,
                    w = v.slides,
                    x = v.slidesGrid,
                    E = v.renderSlide,
                    T = v.offset;
                    t.updateActiveIndex();
                    var C, S, M, k = t.activeIndex || 0;
                    C = t.rtlTranslate ? "right": t.isHorizontal() ? "left": "top",
                    l ? (S = Math.floor(r / 2) + o + h, M = Math.floor(r / 2) + o + f) : (S = r + (o - 1) + h, M = o + f);
                    var P = Math.max((k || 0) - M, 0),
                    O = Math.min((k || 0) + S, w.length - 1),
                    A = (t.slidesGrid[P] || 0) - (t.slidesGrid[0] || 0);
                    function I() {
                        t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (c.extend(t.virtual, {
                        from: P,
                        to: O,
                        offset: A,
                        slidesGrid: t.slidesGrid
                    }), m === P && y === O && !e) return t.slidesGrid !== x && A !== T && t.slides.css(C, A + "px"),
                    void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: A,
                        from: P,
                        to: O,
                        slides: function() {
                            for (var e = [], i = P; i <= O; i += 1) e.push(w[i]);
                            return e
                        } ()
                    }),
                    void I();
                    var _ = [],
                    z = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else for (var i = m; i <= y; i += 1)(i < P || i > O) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + i + '"]').remove();
                    for (var L = 0; L < w.length; L += 1) L >= P && L <= O && (void 0 === y || e ? z.push(L) : (L > y && z.push(L), L < m && _.push(L)));
                    z.forEach(function(e) {
                        t.$wrapperEl.append(E(w[e], e))
                    }),
                    _.sort(function(a, b) {
                        return b - a
                    }).forEach(function(e) {
                        t.$wrapperEl.prepend(E(w[e], e))
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(C, A + "px"),
                    I()
                },
                renderSlide: function(e, t) {
                    var n = this.params.virtual;
                    if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                    var o = n.renderSlide ? r(n.renderSlide.call(this, e, t)) : r('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return o.attr("data-swiper-slide-index") || o.attr("data-swiper-slide-index", t),
                    n.cache && (this.virtual.cache[t] = o),
                    o
                },
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e) for (var i = 0; i < e.length; i += 1) e[i] && this.virtual.slides.push(e[i]);
                    else this.virtual.slides.push(e);
                    this.virtual.update(!0)
                },
                prependSlide: function(e) {
                    var t = this.activeIndex,
                    n = t + 1,
                    r = 1;
                    if (Array.isArray(e)) {
                        for (var i = 0; i < e.length; i += 1) e[i] && this.virtual.slides.unshift(e[i]);
                        n = t + e.length,
                        r = e.length
                    } else this.virtual.slides.unshift(e);
                    if (this.params.virtual.cache) {
                        var o = this.virtual.cache,
                        l = {};
                        Object.keys(o).forEach(function(e) {
                            l[parseInt(e, 10) + r] = o[e]
                        }),
                        this.virtual.cache = l
                    }
                    this.virtual.update(!0),
                    this.slideTo(n, 0)
                },
                removeSlide: function(e) {
                    if (null != e) {
                        var t = this.activeIndex;
                        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                        else this.virtual.slides.splice(e, 1),
                        this.params.virtual.cache && delete this.virtual.cache[e],
                        e < t && (t -= 1),
                        t = Math.max(t, 0);
                        this.virtual.update(!0),
                        this.slideTo(t, 0)
                    }
                },
                removeAllSlides: function() {
                    this.virtual.slides = [],
                    this.params.virtual.cache && (this.virtual.cache = {}),
                    this.virtual.update(!0),
                    this.slideTo(0, 0)
                }
            },
            j = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function() {
                    c.extend(this, {
                        virtual: {
                            update: R.update.bind(this),
                            appendSlide: R.appendSlide.bind(this),
                            prependSlide: R.prependSlide.bind(this),
                            removeSlide: R.removeSlide.bind(this),
                            removeAllSlides: R.removeAllSlides.bind(this),
                            renderSlide: R.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var e = {
                                watchSlidesProgress: !0
                            };
                            c.extend(this.params, e),
                            c.extend(this.originalParams, e),
                            this.params.initialSlide || this.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            H = {
                handle: function(n) {
                    var r = this.rtlTranslate,
                    o = n;
                    o.originalEvent && (o = o.originalEvent);
                    var l = o.keyCode || o.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === l || this.isVertical() && 40 === l)) return ! 1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === l || this.isVertical() && 38 === l)) return ! 1;
                    if (! (o.shiftKey || o.altKey || o.ctrlKey || o.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (37 === l || 39 === l || 38 === l || 40 === l)) {
                            var d = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var h = t.innerWidth,
                            c = t.innerHeight,
                            f = this.$el.offset();
                            r && (f.left -= this.$el[0].scrollLeft);
                            for (var v = [[f.left, f.top], [f.left + this.width, f.top], [f.left, f.top + this.height], [f.left + this.width, f.top + this.height]], i = 0; i < v.length; i += 1) {
                                var m = v[i];
                                m[0] >= 0 && m[0] <= h && m[1] >= 0 && m[1] <= c && (d = !0)
                            }
                            if (!d) return
                        }
                        this.isHorizontal() ? (37 !== l && 39 !== l || (o.preventDefault ? o.preventDefault() : o.returnValue = !1), (39 === l && !r || 37 === l && r) && this.slideNext(), (37 === l && !r || 39 === l && r) && this.slidePrev()) : (38 !== l && 40 !== l || (o.preventDefault ? o.preventDefault() : o.returnValue = !1), 40 === l && this.slideNext(), 38 === l && this.slidePrev()),
                        this.emit("keyPress", l)
                    }
                },
                enable: function() {
                    this.keyboard.enabled || (r(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function() {
                    this.keyboard.enabled && (r(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            F = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: H.enable.bind(this),
                            disable: H.disable.bind(this),
                            handle: H.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function() {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            },
            Y = {
                lastScrollTime: c.now(),
                event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll": function() {
                    var t = "onwheel" in e;
                    if (!t) {
                        var element = e.createElement("div");
                        element.setAttribute("onwheel", "return;"),
                        t = "function" == typeof element.onwheel
                    }
                    return ! t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                    t
                } () ? "wheel": "mousewheel",
                normalize: function(e) {
                    var t = 0,
                    n = 0,
                    r = 0,
                    o = 0;
                    return "detail" in e && (n = e.detail),
                    "wheelDelta" in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0),
                    r = 10 * t,
                    o = 10 * n,
                    "deltaY" in e && (o = e.deltaY),
                    "deltaX" in e && (r = e.deltaX),
                    (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, o *= 40) : (r *= 800, o *= 800)),
                    r && !t && (t = r < 1 ? -1 : 1),
                    o && !n && (n = o < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: o
                    }
                },
                handleMouseEnter: function() {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function() {
                    this.mouseEntered = !1
                },
                handle: function(e) {
                    var n = e,
                    r = this,
                    o = r.params.mousewheel;
                    if (!r.mouseEntered && !o.releaseOnEdges) return ! 0;
                    n.originalEvent && (n = n.originalEvent);
                    var l = 0,
                    d = r.rtlTranslate ? -1 : 1,
                    data = Y.normalize(n);
                    if (o.forceToAxis) if (r.isHorizontal()) {
                        if (! (Math.abs(data.pixelX) > Math.abs(data.pixelY))) return ! 0;
                        l = data.pixelX * d
                    } else {
                        if (! (Math.abs(data.pixelY) > Math.abs(data.pixelX))) return ! 0;
                        l = data.pixelY
                    } else l = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * d: -data.pixelY;
                    if (0 === l) return ! 0;
                    if (o.invert && (l = -l), r.params.freeMode) {
                        r.params.loop && r.loopFix();
                        var h = r.getTranslate() + l * o.sensitivity,
                        f = r.isBeginning,
                        v = r.isEnd;
                        if (h >= r.minTranslate() && (h = r.minTranslate()), h <= r.maxTranslate() && (h = r.maxTranslate()), r.setTransition(0), r.setTranslate(h), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!f && r.isBeginning || !v && r.isEnd) && r.updateSlidesClasses(), r.params.freeModeSticky && (clearTimeout(r.mousewheel.timeout), r.mousewheel.timeout = c.nextTick(function() {
                            r.slideToClosest()
                        },
                        300)), r.emit("scroll", n), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), h === r.minTranslate() || h === r.maxTranslate()) return ! 0
                    } else {
                        if (c.now() - r.mousewheel.lastScrollTime > 60) if (l < 0) if (r.isEnd && !r.params.loop || r.animating) {
                            if (o.releaseOnEdges) return ! 0
                        } else r.slideNext(),
                        r.emit("scroll", n);
                        else if (r.isBeginning && !r.params.loop || r.animating) {
                            if (o.releaseOnEdges) return ! 0
                        } else r.slidePrev(),
                        r.emit("scroll", n);
                        r.mousewheel.lastScrollTime = (new t.Date).getTime()
                    }
                    return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                    !1
                },
                enable: function() {
                    if (!Y.event) return ! 1;
                    if (this.mousewheel.enabled) return ! 1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = r(this.params.mousewheel.eventsTarged)),
                    e.on("mouseenter", this.mousewheel.handleMouseEnter),
                    e.on("mouseleave", this.mousewheel.handleMouseLeave),
                    e.on(Y.event, this.mousewheel.handle),
                    this.mousewheel.enabled = !0,
                    !0
                },
                disable: function() {
                    if (!Y.event) return ! 1;
                    if (!this.mousewheel.enabled) return ! 1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = r(this.params.mousewheel.eventsTarged)),
                    e.off(Y.event, this.mousewheel.handle),
                    this.mousewheel.enabled = !1,
                    !0
                }
            },
            V = {
                update: function() {
                    var e = this.params.navigation;
                    if (!this.params.loop) {
                        var t = this.navigation,
                        n = t.$nextEl,
                        r = t.$prevEl;
                        r && r.length > 0 && (this.isBeginning ? r.addClass(e.disabledClass) : r.removeClass(e.disabledClass), r[this.params.watchOverflow && this.isLocked ? "addClass": "removeClass"](e.lockClass)),
                        n && n.length > 0 && (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass": "removeClass"](e.lockClass))
                    }
                },
                onPrevClick: function(e) {
                    e.preventDefault(),
                    this.isBeginning && !this.params.loop || this.slidePrev()
                },
                onNextClick: function(e) {
                    e.preventDefault(),
                    this.isEnd && !this.params.loop || this.slideNext()
                },
                init: function() {
                    var e, t, n = this.params.navigation; (n.nextEl || n.prevEl) && (n.nextEl && (e = r(n.nextEl), this.params.uniqueNavElements && "string" == typeof n.nextEl && e.length > 1 && 1 === this.$el.find(n.nextEl).length && (e = this.$el.find(n.nextEl))), n.prevEl && (t = r(n.prevEl), this.params.uniqueNavElements && "string" == typeof n.prevEl && t.length > 1 && 1 === this.$el.find(n.prevEl).length && (t = this.$el.find(n.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), c.extend(this.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function() {
                    var e = this.navigation,
                    t = e.$nextEl,
                    n = e.$prevEl;
                    t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                    n && n.length && (n.off("click", this.navigation.onPrevClick), n.removeClass(this.params.navigation.disabledClass))
                }
            },
            G = {
                update: function() {
                    var e = this.rtl,
                    t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var n, o = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length: this.slides.length,
                        l = this.pagination.$el,
                        d = this.params.loop ? Math.ceil((o - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((n = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > o - 1 - 2 * this.loopedSlides && (n -= o - 2 * this.loopedSlides), n > d - 1 && (n -= d), n < 0 && "bullets" !== this.params.paginationType && (n = d + n)) : n = void 0 !== this.snapIndex ? this.snapIndex: this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                            var h, c, f, v = this.pagination.bullets;
                            if (t.dynamicBullets && (this.pagination.bulletSize = v.eq(0)[this.isHorizontal() ? "outerWidth": "outerHeight"](!0), l.css(this.isHorizontal() ? "width": "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += n - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), h = n - this.pagination.dynamicBulletIndex, c = h + (Math.min(v.length, t.dynamicMainBullets) - 1), f = (c + h) / 2), v.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), l.length > 1) v.each(function(e, o) {
                                var l = r(o),
                                d = l.index();
                                d === n && l.addClass(t.bulletActiveClass),
                                t.dynamicBullets && (d >= h && d <= c && l.addClass(t.bulletActiveClass + "-main"), d === h && l.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), d === c && l.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                            });
                            else {
                                var m = v.eq(n);
                                if (m.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                    for (var y = v.eq(h), w = v.eq(c), i = h; i <= c; i += 1) v.eq(i).addClass(t.bulletActiveClass + "-main");
                                    y.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                    w.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                                }
                            }
                            if (t.dynamicBullets) {
                                var x = Math.min(v.length, t.dynamicMainBullets + 4),
                                E = (this.pagination.bulletSize * x - this.pagination.bulletSize) / 2 - f * this.pagination.bulletSize,
                                T = e ? "right": "left";
                                v.css(this.isHorizontal() ? T: "top", E + "px")
                            }
                        }
                        if ("fraction" === t.type && (l.find("." + t.currentClass).text(t.formatFractionCurrent(n + 1)), l.find("." + t.totalClass).text(t.formatFractionTotal(d))), "progressbar" === t.type) {
                            var C;
                            C = t.progressbarOpposite ? this.isHorizontal() ? "vertical": "horizontal": this.isHorizontal() ? "horizontal": "vertical";
                            var S = (n + 1) / d,
                            M = 1,
                            k = 1;
                            "horizontal" === C ? M = S: k = S,
                            l.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + M + ") scaleY(" + k + ")").transition(this.params.speed)
                        }
                        "custom" === t.type && t.renderCustom ? (l.html(t.renderCustom(this, n + 1, d)), this.emit("paginationRender", this, l[0])) : this.emit("paginationUpdate", this, l[0]),
                        l[this.params.watchOverflow && this.isLocked ? "addClass": "removeClass"](t.lockClass)
                    }
                },
                render: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length: this.slides.length,
                        n = this.pagination.$el,
                        r = "";
                        if ("bullets" === e.type) {
                            for (var o = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, i = 0; i < o; i += 1) e.renderBullet ? r += e.renderBullet.call(this, i, e.bulletClass) : r += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            n.html(r),
                            this.pagination.bullets = n.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(r)),
                        "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(r)),
                        "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function() {
                    var e = this,
                    t = e.params.pagination;
                    if (t.el) {
                        var n = r(t.el);
                        0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && 1 === e.$el.find(t.el).length && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", "." + t.bulletClass,
                        function(t) {
                            t.preventDefault();
                            var n = r(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (n += e.loopedSlides),
                            e.slideTo(n)
                        }), c.extend(e.pagination, {
                            $el: n,
                            el: n[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass),
                        t.removeClass(e.modifierClass + e.type),
                        this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                        e.clickable && t.off("click", "." + e.bulletClass)
                    }
                }
            },
            X = {
                setTranslate: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                        t = this.rtlTranslate,
                        progress = this.progress,
                        n = e.dragSize,
                        r = e.trackSize,
                        o = e.$dragEl,
                        l = e.$el,
                        d = this.params.scrollbar,
                        h = n,
                        c = (r - n) * progress;
                        t ? (c = -c) > 0 ? (h = n - c, c = 0) : -c + n > r && (h = r + c) : c < 0 ? (h = n + c, c = 0) : c + n > r && (h = r - c),
                        this.isHorizontal() ? (f.transforms3d ? o.transform("translate3d(" + c + "px, 0, 0)") : o.transform("translateX(" + c + "px)"), o[0].style.width = h + "px") : (f.transforms3d ? o.transform("translate3d(0px, " + c + "px, 0)") : o.transform("translateY(" + c + "px)"), o[0].style.height = h + "px"),
                        d.hide && (clearTimeout(this.scrollbar.timeout), l[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                            l[0].style.opacity = 0,
                            l.transition(400)
                        },
                        1e3))
                    }
                },
                setTransition: function(e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                        t = e.$dragEl,
                        n = e.$el;
                        t[0].style.width = "",
                        t[0].style.height = "";
                        var r, o = this.isHorizontal() ? n[0].offsetWidth: n[0].offsetHeight,
                        l = this.size / this.virtualSize,
                        d = l * (o / this.size);
                        r = "auto" === this.params.scrollbar.dragSize ? o * l: parseInt(this.params.scrollbar.dragSize, 10),
                        this.isHorizontal() ? t[0].style.width = r + "px": t[0].style.height = r + "px",
                        n[0].style.display = l >= 1 ? "none": "",
                        this.params.scrollbar.hide && (n[0].style.opacity = 0),
                        c.extend(e, {
                            trackSize: o,
                            divider: l,
                            moveDivider: d,
                            dragSize: r
                        }),
                        e.$el[this.params.watchOverflow && this.isLocked ? "addClass": "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, n, r = this.scrollbar,
                    o = this.rtlTranslate,
                    l = r.$el,
                    d = r.dragSize,
                    h = r.trackSize;
                    t = this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX || e.clientX: "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY || e.clientY,
                    n = (t - l.offset()[this.isHorizontal() ? "left": "top"] - d / 2) / (h - d),
                    n = Math.max(Math.min(n, 1), 0),
                    o && (n = 1 - n);
                    var c = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * n;
                    this.updateProgress(c),
                    this.setTranslate(c),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this.params.scrollbar,
                    n = this.scrollbar,
                    r = this.$wrapperEl,
                    o = n.$el,
                    l = n.$dragEl;
                    this.scrollbar.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    r.transition(100),
                    l.transition(100),
                    n.setDragPosition(e),
                    clearTimeout(this.scrollbar.dragTimeout),
                    o.transition(0),
                    t.hide && o.css("opacity", 1),
                    this.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this.scrollbar,
                    n = this.$wrapperEl,
                    r = t.$el,
                    o = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), r.transition(0), o.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this.params.scrollbar,
                    n = this.scrollbar,
                    r = n.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = c.nextTick(function() {
                        r.css("opacity", 0),
                        r.transition(400)
                    },
                    1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                        n = this.touchEventsTouch,
                        r = this.touchEventsDesktop,
                        o = this.params,
                        l = t.$el,
                        d = l[0],
                        h = !(!f.passiveListener || !o.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        c = !(!f.passiveListener || !o.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        f.touch ? (d.addEventListener(n.start, this.scrollbar.onDragStart, h), d.addEventListener(n.move, this.scrollbar.onDragMove, h), d.addEventListener(n.end, this.scrollbar.onDragEnd, c)) : (d.addEventListener(r.start, this.scrollbar.onDragStart, h), e.addEventListener(r.move, this.scrollbar.onDragMove, h), e.addEventListener(r.end, this.scrollbar.onDragEnd, c))
                    }
                },
                disableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                        n = this.touchEventsTouch,
                        r = this.touchEventsDesktop,
                        o = this.params,
                        l = t.$el,
                        d = l[0],
                        h = !(!f.passiveListener || !o.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        c = !(!f.passiveListener || !o.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        f.touch ? (d.removeEventListener(n.start, this.scrollbar.onDragStart, h), d.removeEventListener(n.move, this.scrollbar.onDragMove, h), d.removeEventListener(n.end, this.scrollbar.onDragEnd, c)) : (d.removeEventListener(r.start, this.scrollbar.onDragStart, h), e.removeEventListener(r.move, this.scrollbar.onDragMove, h), e.removeEventListener(r.end, this.scrollbar.onDragEnd, c))
                    }
                },
                init: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                        t = this.$el,
                        n = this.params.scrollbar,
                        o = r(n.el);
                        this.params.uniqueNavElements && "string" == typeof n.el && o.length > 1 && 1 === t.find(n.el).length && (o = t.find(n.el));
                        var l = o.find("." + this.params.scrollbar.dragClass);
                        0 === l.length && (l = r('<div class="' + this.params.scrollbar.dragClass + '"></div>'), o.append(l)),
                        c.extend(e, {
                            $el: o,
                            el: o[0],
                            $dragEl: l,
                            dragEl: l[0]
                        }),
                        n.draggable && e.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            W = {
                setTransform: function(e, progress) {
                    var t = this.rtl,
                    n = r(e),
                    o = t ? -1 : 1,
                    p = n.attr("data-swiper-parallax") || "0",
                    l = n.attr("data-swiper-parallax-x"),
                    d = n.attr("data-swiper-parallax-y"),
                    h = n.attr("data-swiper-parallax-scale"),
                    c = n.attr("data-swiper-parallax-opacity");
                    if (l || d ? (l = l || "0", d = d || "0") : this.isHorizontal() ? (l = p, d = "0") : (d = p, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * progress * o + "%": l * progress * o + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * progress + "%": d * progress + "px", null != c) {
                        var f = c - (c - 1) * (1 - Math.abs(progress));
                        n[0].style.opacity = f
                    }
                    if (null == h) n.transform("translate3d(" + l + ", " + d + ", 0px)");
                    else {
                        var v = h - (h - 1) * (1 - Math.abs(progress));
                        n.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + v + ")")
                    }
                },
                setTranslate: function() {
                    var e = this,
                    t = e.$el,
                    n = e.slides,
                    progress = e.progress,
                    o = e.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, n) {
                        e.parallax.setTransform(n, progress)
                    }),
                    n.each(function(t, n) {
                        var l = n.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (l += Math.ceil(t / 2) - progress * (o.length - 1)),
                        l = Math.min(Math.max(l, -1), 1),
                        r(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, n) {
                            e.parallax.setTransform(n, l)
                        })
                    })
                },
                setTransition: function(e) {
                    void 0 === e && (e = this.params.speed);
                    var t = this.$el;
                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, n) {
                        var o = r(n),
                        l = parseInt(o.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (l = 0),
                        o.transition(l)
                    })
                }
            },
            U = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                    n = e.targetTouches[0].pageY,
                    r = e.targetTouches[1].pageX,
                    o = e.targetTouches[1].pageY,
                    l = Math.sqrt(Math.pow(r - t, 2) + Math.pow(o - n, 2));
                    return l
                },
                onGestureStart: function(e) {
                    var t = this.params.zoom,
                    n = this.zoom,
                    o = n.gesture;
                    if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !f.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureTouched = !0,
                        o.scaleStart = U.getDistanceBetweenTouches(e)
                    }
                    o.$slideEl && o.$slideEl.length || (o.$slideEl = r(e.target).closest(".swiper-slide"), 0 === o.$slideEl.length && (o.$slideEl = this.slides.eq(this.activeIndex)), o.$imageEl = o.$slideEl.find("img, svg, canvas"), o.$imageWrapEl = o.$imageEl.parent("." + t.containerClass), o.maxRatio = o.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== o.$imageWrapEl.length) ? (o.$imageEl.transition(0), this.zoom.isScaling = !0) : o.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this.params.zoom,
                    n = this.zoom,
                    r = n.gesture;
                    if (!f.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0,
                        r.scaleMove = U.getDistanceBetweenTouches(e)
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (f.gestures ? n.scale = e.scale * n.currentScale: n.scale = r.scaleMove / r.scaleStart * n.currentScale, n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + Math.pow(n.scale - r.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this.params.zoom,
                    n = this.zoom,
                    r = n.gesture;
                    if (!f.gestures) {
                        if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !k.android) return;
                        n.fakeGestureTouched = !1,
                        n.fakeGestureMoved = !1
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, r.maxRatio), t.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (r.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom,
                    n = t.gesture,
                    image = t.image;
                    n.$imageEl && 0 !== n.$imageEl.length && (image.isTouched || (k.android && e.preventDefault(), image.isTouched = !0, image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX: e.pageX, image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY: e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this.zoom,
                    n = t.gesture,
                    image = t.image,
                    r = t.velocity;
                    if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, image.isTouched && n.$slideEl)) {
                        image.isMoved || (image.width = n.$imageEl[0].offsetWidth, image.height = n.$imageEl[0].offsetHeight, image.startX = c.getTranslate(n.$imageWrapEl[0], "x") || 0, image.startY = c.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), this.rtl && (image.startX = -image.startX, image.startY = -image.startY));
                        var o = image.width * t.scale,
                        l = image.height * t.scale;
                        if (! (o < n.slideWidth && l < n.slideHeight)) {
                            if (image.minX = Math.min(n.slideWidth / 2 - o / 2, 0), image.maxX = -image.minX, image.minY = Math.min(n.slideHeight / 2 - l / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, !image.isMoved && !t.isScaling) {
                                if (this.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) return void(image.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) return void(image.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            image.isMoved = !0,
                            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX,
                            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY,
                            image.currentX < image.minX && (image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, .8)),
                            image.currentX > image.maxX && (image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, .8)),
                            image.currentY < image.minY && (image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, .8)),
                            image.currentY > image.maxY && (image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, .8)),
                            r.prevPositionX || (r.prevPositionX = image.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = image.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            r.x = (image.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                            r.y = (image.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                            Math.abs(image.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(image.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                            r.prevPositionX = image.touchesCurrent.x,
                            r.prevPositionY = image.touchesCurrent.y,
                            r.prevTime = Date.now(),
                            n.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom,
                    t = e.gesture,
                    image = e.image,
                    n = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!image.isTouched || !image.isMoved) return image.isTouched = !1,
                        void(image.isMoved = !1);
                        image.isTouched = !1,
                        image.isMoved = !1;
                        var r = 300,
                        o = 300,
                        l = n.x * r,
                        d = image.currentX + l,
                        h = n.y * o,
                        c = image.currentY + h;
                        0 !== n.x && (r = Math.abs((d - image.currentX) / n.x)),
                        0 !== n.y && (o = Math.abs((c - image.currentY) / n.y));
                        var f = Math.max(r, o);
                        image.currentX = d,
                        image.currentY = c;
                        var v = image.width * e.scale,
                        m = image.height * e.scale;
                        image.minX = Math.min(t.slideWidth / 2 - v / 2, 0),
                        image.maxX = -image.minX,
                        image.minY = Math.min(t.slideHeight / 2 - m / 2, 0),
                        image.maxY = -image.minY,
                        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX),
                        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY),
                        t.$imageWrapEl.transition(f).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this.zoom,
                    t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t. in (e)
                },
                in:function(e) {
                    var t, n, o, l, d, h, c, f, v, m, y, w, x, E, T, C, S, M, k = this.zoom,
                    P = this.params.zoom,
                    O = k.gesture,
                    image = k.image;
                    O.$slideEl || (O.$slideEl = this.clickedSlide ? r(this.clickedSlide) : this.slides.eq(this.activeIndex), O.$imageEl = O.$slideEl.find("img, svg, canvas"), O.$imageWrapEl = O.$imageEl.parent("." + P.containerClass)),
                    O.$imageEl && 0 !== O.$imageEl.length && (O.$slideEl.addClass("" + P.zoomedSlideClass), void 0 === image.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX: e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY: e.pageY) : (t = image.touchesStart.x, n = image.touchesStart.y), k.scale = O.$imageWrapEl.attr("data-swiper-zoom") || P.maxRatio, k.currentScale = O.$imageWrapEl.attr("data-swiper-zoom") || P.maxRatio, e ? (S = O.$slideEl[0].offsetWidth, M = O.$slideEl[0].offsetHeight, o = O.$slideEl.offset().left, l = O.$slideEl.offset().top, d = o + S / 2 - t, h = l + M / 2 - n, v = O.$imageEl[0].offsetWidth, m = O.$imageEl[0].offsetHeight, y = v * k.scale, w = m * k.scale, x = Math.min(S / 2 - y / 2, 0), E = Math.min(M / 2 - w / 2, 0), T = -x, C = -E, c = d * k.scale, f = h * k.scale, c < x && (c = x), c > T && (c = T), f < E && (f = E), f > C && (f = C)) : (c = 0, f = 0), O.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + f + "px,0)"), O.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + k.scale + ")"))
                },
                out: function() {
                    var e = this.zoom,
                    t = this.params.zoom,
                    n = e.gesture;
                    n.$slideEl || (n.$slideEl = this.clickedSlide ? r(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)),
                    n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + t.zoomedSlideClass), n.$slideEl = void 0)
                },
                enable: function() {
                    var e = this.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var t = !("touchstart" !== this.touchEvents.start || !f.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        f.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                        this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                    }
                },
                disable: function() {
                    var e = this.zoom;
                    if (e.enabled) {
                        this.zoom.enabled = !1;
                        var t = !("touchstart" !== this.touchEvents.start || !f.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        f.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                        this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                    }
                }
            },
            K = {
                loadInSlide: function(e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                    o = n.params.lazy;
                    if (void 0 !== e && 0 !== n.slides.length) {
                        var l = n.virtual && n.params.virtual.enabled,
                        d = l ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                        h = d.find("." + o.elementClass + ":not(." + o.loadedClass + "):not(." + o.loadingClass + ")"); ! d.hasClass(o.elementClass) || d.hasClass(o.loadedClass) || d.hasClass(o.loadingClass) || (h = h.add(d[0])),
                        0 !== h.length && h.each(function(e, l) {
                            var h = r(l);
                            h.addClass(o.loadingClass);
                            var c = h.attr("data-background"),
                            f = h.attr("data-src"),
                            v = h.attr("data-srcset"),
                            m = h.attr("data-sizes");
                            n.loadImage(h[0], f || c, v, m, !1,
                            function() {
                                if (null != n && n && (!n || n.params) && !n.destroyed) {
                                    if (c ? (h.css("background-image", 'url("' + c + '")'), h.removeAttr("data-background")) : (v && (h.attr("srcset", v), h.removeAttr("data-srcset")), m && (h.attr("sizes", m), h.removeAttr("data-sizes")), f && (h.attr("src", f), h.removeAttr("data-src"))), h.addClass(o.loadedClass).removeClass(o.loadingClass), d.find("." + o.preloaderClass).remove(), n.params.loop && t) {
                                        var e = d.attr("data-swiper-slide-index");
                                        if (d.hasClass(n.params.slideDuplicateClass)) {
                                            var r = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                            n.lazy.loadInSlide(r.index(), !1)
                                        } else {
                                            var l = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            n.lazy.loadInSlide(l.index(), !1)
                                        }
                                    }
                                    n.emit("lazyImageReady", d[0], h[0])
                                }
                            }),
                            n.emit("lazyImageLoad", d[0], h[0])
                        })
                    }
                },
                load: function() {
                    var e = this,
                    t = e.$wrapperEl,
                    n = e.params,
                    o = e.slides,
                    l = e.activeIndex,
                    d = e.virtual && n.virtual.enabled,
                    h = n.lazy,
                    c = n.slidesPerView;
                    function f(e) {
                        if (d) {
                            if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return ! 0
                        } else if (o[e]) return ! 0;
                        return ! 1
                    }
                    function v(e) {
                        return d ? r(e).attr("data-swiper-slide-index") : r(e).index()
                    }
                    if ("auto" === c && (c = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each(function(t, n) {
                        var o = d ? r(n).attr("data-swiper-slide-index") : r(n).index();
                        e.lazy.loadInSlide(o)
                    });
                    else if (c > 1) for (var i = l; i < l + c; i += 1) f(i) && e.lazy.loadInSlide(i);
                    else e.lazy.loadInSlide(l);
                    if (h.loadPrevNext) if (c > 1 || h.loadPrevNextAmount && h.loadPrevNextAmount > 1) {
                        for (var m = h.loadPrevNextAmount,
                        y = c,
                        w = Math.min(l + y + Math.max(m, y), o.length), x = Math.max(l - Math.max(y, m), 0), E = l + c; E < w; E += 1) f(E) && e.lazy.loadInSlide(E);
                        for (var T = x; T < l; T += 1) f(T) && e.lazy.loadInSlide(T)
                    } else {
                        var C = t.children("." + n.slideNextClass);
                        C.length > 0 && e.lazy.loadInSlide(v(C));
                        var S = t.children("." + n.slidePrevClass);
                        S.length > 0 && e.lazy.loadInSlide(v(S))
                    }
                }
            },
            Q = {
                LinearSpline: function(e, t) {
                    var n, r, o, l, d, h = function(e, t) {
                        for (r = -1, n = e.length; n - r > 1;) e[o = n + r >> 1] <= t ? r = o: n = o;
                        return n
                    };
                    return this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1,
                    this.interpolate = function(e) {
                        return e ? (d = h(this.x, e), l = d - 1, (e - this.x[l]) * (this.y[d] - this.y[l]) / (this.x[d] - this.x[l]) + this.y[l]) : 0
                    },
                    this
                },
                getInterpolateFunction: function(e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new Q.LinearSpline(this.slidesGrid, e.slidesGrid) : new Q.LinearSpline(this.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    var n, r, o = this,
                    l = o.controller.control;
                    function d(e) {
                        var t = o.rtlTranslate ? -o.translate: o.translate;
                        "slide" === o.params.controller.by && (o.controller.getInterpolateFunction(e), r = -o.controller.spline.interpolate( - t)),
                        r && "container" !== o.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), r = (t - o.minTranslate()) * n + e.minTranslate()),
                        o.params.controller.inverse && (r = e.maxTranslate() - r),
                        e.updateProgress(r),
                        e.setTranslate(r, o),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                    }
                    if (Array.isArray(l)) for (var i = 0; i < l.length; i += 1) l[i] !== t && l[i] instanceof _ && d(l[i]);
                    else l instanceof _ && t !== l && d(l)
                },
                setTransition: function(e, t) {
                    var i, n = this,
                    r = n.controller.control;
                    function o(t) {
                        t.setTransition(e, n),
                        0 !== e && (t.transitionStart(), t.params.autoHeight && c.nextTick(function() {
                            t.updateAutoHeight()
                        }), t.$wrapperEl.transitionEnd(function() {
                            r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof _ && o(r[i]);
                    else r instanceof _ && t !== r && o(r)
                }
            },
            Z = {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    c.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: Q.getInterpolateFunction.bind(this),
                            setTranslate: Q.setTranslate.bind(this),
                            setTransition: Q.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    update: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            },
            J = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addElLabel: function(e, label) {
                    return e.attr("aria-label", label),
                    e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(e) {
                    var t = this.params.a11y;
                    if (13 === e.keyCode) {
                        var n = r(e.target);
                        this.navigation && this.navigation.$nextEl && n.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                        this.navigation && this.navigation.$prevEl && n.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                        this.pagination && n.is("." + this.params.pagination.bulletClass) && n[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function() {
                    if (!this.params.loop) {
                        var e = this.navigation,
                        t = e.$nextEl,
                        n = e.$prevEl;
                        n && n.length > 0 && (this.isBeginning ? this.a11y.disableEl(n) : this.a11y.enableEl(n)),
                        t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                    }
                },
                updatePagination: function() {
                    var e = this,
                    t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(n, o) {
                        var l = r(o);
                        e.a11y.makeElFocusable(l),
                        e.a11y.addElRole(l, "button"),
                        e.a11y.addElLabel(l, t.paginationBulletMessage.replace(/{{index}}/, l.index() + 1))
                    })
                },
                init: function() {
                    this.$el.append(this.a11y.liveRegion);
                    var e, t, n = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, n.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)),
                    t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, n.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e && e.off("keydown", this.a11y.onEnterKey),
                    t && t.off("keydown", this.a11y.onEnterKey),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            ee = {
                init: function() {
                    if (this.params.history) {
                        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1,
                        void(this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        e.initialized = !0,
                        e.paths = ee.getPathValues(),
                        (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    this.history.paths = ee.getPathValues(),
                    this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    n = e.length,
                    r = e[n - 2],
                    o = e[n - 1];
                    return {
                        key: r,
                        value: o
                    }
                },
                setHistory: function(e, n) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var r = this.slides.eq(n),
                        o = ee.slugify(r.attr("data-history"));
                        t.location.pathname.includes(e) || (o = e + "/" + o);
                        var l = t.history.state;
                        l && l.value === o || (this.params.history.replaceState ? t.history.replaceState({
                            value: o
                        },
                        null, o) : t.history.pushState({
                            value: o
                        },
                        null, o))
                    }
                },
                slugify: function(text) {
                    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, n) {
                    if (t) for (var i = 0,
                    r = this.slides.length; i < r; i += 1) {
                        var o = this.slides.eq(i),
                        l = ee.slugify(o.attr("data-history"));
                        if (l === t && !o.hasClass(this.params.slideDuplicateClass)) {
                            var d = o.index();
                            this.slideTo(d, e, n)
                        }
                    } else this.slideTo(0, e, n)
                }
            },
            te = {
                onHashCange: function() {
                    var t = e.location.hash.replace("#", ""),
                    n = this.slides.eq(this.activeIndex).attr("data-hash");
                    if (t !== n) {
                        var r = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                        if (void 0 === r) return;
                        this.slideTo(r)
                    }
                },
                setHash: function() {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1);
                    else {
                        var n = this.slides.eq(this.activeIndex),
                        r = n.attr("data-hash") || n.attr("data-history");
                        e.location.hash = r || ""
                    }
                },
                init: function() {
                    if (! (!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var n = e.location.hash.replace("#", "");
                        if (n) for (var i = 0,
                        o = this.slides.length; i < o; i += 1) {
                            var l = this.slides.eq(i),
                            d = l.attr("data-hash") || l.attr("data-history");
                            if (d === n && !l.hasClass(this.params.slideDuplicateClass)) {
                                var h = l.index();
                                this.slideTo(h, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                        this.params.hashNavigation.watchState && r(t).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    this.params.hashNavigation.watchState && r(t).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            ie = {
                run: function() {
                    var e = this,
                    t = e.slides.eq(e.activeIndex),
                    n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    e.autoplay.timeout = c.nextTick(function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    },
                    n)
                },
                start: function() {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                },
                stop: function() {
                    return !! this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                },
                pause: function(e) {
                    this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                }
            },
            se = {
                setTranslate: function() {
                    for (var e = this.slides,
                    i = 0; i < e.length; i += 1) {
                        var t = this.slides.eq(i),
                        n = t[0].swiperSlideOffset,
                        r = -n;
                        this.params.virtualTranslate || (r -= this.translate);
                        var o = 0;
                        this.isHorizontal() || (o = r, r = 0);
                        var l = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        t.css({
                            opacity: l
                        }).transform("translate3d(" + r + "px, " + o + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                    n = t.slides,
                    r = t.$wrapperEl;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var o = !1;
                        n.transitionEnd(function() {
                            if (!o && t && !t.destroyed) {
                                o = !0,
                                t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                            }
                        })
                    }
                }
            },
            ne = {
                setTranslate: function() {
                    var e, t = this.$el,
                    n = this.$wrapperEl,
                    o = this.slides,
                    l = this.width,
                    d = this.height,
                    h = this.rtlTranslate,
                    c = this.size,
                    f = this.params.cubeEffect,
                    m = this.isHorizontal(),
                    y = this.virtual && this.params.virtual.enabled,
                    w = 0;
                    f.shadow && (m ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = r('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({
                        height: l + "px"
                    })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = r('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                    for (var i = 0; i < o.length; i += 1) {
                        var x = o.eq(i),
                        E = i;
                        y && (E = parseInt(x.attr("data-swiper-slide-index"), 10));
                        var T = 90 * E,
                        C = Math.floor(T / 360);
                        h && (T = -T, C = Math.floor( - T / 360));
                        var progress = Math.max(Math.min(x[0].progress, 1), -1),
                        S = 0,
                        M = 0,
                        k = 0;
                        E % 4 == 0 ? (S = 4 * -C * c, k = 0) : (E - 1) % 4 == 0 ? (S = 0, k = 4 * -C * c) : (E - 2) % 4 == 0 ? (S = c + 4 * C * c, k = c) : (E - 3) % 4 == 0 && (S = -c, k = 3 * c + 4 * c * C),
                        h && (S = -S),
                        m || (M = S, S = 0);
                        var P = "rotateX(" + (m ? 0 : -T) + "deg) rotateY(" + (m ? T: 0) + "deg) translate3d(" + S + "px, " + M + "px, " + k + "px)";
                        if (progress <= 1 && progress > -1 && (w = 90 * E + 90 * progress, h && (w = 90 * -E - 90 * progress)), x.transform(P), f.slideShadows) {
                            var O = m ? x.find(".swiper-slide-shadow-left") : x.find(".swiper-slide-shadow-top"),
                            A = m ? x.find(".swiper-slide-shadow-right") : x.find(".swiper-slide-shadow-bottom");
                            0 === O.length && (O = r('<div class="swiper-slide-shadow-' + (m ? "left": "top") + '"></div>'), x.append(O)),
                            0 === A.length && (A = r('<div class="swiper-slide-shadow-' + (m ? "right": "bottom") + '"></div>'), x.append(A)),
                            O.length && (O[0].style.opacity = Math.max( - progress, 0)),
                            A.length && (A[0].style.opacity = Math.max(progress, 0))
                        }
                    }
                    if (n.css({
                        "-webkit-transform-origin": "50% 50% -" + c / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + c / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + c / 2 + "px",
                        "transform-origin": "50% 50% -" + c / 2 + "px"
                    }), f.shadow) if (m) e.transform("translate3d(0px, " + (l / 2 + f.shadowOffset) + "px, " + -l / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.shadowScale + ")");
                    else {
                        var I = Math.abs(w) - 90 * Math.floor(Math.abs(w) / 90),
                        _ = 1.5 - (Math.sin(2 * I * Math.PI / 360) / 2 + Math.cos(2 * I * Math.PI / 360) / 2),
                        z = f.shadowScale,
                        L = f.shadowScale / _,
                        $ = f.shadowOffset;
                        e.transform("scale3d(" + z + ", 1, " + L + ") translate3d(0px, " + (d / 2 + $) + "px, " + -d / 2 / L + "px) rotateX(-90deg)")
                    }
                    var D = v.isSafari || v.isUiWebView ? -c / 2 : 0;
                    n.transform("translate3d(0px,0," + D + "px) rotateX(" + (this.isHorizontal() ? 0 : w) + "deg) rotateY(" + (this.isHorizontal() ? -w: 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this.$el,
                    n = this.slides;
                    n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            ae = {
                setTranslate: function() {
                    for (var e = this.slides,
                    t = this.rtlTranslate,
                    i = 0; i < e.length; i += 1) {
                        var n = e.eq(i),
                        progress = n[0].progress;
                        this.params.flipEffect.limitRotation && (progress = Math.max(Math.min(n[0].progress, 1), -1));
                        var o = n[0].swiperSlideOffset,
                        l = -180 * progress,
                        d = l,
                        h = 0,
                        c = -o,
                        f = 0;
                        if (this.isHorizontal() ? t && (d = -d) : (f = c, c = 0, h = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(progress)) + e.length, this.params.flipEffect.slideShadows) {
                            var v = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                            m = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                            0 === v.length && (v = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left": "top") + '"></div>'), n.append(v)),
                            0 === m.length && (m = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right": "bottom") + '"></div>'), n.append(m)),
                            v.length && (v[0].style.opacity = Math.max( - progress, 0)),
                            m.length && (m[0].style.opacity = Math.max(progress, 0))
                        }
                        n.transform("translate3d(" + c + "px, " + f + "px, 0px) rotateX(" + h + "deg) rotateY(" + d + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                    n = t.slides,
                    r = t.activeIndex,
                    o = t.$wrapperEl;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var l = !1;
                        n.eq(r).transitionEnd(function() {
                            if (!l && t && !t.destroyed) {
                                l = !0,
                                t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) o.trigger(e[i])
                            }
                        })
                    }
                }
            },
            re = {
                setTranslate: function() {
                    for (var e = this.width,
                    t = this.height,
                    n = this.slides,
                    o = this.$wrapperEl,
                    l = this.slidesSizesGrid,
                    d = this.params.coverflowEffect,
                    h = this.isHorizontal(), c = this.translate, v = h ? e / 2 - c: t / 2 - c, m = h ? d.rotate: -d.rotate, y = d.depth, i = 0, w = n.length; i < w; i += 1) {
                        var x = n.eq(i),
                        E = l[i],
                        T = x[0].swiperSlideOffset,
                        C = (v - T - E / 2) / E * d.modifier,
                        S = h ? m * C: 0,
                        M = h ? 0 : m * C,
                        k = -y * Math.abs(C),
                        P = h ? 0 : d.stretch * C,
                        O = h ? d.stretch * C: 0;
                        Math.abs(O) < .001 && (O = 0),
                        Math.abs(P) < .001 && (P = 0),
                        Math.abs(k) < .001 && (k = 0),
                        Math.abs(S) < .001 && (S = 0),
                        Math.abs(M) < .001 && (M = 0);
                        var A = "translate3d(" + O + "px," + P + "px," + k + "px)  rotateX(" + M + "deg) rotateY(" + S + "deg)";
                        if (x.transform(A), x[0].style.zIndex = 1 - Math.abs(Math.round(C)), d.slideShadows) {
                            var I = h ? x.find(".swiper-slide-shadow-left") : x.find(".swiper-slide-shadow-top"),
                            _ = h ? x.find(".swiper-slide-shadow-right") : x.find(".swiper-slide-shadow-bottom");
                            0 === I.length && (I = r('<div class="swiper-slide-shadow-' + (h ? "left": "top") + '"></div>'), x.append(I)),
                            0 === _.length && (_ = r('<div class="swiper-slide-shadow-' + (h ? "right": "bottom") + '"></div>'), x.append(_)),
                            I.length && (I[0].style.opacity = C > 0 ? C: 0),
                            _.length && (_[0].style.opacity = -C > 0 ? -C: 0)
                        }
                    }
                    if (f.pointerEvents || f.prefixedPointerEvents) {
                        var z = o[0].style;
                        z.perspectiveOrigin = v + "px 50%"
                    }
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            oe = {
                init: function() {
                    var e = this.params,
                    t = e.thumbs,
                    n = this.constructor;
                    t.swiper instanceof n ? (this.thumbs.swiper = t.swiper, c.extend(this.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), c.extend(this.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : c.isObject(t.swiper) && (this.thumbs.swiper = new n(c.extend({},
                    t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), this.thumbs.swiperCreated = !0),
                    this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
                    this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var e = this.thumbs.swiper;
                    if (e) {
                        var t = e.clickedIndex,
                        n = e.clickedSlide;
                        if (! (n && r(n).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                            var o;
                            if (o = e.params.loop ? parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                                var l = this.activeIndex;
                                this.slides.eq(l).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, l = this.activeIndex);
                                var d = this.slides.eq(l).prevAll('[data-swiper-slide-index="' + o + '"]').eq(0).index(),
                                h = this.slides.eq(l).nextAll('[data-swiper-slide-index="' + o + '"]').eq(0).index();
                                o = void 0 === d ? h: void 0 === h ? d: h - l < l - d ? h: d
                            }
                            this.slideTo(o)
                        }
                    }
                },
                update: function(e) {
                    var t = this.thumbs.swiper;
                    if (t) {
                        var n = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                        if (this.realIndex !== t.realIndex) {
                            var r, o = t.activeIndex;
                            if (t.params.loop) {
                                t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
                                var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                                r = void 0 === l ? d: void 0 === d ? l: d - o == o - l ? o: d - o < o - l ? d: l
                            } else r = this.realIndex;
                            t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : r > o && (r = r - n + 1), t.slideTo(r, e ? 0 : void 0))
                        }
                        var h = 1,
                        c = this.params.thumbs.slideThumbActiveClass;
                        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), t.slides.removeClass(c), t.params.loop) for (var i = 0; i < h; i += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + i) + '"]').addClass(c);
                        else for (var f = 0; f < h; f += 1) t.slides.eq(this.realIndex + f).addClass(c)
                    }
                }
            },
            le = [z, L, $, D, B, j, F, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    c.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: Y.enable.bind(this),
                            disable: Y.disable.bind(this),
                            handle: Y.handle.bind(this),
                            handleMouseEnter: Y.handleMouseEnter.bind(this),
                            handleMouseLeave: Y.handleMouseLeave.bind(this),
                            lastScrollTime: c.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function() {
                        this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            },
            {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    c.extend(this, {
                        navigation: {
                            init: V.init.bind(this),
                            update: V.update.bind(this),
                            destroy: V.destroy.bind(this),
                            onNextClick: V.onNextClick.bind(this),
                            onPrevClick: V.onPrevClick.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.navigation.init(),
                        this.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(e) {
                        var t, n = this.navigation,
                        o = n.$nextEl,
                        l = n.$prevEl; ! this.params.navigation.hideOnClick || r(e.target).is(l) || r(e.target).is(o) || (o ? t = o.hasClass(this.params.navigation.hiddenClass) : l && (t = l.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), o && o.toggleClass(this.params.navigation.hiddenClass), l && l.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e
                        },
                        formatFractionTotal: function(e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    c.extend(this, {
                        pagination: {
                            init: G.init.bind(this),
                            render: G.render.bind(this),
                            update: G.update.bind(this),
                            destroy: G.destroy.bind(this),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function() {
                        this.pagination.init(),
                        this.pagination.render(),
                        this.pagination.update()
                    },
                    activeIndexChange: function() {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(e) {
                        if (this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !r(e.target).hasClass(this.params.pagination.bulletClass)) {
                            var t = this.pagination.$el.hasClass(this.params.pagination.hiddenClass); ! 0 === t ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                            this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                        }
                    }
                }
            },
            {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function() {
                    c.extend(this, {
                        scrollbar: {
                            init: X.init.bind(this),
                            destroy: X.destroy.bind(this),
                            updateSize: X.updateSize.bind(this),
                            setTranslate: X.setTranslate.bind(this),
                            setTransition: X.setTransition.bind(this),
                            enableDraggable: X.enableDraggable.bind(this),
                            disableDraggable: X.disableDraggable.bind(this),
                            setDragPosition: X.setDragPosition.bind(this),
                            onDragStart: X.onDragStart.bind(this),
                            onDragMove: X.onDragMove.bind(this),
                            onDragEnd: X.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        this.scrollbar.init(),
                        this.scrollbar.updateSize(),
                        this.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            },
            {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        parallax: {
                            setTransform: W.setTransform.bind(this),
                            setTranslate: W.setTranslate.bind(this),
                            setTransition: W.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    init: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e)
                    }
                }
            },
            {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) {
                        t[n] = U[n].bind(e)
                    }),
                    c.extend(e, {
                        zoom: t
                    });
                    var n = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function() {
                            return n
                        },
                        set: function(t) {
                            if (n !== t) {
                                var r = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                o = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, r, o)
                            }
                            n = t
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    }
                }
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    c.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: K.load.bind(this),
                            loadInSlide: K.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function() {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function() {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    }
                }
            },
            Z, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var e = this;
                    c.extend(e, {
                        a11y: {
                            liveRegion: r('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }),
                    Object.keys(J).forEach(function(t) {
                        e.a11y[t] = J[t].bind(e)
                    })
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            },
            {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    c.extend(this, {
                        history: {
                            init: ee.init.bind(this),
                            setHistory: ee.setHistory.bind(this),
                            setHistoryPopState: ee.setHistoryPopState.bind(this),
                            scrollToSlide: ee.scrollToSlide.bind(this),
                            destroy: ee.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function() {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            },
            {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: te.init.bind(this),
                            destroy: te.destroy.bind(this),
                            setHash: te.setHash.bind(this),
                            onHashCange: te.onHashCange.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    }
                }
            },
            {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    var e = this;
                    c.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: ie.run.bind(e),
                            start: ie.start.bind(e),
                            stop: ie.stop.bind(e),
                            pause: ie.pause.bind(e),
                            onTransitionEnd: function(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && this.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop()
                    }
                }
            },
            {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        fadeEffect: {
                            setTranslate: se.setTranslate.bind(this),
                            setTransition: se.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e),
                            c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            },
            {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    c.extend(this, {
                        cubeEffect: {
                            setTranslate: ne.setTranslate.bind(this),
                            setTransition: ne.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"),
                            this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e),
                            c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            },
            {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        flipEffect: {
                            setTranslate: ae.setTranslate.bind(this),
                            setTransition: ae.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"),
                            this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e),
                            c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            },
            {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        coverflowEffect: {
                            setTranslate: re.setTranslate.bind(this),
                            setTransition: re.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            },
            {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function() {
                    c.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: oe.init.bind(this),
                            update: oe.update.bind(this),
                            onThumbClick: oe.onThumbClick.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this.params,
                        t = e.thumbs;
                        t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition: function(e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e)
                    },
                    beforeDestroy: function() {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy()
                    }
                }
            }];
            return void 0 === _.use && (_.use = _.Class.use, _.installModule = _.Class.installModule),
            _.use(le),
            _
        } ()
    },
    228 : function(e, t, n) {
        "use strict";
        var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return ! 1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return ! 1;
                for (var t = {},
                i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return ! 1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    n[e] = e
                }),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({},
                n)).join("")
            } catch(e) {
                return ! 1
            }
        } () ? Object.assign: function(e, source) {
            for (var t, n, d = function(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            } (e), s = 1; s < arguments.length; s++) {
                for (var h in t = Object(arguments[s])) o.call(t, h) && (d[h] = t[h]);
                if (r) {
                    n = r(t);
                    for (var i = 0; i < n.length; i++) l.call(t, n[i]) && (d[n[i]] = t[n[i]])
                }
            }
            return d
        }
    },
    32 : function(e, t, n) {
        var r; !
        function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function o() {
                for (var e = [], i = 0; i < arguments.length; i++) {
                    var t = arguments[i];
                    if (t) {
                        var r = typeof t;
                        if ("string" === r || "number" === r) e.push(t);
                        else if (Array.isArray(t) && t.length) {
                            var l = o.apply(null, t);
                            l && e.push(l)
                        } else if ("object" === r) for (var d in t) n.call(t, d) && t[d] && e.push(d)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.
        default = o, e.exports = o) : void 0 === (r = function() {
                return o
            }.apply(t, [])) || (e.exports = r)
        } ()
    },
    78 : function(e, t, n) {
        "use strict";
        var r = n(15);
        t.__esModule = !0,
        t.inherit = function(e, t) {
            var n = d.reduce(function(t, n) {
                return e.data[n] && (t[h[n] || n] = e.data[n]),
                t
            },
            {});
            t && (n.on = n.on || {},
            (0, o.
        default)(n.on, e.data.on));
            return n
        },
        t.emit = function(e, t) {
            for (var n = arguments.length,
            r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            var l = e.listeners[t];
            l && (Array.isArray(l) ? l.forEach(function(e) {
                e.apply(void 0, r)
            }) : l.apply(void 0, r))
        },
        t.mount = function(e, data) {
            var t = new l.
        default({
                el:
                document.createElement("div"),
                props: e.props,
                render: function(t) {
                    return t(e, (0, o.
                default)({
                        props:
                        this.$props
                    },
                    data))
                }
            });
            return document.body.appendChild(t.$el),
            t
        };
        var o = r(n(56)),
        l = r(n(0)),
        d = ["ref", "style", "class", "attrs", "nativeOn", "directives", "staticClass", "staticStyle"],
        h = {
            nativeOn: "on"
        }
    },
    84 : function(e, t, n) {
        "use strict";
        function r() {
            return (r = Object.assign ||
            function(a) {
                for (var b, e = 1; e < arguments.length; e++) for (var t in b = arguments[e]) Object.prototype.hasOwnProperty.call(b, t) && (a[t] = b[t]);
                return a
            }).apply(this, arguments)
        }
        var o = ["attrs", "props", "domProps"],
        l = ["class", "style", "directives"],
        d = ["on", "nativeOn"],
        h = function(a, b) {
            return function() {
                a && a.apply(this, arguments),
                b && b.apply(this, arguments)
            }
        };
        e.exports = function(a) {
            return a.reduce(function(e, a) {
                for (var b in a) if (e[b]) if ( - 1 !== o.indexOf(b)) e[b] = r({},
                e[b], a[b]);
                else if ( - 1 !== l.indexOf(b)) {
                    var t = e[b] instanceof Array ? e[b] : [e[b]],
                    n = a[b] instanceof Array ? a[b] : [a[b]];
                    e[b] = t.concat(n)
                } else if ( - 1 !== d.indexOf(b)) for (var c in a[b]) if (e[b][c]) {
                    var g = e[b][c] instanceof Array ? e[b][c] : [e[b][c]],
                    f = a[b][c] instanceof Array ? a[b][c] : [a[b][c]];
                    e[b][c] = g.concat(f)
                } else e[b][c] = a[b][c];
                else if ("hook" == b) for (var i in a[b]) e[b][i] = e[b][i] ? h(e[b][i], a[b][i]) : a[b][i];
                else e[b] = a[b];
                else e[b] = a[b];
                return e
            },
            {})
        }
    },
    87 : function(module, exports, __webpack_require__) { (function(global) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; !
            function(e, t) {
                module.exports = t(e)
            } ("undefined" != typeof self ? self: "undefined" != typeof window ? window: void 0 !== global ? global: this,
            function(global) {
                "use strict";
                global = global || {};
                var _Base64 = global.Base64,
                version = "2.5.1",
                buffer;
                if (module.exports) try {
                    buffer = eval("require('buffer').Buffer")
                } catch(e) {
                    buffer = void 0
                }
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                b64tab = function(e) {
                    for (var t = {},
                    i = 0,
                    n = e.length; i < n; i++) t[e.charAt(i)] = i;
                    return t
                } (b64chars),
                fromCharCode = String.fromCharCode,
                cb_utob = function(e) {
                    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e: t < 2048 ? fromCharCode(192 | t >>> 6) + fromCharCode(128 | 63 & t) : fromCharCode(224 | t >>> 12 & 15) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return fromCharCode(240 | t >>> 18 & 7) + fromCharCode(128 | t >>> 12 & 63) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t)
                },
                re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                utob = function(u) {
                    return u.replace(re_utob, cb_utob)
                },
                cb_encode = function(e) {
                    var t = [0, 2, 1][e.length % 3],
                    n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                    return [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), t >= 2 ? "=": b64chars.charAt(n >>> 6 & 63), t >= 1 ? "=": b64chars.charAt(63 & n)].join("")
                },
                btoa = global.btoa ?
                function(b) {
                    return global.btoa(b)
                }: function(b) {
                    return b.replace(/[\s\S]{1,3}/g, cb_encode)
                },
                _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ?
                function(u) {
                    return (u.constructor === buffer.constructor ? u: buffer.from(u)).toString("base64")
                }: function(u) {
                    return (u.constructor === buffer.constructor ? u: new buffer(u)).toString("base64")
                }: function(u) {
                    return btoa(utob(u))
                },
                encode = function(u, e) {
                    return e ? _encode(String(u)).replace(/[+\/]/g,
                    function(e) {
                        return "+" == e ? "-": "_"
                    }).replace(/=/g, "") : _encode(String(u))
                },
                encodeURI = function(u) {
                    return encode(u, !0)
                },
                re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
                cb_btou = function(e) {
                    switch (e.length) {
                    case 4:
                        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                        return fromCharCode(55296 + (t >>> 10)) + fromCharCode(56320 + (1023 & t));
                    case 3:
                        return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                    }
                },
                btou = function(b) {
                    return b.replace(re_btou, cb_btou)
                },
                cb_decode = function(e) {
                    var t = e.length,
                    n = t % 4,
                    r = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0),
                    o = [fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r)];
                    return o.length -= [0, 0, 2, 1][n],
                    o.join("")
                },
                _atob = global.atob ?
                function(a) {
                    return global.atob(a)
                }: function(a) {
                    return a.replace(/\S{1,4}/g, cb_decode)
                },
                atob = function(a) {
                    return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ""))
                },
                _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ?
                function(a) {
                    return (a.constructor === buffer.constructor ? a: buffer.from(a, "base64")).toString()
                }: function(a) {
                    return (a.constructor === buffer.constructor ? a: new buffer(a, "base64")).toString()
                }: function(a) {
                    return btou(_atob(a))
                },
                decode = function(a) {
                    return _decode(String(a).replace(/[-_]/g,
                    function(e) {
                        return "-" == e ? "+": "/"
                    }).replace(/[^A-Za-z0-9\+\/]/g, ""))
                },
                noConflict = function() {
                    var e = global.Base64;
                    return global.Base64 = _Base64,
                    e
                };
                if (global.Base64 = {
                    VERSION: version,
                    atob: atob,
                    btoa: btoa,
                    fromBase64: decode,
                    toBase64: encode,
                    utob: utob,
                    encode: encode,
                    encodeURI: encodeURI,
                    btou: btou,
                    decode: decode,
                    noConflict: noConflict,
                    __buffer__: buffer
                },
                "function" == typeof Object.defineProperty) {
                    var noEnum = function(e) {
                        return {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    };
                    global.Base64.extendString = function() {
                        Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                            return decode(this)
                        })),
                        Object.defineProperty(String.prototype, "toBase64", noEnum(function(e) {
                            return encode(this, e)
                        })),
                        Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                            return encode(this, !0)
                        }))
                    }
                }
                return global.Meteor && (Base64 = global.Base64),
                module.exports ? module.exports.Base64 = global.Base64: (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return global.Base64
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),
                {
                    Base64: global.Base64
                }
            })
        }).call(this, __webpack_require__(31))
    },
    88 : function(e, t, n) {
        var r;
        r = function() {
            return function(e) {
                var t = {};
                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n),
                    o.l = !0,
                    o.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                },
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                },
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o,
                    function(t) {
                        return e[t]
                    }.bind(null, o));
                    return r
                },
                n.n = function(e) {
                    var t = e && e.__esModule ?
                    function() {
                        return e.
                    default
                    }:
                    function() {
                        return e
                    };
                    return n.d(t, "a", t),
                    t
                },
                n.o = function(object, e) {
                    return Object.prototype.hasOwnProperty.call(object, e)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(e, t, n) {
                "use strict";
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                },
                o = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                } (),
                l = c(n(1)),
                d = c(n(3)),
                h = c(n(4));
                function c(e) {
                    return e && e.__esModule ? e: {
                    default:
                        e
                    }
                }
                var f = function(e) {
                    function t(e, n) { !
                        function(e, t) {
                            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        } (this, t);
                        var r = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return ! t || "object" != typeof t && "function" != typeof t ? e: t
                        } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return r.resolveOptions(n),
                        r.listenClick(e),
                        r
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    } (t, d.
                default),
                    o(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action: this.defaultAction,
                            this.target = "function" == typeof e.target ? e.target: this.defaultTarget,
                            this.text = "function" == typeof e.text ? e.text: this.defaultText,
                            this.container = "object" === r(e.container) ? e.container: document.body
                        }
                    },
                    {
                        key: "listenClick",
                        value: function(e) {
                            var t = this;
                            this.listener = (0, h.
                        default)(e, "click",
                            function(e) {
                                return t.onClick(e)
                            })
                        }
                    },
                    {
                        key: "onClick",
                        value: function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null),
                            this.clipboardAction = new l.
                        default({
                                action:
                                this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            })
                        }
                    },
                    {
                        key: "defaultAction",
                        value: function(e) {
                            return v("action", e)
                        }
                    },
                    {
                        key: "defaultTarget",
                        value: function(e) {
                            var t = v("target", e);
                            if (t) return document.querySelector(t)
                        }
                    },
                    {
                        key: "defaultText",
                        value: function(e) {
                            return v("text", e)
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            t = "string" == typeof e ? [e] : e,
                            n = !!document.queryCommandSupported;
                            return t.forEach(function(e) {
                                n = n && !!document.queryCommandSupported(e)
                            }),
                            n
                        }
                    }]),
                    t
                } ();
                function v(e, element) {
                    var t = "data-clipboard-" + e;
                    if (element.hasAttribute(t)) return element.getAttribute(t)
                }
                e.exports = f
            },
            function(e, t, n) {
                "use strict";
                var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                },
                l = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                } (),
                d = n(2),
                h = (r = d) && r.__esModule ? r: {
                default:
                    r
                };
                var c = function() {
                    function e(t) { !
                        function(e, t) {
                            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        } (this, e),
                        this.resolveOptions(t),
                        this.initSelection()
                    }
                    return l(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action,
                            this.container = e.container,
                            this.emitter = e.emitter,
                            this.target = e.target,
                            this.text = e.text,
                            this.trigger = e.trigger,
                            this.selectedText = ""
                        }
                    },
                    {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    },
                    {
                        key: "selectFake",
                        value: function() {
                            var e = this,
                            t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                            this.fakeHandlerCallback = function() {
                                return e.removeFake()
                            },
                            this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                            this.fakeElem = document.createElement("textarea"),
                            this.fakeElem.style.fontSize = "12pt",
                            this.fakeElem.style.border = "0",
                            this.fakeElem.style.padding = "0",
                            this.fakeElem.style.margin = "0",
                            this.fakeElem.style.position = "absolute",
                            this.fakeElem.style[t ? "right": "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px",
                            this.fakeElem.setAttribute("readonly", ""),
                            this.fakeElem.value = this.text,
                            this.container.appendChild(this.fakeElem),
                            this.selectedText = (0, h.
                        default)(this.fakeElem),
                            this.copyText()
                        }
                    },
                    {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null),
                            this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    },
                    {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, h.
                        default)(this.target),
                            this.copyText()
                        }
                    },
                    {
                        key: "copyText",
                        value: function() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch(t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    },
                    {
                        key: "handleResult",
                        value: function(e) {
                            this.emitter.emit(e ? "success": "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    },
                    {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(),
                            window.getSelection().removeAllRanges()
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    },
                    {
                        key: "action",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    },
                    {
                        key: "target",
                        set: function(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined": o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]),
                    e
                } ();
                e.exports = c
            },
            function(e, t) {
                e.exports = function(element) {
                    var e;
                    if ("SELECT" === element.nodeName) element.focus(),
                    e = element.value;
                    else if ("INPUT" === element.nodeName || "TEXTAREA" === element.nodeName) {
                        var t = element.hasAttribute("readonly");
                        t || element.setAttribute("readonly", ""),
                        element.select(),
                        element.setSelectionRange(0, element.value.length),
                        t || element.removeAttribute("readonly"),
                        e = element.value
                    } else {
                        element.hasAttribute("contenteditable") && element.focus();
                        var n = window.getSelection(),
                        r = document.createRange();
                        r.selectNodeContents(element),
                        n.removeAllRanges(),
                        n.addRange(r),
                        e = n.toString()
                    }
                    return e
                }
            },
            function(e, t) {
                function n() {}
                n.prototype = {
                    on: function(e, t, n) {
                        var r = this.e || (this.e = {});
                        return (r[e] || (r[e] = [])).push({
                            fn: t,
                            ctx: n
                        }),
                        this
                    },
                    once: function(e, t, n) {
                        var r = this;
                        function o() {
                            r.off(e, o),
                            t.apply(n, arguments)
                        }
                        return o._ = t,
                        this.on(e, o, n)
                    },
                    emit: function(e) {
                        for (var data = [].slice.call(arguments, 1), t = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, n = t.length; i < n; i++) t[i].fn.apply(t[i].ctx, data);
                        return this
                    },
                    off: function(e, t) {
                        var n = this.e || (this.e = {}),
                        r = n[e],
                        o = [];
                        if (r && t) for (var i = 0,
                        l = r.length; i < l; i++) r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                        return o.length ? n[e] = o: delete n[e],
                        this
                    }
                },
                e.exports = n
            },
            function(e, t, n) {
                var r = n(5),
                o = n(6);
                e.exports = function(e, t, n) {
                    if (!e && !t && !n) throw new Error("Missing required arguments");
                    if (!r.string(t)) throw new TypeError("Second argument must be a String");
                    if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                    if (r.node(e)) return function(e, t, n) {
                        return e.addEventListener(t, n),
                        {
                            destroy: function() {
                                e.removeEventListener(t, n)
                            }
                        }
                    } (e, t, n);
                    if (r.nodeList(e)) return function(e, t, n) {
                        return Array.prototype.forEach.call(e,
                        function(e) {
                            e.addEventListener(t, n)
                        }),
                        {
                            destroy: function() {
                                Array.prototype.forEach.call(e,
                                function(e) {
                                    e.removeEventListener(t, n)
                                })
                            }
                        }
                    } (e, t, n);
                    if (r.string(e)) return function(e, t, n) {
                        return o(document.body, e, t, n)
                    } (e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            },
            function(e, t) {
                t.node = function(e) {
                    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                },
                t.nodeList = function(e) {
                    var n = Object.prototype.toString.call(e);
                    return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
                },
                t.string = function(e) {
                    return "string" == typeof e || e instanceof String
                },
                t.fn = function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            },
            function(e, t, n) {
                var r = n(7);
                function o(element, e, t, n, o) {
                    var l = function(element, e, t, n) {
                        return function(t) {
                            t.delegateTarget = r(t.target, e),
                            t.delegateTarget && n.call(element, t)
                        }
                    }.apply(this, arguments);
                    return element.addEventListener(t, l, o),
                    {
                        destroy: function() {
                            element.removeEventListener(t, l, o)
                        }
                    }
                }
                e.exports = function(e, t, n, r, l) {
                    return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e,
                    function(element) {
                        return o(element, t, n, r, l)
                    }))
                }
            },
            function(e, t) {
                var n = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var r = Element.prototype;
                    r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
                }
                e.exports = function(element, e) {
                    for (; element && element.nodeType !== n;) {
                        if ("function" == typeof element.matches && element.matches(e)) return element;
                        element = element.parentNode
                    }
                }
            }])
        },
        e.exports = r()
    }
}]);