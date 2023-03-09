$(document).ready(function(){
    $("#start").click(function(){
        if($(".boundary").hasClass("youlose")) $(".boundary").removeClass("youlose");
        $("h2").text('Start!');
        $("#maze").mouseleave(function(){
            $(".boundary").addClass("youlose");
        });
        $(".boundary").mouseover(function(){
            $(".boundary").addClass("youlose");
        });
        $("#end").mouseover(function(){
            if($(".boundary").hasClass("youlose")) {
                $("h2").text("Sorry! You lost. :[");
            } else {
                $("h2").text("You win! :]");
            }
        });
    });
});