//for burger btn===============================================================

let burger = document.getElementById("bug")

burger.addEventListener("click", () => {
    let ul = document.getElementById("nv_ul")
    // ul.setAttribute("display", "none");


    if (ul.style.display === "none") {
        ul.style.display = "flex"
        console.log("true");

    } else {
        ul.style.display = "none"
        console.log("false");
    }
})



const burgerm = document.getElementById("burgerBtn");
const back = document.getElementById("back");
const mobileNav = document.getElementById("mobileNav");

burgerm.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

back.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

// optional: close when clicking a link
document.querySelectorAll(".mobile_nav a").forEach(link => {
    link.addEventListener("click", () => mobileNav.classList.remove("active"));
});