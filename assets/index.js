import MediaPlayer from './MediaPlayer.js'
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({ el: video });

//GlobalEventHandler and addEventListener
button.onclick = () => player.togglePlay();
console.log(video);