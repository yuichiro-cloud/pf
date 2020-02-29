$(function(){
  var loading = `<div class="load" id="page-loading">
  <div class="loading" id="loading">
  l o a d i n g
  </div>
  </div>`
  
  var welcome = `<div class="main__welcome">
  Welcome
  </div>`
  
  var portfolio = `<div class="main__pf">
  Portfolio
  </div>`
  
  var creator = `<div class="main__creator">
  creator
  </div>`
  
  var name = `<div class="main__name">
  Yuichiro Ito
  </div>`
  
  var left = `<div class="left">
  <a href="/">H O M E</a>
  </div>`
  
  var box = `
  <div class="box__left">
  <div class="box__left__about">
  <a href="/pfs/about">a b o u t</a>
  </div>
  <div class="box__left__pf">
  <a href="/pfs">p o r t f o l i o</a>
  </div>
  </div>
  <div class="box__btn">
  menu
  </div>`
  // $(document).ready(function() {    //クッキー
  //   var now = new Date()
  //   var message = 'not-firsttime' + now;
  //   $.cookie('message', message);
  //   var cookie = $('#message').text($.cookie('message'));
  //   console.log(cookie);
  // });
  
  
  window.onload = function(){
    // ページ読み込み時に実行したい処理
    console.log("loading");
    $(".pfs").append(loading);
    // $(".application").append(loading);
    
    function loaderremove(){    //loadingボタンを消す
      $("#page-loading").remove();
      
    }
    setTimeout(loaderremove,3000);    //一定時間でloadingを消す
  }
  
  // if($.cookie('message', message) == nil){
  $('#page-loaded').delay(3000).queue(function(){
    $(".main").append(welcome);
    $(function(){
      function welcomeremove(){       //appendしたwelcomeを消すためにdocument
        // $(".main__welcome").remove();     //welcomeをfadeout
        $(".main__welcome").fadeOut();
      }
      setTimeout(welcomeremove,4700);     //一定時間でwelcomeを消す
      $.dequeue($("#page-loaded")[0]);
    })    //appendしたwelcomeを消すためにdocument end
  });       //welcomeを追加する関数のend
// }
  
  $('#page-loaded').queue(function(){
    console.log("pf")
    $(".main").append(portfolio);
    $(".main__pf").delay(1300).animate(
      {"top":"-300px"}
      )
      $.dequeue($("#page-loaded")[0]);
    });       //portfolioを追加する関数のend
    
    
    $("#page-loaded").delay(1400).queue(function(){   //creatorをappend
      $(".main").append(creator);
      $(".main__creator").animate(
        {"top":"-100px"}
        )
        $.dequeue($("#page-loaded")[0]);
      });
      
      $("#page-loaded").delay(1300).queue(function(){   //nameをappend
        $(".main").append(name);
        $(".main__name").animate(
          {"top":"100px"})
          $.dequeue($("#page-loaded")[0]);
      });
      
  $("#page-loaded").delay(1400).queue(function(){   //homeボタンをappend
    $(".loaded").append(left);
    $.dequeue($("#page-loaded")[0]);
  });
  
  $("#page-loaded").queue(function(){   //menuボタンをappend
    console.log("right")
    $("#menu-box").append(box);
    $.dequeue($("#page-loaded")[0]);
  });

});