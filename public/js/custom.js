$(function () {
var resizeHeight = function (){
    var page_h = parseInt($(".page").css("height")); 
    var window_h = $(window).height()-260;
    if(page_h<window_h){
        $(".page").css("height",window_h+"px");
    }
};
    resizeHeight();
    $(window).resize(function(){
        resizeHeight();
    });

    $(".tags-name").click(function(){
        var tag = "."+$(this).text().trim();
        console.log(tag);
        $(".acticle-box").css("display","none");
        $(tag).css("display","block");
        resizeHeight();
    });
});