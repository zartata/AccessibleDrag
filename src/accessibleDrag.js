;"use strict";
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("jquery"), window, document);
    } else {
        window.AccessibleDrag = factory(jQuery, window, document);
    }
})(function ($, window, document) {
    //showoff
    console.log("Accessible Drag\nMade with ❤ in India.");
    //helper function
    function getAllDraggable(){
        return $("*").filter(function () {
          return $(this).data("ui-draggable");
        });
    }

    function getAllDroppable(){
        return $("*").filter(function () {
            return $(this).data("ui-droppable");
        });
    }
    //main function
    function AccessibleDrag(elem1, elem2){
        var drag, drop;
        if($(elem1).data("ui-draggable") && $(elem2).data("ui-droppable")){
            drag = $(elem1);
            drop = $(elem2);
        }
        else if($(elem2).data("ui-draggable") && $(elem1).data("ui-droppable")){
            drag = $(elem2);
            drop = $(elem1);
        }
        else{
            console.log("Either the drag or drop is not initialized");
        }
        //Initialize the draggable with TabIndex
        drag.prop("tabindex", 1);
        //Bind event for the enter keyup
        drag.off().on("keyup",function(){
            var dragClone;
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                if ($(this).is(":focus")) {
                    dragClone = $(this).html();
                    drag.prop("tabindex", -1);
                    drop.prop("tabindex", 1);
                }
            }
            else if (event.keyCode === 9) {
                drag.removeClass("keyboard-focused");
                drop.removeClass("keyboard-focused");
                $("*:focus").addClass("keyboard-focused").attr("");
            }
            else if (event.keyCode === 27) {

            }
        });
    }
    return AccessibleDrag;
});

