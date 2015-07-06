;"use strict";
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("jquery"), window, document);
    } else {
        window.AccessibleDrag = factory(jQuery, window, document);
    }
})(function (win, doc, $) {
    function AccessibleDrag(){

    }
    AccessibleDrag.prototype.getDraggables = function () {
        return $("*").filter(function () {
            return $(this).data("ui-draggable");
        });
    };
    AccessibleDrag.prototype.getDroppables = function() {
        return $("*").filter(function () {
            return $(this).data("ui-droppable");
        });
    };
});

