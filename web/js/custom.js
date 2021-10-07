require(["jquery", "slick", "domReady!"], function ($) {
    $(".homepage-slider").slick({
        infinite: true,
        speed: 2000,
        autoplay: true,
        arrows: false,
    });
});
require(["jquery", "jquery-ui-modules/widget"], function ($) {
    "use strict";
    $(document).ready(function () {
        $(".ipn-step-down").click(function () {
            var qty = parseFloat($(this).next().val());
            var step = parseFloat($(this).next().attr("step"));
            var min_qty = parseFloat($(this).next().attr("min"));
            if (isNaN(step)) {
                step = 1;
            }
            if (isNaN(qty)) {
                if (isNaN(min_qty)) {
                    new_qty = 0;
                } else {
                    new_qty = min_qty;
                }
            } else {
                var new_qty = qty - step;
                if (isNaN(min_qty)) {
                    min_qty = 0;
                }
                if (new_qty < min_qty) {
                    var new_qty = min_qty;
                }
            }
            $(this).next().val(new_qty);
        });
        $(".ipn-step-up").click(function () {
            var qty = parseFloat($(this).prev().val());
            var step = parseFloat($(this).prev().attr("step"));
            var max_qty = parseFloat($(this).prev().attr("max"));
            var min_qty = parseFloat($(this).prev().attr("min"));
            if (isNaN(step)) {
                step = 1;
            }
            if (isNaN(qty)) {
                if (isNaN(min_qty)) {
                    new_qty = 0;
                } else {
                    new_qty = min_qty;
                }
            } else {
                var new_qty = qty + step;
                if (!isNaN(max_qty)) {
                    if (new_qty > max_qty) {
                        var new_qty = max_qty;
                    }
                }
            }
            $(this).prev().val(new_qty);
        });
    });
});
