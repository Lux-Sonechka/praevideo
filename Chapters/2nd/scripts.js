function play_button() {
    var button_play = document.getElementById('play-button')
    var song = document.getElementById('song')

    if (song.duration > 0 && !song.paused) {

        song.pause()
    
    } else {
    
        song.play()
    
    }

}
function cellphone_button() {
    var cellphone = document.getElementById('cellphone-content')

    document.getElementById('audio-container').style.display = 'none';
    document.getElementById('browser-icon').style.display = 'block'
    cellphone.style.backgroundColor = "transparent"
    cellphone.style.backgroundImage = 'url(./bg/hell.jpg)'
}
function browser() {
    window.location.replace('https://lux-sonechka.github.io/praevideo/Secrets/index.html')
}