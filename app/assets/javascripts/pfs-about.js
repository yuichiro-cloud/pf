$(function(){

  var about = `<div class="box__title">
  A b o u t
  </div>`
  var left = `<div class="box__home">
  <a href="/">H O M E</a>
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
      $(".box").css(    //スクロールさせるために全体を100vhから100%
        {"height":"100%"}
        )
        $(".box__contents").css(    //.box__contents以下のdisplay:noneを解除
          {"display":"block"}
        )
        console.log("aaaaaa");
        $.dequeue($("#about")[0]);
      });

      $("#about").queue(function(){   //下までイベントを発火させるために後からpadding-bottomを追加
        $(".box").css(
          {"paddingBottom":"300px"}
        )
        $.dequeue($("#about")[0]);
      });

      $("#about").queue(function(){   //homeボタンをappend
        $("#about").append(left);
        $.dequeue($("#about")[0]);
      });

        
        
      $("#about").queue(function(){
        $(window).scroll(function() {       //aboutが終わってからスクロールイベントが発火

        var scroll = $(this).scrollTop();
            var contents = $(".box__contents").offset().top;    //それぞれの要素のtopだけを抜き出す
            var first = $(".box__contents__main__first").offset().top;
            var second = $(".box__contents__main__second").offset().top;
            var third = $(".box__contents__main__third").offset().top;
            var bottom = $(".box__contents__main__bottom").offset().top;
            
              if(scroll > contents - 400){     //contentsの400px上からopacityを1にする
                $(".box__contents").animate(
                  {"opacity":"0.7"}
                )
              }
              if(scroll > first - 400){     //firstの400px上からopacityを1にする
                $(".box__contents__main__first").animate(
                  {"opacity":"1"},(1500)
                )
              }
              if(scroll > second - 400){     //secondの400px上からopacityを1にする
                $(".box__contents__main__second").animate(
                  {"opacity":"1"},(1500)
                )
              }
              if(scroll > third - 400){     //thirdの400px上からopacityを1にする
                $(".box__contents__main__third").animate(
                  {"opacity":"1"},(1500)
                )
                
              }
              if(scroll > third - 400){     //bottomの400px上からopacityを1にする
                $(".box__contents__main__bottom").animate(
                  {"opacity":"1"},(1500)
                )
              }
              $.dequeue($("#about")[0]);
            });
          })
});