let timer;
let index = 0;
let animation = 'BLANK';
let speed = 250;
$(document).ready(function(){
    "use strict";
    // when clicking start button
    $('button#start').click(function(){
        $('textarea#mytextarea').prop('disabled', true);
        $('select#animation').prop('disabled', true);
        $('button#start').prop('disabled', true);
        $('button#stop').prop('disabled', false);
        // perform animation
        console.log($('textarea#mytextarea').val());
        if($('textarea#mytextarea').val()) startAnimation();
    });
    // when clicking stop button
    $('button#stop').click(function(){
        if(timer != 'undefined') {
            // clear timer
            clearInterval(timer);
            timer = 'undefined';
            // put back original text
            setTimeout(function() { 
                $('textarea#mytextarea').val(ANIMATIONS[animation]);
            }, 700);
        }
        $('textarea#mytextarea').prop('disabled', false);
        $('select#animation').prop('disabled', false);
        $('button#stop').prop('disabled', true);
        $('button#start').prop('disabled', false);
    });
    // when choosing animation select box
    $('select#animation').on('change', function() {
        animation = this.value;
        $('textarea#mytextarea').val(ANIMATIONS[animation]);
    });
    // when choosing size select box
    $('select#size').on('change', function() {
        $('textarea#mytextarea').css("font-size", this.value + "px");
    });
    // when toggling speed checkbox
    $("input#speed").change(function() {
        speed = this.checked ? 50 : 250;
        if(timer != 'undefined') {
            // clear timer
            clearInterval(timer);
            // restart animation
            startAnimation();
        }
    });
});
// animation starter function
function startAnimation() {
    timer = setInterval(function () {
        let arr = ANIMATIONS[$('select#animation').val()].split("=====\n");
        $('textarea#mytextarea').val(arr[index]);
        index = (index > arr.length-2) ? 0 : (index + 1);
    }, speed);
}