;"use strict";
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("jquery"), window, document);
    } else {
        window.AccessibleDrag = factory(jQuery, window, document);
    }
})(function (win, doc, $) {
    function AccessibleDrag(){
        var AD = this;
        var link = $("a[href]");
        var draggable = function () {
            return $("*").filter(function () {
                return $(this).data("ui-draggable");
            });
        };
        var droppable = function () {
            return $("*").filter(function () {
                return $(this).data("ui-droppable");
            });
        };

        link.prop("tabIndex", "3");

    }

    return AccessibleDrag;
});

