var modal;
var btn;
var span;

function OnStart() {
    // Get the modal
    modal = document.getElementById("myModal");

    // Get the button that opens the modal
    btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close");
    modal.style.display = "block";

      
    var choose = Math.floor(Math.random() * 5)

    switch (choose) {
        case 0:
            var phrase_element = document.getElementById("label-phrase").innerHTML = "Fehu uruz þrisaz ansuz raidho kenaz gebo wunjo"
            break;
        case 1:
            var phrase_element = document.getElementById("label-phrase").innerHTML = "Fehu uruz þrisaz ansuz raidho kenaz gebo wunjo"
            break;

        case 2:
            var phrase_element = document.getElementById("label-phrase").innerHTML = "Redana gaumiz"
            break;
        case 3:
            var phrase_element = document.getElementById("label-phrase").innerHTML = "Galda sokna jah laru runoz"
            break;
        case 4:
            var phrase_element = document.getElementById("label-phrase").innerHTML = "Waro sahwaz eino augo hausjandiz"
            break;
        case 5:
            var phrase_element = document.getElementById("label-phrase").innerHTML = "Hwazuh rediz þat?"
            break;
    }
}
function RedirectWikiSlogan() {
    window.open("https://en.wikipedia.org/wiki/Sun_cross");
}
function Red_Home() {
    window.alert("Aren't you at home already?")
}
function Red_Slogan() {
    window.open('https://www.latin-is-simple.com/en/vocabulary/search/?q=praevisio')
}
function Red_About() {
    //window.location.replace("about.html")
    window.alert('New about page coming soon! UwU')
}



// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
function close_popup() {
  modal.style.display = "none";
  document.getElementById('song-unfamiliar').play()  
}
function close_chapter() {
    document.getElementById('Modal-chapter').style.display = "none";
  }
  function close_about() {
    document.getElementById('Modal-about').style.display = "none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function open_chapter() {
    document.getElementById('Modal-chapter').style.display = "block";
}
function chapter_1() {
    const new_window = window.open()
    new_window.location.href = "Chapters/1st/chapter1.html"
}
function chapter_2() {
    const new_window = window.open()
    new_window.location.href = "Chapters/2nd/chapter2.html"
}
function chapter_3() {
    const new_window = window.open()
    new_window.location.href = "Chapters/3rd/chapter3.html"
}