$(".rangeSlider__input").ionRangeSlider({
    min:0,
    max:300000000,
    type:'single',
    grid: true,
    grid_num:2,
    grid_margin:false,
    from: 30000000,
    disable:true
});

$(document).ready(function(){
    var w = parseFloat($('.irs-slider').get(0).style.left);
    var max=95;
    var middle=50;
      if(w<middle){
            $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
            $('.irs-grid-pol:nth-child(7)').css('background-color','#2b354a');
            $('.irs-grid-pol:nth-child(13)').css('background-color','#2b354a'); 
        }
        if(w>=middle){
            $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
            $('.irs-grid-pol:nth-child(7)').css('background-color','#23dbb9');
            $('.irs-grid-pol:nth-child(13)').css('background-color','#2b354a'); 
        }
        if(w>=max){
            $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
            $('.irs-grid-pol:nth-child(7)').css('background-color','#23dbb9'); 
            $('.irs-grid-pol:nth-child(13)').css('background-color','#23dbb9');
        }
        $('.irs-slider').click(function(){
            var e = parseFloat($('.irs-slider').get(0).style.left);
            if(e<middle){
                $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
                $('.irs-grid-pol:nth-child(7)').css('background-color','#2b354a');
                $('.irs-grid-pol:nth-child(13)').css('background-color','#2b354a'); 
            }
            if(e>=middle){
                $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
                $('.irs-grid-pol:nth-child(7)').css('background-color','#23dbb9');
                $('.irs-grid-pol:nth-child(13)').css('background-color','#2b354a'); 
            }
            if(e>=max){
                $('.irs-grid-pol:first-child').css('background-color','#23dbb9');
                $('.irs-grid-pol:nth-child(7)').css('background-color','#23dbb9'); 
                $('.irs-grid-pol:nth-child(13)').css('background-color','#23dbb9');
            }
        });

});