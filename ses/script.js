// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');


if(isFirefox || isIE || isOpera){
    hints.innerHTML = 'Tarayıcınız desteklemiyor! Chrome, Edge, Safari ';
    document.getElementById("mic").style.display = "none";
    document.getElementById("output").style.display = "none";
}else{

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition ;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent ;

var colors = [ 'siyah','mavi','kırmızı','sarı','yeşil','mor'];

var recognition = new SpeechRecognition(); 
recognition.continuous = false;
recognition.lang = 'tr-TR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;



var colorHTML= '';
colors.forEach(function(v, i, a){
  colorHTML += '<span class="renk_kutu ' + v + '"> ' + v + ' </span>';
});

hints.innerHTML = 'Sayfaya tıklayın ve aşağıdaki renkleri söyleyin. <br> <br> <br>' + colorHTML ;

document.body.onclick = function() {
  recognition.start();
  diagnostic.textContent = 'Renk bilgisi almaya hazır.' ;
}

recognition.onresult = function(event) {

  var color = event.results[0][0].transcript ;
  color = color.toLowerCase().replace('.', '');
  console.log(color) ;
  diagnostic.textContent = '' ;
  diagnostic.textContent += 'Anlaşılan kelime:' + color + ' ';
  var found = colors.find(element => element == color);

if(found){
    bg.className = '';
    bg.classList.add(color);
}else{
    diagnostic.textContent += " <-- bu rengi tanıyamadım."; 
}

console.log(event);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "Bu rengi tanıyamadım.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Tanıma sırasında hata oluştu: ' + event.error;
}

}