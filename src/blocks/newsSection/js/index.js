$(document).ready(function () {
    $('.newsSection__list').owlCarousel({
        items: 4,
        margin:33,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            620:{
                items:2
            },
            991:{
                items:3
            },
            1199:{
                items:4
            }
        }
    });

});