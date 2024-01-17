// Mobile Menu
const  hamburger = document.querySelector(".hamburger");
const  navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");   
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// GET API REQUEST
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://3nhh6o7bfnpjiuuuky6u5aaw2i0yhygd.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` And this page has ${data} Views!`;
}

updateCounter();