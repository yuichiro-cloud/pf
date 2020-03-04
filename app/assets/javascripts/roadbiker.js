$(function(){

  var portfolio = `<div class="road-page__portfolio">
  <a href="/pfs">portfolio</a>
  </div>`


  //jsでtransformを扱うとこのようになる
$(document).mousemove(function(e){
  // console.log("move")
  var movex = e.pageX;
  var movey = e.pageY;
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
    $.dequeue($("#roadbiker")[0]);
  })

  $(document).on("click",function(e){
    var x = e.pageX - 33;   //クリックした位置に正確に星を追加する
    var y = e.pageY - 29;

    var click = $(`<i class="fas fa-star" id="click"></i>`) //セレクタ指定できるようにしている
  
    $(".pf, .pfs").append(click);
  $(click).css({    //追加したclick自身のpositionを変更
    'left':x,
    'top':y
  });
  $(click).fadeOut(10000).queue(function() {    //追加してから10s後に消す
    $(click).remove();
    $.dequeue($(click)[0]);
});

  });

});