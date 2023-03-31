// xử lý hiện - ẩn cho thanh navigation

var openNav = document.querySelector(".open-nav");
var closeNav = document.querySelector(".close-nav");
var navBar = document.querySelector("#navBar");

openNav.addEventListener("click", function () {
    navBar.style.opacity = "1";
    navBar.style.visibility = "visible";
    openNav.style.display = "none";
    closeNav.style.display = "block";
});
closeNav.addEventListener("click", function () {
    navBar.style.opacity = "0";
    navBar.style.visibility = "hidden";
    openNav.style.display = "block";
    closeNav.style.display = "none";
});

