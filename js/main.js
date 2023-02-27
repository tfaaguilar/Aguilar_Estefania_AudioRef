// collect all of the album covers into a variable
let albumCovers = document.querySelectorAll("#album-art img"),
    theAudioEl = document.querySelector('audio'),
    playButton = document.querySelector('#playButton'),
    pauseButton = document.querySelector('#pauseButton'),
    rewindButton = document.querySelector('#rewindButton'),
    volSlider = document.querySelector('#volumeControl');


//load the audio source
function loadAudio(){
    let currentSrc = `audio/${this.dataset.trackref}.mp3`; 
    // set the new audio source
    theAudioEl.src = currentSrc;
    // load the new audio source 
    theAudioEl.load();
    //play the new audio source
    playAudio();
}

// tell the audio element to play
function playAudio(){ theAudioEl.play();}
function restartAudio() { theAudioEl.currentTime = 0; }
function pauseAudio() { theAudioEl.pause();}

function setVolume() {
    //get the numeric value of volume
    console.log(this.value);

    theAudioEl.volume = this.value/100;
}

// addevent handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling for the custom controls
playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
rewindButton.addEventListener('click', restartAudio);

volSlider.addEventListener('change', setVolume);

