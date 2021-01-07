window.addEventListener('scroll', function(event){
    if (window.pageYOffset+window.innerHeight >= document.getElementById("bio").offsetTop+100) {
        document.getElementById("contact").classList.remove("unstick");
    } else {
        document.getElementById("contact").classList.add("unstick");
    }
    if(window.pageYOffset >= 0){
        $(".menuPage").removeClass("activePage");
        var activePage = document.getElementById("Home");
        activePage.classList.add("activePage");
    }
    if(window.pageYOffset > document.getElementById("bio").offsetTop - 250) {
        $(".menuPage").removeClass("activePage");
        var activePage = document.getElementById("Bio");
        activePage.classList.add("activePage");
    }
    if(window.pageYOffset > document.getElementById("projects").offsetTop - 250) {
        $(".menuPage").removeClass("activePage");
        var activePage = document.getElementById("Projects");
        activePage.classList.add("activePage");
    }
    if(window.pageYOffset > document.getElementById("blog").offsetTop - 300) {
        console.log("yes");
        $(".menuPage").removeClass("activePage");
        var activePage = document.getElementById("Blog");
        activePage.classList.add("activePage");
    }
  });

function projectArrow(id) {
    var x = document.getElementById("arrowProject");
    if (x.className == "fas fa-chevron-down arrow") {
        x.classList.add("flip");
    } else {
        x.className = "fas fa-chevron-down arrow";
    }
    var p = document.querySelectorAll(".hideProject");
    var q = document.querySelectorAll(".unhideProject");
    var j;
    for (j = 0; j < p.length; j++) {
        p[j].className = "col-md-6 col-lg-6 unhideProject";
    }
    var k;
    for (k = 0; k < q.length; k++) {
        q[k].className = "col-md-6 col-lg-6 hideProject";
    }
    if (q.length > 0) {
        $('html,body').animate({scrollTop: $("#projects").offset().top},'fast'); 
    }
}
  
function postArrow(id) {
    var x = document.getElementById("arrowPost");
    if (x.className == "fas fa-chevron-down arrow") {
        x.classList.add("flip");
    } else {
        x.className = "fas fa-chevron-down arrow";
    }
    var p = document.querySelectorAll(".hidePost");
    var q = document.querySelectorAll(".unhidePost");
    var j;
    for (j = 0; j < p.length; j++) {
        p[j].className = "col-md-6 col-lg-6 unhidePost";
    }
    var k;
    for (k = 0; k < q.length; k++) {
        q[k].className = "col-md-6 col-lg-6 hidePost";
    }
    if (q.length > 0) {
        $('html,body').animate({scrollTop: $("#blog").offset().top},'fast'); 
    }
}