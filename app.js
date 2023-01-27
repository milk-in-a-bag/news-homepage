const hamburger = document.querySelector(".bars");
const sideMenu =document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", (e)=>{
    sideMenu.classList.toggle("active");
})

links.forEach(n=> n.addEventListener("click", (e)=>{
    sideMenu.classList.remove("active");
}));