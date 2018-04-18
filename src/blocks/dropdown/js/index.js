$(document).ready(function(){
    $('.dropdown').on('click','.dropdown__placeholder',function(){
        var parent = $(this).closest('.dropdown');
        if ( ! parent.hasClass('dropdown_open')){
            parent.addClass('dropdown_open');
            $('.dropdown.dropdown_open').not(parent).removeClass('dropdown_open');
        }else{
            parent.removeClass('dropdown_open');
        }
        $('.dropdown__placeholder').css("display","none");
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.dropdown');
        parent.removeClass('dropdown_open').find('.dropdown__placeholder').text( $(this).text() );
        $('input[name=dropdown__input]').attr('value', $(this).attr('data-value') );
        $('.dropdown__placeholder').css("display","block");
    });
    $(".dropdown" ).insertAfter("input[name=dropdown__input]");
});