$(document).ready(function () {


    $(".selectors").delegate("li:not(.active)", "click", function () {
        $(this).addClass("active").siblings().removeClass("active").parents(".article").find(".box").hide().eq($(this).index()).fadeIn(300);
        console.log("ativo");
    });

   
});