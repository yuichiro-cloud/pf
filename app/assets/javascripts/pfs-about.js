$(function(){

  var about = `<div class="box__title">
  A b o u t
  </div>`


  
  $('#about').delay(3000).queue(function(){
    // $('#about').queue(function(){
    console.log("ab")
    $("#about").append(about);
    $(".box__title").delay(1300).animate(
      // $(".box__title").animate(
      {"top":"-300px"}
      )
      $.dequeue($("#about")[0]);
    });       //aboutを追加する関数のend
    
    $("#about").delay(3000).queue(function(){
      $(".box").css(
        {"height":"800vh"}
        )
        console.log("aaaaaa");

        
        
        $(window).scroll(function() {       //aboutが終わってからスクロールイベントが発火
          console.log("iii")
        console.log($(this).scrollTop());
        
          // );
          $(".box__contents").animate(
            {"width":"90%"},(1000)
            // {"width":"90%"}
            )
            $(".box__contents__text").animate(
              {"fontSize":"20px"},(1000)
              // {"fontSize":"20px"}
              
            )
            
          })
        });
        // $(".box__contents").css({"opacity":"1"})
      // $(".box__contents").css({"opacity":"1"})
   
  // var scroll = $(window).scrollTop(188);
  // console.log(scroll);
});