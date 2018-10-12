// This function is for dynamic change of the body
const portClick = document.getElementById('portClick');
const aboutClick = document.getElementById('aboutClick');

portClick.onclick = (event) => {
    openCity(event, 'Portfolio')
}

aboutClick.onclick = (e) => {
    openCity(event, 'About')
}

function openCity(evt, elem) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(elem).style.display = "block";
    evt.currentTarget.className += " active";
}
