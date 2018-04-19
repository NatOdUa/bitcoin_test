$(document).ready(function(){
    $('.dropdown').on('click','.dropdown__placeholder',function(){
        var parent = $(this).closest('.dropdown');
        if (!parent.hasClass('dropdown_open')){
            parent.addClass('dropdown_open');
            $('.dropdown.dropdown_open').not(parent).removeClass('dropdown_open');
        }
        else{
            parent.removeClass('dropdown_open');
        }
        $('.dropdown__placeholder').css("display","none");
        $('.dropdown__arrow').addClass('dropdown__arrow_active');
        if($('.dropdown__placeholder').text()=='RU'){
            $('.dropdown__list').toggleClass('dropdown__list_ru');
        }
        else{
            $('.dropdown__list').removeClass('dropdown__list_ru');
        }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.dropdown');
        parent.removeClass('dropdown_open').find('.dropdown__placeholder').text( $(this).text());
        $('input[name=dropdown__input]').attr('value',$(this).attr('data-value'));
        $('.dropdown__placeholder').css("display","block");
        $('.dropdown__list').removeClass('dropdown__list_ru');
        $('.dropdown__arrow').removeClass('dropdown__arrow_active');
    });
    $('.dropdown').insertAfter("input[name=dropdown__input]");
    $('.dropdown').on('click','.dropdown__arrow',function(){
        var parent = $(this).closest('.dropdown');
        if (!parent.hasClass('dropdown_open')){
            parent.addClass('dropdown_open');
            $('.dropdown.dropdown_open').not(parent).removeClass('dropdown_open');
            $('.dropdown__placeholder').css("display","none");
            $('.dropdown__arrow').addClass('dropdown__arrow_active');
            if($('.dropdown__placeholder').text()=='RU'){
                $('.dropdown__list').addClass('dropdown__list_ru');
            }
            else if($('.dropdown__placeholder').text()=='EN'){
                $('.dropdown__list').removeClass('dropdown__list_ru');
            }
            else{
                $('.dropdown__list').removeClass('dropdown__list_ru');
            }
        }

    });
});