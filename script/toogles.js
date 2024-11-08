const showSideBar = document.getElementById("show-side-bar")
const hideSideBar = document.getElementById("hide-side-bar")
const sideBar  = document.getElementById("side-bar")

showSideBar.addEventListener("click", () => {
    sideBar.style.display = "flex"
});

hideSideBar.addEventListener("click", () => {
    sideBar.style.display = "none"
});