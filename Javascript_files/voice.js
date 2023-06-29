/*
Author: Goh Rui Zhuo
Date:   07/25/2022

Filename:voice.js

*/
//Add the voice assitant 
const btn = document.querySelector('.talk');
//create the pitch
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}
//load
window.addEventListener('load', () => {
    speak("Welcome");
})


//putting the methods into a class 
class voiceAssistant {
    constructor(hello = ['hi', 'hello', 'hey', 'hei'],moto=['moto','value','values','motto'], replies = { grettings: ['Hi, How can I help you ?', 'Hello, welcome, how may I help you?', 'Welcome, how can I help you?'] }, main = ['home','index','main'],info = ['infomation','profile','info','who'], about = ['about', 'skills', 'expertise', 'strengths'], project = ['project','projects','tryout','experience'], feedback = ['forms', 'feedback', 'rating','suggestion']) {
        this.hello = hello
        this.replies = replies
        this.info = info
        this.about = about
        this.project = project
        this.main = main
        this.moto = moto
    }
    speakThis(message) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = "I did not understand what you said please try again";
        console.log(message)
        if (checkHi(message) == true) {
            var finalText = this.replies.grettings[Math.floor(Math.random() * this.replies.grettings.length)]
            speech.text = finalText;
        }

        else if (message.includes('morning')) {
            var date = new Date()
            var time = date.toLocaleTimeString();

            console.log(time)
            if (time.includes("PM")) {
                var finalText = "Good evening";
                speech.text = finalText;
            }
            else {
                var finalText = "Good morning";
                speech.text = finalText;
            }

        }
        else if (message.includes('time')) {
            var time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
            var finalText = time;
            speech.text = finalText;
        }
        else if (message.includes('name')) {
            var finalText = "My name is Elpha";
            speech.text = finalText;
        }

        else if (message.includes('open google')) {
            window.open("https://google.com", "_blank");
            var finalText = "Opening Google";
            speech.text = finalText;
        }
        else if (message.includes('open instagram')) {
            window.open("https://instagram.com", "_blank");
            var finalText = "Opening instagram";
            speech.text = finalText;
        }
        else if (checkIndex(message) == true) {
            window.open("index.html")
            var finalText = "Here's my index page"
            speech.text = finalText;
        }
        else if (checkMoto(message) == true) {
            window.open("#cube")
            var finalText = "Here's my moto section"
            speech.text = finalText;
        }
        else if (checkInfo(message) == true) {
            window.open("#first")
            var finalText = "Here's my introduction"
            speech.text = finalText;
        }
        else if (checkAbout(message) == true) {
            window.open("#second")
            var finalText = "Here's my about me section"
            speech.text = finalText;
        }
        else if (checkProject(message) == true) {
            window.open("#third")
            var finalText = "Here's my projects section"
            speech.text = finalText;
        }
        else if (message.includes('who am i')) {
            var finalText = "I am Rui Zhuo, an aspiring computing student"
            speech.text = finalText;
        }
        else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            var finalText = "I found some information for " + message + " on google";
            speech.text = finalText;
        }
        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1.5;
        window.speechSynthesis.speak(speech);
    }
}
//creating a checklist base on the array in the class
var voice = new voiceAssistant()
var hello = voice.hello
function checkHi(hey) {
    for (var i = 0; i < hello.length; i++) {
        if (hey.includes(hello[i])) {
            return true
        }
    }
    return false
}

var motos = voice.moto
function checkMoto(moto) {
    for (var i = 0; i < motos.length; i++) {
        if (moto.includes(motos[i])) {
            return true
        }
    }
    return false
}

var infos = voice.info
function checkInfo(info) {
    for (var i = 0; i < infos.length; i++) {
        if (info.includes(infos[i])) {
            return true
        }

    }
    return false
}
var abouts = voice.about
function checkAbout(about) {
    for (var i = 0; i < abouts.length; i++) {
        if (about.includes(abouts[i])) {
            return true
        }
    }
    return false
}
var projects = voice.project
function checkProject(project) {
    for (var i = 0; i < projects.length; i++) {
        if (project.includes(projects[i])) {
            return true
        }
    }
    return false
}

var mains = voice.main
function checkIndex(main) {
    for (var i = 0; i < mains.length; i++) {
        if (main.includes(mains[i])) {
            return true
        }
    }
    return false
}




//call the speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice.speakThis(transcript.toLowerCase());
}


//create the click event
var isStarted = false
btn.onclick = async () => {
    if (!isStarted) {
        //Start assistant
        recognition.start();
    } else {
        //Stop assistant
        recognition.stopListening();
    }
};