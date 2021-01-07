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

function goToHome(id){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    document.getElementById("Logo").classList.remove("inactiveLink");
    $('html,body').animate({scrollTop: $("#home").offset().top},'slow');
}
function goToBio(id){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    document.getElementById("Logo").classList.remove("inactiveLink");
    $('html,body').animate({scrollTop: $("#bio").offset().top-30},'slow');
}
function goToProjects(id){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    document.getElementById("Logo").classList.remove("inactiveLink");
    $('html,body').animate({scrollTop: $("#projects").offset().top},'slow');
}
function goToBlog(id){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    document.getElementById("Logo").classList.remove("inactiveLink");
    $('html,body').animate({scrollTop: $("#blog").offset().top},'slow');
}