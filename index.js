let mobileMenu = document.querySelector(".header_ul");
let burgerIcon = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-xmark");

burgerIcon.addEventListener("click", ()=>{
    mobileMenu.classList.add("show");
    burgerIcon.style.display = "none";
    xMark.style.display = "block";
})

xMark.addEventListener("click", ()=>{
    mobileMenu.classList.remove("show");
    burgerIcon.style.display = "block";
    xMark.style.display = "none";
})

