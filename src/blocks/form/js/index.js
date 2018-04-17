$('.form__showPass').on("click",function(){
    var type = $('.form__input_password').attr('type') == "text" ? "password" : 'text';
    $('.form__showPass').toggleClass('form__showPass_hide');
    $('.form__input_password').prop('type', type);
    $('.form__input_password').focus();
});