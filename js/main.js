/*global $ ,console*/
var width = $(document).width();
$('.bigc').css('left', (width / 2) - 50);
$(window).resize(function () {
    "use strict";
    var width = $(document).width();
    $('.bigc').css('left', (width / 2) - 50);
});