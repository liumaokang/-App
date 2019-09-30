(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
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
            d = o[1]; (r = device.mobile() || device.ipad() ? 0 === d ? "/mt/browser/" + t + "-" + e: 2 === d ? "mqqwpa://im/chat?chat_type=wpa&uin=" + t + "&version=1&src_type=web&web_src=yuzhua.com": 3 === d ? "mqq://im/chat?chat_type=wpa&uin=" + t + "&version=1&src_type=web": "http://wpa.qq.com/msgrd?v=3&uin=" + t + "&site=qq&menu=yes": "http://wpa.qq.com/msgrd?v=3&uin=" + t + "&site=qq&menu=yes") && window.open(r, "_blank")
        }
    },
    253 : function(t, e, r) {
        "use strict";
        e.a = {
            getScrollEventTarget: function(element) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window, e = element; e && "HTML" !== e.tagName && "BODY" !== e.tagName && 1 === e.nodeType && e !== t;) {
                    var r = this.getComputedStyle(e).overflowY;
                    if ("scroll" === r || "auto" === r) return e;
                    e = e.parentNode
                }
                return t
            },
            getScrollTop: function(element) {
                return "scrollTop" in element ? element.scrollTop: element.pageYOffset
            },
            setScrollTop: function(element, t) {
                "scrollTop" in element ? element.scrollTop = t: element.scrollTo(element.scrollX, t)
            },
            getElementTop: function(element) {
                return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window)
            },
            getVisibleHeight: function(element) {
                return element === window ? element.innerHeight: element.getBoundingClientRect().height
            },
            getComputedStyle: document.defaultView.getComputedStyle.bind(document.defaultView)
        }
    },
    254 : function(t, e, r) {
        "use strict";
        r.d(e, "b",
        function() {
            return d
        }),
        r.d(e, "a",
        function() {
            return l
        });
        var n = !1;
        try {
            var o = {};
            Object.defineProperty(o, "passive", {
                get: function() {
                    n = !0
                }
            }),
            window.addEventListener("test-passive", null, o)
        } catch(t) {}
        function d(t, e, r) {
            var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            t.addEventListener(e, r, !!n && {
                capture: !1,
                passive: o
            })
        }
        function l(t, e, r) {
            t.removeEventListener(e, r)
        }
    },
    255 : function(t, e, r) {
        "use strict";
        function n(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var i = 0,
                    e = new Array(t.length); i < t.length; i++) e[i] = t[i];
                    return e
                }
            } (t) ||
            function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            } (t) ||
            function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            } ()
        }
        r.d(e, "a",
        function() {
            return n
        })
    },
    285 : function(t, e, r) {},
    370 : function(t, e, r) {
        "use strict";
        var n = r(285);
        r.n(n).a
    },
    419 : function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(255),
        o = (r(81), r(41), r(5)),
        d = r(233),
        l = r(253),
        c = r(254),
        h = r(236),
        v = {
            layout: "normal",
            middleware: "auth",
            asyncData: function() {
                var t = Object(o.a)(regeneratorRuntime.mark(function t(e) {
                    var r, n, o, d, l, c, h, v, f, _, m, y, w, k, i, S, N, x;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = e.store,
                            n = e.error,
                            o = e.$axios,
                            d = r.state.authUser,
                            t.next = 4,
                            o.getOrderList({
                                uid: d.user_id,
                                token: d.token,
                                page: 1,
                                limit: 8,
                                ahm: 0
                            });
                        case 4:
                            if (l = t.sent, 1 === Number(l.status)) {
                                t.next = 8;
                                break
                            }
                            return n({
                                statusCode: 500
                            }),
                            t.abrupt("return", !1);
                        case 8:
                            for (l = l.data, c = [1, Number(l.pageCount) || 0, l.list], f = c[2], _ = [(h = c[0]) >= (v = c[1]) ? 2 : 0, h >= v ? "木有更多了": "上拉/点击加载更多", l.state], m = _[0], y = _[1], w = _[2], k = [0, f.length], i = k[0], S = k[1]; i < S; i++) {
                                for (N in w) w.hasOwnProperty(N) && Number(f[i].status) === Number(N) && (f[i].statusName = w[N]);
                                for (x in {
                                    wechat: 1,
                                    others: 2,
                                    miniprogram: 3,
                                    toutiao: 4,
                                    weibo: 5,
                                    svideo: 7
                                })({
                                    wechat: 1,
                                    others: 2,
                                    miniprogram: 3,
                                    toutiao: 4,
                                    weibo: 5,
                                    svideo: 7
                                }).hasOwnProperty(x) && Number(f[i].goods_industry) === Number({
                                    wechat: 1,
                                    others: 2,
                                    miniprogram: 3,
                                    toutiao: 4,
                                    weibo: 5,
                                    svideo: 7
                                } [x]) && (f[i].gtype = x)
                            }
                            return t.abrupt("return", {
                                authUser: d,
                                ordersList: f,
                                pageNo: h,
                                totalPages: v,
                                loadStatus: m,
                                loadTitle: y
                            });
                        case 13:
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
                    offset: 2,
                    tabList: ["全部订单", "未付款", "已预订", "交接中", "已完成"],
                    showLayer: 0,
                    askTitle: "",
                    layerTitle: "",
                    orderId: "",
                    nextStep: 0,
                    isRequesting: 0
                }
            },
            head: function() {
                return {
                    title: "我是买家"
                }
            },
            components: {
                iheader: d.a
            },
            watch: {
                tabIndex: function(t, e) {
                    t !== e && (this.pageNo = 1, this.totalPages = 0, this.loadStatus = 0, this.ordersList = [], this.loadTitle = "加载中", this.updateOrderList({
                        type: 1
                    }))
                },
                showLayer: function(t) {
                    document.body.style.overflow = t ? "hidden": "auto"
                }
            },
            mounted: function() {
                this.scroller = l.a.getScrollEventTarget(this.$el),
                this.handler(!0),
                this.$nextTick(this.checkLoadMore)
            },
            beforeRouteLeave: function(t, e, r) {
                this.handler(!1),
                "hidden" === document.body.style.overflow && (document.body.style.overflow = "auto"),
                r()
            },
            destroyed: function() {
                this.handler(!1)
            },
            activated: function() {
                this.handler(!0)
            },
            deactivated: function() {
                this.handler(!1)
            },
            methods: {
                wakeMobileQQ: h.a,
                handler: function(t) {
                    this.binded !== t && (this.binded = t, (t ? c.b: c.a)(this.scroller, "scroll", this.checkLoadMore))
                },
                checkLoadMore: function() {
                    if (!this.loadStatus) {
                        var t = this.$el,
                        e = this.scroller,
                        r = l.a.getVisibleHeight(e);
                        if (r && "none" !== l.a.getComputedStyle(t).display && null !== t.offsetParent) {
                            var n = l.a.getScrollTop(e) + r,
                            o = !1;
                            if (t === e) o = e.scrollHeight - n < this.offset;
                            else o = l.a.getElementTop(t) - l.a.getElementTop(e) + l.a.getVisibleHeight(t) - r < this.offset;
                            o && this.updateOrderList()
                        }
                    }
                },
                updateOrderList: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e, r, o, d, l, c, h, v, f, _, m, y, i, w, k, S, N = arguments;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e = N.length > 0 && void 0 !== N[0] ? N[0] : {},
                                r = e.type, o = void 0 === r ? 0 : r, d = e.page, l = void 0 === d ? 1 : d, c = e.limit, h = void 0 === c ? 8 : c, this.loadStatus) {
                                    t.next = 21;
                                    break
                                }
                                return this.loadStatus = 1,
                                this.loadTitle = "加载中",
                                !o && (l = this.pageNo + 1),
                                t.next = 7,
                                this.$axios.getOrderList({
                                    uid: this.authUser.user_id,
                                    token: this.authUser.token,
                                    page: l,
                                    limit: h,
                                    ahm: this.tabIndex
                                });
                            case 7:
                                if (v = t.sent, 1 === Number(v.status)) {
                                    t.next = 11;
                                    break
                                }
                                return this.loadTitle = "网络繁忙！请稍后再试！！！",
                                t.abrupt("return", !1);
                            case 11:
                                for (v = v.data, f = [v.state, v.list], _ = f[0], m = f[1], 2 !== o && (this.pageNo = l), 2 !== o && (this.totalPages = Number(v.pageCount)), y = [0, m.length], i = y[0], w = y[1]; i < w; i++) {
                                    for (k in _) _.hasOwnProperty(k) && Number(m[i].status) === Number(k) && (m[i].statusName = _[k]);
                                    for (S in {
                                        wechat: 1,
                                        others: 2,
                                        miniprogram: 3,
                                        toutiao: 4,
                                        weibo: 5,
                                        svideo: 7
                                    })({
                                        wechat: 1,
                                        others: 2,
                                        miniprogram: 3,
                                        toutiao: 4,
                                        weibo: 5,
                                        svideo: 7
                                    }).hasOwnProperty(S) && Number(m[i].goods_industry) === Number({
                                        wechat: 1,
                                        others: 2,
                                        miniprogram: 3,
                                        toutiao: 4,
                                        weibo: 5,
                                        svideo: 7
                                    } [S]) && (m[i].gtype = S)
                                }
                                this.loadStatus = this.pageNo >= this.totalPages ? 2 : 0,
                                this.loadTitle = this.pageNo >= this.totalPages ? "木有更多了": "上拉/点击加载更多",
                                this.ordersList = o ? m: [].concat(Object(n.a)(this.ordersList), Object(n.a)(m)),
                                t.next = 23;
                                break;
                            case 21:
                                this.loadStatus = 2,
                                this.loadTitle = "木有更多了";
                            case 23:
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
                openImUrl: function() {
                    $.jStorage.get("visitTime") && $.jStorage.deleteKey("visitTime"),
                    window.location.href = "https://gytk5.kuaishang.cn/bs/im.htm?cas=79361___256815&fi=90457&ism=1"
                },
                payOrder: function(t) {
                    this.$router.push("/my/order/" + t)
                },
                askCancelAndRefund: function(s, t, e) {
                    this.orderId = e,
                    1 === Number(s) ? (this.nextStep = 1, this.askTitle = "您确认要取消订单吗？", this.showLayer = 2) : 1 === Number(t) ? (this.nextStep = 3, this.cancelAndRefund()) : (this.nextStep = 2, this.askTitle = "您确认要申请退款吗？", this.showLayer = 2)
                },
                cancelAndRefund: function() {
                    var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                        var e, r, n, o;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.isRequesting) {
                                    t.next = 15;
                                    break
                                }
                                return this.isRequesting = 1,
                                this.layerTitle = "",
                                e = 1 === this.nextStep ? "取消订单": 2 === this.nextStep ? "申请退款": "取消申请退款",
                                r = {
                                    uid: this.authUser.user_id,
                                    token: this.authUser.token,
                                    order_id: this.orderId
                                },
                                1 !== this.nextStep && (r.state = 2 === this.nextStep ? 1 : 0),
                                t.next = 8,
                                1 === this.nextStep ? this.$axios.cancelOrder(r) : this.$axios.updateRefund(r);
                            case 8:
                                n = t.sent,
                                this.isRequesting = 0,
                                o = Number(n.status),
                                this.layerTitle = 1 === o ? e + "成功": n.msg,
                                this.showLayer = 1 === o ? 3 : 1,
                                this.askTitle = "",
                                1 === o && (this.loadStatus = 0, this.loadTitle = "加载中", this.updateOrderList({
                                    type: 2,
                                    limit: this.ordersList.length
                                }));
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
                layerConfirm: function() {
                    2 === this.showLayer ? this.cancelAndRefund() : this.showLayer = 0
                }
            }
        },
        f = (r(370), r(12)),
        component = Object(f.a)(v,
        function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("section", {
                attrs: {
                    "data-buyer": ""
                }
            },
            [r("header", {
                staticClass: "bg",
                attrs: {
                    "data-header": ""
                }
            },
            [r("i", {
                attrs: {
                    "data-header-return": ""
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/my")
                    }
                }
            }), t._m(0), r("div", {
                attrs: {
                    "data-header-buy": "",
                    "data-table": ""
                },
                on: {
                    click: t.openImUrl
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("我要求购")])])]), t._v(" "), r("div", {
                attrs: {
                    "data-tabs": ""
                }
            },
            t._l(t.tabList,
            function(e, i) {
                return r("div", {
                    key: i,
                    attrs: {
                        "data-table": ""
                    },
                    on: {
                        click: function(e) {
                            t.tabIndex = i
                        }
                    }
                },
                [r("p", {
                    class: {
                        tab: i === t.tabIndex
                    },
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(e))])])
            }), 0), t._v(" "), 1 === t.loadStatus || t.ordersList.length ? t._l(t.ordersList,
            function(ol, i) {
                return r("div", {
                    key: i,
                    class: {
                        th: i
                    },
                    attrs: {
                        "data-order-list": ""
                    },
                    on: {
                        click: function(e) {
                            return t.$router.push("/" + ol.gtype + "/" + ol.solesn)
                        }
                    }
                },
                [r("div", {
                    attrs: {
                        "data-ol-header": "",
                        "data-border-b": ""
                    }
                },
                [r("div", {
                    attrs: {
                        "data-order-sn": "",
                        "data-table": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v("订单编号："), r("i", {
                    attrs: {
                        "data-sn": ""
                    }
                },
                [t._v(t._s(ol.order_sn))])])]), t._v(" "), r("div", {
                    attrs: {
                        "data-status": "",
                        "data-table": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(ol.statusName))])])]), t._v(" "), r("div", {
                    attrs: {
                        "data-gtitle": "",
                        "data-table": ""
                    }
                },
                [r("p", {
                    class: ol.gtype + ("svideo" === ol.gtype || "others" === ol.gtype ? "-" + ol.goods_type: ""),
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(ol.goods_name))]), t._v(" "), "wechat" === ol.gtype && 2 === Number(ol.is_discount) ? r("i", {
                    attrs: {
                        "data-discount": "",
                        "data-table-cell": ""
                    }
                }) : t._e(), t._v(" "), 2 === Number(ol.approve) ? r("i", {
                    attrs: {
                        "data-verified": "",
                        "data-table-cell": ""
                    }
                }) : t._e(), t._v(" "), 2 === Number(ol.is_exclusive) ? r("i", {
                    attrs: {
                        "data-exclusive": "",
                        "data-table-cell": ""
                    }
                }) : t._e()]), t._v(" "), r("div", {
                    attrs: {
                        "data-price-time": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-price-info": ""
                    }
                },
                [t._v("订单总额: "), r("i", {
                    attrs: {
                        "data-price-unit": ""
                    }
                },
                [t._v("￥")]), r("i", {
                    attrs: {
                        "data-price-amount": ""
                    }
                },
                [t._v(t._s(ol.buy_price))])]), r("p", {
                    attrs: {
                        "data-time": ""
                    }
                },
                [t._v(t._s(ol.pat_date))])]), t._v(" "), r("div", {
                    attrs: {
                        "data-order-infos": "",
                        "data-clear-f": ""
                    }
                },
                [r("div", {
                    attrs: {
                        "data-oi-l": ""
                    }
                },
                [r("div", {
                    attrs: {
                        "data-oi-list": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-oi-key": ""
                    }
                },
                [t._v("出售单价：")]), r("p", {
                    attrs: {
                        "data-oi-val": ""
                    }
                },
                [t._v("¥" + t._s(ol.total))])]), t._v(" "), r("div", {
                    attrs: {
                        "data-oi-list": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-oi-key": ""
                    }
                },
                [t._v("服务费：")]), r("p", {
                    attrs: {
                        "data-oi-val": ""
                    }
                },
                [t._v("¥" + t._s(ol.service_money))])]), t._v(" "), r("div", {
                    attrs: {
                        "data-oi-list": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-oi-key": ""
                    }
                },
                [t._v("新媒类型：")]), r("p", {
                    attrs: {
                        "data-oi-val": ""
                    }
                },
                [t._v(t._s(ol.goods_industry_name))])])]), t._v(" "), r("div", {
                    attrs: {
                        "data-oi-r": ""
                    }
                },
                [r("div", {
                    attrs: {
                        "data-oi-list": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-oi-key": ""
                    }
                },
                [t._v("优惠：")]), r("p", {
                    attrs: {
                        "data-oi-val": ""
                    }
                },
                [t._v("¥" + t._s(ol.discount))])]), t._v(" "), r("div", {
                    attrs: {
                        "data-oi-list": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-oi-key": ""
                    }
                },
                [t._v("已付：")]), r("p", {
                    attrs: {
                        "data-oi-val": "",
                        "data-oi-paid": ""
                    }
                },
                [t._v("¥" + t._s(ol.paid))])]), t._v(" "), r("div", {
                    attrs: {
                        "data-oi-list": "",
                        "data-clear-f": ""
                    }
                },
                [r("p", {
                    attrs: {
                        "data-oi-key": ""
                    }
                },
                [t._v("粉丝数量：")]), r("p", {
                    attrs: {
                        "data-oi-val": ""
                    }
                },
                [t._v(t._s(ol.fans))])])])]), t._v(" "), r("div", {
                    attrs: {
                        "data-tools": ""
                    }
                },
                [r("div", {
                    class: {
                        two: 3 === Number(ol.status),
                        three: 1 === Number(ol.status) || 2 === Number(ol.status)
                    },
                    attrs: {
                        "data-btns": ""
                    }
                },
                [1 === Number(ol.status) || 2 === Number(ol.status) ? r("div", {
                    attrs: {
                        "data-pay": "",
                        "data-table": ""
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.payOrder(ol.order_sn)
                        }
                    }
                },
                [r("p", {
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(1 === Number(ol.status) ? "付款": "支付尾款"))])]) : t._e(), t._v(" "), 1 === Number(ol.status) || 2 === Number(ol.status) || 3 === Number(ol.status) ? r("div", {
                    class: {
                        request: 1 !== Number(ol.status) && 1 === Number(ol.apply_refund) && t.orderId === ol.order_id && t.isRequesting
                    },
                    attrs: {
                        "data-refund": "",
                        "data-table": ""
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.askCancelAndRefund(ol.status, ol.apply_refund, ol.order_id)
                        }
                    }
                },
                [r("p", {
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(1 === Number(ol.status) ? "取消订单": 1 === Number(ol.apply_refund) ? t.orderId === ol.order_id && t.isRequesting ? "正在处理中": "取消申请退款": "申请退款"))])]) : t._e(), t._v(" "), r("div", {
                    attrs: {
                        "data-service": "",
                        "data-table": ""
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.wakeMobileQQ(ol.staff_qq, "4009029915")
                        }
                    }
                },
                [r("p", {
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v("联系客服")])])])])])
            }) : [r("p", {
                attrs: {
                    "data-no-order": ""
                }
            },
            [t._v("您还没有" + t._s(t.tabIndex ? t.tabList[t.tabIndex] + "的订单": "购买商品") + "哦~")]), t._v(" "), t.tabIndex ? t._e() : r("div", {
                attrs: {
                    "data-pick": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/wechat")
                    }
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v("马上去挑选")])])], t._v(" "), 1 === t.loadStatus || 1 !== t.loadStatus && t.totalPages > 1 ? r("div", {
                class: [1 === t.loadStatus ? "loading": 2 === t.loadStatus ? "finished": "normal"],
                attrs: {
                    "data-more": "",
                    "data-table": ""
                },
                on: {
                    click: function(e) { ! t.loadStatus && t.updateOrderList()
                    }
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [r("i", {
                attrs: {
                    "data-more-label": ""
                }
            },
            [t._v(t._s(t.loadTitle))])])]) : t._e(), t._v(" "), t.showLayer ? r("section", {
                attrs: {
                    "data-layer": ""
                },
                on: {
                    click: function(e) { ! t.isRequesting && (t.showLayer = 0, t.askTitle = "", t.layerTitle = "")
                    }
                }
            },
            [r("div", {
                class: [1 === t.showLayer ? "fail": 2 === t.showLayer ? "ack": "succeed"],
                attrs: {
                    "data-layer-box": ""
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            },
            [2 !== t.showLayer || t.isRequesting ? t._e() : r("i", {
                attrs: {
                    "data-layer-close": ""
                },
                on: {
                    click: function(e) {
                        t.showLayer = 0
                    }
                }
            }), t._v(" "), 2 !== t.showLayer ? r("p", {
                attrs: {
                    "data-layer-title": ""
                }
            },
            [t._v(t._s(t.layerTitle))]) : [r("p", {
                attrs: {
                    "data-ack-title": ""
                }
            },
            [t._v(t._s(t.askTitle))])], t._v(" "), r("div", {
                class: {
                    request: t.isRequesting
                },
                attrs: {
                    "data-layer-btn": "",
                    "data-table": ""
                },
                on: {
                    click: t.layerConfirm
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [t._v(t._s(t.isRequesting ? "正在" + (1 === t.nextStep ? "取消订单": 2 === t.nextStep ? "申请退款": "取消申请退款") : "确定"))])])], 2)]) : t._e()], 2)
        },
        [function() {
            var t = this.$createElement,
            e = this._self._c || t;
            return e("div", {
                staticClass: "go",
                attrs: {
                    "data-header-title": "",
                    "data-table": ""
                }
            },
            [e("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [this._v("我是买家")])])
        }], !1, null, "4078ae22", null);
        e.
    default = component.exports
    }
}]);