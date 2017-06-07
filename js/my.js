/**
 * Created by Nicki on 15-02-2017.
 */

$("#slidebar img:gt(0)").hide();

setInterval(function() {
    $('#slidebar img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slidebar');
}, 3000);

