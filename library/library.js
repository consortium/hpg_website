$(document).ready(function () {
    $("#items-container").on("click", ".accordion .accordion-click", function(){
        console.log("on clique donc");
        //slide up all the link lists
        $(".accordion .content-hidden").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible")){
            $(this).next().slideDown();
        }
    })
});
