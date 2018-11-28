$(document).ready(function() {
    // put your code here
    /*$(".theButton").click(function() {
        $("#panel .container").siblings().hide();
    });*/
    $(".theButton").click(function() {
        $(this).hide();
    });
    //adds  a fadeTo to all panels when a panel is clicked
    $(".theButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, .5);
    });


    //restores all panels to full opacity when reset button clicked 
    $(".superButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, 1);
    });

    //turns panel background black on mouseenter
    $(".theButton").mouseenter(function() {
        $(this).addClass("makeBlack");
    });

    //returns to original colour on mouseout 
    $(".theButton").mouseout(function() {
        $(this).removeClass("makeBlack");
    });
});
