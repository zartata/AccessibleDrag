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
        //Stage 1
        drag.prop("tabIndex",1);
        //Stage 2
        drag.off().on("keyup",function(){
            var dragClone;
            if ( event.which == 13 ) {
                event.preventDefault();
                if(drag.is(":focus")){
                    dragClone = $(this).clone();
                    console.log(dragClone);
                }
            }
        });

    }



    return AccessibleDrag;
});

