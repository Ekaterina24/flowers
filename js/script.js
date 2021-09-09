$(document).ready(() => {

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
    });
});