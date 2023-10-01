//Semester 1 Assignment
//Delightful Departure Funeral Website

//Delightful Departure Goods Page
//Author: Melvin Wong Ka Kian
////Date: 29 September 2023
//Filename: christianService.js

window.onload= function(){
    const audioArr=[{"path":"/medias/audios/melvin/audiochristian/laurence.mp3","name":"Laurence, the First Vicar"}, {"path":"/medias/audios/melvin/audiochristian/ultrakill.mp3","name":"He Is The Light In My Darkness - Heaven Pierce Her"}, {"path":"/medias/audios/melvin/audiochristian/ludwig.mp3","name":"Ludwig, the Accursed and the Holy Blade"}];
    let selectedAudio=Math.floor(Math.random()*audioArr.length);
    document.getElementById("autoplay-title").innerHTML=audioArr[selectedAudio].name;
    document.getElementById("autoplay-audio").setAttribute("src",audioArr[selectedAudio].path); 
}