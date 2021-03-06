$(function () {
    $(window).load(function () {
        $(".body-wrapper").each(function () {
            var e = $(".header-wrapper"), a = e.children(".navbar"),
                o = (a.find(".navbar-header"), a.find(".navbar-collapse")), n = {nav_top: o.css("margin-top")};
            $(window).scroll(function () {
                a.hasClass("bb-fixed-header") && (0 == $(this).scrollTop() || $(this).width() < 750) ? (a.removeClass("bb-fixed-header").appendTo(e), o.animate({"margin-top": n.nav_top}, {
                    duration: 300,
                    queue: !1,
                    complete: function () {
                        e.css("height", "auto")
                    }
                })) : !a.hasClass("bb-fixed-header") && $(this).width() > 750 && $(this).scrollTop() > e.offset().top + e.height() - parseInt($("html").css("margin-top")) && (e.css("height", e.height()), a.css({opacity: "0"}).addClass("bb-fixed-header"), a.appendTo($("body")).animate({opacity: 1}), o.css({"margin-top": "0px"}))
            })
        }), $(window).trigger("resize"), $(window).trigger("scroll")
    }), $(".select-drop").selectbox(), $(".header-wrapper").width() > 750 && $(".nav .dropdown").hover(function () {
        $(this).addClass("open")
    }, function () {
        $(this).removeClass("open")
    }), $(".cart-dropdown a").on("click", function () {
        $(".dropdown-menu").toggleClass("display-block"), $(".cart-dropdown a i").toggleClass("fa-close").toggleClass("fa-shopping-basket"), $(".badge").toggleClass("display-none")
    }), jQuery(".bannercontainerV1 .fullscreenbanner").revolution({
        delay: 5e3,
        startwidth: 1170,
        startheight: 560,
        fullWidth: "on",
        fullScreen: "off",
        hideCaptionAtLimit: "",
        dottedOverlay: "twoxtwo",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: "",
        hideTimerBar: "on"
    }), jQuery(".bannercontainerV3 .fullscreenbanner").revolution({
        delay: 5e3,
        startwidth: 1170,
        startheight: 500,
        fullWidth: "on",
        fullScreen: "on",
        hideCaptionAtLimit: "",
        dottedOverlay: "twoxtwo",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: "",
        hideTimerBar: "on"
    }), jQuery(".bannercontainerV2 .fullscreenbanner").revolution({
        delay: 5e3,
        startwidth: 1170,
        startheight: 660,
        fullWidth: "on",
        fullScreen: "off",
        hideCaptionAtLimit: "",
        dottedOverlay: "none",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: "",
        hideTimerBar: "on"
    });
    var e = $(".owl-carousel.teamSlider");
    e.owlCarousel({
        loop: !0,
        margin: 28,
        autoplay: !1,
        autoplayTimeout: 2e3,
        autoplayHoverPause: !0,
        nav: !0,
        moveSlides: 4,
        dots: !1,
        responsive: {320: {items: 1}, 768: {items: 3}, 992: {items: 4}}
    });
    var e = $(".owl-carousel.commentSlider");
    e.owlCarousel({
        loop: !0,
        margin: 28,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        nav: !0,
        moveSlides: 1,
        dots: !1,
        responsive: {320: {items: 1}, 768: {items: 1}, 992: {items: 1}}
    });
    var e = $(".owl-carousel.partnersLogoSlider");
    e.owlCarousel({
        loop: !0,
        margin: 28,
        autoplay: !0,
        autoplayTimeout: 2e3,
        autoplayHoverPause: !0,
        nav: !0,
        dots: !1,
        responsive: {320: {slideBy: 1, items: 1}, 768: {slideBy: 1, items: 3}, 992: {slideBy: 1, items: 5}}
    });
    var e = $(".owl-carousel.categorySlider");
    e.owlCarousel({
        loop: !0,
        autoplay: !1,
        autoplayTimeout: 2e3,
        autoplayHoverPause: !0,
        nav: !0,
        dots: !1,
        items: 1
    }), $(document).ready(function (e) {
        e(".counter").counterUp({delay: 10, time: 2e3})
    }), $(document).ready(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $("#backToTop").css("opacity", 1) : $("#backToTop").css("opacity", 0)
        })
    }), $(document).ready(function () {
        $('.scrolling  a[href*="#"]').on("click", function (e) {
            e.preventDefault(), e.stopPropagation();
            var a = $(this).attr("href");
            $(a).velocity("scroll", {duration: 800, offset: -150, easing: "easeOutExpo", mobileHA: !1})
        })
    });
    $("#price-range").slider({
        range: !0, min: 20, max: 300, values: [20, 300], slide: function (e, a) {
            $("#price-amount-1").val("$" + a.values[0]), $("#price-amount-2").val("$" + a.values[1])
        }
    }), $("#price-amount-1").val("$" + $("#price-range").slider("values", 0)), $("#price-amount-2").val("$" + $("#price-range").slider("values", 1));
    var a = $("#faqAccordion .panel-heading i.fa");
    $("#faqAccordion .panel-heading").click(function () {
        a.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var o = $("#accordionOne .panel-heading i.fa");
    $("#accordionOne .panel-heading").click(function () {
        o.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var n = $("#accordionTwo .panel-heading i.fa");
    $("#accordionTwo .panel-heading").click(function () {
        n.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var i = $("#togglesOne .panel-heading i.fa");
    $("#togglesOne .panel-heading").click(function () {
        i.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var t = $("#togglesTwo .panel-heading i.fa");
    $("#togglesTwo .panel-heading").click(function () {
        t.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var r = $(".product-gallery-thumblist a"), l = $(".product-gallery-preview > li");
    r.on("click", function (e) {
        var a = $(this).attr("href");
        r.parent().removeClass("active"), $(this).parent().addClass("active"), l.removeClass("current"), $(a).addClass("current"), e.preventDefault()
    }), $(".incr-btn").on("click", function (e) {
        var a = $(this), o = a.parent().find(".quantity").val();
        if (a.parent().find('.incr-btn[data-action="decrease"]').removeClass("inactive"), "increase" == a.data("action")) var n = parseFloat(o) + 1; else if (o > 1) var n = parseFloat(o) - 1; else n = 1, a.addClass("inactive");
        a.parent().find(".quantity").val(n), e.preventDefault()
    }), $("[data-toggle=tooltip]").tooltip()
});
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-71155940-5', 'auto');
ga('send', 'pageview');
(function (w, i, d, g, e, t, s) {
    w[d] = w[d] || [];
    t = i.createElement(g);
    t.async = 1;
    t.src = e;
    s = i.getElementsByTagName(g)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, '_gscq', 'script', '//widgets.getsitecontrol.com/46851/script.js');