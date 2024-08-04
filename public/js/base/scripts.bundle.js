var mApp = (function () {
    function e(t) {
        var e = t.data("skin") ? "m-tooltip--skin-" + t.data("skin") : "",
            a = "auto" == t.data("width") ? "m-tooltop--auto-width" : "",
            n = t.data("trigger") ? t.data("trigger") : "hover";
        t.tooltip({
            trigger: n,
            template:
                '<div class="m-tooltip ' +
                e +
                " " +
                a +
                ' tooltip" role="tooltip">                <div class="arrow"></div>                <div class="tooltip-inner"></div>            </div>',
        });
    }
    function t() {
        $('[data-toggle="m-tooltip"]').each(function () {
            e($(this));
        });
    }
    function a(t) {
        var e = t.data("skin") ? "m-popover--skin-" + t.data("skin") : "",
            a = t.data("trigger") ? t.data("trigger") : "hover";
        t.popover({
            trigger: a,
            template:
                '            <div class="m-popover ' +
                e +
                ' popover" role="tooltip">                <div class="arrow"></div>                <h3 class="popover-header"></h3>                <div class="popover-body"></div>            </div>',
        });
    }
    function n() {
        $('[data-toggle="m-popover"]').each(function () {
            a($(this));
        });
    }
    function o(t, e) {
        (t = $(t)), new mPortlet(t[0], e);
    }
    function i() {
        $('[m-portlet="true"]').each(function () {
            var t = $(this);
            !0 !== t.data("portlet-initialized") &&
                (o(t, {}), t.data("portlet-initialized", !0));
        });
    }
    function l() {
        $("[data-tab-target]").each(function () {
            1 != $(this).data("tabs-initialized") &&
                ($(this).click(function (t) {
                    t.preventDefault();
                    var e = $(this),
                        a = e.closest('[data-tabs="true"]'),
                        n = $(a.data("tabs-contents")),
                        t = $(e.data("tab-target"));
                    a
                        .find(".m-tabs__item.m-tabs__item--active")
                        .removeClass("m-tabs__item--active"),
                        e.addClass("m-tabs__item--active"),
                        n
                            .find(
                                ".m-tabs-content__item.m-tabs-content__item--active"
                            )
                            .removeClass("m-tabs-content__item--active"),
                        t.addClass("m-tabs-content__item--active");
                }),
                $(this).data("tabs-initialized", !0));
        });
    }
    var r = {
        brand: "#716aca",
        metal: "#c4c5d6",
        light: "#ffffff",
        accent: "#00c5dc",
        primary: "#5867dd",
        success: "#34bfa3",
        info: "#36a3f7",
        warning: "#ffb822",
        danger: "#f4516c",
        focus: "#9816f4",
    };
    return {
        init: function (t) {
            t && t.colors && (r = t.colors), mApp.initComponents();
        },
        initComponents: function () {
            (jQuery.event.special.touchstart = {
                setup: function (t, e, a) {
                    "function" == typeof this &&
                        (e.includes("noPreventDefault")
                            ? this.addEventListener("touchstart", a, {
                                  passive: !1,
                              })
                            : this.addEventListener("touchstart", a, {
                                  passive: !0,
                              }));
                },
            }),
                (jQuery.event.special.touchmove = {
                    setup: function (t, e, a) {
                        "function" == typeof this &&
                            (e.includes("noPreventDefault")
                                ? this.addEventListener("touchmove", a, {
                                      passive: !1,
                                  })
                                : this.addEventListener("touchmove", a, {
                                      passive: !0,
                                  }));
                    },
                }),
                (jQuery.event.special.wheel = {
                    setup: function (t, e, a) {
                        "function" == typeof this &&
                            (e.includes("noPreventDefault")
                                ? this.addEventListener("wheel", a, {
                                      passive: !1,
                                  })
                                : this.addEventListener("wheel", a, {
                                      passive: !0,
                                  }));
                    },
                }),
                $('[data-scrollable="true"]').each(function () {
                    var t,
                        e = $(this),
                        a = mUtil.isInResponsiveRange("tablet-and-mobile")
                            ? ((t = e.data("mobile-max-height")
                                  ? e.data("mobile-max-height")
                                  : e.data("max-height")),
                              e.data("mobile-height")
                                  ? e.data("mobile-height")
                                  : e.data("height"))
                            : ((t = e.data("max-height")),
                              e.data("max-height"));
                    t && e.css("max-height", t),
                        a && e.css("height", a),
                        mApp.initScroller(e, {});
                }),
                t(),
                n(),
                $("body").on("click", "[data-close=alert]", function () {
                    $(this).closest(".alert").hide();
                }),
                i(),
                $(".custom-file-input").on("change", function () {
                    var t = $(this).val();
                    $(this)
                        .next(".custom-file-label")
                        .addClass("selected")
                        .html(t);
                }),
                l();
        },
        initCustomTabs: function () {
            l();
        },
        initTooltips: function () {
            t();
        },
        initTooltip: function (t) {
            e(t);
        },
        initPopovers: function () {
            n();
        },
        initPopover: function (t) {
            a(t);
        },
        initPortlet: function (t, e) {
            o(t, e);
        },
        initPortlets: function () {
            i();
        },
        scrollTo: function (t, e) {
            el = $(t);
            t = el && 0 < el.length ? el.offset().top : 0;
            (t += e || 0),
                jQuery("html,body").animate({ scrollTop: t }, "slow");
        },
        scrollToViewport: function (t) {
            var e = $(t).offset().top,
                t = t.height(),
                t = e - (mUtil.getViewPort().height / 2 - t / 2);
            jQuery("html,body").animate({ scrollTop: t }, "slow");
        },
        scrollTop: function () {
            mApp.scrollTo();
        },
        initScroller: function (t, e, a) {
            mUtil.isMobileDevice()
                ? t.css("overflow", "auto")
                : (!0 !== a && mApp.destroyScroller(t),
                  t.mCustomScrollbar({
                      scrollInertia: 0,
                      autoDraggerLength: !0,
                      autoHideScrollbar: !0,
                      autoExpandScrollbar: !1,
                      alwaysShowScrollbar: 0,
                      axis: t.data("axis") ? t.data("axis") : "y",
                      mouseWheel: { scrollAmount: 120, preventDefault: !0 },
                      setHeight: e.height || "",
                      theme: "minimal-dark",
                  }));
        },
        destroyScroller: function (t) {
            t.mCustomScrollbar("destroy"), t.removeClass("mCS_destroyed");
        },
        alert: function (t) {
            t = $.extend(
                !0,
                {
                    container: "",
                    place: "append",
                    type: "success",
                    message: "",
                    close: !0,
                    reset: !0,
                    focus: !0,
                    closeInSeconds: 0,
                    icon: "",
                },
                t
            );
            var e = mUtil.getUniqueID("App_alert"),
                a =
                    '<div id="' +
                    e +
                    '" class="custom-alerts alert alert-' +
                    t.type +
                    ' fade in">' +
                    (t.close
                        ? '<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>'
                        : "") +
                    ("" !== t.icon
                        ? '<i class="fa-lg fa fa-' + t.icon + '"></i>  '
                        : "") +
                    t.message +
                    "</div>";
            return (
                t.reset && $(".custom-alerts").remove(),
                t.container
                    ? "append" == t.place
                        ? $(t.container).append(a)
                        : $(t.container).prepend(a)
                    : 1 === $(".page-fixed-main-content").size()
                    ? $(".page-fixed-main-content").prepend(a)
                    : (($("body").hasClass("page-container-bg-solid") ||
                          $("body").hasClass("page-content-white")) &&
                      0 === $(".page-head").size()
                          ? $(".page-title")
                          : 0 < $(".page-bar").size()
                          ? $(".page-bar")
                          : $(".page-breadcrumb, .breadcrumbs")
                      ).after(a),
                t.focus && mApp.scrollTo($("#" + e)),
                0 < t.closeInSeconds &&
                    setTimeout(function () {
                        $("#" + e).remove();
                    }, 1e3 * t.closeInSeconds),
                e
            );
        },
        block: function (t, e) {
            var a,
                n,
                o = $(t),
                i =
                    "spinner" ==
                    (e = $.extend(
                        !0,
                        {
                            opacity: 0.03,
                            overlayColor: "#000000",
                            state: "brand",
                            type: "loader",
                            size: "lg",
                            centerX: !0,
                            centerY: !0,
                            message: "",
                            shadow: !0,
                            width: "auto",
                        },
                        e
                    )).type
                        ? '<div class="m-spinner ' +
                          (a = e.skin ? "m-spinner--skin-" + e.skin : "") +
                          " " +
                          (n = e.state ? "m-spinner--" + e.state : "") +
                          '"></div'
                        : ((a = e.skin ? "m-loader--skin-" + e.skin : ""),
                          (n = e.state ? "m-loader--" + e.state : ""),
                          (size = e.size ? "m-loader--" + e.size : ""),
                          '<div class="m-loader ' +
                              a +
                              " " +
                              n +
                              " " +
                              size +
                              '"></div');
            e.message && 0 < e.message.length
                ? ((a =
                      "m-blockui " +
                      (!1 === e.shadow ? "m-blockui-no-shadow" : "")),
                  (html =
                      '<div class="' +
                      a +
                      '"><span>' +
                      e.message +
                      "</span><span>" +
                      i +
                      "</span></div>"),
                  (n = document.createElement("div")),
                  mUtil.get("body").prepend(n),
                  mUtil.addClass(n, a),
                  (o.innerHTML =
                      "<span>" + e.message + "</span><span>" + i + "</span>"),
                  (e.width = mUtil.actualWidth(n) + 10),
                  mUtil.remove(n),
                  "body" == t &&
                      (html =
                          '<div class="' +
                          a +
                          '" style="margin-left:-' +
                          e.width / 2 +
                          'px;"><span>' +
                          e.message +
                          "</span><span>" +
                          i +
                          "</span></div>"))
                : (html = i);
            e = {
                message: html,
                centerY: e.centerY,
                centerX: e.centerX,
                css: {
                    top: "30%",
                    left: "50%",
                    border: "0",
                    padding: "0",
                    backgroundColor: "none",
                    width: e.width,
                },
                overlayCSS: {
                    backgroundColor: e.overlayColor,
                    opacity: e.opacity,
                    cursor: "wait",
                    zIndex: "10",
                },
                onUnblock: function () {
                    o && (o.css("position", ""), o.css("zoom", ""));
                },
            };
            "body" == t
                ? ((e.css.top = "50%"), $.blockUI(e))
                : (o = $(t)).block(e);
        },
        unblock: function (t) {
            t && "body" != t ? $(t).unblock() : $.unblockUI();
        },
        blockPage: function (t) {
            return mApp.block("body", t);
        },
        unblockPage: function () {
            return mApp.unblock("body");
        },
        progress: function (t, e) {
            e =
                "m-loader m-loader--" +
                (e && e.skin ? e.skin : "light") +
                " m-loader--" +
                (e && e.alignment ? e.alignment : "right") +
                " m-loader--" +
                (e && e.size ? "m-spinner--" + e.size : "");
            mApp.unprogress(t),
                $(t).addClass(e),
                $(t).data("progress-classes", e);
        },
        unprogress: function (t) {
            $(t).removeClass($(t).data("progress-classes"));
        },
        getColor: function (t) {
            return r[t];
        },
    };
})();
$(document).ready(function () {
    mApp.init({});
}),
    this.Element &&
        (function (t) {
            t.matches =
                t.matches ||
                t.matchesSelector ||
                t.webkitMatchesSelector ||
                t.msMatchesSelector ||
                function (t) {
                    for (
                        var e = (
                                this.parentNode || this.document
                            ).querySelectorAll(t),
                            a = -1;
                        e[++a] && e[a] != this;

                    );
                    return !!e[a];
                };
        })(Element.prototype),
    this.Element &&
        (function (t) {
            t.closest =
                t.closest ||
                function (t) {
                    for (var e = this; e.matches && !e.matches(t); )
                        e = e.parentNode;
                    return e.matches ? e : null;
                };
        })(Element.prototype),
    this.Element &&
        (function (t) {
            t.matches =
                t.matches ||
                t.matchesSelector ||
                t.webkitMatchesSelector ||
                t.msMatchesSelector ||
                function (t) {
                    for (
                        var e = (
                                this.parentNode || this.document
                            ).querySelectorAll(t),
                            a = -1;
                        e[++a] && e[a] != this;

                    );
                    return !!e[a];
                };
        })(Element.prototype),
    (function () {
        for (
            var o = 0, t = ["webkit", "moz"], e = 0;
            e < t.length && !window.requestAnimationFrame;
            ++e
        )
            (window.requestAnimationFrame =
                window[t[e] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                    window[t[e] + "CancelAnimationFrame"] ||
                    window[t[e] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (t) {
                var e = new Date().getTime(),
                    a = Math.max(0, 16 - (e - o)),
                    n = window.setTimeout(function () {
                        t(e + a);
                    }, a);
                return (o = e + a), n;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (t) {
                    clearTimeout(t);
                });
    })(),
    [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(
        function (t) {
            t.hasOwnProperty("prepend") ||
                Object.defineProperty(t, "prepend", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        var t = Array.prototype.slice.call(arguments),
                            a = document.createDocumentFragment();
                        t.forEach(function (t) {
                            var e = t instanceof Node;
                            a.appendChild(
                                e ? t : document.createTextNode(String(t))
                            );
                        }),
                            this.insertBefore(a, this.firstChild);
                    },
                });
        }
    ),
    (window.mUtilElementDataStore = {}),
    (window.mUtilElementDataStoreID = 0),
    (window.mUtilDelegatedEventHandlers = {}),
    (window.noZensmooth = !0);
var mUtil = (function () {
    function e() {
        var t = !1;
        window.addEventListener("resize", function () {
            clearTimeout(t),
                (t = setTimeout(function () {
                    !(function () {
                        for (var t = 0; t < a.length; t++) a[t].call();
                    })();
                }, 250));
        });
    }
    var a = [],
        n = { sm: 544, md: 768, lg: 1024, xl: 1200 };
    return {
        init: function (t) {
            t && t.breakpoints && (n = t.breakpoints), e();
        },
        addResizeHandler: function (t) {
            a.push(t);
        },
        runResizeHandlers: function () {
            _runResizeHandlers();
        },
        getURLParam: function (t) {
            for (
                var e,
                    a = window.location.search.substring(1).split("&"),
                    n = 0;
                n < a.length;
                n++
            )
                if ((e = a[n].split("="))[0] == t) return unescape(e[1]);
            return null;
        },
        isMobileDevice: function () {
            return this.getViewPort().width < this.getBreakpoint("lg");
        },
        isDesktopDevice: function () {
            return !mUtil.isMobileDevice();
        },
        getViewPort: function () {
            var t = window,
                e = "inner";
            return (
                "innerWidth" in window ||
                    ((e = "client"),
                    (t = document.documentElement || document.body)),
                { width: t[e + "Width"], height: t[e + "Height"] }
            );
        },
        isInResponsiveRange: function (t) {
            var e = this.getViewPort().width;
            return (
                "general" == t ||
                ("desktop" == t && e >= this.getBreakpoint("lg") + 1) ||
                ("tablet" == t &&
                    e >= this.getBreakpoint("md") + 1 &&
                    e < this.getBreakpoint("lg")) ||
                ("mobile" == t && e <= this.getBreakpoint("md")) ||
                ("desktop-and-tablet" == t &&
                    e >= this.getBreakpoint("md") + 1) ||
                ("tablet-and-mobile" == t && e <= this.getBreakpoint("lg")) ||
                ("minimal-desktop-and-below" == t &&
                    e <= this.getBreakpoint("xl"))
            );
        },
        getUniqueID: function (t) {
            return t + Math.floor(Math.random() * new Date().getTime());
        },
        getBreakpoint: function (t) {
            return n[t];
        },
        isset: function (t, e) {
            var a;
            if (-1 !== (e = e || "").indexOf("["))
                throw new Error("Unsupported object path notation.");
            e = e.split(".");
            do {
                if (void 0 === t) return !1;
                if (((a = e.shift()), !t.hasOwnProperty(a))) return !1;
            } while (((t = t[a]), e.length));
            return !0;
        },
        getHighestZindex: function (t) {
            for (var e, a, n = mUtil.get(t); n && n !== document; ) {
                if (
                    ("absolute" === (e = mUtil.css(n, "position")) ||
                        "relative" === e ||
                        "fixed" === e) &&
                    ((a = parseInt(mUtil.css(n, "z-index"))),
                    !isNaN(a) && 0 !== a)
                )
                    return a;
                n = n.parentNode;
            }
            return null;
        },
        hasFixedPositionedParent: function (t) {
            for (; t && t !== document; ) {
                if (
                    ((position = mUtil.css(t, "position")),
                    "fixed" === position)
                )
                    return !0;
                t = t.parentNode;
            }
            return !1;
        },
        sleep: function (t) {
            for (
                var e = new Date().getTime(), a = 0;
                a < 1e7 && !(new Date().getTime() - e > t);
                a++
            );
        },
        getRandomInt: function (t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t;
        },
        isAngularVersion: function () {
            return void 0 !== window.Zone;
        },
        deepExtend: function (t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e];
                if (a)
                    for (var n in a)
                        a.hasOwnProperty(n) &&
                            ("object" == typeof a[n]
                                ? (t[n] = mUtil.deepExtend(t[n], a[n]))
                                : (t[n] = a[n]));
            }
            return t;
        },
        extend: function (t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var a in arguments[e])
                        arguments[e].hasOwnProperty(a) &&
                            (t[a] = arguments[e][a]);
            return t;
        },
        get: function (t) {
            var e;
            return t === document
                ? document
                : t && 1 === t.nodeType
                ? t
                : (e = document.getElementById(t))
                ? e
                : (e = document.getElementsByTagName(t)) ||
                  (e = document.getElementsByClassName(t))
                ? e[0]
                : null;
        },
        hasClasses: function (t, e) {
            if (t) {
                for (var a = e.split(" "), n = 0; n < a.length; n++)
                    if (0 == mUtil.hasClass(t, mUtil.trim(a[n]))) return !1;
                return !0;
            }
        },
        hasClass: function (t, e) {
            if (t)
                return t.classList
                    ? t.classList.contains(e)
                    : new RegExp("\\b" + e + "\\b").test(t.className);
        },
        addClass: function (t, e) {
            if (t && void 0 !== e) {
                var a = e.split(" ");
                if (t.classList)
                    for (var n = 0; n < a.length; n++)
                        a[n] &&
                            0 < a[n].length &&
                            t.classList.add(mUtil.trim(a[n]));
                else if (!mUtil.hasClass(t, e))
                    for (n = 0; n < a.length; n++)
                        t.className += " " + mUtil.trim(a[n]);
            }
        },
        removeClass: function (t, e) {
            if (t) {
                var a = e.split(" ");
                if (t.classList)
                    for (var n = 0; n < a.length; n++)
                        t.classList.remove(mUtil.trim(a[n]));
                else if (mUtil.hasClass(t, e))
                    for (n = 0; n < a.length; n++)
                        t.className = t.className.replace(
                            new RegExp("\\b" + mUtil.trim(a[n]) + "\\b", "g"),
                            ""
                        );
            }
        },
        triggerCustomEvent: function (t, e, a) {
            var n;
            window.CustomEvent
                ? (n = new CustomEvent(e, { detail: a }))
                : (n = document.createEvent("CustomEvent")).initCustomEvent(
                      e,
                      !0,
                      !0,
                      a
                  ),
                t.dispatchEvent(n);
        },
        trim: function (t) {
            return t.trim();
        },
        eventTriggered: function (t) {
            return (
                !!t.currentTarget.dataset.triggered ||
                !(t.currentTarget.dataset.triggered = !0)
            );
        },
        remove: function (t) {
            t && t.parentNode && t.parentNode.removeChild(t);
        },
        find: function (t, e) {
            return t.querySelector(e);
        },
        findAll: function (t, e) {
            return t.querySelectorAll(e);
        },
        insertAfter: function (t, e) {
            return e.parentNode.insertBefore(t, e.nextSibling);
        },
        parents: function (t, e) {
            return (function (t, e) {
                for (
                    var a = document.querySelectorAll(e), n = t.parentNode;
                    n &&
                    !(function (t, e) {
                        for (var a = 0, n = t.length; a < n; a++)
                            if (t[a] == e) return 1;
                    })(a, n);

                )
                    n = n.parentNode;
                return n;
            })(t, e);
        },
        children: function (t, e, a) {
            if (t && t.childNodes) {
                for (var n = [], o = 0, i = t.childNodes.length; o < i; ++o)
                    1 == t.childNodes[o].nodeType &&
                        mUtil.matches(t.childNodes[o], e, a) &&
                        n.push(t.childNodes[o]);
                return n;
            }
        },
        child: function (t, e, a) {
            a = mUtil.children(t, e, a);
            return a ? a[0] : null;
        },
        matches: function (t, e, a) {
            var n = Element.prototype,
                n =
                    n.matches ||
                    n.webkitMatchesSelector ||
                    n.mozMatchesSelector ||
                    n.msMatchesSelector ||
                    function (t) {
                        return (
                            -1 !==
                            [].indexOf.call(document.querySelectorAll(t), this)
                        );
                    };
            return !(!t || !t.tagName) && n.call(t, e);
        },
        data: function (a) {
            return (
                (a = mUtil.get(a)),
                {
                    set: function (t, e) {
                        void 0 === a.customDataTag &&
                            (mUtilElementDataStoreID++,
                            (a.customDataTag = mUtilElementDataStoreID)),
                            void 0 === mUtilElementDataStore[a.customDataTag] &&
                                (mUtilElementDataStore[a.customDataTag] = {}),
                            (mUtilElementDataStore[a.customDataTag][t] = e);
                    },
                    get: function (t) {
                        return this.has(t)
                            ? mUtilElementDataStore[a.customDataTag][t]
                            : null;
                    },
                    has: function (t) {
                        return !(
                            !mUtilElementDataStore[a.customDataTag] ||
                            !mUtilElementDataStore[a.customDataTag][t]
                        );
                    },
                    remove: function (t) {
                        this.has(t) &&
                            delete mUtilElementDataStore[a.customDataTag][t];
                    },
                }
            );
        },
        outerWidth: function (t, e) {
            if (!0 !== e) return (a = parseFloat(t.offsetWidth));
            var a = parseFloat(t.offsetWidth);
            return (
                (a +=
                    parseFloat(mUtil.css(t, "margin-left")) +
                    parseFloat(mUtil.css(t, "margin-right"))),
                parseFloat(a)
            );
        },
        offset: function (t) {
            t = t.getBoundingClientRect();
            return {
                top: t.top + document.body.scrollTop,
                left: t.left + document.body.scrollLeft,
            };
        },
        height: function (t) {
            return mUtil.css(t, "height");
        },
        visible: function (t) {
            return !(0 === t.offsetWidth && 0 === t.offsetHeight);
        },
        attr: function (t, e, a) {
            if (null != (t = mUtil.get(t)))
                return void 0 === a
                    ? t.getAttribute(e)
                    : void t.setAttribute(e, a);
        },
        hasAttr: function (t, e) {
            if (null != (t = mUtil.get(t))) return !!t.getAttribute(e);
        },
        removeAttr: function (t, e) {
            null != (t = mUtil.get(t)) && t.removeAttribute(e);
        },
        animate: function (a, n, o, i, l, r) {
            var s,
                d,
                c,
                t = {
                    linear: function (t, e, a, n) {
                        return (a * t) / n + e;
                    },
                };
            "number" == typeof a &&
                "number" == typeof n &&
                "number" == typeof o &&
                "function" == typeof i &&
                ("function" !=
                    typeof (l = "string" == typeof l && t[l] ? t[l] : l) &&
                    (l = t.linear),
                "function" != typeof r && (r = function () {}),
                (s =
                    window.requestAnimationFrame ||
                    function (t) {
                        window.setTimeout(t, 1e3 / 60);
                    }),
                (d = n - a),
                i(a),
                (c =
                    window.performance && window.performance.now
                        ? window.performance.now()
                        : +new Date()),
                s(function t(e) {
                    e = (e || +new Date()) - c;
                    0 <= e && i(l(e, a, d, o)),
                        0 <= e && o <= e ? (i(n), r()) : s(t);
                }));
        },
        actualCss: function (t, e, a) {
            var n;
            if (t instanceof HTMLElement != !1)
                return t.getAttribute("m-hidden-" + e) && !1 !== a
                    ? parseFloat(t.getAttribute("m-hidden-" + e))
                    : ((t.style.cssText =
                          "position: absolute; visibility: hidden; display: block;"),
                      "width" == e
                          ? (n = t.offsetWidth)
                          : "height" == e && (n = t.offsetHeight),
                      (t.style.cssText = ""),
                      t.setAttribute("m-hidden-" + e, n),
                      parseFloat(n));
        },
        actualHeight: function (t, e) {
            return mUtil.actualCss(t, "height", e);
        },
        actualWidth: function (t, e) {
            return mUtil.actualCss(t, "width", e);
        },
        getScroll: function (t, e) {
            return (
                (e = "scroll" + e),
                t == window || t == document
                    ? self["scrollTop" == e ? "pageYOffset" : "pageXOffset"] ||
                      (browserSupportsBoxModel &&
                          document.documentElement[e]) ||
                      document.body[e]
                    : t[e]
            );
        },
        css: function (t, e, a) {
            if (((t = mUtil.get(t)), void 0 === a)) {
                var n = (t.ownerDocument || document).defaultView;
                return n && n.getComputedStyle
                    ? ((e = e.replace(/([A-Z])/g, "-$1").toLowerCase()),
                      n.getComputedStyle(t, null).getPropertyValue(e))
                    : t.currentStyle
                    ? ((e = e.replace(/\-(\w)/g, function (t, e) {
                          return e.toUpperCase();
                      })),
                      (a = t.currentStyle[e]),
                      /^\d+(em|pt|%|ex)?$/i.test(a)
                          ? ((o = a),
                            (i = t.style.left),
                            (n = t.runtimeStyle.left),
                            (t.runtimeStyle.left = t.currentStyle.left),
                            (t.style.left = o || 0),
                            (o = t.style.pixelLeft + "px"),
                            (t.style.left = i),
                            (t.runtimeStyle.left = n),
                            o)
                          : a)
                    : void 0;
            }
            var o, i;
            t.style[e] = a;
        },
        slide: function (e, t, a, n, o) {
            var i, l, r;
            !e ||
                ("up" == t && !1 === mUtil.visible(e)) ||
                ("down" == t && !0 === mUtil.visible(e)) ||
                ((a = a || 600),
                (i = mUtil.actualHeight(e)),
                (r = l = !1),
                mUtil.css(e, "padding-top") &&
                    !0 !== mUtil.data(e).has("slide-padding-top") &&
                    mUtil
                        .data(e)
                        .set("slide-padding-top", mUtil.css(e, "padding-top")),
                mUtil.css(e, "padding-bottom") &&
                    !0 !== mUtil.data(e).has("slide-padding-bottom") &&
                    mUtil
                        .data(e)
                        .set(
                            "slide-padding-bottom",
                            mUtil.css(e, "padding-bottom")
                        ),
                mUtil.data(e).has("slide-padding-top") &&
                    (l = parseInt(mUtil.data(e).get("slide-padding-top"))),
                mUtil.data(e).has("slide-padding-bottom") &&
                    (r = parseInt(mUtil.data(e).get("slide-padding-bottom"))),
                "up" == t
                    ? ((e.style.cssText = "display: block; overflow: hidden;"),
                      l &&
                          mUtil.animate(
                              0,
                              l,
                              a,
                              function (t) {
                                  e.style.paddingTop = l - t + "px";
                              },
                              "linear"
                          ),
                      r &&
                          mUtil.animate(
                              0,
                              r,
                              a,
                              function (t) {
                                  e.style.paddingBottom = r - t + "px";
                              },
                              "linear"
                          ),
                      mUtil.animate(
                          0,
                          i,
                          a,
                          function (t) {
                              e.style.height = i - t + "px";
                          },
                          "linear",
                          function () {
                              n(),
                                  (e.style.height = ""),
                                  (e.style.display = "none");
                          }
                      ))
                    : "down" == t &&
                      ((e.style.cssText = "display: block; overflow: hidden;"),
                      l &&
                          mUtil.animate(
                              0,
                              l,
                              a,
                              function (t) {
                                  e.style.paddingTop = t + "px";
                              },
                              "linear",
                              function () {
                                  e.style.paddingTop = "";
                              }
                          ),
                      r &&
                          mUtil.animate(
                              0,
                              r,
                              a,
                              function (t) {
                                  e.style.paddingBottom = t + "px";
                              },
                              "linear",
                              function () {
                                  e.style.paddingBottom = "";
                              }
                          ),
                      mUtil.animate(
                          0,
                          i,
                          a,
                          function (t) {
                              e.style.height = t + "px";
                          },
                          "linear",
                          function () {
                              n(),
                                  (e.style.height = ""),
                                  (e.style.display = ""),
                                  (e.style.overflow = "");
                          }
                      )));
        },
        slideUp: function (t, e, a) {
            mUtil.slide(t, "up", e, a);
        },
        slideDown: function (t, e, a) {
            mUtil.slide(t, "down", e, a);
        },
        show: function (t, e) {
            t.style.display = e || "block";
        },
        hide: function (t) {
            t.style.display = "none";
        },
        addEvent: function (t, e, a, n) {
            void 0 !== (t = mUtil.get(t)) && t.addEventListener(e, a);
        },
        removeEvent: function (t, e, a) {
            (t = mUtil.get(t)).removeEventListener(e, a);
        },
        on: function (i, l, t, r) {
            if (l) {
                var e = mUtil.getUniqueID("event");
                return (
                    (mUtilDelegatedEventHandlers[e] = function (t) {
                        for (
                            var e = i.querySelectorAll(l), a = t.target;
                            a && a !== i;

                        ) {
                            for (var n = 0, o = e.length; n < o; n++)
                                a === e[n] && r.call(a, t);
                            a = a.parentNode;
                        }
                    }),
                    mUtil.addEvent(i, t, mUtilDelegatedEventHandlers[e]),
                    e
                );
            }
        },
        off: function (t, e, a) {
            t &&
                mUtilDelegatedEventHandlers[a] &&
                (mUtil.removeEvent(t, e, mUtilDelegatedEventHandlers[a]),
                delete mUtilDelegatedEventHandlers[a]);
        },
        one: function (t, e, a) {
            (t = mUtil.get(t)).addEventListener(e, function (t) {
                return (
                    t.target.removeEventListener(t.type, arguments.callee), a(t)
                );
            });
        },
        hash: function (t) {
            var e,
                a = 0;
            if (0 === t.length) return a;
            for (e = 0; e < t.length; e++)
                (a = (a << 5) - a + t.charCodeAt(e)), (a |= 0);
            return a;
        },
        animateClass: function (t, e, a) {
            mUtil.addClass(t, "animated " + e),
                mUtil.one(
                    t,
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        mUtil.removeClass(t, "animated " + e);
                    }
                ),
                a && mUtil.one(t.animationEnd, a);
        },
        animateDelay: function (t, e) {
            for (
                var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0;
                n < a.length;
                n++
            )
                mUtil.css(t, a[n] + "animation-delay", e);
        },
        animateDuration: function (t, e) {
            for (
                var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0;
                n < a.length;
                n++
            )
                mUtil.css(t, a[n] + "animation-duration", e);
        },
        scrollTo: function (t, e, a) {
            (a = a || 600), zenscroll.toY(t, a);
        },
        scrollToViewport: function (t, e) {
            (e = e || 1200), zenscroll.intoView(t, e);
        },
        scrollToCenter: function (t, e) {
            (e = e || 1200), zenscroll.center(t, e);
        },
        scrollTop: function (t) {
            (t = t || 600), zenscroll.toY(0, t);
        },
        isArray: function (t) {
            return t && Array.isArray(t);
        },
        ready: function (t) {
            (
                document.attachEvent
                    ? "complete" === document.readyState
                    : "loading" !== document.readyState
            )
                ? t()
                : document.addEventListener("DOMContentLoaded", t);
        },
        isEmpty: function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
        },
    };
})();
mUtil.ready(function () {
    mUtil.init();
}),
    (function (f) {
        if (void 0 === mUtil)
            throw new Error(
                "mUtil is required and must be included before mDatatable."
            );
        (f.fn.mDatatable = function (m) {
            if (0 !== f(this).length) {
                var u = this;
                u.debug = !1;
                var t,
                    p = {
                        isInit: !(u.API = {
                            record: null,
                            value: null,
                            params: null,
                        }),
                        offset: 110,
                        stateId: "meta",
                        ajaxParams: {},
                        init: function (t) {
                            var e = !1;
                            return (
                                null === t.data.source &&
                                    (p.extractTable(), (e = !0)),
                                p.setupBaseDOM.call(),
                                p.setupDOM(u.table),
                                p.spinnerCallback(!0),
                                p.setDataSourceQuery(
                                    p.getOption("data.source.read.params.query")
                                ),
                                f(u).on(
                                    "m-datatable--on-layout-updated",
                                    p.afterRender
                                ),
                                u.debug && p.stateRemove(p.stateId),
                                f.each(
                                    p.getOption("extensions"),
                                    function (t, e) {
                                        "function" ==
                                            typeof f.fn.mDatatable[t] &&
                                            new f.fn.mDatatable[t](u, e);
                                    }
                                ),
                                ("remote" !== t.data.type &&
                                    "local" !== t.data.type) ||
                                    ((!1 === t.data.saveState ||
                                        (!1 === t.data.saveState.cookie &&
                                            !1 ===
                                                t.data.saveState.webstorage)) &&
                                        p.stateRemove(p.stateId),
                                    "local" === t.data.type &&
                                        "object" == typeof t.data.source &&
                                        (u.dataSet = u.originalDataSet =
                                            p.dataMapCallback(t.data.source)),
                                    p.dataRender()),
                                e ||
                                    (p.setHeadTitle(),
                                    p.getOption("layout.footer") &&
                                        p.setHeadTitle(u.tableFoot)),
                                void 0 !== t.layout.header &&
                                    !1 === t.layout.header &&
                                    f(u.table).find("thead").remove(),
                                void 0 !== t.layout.footer &&
                                    !1 === t.layout.footer &&
                                    f(u.table).find("tfoot").remove(),
                                (null !== t.data.type &&
                                    "local" !== t.data.type) ||
                                    (p.setupCellField.call(),
                                    p.setupTemplateCell.call(),
                                    p.setupSubDatatable.call(),
                                    p.setupSystemColumn.call(),
                                    p.redraw()),
                                f(window).resize(p.fullRender),
                                f(u).height(""),
                                f(p.getOption("search.input")).on(
                                    "keyup",
                                    function (t) {
                                        (p.getOption("search.onEnter") &&
                                            13 !== t.which) ||
                                            p.search(f(this).val());
                                    }
                                ),
                                u
                            );
                        },
                        extractTable: function () {
                            var i = [],
                                n = f(u)
                                    .find("tr:first-child th")
                                    .get()
                                    .map(function (t, e) {
                                        var a,
                                            n = f(t).data("field"),
                                            o = {
                                                field: (n =
                                                    void 0 === n
                                                        ? f(t).text().trim()
                                                        : n),
                                                title: n,
                                            };
                                        for (a in m.columns)
                                            m.columns[a].field === n &&
                                                (o = f.extend(
                                                    !0,
                                                    {},
                                                    m.columns[a],
                                                    o
                                                ));
                                        return i.push(o), n;
                                    });
                            m.columns = i;
                            var t = [],
                                e = [];
                            f(u)
                                .find("tr")
                                .each(function () {
                                    f(this).find("td").length &&
                                        t.push(f(this).prop("attributes"));
                                    var a = {};
                                    f(this)
                                        .find("td")
                                        .each(function (t, e) {
                                            a[n[t]] = e.innerHTML.trim();
                                        }),
                                        mUtil.isEmpty(a) || e.push(a);
                                }),
                                (m.data.attr.rowProps = t),
                                (m.data.source = e);
                        },
                        layoutUpdate: function () {
                            p.setupSubDatatable.call(),
                                p.setupSystemColumn.call(),
                                p.setupHover.call(),
                                void 0 === m.detail &&
                                    1 === p.getDepth() &&
                                    p.lockTable.call(),
                                p.columnHide.call(),
                                p.resetScroll(),
                                p.isInit ||
                                    (f(u).trigger("m-datatable--on-init", {
                                        table: f(u.wrap).attr("id"),
                                        options: m,
                                    }),
                                    (p.isInit = !0)),
                                f(u).trigger("m-datatable--on-layout-updated", {
                                    table: f(u.wrap).attr("id"),
                                });
                        },
                        lockTable: function () {
                            var a = {
                                lockEnabled: !1,
                                init: function () {
                                    (a.lockEnabled = p.lockEnabledColumns()),
                                        (0 === a.lockEnabled.left.length &&
                                            0 === a.lockEnabled.right.length) ||
                                            a.enable();
                                },
                                enable: function () {
                                    f(u.table)
                                        .find("thead,tbody,tfoot")
                                        .each(function () {
                                            var e = this;
                                            0 ===
                                                f(this).find(
                                                    ".m-datatable__lock"
                                                ).length &&
                                                f(this).ready(function () {
                                                    var t, o, i, l;
                                                    0 <
                                                    f((t = e)).find(
                                                        ".m-datatable__lock"
                                                    ).length
                                                        ? p.log(
                                                              "Locked container already exist in: ",
                                                              t
                                                          )
                                                        : 0 !==
                                                          f(t).find(
                                                              ".m-datatable__row"
                                                          ).length
                                                        ? ((o = f(
                                                              "<div/>"
                                                          ).addClass(
                                                              "m-datatable__lock m-datatable__lock--left"
                                                          )),
                                                          (i = f(
                                                              "<div/>"
                                                          ).addClass(
                                                              "m-datatable__lock m-datatable__lock--scroll"
                                                          )),
                                                          (l = f(
                                                              "<div/>"
                                                          ).addClass(
                                                              "m-datatable__lock m-datatable__lock--right"
                                                          )),
                                                          f(t)
                                                              .find(
                                                                  ".m-datatable__row"
                                                              )
                                                              .each(
                                                                  function () {
                                                                      var e = f(
                                                                              "<tr/>"
                                                                          )
                                                                              .addClass(
                                                                                  "m-datatable__row"
                                                                              )
                                                                              .appendTo(
                                                                                  o
                                                                              ),
                                                                          a = f(
                                                                              "<tr/>"
                                                                          )
                                                                              .addClass(
                                                                                  "m-datatable__row"
                                                                              )
                                                                              .appendTo(
                                                                                  i
                                                                              ),
                                                                          n = f(
                                                                              "<tr/>"
                                                                          )
                                                                              .addClass(
                                                                                  "m-datatable__row"
                                                                              )
                                                                              .appendTo(
                                                                                  l
                                                                              );
                                                                      f(this)
                                                                          .find(
                                                                              ".m-datatable__cell"
                                                                          )
                                                                          .each(
                                                                              function () {
                                                                                  var t =
                                                                                      f(
                                                                                          this
                                                                                      ).data(
                                                                                          "locked"
                                                                                      );
                                                                                  void 0 !==
                                                                                  t
                                                                                      ? ((void 0 ===
                                                                                            t.left &&
                                                                                            !0 !==
                                                                                                t) ||
                                                                                            f(
                                                                                                this
                                                                                            ).appendTo(
                                                                                                e
                                                                                            ),
                                                                                        void 0 !==
                                                                                            t.right &&
                                                                                            f(
                                                                                                this
                                                                                            ).appendTo(
                                                                                                n
                                                                                            ))
                                                                                      : f(
                                                                                            this
                                                                                        ).appendTo(
                                                                                            a
                                                                                        );
                                                                              }
                                                                          ),
                                                                          f(
                                                                              this
                                                                          ).remove();
                                                                  }
                                                              ),
                                                          0 <
                                                              a.lockEnabled.left
                                                                  .length &&
                                                              (f(
                                                                  u.wrap
                                                              ).addClass(
                                                                  "m-datatable--lock"
                                                              ),
                                                              f(o).appendTo(t)),
                                                          (0 <
                                                              a.lockEnabled.left
                                                                  .length ||
                                                              0 <
                                                                  a.lockEnabled
                                                                      .right
                                                                      .length) &&
                                                              f(i).appendTo(t),
                                                          0 <
                                                              a.lockEnabled
                                                                  .right
                                                                  .length &&
                                                              (f(
                                                                  u.wrap
                                                              ).addClass(
                                                                  "m-datatable--lock"
                                                              ),
                                                              f(l).appendTo(t)))
                                                        : p.log(
                                                              "No row exist in: ",
                                                              t
                                                          );
                                                });
                                        });
                                },
                            };
                            return a.init(), a;
                        },
                        fullRender: function () {
                            p.spinnerCallback(!0),
                                f(u.wrap).removeClass("m-datatable--loaded"),
                                p.insertData();
                        },
                        lockEnabledColumns: function () {
                            var a = f(window).width(),
                                t = m.columns,
                                n = { left: [], right: [] };
                            return (
                                f.each(t, function (t, e) {
                                    void 0 !== e.locked &&
                                        (void 0 !== e.locked.left &&
                                            mUtil.getBreakpoint(
                                                e.locked.left
                                            ) <= a &&
                                            n.left.push(e.locked.left),
                                        void 0 !== e.locked.right &&
                                            mUtil.getBreakpoint(
                                                e.locked.right
                                            ) <= a &&
                                            n.right.push(e.locked.right));
                                }),
                                n
                            );
                        },
                        afterRender: function (t, e) {
                            e.table == f(u.wrap).attr("id") &&
                                f(u).ready(function () {
                                    p.isLocked() ||
                                        (p.redraw(),
                                        p.getOption("rows.autoHide") &&
                                            (p.autoHide(),
                                            f(u.table)
                                                .find(".m-datatable__row")
                                                .css("height", ""))),
                                        f(u.tableBody)
                                            .find(".m-datatable__row")
                                            .removeClass(
                                                "m-datatable__row--even"
                                            ),
                                        (f(u.wrap).hasClass(
                                            "m-datatable--subtable"
                                        )
                                            ? f(u.tableBody).find(
                                                  ".m-datatable__row:not(.m-datatable__row-detail):even"
                                              )
                                            : f(u.tableBody).find(
                                                  ".m-datatable__row:nth-child(even)"
                                              )
                                        ).addClass("m-datatable__row--even"),
                                        p.isLocked() && p.redraw(),
                                        f(u.tableBody).css("visibility", ""),
                                        f(u.wrap).addClass(
                                            "m-datatable--loaded"
                                        ),
                                        p.scrollbar.call(),
                                        p.sorting.call(),
                                        p.spinnerCallback(!1);
                                });
                        },
                        hoverTimer: 0,
                        isScrolling: !1,
                        setupHover: function () {
                            f(window).scroll(function (t) {
                                clearTimeout(p.hoverTimer),
                                    (p.isScrolling = !0);
                            }),
                                f(u.tableBody)
                                    .find(".m-datatable__cell")
                                    .off("mouseenter", "mouseleave")
                                    .on("mouseenter", function () {
                                        var t, e;
                                        (p.hoverTimer = setTimeout(function () {
                                            p.isScrolling = !1;
                                        }, 200)),
                                            p.isScrolling ||
                                                ((t = f(this)
                                                    .closest(
                                                        ".m-datatable__row"
                                                    )
                                                    .addClass(
                                                        "m-datatable__row--hover"
                                                    )),
                                                (e = f(t).index() + 1),
                                                f(t)
                                                    .closest(
                                                        ".m-datatable__lock"
                                                    )
                                                    .parent()
                                                    .find(
                                                        ".m-datatable__row:nth-child(" +
                                                            e +
                                                            ")"
                                                    )
                                                    .addClass(
                                                        "m-datatable__row--hover"
                                                    ));
                                    })
                                    .on("mouseleave", function () {
                                        var t = f(this)
                                                .closest(".m-datatable__row")
                                                .removeClass(
                                                    "m-datatable__row--hover"
                                                ),
                                            e = f(t).index() + 1;
                                        f(t)
                                            .closest(".m-datatable__lock")
                                            .parent()
                                            .find(
                                                ".m-datatable__row:nth-child(" +
                                                    e +
                                                    ")"
                                            )
                                            .removeClass(
                                                "m-datatable__row--hover"
                                            );
                                    });
                        },
                        adjustLockContainer: function () {
                            if (!p.isLocked()) return 0;
                            var t = f(u.tableHead).width(),
                                e = f(u.tableHead)
                                    .find(".m-datatable__lock--left")
                                    .width(),
                                a = f(u.tableHead)
                                    .find(".m-datatable__lock--right")
                                    .width();
                            void 0 === e && (e = 0), void 0 === a && (a = 0);
                            a = Math.floor(t - e - a);
                            return (
                                f(u.table)
                                    .find(".m-datatable__lock--scroll")
                                    .css("width", a),
                                a
                            );
                        },
                        dragResize: function () {
                            var o,
                                i,
                                l = !1,
                                r = void 0;
                            f(u.tableHead)
                                .find(".m-datatable__cell")
                                .mousedown(function (t) {
                                    (r = f(this)),
                                        (l = !0),
                                        (o = t.pageX),
                                        (i = f(this).width()),
                                        f(r).addClass(
                                            "m-datatable__cell--resizing"
                                        );
                                })
                                .mousemove(function (a) {
                                    var n, t, e;
                                    l &&
                                        ((n = f(r).index()),
                                        (e = f(u.tableBody)),
                                        (t =
                                            f(r).closest(
                                                ".m-datatable__lock"
                                            )) &&
                                            ((t = f(t).index()),
                                            (e = f(u.tableBody)
                                                .find(".m-datatable__lock")
                                                .eq(t))),
                                        f(e)
                                            .find(".m-datatable__row")
                                            .each(function (t, e) {
                                                f(e)
                                                    .find(".m-datatable__cell")
                                                    .eq(n)
                                                    .width(i + (a.pageX - o))
                                                    .children()
                                                    .width(i + (a.pageX - o));
                                            }),
                                        f(r)
                                            .children()
                                            .css("width", i + (a.pageX - o)));
                                })
                                .mouseup(function () {
                                    f(r).removeClass(
                                        "m-datatable__cell--resizing"
                                    ),
                                        (l = !1);
                                }),
                                f(document).mouseup(function () {
                                    f(r).removeClass(
                                        "m-datatable__cell--resizing"
                                    ),
                                        (l = !1);
                                });
                        },
                        initHeight: function () {
                            var t, e, a;
                            m.layout.height &&
                                m.layout.scroll &&
                                ((t = f(u.tableHead)
                                    .find(".m-datatable__row")
                                    .height()),
                                (e = f(u.tableFoot)
                                    .find(".m-datatable__row")
                                    .height()),
                                (a = m.layout.height),
                                0 < t && (a -= t),
                                0 < e && (a -= e),
                                f(u.tableBody).css("max-height", a));
                        },
                        setupBaseDOM: function () {
                            (u.initialDatatable = f(u).clone()),
                                "TABLE" === f(u).prop("tagName")
                                    ? ((u.table = f(u)
                                          .removeClass("m-datatable")
                                          .addClass("m-datatable__table")),
                                      0 ===
                                          f(u.table).parents(".m-datatable")
                                              .length &&
                                          (u.table.wrap(
                                              f("<div/>")
                                                  .addClass("m-datatable")
                                                  .addClass(
                                                      "m-datatable--" +
                                                          m.layout.theme
                                                  )
                                          ),
                                          (u.wrap = f(u.table).parent())))
                                    : ((u.wrap = f(u)
                                          .addClass("m-datatable")
                                          .addClass(
                                              "m-datatable--" + m.layout.theme
                                          )),
                                      (u.table = f("<table/>")
                                          .addClass("m-datatable__table")
                                          .appendTo(u))),
                                void 0 !== m.layout.class &&
                                    f(u.wrap).addClass(m.layout.class),
                                f(u.table)
                                    .removeClass("m-datatable--destroyed")
                                    .css("display", "block"),
                                void 0 === f(u).attr("id") &&
                                    (p.setOption("data.saveState", !1),
                                    f(u.table).attr(
                                        "id",
                                        mUtil.getUniqueID("m-datatable--")
                                    )),
                                p.getOption("layout.minHeight") &&
                                    f(u.table).css(
                                        "min-height",
                                        p.getOption("layout.minHeight")
                                    ),
                                p.getOption("layout.height") &&
                                    f(u.table).css(
                                        "max-height",
                                        p.getOption("layout.height")
                                    ),
                                null === m.data.type &&
                                    f(u.table)
                                        .css("width", "")
                                        .css("display", ""),
                                (u.tableHead = f(u.table).find("thead")),
                                0 === f(u.tableHead).length &&
                                    (u.tableHead = f("<thead/>").prependTo(
                                        u.table
                                    )),
                                (u.tableBody = f(u.table).find("tbody")),
                                0 === f(u.tableBody).length &&
                                    (u.tableBody = f("<tbody/>").appendTo(
                                        u.table
                                    )),
                                void 0 !== m.layout.footer &&
                                    m.layout.footer &&
                                    ((u.tableFoot = f(u.table).find("tfoot")),
                                    0 === f(u.tableFoot).length &&
                                        (u.tableFoot = f("<tfoot/>").appendTo(
                                            u.table
                                        )));
                        },
                        setupCellField: function (t) {
                            void 0 === t && (t = f(u.table).children());
                            var a = m.columns;
                            f.each(t, function (t, e) {
                                f(e)
                                    .find(".m-datatable__row")
                                    .each(function (t, e) {
                                        f(e)
                                            .find(".m-datatable__cell")
                                            .each(function (t, e) {
                                                void 0 !== a[t] &&
                                                    f(e).data(a[t]);
                                            });
                                    });
                            });
                        },
                        setupTemplateCell: function (t) {
                            void 0 === t && (t = u.tableBody);
                            var r = m.columns;
                            f(t)
                                .find(".m-datatable__row")
                                .each(function (i, t) {
                                    var l = f(t).data("obj") || {},
                                        e = p.getOption("rows.callback");
                                    "function" == typeof e && e(f(t), l, i);
                                    e = p.getOption("rows.beforeTemplate");
                                    "function" == typeof e && e(f(t), l, i),
                                        void 0 === l &&
                                            ((l = {}),
                                            f(t)
                                                .find(".m-datatable__cell")
                                                .each(function (t, a) {
                                                    var e = f.grep(
                                                        r,
                                                        function (t, e) {
                                                            return (
                                                                f(a).data(
                                                                    "field"
                                                                ) === t.field
                                                            );
                                                        }
                                                    )[0];
                                                    void 0 !== e &&
                                                        (l[e.field] =
                                                            f(a).text());
                                                })),
                                        f(t)
                                            .find(".m-datatable__cell")
                                            .each(function (t, a) {
                                                var e,
                                                    n,
                                                    o = f.grep(
                                                        r,
                                                        function (t, e) {
                                                            return (
                                                                f(a).data(
                                                                    "field"
                                                                ) === t.field
                                                            );
                                                        }
                                                    )[0];
                                                void 0 !== o &&
                                                    void 0 !== o.template &&
                                                    ((e = ""),
                                                    "string" ==
                                                        typeof o.template &&
                                                        (e = p.dataPlaceholder(
                                                            o.template,
                                                            l
                                                        )),
                                                    "function" ==
                                                        typeof o.template &&
                                                        (e = o.template(
                                                            l,
                                                            i,
                                                            u
                                                        )),
                                                    ((n =
                                                        document.createElement(
                                                            "span"
                                                        )).innerHTML = e),
                                                    f(a).html(n),
                                                    void 0 !== o.overflow &&
                                                        (f(n).css(
                                                            "overflow",
                                                            o.overflow
                                                        ),
                                                        f(n).css(
                                                            "position",
                                                            "relative"
                                                        )));
                                            });
                                    e = p.getOption("rows.afterTemplate");
                                    "function" == typeof e && e(f(t), l, i);
                                });
                        },
                        setupSystemColumn: function () {
                            var i, t;
                            (u.dataSet = u.dataSet || []),
                                0 !== u.dataSet.length &&
                                    ((i = m.columns),
                                    f(u.tableBody)
                                        .find(".m-datatable__row")
                                        .each(function (t, e) {
                                            f(e)
                                                .find(".m-datatable__cell")
                                                .each(function (t, a) {
                                                    var e = f.grep(
                                                        i,
                                                        function (t, e) {
                                                            return (
                                                                f(a).data(
                                                                    "field"
                                                                ) === t.field
                                                            );
                                                        }
                                                    )[0];
                                                    if (void 0 !== e) {
                                                        var n = f(a).text();
                                                        if (
                                                            void 0 !==
                                                                e.selector &&
                                                            !1 !== e.selector
                                                        ) {
                                                            if (
                                                                0 <
                                                                f(a).find(
                                                                    '.m-checkbox [type="checkbox"]'
                                                                ).length
                                                            )
                                                                return;
                                                            f(a).addClass(
                                                                "m-datatable__cell--check"
                                                            );
                                                            var o = f(
                                                                "<label/>"
                                                            )
                                                                .addClass(
                                                                    "m-checkbox m-checkbox--single"
                                                                )
                                                                .append(
                                                                    f(
                                                                        "<input/>"
                                                                    )
                                                                        .attr(
                                                                            "type",
                                                                            "checkbox"
                                                                        )
                                                                        .attr(
                                                                            "value",
                                                                            n
                                                                        )
                                                                        .on(
                                                                            "click",
                                                                            function () {
                                                                                f(
                                                                                    this
                                                                                ).is(
                                                                                    ":checked"
                                                                                )
                                                                                    ? p.setActive(
                                                                                          this
                                                                                      )
                                                                                    : p.setInactive(
                                                                                          this
                                                                                      );
                                                                            }
                                                                        )
                                                                )
                                                                .append(
                                                                    f("<span/>")
                                                                );
                                                            void 0 !==
                                                                e.selector
                                                                    .class &&
                                                                f(o).addClass(
                                                                    e.selector
                                                                        .class
                                                                ),
                                                                f(a)
                                                                    .children()
                                                                    .html(o);
                                                        }
                                                        void 0 !== e.subtable &&
                                                            e.subtable &&
                                                            (0 <
                                                                f(a).find(
                                                                    ".m-datatable__toggle-subtable"
                                                                ).length ||
                                                                f(a)
                                                                    .children()
                                                                    .html(
                                                                        f(
                                                                            "<a/>"
                                                                        )
                                                                            .addClass(
                                                                                "m-datatable__toggle-subtable"
                                                                            )
                                                                            .attr(
                                                                                "href",
                                                                                "#"
                                                                            )
                                                                            .attr(
                                                                                "data-value",
                                                                                n
                                                                            )
                                                                            .append(
                                                                                f(
                                                                                    "<i/>"
                                                                                ).addClass(
                                                                                    p.getOption(
                                                                                        "layout.icons.rowDetail.collapse"
                                                                                    )
                                                                                )
                                                                            )
                                                                    ));
                                                    }
                                                });
                                        }),
                                    (t = function (t) {
                                        var e,
                                            a = f.grep(i, function (t, e) {
                                                return (
                                                    void 0 !== t.selector &&
                                                    !1 !== t.selector
                                                );
                                            })[0];
                                        void 0 !== a &&
                                            void 0 !== a.selector &&
                                            !1 !== a.selector &&
                                            ((e = f(t).find(
                                                '[data-field="' + a.field + '"]'
                                            )),
                                            0 <
                                                f(e).find(
                                                    '.m-checkbox [type="checkbox"]'
                                                ).length ||
                                                (f(e).addClass(
                                                    "m-datatable__cell--check"
                                                ),
                                                (t = f("<label/>")
                                                    .addClass(
                                                        "m-checkbox m-checkbox--single m-checkbox--all"
                                                    )
                                                    .append(
                                                        f("<input/>")
                                                            .attr(
                                                                "type",
                                                                "checkbox"
                                                            )
                                                            .on(
                                                                "click",
                                                                function () {
                                                                    f(this).is(
                                                                        ":checked"
                                                                    )
                                                                        ? p.setActiveAll(
                                                                              !0
                                                                          )
                                                                        : p.setActiveAll(
                                                                              !1
                                                                          );
                                                                }
                                                            )
                                                    )
                                                    .append(f("<span/>"))),
                                                void 0 !== a.selector.class &&
                                                    f(t).addClass(
                                                        a.selector.class
                                                    ),
                                                f(e).children().html(t)));
                                    }),
                                    m.layout.header &&
                                        t(
                                            f(u.tableHead)
                                                .find(".m-datatable__row")
                                                .first()
                                        ),
                                    m.layout.footer &&
                                        t(
                                            f(u.tableFoot)
                                                .find(".m-datatable__row")
                                                .first()
                                        ));
                        },
                        adjustCellsWidth: function () {
                            var o,
                                t = f(u.tableHead).width(),
                                e = f(u.tableHead)
                                    .find(".m-datatable__row:first-child")
                                    .find(".m-datatable__cell:visible").length;
                            return (
                                0 < e &&
                                    ((t -= 20 * e),
                                    (o = Math.floor(t / e)) <= p.offset &&
                                        (o = p.offset),
                                    f(u.table)
                                        .find(".m-datatable__row")
                                        .find(".m-datatable__cell:visible")
                                        .each(function (t, e) {
                                            var a = o,
                                                n = f(e).data("width");
                                            void 0 !== n && (a = n),
                                                f(e)
                                                    .children()
                                                    .css("width", parseInt(a));
                                        })),
                                u
                            );
                        },
                        adjustCellsHeight: function () {
                            f.each(f(u.table).children(), function (t, e) {
                                for (
                                    var a = f(e)
                                            .find(".m-datatable__row")
                                            .first()
                                            .parent()
                                            .find(".m-datatable__row").length,
                                        n = 1;
                                    n <= a;
                                    n++
                                ) {
                                    var o,
                                        i = f(e).find(
                                            ".m-datatable__row:nth-child(" +
                                                n +
                                                ")"
                                        );
                                    0 < f(i).length &&
                                        ((o = Math.max.apply(
                                            null,
                                            f(i)
                                                .map(function () {
                                                    return f(this).height();
                                                })
                                                .get()
                                        )),
                                        f(i).css(
                                            "height",
                                            Math.ceil(parseInt(o))
                                        ));
                                }
                            });
                        },
                        setupDOM: function (t) {
                            f(t).find("> thead").addClass("m-datatable__head"),
                                f(t)
                                    .find("> tbody")
                                    .addClass("m-datatable__body"),
                                f(t)
                                    .find("> tfoot")
                                    .addClass("m-datatable__foot"),
                                f(t).find("tr").addClass("m-datatable__row"),
                                f(t)
                                    .find("tr > th, tr > td")
                                    .addClass("m-datatable__cell"),
                                f(t)
                                    .find("tr > th, tr > td")
                                    .each(function (t, e) {
                                        0 === f(e).find("span").length &&
                                            f(e).wrapInner(
                                                f("<span/>").css(
                                                    "width",
                                                    p.offset
                                                )
                                            );
                                    });
                        },
                        scrollbar: function () {
                            var n = {
                                scrollable: null,
                                tableLocked: null,
                                mcsOptions: {
                                    scrollInertia: 0,
                                    autoDraggerLength: !0,
                                    autoHideScrollbar: !0,
                                    autoExpandScrollbar: !1,
                                    alwaysShowScrollbar: 0,
                                    mouseWheel: {
                                        scrollAmount: 120,
                                        preventDefault: !1,
                                    },
                                    advanced: {
                                        updateOnContentResize: !0,
                                        autoExpandHorizontalScroll: !0,
                                    },
                                    theme: "minimal-dark",
                                },
                                init: function () {
                                    p.destroyScroller(n.scrollable);
                                    var t,
                                        e = mUtil.getViewPort().width;
                                    m.layout.scroll
                                        ? (f(u.wrap).addClass(
                                              "m-datatable--scroll"
                                          ),
                                          (t = f(u.tableBody).find(
                                              ".m-datatable__lock--scroll"
                                          )),
                                          0 <
                                              f(t).find(".m-datatable__row")
                                                  .length && 0 < f(t).length
                                              ? ((n.scrollHead = f(
                                                    u.tableHead
                                                ).find(
                                                    "> .m-datatable__lock--scroll > .m-datatable__row"
                                                )),
                                                (n.scrollFoot = f(
                                                    u.tableFoot
                                                ).find(
                                                    "> .m-datatable__lock--scroll > .m-datatable__row"
                                                )),
                                                (n.tableLocked = f(
                                                    u.tableBody
                                                ).find(
                                                    ".m-datatable__lock:not(.m-datatable__lock--scroll)"
                                                )),
                                                e > mUtil.getBreakpoint("lg")
                                                    ? n.mCustomScrollbar(t)
                                                    : n.defaultScrollbar(t))
                                              : 0 <
                                                    f(u.tableBody).find(
                                                        ".m-datatable__row"
                                                    ).length &&
                                                ((n.scrollHead = f(
                                                    u.tableHead
                                                ).find("> .m-datatable__row")),
                                                (n.scrollFoot = f(
                                                    u.tableFoot
                                                ).find("> .m-datatable__row")),
                                                e > mUtil.getBreakpoint("lg")
                                                    ? n.mCustomScrollbar(
                                                          u.tableBody
                                                      )
                                                    : n.defaultScrollbar(
                                                          u.tableBody
                                                      )))
                                        : f(u.table).css("overflow-x", "auto");
                                },
                                defaultScrollbar: function (t) {
                                    f(t)
                                        .css("overflow", "auto")
                                        .css(
                                            "max-height",
                                            p.getOption("layout.height")
                                        )
                                        .on("scroll", n.onScrolling);
                                },
                                onScrolling: function (t) {
                                    var e = f(this).scrollLeft(),
                                        a = f(this).scrollTop();
                                    f(n.scrollHead).css("left", -e),
                                        f(n.scrollFoot).css("left", -e),
                                        f(n.tableLocked).each(function (t, e) {
                                            f(e).css("top", -a);
                                        });
                                },
                                mCustomScrollbar: function (t) {
                                    n.scrollable = t;
                                    var e = p.getOption("layout.height"),
                                        a = "xy",
                                        a = f.extend({}, n.mcsOptions, {
                                            axis: (a = null === e ? "x" : a),
                                            setHeight: f(u.tableBody).height(),
                                            callbacks: {
                                                whileScrolling: function () {
                                                    var a = this.mcs;
                                                    f(n.scrollHead).css(
                                                        "left",
                                                        a.left
                                                    ),
                                                        f(n.scrollFoot).css(
                                                            "left",
                                                            a.left
                                                        ),
                                                        f(n.tableLocked).each(
                                                            function (t, e) {
                                                                f(e).css(
                                                                    "top",
                                                                    a.top
                                                                );
                                                            }
                                                        ),
                                                        clearTimeout(
                                                            p.hoverTimer
                                                        ),
                                                        (p.isScrolling = !0);
                                                },
                                            },
                                        });
                                    !0 ===
                                        p.getOption(
                                            "layout.smoothScroll.scrollbarShown"
                                        ) &&
                                        f(t).attr(
                                            "data-scrollbar-shown",
                                            "true"
                                        ),
                                        p.mCustomScrollbar(t, a);
                                },
                            };
                            return n.init(), n;
                        },
                        mCustomScrollbar: function (t, e) {
                            f(u.tableBody).css("overflow", ""),
                                p.destroyScroller(
                                    f(u.table).find(".mCustomScrollbar")
                                ),
                                f(t).mCustomScrollbar(e);
                        },
                        setHeadTitle: function (t) {
                            void 0 === t && (t = u.tableHead), (t = f(t)[0]);
                            var e = m.columns,
                                n = t.getElementsByTagName("tr")[0],
                                o = t.getElementsByTagName("td");
                            void 0 === n &&
                                ((n = document.createElement("tr")),
                                t.appendChild(n)),
                                f.each(e, function (t, e) {
                                    var a = o[t];
                                    void 0 === a &&
                                        ((a = document.createElement("th")),
                                        n.appendChild(a)),
                                        void 0 !== e.title &&
                                            ((a.innerHTML = e.title),
                                            a.setAttribute(
                                                "data-field",
                                                e.field
                                            ),
                                            mUtil.addClass(a, e.class),
                                            f(a).data(e)),
                                        void 0 !== e.attr &&
                                            f.each(e.attr, function (t, e) {
                                                a.setAttribute(t, e);
                                            }),
                                        void 0 !== e.textAlign &&
                                            ((e =
                                                void 0 !==
                                                u.textAlign[e.textAlign]
                                                    ? u.textAlign[e.textAlign]
                                                    : ""),
                                            mUtil.addClass(a, e));
                                }),
                                p.setupDOM(t);
                        },
                        dataRender: function (t) {
                            f(u.table)
                                .siblings(".m-datatable__pager")
                                .removeClass("m-datatable--paging-loaded");
                            function n() {
                                (u.dataSet = u.dataSet || []),
                                    p.localDataUpdate();
                                var t = p.getDataSourceParam("pagination");
                                0 === t.perpage &&
                                    (t.perpage = m.data.pageSize || 10),
                                    (t.total = u.dataSet.length);
                                var e = Math.max(t.perpage * (t.page - 1), 0),
                                    a = Math.min(e + t.perpage, t.total);
                                return (
                                    (u.dataSet = f(u.dataSet).slice(e, a)), t
                                );
                            }
                            function e(t) {
                                function e(e, a) {
                                    f(e.pager).hasClass(
                                        "m-datatable--paging-loaded"
                                    ) || (f(e.pager).remove(), e.init(a)),
                                        f(e.pager)
                                            .off()
                                            .on(
                                                "m-datatable--on-goto-page",
                                                function (t) {
                                                    f(e.pager).remove(),
                                                        e.init(a);
                                                }
                                            );
                                    var t = Math.max(
                                            a.perpage * (a.page - 1),
                                            0
                                        ),
                                        n = Math.min(t + a.perpage, a.total);
                                    p.localDataUpdate(),
                                        (u.dataSet = f(u.dataSet).slice(t, n)),
                                        p.insertData();
                                }
                                var a;
                                f(u.wrap).removeClass("m-datatable--error"),
                                    m.pagination
                                        ? m.data.serverPaging &&
                                          "local" !== m.data.type &&
                                          null !==
                                              (a = p.getObject(
                                                  "meta",
                                                  t || null
                                              ))
                                            ? p.paging(a)
                                            : p.paging(n(), e)
                                        : p.localDataUpdate(),
                                    p.insertData();
                            }
                            "local" === m.data.type ||
                            (void 0 === m.data.source.read &&
                                null !== u.dataSet) ||
                            (!1 === m.data.serverSorting && "sort" === t) ||
                            (!1 === m.data.serverFiltering && "search" === t)
                                ? e()
                                : p.getData().done(e);
                        },
                        insertData: function () {
                            u.dataSet = u.dataSet || [];
                            var r = p.getDataSourceParam(),
                                t = r.pagination,
                                e = (Math.max(t.page, 1) - 1) * t.perpage,
                                t = Math.min(t.page, t.pages) * t.perpage,
                                s = {};
                            void 0 !== m.data.attr.rowProps &&
                                m.data.attr.rowProps.length &&
                                (s = m.data.attr.rowProps.slice(e, t));
                            var d = document.createElement("tbody");
                            d.style.visibility = "hidden";
                            var c = m.columns.length;
                            f.each(u.dataSet, function (t, e) {
                                var a = document.createElement("tr");
                                a.setAttribute("data-row", t),
                                    f(a).data("obj", e),
                                    void 0 !== s[t] &&
                                        f.each(s[t], function () {
                                            a.setAttribute(
                                                this.name,
                                                this.value
                                            );
                                        });
                                for (var n = 0; n < c; n += 1) {
                                    var o = m.columns[n],
                                        i = [];
                                    p.getObject("sort.field", r) === o.field &&
                                        i.push("m-datatable__cell--sorted"),
                                        void 0 !== o.textAlign &&
                                            ((l =
                                                void 0 !==
                                                u.textAlign[o.textAlign]
                                                    ? u.textAlign[o.textAlign]
                                                    : ""),
                                            i.push(l)),
                                        void 0 !== o.class && i.push(o.class);
                                    var l = document.createElement("td");
                                    mUtil.addClass(l, i.join(" ")),
                                        l.setAttribute("data-field", o.field),
                                        (l.innerHTML = p.getObject(o.field, e)),
                                        a.appendChild(l);
                                }
                                d.appendChild(a);
                            }),
                                0 === u.dataSet.length &&
                                    (p.destroyScroller(
                                        f(u.table).find(".mCustomScrollbar")
                                    ),
                                    (t = document.createElement("span")),
                                    mUtil.addClass(t, "m-datatable--error"),
                                    (t.innerHTML = p.getOption(
                                        "translate.records.noRecords"
                                    )),
                                    d.appendChild(t),
                                    f(u.wrap).addClass(
                                        "m-datatable--error m-datatable--loaded"
                                    ),
                                    p.spinnerCallback(!1)),
                                f(u.tableBody).replaceWith(d),
                                (u.tableBody = d),
                                p.setupDOM(u.table),
                                p.setupCellField([u.tableBody]),
                                p.setupTemplateCell(u.tableBody),
                                p.layoutUpdate();
                        },
                        updateTableComponents: function () {
                            (u.tableHead = f(u.table).children("thead")),
                                (u.tableBody = f(u.table).children("tbody")),
                                (u.tableFoot = f(u.table).children("tfoot"));
                        },
                        getData: function () {
                            p.spinnerCallback(!0);
                            var t,
                                e = {
                                    dataType: "json",
                                    method: "GET",
                                    data: {},
                                    timeout:
                                        p.getOption(
                                            "data.source.read.timeout"
                                        ) || 3e4,
                                };
                            return (
                                "local" === m.data.type &&
                                    (e.url = m.data.source),
                                "remote" === m.data.type &&
                                    ((e.url = p.getOption(
                                        "data.source.read.url"
                                    )),
                                    "string" != typeof e.url &&
                                        (e.url =
                                            p.getOption("data.source.read")),
                                    "string" != typeof e.url &&
                                        (e.url = p.getOption("data.source")),
                                    (e.headers = p.getOption(
                                        "data.source.read.headers"
                                    )),
                                    (e.method =
                                        p.getOption(
                                            "data.source.read.method"
                                        ) || "POST"),
                                    (t = p.getDataSourceParam()),
                                    p.getOption("data.serverPaging") ||
                                        delete t.pagination,
                                    p.getOption("data.serverSorting") ||
                                        delete t.sort,
                                    (e.data = f.extend(
                                        !0,
                                        e.data,
                                        t,
                                        p.getOption("data.source.read.params")
                                    ))),
                                f
                                    .ajax(e)
                                    .done(function (t, e, a) {
                                        (u.lastResponse = t),
                                            (u.dataSet = u.originalDataSet =
                                                p.dataMapCallback(t)),
                                            p.setAutoColumns(),
                                            f(u).trigger(
                                                "m-datatable--on-ajax-done",
                                                [u.dataSet]
                                            );
                                    })
                                    .fail(function (t, e, a) {
                                        p.destroyScroller(
                                            f(u.table).find(".mCustomScrollbar")
                                        ),
                                            f(u).trigger(
                                                "m-datatable--on-ajax-fail",
                                                [t]
                                            ),
                                            f(u.tableBody).html(
                                                f("<span/>")
                                                    .addClass(
                                                        "m-datatable--error"
                                                    )
                                                    .html(
                                                        p.getOption(
                                                            "translate.records.noRecords"
                                                        )
                                                    )
                                            ),
                                            f(u.wrap).addClass(
                                                "m-datatable--error m-datatable--loaded"
                                            ),
                                            p.spinnerCallback(!1);
                                    })
                                    .always(function () {})
                            );
                        },
                        paging: function (t, e) {
                            var d = {
                                meta: null,
                                pager: null,
                                paginateEvent: null,
                                pagerLayout: { pagination: null, info: null },
                                callback: null,
                                init: function (t) {
                                    (d.meta = t),
                                        (d.meta.pages = Math.max(
                                            Math.ceil(
                                                d.meta.total / d.meta.perpage
                                            ),
                                            1
                                        )),
                                        d.meta.page > d.meta.pages &&
                                            (d.meta.page = d.meta.pages),
                                        (d.paginateEvent = p.getTablePrefix()),
                                        (d.pager = f(u.table).siblings(
                                            ".m-datatable__pager"
                                        )),
                                        f(d.pager).hasClass(
                                            "m-datatable--paging-loaded"
                                        ) ||
                                            (f(d.pager).remove(),
                                            0 !== d.meta.pages &&
                                                (p.setDataSourceParam(
                                                    "pagination",
                                                    {
                                                        page: d.meta.page,
                                                        pages: d.meta.pages,
                                                        perpage: d.meta.perpage,
                                                        total: d.meta.total,
                                                    }
                                                ),
                                                (d.callback = d.serverCallback),
                                                "function" == typeof e &&
                                                    (d.callback = e),
                                                d.addPaginateEvent(),
                                                d.populate(),
                                                (d.meta.page = Math.max(
                                                    d.meta.page || 1,
                                                    d.meta.page
                                                )),
                                                f(u).trigger(
                                                    d.paginateEvent,
                                                    d.meta
                                                ),
                                                d.pagingBreakpoint.call(),
                                                f(window).resize(
                                                    d.pagingBreakpoint
                                                )));
                                },
                                serverCallback: function (t, e) {
                                    p.dataRender();
                                },
                                populate: function () {
                                    var t = p.getOption(
                                            "layout.icons.pagination"
                                        ),
                                        e = p.getOption(
                                            "translate.toolbar.pagination.items.default"
                                        );
                                    d.pager = f("<div/>").addClass(
                                        "m-datatable__pager m-datatable--paging-loaded clearfix"
                                    );
                                    var a = f("<ul/>").addClass(
                                        "m-datatable__pager-nav"
                                    );
                                    (d.pagerLayout.pagination = a),
                                        f("<li/>")
                                            .append(
                                                f("<a/>")
                                                    .attr("title", e.first)
                                                    .addClass(
                                                        "m-datatable__pager-link m-datatable__pager-link--first"
                                                    )
                                                    .append(
                                                        f("<i/>").addClass(
                                                            t.first
                                                        )
                                                    )
                                                    .on("click", d.gotoMorePage)
                                                    .attr("data-page", 1)
                                            )
                                            .appendTo(a),
                                        f("<li/>")
                                            .append(
                                                f("<a/>")
                                                    .attr("title", e.prev)
                                                    .addClass(
                                                        "m-datatable__pager-link m-datatable__pager-link--prev"
                                                    )
                                                    .append(
                                                        f("<i/>").addClass(
                                                            t.prev
                                                        )
                                                    )
                                                    .on("click", d.gotoMorePage)
                                            )
                                            .appendTo(a),
                                        f("<li/>")
                                            .append(
                                                f("<a/>")
                                                    .attr("title", e.more)
                                                    .addClass(
                                                        "m-datatable__pager-link m-datatable__pager-link--more-prev"
                                                    )
                                                    .html(
                                                        f("<i/>").addClass(
                                                            t.more
                                                        )
                                                    )
                                                    .on("click", d.gotoMorePage)
                                            )
                                            .appendTo(a),
                                        f("<li/>")
                                            .append(
                                                f("<input/>")
                                                    .attr("type", "text")
                                                    .addClass(
                                                        "m-pager-input form-control"
                                                    )
                                                    .attr("title", e.input)
                                                    .on("keyup", function () {
                                                        f(this).attr(
                                                            "data-page",
                                                            Math.abs(
                                                                f(this).val()
                                                            )
                                                        );
                                                    })
                                                    .on(
                                                        "keypress",
                                                        function (t) {
                                                            13 === t.which &&
                                                                d.gotoMorePage(
                                                                    t
                                                                );
                                                        }
                                                    )
                                            )
                                            .appendTo(a);
                                    var n = p.getOption(
                                            "toolbar.items.pagination.pages.desktop.pagesNumber"
                                        ),
                                        o = Math.ceil(d.meta.page / n) * n,
                                        n = o - n;
                                    o > d.meta.pages && (o = d.meta.pages);
                                    for (var i = n; i < o; i++) {
                                        var l = i + 1;
                                        f("<li/>")
                                            .append(
                                                f("<a/>")
                                                    .addClass(
                                                        "m-datatable__pager-link m-datatable__pager-link-number"
                                                    )
                                                    .text(l)
                                                    .attr("data-page", l)
                                                    .attr("title", l)
                                                    .on("click", d.gotoPage)
                                            )
                                            .appendTo(a);
                                    }
                                    f("<li/>")
                                        .append(
                                            f("<a/>")
                                                .attr("title", e.more)
                                                .addClass(
                                                    "m-datatable__pager-link m-datatable__pager-link--more-next"
                                                )
                                                .html(
                                                    f("<i/>").addClass(t.more)
                                                )
                                                .on("click", d.gotoMorePage)
                                        )
                                        .appendTo(a),
                                        f("<li/>")
                                            .append(
                                                f("<a/>")
                                                    .attr("title", e.next)
                                                    .addClass(
                                                        "m-datatable__pager-link m-datatable__pager-link--next"
                                                    )
                                                    .append(
                                                        f("<i/>").addClass(
                                                            t.next
                                                        )
                                                    )
                                                    .on("click", d.gotoMorePage)
                                            )
                                            .appendTo(a),
                                        f("<li/>")
                                            .append(
                                                f("<a/>")
                                                    .attr("title", e.last)
                                                    .addClass(
                                                        "m-datatable__pager-link m-datatable__pager-link--last"
                                                    )
                                                    .append(
                                                        f("<i/>").addClass(
                                                            t.last
                                                        )
                                                    )
                                                    .on("click", d.gotoMorePage)
                                                    .attr(
                                                        "data-page",
                                                        d.meta.pages
                                                    )
                                            )
                                            .appendTo(a),
                                        p.getOption("toolbar.items.info") &&
                                            (d.pagerLayout.info = f("<div/>")
                                                .addClass(
                                                    "m-datatable__pager-info"
                                                )
                                                .append(
                                                    f("<span/>").addClass(
                                                        "m-datatable__pager-detail"
                                                    )
                                                )),
                                        f.each(
                                            p.getOption("toolbar.layout"),
                                            function (t, e) {
                                                f(d.pagerLayout[e]).appendTo(
                                                    d.pager
                                                );
                                            }
                                        );
                                    var r = f("<select/>")
                                            .addClass(
                                                "selectpicker m-datatable__pager-size"
                                            )
                                            .attr(
                                                "title",
                                                p.getOption(
                                                    "translate.toolbar.pagination.items.default.select"
                                                )
                                            )
                                            .attr("data-width", "70px")
                                            .val(d.meta.perpage)
                                            .on("change", d.updatePerpage)
                                            .prependTo(d.pagerLayout.info),
                                        t = p.getOption(
                                            "toolbar.items.pagination.pageSizeSelect"
                                        );
                                    0 == t.length &&
                                        (t = [10, 20, 30, 50, 100]),
                                        f.each(t, function (t, e) {
                                            var a = -1 === e ? "All" : e;
                                            f("<option/>")
                                                .attr("value", e)
                                                .html(a)
                                                .appendTo(r);
                                        }),
                                        f(u).ready(function () {
                                            f(".selectpicker")
                                                .selectpicker()
                                                .siblings(".dropdown-toggle")
                                                .attr(
                                                    "title",
                                                    p.getOption(
                                                        "translate.toolbar.pagination.items.default.select"
                                                    )
                                                );
                                        }),
                                        d.paste();
                                },
                                paste: function () {
                                    f.each(
                                        f.unique(
                                            p.getOption("toolbar.placement")
                                        ),
                                        function (t, e) {
                                            "bottom" === e &&
                                                f(d.pager)
                                                    .clone(!0)
                                                    .insertAfter(u.table),
                                                "top" === e &&
                                                    f(d.pager)
                                                        .clone(!0)
                                                        .addClass(
                                                            "m-datatable__pager--top"
                                                        )
                                                        .insertBefore(u.table);
                                        }
                                    );
                                },
                                gotoMorePage: function (t) {
                                    if (
                                        (t.preventDefault(),
                                        "disabled" === f(this).attr("disabled"))
                                    )
                                        return !1;
                                    var e = f(this).attr("data-page");
                                    return (
                                        void 0 === e &&
                                            (e = f(t.target).attr("data-page")),
                                        d.openPage(parseInt(e)),
                                        !1
                                    );
                                },
                                gotoPage: function (t) {
                                    t.preventDefault(),
                                        f(this).hasClass(
                                            "m-datatable__pager-link--active"
                                        ) ||
                                            d.openPage(
                                                parseInt(f(this).data("page"))
                                            );
                                },
                                openPage: function (t) {
                                    (d.meta.page = parseInt(t)),
                                        f(u).trigger(d.paginateEvent, d.meta),
                                        d.callback(d, d.meta),
                                        f(d.pager).trigger(
                                            "m-datatable--on-goto-page",
                                            d.meta
                                        );
                                },
                                updatePerpage: function (t) {
                                    t.preventDefault(),
                                        null === p.getOption("layout.height") &&
                                            f("html, body").animate({
                                                scrollTop: f(u).position().top,
                                            }),
                                        (d.pager = f(u.table)
                                            .siblings(".m-datatable__pager")
                                            .removeClass(
                                                "m-datatable--paging-loaded"
                                            )),
                                        t.originalEvent &&
                                            (d.meta.perpage = parseInt(
                                                f(this).val()
                                            )),
                                        f(d.pager)
                                            .find(
                                                "select.m-datatable__pager-size"
                                            )
                                            .val(d.meta.perpage)
                                            .attr(
                                                "data-selected",
                                                d.meta.perpage
                                            ),
                                        p.setDataSourceParam("pagination", {
                                            page: d.meta.page,
                                            pages: d.meta.pages,
                                            perpage: d.meta.perpage,
                                            total: d.meta.total,
                                        }),
                                        f(d.pager).trigger(
                                            "m-datatable--on-update-perpage",
                                            d.meta
                                        ),
                                        f(u).trigger(d.paginateEvent, d.meta),
                                        d.callback(d, d.meta),
                                        d.updateInfo.call();
                                },
                                addPaginateEvent: function (t) {
                                    f(u)
                                        .off(d.paginateEvent)
                                        .on(d.paginateEvent, function (t, e) {
                                            p.spinnerCallback(!0),
                                                (d.pager = f(u.table).siblings(
                                                    ".m-datatable__pager"
                                                ));
                                            var a = f(d.pager).find(
                                                ".m-datatable__pager-nav"
                                            );
                                            f(a)
                                                .find(
                                                    ".m-datatable__pager-link--active"
                                                )
                                                .removeClass(
                                                    "m-datatable__pager-link--active"
                                                ),
                                                f(a)
                                                    .find(
                                                        '.m-datatable__pager-link-number[data-page="' +
                                                            e.page +
                                                            '"]'
                                                    )
                                                    .addClass(
                                                        "m-datatable__pager-link--active"
                                                    ),
                                                f(a)
                                                    .find(
                                                        ".m-datatable__pager-link--prev"
                                                    )
                                                    .attr(
                                                        "data-page",
                                                        Math.max(e.page - 1, 1)
                                                    ),
                                                f(a)
                                                    .find(
                                                        ".m-datatable__pager-link--next"
                                                    )
                                                    .attr(
                                                        "data-page",
                                                        Math.min(
                                                            e.page + 1,
                                                            e.pages
                                                        )
                                                    ),
                                                f(d.pager).each(function () {
                                                    f(this)
                                                        .find(
                                                            '.m-pager-input[type="text"]'
                                                        )
                                                        .prop("value", e.page);
                                                }),
                                                f(d.pager)
                                                    .find(
                                                        ".m-datatable__pager-nav"
                                                    )
                                                    .show(),
                                                e.pages <= 1 &&
                                                    f(d.pager)
                                                        .find(
                                                            ".m-datatable__pager-nav"
                                                        )
                                                        .hide(),
                                                p.setDataSourceParam(
                                                    "pagination",
                                                    {
                                                        page: d.meta.page,
                                                        pages: d.meta.pages,
                                                        perpage: d.meta.perpage,
                                                        total: d.meta.total,
                                                    }
                                                ),
                                                f(d.pager)
                                                    .find(
                                                        "select.m-datatable__pager-size"
                                                    )
                                                    .val(e.perpage)
                                                    .attr(
                                                        "data-selected",
                                                        e.perpage
                                                    ),
                                                f(u.table)
                                                    .find(
                                                        '.m-checkbox > [type="checkbox"]'
                                                    )
                                                    .prop("checked", !1),
                                                f(u.table)
                                                    .find(
                                                        ".m-datatable__row--active"
                                                    )
                                                    .removeClass(
                                                        "m-datatable__row--active"
                                                    ),
                                                d.updateInfo.call(),
                                                d.pagingBreakpoint.call();
                                        });
                                },
                                updateInfo: function () {
                                    var t = Math.max(
                                            d.meta.perpage * (d.meta.page - 1) +
                                                1,
                                            1
                                        ),
                                        e = Math.min(
                                            t + d.meta.perpage - 1,
                                            d.meta.total
                                        );
                                    f(d.pager)
                                        .find(".m-datatable__pager-info")
                                        .find(".m-datatable__pager-detail")
                                        .html(
                                            p.dataPlaceholder(
                                                p.getOption(
                                                    "translate.toolbar.pagination.items.info"
                                                ),
                                                {
                                                    start: t,
                                                    end:
                                                        -1 === d.meta.perpage
                                                            ? d.meta.total
                                                            : e,
                                                    pageSize:
                                                        -1 === d.meta.perpage ||
                                                        d.meta.perpage >=
                                                            d.meta.total
                                                            ? d.meta.total
                                                            : d.meta.perpage,
                                                    total: d.meta.total,
                                                }
                                            )
                                        );
                                },
                                pagingBreakpoint: function () {
                                    var a,
                                        n,
                                        o = f(u.table)
                                            .siblings(".m-datatable__pager")
                                            .find(".m-datatable__pager-nav");
                                    0 !== f(o).length &&
                                        ((a = p.getCurrentPage()),
                                        (n = f(o)
                                            .find(".m-pager-input")
                                            .closest("li")),
                                        f(o).find("li").show(),
                                        f.each(
                                            p.getOption(
                                                "toolbar.items.pagination.pages"
                                            ),
                                            function (t, e) {
                                                if (
                                                    mUtil.isInResponsiveRange(t)
                                                ) {
                                                    switch (t) {
                                                        case "desktop":
                                                        case "tablet":
                                                            Math.ceil(
                                                                a /
                                                                    e.pagesNumber
                                                            ),
                                                                e.pagesNumber,
                                                                e.pagesNumber;
                                                            f(n).hide(),
                                                                (d.meta =
                                                                    p.getDataSourceParam(
                                                                        "pagination"
                                                                    )),
                                                                d.paginationUpdate();
                                                            break;
                                                        case "mobile":
                                                            f(n).show(),
                                                                f(o)
                                                                    .find(
                                                                        ".m-datatable__pager-link--more-prev"
                                                                    )
                                                                    .closest(
                                                                        "li"
                                                                    )
                                                                    .hide(),
                                                                f(o)
                                                                    .find(
                                                                        ".m-datatable__pager-link--more-next"
                                                                    )
                                                                    .closest(
                                                                        "li"
                                                                    )
                                                                    .hide(),
                                                                f(o)
                                                                    .find(
                                                                        ".m-datatable__pager-link-number"
                                                                    )
                                                                    .closest(
                                                                        "li"
                                                                    )
                                                                    .hide();
                                                    }
                                                    return !1;
                                                }
                                            }
                                        ));
                                },
                                paginationUpdate: function () {
                                    var t = f(u.table)
                                            .siblings(".m-datatable__pager")
                                            .find(".m-datatable__pager-nav"),
                                        e = f(t).find(
                                            ".m-datatable__pager-link--more-prev"
                                        ),
                                        a = f(t).find(
                                            ".m-datatable__pager-link--more-next"
                                        ),
                                        n = f(t).find(
                                            ".m-datatable__pager-link--first"
                                        ),
                                        o = f(t).find(
                                            ".m-datatable__pager-link--prev"
                                        ),
                                        i = f(t).find(
                                            ".m-datatable__pager-link--next"
                                        ),
                                        l = f(t).find(
                                            ".m-datatable__pager-link--last"
                                        ),
                                        t = f(t).find(
                                            ".m-datatable__pager-link-number"
                                        ),
                                        r = Math.max(
                                            f(t).first().data("page") - 1,
                                            1
                                        );
                                    f(e).each(function (t, e) {
                                        f(e).attr("data-page", r);
                                    }),
                                        1 === r
                                            ? f(e).parent().hide()
                                            : f(e).parent().show();
                                    var s = Math.min(
                                        f(t).last().data("page") + 1,
                                        d.meta.pages
                                    );
                                    f(a).each(function (t, e) {
                                        f(a).attr("data-page", s).show();
                                    }),
                                        s === d.meta.pages &&
                                        s === f(t).last().data("page")
                                            ? f(a).parent().hide()
                                            : f(a).parent().show(),
                                        1 === d.meta.page
                                            ? (f(n)
                                                  .attr("disabled", !0)
                                                  .addClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ),
                                              f(o)
                                                  .attr("disabled", !0)
                                                  .addClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ))
                                            : (f(n)
                                                  .removeAttr("disabled")
                                                  .removeClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ),
                                              f(o)
                                                  .removeAttr("disabled")
                                                  .removeClass(
                                                      "m-datatable__pager-link--disabled"
                                                  )),
                                        d.meta.page === d.meta.pages
                                            ? (f(i)
                                                  .attr("disabled", !0)
                                                  .addClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ),
                                              f(l)
                                                  .attr("disabled", !0)
                                                  .addClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ))
                                            : (f(i)
                                                  .removeAttr("disabled")
                                                  .removeClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ),
                                              f(l)
                                                  .removeAttr("disabled")
                                                  .removeClass(
                                                      "m-datatable__pager-link--disabled"
                                                  ));
                                    t = p.getOption(
                                        "toolbar.items.pagination.navigation"
                                    );
                                    t.first || f(n).remove(),
                                        t.prev || f(o).remove(),
                                        t.next || f(i).remove(),
                                        t.last || f(l).remove();
                                },
                            };
                            return d.init(t), d;
                        },
                        columnHide: function () {
                            var o = mUtil.getViewPort().width;
                            f.each(m.columns, function (t, e) {
                                var a, n;
                                void 0 !== e.responsive &&
                                    ((a = e.field),
                                    (n = f.grep(
                                        f(u.table).find(".m-datatable__cell"),
                                        function (t, e) {
                                            return a === f(t).data("field");
                                        }
                                    )),
                                    mUtil.getBreakpoint(e.responsive.hidden) >=
                                    o
                                        ? f(n).hide()
                                        : f(n).show(),
                                    mUtil.getBreakpoint(e.responsive.visible) <=
                                    o
                                        ? f(n).show()
                                        : f(n).hide());
                            });
                        },
                        setupSubDatatable: function () {
                            var o,
                                i,
                                l = p.getOption("detail.content");
                            "function" == typeof l &&
                                (0 <
                                    f(u.table).find(".m-datatable__subtable")
                                        .length ||
                                    (f(u.wrap).addClass(
                                        "m-datatable--subtable"
                                    ),
                                    (m.columns[0].subtable = !0),
                                    (o = function (a) {
                                        a.preventDefault();
                                        var t =
                                                f(this).closest(
                                                    ".m-datatable__row"
                                                ),
                                            e = f(t).next(
                                                ".m-datatable__row-subtable"
                                            );
                                        0 === f(e).length &&
                                            ((e = f("<tr/>")
                                                .addClass(
                                                    "m-datatable__row-subtable m-datatable__row-loading"
                                                )
                                                .hide()
                                                .append(
                                                    f("<td/>")
                                                        .addClass(
                                                            "m-datatable__subtable"
                                                        )
                                                        .attr(
                                                            "colspan",
                                                            p.getTotalColumns()
                                                        )
                                                )),
                                            f(t).after(e),
                                            f(t).hasClass(
                                                "m-datatable__row--even"
                                            ) &&
                                                f(e).addClass(
                                                    "m-datatable__row-subtable--even"
                                                )),
                                            f(e).toggle();
                                        var n = f(e).find(
                                                ".m-datatable__subtable"
                                            ),
                                            o = f(this)
                                                .closest(
                                                    "[data-field]:first-child"
                                                )
                                                .find(
                                                    ".m-datatable__toggle-subtable"
                                                )
                                                .data("value"),
                                            i = f(this)
                                                .find("i")
                                                .removeAttr("class");
                                        f(t).hasClass(
                                            "m-datatable__row--subtable-expanded"
                                        )
                                            ? (f(i).addClass(
                                                  p.getOption(
                                                      "layout.icons.rowDetail.collapse"
                                                  )
                                              ),
                                              f(t).removeClass(
                                                  "m-datatable__row--subtable-expanded"
                                              ),
                                              f(u).trigger(
                                                  "m-datatable--on-collapse-subtable",
                                                  [t]
                                              ))
                                            : (f(i).addClass(
                                                  p.getOption(
                                                      "layout.icons.rowDetail.expand"
                                                  )
                                              ),
                                              f(t).addClass(
                                                  "m-datatable__row--subtable-expanded"
                                              ),
                                              f(u).trigger(
                                                  "m-datatable--on-expand-subtable",
                                                  [t]
                                              )),
                                            0 ===
                                                f(n).find(".m-datatable")
                                                    .length &&
                                                (f.map(
                                                    u.dataSet,
                                                    function (t, e) {
                                                        return (
                                                            o ===
                                                                t[
                                                                    m.columns[0]
                                                                        .field
                                                                ] &&
                                                            ((a.data = t), !0)
                                                        );
                                                    }
                                                ),
                                                (a.detailCell = n),
                                                (a.parentRow = t),
                                                (a.subTable = n),
                                                l(a),
                                                f(n)
                                                    .children(".m-datatable")
                                                    .on(
                                                        "m-datatable--on-init",
                                                        function (t) {
                                                            f(e).removeClass(
                                                                "m-datatable__row-loading"
                                                            );
                                                        }
                                                    ),
                                                "local" ===
                                                    p.getOption("data.type") &&
                                                    f(e).removeClass(
                                                        "m-datatable__row-loading"
                                                    ));
                                    }),
                                    (i = m.columns),
                                    f(u.tableBody)
                                        .find(".m-datatable__row")
                                        .each(function (t, e) {
                                            f(e)
                                                .find(".m-datatable__cell")
                                                .each(function (t, a) {
                                                    var e,
                                                        n = f.grep(
                                                            i,
                                                            function (t, e) {
                                                                return (
                                                                    f(a).data(
                                                                        "field"
                                                                    ) ===
                                                                    t.field
                                                                );
                                                            }
                                                        )[0];
                                                    void 0 !== n &&
                                                        ((e = f(a).text()),
                                                        void 0 !== n.subtable &&
                                                            n.subtable &&
                                                            (0 <
                                                                f(a).find(
                                                                    ".m-datatable__toggle-subtable"
                                                                ).length ||
                                                                f(a).html(
                                                                    f("<a/>")
                                                                        .addClass(
                                                                            "m-datatable__toggle-subtable"
                                                                        )
                                                                        .attr(
                                                                            "href",
                                                                            "#"
                                                                        )
                                                                        .attr(
                                                                            "data-value",
                                                                            e
                                                                        )
                                                                        .attr(
                                                                            "title",
                                                                            p.getOption(
                                                                                "detail.title"
                                                                            )
                                                                        )
                                                                        .on(
                                                                            "click",
                                                                            o
                                                                        )
                                                                        .append(
                                                                            f(
                                                                                "<i/>"
                                                                            )
                                                                                .css(
                                                                                    "width",
                                                                                    f(
                                                                                        a
                                                                                    ).data(
                                                                                        "width"
                                                                                    )
                                                                                )
                                                                                .addClass(
                                                                                    p.getOption(
                                                                                        "layout.icons.rowDetail.collapse"
                                                                                    )
                                                                                )
                                                                        )
                                                                )));
                                                });
                                        })));
                        },
                        dataMapCallback: function (t) {
                            var e = t;
                            return "function" ==
                                typeof p.getOption("data.source.read.map")
                                ? p.getOption("data.source.read.map")(t)
                                : void 0 !== t && void 0 !== t.data
                                ? t.data
                                : e;
                        },
                        isSpinning: !1,
                        spinnerCallback: function (t) {
                            t
                                ? p.isSpinning ||
                                  (!0 ===
                                      (t = p.getOption("layout.spinner"))
                                          .message &&
                                      (t.message = p.getOption(
                                          "translate.records.processing"
                                      )),
                                  (p.isSpinning = !0),
                                  void 0 !== mApp && mApp.block(u, t))
                                : ((p.isSpinning = !1),
                                  void 0 !== mApp && mApp.unblock(u));
                        },
                        sortCallback: function (t, i, e) {
                            var l = e.type || "string",
                                r = e.format || "",
                                s = e.field;
                            return f(t).sort(function (t, e) {
                                var a = t[s],
                                    n = e[s];
                                switch (l) {
                                    case "date":
                                        if ("undefined" == typeof moment)
                                            throw new Error(
                                                "Moment.js is required."
                                            );
                                        var o = moment(a, r).diff(moment(n, r));
                                        return "asc" === i
                                            ? 0 < o
                                                ? 1
                                                : o < 0
                                                ? -1
                                                : 0
                                            : o < 0
                                            ? 1
                                            : 0 < o
                                            ? -1
                                            : 0;
                                    case "number":
                                        return (
                                            isNaN(parseFloat(a)) &&
                                                null != a &&
                                                (a = Number(
                                                    a.replace(/[^0-9\.-]+/g, "")
                                                )),
                                            isNaN(parseFloat(n)) &&
                                                null != n &&
                                                (n = Number(
                                                    n.replace(/[^0-9\.-]+/g, "")
                                                )),
                                            (a = parseFloat(a)),
                                            (n = parseFloat(n)),
                                            "asc" === i
                                                ? n < a
                                                    ? 1
                                                    : a < n
                                                    ? -1
                                                    : 0
                                                : a < n
                                                ? 1
                                                : n < a
                                                ? -1
                                                : 0
                                        );
                                    default:
                                        return "asc" === i
                                            ? n < a
                                                ? 1
                                                : a < n
                                                ? -1
                                                : 0
                                            : a < n
                                            ? 1
                                            : n < a
                                            ? -1
                                            : 0;
                                }
                            });
                        },
                        log: function (t, e) {
                            void 0 === e && (e = ""),
                                u.debug && console.log(t, e);
                        },
                        autoHide: function () {
                            f(u.table).find(".m-datatable__cell").show(),
                                f(u.tableBody).each(function () {
                                    for (
                                        ;
                                        f(this)[0].offsetWidth <
                                        f(this)[0].scrollWidth;

                                    )
                                        f(u.table)
                                            .find(".m-datatable__row")
                                            .each(function (t) {
                                                var e = f(this)
                                                    .find(".m-datatable__cell")
                                                    .not(":hidden")
                                                    .last();
                                                f(e).hide();
                                            }),
                                            p.adjustCellsWidth.call();
                                });
                            function t(t) {
                                t.preventDefault();
                                var e,
                                    a = f(this).closest(".m-datatable__row"),
                                    n = f(a).next();
                                f(n).hasClass("m-datatable__row-detail")
                                    ? (f(this)
                                          .find("i")
                                          .removeClass(
                                              p.getOption(
                                                  "layout.icons.rowDetail.expand"
                                              )
                                          )
                                          .addClass(
                                              p.getOption(
                                                  "layout.icons.rowDetail.collapse"
                                              )
                                          ),
                                      f(n).remove())
                                    : (f(this)
                                          .find("i")
                                          .removeClass(
                                              p.getOption(
                                                  "layout.icons.rowDetail.collapse"
                                              )
                                          )
                                          .addClass(
                                              p.getOption(
                                                  "layout.icons.rowDetail.expand"
                                              )
                                          ),
                                      (t = f(a)
                                          .find(".m-datatable__cell:hidden")
                                          .clone()
                                          .show()),
                                      (n = f("<tr/>")
                                          .addClass("m-datatable__row-detail")
                                          .insertAfter(a)),
                                      (n = f("<td/>")
                                          .addClass("m-datatable__detail")
                                          .attr("colspan", p.getTotalColumns())
                                          .appendTo(n)),
                                      (e = f("<table/>")),
                                      f(t).each(function () {
                                          var a = f(this).data("field"),
                                              t = f.grep(
                                                  m.columns,
                                                  function (t, e) {
                                                      return a === t.field;
                                                  }
                                              )[0];
                                          f(e).append(
                                              f(
                                                  '<tr class="m-datatable__row"></tr>'
                                              )
                                                  .append(
                                                      f(
                                                          '<td class="m-datatable__cell"></td>'
                                                      ).append(
                                                          f("<span/>")
                                                              .css(
                                                                  "width",
                                                                  p.offset
                                                              )
                                                              .append(t.title)
                                                      )
                                                  )
                                                  .append(this)
                                          );
                                      }),
                                      f(n).append(e));
                            }
                            f(u.tableBody)
                                .find(".m-datatable__row")
                                .each(function () {
                                    f(this).prepend(
                                        f("<td/>")
                                            .addClass(
                                                "m-datatable__cell m-datatable__toggle--detail"
                                            )
                                            .append(
                                                f("<a/>")
                                                    .addClass(
                                                        "m-datatable__toggle-detail"
                                                    )
                                                    .attr("href", "#")
                                                    .on("click", t)
                                                    .append(
                                                        f("<i/>")
                                                            .css(
                                                                "width",
                                                                "21px"
                                                            )
                                                            .addClass(
                                                                p.getOption(
                                                                    "layout.icons.rowDetail.collapse"
                                                                )
                                                            )
                                                    )
                                            )
                                    ),
                                        0 ===
                                        f(u.tableHead).find(
                                            ".m-datatable__toggle-detail"
                                        ).length
                                            ? (f(u.tableHead)
                                                  .find(".m-datatable__row")
                                                  .first()
                                                  .prepend(
                                                      '<th class="m-datatable__cell m-datatable__toggle-detail"><span style="width: 21px"></span></th>'
                                                  ),
                                              f(u.tableFoot)
                                                  .find(".m-datatable__row")
                                                  .first()
                                                  .prepend(
                                                      '<th class="m-datatable__cell m-datatable__toggle-detail"><span style="width: 21px"></span></th>'
                                                  ))
                                            : f(u.tableHead)
                                                  .find(
                                                      ".m-datatable__toggle-detail"
                                                  )
                                                  .find("span")
                                                  .css("width", "21px");
                                });
                        },
                        hoverColumn: function () {
                            f(u.tableBody).on(
                                "mouseenter",
                                ".m-datatable__cell",
                                function () {
                                    var t = f(p.cell(this).nodes()).index();
                                    f(p.cells().nodes()).removeClass(
                                        "m-datatable__cell--hover"
                                    ),
                                        f(p.column(t).nodes()).addClass(
                                            "m-datatable__cell--hover"
                                        );
                                }
                            );
                        },
                        setAutoColumns: function () {
                            p.getOption("data.autoColumns") &&
                                (f.each(u.dataSet[0], function (a, t) {
                                    0 ===
                                        f.grep(m.columns, function (t, e) {
                                            return a === t.field;
                                        }).length &&
                                        m.columns.push({ field: a, title: a });
                                }),
                                f(u.tableHead)
                                    .find(".m-datatable__row")
                                    .remove(),
                                p.setHeadTitle(),
                                p.getOption("layout.footer") &&
                                    (f(u.tableFoot)
                                        .find(".m-datatable__row")
                                        .remove(),
                                    p.setHeadTitle(u.tableFoot)));
                        },
                        isLocked: function () {
                            return (
                                f(u.wrap).hasClass("m-datatable--lock") || !1
                            );
                        },
                        replaceTableContent: function (t, e) {
                            void 0 === e && (e = u.tableBody),
                                (f(e).hasClass("mCustomScrollbar")
                                    ? f(e).find(".mCSB_container")
                                    : f(e)
                                ).html(t);
                        },
                        getExtraSpace: function (t) {
                            return (
                                parseInt(f(t).css("paddingRight")) +
                                parseInt(f(t).css("paddingLeft")) +
                                (parseInt(f(t).css("marginRight")) +
                                    parseInt(f(t).css("marginLeft"))) +
                                Math.ceil(
                                    f(t)
                                        .css("border-right-width")
                                        .replace("px", "")
                                )
                            );
                        },
                        dataPlaceholder: function (t, e) {
                            var a = t;
                            return (
                                f.each(e, function (t, e) {
                                    a = a.replace("{{" + t + "}}", e);
                                }),
                                a
                            );
                        },
                        getTableId: function (t) {
                            void 0 === t && (t = "");
                            var e = f(u).attr("id");
                            return (
                                (e =
                                    void 0 === e
                                        ? f(u).attr("class").split(" ")[0]
                                        : e) + t
                            );
                        },
                        getTablePrefix: function (t) {
                            return (
                                void 0 !== t && (t = "-" + t),
                                p.getTableId() + "-" + p.getDepth() + t
                            );
                        },
                        getDepth: function () {
                            for (
                                var t = 0, e = u.table;
                                (e = f(e).parents(".m-datatable__table")),
                                    t++,
                                    0 < f(e).length;

                            );
                            return t;
                        },
                        stateKeep: function (t, e) {
                            (t = p.getTablePrefix(t)),
                                !1 !== p.getOption("data.saveState") &&
                                    (p.getOption("data.saveState.webstorage") &&
                                        localStorage &&
                                        localStorage.setItem(
                                            t,
                                            JSON.stringify(e)
                                        ),
                                    p.getOption("data.saveState.cookie") &&
                                        Cookies.set(t, JSON.stringify(e)));
                        },
                        stateGet: function (t, e) {
                            if (
                                ((t = p.getTablePrefix(t)),
                                !1 !== p.getOption("data.saveState"))
                            ) {
                                var a = null;
                                return null !=
                                    (a =
                                        p.getOption(
                                            "data.saveState.webstorage"
                                        ) && localStorage
                                            ? localStorage.getItem(t)
                                            : Cookies.get(t))
                                    ? JSON.parse(a)
                                    : void 0;
                            }
                        },
                        stateUpdate: function (t, e) {
                            var a = p.stateGet(t);
                            p.stateKeep(
                                t,
                                f.extend({}, (a = null == a ? {} : a), e)
                            );
                        },
                        stateRemove: function (t) {
                            (t = p.getTablePrefix(t)),
                                localStorage && localStorage.removeItem(t),
                                Cookies.remove(t);
                        },
                        getTotalColumns: function (t) {
                            return (
                                void 0 === t && (t = u.tableBody),
                                f(t)
                                    .find(".m-datatable__row")
                                    .first()
                                    .find(".m-datatable__cell").length
                            );
                        },
                        getOneRow: function (t, e, a) {
                            void 0 === a && (a = !0);
                            e = f(t).find(
                                ".m-datatable__row:not(.m-datatable__row-detail):nth-child(" +
                                    e +
                                    ")"
                            );
                            return (e = a ? e.find(".m-datatable__cell") : e);
                        },
                        hasOverflowY: function (t) {
                            var e = f(t).find(".m-datatable__row"),
                                a = 0;
                            return (
                                0 < e.length &&
                                (f(e).each(function (t, e) {
                                    a += Math.floor(f(e).innerHeight());
                                }),
                                a > f(t).innerHeight())
                            );
                        },
                        sortColumn: function (t, a, n) {
                            void 0 === a && (a = "asc"),
                                void 0 === n && (n = !1);
                            var o = f(t).index(),
                                e = f(u.tableBody).find(".m-datatable__row"),
                                t = f(t).closest(".m-datatable__lock").index();
                            -1 !== t &&
                                (e = f(u.tableBody)
                                    .find(
                                        ".m-datatable__lock:nth-child(" +
                                            (t + 1) +
                                            ")"
                                    )
                                    .find(".m-datatable__row"));
                            t = f(e).parent();
                            f(e)
                                .sort(function (t, e) {
                                    (t = f(t)
                                        .find("td:nth-child(" + o + ")")
                                        .text()),
                                        (e = f(e)
                                            .find("td:nth-child(" + o + ")")
                                            .text());
                                    return (
                                        n &&
                                            ((t = parseInt(t)),
                                            (e = parseInt(e))),
                                        "asc" === a
                                            ? e < t
                                                ? 1
                                                : t < e
                                                ? -1
                                                : 0
                                            : t < e
                                            ? 1
                                            : e < t
                                            ? -1
                                            : 0
                                    );
                                })
                                .appendTo(t);
                        },
                        sorting: function () {
                            var o = {
                                init: function () {
                                    m.sortable &&
                                        (f(u.tableHead)
                                            .find(
                                                ".m-datatable__cell:not(.m-datatable__cell--check)"
                                            )
                                            .addClass("m-datatable__cell--sort")
                                            .off("click")
                                            .on("click", o.sortClick),
                                        o.setIcon());
                                },
                                setIcon: function () {
                                    var t,
                                        e,
                                        a,
                                        n = p.getDataSourceParam("sort");
                                    f.isEmptyObject(n) ||
                                        ((a = f(u.tableHead)
                                            .find(
                                                '.m-datatable__cell[data-field="' +
                                                    n.field +
                                                    '"]'
                                            )
                                            .attr("data-sort", n.sort)),
                                        (t = f(a).find("span")),
                                        (e = f(t).find("i")),
                                        (a = p.getOption("layout.icons.sort")),
                                        0 < f(e).length
                                            ? f(e)
                                                  .removeAttr("class")
                                                  .addClass(a[n.sort])
                                            : f(t).append(
                                                  f("<i/>").addClass(a[n.sort])
                                              ));
                                },
                                sortClick: function (t) {
                                    var e = p.getDataSourceParam("sort"),
                                        a = f(this).data("field"),
                                        n = p.getColumnByField(a);
                                    (void 0 !== n.sortable &&
                                        !1 === n.sortable) ||
                                        (f(u.tableHead)
                                            .find(
                                                ".m-datatable__cell > span > i"
                                            )
                                            .remove(),
                                        m.sortable &&
                                            (p.spinnerCallback(!0),
                                            (n = "desc"),
                                            p.getObject("field", e) === a &&
                                                (n = p.getObject("sort", e)),
                                            (e = {
                                                field: a,
                                                sort: (n =
                                                    void 0 === n || "desc" === n
                                                        ? "asc"
                                                        : "desc"),
                                            }),
                                            p.setDataSourceParam("sort", e),
                                            o.setIcon(),
                                            setTimeout(function () {
                                                p.dataRender("sort"),
                                                    f(u).trigger(
                                                        "m-datatable--on-sort",
                                                        e
                                                    );
                                            }, 300)));
                                },
                            };
                            o.init();
                        },
                        localDataUpdate: function () {
                            var a = p.getDataSourceParam();
                            void 0 === u.originalDataSet &&
                                (u.originalDataSet = u.dataSet);
                            var n,
                                o,
                                t = p.getObject("sort.field", a),
                                e = p.getObject("sort.sort", a),
                                t = p.getColumnByField(t);
                            return (
                                void 0 !== t &&
                                !0 !== p.getOption("data.serverSorting")
                                    ? "function" == typeof t.sortCallback
                                        ? (u.dataSet = t.sortCallback(
                                              u.originalDataSet,
                                              e,
                                              t
                                          ))
                                        : (u.dataSet = p.sortCallback(
                                              u.originalDataSet,
                                              e,
                                              t
                                          ))
                                    : (u.dataSet = u.originalDataSet),
                                "object" != typeof a.query ||
                                    p.getOption("data.serverFiltering") ||
                                    ((a.query = a.query || {}),
                                    (n = function (t) {
                                        for (var e in t)
                                            if (t.hasOwnProperty(e))
                                                if ("string" == typeof t[e]) {
                                                    if (
                                                        t[e].toLowerCase() ==
                                                            o ||
                                                        -1 !==
                                                            t[e]
                                                                .toLowerCase()
                                                                .indexOf(o)
                                                    )
                                                        return !0;
                                                } else if (
                                                    "object" == typeof t[e]
                                                )
                                                    return n(t[e]);
                                        return !1;
                                    }),
                                    void 0 !==
                                        (o = f(
                                            p.getOption("search.input")
                                        ).val()) &&
                                        "" !== o &&
                                        ((o = o.toLowerCase()),
                                        (u.dataSet = f.grep(u.dataSet, n)),
                                        delete a.query[
                                            p.getGeneralSearchKey()
                                        ]),
                                    f.each(a.query, function (t, e) {
                                        "" === e && delete a.query[t];
                                    }),
                                    (u.dataSet = p.filterArray(
                                        u.dataSet,
                                        a.query
                                    )),
                                    (u.dataSet = u.dataSet.filter(function () {
                                        return !0;
                                    }))),
                                u.dataSet
                            );
                        },
                        filterArray: function (t, a, i) {
                            if ("object" != typeof t) return [];
                            if (
                                (void 0 === i && (i = "AND"),
                                "object" != typeof a)
                            )
                                return t;
                            if (
                                ((i = i.toUpperCase()),
                                -1 === f.inArray(i, ["AND", "OR", "NOT"]))
                            )
                                return [];
                            var l = Object.keys(a).length,
                                r = [];
                            return (
                                f.each(t, function (t, e) {
                                    var n = e,
                                        o = 0;
                                    f.each(a, function (t, e) {
                                        var a;
                                        (e = e instanceof Array ? e : [e]),
                                            n.hasOwnProperty(t) &&
                                                ((a = n[t]
                                                    .toString()
                                                    .toLowerCase()),
                                                e.forEach(function (t, e) {
                                                    (t
                                                        .toString()
                                                        .toLowerCase() != a &&
                                                        -1 ===
                                                            a.indexOf(
                                                                t
                                                                    .toString()
                                                                    .toLowerCase()
                                                            )) ||
                                                        o++;
                                                }));
                                    }),
                                        (("AND" == i && o == l) ||
                                            ("OR" == i && 0 < o) ||
                                            ("NOT" == i && 0 == o)) &&
                                            (r[t] = e);
                                }),
                                (t = r)
                            );
                        },
                        resetScroll: function () {
                            void 0 === m.detail &&
                                1 === p.getDepth() &&
                                (f(u.table)
                                    .find(".m-datatable__row")
                                    .css("left", 0),
                                f(u.table)
                                    .find(".m-datatable__lock")
                                    .css("top", 0),
                                f(u.tableBody).scrollTop(0));
                        },
                        getColumnByField: function (a) {
                            var n;
                            if (void 0 !== a)
                                return (
                                    f.each(m.columns, function (t, e) {
                                        if (a === e.field) return (n = e), !1;
                                    }),
                                    n
                                );
                        },
                        getDefaultSortColumn: function () {
                            var a;
                            return (
                                f.each(m.columns, function (t, e) {
                                    if (
                                        void 0 !== e.sortable &&
                                        -1 !==
                                            f.inArray(e.sortable, [
                                                "asc",
                                                "desc",
                                            ])
                                    )
                                        return !(a = {
                                            sort: e.sortable,
                                            field: e.field,
                                        });
                                }),
                                a
                            );
                        },
                        getHiddenDimensions: function (t, e) {
                            var n = {
                                    position: "absolute",
                                    visibility: "hidden",
                                    display: "block",
                                },
                                a = {
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0,
                                    outerWidth: 0,
                                    outerHeight: 0,
                                },
                                o = f(t).parents().addBack().not(":visible");
                            e = "boolean" == typeof e && e;
                            var i = [];
                            return (
                                o.each(function () {
                                    var t,
                                        e = {};
                                    for (t in n)
                                        (e[t] = this.style[t]),
                                            (this.style[t] = n[t]);
                                    i.push(e);
                                }),
                                (a.width = f(t).width()),
                                (a.outerWidth = f(t).outerWidth(e)),
                                (a.innerWidth = f(t).innerWidth()),
                                (a.height = f(t).height()),
                                (a.innerHeight = f(t).innerHeight()),
                                (a.outerHeight = f(t).outerHeight(e)),
                                o.each(function (t) {
                                    var e,
                                        a = i[t];
                                    for (e in n) this.style[e] = a[e];
                                }),
                                a
                            );
                        },
                        getGeneralSearchKey: function () {
                            var t = f(p.getOption("search.input"));
                            return f(t).prop("name") || f(t).prop("id");
                        },
                        getObject: function (t, e) {
                            return t.split(".").reduce(function (t, e) {
                                return null !== t && void 0 !== t[e]
                                    ? t[e]
                                    : null;
                            }, e);
                        },
                        extendObj: function (t, e, n) {
                            var o = e.split("."),
                                i = 0;
                            return (
                                (function t(e) {
                                    var a = o[i++];
                                    (void 0 === e[a] ||
                                        null === e[a] ||
                                        ("object" != typeof e[a] &&
                                            "function" != typeof e[a])) &&
                                        (e[a] = {}),
                                        i === o.length ? (e[a] = n) : t(e[a]);
                                })(t),
                                t
                            );
                        },
                        timer: 0,
                        redraw: function () {
                            return (
                                p.adjustCellsWidth.call(),
                                p.isLocked() &&
                                    (p.scrollbar(),
                                    p.resetScroll(),
                                    p.adjustCellsHeight.call()),
                                p.adjustLockContainer.call(),
                                p.initHeight.call(),
                                u
                            );
                        },
                        load: function () {
                            return p.reload(), u;
                        },
                        reload: function () {
                            return (
                                (function (t, e) {
                                    clearTimeout(p.timer),
                                        (p.timer = setTimeout(t, e));
                                })(function () {
                                    m.data.serverFiltering ||
                                        p.localDataUpdate(),
                                        p.dataRender(),
                                        f(u).trigger(
                                            "m-datatable--on-reloaded"
                                        );
                                }, p.getOption("search.delay")),
                                u
                            );
                        },
                        getRecord: function (a) {
                            return (
                                void 0 === u.tableBody &&
                                    (u.tableBody = f(u.table).children(
                                        "tbody"
                                    )),
                                f(u.tableBody)
                                    .find(".m-datatable__cell:first-child")
                                    .each(function (t, e) {
                                        if (a == f(e).text()) {
                                            e =
                                                f(e)
                                                    .closest(
                                                        ".m-datatable__row"
                                                    )
                                                    .index() + 1;
                                            return (
                                                (u.API.record = u.API.value =
                                                    p.getOneRow(
                                                        u.tableBody,
                                                        e
                                                    )),
                                                u
                                            );
                                        }
                                    }),
                                u
                            );
                        },
                        getColumn: function (t) {
                            return (
                                p.setSelectedRecords(),
                                (u.API.value = f(u.API.record).find(
                                    '[data-field="' + t + '"]'
                                )),
                                u
                            );
                        },
                        destroy: function () {
                            f(u).parent().find(".m-datatable__pager").remove();
                            var t = f(u.initialDatatable)
                                .addClass("m-datatable--destroyed")
                                .show();
                            return (
                                f(u).replaceWith(t),
                                f((u = t)).trigger("m-datatable--on-destroy"),
                                (p.isInit = !1),
                                null
                            );
                        },
                        sort: function (t, e) {
                            (e = void 0 === e ? "asc" : e),
                                p.spinnerCallback(!0);
                            var a = { field: t, sort: e };
                            return (
                                p.setDataSourceParam("sort", a),
                                setTimeout(function () {
                                    p.dataRender("sort"),
                                        f(u).trigger("m-datatable--on-sort", a),
                                        f(u.tableHead)
                                            .find(
                                                ".m-datatable__cell > span > i"
                                            )
                                            .remove();
                                }, 300),
                                u
                            );
                        },
                        getValue: function () {
                            return f(u.API.value).text();
                        },
                        setActive: function (t) {
                            "string" == typeof t &&
                                (t = f(u.tableBody).find(
                                    '.m-checkbox--single > [type="checkbox"][value="' +
                                        t +
                                        '"]'
                                )),
                                f(t).prop("checked", !0);
                            var e = f(t)
                                    .closest(".m-datatable__row")
                                    .addClass("m-datatable__row--active"),
                                t = f(e).index() + 1;
                            f(e)
                                .closest(".m-datatable__lock")
                                .parent()
                                .find(".m-datatable__row:nth-child(" + t + ")")
                                .addClass("m-datatable__row--active");
                            var a = [];
                            f(e).each(function (t, e) {
                                e = f(e)
                                    .find(
                                        '.m-checkbox--single:not(.m-checkbox--all) > [type="checkbox"]'
                                    )
                                    .val();
                                void 0 !== e && a.push(e);
                            }),
                                f(u).trigger("m-datatable--on-check", [a]);
                        },
                        setInactive: function (t) {
                            "string" == typeof t &&
                                (t = f(u.tableBody).find(
                                    '.m-checkbox--single > [type="checkbox"][value="' +
                                        t +
                                        '"]'
                                )),
                                f(t).prop("checked", !1);
                            var e = f(t)
                                    .closest(".m-datatable__row")
                                    .removeClass("m-datatable__row--active"),
                                t = f(e).index() + 1;
                            f(e)
                                .closest(".m-datatable__lock")
                                .parent()
                                .find(".m-datatable__row:nth-child(" + t + ")")
                                .removeClass("m-datatable__row--active");
                            var a = [];
                            f(e).each(function (t, e) {
                                e = f(e)
                                    .find(
                                        '.m-checkbox--single:not(.m-checkbox--all) > [type="checkbox"]'
                                    )
                                    .val();
                                void 0 !== e && a.push(e);
                            }),
                                f(u).trigger("m-datatable--on-uncheck", [a]);
                        },
                        setActiveAll: function (t) {
                            var e = f(u.table)
                                .find(".m-datatable__body .m-datatable__row")
                                .find(
                                    '.m-datatable__cell--check .m-checkbox [type="checkbox"]'
                                );
                            t ? p.setActive(e) : p.setInactive(e);
                        },
                        setSelectedRecords: function () {
                            return (
                                (u.API.record = f(u.tableBody).find(
                                    ".m-datatable__row--active"
                                )),
                                u
                            );
                        },
                        getSelectedRecords: function () {
                            return (
                                p.setSelectedRecords(),
                                (u.API.record = u
                                    .rows(".m-datatable__row--active")
                                    .nodes()),
                                u.API.record
                            );
                        },
                        getOption: function (t) {
                            return p.getObject(t, m);
                        },
                        setOption: function (t, e) {
                            m = p.extendObj(m, t, e);
                        },
                        search: function (n, e) {
                            void 0 !== e && (e = f.makeArray(e)),
                                (function (t, e) {
                                    clearTimeout(p.timer),
                                        (p.timer = setTimeout(t, e));
                                })(function () {
                                    var t,
                                        a = p.getDataSourceQuery();
                                    void 0 === e &&
                                        void 0 !== n &&
                                        ((t = p.getGeneralSearchKey()),
                                        (a[t] = n)),
                                        "object" == typeof e &&
                                            (f.each(e, function (t, e) {
                                                a[e] = n;
                                            }),
                                            f.each(a, function (t, e) {
                                                ("" !== e &&
                                                    !f.isEmptyObject(e)) ||
                                                    delete a[t];
                                            })),
                                        p.setDataSourceQuery(a),
                                        m.data.serverFiltering ||
                                            p.localDataUpdate(),
                                        p.dataRender("search");
                                }, p.getOption("search.delay"));
                        },
                        setDataSourceParam: function (t, e) {
                            (u.API.params = f.extend(
                                {},
                                {
                                    pagination: {
                                        page: 1,
                                        perpage: p.getOption("data.pageSize"),
                                    },
                                    sort: p.getDefaultSortColumn(),
                                    query: {},
                                },
                                u.API.params,
                                p.stateGet(p.stateId)
                            )),
                                (u.API.params = p.extendObj(
                                    u.API.params,
                                    t,
                                    e
                                )),
                                p.stateKeep(p.stateId, u.API.params);
                        },
                        getDataSourceParam: function (t) {
                            return (
                                (u.API.params = f.extend(
                                    {},
                                    {
                                        pagination: {
                                            page: 1,
                                            perpage:
                                                p.getOption("data.pageSize"),
                                        },
                                        sort: p.getDefaultSortColumn(),
                                        query: {},
                                    },
                                    u.API.params,
                                    p.stateGet(p.stateId)
                                )),
                                "string" == typeof t
                                    ? p.getObject(t, u.API.params)
                                    : u.API.params
                            );
                        },
                        getDataSourceQuery: function () {
                            return p.getDataSourceParam("query") || {};
                        },
                        setDataSourceQuery: function (t) {
                            p.setDataSourceParam("query", t);
                        },
                        getCurrentPage: function () {
                            return (
                                f(u.table)
                                    .siblings(".m-datatable__pager")
                                    .last()
                                    .find(".m-datatable__pager-nav")
                                    .find(
                                        ".m-datatable__pager-link.m-datatable__pager-link--active"
                                    )
                                    .data("page") || 1
                            );
                        },
                        getPageSize: function () {
                            return (
                                f(u.table)
                                    .siblings(".m-datatable__pager")
                                    .last()
                                    .find("select.m-datatable__pager-size")
                                    .val() || 10
                            );
                        },
                        getTotalRows: function () {
                            return u.API.params.pagination.total;
                        },
                        getDataSet: function () {
                            return u.originalDataSet;
                        },
                        hideColumn: function (a) {
                            f.map(m.columns, function (t) {
                                return (
                                    a === t.field &&
                                        (t.responsive = { hidden: "xl" }),
                                    t
                                );
                            });
                            var t = f.grep(
                                f(u.table).find(".m-datatable__cell"),
                                function (t, e) {
                                    return a === f(t).data("field");
                                }
                            );
                            f(t).hide();
                        },
                        showColumn: function (a) {
                            f.map(m.columns, function (t) {
                                return a === t.field && delete t.responsive, t;
                            });
                            var t = f.grep(
                                f(u.table).find(".m-datatable__cell"),
                                function (t, e) {
                                    return a === f(t).data("field");
                                }
                            );
                            f(t).show();
                        },
                        destroyScroller: function (t) {
                            void 0 === t && (t = u.tableBody),
                                f(t).each(function () {
                                    if (f(this).hasClass("mCustomScrollbar"))
                                        try {
                                            mApp.destroyScroller(f(this));
                                        } catch (t) {
                                            console.log(t);
                                        }
                                });
                        },
                        nodeTr: [],
                        nodeTd: [],
                        nodeCols: [],
                        recentNode: [],
                        table: function () {
                            return u.table;
                        },
                        row: function (t) {
                            return (
                                p.rows(t),
                                (p.nodeTr = p.recentNode = f(p.nodeTr).first()),
                                u
                            );
                        },
                        rows: function (t) {
                            return (
                                (p.nodeTr = p.recentNode =
                                    f(u.tableBody)
                                        .find(t)
                                        .filter(".m-datatable__row")),
                                u
                            );
                        },
                        column: function (t) {
                            return (
                                (p.nodeCols = p.recentNode =
                                    f(u.tableBody).find(
                                        ".m-datatable__cell:nth-child(" +
                                            (t + 1) +
                                            ")"
                                    )),
                                u
                            );
                        },
                        columns: function (t) {
                            var e = u.table;
                            p.nodeTr === p.recentNode && (e = p.nodeTr);
                            var a = f(e).find(
                                '.m-datatable__cell[data-field="' + t + '"]'
                            );
                            return (
                                0 < a.length
                                    ? (p.nodeCols = p.recentNode = a)
                                    : (p.nodeCols = p.recentNode =
                                          f(e)
                                              .find(t)
                                              .filter(".m-datatable__cell")),
                                u
                            );
                        },
                        cell: function (t) {
                            return (
                                p.cells(t),
                                (p.nodeTd = p.recentNode = f(p.nodeTd).first()),
                                u
                            );
                        },
                        cells: function (t) {
                            var e = f(u.tableBody).find(".m-datatable__cell");
                            return (
                                void 0 !== t && (e = f(e).filter(t)),
                                (p.nodeTd = p.recentNode = e),
                                u
                            );
                        },
                        remove: function () {
                            return (
                                f(p.nodeTr.length) &&
                                    p.nodeTr === p.recentNode &&
                                    f(p.nodeTr).remove(),
                                p.layoutUpdate(),
                                u
                            );
                        },
                        visible: function (t) {
                            var e, a, n;
                            f(p.recentNode.length) &&
                                ((e = p.lockEnabledColumns()),
                                p.recentNode === p.nodeCols &&
                                    ((a = p.recentNode.index()),
                                    p.isLocked() &&
                                        ((n = f(p.recentNode).closest(
                                            ".m-datatable__lock--scroll"
                                        ).length)
                                            ? (a += e.left.length + 1)
                                            : f(p.recentNode).closest(
                                                  ".m-datatable__lock--right"
                                              ).length &&
                                              (a += e.left.length + n + 1))),
                                t
                                    ? (p.recentNode === p.nodeCols &&
                                          delete m.columns[a].responsive,
                                      f(p.recentNode).show())
                                    : (p.recentNode === p.nodeCols &&
                                          p.setOption(
                                              "columns." + a + ".responsive",
                                              { hidden: "xl" }
                                          ),
                                      f(p.recentNode).hide()),
                                p.redraw());
                        },
                        nodes: function () {
                            return p.recentNode;
                        },
                        dataset: function () {
                            return u;
                        },
                    };
                return (
                    f.each(p, function (t, e) {
                        u[t] = e;
                    }),
                    void 0 !== m
                        ? "string" == typeof m
                            ? ((t = m),
                              void 0 !== (u = f(this).data("mDatatable")) &&
                                  ((m = u.options),
                                  p[t].apply(
                                      this,
                                      Array.prototype.slice.call(arguments, 1)
                                  )))
                            : u.data("mDatatable") ||
                              f(this).hasClass("m-datatable--loaded") ||
                              ((u.dataSet = null),
                              (u.textAlign = {
                                  left: "m-datatable__cell--left",
                                  center: "m-datatable__cell--center",
                                  right: "m-datatable__cell--right",
                              }),
                              (m = f.extend(
                                  !0,
                                  {},
                                  f.fn.mDatatable.defaults,
                                  m
                              )),
                              (u.options = m),
                              p.init.apply(this, [m]),
                              f(u.wrap).data("mDatatable", u))
                        : (void 0 === (u = f(this).data("mDatatable")) &&
                              f.error("mDatatable not initialized"),
                          (m = u.options)),
                    u
                );
            }
            console.log("No mDatatable element exist.");
        }),
            (f.fn.mDatatable.defaults = {
                data: {
                    type: "local",
                    source: null,
                    pageSize: 10,
                    saveState: { cookie: !1, webstorage: !0 },
                    serverPaging: !1,
                    serverFiltering: !1,
                    serverSorting: !1,
                    autoColumns: !1,
                    attr: { rowProps: [] },
                },
                layout: {
                    theme: "default",
                    class: "m-datatable--brand",
                    scroll: !1,
                    height: null,
                    minHeight: 300,
                    footer: !1,
                    header: !0,
                    smoothScroll: { scrollbarShown: !0 },
                    spinner: {
                        overlayColor: "#000000",
                        opacity: 0,
                        type: "loader",
                        state: "brand",
                        message: !0,
                    },
                    icons: {
                        sort: {
                            asc: "la la-arrow-up",
                            desc: "la la-arrow-down",
                        },
                        pagination: {
                            next: "la la-angle-right",
                            prev: "la la-angle-left",
                            first: "la la-angle-double-left",
                            last: "la la-angle-double-right",
                            more: "la la-ellipsis-h",
                        },
                        rowDetail: {
                            expand: "fa fa-caret-down",
                            collapse: "fa fa-caret-right",
                        },
                    },
                },
                sortable: !0,
                resizable: !1,
                filterable: !1,
                pagination: !0,
                editable: !1,
                columns: [],
                search: { onEnter: !1, input: null, delay: 400 },
                rows: {
                    callback: function () {},
                    beforeTemplate: function () {},
                    afterTemplate: function () {},
                    autoHide: !1,
                },
                toolbar: {
                    layout: ["pagination", "info"],
                    placement: ["bottom"],
                    items: {
                        pagination: {
                            type: "default",
                            pages: {
                                desktop: { layout: "default", pagesNumber: 6 },
                                tablet: { layout: "default", pagesNumber: 3 },
                                mobile: { layout: "compact" },
                            },
                            navigation: {
                                prev: !0,
                                next: !0,
                                first: !0,
                                last: !0,
                            },
                            pageSizeSelect: [],
                        },
                        info: !0,
                    },
                },
                translate: {
                    records: {
                        processing: "Please wait...",
                        noRecords: "No records found",
                    },
                    toolbar: {
                        pagination: {
                            items: {
                                default: {
                                    first: "First",
                                    prev: "Previous",
                                    next: "Next",
                                    last: "Last",
                                    more: "More pages",
                                    input: "Page number",
                                    select: "Select page size",
                                },
                                info: "Displaying {{start}} - {{end}} of {{total}} records",
                            },
                        },
                    },
                },
                extensions: {},
            });
    })(jQuery);
var mDropdown = function (t, e) {
    var o = this,
        n = mUtil.get(t),
        i = mUtil.get("body");
    if (n) {
        var a = {
                toggle: "click",
                hoverTimeout: 300,
                skin: "light",
                height: "auto",
                maxHeight: !1,
                minHeight: !1,
                persistent: !1,
                mobileOverlay: !0,
            },
            l = {
                construct: function (t) {
                    return (
                        mUtil.data(n).has("dropdown")
                            ? (o = mUtil.data(n).get("dropdown"))
                            : (l.init(t),
                              l.setup(),
                              mUtil.data(n).set("dropdown", o)),
                        o
                    );
                },
                init: function (t) {
                    (o.options = mUtil.deepExtend({}, a, t)),
                        (o.events = []),
                        (o.eventHandlers = {}),
                        (o.open = !1),
                        (o.layout = {}),
                        (o.layout.close = mUtil.find(n, ".m-dropdown__close")),
                        (o.layout.toggle = mUtil.find(
                            n,
                            ".m-dropdown__toggle"
                        )),
                        (o.layout.arrow = mUtil.find(n, ".m-dropdown__arrow")),
                        (o.layout.wrapper = mUtil.find(
                            n,
                            ".m-dropdown__wrapper"
                        )),
                        (o.layout.defaultDropPos = mUtil.hasClass(
                            n,
                            "m-dropdown--up"
                        )
                            ? "up"
                            : "down"),
                        (o.layout.currentDropPos = o.layout.defaultDropPos),
                        "hover" == mUtil.attr(n, "m-dropdown-toggle") &&
                            (o.options.toggle = "hover");
                },
                setup: function () {
                    o.options.placement &&
                        mUtil.addClass(n, "m-dropdown--" + o.options.placement),
                        o.options.align &&
                            mUtil.addClass(
                                n,
                                "m-dropdown--align-" + o.options.align
                            ),
                        o.options.width &&
                            mUtil.css(
                                o.layout.wrapper,
                                "width",
                                o.options.width + "px"
                            ),
                        "1" == mUtil.attr(n, "m-dropdown-persistent") &&
                            (o.options.persistent = !0),
                        "hover" == o.options.toggle &&
                            mUtil.addEvent(n, "mouseout", l.hideMouseout),
                        l.setZindex();
                },
                toggle: function () {
                    return o.open ? l.hide() : l.show();
                },
                setContent: function (t) {
                    t = mUtil.find(n, ".m-dropdown__content").innerHTML = t;
                    return o;
                },
                show: function () {
                    return (
                        "hover" == o.options.toggle && mUtil.hasAttr(n, "hover")
                            ? l.clearHovered()
                            : o.open ||
                              (o.layout.arrow && l.adjustArrowPos(),
                              l.eventTrigger("beforeShow"),
                              l.hideOpened(),
                              mUtil.addClass(n, "m-dropdown--open"),
                              mUtil.isMobileDevice() &&
                                  o.options.mobileOverlay &&
                                  ((t = mUtil.css(n, "z-index") - 1),
                                  (e = mUtil.insertAfter(
                                      document.createElement("DIV"),
                                      n
                                  )),
                                  mUtil.addClass(e, "m-dropdown__dropoff"),
                                  mUtil.css(e, "z-index", t),
                                  mUtil.data(e).set("dropdown", n),
                                  mUtil.data(n).set("dropoff", e),
                                  mUtil.addEvent(e, "click", function (t) {
                                      l.hide(),
                                          mUtil.remove(this),
                                          t.preventDefault();
                                  })),
                              n.focus(),
                              n.setAttribute("aria-expanded", "true"),
                              (o.open = !0),
                              l.eventTrigger("afterShow")),
                        o
                    );
                    var t, e;
                },
                clearHovered: function () {
                    var t = mUtil.attr(n, "timeout");
                    mUtil.removeAttr(n, "hover"),
                        mUtil.removeAttr(n, "timeout"),
                        clearTimeout(t);
                },
                hideHovered: function (t) {
                    !0 === t
                        ? !1 !== l.eventTrigger("beforeHide") &&
                          (l.clearHovered(),
                          mUtil.removeClass(n, "m-dropdown--open"),
                          (o.open = !1),
                          l.eventTrigger("afterHide"))
                        : !0 !== mUtil.hasAttr(n, "hover") &&
                          !1 !== l.eventTrigger("beforeHide") &&
                          ((t = setTimeout(function () {
                              mUtil.attr(n, "hover") &&
                                  (l.clearHovered(),
                                  mUtil.removeClass(n, "m-dropdown--open"),
                                  (o.open = !1),
                                  l.eventTrigger("afterHide"));
                          }, o.options.hoverTimeout)),
                          mUtil.attr(n, "hover", "1"),
                          mUtil.attr(n, "timeout", t));
                },
                hideClicked: function () {
                    !1 !== l.eventTrigger("beforeHide") &&
                        (mUtil.removeClass(n, "m-dropdown--open"),
                        mUtil.data(n).remove("dropoff"),
                        (o.open = !1),
                        l.eventTrigger("afterHide"));
                },
                hide: function (t) {
                    return (
                        !1 === o.open ||
                            (mUtil.isDesktopDevice() &&
                            "hover" == o.options.toggle
                                ? l.hideHovered(t)
                                : l.hideClicked(),
                            "down" == o.layout.defaultDropPos &&
                                "up" == o.layout.currentDropPos &&
                                (mUtil.removeClass(n, "m-dropdown--up"),
                                o.layout.arrow.prependTo(o.layout.wrapper),
                                (o.layout.currentDropPos = "down"))),
                        o
                    );
                },
                hideMouseout: function () {
                    mUtil.isDesktopDevice() && l.hide();
                },
                hideOpened: function () {
                    for (
                        var t = mUtil.findAll(
                                i,
                                ".m-dropdown.m-dropdown--open"
                            ),
                            e = 0,
                            a = t.length;
                        e < a;
                        e++
                    ) {
                        var n = t[e];
                        mUtil.data(n).get("dropdown").hide(!0);
                    }
                },
                adjustArrowPos: function () {
                    var t = mUtil.outerWidth(n),
                        e = mUtil.hasClass(
                            o.layout.arrow,
                            "m-dropdown__arrow--right"
                        )
                            ? "right"
                            : "left",
                        a = 0;
                    o.layout.arrow &&
                        (mUtil.isInResponsiveRange("mobile") &&
                        mUtil.hasClass(n, "m-dropdown--mobile-full-width")
                            ? ((a =
                                  mUtil.offset(n).left +
                                  t / 2 -
                                  Math.abs(
                                      parseInt(
                                          mUtil.css(o.layout.arrow, "width")
                                      ) / 2
                                  ) -
                                  parseInt(
                                      mUtil.css(o.layout.wrapper, "left")
                                  )),
                              mUtil.css(o.layout.arrow, "right", "auto"),
                              mUtil.css(o.layout.arrow, "left", a + "px"),
                              mUtil.css(o.layout.arrow, "margin-left", "auto"),
                              mUtil.css(o.layout.arrow, "margin-right", "auto"))
                            : mUtil.hasClass(
                                  o.layout.arrow,
                                  "m-dropdown__arrow--adjust"
                              ) &&
                              ((a =
                                  t / 2 -
                                  Math.abs(
                                      parseInt(
                                          mUtil.css(o.layout.arrow, "width")
                                      ) / 2
                                  )),
                              mUtil.hasClass(n, "m-dropdown--align-push") &&
                                  (a += 20),
                              "right" == e
                                  ? (mUtil.css(o.layout.arrow, "left", "auto"),
                                    mUtil.css(
                                        o.layout.arrow,
                                        "right",
                                        a + "px"
                                    ))
                                  : (mUtil.css(o.layout.arrow, "right", "auto"),
                                    mUtil.css(
                                        o.layout.arrow,
                                        "left",
                                        a + "px"
                                    ))));
                },
                setZindex: function () {
                    var t = 101,
                        e = mUtil.getHighestZindex(n);
                    mUtil.css(
                        o.layout.wrapper,
                        "z-index",
                        (t = t <= e ? e + 1 : t)
                    );
                },
                isPersistent: function () {
                    return o.options.persistent;
                },
                isShown: function () {
                    return o.open;
                },
                eventTrigger: function (t, e) {
                    for (var a = 0; a < o.events.length; a++) {
                        var n = o.events[a];
                        n.name == t &&
                            (1 == n.one
                                ? 0 == n.fired &&
                                  ((o.events[a].fired = !0),
                                  n.handler.call(this, o, e))
                                : n.handler.call(this, o, e));
                    }
                },
                addEvent: function (t, e, a) {
                    o.events.push({ name: t, handler: e, one: a, fired: !1 });
                },
            };
        return (
            (o.setDefaults = function (t) {
                a = t;
            }),
            (o.show = function () {
                return l.show();
            }),
            (o.hide = function () {
                return l.hide();
            }),
            (o.toggle = function () {
                return l.toggle();
            }),
            (o.isPersistent = function () {
                return l.isPersistent();
            }),
            (o.isShown = function () {
                return l.isShown();
            }),
            (o.setContent = function (t) {
                return l.setContent(t);
            }),
            (o.on = function (t, e) {
                return l.addEvent(t, e);
            }),
            (o.one = function (t, e) {
                return l.addEvent(t, e, !0);
            }),
            l.construct.apply(o, [e]),
            o
        );
    }
};
mUtil.on(
    document,
    '[m-dropdown-toggle="click"] .m-dropdown__toggle',
    "click",
    function (t) {
        var e = this.closest(".m-dropdown");
        e &&
            ((mUtil.data(e).has("dropdown")
                ? mUtil.data(e).get("dropdown")
                : new mDropdown(e)
            ).toggle(),
            t.preventDefault());
    }
),
    mUtil.on(
        document,
        '[m-dropdown-toggle="hover"] .m-dropdown__toggle',
        "click",
        function (t) {
            var e;
            mUtil.isDesktopDevice()
                ? "#" == mUtil.attr(this, "href") && t.preventDefault()
                : !mUtil.isMobileDevice() ||
                  ((e = this.closest(".m-dropdown")) &&
                      ((mUtil.data(e).has("dropdown")
                          ? mUtil.data(e).get("dropdown")
                          : new mDropdown(e)
                      ).toggle(),
                      t.preventDefault()));
        }
    ),
    mUtil.on(
        document,
        '[m-dropdown-toggle="hover"]',
        "mouseover",
        function (t) {
            !mUtil.isDesktopDevice() ||
                (this &&
                    ((mUtil.data(this).has("dropdown")
                        ? mUtil.data(this).get("dropdown")
                        : new mDropdown(this)
                    ).show(),
                    t.preventDefault()));
        }
    ),
    document.addEventListener("click", function (t) {
        var e,
            a = mUtil.get("body"),
            n = t.target;
        if ((e = a.querySelectorAll(".m-dropdown.m-dropdown--open")))
            for (var o = 0, i = e.length; o < i; o++) {
                var l = e[o];
                if (!1 === mUtil.data(l).has("dropdown")) return;
                var r = mUtil.data(l).get("dropdown"),
                    s = mUtil.find(l, ".m-dropdown__toggle");
                mUtil.hasClass(l, "m-dropdown--disable-close") &&
                    (t.preventDefault(), t.stopPropagation()),
                    s && n !== s && !1 === s.contains(n) && !1 === n.contains(s)
                        ? (!0 === r.isPersistent() && !1 !== l.contains(n)) ||
                          r.hide()
                        : !1 === l.contains(n) && r.hide();
            }
    });
var mHeader = function (t, e) {
        var i = this,
            a = mUtil.get(t),
            l = mUtil.get("body");
        if (void 0 !== a) {
            var n = {
                    classic: !1,
                    offset: { mobile: 150, desktop: 200 },
                    minimize: { mobile: !1, desktop: !1 },
                },
                o = {
                    construct: function (t) {
                        return (
                            mUtil.data(a).has("header")
                                ? (i = mUtil.data(a).get("header"))
                                : (o.init(t),
                                  o.build(),
                                  mUtil.data(a).set("header", i)),
                            i
                        );
                    },
                    init: function (t) {
                        (i.events = []),
                            (i.options = mUtil.deepExtend({}, n, t));
                    },
                    build: function () {
                        var o = 0;
                        (!1 === i.options.minimize.mobile &&
                            !1 === i.options.minimize.desktop) ||
                            window.addEventListener("scroll", function () {
                                var t,
                                    e,
                                    a,
                                    n = 0;
                                mUtil.isInResponsiveRange("desktop")
                                    ? ((n = i.options.offset.desktop),
                                      (t = i.options.minimize.desktop.on),
                                      (e = i.options.minimize.desktop.off))
                                    : mUtil.isInResponsiveRange(
                                          "tablet-and-mobile"
                                      ) &&
                                      ((n = i.options.offset.mobile),
                                      (t = i.options.minimize.mobile.on),
                                      (e = i.options.minimize.mobile.off)),
                                    (a = window.pageYOffset),
                                    (mUtil.isInResponsiveRange(
                                        "tablet-and-mobile"
                                    ) &&
                                        i.options.classic &&
                                        i.options.classic.mobile) ||
                                    (mUtil.isInResponsiveRange("desktop") &&
                                        i.options.classic &&
                                        i.options.classic.desktop)
                                        ? n < a
                                            ? (mUtil.addClass(l, t),
                                              mUtil.removeClass(l, e))
                                            : (mUtil.addClass(l, e),
                                              mUtil.removeClass(l, t))
                                        : (n < a && o < a
                                              ? (mUtil.addClass(l, t),
                                                mUtil.removeClass(l, e))
                                              : (mUtil.addClass(l, e),
                                                mUtil.removeClass(l, t)),
                                          (o = a));
                            });
                    },
                    eventTrigger: function (t, e) {
                        for (var a = 0; a < i.events.length; a++) {
                            var n = i.events[a];
                            n.name == t &&
                                (1 == n.one
                                    ? 0 == n.fired &&
                                      ((i.events[a].fired = !0),
                                      n.handler.call(this, i, e))
                                    : n.handler.call(this, i, e));
                        }
                    },
                    addEvent: function (t, e, a) {
                        i.events.push({
                            name: t,
                            handler: e,
                            one: a,
                            fired: !1,
                        });
                    },
                };
            return (
                (i.setDefaults = function (t) {
                    n = t;
                }),
                (i.on = function (t, e) {
                    return o.addEvent(t, e);
                }),
                o.construct.apply(i, [e]),
                i
            );
        }
    },
    mMenu = function (t, e) {
        var c = this,
            a = !1,
            d = mUtil.get(t),
            i = mUtil.get("body");
        if (d) {
            var n = {
                    autoscroll: { speed: 1200 },
                    accordion: {
                        slideSpeed: 200,
                        autoScroll: !0,
                        autoScrollSpeed: 1200,
                        expandAll: !0,
                    },
                    dropdown: { timeout: 500 },
                },
                m = {
                    construct: function (t) {
                        return (
                            mUtil.data(d).has("menu")
                                ? (c = mUtil.data(d).get("menu"))
                                : (m.init(t),
                                  m.reset(),
                                  m.build(),
                                  mUtil.data(d).set("menu", c)),
                            c
                        );
                    },
                    init: function (t) {
                        (c.events = []),
                            (c.eventHandlers = {}),
                            (c.options = mUtil.deepExtend({}, n, t)),
                            (c.pauseDropdownHoverTime = 0),
                            (c.uid = mUtil.getUniqueID());
                    },
                    reload: function () {
                        m.reset(), m.build();
                    },
                    build: function () {
                        (c.eventHandlers.event_1 = mUtil.on(
                            d,
                            ".m-menu__toggle",
                            "click",
                            m.handleSubmenuAccordion
                        )),
                            ("dropdown" !== m.getSubmenuMode() &&
                                !m.isConditionalSubmenuDropdown()) ||
                                ((c.eventHandlers.event_2 = mUtil.on(
                                    d,
                                    '[m-menu-submenu-toggle="hover"]',
                                    "mouseover",
                                    m.handleSubmenuDrodownHoverEnter
                                )),
                                (c.eventHandlers.event_3 = mUtil.on(
                                    d,
                                    '[m-menu-submenu-toggle="hover"]',
                                    "mouseout",
                                    m.handleSubmenuDrodownHoverExit
                                )),
                                (c.eventHandlers.event_4 = mUtil.on(
                                    d,
                                    '[m-menu-submenu-toggle="click"] > .m-menu__toggle, [m-menu-submenu-toggle="click"] > .m-menu__link .m-menu__toggle',
                                    "click",
                                    m.handleSubmenuDropdownClick
                                )),
                                (c.eventHandlers.event_5 = mUtil.on(
                                    d,
                                    '[m-menu-submenu-toggle="tab"] > .m-menu__toggle, [m-menu-submenu-toggle="tab"] > .m-menu__link .m-menu__toggle',
                                    "click",
                                    m.handleSubmenuDropdownTabClick
                                ))),
                            (c.eventHandlers.event_6 = mUtil.on(
                                d,
                                ".m-menu__item:not(.m-menu__item--submenu) > .m-menu__link:not(.m-menu__toggle):not(.m-menu__link--toggle-skip)",
                                "click",
                                m.handleLinkClick
                            ));
                    },
                    reset: function () {
                        mUtil.off(d, "click", c.eventHandlers.event_1),
                            mUtil.off(d, "mouseover", c.eventHandlers.event_2),
                            mUtil.off(d, "mouseout", c.eventHandlers.event_3),
                            mUtil.off(d, "click", c.eventHandlers.event_4),
                            mUtil.off(d, "click", c.eventHandlers.event_5),
                            mUtil.off(d, "click", c.eventHandlers.event_6);
                    },
                    getSubmenuMode: function () {
                        return mUtil.isInResponsiveRange("desktop")
                            ? mUtil.isset(
                                  c.options.submenu,
                                  "desktop.state.body"
                              )
                                ? mUtil.hasClass(
                                      i,
                                      c.options.submenu.desktop.state.body
                                  )
                                    ? c.options.submenu.desktop.state.mode
                                    : c.options.submenu.desktop.default
                                : mUtil.isset(c.options.submenu, "desktop")
                                ? c.options.submenu.desktop
                                : void 0
                            : mUtil.isInResponsiveRange("tablet") &&
                              mUtil.isset(c.options.submenu, "tablet")
                            ? c.options.submenu.tablet
                            : !(
                                  !mUtil.isInResponsiveRange("mobile") ||
                                  !mUtil.isset(c.options.submenu, "mobile")
                              ) && c.options.submenu.mobile;
                    },
                    isConditionalSubmenuDropdown: function () {
                        return !(
                            !mUtil.isInResponsiveRange("desktop") ||
                            !mUtil.isset(
                                c.options.submenu,
                                "desktop.state.body"
                            )
                        );
                    },
                    handleLinkClick: function (t) {
                        !1 === m.eventTrigger("linkClick", this) &&
                            t.preventDefault(),
                            ("dropdown" !== m.getSubmenuMode() &&
                                !m.isConditionalSubmenuDropdown()) ||
                                m.handleSubmenuDropdownClose(t, this);
                    },
                    handleSubmenuDrodownHoverEnter: function (t) {
                        var e;
                        "accordion" !== m.getSubmenuMode() &&
                            !1 !== c.resumeDropdownHover() &&
                            ("1" == (e = this).getAttribute("data-hover") &&
                                (e.removeAttribute("data-hover"),
                                clearTimeout(e.getAttribute("data-timeout")),
                                e.removeAttribute("data-timeout")),
                            m.showSubmenuDropdown(e));
                    },
                    handleSubmenuDrodownHoverExit: function (t) {
                        var e, a;
                        !1 !== c.resumeDropdownHover() &&
                            "accordion" !== m.getSubmenuMode() &&
                            ((e = this),
                            (a = c.options.dropdown.timeout),
                            (a = setTimeout(function () {
                                "1" == e.getAttribute("data-hover") &&
                                    m.hideSubmenuDropdown(e, !0);
                            }, a)),
                            e.setAttribute("data-hover", "1"),
                            e.setAttribute("data-timeout", a));
                    },
                    handleSubmenuDropdownClick: function (t) {
                        var e;
                        "accordion" === m.getSubmenuMode() ||
                            ("accordion" !=
                                (e =
                                    this.closest(".m-menu__item")).getAttribute(
                                    "m-menu-submenu-mode"
                                ) &&
                                (!1 === mUtil.hasClass(e, "m-menu__item--hover")
                                    ? (mUtil.addClass(
                                          e,
                                          "m-menu__item--open-dropdown"
                                      ),
                                      m.showSubmenuDropdown(e))
                                    : (mUtil.removeClass(
                                          e,
                                          "m-menu__item--open-dropdown"
                                      ),
                                      m.hideSubmenuDropdown(e, !0)),
                                t.preventDefault()));
                    },
                    handleSubmenuDropdownTabClick: function (t) {
                        var e;
                        "accordion" === m.getSubmenuMode() ||
                            ("accordion" !=
                                (e =
                                    this.closest(".m-menu__item")).getAttribute(
                                    "m-menu-submenu-mode"
                                ) &&
                                (0 ==
                                    mUtil.hasClass(e, "m-menu__item--hover") &&
                                    (mUtil.addClass(
                                        e,
                                        "m-menu__item--open-dropdown"
                                    ),
                                    m.showSubmenuDropdown(e)),
                                t.preventDefault()));
                    },
                    handleSubmenuDropdownClose: function (t, e) {
                        if ("accordion" !== m.getSubmenuMode()) {
                            var a = d.querySelectorAll(
                                ".m-menu__item.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)"
                            );
                            if (
                                0 < a.length &&
                                !1 === mUtil.hasClass(e, "m-menu__toggle") &&
                                0 ===
                                    e.querySelectorAll(".m-menu__toggle").length
                            )
                                for (var n = 0, o = a.length; n < o; n++)
                                    m.hideSubmenuDropdown(a[0], !0);
                        }
                    },
                    handleSubmenuAccordion: function (t, e) {
                        var a = e || this;
                        if (
                            "dropdown" === m.getSubmenuMode() &&
                            (n = a.closest(".m-menu__item")) &&
                            "accordion" != n.getAttribute("m-menu-submenu-mode")
                        )
                            t.preventDefault();
                        else {
                            var e = a.closest(".m-menu__item"),
                                n = mUtil.child(
                                    e,
                                    ".m-menu__submenu, .m-menu__inner"
                                );
                            if (
                                !mUtil.hasClass(
                                    a.closest(".m-menu__item"),
                                    "m-menu__item--open-always"
                                ) &&
                                e &&
                                n
                            ) {
                                t.preventDefault();
                                var o = c.options.accordion.slideSpeed;
                                if (
                                    !1 ===
                                    mUtil.hasClass(e, "m-menu__item--open")
                                ) {
                                    if (!1 === c.options.accordion.expandAll) {
                                        var t = a.closest(
                                                ".m-menu__nav, .m-menu__subnav"
                                            ),
                                            i = mUtil.children(
                                                t,
                                                ".m-menu__item.m-menu__item--open.m-menu__item--submenu:not(.m-menu__item--expanded):not(.m-menu__item--open-always)"
                                            );
                                        if (t && i)
                                            for (
                                                var l = 0, r = i.length;
                                                l < r;
                                                l++
                                            ) {
                                                var s = i[0],
                                                    d = mUtil.child(
                                                        s,
                                                        ".m-menu__submenu"
                                                    );
                                                d &&
                                                    mUtil.slideUp(
                                                        d,
                                                        o,
                                                        function () {
                                                            mUtil.removeClass(
                                                                s,
                                                                "m-menu__item--open"
                                                            );
                                                        }
                                                    );
                                            }
                                    }
                                    mUtil.slideDown(n, o, function () {
                                        m.scrollToItem(a);
                                    }),
                                        mUtil.addClass(e, "m-menu__item--open");
                                } else
                                    mUtil.slideUp(n, o, function () {
                                        m.scrollToItem(a);
                                    }),
                                        mUtil.removeClass(
                                            e,
                                            "m-menu__item--open"
                                        );
                            }
                        }
                    },
                    scrollToItem: function (t) {
                        mUtil.isInResponsiveRange("desktop") &&
                            c.options.accordion.autoScroll &&
                            "1" !== d.getAttribute("m-menu-scrollable") &&
                            mUtil.scrollToCenter(
                                t,
                                c.options.accordion.autoScrollSpeed
                            );
                    },
                    hideSubmenuDropdown: function (t, e) {
                        e &&
                            (mUtil.removeClass(t, "m-menu__item--hover"),
                            mUtil.removeClass(t, "m-menu__item--active-tab")),
                            t.removeAttribute("data-hover"),
                            t.getAttribute("m-menu-dropdown-toggle-class") &&
                                mUtil.removeClass(
                                    i,
                                    t.getAttribute(
                                        "m-menu-dropdown-toggle-class"
                                    )
                                );
                        e = t.getAttribute("data-timeout");
                        t.removeAttribute("data-timeout"), clearTimeout(e);
                    },
                    showSubmenuDropdown: function (t) {
                        var e = d.querySelectorAll(
                            ".m-menu__item--submenu.m-menu__item--hover, .m-menu__item--submenu.m-menu__item--active-tab"
                        );
                        if (e)
                            for (var a = 0, n = e.length; a < n; a++) {
                                var o = e[a];
                                t !== o &&
                                    !1 === o.contains(t) &&
                                    !1 === t.contains(o) &&
                                    m.hideSubmenuDropdown(o, !0);
                            }
                        m.adjustSubmenuDropdownArrowPos(t),
                            mUtil.addClass(t, "m-menu__item--hover"),
                            t.getAttribute("m-menu-dropdown-toggle-class") &&
                                mUtil.addClass(
                                    i,
                                    t.getAttribute(
                                        "m-menu-dropdown-toggle-class"
                                    )
                                );
                    },
                    createSubmenuDropdownClickDropoff: function (e) {
                        var t =
                                (t = mUtil.child(e, ".m-menu__submenu")
                                    ? mUtil.css(t, "z-index")
                                    : 0) - 1,
                            t = document.createElement(
                                '<div class="m-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' +
                                    t +
                                    '"></div>'
                            );
                        i.appendChild(t),
                            mUtil.addEvent(t, "click", function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    mUtil.remove(this),
                                    m.hideSubmenuDropdown(e, !0);
                            });
                    },
                    adjustSubmenuDropdownArrowPos: function (t) {
                        var e,
                            a = mUtil.child(t, ".m-menu__submenu"),
                            n = mUtil.child(
                                a,
                                ".m-menu__arrow.m-menu__arrow--adjust"
                            );
                        mUtil.child(a, ".m-menu__subnav");
                        n &&
                            ((e = 0),
                            mUtil.child(t, ".m-menu__link"),
                            mUtil.hasClass(a, "m-menu__submenu--classic") ||
                            mUtil.hasClass(a, "m-menu__submenu--fixed")
                                ? mUtil.hasClass(a, "m-menu__submenu--right")
                                    ? ((e = mUtil.outerWidth(t) / 2),
                                      mUtil.hasClass(
                                          a,
                                          "m-menu__submenu--pull"
                                      ) &&
                                          (e += Math.abs(
                                              parseFloat(
                                                  mUtil.css(a, "margin-right")
                                              )
                                          )),
                                      (e = parseInt(mUtil.css(a, "width")) - e))
                                    : mUtil.hasClass(
                                          a,
                                          "m-menu__submenu--left"
                                      ) &&
                                      ((e = mUtil.outerWidth(t) / 2),
                                      mUtil.hasClass(
                                          a,
                                          "m-menu__submenu--pull"
                                      ) &&
                                          (e += Math.abs(
                                              parseFloat(
                                                  mUtil.css(a, "margin-left")
                                              )
                                          )))
                                : (mUtil.hasClass(
                                      a,
                                      "m-menu__submenu--center"
                                  ) ||
                                      mUtil.hasClass(
                                          a,
                                          "m-menu__submenu--full"
                                      )) &&
                                  ((e =
                                      mUtil.offset(t).left -
                                      (mUtil.getViewPort().width -
                                          parseInt(mUtil.css(a, "width"))) /
                                          2),
                                  (e += mUtil.outerWidth(t) / 2)),
                            mUtil.css(n, "left", e + "px"));
                    },
                    pauseDropdownHover: function (t) {
                        var e = new Date();
                        c.pauseDropdownHoverTime = e.getTime() + t;
                    },
                    resumeDropdownHover: function () {
                        return new Date().getTime() > c.pauseDropdownHoverTime;
                    },
                    resetActiveItem: function (t) {
                        for (
                            var e = d.querySelectorAll(".m-menu__item--active"),
                                a = 0,
                                n = e.length;
                            a < n;
                            a++
                        ) {
                            var o = e[0];
                            mUtil.removeClass(o, "m-menu__item--active"),
                                mUtil.hide(mUtil.child(o, ".m-menu__submenu"));
                            for (
                                var i,
                                    l = 0,
                                    r = (i = mUtil.parents(
                                        o,
                                        ".m-menu__item--submenu"
                                    )).length;
                                l < r;
                                l++
                            ) {
                                var s = i[a];
                                mUtil.removeClass(s, "m-menu__item--open"),
                                    mUtil.hide(
                                        mUtil.child(s, ".m-menu__submenu")
                                    );
                            }
                        }
                        if (
                            !1 === c.options.accordion.expandAll &&
                            (e = d.querySelectorAll(".m-menu__item--open"))
                        )
                            for (a = 0, n = e.length; a < n; a++)
                                mUtil.removeClass(i[0], "m-menu__item--open");
                    },
                    setActiveItem: function (t) {
                        m.resetActiveItem(),
                            mUtil.addClass(t, "m-menu__item--active");
                        for (
                            var e = mUtil.parents(t, ".m-menu__item--submenu"),
                                a = 0,
                                n = e.length;
                            a < n;
                            a++
                        )
                            mUtil.addClass(e[a], "m-menu__item--open");
                    },
                    getBreadcrumbs: function (t) {
                        var e,
                            a = [],
                            n = mUtil.child(t, ".m-menu__link");
                        a.push({
                            text: (e = mUtil.child(n, ".m-menu__link-text")
                                ? e.innerHTML
                                : ""),
                            title: n.getAttribute("title"),
                            href: n.getAttribute("href"),
                        });
                        for (
                            var o = mUtil.parents(t, ".m-menu__item--submenu"),
                                i = 0,
                                l = o.length;
                            i < l;
                            i++
                        ) {
                            var r = mUtil.child(o[i], ".m-menu__link");
                            a.push({
                                text: (e = mUtil.child(r, ".m-menu__link-text")
                                    ? e.innerHTML
                                    : ""),
                                title: r.getAttribute("title"),
                                href: r.getAttribute("href"),
                            });
                        }
                        return a.reverse();
                    },
                    getPageTitle: function (t) {
                        var e;
                        return mUtil.child(t, ".m-menu__link-text")
                            ? e.innerHTML
                            : "";
                    },
                    eventTrigger: function (t, e) {
                        for (var a = 0; a < c.events.length; a++) {
                            var n = c.events[a];
                            n.name == t &&
                                (1 == n.one
                                    ? 0 == n.fired &&
                                      ((c.events[a].fired = !0),
                                      n.handler.call(this, c, e))
                                    : n.handler.call(this, c, e));
                        }
                    },
                    addEvent: function (t, e, a) {
                        c.events.push({
                            name: t,
                            handler: e,
                            one: a,
                            fired: !1,
                        });
                    },
                };
            return (
                (c.setDefaults = function (t) {
                    n = t;
                }),
                (c.setActiveItem = function (t) {
                    return m.setActiveItem(t);
                }),
                (c.reload = function () {
                    return m.reload();
                }),
                (c.getBreadcrumbs = function (t) {
                    return m.getBreadcrumbs(t);
                }),
                (c.getPageTitle = function (t) {
                    return m.getPageTitle(t);
                }),
                (c.getSubmenuMode = function () {
                    return m.getSubmenuMode();
                }),
                (c.hideDropdown = function (t) {
                    m.hideSubmenuDropdown(t, !0);
                }),
                (c.pauseDropdownHover = function (t) {
                    m.pauseDropdownHover(t);
                }),
                (c.resumeDropdownHover = function () {
                    return m.resumeDropdownHover();
                }),
                (c.on = function (t, e) {
                    return m.addEvent(t, e);
                }),
                (c.one = function (t, e) {
                    return m.addEvent(t, e, !0);
                }),
                m.construct.apply(c, [e]),
                mUtil.addResizeHandler(function () {
                    a && c.reload();
                }),
                (a = !0),
                c
            );
        }
    };
document.addEventListener("click", function (t) {
    var e;
    if (
        (e = mUtil
            .get("body")
            .querySelectorAll(
                '.m-menu__nav .m-menu__item.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)[m-menu-submenu-toggle="click"]'
            ))
    )
        for (var a = 0, n = e.length; a < n; a++) {
            var o = e[a].closest(".m-menu__nav").parentNode;
            if (o) {
                var i,
                    l = mUtil.data(o).get("menu");
                if (!l) break;
                if (!l || "dropdown" !== l.getSubmenuMode()) break;
                if (t.target !== o && !1 === o.contains(t.target))
                    if (
                        (i = o.querySelectorAll(
                            '.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)[m-menu-submenu-toggle="click"]'
                        ))
                    )
                        for (var r = 0, s = i.length; r < s; r++)
                            l.hideDropdown(i[r]);
            }
        }
});
var mOffcanvas = function (t, e) {
        var i = this,
            a = mUtil.get(t),
            n = mUtil.get("body");
        if (a) {
            var o = {},
                l = {
                    construct: function (t) {
                        return (
                            mUtil.data(a).has("offcanvas")
                                ? (i = mUtil.data(a).get("offcanvas"))
                                : (l.init(t),
                                  l.build(),
                                  mUtil.data(a).set("offcanvas", i)),
                            i
                        );
                    },
                    init: function (t) {
                        (i.events = []),
                            (i.options = mUtil.deepExtend({}, o, t)),
                            i.overlay,
                            (i.classBase = i.options.baseClass),
                            (i.classShown = i.classBase + "--on"),
                            (i.classOverlay = i.classBase + "-overlay"),
                            (i.state = mUtil.hasClass(a, i.classShown)
                                ? "shown"
                                : "hidden");
                    },
                    build: function () {
                        if (i.options.toggleBy)
                            if ("string" == typeof i.options.toggleBy)
                                mUtil.addEvent(
                                    i.options.toggleBy,
                                    "click",
                                    l.toggle
                                );
                            else if (
                                i.options.toggleBy &&
                                i.options.toggleBy[0] &&
                                i.options.toggleBy[0].target
                            )
                                for (var t in i.options.toggleBy)
                                    mUtil.addEvent(
                                        i.options.toggleBy[t].target,
                                        "click",
                                        l.toggle
                                    );
                            else
                                i.options.toggleBy &&
                                    i.options.toggleBy.target &&
                                    mUtil.addEvent(
                                        i.options.toggleBy.target,
                                        "click",
                                        l.toggle
                                    );
                        var e = mUtil.get(i.options.closeBy);
                        e && mUtil.addEvent(e, "click", l.hide);
                    },
                    toggle: function () {
                        l.eventTrigger("toggle"),
                            "shown" == i.state ? l.hide(this) : l.show(this);
                    },
                    show: function (e) {
                        "shown" != i.state &&
                            (l.eventTrigger("beforeShow"),
                            l.togglerClass(e, "show"),
                            mUtil.addClass(n, i.classShown),
                            mUtil.addClass(a, i.classShown),
                            (i.state = "shown"),
                            i.options.overlay &&
                                ((i.overlay = mUtil.insertAfter(
                                    document.createElement("DIV"),
                                    a
                                )),
                                mUtil.addClass(i.overlay, i.classOverlay),
                                mUtil.addEvent(
                                    i.overlay,
                                    "click",
                                    function (t) {
                                        t.stopPropagation(),
                                            t.preventDefault(),
                                            l.hide(e);
                                    }
                                )),
                            l.eventTrigger("afterShow"));
                    },
                    hide: function (t) {
                        "hidden" != i.state &&
                            (l.eventTrigger("beforeHide"),
                            l.togglerClass(t, "hide"),
                            mUtil.removeClass(n, i.classShown),
                            mUtil.removeClass(a, i.classShown),
                            (i.state = "hidden"),
                            i.options.overlay &&
                                i.overlay &&
                                mUtil.remove(i.overlay),
                            l.eventTrigger("afterHide"));
                    },
                    togglerClass: function (t, e) {
                        var a,
                            n = mUtil.attr(t, "id");
                        if (
                            i.options.toggleBy &&
                            i.options.toggleBy[0] &&
                            i.options.toggleBy[0].target
                        )
                            for (var o in i.options.toggleBy)
                                i.options.toggleBy[o].target === n &&
                                    (a = i.options.toggleBy[o]);
                        else
                            i.options.toggleBy &&
                                i.options.toggleBy.target &&
                                (a = i.options.toggleBy);
                        a &&
                            ((t = mUtil.get(a.target)),
                            "show" === e && mUtil.addClass(t, a.state),
                            "hide" === e && mUtil.removeClass(t, a.state));
                    },
                    eventTrigger: function (t, e) {
                        for (var a = 0; a < i.events.length; a++) {
                            var n = i.events[a];
                            n.name == t &&
                                (1 == n.one
                                    ? 0 == n.fired &&
                                      ((i.events[a].fired = !0),
                                      n.handler.call(this, i, e))
                                    : n.handler.call(this, i, e));
                        }
                    },
                    addEvent: function (t, e, a) {
                        i.events.push({
                            name: t,
                            handler: e,
                            one: a,
                            fired: !1,
                        });
                    },
                };
            return (
                (i.setDefaults = function (t) {
                    o = t;
                }),
                (i.hide = function () {
                    return l.hide();
                }),
                (i.show = function () {
                    return l.show();
                }),
                (i.on = function (t, e) {
                    return l.addEvent(t, e);
                }),
                (i.one = function (t, e) {
                    return l.addEvent(t, e, !0);
                }),
                l.construct.apply(i, [e]),
                i
            );
        }
    },
    mPortlet = function (t, e) {
        var l = this,
            r = mUtil.get(t),
            s = mUtil.get("body");
        if (r) {
            var a = {
                    bodyToggleSpeed: 400,
                    tooltips: !0,
                    tools: {
                        toggle: { collapse: "Collapse", expand: "Expand" },
                        reload: "Reload",
                        remove: "Remove",
                        fullscreen: {
                            on: "Fullscreen",
                            off: "Exit Fullscreen",
                        },
                    },
                },
                n = {
                    construct: function (t) {
                        return (
                            mUtil.data(r).has("portlet")
                                ? (l = mUtil.data(r).get("portlet"))
                                : (n.init(t),
                                  n.build(),
                                  mUtil.data(r).set("portlet", l)),
                            l
                        );
                    },
                    init: function (t) {
                        (l.element = r),
                            (l.events = []),
                            (l.options = mUtil.deepExtend({}, a, t)),
                            (l.head = mUtil.child(r, ".m-portlet__head")),
                            (l.foot = mUtil.child(r, ".m-portlet__foot")),
                            mUtil.child(r, ".m-portlet__body")
                                ? (l.body = mUtil.child(r, ".m-portlet__body"))
                                : 0 !== mUtil.child(r, ".m-form").length &&
                                  (l.body = mUtil.child(r, ".m-form"));
                    },
                    build: function () {
                        var t = mUtil.find(l.head, "[m-portlet-tool=remove]");
                        t &&
                            mUtil.addEvent(t, "click", function (t) {
                                t.preventDefault(), n.remove();
                            });
                        t = mUtil.find(l.head, "[m-portlet-tool=reload]");
                        t &&
                            mUtil.addEvent(t, "click", function (t) {
                                t.preventDefault(), n.reload();
                            });
                        t = mUtil.find(l.head, "[m-portlet-tool=toggle]");
                        t &&
                            mUtil.addEvent(t, "click", function (t) {
                                t.preventDefault(), n.toggle();
                            });
                        t = mUtil.find(l.head, "[m-portlet-tool=fullscreen]");
                        t &&
                            mUtil.addEvent(t, "click", function (t) {
                                t.preventDefault(), n.fullscreen();
                            }),
                            n.setupTooltips();
                    },
                    remove: function () {
                        !1 !== n.eventTrigger("beforeRemove") &&
                            (mUtil.hasClass(s, "m-portlet--fullscreen") &&
                                mUtil.hasClass(r, "m-portlet--fullscreen") &&
                                n.fullscreen("off"),
                            n.removeTooltips(),
                            mUtil.remove(r),
                            n.eventTrigger("afterRemove"));
                    },
                    setContent: function (t) {
                        t && (l.body.innerHTML = t);
                    },
                    getBody: function () {
                        return l.body;
                    },
                    getSelf: function () {
                        return r;
                    },
                    setupTooltips: function () {
                        var t, e, a, n, o;
                        l.options.tooltips &&
                            ((t =
                                mUtil.hasClass(r, "m-portlet--collapse") ||
                                mUtil.hasClass(r, "m-portlet--collapsed")),
                            (e =
                                mUtil.hasClass(s, "m-portlet--fullscreen") &&
                                mUtil.hasClass(r, "m-portlet--fullscreen")),
                            (a = mUtil.find(
                                l.head,
                                "[m-portlet-tool=remove]"
                            )) &&
                                ((n = e ? "bottom" : "top"),
                                (o = new Tooltip(a, {
                                    title: l.options.tools.remove,
                                    placement: n,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template:
                                        '<div class="m-tooltip m-tooltip--portlet tooltip bs-tooltip-' +
                                        n +
                                        '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>',
                                })),
                                mUtil.data(a).set("tooltip", o)),
                            (a = mUtil.find(
                                l.head,
                                "[m-portlet-tool=reload]"
                            )) &&
                                ((n = e ? "bottom" : "top"),
                                (o = new Tooltip(a, {
                                    title: l.options.tools.reload,
                                    placement: n,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template:
                                        '<div class="m-tooltip m-tooltip--portlet tooltip bs-tooltip-' +
                                        n +
                                        '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>',
                                })),
                                mUtil.data(a).set("tooltip", o)),
                            (a = mUtil.find(
                                l.head,
                                "[m-portlet-tool=toggle]"
                            )) &&
                                ((n = e ? "bottom" : "top"),
                                (o = new Tooltip(a, {
                                    title: t
                                        ? l.options.tools.toggle.expand
                                        : l.options.tools.toggle.collapse,
                                    placement: n,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template:
                                        '<div class="m-tooltip m-tooltip--portlet tooltip bs-tooltip-' +
                                        n +
                                        '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>',
                                })),
                                mUtil.data(a).set("tooltip", o)),
                            (a = mUtil.find(
                                l.head,
                                "[m-portlet-tool=fullscreen]"
                            )) &&
                                ((n = e ? "bottom" : "top"),
                                (o = new Tooltip(a, {
                                    title: e
                                        ? l.options.tools.fullscreen.off
                                        : l.options.tools.fullscreen.on,
                                    placement: n,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template:
                                        '<div class="m-tooltip m-tooltip--portlet tooltip bs-tooltip-' +
                                        n +
                                        '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>',
                                })),
                                mUtil.data(a).set("tooltip", o)));
                    },
                    removeTooltips: function () {
                        var t;
                        l.options.tooltips &&
                            ((t = mUtil.find(
                                l.head,
                                "[m-portlet-tool=remove]"
                            )) &&
                                mUtil.data(t).has("tooltip") &&
                                mUtil.data(t).get("tooltip").dispose(),
                            (t = mUtil.find(
                                l.head,
                                "[m-portlet-tool=reload]"
                            )) &&
                                mUtil.data(t).has("tooltip") &&
                                mUtil.data(t).get("tooltip").dispose(),
                            (t = mUtil.find(
                                l.head,
                                "[m-portlet-tool=toggle]"
                            )) &&
                                mUtil.data(t).has("tooltip") &&
                                mUtil.data(t).get("tooltip").dispose(),
                            (t = mUtil.find(
                                l.head,
                                "[m-portlet-tool=fullscreen]"
                            )) &&
                                mUtil.data(t).has("tooltip") &&
                                mUtil.data(t).get("tooltip").dispose());
                    },
                    reload: function () {
                        n.eventTrigger("reload");
                    },
                    toggle: function () {
                        mUtil.hasClass(r, "m-portlet--collapse") ||
                        mUtil.hasClass(r, "m-portlet--collapsed")
                            ? n.expand()
                            : n.collapse();
                    },
                    collapse: function () {
                        var t;
                        !1 !== n.eventTrigger("beforeCollapse") &&
                            (mUtil.slideUp(
                                l.body,
                                l.options.bodyToggleSpeed,
                                function () {
                                    n.eventTrigger("afterCollapse");
                                }
                            ),
                            mUtil.addClass(r, "m-portlet--collapse"),
                            (t = mUtil.find(
                                l.head,
                                "[m-portlet-tool=toggle]"
                            )) &&
                                mUtil.data(t).has("tooltip") &&
                                mUtil
                                    .data(t)
                                    .get("tooltip")
                                    .updateTitleContent(
                                        l.options.tools.toggle.expand
                                    ));
                    },
                    expand: function () {
                        var t;
                        !1 !== n.eventTrigger("beforeExpand") &&
                            (mUtil.slideDown(
                                l.body,
                                l.options.bodyToggleSpeed,
                                function () {
                                    n.eventTrigger("afterExpand");
                                }
                            ),
                            mUtil.removeClass(r, "m-portlet--collapse"),
                            mUtil.removeClass(r, "m-portlet--collapsed"),
                            (t = mUtil.find(
                                l.head,
                                "[m-portlet-tool=toggle]"
                            )) &&
                                mUtil.data(t).has("tooltip") &&
                                mUtil
                                    .data(t)
                                    .get("tooltip")
                                    .updateTitleContent(
                                        l.options.tools.toggle.collapse
                                    ));
                    },
                    fullscreen: function (t) {
                        var e;
                        "off" === t ||
                        (mUtil.hasClass(s, "m-portlet--fullscreen") &&
                            mUtil.hasClass(r, "m-portlet--fullscreen"))
                            ? (n.eventTrigger("beforeFullscreenOff"),
                              mUtil.removeClass(s, "m-portlet--fullscreen"),
                              mUtil.removeClass(r, "m-portlet--fullscreen"),
                              n.removeTooltips(),
                              n.setupTooltips(),
                              l.foot &&
                                  (mUtil.css(l.body, "margin-bottom", ""),
                                  mUtil.css(l.foot, "margin-top", "")),
                              n.eventTrigger("afterFullscreenOff"))
                            : (n.eventTrigger("beforeFullscreenOn"),
                              mUtil.addClass(r, "m-portlet--fullscreen"),
                              mUtil.addClass(s, "m-portlet--fullscreen"),
                              n.removeTooltips(),
                              n.setupTooltips(),
                              l.foot &&
                                  ((e = parseInt(mUtil.css(l.foot, "height"))),
                                  (t =
                                      parseInt(mUtil.css(l.foot, "height")) +
                                      parseInt(mUtil.css(l.head, "height"))),
                                  mUtil.css(l.body, "margin-bottom", e + "px"),
                                  mUtil.css(
                                      l.foot,
                                      "margin-top",
                                      "-" + t + "px"
                                  )),
                              n.eventTrigger("afterFullscreenOn"));
                    },
                    eventTrigger: function (t) {
                        for (i = 0; i < l.events.length; i++) {
                            var e = l.events[i];
                            e.name == t &&
                                (1 == e.one
                                    ? 0 == e.fired &&
                                      ((l.events[i].fired = !0),
                                      e.handler.call(this, l))
                                    : e.handler.call(this, l));
                        }
                    },
                    addEvent: function (t, e, a) {
                        return (
                            l.events.push({
                                name: t,
                                handler: e,
                                one: a,
                                fired: !1,
                            }),
                            l
                        );
                    },
                };
            return (
                (l.setDefaults = function (t) {
                    a = t;
                }),
                (l.remove = function () {
                    return n.remove(html);
                }),
                (l.reload = function () {
                    return n.reload();
                }),
                (l.setContent = function (t) {
                    return n.setContent(t);
                }),
                (l.toggle = function () {
                    return n.toggle();
                }),
                (l.collapse = function () {
                    return n.collapse();
                }),
                (l.expand = function () {
                    return n.expand();
                }),
                (l.fullscreen = function () {
                    return n.fullscreen("on");
                }),
                (l.unFullscreen = function () {
                    return n.fullscreen("off");
                }),
                (l.getBody = function () {
                    return n.getBody();
                }),
                (l.getSelf = function () {
                    return n.getSelf();
                }),
                (l.on = function (t, e) {
                    return n.addEvent(t, e);
                }),
                (l.one = function (t, e) {
                    return n.addEvent(t, e, !0);
                }),
                n.construct.apply(l, [e]),
                l
            );
        }
    },
    mQuicksearch = function (t, e) {
        var n = this,
            a = mUtil.get(t),
            o = mUtil.get("body");
        if (a) {
            var l = {
                    mode: "default",
                    minLength: 1,
                    maxHeight: 300,
                    requestTimeout: 200,
                    inputTarget: "m_quicksearch_input",
                    iconCloseTarget: "m_quicksearch_close",
                    iconCancelTarget: "m_quicksearch_cancel",
                    iconSearchTarget: "m_quicksearch_search",
                    spinnerClass:
                        "m-loader m-loader--skin-light m-loader--right",
                    hasResultClass: "m-list-search--has-result",
                    templates: {
                        error: '<div class="m-search-results m-search-results--skin-light"><span class="m-search-result__message">{{message}}</div></div>',
                    },
                },
                r = {
                    construct: function (t) {
                        return (
                            mUtil.data(a).has("quicksearch")
                                ? (n = mUtil.data(a).get("quicksearch"))
                                : (r.init(t),
                                  r.build(),
                                  mUtil.data(a).set("quicksearch", n)),
                            n
                        );
                    },
                    init: function (t) {
                        (n.element = a),
                            (n.events = []),
                            (n.options = mUtil.deepExtend({}, l, t)),
                            (n.query = ""),
                            (n.form = mUtil.find(a, "form")),
                            (n.input = mUtil.get(n.options.inputTarget)),
                            (n.iconClose = mUtil.get(
                                n.options.iconCloseTarget
                            )),
                            "default" == n.options.mode &&
                                ((n.iconSearch = mUtil.get(
                                    n.options.iconSearchTarget
                                )),
                                (n.iconCancel = mUtil.get(
                                    n.options.iconCancelTarget
                                ))),
                            (n.dropdown = new mDropdown(a, {
                                mobileOverlay: !1,
                            })),
                            n.cancelTimeout,
                            (n.processing = !1),
                            (n.requestTimeout = !1);
                    },
                    build: function () {
                        mUtil.addEvent(n.input, "keyup", r.search),
                            "default" == n.options.mode
                                ? (mUtil.addEvent(
                                      n.input,
                                      "focus",
                                      r.showDropdown
                                  ),
                                  mUtil.addEvent(
                                      n.iconCancel,
                                      "click",
                                      r.handleCancel
                                  ),
                                  mUtil.addEvent(
                                      n.iconSearch,
                                      "click",
                                      function () {
                                          mUtil.isInResponsiveRange(
                                              "tablet-and-mobile"
                                          ) &&
                                              (mUtil.addClass(
                                                  o,
                                                  "m-header-search--mobile-expanded"
                                              ),
                                              n.input.focus());
                                      }
                                  ),
                                  mUtil.addEvent(
                                      n.iconClose,
                                      "click",
                                      function () {
                                          mUtil.isInResponsiveRange(
                                              "tablet-and-mobile"
                                          ) &&
                                              (mUtil.removeClass(
                                                  o,
                                                  "m-header-search--mobile-expanded"
                                              ),
                                              r.closeDropdown());
                                      }
                                  ))
                                : "dropdown" == n.options.mode &&
                                  (n.dropdown.on("afterShow", function () {
                                      n.input.focus();
                                  }),
                                  mUtil.addEvent(
                                      n.iconClose,
                                      "click",
                                      r.closeDropdown
                                  ));
                    },
                    showProgress: function () {
                        return (
                            (n.processing = !0),
                            mUtil.addClass(n.form, n.options.spinnerClass),
                            r.handleCancelIconVisibility("off"),
                            n
                        );
                    },
                    hideProgress: function () {
                        return (
                            (n.processing = !1),
                            mUtil.removeClass(n.form, n.options.spinnerClass),
                            r.handleCancelIconVisibility("on"),
                            mUtil.addClass(a, n.options.hasResultClass),
                            n
                        );
                    },
                    search: function (t) {
                        if (
                            ((n.query = n.input.value),
                            0 === n.query.length &&
                                (r.handleCancelIconVisibility("on"),
                                mUtil.removeClass(a, n.options.hasResultClass),
                                mUtil.removeClass(
                                    n.form,
                                    n.options.spinnerClass
                                )),
                            !(
                                n.query.length < n.options.minLength ||
                                1 == n.processing
                            ))
                        )
                            return (
                                n.requestTimeout &&
                                    clearTimeout(n.requestTimeout),
                                (n.requestTimeout = !1),
                                (n.requestTimeout = setTimeout(function () {
                                    r.eventTrigger("search");
                                }, n.options.requestTimeout)),
                                n
                            );
                    },
                    handleCancelIconVisibility: function (t) {
                        "on" == t
                            ? 0 === n.input.value.length
                                ? (n.iconCancel &&
                                      mUtil.css(
                                          n.iconCancel,
                                          "visibility",
                                          "hidden"
                                      ),
                                  n.iconClose &&
                                      mUtil.css(
                                          n.iconClose,
                                          "visibility",
                                          "visible"
                                      ))
                                : (clearTimeout(n.cancelTimeout),
                                  (n.cancelTimeout = setTimeout(function () {
                                      n.iconCancel &&
                                          mUtil.css(
                                              n.iconCancel,
                                              "visibility",
                                              "visible"
                                          ),
                                          n.iconClose &&
                                              mUtil.css(
                                                  n.iconClose,
                                                  "visibility",
                                                  "visible"
                                              );
                                  }, 500)))
                            : (n.iconCancel &&
                                  mUtil.css(
                                      n.iconCancel,
                                      "visibility",
                                      "hidden"
                                  ),
                              n.iconClose &&
                                  mUtil.css(
                                      n.iconClose,
                                      "visibility",
                                      "hidden"
                                  ));
                    },
                    handleCancel: function (t) {
                        (n.input.value = ""),
                            mUtil.css(n.iconCancel, "visibility", "hidden"),
                            mUtil.removeClass(a, n.options.hasResultClass),
                            r.closeDropdown();
                    },
                    closeDropdown: function () {
                        n.dropdown.hide();
                    },
                    showDropdown: function (t) {
                        0 == n.dropdown.isShown() &&
                            n.input.value.length > n.options.minLength &&
                            0 == n.processing &&
                            (console.log("show!!!"),
                            n.dropdown.show(),
                            t && (t.preventDefault(), t.stopPropagation()));
                    },
                    eventTrigger: function (t) {
                        for (i = 0; i < n.events.length; i++) {
                            var e = n.events[i];
                            e.name == t &&
                                (1 == e.one
                                    ? 0 == e.fired &&
                                      ((n.events[i].fired = !0),
                                      e.handler.call(this, n))
                                    : e.handler.call(this, n));
                        }
                    },
                    addEvent: function (t, e, a) {
                        return (
                            n.events.push({
                                name: t,
                                handler: e,
                                one: a,
                                fired: !1,
                            }),
                            n
                        );
                    },
                };
            return (
                (n.setDefaults = function (t) {
                    l = t;
                }),
                (n.search = function () {
                    return r.handleSearch();
                }),
                (n.showResult = function (t) {
                    return n.dropdown.setContent(t), r.showDropdown(), n;
                }),
                (n.showError = function (t) {
                    t = n.options.templates.error.replace("{{message}}", t);
                    return n.dropdown.setContent(t), r.showDropdown(), n;
                }),
                (n.showProgress = function () {
                    return r.showProgress();
                }),
                (n.hideProgress = function () {
                    return r.hideProgress();
                }),
                (n.search = function () {
                    return r.search();
                }),
                (n.on = function (t, e) {
                    return r.addEvent(t, e);
                }),
                (n.one = function (t, e) {
                    return r.addEvent(t, e, !0);
                }),
                r.construct.apply(n, [e]),
                n
            );
        }
    },
    mScrollTop = function (t, e) {
        var o = this,
            a = mUtil.get(t),
            n = mUtil.get("body");
        if (a) {
            var i = { offset: 300, speed: 600 },
                l = {
                    construct: function (t) {
                        return (
                            mUtil.data(a).has("scrolltop")
                                ? (o = mUtil.data(a).get("scrolltop"))
                                : (l.init(t),
                                  l.build(),
                                  mUtil.data(a).set("scrolltop", o)),
                            o
                        );
                    },
                    init: function (t) {
                        (o.events = []),
                            (o.options = mUtil.deepExtend({}, i, t));
                    },
                    build: function () {
                        navigator.userAgent.match(/iPhone|iPad|iPod/i)
                            ? (window.addEventListener("touchend", function () {
                                  l.handle();
                              }),
                              window.addEventListener(
                                  "touchcancel",
                                  function () {
                                      l.handle();
                                  }
                              ),
                              window.addEventListener(
                                  "touchleave",
                                  function () {
                                      l.handle();
                                  }
                              ))
                            : window.addEventListener("scroll", function () {
                                  l.handle();
                              }),
                            mUtil.addEvent(a, "click", l.scroll);
                    },
                    handle: function () {
                        window.pageYOffset > o.options.offset
                            ? mUtil.addClass(n, "m-scroll-top--shown")
                            : mUtil.removeClass(n, "m-scroll-top--shown");
                    },
                    scroll: function (t) {
                        t.preventDefault(), mUtil.scrollTop(o.options.speed);
                    },
                    eventTrigger: function (t, e) {
                        for (var a = 0; a < o.events.length; a++) {
                            var n = o.events[a];
                            n.name == t &&
                                (1 == n.one
                                    ? 0 == n.fired &&
                                      ((o.events[a].fired = !0),
                                      n.handler.call(this, o, e))
                                    : n.handler.call(this, o, e));
                        }
                    },
                    addEvent: function (t, e, a) {
                        o.events.push({
                            name: t,
                            handler: e,
                            one: a,
                            fired: !1,
                        });
                    },
                };
            return (
                (o.setDefaults = function (t) {
                    i = t;
                }),
                (o.on = function (t, e) {
                    return l.addEvent(t, e);
                }),
                (o.one = function (t, e) {
                    return l.addEvent(t, e, !0);
                }),
                l.construct.apply(o, [e]),
                o
            );
        }
    },
    mToggle = function (t, e) {
        var n = this,
            a = mUtil.get(t);
        mUtil.get("body");
        if (a) {
            var o = { togglerState: "", targetState: "" },
                l = {
                    construct: function (t) {
                        return (
                            mUtil.data(a).has("toggle")
                                ? (n = mUtil.data(a).get("toggle"))
                                : (l.init(t),
                                  l.build(),
                                  mUtil.data(a).set("toggle", n)),
                            n
                        );
                    },
                    init: function (t) {
                        (n.element = a),
                            (n.events = []),
                            (n.options = mUtil.deepExtend({}, o, t)),
                            (n.target = mUtil.get(n.options.target)),
                            (n.targetState = n.options.targetState),
                            (n.togglerState = n.options.togglerState),
                            (n.state = mUtil.hasClasses(n.target, n.targetState)
                                ? "on"
                                : "off");
                    },
                    build: function () {
                        mUtil.addEvent(a, "mouseup", l.toggle);
                    },
                    toggle: function () {
                        return (
                            "off" == n.state ? l.toggleOn() : l.toggleOff(), n
                        );
                    },
                    toggleOn: function () {
                        return (
                            l.eventTrigger("beforeOn"),
                            mUtil.addClass(n.target, n.targetState),
                            n.togglerState && mUtil.addClass(a, n.togglerState),
                            (n.state = "on"),
                            l.eventTrigger("afterOn"),
                            l.eventTrigger("toggle"),
                            n
                        );
                    },
                    toggleOff: function () {
                        return (
                            l.eventTrigger("beforeOff"),
                            mUtil.removeClass(n.target, n.targetState),
                            n.togglerState &&
                                mUtil.removeClass(a, n.togglerState),
                            (n.state = "off"),
                            l.eventTrigger("afterOff"),
                            l.eventTrigger("toggle"),
                            n
                        );
                    },
                    eventTrigger: function (t) {
                        for (i = 0; i < n.events.length; i++) {
                            var e = n.events[i];
                            e.name == t &&
                                (1 == e.one
                                    ? 0 == e.fired &&
                                      ((n.events[i].fired = !0),
                                      e.handler.call(this, n))
                                    : e.handler.call(this, n));
                        }
                    },
                    addEvent: function (t, e, a) {
                        return (
                            n.events.push({
                                name: t,
                                handler: e,
                                one: a,
                                fired: !1,
                            }),
                            n
                        );
                    },
                };
            return (
                (n.setDefaults = function (t) {
                    o = t;
                }),
                (n.getState = function () {
                    return n.state;
                }),
                (n.toggle = function () {
                    return l.toggle();
                }),
                (n.toggleOn = function () {
                    return l.toggleOn();
                }),
                (n.toggle = function () {
                    return l.toggleOff();
                }),
                (n.on = function (t, e) {
                    return l.addEvent(t, e);
                }),
                (n.one = function (t, e) {
                    return l.addEvent(t, e, !0);
                }),
                l.construct.apply(n, [e]),
                n
            );
        }
    },
    mWizard = function (t, e) {
        var l = this,
            a = mUtil.get(t);
        mUtil.get("body");
        if (a) {
            var n = { startStep: 1, manualStepForward: !1 },
                r = {
                    construct: function (t) {
                        return (
                            mUtil.data(a).has("wizard")
                                ? (l = mUtil.data(a).get("wizard"))
                                : (r.init(t),
                                  r.build(),
                                  mUtil.data(a).set("wizard", l)),
                            l
                        );
                    },
                    init: function (t) {
                        (l.element = a),
                            (l.events = []),
                            (l.options = mUtil.deepExtend({}, n, t)),
                            (l.steps = mUtil.findAll(a, ".m-wizard__step")),
                            (l.progress = mUtil.find(
                                a,
                                ".m-wizard__progress .progress-bar"
                            )),
                            (l.btnSubmit = mUtil.find(
                                a,
                                '[data-wizard-action="submit"]'
                            )),
                            (l.btnNext = mUtil.find(
                                a,
                                '[data-wizard-action="next"]'
                            )),
                            (l.btnPrev = mUtil.find(
                                a,
                                '[data-wizard-action="prev"]'
                            )),
                            (l.btnLast = mUtil.find(
                                a,
                                '[data-wizard-action="last"]'
                            )),
                            (l.btnFirst = mUtil.find(
                                a,
                                '[data-wizard-action="first"]'
                            )),
                            (l.events = []),
                            (l.currentStep = 1),
                            (l.stop = !1),
                            (l.totalSteps = l.steps.length),
                            1 < l.options.startStep &&
                                r.goTo(l.options.startStep),
                            r.updateUI();
                    },
                    build: function () {
                        mUtil.addEvent(l.btnNext, "click", function (t) {
                            t.preventDefault(), r.goNext();
                        }),
                            mUtil.addEvent(l.btnPrev, "click", function (t) {
                                t.preventDefault(), r.goPrev();
                            }),
                            mUtil.addEvent(l.btnFirst, "click", function (t) {
                                t.preventDefault(), r.goFirst();
                            }),
                            mUtil.addEvent(l.btnLast, "click", function (t) {
                                t.preventDefault(), r.goLast();
                            }),
                            mUtil.on(
                                a,
                                ".m-wizard__step a.m-wizard__step-number",
                                "click",
                                function () {
                                    for (
                                        var t,
                                            e = this.closest(".m-wizard__step"),
                                            a = mUtil.parents(
                                                this,
                                                ".m-wizard__steps"
                                            ),
                                            n = mUtil.findAll(
                                                a,
                                                ".m-wizard__step"
                                            ),
                                            o = 0,
                                            i = n.length;
                                        o < i;
                                        o++
                                    )
                                        if (e === n[o]) {
                                            t = o + 1;
                                            break;
                                        }
                                    t &&
                                        (!1 !== l.options.manualStepForward ||
                                            t < l.currentStep) &&
                                        r.goTo(t);
                                }
                            );
                    },
                    goTo: function (t) {
                        if (t !== l.currentStep) {
                            var e =
                                (t = t ? parseInt(t) : r.getNextStep()) >
                                l.currentStep
                                    ? r.eventTrigger("beforeNext")
                                    : r.eventTrigger("beforePrev");
                            if (!0 !== l.stop)
                                return (
                                    !1 !== e &&
                                        ((l.currentStep = t),
                                        r.updateUI(),
                                        r.eventTrigger("change")),
                                    t > l.startStep
                                        ? r.eventTrigger("afterNext")
                                        : r.eventTrigger("afterPrev"),
                                    l
                                );
                            l.stop = !1;
                        }
                    },
                    setStepClass: function () {
                        r.isLastStep()
                            ? mUtil.addClass(a, "m-wizard--step-last")
                            : mUtil.removeClass(a, "m-wizard--step-last"),
                            r.isFirstStep()
                                ? mUtil.addClass(a, "m-wizard--step-first")
                                : mUtil.removeClass(a, "m-wizard--step-first"),
                            r.isBetweenStep()
                                ? mUtil.addClass(a, "m-wizard--step-between")
                                : mUtil.removeClass(
                                      a,
                                      "m-wizard--step-between"
                                  );
                    },
                    updateUI: function (t) {
                        r.updateProgress(), r.handleTarget(), r.setStepClass();
                        for (var e = 0, a = l.steps.length; e < a; e++)
                            mUtil.removeClass(
                                l.steps[e],
                                "m-wizard__step--current m-wizard__step--done"
                            );
                        for (e = 1; e < l.currentStep; e++)
                            mUtil.addClass(
                                l.steps[e - 1],
                                "m-wizard__step--done"
                            );
                        mUtil.addClass(
                            l.steps[l.currentStep - 1],
                            "m-wizard__step--current"
                        );
                    },
                    stop: function () {
                        l.stop = !0;
                    },
                    start: function () {
                        l.stop = !1;
                    },
                    isLastStep: function () {
                        return l.currentStep === l.totalSteps;
                    },
                    isFirstStep: function () {
                        return 1 === l.currentStep;
                    },
                    isBetweenStep: function () {
                        return !1 === r.isLastStep() && !1 === r.isFirstStep();
                    },
                    goNext: function () {
                        return r.goTo(r.getNextStep());
                    },
                    goPrev: function () {
                        return r.goTo(r.getPrevStep());
                    },
                    goLast: function () {
                        return r.goTo(l.totalSteps);
                    },
                    goFirst: function () {
                        return r.goTo(1);
                    },
                    updateProgress: function () {
                        var t, e;
                        l.progress &&
                            (mUtil.hasClass(a, "m-wizard--1")
                                ? ((e = (l.currentStep / l.totalSteps) * 100),
                                  (t = mUtil.find(a, ".m-wizard__step-number")),
                                  (t = parseInt(mUtil.css(t, "width"))),
                                  mUtil.css(
                                      l.progress,
                                      "width",
                                      "calc(" + e + "% + " + t / 2 + "px)"
                                  ))
                                : mUtil.hasClass(a, "m-wizard--2")
                                ? (l.currentStep,
                                  (t =
                                      (l.currentStep - 1) *
                                      ((1 / (l.totalSteps - 1)) * 100)),
                                  mUtil.isInResponsiveRange(
                                      "minimal-desktop-and-below"
                                  )
                                      ? mUtil.css(l.progress, "height", t + "%")
                                      : mUtil.css(l.progress, "width", t + "%"))
                                : ((e = (l.currentStep / l.totalSteps) * 100),
                                  mUtil.css(l.progress, "width", e + "%")));
                    },
                    handleTarget: function () {
                        var t = l.steps[l.currentStep - 1],
                            e = mUtil.get(mUtil.attr(t, "m-wizard-target")),
                            t = mUtil.find(a, ".m-wizard__form-step--current");
                        mUtil.removeClass(t, "m-wizard__form-step--current"),
                            mUtil.addClass(e, "m-wizard__form-step--current");
                    },
                    getNextStep: function () {
                        return l.totalSteps >= l.currentStep + 1
                            ? l.currentStep + 1
                            : l.totalSteps;
                    },
                    getPrevStep: function () {
                        return 1 <= l.currentStep - 1 ? l.currentStep - 1 : 1;
                    },
                    eventTrigger: function (t) {
                        for (i = 0; i < l.events.length; i++) {
                            var e = l.events[i];
                            e.name == t &&
                                (1 == e.one
                                    ? 0 == e.fired &&
                                      ((l.events[i].fired = !0),
                                      e.handler.call(this, l))
                                    : e.handler.call(this, l));
                        }
                    },
                    addEvent: function (t, e, a) {
                        return (
                            l.events.push({
                                name: t,
                                handler: e,
                                one: a,
                                fired: !1,
                            }),
                            l
                        );
                    },
                };
            return (
                (l.setDefaults = function (t) {
                    n = t;
                }),
                (l.goNext = function () {
                    return r.goNext();
                }),
                (l.goPrev = function () {
                    return r.goPrev();
                }),
                (l.goLast = function () {
                    return r.goLast();
                }),
                (l.stop = function () {
                    return r.stop();
                }),
                (l.start = function () {
                    return r.start();
                }),
                (l.goFirst = function () {
                    return r.goFirst();
                }),
                (l.goTo = function (t) {
                    return r.goTo(t);
                }),
                (l.getStep = function () {
                    return l.currentStep;
                }),
                (l.isLastStep = function () {
                    return r.isLastStep();
                }),
                (l.isFirstStep = function () {
                    return r.isFirstStep();
                }),
                (l.on = function (t, e) {
                    return r.addEvent(t, e);
                }),
                (l.one = function (t, e) {
                    return r.addEvent(t, e, !0);
                }),
                r.construct.apply(l, [e]),
                l
            );
        }
    };
!(function (i) {
    (i.fn.mDatatable = i.fn.mDatatable || {}),
        (i.fn.mDatatable.checkbox = function (a, n) {
            var o = {
                selectedAllRows: !1,
                selectedRows: [],
                unselectedRows: [],
                init: function () {
                    o.selectorEnabled() &&
                        (n.vars.requestIds &&
                            a.setDataSourceParam(n.vars.requestIds, !0),
                        (o.selectedAllRows = a.getDataSourceParam(
                            n.vars.selectedAllRows
                        )),
                        i(a).on(
                            "m-datatable--on-layout-updated",
                            function (t, e) {
                                e.table == i(a.wrap).attr("id") &&
                                    a.ready(function () {
                                        o.initVars(),
                                            o.initEvent(),
                                            o.initSelect();
                                    });
                            }
                        ));
                },
                initEvent: function () {
                    i(a.tableHead)
                        .find('.m-checkbox--all > [type="checkbox"]')
                        .click(function (t) {
                            var e;
                            (o.selectedRows = o.unselectedRows = []),
                                a.stateRemove("checkbox"),
                                i(this).is(":checked")
                                    ? (o.selectedAllRows = !0)
                                    : (o.selectedAllRows = !1),
                                n.vars.requestIds ||
                                    (i(this).is(":checked") &&
                                        (o.selectedRows = i.makeArray(
                                            i(a.tableBody)
                                                .find(
                                                    '.m-checkbox--single > [type="checkbox"]'
                                                )
                                                .map(function (t, e) {
                                                    return i(e).val();
                                                })
                                        )),
                                    ((e = {}).selectedRows = i.unique(
                                        o.selectedRows
                                    )),
                                    a.stateKeep("checkbox", e)),
                                a.setDataSourceParam(
                                    n.vars.selectedAllRows,
                                    o.selectedAllRows
                                ),
                                i(a).trigger("m-datatable--on-click-checkbox", [
                                    i(this),
                                ]);
                        }),
                        i(a.tableBody)
                            .find('.m-checkbox--single > [type="checkbox"]')
                            .click(function (t) {
                                var e = i(this).val();
                                i(this).is(":checked")
                                    ? (o.selectedRows.push(e),
                                      (o.unselectedRows = o.remove(
                                          o.unselectedRows,
                                          e
                                      )))
                                    : (o.unselectedRows.push(e),
                                      (o.selectedRows = o.remove(
                                          o.selectedRows,
                                          e
                                      ))),
                                    !n.vars.requestIds &&
                                        o.selectedRows.length < 1 &&
                                        i(a.tableHead)
                                            .find(
                                                '.m-checkbox--all > [type="checkbox"]'
                                            )
                                            .prop("checked", !1);
                                e = {};
                                (e.selectedRows = i.unique(o.selectedRows)),
                                    (e.unselectedRows = i.unique(
                                        o.unselectedRows
                                    )),
                                    a.stateKeep("checkbox", e),
                                    i(a).trigger(
                                        "m-datatable--on-click-checkbox",
                                        [i(this)]
                                    );
                            });
                },
                initSelect: function () {
                    o.selectedAllRows && n.vars.requestIds
                        ? (a.hasClass("m-datatable--error") ||
                              i(a.tableHead)
                                  .find('.m-checkbox--all > [type="checkbox"]')
                                  .prop("checked", !0),
                          a.setActiveAll(!0),
                          o.unselectedRows.forEach(function (t) {
                              a.setInactive(t);
                          }))
                        : (o.selectedRows.forEach(function (t) {
                              a.setActive(t);
                          }),
                          !a.hasClass("m-datatable--error") &&
                              i(a.tableBody)
                                  .find(
                                      '.m-checkbox--single > [type="checkbox"]'
                                  )
                                  .not(":checked").length < 1 &&
                              i(a.tableHead)
                                  .find('.m-checkbox--all > [type="checkbox"]')
                                  .prop("checked", !0));
                },
                selectorEnabled: function () {
                    return i.grep(a.options.columns, function (t, e) {
                        return t.selector || !1;
                    })[0];
                },
                initVars: function () {
                    var t = a.stateGet("checkbox");
                    void 0 !== t &&
                        ((o.selectedRows = t.selectedRows || []),
                        (o.unselectedRows = t.unselectedRows || []));
                },
                getSelectedId: function (t) {
                    if (
                        (o.initVars(), o.selectedAllRows && n.vars.requestIds)
                    ) {
                        void 0 === t && (t = n.vars.rowIds);
                        var e = a.getObject(t, a.lastResponse) || [];
                        return (
                            0 < e.length &&
                                o.unselectedRows.forEach(function (t) {
                                    e = o.remove(e, parseInt(t));
                                }),
                            e
                        );
                    }
                    return o.selectedRows;
                },
                remove: function (t, e) {
                    return t.filter(function (t) {
                        return t !== e;
                    });
                },
            };
            return (
                (a.checkbox = function () {
                    return o;
                }),
                "object" == typeof n &&
                    ((n = i.extend(
                        !0,
                        {},
                        i.fn.mDatatable.checkbox.default,
                        n
                    )),
                    o.init.apply(this, [n])),
                a
            );
        }),
        (i.fn.mDatatable.checkbox.default = {
            vars: {
                selectedAllRows: "selectedAllRows",
                requestIds: "requestIds",
                rowIds: "meta.rowIds",
            },
        });
})(jQuery),
    (Chart.elements.Rectangle.prototype.draw = function () {
        var t,
            e,
            a,
            n,
            o,
            i,
            l,
            r,
            s,
            d = this._chart.ctx,
            c = this._view,
            m = c.borderWidth,
            u = this._chart.options.barRadius || 0,
            p = c.horizontal
                ? ((t = c.base),
                  (e = c.x),
                  (a = c.y - c.height / 2),
                  (n = c.y + c.height / 2),
                  (l = t < e ? 1 : -1),
                  (i = 1),
                  c.borderSkipped || "left")
                : ((t = c.x - c.width / 2),
                  (e = c.x + c.width / 2),
                  (l = 1),
                  (i =
                      (a = c.y > 2 * u ? c.y - u : c.y) < (n = c.base)
                          ? 1
                          : -1),
                  c.borderSkipped || "bottom");
        m &&
            ((o =
                (m =
                    (s = Math.min(Math.abs(t - e), Math.abs(a - n))) < m
                        ? s
                        : m) / 2),
            (r = a + ("top" !== p ? o * i : 0)),
            (s = n + ("bottom" !== p ? -o * i : 0)),
            (i = t + ("left" !== p ? o * l : 0)) !==
                (l = e + ("right" !== p ? -o * l : 0)) && ((a = r), (n = s)),
            r !== s && ((t = i), (e = l))),
            d.beginPath(),
            (d.fillStyle = c.backgroundColor),
            (d.strokeStyle = c.borderColor),
            (d.lineWidth = m);
        var f = [
                [t, n],
                [t, a],
                [e, a],
                [e, n],
            ],
            g = ["bottom", "left", "top", "right"].indexOf(p, 0);
        function h(t) {
            return f[(g + t) % 4];
        }
        -1 === g && (g = 0);
        var p = h(0);
        d.moveTo(p[0], p[1]);
        for (var b = 1; b < 4; b++) {
            var v;
            h(b);
            (nextCornerId = b + 1),
                4 == nextCornerId && (nextCornerId = 0),
                (nextCorner = h(nextCornerId)),
                (width = f[2][0] - f[1][0]),
                (height = f[0][1] - f[1][1]),
                (x = f[1][0]),
                (y = f[1][1]),
                (v = (v = u) > height / 2 ? height / 2 : v) > width / 2 &&
                    (v = width / 2),
                d.moveTo(x + v, y),
                d.lineTo(x + width - v, y),
                d.quadraticCurveTo(x + width, y, x + width, y + v),
                d.lineTo(x + width, y + height - v),
                d.quadraticCurveTo(
                    x + width,
                    y + height,
                    x + width - v,
                    y + height
                ),
                d.lineTo(x + v, y + height),
                d.quadraticCurveTo(x, y + height, x, y + height - v),
                d.lineTo(x, y + v),
                d.quadraticCurveTo(x, y, x + v, y);
        }
        d.fill(), m && d.stroke();
    }),
    $.notifyDefaults({
        template:
            '<div data-notify="container" class="alert alert-{0} m-alert" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"></button><span data-notify="icon"></span><span data-notify="title">{1}</span><span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-animated bg-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
    }),
    swal.setDefaults({
        width: 400,
        padding: "2.5rem",
        buttonsStyling: !1,
        confirmButtonClass: "btn btn-success m-btn m-btn--custom",
        confirmButtonColor: null,
        cancelButtonClass: "btn btn-secondary m-btn m-btn--custom",
        cancelButtonColor: null,
    }),
    ($.fn.markdown.defaults.iconlibrary = "fa"),
    ($.fn.timepicker.defaults = $.extend(!0, {}, $.fn.timepicker.defaults, {
        icons: { up: "la la-angle-up", down: "la la-angle-down" },
    })),
    jQuery.validator.setDefaults({
        errorElement: "div",
        errorClass: "form-control-feedback",
        focusInvalid: !1,
        ignore: "",
        errorPlacement: function (t, e) {
            var a =
                    0 < $(e).closest(".m-form__group-sub").length
                        ? $(e).closest(".m-form__group-sub")
                        : $(e).closest(".m-form__group"),
                n = a.find(".m-form__help");
            0 === a.find(".form-control-feedback").length &&
                (0 < n.length
                    ? n.before(t)
                    : (0 < $(e).closest(".input-group").length
                          ? $(e).closest(".input-group")
                          : $(e).is(":checkbox")
                          ? $(e).closest(".m-checkbox").find(">span")
                          : $(e)
                      ).after(t));
        },
        highlight: function (t) {
            (0 < $(t).closest(".m-form__group-sub").length
                ? $(t).closest(".m-form__group-sub")
                : $(t).closest(".m-form__group")
            ).addClass("has-danger");
        },
        unhighlight: function (t) {
            (0 < $(t).closest(".m-form__group-sub").length
                ? $(t).closest(".m-form__group-sub")
                : $(t).closest(".m-form__group")
            ).removeClass("has-danger");
        },
        success: function (t, e) {
            t =
                0 < $(t).closest(".m-form__group-sub").length
                    ? $(t).closest(".m-form__group-sub")
                    : $(t).closest(".m-form__group");
            t.removeClass("has-danger"),
                t.find(".form-control-feedback").remove();
        },
    }),
    jQuery.validator.addMethod(
        "email",
        function (t, e) {
            return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                t
            );
        },
        "Please enter a valid Email."
    );
var mLayout = (function () {
    var n, o, i, l;
    return {
        init: function () {
            this.initHeader(), this.initAside();
        },
        initHeader: function () {
            var t, e, a;
            (e = mUtil.get("m_header")),
                (a = { offset: {}, minimize: {} }),
                "hide" == mUtil.attr(e, "m-minimize-mobile")
                    ? ((a.minimize.mobile = {}),
                      (a.minimize.mobile.on = "m-header--hide"),
                      (a.minimize.mobile.off = "m-header--show"))
                    : (a.minimize.mobile = !1),
                "hide" == mUtil.attr(e, "m-minimize")
                    ? ((a.minimize.desktop = {}),
                      (a.minimize.desktop.on = "m-header--hide"),
                      (a.minimize.desktop.off = "m-header--show"))
                    : (a.minimize.desktop = !1),
                (t = mUtil.attr(e, "m-minimize-offset")) &&
                    (a.offset.desktop = t),
                (t = mUtil.attr(e, "m-minimize-mobile-offset")) &&
                    (a.offset.mobile = t),
                (header = new mHeader("m_header", a)),
                (l = new mOffcanvas("m_header_menu", {
                    overlay: !0,
                    baseClass: "m-aside-header-menu-mobile",
                    closeBy: "m_aside_header_menu_mobile_close_btn",
                    toggleBy: {
                        target: "m_aside_header_menu_mobile_toggle",
                        state: "m-brand__toggler--active",
                    },
                })),
                (n = new mMenu("m_header_menu", {
                    submenu: {
                        desktop: "dropdown",
                        tablet: "accordion",
                        mobile: "accordion",
                    },
                    accordion: {
                        slideSpeed: 200,
                        autoScroll: !0,
                        expandAll: !1,
                    },
                })),
                $("#m_aside_header_topbar_mobile_toggle").click(function () {
                    $("body").toggleClass("m-topbar--on");
                }),
                setInterval(function () {
                    $("#m_topbar_notification_icon .m-nav__link-icon").addClass(
                        "m-animate-shake"
                    ),
                        $(
                            "#m_topbar_notification_icon .m-nav__link-badge"
                        ).addClass("m-animate-blink");
                }, 3e3),
                setInterval(function () {
                    $(
                        "#m_topbar_notification_icon .m-nav__link-icon"
                    ).removeClass("m-animate-shake"),
                        $(
                            "#m_topbar_notification_icon .m-nav__link-badge"
                        ).removeClass("m-animate-blink");
                }, 6e3),
                0 !== $("#m_quicksearch").length &&
                    ((quicksearch = new mQuicksearch("m_quicksearch", {
                        mode: mUtil.attr("m_quicksearch", "m-quicksearch-mode"),
                        minLength: 1,
                    })),
                    quicksearch.on("search", function (e) {
                        e.showProgress(),
                            $.ajax({
                                url: "inc/api/quick_search.php",
                                data: { query: e.query },
                                dataType: "html",
                                success: function (t) {
                                    e.hideProgress(), e.showResult(t);
                                },
                                error: function (t) {
                                    e.hideProgress(),
                                        e.showError(
                                            "Connection error. Pleae try again later."
                                        );
                                },
                            });
                    })),
                new mScrollTop("m_scroll_top", { offset: 300, speed: 600 });
        },
        initAside: function () {
            var t, e;
            function a(t) {
                var e;
                mUtil.isInResponsiveRange("tablet-and-mobile")
                    ? mApp.destroyScroller(t)
                    : ((e =
                          mUtil.getViewPort().height -
                          mUtil.css("m_header", "height")),
                      mApp.initScroller(t, { height: e }));
            }
            (e = mUtil.get("m_aside_left")),
                (e = mUtil.hasClass(e, "m-aside-left--offcanvas-default")
                    ? "m-aside-left--offcanvas-default"
                    : "m-aside-left"),
                (i = new mOffcanvas("m_aside_left", {
                    baseClass: e,
                    overlay: !0,
                    closeBy: "m_aside_left_close_btn",
                    toggleBy: {
                        target: "m_aside_left_offcanvas_toggle",
                        state: "m-brand__toggler--active",
                    },
                })),
                0 !== $("#m_aside_left_minimize_toggle").length &&
                    ((asideLeftToggle = new mToggle(
                        "m_aside_left_minimize_toggle",
                        {
                            target: "body",
                            targetState:
                                "m-brand--minimize m-aside-left--minimize",
                            togglerState: "m-brand__toggler--active",
                        }
                    )),
                    asideLeftToggle.on("toggle", function (t) {
                        n.pauseDropdownHover(800),
                            o.pauseDropdownHover(800),
                            Cookies.set("sidebar_toggle_state", t.getState());
                    })),
                (t = $("#m_ver_menu")),
                (e =
                    "1" === t.data("m-menu-dropdown")
                        ? "dropdown"
                        : "accordion"),
                (o = new mMenu("m_ver_menu", {
                    submenu: {
                        desktop: {
                            default: e,
                            state: {
                                body: "m-aside-left--minimize",
                                mode: "dropdown",
                            },
                        },
                        tablet: "accordion",
                        mobile: "accordion",
                    },
                    accordion: { autoScroll: !0, expandAll: !1 },
                })),
                "1" === t.data("m-menu-scrollable") &&
                    (a(t),
                    mUtil.addResizeHandler(function () {
                        a(o);
                    }));
        },
        getAsideMenu: function () {
            return o;
        },
        closeMobileAsideMenuOffcanvas: function () {
            mUtil.isMobileDevice() && i.hide();
        },
        closeMobileHorMenuOffcanvas: function () {
            mUtil.isMobileDevice() && l.hide();
        },
    };
})();
$(document).ready(function () {
    !1 === mUtil.isAngularVersion() && mLayout.init();
});
var mQuickSidebar = (function () {
    function t() {
        new mOffcanvas("m_quick_sidebar", {
            overlay: !0,
            baseClass: "m-quick-sidebar",
            closeBy: "m_quick_sidebar_close",
            toggleBy: "m_quick_sidebar_toggle",
        }).one("afterShow", function () {
            mApp.block(n),
                setTimeout(function () {
                    mApp.unblock(n), e.removeClass("m--hide"), a(), i(), l();
                }, 1e3);
        });
    }
    var n = $("#m_quick_sidebar"),
        o = $("#m_quick_sidebar_tabs"),
        e = n.find(".m-quick-sidebar__content"),
        a = function () {
            var e,
                t,
                a = $("#m_quick_sidebar_tabs_messenger");
            0 !== a.length &&
                ((e = a.find(".m-messenger__messages")),
                (t = function () {
                    var t =
                        n.outerHeight(!0) -
                        o.outerHeight(!0) -
                        a.find(".m-messenger__form").outerHeight(!0) -
                        120;
                    e.css("height", t), mApp.initScroller(e, {});
                })(),
                mUtil.addResizeHandler(t));
        },
        i = function () {
            var t,
                e = $("#m_quick_sidebar_tabs_settings");
            0 !== e.length &&
                ((t = function () {
                    var t = mUtil.getViewPort().height - o.outerHeight(!0) - 60;
                    e.css("height", t), mApp.initScroller(e, {});
                })(),
                mUtil.addResizeHandler(t));
        },
        l = function () {
            var t,
                e = $("#m_quick_sidebar_tabs_logs");
            0 !== e.length &&
                ((t = function () {
                    var t = mUtil.getViewPort().height - o.outerHeight(!0) - 60;
                    e.css("height", t), mApp.initScroller(e, {});
                })(),
                mUtil.addResizeHandler(t));
        };
    return {
        init: function () {
            0 !== n.length && t();
        },
    };
})();
$(document).ready(function () {
    mQuickSidebar.init();
});
