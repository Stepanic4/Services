//****Created by Zolotukhin 2.01.19****


$(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
});

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 67)
                }, 1000);
                return true;
            }
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 30) {
            $('.scrollbtn').fadeIn('slow');
        } else {
            $('.scrollbtn').fadeOut('slow');
        }
    });
});

