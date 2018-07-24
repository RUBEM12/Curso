// $(document).ready(function () {


//     $(".selectors").delegate("li:not(.active)", "click", function () {
//         $(this).addClass("active").siblings().removeClass("active").parents(".article").find(".box").hide().eq($(this).index()).fadeIn(300);
//         console.log("ativo");
//     });

// });



$('.selectors li').on('click', function() {
    var _this = $(this);
    var index = _this.index();
    $('.selectors li').removeClass('active');
    
    _this.addClass('active');
    $('.carousel .box').removeClass('visible').hide();
    $('.carousel .box').eq(index).addClass('visible').fadeIn();

})