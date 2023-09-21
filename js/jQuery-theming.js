jQuery.noConflict();
jQuery(document).ready(function($){
    $("body").addClass("dark"); 
    $("#btns label").click(function(){
        $("#btns label").removeClass("active");
        $(this).addClass("active");
        let theme = $(".active").find("span").text();
        $("body").removeClass();
        $("body").addClass(theme);
    });
});