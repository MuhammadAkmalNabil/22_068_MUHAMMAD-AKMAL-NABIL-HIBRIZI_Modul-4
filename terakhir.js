// const hamburger =document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-item");
// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// });

// function menubar() {
//     document.getElementById(".hamburger").classList.toggle("icon");
//     document.getElementById("nav-menu").classList.toggle("change");
// }
window.setTimeout("waktu()",1000);
function waktu() {
    var waktu = new Date();
    setTimeout("waktu()",1000);
    document.getElementById("jam").innerHTML = waktu.getHours();
    document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
}

// function scrolling(){
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// }

let mybutton = document.getElementById("scroll-Top");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrolling() {
  const scrolloptions = {
    top: 0,
    behavior: "smooth"
  };
  window.scrollTo(scrolloptions);
}

mybutton.addEventListener("click", scrollToTop);


// let changIcon = function(icon){
//     icon.classList.toggle('bi-x-lg');
// }

// const hamburger =document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// });