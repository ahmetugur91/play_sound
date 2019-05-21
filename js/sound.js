function playSound(el, soundfile) {
    var element = el;

    $(element).find("img").animate({ 'zoom': 1.2}, 400);
    $(element).find("img").addClass("redCircle");

    element.mp3 = new Audio(soundfile);
    element.mp3.onended = function() {
        $(element).find("img").animate({ 'zoom': 1 }, 400);
        $(element).find("img").removeClass("redCircle");
    };

    element.mp3.play();


    /*
    if (element.mp3) {
        element.mp3.play();
    } else {


    }
     */



}