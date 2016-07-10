$(document).ready(function() {

    // add click event to container so when clicked, top most block is highlighted

    $(".container").click(function() {
        var firstChild = $(this).children().eq(0);
        //first click
        if ($(".highlight").length === 0) { //nothing is highlighted
            if (!firstChild.hasClass('base')) {
                //highlight the first element
                firstChild.addClass("highlight");
            }
            return;
        }

        //second click; something is highlighted

        //check if move is valid
        if ($(".highlight").hasClass("small") || ($(".highlight").hasClass("medium") && !firstChild.hasClass("small")) || ($(".highlight").hasClass("large") && firstChild.hasClass("base"))) {
            //move highlighted
            $(".highlight").prependTo($(this));
        }
        //remove highlight
        $(".highlight").removeClass("highlight");

        //check if won
        if ($(this).hasClass("end") && $(this).children().length === 4) {
            alert("you win!");
        }

    });



});
