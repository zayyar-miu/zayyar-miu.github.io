"use strict";
var emptyL = 300;
var emptyT = 300;
var divs;
$(document).ready(function() {
    divs = $("#puzzlearea div");
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }

    $("#puzzlearea div").hover(
        function(){
            if (isMoveable($(this).innerHTML)) $(this).addClass("movablepiece");
        }, function(){
            if (isMoveable($(this).innerHTML)) $(this).removeClass("movablepiece");
        }
    );

    $("#puzzlearea div").click(function() {
        if(isMoveable($(this).innerHTML)) {
            let left = leftValue($(this));
            let top = topValue($(this));
            $(this).css({"left": emptyL+"px", "top": emptyT+"px"});
            emptyL = left;
            emptyT = top;
        }
    });

    $("#shufflebutton").click(function() { shufflePuzzle() });
});

function isMoveable(position) {
    if (left(emptyL, emptyT) == (position-1)) return true;
	if (down(emptyL, emptyT) == (position-1)) return true;
	if (up(emptyL, emptyT) == (position-1)) return true;
	if (right(emptyL, emptyT) == (position-1)) return true;
}

function left(x, y) {
	if (x > 0) {
		for (var i = 0; i < divs.length; i++) 
		{
			if (parseInt(divs[i].style.left) + 100 == x && parseInt(divs[i].style.top) == y) return i;
		}
	}
	return -1;
}

function right(x, y) {
	if (x < 300){
		for (var i =0; i<divs.length; i++){
			if (parseInt(divs[i].style.left) - 100 == x && parseInt(divs[i].style.top) == y) return i;
		}
	}
	return -1;
}

function up(x, y) {
	if (y > 0) {
		for (var i=0; i<divs.length; i++) {
			if (parseInt(divs[i].style.top) + 100 == y && parseInt(divs[i].style.left) == x) return i;
		} 
	}
	return -1;
}

function down(x, y) {
	if (y < 300) {
		for (var i=0; i<divs.length; i++)
		{
			if (parseInt(divs[i].style.top) - 100 == y && parseInt(divs[i].style.left) == x) return i;
		}
	}
	return -1;
}

function shufflePuzzle() {
    for (var i=0; i<300; i++) {
        var rand = parseInt(Math.random()* 100) % 4;
        if (rand == 0) {
            var temp = up(emptyL, emptyT); 
            if ( temp != -1) swap(temp);
        }
        if (rand == 1) {
            var temp = down(emptyL, emptyT);
            if ( temp != -1) swap(temp);
        }
        if (rand == 2) {
            var temp = left(emptyL, emptyT);
            if ( temp != -1) swap(temp);
        }
        if (rand == 3) {
            var temp = right(emptyL, emptyT);
            if (temp != -1) swap(temp);
        }
    }
}
  
function swap(position) {
    var temp = parseInt(divs[position].style.top);
	divs[position].style.top = emptyT + 'px';
	emptyT = temp;
	temp = parseInt(divs[position].style.left);
	divs[position].style.left = emptyL + 'px';
	emptyL = temp;
}