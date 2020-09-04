"use strict";

var cursor = true;
var speed = 220;

setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    }else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);

$('#bg-img').css('background-image', "url('img/Undertale-Background.jpg')")
$('#success-banner').hide()
$('#fail-banner').hide()
$('#fail').hide()

var cheatEnter = []
var fail = new Audio('img/evil-laugh.mp3')
var success = new Audio('img/ta-da.mp3')

$(document).keyup(function () {
    var konamiArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    cheatEnter.push(event.keyCode)
    for (var i=0; i <= cheatEnter.length-1; i++) {
        if (cheatEnter.length <= 11) {
            if (JSON.stringify(cheatEnter) === JSON.stringify(konamiArray)) {
                $('#question').hide()
                $('#cursor').hide()
                success.play()
                $('#success-banner').show()
                cheatEnter = []
            }
        } else {
            $('#question').hide()
            $('#cursor').hide()
            $('#start').hide()
            $('#success-banner').hide()
            $('#fail').show()
            $('#bg-img').css('background-image', "url('img/fail-background.jpg')")
            fail.play()
            $('#fail-banner').show()
            cheatEnter = []
        }
    }
});
