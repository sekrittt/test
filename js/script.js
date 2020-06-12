var res = "",
    resHandler = "",
    result = "";
var listen = false;
var synth, utterance;
var recognizer = new webkitSpeechRecognition;
recognizer.interimResults = true;
recognizer.lang = 'ru-Ru';

recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
        res = result[0].transcript;
        resHandler = handler(res);
        if (resHandler !== undefined) {
            addMessage(res, "user");
            addMessage(resHandler, "system");
            talk(resHandler);
        }
        recognizer.stop();
    } else {
        console.log('Промежуточный результат: ', result[0].transcript);
    }
};
function talk (text) {
    synth = window.speechSynthesis;
    utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
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
recognizer.onend = () => {
    recognizer.stop();
    speech();
}
function speech() {
  recognizer.start();
}
window.onload = () => {
    greeting = greetings[Math.floor(Math.random() * greetings.length)]
    addMessage(greeting, "system");
    talk(greeting);
};

document.onkeydown = (e) => {
    if (e.keyCode == 32) {
        speech();
    }
}
speech();
// setInterval(() => {
//     speech();
// }, 7000);
