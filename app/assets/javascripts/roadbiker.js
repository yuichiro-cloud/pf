$(function(){

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
});