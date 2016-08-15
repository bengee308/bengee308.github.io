$(document).ready(function(){
    $("#nav-buttons, #scroll-down").click(function() {
        $('html, body').animate({
                scrollTop: $("#" + $(this).attr("href")).offset().top
        }, 1000);
    });
})