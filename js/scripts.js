$(document).ready(function () {

    $("#mycarousel").carousel({interval: 2000});

    $("#carouselButton").click(function () {
        if ($(this).children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $(this).children("span").removeClass("fa-pause");
            $(this).children("span").addClass("fa-play");
        } else if ($(this).children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel('cycle');
            $(this).children("span").removeClass("fa-play");
            $(this).children("span").addClass("fa-pause");
        }
    });

    $("#loginButton").click(function (){
        $("#loginModal").modal("show");
    })

    $("#resButton").click(function (){
        $("#resModal").modal("show");
    })
})