let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// Create a audio Element
let track = document.createElement('audio');

// All songs list

let All_song = [
    {
        name: "first song",
        path: "music/song1.mp3",
        img: "img/img1.jpg",
        singer: "1"
    },
    {
        name: "Unstoppable",
        path: "music/song2.mp3",
        img: "img/img2.jpg",
        singer: "2"
    }
];

// All function

// Function load the track
function load_track(index_no) {
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(ranger_slider, 1000)
}

load_track(index_no);

//checking the song is playing or not

function justplay() {
    if(playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}

// Play song
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

// Pause song
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

// next soung
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

// previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();        
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playing_song();
    }
}

// change volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
    if (recent_volume.value > 40) {
        alert(`Volume esta em ${recent_volume.value} pode causar perda auditiva \n Volume padrão é de 50`);
    }
}

// change slider position
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function ranger_slider() {
    let position = 0;

    // Update slider position
    if(!isNaN(track.duration)) {
        position = track.currentTime * (100/ track.duration);
        slider.value.position;
    }
}