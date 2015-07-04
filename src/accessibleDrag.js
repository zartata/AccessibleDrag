;
"use strict";
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("jquery"), window, document);
    } else {
        factory(jQuery, window, document);
    }
})(function (win, doc, $) {
    function getDraggables () {
        return $("*").filter(function () {
            return $(this).data("ui-draggable");
        });
    };
    function getDroppables () {
        return $("*").filter(function () {
            return $(this).data("ui-droppable");
        });
    };
});

