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

});


/* */
function mamaAudio() {
    console.log("you clicked the mama button");
}

function emilyAudio() {
    console.log("you clicked the emily button");
}

function dannaAudio() {
    console.log("you clicked the danna button");
}