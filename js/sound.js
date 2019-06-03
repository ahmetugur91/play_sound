let isPlaying = false;
let playing_count = 0;

function playSound(el, soundfile) {

   // if(isPlaying) return false;

    var element = el;

    $(element).find("img").removeClass("blur");


    $(element).find("img").addClass("redCircle");
    $(".buttons").find("img")
        .not($(el).find("img"))
        .not($(".redCircle"))
        .addClass("blur");

    element.mp3 = new Audio(soundfile);

    element.mp3.onended = function() {
        $(element).find("img").removeClass("redCircle");

        if(playing_count <= 1) {
            $(".buttons").find("img").removeClass("blur");
        } else {
            $(element).find("img").addClass("blur");
        }

        isPlaying = false;
        playing_count = playing_count - 1;
    };

    element.mp3.play();

    isPlaying = true;
    playing_count = playing_count + 1;

    /*
    if (element.mp3) {
        element.mp3.play();
    } else {


    }
     */

}