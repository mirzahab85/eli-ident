const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open');
}

)

const container_scrolldown = document.querySelector('.container_scrolldown');
window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100) {
        container_scrolldown.classList.add('active');
    }else {
        container_scrolldown.classList.remove('active');
    }
}

var bac=document.querySelector("button");
    /* Added the below line because default output of 
       `document.body.style.background` is "" . Therefore we 
        need to initialize it first .
    */
    document.body.style.background="white"; 
    bac.addEventListener("click", function(){
    if (document.body.style.background=="white"){
        document.body.style.background="purple";
    }else if(document.body.style.background=="purple"){
        document.body.style.background="white";
    }

    });