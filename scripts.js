function OnStart() {
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
    window.location.replace("index.html")
}
function Red_Slogan() {
    window.location.replace('https://www.bing.com/search?q=what+does+"praevisio"+mean%3F&pc=0OVP&ptag=C999A354F7A8C3A&form=PCF101&conlogo=CT3210127')
}