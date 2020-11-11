
// If album play button is clicked, music will play, if clicked again the music will pause. //
const playmusic = document.querySelectorAll(".playalbum");
const music = document.querySelectorAll("audio");

var isPlaying = true;

playmusic.forEach((play, index) =>{
    play.addEventListener("click", function(){
        if(!isPlaying){
            isPlaying = true;
            music[index].play();
        } else {
            isPlaying = false;
            music[index].pause();
        }
    });
});

// Playbar button //
// 1. Play button //
const playMusic = document.querySelectorAll(".play");


// if another song is clicked when a song is already playing, it stops and the new song plays //

// for progressbar to display song duration //
const audioDuration = document.querySelectorAll("audio").duration;
const progressLine = document.getElementById("line");
const progressCircle = document.getElementById("circle");
const progressBar = document.querySelectorAll(".progressbar");


