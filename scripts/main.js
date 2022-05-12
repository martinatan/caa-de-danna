/*************
 * 
 * JS for Global Elements
 *
 * ***********/

console.log("hello world");

/*
* Add event listeners that play sound to specific buttons
*/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".mama-audio").addEventListener("click", mamaAudio);
    document.querySelector(".emily-audio").addEventListener("click", emilyAudio);
    document.querySelector(".danna-audio").addEventListener("click", dannaAudio);

    document.querySelector(".me-gusta-audio").addEventListener("click", meGustaAudio);
    document.querySelector(".aplauso-audio").addEventListener("click", aplausoAudio);
    document.querySelector(".no-me-gusta-audio").addEventListener("click", noMeGustaAudio);
});

/*
* Corresponding event functions for each button are below
*/
function mamaAudio() {
    var sound = new Audio('assets/audio/nombre_mama.wav');
  sound.play();
}

function emilyAudio() {
      var sound = new Audio('assets/audio/nombre_emily.wav');
    sound.play();
}

function dannaAudio() {
      var sound = new Audio('assets/audio/nombre_danna.wav');
    sound.play();
}

function meGustaAudio() {
      var sound = new Audio('assets/audio/me_gusta.wav');
    sound.play();
}

function aplausoAudio() {
      var sound = new Audio('assets/audio/aplausos.wav');
    sound.play();
}

function noMeGustaAudio() {
      var sound = new Audio('assets/audio/no_me_gusta.wav');
    sound.play();
}