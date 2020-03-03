$(function(){

  var portfolio = `<div class="contents__title">
  P o r t f o l i o
  </div>`


  var home = `<div class="contents__home">
  <a href="/">H O M E</a>
  </div>`

  var roadbiker = `<div class="contents__main__road">
  <div class="contents__main__road__header">
  <a href="/pfs/roadbiker">RoadBiker
  </a></div>
  <div class="contents__main__road__image">
  <a href="/pfs/roadbiker"><img width="400px" src="/assets/roadbiker-46db605a231c1bbad881dbb9a7de199dec5ab1a40ca8dcf3e03a1aaf15a6b9cd.png">
  </a></div>
  <div class="contents__main__road__text">
  趣味のRoadBikeについてのWebアプリケーション
  </div>
  </div>`



  //portfolioを追加
  $('#portfolio-contents').delay(3000).queue(function(){     
    $("#portfolio-contents").append(portfolio);
    $(".contents__title").delay(1300).animate(
      {"top":"-300px"}
    )
    $.dequeue($("#portfolio-contents")[0]);
  });
  //作品紹介を追加
$("#portfolio-contents").delay(1300).queue(function(){
  $(".contents__info").css(
    {"display":"block"}
  )
  $.dequeue($("#portfolio-contents")[0]);
});
//スクロールできるようにheightを100%に変更
  $("#portfolio-contents").delay(1400).queue(function(){
    $("#portfolio-contents").css(
      {"height":"100%"}
    )
    $(".contents__main").css(    
      {"display":"block"}
    )
    $.dequeue($("#portfolio-contents")[0]);
  });
  //homeボタンを追加
  $("#portfolio-contents").queue(function(){
    console.log("home1")
    $("#portfolio-contents").append(home);
    console.log("home2")
    $.dequeue($("#portfolio-contents")[0]);
  });
  //roadをスクロールでopacityを0.9に。
  $("#portfolio-contents").queue(function(){
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      var road = $(".contents__main__road").offset().top;

      if(scroll >road - 500){
        $(".contents__main__road").animate(
          {"opacity":"0.9"},(1000)
        )
      }
    })
  });

  // $(".contents__main__road__header,.contents__main__road__image").on("click",function(e){
  //   e.preventDefault();
  //   $(".contents__main__road__image > a > img").animate(
  //     {"width":"100%"},(1500)
  //   )
  //   $(".contents__inf,.contents__main__road__header,.contents__main__road__text").animate(
  //     {"opacity":"0"}
  //   )
  //   //ページ遷移を遅らせている
  //   setTimeout(function(){
  //     location.href = 'http://18.178.166.66/pfs/roadbiker';
  //   }, 2000);
  // });
});