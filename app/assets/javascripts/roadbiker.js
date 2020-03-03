$(function(){

  var portfolio = `<div class="road-page__portfolio">
  <a href="/pfs">portfolio</a>
  </div>`

  var click = `<div id="click"></div>`

  //jsでtransformを扱うとこのようになる
$(document).mousemove(function(e){
  // console.log("move")
  var movex = e.pageX;
  var movey = e.pageY;
  // console.log(stalker)
  // console.log(movex,movey)
  stalker.style.transform = 'translate(' + movex + 'px, ' + movey + 'px)';
});



  $("#roadbiker").queue(function(){
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      var leftfirst = $(".road-page__contents__box__left__first").offset().top;
      var leftsecond = $(".road-page__contents__box__left__second").offset().top;
      var rightfirst = $(".road-page__contents__box__right__first").offset().top;
      var rightsecond = $(".road-page__contents__box__right__second").offset().top;

      if(scroll > leftfirst - 400){
        $(".road-page__contents__box__left__first").animate(
          {"opacity":"0.7"}
        )
      }

      if(scroll > leftsecond - 400){
        $(".road-page__contents__box__left__second").animate(
          {"opacity":"0.7"}
        )
      }

      if(scroll > rightfirst - 400){
        $(".road-page__contents__box__right__first").animate(
          {"opacity":"0.7"}
        )
      }

      if(scroll > rightsecond - 400){
        $(".road-page__contents__box__right__second").animate(
          {"opacity":"0.7"}
        )
      }
    })
  })

  // $(document).getElementById("application").onclick = function(e){
  //   var x = e.pageX;
  //   var y = e.pageY;
  //   console.log(x,y);
  //   console.log(click)
  //   click.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  //   // $(".click").css(
  //   //   {"display":"block"}
  //   // )
  //   $("#application").append(click);
  // };

});