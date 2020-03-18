var res = "";
var resHandler = "";
var listen = false;
var synth, utterance;
var recognizer = new webkitSpeechRecognition;
recognizer.interimResults = true;
recognizer.lang = 'ru-Ru';

recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
        res = result[0].transcript;
        addMessage(res, "user");
        resHandler = handler(res);
        addMessage(resHandler, "system");
        talk(resHandler);
    } else {
        console.log('Промежуточный результат: ', result[0].transcript);
    }
};
// recognizer.onerror = (e) => {
//     $(".console").add('<div class="alert alert-danger border-danger" role="alert"><span class="text-danger fa-1x">ERROR ' + (error.message ? ": "+error.message:"") + '!</span></div>')
// }

function talk (text) {
    synth = window.speechSynthesis;
    utterance = new SpeechSynthesisUtterance(text);
    synth.speak (utterance);
}

function stop () {
    synth.pause();
}

function addMessage(text, who) {
    if (who == "user") {
        document.getElementById("chat").innerHTML += '<div class="w-100 row  d-flex justify-content-start"><div class="blue p-2 rounded-bottom rounded-right fa-pull-left w-25 white-text"><span>'+text+'</span></div></div><br>'
    } else if (who == "system") {
        document.getElementById("chat").innerHTML += '<div class="w-100 row d-flex justify-content-end"><div class="blue p-2 rounded-bottom rounded-left fa-pull-right w-25 white-text"><span>'+text+'</span></div></div><br>'
    }
}

function speech() {
  recognizer.start();
}

setTimeout(() => {
    greeting = greetings[Math.floor(Math.random() * greetings.length)]
    addMessage(greeting, "system");
    talk(greeting);
}, 1000);

document.onkeydown = (e) => {
    if (e.keyCode == 32) {
        speech();
    }
}
setInterval(() => {
    speech();
}, 100);