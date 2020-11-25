//Cursor animation start
jQuery(document).ready(function() {
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

//Position of the circle
  $(document).mousemove(function(e){
    mouseX = e.pageX - 20;
    mouseY = e.pageY - 20;
  });


//Cursor speed
  setInterval(function(){
    xp += ((mouseX - xp)/3);
    yp += ((mouseY - yp)/3);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});

// Scroll to the top of the page
function topFunction() {
  var topPage = document.getElementById("topPage");
  topPage.scrollIntoView({behavior: "smooth"});
}

// Scroll to tool renting
function toolRenting() {
  var toolRentingSection = document.getElementById("toolRenting");
  toolRentingSection.scrollIntoView({behavior: "smooth"});
}

// Scroll to helping hands
function helpingHands() {
  var helpingHandsSection = document.getElementById("helpingHands");
  helpingHandsSection.scrollIntoView({behavior: "smooth"});
}

// Scroll to knowledge
function knowledge() {
  var knowledgeSection = document.getElementById("knowledge");
  knowledgeSection.scrollIntoView({behavior: "smooth"});
}

//Dark mode button
function darkMode() {


  document.body.style.cssText = "{background-color: blue;}";
}

//document.body.style.cssText = {'background-color: #222 !important';'color: red !important'};
