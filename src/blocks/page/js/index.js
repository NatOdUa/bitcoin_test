$(document).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.page__header').addClass('page__header_sticky');
        $('.page__header').removeClass('page__header_transparent');
    }
    if ($(this).scrollTop() < 1) {
        $('.page__header').addClass('page__header_transparent');
        $('.page__header').removeClass('page__header_sticky');
    }
});