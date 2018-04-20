$(document).ready(function () {
    $(".menu__control").on("click", function () {
        if ($(".menu").hasClass('menu_mobileActive')) {
            $('.menu__list').css("opacity", "0");
            $('.menu__list').slideToggle();
            setTimeout(function () {
                $('.menu').toggleClass('menu_mobileActive');
            }, 50);
        }
        else {
            $('.menu__list').css("opacity", "1");
            $('.menu__list').slideToggle();
            $('.menu').toggleClass('menu_mobileActive');
        }
    });
});