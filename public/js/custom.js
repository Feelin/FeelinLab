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

    $("article img").on("click",function(){
        var src = $(this).attr("src");
        console.log(src);
        $(".lightbox").css("display","block");
        $(".bigpic").attr("src",src).css("display","block");
    });

    $(".lightbox").on("click",function(){
        $(this).css("display","none");
        $(".bigpic").css("display","none");
    });
///////////////////////////loadimg///////////////////
    $(".cover").on("click",function(){       
        var size = $(this).data("size");
        var local = $(this).data("local");
        var photos = ["","","",""];
        var j = 1;
        var k = 0;    
        while(j<size){    
            photos[k%3] += '<img class="photo" src="../public/photo/'+local+'/'+j+'.jpg">';
            j++;
            k++;
        }  

        $(".col-6").remove();
        for(l=0;l<3;l++){
            $(".col-4").eq(l).append(photos[l]);
        }   

        $(".photo").on("click",function(){
            var src = $(this).attr("src");
            var width = parseInt($(this).css("width"));
            var height = parseInt($(this).css("height"));
            $(".lightbox").css("display","block");
            $(".bigpic").attr("src",src).css("display","block");
            if(height>width){
                $(".bigpic").addClass("colimg");
            }
            else{
                $(".bigpic").removeClass("colimg");
            }
        }); 

    });
  

});