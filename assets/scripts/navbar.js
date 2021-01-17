function hamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("Logo").classList.add("inactiveLink");
    } else {
        x.className = "topnav";
        document.getElementById("Logo").classList.remove("inactiveLink");
    }
}

function goTo(id){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    document.getElementById("Logo").classList.remove("inactiveLink");
    if (id == "#bio") {
        $('html,body').animate({scrollTop: $(id).offset().top-30},'slow');
    } else {
        $('html,body').animate({scrollTop: $(id).offset().top},'slow');
    }
}