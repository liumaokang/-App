(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    231 : function(t, e, n) {},
    232 : function(t, e, n) {
        "use strict";
        var r = n(231);
        n.n(r).a
    },
    233 : function(t, e, n) {
        "use strict";
        var r = {
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
        c = (n(232), n(12)),
        component = Object(c.a)(r,
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("header", {
                class: {
                    bg: t.bg
                },
                attrs: {
                    "data-header": ""
                }
            },
            [t.isReturn ? n("i", {
                attrs: {
                    "data-header-return": ""
                },
                on: {
                    click: function(e) {
                        t.directReturn ? t.$router.go( - 1) : t.$emit("backAndReturn")
                    }
                }
            }) : t._e(), n("div", {
                class: {
                    go: t.isReturn
                },
                attrs: {
                    "data-header-title": "",
                    "data-table": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.headerTitle))])])])
        },
        [], !1, null, "9ba415d6", null);
        e.a = component.exports
    },
    234 : function(t, e, n) {},
    240 : function(t, e, n) {
        "use strict";
        var r = n(234);
        n.n(r).a
    },
    245 : function(t, e, n) {
        "use strict";
        n(41);
        var r = n(5),
        c = {
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
                    var t = Object(r.a)(regeneratorRuntime.mark(function t(e) {
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
        o = (n(240), n(12)),
        component = Object(o.a)(c,
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
    301 : function(t, e, n) {},
    387 : function(t, e, n) {
        "use strict";
        var r = n(301);
        n.n(r).a
    },
    411 : function(t, e, n) {
        "use strict";
        n.r(e);
        n(41);
        var r = n(5),
        c = n(88),
        o = n.n(c),
        d = n(245),
        l = n(233),
        h = {
            layout: "normal",
            middleware: "auth",
            asyncData: function() {
                var t = Object(r.a)(regeneratorRuntime.mark(function t(e) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.store,
                            r = n.state.authUser,
                            t.abrupt("return", {
                                authUser: r
                            });
                        case 3:
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
                    tabIndex: 0,
                    toastInfo: ""
                }
            },
            head: function() {
                return {
                    title: "平台充值"
                }
            },
            components: {
                toast: d.a,
                iheader: l.a
            },
            methods: {
                copyAccount: function(t, e) {
                    var n = this,
                    r = new o.a(t, {
                        text: function() {
                            return e
                        }
                    });
                    r.on("error",
                    function(t) {
                        n.toastInfo = {
                            msg: "复制失败!请手动选择复制!"
                        }
                    }),
                    r.on("success",
                    function(t) {
                        n.toastInfo = {
                            msg: "复制成功"
                        },
                        t.clearSelection()
                    })
                },
                openImUrl: function() {
                    $.jStorage.get("visitTime") && $.jStorage.deleteKey("visitTime"),
                    window.location.href = "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1"
                }
            }
        },
        v = (n(387), n(12)),
        component = Object(v.a)(h,
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("section", {
                attrs: {
                    "data-recharge": ""
                }
            },
            [n("iheader", {
                attrs: {
                    headerTitle: "平台充值",
                    bg: 1
                }
            }), t._v(" "), n("div", {
                attrs: {
                    "data-tabs": ""
                }
            },
            [n("div", {
                class: {
                    tab: !t.tabIndex
                },
                attrs: {
                    "data-tab-counter": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        t.tabIndex = 0
                    }
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("线下转账")])]), t._v(" "), n("div", {
                class: {
                    tab: t.tabIndex
                },
                attrs: {
                    "data-tab-alipay": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        t.tabIndex = 1
                    }
                }
            },
            [n("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("支付宝")])])]), t._v(" "), n("div", {
                attrs: {
                    "data-corporate-account": ""
                }
            },
            [t.tabIndex ? [t._m(3), t._v(" "), n("div", {
                attrs: {
                    "data-ca-info": ""
                }
            },
            [t._v("支付宝账号："), n("i", {
                attrs: {
                    "data-ca-val": "",
                    "data-account": ""
                }
            },
            [t._v("yuzhuawang123@126.com")]), t._v(" "), n("i", {
                staticClass: "copyAlipayAccount",
                attrs: {
                    "data-copy": ""
                },
                on: {
                    click: function(e) {
                        return t.copyAccount(".copyAlipayAccount", "yuzhuawang123@126.com")
                    }
                }
            },
            [t._v("复制")])])] : [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), n("div", {
                attrs: {
                    "data-ca-info": ""
                }
            },
            [t._v("银行账号："), n("i", {
                attrs: {
                    "data-ca-val": "",
                    "data-account": ""
                }
            },
            [t._v("4402 2090 0906 6387 079")]), t._v(" "), n("i", {
                staticClass: "copyBankAccount",
                attrs: {
                    "data-copy": ""
                },
                on: {
                    click: function(e) {
                        return t.copyAccount(".copyBankAccount", "4402 2090 0906 6387 079")
                    }
                }
            },
            [t._v("复制")])])]], 2), t._v(" "), n("p", {
                attrs: {
                    "data-recharge-account": ""
                }
            },
            [t._v("充值帐号："), n("i", {
                attrs: {
                    "data-ra-val": ""
                }
            },
            [t._v(t._s(t.authUser.phone))])]), t._v(" "), n("div", {
                attrs: {
                    "data-recharge-tips": ""
                }
            },
            [t._m(4), t._v(" "), n("div", {
                attrs: {
                    "data-tips-box": ""
                }
            },
            [n("p", {
                attrs: {
                    "data-tips-p": ""
                }
            },
            [t._v("1.转账充值时 请再三确认银行账号和账号户名是否正确，如有疑问请"), n("i", {
                attrs: {
                    "data-tips-service": ""
                },
                on: {
                    click: t.openImUrl
                }
            },
            [t._v("咨询客服")])]), t._v(" "), n("p", {
                attrs: {
                    "data-tips-p": ""
                }
            },
            [t._v("2.为避免非法资金操作，在平台若充值未消费直接提现，将收取2%-5%提现手续费。")])])]), t._v(" "), n("toast", {
                attrs: {
                    toastInfo: t.toastInfo
                }
            })], 1)
        },
        [function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                attrs: {
                    "data-ca-info": ""
                }
            },
            [this._v("开户银行："), e("i", {
                attrs: {
                    "data-ca-val": ""
                }
            },
            [this._v("中国工商银行")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                attrs: {
                    "data-ca-info": ""
                }
            },
            [this._v("账号户名："), e("i", {
                attrs: {
                    "data-ca-val": ""
                }
            },
            [this._v("四川鱼爪新媒网络科技有限公司")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                attrs: {
                    "data-ca-info": ""
                }
            },
            [this._v("开户地区："), e("i", {
                attrs: {
                    "data-ca-val": ""
                }
            },
            [this._v("成都春熙路支行")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                attrs: {
                    "data-ca-info": ""
                }
            },
            [this._v("名            称："), e("i", {
                attrs: {
                    "data-ca-val": ""
                }
            },
            [this._v("四川鱼爪新媒网络科技有限公司")])])
        },
        function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("p", {
                attrs: {
                    "data-tips-title": ""
                }
            },
            [e("i", {
                attrs: {
                    "data-tips-icon": ""
                }
            },
            [this._v("*")]), this._v("温馨提示：")])
        }], !1, null, "aeabf80e", null);
        e.
    default = component.exports
    }
}]);