//repeat for production build
$(document).on('click', '.button__festShowMore', function () {
    $.ajax({
        url: '../ajaxhtml/festShowMore.html',
        success: function (data) {

            $('html, body').animate({
                scrollTop: '+=300px'
            }, 500);
            $('.festSection__list').append(data);
            //alert('Load was performed.');
        }
    });
});