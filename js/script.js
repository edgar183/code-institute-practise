$(document).ready(function() {

    $('p').click(function() {
        $(this).children('a').css('background-color', 'yellow');
    });
    $("button").click(function() {
        $(this).next().slideToggle("slow");
    });
   
    
});
