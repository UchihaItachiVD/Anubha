$(document).ready(function () {

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    $('#play').click(function () {
        $('.loader').fadeOut();
        $('.song')[0].play();
    });

    new Snowflakes();
});
