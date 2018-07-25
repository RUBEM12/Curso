$('.selectors li').on('click', function () {
   var _this = $(this);
   var index = _this.index();
  $('.selectors li').removeClass('active');

 _this.addClass('active');
   $('.carousel .box').removeClass('visible').hide();
  $('.carousel .box').eq(index).addClass('visible').fadeIn(350);

});
