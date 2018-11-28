$(document).ready(function() {
 //
 // add your jQuery code here
 $("button").on({
  mouseenter: function() {
   $('button').removeClass('makeRed').addClass('makeBorder').fadeOut(1000,'linear');
  },
  mouseleave: function() {
   $('button').removeClass('makeBorder').addClass('makeRed').fadeIn(1000,'linear');
  }
 });
 
 $("button").click(function() {
  if ($('#para1').is(':hidden')) {
   $('p').slideDown(1000);
  }
  else {
   $('p').slideUp(1000);
  }
 });
 $('a').attr("href", "https://codeinstitute.net/");
});
