(window.webpackJsonp = window.webpackJsonp || []).push([[31], {
    304 : function(t, e, r) {},
    390 : function(t, e, r) {
        "use strict";
        r(391)("link",
        function(t) {
            return function(e) {
                return t(this, "a", "href", e)
            }
        })
    },
    391 : function(t, e, r) {
        var n = r(6),
        o = r(7),
        c = r(23),
        d = /"/g,
        h = function(t, e, r, n) {
            var o = String(c(t)),
            h = "<" + e;
            return "" !== r && (h += " " + r + '="' + String(n).replace(d, "&quot;") + '"'),
            h + ">" + o + "</" + e + ">"
        };
        t.exports = function(t, e) {
            var r = {};
            r[t] = e(h),
            n(n.P + n.F * o(function() {
                var e = "" [t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }), "String", r)
        }
    },
    392 : function(t, e, r) {
        "use strict";
        var n = r(304);
        r.n(n).a
    },
    407 : function(t, e, r) {
        "use strict";
        r.r(e);
        r(43),
        r(81),
        r(83),
        r(13),
        r(44),
        r(390),
        r(41);
        var n = r(5),
        o = {
            asyncData: function() {
                var t = Object(n.a)(regeneratorRuntime.mark(function t(e) {
                    var r, n, o, c, d, h, l, w, v;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r = e.route, n = e.$axios, o = e.error, c = r.params.link, d = Object.keys({
                                wechat: 1,
                                others: 2,
                                miniprogram: 3,
                                toutiao: 4,
                                weibo: 5,
                                svideo: 7
                            }), h = d.find(function(t) {
                                return t === c
                            }), !c || h) {
                                t.next = 7;
                                break
                            }
                            return o({
                                statusCode: 404
                            }),
                            t.abrupt("return", !1);
                        case 7:
                            return t.next = 9,
                            n.getHotSearch();
                        case 9:
                            if (l = t.sent, 1 === Number(l.status)) {
                                t.next = 13;
                                break
                            }
                            return o({
                                statusCode: 500
                            }),
                            t.abrupt("return", !1);
                        case 13:
                            return l = l.data,
                            w = h ? "wechat" === h ? 1 : "svideo" === h ? 2 : "weibo" === h ? 3 : "toutiao" === h ? 4 : "others" === h ? 5 : 6 : 0,
                            v = [{
                                name: "热搜",
                                active: h ? 0 : 1,
                                childList: {
                                    wechat: "公众号",
                                    svideolgb2: "抖音号",
                                    svideolgb1: "快手号",
                                    weibo: "微博",
                                    toutiao: "今日头条",
                                    otherslgb9: "企鹅号",
                                    otherslgb8: "百家号",
                                    miniprogram: "小程序"
                                }
                            },
                            {
                                name: "微信公众号",
                                active: "wechat" === h ? 1 : 0,
                                childList: l.goods_cat.weixin
                            },
                            {
                                name: "短视频账号",
                                active: "svideo" === h ? 1 : 0,
                                childList: l.goods_cat.kshou
                            },
                            {
                                name: "微博账号",
                                active: "weibo" === h ? 1 : 0,
                                childList: l.goods_cat.blog
                            },
                            {
                                name: "今日头条",
                                active: "toutiao" === h ? 1 : 0,
                                childList: l.goods_cat.news
                            },
                            {
                                name: "其他账号",
                                active: "others" === h ? 1 : 0,
                                childList: l.goods_type.baijia
                            },
                            {
                                name: "小程序账号",
                                active: "miniprogram" === h ? 1 : 0,
                                childList: l.goods_cat.weixinxcx
                            }],
                            t.abrupt("return", {
                                hotSearch: v,
                                hotIndex: w
                            });
                        case 17:
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
                    keywords: "",
                    hSwiperOption: {
                        slidesPerView: "auto",
                        freeMode: !0,
                        mousewheel: !0
                    }
                }
            },
            head: function() {
                return {
                    title: "搜索-鱼爪新媒交易"
                }
            },
            methods: {
                checkTab: function(t) {
                    for (var i = 0; i < this.hotSearch.length; i++) this.$set(this.hotSearch[i], "active", i === t ? 1 : 0)
                },
                formatKeyword: function(t) {
                    t.target.value = t.target.value.trim(),
                    t.target.value = t.target.value.replace(/^\s+|\s+$/g, ""),
                    t.target.value = t.target.value.substr(0, 100),
                    this.keywords = t.target.value
                },
                searchKeyword: function(t) {
                    "" === t && this.$refs.keywords.blur();
                    var e = "",
                    r = this.hotIndex ? 2 === this.hotIndex ? "/svideo": 3 === this.hotIndex ? "/weibo": 4 === this.hotIndex ? "/toutiao": 5 === this.hotIndex ? "/others": 6 === this.hotIndex ? "/miniprogram": "/wechat": "/" + (t || "wechat");
                    "" !== t ? this.hotIndex && 0 !== Number(t) && (e += (1 !== this.hotIndex && 2 !== this.hotIndex ? "lgb": "lgc") + t) : this.keywords && (e += "lgw" + encodeURIComponent(encodeURIComponent(this.keywords))),
                    r += e,
                    this.$router.push(r)
                }
            },
            mounted: function() {
                this.hSwiper.slideTo(this.hotIndex)
            }
        },
        c = (r(392), r(12)),
        component = Object(c.a)(o,
        function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("section", [r("header", [r("i", {
                attrs: {
                    "data-return": ""
                },
                on: {
                    click: function(e) {
                        return t.$router.go( - 1)
                    }
                }
            }), r("div", {
                attrs: {
                    "data-table": ""
                }
            },
            [r("p", {
                attrs: {
                    "data-table-cell": ""
                }
            },
            [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.keywords,
                    expression: "keywords",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "keywords",
                attrs: {
                    "data-input": "",
                    placeholder: "情感号"
                },
                domProps: {
                    value: t.keywords
                },
                on: {
                    change: t.formatKeyword,
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.searchKeyword("")
                    },
                    input: function(e) {
                        e.target.composing || (t.keywords = e.target.value.trim())
                    },
                    blur: function(e) {
                        return t.$forceUpdate()
                    }
                }
            })]), t.keywords.length ? r("i", {
                attrs: {
                    "data-clear": ""
                },
                on: {
                    click: function(e) {
                        t.keywords = t.keywords.substr(0, t.keywords.length - 1)
                    }
                }
            }) : t._e()])]), t._v(" "), r("div", {
                attrs: {
                    "data-search": ""
                }
            },
            [r("div", {
                directives: [{
                    name: "swiper",
                    rawName: "v-swiper:hSwiper",
                    value: t.hSwiperOption,
                    expression: "hSwiperOption",
                    arg: "hSwiper"
                }],
                attrs: {
                    "data-border-b": ""
                }
            },
            [r("div", {
                staticClass: "swiper-wrapper"
            },
            t._l(t.hotSearch,
            function(e, i) {
                return r("div", {
                    key: i,
                    staticClass: "swiper-slide",
                    attrs: {
                        "data-table": ""
                    },
                    on: {
                        click: function(e) {
                            t.checkTab(i),
                            t.hotIndex = i
                        }
                    }
                },
                [r("p", {
                    class: {
                        active: e.active
                    },
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(e.name))])])
            }), 0)]), r("div", {
                attrs: {
                    "data-hot": "",
                    "data-clear-f": ""
                }
            },
            t._l(t.hotSearch[t.hotIndex].childList,
            function(e, n, i) {
                return ! t.hotIndex || t.hotIndex && i < 10 ? r("div", {
                    key: i,
                    attrs: {
                        "data-table": ""
                    },
                    on: {
                        click: function(e) {
                            return t.searchKeyword(n)
                        }
                    }
                },
                [r("p", {
                    attrs: {
                        "data-table-cell": ""
                    }
                },
                [t._v(t._s(e))])]) : t._e()
            }), 0)])])
        },
        [], !1, null, "62786d9f", null);
        e.
    default = component.exports
    }
}]);