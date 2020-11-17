//Cursor animation start
jQuery(document).ready(function() {
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

//position of the circle
  $(document).mousemove(function(e){
    mouseX = e.pageX - 20;
    mouseY = e.pageY - 20;
  });


//3 is the speed, the lower the faster
  setInterval(function(){
    xp += ((mouseX - xp)/3);
    yp += ((mouseY - yp)/3);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});
