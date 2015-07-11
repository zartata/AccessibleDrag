;"use strict";
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("jquery"), window, document);
    } else {
        window.AccessibleDrag = factory(jQuery, window, document);
    }
})(function (win, doc, $) {
    function AccessibleDrag(drag, drop) {

        var all_drag = function () {
            return $("*").filter(function () {
                return $(this).data("ui-draggable");
            });
        };
        var all_drop = function () {
            return $("*").filter(function () {
                return $(this).data("ui-droppable");
            });
        };

    }

    return AccessibleDrag;
});

