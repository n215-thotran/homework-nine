$(document).on("click", "a", function(){
    var link_num = $(this).data("value");

    if (link_num == "HOME") {
        $("#homepage").css("display","block");
        $("#about").css("display","none");
        $("#guides").css("display","none");
        $("#blog").css("display","none");
    }
    if (link_num == "ABOUT") {
        $("#homepage").css("display","none");
        $("#about").css("display","block");
        $("#guides").css("display","none");
        $("#blog").css("display","none");
    }
    if (link_num == "RUINS") {
        $("#homepage").css("display","none");
        $("#about").css("display","none");
        $("#guides").css("display","block");
        $("#blog").css("display","none");
    }
    if (link_num == "BLOG") {
        $("#homepage").css("display","none");
        $("#about").css("display","none");
        $("#guides").css("display","none");
        $("#blog").css("display","block");
    }
    return false;
});