function showAlert() {
    alert("Hello, world!");
}
window.onload = function() {
    let biggerDecorationsButton = document.getElementById("biggerDecorations");
    biggerDecorationsButton.onclick = changeTextSize;
    let blingCheckBox = document.getElementById("bling");
    blingCheckBox.onchange = changeTextStyle;
    let igpayAtinlayButton = document.getElementById("pig_latin");
    igpayAtinlayButton.onclick = changeTextToPigLatinStyle;
    let malkovitchButton = document.getElementById("malkovitch");
    malkovitchButton.onclick = changeTextTMalkovitch;
}
function changeTextSize() {
    if(document.getElementById("lorem").value.length > 0) {
        setInterval(function(){
            document.getElementById("lorem").style.fontSize = parseInt(window.getComputedStyle(document.getElementById("lorem"), null).getPropertyValue('font-size')) + 2 + "px";
        }, 500);
    } else {
        document.getElementById("lorem").value = "Please type your text here...";
    }
}
function changeTextStyle() {
    if(document.getElementById("lorem").value.length > 0) {
        let text = document.getElementById("lorem");
        if(document.getElementById("bling").checked == true) {
            var body = document.getElementsByTagName('body')[0];
            body.style.backgroundImage = 'url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg';

            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
        } else {
            var body = document.getElementsByTagName('body')[0];
            body.style.backgroundImage = 'none';
            text.style.fontWeight = "normal";
        }
    } else {
        document.getElementById("lorem").value = "Please type your text here...";
    }
}
function changeTextToPigLatinStyle() {
    if(document.getElementById("lorem").value.length > 0) {
        let words = document.getElementById("lorem").value.split(" ");
        let pigLatin = "";
        for(let i = 0; i < words.length; i++) {
            var n = words[i].search(/[aeiuoAEIOU]/);
            console.log(n);
            switch (n) {
                case 0: result = words[i]+"ay"; break;
                case -1: result = words[i]+"ay"; break;
                default :
                    result= words[i].substr(n)+words[i].substr(0,n)+"ay";
                break;
            }
            pigLatin += result + ' ';
        }
        document.getElementById("lorem").value = pigLatin;
    } else {
        document.getElementById("lorem").value = "Please type your text here...";
    }
}
function changeTextTMalkovitch() {
    if(document.getElementById("lorem").value.length > 0) {
        let words = document.getElementById("lorem").value.split(" ");
        for(let i = 0; i < words.length; i++) {
            if(words[i].length >= 5) {
                words[i] = 'Malkovich';
            }
        }
        document.getElementById("lorem").value = words.join(" ");
    } else {
        document.getElementById("lorem").value = "Please type your text here...";
    }
}