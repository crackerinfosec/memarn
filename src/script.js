// Set initial paragraph text
document.getElementById("parag").innerHTML = "My First JS code";

// Handle Get Started (btn) click

document.getElementById("btn").addEventListener("click", function() {
    window.location.href = "/src/about.html";
  });
  document.getElementById("btn2").scrollIntoView({ behavior: "smooth" });
    
// document.getElementById("btn").onclick = function (btn) {
//     return btn;
//    document.getElementById("btn").onclick = function () {
//     document.getElementById("btn2").scrollIntoView({ behavior: "smooth" });
// };


// Add two numbers (not currently used in code)
function add(a, b) {
    return a + b;
}
function remove(a, b) {
    return a - b;
}

// Home button click handler
document.getElementById("home").onclick = function () {
    let x = 5;
    console.log(x);
};

// Second Get Started button click handler
document.getElementById("btn2").onclick = function () {
    alert("Hello");
    console.log("Hello");
};

// Style elements
document.querySelector("h1").style.color = "lightgreen";
const span = document.querySelector("span");
span.style.color = "violet";
span.style.fontStyle = "italic";

// DOM selections (if used later)
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo h1');
const navLinks = document.querySelector('.nav-links');
const homeLink = document.querySelector('.nav-links li:nth-child(1) a');
const aboutLink = document.querySelector('.nav-links li:nth-child(2) a');
const contactLink = document.querySelector('.nav-links li:nth-child(3) a');
const homeSection = document.querySelector('#home');
const homeParagraph = document.querySelector('#parag');
const getStartedBtn1 = document.querySelector('#btn');
const platformSection = document.querySelector('#platform');
const getStartedBtn2 = document.querySelector('#btn2');

