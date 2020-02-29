$(function(){

  var about = `<div class="about__title">
  A b o u t
  </div>`


  
  $('#about').delay(3000).queue(function(){
    console.log("ab")
    $("#about").append(about);
    $(".about__title").delay(1300).animate(
      {"top":"-300px"}
      )
      // $.dequeue($("#page-loaded")[0]);
    });       //aboutを追加する関数のend

    $(window).scroll(function() {
 
      console.log($(this).scrollTop());
   
  })
});