(window.webpackJsonp = window.webpackJsonp || []).push([[30], {
    231 : function(t, e, r) {},
    232 : function(t, e, r) {
        "use strict";
        var n = r(231);
        r.n(n).a
    },
    233 : function(t, e, r) {
        "use strict";
        var n = {
            props: {
                bg: {
                default:
                    0
                },
                isReturn: {
                default:
                    1
                },
                directReturn: {
                default:
                    1
                },
                headerTitle: String
            }
        },
        o = (r(232), r(12)),
        component = Object(o.a)(n,
        function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("header", {
                class: {
                    bg: t.bg
                },
                attrs: {
                    "data-header": ""
                }
            },
            [t.isReturn ? r("i", {
                attrs: {
                    "data-header-return": ""
                },
                on: {
                    click: function(e) {
                        t.directReturn ? t.$router.go( - 1) : t.$emit("backAndReturn")
                    }
                }
            }) : t._e(), r("div", {
                class: {
                    go: t.isReturn
                },
                attrs: {
                    "data-header-title": "",
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.headerTitle))])])])
        },
        [], !1, null, "9ba415d6", null);
        e.a = component.exports
    },
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
    239 : function(t, e, r) {},
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
            return h
        }),
        r.d(e, "j",
        function() {
            return f
        }),
        r.d(e, "b",
        function() {
            return v
        }),
        r.d(e, "f",
        function() {
            return m
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
        h = function(t) {
            return /^[1-9][0-9]{4,10}$/.test(t)
        },
        f = function(t) {
            return /^[-_a-zA-Z0-9\u4e00-\u9fa5]{4,30}$/.test(t)
        },
        v = function(t) {
            return /^[a-zA-Z]{1}[-_a-zA-Z0-9]{7,19}$/.test(t)
        },
        m = function(t) {
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
    247 : function(t, e, r) {
        "use strict";
        var n = r(239);
        r.n(n).a
    },
    250 : function(t, e, r) {
        "use strict";
        r(18);
        var n = {
            methods: {
                openImUrl: function(i, t) {
                    3 === i && $.jStorage.get("visitTime") && $.jStorage.deleteKey("visitTime"),
                    window.location.href = t
                }
            },
            computed: {
                footerLinks: function() {
                    return "index" === this.$route.name ? [{
                        name: "关于我们",
                        href: "/mt/about",
                        title: "关于我们-鱼爪新媒交易"
                    },
                    {
                        name: "帮助中心",
                        href: "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1",
                        title: "帮助中心-鱼爪新媒交易"
                    },
                    {
                        name: "联系我们",
                        href: "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1",
                        title: "联系我们-鱼爪新媒交易"
                    }] : [{
                        name: "首页",
                        href: "/mt/",
                        title: "【鱼爪新媒交易】微博账号出售|微信公众号转让|微博买卖_微信转让|交易-鱼爪网"
                    },
                    {
                        name: "关于我们",
                        href: "/mt/about",
                        title: "关于我们-鱼爪新媒交易"
                    },
                    {
                        name: "帮助中心",
                        href: "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1",
                        title: "帮助中心-鱼爪新媒交易"
                    },
                    {
                        name: "联系我们",
                        href: "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1",
                        title: "联系我们-鱼爪新媒交易"
                    }]
                }
            }
        },
        o = (r(247), r(12)),
        component = Object(o.a)(n,
        function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("div", [r("p", {
                attrs: {
                    "data-flinks": ""
                }
            },
            t._l(t.footerLinks,
            function(e, i) {
                return r("a", {
                    key: i,
                    class: e.href ? "normal": "disabled",
                    attrs: {
                        "data-flink": "",
                        title: e.title
                    },
                    on: {
                        click: function(r) {
                            e.href && t.openImUrl(i, e.href)
                        }
                    }
                },
                [t._v(t._s(e.name))])
            }), 0), r("p", {
                attrs: {
                    "data-copyright-icp": ""
                }
            },
            [t._v("北京鱼爪网络科技有限公司 版权所有 京ICP备16020933号")]), r("p", {
                attrs: {
                    "data-official-url": ""
                }
            },
            [t._v("www.yuzhua.com")])])
        },
        [], !1, null, "72cb6172", null);
        e.a = component.exports
    },
    252 : function(t, e, r) {
        t.exports = r.p + "img/772a3a9.png"
    },
    279 : function(t, e, r) {},
    348 : function(t, e, r) {
        "use strict";
        var n = r(279);
        r.n(n).a
    },
    423 : function(t, e, r) {
        "use strict";
        r.r(e);
        r(43),
        r(33),
        r(42),
        r(81),
        r(13),
        r(82);
        var n = r(237),
        o = (r(41), r(5)),
        c = r(87),
        d = r(233),
        l = r(244),
        h = r(250),
        f = r(243),
        v = r(130),
        m = {
            layout: "normal",
            asyncData: function() {
                var t = Object(o.a)(regeneratorRuntime.mark(function t(e) {
                    var r, o, c, d, l, h, f, v, m, _, w;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = e.query,
                            o = e.$axios,
                            c = e.error,
                            d = r.sourceUrl || encodeURIComponent("/my"),
                            t.next = 4,
                            Promise.all([o.getImgCode(), o.getServiceInfo()]);
                        case 4:
                            if (l = t.sent, h = Object(n.a)(l, 2), f = h[0], v = h[1], 1 === Number(f.status) && 1 === Number(v.status)) {
                                t.next = 11;
                                break
                            }
                            return c({
                                statusCode: 500
                            }),
                            t.abrupt("return", !1);
                        case 11:
                            return f = f.data,
                            v = v.data,
                            m = [f.img_token, f.img_url],
                            _ = m[0],
                            w = m[1],
                            t.abrupt("return", {
                                sourceUrl: d,
                                imgToken: _,
                                imgCodeSrc: w,
                                serviceInfo: v
                            });
                        case 15:
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
                    mobile: "",
                    captcha: "",
                    verifyCode: "",
                    userName: "",
                    password: "",
                    rePassword: "",
                    timer: "",
                    isWaiting: 0,
                    verifyCodeTitle: "获取验证码",
                    lastTime: "",
                    readAgree: 0,
                    getFocus: 0,
                    callingApi: 0,
                    registerStep: 0,
                    showPwd: 0,
                    showRePwd: 0,
                    showLayer: 0,
                    showSOALayer: 0,
                    countDown: 3,
                    errorMsg: ""
                }
            },
            head: function() {
                return {
                    title: "注册"
                }
            },
            components: {
                iheader: d.a,
                service: l.a,
                copyright: h.a
            },
            watch: {
                countDown: function(t) { ! t && this.$router.push(decodeURIComponent(this.sourceUrl))
                },
                showLayer: function(t) {
                    this.timer && this.clearTimer(),
                    3 !== this.countDown && (this.countDown = 3),
                    t && this.startCountDown(),
                    document.body.style.overflow = t ? "hidden": "auto"
                },
                showSOALayer: function(t) {
                    document.body.style.overflow = t ? "hidden": "auto"
                },
                registerStep: function(t, e) {
                    t !== e && this.errorMsg && (this.errorMsg = "")
                },
                imgCodeSrc: function(t) {
                    this.captcha && 4 === this.captcha.length && this.checkImgCode()
                },
                readAgree: function(t) {
                    t ? this.errorMsg && this.errorMsg.includes("服务协议") && (this.errorMsg = "") : !this.errorMsg && (this.errorMsg = "请先阅读并同意鱼爪《服务协议》！")
                }
            },
            mounted: function() {
                $.jStorage.get("loginSmsSendTime") && $.jStorage.deleteKey("loginSmsSendTime")
            },
            beforeRouteLeave: function(t, e, r) {
                "hidden" === document.body.style.overflow && (document.body.style.overflow = "auto"),
                r()
            },
            methods: {
                startCountDown: function() {
                    var t = this;
                    this.timer = setInterval(function() {
                        t.countDown ? t.countDown--:t.clearTimer()
                    },
                    1e3)
                },
                clearTimer: function() {
                    clearInterval(this.timer),
                    this.timer = ""
                },
                refreshImgCode: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.$axios.getImgCode({
                                    font_size: 32,
                                    width: 252,
                                    height: 80
                                });
                            case 2:
                                if (e = t.sent, 1 === Number(e.status)) {
                                    t.next = 6;
                                    break
                                }
                                return error({
                                    statusCode: 500
                                }),
                                t.abrupt("return", !1);
                            case 6:
                                e = e.data,
                                this.imgToken = e.img_token,
                                this.imgCodeSrc = e.img_url;
                            case 9:
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
                updateVCTitle: function(t) {
                    var e = this;
                    this.timer && clearTimeout(this.timer);
                    var r = (new Date).getTime(),
                    n = t + 6e4;
                    if (r > n) this.verifyCodeTitle = "获取验证码",
                    1 === this.isWaiting && (this.isWaiting = 0);
                    else {
                        0 === this.isWaiting && (this.isWaiting = 1);
                        var o = Math.round((n - r) / 1e3);
                        this.verifyCodeTitle = "已发送(" + o + "s)",
                        this.timer = setTimeout(function() {
                            e.updateVCTitle(t)
                        },
                        1e3)
                    }
                },
                formatInput: function(t, e) {
                    var r = t.target.value.replace(/\s+/g, "");
                    "userName" !== e && "password" !== e && "rePassword" !== e || (r = String(r.replace(/[^a-zA-Z0-9]/g, "").substr(0, "userName" === e ? 20 : 18))),
                    "mobile" !== e && "captcha" !== e && "verifyCode" !== e || (r = String(r.replace("captcha" === e ? /[^a-zA-Z0-9]/g: /[^\d]/g, "").substr(0, "mobile" === e ? 11 : "captcha" === e ? 4 : 6))),
                    t.target.value = r,
                    this[e] = r
                },
                checkMobile: function() {
                    return this.mobile ? !!Object(f.c)(this.mobile) || (this.errorMsg = 11 === this.mobile.length ? "手机号格式不正确！请重试！": "请输入11位手机号！", !1) : (this.errorMsg = "手机号不能为空！请输入手机号！", !1)
                },
                checkImgCode: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.captcha) {
                                    t.next = 5;
                                    break
                                }
                                return this.errorMsg = "图形验证码不能为空！请输入图形验证码！",
                                t.abrupt("return", !1);
                            case 5:
                                if (4 === this.captcha.length) {
                                    t.next = 8;
                                    break
                                }
                                return this.errorMsg = "请输入4位图形验证码！",
                                t.abrupt("return", !1);
                            case 8:
                                return t.next = 10,
                                this.$axios.checkImgCode({
                                    code: this.captcha,
                                    img_token: this.imgToken
                                });
                            case 10:
                                if (e = t.sent, 1 === Number(e.status)) {
                                    t.next = 14;
                                    break
                                }
                                return this.errorMsg = e.msg,
                                t.abrupt("return", !1);
                            case 14:
                                return t.abrupt("return", !0);
                            case 15:
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
                getVerifyCode: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e, r;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ((this.registerStep || this.callingApi) && (!this.registerStep || this.isWaiting)) {
                                    t.next = 14;
                                    break
                                }
                                return this.callingApi = 1,
                                t.next = 4,
                                this.$axios.getRegSmsCode({
                                    phone: this.mobile
                                });
                            case 4:
                                if (e = t.sent, this.callingApi = 0, 1 === Number(e.status)) {
                                    t.next = 9;
                                    break
                                }
                                return this.errorMsg = e.msg,
                                t.abrupt("return", !1);
                            case 9:
                                this.isWaiting = 1,
                                r = (new Date).getTime(),
                                this.updateVCTitle(r),
                                $.jStorage.set("regSmsSendTime", r),
                                this.registerStep = 1;
                            case 14:
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
                checkRegSmsCode: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.verifyCode) {
                                    t.next = 5;
                                    break
                                }
                                return this.errorMsg = "验证码不能为空！请输入验证码！",
                                t.abrupt("return", !1);
                            case 5:
                                if (Object(f.a)(this.verifyCode)) {
                                    t.next = 8;
                                    break
                                }
                                return this.errorMsg = "请输入4-6位数字验证码！",
                                t.abrupt("return", !1);
                            case 8:
                                return t.next = 10,
                                this.$axios.checkRegSmsCode({
                                    phone: this.mobile,
                                    code: this.verifyCode
                                });
                            case 10:
                                if (e = t.sent, 1 === Number(e.status)) {
                                    t.next = 14;
                                    break
                                }
                                return this.errorMsg = e.msg,
                                t.abrupt("return", !1);
                            case 14:
                                return t.abrupt("return", !0);
                            case 15:
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
                checkUserName: function() {
                    return this.userName ? !!Object(f.h)(this.userName) || (this.errorMsg = "请输入5-20个字母和数字的组合用户名！", !1) : (this.errorMsg = "用户名不能为空！请输入用户名！", !1)
                },
                checkPwd: function() {
                    return this.password ? !!Object(f.d)(this.password) || (this.errorMsg = "请输入8-18个字母和数字的组合密码！", !1) : (this.errorMsg = "账号密码不能为空！请输入密码！", !1)
                },
                checkRePwd: function() {
                    return this.rePassword ? this.rePassword === this.password || (this.errorMsg = "确认密码和设置密码不一致！", !1) : (this.errorMsg = "确认密码不能为空！请输入确认密码！", !1)
                },
                formsBlur: function() {
                    for (var t in this.$refs) this.$refs.hasOwnProperty(t) && this.$refs[t] && this.$refs[t].blur();
                    this.checkAndSubmit()
                },
                checkAndSubmit: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.registerStep) {
                                    t.next = 14;
                                    break
                                }
                                if (this.checkMobile()) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 3:
                                return t.next = 5,
                                this.checkImgCode();
                            case 5:
                                if (t.sent) {
                                    t.next = 7;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 7:
                                if (this.readAgree) {
                                    t.next = 10;
                                    break
                                }
                                return this.errorMsg = "请先阅读并同意鱼爪《服务协议》！",
                                t.abrupt("return", !1);
                            case 10:
                                this.errorMsg && (this.errorMsg = ""),
                                this.getVerifyCode(),
                                t.next = 43;
                                break;
                            case 14:
                                if (1 !== this.registerStep) {
                                    t.next = 23;
                                    break
                                }
                                return t.next = 17,
                                this.checkRegSmsCode();
                            case 17:
                                if (t.sent) {
                                    t.next = 19;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 19:
                                this.errorMsg && (this.errorMsg = ""),
                                this.registerStep = 2,
                                t.next = 43;
                                break;
                            case 23:
                                if (this.checkUserName()) {
                                    t.next = 25;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 25:
                                if (this.checkPwd()) {
                                    t.next = 27;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 27:
                                if (this.checkRePwd()) {
                                    t.next = 29;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 29:
                                if (this.errorMsg && (this.errorMsg = ""), this.callingApi) {
                                    t.next = 43;
                                    break
                                }
                                return this.callingApi = 1,
                                t.next = 34,
                                this.$axios.smsRegister({
                                    phone: this.mobile,
                                    user_name: this.userName,
                                    password: this.password,
                                    passwordf: this.rePassword
                                });
                            case 34:
                                if (e = t.sent, this.callingApi = 0, 1 === Number(e.status)) {
                                    t.next = 39;
                                    break
                                }
                                return this.errorMsg = e.msg,
                                t.abrupt("return", !1);
                            case 39:
                                this.$store.commit("setUser", e.data),
                                v.set("authUser", c.Base64.encode(JSON.stringify(e.data))),
                                $.jStorage.set("authUser", c.Base64.encode(JSON.stringify(e.data))),
                                this.showLayer = 1;
                            case 43:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                } ()
            }
        },
        _ = (r(348), r(12)),
        component = Object(_.a)(m,
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("section", {
                attrs: {
                    "data-register": ""
                }
            },
            [n("iheader", {
                attrs: {
                    headerTitle: "注册",
                    directReturn: 0
                },
                on: {
                    backAndReturn: function(e) {
                        0 !== t.registerStep ? t.registerStep--:t.$router.go( - 1)
                    }
                }
            }), t._v(" "), n("div", {
                attrs: {
                    "data-register-box": ""
                }
            },
            [n("img", {
                attrs: {
                    "data-register-logo": "",
                    src: r(252),
                    alt: t.$store.state.seoInfo.description,
                    title: t.$store.state.seoInfo.description
                }
            }), t._v(" "), n("p", {
                attrs: {
                    "data-slogan": ""
                }
            },
            [t._v("聚焦热门自媒体平台·汇聚百万优质账号")]), t._v(" "), n("div", {
                attrs: {
                    "data-forms": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-forms-box": ""
                }
            },
            [t.registerStep ? 1 === t.registerStep ? [n("div", {
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.mobile))])]), t._v(" "), n("div", {
                class: {
                    focus: 1 === t.getFocus
                },
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.verifyCode,
                    expression: "verifyCode",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "verifyCode",
                class: {
                    clear: t.verifyCode
                },
                attrs: {
                    "data-verify-code": "",
                    type: "number",
                    placeholder: "请输入验证码"
                },
                domProps: {
                    value: t.verifyCode
                },
                on: {
                    focus: function(e) {
                        t.getFocus = 1,
                        t.errorMsg && t.errorMsg.includes("验证码") && (t.errorMsg = "")
                    },
                    input: [function(e) {
                        e.target.composing || (t.verifyCode = e.target.value.trim())
                    },
                    function(e) {
                        return t.formatInput(e, "verifyCode")
                    }],
                    blur: [function(e) {
                        t.getFocus = 0,
                        t.checkRegSmsCode()
                    },
                    function(e) {
                        return t.$forceUpdate()
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.formsBlur(e)
                    }
                }
            }), t.verifyCode ? n("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.verifyCode = ""
                    }
                }
            }) : t._e(), n("div", {
                attrs: {
                    "data-get-code": "",
                    "data-table": ""
                },
                on: {
                    click: t.getVerifyCode
                }
            },
            [n("p", {
                class: {
                    waiting: t.isWaiting
                },
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.verifyCodeTitle))])])])])] : [n("div", {
                class: {
                    focus: 1 === t.getFocus
                },
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
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
                    value: t.userName,
                    expression: "userName",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "userName",
                class: {
                    clear: t.userName
                },
                attrs: {
                    "data-user-name": "",
                    placeholder: "请设置用户名"
                },
                domProps: {
                    value: t.userName
                },
                on: {
                    focus: function(e) {
                        t.getFocus = 1,
                        t.errorMsg && t.errorMsg.includes("用户名") && (t.errorMsg = "")
                    },
                    change: function(e) {
                        return t.formatInput(e, "userName")
                    },
                    blur: [function(e) {
                        t.getFocus = 0,
                        t.checkUserName()
                    },
                    function(e) {
                        return t.$forceUpdate()
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.formsBlur(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.userName = e.target.value.trim())
                    }
                }
            }), t.userName ? n("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.userName = ""
                    }
                }
            }) : t._e()])]), t._v(" "), n("div", {
                class: {
                    focus: 2 === t.getFocus
                },
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
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
                    value: t.password,
                    expression: "password",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "password",
                class: {
                    clear: t.password
                },
                attrs: {
                    type: t.showPwd ? "text": "password",
                    minlength: "8",
                    maxlength: "18",
                    "data-password": "",
                    placeholder: "请设置密码(8-18个字母数字组合)"
                },
                domProps: {
                    value: t.password
                },
                on: {
                    focus: function(e) {
                        t.getFocus = 2,
                        t.errorMsg && t.errorMsg.includes("密码") && (t.errorMsg = "")
                    },
                    input: [function(e) {
                        e.target.composing || (t.password = e.target.value.trim())
                    },
                    function(e) {
                        return t.formatInput(e, "password")
                    }],
                    blur: [function(e) {
                        t.getFocus = 0,
                        t.checkUserName() && t.checkPwd()
                    },
                    function(e) {
                        return t.$forceUpdate()
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.formsBlur(e)
                    }
                }
            }), t.password ? n("i", {
                class: {
                    show: t.showPwd
                },
                attrs: {
                    "data-show": ""
                },
                on: {
                    click: function(e) {
                        t.showPwd = 0 === t.showPwd ? 1 : 0
                    }
                }
            }) : t._e(), t.password ? n("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.showPwd = 0,
                        t.password = ""
                    }
                }
            }) : t._e()])]), t._v(" "), n("div", {
                class: {
                    focus: 3 === t.getFocus
                },
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
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
                    value: t.rePassword,
                    expression: "rePassword",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "rePassword",
                class: {
                    clear: t.rePassword
                },
                attrs: {
                    type: t.showRePwd ? "text": "password",
                    minlength: "8",
                    maxlength: "18",
                    "data-password": "",
                    placeholder: "请再次输入密码"
                },
                domProps: {
                    value: t.rePassword
                },
                on: {
                    focus: function(e) {
                        t.getFocus = 3,
                        t.errorMsg && t.errorMsg.includes("确认密码") && (t.errorMsg = "")
                    },
                    input: [function(e) {
                        e.target.composing || (t.rePassword = e.target.value.trim())
                    },
                    function(e) {
                        return t.formatInput(e, "rePassword")
                    }],
                    blur: [function(e) {
                        t.getFocus = 0,
                        t.checkUserName() && t.checkPwd() && t.checkRePwd()
                    },
                    function(e) {
                        return t.$forceUpdate()
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.formsBlur(e)
                    }
                }
            }), t.rePassword ? n("i", {
                class: {
                    show: t.showRePwd
                },
                attrs: {
                    "data-show": ""
                },
                on: {
                    click: function(e) {
                        t.showRePwd = 0 === t.showRePwd ? 1 : 0
                    }
                }
            }) : t._e(), t.rePassword ? n("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.showRePwd = 0,
                        t.rePassword = ""
                    }
                }
            }) : t._e()])])] : [n("div", {
                class: {
                    focus: 1 === t.getFocus
                },
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
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
                class: {
                    clear: t.mobile
                },
                attrs: {
                    "data-mobile": "",
                    type: "tel",
                    placeholder: "请输入手机号"
                },
                domProps: {
                    value: t.mobile
                },
                on: {
                    focus: function(e) {
                        t.getFocus = 1,
                        t.errorMsg && t.errorMsg.includes("手机号") && (t.errorMsg = "")
                    },
                    input: [function(e) {
                        e.target.composing || (t.mobile = e.target.value.trim())
                    },
                    function(e) {
                        return t.formatInput(e, "mobile")
                    }],
                    blur: [function(e) {
                        t.getFocus = 0,
                        t.checkMobile()
                    },
                    function(e) {
                        return t.$forceUpdate()
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.formsBlur(e)
                    }
                }
            }), t.mobile ? n("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.mobile = ""
                    }
                }
            }) : t._e()])]), t._v(" "), n("div", {
                class: {
                    focus: 2 === t.getFocus
                },
                attrs: {
                    "data-form": "",
                    "data-table": "",
                    "data-border-b": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.captcha,
                    expression: "captcha",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "captcha",
                class: {
                    clear: t.captcha
                },
                attrs: {
                    "data-verify-code": "",
                    type: "email",
                    placeholder: "请输入图形验证码"
                },
                domProps: {
                    value: t.captcha
                },
                on: {
                    focus: function(e) {
                        t.getFocus = 2,
                        t.errorMsg && t.errorMsg.includes("图形验证码") && (t.errorMsg = "")
                    },
                    change: function(e) {
                        return t.formatInput(e, "captcha")
                    },
                    blur: [function(e) {
                        t.getFocus = 0,
                        t.checkMobile() && t.checkImgCode()
                    },
                    function(e) {
                        return t.$forceUpdate()
                    }],
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.formsBlur(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.captcha = e.target.value.trim())
                    }
                }
            }), t.captcha ? n("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.captcha = ""
                    }
                }
            }) : t._e(), t.imgCodeSrc ? n("img", {
                attrs: {
                    "data-icon-code": "",
                    src: t.imgCodeSrc
                },
                on: {
                    click: t.refreshImgCode
                }
            }) : t._e()])])], t._v(" "), n("p", {
                attrs: {
                    "data-error": ""
                }
            },
            [t._v(t._s(t.errorMsg))]), t._v(" "), n("div", {
                class: {
                    disabled: t.callingApi
                },
                attrs: {
                    "data-register-btn": "",
                    "data-table": ""
                },
                on: {
                    click: t.formsBlur
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.callingApi ? t.registerStep ? "账号注册中": "验证码获取中": 2 === t.registerStep ? "提交": "下一步"))])]), t._v(" "), t.registerStep ? t._e() : n("div", {
                class: {
                    agreed: t.readAgree
                },
                attrs: {
                    "data-user-agreement": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        t.readAgree = 0 === t.readAgree ? 1 : 0
                    }
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("我已阅读并同意鱼爪"), n("i", {
                attrs: {
                    "data-read-user-agreement": ""
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.showSOALayer = 1
                    }
                }
            },
            [t._v("《服务协议》")])])])], 2)]), t._v(" "), n("p", {
                attrs: {
                    "data-registered": ""
                }
            },
            [n("nuxt-link", {
                attrs: {
                    "data-go-login": "",
                    to: "/login?sourceUrl=" + t.sourceUrl
                }
            },
            [t._v("有账号？去登录")])], 1)]), t._v(" "), n("copyright"), t._v(" "), n("service", {
                attrs: {
                    serviceInfo: t.serviceInfo
                }
            }), t._v(" "), t.showLayer ? n("section", {
                attrs: {
                    "data-layer": ""
                }
            },
            [n("div", {
                attrs: {
                    "data-layer-box": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-layer-title": ""
                }
            },
            [t._v("注册成功")]), t._v(" "), n("p", {
                attrs: {
                    "data-layer-describe": ""
                }
            },
            [t._v("恭喜您注册成功，即将开启鱼爪之旅"), t.countDown ? n("i", {
                attrs: {
                    "data-timer": ""
                }
            },
            [t._v(t._s(t.countDown) + "s")]) : t._e()]), t._v(" "), n("div", {
                attrs: {
                    "data-layer-btn": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        t.$router.push(decodeURIComponent(t.sourceUrl))
                    }
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("完成")])])])]) : t._e(), t._v(" "), t.showSOALayer ? n("section", {
                attrs: {
                    "data-soa-layer": ""
                },
                on: {
                    click: function(e) {
                        t.showSOALayer = 0
                    }
                }
            },
            [n("div", {
                attrs: {
                    "data-soa-box": ""
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            },
            [n("div", {
                attrs: {
                    "data-soa-header": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("服务协议"), n("i", {
                attrs: {
                    "data-soa-close": ""
                },
                on: {
                    click: function(e) {
                        t.showSOALayer = 0
                    }
                }
            })])]), t._v(" "), t._m(0), t._v(" "), n("div", {
                attrs: {
                    "data-soa-footer": ""
                },
                on: {
                    click: function(e) {
                        t.readAgree = 1,
                        t.showSOALayer = 0
                    }
                }
            },
            [t._m(1)])])]) : t._e()], 1)
        },
        [function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("div", {
                attrs: {
                    "data-soa-body": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-soa-title": ""
                }
            },
            [t._v("鱼爪用户注册协议及法律说明")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("本协议是您与鱼爪网（简称;本站，网址：www.yuzhua.com）所有者（以下简称为;鱼爪）之间就鱼爪网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击;同意并注册按钮后，本协议即构成对双方有约束力的法律文件。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第1条 本站服务条款的确认和接纳")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("1.1本站的各项电子服务的所有权和运作权归鱼爪所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单等相应的权利能力和行为能力，能够独立承担法律责任。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("1.4鱼爪保留在中华人民共和国大陆地区施行法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第2条 本站服务")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("2.1鱼爪通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("2.2用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第3条 用户信息")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("3.1用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且鱼爪保留终止用户使用鱼爪各项服务的权利。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("3.2用户在本站进行浏览、下单购物等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("3.3用户注册成功后，将产生用户名和密码等账户信息，您可以根据本站规定改变您的密码。用户应谨慎合理的保存、使用其用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站并向公安机关报案。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("3.4用户同意，鱼爪拥有通过包括但不限于QQ、微信、短信、电话等形式，向在本站注册、购物用户发送订单信息、促销活动等告知信息的权利。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("3.5用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("3.6用户同意，鱼爪有权使用用户的注册信息、用户名、密码等信息，登录进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第4条 用户依法言行义务")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.1不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.2从中国大陆向境外传输资料信息时必须符合中国有关法规；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.3不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.4不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.5不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.6不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.7不得教唆他人从事本条所禁止的行为；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.8不得利用在本站注册的账户进行牟利性经营活动；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("4.9不得发布任何侵犯他人著作权、商标权等知识产权或合法权利的内容；")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("若用户未遵守以上规定的，本站有权作出独立判断并采取暂停或关闭用户帐号等措施。用户须对自己在网上的言论和行为承担法律责任。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第5条 商品信息")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("本站上的商品价格、数量、是否有货等商品信息随时都有可能发生变动，本站不作特别通知。由于网站上商品信息的数量极其庞大，虽然本站会竭尽全力保证您所浏览商品信息的准确性，但由于众所周知的互联网技术因素等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解，鱼爪欢迎您的指出和纠错，并会视情况给予纠错者一定的奖励。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第6条 订单")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("6.1在您下订单时，请您仔细确认所购商品的名称、价格、数量、类型等信息。购买人与使用者不一致的，购买人的行为和意思表示视为用户的行为和意思表示，用户应对购买人的行为及意思表示的法律后果承担连带责任。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("6.2除法律另有强制性规定外，双方约定如下：本站上销售方展示的商品和价格等信息仅仅是交易信息的发布，您购买下订单之前，请联系在线客服核实该商品的相关数据情况等，由于市场变化及各种以合理商业努力难以控制的因素的影响，本站无法保证您提交的订单信息中希望购买的商品都会有货；如您拟购买的商品，发生缺货，您有权取消订单。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第7条 所有权及知识产权条款")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("7.1用户一旦接受本协议，即表明该用户主动将其在任何时间段在本站发表的任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等信息内容）的财产性权利等任何可转让的权利，如著作权财产权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），全部独家且不可撤销地转让给鱼爪所有，用户同意鱼爪有权就任何主体侵权而单独提起诉讼。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("7.2本协议已经构成《中华人民共和国著作权法》第二十五条（条文序号依照2011年版著作权法确定）及相关法律规定的著作财产权等权利转让书面协议，其效力及于用户在鱼爪网站上发布的任何受著作权法保护的作品内容，无论该等内容形成于本协议订立前还是本协议订立后。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("7.3鱼爪是本站的制作者,拥有此网站内容及资源的著作权等合法权利,受国家法律保护,有权不时地对本协议及本站的内容进行修改，并在本站张贴，无须另行通知用户。在法律允许的限度范围内，鱼爪对本协议及本站内容拥有解释权。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("7.4除法律另有强制性规定外，未经鱼爪明确的特别书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，鱼爪有权追究其法律责任。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("7.5本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是鱼爪或其内容提供者的财产，受中国和国际版权法的保护。本站上所有内容的汇编是鱼爪的排他财产，受中国和国际版权法的保护。本站上所有软件都是鱼爪或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第8条 协议更新及用户关注义务")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("根据国家法律法规变化及网站运营需要，鱼爪有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登录查阅现有的协议；用户有义务不时关注并阅读现有的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受鱼爪网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。鱼爪建议您在使用本站之前阅读本协议及本站的公告。如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第9条 法律管辖和适用")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。 如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，均由鱼爪所属公司之所在城市地区人民法院提起诉讼申请。")]), t._v(" "), r("h3", {
                attrs: {
                    "data-soa-h": ""
                }
            },
            [t._v("第10条 其他")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("10.1鱼爪网站所有者是指在政府部门依法许可或备案的鱼爪网站经营主体。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("10.2鱼爪尊重用户和消费者的合法权利，本协议及本网站上发布的各类规则、声明等其他内容，均是为了更好的、更加便利的为用户和消费者提供服务。本站欢迎用户和社会各界提出意见和建议，鱼爪将虚心接受并适时修改本协议及本站上的各类规则。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("10.3本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请用户着重阅读。")]), t._v(" "), r("p", {
                attrs: {
                    "data-soa-p": ""
                }
            },
            [t._v("10.4您点击本协议下方的;同意并继续;按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。")])])
        },
        function() {
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
            [this._v("我已阅读并同意")])])
        }], !1, null, "bd0cd656", null);
        e.
    default = component.exports
    }
}]);