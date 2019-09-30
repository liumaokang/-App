(window.webpackJsonp = window.webpackJsonp || []).push([[33], {
    234 : function(t, e, r) {},
    235 : function(t, e, r) {},
    236 : function(t, e, r) {
        "use strict";
        r.d(e, "a",
        function() {
            return n
        });
        r(33),
        r(42);
        var n = function(t, e) {
            var r, n, o = ["", (n = navigator.userAgent, "15C202" === n.substring(n.length - 6, n.length) || "15E216" === n.substring(n.length - 6, n.length) || n.substring(n.length - 6, n.length).includes("14G60") || n.includes("OPiOS") && device.iphone() ? 0 : n.includes("Mb2345Browser") && device.iphone() && (n.includes("14A456") || n.includes("15C114")) ? 0 : n.includes("Quark") && device.iphone() && (n.includes("14A456") || n.includes("14F89")) ? 0 : n.includes("UCBrowser") && device.iphone() && n.includes("15E216") ? 0 : n.includes("searchBrowser") && device.iphone() && n.includes("12B466") ? 0 : n.includes("FxiOS") && device.iphone() && (n.includes("15C202") || n.includes("15D100") || n.includes("16A5288q")) ? 0 : n.includes("baiduboxapp") ? 0 : n.includes("baidubrowser") ? 0 : n.includes("MXiOS") && device.iphone() ? n.includes("MXiOS") && device.iphone() && (n.includes("15C202") || n.includes("14G60")) ? 1 : 0 : n.includes("MicroMessenger") ? 1 : n.includes("iPhone 84") && n.includes("MQQBrowser") ? 2 : n.includes("UCBrowser") || n.includes("MQQBrowser") ? 2 : n.includes("SogouMobileBrowser") ? 1 : n.includes("QihooBrowser") ? 2 : n.includes("iPhone") && n.includes("Safari") ? 2 : n.toUpperCase().includes("HUAWEI") && n.includes("Safari") ? 3 : 1)],
            c = o[1]; (r = device.mobile() || device.ipad() ? 0 === c ? "/mt/browser/" + t + "-" + e: 2 === c ? "mqqwpa://im/chat?chat_type=wpa&uin=" + t + "&version=1&src_type=web&web_src=yuzhua.com": 3 === c ? "mqq://im/chat?chat_type=wpa&uin=" + t + "&version=1&src_type=web": "http://wpa.qq.com/msgrd?v=3&uin=" + t + "&site=qq&menu=yes": "http://wpa.qq.com/msgrd?v=3&uin=" + t + "&site=qq&menu=yes") && window.open(r, "_blank")
        }
    },
    237 : function(t, e, r) {
        "use strict";
        function n(t, i) {
            return function(t) {
                if (Array.isArray(t)) return t
            } (t) ||
            function(t, i) {
                var e = [],
                r = !0,
                n = !1,
                o = void 0;
                try {
                    for (var c, d = t[Symbol.iterator](); ! (r = (c = d.next()).done) && (e.push(c.value), !i || e.length !== i); r = !0);
                } catch(t) {
                    n = !0,
                    o = t
                } finally {
                    try {
                        r || null == d.
                        return || d.
                        return ()
                    } finally {
                        if (n) throw o
                    }
                }
                return e
            } (t, i) ||
            function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            } ()
        }
        r.d(e, "a",
        function() {
            return n
        })
    },
    238 : function(t, e, r) {},
    240 : function(t, e, r) {
        "use strict";
        var n = r(234);
        r.n(n).a
    },
    241 : function(t, e, r) {
        t.exports = r.p + "img/675ee31.png"
    },
    242 : function(t, e, r) {
        "use strict";
        var n = r(235);
        r.n(n).a
    },
    243 : function(t, e, r) {
        "use strict";
        r.d(e, "c",
        function() {
            return n
        }),
        r.d(e, "a",
        function() {
            return o
        }),
        r.d(e, "h",
        function() {
            return c
        }),
        r.d(e, "d",
        function() {
            return d
        }),
        r.d(e, "i",
        function() {
            return l
        }),
        r.d(e, "e",
        function() {
            return v
        }),
        r.d(e, "j",
        function() {
            return f
        }),
        r.d(e, "b",
        function() {
            return m
        }),
        r.d(e, "f",
        function() {
            return h
        }),
        r.d(e, "g",
        function() {
            return _
        });
        r(127);
        var n = function(t) {
            return /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(t)
        },
        o = function(t) {
            return /^[0-9]{4,6}$/.test(t)
        },
        c = function(t) {
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/.test(t)
        },
        d = function(t) {
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/.test(t)
        },
        l = function(t) {
            return /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(t)
        },
        v = function(t) {
            return /^[1-9][0-9]{4,10}$/.test(t)
        },
        f = function(t) {
            return /^[-_a-zA-Z0-9\u4e00-\u9fa5]{4,30}$/.test(t)
        },
        m = function(t) {
            return /^[a-zA-Z]{1}[-_a-zA-Z0-9]{7,19}$/.test(t)
        },
        h = function(t) {
            return /^[a-zA-Z0-9]+$/.test(t)
        },
        _ = function(t) {
            return new RegExp("^(((ht|f)tp(s?))://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$").test(t)
        }
    },
    244 : function(t, e, r) {
        "use strict";
        var n = r(236),
        o = {
            props: {
                serviceInfo: [Object, Array]
            },
            data: function() {
                return {
                    winScroll: 0,
                    winHeight: 0
                }
            },
            mounted: function() { ! this.winHeight && (this.winHeight = window.screen.height),
                window.addEventListener("scroll", this.windowScroll)
            },
            beforeRouteLeave: function(t, e, r) {
                window.removeEventListener("scroll", this.windowScroll),
                r()
            },
            destroyed: function() {
                window.removeEventListener("scroll", this.windowScroll)
            },
            activated: function() {
                window.removeEventListener("scroll", this.windowScroll)
            },
            deactivated: function() {
                window.removeEventListener("scroll", this.windowScroll)
            },
            methods: {
                wakeMobileQQ: n.a,
                goTop: function() {
                    this.winScroll > 0 && (window.requestAnimationFrame(this.goTop), window.scrollTo(0, this.winScroll - this.winScroll / 5))
                },
                windowScroll: function() {
                    this.winScroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                }
            }
        },
        c = (r(242), r(12)),
        component = Object(c.a)(o,
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("aside", [n("div", {
                attrs: {
                    "data-service": ""
                },
                on: {
                    click: function(e) {
                        return t.wakeMobileQQ(t.serviceInfo.qq, t.serviceInfo.phone)
                    }
                }
            },
            [n("img", {
                attrs: {
                    "data-icon": "",
                    src: r(241),
                    alt: "客服",
                    title: "客服"
                }
            }), n("p", {
                attrs: {
                    "data-label": ""
                }
            },
            [t._v("客服")])]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.winScroll > t.winHeight,
                    expression: "winScroll>winHeight"
                }],
                attrs: {
                    "data-go-top": ""
                },
                on: {
                    click: t.goTop
                }
            })])
        },
        [], !1, null, "5c114beb", null);
        e.a = component.exports
    },
    245 : function(t, e, r) {
        "use strict";
        r(41);
        var n = r(5),
        o = {
            props: {
                toastInfo: {
                default:
                    ""
                }
            },
            data: function() {
                return {
                    timer: 0,
                    duration: 2e3,
                    setTimer: null,
                    showToast: !1
                }
            },
            methods: {
                clearRecord: function() {
                    this.timer && (this.timer = 0),
                    this.showToast && (this.showToast = !1),
                    this.setTimer && clearInterval(this.setTimer)
                }
            },
            watch: {
                showToast: function(t) {
                    var e = this;
                    t && (this.setTimer = setInterval(function() {
                        e.timer++
                    },
                    100))
                },
                timer: function(t) {
                    t >= this.duration && (this.showToast = !1, clearInterval(this.setTimer), this.timer = 0)
                },
                toastInfo: function() {
                    var t = Object(n.a)(regeneratorRuntime.mark(function t(e) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.clearRecord();
                            case 2:
                                this.duration = (e && this.toastInfo.duration ? this.toastInfo.duration: 2e3) / 100,
                                this.showToast = !!e;
                            case 4:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                } ()
            }
        },
        c = (r(240), r(12)),
        component = Object(c.a)(o,
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return this.showToast ? e("div", {
                attrs: {
                    "data-toast": "",
                    "data-table": ""
                }
            },
            [e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [this._v(this._s(this.toastInfo.msg))])]) : this._e()
        },
        [], !1, null, "813b86ca", null);
        e.a = component.exports
    },
    246 : function(t, e, r) {
        "use strict";
        var n = r(238);
        r.n(n).a
    },
    251 : function(t, e, r) {
        "use strict";
        r(246);
        var n = r(12),
        component = Object(n.a)({},
        function() {
            this.$createElement;
            this._self._c;
            return this._m(0)
        },
        [function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                attrs: {
                    "data-ibottom": "",
                    "data-table": ""
                }
            },
            [e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [this._v("已到最底部啦")])])
        }], !1, null, "5a39d0f1", null);
        e.a = component.exports
    },
    282 : function(t, e, r) {},
    352 : function(t, e, r) {
        t.exports = r.p + "img/7c6139e.png"
    },
    353 : function(t, e, r) {
        "use strict";
        var n = r(282);
        r.n(n).a
    },
    424 : function(t, e, r) {
        "use strict";
        r.r(e);
        r(18),
        r(43),
        r(81),
        r(13),
        r(82);
        var n = r(237),
        o = (r(41), r(5)),
        c = r(251),
        d = r(245),
        l = r(244),
        v = r(243),
        f = {
            asyncData: function() {
                var t = Object(o.a)(regeneratorRuntime.mark(function t(e) {
                    var r, o, c, d, l, v, f, m;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = e.$axios,
                            o = e.error,
                            c = e.query,
                            t.next = 3,
                            Promise.all([r.getTransferInfo(), r.getServiceInfo()]);
                        case 3:
                            if (d = t.sent, l = Object(n.a)(d, 2), v = l[0], f = l[1], 1 === Number(v.status) && 1 === Number(f.status)) {
                                t.next = 10;
                                break
                            }
                            return o({
                                statusCode: 500
                            }),
                            t.abrupt("return", !1);
                        case 10:
                            return f = f.data,
                            c.accountType && "miniprogram" === c.accountType ? 1 : 0,
                            m = {
                                gzh: [{
                                    title: "同一主体账号迁移",
                                    describe: "两个公众号的主体信息完全一致",
                                    price: v.gzh_case[0].real_price,
                                    docsList: [{
                                        name: "全程代办服务"
                                    },
                                    {
                                        name: "《微信公众号迁移申请函》"
                                    },
                                    {
                                        name: "《公函公证书》",
                                        noNeed: 1
                                    },
                                    {
                                        name: "《主体注销证明见证书》",
                                        noNeed: 1
                                    }]
                                },
                                {
                                    title: "不同主体账号迁移",
                                    describe: "两个公众号的主体信息为两个独立的认证主体",
                                    price: v.gzh_case[1].real_price,
                                    docsList: [{
                                        name: "全程代办服务"
                                    },
                                    {
                                        name: "《微信公众号迁移申请函》"
                                    },
                                    {
                                        name: "《公函公证书》"
                                    },
                                    {
                                        name: "《主体注销证明见证书》",
                                        noNeed: 1
                                    }]
                                },
                                {
                                    title: "企业注销账号迁移",
                                    describe: "公众号认证的企业主体已注销",
                                    price: v.gzh_case[2].real_price,
                                    docsList: [{
                                        name: "全程代办服务"
                                    },
                                    {
                                        name: "《微信公众号迁移申请函》"
                                    },
                                    {
                                        name: "《公函公证书》"
                                    },
                                    {
                                        name: "《主体注销证明见证书》"
                                    }]
                                }],
                                xcx: [{
                                    title: "不同主体账号迁移",
                                    describe: "两个小程序的主体信息为两个独立的认证主体",
                                    price: v.xcx_case[1].real_price,
                                    docsList: [{
                                        name: "全程代办服务"
                                    },
                                    {
                                        name: "《微信小程序迁移申请函》"
                                    },
                                    {
                                        name: "《公函公证书》"
                                    },
                                    {
                                        name: "《主体注销证明见证书》",
                                        noNeed: 1
                                    }]
                                },
                                {
                                    title: "企业注销账号迁移",
                                    describe: "小程序认证的企业主体已注销",
                                    price: v.xcx_case[2].real_price,
                                    docsList: [{
                                        name: "全程代办服务"
                                    },
                                    {
                                        name: "《微信小程序迁移申请函》"
                                    },
                                    {
                                        name: "《公函公证书》"
                                    },
                                    {
                                        name: "《主体注销证明见证书》"
                                    }]
                                }]
                            },
                            t.abrupt("return", {
                                transferInfo: v,
                                projectList: m,
                                serviceInfo: f,
                                tabIndex: c.type || 0
                            });
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    },
                    t)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            } (),
            data: function() {
                return {
                    timer: null,
                    showLayer: 0,
                    name: "",
                    mobile: "",
                    code: "",
                    toastInfo: "",
                    isWaiting: 0,
                    verifyCodeTitle: "获取验证码",
                    lastTime: "",
                    preHandler: function(t) {
                        return t.preventDefault()
                    },
                    iSwiperOption: {
                        loop: !0,
                        centeredSlides: !0,
                        loopedSlides: 3,
                        pagination: {
                            el: ".projects-pagination",
                            clickable: !0
                        }
                    }
                }
            },
            head: function() {
                return {
                    title: "粉丝迁移-鱼爪新媒交易"
                }
            },
            components: {
                ibottom: c.a,
                service: l.a,
                toast: d.a
            },
            watch: {
                showLayer: function(t) {
                    document.body.style.overflow = t ? "hidden": "auto"
                }
            },
            mounted: function() {
                this.lastTime = $.jStorage.get("transferSmsSendTime"),
                this.lastTime && this.updateVCTitle(this.lastTime)
            },
            beforeRouteLeave: function(t, e, r) {
                "hidden" === document.body.style.overflow && (document.body.style.overflow = "auto"),
                r()
            },
            methods: {
                openImUrl: function() {
                    $.jStorage.get("visitTime") && $.jStorage.deleteKey("visitTime"),
                    window.location.href = "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1"
                },
                updateVCTitle: function(t) {
                    var e = this;
                    this.timer && clearTimeout(this.timer);
                    var r = (new Date).getTime(),
                    n = t + 12e4;
                    if (r > n) this.verifyCodeTitle = "获取验证码",
                    1 === this.isWaiting && (this.isWaiting = 0);
                    else {
                        0 === this.isWaiting && (this.isWaiting = 1);
                        var o = Math.round((n - r) / 1e3);
                        this.verifyCodeTitle = o + "秒后重发",
                        this.timer = setTimeout(function() {
                            e.updateVCTitle(t)
                        },
                        1e3)
                    }
                },
                formatInput: function(t, e) {
                    var r = t.target.value.replace(/\s+/g, "");
                    "code" === e && (r = String(r.replace(/[^\d]/g, "").substr(0, 6))),
                    "mobile" === e && (r = String(r.replace(/[^\d]/g, "").substr(0, 11))),
                    "name" === e && (r = String(r.replace(/[^.a-zA-Z0-9\u4e00-\u9fa5]/g, "").substr(0, 30))),
                    t.target.value = r,
                    this[e] = r
                },
                checkForm: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t(e) {
                        var r, n = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                for (r in this.$refs) this.$refs.hasOwnProperty(r) && this.$refs[r] && this.$refs[r].blur();
                                setTimeout(function() {
                                    e ? n.releaseTransfer() : n.getVerifyCode()
                                },
                                2 === e ? 96 : 360);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                } (),
                getVerifyCode: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var code, e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.isWaiting) {
                                    t.next = 21;
                                    break
                                }
                                if (this.mobile) {
                                    t.next = 6;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: "手机号不能为空！请输入手机号！"
                                },
                                t.abrupt("return", !1);
                            case 6:
                                if (Object(v.c)(this.mobile)) {
                                    t.next = 9;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: "手机号码格式不正确！请重试！"
                                },
                                t.abrupt("return", !1);
                            case 9:
                                return this.$nuxt.$loading.start("验证码获取中"),
                                t.next = 12,
                                this.$axios.getSMSCode({
                                    mobile: this.mobile
                                });
                            case 12:
                                if (code = t.sent, this.$nuxt.$loading.finish(), this.toastInfo = {
                                    msg: code.msg
                                },
                                1 === Number(code.status)) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 17:
                                this.isWaiting = 1,
                                e = (new Date).getTime(),
                                this.updateVCTitle(e),
                                $.jStorage.set("transferSmsSendTime", e);
                            case 21:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                } (),
                releaseTransfer: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e, r;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.mobile) {
                                    t.next = 5;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: "手机号不能为空！请输入手机号！"
                                },
                                t.abrupt("return", !1);
                            case 5:
                                if (Object(v.c)(this.mobile)) {
                                    t.next = 8;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: "手机号码格式不正确！请重试！"
                                },
                                t.abrupt("return", !1);
                            case 8:
                                if (this.code) {
                                    t.next = 13;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: "验证码不能为空！请输入验证码！"
                                },
                                t.abrupt("return", !1);
                            case 13:
                                if (Object(v.a)(this.code)) {
                                    t.next = 16;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: "验证码格式不正确！请重试！"
                                },
                                t.abrupt("return", !1);
                            case 16:
                                return this.toastInfo && (this.toastInfo = ""),
                                this.$nuxt.$loading.start("方案获取中"),
                                e = {
                                    is_page_source: this.tabIndex ? 2 : 1,
                                    mobile: this.mobile,
                                    code: this.code
                                },
                                this.name && (e.name = this.name),
                                t.next = 22,
                                this.$axios.releaseTransfer(e);
                            case 22:
                                if (r = t.sent, this.$nuxt.$loading.finish(), 1 === Number(r.status)) {
                                    t.next = 27;
                                    break
                                }
                                return this.toastInfo = {
                                    msg: r.msg
                                },
                                t.abrupt("return", !1);
                            case 27:
                                this.showLayer = 2,
                                $.jStorage.get("transferSmsSendTime") && $.jStorage.deleteKey("transferSmsSendTime"),
                                this.timer && clearTimeout(this.timer),
                                this.verifyCodeTitle = "获取验证码",
                                1 === this.isWaiting && (this.isWaiting = 0);
                            case 32:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                } (),
                isPassive: function() {
                    var t = !1;
                    try {
                        addEventListener("test", null, Object.defineProperty({},
                        "passive", {
                            get: function() {
                                t = !0
                            }
                        }))
                    } catch(t) {}
                    return t
                }
            }
        },
        m = (r(353), r(12)),
        component = Object(m.a)(f,
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("section", {
                attrs: {
                    "data-transfer": ""
                }
            },
            [n("header", {
                attrs: {
                    "data-header": ""
                }
            },
            [n("i", {
                attrs: {
                    "data-return": ""
                },
                on: {
                    click: function(e) {
                        return t.$router.go( - 1)
                    }
                }
            }), t._v(" "), t._m(0)]), t._v(" "), n("div", {
                attrs: {
                    "data-basic": ""
                }
            },
            [n("img", {
                attrs: {
                    "data-basic-img": "",
                    src: r(352),
                    alt: "粉丝一键转移 账号无缝对接",
                    title: "粉丝一键转移 账号无缝对接"
                }
            }), t._v(" "), n("div", {
                attrs: {
                    "data-customer": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("已助")]), t._v(" "), n("p", {
                attrs: {
                    "data-c-numbers": "",
                    "data-table-cell": ""
                }
            },
            t._l(t.transferInfo[t.tabIndex ? "xcx_num": "gzh_num"],
            function(e, i) {
                return n("img", {
                    key: i,
                    attrs: {
                        "data-c-total": "",
                        src: "/mt/images/number/" + e + ".png",
                        alt: "已助" + t.transferInfo[t.tabIndex ? "xcx_num": "gzh_num"].join("") + "名客户完成迁移",
                        title: "'已助'+transferInfo[tabIndex?'xcx_num':'gzh_num'].join('')+'名客户完成迁移'"
                    }
                })
            }), 0), t._v(" "), n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("名客户完成迁移")])]), t._v(" "), n("div", {
                attrs: {
                    "data-btns": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-t-plan": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        t.showLayer = 1
                    }
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("免费获取定制迁移方案")])]), t._v(" "), n("div", {
                attrs: {
                    "data-contact": "",
                    "data-table": ""
                },
                on: {
                    click: t.openImUrl
                }
            },
            [t._m(1)])])]), t._v(" "), n("div", {
                attrs: {
                    "data-project": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-tabs": "",
                    "data-table": ""
                }
            },
            [n("p", {
                class: {
                    active: !t.tabIndex
                },
                attrs: {
                    "data-tab-l": "",
                    "data-table-cell": ""
                },
                on: {
                    click: function(e) {
                        t.tabIndex = 0,
                        t.wSwiper.update()
                    }
                }
            },
            [t._v("公众号迁移")]), t._v(" "), n("p", {
                class: {
                    active: t.tabIndex
                },
                attrs: {
                    "data-tab-r": "",
                    "data-table-cell": ""
                },
                on: {
                    click: function(e) {
                        t.tabIndex = 1,
                        t.pSwiper.update()
                    }
                }
            },
            [t._v("小程序迁移")])]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.tabIndex,
                    expression: "!tabIndex"
                }],
                attrs: {
                    "data-p-show": ""
                }
            },
            [n("div", {
                directives: [{
                    name: "swiper",
                    rawName: "v-swiper:wSwiper",
                    value: t.iSwiperOption,
                    expression: "iSwiperOption",
                    arg: "wSwiper"
                }]
            },
            [n("div", {
                staticClass: "swiper-wrapper"
            },
            t._l(t.projectList.gzh,
            function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "swiper-slide"
                },
                [n("div", {
                    attrs: {
                        "data-p-list": ""
                    }
                },
                [n("p", {
                    attrs: {
                        "data-p-title": ""
                    }
                },
                [t._v(t._s(e.title))]), t._v(" "), n("p", {
                    attrs: {
                        "data-p-describe": ""
                    }
                },
                [t._v(t._s(e.describe))]), t._v(" "), n("p", {
                    attrs: {
                        "data-p-price": ""
                    }
                },
                [n("i", {
                    attrs: {
                        "data-price-unit": ""
                    }
                },
                [t._v("￥")]), t._v(t._s(e.price))]), t._v(" "), n("div", {
                    attrs: {
                        "data-p-docs": "",
                        "data-border-b": ""
                    }
                },
                t._l(e.docsList,
                function(dl, e) {
                    return n("div", {
                        key: e,
                        attrs: {
                            "data-table": "",
                            "data-border-t": ""
                        }
                    },
                    [n("p", {
                        class: {
                            disabled: dl.noNeed
                        },
                        attrs: {
                            "data-table-cell": ""
                        }
                    },
                    [t._v(t._s(dl.name))])])
                }), 0), t._v(" "), n("div", {
                    attrs: {
                        "data-p-contact": "",
                        "data-table": ""
                    },
                    on: {
                        click: t.openImUrl
                    }
                },
                [t._m(2, !0)])])])
            }), 0), t._v(" "), n("div", {
                staticClass: "swiper-pagination projects-pagination"
            })])]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.tabIndex,
                    expression: "tabIndex"
                }],
                attrs: {
                    "data-p-show": ""
                }
            },
            [n("div", {
                directives: [{
                    name: "swiper",
                    rawName: "v-swiper:pSwiper",
                    value: t.iSwiperOption,
                    expression: "iSwiperOption",
                    arg: "pSwiper"
                }]
            },
            [n("div", {
                staticClass: "swiper-wrapper"
            },
            t._l(t.projectList.xcx,
            function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "swiper-slide"
                },
                [n("div", {
                    attrs: {
                        "data-p-list": ""
                    }
                },
                [n("p", {
                    attrs: {
                        "data-p-title": ""
                    }
                },
                [t._v(t._s(e.title))]), t._v(" "), n("p", {
                    attrs: {
                        "data-p-describe": ""
                    }
                },
                [t._v(t._s(e.describe))]), t._v(" "), n("p", {
                    attrs: {
                        "data-p-price": ""
                    }
                },
                [n("i", {
                    attrs: {
                        "data-price-unit": ""
                    }
                },
                [t._v("￥")]), t._v(t._s(e.price) + "\n              ")]), t._v(" "), n("div", {
                    attrs: {
                        "data-p-docs": "",
                        "data-border-b": ""
                    }
                },
                t._l(e.docsList,
                function(dl, e) {
                    return n("div", {
                        key: e,
                        attrs: {
                            "data-table": "",
                            "data-border-t": ""
                        }
                    },
                    [n("p", {
                        class: {
                            disabled: dl.noNeed
                        },
                        attrs: {
                            "data-table-cell": ""
                        }
                    },
                    [t._v(t._s(dl.name))])])
                }), 0), t._v(" "), n("div", {
                    attrs: {
                        "data-p-contact": "",
                        "data-table": ""
                    },
                    on: {
                        click: t.openImUrl
                    }
                },
                [t._m(3, !0)])])])
            }), 0), t._v(" "), n("div", {
                staticClass: "swiper-pagination projects-pagination"
            })])])]), t._v(" "), n("div", {
                attrs: {
                    "data-la-show": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-la-title": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "小程序": "公众号") + "迁移法律保障协议")]), t._v(" "), n("div", {
                attrs: {
                    "data-la-box": "",
                    "data-clear-f": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-la-list": ""
                }
            },
            [n("img", {
                attrs: {
                    "data-la-img": "",
                    src: "/mt/images/transfer/" + (t.tabIndex ? "p": "w") + "1.jpg",
                    alt: (t.tabIndex ? "小程序": "粉丝") + "迁移见证书",
                    title: (t.tabIndex ? "小程序": "粉丝") + "迁移见证书"
                }
            }), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "小程序": "粉丝") + "迁移")]), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v("见证书")])]), t._v(" "), n("div", {
                attrs: {
                    "data-la-list": ""
                }
            },
            [n("img", {
                attrs: {
                    "data-la-img": "",
                    src: "/mt/images/transfer/" + (t.tabIndex ? "p": "w") + "2.jpg",
                    alt: (t.tabIndex ? "小程序": "企业") + "注销见证书",
                    title: (t.tabIndex ? "小程序": "企业") + "注销见证书"
                }
            }), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "小程序": "企业") + "注销")]), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v("见证书")])]), t._v(" "), n("div", {
                attrs: {
                    "data-la-list": ""
                }
            },
            [n("img", {
                attrs: {
                    "data-la-img": "",
                    src: "/mt/images/transfer/" + (t.tabIndex ? "p": "w") + "3.jpg",
                    alt: (t.tabIndex ? "小程序": "公众号") + "迁移申请函",
                    title: (t.tabIndex ? "小程序": "公众号") + "迁移申请函"
                }
            }), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "小程序": "公众号") + "迁移")]), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v("申请函")])]), t._v(" "), n("div", {
                attrs: {
                    "data-la-list": ""
                }
            },
            [n("img", {
                attrs: {
                    "data-la-img": "",
                    src: "/mt/images/transfer/" + (t.tabIndex ? "p": "w") + "4.jpg",
                    alt: "鱼爪服务协议",
                    title: "鱼爪服务协议"
                }
            }), t._v(" "), n("p", {
                attrs: {
                    "data-la-name": ""
                }
            },
            [t._v("鱼爪服务协议")])])])]), t._v(" "), n("div", {
                attrs: {
                    "data-benefit": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-benefit-header": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-benefit-title": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("做" + t._s(t.tabIndex ? "小程序主体": "公众号") + "迁移能获得什么?")])]), t._v(" "), n("div", {
                attrs: {
                    "data-benefit-btn": "",
                    "data-table": ""
                },
                on: {
                    click: t.openImUrl
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("我能做迁移吗")])])]), t._v(" "), n("div", {
                attrs: {
                    "data-benefit-list": "",
                    "data-blist-1": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-blist-title": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "可拥有更多权限、能力": "主体信息变更"))]), t._v(" "), n("p", {
                attrs: {
                    "data-blist-content": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "拥有经过认证的组织类,可以申请使用 功能直达、附近的、支付等权限。": "更换主体信息，如个人主体想转换为企业 主体(企业主体不能换成个人主体的哦！) 粉丝可直接转移至新号了。"))])]), t._v(" "), n("div", {
                attrs: {
                    "data-benefit-list": "",
                    "data-blist-2": "",
                    "data-border-t": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-blist-title": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "可获得更多流量 / 用户": "账号类型升级"))]), t._v(" "), n("p", {
                attrs: {
                    "data-blist-content": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "通过运营权限和主体的迁移，老用户 也能成为新用户之一，而没有察觉。": "因为业务的发展需要，订阅号已经无法满足企业发展需求，可升级为服务号获取更多功能权限。"))])]), t._v(" "), n("div", {
                attrs: {
                    "data-benefit-list": "",
                    "data-blist-3": "",
                    "data-border-t": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-blist-title": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "明确主体交割": "立即拥有留言功能"))]), t._v(" "), n("p", {
                attrs: {
                    "data-blist-content": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "迁移可以解决大部分的主体交割问题 规避商业纠纷风险。": "微信新规：自2018年3月12日起，新注册的公众号，将不会开通留言功能，新注册的公众号需从其它账号迁移此功能。"))])]), t._v(" "), n("div", {
                attrs: {
                    "data-benefit-list": "",
                    "data-blist-4": "",
                    "data-border-t": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-blist-title": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "更有可能的变现方式": "账号粉丝整合"))]), t._v(" "), n("p", {
                attrs: {
                    "data-blist-content": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "迁移至组织，支付权限，新的变现方式 也有了，还能增加其他变现方式。": "需要粉丝的，可以购买账号进行迁移，自 己有多个账号的，可以进行迁移到一个账 号将粉丝整合在一起。"))])])]), t._v(" "), n("div", {
                attrs: {
                    "data-tflow": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-tf-header": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-tf-title": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.tabIndex ? "小程序主体": "公众号") + "迁移流程")])]), t._v(" "), n("div", {
                attrs: {
                    "data-tf-btn": "",
                    "data-table": ""
                },
                on: {
                    click: t.openImUrl
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("咨询客服")])])]), t._v(" "), t._m(4)]), t._v(" "), n("ibottom"), t._v(" "), n("service", {
                attrs: {
                    serviceInfo: t.serviceInfo
                }
            }), t._v(" "), n("toast", {
                attrs: {
                    toastInfo: t.toastInfo
                }
            }), t._v(" "), n("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showLayer,
                    expression: "showLayer"
                }],
                attrs: {
                    "data-layer": ""
                },
                on: {
                    click: function(e) {
                        t.toastInfo = "",
                        t.showLayer = 0
                    }
                }
            },
            [n("div", {
                class: {
                    released: 2 === t.showLayer
                },
                attrs: {
                    "data-layer-box": ""
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            },
            [n("i", {
                attrs: {
                    "data-layer-close": ""
                },
                on: {
                    click: function(e) {
                        t.toastInfo = "",
                        t.showLayer = 0
                    }
                }
            }), t._v(" "), n("p", {
                attrs: {
                    "data-layer-title": ""
                }
            },
            [t._v(t._s(2 === t.showLayer ? "您的需求已收到，客服会尽快联系您!": "免费获取定制迁移方案"))]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.showLayer,
                    expression: "showLayer===1"
                }]
            },
            [n("div", {
                attrs: {
                    "data-form": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.name,
                    expression: "name",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "name",
                attrs: {
                    "data-layer-input": "",
                    placeholder: "您的称呼"
                },
                domProps: {
                    value: t.name
                },
                on: {
                    focus: function(e) {
                        t.toastInfo = ""
                    },
                    change: function(e) {
                        return t.formatInput(e, "name")
                    },
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.checkForm(1)
                    },
                    input: function(e) {
                        e.target.composing || (t.name = e.target.value.trim())
                    },
                    blur: function(e) {
                        return t.$forceUpdate()
                    }
                }
            })])]), t._v(" "), n("div", {
                attrs: {
                    "data-form": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.mobile,
                    expression: "mobile",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "mobile",
                attrs: {
                    "data-layer-input": "",
                    type: "tel",
                    placeholder: "您的手机号码"
                },
                domProps: {
                    value: t.mobile
                },
                on: {
                    focus: function(e) {
                        t.toastInfo = ""
                    },
                    input: [function(e) {
                        e.target.composing || (t.mobile = e.target.value.trim())
                    },
                    function(e) {
                        return t.formatInput(e, "mobile")
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.checkForm(0)
                    },
                    blur: function(e) {
                        return t.$forceUpdate()
                    }
                }
            })])]), t._v(" "), n("div", {
                attrs: {
                    "data-form": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-code": "",
                    "data-table-cell": ""
                }
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.code,
                    expression: "code",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "code",
                attrs: {
                    "data-layer-input": "",
                    type: "number",
                    placeholder: "请输入验证码"
                },
                domProps: {
                    value: t.code
                },
                on: {
                    focus: function(e) {
                        t.toastInfo = ""
                    },
                    input: [function(e) {
                        e.target.composing || (t.code = e.target.value.trim())
                    },
                    function(e) {
                        return t.formatInput(e, "code")
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.checkForm(1)
                    },
                    blur: function(e) {
                        return t.$forceUpdate()
                    }
                }
            })]), t._v(" "), n("p", {
                class: {
                    waiting: t.isWaiting
                },
                attrs: {
                    "data-code-btn": "",
                    "data-table-cell": ""
                },
                on: {
                    click: function(e) {
                        return t.checkForm(0)
                    }
                }
            },
            [t._v(t._s(t.verifyCodeTitle))])])]), t._v(" "), n("div", {
                attrs: {
                    "data-layer-btn": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        2 === t.showLayer ? (t.toastInfo = "", t.openImUrl()) : (t.toastInfo = "", t.checkForm(2))
                    }
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(2 === t.showLayer ? "联系主管": "立即获取"))])])])])], 1)
        },
        [function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                attrs: {
                    "data-table": ""
                }
            },
            [e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [this._v("粉丝迁移")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [e("i", {
                attrs: {
                    "data-c-label": ""
                }
            },
            [this._v("联系顾问")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [e("i", {
                attrs: {
                    "data-pc-label": ""
                }
            },
            [this._v("联系顾问")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [e("i", {
                attrs: {
                    "data-pc-label": ""
                }
            },
            [this._v("联系顾问")])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("div", {
                attrs: {
                    "data-tf-box": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-list": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-id": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("1")])]), t._v(" "), r("p", {
                attrs: {
                    "data-tf-name": ""
                }
            },
            [t._v("需求发布")])]), t._v(" "), r("div", {
                attrs: {
                    "data-tf-list": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-id": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("2")])]), t._v(" "), r("p", {
                attrs: {
                    "data-tf-name": ""
                }
            },
            [t._v("资料收集")])]), t._v(" "), r("div", {
                attrs: {
                    "data-tf-list": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-id": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("3")])]), t._v(" "), r("p", {
                attrs: {
                    "data-tf-name": ""
                }
            },
            [t._v("提交公正函")])]), t._v(" "), r("div", {
                attrs: {
                    "data-tf-list": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-id": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("4")])]), t._v(" "), r("p", {
                attrs: {
                    "data-tf-name": ""
                }
            },
            [t._v("审核通过")])]), t._v(" "), r("div", {
                attrs: {
                    "data-tf-list": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-id": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("5")])]), t._v(" "), r("p", {
                attrs: {
                    "data-tf-name": ""
                }
            },
            [t._v("账号迁移")])]), t._v(" "), r("div", {
                attrs: {
                    "data-tf-list": ""
                }
            },
            [r("div", {
                attrs: {
                    "data-tf-id": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("6")])]), t._v(" "), r("p", {
                attrs: {
                    "data-tf-name": ""
                }
            },
            [t._v("交易完成")])])])
        }], !1, null, "529c0982", null);
        e.
    default = component.exports
    }
}]);