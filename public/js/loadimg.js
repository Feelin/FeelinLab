$(function () {
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
            $(".lightbox").css("display","block");
            $(".bigpic").attr("src",src).css("display","block");
        }); 

    });
    $(".lightbox").on("click",function(){
        $(this).css("display","none");
        $(".bigpic").css("display","none");
    });

});