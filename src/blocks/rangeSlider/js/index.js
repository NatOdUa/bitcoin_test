$(".rangeSlider__input").ionRangeSlider({
    min:0,
    max:300000000,
    type:'single',
    grid: true,
    grid_num:2,
    grid_margin:false,
    from: 290000000,
    disable: true
});

$(document).ready(function(){
    var w = parseFloat($('.irs-slider').get(0).style.left);
    var max=100;
    var middle=50;
    if(w>middle){
        $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
        $('.irs-grid-pol:nth-child(2)').css('background-color','#23dbb9');
    }

});