const hamburger = document.querySelector(".bars");
const sideMenu =document.querySelector(".nav-links");
const xmark = document.querySelector(".x");
const links = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", (e)=>{
    sideMenu.classList.toggle("active");
    xmark.classList.toggle("active");
});
xmark.addEventListener("click", (e)=>{
    sideMenu.classList.remove("active");
    xmark.classList.remove("active");
})
links.forEach(n=> n.addEventListener("click", (e)=>{
    sideMenu.classList.remove("active");
    xmark.classList.remove("active");
}));