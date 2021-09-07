function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function() {
    if (!"speechSynthesis" in window) {
        var speakerObj = document.getElementById('speakerIcon') ;
        speakerObj.style.display = 'none';
    }
});

function speech(text) {
    var to_speak = new SpeechSynthesisUtterance(text);
    to_speak.rate = 1.4;
    to_speak.lang = 'en-US';
    window.speechSynthesis.speak(to_speak);
}




