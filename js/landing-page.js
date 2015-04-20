// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function () {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function () {
        if (!location.hash) {
            $(modal).modal('hide');
        }
    }
});

$('#video_b').click(function (){
    var password_main = '1234',
        password = $('#video').val();
    alert(password);
    if(password === password_main){
        alert('OK');
        console.log($('#myModal > .modal-body'));
        $('<a href="https://www.youtube.com/playlist?list=PLda-1MISV3JoswP5AmTPTMR_oGSNG7X5E" target="_blank" rel="external">Go</a>')
            .fancybox().trigger('click');
        $('div.modal-body').html(
            '<a href="https://www.youtube.com/playlist?list=PLda-1MISV3JoswP5AmTPTMR_oGSNG7X5E" target="_blank">Go</a>'
        );
    }
});