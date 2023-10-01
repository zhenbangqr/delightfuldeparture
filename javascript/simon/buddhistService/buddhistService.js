//Semester 1 Assignment
//Delightful Departure Funeral Website

//Delightful Departure Goods Page
//Author: Melvin Wong Ka Kian
////Date: 29 September 2023
//Filename: buddhistService.js

window.onload= function(){
    const audioArr=[{"path":"/medias/audios/simon/audiobuddhist/DaBeiZhou.mp3","name":"Da Bei Zhou"}, {"path":"/medias/audios/simon/audiobuddhist/DJDaBeiZHou.mp3","name":"DJ Wei Wei - Da Bei Zhou"}, {"path":"/medias/audios/simon/audiobuddhist/HeartSutra.mp3","name":"Heart Sutra"}];
    let selectedAudio=Math.floor(Math.random()*audioArr.length);
    document.getElementById("autoplay-title").innerHTML=audioArr[selectedAudio].name;
    document.getElementById("autoplay-audio").setAttribute("src",audioArr[selectedAudio].path); 
}