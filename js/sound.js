function playSound(el, soundfile) {
    var element = el;
    if (element.mp3) {
        element.mp3.play();
    } else {
        element.mp3 = new Audio(soundfile);
        element.mp3.play();
    }
}