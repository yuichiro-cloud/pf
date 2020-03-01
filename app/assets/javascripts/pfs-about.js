$(function(){

  var about = `<div class="box__title">
  A b o u t
  </div>`


  
  $('#about').delay(3000).queue(function(){
    console.log("ab")
    $("#about").append(about);
    $(".box__title").delay(1300).animate(
      {"top":"-300px"}
      )
      $.dequeue($("#about")[0]);
    });       //aboutを追加する関数のend
    
    $("#about").delay(3000).queue(function(){
      $(".box").css(
        {"height":"800vh"}
        )
        console.log("aaaaaa");

        
        
        $(window).scroll(function() {
          console.log("iii")
        console.log($(this).scrollTop());
        
          // );
          $(".box__contents").animate(
            {"width":"90%"},(4000)
            )
            
          })
        });
        // $(".box__contents").css({"opacity":"1"})
      // $(".box__contents").css({"opacity":"1"})
   
  // var scroll = $(window).scrollTop(188);
  // console.log(scroll);
});