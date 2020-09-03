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

var cheatEnter = ''
var fail = new Audio('img/evil-laugh.mp3')
var success = new Audio('img/ta-da.mp3')

$(document).keyup(function () {
    var code = '3838404037393739666513'
    cheatEnter += event.keyCode
    if (cheatEnter === code) {
        $('#question').hide()
        $('#cursor').hide()
        success.play()
        $('#success-banner').show()
        cheatEnter = ''
    } else if (cheatEnter.length > 22) {
        $('#cursor').hide()

        $('#start').hide()
        $('#success-banner').hide()
        $('#fail').show()
        $('#bg-img').css('background-image', "url('img/fail-background.jpg')")
        fail.play()
        $('#fail-banner').show()
        cheatEnter = ''
    }
});