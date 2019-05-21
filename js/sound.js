let isPlaying = false;
function playSound(el, soundfile) {

    if(isPlaying) return false;

    var element = el;

    //$(element).find("img").animate({ 'zoom': 1.2}, 400);
    $(element).find("img").addClass("redCircle");
    $(".buttons").find("img").not($(el).find("img")).addClass("blur");

    element.mp3 = new Audio(soundfile);
    element.mp3.onended = function() {
        //$(element).find("img").animate({ 'zoom': 1 }, 400);
        $(element).find("img").removeClass("redCircle");
        $(".buttons").find("img").removeClass("blur");
        isPlaying = false;
    };

    element.mp3.play();
    isPlaying = true;

    /*
    if (element.mp3) {
        element.mp3.play();
    } else {


    }
     */

}