$("h1").on("mouseover",function(){
  $("h1").css("color", "purple");
})


$("button").click(function(){
  $("h1").animate({opacity:0.5});
})
