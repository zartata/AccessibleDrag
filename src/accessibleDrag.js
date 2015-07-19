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
    function AccessibleDrag(elem1, elem2, options) {
        var drag, drop, dragClone;
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
        setTabIndex(drag);
        setTabIndex(drop, -1);
        drag.attr("data-dragged", false);
        drop.attr("data-dropped", false);
        //Bind event for the enter keyup
        drag.off().on("keyup",function(){
            event.preventDefault();
            event.stopPropagation();
            if (event.keyCode === 13 || event.keyCode === 32) {
                console.log("Enter", event.which);
                event.preventDefault();
                if ($(this).is(":focus") && !$(this).data("dragged")) {
                    dragClone = $(this).html();
                    setTabIndex($(this), -1);
                    drag.attr("tabindex", -1);
                    drop.attr("tabindex", 1);
                }
            }
        });
        drop.off().on("focus", function () {
            var dropClone = $(this).html();
            $(this).html(dragClone);
            drop.off().on("keyup", function () {
                event.preventDefault();
                event.stopPropagation();
                if (event.keyCode === 13) {
                    console.log("Enter", event.which);
                }
                else if (event.keyCode === 9) {
                    console.log("Tab", event.which);
                    $(this).html(dragClone);
                    $(this).off().on("blur", function () {
                        $(this).html(dropClone);
                    })
                }
                else if (event.keyCode === 27) {
                    console.log("Esc", event.which);

                }
            });
        });
    }

    function setTabIndex(elem, val) {
        var tabIndex;
        if (val && val !== "undefined") {
            tabIndex = val;
        }
        else {
            tabIndex = 1;
        }
        $(elem).each(function () {
            $(this).attr("tabindex", tabIndex);
            $(this).attr("data-tabindex", tabIndex);
        });
    }

    function setCurrentTabIndex(elem) {
        $(elem).each(function () {
            $(this).attr("tabindex", $(this).data("tabindex"));
        });
    }
    return AccessibleDrag;
});

